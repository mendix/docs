const gutil = require('gulp-util');
const path = require('path');
const shell = require('shelljs');
const recursive = require('recursive-readdir');
const Promise = require('bluebird');
const _ = require('lodash');
const request = require('request');
const async = require('async');

const readFile = Promise.promisify(require('fs').readFile);

const ASYNCLIMIT = 50;
let TESTED = [];
let TOTAL = 0;

const throwError = (plugin, error) => {
  const e = new gutil.PluginError({
    plugin: plugin,
    message: error
  }, { showStack: true });
  gutil.log(e.message);
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

const getFiles = (dir, ext) => {
  const extName = ext || '.html';
  return new Promise((resolve, reject) => {
    recursive(dir, [], (err, files) => {
      if (err) {
        return reject(err);
      }
      resolve(_.filter(files, file => path.extname(file) === extName));
    });
  });
};

const readHtmlFile = filePath => {
  return new Promise((resolve, reject) => {
    readFile(filePath, "utf8").then(content => {
      resolve({
        path: filePath,
        content: content,
        links: [],
        images:[],
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
};

const readHtmlFiles = paths => {
  return Promise.all(_.map(paths, file => readHtmlFile(file)));
};

const checkLink = (url, cb) => {
  request({
    url: url,
    followRedirect: false
  }, (err, response, body) => {
    let res = {
      url: url,
      err: null,
      code: null
    }
    if (err) {
      res.err = err;
    } else {
      res.code = response.statusCode;
    }
    TESTED.push(res);
    if (100 * (TESTED.length / TOTAL) % 10 === 0) {
      console.log(100 * (TESTED.length / TOTAL) + "% TESTED");
    }
    //console.log(TESTED.length, res);
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
  isFile: isFile,
  getFiles: getFiles,
  readHtmlFile: readHtmlFile,
  readHtmlFiles: readHtmlFiles,
  readFile: readFile,
  checkLink: checkLink,
  checkLinks: checkLinks
}
