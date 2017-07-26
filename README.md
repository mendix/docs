# Mendix Documentation

This repository contains the Mendix documentation, which is served on [https://docs.mendix.com](https://docs.mendix.com).

Build status:
  * master [![Build Status](https://secure.travis-ci.org/mendix/docs.png?branch=master)](https://travis-ci.org/mendix/docs)
  * development [![Build Status](https://secure.travis-ci.org/mendix/docs.png?branch=development)](https://travis-ci.org/mendix/docs)

Want to contribute? Take a look at our [contribution guide](https://docs.mendix.com/community/documentation/contribute-to-the-mendix-documentation).

## Development

There are two ways to develop the Documentation. You can run it locally (faster) or using Docker. With Docker you will not have to install Hugo & Node, but you need Docker and docker-compose

### Local Development

The Mendix Documentation is build to top of Hugo and Node.JS. When you want to develop the documentation locally, you need to have both installed.

#### Prerequisites

Hugo is a Static Page Generator that runs on Go. Make sure you install Hugo following [these guides](https://gohugo.io/getting-started/installing/)

Node.js is a JavaScript runtime. You can install it by downloading the installer [here](https://nodejs.org/en/download/). We are using the __Current__ version (`8.x.x`)

#### Install dependencies

- Open a terminal window. In Windows you can run this by pressing Win + R, type `cmd` and press Enter.
- Go to the folder where the documentation resides: `cd C:\Projects\Mendix\docs` (assuming you have put it in this folder).
- Now check if you have both Hugo and Node.JS installed correctly (type these commands in your terminal and press Enter):

`hugo version`

It should show you the version: `Hugo Static Site Generator v0.25.1 xxxx`

`node -v`

It should show you the version: `v8.1.3` (the version number you installed)

- If both commands work, there is one more step you need to take to install the dependencies:

`npm install`

This will take a while. It will install all dependencies you need. You can also use __yarn__. Make sure yarn is installed and run `yarn`.

#### Running the server

Running the server is done by executing the following command: `npm run server`

It takes a few seconds (Windows can take longer) to build the site and setup the server. If it's done, open a browser and go to [http://localhost:4000](http://localhost:4000)

#### Gulp tasks

Make sure you have Gulp installed first: `npm install gulp -g`. By running `gulp help` you can access the different tasks that are used when building the website.

**Please note that the task `check:html` is currently broken in Windows**

### Using Docker for Development

A Docker setup potentially makes development and deployment easier.

To use it, install [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).

Then build the Docker images with:

```sh
docker-compose build
```

Once the above command finishes, run:

```sh
docker-compose run app yarn
```

which will install node dependencies.

Then run:

```sh
docker-compose up
```

This will start up the server and watches for changes. You should be able to visit [http://localhost:4000/](http://localhost:4000/) to view the site.
