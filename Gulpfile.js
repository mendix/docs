const gulp        = require('gulp-help')(require('gulp'));
const gutil       = require('gulp-util');
const sass        = require('gulp-sass');
const sourcemaps  = require('gulp-sourcemaps');
const minify      = require('gulp-minify');
const hash        = require('gulp-hash');

const server      = require('./_gulp/server');
const jsonServer  = require('./_gulp/json');
const hugo        = require('./_gulp/hugo');
const helpers     = require('./_gulp/helpers');
const mappings    = require('./_gulp/mappings');
const htmlproofer = require('./_gulp/htmlproofer');
const algolia     = require('./_gulp/algolia');
const menu_check  = require('./_gulp/menu_check');
const menu_build  = require('./_gulp/menu_build');

const path        = require('path');
const pump        = require('pump');
const browserSync = require('browser-sync').create();
const del         = require('del');
const runSequence = require('run-sequence');
const yaml        = require('write-yaml');

const { normalizeSafe } = require('upath');

const CURRENTFOLDER   = __dirname;
const BUILDDATE       = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
const PORT            = 4000;
const DIST_FOLDER     = '_site';            // DO NOT CHANGE THIS, IS USED BY TRAVIS FOR DEPLOYMENT IN MANIFEST
const ALGOLIA_APP_ID  = 'OHBX5T982M';
const ALGOLIA_INDEX   = 'docs';
const DATAFOLDER      = 'data';
const CONTENTFOLDER   = normalizeSafe(path.join(CURRENTFOLDER, 'content'));

/* DONT EDIT BELOW */
gutil.log(`Gulp started at ${gutil.colors.cyan(BUILDDATE)}`);

const paths = {
  styles: {
    src: '_assets/styles/**/*.scss',
    dest: 'static/public/styles'
  },
  scripts: {
    src: '_assets/js/**/*.js',
    dest: 'static/public/js'
  },
  content: {
    pages: [
      'content/**/*.md',
      'content/**/*.html'
    ],
    all: [
      'content/**/*.md',
      'content/**/*.html',
      'content/**/*.png',
      'content/**/*.jpg'
    ]
  }
}

/*************************************************
  TASKS
**************************************************/

// CLEAN
gulp.task('clean', `Cleanup the ${DIST_FOLDER} directory`, () => {
  return del([
    DIST_FOLDER
  ], { force: true });
});

gulp.task('clean:js', `Cleanup the ${paths.scripts.dest} directory`, () => {
  return del([
    paths.scripts.dest
  ], { force: true });
});

gulp.task('clean:css', `Cleanup the ${paths.styles.dest} directory`, () => {
  return del([
    paths.styles.dest
  ], { force: true });
});

// WRITE
gulp.task('write:mappings', `Write mappings from _assets/mappings/redirect.json to ${DIST_FOLDER}/mappings/redirect.map`, done => {
  helpers.touch(path.join(CURRENTFOLDER, '/_site/mappings/indexes.map'));
  mappings
    .run({
      write: true,
      type: 'js',
      contentFolder: 'content',
      src: path.join(CURRENTFOLDER, '/_assets/mappings/redirect.js'),
      dest: path.join(CURRENTFOLDER, '/_site/mappings/redirect.map')
    })
    .then(done)
    .catch(err => {
      helpers.gulpErr('write:mapping', err);
      return process.exit(1);
    });
});

gulp.task('write:assetmappings', `Write asset mappings to ${DIST_FOLDER}/mappings/assets.map`, done => {
  helpers
    .writeAssetMappings(CURRENTFOLDER)
    .then(() => {
      done();
    })
    .catch((e) => {
      return process.exit(2);
    });
});

const writeMenu = (exitOnError) => {
  return (done) => {
    menu_build
      .build({
        src: CONTENTFOLDER,
        destination: path.join(CURRENTFOLDER, 'static/json/'),
        space: path.join(CURRENTFOLDER, 'data/spaces.yml')
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

//WATCH
gulp.task('js-watch', `Internal task, don't use`, ['build:js'], function (done) {
    browserSync.reload();
    done();
});

// BUILD
gulp.task('build:js', `Compress js files`, ['clean:js'], (done) => {
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
    gulp.dest(DATAFOLDER)
  ], done);
});

gulp.task('build:sass', `Sass build`, ['clean:css'], () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(hash())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(hash.manifest('assetscss.json', true, 4))
    .pipe(gulp.dest(DATAFOLDER));
});

gulp.task('build:hugo', `Build`, [], done => {
  hugo.build(done);
});

gulp.task('build:menu', `Build menu jsons (production)`, writeMenu(true));

gulp.task('build', `BUILD. Used for production`, done => {
  runSequence('clean', 'write:mappings', ['build:menu', 'build:sass', 'build:js'], 'write:assetmappings', 'build:hugo', 'check', (err) => {
      //if any error happened in the previous tasks, exit with a code > 0
      if (err) {
        var exitCode = 2;
        gutil.log('[ERROR] gulp build task failed:', gutil.colors.red(err.message));
        gutil.log('[FAIL] gulp build task failed - exiting with code ' + exitCode);
        return process.exit(exitCode);
      }
      else {
        return done();
      }
    });
});

// DEV
gulp.task('dev:sass', `Sass build (dev task, sourcemaps included)`, ['clean:css'], () => {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream())
    .pipe(hash())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(hash.manifest('assetscss.json', true, 4))
    .pipe(gulp.dest(DATAFOLDER));
});

gulp.task('dev', ``, ['dev:sass', 'build:js', 'write:menu', 'build:hugo'], done => {
  server.spawn(CURRENTFOLDER);
  jsonServer.spawn(CURRENTFOLDER);
  hugo.spawn(true, false, browserSync);
  browserSync.init({
    port: PORT,
    proxy: 'localhost:8888',
    online: false,
    open: false
  });
  gulp.watch(paths.styles.src, ['dev:sass']);
  gulp.watch(paths.scripts.src, ['js-watch']);
  gutil.log(`\n\n*********\nOpen your browser with this address: ${gutil.colors.cyan(`localhost:${PORT}`)}\n*********\n`);
});

// SERVE
gulp.task('serve', `Serve`, done => {
  runSequence('clean', 'dev');
})

// CHECK
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
  menu_check.check(path.resolve(CURRENTFOLDER, '_site/json'), function (err) {
    if (err) {
      return process.exit(2);
    } else {
      done();
    }
  });
});

gulp.task('check', `Test the html and menu`, done => {
  runSequence('check:html', 'check:menu', done);
});

// ALGOLIA
gulp.task('algolia', `Push Algolia indexes`, done => {
  algolia.run({
    target : path.resolve(CURRENTFOLDER, '_site'),
    source : CONTENTFOLDER,
    spacesFile: path.resolve(CURRENTFOLDER, 'data/spaces.yml'),
    algolia_app_id: ALGOLIA_APP_ID,
    algolia_index: ALGOLIA_INDEX,
    cb: done
  });
});
