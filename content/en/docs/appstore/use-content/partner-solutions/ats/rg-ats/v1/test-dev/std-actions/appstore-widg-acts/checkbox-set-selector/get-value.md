---
title: "Get Checkbox Set Selector Value"
url: /appstore/partner-solutions/ats/rg-one-get-checkbox-set-selector-value/
---

## Description

Finds the checkbox via the column caption and cell value. Returns its value.

## Supported Widgets

* Checkbox Set Selector

## Usage

Pass the name of the widget, the column caption, and the cell value of the checkbox you want to find.

## Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Widget Name | String | Yes | The name of the widget.
Column Caption | String | Yes | The column caption of the desired checkbox.
Value | String | Yes | The cell value of the desired checkbox.

## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Checked | Boolean | The current value of the checkbox.
