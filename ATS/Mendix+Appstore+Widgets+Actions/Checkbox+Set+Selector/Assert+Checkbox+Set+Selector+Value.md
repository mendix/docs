---
title: "Assert Checkbox Set Selector Value"
---
## Description
Finds the checkbox by column caption and its cell value and asserts that the checkbox is set to the given value

## Supported widgets
+ Checkbox Set Selector


## Usage
Pass the name of the widget, the column caption and the cell value of the checkbox you want to assert the value for.


## Input Parameters

Name | Datatype | Required | Description
---- |:--------:| :-------:|---------------
Widget Name | String | yes | The name of the widget
Column Caption | String | yes | The caption of the wanted checkbox column
Value | String | yes | The cell value of the checkbox row
Checked | Boolean | yes | The value of the checkbox you want to assert (true or false)
