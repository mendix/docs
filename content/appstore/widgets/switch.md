---
title: "Switch"
category: "Widgets"
description: "Describes the configuration and usage of the Switch widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "switch", "platform support"]
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

### 1.2 Demo App Project

For a demo app project that has been deployed with this widget, see [here](http://booleansliderwidge.mxapps.io).

## 2 Usage

To use this widget, place it in the context of an object that has a Boolean attribute.

## 3 Developing This App Store Component

To contribute to the development of this widget, follow these steps:

1. Install the following:
	* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	* [npm](https://www.npmjs.com/)
	* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
	* [grunt-cli](https://github.com/gruntjs/grunt-cli)
	* [karma cli](https://www.npmjs.com/package/karma-cli)

2. Fork and clone the [mendixlabs/boolean-slider](https://github.com/mendixlabs/boolean-slider.git) repository. The code is in Typescript.
3. Set up the development environment by running `npm install`.
4. Create a folder named *dist* in the project root.
5. Create a Mendix test project in the *dist* folder and rename its root folder to *dist/MxTestProject*, or get the test project from [mendixlabs/boolean-slider](https://github.com/MendixLabs/boolean-slider/releases/latest). Changes to the widget code will be automatically pushed to this test project.
6. To automatically compile, bundle, and push code changes to the running test project, run `grunt`.
7. To run the project unit tests with code coverage (results can be found at `dist/testresults/coverage/index.html`), run: `npm test`.
8. Run the unit test continuously during development via `karma start`.

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendixlabs/boolean-slider](https://github.com/mendixlabs/boolean-slider/issues).

## 4 Read More

* [CAB.02 - Switch](https://docs.mendix.com/addons/ats-addon/ht-two-cab-02-switch)
