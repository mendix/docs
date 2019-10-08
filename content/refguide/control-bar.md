---
title: "Control Bar"
parent: "data-grid"
tags: ["studio pro", "control bar", "data grid", "template grid", "reference set selector", "control bar buttons"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The control bar of the template grid, data grid, and reference set selector allows you to manipulate the objects displayed by means of buttons. By default, both grids will be created with a new, edit, and delete button in the control bar. The control bar can also include a number of selection options and spreadsheet export buttons, as well as microflow buttons for custom actions. 

## 2 Control Bar Buttons

Most properties of control bar buttons are the same as properties of button widgets. For more information on button properties, see [Button Properties](button-properties).

Sections below describe the purpose of each control bar button and their specific properties if any. 

### 2.1 Search Button {#search-button}

The search button toggles the search bar on and off. It is only present if the 'Show search bar' property of the grid is either 'With button (initially open)' or 'With button (initially closed)'.

### 2.2 Add Button {#add-button}

The **Add** button can only be used in the [reference set selector](reference-set-selector). With this button, the user can select objects that have to be added to the reference set selector.

#### 2.2.1 Page

The **Page** property indicates the page that is shown to users after they click this button. The user can use this page to select objects that have to be added to the reference set selector. This page should contain a data grid, template grid, or list view connected to the same entity as the reference set selector.

For more information, see [Opening Pages](opening-pages). Note that opening select pages in content is prohibited.

### 2.3 Create Button {#create-button}

The **Create** button (with the default caption **New**) allows an end-user to create new objects in a grid or reference set selector.

#### 2.3.1 Entity

The **Entity** property determines of which entity this button should create an instance. If the entity that is connected to the grid or reference set selector has no specializations, the page editor will automatically set this property for you. Otherwise, you will have to select one of the specializations yourself.

For example, you have an entity Vehicle and two specializations, namely Bicycle and Car. In a grid on Vehicle you have to specify for the create button whether a Vehicle, a Bicycle or a Car will be created. You can even have three **New** buttons, one for each possibility.

### 2.4 Action Button {#grid-action-button}

An action button can perform various actions such as calling a microflow or nanoflow or opening a page. 

### 2.5 Remove Button {#remove-button}

The remove button is a button specifically made for the reference set selector. With this button the end-user can remove objects that have been added to the reference set selector.

### 2.6 Select Button {#select-button}

The select button confirms the choice of a row of a grid when it is used for selecting an object for a reference selector or reference set selector. For this reason, the select button can only be placed on a grid in a page that is connected to a reference selector or to the **Add** button of a reference set selector.

### 2.7 Select All Button {#select-all-button}

The select all button allows the end-user to select all objects in a grid or a reference set selector. With the selection type property you can determine whether this button should select the objects on the current page, or the objects on all pages.

#### 2.7.1 Selection Type

| Value       | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Select page | Clicking this button selects all objects on the current page. |
| Select all  | Clicking this button selects all objects.                    |

{{% alert type="warning" %}}

Due to technical limitations, a button with the selection type "Select all" cannot be combined with **Remove**, **Delete**, or **Select** buttons. An **Edit** button always behaves as if the selection type is "Select page," regardless of the actual settings of the "Select all" button that had been used to select objects.

{{% /alert %}}

_Default value:_ Select page

### 2.8 Deselect All Button {#deselect-all-button}

This button lets the user deselect all rows in the grid or a reference set selector.

### 2.9 Export to Excel Button {#export-to-excel-button}

This button allows end-users to export the contents of the grid or reference set selector to an excel file. Please note that constraints by use of search fields and sorting will also be exported.

The excel export function relies on a specific data retrieval method. As such, it is only available in list widgets that use the XPath data source. 

#### 2.9.1 Maximum number of rows

Indicates the maximum number of rows that can be present in the datagrid when exporting. Useful to prevent users from exporting large quantities of data, potentially placing a heavy load on the server.

#### 2.9.2 Date export format

Defines how dates will be exported. When _Date value_ is selected, date values will be exported as real dates, so that it is possible to use Excel date functions like sorting. When _Text_ is selected, date values will be exported exactly as shown in the data grid.

_Default value:_ Date value

{{% alert type="warning" %}}

When choosing _Date value_, dates will be shown only in the time zone of your Windows account, because Excel does not support defining specific time zones.

{{% /alert %}}

### 2.10 Export to CSV Button {#export-to-csv-button}

This button allows end-users to export the contents of the grid or reference set selector to a CSV file. Please note that constraints by use of search fields and sorting will also be exported.

The csv export function relies on a specific data retrieval method. As such, it is only available in list widgets that use the XPath data source. 

#### 2.10.1 Export to CSV Button Specific Properties

| Property                      | Section    | Description                                                  |
| ----------------------------- | ---------- | ------------------------------------------------------------ |
| Decimal separator             | Formatting | The string used to separate the fractional part from the whole part in Decimal values. <br />_Default value:_ . |
| Group separator               | Formatting | The string used to separate groups of digits in large numbers.<br />_Default value:_ , |
| Delimiter                     | Formatting | The string used to delimit values in the resulting CSV file.<br />_Default value:_ ; |
| Maximum Number of Rows        | General    | Indicates the maximum number of rows that can be present in the datagrid when exporting. Useful to prevent users from exporting large quantities of data, potentially placing a heavy load on the server. |
| Generate Excel Separator Hint | General    | If true, adds an extra line to the CSV file header that informs Excel what the seperator character is. This solves compatibility issues with Excel and localization. |
| Use Grid Date Format          | General    | If true, the date format of the column is used, otherwise a format that is recognized by Excel as a date is used (yyyy-MM-dd). |

#### 2.10.1 Decimal Separator

The string used to separate the fractional part from the whole part in Decimal values.

_Default value:_ .

#### 2.10.2 Group Separator

The string used to separate groups of digits in large numbers.

_Default value:_ ,

#### 2.10.3 Delimiter

The string used to delimit values in the resulting CSV file.

_Default value:_ ;

#### 2.10.4 Maximum Number of Rows

Indicates the maximum number of rows that can be present in the datagrid when exporting. Useful to prevent users from exporting large quantities of data, potentially placing a heavy load on the server.

#### 2.10.5 Generate Excel Separator Hint

If true, adds an extra line to the CSV file header that informs Excel what the seperator character is. This solves compatibility issues with Excel and localization.

#### 2.10.6 Use Grid Date Format

If true, the date format of the column is used, otherwise a format that is recognized by Excel as a date is used (yyyy-MM-dd).