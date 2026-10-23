---
title: "Get Row Cell Value"
url: /appstore/partner-solutions/ats/rg-one-get-row-cell-value/
---

## Description

Returns the cell value of a given DataGrid row as string, specified by the column name.

## Supported Widgets

* DataGrid

## Usage

You have to pass a DataGrid row as WebElement and the column name to determine which cell you want to read. To get the DataGrid row, use the actions [Find Item/Row](/appstore/partner-solutions/ats/rg-one-find-itemrow/), [Find Item/Row (by child element)](/appstore/partner-solutions/ats/rg-one-find-itemrow-by-child/) or [Find/Assert DataGrid Row](/appstore/partner-solutions/ats/rg-one-findassert-datagrid-row/).    

## Input Parameters

Name | Datatype | Required| Description
--- | --- | --- | ---
DataGrid Row | WebElement |yes| The DataGrid row of the cell
Column Name | String | yes |The column name of the cell

## Return Value

Name | Datatype | Description
--- | --- | ---
Value | String | Value of the cell for the specified column in the supplied Row.
