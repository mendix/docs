---
title: "Find Selected Item/Row"
url: /appstore/partner-solutions/ats/rg-one-find-selected-itemrow/
---

## Description

Returns the first selected Item/Row object in a DataGrid, TemplateGrid or ListView.

## Supported Widgets

* DataGrid
* TemplateGrid
* ListView

## Usage

Provide the name of the DataGrid, TemplateGrid or ListView.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the DataGrid, TemplateGrid or Listview
Search Context | WebElement | no |Limit the search to the given WebElement

## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Item/Row | WebElement | The DataGrid Row or TemplateGrid/ListView Item.
