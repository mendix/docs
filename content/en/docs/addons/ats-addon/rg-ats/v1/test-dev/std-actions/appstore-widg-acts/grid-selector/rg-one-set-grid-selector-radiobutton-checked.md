---
title: "Set Grid Selector RadioButton Value"
url: /addons/ats-addon/rg-one-set-grid-selector-radiobutton-checked/
---

## 1 Description

Finds the radio button by column and row caption. Sets it to be checked.

## 2 Supported Widgets

* Grid Selector

## 3 Usage

Pass the name of the widget, the column caption, and the row caption of the radio button you want to find.

## 4 Input Parameters

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | The name of the Grid Selector widget.
Column Caption | String | Yes | The column caption of the radio button cell.
Row Caption | String | Yes | The row caption of the radio button cell.
Checked | Boolean | Yes | The value for the check box you want to set (true or false).
