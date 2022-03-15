---
title: "Get Row Cell Value"
url: /addons/ats-addon/rg-one-get-row-cell-value/
parent: "rg-one-datagrid-templategrid-listview"
---

## 1 Description

Returns the cell value of a given DataGrid row as string, specified by the column name.

## 2 Supported Widgets

* DataGrid

## 3 Usage

You have to pass a DataGrid row as WebElement and the column name to determine which cell you want to read. To get the DataGrid row, use the actions [Find Item/Row](rg-one-find-itemrow), [Find Item/Row (by child element)](rg-one-find-itemrow-by-child) or [Find/Assert DataGrid Row](rg-one-findassert-datagrid-row).    

## 4 Input Parameters

Name | Datatype | Required| Description
--- | --- | --- | ---
DataGrid Row | WebElement |yes| The DataGrid row of the cell
Column Name | String | yes |The column name of the cell

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Value | String | Value of the cell for the specified column in the supplied Row.
