const gulp        = require('gulp-help')(require('gulp'));
const gutil       = require('gulp-util');
const sass        = require('gulp-sass');
const sourcemaps  = require('gulp-sourcemaps');
const minify      = require('gulp-minify');

const Server      = require('./_gulp/server');
const Jekyll      = require('./_gulp/jekyll');
const gulpErr     = require('./_gulp/helpers').gulpErr;
const Mappings    = require('./_gulp/mappings');

const path        = require('path');
const fs          = require('fs');
const spawn       = require('child_process').spawn;

const pump        = require('pump');
const browserSync = require('browser-sync').create();
const _           = require('lodash');
const del         = require('del');
const runSequence = require('run-sequence');
const shell       = require('shelljs');

const currentFolder = __dirname;
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



/*************************************************
  TASKS
**************************************************/
gulp.task('clean', `Cleanup the ${DIST_FOLDER} directory`, () => {
  return del([
    DIST_FOLDER
  ], { force: true });
});

gulp.task('write:mappings', `Write mappings from _assets/mappings/redirect.json to ${DIST_FOLDER}/mappings/redirect.map`, done => {
  Mappings.run({
    write: true,
    src: path.join(currentFolder, '/_assets/mappings/redirect.json'),
    dest: path.join(currentFolder, '/_site/mappings/redirect.map'),
    callback: done
  });
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
  Server.spawn(currentFolder);
  Jekyll.spawn(CONFIG_TEST, true);
  browserSync.init({
    port: PORT,
    proxy: 'localhost:8888',
    online: false,
    open: false
  });
  gulp.watch(paths.styles.src, ['sass:dev']);
  gulp.watch(paths.scripts.src, ['js-watch']);
  gulp.watch(paths.images.src, ['copy:images']);
  gutil.log(`\n\n*********\nOpen your browser with this address: ${gutil.colors.cyan(`localhost:${PORT}`)}\n*********\n`);
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
