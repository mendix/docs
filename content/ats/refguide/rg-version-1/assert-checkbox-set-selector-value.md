---
title: "Assert Checkbox Set Selector Value"
parent: "checkbox-set-selector"
---
## Description
Finds the check box by the column caption and its cell value and asserts that the check box is set to the given value.

## Supported widgets
+ Checkbox Set Selector


## Usage
Pass the name of the widget, the column caption, and the cell value of the checkbox you want to assert the value for.

## Input Parameters



Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Widget Name | String | Yes | The name of the widget.
Column Caption | String | Yes | The caption of the desired check box column.
Value | String | Yes | The cell value of the check box row.
Checked | Boolean | Yes | The value of the check kbox you want to assert (true or false).
