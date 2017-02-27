const gulp        = require('gulp-help')(require('gulp'));
const gutil       = require('gulp-util');
const sass        = require('gulp-sass');
const sourcemaps  = require('gulp-sourcemaps');
const minify      = require('gulp-minify');
const hash        = require('gulp-hash');

const server      = require('./_gulp/server');
const jekyll      = require('./_gulp/jekyll');
const helpers     = require('./_gulp/helpers');
const mappings    = require('./_gulp/mappings');
const git         = require('./_gulp/git');
const htmlproofer = require('./_gulp/htmlproofer');
const algolia     = require('./_gulp/algolia');
const menu        = require('./_gulp/menu');

const path        = require('path');
const pump        = require('pump');
const browserSync = require('browser-sync').create();
const del         = require('del');
const runSequence = require('run-sequence');
const yaml        = require('write-yaml');

const CURRENTFOLDER   = __dirname;
const BUILDDATE       = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
const PORT            = 4000;
const DIST_FOLDER     = '_site';            // DO NOT CHANGE THIS, IS USED BY TRAVIS FOR DEPLOYMENT IN MANIFEST
let CONFIG            = '_config.yml';
let CONFIG_TEST       = '_config_test.yml';
const ALGOLIA_APP_ID  = 'OHBX5T982M';
const ALGOLIA_INDEX   = 'docs';

if (!helpers.isFile(CONFIG_TEST)) {
  CONFIG_TEST = CONFIG;
}

/* DONT EDIT BELOW */
gutil.log(`Gulp started at ${gutil.colors.cyan(BUILDDATE)}`);

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
  TASKS
**************************************************/
gulp.task('clean', `Cleanup the ${DIST_FOLDER} directory`, () => {
  return del([
    DIST_FOLDER
  ], { force: true });
});

gulp.task('write:mappings', `Write mappings from _assets/mappings/redirect.json to ${DIST_FOLDER}/mappings/redirect.map`, done => {
  mappings
    .run({
      write: true,
      type: 'js',
      src: path.join(CURRENTFOLDER, '/_assets/mappings/redirect.js'),
      dest: path.join(CURRENTFOLDER, '/_site/mappings/redirect.map')
    })
    .then(done)
    .catch(err => {
      helpers.gulpErr('write:mapping', err);
      return process.exit(1);
    });
});

gulp.task('write:githistory', `Write git_history to data`, done => {
  console.log(process.env['JEKYLL_ENV']);
  if (process.env['JEKYLL_ENV'] === 'production') {
    git.getCommits(CURRENTFOLDER, true)
      .then(commits => {
        yaml('_data/history.yml', commits, err => {
          if (err) {
            throwErr('write:githistory', `Error writing githistory: ${err}`);
            return process.exit(2);
          }
          gutil.log(gutil.colors.cyan('[GIT-HISTORY]') + ` Git history written to ${gutil.colors.cyan(path.join(CURRENTFOLDER, '/_data/history.yml'))}`)
          done();
        });
      })
      .catch(err => {
        helpers.gulpErr('write:githistory', `Error with reading git history:`, err);
        return process.exit(2);
      })
  } else {
    gutil.log(gutil.colors.cyan("[GIT-HISTORY]") + ' skipping history on tests, use environment variable: JEKYLL_ENV=production');
    helpers.touch(path.join(CURRENTFOLDER, '/_data/history.yml'));
    done();
  }
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
    gulp.dest(paths.scripts.dest),
    hash(),
    gulp.dest(paths.scripts.dest),
    hash.manifest('assetsjs.json', true, 4),
    gulp.dest('_data')
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
    .pipe(hash())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(hash.manifest('assetscss.json', true, 4))
    .pipe(gulp.dest('_data'));
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
    .pipe(browserSync.stream())
});

gulp.task('jekyll:build', `Jekyll build, using ${CONFIG}`, [], done => {
  jekyll.build(CONFIG, done);
});

gulp.task('jekyll:build-test', `Jekyll build, using ${CONFIG_TEST}`, [], done => {
  jekyll.build(CONFIG_TEST, done);
});

gulp.task('dev', ``, ['sass:dev', 'copy:images', 'compress:js'], done => {
  server.spawn(CURRENTFOLDER);
  jekyll.spawn(CONFIG_TEST, true, false, browserSync);
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

gulp.task('check:html', `Check HTML files in the build folder`, done => {
  htmlproofer.check({
    dir: path.resolve(CURRENTFOLDER, '_site'),
    callback: function (err) {
      if (err) {
        return process.exit(2);
      } else {
        done();
      }
    }
  });
});
gulp.task('check:menu', `Check menu structure in the build folder`, done => {
  menu.check(path.resolve(CURRENTFOLDER, '_site/json/menu'), function (err) {
    if (err) {
      return process.exit(2);
    } else {
      done();
    }
  });
});

gulp.task('algolia', `Push Algolia indexes (not production ready)`, done => {
  algolia.run({
    target : path.resolve(CURRENTFOLDER, '_site'),
    source : CURRENTFOLDER,
    spacesFile: path.resolve(CURRENTFOLDER, '_data/spaces.yml'),
    algolia_app_id: ALGOLIA_APP_ID,
    algolia_index: ALGOLIA_INDEX,
    cb: done
  });
});

gulp.task('build', `Jekyll build, using ${CONFIG}. Used for production`, done => {
  runSequence('clean', 'write:mappings', 'write:githistory', ['sass:build', 'copy:images', 'compress:js'], 'jekyll:build', 'test', (err) => {
      //if any error happened in the previous tasks, exit with a code > 0
      if (err) {
        var exitCode = 2;
        console.log('[ERROR] gulp build task failed', err);
        console.log('[FAIL] gulp build task failed - exiting with code ' + exitCode);
        return process.exit(exitCode);
      }
      else {
        return done();
      }
    });
});

gulp.task('build-test', `Jekyll build, using ${CONFIG_TEST}. Used for test`, done => {
  runSequence('clean', 'write:githistory', ['jekyll:build-test', 'sass:build', 'copy:images', 'compress:js', 'write:mappings'], done);
});

gulp.task('test', `Test the html and menu`, done => {
  runSequence('check:html', 'check:menu', done);
});
