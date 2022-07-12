---
title: "Assert Value"
url: /addons/ats-addon/rg-one-assert-value/
---

## 1 Description

Asserts the text value from a TextBox, TextArea, DateInput.

## 2 Supported Widgets

* TextBox
* TextArea
* DatePicker
* Dropdown
* RadioButton
* ReferenceSelector
* SearchInput Text
* SearchInput Dropdown
* Label
* OnChangeInputbox

## 3 Usage

Pass the name of the widget and the value you want to assert.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Value | String | yes | The value you want to assert
Search Context | WebElement | no | Limit the search to the given WebElement
