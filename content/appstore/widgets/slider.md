---
title: "Slider"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Slider](https://appstore.home.mendix.com/link/app/48786/) can be used to change a number value using a slider.

### 1.1 Features

* Adjust the slider value
* Execute a microflow when a slider value is changed or clicked
* Show a tooltip on hover
* Render slider with different bootstrap colors

Demo project

https://slider.mxapps.io/
Basic configuration

    Value attribute - The selected value on the slider.
    Range minimum attribute - The attribute that contains the minimum slider value, if not provided, 'Default minimum value' will be used.
    Range maximum attribute - The attribute that contains the maximum slider value, if not provided, 'Default maximum value' will be used.

Sample slider datasource configuration
Usage

The slider allows a user to set a value between two bounds (minimum value and maximum value) However, if there are two values that need to be set between two bounds, download the Range slider from appstore or from github instead.

Sample slider

From the modeler place the widget in the context of an object that has attributes for maximum value, minimum value and value

The maximum and minimum values determine the range within which the slider value can be adjusted.

The step value determines the next point to shift to when sliding (interval between to points or numbers).

Sample step value

Note when choosing the step value, the difference between the maximum value and the minimum value should be divisible by 2. i.e.

(maximumValue - minimumValue) % 2 = 0

Issues, suggestions and feature requests

We are actively maintaining this widget, please report any issues or suggestions for improvement at https://github.com/mendixlabs/slider/issues
Development

Prerequisite: Install git, node package manager, webpack CLI, grunt CLI, Karma CLI

To contribute, fork and clone.

> git clone https://github.com/mendixlabs/slider.git

The code is in typescript. Use a typescript IDE of your choice, like Visual Studio Code or WebStorm.

To set up the development environment, run:

> npm install

Create a folder named dist in the project root.

Create a Mendix test project in the dist folder and rename its root folder to dist/MxTestProject. Or get the test project from https://github.com/mendixlabs/slider/releases/latest Changes to the widget code shall be automatically pushed to this test project.

To automatically compile, bundle and push code changes to the running test project, run:

> grunt

To run the project unit tests with code coverage, results can be found at dist/testresults/coverage/index.html, run:

> npm test

or run the test continuously during development:

> karma start
