---
title: "Assert Checkbox Set Selector Value"
url: /addons/ats-addon/rg-one-assert-checkbox-set-selector-value/
---

## 1 Description

Finds the check box by the column caption and its cell value and asserts that the check box is set to the given value.

## Supported widgets

* Checkbox Set Selector

## 3 Usage

Pass the name of the widget, the column caption, and the cell value of the checkbox you want to assert the value for.

## 4 Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Widget Name | String | Yes | The name of the widget.
Column Caption | String | Yes | The caption of the desired check box column.
Value | String | Yes | The cell value of the check box row.
Checked | Boolean | Yes | The value of the check kbox you want to assert (true or false).
