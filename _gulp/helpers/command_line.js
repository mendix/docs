const gutil = require('gulp-util');

const cyan = str => gutil.colors.cyan(str);
const yellow = str => gutil.colors.yellow(str);
const red = str => gutil.colors.red(str);
const white = str => gutil.colors.white(str);
const grey = str => gutil.colors.gray(str);

const timestamp = require('time-stamp');

const getTime = () => `[${grey(timestamp('HH:mm:ss'))}]`;
const indicator = (name = 'unknown') => cyan(`[${name.toUpperCase()}]`);

const log = name => {
    return function () {
        const args = Array.prototype.slice.call(arguments);
        args.unshift(indicator(name));
        gutil.log.apply(gutil, args);
    }
}

module.exports = {
    log,
    getTime,
    indicator,
    colors: {
        cyan,
        yellow,
        red,
        white,
        grey
    }
};
