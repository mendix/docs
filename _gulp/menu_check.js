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

const menu_indicator = cyan("[MENU_CHECK]");

const readJSON = files => Promise.all(files.map(file => helpers.readFile(file).then(content => {
  let json;
  try {
    json = JSON.parse(content);
    return json;
  } catch (e) {
    console.log(e);
    throw new Error(`${cyan(file)}: ${red(e)}`);
  }
})));
const checkJSON = jsonArr => Promise.all(jsonArr.map(jsonFile => parseAndCheck(jsonFile)))

const parseAndCheck = menuJSON => new Promise((resolve, reject) => {
  const categories = menuJSON.categories !== null ? menuJSON.categories.map(cat => cat.toLowerCase()) : [],
        categoriesOrig = menuJSON.categories,
        pages = menuJSON.pages;

  _.forEach(pages, page => {
    const category = page.c;
    const parent = page.p;
    const url = page.u;
    const title = page.t;
    const id = page.i;
    if (category && categories.indexOf(category.toLowerCase()) === -1) {
      gutil.log(`${menu_indicator} ${white("CATEGORY ")} page: ${cyan(url)} has category ${cyan(category)} which does not exist`)
    }
    if (parent && _.findIndex(pages, p => p.i.toLowerCase() === parent.toLowerCase() && p.d.indexOf(page.d) !== -1) === -1) {
      gutil.log(`${menu_indicator} ${yellow("PARENT   ")} page: ${cyan(url)} has parent ${cyan(parent)} which does not exist`)
    }
    if (!category && !parent && categoriesOrig.indexOf(title) === -1 && _.compact(url.split('/')).length > 1) {
      gutil.log(`${menu_indicator} ${red("MISSING  ")} page: ${cyan(url)} has no category/parent, but is also not a category. Please check the page!`)
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
      gutil.log(`${menu_indicator} ${red("ERROR  ")} ${err}`);
      gutil.log(`${menu_indicator} ${red("ERROR  ")} It seems one of the JSON files cannot be read. Might be a comma left somewhere? Please check the files in ${cyan('/json/')}`);
      cb(true);
    })
}

module.exports = {
  check: checkMenus
};
