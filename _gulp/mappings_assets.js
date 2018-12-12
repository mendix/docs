const _ = require('lodash');
const path = require('path');
const fs = require('fs');

const { touch, isFile } = require('./helpers');
const commandLineHelpers = require('./helpers/command_line');

const writeAssetMappings = (currentFolder) => new Promise((resolve, reject) => {
    const assetMappingLog = commandLineHelpers.log('asset mapping');
    const indexMappingHeader = [
        '############################################################################################',
        `# Mendix assets redirect mapping`,
        '############################################################################################',
        ''
    ];
    const indexDest = path.join(currentFolder, './_site/mappings/assets.map');
    const assetsJS = path.join(currentFolder, './data/assetsjs.json');
    const assetsCSS = path.join(currentFolder, './data/assetscss.json');

    touch(indexDest);

    let index = [];
    if (isFile(assetsJS)) {
        _.mapKeys(require(assetsJS), (v, k) => {
            index.push({
                from: `~*\\/public\\/js\\/${k.replace('.', '\\\.')}`,
                to: `/public/js/${v}`
            });
        });
    }
    if (isFile(assetsCSS)) {
        _.mapKeys(require(assetsCSS), (v, k) => {
            index.push({
                from: `~*\\/public\\/styles\\/${k.replace('.', '\\\.')}`,
                to: `/public/styles/${v}`
            });
        });
    }

    const indexMapping = _.chain(index)
        .sortBy(file => file.from.length)
        .map(file => `${file.from} ${file.to};`)
        .value();

    let indexes = indexMappingHeader.concat(indexMapping).join('\n');

    fs.writeFile(indexDest, indexes, err => {
        if (err) {
            assetMappingLog(`Error writing asset mappings: ${err}`)
            reject();
        } else {
            assetMappingLog(`Asset mappings written to ${indexDest}`);
            resolve();
        }
    });
});

module.exports = writeAssetMappings;
