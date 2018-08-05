const helpers = require('./helpers');
const gulpErr = helpers.gulpErr;
const touch = helpers.touch;
const fs = require('fs');
const { replaceExtension } = require('gulp-util');
const path = require('path');
const shell = require('shelljs');
const Promise = require('bluebird');
const _ = require('lodash');

const commandLineHelpers = require('./helpers/command_line');

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
          gulpErr('write:mappings', `Cannot read ${opts.src}: ${e}`);
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

const mappings = (opts) => new Promise((resolve, reject) => {
  helpers.touch(opts.dest);
  readMappingsFile(opts.src, opts.type)
    .then(mappings => {
      if (mappings.redirect) {
        const red = _.reverse(_.sortBy(mappings.redirect, mapping => mapping.from.length));
        let mappingsArr = [
              '############################################################################################',
              `# Mendix redirect mapping, generated on ${opts.buildDate} using \'gulp write:mappings\'`,
              '############################################################################################',
              ''
            ],
            done = [],
            errors = [];

        _.forEach(red, r => {
          if (!r.to || !r.from) {
            return `Error reading ${opts.src}, this is not a correct mapping: ${JSON.stringify(r, null, 4)}`;
          } else {

            if (r.disabled) {
              log(`${r.from} => ${r.to} disabled`);
              return true;
            }
            const to = r.to.trim();
            const from = r.from.trim();
            const isCase = 'undefined' !== typeof r.case ? r.case : false;
            const lastChar = to.substr(-1);
            const mdFile = path.join((opts.contentFolder ? opts.contentFolder : '.'), '.' + to + (lastChar === '/' ? 'index.md' : '.md'));
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
          reject(`You have errors in your mapping ${cyan(opts.src)} file:\n\n${errors.join('\n')}\n`);
        } else if (opts.write) {
          touch(opts.dest);

          fs.writeFile(opts.dest, mappingsFile, err => {
            if (err) {
              reject(`Error writing mappings: ${err}`)
            } else {
              log(`Mappings written to ${opts.dest}`);
              resolve();
            }
          })

        } else {
          resolve();
        }
      } else {
        reject(`No redirects found in ${opts.src}`);
      }
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports = {
  run: mappings
}
