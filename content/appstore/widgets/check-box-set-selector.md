---
title: "Check Box Set Selector"
category: "Widgets"
description: "Describes the configuration and usage of the Check Box Set Selector widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "check box set selector", "check box", "platform support"]
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

### 2.1 Data source

* **Association** – the reference set association, starting from the data view object
* **XPath Constraint** – an XPath constraint on the possible objects that are shown (note that a reference set can contain objects not shown because of this constraint if set elsewhere)
* **Sort attribute** – the attribute on which to sort the list
* **Sort order** – the order in which the list should be sorted
* **Limit** – the limit to the number of objects shown to prevent the widget from becoming too large (leave **0** for unlimited)

### 2.2 Appearance > Display Attribute

* **Header text** – The text used for the header of the column
* **Attribute** – the attribute that is to be shown
* **Width** – the width of the column for this display attribute in pixels or percentage
* **Currency type** – lets you display the attribute as a currency (leave on **None** if not applicable)

## 3 Read More

* [Check Box Set Selector (ATS)](https://docs.mendix.com/addons/ats-addon/rg-one-checkbox-set-selector)
