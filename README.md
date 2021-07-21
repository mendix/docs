# Mendix Documentation ![badge](https://img.shields.io/badge/hugo-0.31.1-green.svg)

This repository contains the Mendix documentation, which is served on [https://docs.mendix.com](https://docs.mendix.com).

Build status:

* master [![Build Status](https://secure.travis-ci.org/mendix/docs.png?branch=master)](https://travis-ci.org/mendix/docs)
* development [![Build Status](https://secure.travis-ci.org/mendix/docs.png?branch=development)](https://travis-ci.org/mendix/docs)

## Contribute

Want to contribute? Take a look at [How to Contribute to the Mendix Documentation](https://docs.mendix.com/developerportal/community-tools/contribute-to-the-mendix-documentation).

## Development

There are two ways to develop the documentation: you can run it locally (which is faster) or use Docker. With Docker, you will not have to install Hugo and Node, but you need Docker and Docker Compose.

### Local Development

The Mendix documentation is built on top of Hugo and Node.JS. When you want to develop the documentation locally, you need to have both installed.

#### Prerequisites

Hugo is a static page generator that runs on Go. Make sure you install Hugo following [these guides](https://gohugo.io/getting-started/installing/).

Node.js is a JavaScript runtime. You can install it by downloading the installer [here](https://nodejs.org/en/download/). We are using version (`12.x.x`).

#### Installing Dependencies

1. Open a terminal window. In Windows, you can run this by pressing <kbd>Win</kbd> + <kbd>R</kbd>, typing `cmd`, and pressing <kbd>Enter</kbd>.
2. Go to the folder where the documentation resides: `cd C:\Projects\Mendix\docs` (assuming you have put it in this folder).
3. Check if you have both Hugo, Node.JS and yarn installed correctly by typing these commands in your terminal and pressing <kbd>Enter</kbd>):

   `hugo version`

   It should show you the version: `Hugo Static Site Generator v0.31.1 xxxx`. **Note: It is important to match this version number! Because of breaking changes this will not work with Hugo version >= 0.32**

   `node -v`

   It should show you the version: `v12.0.0` (the version number you installed)

   `yarn -v`

   It should show you yarn version

4. If both commands work, there is one more command you need to type to install the dependencies:

   `yarn install`

   This will take a while. It will install all project dependencies specified in package.json.

#### Running the Server

##### Windows

The steps in this section assume you have installed Hugo and Node in the root directory of your local repository. For example, Hugo is installed in *C:\Projects\Mendix\docs\hugo*. If this is not the case, you will have to edit the commands in step 3 to reflect their install paths.

Running the server is done by performing the following steps:

1. In a terminal window navigate to your local repository directory. 
2. Run command `SETLOCAL`.
3. Run command `SET PATH="%PATH%;C:\Projects\Mendix\docs\node;C:\Projects\Mendix\docs\hugo"`.
4. Run command `npm.cmd run win-serve-test`.
5. Wait for the site to build, it can take over 30 seconds.
6. When it's done, open a browser and go to [http://localhost:4000](http://localhost:4000).

##### Other

Running the server is done by executing the following command: `npm run serve-test`.

It takes a few seconds to build the site and setup the server.

When it's done, open a browser and go to [http://localhost:4000](http://localhost:4000).

#### Gulp Tasks

By running `yarn run help`, you can access the different tasks that are used when building the website.

**Please note that the task `check:html` is currently broken in Windows.**

### Using Docker for Development

A Docker setup potentially makes development and deployment easier.

To use it, follow these steps:

1. Install [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).
2. Build the Docker images with:

   ```sh
   docker-compose build
   ```

3. Then run:

   ```sh
   docker-compose up
   ```

   This will start up the server and watches for changes. You should be able to visit [http://localhost:4000/](http://localhost:4000/) to view the site.
