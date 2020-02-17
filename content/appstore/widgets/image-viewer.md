---
title: "Image Viewer"
category: "Widgets"
description: "Describes the configuration and usage of the Image Viewer widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "image viewer", "platform support"]
draft: true
---

## 1 Introduction

The [Image Viewer](https://appstore.home.mendix.com/link/app/65122/) widget displays an image and optionally performs an on-click action (enlarging to mobile-friendly, opening a page, or calling a mircoflow).

### 1.1 Features

* Supports different data sources:
	* Set a static image
	* Retrieve an image from a static URL
	* Retrieve an image from the URL attribute of a context object
	* Retrieve an image from **System.Images**
* Supports the following actions:
	* Enlarge and pinch zoom
	* Open page
	* Call a microflow or nanoflow

### 1.2 Demo App Project

For a demo app project that has been deployed with these widgets, see [here](https://imageviewer.mxapps.io/).

## 2 Usage

The widget requires a context via the following available data sources:

* Dynamic image
	* For the **Data source** option of the **General** tab, select the dynamic image
	* The widget will pick the image from the context object (context object should inherit from the **system.image** entity)
	* Refer to the **Appearance** section for configuring the height and width
* Dynamic URL attribute
	* For the **Data source** option of the **General** tab, select the dynamic URL
	* Select the attribute from the context objext that contains the URL of the image
	* Refer to the **Appearance** section for configuring the height and width
* Static URL
	* For the **Data source** option of the **General** tab, select the static URL
	* Specify the URL that points to the image (a URL outside the Mendix Platform)
	* Refer to the **Appearance** section for configuring the height and width
* Static image
	* For the **Data source** option of the **General** tab, select the static image
	* Click **Select** to add static images from Studio Pro
	* Refer to the **Appearance** section for configuring the height and width

## 3 Developing This App Store Component

To contribute to the development of this widget, follow these steps:

1. Install the following:
	* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	* [npm](https://www.npmjs.com/)
	* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
	* [grunt-cli](https://github.com/gruntjs/grunt-cli)
	* [karma-cli](https://www.npmjs.com/package/karma-cli)
2. Fork and clone the [mendixlabs/image-viewer](https://github.com/mendixlabs/image-viewer) repository. The code is in Typescript.
3. Set up the development environment by running `npm install`.
4. Create a folder named *dist* in the project root.
5. Create a Mendix test project in the *dist* folder and rename its root folder to *dist/MxTestProject*, or get the test project from [mendixlabs/image-viewer](https://github.com/MendixLabs/image-viewer/releases/latest). Changes to the widget code will be automatically pushed to this test project.
6. To automatically compile, bundle, and push code changes to the running test project, run `grunt`.
7. To run the project unit tests with code coverage (results can be found at `dist/testresults/coverage/index.html`), run: `npm run test:unit`.
8. Run the unit test continuously during development via `karma start`.

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendixlabs/image-viewer](https://github.com/mendixlabs/image-viewer/issues).
