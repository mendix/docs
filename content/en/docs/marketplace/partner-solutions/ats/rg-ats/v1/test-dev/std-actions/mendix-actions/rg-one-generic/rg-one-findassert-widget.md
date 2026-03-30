---
title: "Find/Assert Widget"
url: /appstore/partner-solutions/ats/rg-one-findassert-widget/
---

## Description

Finds/Asserts a Mendix widget by its given name or value.
It is possible to use a sequence of names as a path.

## Supported Widgets

* All widgets

## Usage

* Provide the name of the widget.
* Optionally search the widget by value and filter only visible widgets.
* You can also provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Value | String |no | The value of the widget
Visible Only | Boolean | no | Limit the possible return value to only visible widgets
Search Context | WebElement | no | Limit the search to the given WebElement

## Return Value

Name | Datatype | Description
--- | --- | ---
Widget | WebElement | The Widget as a Web Element.
