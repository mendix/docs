const gitBlame = require('git-blame');
const path = require('path');
const _ = require('lodash');
const Promise = require('bluebird');
const recursive = require('recursive-readdir');
const moment = require('moment');
const async = require('async');
const gutil = require('gulp-util');

const git_indicator = gutil.colors.cyan("[GIT-HISTORY]");

const rev = 'HEAD';
const ASYNC_LIMIT = 50;

const getCommits = (gitPath, file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject('Error: filename should be provided');
    } else {
      let commits = [];
      try {
        gitBlame(gitPath, {
          file: file,
          rev: rev
        }).on('data', (type, data) => { // type = 'line' or 'commit'
          if (type === 'commit') {
            commits.push(data);
          }
        }).on('error', err => {
          reject(err);
        }).on('end', () => {
          resolve(commits);
        });
      } catch (e) {
        reject(`Error getting commits for ${gitPath}`);
      }
    }
  })
}

const walkFolder = folder => {
  return new Promise((resolve, reject) => {
    recursive(folder, ['.git', '_site', 'node_modules', 'vendor', '_includes', '_layouts'], (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(_.map(
          _.filter(files, file => (path.extname(file) === '.md' || path.extname(file) === '.html'))
        , file => file.replace(folder + '/', '')));
      }
    });
  });
};

const getLastCommit = (folder, filename) => {
  return new Promise((resolve, reject) => {
    getCommits(folder + '/.git', filename)
      .then(commits => {
        const commit = _.chain(commits)
          .sortBy(c => c.author.timestamp)
          .reverse()
          .first()
          .value();
        const timestamp = moment(commit.author.timestamp * 1000);
        resolve({
          hash: commit.hash,
          name: commit.author.name,
          email: commit.author.mail,
          summary: commit.summary,
          date: timestamp.local().format()
        });
      })
      .catch(err => {
        if (err.message && err.message.indexOf('no such path') !== -1) {
          gutil.log(`${git_indicator} No history found for ${gutil.colors.cyan(filename)}, skipping`);
          resolve({})
        } else {
          reject(err);
        }
      });
  })
};

const getCommitsFolder = (folder, verbose) => {
  return new Promise((resolve, reject) => {
    const commitsObj = {};
    walkFolder(folder)
      .then(files => {
        let len = 0,
            rep = 0;
        async.eachLimit(files, ASYNC_LIMIT, (file, cb) => {
          getLastCommit(folder, file)
            .then(cm => {
              if (cm.hash) {
                commitsObj[file] = cm;
                const perc = Math.floor((len/files.length)*100);
                if (perc % 10 === 0 && rep !== perc && verbose) {
                  gutil.log(`${git_indicator} Got ${perc}% of commits`);
                  rep = perc;
                }
                len++;
              }
              cb();
            })
            .catch(err => {
              cb(err.message);
            })
        }, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(commitsObj)
          }
        })
      })
      .error(reject);
    });
};

module.exports = {
  getCommits: getCommitsFolder
}
