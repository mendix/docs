const gutil = require('gulp-util');
const path = require('path');
const shell = require('shelljs');

const throwError = (plugin, error) => {
  throw new gutil.PluginError({
    plugin: plugin,
    message: error
  }, { showStack: true });
}

const touchFile = (filePath) => {
  const parsed = path.parse(filePath);
  if (!shell.test('-d', parsed.dir)) {
    shell.mkdir('-p', parsed.dir);
  }
  if (!shell.test('-f', filePath)) {
    shell.touch(filePath);
  }
}


module.exports = {
  gulpErr: throwError,
  touch: touchFile
}
