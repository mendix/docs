---
title: "Find Grid Selector Box"
url: /appstore/partner-solutions/ats/rg-one-find-grid-selector-box/
---

## Description

Find checkbox and radio button by column and row caption.

## Supported Widgets

* Grid Selector

## Usage

Pass the name of the parent widget, the column caption, and row caption.

## Input Parameters

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | Yes | The name of the Grid Selector widget.
Column Caption | String | Yes | The column caption of the checkbox cell you want to find.
Row Caption | String | Yes | The row caption of the checkbox cell you want to find.

## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Box | WebElement | The found checkbox and radio button.
