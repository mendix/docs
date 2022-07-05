---
title: "Set Up Your Development Environment"
url: /apidocs-mxsdk/mxsdk/setting-up-your-development-environment/
weight: 10
---

## 1 Introduction

This document will lead you through the process of setting up everything you need to start working with the Mendix Platform SDK. This includes setting up development tools and creating a first SDK script that automatically bootstraps a new Mendix app.

## 2 Quick Installation

If you know what you are doing, the quick installation instructions below are for you. Otherwise, please skip this paragraph and continue with the [Setting Up Your Development Tools](#setting) section.

For the quick installation, we assume that you have `node` already installed. 
Set up a new `node` project and install the dependencies using the following steps:

```bash
$ mkdir my-app-generator
$ cd my-app-generator
$ npm init --yes
$ npm install -g typescript
$ npm install mendixmodelsdk mendixplatformsdk --save
$ tsc --init --target es2020
```

## 3 Setting Up Your Development Tools {#setting}

To set up your development tools, follow these steps:

1.  Install the latest LTS version of [Node.js](https://nodejs.org/). If you need to download it, you can find it on [this page](https://nodejs.org/en/download/releases/).

2.  Open a terminal (on Windows, [Command Prompt](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)) and run the following command:

    ```bash
    $ node --version
    v14.15.0
    ```

    For Debian-based Linux distributions such as Ubuntu, please refer to [this article](https://github.com/nodesource/distributions#user-content-installation-instructions) to properly set up your apt-get sources.

    In the rest of the how-to's, in blocks such as the above, lines starting with a `$` represent commands to type into a terminal. Sometimes a line follows without a $, represents output of the command.

3.  Install [Visual Studio Code](https://code.visualstudio.com/) (not to be confused with Visual Studio), a text editor/IDE with good support for [TypeScript](http://www.typescriptlang.org/). Make sure you have a recent version (v1.11.0+); check the version you are using through Help > About when you have Code opened.
4.  Install TypeScript 4.4.3 or higher with [`npm`](https://www.npmjs.com/) (or [`yarn`](https://yarnpkg.com/)), Node.js's package manager:

    ```bash
    $ npm install -g typescript
    ```

5.  Use the following command to check the TypeScript compiler version on your PATH:

    ```bash
    $ tsc --version
    Version 4.4.3 (or higher)
    ```

    If the version number is much lower, it could be that you also have an outdated TypeScript SDK on your system, left over from a previous installation. You can either uninstall the old TypeScript SDK, or bypass it by removing the old TypeScript SDK from your system's PATH environment variable.

## 4 Setting Up a Working Directory for Your Script

To set up a working directory for your script, follow these steps:

1.  Create a new directory and initialize it for use with the Node.js package manager `npm`. Using `--yes` skips several unimportant questions. This creates a [package.json](https://docs.npmjs.com/files/package.json) with default contents. Through this file you control your `npm` package. 

    ```bash
    $ mkdir my-app-generator
    $ cd my-app-generator
    $ npm init --yes
    ```

    Visual Studio Code, other than Visual Studio, works with directories instead of project files.

2.  Start **Visual Studio Code** and open the directory you just created. You can open a new instance of Code from the command line with the directory you want to open as first argument. For example, if your current working directory in your terminal is the directory in which all your project files live, use the following command to open Code:

    ```bash
    $ code .
    ```

3.  Add `mendixmodelsdk`, and `mendixplatformsdk` as dependencies. 
    Dependencies are stored in the `node_modules` directory (which will be automatically created by `npm` if necessary). Open the *package.json* you just created. Add a [`dependencies` block](https://docs.npmjs.com/files/package.json#dependencies) that looks like this:

    ```json
    "dependencies": {
      "mendixmodelsdk": "^4.56.0",
      "mendixplatformsdk": "^5.0.0"
    }
    ```

    When a new major version of the Mendix SDK is released (as in, 1.0.0 to 2.0.0) and you run `npm update` in your project folder, the `^` in front of the version number makes sure that the installed version of the SDK will not be upgraded automatically. Only minor and patch releases (as in, 1.1.1) of the SDK will be automatically upgraded; otherwise, your script could inadvertently be broken. You may, of course, edit the dependency by hand yourself.

4.  Save your changes and then execute the following to install the dependencies:

    ```bash
    $ npm install
    ```
    If you are using version control, make sure to ignore the `node_modules` directory, otherwise you end up committing dependencies.

5.  In Code, create a [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file next to your *package.json*. The *tsconfig.json* file is used by the TypeScript compiler to compile your code in the proper manner to a JS file. Create it with the following contents. 

    ```json
    {
    	"compilerOptions" : {
    		"module" : "commonjs",
    		"target" : "es2020",
            "strict": true
    	},
    	"files" : [
    		"script.ts"
    	]
    }
    ```

    The compiler options should be left as-is. The `files` directive is an array of strings with path names of all TypeScript files that make up your Node.js script or app. You can change it so that the compiler uses the right files.

    Create new files in your app directory with Visual Studio Code by hovering with the mouse pointer over the name of the working directory in the left side pane. A "new file" icon appears. Click it to create a new file. For more information on basic editing with Visual Studio Code, check the [manual](https://code.visualstudio.com/Docs/editor/codebasics).

## 5 Next Step

Continue with [Creating Your First Script](/apidocs-mxsdk/mxsdk/creating-your-first-script/).
