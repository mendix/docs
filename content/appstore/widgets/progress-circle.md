---
title: "Progress Circle"
category: "Widgets"
description: "Describes the configuration and usage of the Progress Circle widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "progress circle", "platform support"]
draft: true
---

## 1 Introduction

The [Progress Circle](https://appstore.home.mendix.com/link/app/47783/) widget displays a progress in a circle.

### 1.1 Features

* Show percentage based on the progress value and maximum progress value
* Animate on load and on update
* Open a page or run a microflow on click
* Show the progress circle with different colors

### 1.2 Demo App Project

For a demo app project that has been deployed with this widget, see [here](https://progresscircle.mxapps.io).

## 2 Usage

Place the widget in the context of an object that has attributes for **Value attribute** and **Maximum value attribute**:
* If **Value attribute** is not set, **Value static** will be used to calculate the progress
* If **Maximum value attribute** is not set, the maximum value defaults to **Maximum value static**

## 3 Developing This App Store Component

1. Install the following:
	* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	* [npm](https://www.npmjs.com/)
	* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
	* [grunt-cli](https://github.com/gruntjs/grunt-cli)
	* [karma-cli](https://www.npmjs.com/package/karma-cli)
2. Fork and clone the [mendixlabs/progress-circle](https://github.com/mendixlabs/progress-circle.git) repository. The code is in Typescript. 
3. Set up the development environment by running `npm install`.
4. Create a folder named *dist* in the project root.
5. Create a Mendix test project in the *dist* folder and rename its root folder to *dist/MxTestProject*, or get the test project from [mendixlabs/progress-circle](https://github.com/mendixlabs/progress-circle/releases/latest). Changes to the widget code will be automatically pushed to this test project.
6. To automatically compile, bundle, and push code changes to the running test project, run `grunt`.
7. To run the project unit tests with code coverage (results can be found at `dist/testresults/coverage/index.html`), run: `npm test`
8. Run the test continuously during development via `karma start`.

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendixlabs/progress-circle](https://github.com/mendixlabs/progress-circle/issues).