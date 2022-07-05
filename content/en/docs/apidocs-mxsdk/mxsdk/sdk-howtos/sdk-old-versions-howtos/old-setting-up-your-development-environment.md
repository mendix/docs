---
title: "Set Up Your Development Environment (Old Versions)"
url: /apidocs-mxsdk/mxsdk/old-setting-up-your-development-environment/
weight: 1
---

## 1 Introduction

This how-to will lead you through the process of setting up everything you need to start working with the Mendix Platform SDK. This includes setting up development tools and creating your first SDK script that automatically bootstraps a new Mendix app.

## 2 Quick Installation

If you know what you are doing, the quick installation instructions below are for you. Otherwise, please skip this paragraph and continue with the [Setting Up Your Development Tools](#setting) section.

For the quick installation, we assume that you have `node` already installed. 

Set up a new `node` project and install the dependencies using the following steps:

```bash
$ mkdir my-app-generator
$ cd my-app-generator
$ npm init --yes
$ npm install -g typescript
$ npm install mendixmodelsdk mendixplatformsdk when @types/when --save
$ tsc --init --target es2018
```

## 3 Setting Up Your Development Tools {#setting}

To set up your development tools, follow these steps:

1.  Install the latest LTS version of [Node.js](https://nodejs.org/). If you need to download it, you can find it on [Node.js Downloads](https://nodejs.org/en/download/releases/).
2.  Open a terminal (on Windows, this is [Command Prompt](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)) and run the following command:

    ```bash
    $ node --version
    v10.13.0
    ```

    For Debian-based Linux distributions such as Ubuntu, refer to these [Installation Instructions](https://github.com/nodesource/distributions#user-content-installation-instructions) to properly set up your `apt-get` sources.

    {{% alert color="info" %}}In the rest of the how-to's in these series, in blocks such as the above, lines starting with `$` represent commands to type into a terminal. Sometimes a line follows without a `$`, which represents the output of the command.
    {{% /alert %}}

3.  Install [Visual Studio Code](https://code.visualstudio.com/) (not to be confused with Visual Studio), a text editor/IDE with good support for [TypeScript](http://www.typescriptlang.org/). Make sure you have a recent version (v1.11.0+) (you can check the version you are using via **Help** > **About**).
4.  Install TypeScript 3.6.2 (or higher) with [`npm`](https://www.npmjs.com/), Node.js's package manager:

    ```bash
    $ npm install -g typescript
    ```

5.  Use the following command to check the TypeScript compiler version on your PATH:

    ```bash
    $ tsc --version
    Version 3.6.2 (or higher)
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

    {{% alert color="info" %}}Visual Studio Code works with directories instead of project files.
    {{% /alert %}}

2.  Start Visual Studio Code and open the directory you just created. You can open a new instance of VSC from the command line with the directory you want to open as the first argument. For example, if your current working directory in your terminal is the directory in which all your project files live, use the following command to open VSC:

    ```bash
    $ code .
    ```

3.  Add `mendixmodelsdk,` `mendixplatformsdk,` and `when.js` as dependencies. Dependencies are stored in the `node_modules` directory (which will be automatically created by `npm` if necessary). Open the *package.json* you just created, then add a `dependencies` [block](https://docs.npmjs.com/files/package.json#dependencies) that looks like this:

    ```json
    "dependencies": {
      "@types/when": "^2.4.33",
      "mendixmodelsdk": "^4.35.0",
      "mendixplatformsdk": "^4.1.1",
      "when": "^3.7.8"
    }
    ```

    When a new major version of the Mendix SDK is released (for example, 1.0.0 to 2.0.0) and you run `npm update` in your app project folder, the `^` in front of the version number makes sure that the installed version of the SDK will not be upgraded automatically. Only minor and patch releases (for example, 1.1.1) of the SDK are automatically upgraded; otherwise, your script could inadvertently be broken. You may, of course, edit the dependency by hand yourself.

4.  Save your changes and then execute the following to install the dependencies:

    ```bash
    $ npm install
    ```
    If you are using version control, make sure to ignore the `node_modules` directory, or you will end up committing dependencies.

5.  In VSC, create a [tsconfig.json](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json) file next to your *package.json*. The *tsconfig.json* file is used by the TypeScript compiler to compile your code in the proper manner to a JS file. Create it with the following contents. 

    ```json
    {
    	"compilerOptions" : {
    		"module" : "commonjs",
    		"target" : "es2018",
            "strict": true
    	},
    	"files" : [
    		"script.ts"
    	]
    }
    ```

    The compiler options should be left as is. The `files` directive is an array of strings with the path names of all the TypeScript files that make up your Node.js script or app. You can change it so that the compiler uses the right files.

    Create new files in your app directory with Visual Studio Code by hovering over the name of the working directory in the left-side pane. When the **New file** icon appears, click it to create a new file. For more information on basic editing with VSC, see [Basic Editing](https://code.visualstudio.com/Docs/editor/codebasics).

## 5 Next Step

Continue with [How to Create Your First Script (Old Versions)](/apidocs-mxsdk/mxsdk/old-creating-your-first-script/).
