---
title: "Get Visible Item/Row Count"
url: /addons/ats-addon/rg-one-get-visible-itemrow-count/
---

## 1 Description

Returns the number of currently visible Items/Rows in a TemplateGrid, DataGrid or ListView.

## 2 Supported Widgets

* DataGrid
* TemplateGrid
* ListView

## 3 Usage

You have to pass the widget name to the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.    

## 4 Input Parameters

Name | Datatype | Required| Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the DataGrid, TemplateGrid or Listview
Search Context | WebElement | no |Limit the search to the given WebElement

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Item/Row Count | Integer | The number of visible Items/Rows.
