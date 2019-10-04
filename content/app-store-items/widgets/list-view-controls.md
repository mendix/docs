---
title: "List View Controls"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [List View Controls](https://appstore.home.mendix.com/link/app/87/) widget enables filtering and searching a list view with the databas and XPath data sources.

These are the available list view widgets:

* **Check box filter** – filters a list view with various constraints when checked or unchecked
* **Drop down filter** – filters a list view with various options that can be selected from a drop-down
* **Drop down sort** – Adds an interactive sort to your list view.
* **Text box search** – Adds an interactive search box to all of your list view
* **Pagination** – Adds bootstrap like paging to a list view and page numbers similar to in-built data grid
* **Header sort** – Add sorting behavior to the headers of a list view.

### 1.1 Demo projects

https://listviewcontrols.mxapps.io

## 2 Pagination

Add bootstrap like paging to your list view similar to the built-in data grid. The widget also supports page numbers.

### 2.1 Features

    Add pagination navigation buttons to the list view ie:
        First button
        Last button
        Next button
        Previous button
        Hide unused buttons.
        Page numbers as buttons
        Page numbers with text as buttons
        Page text that can be added to pagination in combination with the follow place holders. {firstItem} {lastItem} {totalItems} {currentPageNumber} {totalPages}
    Page size: This feature limits the number of items on the list view

### 2.2 Sample

Lower Pagination Default buttons
    
Multiple Paginations

Page buttons

Page size Page size

### 2.3 Appearance configuration

Data source

    On the Hide unused paging option of the Appearance tab, specify if the buttons should be hidden when they are not needed.For example when the records are few.
    
    On the Page style option of the Appearance tab, specify how the buttons should look.
        Default shows the pagination with the looks similar to Mendix data grid paging
        Page number buttons show the pagination as numbers with default set to seven
        Custom Allows the pagination to be configured to look the way one desires
    
    Page size configuration
    Page size configuration
    Page size configuration

## 3 Check Box Filter

Enable users to filter a list view at run time, with various constraints when checked or unchecked

### 3.1 Features

    Filter items by an attribute
    Filter items by XPath
    Configure filter actions when the widget is checked
    Configure filter actions when the widget is unchecked
    Set a checked checkbox as default
    Supports multiple filters on the same list view

### 3.2 Sample

Sample

### 3.3 Usage

Configure the widget as below.

Provide the entity name for the target list view. General

Set up filter actions to be applied when the widget is checked. Checked

Set up filter actions to be applied when the widget is unchecked Unchecked

When filtering by Attribute, select an attribute and input an attribute value to filter by.

- For 'Boolean' datatype use `true` or `false` string.
- For 'Enumeration' datatype use the enumeration name/key not 'caption'

When filtering by XPath, input a constraint to filter by. None is for an empty option which resets the filter then selected.

NB: The widget connects to the first list view it finds from within its parent container and outer wards.

## 4 Drop Down Filter

Enable users to filter a list view at run time, with various options that can be selected from a drop-down

### 4.1 Features

    Filter items by an attribute
    Filter items by XPath
    Select a filter from a list of options
    Set a default filter option

### 4.2 Sample

Sample

### 4.3 Usage

Place the Drop-down filter widget above a list view. Provide the entity name of the target list view in the General tab.

General

Add a new filter with a caption and choose comparison type.

Filters

When filtering by Attribute, select an attribute and input a value to filter by When filtering by XPath, input a constraint to filter by. None is for an empty option which resets the filter then selected.

NB: The None filter option should always appear at the top of the list and it does not require a caption. Also to note, only one empty filter option should be selected.

XPathConstraint

## 5 Drop Down Sort

Add an interactive sort to your list view. It supports sorting on a single field similar to the built-in list view sort capabilities.

### 5.1 Features

    Sort through a single field
    Specify an option to sort list view items on load. If multiple defaults are selected, the widget will select the first one.

### 5.2 Demo project

Demo

### 5.3 Usage

#### 5.3.1 Data source configuration

Data source

    On the List view with entity option of the Data source tab, browse and select the "entity" property of the list widget you want to sort. This entity must be the one used on the list view.

Data source

    On the Sort attributes option of the Data source tab, browse and select the attribute on the list widget entity to be sorted.

Data source

## 6 Text Box Search

Add an interactive search box to all of your list-view It supports searching on single field similar to the built-in list view search capabilities.

### 6.1 Features

    Search through a single field with single and multiple attributes
    Open search in default

### 6.2 Sample

Sample

### 6.3 Usage

Configure the widget as below.

General

    On the List view with entity option of the General tab, select an entity that matches listview entity.
    
    On the Attributes option of the General tab, create attributes to be used in the text search.

General

## 7 Header Sort

Please follow Header sort guide Demo header sort

## 8 Issues, suggestions and feature requests

Please report issues at https://github.com/mendixlabs/list-view-controls/issues.

## 9 Development and contribution

Prerequisite: Install git, node package manager, webpack CLI, grunt CLI, Karma CLI

To contribute, fork and clone.

> git clone https://github.com/mendixlabs/list-view-controls.git

The code is in typescript. Use a typescript IDE of your choice, like Visual Studio Code or WebStorm.

To set up the development environment, run:

> npm install

Create a folder named dist in the project root.

Create a Mendix test project in the dist folder and rename its root folder to dist/MxTestProject. Changes to the widget code shall be automatically pushed to this test project. Or get the test project from https://github.com/mendixlabs/list-view-controls/releases/latest

To automatically compile, bundle and push code changes to the running test project, run:

> npm start

To run the project unit tests with code coverage, results can be found at dist/testresults/coverage/index.html, run:

> npm run test:unit

Run the unit test continuously during development:

> npm run test:dev

Run the end to end test during development:

> npm run test:e2e:dev

## 10 Scripts

While developing, you will probably rely mostly on npm start; however, there are additional scripts at your disposal:
npm run <script> 	Description
start 	Build the project and monitor source and config for changes and rebuild.
test 	Runs lint, build, unit tests with Karma and generates a coverage report, deploy and run e2e test
test:dev 	Runs Karma and watches for changes to re-run tests; does not generate coverage reports.
test:unit 	Runs unit tests with Karma and generates a coverage report.
test:e2e 	Runs end 2 end tests with remote.
test:e2e:dev 	Runs end 2 end tests with locally on localhost:8080
deploy 	Use latest widget build to update the Mendix project update the application to Mendix node.
build:prod 	Build widget optimized for production
build:dev 	Build widget optimized for debugging.
lint 	Lint all .js files.
lint:fix 	Lint and fix all .ts files.

## 11 CI and remote testing

To enable the continues integration services. Copy the node_modules/mendix-widget-build-script/dist/localSettings.js to your project root, and update the settings to run the update deployment from local source.

Do not forget to exclude this file in the .gitignore as it contains sensitive data.

exports.settings = {
    appName: "appName",
    key: "xxxxxxxx-xxxx-xxxx-xxxxx-xxxxxxxxxxxx",
    password: "secret",
    projectId: "xxxxxxxx-xxxx-xxxx-xxxxx-xxxxxxxxxxxx",
    user: "ci@example.com"
};

More information about the Mendix widget build script.