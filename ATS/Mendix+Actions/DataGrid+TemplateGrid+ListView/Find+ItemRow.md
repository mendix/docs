---
title: "Find Item/Row"
---
## Description
Find a Row/Item in a DataGrid, TemplateGrid or ListView by a given index.

## Usage
Provide the name of the DataGrid, TemplateGrid or ListView and the index (starting with 0) of the row.
Optional you can provide a WebElement as search context, to narrow down the search for the widget, if there are two or more widgets with the same name.
## Input Parameters

Name | Datatype | Required | Description
---- |:--------:| :-------:|---------------
Widget Name | String | yes | The name of the DataGrid, TemplateGrid or Listview
Index | Integer |yes | The index of the Item/Row to find
Search Context | WebElement | no |Limit the search to the given WebElement
## Return Value

Name | Datatype | Description
---- | --------- | ---------------
Item/Row | WebElement | The DataGrid Row or TemplateGrid/ListView Item.
