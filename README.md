# Mendix Documentation [![hugo_badge](https://img.shields.io/badge/hugo-0.126.1-green.svg)](https://gohugo.io/) [![node_badge](https://img.shields.io/badge/node-20.9.0-green.svg)](https://nodejs.org/en/) [![docsy_badge](https://img.shields.io/badge/docsy-0.10.0-green.svg)](https://www.docsy.dev/)

This repository contains the Mendix documentation, which is served on [https://docs.mendix.com](https://docs.mendix.com).

Build status:

* production [![Build Status](https://secure.travis-ci.org/mendix/docs.png?branch=production)](https://app.travis-ci.com/github/mendix/docs)
* development [![Build Status](https://secure.travis-ci.org/mendix/docs.png?branch=development)](https://app.travis-ci.com/github/mendix/docs)

## Contribute

Want to contribute? Take a look at [How to Contribute to Mendix Docs](https://docs.mendix.com/community-tools/contribute-to-mendix-docs/). It will guide you through the process of submitting updates to the docs directly from GitHub or from a local branch.

## Local Build

You can clone a local copy of the repository and build local previews. The Mendix documentation is built on top of Hugo and Node.js. The theme of the page is based on Docsy. To develop the documentation locally, follow the steps in the next section.

### Setting Up

#### Cloning the Repo

When you clone the repo, keep the following in mind:

* If you are using Windows, the directory path for the local directory should not be too long; otherwise, some files will reach the limits of Git’s file length. A base path of up to 50 characters works—64 characters is currently too long.

#### Installing Dependencies

1. Download and install the LTS version of [Node.js](https://nodejs.org/en/download/prebuilt-installer).
1. In a terminal at the root of the repository, run `npm install`.

### Running the Server

To run a local version of the site: 

1. Run one of the following commands:

    * `npm run build`
    * `./node_modules/.bin/hugo server --environment development` – in this case, you can use [different parameters](https://gohugo.io/commands/hugo_server/) to build the site in different ways—for example, build a copy of the production site and save it locally. 
    
        The path syntax prefacing `hugo` may be different based on the operating system and terminal you use.

    Once the site is built, you will see a table indicating how many pages have been created. You will need to wait until the server is set up before you can see the site.

2. Go to http://localhost:1313/ and see the site live.

See the [Hugo Server](https://gohugo.io/commands/hugo_server/) documentation for more options (for example, if you want to change the port on which the site is published).

#### Potential Issues

If you are using a Mac, you might get an error `too many open files` or `fatal error: pipe failed`. By default, your Mac is probably set to restrict the number of open files. You will need to override this, see [Docsy known issues](https://www.docsy.dev/docs/getting-started/#known-issues) for more information.

If your system has a low memory limit, add the `--renderToDisk` parameter to the Hugo command (for example, `hugo server --environment development --renderToDisk`). With this option, Hugo only loads pages on demand; without the `--renderToDisk` option, Hugo loads all documentation into memory for faster access.
