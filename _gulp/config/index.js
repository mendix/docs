const path = require('path');
const { normalizeSafe } = require('upath');

const BUILDDATE = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
const PORT = 4000;
const ALGOLIA_APP_ID = 'OHBX5T982M';
const ALGOLIA_INDEX = 'docs';

const CURRENTFOLDER = process.cwd();
const DIST_FOLDER = '_site'; // DO NOT CHANGE THIS, IS USED BY TRAVIS FOR DEPLOYMENT IN MANIFEST
const DATAFOLDER = 'data';
const ASSETSFOLDER = '_assets';
const CONTENTFOLDER = normalizeSafe(path.join(CURRENTFOLDER, 'content'));

const MAPPING_WRITE = true;

const PATHS = {
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
    },
    redirect_mappings: {
        src: path.join(CURRENTFOLDER, ASSETSFOLDER, 'mappings/redirect.js'),
        dest: path.join(CURRENTFOLDER, DIST_FOLDER, 'mappings/redirect.map'),
        contentFolder: 'content'
    }
}

const config = {
    CURRENTFOLDER,
    BUILDDATE,
    PORT,
    DIST_FOLDER,
    ALGOLIA_APP_ID,
    ALGOLIA_INDEX,
    DATAFOLDER,
    CONTENTFOLDER,
    MAPPING_WRITE,
    PATHS
}

module.exports = config;
