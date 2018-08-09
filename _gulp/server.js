const Server = require('spa-server');
const path = require('path');
const url = require('url');
const shell = require('shelljs');

const spawnServer = (folder) => {
  const targetFolder = path.resolve(folder, '_site');
  const server = Server.create({
    path: targetFolder,
    port: 8888,
    middleware: [function (req, res, next) {
      next();
    }],
    fallback: (req, res) => {
      const parsed = url.parse(req.url),
        target = parsed.pathname + '.html',
        alternateTarget = parsed.pathname + '/index.html';

      if (shell.test('-f', path.join(targetFolder, target))) {
        return target + (parsed.query ? `?${parsed.query}` : '');
      }
      if (shell.test('-f', path.resolve(targetFolder, alternateTarget))) {
        return alternateTarget + (parsed.query ? `?${parsed.query}` : '');
      }
      return '404.html';
    }
  })
  server.start();
};

module.exports = {
  spawn: spawnServer
};
