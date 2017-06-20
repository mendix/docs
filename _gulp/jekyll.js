const spawn = require('child_process').spawn;
const gutil = require('gulp-util');
const _ = require('lodash');
const gulpErr = require('./helpers').gulpErr;
const browserSync = require('browser-sync').create();

const spawnJekyll = (config, watch, cb, bsync) => {
  const jekyll_indicator = gutil.colors.cyan("[JEKYLL]");
  const doneStr = 'done in';
  const child = spawn('bundle', [
    'exec',
    'jekyll',
    'build',
    //'--profile',
    '--config',
    config,
    (watch ? '-w' : '')
  ], { cwd: process.cwd()});

  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');

  child.stdout.on('data', data => {
      _.each(data.split('\n'), line => {
        if (line) {
          gutil.log(jekyll_indicator, line);
          if (line.indexOf(doneStr) !== -1 && watch) {
            if (bsync) {
              bsync.reload();         // Rebuild was triggered by Hugo, so we'll reload the page
            }
          }
          if (line.indexOf('Error') !== -1 && !watch) {
            cb(1);
            process.exit(1);
          }
        }
      });
  });

  child.stderr.on('data', data => {
      _.each(data.split('\n'), line => {
        if (line) {
          gutil.log(jekyll_indicator, gutil.colors.red(line));
          if (line.indexOf('Error') !== -1) {
            if (cb) {
              cb(1);
            }
            process.exit(1);
          }
        }
      });
      gutil.beep();
  });

  child.on('close', function(code) {
      gutil.log(jekyll_indicator, "Closed with exit code", code);
      if (cb && _.isFunction(cb)) {
        cb(code);
      }
  });
};

const build = (config, cb) => {
  spawnJekyll(config, false, (code) => {
    if (code !== 0) {
      gulpErr('jekyll:build', `Jekyll exit code is ${code}, check your Jekyll setup`);
      return process.exit(2);
    } else {
      cb();
    }
  });
};

module.exports = {
  spawn: spawnJekyll,
  build: build
}
