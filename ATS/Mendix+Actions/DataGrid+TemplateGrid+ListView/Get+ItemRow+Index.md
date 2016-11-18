---
title: "Get Item/Row Index"
space: "ATS (Application Test Suite)"
---
## Description
Returns the zero-based index of a row in a Datagrid, or of an item in a TemplateGrid or ListView.

## Supported Widgets
 + DataGrid
 + TemplateGrid
 + ListView

## Usage
You have to provide a Item/Row as WebElement. To get the DataGrid row or TemplateGrid/ListView Item, use the actions [Find Item/Row](Find+ItemRow), [Find Item/Row (by child element)](Find+ItemRow+by+child) or [Find/Assert DataGrid Row](FindAssert+DataGrid+Row).    

## Input Parameters

Name | Datatype | Required| Description
--- | --- | --- | ---
Item/Row | WebElement |yes| The DataGrid row or TemplateGrid/ListView Item

## Return Value

Name | Datatype | Description
--- | --- | --- 
Index | Integer | The index of the supplied Row/Item. Starts with 0 for the first Row/Item.
