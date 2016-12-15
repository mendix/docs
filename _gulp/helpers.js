const gutil = require('gulp-util');
const path = require('path');
const shell = require('shelljs');
const recursive = require('recursive-readdir');
const Promise = require('bluebird');
const _ = require('lodash');

const readFile = Promise.promisify(require('fs').readFile);

const throwError = (plugin, error) => {
  throw new gutil.PluginError({
    plugin: plugin,
    message: error
  }, { showStack: true });
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


module.exports = {
  gulpErr: throwError,
  touch: touchFile,
  isFile: isFile,
  getFiles: getFiles,
  readHtmlFile: readHtmlFile,
  readHtmlFiles: readHtmlFiles,
  readFile: readFile
}
