const markdownpdf = require('markdown-pdf');
const { getFiles, isDir, gulpErr } = require('./helpers');
const { log, colors } = require('./helpers/command_line');
const split = require('split');
const through = require('through');
const duplexer = require('duplexer');
const Promise = require('bluebird');
const fm = require('front-matter');
const path = require('path');
const promiseLimit = require('promise-limit');
const cheerio = require('cheerio');
const gutil = require('gulp-util');

let built = 0;
let toBuild = 0;
let lastParsed = -1;

const pluginID = gutil.colors.cyan('[PDF]');
const logUtil = log('PDF');

function preProcessMd () {
    // Split the input stream by lines
    var splitter = split()

    // Replace occurences of "foo" with "bar"
    var replacer = through(function (data) {
        console.log(data);
      this.queue(data)
    })

    splitter.pipe(replacer)
    return duplexer(splitter, replacer)
}

function preProcessHtml (file) {
    return function () {
        // Split the input stream by lines
        const splitter = split()

        // Replace occurences of "foo" with "bar"
        const replacer = through(function (data) {
            const $ = cheerio.load(data);
            $('a').each(function(i, el) {
                const $el = $(this);
                if ($el) {
                    const text = $el.text();
                    const href = ($el.attr('href') || '').trim();
                    if (href.indexOf('http:') !== 0 && href.indexOf('https') !== 0) {
                        let p = path.join(path.dirname(file.src), href);
                        if (href.indexOf('/') === 0) {
                            p = href;
                        } else if (href.indexOf('#') === 0) {
                            p = (file.url + href).replace('https://docs.mendix.com', '');
                        } else {
                            p = path.join('/best-practices', p);
                        }
                        const newPath = 'https://docs.mendix.com' + p.replace(file.base, '');
                        const replacement = `<a href="${newPath}">${text}</a>`;
                        // console.log(file.src)
                        // console.log(file.url)
                        // console.log(href);
                        // // console.log(p);
                        // console.log(replacement);
                        // console.log('=====> \n');
                        $el.replaceWith($(replacement));
                    }
                }
            });
            this.queue($('body').html());
        })

        splitter.pipe(replacer)
        return duplexer(splitter, replacer)
    }
}

const frontMatterExtraction = (file) => {
    return md => {
        const oldRender = md.render;

        md.render = (str) => {
            const content = fm(str);

            let body = content.body;
            if (content.attributes && content.attributes.title) {
                body = `# ${content.attributes.title}\n#### URL: [${file.url}](${file.url})\n\n` + content.body;
            }
            body = body.replace(/\{#.*\}/ig, '');
            body = body.replace(/\{\{%.*%\}\}/ig, '');

            return oldRender.call(md, body);
        }
    }
}

const markdownToPDF = file => new Promise((resolve, reject) => {
    const cwd = path.dirname(file.src);
    markdownpdf({
            // preProcessMd,
            preProcessHtml: preProcessHtml(file),
            cwd,
            remarkable: {
                html: true,
                xhtmlOut: false,
                linkify: false,
                breaks: false,
                preset: 'full',
                syntax: [ 'sup', 'sub' ],
                plugins: [
                    frontMatterExtraction(file)
                ]
            },
            cssPath: path.join(__dirname, 'pdf', 'pdf.css'),
            runningsPath: path.join(__dirname, 'pdf', 'runnings.js')
        })
        .from(file.src)
        .to(file.dist, () => {
            built++;
            const perc = Math.floor(100 * (built / toBuild));
            if (perc % 10 === 0 && perc !== lastParsed) {
              lastParsed = perc;
              gutil.log(`${pluginID} PDFs created: ${perc}%`);
            }
            // gutil.log(`${pluginID} Written PDF for ${file.url}`);
            resolve(true);
        })
});

const generatePDF = async (opts) => {
    // TODO: Remove this to enable PDFs on production
    logUtil(`Building pdf is only supported in draft modus, draft is set to: ${colors.cyan(opts.drafts)}`);
    if (!opts.drafts) {
        opts.cb && opts.cb(false);
        return;
    }
    if (!isDir(opts.src)) {
        gulpErr('pdf', colors.red(`Folder: "${opts.src}" is not a dir!`));
        opts.cb && opts.cb(true);
        return;
    }
    const allMarkdownFiles = await getFiles(opts.src, '.md');
    const mappedFiles = allMarkdownFiles.map(file => {
        const f = {
            src: file,
            base: opts.src,
            url: `https://docs.mendix.com/best-practices${file.replace(opts.src, '').replace('index.md', '').replace('.md', '')}`,
            dist: file.replace(opts.src, opts.dist).replace('.md', '.pdf')
        };
        return f;
    });
    const limit = promiseLimit(10);

    gutil.log(`${pluginID} Writing ${mappedFiles.length} PDFs`);
    toBuild = mappedFiles.length;
    built = 0;

    await Promise.all(mappedFiles.map(file => limit(() => markdownToPDF(file))));

    opts.cb && opts.cb(false);
}

module.exports = generatePDF;
