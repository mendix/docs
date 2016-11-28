const gulp        = require('gulp-help')(require('gulp'));
const gutil       = require('gulp-util');
const sass        = require('gulp-sass');
const sourcemaps  = require('gulp-sourcemaps');
const minify      = require('gulp-minify');
const Server      = require('spa-server');
const gulputil    = require('gulp-util');

const fs          = require('fs');
const spawn       = require('child_process').spawn;
const url         = require('url');

const pump        = require('pump');
const browserSync = require('browser-sync').create();
const _           = require('lodash');
const del         = require('del');
const runSequence = require('run-sequence');
const shell       = require('shelljs');

const buildDate     = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
const PORT          = 4000;
const DIST_FOLDER   = '_site';            // DO NOT CHANGE THIS, IS USED BY TRAVIS FOR DEPLOYMENT IN MANIFEST
const CONFIG        = '_config.yml';
const CONFIG_TEST   = '_config_test.yml';

/* DONT EDIT BELOW */
gutil.log(`Gulp started at ${buildDate}`);

const paths = {
  styles: {
    src: '_assets/styles/**/*.scss',
    dest: `${DIST_FOLDER}/public/styles`
  },
  images: {
    src: '_assets/images/**/*',
    dest: `${DIST_FOLDER}/public/images`
  },
  scripts: {
    src: '_assets/js/**/*.js',
    dest: `${DIST_FOLDER}/public/js`
  }
}

/*************************************************
  FUNCTIONS
**************************************************/
const throwErr = (plugin, error) => {
  throw new gutil.PluginError({
    plugin: plugin,
    message: error
  }, { showStack: true });
}

const spawnJekyll = (test, watch, cb) => {
  const jekyll_indicator = gutil.colors.cyan("[JEKYLL]");
  const doneStr = 'done in';
  const child = spawn('bundle', [
    'exec',
    'jekyll',
    'build',
    '--config',
    (test ? CONFIG_TEST : CONFIG),
    (watch ? '-w' : '')
  ], { cwd: process.cwd()});

  child.stdout.setEncoding('utf8');
  child.stderr.setEncoding('utf8');

  child.stdout.on('data', data => {
      _.each(data.split('\n'), line => {
        if (line) {
          gutil.log(jekyll_indicator, line);
          if (line.indexOf(doneStr) !== -1 && watch) {
            browserSync.reload();         // Rebuild was triggered by Hugo, so we'll reload the page
          }
        }
      });
  });

  child.stderr.on('data', data => {
      _.each(data.split('\n'), line => {
        if (line) {
          gutil.log(jekyll_indicator, gutil.colors.red(line));
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

const build = (t, cb) => {
  spawnJekyll(t, false, (code) => {
    if (code !== 0) {
      throwErr('jekyll:build', `Jekyll exit code is ${code}, check your Jekyll setup`);
    } else {
      cb();
    }
  });
};

const escapeMapping = str => {
  return str
      .replace(/\//g, '\\\/')
      .replace(/\+/g,'\\\+')
      .replace(/\./g,'\\.')
      .replace(/\(/g,'\\(')
      .replace(/\)/g,'\\)')
      //.replace(/'/g,'\'')
      .replace(/ /g,'\\ ')
      .replace(/\:/g,'\\\:')
      .replace(/"/g,'\\\"');
}

const mappings = (write, cb) => {
  fs.readFile('_assets/mappings/redirect.json', (err, data) => {
    if (err) {
      throwErr('write:mappings', `Cannot read _assets/mappings/redirect.json`);
    }
    let mappings = null;
    try {
      mappings = JSON.parse(data);
    } catch (e) {
      throwErr('write:mappings', `Cannot read _assets/mappings/redirect.json: ${e}`);
    }
    if (mappings.redirect) {
      const red = _.reverse(_.sortBy(mappings.redirect, mapping => mapping.from.length));
      let mappingsArr = [
            '############################################################################################',
            `# Mendix redirect mapping, generated on ${buildDate} using \'gulp write:mappings\'`,
            '############################################################################################',
            ''
          ],
          done = [],
          errors = [];
      _.forEach(red, r => {
        if (!r.to || !r.from) {
          throwErr('write:mappings', `Error reading _assets/mappings/redirect.json, this is not a correct mapping: ${JSON.stringify(r, null, 4)}`);
        }
        if (r.disabled) {
          gutil.log(`Mapping ${r.from} => ${r.to} disabled`)
        }
        const to = r.to.trim(),
              from = r.from.trim(),
              lastChar = to.substr(-1),
              mdFile = '.' + to + (lastChar === '/' ? 'index.md' : '.md'),
              htmlFile = gutil.replaceExtension(mdFile, '.html'),
              hash = new Buffer(`${from}-${to}`).toString('base64'),
              caseSensitive = to.toLowerCase() === from.toLowerCase();

        if (!shell.test('-e', mdFile) && !shell.test('-e', htmlFile)) {
          errors.push(`There is no file for the mapping in mappings.json to: ${gutil.colors.cyan(to)}`);
        } else if (to === from) {
          errors.push(`${gutil.colors.cyan(to)} is the same as ${gutil.colors.cyan(from)}`);
        } else if (done.indexOf(hash) !== -1) {
          errors.push(`You have a duplicate mapping for. ${gutil.colors.cyan(from)} => ${gutil.colors.cyan(to)}`);
        }
        let mappingStr = '',
            fromStr = (from.substr(-1) === '/' ? from + '?' : from + '/?');

        if (r.exact) {
          mappingsArr.push(`${from} ${to};`);
        } else {
          mappingsArr.push((caseSensitive ? '~' : '~*') + `${escapeMapping(fromStr)} ${to};`);
        }

      });
      const mappingsFile = mappingsArr.join('\n');

      if (errors.length > 0) {
        throwErr('write:mappings', `You have errors in your mapping ${gutil.colors.cyan('_assets/mappings/redirect.json')} file:\n\n${errors.join('\n')}\n`);
      }

      if (write) {
        if (!shell.test('-d', '_site/mappings')) {
          shell.mkdir('-p', '_site/mappings');
        }
        fs.writeFile('_site/mappings/redirect.map', mappingsFile, err => {
          if (err) {
            throwErr('write:mappings', `Error writing _site/mappings/redirect.map: ${err}`);
          } else {
            gutil.log('Mappings written to _site/mappings/redirect.map');
          }
          cb();
        })
      } else {
        cb();
      }
    } else {
      throwErr('write:mappings', `No redirects found in mappings.json`);
    }
  });
};

const spawnServer = () => {
  const server = Server.create({
    path: './_site',
    port: 8888,
    fallback: (req, res) => {
      const parsed = url.parse(req.url),
            target = parsed.pathname + '.html',
            alternateTarget = parsed.pathname + '/index.html';
      if (shell.test('-f', '_site' + target)) {
        return target + (parsed.query ? `?${parsed.query}` : '');
      }
      if (shell.test('-f', '_site' + alternateTarget)) {
        return alternateTarget + (parsed.query ? `?${parsed.query}` : '');
      }
      return '404.html';
    }
  })
  server.start();
}
/*************************************************
  TASKS
**************************************************/

gulp.task('clean', `Cleanup the ${DIST_FOLDER} directory`, () => {
  return del([
    DIST_FOLDER
  ], { force: true });
});

gulp.task('write:mappings', `Write mappings from _assets/mappings/redirect.json to ${DIST_FOLDER}/mappings/redirect.map`, done => {
  mappings(true, done);
});

gulp.task('copy:images', `Copy images from _assets folder`, () => {
  return gulp
    .src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('compress:js', `Compress js files`, (done) => {
  pump([
    gulp.src(paths.scripts.src),
    minify({
      ext: {
        src: '-debug.js',
        min: '.js'
      }
    }),
    gulp.dest(paths.scripts.dest)
  ], done);
});

gulp.task('js-watch', `Internal task, don't use`, ['compress:js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('sass:build', `Sass build`, () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
});

gulp.task('sass:dev', `Sass build (dev task, sourcemaps included)`, () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
});

gulp.task('jekyll:build', `Jekyll build, using ${CONFIG}`, [], done => {
  build(false, done);
});

gulp.task('jekyll:build-test', `Jekyll build, using ${CONFIG_TEST}`, [], done => {
  build(true, done);
});

gulp.task('dev', ``, ['sass:dev', 'copy:images', 'compress:js'], done => {
  spawnServer();
  spawnJekyll(true, true);
  browserSync.init({
    port: PORT,
    proxy: 'localhost:8888',
    online: false,
    open: false
  });
  gulp.watch(paths.styles.src, ['sass:dev']);
  gulp.watch(paths.scripts.src, ['js-watch']);
  gulp.watch(paths.images.src, ['copy:images']);
  gulputil.log(`\n\n*********\nOpen your browser with this address: ${gulputil.colors.cyan(`localhost:${PORT}`)}\n*********\n`);
});

gulp.task('serve', `Jekyll serve, using ${CONFIG_TEST}`, done => {
  runSequence('clean', 'dev');
})

gulp.task('build', `Jekyll build, using ${CONFIG}. Used for production`, done => {
  runSequence('clean', ['jekyll:build', 'sass:build', 'copy:images', 'compress:js', 'write:mappings'], done);
});

gulp.task('build-test', `Jekyll build, using ${CONFIG_TEST}. Used for test`, done => {
  runSequence('clean', ['jekyll:build-test', 'sass:build', 'copy:images', 'compress:js', 'write:mappings'], done);
});
