---
title: "Badge Button"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Badge Button](https://appstore.home.mendix.com/link/app/52705/) 

A special distinctive mark or token put on any display as a button
Features

    Display a badge on a button.
    Attach an onclick microflow
    Attach an onclick nanoflow
    Set static data when the persisted data is not specified

Dependencies

Mendix 7.13.1
Demo project

https://badgebutton.mxapps.io/

Demo
Usage

Place the widget in the context of an object that has a value attribute.

The data source attribute specified in the Badge tab is optional. If not set, static data should be specified in the Button tab.

Static attributes Data source Behavior
Issues, suggestions and feature requests

We are actively maintaining this widget, please report any issues or suggestion for improvement at https://github.com/mendixlabs/badge-button/issues
Developer

Prerequisite: Install git, node package manager, webpack CLI, grunt CLI, Karma CLI

To contribute, fork and clone.

git clone https://github.com/mendixlabs/badge-button.git

The code is in typescript. Use a typescript IDE of your choice, like Visual Studio Code or WebStorm.

To set up the development environment, run:

npm install

Create a folder named dist in the project root.

Create a Mendix test project in the dist folder and rename its root folder to dist/MxTestProject. Changes to the widget code shall be automatically pushed to this test project. Or get the test project from https://github.com/mendixlabs/badge-button/releases/latest

To automatically compile, bundle and push code changes to the running test project, run:

grunt

To run the project unit tests with code coverage, results can be found at dist/testresults/coverage/index.html, run:

npm test

or run the test continuously during development:

karma start
