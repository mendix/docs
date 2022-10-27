---
title: "Assert Validation Message"
url: /addons/ats-addon/rg-one-assert-validation-message/
---

## 1 Description

Asserts the validation message of a widget with a certain text.

## 2 Supported Widgets

* All standard widgets

## 3 Usage

You have to pass the widget name and the expected validation message to the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype |Required| Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the DataGrid, TemplateGrid or Listview
Validation Message | String | yes | The expected validation message
Search Context | WebElement | no |Limit the search to the given WebElement
