---
title: "Find Item/Row (by child element)"
url: /addons/ats-addon/rg-one-find-itemrow-by-child/
---

## 1 Description

Finds Item or Row of a TemplateGrid, DataGrid or ListView containing a specified element.

## 2 Supported Widgets

* DataGrid
* TemplateGrid
* ListView

## 3 Usage

Provide the child WebElement which resides in the item or row you want to find, for example, a specific button or DataView.  

## 4 Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Child Element | WebElement | yes | The WebElement in the Item/Row

## 5 Return Value

Name | Datatype | Description
---- | --------- | ---------------
Item/Row | WebElement | The DataGrid Row or TemplateGrid/ListView Item.
