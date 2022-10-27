---
title: "Set Row Cell Value"
url: /addons/ats-addon/rg-one-set-row-cell-value/
---

## 1 Description

Sets the cell value in a given DataGrid row, specified by the column name.

## 2 Supported Widgets

* DataGrid

## 3 Usage

You have to pass a DataGrid row as WebElement and the column name to determine which cell you want to write. To get the DataGrid row, use the actions [Find Item/Row](/addons/ats-addon/rg-one-find-itemrow/), [Find Item/Row (by child element)](/addons/ats-addon/rg-one-find-itemrow-by-child/) or [Find/Assert DataGrid Row](/addons/ats-addon/rg-one-findassert-datagrid-row/).    

## 4 Input Parameters

Name | Datatype |Required| Description
--- | --- | --- | ---
DataGrid Row | WebElement |yes| The DataGrid row to insert the value into
Value | String |yes| The value to insert into the Cell
Column Name | String |yes| The column name to define the cell in which the value gets inserted
