const helpers = require('./helpers');
const gulpErr = helpers.gulpErr;
const fs = require('fs');
const recursive = require('recursive-readdir');
const Promise = require('bluebird');
const gutil = require('gulp-util');
const shell = require('shelljs');
const _ = require('lodash');

const cyan = str => gutil.colors.cyan(str);
const yellow = str => gutil.colors.yellow(str);
const red = str => gutil.colors.red(str);
const white = str => gutil.colors.white(str);

const menu_indicator = cyan("[MENU]");

const readJSON = files => Promise.all(files.map(file => helpers.readFile(file).then(content => JSON.parse(content))));
const checkJSON = jsonArr => Promise.all(jsonArr.map(jsonFile => parseAndCheck(jsonFile)))

const parseAndCheck = menuJSON => new Promise((resolve, reject) => {
  const categories = menuJSON.categories.map(cat => cat.toLowerCase()),
        categoriesOrig = menuJSON.categories,
        pages = menuJSON.pages;

  _.forEach(pages, page => {
    if (page.category && categories.indexOf(page.category.toLowerCase()) === -1) {
      gutil.log(`${menu_indicator} ${white("CATEGORY ")} page: ${cyan(page.url)} has category ${cyan(page.category)} which does not exist`)
    }
    if (page.parent && _.findIndex(pages, p => p.id.toLowerCase() === page.parent.toLowerCase() && p.dir.indexOf(page.dir) !== -1) === -1) {
      gutil.log(`${menu_indicator} ${yellow("PARENT   ")} page: ${cyan(page.url)} has parent ${cyan(page.parent)} which does not exist`)
    }
    if (!page.category && !page.parent && categoriesOrig.indexOf(page.title) === -1 && _.compact(page.url.split('/')).length > 1) {
      gutil.log(`${menu_indicator} ${red("MISSING  ")} page: ${cyan(page.url)} has no category/parent, but is also not a category. Please check the page!`)
    }
  });
  resolve(null);
})

const checkMenus = (path, cb) => {
  helpers
    .getFiles(path, '.json')
    .then(readJSON)
    .then(checkJSON)
    .then(files => {
      cb(false)
    })
    .catch(err => {
      cb(true);
    })
}

module.exports = {
  check: checkMenus
};
