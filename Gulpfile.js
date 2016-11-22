const gulp        = require('gulp');
const gutil       = require('gulp-util');
const sass        = require('gulp-sass');
const sourcemaps  = require('gulp-sourcemaps');
const minify      = require('gulp-minify');

const browserSync = require('browser-sync').create();
const spawn       = require('child_process').spawn;
const _           = require('lodash');
const del         = require('del');
const runSequence = require('run-sequence');

const PORT          = 3000;
const DIST_FOLDER   = '_site';            // DO NOT CHANGE THIS, IS USED BY TRAVIS FOR DEPLOYMENT IN MANIFEST
const CONFIG        = '_config.yml';
const CONFIG_TEST   = '_config_test.yml';

/* DONT EDIT BELOW */

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
    JEKYLL RUNNER (BUNDLE EXEC JEKYLL BUILD)
**************************************************/
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
        cb();
      }
  });
}

/*************************************************
    TASKS
**************************************************/

gulp.task('clean', () => {
  return del([
    DIST_FOLDER
  ], { force: true });
});

gulp.task('copy:images', () => {
  return gulp
    .src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('compress:js', () => {
  return gulp
    .src(paths.scripts.src)
    .pipe(minify({
      ext: {
        src: '-debug.js',
        min: '.js'
      }
    }))
    .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('sass:build', () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
});

gulp.task('sass:dev', () => {
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

gulp.task('jekyll:build', [], done => {
  spawnJekyll(false, false, done);
});

gulp.task('dev', ['sass:dev', 'copy:images', 'compress:js'], done => {
  browserSync.init({
      port: PORT,
      serveStatic: [ DIST_FOLDER ],
      serveStaticOptions: {
          extensions: ['html'] // pretty urls (so this works locally as it would online)
      }
  });
  spawnJekyll(true, true);
  gulp.watch(paths.styles.src, ['sass:dev']);
  gulp.watch(paths.scripts.src, ['compress:js']);
  gulp.watch(paths.images.src, ['copy:images']);
});

gulp.task('serve', done => {
  runSequence('clean', 'dev');
})

gulp.task('build', done => {
  runSequence('clean', ['jekyll:build', 'sass:build', 'copy:images', 'compress:js'], done);
});
