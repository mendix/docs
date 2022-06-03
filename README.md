# Mendix Documentation [![badge](https://img.shields.io/badge/hugo-0.91.0-green.svg)](https://gohugo.io/) [![badge](https://img.shields.io/badge/node-16.14.0-green.svg)](https://nodejs.org/en/) [![badge](https://img.shields.io/badge/docsy-0.1.0-green.svg)](https://www.docsy.dev/)

This repository contains the Mendix documentation, which is served on [https://docs.mendix.com](https://docs.mendix.com).

Build status:

* production [![Build Status](https://secure.travis-ci.org/mendix/docs.png?branch=production)](https://travis-ci.org/mendix/docs)
* development [![Build Status](https://secure.travis-ci.org/mendix/docs.png?branch=development)](https://travis-ci.org/mendix/docs)

## Contribute

Want to contribute? Take a look at [How to Contribute to the Mendix Documentation](https://docs.mendix.com/developerportal/community-tools/contribute-to-the-mendix-documentation). It will guide you through the process of submitting updates to the docs directly from Github or from a local branch.

## Local Build

You can clone a local copy of the repository and build local previews. The Mendix documentation is built on top of Hugo and Node.JS. The theme of the page is based on Docsy. To develop the documentation locally, follow the steps in the next section.

### Setting Up

#### Cloning the Repo

To clone the repo there are a few things to keep in mind:

* If you are running on Windows, the directory path for the local directory should not be too long, otherwise some files will reach the limits of git’s file length. A base path of up to 50 characters works - 64 characters is currently too long.
* If you are using a Git GUI-based tool (such as Sourcetree), make sure you have **Recurse submodules** checked. Github Desktop does this automatically for you.
* If you are cloning the repo via Git commands from a terminal, run: `git clone --recurse-submodules https://github.com/mendix/docs`

Clone the repo through one of the above mentioned methods. Check that you have content within the directory `/themes/docsy/`.

#### Installing Dependencies

1. Download and install [NodeJS](https://nodejs.org/en/download/). Use the version indicated at the top of this readme.
1. In a terminal at the root of the repository run: `npm install`.
1. Download the [0.91 Hugo](https://github.com/gohugoio/hugo/releases/tag/v0.91.0) *extended* version.
1. Extract hugo.exe from the archive and place it in the root of the repo directory. None of the other files are needed.

Changes made to your local repository, such as adding the Hugo executable, should be excluded from git control. If any new/changed files are added to your uncommitted files, please do not commit the changes.

### Running the Server

To run a local version of the site: 

1. Run cmd: `hugo server --environment development`

    Once the site is built you will see a table indicating how many pages have been created. You will need to wait until the server is set up before you can see the site.

2. Go to http://localhost:1313/  and see the site live.

See the [Hugo Server](https://gohugo.io/commands/hugo_server/) documentation for more options (for example, if you want to change the port on which the site is published)

#### Potential Issues

If you are using a Mac, you might get an error `too many open files` or `fatal error: pipe failed`. By default, your Mac is probably set to restrict the number of open files. You will need to override this, see [Docsy known issues](https://www.docsy.dev/docs/getting-started/#known-issues) for more information.