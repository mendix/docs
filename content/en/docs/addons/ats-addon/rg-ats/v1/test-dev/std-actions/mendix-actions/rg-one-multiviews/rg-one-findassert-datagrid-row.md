---
title: "Find/Assert DataGrid Row"
url: /addons/ats-addon/rg-one-findassert-datagrid-row/
---

## 1 Description

Find/Assert a DataGrid Row by a certain column value.

## 2 Supported Widgets

* DataGrid

## 3 Usage

You have to pass the name of the DataGrid, the column title and the cell value of the row, to determine which row to find.
Optionally you can provide a WebElement as search context, to narrow down the search for the DataGrid widget, if there are two or more DataGrids with the same name.

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Widget Name | String | yes | The name of the DataGrid
Column Name | String | yes |The name of the column in which the column value is located
Column Value | String | yes | The column value which defines the row
Search Context | WebElement | no | Limit the search to the given WebElement

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
DataGrid Row | WebElement | DataGrid Row found is returned as a Web Element
