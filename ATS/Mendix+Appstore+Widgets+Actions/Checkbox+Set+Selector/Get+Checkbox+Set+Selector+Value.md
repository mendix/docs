---
title: "Get Checkbox Set Selector Value"
---
## Description
Finds the check box via the column caption and cell value. Returns its value.

## Supported Widgets
+ Checkbox Set Selector

## Usage
Pass the name of the widget, the column caption, and the cell value of the check box you want to find.

## Input Parameters

Name | Datatype | Required | Description
---- |:--------:| :-------:|---------------
Widget Name | String | Yes | The name of the widget.
Column Caption | String | Yes | The column caption of the wanted check box.
Value | String | Yes | The cell value of the wanted check box.

## Return Value

Name | Datatype | Description
---- | :---------: | ---------------
Checked | Boolean | The current value of the check box.
