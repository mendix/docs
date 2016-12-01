const gutil = require('gulp-util');

const throwError = (plugin, error) => {
  throw new gutil.PluginError({
    plugin: plugin,
    message: error
  }, { showStack: true });
}

module.exports = {
  gulpErr: throwError
}
