// Note: This is work-in-progress and not ready to be used

const url = require('url');
const path = require('path');
const fs = require('fs');
const shell = require('shelljs');
const _ = require('lodash');
const cheerio = require('cheerio');
const Promise = require('bluebird');
const moment = require('moment');
const RSS = require('rss');
const { normalizeSafe } = require('upath');

const { isFile, getFiles, readHtmlFiles, gulpErr, checkLinks, getAllFiles } = require('./helpers');
const commandLineHelpers = require('./helpers/command_line');

const { cyan, yellow, red } = commandLineHelpers.colors;

const log = commandLineHelpers.log('html check');
const rssLog = commandLineHelpers.log('rss');
const indexMappingLog = commandLineHelpers.log('index mapping');

const verbose = false;

let totalChecks = 0;
let totalChecked = 0;
let totalValidated = 0;
let lastParsed = 0;
let lastValidated = 0;
let allFiles = [];
let allResidualFiles = [];

let SOURCEPATH = null,
    EXTERNAL = false,
    DELETE_UNUSED_IMAGES = false;

const parseHtmlFile = file => new Promise((resolve, reject) => {

  file.basePath = file.path.replace(SOURCEPATH, '');

  if (file.content) {
    const $ = cheerio.load(file.content);

    // remove obsolete stuff
    $('pre, code').remove();

    $('img').each((i, el) => {
      const src = $(el).attr('src'),
            parsed = url.parse(src);

      if (parsed.hostname) {
        file.external.images.push(src);
      } else {
        if (parsed.query) {
          file.warnings.push(`${yellow('[QS]     ')} The src of the image ${cyan(src)} has a query string. Is that necessary?`);
        }

        if (src.indexOf('/') === 0) {
          file.images.push(src);
        } else {
          file.images.push(path.join(path.dirname(file.basePath), parsed.path))
        }
      }
    });

    $('video').each((i, el) => {
      const src = $(el).attr('src'),
            parsed = url.parse(src);

      if (parsed.hostname) {
        file.external.videos.push(src);
      } else {
        if (parsed.query) {
          file.warnings.push(`${yellow('[QS]    ')} The src of the video ${cyan(src)} has a query string. Is that necessary?`);
        }

        if (src.indexOf('/') === 0) {
          file.videos.push(src);
        } else {
          file.videos.push(path.join(path.dirname(file.basePath), parsed.path))
        }
      }
    });

    $('a').each((i, el) => {
      const $el = $(el),
            href = $el.attr('href'),
            name = $el.attr('name');

      if (name) {
        file.anchors.push(name);
      }

      if (!href || href === "#") { // ignoring mailto and external links for now
        return true;
      } else if (href.indexOf('#') === 0) {
        file.anchorLinks.push(href.trim().replace('#',''));
      } else if (href.indexOf('http') === 0) {
        file.external.links.push(href.trim());
      } else if (href.indexOf('mailto') === 0) {
        file.external.mailto.push(href.trim());
      } else {
        try {
          const parsed = url.parse(href.trim());

          if (parsed.query) {
            file.warnings.push(`${yellow('[QS]     ')} The link to ${cyan(href)} has a query string. Is that necessary?`);
          }

          if (href.indexOf('/') === 0) {
            file.links.push(href);
          } else {
            file.links.push(path.join(path.dirname(file.basePath), href));
          }

        } catch (e) {
          verbose && console.log(`Error while parsing ${file.path} link: ${e}`);
        }
      }
    });

    var lastLevel = null;
    $('h1,h2,h3,h4,h5,h6', '.mx__page__content').each((i, el) => {
      var $el = $(el),
          id = $el.attr('id'),
          tagName = $el[0].name.toLowerCase(),
          level = parseInt(tagName.replace('h', ''), 10);

      const diff = lastLevel !== null ? level - lastLevel : 0;
      if (diff > 1) {
        file.warnings.push(`${red('[TOC]    ')} There is are inconsistencies with the title sorting. Check title with text ${cyan($el.text())}`);
      }
      lastLevel = level;

      if ('h1' === tagName) {
        file.warnings.push(`${red('[TITLE]  ')} There is a title with text ${cyan($el.text())} which is an H1. This cannot happen, as this is the page title`);
      }

      if (id) {
        if (file.anchors.indexOf(id) !== -1) {
          file.warnings.push(`${yellow('[ID]     ')} The element with ${cyan('id="' + id + '"')} has a duplicate ID, this should not happen`);
        } else {
          file.anchors.push(id);
        }
      }
    });

    const todos = $('.todo', '.mx__page__content');
    if (todos.length) {
      file.warnings.push(`${yellow('[TODO]   ')} This file has ${cyan('{{% todo %}}')} elements.`);
    }

    const updateTime = $('meta[property="og:updated_time"]').attr('content');
    file.time = updateTime ? updateTime : null;

    const ogTitle = $('meta[property="og:title"]').attr('content');
    file.seoTitle = ogTitle ? ogTitle : null;
  }
  delete(file.content);

  totalChecked += 1;
  const perc = Math.floor(100 * (totalChecked / totalChecks));
  if (perc % 10 === 0 && perc !== lastParsed) {
    lastParsed = perc;
    log(`Pages parsed: ${perc}%`);
  }

  resolve(file);
});

const parseHtmlFiles = files => {
  totalChecks = files.length;
  totalChecked = 0;
  totalValidated = 0;
  lastParsed = 0;
  lastValidated = 0;

  return Promise.all(_.map(files, file => parseHtmlFile(file)));
}

const getLinkPaths = link => {
  //TODO: GET THIS FROM CONFIG
  if (link.indexOf('/howto7/') !== -1) {
    link = link.replace(/\/howto7\//g, '/howto/');
  }
  if (link.indexOf('/refguide7/') !== -1) {
    link = link.replace(/\/refguide7\//g, '/refguide/');
  }

  const paths = [
    link,
    `${link}.html`,
    `${link}index.html`,
    `${link}/index.html`
  ];
  return paths;
}

const validateFiles = files => Promise.resolve(_.map(files, file => {

  const warningKey = 'warnings';
  const errorKey = 'errors'; // Return this back to 'errors'

  // Let's check all the links
  _.forEach(file.links, link => {
    const fullPath = normalizeSafe(path.join(SOURCEPATH, link)),
          fullUrl = url.parse(path.join(SOURCEPATH, link));

    let linkPath = (fullUrl.protocol !== null ? fullUrl.protocol : "").toUpperCase() + fullUrl.pathname; // TODO: Check how we can fix this in Windows??
    let linkedFile = _.filter(
      _.map(getLinkPaths(linkPath), linkPathPossible => _.find(
        files, findFile => findFile.path === linkPathPossible)
      ), f => !!f
    );

    if (linkedFile && linkedFile.length && linkedFile.length === 1) {
      linkedFile = _.first(linkedFile);
      if (fullUrl.hash) {
        const hashID = fullUrl.hash.replace('#', '');
        if (linkedFile.anchors.indexOf(hashID) === -1) {
          file[warningKey].push(`${yellow('[ANCHOR] ')} ${cyan(link)}, page ${cyan(linkedFile.basePath)} exists, anchor ${cyan(hashID)} does not.`);
          verbose && console.log(`hash err ${file.path} to ${linkedFile.basePath}`, link);
        }
      }
    } else if (!isFile(fullPath)) {
      file[errorKey].push(`${red('[LINK]   ')} ${cyan(link)} does not exist. Path: ${cyan(linkPath)} (.html | index.html) is unresolved`);
      verbose && console.log(`err ${file.path}`, link);
    }
  });

  // Let's check all the images
  _.forEach(file.images, image => {
    let fullPath = path.join(SOURCEPATH, image);
    _.remove(allResidualFiles, n => n === fullPath);
    if (allFiles.indexOf(fullPath) !== -1) {
      return;
    }
    if (!isFile(fullPath)) {
      file[errorKey].push(`${red('[IMAGE]  ')} ${cyan(image)} does not exist. Path: ${cyan(fullPath)} is unresolved`);
      verbose && console.log(`err image ${file.path}`, image);
    }
  });

  // Let's check all the videos
  _.forEach(file.videos, video => {
    let fullPath = path.join(SOURCEPATH, video);
    _.remove(allResidualFiles, n => n === fullPath);
    if (allFiles.indexOf(fullPath) !== -1) {
      return;
    }
    if (!isFile(fullPath)) {
      file[errorKey].push(`${red('[VIDEO]  ')} ${cyan(video)} does not exist. Path: ${cyan(fullPath)} is unresolved`);
      verbose && console.log(`err image ${file.path}`, video);
    }
  });

  // Let's check anchorlinks
  _.forEach(file.anchorLinks, anchorlink => {
    if (file.anchors.indexOf(anchorlink) === -1) {
      //console.log(file.anchors);
      file[warningKey].push(`${yellow('[ANCHOR] ')} ${cyan('#' + anchorlink)} does not exist in page`);
      verbose && console.log(`err anchor ${file.path}`, anchorlink);
    }
  });

  totalValidated += 1;
  const perc = Math.floor(100 * (totalValidated / totalChecks));
  if (perc % 10 === 0 && perc !== lastValidated) {
    lastValidated = perc;
    log(`Pages validated: ${perc}%`);
  }

  return file;
}));

const checkAllLinks = (links, files) => {
  return checkLinks(links)
    .then(results => {
      return _.map(files, file => {
        if (file.external && file.external.links) {
          file.external.links.forEach(link => {
            const res = _.find(results, result => result.url === link);
            if (res && res.code && res.code !== 200) {
              if (res.code === 404) {
                file.errors.push(`Has link to ${cyan(link)} which return a ${red('Page not found')}. Please fix this`);
              } else {
                //file.warnings.push(`Has link to ${cyan(link)} which return a http code ${cyan(res.code)}. Please check this`);
              }
            }
          })
        }
        return file;
      })
    })
}

const writeUpdateFeed = files => new Promise((resolve, reject) => {
  const updateFiles = _.chain(files)
    .filter(file => file.time !== null && !!file.seoTitle)
    .map(file => {
      const picked = _.pick(file, ['basePath', 'time', 'seoTitle']);

      picked.basePath = picked.basePath.replace('index.html', '').replace('.html','');
      picked.seoTitle = picked.seoTitle.replace(' | Mendix Documentation', '');

      const m = moment(picked.time, 'YYYY-DD-MMTHH:mm:ssZZ');
      if (m._isValid) {
        picked.timeStamp = m.unix();
        picked.dateObj = m.toDate();
      } else {
        //console.log('err');
      }
      return picked;
    })
    .sortBy(file => file.timeStamp)
    .reverse()
    .take(20)
    .value();

  const feed = new RSS({
    title: 'Mendix Documentation',
    description: 'Mendix Documentation Updates',
    generator: 'Mendix Documentation generator',
    feed_url: 'https://docs.mendix.com/feed.xml',
    site_url: 'https://docs.mendix.com/'
  });

  _.forEach(updateFiles, update => {
    feed.item({
      title: update.seoTitle,
      description: '',
      url: 'https://' + normalizeSafe(`docs.mendix.com${update.basePath}`),
      date: update.dateObj
    })
  });

  const feedDest = path.join(SOURCEPATH, '/feed.xml');

  fs.writeFile(feedDest, feed.xml({ indent: true }), err => {
    if (err) {
      rssLog(`Error writing /feed.xml: ${red(err)}`)
    } else {
      rssLog(`Update feed written to ${cyan(feedDest)}`);
    }
    resolve(files);
  });
})

const checkExternal = files => {
  const total = _.flatten(_.map(files, file => file.external && file.external.links ? file.external.links : [])),
        uniq = _.uniq(total).filter(url => !/github\.com|localhost|linkedin\.com|facebook\.com|world\.mendix\.com/.test(url)); // we ignore github links for now

  if (!EXTERNAL) {
    return files;
  }
  return checkAllLinks(uniq, files);
}

const checkHTMLFiles = (opts) => getFiles(SOURCEPATH)
  .then(readHtmlFiles)
  .then(parseHtmlFiles)
  .then(validateFiles)
  .then(checkExternal)
  .then(writeUpdateFeed)
  .then(files => {
    const errors = _.filter(files, file => file.errors.length > 0),
          warnings = _.filter(files, file => file.warnings.length > 0);

    log(`Finished checking ${cyan(files.length)} files`);

    console.log('\n======= Errors: ' + errors.length);
    if (errors.length > 0) {
      _.forEach(errors, file => {
        console.log(`\nFile: ${cyan(file.basePath)} has the following errors:\n`);
        _.forEach(file.errors, error => {
          console.log(red('   + ') + error);
        })
      })
    }
    console.log('\n======= Warnings: ' + warnings.length);
    if (warnings.length > 0) {
      _.forEach(warnings, file => {
        console.log(`\nFile: ${cyan(file.basePath)} has the following warnings:\n`);
        _.forEach(file.warnings, error => {
          console.log(yellow('   + ') + error);
        })
      })
    }
    console.log('');

    if (DELETE_UNUSED_IMAGES) {
      const unused = _.filter(allResidualFiles, f => f.indexOf('/attachments/') !== -1 && (f.indexOf('.png') !== -1 || f.indexOf('.jpg') !== -1 || f.indexOf('.jpeg') !== -1 || f.indexOf('.PNG') !== -1 || f.indexOf('.mp4') !== -1));

      _.forEach(unused, file => {
        // This is diry, should be done differently
        const f = file.replace('/_site/', '/content/');
        console.log(`Deleting ${cyan(f)}`);
        shell.rm('-rf', f);
      })
    }

    let indexMappingHeader = [
      '############################################################################################',
      `# Mendix indexes redirect mapping, generated from \'gulp check:html\'`,
      '############################################################################################',
      ''
    ];
    let indexFiles = _.chain(files)
      .filter(file =>
        file.basePath.indexOf('/index.html') !== -1 &&
        file.basePath !== '/index.html' &&
        file.basePath !== '/search/index.html'
      )
      .map(file => { return {
        to: file.basePath.replace(/index\.html/, ''),
        from: file.basePath.replace(/\/index\.html/, '')
      }; })
      .sortBy(file => file.from.length)
      .map(file => `${file.from} ${file.to};`)
      .value();

    let indexes = indexMappingHeader.concat(indexFiles).join('\n');
    const indexDest = path.join(SOURCEPATH, '/mappings/indexes.map');

    fs.writeFile(indexDest, indexes, err => {
      if (err) {
        indexMappingLog(`Error writing index mappings: ${red(err)}`)
        opts.callback(true);
      } else {
        indexMappingLog(`Index mappings written to ${cyan(indexDest)}`);
        if (errors.length === 0) {
          if (files.length === 0) {
            log(red(`It seems there are no files to check. This looks bad`));
            opts.callback(true);
          } else {
            opts.callback(false);
          }
        } else {
          opts.callback(true);
        }
      }
    });
  })
  .catch(err => {
    gulpErr('htmlproofer', err);
    opts.callback(true);
  });

const checkFiles = (opts) => {
  SOURCEPATH = normalizeSafe(opts.dir);
  EXTERNAL = opts.external || false;
  log(`Testing html in ${SOURCEPATH}`);
  getAllFiles(SOURCEPATH)
    .then(files => {
      allFiles = files;
      allResidualFiles = files;
      checkHTMLFiles(opts);
    })
    .catch(err => {
      gulpErr('htmlproofer', err);
      opts.callback(true);
    });
};

module.exports = {
  check: checkFiles
};
