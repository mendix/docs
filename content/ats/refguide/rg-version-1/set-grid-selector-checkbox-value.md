---
title: "Set Checkbox Set Selector Value"
parent: "grid-selector"
---

## Description
Finds the check box by column and row caption. Sets its value to the given checked parameter.

## Supported Widgets
+ Grid Selector

## Usage
Pass the name of the widget, the column caption, and the row caption of the checkbox you want to find.

## Input Parameters


Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | The name of the Grid Selector widget.
Column Caption | String | Yes | The column caption of the check box cell you want to get the value from.
Row Caption | String | Yes | The row caption of the check box cell you want to get the value from.
Checked | Boolean | Yes | The value for the check box you want to set (true or false).
