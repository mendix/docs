const restify = require('restify');
const path = require('path');
const url = require('url');
const Promise = require('bluebird');
const YAML = require('yamljs');
const yamlFront = require('yaml-front-matter');
const _ = require('lodash');
const cheerio = require('cheerio');
const gutil = require('gulp-util');
const { normalizeSafe } = require('upath');

const { getFiles, readFile, isFile } = require('./helpers');

const pluginID = gutil.colors.cyan("[JSON SERVER]");

const CONTENTFOLDER = 'content';
const SNIPPETSFOLDER = 'snippets';
const GENERATEDFOLDER = '_site';

let server;
let mainFolder;
let SPACES;

const contentHandler = (req, res, next) => {
    const contentPath = req.params[0];
    gutil.log(`${pluginID} Handling content: ${contentPath}`);

    const sourcePath = normalizeSafe(path.resolve(mainFolder, CONTENTFOLDER, contentPath));
    const generatePath = normalizeSafe(path.resolve(mainFolder, GENERATEDFOLDER, contentPath));

    const sourceRoot = normalizeSafe(path.resolve(mainFolder, CONTENTFOLDER));
    const generateRoot = normalizeSafe(path.resolve(mainFolder, GENERATEDFOLDER));

    const sourceFile = ['.md', '/index.md']
        .map(suffix => {
            const absPath = sourcePath + suffix;
            return isFile(absPath) ? absPath : null
        })
        .filter(f => f !== null);

    const targetFile = ['.html', '/index.html']
        .map(suffix => {
            const absPath = generatePath + suffix;
            return isFile(absPath) ? absPath : null
        })
        .filter(f => f !== null);

    if (sourceFile.length !== 1) {
        gutil.log(`${pluginID} Handling content: ${contentPath}, source not found`);
        res.send(404, 'source file not found');
        return next();
    }

    if (targetFile.length !== 1) {
        gutil.log(`${pluginID} Handling content: ${contentPath}, target not found`);
        res.send(404, 'target file not found');
        return next();
    }

    const source = sourceFile[0];
    const target = targetFile[0];

    Promise.join(
        readFile(source).
            then(content => {
                const obj = {
                    pathMarkdown: normalizeSafe(source.replace(sourceRoot, '')),
                    markdown: content.toString(),
                    snippets: []
                };

                const parsed = path.parse(obj.pathMarkdown);
                const dirName = parsed.dir.split('/')[1];
                const spaceObj = SPACES[dirName];
                let menu;

                if (spaceObj) {
                    try {
                        menu = require(path.resolve(mainFolder, 'static/json', dirName + '.json'));
                    } catch (e) {
                        console.log(`Error getting menu file for ${dirName}: `, e);
                        menu = null;
                    }
                }

                let meta = null;
                try {
                    meta = yamlFront.loadFront(content);
                } catch (e) {
                    console.log('Error loading front matter for ' + source, e);
                    meta = null;
                }

                obj.space = spaceObj ? spaceObj.space : null;

                if (meta !== null) {
                    _.merge(obj, _.omit(meta, ['__content', 'space']));
                    obj.markdown = meta['__content'];
                }

                if (obj.parent) {
                    obj.parent = normalizeSafe(path.join(parsed.dir, obj.parent));
                } else if (spaceObj) {
                    if (obj.category && menu !== null && menu.pages) {
                        const parent = _.find(menu.pages, p => p.t === obj.category);
                        if (parent && parent.u) {
                            obj.parent = parent.u;
                            delete obj.category;
                        } else {
                            console.log(`Can't find a parent for page: ${obj.pathMarkdown}`);
                            delete obj.category;
                        }
                    } else if (!obj.category && !obj.parent && menu !== null && menu.pages && menu.categories) {
                        if (menu.categories.indexOf(obj.title) !== -1) {
                            obj.parent = `/${dirName}/`;
                        } else {
                            console.log(`Can't find a parent/category for page: ${obj.pathMarkdown}`);
                        }
                    }
                }

                const snippetRegEx = /{{% snippet file="([a-zA-Z0-9\/\+]+\.md)" %}}/gi;
                const matches = obj.markdown.match(snippetRegEx);

                if (matches && matches.length > 0) {
                    obj.snippets = matches.map(m => '/' + m.replace(snippetRegEx, '$1'));
                }

                return obj
            }),
        readFile(target).
            then(content => {
                const obj = {
                    pathHtml: normalizeSafe(target.replace(generateRoot, '')),
                };
                const images = [];
                const links = [];

                const $ = cheerio.load(content);
                const cheerioContent = $('.mx__page__content');

                if (cheerioContent) {
                    obj.html = cheerioContent.html();

                    $('img', cheerioContent).each((i, el) => {
                        const src = $(el).attr('src');
                        const parsed = url.parse(src);

                        if (!parsed.hostname) {
                            // We're only handling local files

                            if (src.indexOf('/') === 0) {
                                images.push(src);
                            } else {
                                const t = target.replace(generateRoot, '');
                                const u = path.parse(t);
                                const s = normalizeSafe(path.join(u.dir, src))
                                images.push(s);
                            }
                        }
                    });

                    $('a', cheerioContent).each((i, el) => {
                        const $el = $(el);
                        const href = $el.attr('href');

                        if (
                            !!href &&
                            href !== "" &&
                            href.indexOf('#') !== 0 &&
                            href.indexOf('http') !== 0 &&
                            href.indexOf('mailto') !== 0
                        ) {
                            try {
                                if (href.indexOf('/') === 0) {
                                    links.push(href);
                                } else {
                                    const t = target.replace(generateRoot, '');
                                    const u = path.parse(t);
                                    const s = normalizeSafe(path.join(u.dir, href));
                                    links.push(s);
                                }
                            } catch (e) {
                                console.log('Error parsing link: ', href, e);
                            }
                        }
                    });

                }

                obj.images = _.uniq(images);
                obj.links = _.uniq(links);

                return obj;
            }),
        (sourceObj, targetObj) => {
            _.merge(sourceObj, targetObj, { path: normalizeSafe('/' + contentPath) });

            res.send(200, sourceObj);
        }
    )

    return next();
};

const pagesHandler = (req, res, next) => {
    gutil.log(`${pluginID} Handling pages`);
    const contentFolder = path.resolve(mainFolder, CONTENTFOLDER);
    const normalizedFolder = normalizeSafe(contentFolder);

    getFiles(contentFolder, '.md')
        .then(filesPaths =>
            filesPaths
                .map(f => normalizeSafe(f))
                .map(filePath => {
                    const parsed = path.parse(filePath);
                    const isIndex = parsed.name === 'index';

                    const normalized = filePath
                        .replace(normalizedFolder, '')
                        .replace('.md', '');

                    return isIndex ?
                        normalized
                            .replace('/index.md', '/')
                            .replace('/index', '/')
                        : normalized;
                })
                .map(p => normalizeSafe(p)))
        .then(files => {
            res.send(200, files.filter(p =>
                p !== '/' && p !== '/search/' &&
                p !== '/index' && p !== '/search/index'
            ));
        })
        .catch(e => {
            res.send(501, e);
        });

    return next();
};

const snippetsHandler = (req, res, next) => {
    gutil.log(`${pluginID} Handling snippets`);
    const snippetsFolder = path.resolve(mainFolder, SNIPPETSFOLDER);
    const normalized = normalizeSafe(snippetsFolder);

    getFiles(snippetsFolder, '.md')
        .then(filePaths => Promise.all(filePaths.map(filePath => readFile(filePath).then(contents => {
            const newPath = normalizeSafe(filePath).replace(normalized, '');
            return {
                path: newPath,
                content: contents.toString()
            };
        }))))
        .then(files => {
            res.send(200, files);
        })
        .catch(e => {
            res.send(501, e);
        })

    return next();
};

const spacesHandler = (req, res, next) => {
    gutil.log(`${pluginID} Handling spaces`);
    const spaceArr = [];
    Object.keys(SPACES).forEach((spaceID) => {
        const obj = SPACES[spaceID];
        obj.id = spaceID;
        spaceArr.push(obj);
    })
    res.send(200, spaceArr);
    return next();
};

const spawn = (folder) => {
    mainFolder = path.resolve(folder);
    SPACES = YAML.load(path.resolve(mainFolder, 'data/spaces.yml'));

    server = restify.createServer();

    server.get(/^\/content\/(.*)/, contentHandler);
    server.get(/^\/pages/, pagesHandler);
    server.get(/^\/snippets/, snippetsHandler);
    server.get(/^\/spaces/, spacesHandler)

    server.listen(7000, () => {
        gutil.log(`${pluginID} Server listening on ${server.url}`);
    });
}

module.exports = {
    spawn
};