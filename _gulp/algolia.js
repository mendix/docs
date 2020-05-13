const path = require('path');
const _ = require('lodash');
const cheerio = require('cheerio');
const Promise = require('bluebird');
const yamlFront = require('yaml-front-matter');
const YAML = require('yamljs');
const algoliasearch = require('algoliasearch');
const moment = require('moment');

const { isFile, getFiles, readHtmlFiles, gulpErr, readSourceFiles } = require('./helpers');
const commandLineHelpers = require('./helpers/command_line');
const log = commandLineHelpers.log('algolia');

let SOURCEFOLDER = null,
    TARGETFOLDER = null,
    SPACES = null;

const DEBUG = !!process.env.DEBUG;

if (DEBUG) {
  log('Debugging enabled, will not push to Algolia');
}

let spacesObj = {};
let indexedNum = 0;
let index = [];

const releaseNotesRegExp = /\/releasenotes\/desktop-modeler\/(\d+)?(\.\d+)?\.?(\*|\d+)$/i;

const getSourceFiles = files => {
  spacesObj = YAML.load(SPACES);
  return new Promise((resolve, reject) => {
    const raw = _.map(files, file => {
      file.basePath = file.path.replace(TARGETFOLDER, '');
      const parsed = path.parse(file.basePath),
            base = path.join(SOURCEFOLDER, parsed.dir, parsed.name),
            dirName = parsed.dir.split('/')[1];

      if (!!dirName && spacesObj[dirName]) {
        file.url = path.join(parsed.dir, parsed.name);
        file.slug = parsed.name;
        file.space = spacesObj[dirName];

        if (isFile(base + '.md')) {
          file.sourcePath = base + '.md';
        } else if (isFile(base + '.html')) {
          file.sourcePath = base + '.html';
        }

        if (file.url && file.url.match(releaseNotesRegExp)) {
          const versionRaw = file.url.replace(releaseNotesRegExp, '$1');
          const num = parseInt(versionRaw, 10);
          if (!isNaN(num)) {
            file.mendix_version = num;
          }
        }

      }

      return file;
    });
    files = _.filter(raw, file => !!file.sourcePath);

    resolve(files);
  })
}

const parseSourceFiles = files =>
  readSourceFiles(files, (file, contents, resolve) => {
    file.source = contents.toString();
    try {
      file.meta = yamlFront.loadFront(contents);
    } catch(e) {
      console.log(e);
    }
    resolve(file);
  });

// ******************** ALGOLIA HELPERS ***********************
// These are copied from https://github.com/algolia/algoliasearch-jekyll/blob/master/lib/record_extractor.rb and rewritten in Javascript
//

const nodeName = node => node && node[0] ? (node[0].tagName || node[0].name).toLowerCase() : null;
const isHeading = node => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(nodeName(node)) !== -1;
const compareHeading = (nodeName1, nodeName2) => parseInt(nodeName1.replace('h', ''), 10) - parseInt(nodeName2.replace('h', ''), 10);
const nodeCssSelector = node => {
  if (node === null) return null;
  if (typeof node.attr('id') !== 'undefined') {
    // Made a change here because ID's in release-notes contain numbers in the ID. Need a proper ID to use in search
    // return '#' + node.attr('id').replace(/-[0-9]+$/,'');
    return '#' + node.attr('id');
  }
  return nodeName(node);
};

const nodeHeadingParent = ($, node, level) => {
  let lvl = level || 'h7';
  if (lvl === 'h7' && isHeading(node)) {
    lvl = nodeName(node);
  }

  let prev = $(node).prev();

  if (!(prev[0] && prev[0].name)) {
    let parent = $(node).parent();
    if (!parent || nodeName(parent) === 'body') return null;
    return nodeHeadingParent($, parent, lvl);
  }

  if (isHeading(prev) && compareHeading(nodeName(prev), lvl) < 0) {
    return prev;
  }

  return nodeHeadingParent($, prev, lvl);
};

const nodeHierarchy = ($, node, state) => {
  let newState = state || { level: 7 };
  const tag_name = nodeName(node);
  let level = parseInt(tag_name.replace('h', ''), 10);

  if (isHeading(node) && level < state.level) {
    newState[tag_name] = node.text();
    newState.level = level;
  }

  const heading = nodeHeadingParent($, node);

  if (heading === null) {
    delete(newState['level'])
    return newState;
  }

  return nodeHierarchy($, heading, newState);
};

const uniqueHierarchy = (data) => {
  const headings = ['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  return _.chain(headings).map(heading => data[heading]).compact().value().join(' > ');
};

const weightHeadingRelevance = data => {
  const title_words = _.chain(['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
    .map(h => data[h])
    .map(s => s ? s.split(/[^\w]+/g) : '')
    .flatten()
    .compact()
    .map(s => s.toLowerCase())
    .uniq()
    .value();
  const text_words = _.uniq(data.text.toLowerCase().split(/[^\w]+/g));
  return _.intersection(title_words, text_words).length;
};

const weightTagName = data => {
  const tagName = data['tag_name'];
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(tagName) !== -1 ? 100 - parseInt(tagName.replace('h', ''), 10) * 10 : 0;
};

const weight = (item, index) => {
  return {
    tag_name: weightTagName(item),
    heading_relevance: weightHeadingRelevance(item),
    position: index
  };
};

// ******************** END ALGOLIA HELPERS ***********************

const parseHtmlFile = file => {
  return new Promise((resolve, reject) => {
    if (file.meta && file.meta.nosearch) {
      log(`Skipping file ${file.basePath}`);
    } else if (file.content && file.meta && file.meta.title) {
      const $ = cheerio.load(file.content);

      const updateTime = $('meta[property="og:updated_time"]').attr('content');
      if (updateTime) {
        const m = moment(updateTime, 'YYYY-DD-MMTHH:mm:ssZZ');
        // @ts-ignore
        if (m._isValid) {
          file.meta.time_stamp = m.unix();
        } else {
          file.meta.time_stamp = null;
        }
      } else {
        file.meta.time_stamp = null;
      }

      $('article').find('.todo').each((i, el) => {
        var $el = $(el);
        $el.remove();
      })

      $('article').find('p,li').each((i, el) => {
        var $el = $(el);
        if (!!$el.text().length && file.space.space) {
          let item = _.merge(
            _.omit(_.clone(file.meta), '__content'), {
            space: file.space.space,
            type : 'page',
            text : $el.text(),
            tag_name : nodeName($el),
            url: file.url,
            slug: file.slug
          }, nodeHierarchy($, $el));

          item.unique_hierarchy = uniqueHierarchy(item);
          item.css_selector = `${nodeName($el)}:nth-of-type(${i + 1})`;
          item.css_selector_parent = nodeCssSelector(nodeHeadingParent($, $el));
          item.weight = weight(item, i);
          item.mendix_version = file.space.mendix_version || null;

          if (typeof file.mendix_version !== 'undefined') {
            item.mendix_version = file.mendix_version;
          }

          index.push(item);

          indexedNum++;
          if (indexedNum % 1000 === 0) {
            log(`Items indexed: ${indexedNum}`);
          }
        }
      });
    }
    delete(file.content);
    resolve(file);
  })
}

const parseHtmlFiles = files => {
  log(`Mapping ${files.length} files`);
  return Promise.all(_.map(files, file => parseHtmlFile(file)));
};

const indexFiles = (opts) => {
  SOURCEFOLDER = opts.source;
  TARGETFOLDER = opts.target;
  SPACES = opts.spacesFile;
  log(`Indexing html in ${TARGETFOLDER}`);
  getFiles(TARGETFOLDER)
    .then(readHtmlFiles)
    .then(getSourceFiles)
    .then(parseSourceFiles)
    .then(parseHtmlFiles)
    .then(() => {
      if (process.env.ALGOLIA_WRITE_KEY && opts.algolia_index && opts.algolia_app_id) {
        log(`Indexed ${index.length} items`);
        if (DEBUG) {
          return;
        }
        const client = algoliasearch(opts.algolia_app_id, process.env.ALGOLIA_WRITE_KEY, {
          timeout: 60000
        });
        const algoliaIndex = client.initIndex(opts.algolia_index);
        log(`Create settings for ${opts.algolia_index}`);
        algoliaIndex.setSettings({
          'distinct': true,
          'attributeForDistinct': 'url',
          'attributesForFaceting': [
            'tags',
            'type',
            'title',
            'space'
          ],
          'attributesToIndex': [
            'title',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'unordered(text)',
            'unordered(tags)'
          ],
          'attributesToRetrieve': null,
          'customRanking': [
            'desc(mendix_version)',
            'desc(time_stamp)',
            'desc(weight.tag_name)',
            'asc(weight.position)'
          ],
          'highlightPreTag': '<span class="algolia__result-highlight">',
          'highlightPostTag': '</span>'
        }, (setIndexErr, setIndexContent) => {
          if (setIndexErr) {
            log(`error creating index settings for: ${opts.algolia_index}`);
            throw setIndexErr;
          } else {
            log(`Settings set for ${opts.algolia_index}, clearing objects`);
            //console.log(setIndexContent);
            algoliaIndex.clearIndex((clearIndexErr, clearIndexContent) => {
              if (clearIndexErr) {
                log(`error clearing objects!`);
                throw clearIndexErr;
              } else {
                log(`${opts.algolia_index}, cleared, adding objects`);
                //log(`${clearIndexContent}`);
                algoliaIndex.addObjects(index, (uploadErr, uploadContents) => {
                  if (uploadErr) {
                    log(`error adding objects!`);
                    throw uploadErr;
                  } else {
                    log(`Objects added to ${opts.algolia_index}`);
                    //console.log(uploadContents);
                    opts.cb();
                  }
                });
              }
            })
          }
        });
      } else {
        log(`Indexed ${indexedNum} items, not doing anything with it right now (ALGOLIA_WRITE_KEY is missing)`);
        opts.cb();
      }
    })
    .catch(err => {
      gulpErr('algolia', err);
      //throw err;
    });
};

module.exports = {
  run: indexFiles
};
