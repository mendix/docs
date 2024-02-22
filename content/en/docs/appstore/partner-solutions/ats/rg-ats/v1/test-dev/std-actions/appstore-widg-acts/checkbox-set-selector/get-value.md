---
title: "Get Checkbox Set Selector Value"
url: /appstore/partner-solutions/ats/rg-one-get-checkbox-set-selector-value/
---

## 1 Description

Finds the checkbox via the column caption and cell value. Returns its value.

## 2 Supported Widgets

* Checkbox Set Selector

## 3 Usage

Pass the name of the widget, the column caption, and the cell value of the checkbox you want to find.

## 4 Input Parameters

Name | Datatype | Required | Description
---- | -------- | ------- |---------------
Widget Name | String | Yes | The name of the widget.
Column Caption | String | Yes | The column caption of the desired checkbox.
Value | String | Yes | The cell value of the desired checkbox.

## 5 Return Value

Name | Datatype | Description
---- | --------- | ---------------
Checked | Boolean | The current value of the checkbox.
