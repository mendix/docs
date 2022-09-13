---
title: "Find Item/Row"
url: /addons/ats-addon/rg-one-find-itemrow/
---

## 1 Description

Finds a Row/Item in a DataGrid, TemplateGrid or ListView by a given index.

## 2 Supported Widgets

* DataGrid
* TemplateGrid
* ListView

## 3 Usage

Provide the name of the DataGrid, TemplateGrid or ListView and the zero-based index of the row.

Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the DataGrid, TemplateGrid or Listview
Index | Integer |yes | The index of the Item/Row to find
Search Context | WebElement | no |Limit the search to the given WebElement

## 5 Return Value

Name | Datatype | Description
---- | --------- | ---------------
Item/Row | WebElement | The DataGrid Row or TemplateGrid/ListView Item.
