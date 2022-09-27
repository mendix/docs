---
title: "Get Validation Message"
url: /addons/ats-addon/rg-one-get-validation-message/
---

## 1 Description

Returns the validation message of a widget.

## 2 Supported Widgets

* All standard widgets

## 3 Usage

You have to pass the widget name to the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype |Required| Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the widget
Search Context | WebElement | no |Limit the search to the given WebElement

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Validation Message | String | The text of the validation message.
