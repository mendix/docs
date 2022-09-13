---
title: "Get Grid Selector Box Value"
url: /addons/ats-addon/rg-one-get-grid-selector-box-value/
---

## 1 Description

Returns the current check box and radio button value.

## 2 Supported Widgets

* Grid Selector

## 3 Usage

Pass the name of the widget, the column caption, and the row caption of the check box you want to find.

## 4 Input Parameters

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | The name of the Grid Selector widget.
Column Caption | String | Yes | The column caption of the check box cell you want to get the value from.
Row Caption | String | Yes | The row caption of the check box cell you want to get the value from.

## 5 Return Value

Name | Datatype | Description
---- | --------- | ---------------
Checked | Boolean | The current value of the check box.
