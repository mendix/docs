---
title: "Tab Swipe"
category: "Widgets"
description: "Describes the configuration and usage of the Tab Swipe widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "tab swipe", "platform support"]
draft: true
---

## 1 Introduction

The [Tab Swipe](https://appstore.home.mendix.com/link/app/78620/) widget can be used for navigating between tabs.

## 2 Usage

To use this widget, follow these steps:

1. Place the widget in the same page, container, or snippet as the target tab container (which will be sright below it).
2. On the **General** tab of the widget's properties, add the **Target tab name** for the container (this is found in the **Common** tab of the tab container).

## 3 Developing This App Store Component

To contribute to the development of this widget, follow these steps:

1. Install the following:
	* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	* [npm](https://www.npmjs.com/)
	* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
	* [grunt-cli](https://github.com/gruntjs/grunt-cli)

2. Fork and clone the [mendixlabs/tab-swipe](https://github.com/mendixlabs/tab-swipe.git) repository. The code is in Typescript.
3. Set up the development environment by running `npm install`.
4. Create a folder named *dist* in the project root.
5. Create a Mendix test project in the *dist* folder and rename its root folder to *dist/MxTestProject*, or get the test project from [mendixlabs/tab-swipe releases](https://github.com/mendixlabs/tab-swipe/releases/latest). Changes to the widget code will be automatically pushed to this test project.
6. To automatically compile, bundle, and push code changes to the running test project, run `grunt`.

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendixlabs/tab-swipe](https://github.com/mendixlabs/tab-swipe/issues).
