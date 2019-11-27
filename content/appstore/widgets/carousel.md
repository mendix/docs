---
title: "Carousel"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Carousel](https://appstore.home.mendix.com/link/app/47784/) widget displays images in a carousel.
Features

    Supports different data sources:
        Set static images in the Modeler
        Retrieve images from the database via XPath
        Retrieve images via a microflow
    Image from mendix System.Images or from a URL
    Navigate to the next or the previous image
    Execute a microflow or open a page when an image is clicked
    Execute a nanoflow or open a page when an image is clicked
    Swipe through the images on mobile devices

Dependencies

Mendix 7.13.1
Test project

https://carousel.mxapps.io/
Usage

The widget requires a context.
Data source: Static

    On the Data source option of the Data source tab, select the static option if its not already selected by default.
    On the Static images option of the same tab, click new to add static images from the modeler and also configure an onclick action.
    For the on click options, configure only one of the two (either calling a microflow or a page).
    Configuring both options will only trigger the microflow.

Data source: XPath

    On the Data source option of the Data source tab, select the XPath option.
    Specify the image entity and the XPath constraint (if any).
    In the behavior tab, you can configure on click behavior i.e Do nothing, call microflow or show page.
    For options call microflow and show page, a microflow or page must be specified respectively.

Data source: Microflow

    On the Data source option of the Data source tab, select the Microflow option.
    Specify the image entity and the microflow to retrieve the carousel images from (both required).
    Refer to the XPath section for configuring click behavior.

For the microflow and XPath data source options, specifying a URL attribute will make the value of the URL attribute the priority.
Issues, suggestions and feature requests

We are actively maintaining this widget, please report any issues or suggestion for improvement at https://github.com/mendixlabs/carousel/issues.
Development

Prerequisite: Install git, node package manager, webpack CLI, grunt CLI, Karma CLI

To contribute, fork and clone.

git clone https://github.com/FlockOfBirds/carousel.git

The code is in typescript. Use a typescript IDE of your choice, like Visual Studio Code or WebStorm.

To set up the development environment, run:

npm install

Create a folder named dist in the project root.

Create a Mendix test project in the dist folder and rename its root folder to MxTestProject. Changes to the widget code shall be automatically pushed to this test project. Or get the test project from https://github.com/MendixLabs/carousel/releases/latest

dist/MxTestProject

To automatically compile, bundle and push code changes to the running test project, run:

grunt

To run the project unit tests with code coverage, results can be found at dist/testresults/coverage/index.html, run:

npm test

or run the test continuously during development:

karma start
