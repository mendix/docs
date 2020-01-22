---
title: "Auto-Load More"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Auto-Load More](https://appstore.home.mendix.com/link/app/50323/) widget

Loads more items on the list view as the user scrolls
Dependencies

Mendix 6.
Demo project

http://autoloadmore.mxapps.io

1
Usage

    Place the widget in the same page/snippet as the target list view (right below it).
    Add the name of the target list view to the widget (found in the common tab of the list view properties in the modeler)

Issues, suggestions and feature requests

We are actively maintaining this widget, please report any issues or suggestions for improvement https://github.com/mendixlabs/auto-load-more/issues
Development

Prerequisite: Install git, node package manager, webpack CLI, grunt CLI

To contribute, fork and clone.

> git clone https://github.com/mendixlabs/auto-load-more.git

The code is in typescript. Use a typescript IDE of your choice, like Visual Studio Code or WebStorm.

To set up the development environment, run:

> npm install

Create a folder named dist in the project root.

Create a Mendix test project in the dist folder and rename its root folder to dist/MxTestProject. Changes to the widget code shall be automatically pushed to this test project. https://github.com/mendixlabs/auto-load-more/releases/download/v1.1.2/TestAutoLoadMore.mpk

To automatically compile, bundle and push code changes to the running test project, run:

> grunt
