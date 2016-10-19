---
title: "Set Row Cell Value"
---
## Description
Set the cell value in a given DataGrid row, specified by the column name.

## Usage
You have to pass a DataGrid row as WebElement and the column name to determine which cell you want to write. To get the DataGrid row, use the actions [Find Item/Row](Find+ItemRow), [Find Item/Row (by child element)](Find+ItemRow+by+child) or [Find/Assert DataGrid Row](FindAssert+DataGrid+Row).    
## Input Parameters
Name | Datatype |Required| Description
---- |:--------:|:------:|---------------
DataGrid Row | WebElement |yes| The DataGrid row to insert the value into
Value | String |yes| The value to insert into the Cell
Column Name | String |yes| The column name to define the cell in which the value gets inserted
