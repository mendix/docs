---
title: "Get Grid Selector Box Value"
url: /appstore/partner-solutions/ats/rg-one-get-grid-selector-box-value/
---

## Description

Returns the current checkbox and radio button value.

## Supported Widgets

* Grid Selector

## Usage

Pass the name of the widget, the column caption, and the row caption of the checkbox you want to find.

## Input Parameters

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | The name of the Grid Selector widget.
Column Caption | String | Yes | The column caption of the checkbox cell you want to get the value from.
Row Caption | String | Yes | The row caption of the checkbox cell you want to get the value from.

## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Checked | Boolean | The current value of the checkbox.
