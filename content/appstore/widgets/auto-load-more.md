---
title: "Auto-Load More"
category: "Widgets"
description: "Describes the configuration and usage of the Auto-Load More widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "auto-load more", "load", "platform support"]
draft: true
---

## 1 Introduction

The [Auto-Load More](https://appstore.home.mendix.com/link/app/50323/) widget loads more items on the list view as the end-user scrolls.

### 1.1 Demo App Project

For a demo app project that has been deployed with this widget, see [here](http://autoloadmore.mxapps.io).

## 2 Usage

1. Place the widget in the same page or snippet as the target list view (as in, right below it).
2. Add the name of the **Target list view** to the widget (which can be found in the **Common** tab of the list view properties in Studio Pro).

## 3 Developing This App Store Component

1. Install the following:
	* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	* [npm](https://www.npmjs.com/)
	* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
	* [grunt-cli](https://github.com/gruntjs/grunt-cli)
2. Fork and clone the [mendixlabs/auto-load-more]( https://github.com/mendixlabs/auto-load-more.git) repository. The code is in Typescript.
3. Set up the development environment by running `npm install`.
4. Create a folder named *dist* in the project root.
5. Create a Mendix test project in the *dist* folder and rename its root folder to *dist/MxTestProject*, or get the test project from [mendixlabs/auto-load-more](https://github.com/mendixlabs/auto-load-more/releases/download/v1.1.2/TestAutoLoadMore.mpk). Changes to the widget code will be automatically pushed to this test project.
6. To automatically compile, bundle, and push code changes to the running test project, run `grunt`.

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendixlabs/auto-load-more](https://github.com/mendixlabs/auto-load-more/issues).
