const fs = require('fs');
const path = require('path');
const recursive = require('recursive-readdir');
const Promise = require('bluebird');
const gutil = require('gulp-util');
const shell = require('shelljs');
const _ = require('lodash');
const yamlFront = require('yaml-front-matter');
const YAML = require('yamljs');
const { normalizeSafe } = require('upath');

const {getGenerateFiles, gulpErr, isFile, readFile, writeFile} = require('./helpers');

let errors = false;

const cyan = str => gutil.colors.cyan(str);
const yellow = str => gutil.colors.yellow(str);
const red = str => gutil.colors.red(str);
const white = str => gutil.colors.white(str);

const menu_indicator = cyan("[MENU_BUILD]");

let SPACES = {};

const getSourceFilesPromise = (opts) => {
  return (files) => {
    SPACES = YAML.load(opts.space);
    return new Promise((resolve, reject) => {
      const raw = _.map(files, p => {
        const file = {
          path: p
        };
        file.basePath = file.path.replace(opts.src, '');
        const parsed = path.parse(file.basePath),
              base = normalizeSafe(path.join(opts.src, parsed.dir, parsed.name)),
              dirName = parsed.dir.split('/')[1];

        if (!!dirName && SPACES[dirName]) {
          file.url = normalizeSafe(path.join(parsed.dir, parsed.name === 'index' ? '/' : parsed.name));
          if (file.url.split('/').length === 3 && parsed.name === 'index') {
            file.main = true;
          }
          file.id = parsed.name;
          file.space = SPACES[dirName].space;
          file.dir = `${parsed.dir}/`;

          if (isFile(base + '.md')) {
            file.sourcePath = base + '.md';
          } else if (isFile(base + '.html')) {
            file.sourcePath = base + '.html';
          }
        } else {
          // console.log(file);
        }

        return file;
      });
      files = _.filter(raw, file => !!file.sourcePath);

      resolve(files);
    })
  };
}


const readSourceFiles = files =>
  Promise.all(_.map(files, file => {
    return new Promise((resolve, reject) => {
      readFile(file.sourcePath).then(contents => {
        let meta = null;
        try {
          meta = yamlFront.loadFront(contents);
        } catch(e) {
          console.log(e);
        }
        if (meta !== null) {
          file.meta = true;
          _.merge(file, _.omit(meta, ['__content', 'space']));
        }
        resolve(file);
      }).catch(e => {
        console.log(e);
        resolve(file);
      })
    })
  }));


const filterAndBindSpace = (files) =>
  _.map(_.keys(SPACES), (spaceKey) => {
    const obj = SPACES[spaceKey];
    obj.filename = `${spaceKey}.json`;
    obj.files = _.filter(files, (file) => file.space === obj.space);
    return obj;
  });

const checkSpaces = (spaceArray) =>
  _.map(spaceArray, (space) => {
    const categories = _.map(space.menu_categories, cat => cat.toLowerCase())
    const files = space.files;
    space.files = _.filter(files, file => {
      if (!file.meta) {
        console.log(`No metadata for file: ${cyan(file.basePath)}, is the block at the top correct?`);
        errors = true;
        return false;
      }
      if (!file.title) {
        gutil.log(`${menu_indicator} Page ${cyan(file.basePath)} does not have a title. ${red('Is the metadata correct? It will be rendered, but not visible in the menu & search')}`);
        errors = true;
        return false;
      }
      if (file.category && !_.find(files, f => f.title === file.category) && categories.indexOf(file.category.toLowerCase()) === -1) {
        gutil.log(`${menu_indicator} File ${cyan(file.basePath)} has category ${cyan(file.category)} which has no file associated to it or is not used in ${cyan('spaces.yml')}`);
        return false;
      }
      if (file.parent && !_.find(files, f => f.url === normalizeSafe(path.join(file.dir, file.parent)))) {
        gutil.log(`${menu_indicator} File ${cyan(file.basePath)} has parent ${cyan(file.parent)} which would resolve to ${cyan(normalizeSafe(path.join(file.dir, file.parent)))}, but this does not exist`);
        return false;
      }
      return true
    })
    return space;
  });

const writeSpace = opts => (space => writeFile(path.join(opts.destination, space.filename), JSON.stringify(space.content)))

const writeSpaces = opts => {
  const keyMap = {
    'title': 't',
    'category': 'c',
    'id': 'i',
    'url': 'u',
    'dir': 'd',
    'parent': 'p',
    'main': 'm',
    'menu_title': 'mt'
  };
  return (spaceArray) => Promise.all(_.map(spaceArray, (space) => {
    const pageObj = {
      filename: space.filename,
      content: {
        categories: space.menu_categories,
        pages: _.map(space.files, file => {
          const f = _.pick(file, ['title', 'category', 'id', 'url', 'dir', 'parent', 'main', 'menu_title']);
          const newObject = {};
          _.keys(f).forEach(k => {
            if (keyMap[k]) {
              newObject[keyMap[k]] = f[k];
            }
          });
          return newObject;
        })
      }
    };
    const writePromise = writeSpace(opts);
    return writePromise(pageObj);
  }));
}


const build = (opts) => new Promise((resolve, reject) => {
  const {src, destination, spaceFile} = opts;
  getGenerateFiles(src)
    .then(getSourceFilesPromise(opts))
    .then(readSourceFiles)
    .then(filterAndBindSpace)
    .then(checkSpaces)
    .then(writeSpaces(opts))
    .then(() => {
      resolve(errors);
    })
    .catch((e) => {
      console.log(e);
      reject(e);
    });
})


module.exports = {
  build
};
