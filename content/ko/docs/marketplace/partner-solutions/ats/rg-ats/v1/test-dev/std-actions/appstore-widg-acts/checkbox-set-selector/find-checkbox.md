---
title: "Find Checkbox Set Selector (All)"
url: /appstore/partner-solutions/ats/rg-one-find-checkbox-set-selector/
---

## Description

Finds a checkbox by given cell value and column caption. Returns the first match.

## Supported Widgets

* Checkbox Set Selector

## Usage

Pass the name of the widget, the column caption, and the cell value of the checkbox you want to find.

## Input Parameters

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | The name of the widget.
Column Caption | String  | Yes | The caption of the desired checkbox column.
Value | String | Yes | The cell value of the checkbox row.

## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Widget | WebElement | The found checkbox.
