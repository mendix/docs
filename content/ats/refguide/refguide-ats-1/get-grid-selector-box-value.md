---
title: "Get Grid Selector Box Value"
parent: "grid-selector"
---

## Description
Returns the current check box and radio button value.

## Supported Widgets
+ Grid Selector

## Usage
Pass the name of the widget, the column caption, and the row caption of the check box you want to find.

## Input Parameters


Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | The name of the Grid Selector widget.
Column Caption | String | Yes | The column caption of the check box cell you want to get the value from.
Row Caption | String | Yes | The row caption of the check box cell you want to get the value from.

## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Checked | Boolean | The current value of the check box.
