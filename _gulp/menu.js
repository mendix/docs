const helpers = require('./helpers');
const Promise = require('bluebird');
const _ = require('lodash');

const commandLineHelpers = require('./helpers/command_line');

const { cyan, yellow, red, white } = commandLineHelpers.colors;
const log = commandLineHelpers.log('menu');

const parseAndCheck = menuJSON => new Promise((resolve, reject) => {
  const categories = menuJSON.categories.map(cat => cat.toLowerCase()),
        categoriesOrig = menuJSON.categories,
        pages = menuJSON.pages;

  _.forEach(pages, page => {
    if (page.category && categories.indexOf(page.category.toLowerCase()) === -1) {
      log(`${white("CATEGORY ")} page: ${cyan(page.url)} has category ${cyan(page.category)} which does not exist`)
    }
    if (page.parent && _.findIndex(pages, p => p.id.toLowerCase() === page.parent.toLowerCase() && p.dir.indexOf(page.dir) !== -1) === -1) {
      log(`${yellow("PARENT   ")} page: ${cyan(page.url)} has parent ${cyan(page.parent)} which does not exist`)
    }
    if (!page.category && !page.parent && categoriesOrig.indexOf(page.title) === -1 && _.compact(page.url.split('/')).length > 1) {
      log(`${red("MISSING  ")} page: ${cyan(page.url)} has no category/parent, but is also not a category. Please check the page!`)
    }
  });
  resolve(null);
});

const checkJSON = jsonArr => Promise.all(jsonArr.map(jsonFile => parseAndCheck(jsonFile)))

const checkMenus = (path, cb) => {
  helpers
    .getFiles(path, '.json')
    .then(helpers.readJSON)
    .then(checkJSON)
    .then(files => {
      cb(false)
    })
    .catch(err => {
      log(`${red("ERROR  ")} ${err}`);
      log(`${red("ERROR  ")} It seems one of the JSON files cannot be read. Might be a comma left somewhere? Please check the files in ${cyan('/json/menu')}`);
      cb(true);
    })
}

module.exports = {
  check: checkMenus
};
