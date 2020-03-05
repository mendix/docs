---
title: "Carousel"
category: "Widgets"
description: "Describes the configuration and usage of the Carousel widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "carousel", "image", "platform support"]
draft: true
---

## 1 Introduction

The [Carousel](https://appstore.home.mendix.com/link/app/47784/) widget displays images in a carousel.

### 1.1 Features

* Supports different data sources:
	* Set static images in Studio Pro
	* Retrieve images from the database via XPath
	* Retrieve images via a microflow
* Use images from **System.Images** or from a URL
* Navigate to the next or previous image
* Execute a microflow or nanoflow or open a page when an image is clicked
* Swipe through images on mobile devices

### 1.3 Demo App Project

For a demo app project that has been deployed with this widget, see [here](https://carousel.mxapps.io/).

## 2 Usage

The widget requires a context configured on the **Data Source** tab. The possible data sources are described below.

### 2.1 Static Data Source

When this option is selected, do the following:

* In the **Static images** section, click **New** to add static images from Studio Pro and also configure an on-click action
* On the **On click action** tab of the **Edit Static Images Item** dialog box, configure only one of option:: **Microflow**, **Nanoflow**, or **Page**

### 2.2 Database Data Source

When this option is selected, do the following:

* Specify the **Images entity** and the **XPath** constraint (if any)
* On the **Behavior** tab, configure the **On click** behavior
	* For the **Call microflow**, **Call nanoflow**, and **Show page** options, specify the respective microflow, nanoflow, or page
* Specifying a **URL attribute** will make the value of the URL attribute the priority

### 2.3 Microflow Data Source

When this option is selected, do the following:

* Specify the **Images entity** and the **Microflow** from which the carousel images will be retrieved (both are required)
* On the **Behavior** tab, configure the **On click** behavior
	* For the **Call microflow**, **Call nanoflow**, and **Show page** options, specify the respective microflow, nanoflow, or page
* Specifying a **URL attribute** will make the value of the URL attribute the priority

## 3 Developing This App Store Component

To contribute to the development of this widget, follow these steps:

1. Install the following:
	* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	* [npm](https://www.npmjs.com/)
	* [webpack-cli](https://www.npmjs.com/package/webpack-cli)
	* [grunt-cli](https://github.com/gruntjs/grunt-cli)
	* [karma-cli](https://www.npmjs.com/package/karma-cli)
2. Fork and clone the [mendixlabs/carousel](https://github.com/mendixlabs/carousel) repository. The code is in Typescript.
3. Set up the development environment by running `npm install`.
4. Create a folder named *dist* in the project root.
5. Create a Mendix test project in the *dist* folder and rename its root folder to *dist/MxTestProject*, or get the test project from [mendixlabs/carousel](https://github.com/MendixLabs/carousel/releases/latest). Changes to the widget code will be automatically pushed to this test project.
6. To automatically compile, bundle, and push code changes to the running test project, run `grunt`.
7. To run the project unit tests with code coverage (results can be found at `dist/testresults/coverage/index.html`), run: `npm test`.
8. Run the unit test continuously during development via `karma start`.

We are actively maintaining this widget. Please report any issues or suggestions for improvement at [mendixlabs/carousel](https://github.com/mendixlabs/carousel/issues).