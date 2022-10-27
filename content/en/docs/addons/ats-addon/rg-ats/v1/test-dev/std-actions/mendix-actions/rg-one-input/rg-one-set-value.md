---
title: "Set Value"
url: /addons/ats-addon/rg-one-set-value/
---

## 1 Description

Sets the text value of a Textbox, Textarea, Dateinput, Reference Selector or Enum Selector.

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

Pass the name of the widget and the value you want to set.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Value | String | yes | The value you want to set
Search Context | WebElement | no | Limit the search to the given WebElement
