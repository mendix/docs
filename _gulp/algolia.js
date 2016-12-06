const url = require('url');
const path = require('path');
const _ = require('lodash');
const gutil = require('gulp-util');
const cheerio = require('cheerio');
const Promise = require('bluebird');
const helpers = require('./helpers');
const yamlFront = require('yaml-front-matter');
const YAML = require('yamljs');
const algoliasearch = require('algoliasearch');

const pluginID = gutil.colors.cyan('[ALGOLIA]');

let SOURCEFOLDER = null,
    TARGETFOLDER = null,
    SPACES = null;

let spacesObj = {};
let indexedNum = 0;
let index = [];

const getSourceFiles = files => {
  spacesObj = YAML.load(SPACES);
  return new Promise((resolve, reject) => {
    files = _.filter(_.map(files, file => {
      file.basePath = file.path.replace(TARGETFOLDER, '');
      const parsed = path.parse(file.basePath),
            base = path.join(SOURCEFOLDER, parsed.dir, parsed.name),
            dirName = parsed.dir.split('/')[1];

      if (!!dirName && spacesObj[dirName]) {
        file.url = path.join(parsed.dir, parsed.name);
        file.slug = parsed.name;
        file.space = spacesObj[dirName];

        if (helpers.isFile(base + '.md')) {
          file.sourcePath = base + '.md';
        } else if (helpers.isFile(base + '.html')) {
          file.sourcePath = base + '.html';
        }
      }

      return file;
    }), file => !!file.sourcePath);
    //console.log(files);
    resolve(files);
  })
}

const readSourceFiles = files => {
  return Promise.all(_.map(files, file => {
    return new Promise((resolve, reject) => {
      helpers.readFile(file.sourcePath).then(contents => {
        file.source = contents.toString();
        try {
          file.meta = yamlFront.loadFront(contents);
        } catch(e) {
          console.log(e);
        }
        resolve(file);
      }).catch(e => {
        console.log(e);
        resolve(file);
      })
    })
  }))
}

// ******************** ALGOLIA HELPERS ***********************
// These are copied from https://github.com/algolia/algoliasearch-jekyll/blob/master/lib/record_extractor.rb and rewritten in Javascript
//

const nodeName = node => node && node[0] ? (node[0].tagName || node[0].name).toLowerCase() : null;
const isHeading = node => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(nodeName(node)) !== -1;
const compareHeading = (nodeName1, nodeName2) => parseInt(nodeName1.replace('h', ''), 10) - parseInt(nodeName2.replace('h', ''), 10);
const nodeCssSelector = node => {
  if (node === null) return null;
  if (typeof node.attr('id') !== 'undefined') {
    return '#' + node.attr('id').replace(/-[0-9]+$/,'');
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
    if (file.content && file.meta && file.meta.space) {
      const $ = cheerio.load(file.content);

      $('article').find('p').each((i, el) => {
        var $el = $(el);
        if (!!$el.text().length) {
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

          index.push(item);

          indexedNum++;
          if (indexedNum % 1000 === 0) {
            gutil.log(`${pluginID} Items indexed: ${indexedNum}`);
          }
        }
      });
    }
    delete(file.content);
    resolve(file);
  })
}

const parseHtmlFiles = files => {
  gutil.log(`${pluginID} Mapping ${files.length} files`);
  return Promise.all(_.map(files, file => parseHtmlFile(file)));
};

const indexFiles = (opts) => {
  SOURCEFOLDER = opts.source;
  TARGETFOLDER = opts.target;
  SPACES = opts.spacesFile;
  gutil.log(`${pluginID} Indexing html in ${TARGETFOLDER}`);
  helpers.getFiles(TARGETFOLDER)
    .then(helpers.readHtmlFiles)
    .then(getSourceFiles)
    .then(readSourceFiles)
    .then(parseHtmlFiles)
    .then(() => {
      if (process.env.ALGOLIA_WRITE_KEY && opts.algolia_index && opts.algolia_app_id) {
        console.log(`${pluginID} Indexed ${index.length} items`);
        const client = algoliasearch(opts.algolia_app_id, process.env.ALGOLIA_WRITE_KEY);
        const algoliaIndex = client.initIndex(opts.algolia_index);
        console.log(`${pluginID} Create settings for ${opts.algolia_index}`);
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
            'desc(weight.tag_name)',
            'asc(weight.position)'
          ],
          'highlightPreTag': '<span class="algolia__result-highlight">',
          'highlightPostTag': '</span>'
        }, (err, content) => {
          if (err) {
            throw err;
          } else {
            console.log(`${pluginID} Settings set for ${opts.algolia_index}, clearing objects`);
            algoliaIndex.clearIndex((err, contents) => {
              if (err) {
                throw err;
              } else {
                console.log(`${pluginID} ${opts.algolia_index}, cleared, adding objects`);
                algoliaIndex.addObjects(index, (uploadErr, uploadContents) => {
                  if (err) {
                    throw err;
                  } else {
                    console.log(`${pluginID} Objects added to ${opts.algolia_index}`);
                    opts.cb();
                  }
                });
              }
            })
          }
        });
      } else {
        console.log(`${pluginID} Indexed ${indexedNum} items, not doing anything with it right now (ALGOLIA_WRITE_KEY is missing)`);
        opts.cb();
      }
    })
    .catch(err => {
      helpers.gulpErr('algolia', err);
      //throw err;
    });
};

module.exports = {
  run: indexFiles
};
