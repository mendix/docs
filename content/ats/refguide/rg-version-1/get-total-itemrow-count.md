---
title: "Get Total Item/Row Count"
parent: "datagrid-templategrid-listview"
---

## Description

Returns the total grid count from the paging status.

## Supported Widgets

 + DataGrid
 + TemplateGrid
 + ListView

## Usage

You have to pass the widget name to the action.
Optionally you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.    

## Input Parameters

Name | Datatype | Required| Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the DataGrid, TemplateGrid or Listview
Search Context | WebElement | no |Limit the search to the given WebElement

## Return Value

Name | Datatype | Description
--- | --- | ---
Item/Row Count | Integer | The total number of Rows/Items.
