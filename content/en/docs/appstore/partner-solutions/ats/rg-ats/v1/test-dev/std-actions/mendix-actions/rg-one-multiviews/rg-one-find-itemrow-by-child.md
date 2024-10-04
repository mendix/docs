---
title: "Find Item/Row (by child element)"
url: /appstore/partner-solutions/ats/rg-one-find-itemrow-by-child/
---

## Description

Finds Item or Row of a TemplateGrid, DataGrid or ListView containing a specified element.

## Supported Widgets

* DataGrid
* TemplateGrid
* ListView

## Usage

Provide the child WebElement which resides in the item or row you want to find, for example, a specific button or DataView.  

## Input Parameters

Name | Datatype | Required | Description
--- | --- | --- | ---
Child Element | WebElement | yes | The WebElement in the Item/Row

## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Item/Row | WebElement | The DataGrid Row or TemplateGrid/ListView Item.
