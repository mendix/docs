---
title: "Set Up Your Development Environment"
url: /apidocs-mxsdk/mxsdk/setting-up-your-development-environment/
weight: 10
---

## Introduction

This document will lead you through the process of setting up everything you need to start working with the Mendix Platform SDK. This includes setting up development tools and creating a first SDK script that automatically bootstraps a new Mendix app.

## Quick Installation

If you know what you are doing, the quick installation instructions below are for you. Otherwise, skip this paragraph and continue with the [Setting Up Your Development Tools](#setting) section.

For the quick installation, we assume that you have `node` already installed. 
Set up a new `node` project and install the dependencies using the following steps:

```bash
$ mkdir my-app-generator
$ cd my-app-generator
$ npm init --yes
$ npm install mendixmodelsdk mendixplatformsdk --save
$ npm install typescript@~4.6.2 @types/node@^22 --save-dev
```

You can now proceed directly to step 6 in the [Setting Up a Working Directory for Your Script](#setting-working-directory) section to configure TypeScript.

## Setting Up Your Development Tools {#setting}

To set up your development tools, follow these steps:

1. Download and install the latest LTS version of [Node.js](https://nodejs.org/en/download).

2. Open a terminal (on Windows, [Command Prompt](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)) and run the following command:

    ```bash
    $ node --version
    v22.15.0
    ```

    For Debian-based Linux distributions such as Ubuntu, refer to [NodeSource Node.js Binary Distributions](https://github.com/nodesource/distributions#user-content-installation-instructions) to properly set up your apt-get sources.

    In the rest of the how-tos, in code blocks such as the above, lines starting with a `$` represent the commands you should type into a terminal. Lines without `$` immediately following a command represent the output produced by that command.

3. Install [Visual Studio Code](https://code.visualstudio.com/) (VS Code: not to be confused with Visual Studio), a text editor/IDE with good support for [TypeScript](https://www.typescriptlang.org/). Make sure you have a recent version (v1.11.0+). Check the version you are using through **Help > About** when you have VS Code opened.

## Setting Up a Working Directory for Your Script {#setting-working-directory}

To set up a working directory for your script, follow these steps:

1. Create a new directory and initialize it for use with the Node.js package manager `npm`. Using `--yes` skips several unimportant questions. This creates a [package.json](https://docs.npmjs.com/files/package.json) with default contents. Through this file you control your `npm` package. 

    ```bash
    $ mkdir my-app-generator
    $ cd my-app-generator
    $ npm init --yes
    ```

    Visual Studio Code, other than Visual Studio, works with directories instead of project files.

2. Start Visual Studio Code and open the directory you just created. You can open a new instance of VS Code from the command line with the directory you want to open as first argument. For example, if your current working directory in your terminal is the directory in which all your project files live, use the following command to open VS Code:

    ```bash
    $ code .
    ```

3. Add `mendixmodelsdk` and `mendixplatformsdk` as dependencies. 
    Dependencies are stored in the `node_modules` directory (which will be automatically created by `npm` if necessary). Open the *package.json* you just created. Add a [`dependencies` block](https://docs.npmjs.com/files/package.json#dependencies) that looks like this:

    ```json
    "dependencies": {
      "mendixmodelsdk": "^4.102.0",
      "mendixplatformsdk": "^5.2.0"
    }
    ```

    When a new major version of the Mendix SDK is released (as in, 1.0.0 to 2.0.0) and you run `npm update` in your project folder, the `^` in front of the version number makes sure that the installed version of the SDK is not upgraded automatically. Only minor and patch releases (as in, 1.1.1) of the SDK will be automatically upgraded; otherwise, your script could inadvertently be broken. You may, of course, edit the dependency yourself.

4. Add `typescript` and `@types/node` as dev dependencies. 
    Packages like TypeScript, testing libraries, linters, and type definitions (@types/...) are not required for your app to run in production—they are only needed while writing and testing code.

    ```json
    "devDependencies": {
      "typescript": "~4.6.2",
      "@types/node": "^22.0.3"
    }
    ```

5. Save your changes and then run the following command to install the dependencies:

    ```bash
    $ npm install
    ```

    If you are using version control, make sure to ignore the `node_modules` directory, otherwise you end up committing dependencies.

6. In VS Code, create a [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file in the same directory of *package.json*. The *tsconfig.json* file is used by the TypeScript compiler to compile your code in a proper manner to a JavaScript file. Add the following contents to the *tsconfig.json* file:

    ```json
    {
        "compilerOptions": {
            "target": "es2020",
            "module": "commonjs",
            "esModuleInterop": true,
            "forceConsistentCasingInFileNames": true,
            "strict": true,
            "skipLibCheck": true
        },
        "files": ["script.ts"]
    }
    ```

    The compiler options should be left as-is. The `files` directive is an array of strings with path names of all TypeScript files that make up your Node.js script or app. You can change it so that the compiler uses the right files.
    
    Create new files in your app directory with VS Code by hovering over the name of the working directory in the left-side pane. When the **New file** icon appears, click it to create a new file. For more information on basic editing with VS Code, see [Basic Editing](https://code.visualstudio.com/Docs/editor/codebasics).

## Next Step

Continue with [Creating Your First Script](/apidocs-mxsdk/mxsdk/creating-your-first-script/).
