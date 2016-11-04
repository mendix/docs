---
title: "Find Checkbox Set Selector (all)"
---
## Description
Finds a checkbox by given cell value and column caption. Returns first match.

## Supported widgtes
 + Checkbox Set Selector

## Usage
Pass the name of the widget, the column caption and the cell value of the checkbox you want to find.

## Input Parameters
Name | Datatype | Required | Description
---- | :--------: | :--------: | ---------------
Widget Name | String | yes | The name of the widget
Column Caption | String | yes | The caption of the wanted checkbox column
Value | String | yes | The cell value of the checkbox row

## Return Value

Name | Datatype | Description
---- | :---------: | ---------------
Widget | WebElement | The found checkbox.
