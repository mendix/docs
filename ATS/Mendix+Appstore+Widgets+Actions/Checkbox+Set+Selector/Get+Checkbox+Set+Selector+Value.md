---
title: "Get Checkbox Set Selector Value"
---
## Description
Finds THE checkbox by THJE column caption and cell value. Returns its value.

## Supported Widgets
+ Checkbox Set Selector

## Usage
Pass the name of the widget, the column caption, and the cell value of the checkbox you want to find.

## Input Parameters

Name | Datatype | Required | Description
---- |:--------:| :-------:|---------------
Widget Name | String | Yes | The name of the widget.
Column Caption | String | Yes | The column caption of the wanted checkbox.
Value | String | Yes | The cell value of the wanted checkbox.

## Return Value

Name | Datatype | Description
---- | :---------: | ---------------
Checked | Boolean | The current value of the checkbox.
