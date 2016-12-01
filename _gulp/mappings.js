const helpers = require('./helpers');
const gulpErr = helpers.gulpErr;
const touch = helpers.touch;
const fs = require('fs');
const gutil = require('gulp-util');
const shell = require('shelljs');
const _ = require('lodash');

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

const mappings = (opts) => {
  fs.readFile(opts.src, (err, data) => {
    if (err) {
      gulpErr('write:mappings', `Cannot read ${opts.src}`);
    }
    let mappings = null;
    try {
      mappings = JSON.parse(data);
    } catch (e) {
      gulpErr('write:mappings', `Cannot read ${opts.src}: ${e}`);
    }
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
          gulpErr('write:mappings', `Error reading ${opts.src}, this is not a correct mapping: ${JSON.stringify(r, null, 4)}`);
        }
        if (r.disabled) {
          gutil.log(`Mapping ${r.from} => ${r.to} disabled`)
          return true;
        }
        const to = r.to.trim(),
              from = r.from.trim(),
              lastChar = to.substr(-1),
              mdFile = '.' + to + (lastChar === '/' ? 'index.md' : '.md'),
              htmlFile = gutil.replaceExtension(mdFile, '.html'),
              hash = new Buffer(`${from}-${to}`).toString('base64'),
              caseSensitive = to.toLowerCase() === from.toLowerCase();

        if (!shell.test('-e', mdFile) && !shell.test('-e', htmlFile)) {
          errors.push(`There is no file for the mapping in mappings.json to: ${gutil.colors.cyan(to)}`);
        } else if (to === from) {
          errors.push(`${gutil.colors.cyan(to)} is the same as ${gutil.colors.cyan(from)}`);
        } else if (done.indexOf(hash) !== -1) {
          errors.push(`You have a duplicate mapping for. ${gutil.colors.cyan(from)} => ${gutil.colors.cyan(to)}`);
        }
        let mappingStr = '',
            fromStr = (from.substr(-1) === '/' ? from + '?' : from + '/?');

        if (r.exact) {
          mappingsArr.push(`${from} ${to};`);
        } else {
          mappingsArr.push((caseSensitive ? '~' : '~*') + `${escapeMapping(fromStr)} ${to};`);
        }

      });
      const mappingsFile = mappingsArr.join('\n');

      if (errors.length > 0) {
        gulpErr('write:mappings', `You have errors in your mapping ${gutil.colors.cyan(opts.src)} file:\n\n${errors.join('\n')}\n`);
      }

      if (opts.write) {
        touch(opts.src);
        fs.writeFile(opts.dest, mappingsFile, err => {
          if (err) {
            gulpErr('write:mappings', `Error writing ${opts.dest}: ${err}`);
          } else {
            gutil.log(`Mappings written to ${opts.dest}`);
          }
          opts.callback();
        })
      } else {
        opts.callback();
      }
    } else {
      gulpErr('write:mappings', `No redirects found in ${opts.src}`);
    }
  });
};

module.exports = {
  run: mappings
}
