---
title: "Find Checkbox Set Selector (All)"
url: /addons/ats-addon/rg-one-find-checkbox-set-selector/
---

## 1 Description

Finds a check box by given cell value and column caption. Returns the first match.

## 2 Supported Widgets

* Checkbox Set Selector

## 3 Usage

Pass the name of the widget, the column caption, and the cell value of the check box you want to find.

## 4 Input Parameters

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | The name of the widget.
Column Caption | String  | Yes | The caption of the desired check box column.
Value | String | Yes | The cell value of the check box row.

## 5 Return Value

Name | Datatype | Description
---- | --------- | ---------------
Widget | WebElement | The found check box.
