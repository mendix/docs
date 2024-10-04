---
title: "Assert Value"
url: /appstore/partner-solutions/ats/rg-one-assert-value/
---

## Description

Asserts the text value from a TextBox, TextArea, DateInput.

## Supported Widgets

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

## Usage

Pass the name of the widget and the value you want to assert.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Value | String | yes | The value you want to assert
Search Context | WebElement | no | Limit the search to the given WebElement
