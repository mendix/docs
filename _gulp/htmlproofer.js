// Note: This is work-in-progress and not ready to be used

const url = require('url');
const path = require('path');
const _ = require('lodash');
const gutil = require('gulp-util');
const cheerio = require('cheerio');
const Promise = require('bluebird');
const helpers = require('./helpers');

const verbose = false;
const getSourceFile = filePath => {};

let SOURCEPATH = null,
    EXTERNAL = false;

const parseHtmlFiles = files => {
  return _.map(files, file => {
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
            file.warnings.push(`The src of the image ${gutil.colors.cyan(src)} has a query string. Is that necessary?`);
          }

          if (src.indexOf('/') === 0) {
            file.images.push(src);
          } else {
            file.images.push(path.join(path.dirname(file.basePath), parsed.path))
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
              file.warnings.push(`The link to ${gutil.colors.cyan(href)} has a query string. Is that necessary?`);
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

      $('h1,h2,h3,h4,h5', '.post-content').each((i, el) => {
        var $el = $(el),
            id = $el.attr('id');

        if (id) {
          if (file.anchors.indexOf(id) !== -1) {
            file.warnings.push(`The element with ${gutil.colors.cyan('id="' + id + '"')} has a duplicate ID, this should not happen`);
          } else {
            file.anchors.push(id);
          }
        }
      });
    }
    delete(file.content);
    return file;
  })
};

const getLinkPaths = link => {
  return [
    link,
    `${link}.html`,
    `${link}index.html`,
    `${link}/index.html`
  ];
}

const validateFiles = files => {
  return new Promise((resolve, reject) => {
    resolve(_.map(files, file => {
      // Let's check all the links
      _.forEach(file.links, link => {
        const fullPath = path.join(SOURCEPATH, link),
              fullUrl = url.parse(path.join(SOURCEPATH, link));

        let linkPath = fullUrl.pathname;
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
              file.warnings.push(`Has link to ${gutil.colors.cyan(link)} which does resolve the page ${gutil.colors.cyan(linkedFile.basePath)}, but the anchor ${hashID} does not exist. Please fix this`);
              verbose && console.log(`hash err ${file.path} to ${linkedFile.basePath}`, link);
            }
          }
        } else if (!helpers.isFile(fullPath)) {
          file.errors.push(`Has link to ${gutil.colors.cyan(link)} which would resolve to ${gutil.colors.cyan(linkPath)} (.html | index.html), but it does not exist`);
          verbose && console.log(`err ${file.path}`, link);
        }
      });

      // Let's check all the images
      _.forEach(file.images, image => {
        let fullPath = path.join(SOURCEPATH, image);
        if (!helpers.isFile(fullPath)) {
          file.errors.push(`Has image: ${gutil.colors.cyan(image)} which would resolve to ${gutil.colors.cyan(fullPath)}, but it does not exist`);
          verbose && console.log(`err image ${file.path}`, image);
        }
      });

      // Let's check anchorlinks
      _.forEach(file.anchorLinks, anchorlink => {
        if (file.anchors.indexOf(anchorlink) === -1) {
          //console.log(file.anchors);
          file.warnings.push(`Has anchor link: ${gutil.colors.cyan('#' + anchorlink)}, which does not exist in the page`);
          verbose && console.log(`err anchor ${file.path}`, anchorlink);
        }
      });

      return file;
    }));
  })
};

const checkAllLinks = (links, files) => {
  return helpers
    .checkLinks(links)
    .then(results => {
      return _.map(files, file => {
        if (file.external && file.external.links) {
          file.external.links.forEach(link => {
            const res = _.find(results, result => result.url === link);
            if (res && res.code && res.code !== 200) {
              if (res.code === 404) {
                file.errors.push(`Has link to ${gutil.colors.cyan(link)} which return a ${gutil.colors.red('Page not found')}. Please fix this`);
              } else {
                //file.warnings.push(`Has link to ${gutil.colors.cyan(link)} which return a http code ${gutil.colors.cyan(res.code)}. Please check this`);
              }
            }
          })
        }
        return file;
      })
    })
}

const checkExternal = files => {
  const externalChecked = 0,
        total = _.flatten(_.map(files, file => file.external && file.external.links ? file.external.links : [])),
        uniq = _.uniq(total).filter(url => !/github\.com|localhost|linkedin\.com|facebook\.com|world\.mendix\.com/.test(url)); // we ignore github links for now

  if (!EXTERNAL) {
    return files;
  }
  return checkAllLinks(uniq, files);
}

const checkFiles = (opts) => {
  SOURCEPATH = opts.dir;
  EXTERNAL = opts.external || false;
  console.log(`Testing html in ${SOURCEPATH}`);
  helpers.getFiles(SOURCEPATH)
    .then(helpers.readHtmlFiles)
    .then(parseHtmlFiles)
    .then(validateFiles)
    .then(checkExternal)
    .then(files => {
      const errors = _.filter(files, file => file.errors.length > 0),
            warnings = _.filter(files, file => file.warnings.length > 0);

      console.log(`Finished checking ${files.length} files`);
      console.log('\n======= Errors: ' + errors.length);
      if (errors.length > 0) {
        _.forEach(errors, file => {
          console.log(`\nFile: ${gutil.colors.cyan(file.basePath)} has the following errors:\n`);
          _.forEach(file.errors, error => {
            console.log(gutil.colors.red('   + ') + error);
          })
        })
      }
      console.log('\n======= Warnings: ' + warnings.length);
      if (warnings.length > 0) {
        _.forEach(warnings, file => {
          console.log(`\nFile: ${gutil.colors.cyan(file.basePath)} has the following warnings:\n`);
          _.forEach(file.warnings, error => {
            console.log(gutil.colors.yellow('   + ') + error);
          })
        })
      }
      console.log('')
      if (errors.length === 0) {
        if (files.length === 0) {
          console.log(`It seems there are no files to check. This looks bad`);
          opts.callback(true);
        } else {
          opts.callback(false);
        }
      } else {
        opts.callback(true);
      }
    })
    .catch(err => {
      helpers.gulpErr('htmlproofer', err);
      opts.callback(true);
    });
};

module.exports = {
  check: checkFiles
};
