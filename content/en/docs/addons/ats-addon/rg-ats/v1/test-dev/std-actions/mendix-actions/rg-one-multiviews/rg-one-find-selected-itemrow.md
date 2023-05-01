---
title: "Find Selected Item/Row"
url: /addons/ats-addon/rg-one-find-selected-itemrow/
---

## 1 Description

Returns the first selected Item/Row object in a DataGrid, TemplateGrid or ListView.

## 2 Supported Widgets

* DataGrid
* TemplateGrid
* ListView

## 3 Usage

Provide the name of the DataGrid, TemplateGrid or ListView.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the DataGrid, TemplateGrid or Listview
Search Context | WebElement | no |Limit the search to the given WebElement

## 5 Return Value

Name | Datatype | Description
---- | --------- | ---------------
Item/Row | WebElement | The DataGrid Row or TemplateGrid/ListView Item.
