---
title: "Get Checkbox Value"
url: /appstore/partner-solutions/ats/rg-one-get-checkbox-value/
---

## Description

Returns true if the checkbox is checked otherwise false.

## Supported Widgets

* Checkbox

## Usage

Pass the name of the checkbox you want to get the value from.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Search Context | WebElement | no | Limit the search to the given WebElement

## Return Value

Name | Datatype | Description
--- | --- | ---
Value | Boolean | Value of the checkbox. True if checked, otherwise false.
