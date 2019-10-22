---
title: "Check Box Set Selector"
category: "Widgets"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [Check Box Set Selector](https://appstore.home.mendix.com/link/app/121/) widget lets you use a list of check boxes for your reference set. It supports multiple display attributes and looks the same as a [reference set selector](/refguide/reference-set-selector).

### 1.1 Typical Usage Scenario

* Quickly set or adjust a reference set without having to go through pop-up windows and buttons
* Show multiple attributes of the objects for a reference set

### 1.2 Features

* Show multiple display attributes
* Show the display attributes over a one-deep association

### 1.3 Limitations

* Does not support dynamic sorting by clicking the headers
* The on-change microflow only receives the context object
* No paging is available

## 2 Properties

### 2.1 Appearance

* Use headers: Boolean to enable/disable the headers.
* Checkbox column width value: The value of the width.
* Checkbox column width unit: The unit of the width this could be pixels, percentages or any other typographic width unit in the list. Be sure to test in serveral browsers.
* Display attributes
	* Width: The width of the column for this display attribute in pixels or percentage.
	* Currency type: This lets you display the attribute as a currency. Leave on none if not applicable.
	* Group separators: Boolean to use group separators if displayed as currency.
	* Header text: The text used for the header of the column. Required but only shown if 'Use headers' is set to true.
	* Attribute: The attribute that is to be shown.

### 2.2 Behavior

* On change: The microflow to call after a checkbox is clicked. The microflow only receives the context object.
* Listen source: The channel to broadcast the clicked object on. This can then be received by the Form Loader on the same channel, which will load the form with the object.
* Begin empty: The listen will automatically fill the form loader with the first object retrieved. Set this to true to disable this and have the formloader start off empty.
* Add 'Select All' checkbox: If true, a checkbox will be added in the header row to check or uncheck all (default true)

### 2.3 Data source

* Association: The reference set association, starting from the dataview object.
* Sort attribute: The attribute to sort the list on
* Sort order: The order the list should be sorted in.
* XPath Constraint: An XPath constraint on the possible objects that are shown. Do note that a reference set can contain objects not shown because of this constraint if set elsewhere.
* Limit: A limit to the number of objects shown to prevent the widget from becoming too large. Leave on 0 for unlimited.
