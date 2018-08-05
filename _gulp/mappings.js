const fs = require('fs');
const { replaceExtension } = require('gulp-util');
const path = require('path');
const shell = require('shelljs');
const Promise = require('bluebird');
const _ = require('lodash');

const commandLineHelpers = require('./helpers/command_line');
const { gulpErr, touch } = require('./helpers');
const CONFIG = require('./config');

const SRC_FILE = CONFIG.PATHS.redirect_mappings.src;
const DEST_FILE = CONFIG.PATHS.redirect_mappings.dest;
const CONTENT_FOLDER = CONFIG.PATHS.redirect_mappings.contentFolder;

const { cyan } = commandLineHelpers.colors;
const log = commandLineHelpers.log('mapping');

const escapeMapping = str => {
  return str
      .replace(/\//g, '\\\/')
      .replace(/\+/g,'\\\+')
      .replace(/\./g,'\\.')
      .replace(/\(/g,'\\(')
      .replace(/\)/g,'\\)')
      //.replace(/'/g,'\'')
      .replace(/ /g,'\\ ')
      .replace(/\:/g,'\\\:')
      .replace(/"/g,'\\\"');
}

const readMappingsFile = (src, type) => new Promise((resolve, reject) => {
  if (type === 'js') {
    let mappings = require(src);
    if (mappings) {
      resolve(mappings);
    } else {
      reject(null);
    }
  } else {
    fs.readFile(src, (err, data) => {
      if (err) {
        gulpErr('write:mappings', `Cannot read ${src}: ${err}`);
        reject(null);
      } else {
        let mappings = null;
        try {
          mappings = JSON.parse(data);
        } catch (e) {
          gulpErr('write:mappings', `Cannot read ${SRC_FILE}: ${e}`);
        }
        if (mappings) {
          resolve(data);
        } else {
          reject(null);
        }
      }
    })
  }
});

const redirect_mappings = () => new Promise((resolve, reject) => {
  touch(DEST_FILE);
  readMappingsFile(SRC_FILE, 'js')
    .then(mappings => {
      if (mappings.redirect) {
        const red = _.reverse(_.sortBy(mappings.redirect, mapping => mapping.from.length));
        let mappingsArr = [
              '############################################################################################',
              `# Mendix redirect mapping, generated on ${CONFIG.BUILDDATE} using \'gulp write:mappings\'`,
              '############################################################################################',
              ''
            ],
            done = [],
            errors = [];

        _.forEach(red, r => {
          if (!r.to || !r.from) {
            return `Error reading ${SRC_FILE}, this is not a correct mapping: ${JSON.stringify(r, null, 4)}`;
          } else {

            if (r.disabled) {
              log(`${r.from} => ${r.to} disabled`);
              return true;
            }
            const to = r.to.trim();
            const from = r.from.trim();
            const isCase = 'undefined' !== typeof r.case ? r.case : false;
            const lastChar = to.substr(-1);
            const mdFile = path.join((CONTENT_FOLDER ? CONTENT_FOLDER : '.'), '.' + to + (lastChar === '/' ? 'index.md' : '.md'));
            const htmlFile = replaceExtension(mdFile, '.html');
            const hash = new Buffer(`${from}-${to}`).toString('base64');
            const caseSensitive = isCase || to.toLowerCase() === from.toLowerCase() || to.toLowerCase().indexOf(from.toLowerCase()) !== -1;

            if (!shell.test('-e', mdFile) && !shell.test('-e', htmlFile)) {
              errors.push(`There is no file for the mapping in mappings.json to: ${cyan(to)}`);
            } else if (to === from) {
              errors.push(`${cyan(to)} is the same as ${cyan(from)}`);
            } else if (done.indexOf(hash) !== -1) {
              errors.push(`You have a duplicate mapping for. ${cyan(from)} => ${cyan(to)}`);
            }
            let mappingStr = '',
                fromStr = (from.substr(-1) === '/' ? from + '?' : from + '/?');

            if (r.exact) {
              mappingsArr.push(`${from} ${to};`);
            } else {
              mappingsArr.push((caseSensitive ? '~' : '~*') + `${escapeMapping(fromStr)} ${to};`);
            }
          }
        });
        const mappingsFile = mappingsArr.join('\n');

        if (errors.length > 0) {
          reject(`You have errors in your mapping ${cyan(SRC_FILE)} file:\n\n${errors.join('\n')}\n`);
        } else if (CONFIG.MAPPING_WRITE) {
          touch(DEST_FILE);

          fs.writeFile(DEST_FILE, mappingsFile, err => {
            if (err) {
              reject(`Error writing mappings: ${err}`)
            } else {
              log(`Mappings written to ${DEST_FILE}`);
              resolve();
            }
          })

        } else {
          resolve();
        }
      } else {
        reject(`No redirects found in ${SRC_FILE}`);
      }
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports = {
  redirect_mappings
}
