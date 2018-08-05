const { readFile, getFiles } = require('./helpers');
const Promise = require('bluebird');
const _ = require('lodash');

const commandLineHelpers = require('./helpers/command_line');

const { cyan, red, yellow, white } = commandLineHelpers.colors;
const log = commandLineHelpers.log('menu check');

const readJSON = files => Promise.all(files.map(file => readFile(file).then(content => {
  let json;
  try {
    json = JSON.parse(content);
    return json;
  } catch (e) {
    console.log(e);
    throw new Error(`${cyan(file)}: ${red(e)}`);
  }
})));

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
      log(`${white("CATEGORY ")} page: ${cyan(url)} has category ${cyan(category)} which does not exist`)
    }
    if (parent && _.findIndex(pages, p => p.i.toLowerCase() === parent.toLowerCase() && p.d.indexOf(page.d) !== -1) === -1) {
      log(`${yellow("PARENT   ")} page: ${cyan(url)} has parent ${cyan(parent)} which does not exist`)
    }
    if (!category && !parent && categoriesOrig.indexOf(title) === -1 && _.compact(url.split('/')).length > 1) {
      log(`${red("MISSING  ")} page: ${cyan(url)} has no category/parent, but is also not a category. Please check the page!`)
    }
  });
  resolve(null);
});

const checkJSON = jsonArr => Promise.all(jsonArr.map(jsonFile => parseAndCheck(jsonFile)));

const checkMenus = (path, cb) => {
  getFiles(path, '.json')
    .then(readJSON)
    .then(checkJSON)
    .then(files => {
      cb(false)
    })
    .catch(err => {
      log(`${red("ERROR  ")} ${err}`);
      log(`${red("ERROR  ")} It seems one of the JSON files cannot be read. Might be a comma left somewhere? Please check the files in ${cyan('/json/')}`);
      cb(true);
    })
}

module.exports = {
  check: checkMenus
};
