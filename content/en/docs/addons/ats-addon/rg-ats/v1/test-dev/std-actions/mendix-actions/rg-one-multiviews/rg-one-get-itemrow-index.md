---
title: "Get Item/Row Index"
url: /addons/ats-addon/rg-one-get-itemrow-index/
---

## 1 Description

Returns the zero-based index of a row in a Datagrid, or of an item in a TemplateGrid or ListView.

## 2 Supported Widgets

* DataGrid
* TemplateGrid
* ListView

## 3 Usage

You have to provide a Item/Row as WebElement. To get the DataGrid row or TemplateGrid/ListView Item, use the actions [Find Item/Row](/addons/ats-addon/rg-one-find-itemrow/), [Find Item/Row (by child element)](/addons/ats-addon/rg-one-find-itemrow-by-child/) or [Find/Assert DataGrid Row](/addons/ats-addon/rg-one-findassert-datagrid-row/).    

## 4 Input Parameters

Name | Datatype | Required| Description
--- | --- | --- | ---
Item/Row | WebElement |yes| The DataGrid row or TemplateGrid/ListView Item

## 5 Return Value

Name | Datatype | Description
--- | --- | ---
Index | Integer | The index of the supplied Row/Item. Starts with 0 for the first Row/Item.
