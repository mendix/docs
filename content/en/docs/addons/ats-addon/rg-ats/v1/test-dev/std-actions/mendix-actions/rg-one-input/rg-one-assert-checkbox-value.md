---
title: "Assert Checkbox Value"
url: /addons/ats-addon/rg-one-assert-checkbox-value/
---

## 1 Description

Asserts the value of a Checkbox (true or false).

## 2 Supported widgets

* Checkbox

## 3 Usage

Pass the name of the widget and the value you want to assert.

Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Value | Boolean | yes | The value you want to assert (true or false)
Search Context | WebElement | no | Limit the search to the given WebElement
