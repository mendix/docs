const gulp               = require('gulp-help')(require('gulp'));
const gutil              = require('gulp-util');
const sass               = require('gulp-sass');
const sourcemaps         = require('gulp-sourcemaps');
const minify             = require('gulp-minify');
const hash               = require('gulp-hash');

const CONFIG             = require('./_gulp/config');

const server             = require('./_gulp/server');
const jsonServer         = require('./_gulp/json');
const hugo               = require('./_gulp/hugo');
const redirect_mappings  = require('./_gulp/mappings_redirects');
const asset_mappings     = require('./_gulp/mappings_assets');
const htmlproofer        = require('./_gulp/htmlproofer');
const algolia            = require('./_gulp/algolia');
const menu_check         = require('./_gulp/menu_check');
const menu_build         = require('./_gulp/menu_build');

const { gulpErr }        = require('./_gulp/helpers');
const { cyan, red }      = require('./_gulp/helpers/command_line').colors;

const path               = require('path');
const pump               = require('pump');
const browserSync        = require('browser-sync').create();
const del                = require('del');
const runSequence        = require('run-sequence');

/* DONT EDIT BELOW */
gutil.log(`Gulp started at ${cyan(CONFIG.BUILDDATE)}`);

/*************************************************
  CLEAN
**************************************************/
const cleanTask = p => del([ p ], { force: true });

gulp.task('clean', `Cleanup the ${CONFIG.DIST_FOLDER} directory`, () => cleanTask(CONFIG.DIST_FOLDER));
gulp.task('clean:js', `Cleanup the ${CONFIG.PATHS.scripts.dest} directory`, () => cleanTask(CONFIG.PATHS.scripts.dest));
gulp.task('clean:css', `Cleanup the ${CONFIG.PATHS.styles.dest} directory`, () => cleanTask(CONFIG.PATHS.styles.dest));

/*************************************************
  MAPPINGS
**************************************************/
gulp.task('write:mappings', `Write mappings from _assets/mappings/redirect.json to ${CONFIG.DIST_FOLDER}/mappings/redirect.map`, done => {
  redirect_mappings()
    .then(done)
    .catch(err => {
      gulpErr('write:mapping', err);
      return process.exit(2);
    });
});

gulp.task('write:assetmappings', `Write asset mappings to ${CONFIG.DIST_FOLDER}/mappings/assets.map`, done => {
  asset_mappings(CONFIG.CURRENTFOLDER)
    .then(done)
    .catch(err => {
      gulpErr('write:assetmapping', err);
      return process.exit(2);
    });
});

/*************************************************
  MENU
**************************************************/
const writeMenu = (exitOnError) => {
  return (done) => {
    menu_build
      .build({
        src: CONFIG.CONTENTFOLDER,
        destination: path.join(CONFIG.CURRENTFOLDER, 'static/json/'),
        space: path.join(CONFIG.CURRENTFOLDER, 'data/spaces.yml')
      })
      .then((errors) => {
        if (exitOnError && errors) {
          const err = new Error('Errors in writing menu');
          err.showStack = false;
          done(err);
        } else {
          done();
        }
      })
      .catch((e) => {
        return process.exit(2);
      })
  }
}

gulp.task('write:menu', `Write menu jsons (development)`, writeMenu(false));
gulp.task('build:menu', `Build menu jsons (production)`, writeMenu(true));

gulp.task('check:menu', `Check menu structure in the build folder`, done => {
  menu_check.check(path.resolve(CONFIG.CURRENTFOLDER, '_site/json'), function (err) {
    if (err) {
      return process.exit(2);
    } else {
      done();
    }
  });
});

/*************************************************
  JAVASCRIPT
**************************************************/
gulp.task('js-watch', `Internal task, don't use`, ['build:js'], function (done) {
    browserSync.reload();
    done();
});

// BUILD
gulp.task('build:js', `Compress js files`, ['clean:js'], (done) => {
  pump([
    gulp.src(CONFIG.PATHS.scripts.src),
    minify({
      ext: {
        src: '-debug.js',
        min: '.js'
      }
    }),
    gulp.dest(CONFIG.PATHS.scripts.dest),
    hash(),
    gulp.dest(CONFIG.PATHS.scripts.dest),
    hash.manifest('assetsjs.json', true, 4),
    gulp.dest(CONFIG.DATAFOLDER)
  ], done);
});

/*************************************************
  SASS
**************************************************/
gulp.task('build:sass', `Sass build`, ['clean:css'], () => {
  return gulp
    .src(CONFIG.PATHS.styles.src)
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(CONFIG.PATHS.styles.dest))
    .pipe(hash())
    .pipe(gulp.dest(CONFIG.PATHS.styles.dest))
    .pipe(hash.manifest('assetscss.json', true, 4))
    .pipe(gulp.dest(CONFIG.DATAFOLDER));
});

gulp.task('dev:sass', `Sass build (dev task, sourcemaps included)`, ['clean:css'], () => {
  return gulp
    .src(CONFIG.PATHS.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(CONFIG.PATHS.styles.dest))
    .pipe(browserSync.stream())
    .pipe(hash())
    .pipe(gulp.dest(CONFIG.PATHS.styles.dest))
    .pipe(hash.manifest('assetscss.json', true, 4))
    .pipe(gulp.dest(CONFIG.DATAFOLDER));
});

/*************************************************
  HUGO
**************************************************/
gulp.task('build:hugo', `Build`, [], done => {
  hugo.build(done);
});

/*************************************************
  MAIN BUILD TASKS
**************************************************/
gulp.task('build', `BUILD. Used for production`, done => {
  runSequence('clean', 'write:mappings', ['build:menu', 'build:sass', 'build:js'], 'write:assetmappings', 'build:hugo', 'check', (err) => {
      //if any error happened in the previous tasks, exit with a code > 0
      if (err) {
        var exitCode = 2;
        gutil.log('[ERROR] gulp build task failed:', red(err.message));
        gutil.log('[FAIL] gulp build task failed - exiting with code ' + exitCode);
        return process.exit(exitCode);
      }
      else {
        return done();
      }
    });
});

/*************************************************
  MAIN SERVE TASK
**************************************************/
gulp.task('dev', ``, ['dev:sass', 'build:js', 'write:menu', 'build:hugo'], done => {
  server.spawn(CONFIG.CURRENTFOLDER);
  jsonServer.spawn(CONFIG.CURRENTFOLDER);
  hugo.spawn(true, false, browserSync);
  browserSync.init({
    port: CONFIG.PORT,
    proxy: 'localhost:8888',
    online: false,
    open: false
  });
  gulp.watch(CONFIG.PATHS.styles.src, ['dev:sass']);
  gulp.watch(CONFIG.PATHS.scripts.src, ['js-watch']);
  gutil.log(`\n\n*********\nOpen your browser with this address: ${cyan(`localhost:${CONFIG.PORT}`)}\n*********\n`);
});

gulp.task('serve', `Serve`, done => {
  runSequence('clean', 'dev');
})

/*************************************************
  JSON SERVER
**************************************************/
gulp.task('json', `Run JSON export server`, ['dev:sass', 'build:js', 'write:menu', 'build:hugo'], done => {
  jsonServer.spawn(CONFIG.CURRENTFOLDER);
})

/*************************************************
  HTML PROOFER
**************************************************/
gulp.task('check:html', `Check HTML files in the build folder`, done => {
  htmlproofer.check({
    external: !!process.env.EXTERNAL,
    dir: path.resolve(CONFIG.CURRENTFOLDER, '_site'),
    callback: function (err) {
      if (err) {
        return process.exit(2);
      } else {
        done();
      }
    }
  });
});

/*************************************************
  MAIN CHECK TASK
**************************************************/
gulp.task('check', `Test the html and menu`, done => {
  runSequence('check:html', 'check:menu', done);
});

/*************************************************
  ALGOLIA
**************************************************/
gulp.task('algolia', `Push Algolia indexes`, done => {
  algolia.run({
    target : path.resolve(CONFIG.CURRENTFOLDER, '_site'),
    source : CONFIG.CONTENTFOLDER,
    spacesFile: path.resolve(CONFIG.CURRENTFOLDER, 'data/spaces.yml'),
    algolia_app_id: CONFIG.ALGOLIA_APP_ID,
    algolia_index: CONFIG.ALGOLIA_INDEX,
    cb: done
  });
});
