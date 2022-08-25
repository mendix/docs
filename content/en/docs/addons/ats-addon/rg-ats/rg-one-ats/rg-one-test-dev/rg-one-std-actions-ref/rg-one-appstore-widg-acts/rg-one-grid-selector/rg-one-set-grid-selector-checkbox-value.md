---
title: "Set Checkbox Set Selector Value"
url: /addons/ats-addon/rg-one-set-grid-selector-checkbox-value/
---

## 1 Description

Finds the check box by column and row caption. Sets its value to the given checked parameter.

## 2 Supported Widgets

* Grid Selector

## 3 Usage

Pass the name of the widget, the column caption, and the row caption of the checkbox you want to find.

## 4 Input Parameters

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | The name of the Grid Selector widget.
Column Caption | String | Yes | The column caption of the check box cell you want to get the value from.
Row Caption | String | Yes | The row caption of the check box cell you want to get the value from.
Checked | Boolean | Yes | The value for the check box you want to set (true or false).
