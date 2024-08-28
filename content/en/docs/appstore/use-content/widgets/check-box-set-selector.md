---
title: "Checkbox Set Selector"
url: /appstore/widgets/check-box-set-selector/
description: "Describes the configuration and usage of the Checkbox Set Selector widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Checkbox Set Selector](https://marketplace.mendix.com/link/component/121/) widget lets you use a list of checkboxes for your reference set. It supports multiple display attributes and looks the same as a [reference set selector](/refguide/reference-set-selector/).

### Typical Usage Scenario

* Quickly set or adjust a reference set without having to go through pop-up windows and buttons
* Show multiple attributes of the objects for a reference set

### Features

* Show multiple display attributes
* Show the display attributes over a one-deep association

### Limitations

* Does not support dynamic sorting by clicking the headers
* The on-change microflow only receives the context object
* No paging is available

## Properties

### Data source

* **Association** – the reference set association, starting from the data view object
* **XPath Constraint** – an XPath constraint on the possible objects that are shown (note that a reference set can contain objects not shown because of this constraint if set elsewhere)
* **Sort attribute** – the attribute on which to sort the list
* **Sort order** – the order in which the list should be sorted
* **Limit** – the limit to the number of objects shown to prevent the widget from becoming too large (leave **0** for unlimited)

### Appearance > Display Attribute

* **Header text** – the text used for the header of the column
* **Attribute** – the attribute that is to be shown
* **Width** – the width of the column for this display attribute in pixels or percentage
* **Currency type** – lets you display the attribute as a currency (leave on **None** if not applicable)

You must designate at least one **Display Attribute** (with **Header text** and **Attribute** included), or else the widget might block the page or pop-up window from loading.

## Read More

* [Checkbox Set Selector (ATS)](/appstore/partner-solutions/ats/rg-one-checkbox-set-selector/)
