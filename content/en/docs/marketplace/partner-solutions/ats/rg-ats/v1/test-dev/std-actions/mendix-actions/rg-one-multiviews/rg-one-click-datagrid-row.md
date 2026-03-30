---
title: "Click DataGrid Row"
url: /appstore/partner-solutions/ats/rg-one-click-datagrid-row/
---

## Description

Clicks a DataGrid Row by a given column value.

## Supported Widgets

* DataGrid

## Usage

If you want to click/doubleclick a row in a DataGrid, use this action. You have to pass the name of the DataGrid, the column title and the cell value of the row, to determine which row to click. Optionally you can provide a WebElement as search context, to narrow down the search for the DataGrid widget, if there are two or more DataGrids with the same name.      

## Input Parameters

Name | Datatype | Required | Description
---- | -------- | -------- | ---------------
Widget Name | String | yes | The name of the DataGrid
Column Name | String | yes | The name of the column in which the column value is located
Column Value | String | yes | The column value which defines the row
Doubleclick | Boolean | no | If true perform doubleclick
Search Context | WebElement | no | Limit the search for the DataGrid row to the given WebElement
