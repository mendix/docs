---
title: "Find Checkbox Set Selector (All)"
parent: "checkbox-set-selector"
---

## Description
Finds a check box by given cell value and column caption. Returns the first match.

## Supported widgtes
 + Checkbox Set Selector

## Usage
Pass the name of the widget, the column caption, and the cell value of the check box you want to find.

## Input Parameters


Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | The name of the widget.
Column Caption | String  | Yes | The caption of the desired check box column.
Value | String | Yes | The cell value of the check box row.

## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Widget | WebElement | The found check box.
