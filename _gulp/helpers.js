const gutil = require('gulp-util');
const path = require('path');
const shell = require('shelljs');
const recursive = require('recursive-readdir');
const Promise = require('bluebird');
const _ = require('lodash');
const request = require('request');
const async = require('async');
const fs = require('fs');
const { normalizeSafe } = require('upath');

const readFile = Promise.promisify(require('fs').readFile);
const writeFile = Promise.promisify(require('fs').writeFile);

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

const getAllFiles = (dir) => new Promise((resolve, reject) => {
  recursive(dir, [], (err, files) => {
    if (err) {
      return reject(err);
    }
    const normalized = files.map(f => normalizeSafe(f));
    resolve(normalized);
  });
});

const getFiles = (dir, ext) => {
  const extName = ext || '.html';
  return new Promise((resolve, reject) => {
    recursive(dir, [], (err, files) => {
      if (err) {
        return reject(err);
      }
      const normalized = files.map(f => normalizeSafe(f));
      resolve(_.filter(normalized, file => path.extname(file) === extName));
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

const writeAssetMappings = (currentFolder) => new Promise((resolve, reject) => {
  const indexMappingHeader = [
    '############################################################################################',
    `# Mendix assets redirect mapping`,
    '############################################################################################',
    ''
  ];
  const indexDest = path.join(currentFolder, './_site/mappings/assets.map');
  const assetsJS = path.join(currentFolder, './data/assetsjs.json');
  const assetsCSS = path.join(currentFolder, './data/assetscss.json');
  touchFile(indexDest);

  let index = [];
  if (isFile(assetsJS)) {
    _.mapKeys(require(assetsJS), (v,k) => {
      index.push({
        from: `~*\\/public\\/js\\/${k.replace('.', '\\\.')}`,
        to: `/public/js/${v}`
      });
    });
  }
  if (isFile(assetsCSS)) {
    _.mapKeys(require(assetsCSS), (v,k) => {
      index.push({
        from: `~*\\/public\\/styles\\/${k.replace('.', '\\\.')}`,
        to: `/public/styles/${v}`
      });
    });
  }

  const indexMapping = _.chain(index)
    .sortBy(file => file.from.length)
    .map(file => `${file.from} ${file.to};`)
    .value();

  let indexes = indexMappingHeader.concat(indexMapping).join('\n');

  fs.writeFile(indexDest, indexes, err => {
    if (err) {
      gutil.log(`Error writing asset mappings: ${err}`)
      reject();
    } else {
      gutil.log(`Asset mappings written to ${indexDest}`);
      resolve();
    }
  });
});


module.exports = {
  gulpErr: throwError,
  touch: touchFile,
  isFile,
  getFiles,
  getAllFiles,
  readHtmlFile,
  readHtmlFiles,
  readFile,
  writeFile,
  getGenerateFiles,
  checkLink,
  checkLinks,
  writeAssetMappings,
  getGenerateFiles
}
