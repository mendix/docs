---
title: "Switch"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Switch](https://appstore.home.mendix.com/link/app/50324/) widget enables toggling a Boolean attribute.

### 1.1 Features

* Deactivate when attribute or context is read-only
* Execute a microflow when toggled
* Execute a nanoflow when toggled
* Add a label to the switch
* Display in either iOS style or android(material design)
* Display in various bootstrap styles

Demo project

http://booleansliderwidge.mxapps.io
Usage

Place the widget in the context of an object that has a boolean attribute.
Issues, suggestions and feature requests

We are actively maintaining this widget, please report any issues or suggestion for improvement at https://github.com/mendixlabs/boolean-slider/issues
Development

Prerequisite: Install git, node package manager, webpack CLI, grunt CLI, Karma CLI

To contribute, fork and clone.

> git clone https://github.com/mendixlabs/boolean-slider.git

The code is in typescript. Use a typescript IDE of your choice, like Visual Studio Code or WebStorm.

To set up the development environment, run:

> npm install

Create a folder named dist in the project root.

Create a Mendix test project in the dist folder and rename its root folder to dist/MxTestProject. Changes to the widget code shall be automatically pushed to this test project.

https://github.com/MendixLabs/boolean-slider/releases/latest

To automatically compile, bundle and push code changes to the running test project, run:

> grunt

To run the project unit tests with code coverage, results can be found at dist/testresults/coverage/index.html, run:

> npm test

or run the test continuously during development:

> karma start
