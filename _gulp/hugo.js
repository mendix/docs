const spawn = require('child_process').spawn;
const { beep } = require('gulp-util');
const _ = require('lodash');
const gulpErr = require('./helpers').gulpErr;
const commandLineHelpers = require('./helpers/command_line');

const { red } = commandLineHelpers.colors;
const log = commandLineHelpers.log('hugo');

let reload_timer;
let TIMEOUT = 500;

const spawnHugo = (watch, cb, bsync) => {
  const doneStr = 'total in';
  const syncStr = 'Syncing';
  const child = spawn('hugo', [
    '-d',
    '_site',
    (watch ? '-w' : '')
  ], { cwd: process.cwd()});

  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');

  child.stdout.on('data', data => {
      _.each(data.split('\n'), line => {
        if (line) {
          log(line);
          if ((line.indexOf(doneStr) !== -1 || line.indexOf(syncStr) !== -1) && watch) {
            if (bsync) {
              if (reload_timer) {
                clearTimeout(reload_timer);
              }
              reload_timer = setTimeout(() => {
                bsync.reload();
                reload_timer = null;
              }, TIMEOUT)
              // Rebuild was triggered by Hugo, so we'll reload the page
            }
          }
          if (line.indexOf('ERROR') !== -1 && !watch) {
            cb(1);
            process.exit(1);
          }
        }
      });
  });

  child.stderr.on('data', data => {
      _.each(data.split('\n'), line => {
        if (line) {
          log(red(line));
          if (line.indexOf('ERROR') !== -1) {
            if (cb) {
              cb(1);
            }
            process.exit(1);
          }
        }
      });
      beep();
  });

  child.on('close', function(code) {
      log("Closed with exit code", code);
      if (cb && _.isFunction(cb)) {
        cb(code);
      }
  });
};

const build = (cb) => {
  spawnHugo(false, (code) => {
    if (code !== 0) {
      gulpErr('hugo:build', `Hugo exit code is ${code}, check your Hugo setup`);
      return process.exit(2);
    } else {
      cb();
    }
  });
};

module.exports = {
  spawn: spawnHugo,
  build: build
}
