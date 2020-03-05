---
title: "Progress Bar"
category: "Widgets"
description: "Describes the configuration and usage of the Progress Bar widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "progress bar", "bootstrap", "platform support"]
draft: true
---

## 1 Introduction

The [Progress Bar](https://appstore.home.mendix.com/link/app/48910/) widget displays a progress bar.

### 1.1 Features

* Show percentage of progress based on value
* Render bar types: plain, striped, or animated stripes
* Use bar Bootstrap colors: success, info, warning, or danger

### 1.2 Demo App Project

For a demo app project that has been deployed with this widget, see [here](https://progressbar-demo.mxapps.io/).

## 2 Usage

Place the widget in the context of an object that has attributes for **Progress attribute** and **Maximum value attribute**:
* If **Progress attribute** is not set, **Value static** will be used to calculate the progress
* If **Maximum value attribute** is not set, the maximum value defaults to **Maximum value static**

Progress percentage is calculated via `(value / maximumValue) * 100`.

Depending on the specified Bootstrap style (primary, success, info, warning, danger), the progress bar can appear in the associated colors.

For negative progress values, the bar is drawn from right to left.

## 3 Developing This App Store Component

1. Install the following:
	* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	* [npm](https://www.npmjs.com/)
	* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
	* [grunt-cli](https://github.com/gruntjs/grunt-cli)
	* [karma-cli](https://www.npmjs.com/package/karma-cli)
2. Fork and clone the [mendixlabs/progress-bar](https://github.com/mendixlabs/progress-bar.git) repository. The code is in Typescript. 
3. Set up the development environment by running `npm install`.
4. Create a folder named *dist* in the project root.
5. Create a Mendix test project in the *dist* folder and rename its root folder to *dist/MxTestProject*, or get the test project from [mendixlabs/progress-bar](https://github.com/mendixlabs/progress-bar/releases/latest ). Changes to the widget code will be automatically pushed to this test project.
6. To automatically compile, bundle, and push code changes to the running test project, run `grunt`.
7. To run the project unit tests with code coverage (results can be found at `dist/testresults/coverage/index.html`), run: `npm test`
8. Run the test continuously during development via `karma start`.

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendixlabs/progress-bar](https://github.com/mendixlabs/progress-bar/issues).