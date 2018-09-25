const { PluginError } = require('gulp-util');
const path = require('path');
const shell = require('shelljs');
const recursive = require('recursive-readdir');
const Promise = require('bluebird');
const _ = require('lodash');
const request = require('request');
const async = require('async');
const fs = require('fs');
const { normalizeSafe } = require('upath');

const commandLineHelpers = require('./command_line');

const { cyan, red } = commandLineHelpers.colors;

const readFile = Promise.promisify(require('fs').readFile);
const writeFile = Promise.promisify(require('fs').writeFile);

const ASYNCLIMIT = 50;
let TESTED = [];
let TOTAL = 0;

const throwError = (plugin, error) => {
  gulpErrorLog = commandLineHelpers.log(`err:${plugin}`);
  const e = new PluginError({
    plugin: plugin,
    message: error
  }, { showStack: true });
  gulpErrorLog(e.message);
}

const isFile = filePath => {
  return shell.test('-f', filePath);
}

const touchFile = filePath => {
  const parsed = path.parse(filePath);
  if (!shell.test('-d', parsed.dir)) {
    shell.mkdir('-p', parsed.dir);
  }
  if (!isFile(filePath)) {
    shell.touch(filePath);
  }
}

const readSourceFiles = (files, cb) =>
  Promise.all(_.map(files, file => {
    return new Promise((resolve, reject) => {
      readFile(file.sourcePath).then(contents => {
        cb(file, contents, resolve)
      }).catch(e => {
        console.log(e);
        resolve(file);
      })
    })
  }));

const getAllFiles = (dir) => new Promise((resolve, reject) => {
  recursive(dir, [], (err, files) => {
    if (err) {
      return reject(err);
    }
    const normalized = files.map(f => normalizeSafe(f));
    resolve(normalized);
  });
});

const getFiles = (dir, ext, ignore = []) => {
  const extName = ext || '.html';
  return new Promise((resolve, reject) => {
    recursive(dir, [], (err, files) => {
      if (err) {
        return reject(err);
      }
      const normalized = files.map(f => normalizeSafe(f));
      resolve(_.filter(normalized, file => path.extname(file) === extName && ignore.indexOf(path.basename(file)) === -1));
    });
  });
};

const getGenerateFiles = (dir) => {
  const extArr = ['.md', '.html'];
  return new Promise((resolve, reject) => {
    recursive(dir, [], (err, files) => {
      if (err) {
        return reject(err);
      }
      const normalized = files.map(f => normalizeSafe(f));
      resolve(
        _.filter(normalized,
           file => path.extname(file) &&
           extArr.indexOf(path.extname(file) !== -1
          )
        )
      );
    });
  });
};

const readJSON = files => Promise.all(files.map(file => readFile(file).then(content => {
  let json;
  try {
    json = JSON.parse(content);
    return json;
  } catch (e) {
    throw new Error(`${cyan(file)}: ${red(e)}`);
  }
})));

const readHtmlFile = filePath => new Promise((resolve, reject) => {
  readFile(filePath, "utf8").then(content => {
    resolve({
      path: filePath,
      content: content,
      links: [],
      images:[],
      videos:[],
      anchors: [],
      anchorLinks: [],
      external: {
        links: [],
        images: [],
        mailto: []
      },
      errors: [],
      warnings: []
    });
  }).catch(reject);
});

const readHtmlFiles = paths => Promise.all(_.map(paths, file => readHtmlFile(file)));

const checkLink = (url, cb) => {
  //console.log(url);
  request({
    url: url,
    followRedirect: true
  }, (err, response, body) => {
    //console.log(url, response ? response.statusCode : 'ERR: ' + err);
    let res = {
      url: url,
      err: null,
      code: null
    }
    if (err) {
      res.err = err;
    } else {
      res.code = response ? response.statusCode : -1;
    }
    TESTED.push(res);
    if (100 * (TESTED.length / TOTAL) % 10 === 0) {
      console.log(100 * (TESTED.length / TOTAL) + "% TESTED");
    }
    cb();
  });
}

const checkLinks = urls => new Promise((resolve, reject) => {
  console.log('checkLinks', urls.length)
  TESTED = [];
  TOTAL = urls.length;
  async.eachLimit(urls, ASYNCLIMIT, checkLink, asyncErr => {
    if (asyncErr) {
      reject(asyncErr);
    } else {
      resolve(TESTED);
    }
  })
});

module.exports = {
  gulpErr: throwError,
  touch: touchFile,
  isFile,
  readJSON,
  getFiles,
  getAllFiles,
  readHtmlFile,
  readHtmlFiles,
  readSourceFiles,
  readFile,
  writeFile,
  getGenerateFiles,
  checkLink,
  checkLinks,
  getGenerateFiles
}
