---
title: "Control Bar"
url: /refguide9/control-bar/
weight: 30
aliases:
    - /refguide9/add-button.html
    - /refguide9/deselect-all-button.html
    - /refguide9/export-to-csv-button.html
    - /refguide9/export-to-excel-button.html
    - /refguide9/grid-action-button.html
    - /refguide9/grid-new-button.html
    - /refguide9/remove-button.html
    - /refguide9/search-button.html
    - /refguide9/select-all-button.html
    - /refguide9/select-button.html
    - /refguide9/add-button
    - /refguide9/deselect-all-button
    - /refguide9/export-to-csv-button
    - /refguide9/export-to-excel-button
    - /refguide9/grid-action-button
    - /refguide9/grid-new-button
    - /refguide9/remove-button
    - /refguide9/search-button
    - /refguide9/select-all-button
    - /refguide9/select-button
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A control bar of a [template grid](/refguide9/template-grid/), [data grid](/refguide9/data-grid/), and [reference set selector](/refguide9/reference-set-selector/) allows you to manipulate the objects displayed by means of buttons. By default, both grids will be created with [Search](#search-button), [New](#create-button), [Edit](#grid-action-button), and [Delete](#grid-action-button) buttons in the control bar:

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/grids/control-bar/control-bar-example.png" alt="Data Grid Control Bar" class="no-border" >}}

The control bar can also include a number of selection options and spreadsheet export buttons, as well as microflow buttons for custom actions. 

## Control Bar Buttons

Most properties of control bar buttons are the same as properties of buttons. For more information on button properties, see [Buttons](/refguide9/button-properties/).

To add additional buttons to the control bar, do the following:

1. Right-click on the control bar while it is highlighed.
1. Select **Add button**.
1. Select the new type of button.
1. Double-click on the new button to customize.

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/grids/control-bar/control-bar-add-button.png" alt="Add Button to Control Bar" class="no-border" >}}

{{% alert color="info" %}}
It is not possible to add additional buttons by dragging them from the **Toolbox** into the control bar.

When setting the visibility of control bar buttons, it is not possible to use currently selected objects for conditional visibility expressions, or visibility based on the selected objects' attributes.
{{% /alert %}}

Sections below describe the purpose of each control bar button and their specific properties if any.

### Search Button {#search-button}

The **Search bar toggle** button (with default caption **Search**) opens or hides the [search bar](/refguide9/search-bar/). It is only present if the **Show search bar** property of the grid is set to either *With button (initially open)* or *With button (initially closed)*.  

{{% alert color="info" %}}
In a [reference set selector](/refguide9/reference-set-selector/) there will be no search fields set by default. See [Search Bar](/refguide9/search-bar/) to learn more about search fields. 
{{% /alert %}}

### Add Button {#add-button}

The **Add** button can only be used in the [reference set selector](/refguide9/reference-set-selector/). With this button, the user can select objects that have to be added to the reference set selector.

#### Page

The **Page** property indicates the page that is shown to users after they click this button. The user can use this page to select objects that have to be added to the reference set selector. This page should contain a data grid, template grid, or list view connected to the same entity as the reference set selector.

You can use an existing page or you can generate the appropriate page by either:

1. Right-clicking the add button and selecting **Generate page…**.
2. Selecting **New** for the page.

Both these options allow you to create a page which has the correct format for use by the add button. You can, of course, edit the page to meet your own requirements once it has been generated.

See the [Show a Page](/refguide9/on-click-event/#show-page) section of *On Click Event and Events Section*. Note that select pages must have a [pop-up layout](/refguide9/layout/#layout-type).

### Create Button {#create-button}

The **Create** button (with the default caption **New**) allows an end-user to create new objects in a grid or reference set selector.

#### Entity

The **Entity** property determines of which entity this button should create an instance. If the entity that is connected to the grid or reference set selector has no specializations, the page editor will automatically set this property for you. Otherwise, you will have to select one of the specializations yourself.

For example, you have an entity *Vehicle* and two specializations: *Bicycle* and *Car*. In a grid, when you select *Vehicle* as a data source, you have to specify whether a *Vehicle*, a *Bicycle* or a *Car* will be created when the **Create** button is clicked. You can even have three **New** buttons, one for each specialization.

### Action Button {#grid-action-button}

An action button is a button that can perform various actions, such as calling a microflow or opening a page. The **Edit** and **Delete** buttons are action buttons created by default in a data grid and template grid control bar. For more information on action buttons, see [Buttons](/refguide9/button-widgets/). 

### Remove Button {#remove-button}

The **Remove** button is a button specific for the reference set selector. With this button the end-user can remove objects that have been added to the reference set selector. For more information on a reference set selector, see [Reference Set Selector](/refguide9/reference-set-selector/). 

### Select Button {#select-button}

The **Select** button confirms the choice of a row of a grid when it is used for selecting an object for a reference selector or reference set selector. For this reason, the **Select** button can only be placed on a grid in a page that is connected to a reference selector or to the **Add** button of a reference set selector.

### Select All Button {#select-all-button}

The **Select all** button allows an end-user to select all objects in a grid or a reference set selector. 

#### Selection Type

The **Selection type** property determines whether the **Select all** button should select the objects on the current page, or the objects on all pages:

| Value       | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Select page *(default)* | Clicking this button selects all objects on the current page. |
| Select all  | Clicking this button selects all objects.                    |

{{% alert color="warning" %}}
Due to technical limitations, a button with the **Select all** selection type cannot be combined with [Remove](#remove-button), [Delete](#grid-action-button), or [Select](#select-button) buttons. 

An **Edit** button always behaves as if the selection type is **Select page**, regardless of the actual settings of the **Select all** button that had been used to select objects.
{{% /alert %}}

### Deselect All Button {#deselect-all-button}

The **Deselect all** button lets the user deselect all rows in the grid or a reference set selector.

### Export to Excel Button {#export-to-excel-button}

The **Export to Excel** button allows end-users to export the contents of the grid or the reference set selector to an Excel file. 

{{% alert color="info" %}}
The Excel export function is only available in list widgets that have the [XPath data source](/refguide9/xpath-source/). 

Constraints you are using for search fields and sorting will also be exported.
{{% /alert %}}

#### Maximum Number of Rows

The **Maximum number of rows** property indicates the maximum number of rows that can be present in the data grid when exporting. It can be useful to prevent end-users from exporting large quantities of data, potentially placing a heavy load on the server.

#### Date Export Format

The **Date export format** property defines the format dates will be exported. The possible options are the following ones:

* **Date value** *(default)* – date values are exported as real dates, so that it is possible to use Excel date functions like sorting
* **Text** – date values are exported exactly as shown in the data grid

{{% alert color="warning" %}}
When selecting **Date value**, dates will be shown only in the time zone of your Windows account, because Excel does not support defining specific time zones.
{{% /alert %}}

### Export to CSV Button {#export-to-csv-button}

The **Export to CSV** button allows end-users to export the contents of the grid or the reference set selector to a CSV file. 

{{% alert color="info" %}}
The export to CSV function is only available in list widgets that have the [XPath data source](/refguide9/xpath-source/). 

Constraints you are using for search fields and sorting will also be exported.
{{% /alert %}}

#### Decimal Separator

**Decimal separator** is a string used to separate the fractional part from the whole part in decimal values.

Default: *.*

#### Group Separator

**Group separator** is a string used to separate groups of digits in large numbers.

Default: *,*

#### Delimiter

**Delimiter** is a string used to delimit values in the resulting CSV file.

Default: *;*

#### Maximum Number of Rows

The **Maximum number of rows** property indicates the maximum number of rows that can be present in the data grid when exporting. It can be useful to prevent end-users from exporting large quantities of data, potentially placing a heavy load on the server.

#### Generate Excel Separator Hint

The **Generate Excel separator hint** property adds an extra line to the CSV file header that informs Excel what the separator character is. This solves compatibility issues with Excel and localization.

#### Use Grid Date Format

When **Use grid date format property** is enabled, the date format of the column is used. When this property is disabled, a format that is recognized by Excel as a date is used (yyyy-MM-dd).

## Read More

* [Button Properties](/refguide9/button-properties/)
* [Data Grid](/refguide9/data-grid/)
* [Template Grid](/refguide9/template-grid/)
* [Reference Set Selector](/refguide9/reference-set-selector/)
