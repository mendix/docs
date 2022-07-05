---
title: "Get Checkbox Value"
url: /addons/ats-addon/rg-one-get-checkbox-value/
---

## 1 Description

Returns true if the checkbox is checked otherwise false.

## 2 Supported Widgets

* Checkbox

## 3 Usage

Pass the name of the checkbox you want to get the value from.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Search Context | WebElement | no | Limit the search to the given WebElement

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Value | Boolean | Value of the checkbox. True if checked, otherwise false.
