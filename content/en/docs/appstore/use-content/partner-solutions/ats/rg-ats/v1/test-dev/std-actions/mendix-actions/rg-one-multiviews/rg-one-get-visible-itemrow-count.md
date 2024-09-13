---
title: "Get Visible Item/Row Count"
url: /appstore/partner-solutions/ats/rg-one-get-visible-itemrow-count/
---

## Description

Returns the number of currently visible Items/Rows in a TemplateGrid, DataGrid or ListView.

## Supported Widgets

* DataGrid
* TemplateGrid
* ListView

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
Item/Row Count | Integer | The number of visible Items/Rows.
