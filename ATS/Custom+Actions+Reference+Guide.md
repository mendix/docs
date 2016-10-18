---
title: "Custom Actions Reference Guide"
category: "Test Development"
---
## Naming Conventions
Always use describing names for your actions and parameters, e.g. "Set TextBox value" for an action or "Column Name" for a parameter. This makes it easier to know what your action does, without looking into it.

Some parameter names used by the ATS core library:
 * Widget Name
 * Username
 * Password
 * Caption
 * Column Name
 * Column Value
 * Index
 * Page Title
 * Row/Item
 * Value

## Predefined Actions in ATS
This sections provides you with an overview of the most common used, predefined actions in ATS.
### Mendix Actions
##### DataGrid, TemplateGrid, ListView
#### Click DataGrid Row
Click a DataGrid Row by a given column value

**Input Parameters**

Name | Datatype | Description
---- | --------- | ---------------
Widget Name | String | The name of the DataGrid
Column Name | String | The name of the column in which the column value is located
Column Value | String | The column value which defines the row
#### Find/Assert DataGrid Row
Find/Assert a DataGrid Row by a certain column value

**Input Parameters**

Name | Datatype | Description
---- | --------- | ---------------
Widget Name | String | The name of the DataGrid
Column Name | String | The name of the column in which the column value is located
Column Value | String | The column value which defines the row
#### Find Item/Row
Find a Row/Item in a DataGrid, TemplateGrid or ListView by Index

**Input Parameters**

Name | Datatype | Description
---- | --------- | ---------------
Widget Name | String | The name of the DataGrid, TemplateGrid or Listview
Index | Integer | The index of the Item/Row to find
#### Find Item/Row (by child element)
Finds item or row of a TemplateGrid, DataGrid or ListView containing a specified WebElement.

**Input Parameters**

Name | Datatype | Description
---- | --------- | ---------------
Child Element | WebElement | The WebElement which is located in the item or row
#### Set Row Cell Value
Set the cell value in a DataGrid row

**Input Parameters**

Name | Datatype | Description
---- | --------- | ---------------
DataGrid Row | WebElement | The DataGrid row to insert the value into
Value | String | The value to insert into the Cell
Column Name | String | The column name to define the cell in which the value gets inserted
#### Get Row Cell Value
Get the Cell Value of a DataGrid row

**Input Parameters**

Name | Datatype | Description
---- | --------- | ---------------
DataGrid Row | WebElement | The DataGrid row of the cell
Column Name | String | The column name of the cell

##### Dialog
#### Cancel Dialog
#### Close Dialog
#### Confirm Dialog
#### Find/Assert Dialog
#### Get Dialog Message Text


##### Generic
#### Find/Assert Widget
#### Click/Doubleclick
#### Click Widget
#### Login/Logout


##### GroupBox
#### Open/Close GroupBox
#### GroupBox is Collapsed

##### Input
#### Assert Value
#### Set/Get Value
#### Set/Get Checkbox Value
#### Toggle Checkbox Value


##### Navigation, Menu
#### Click Menu Item
#### Find/Assert Menu Item


##### System
#### Find Widget Child Node
#### Focus WebElement
#### Get current Page Title
#### Mendix wait


##### Tab
#### Assert Active Tab Caption
#### Get Active Tab Caption

### Mendix Appstore Widgets Actions

### ATS Core Actions
#### Assert equals/not equals/...
#### Concatenate String
#### Get Current DateTime String
#### Open Application
#### Random Number/String
#### Set Return Value
### Selenium Actions
#### Execute JavaScript Integer/String/WebElement
#### Focus WebElement
#### Send Keys
####

## Selectors
### CSS Selectors
### JQuery Selectors
### ATS Selectors


## Best Practices
