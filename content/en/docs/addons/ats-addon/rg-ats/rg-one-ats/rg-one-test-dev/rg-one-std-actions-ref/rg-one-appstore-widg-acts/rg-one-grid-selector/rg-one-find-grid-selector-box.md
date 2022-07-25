---
title: "Find Grid Selector Box"
url: /addons/ats-addon/rg-one-find-grid-selector-box/
---

## 1 Description

Find check box and radio button by column and row caption.

## 2 Supported Widgets

* Grid Selector

## 3 Usage

Pass the name of the parent widget, the column caption, and row caption.

## 4 Input Parameters

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | The name of the Grid Selector widget.
Column Caption | String | Yes | The column caption of the check box cell you want to find.
Row Caption | String | Yes | The row caption of the check box cell you want to find.

## 5 Return Value

Name | Datatype | Description
---- | --------- | ---------------
Box | WebElement | The found check box and radio button.
