---
title: "Get Value"
url: /addons/ats-addon/rg-one-get-value/
---

## 1 Description

Returns the text value from Textboxes, Textareas, Dateinputs, RadioButtons, Dropdowns etc.

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

Pass the name of the widget you want to get the value from.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Search Context | WebElement | no | Limit the search to the given WebElement

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Value | String | The displayed value of the widget.
