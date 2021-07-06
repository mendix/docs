---
title: "Switch"
category: "Widgets"
description: "Describes the configuration and usage of the Switch widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "switch", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Switch](https://appstore.home.mendix.com/link/app/50324/) widget enables toggling a Boolean attribute.

## 2 Usage

To use this widget, place it in a [data container](/refguide/data-sources) that has a Boolean attribute.

The widget offers the following for configuration:

* A Boolean attribute to toggle on user-interaction
* An action (such as Microflow or Nanoflow) to trigger when the Switch is toggled
* A **Device style** design property with two options (`iOS` and `Android`) influencing the Switch's appearance
* A **Style** design property for brand styling, influencing the Switch's colors
* [Common properties](/refguide/common-widget-properties)

This widget is compatible with [Atlas Core](https://marketplace.mendix.com/link/component/117187).

## 3 Previous Versions' Documentation

### Widgets Below v3.0.0

#### 1 Introduction

The [Switch](https://appstore.home.mendix.com/link/app/50324/) widget enables toggling a Boolean attribute.

##### 1.1 Features

* Deactivate when attribute or context is read-only
* Execute a microflow when toggled
* Execute a nanoflow when toggled
* Add a label to the switch
* Display in either iOS style or android(material design)
* Display in various bootstrap styles

##### 1.2 Demo App

For a demo app that has been deployed with this widget, see [here](http://booleansliderwidge.mxapps.io).

#### 2 Usage

To use this widget, place it in the context of an object that has a Boolean attribute.

#### 3 Developing This Marketplace Component

To contribute to the development of this widget, follow these steps:

1. Install the following:
	* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	* [npm](https://www.npmjs.com/)
	* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
	* [grunt-cli](https://github.com/gruntjs/grunt-cli)
	* [karma cli](https://www.npmjs.com/package/karma-cli)
2. Fork and clone the [mendixlabs/boolean-slider](https://github.com/mendixlabs/boolean-slider.git) repository. The code is in Typescript.
3. Set up the development environment by running `npm install`.
4. Create a folder named *dist* in the app root.
5. Create a Mendix test app in the *dist* folder and rename its root folder to *dist/MxTestApp*, or get the test app from [mendixlabs/boolean-slider](https://github.com/MendixLabs/boolean-slider/releases/latest). Changes to the widget code will be automatically pushed to this test app.
6. To automatically compile, bundle, and push code changes to the running test app, run `grunt`.
7. To run the app unit tests with code coverage (results can be found at `dist/testresults/coverage/index.html`), run: `npm test`.
8. Run the unit test continuously during development via `karma start`.

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendixlabs/boolean-slider](https://github.com/mendixlabs/boolean-slider/issues).

#### 4 Read More

* [CAB.02 - Switch](/addons/ats-addon/ht-two-cab-02-switch)
