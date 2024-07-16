---
title: "Data Grid 2 Properties"
url: /appstore/modules/data-grid-2-properties/
description: "This document describes the properties of the Data Grid 2 and their configurations."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

This guide lists all the properties of the Data Grid 2 widget located inside the [Data Widgets](/appstore/modules/data-widgets/) module. Because data grids also contain columns and rows, properties for those [columns](#columns) and [rows](#rows) are also described below.

For more information on using Data Grid 2 features, see [Data Grid 2](/appstore/modules/data-grid-2/).

## 2 Configuration {#data-grid2-properties}

### 2.1 General Tab

#### 2.1.1 Data Source

Data source specifies the source of the data being presented in the data grid. You can select data from **Database**, **Microflow**, **Nanoflow**, or **Association**.

#### 2.1.2 Refresh Time (in seconds)

The time (in seconds) the grid waits between refreshing the data. Auto-refreshing is turned off when the value is 0.

#### 2.1.3 Selection

This property controls row selection capabilities. Selection is turned off by default, but can be enabled by choosing ether **Single** or **Multi**:

* The **Single** selection is selection type where only one row can be selected at the time
* The **Multi** type support selecting several rows at the time

{{% alert color="info" %}}
Data grid currently supports only in-memory selection. This implies some limitation which allows selecting only visible rows. If you change a data grid page or reload the browser window, then selection will be cleared.{{% /alert %}}

#### 2.1.4 Selection Method

This property specifies the method of selection.

{{% alert color="info" %}}
This property is available only when **Selection method** is set to **Single** or **Multi**.
{{% /alert %}}

The **Checkbox** method adds a checkbox to the beginning of the row, which acts as the primary way to select the row. The **Row click** method makes the whole row clickable; clicking on a row makes it selected.

#### 2.1.5 Show (Un)check All Toggle

{{% alert color="info" %}}
This property is available only when **Selection method** is set to **Checkbox** in combination with **Selection** > **Multi**.
{{% /alert %}}

When set to **Yes**, the data grid displays a checkbox in the header that, when selected, selects all visible rows. Clearing it will clear the selected rows.

### 2.2 Columns Tab {#columns}

#### 2.2.1 Columns

A list of columns displayed in the data grid. Each item in this list is a set of properties that define and control the appearance and behavior of the column. To read more about each property, see the [Column properties](#column-properties) section.

#### 2.2.2 Show Column Filters

If set to **No**, then all column filters will be hidden.

### 2.3 Rows Tab {#rows}

#### 2.3.1 Page Size

The number of rows to display per page. When **Pagination** type is **Virtual scrolling**, then this number defines how many rows added to the end when the grid is scrolled to the bottom.

#### 2.3.2 Pagination

#### 2.3.3 Position of Pagination

Defines the type of pagination. By default, the data grid groups rows into pages, and employs buttons to navigate between pages.

When the property is set to **Virtual scrolling**, then the navigation buttons are hidden and the data grid scrolling is used as a trigger to show the next chunk of data.

#### 2.3.4 Show Paging Buttons

This property controls the visibility of navigation buttons. If set to "Auto", navigation buttons are only visible when the number of elements in the data source exceeds the page size.

#### 2.3.5 Empty List Message

Sets a custom message to be displayed when there is no data in the data source, or the filter result is empty.

#### 2.3.6 Dynamic Row Class

An expression that returns the CSS class for the row. The data source entity is available as `$currentObject` within the scope of the expression.

### 2.4 Events Tab

#### 2.4.1 On Click Trigger

This property determines how the click action is triggered. 

The default option is **Single click**, which triggers the action on a single click on a row. If set to **Double click**, the action is triggered when the row is double-clicked.

#### 2.4.2 On Click Action

This property sets the action to be performed when the row is clicked.

#### 2.4.3 On Selection Change

This property sets the action to be performed when the row is selected or unselected.

### 2.5 Column Capabilities Tab

#### 2.5.1 Sorting

This flag controls column sorting for the entire data grid. If set to **No**, then sorting is disabled for any column.

#### 2.5.2 Resizing

This flag controls column resizing for the entire data grid. If set to **No**, then resizing is disabled for any column.

#### 2.5.3 Reordering

This flag controls column reordering for the entire data grid. If set to **No**, then reordering is disabled for any column.

#### 2.5.4 Hiding

This flag controls column hiding for the entire data grid. If set to **No**, then hiding is disabled for any column.

### 2.6 Configuration Tab

#### 2.6.1 Attribute

This property sets the entity attribute that is used to store custom visual settings for the data grid.

#### 2.6.2 On Change

This property sets the action to be performed when the **Attribute** value is changed.

### 2.7 Grid Wide Filtering

#### 2.7.1 Filters

A list of filters that can be used in the header of the data grid. Each filter defines an attribute that is used as part of a joined query to select data from the data source.

{{% alert color="info" %}}
This property requires advanced knowledge of data grid widget. Please read [Grid Wide Filtering](/appstore/modules/data-grid-2/#grid-wide-filtering) and view its examples for additional guidance.
{{% /alert %}}

### 2.8 Aria Labels

#### 2.8.1 Filter Section

Defines a string value that labels the header area of the data grid. Used by assistive technologies and screen readers.

#### 2.8.2 Export Progress

Defines a string value that labels the export dialog of the data grid. Used by assistive technologies and screen readers.

#### 2.8.3 Cancel Data Export

Defines a string value that labels the cancel export button of the export dialog. Used by assistive technologies and screen readers.

#### 2.8.4 Select Row

Defines a string value that labels the checkbox of the row when the selection is enabled. Used by assistive technologies and screen readers.

## 3 Column Properties {#column-properties}

You can easily see these properties by opening up the property dialog box of Data Grid 2, then clicking **Columns** > **New**.

### 3.1 General Tab

#### 3.1.1 Show

Controls the type of the data displayed in the column.

The attribute displays the value of an entity attribute. The dynamic text uses the expression and can have multiple parameters. The custom content allows for custom text and widgets.

#### 3.1.2 Attribute

This property controls the attribute used for the column. This property is required when filtering or sorting is enabled.

#### 3.1.3 Caption

Text to be displayed in the column header.

#### 3.1.4 Tooltip

Text to display when hovering over column header.

#### 3.1.5 Reference

This property is used to select the reference entity that can be used for association filtering. Useful only in conjunction with the dropdown filter widget.

#### 3.1.6 Data Source

A data source that should return a list of entities selected in the reference property. All items in this list will be available in the dropdown filter.

#### 3.1.7 Option Caption

An expression used to create a caption for each reference. This text is then visible as an option in the dropdown filter.

#### 3.1.8 Visible

A Boolean expression that controls the visibility of columns in the data grid. If the expression returns **false**, then the column is hidden and remains hidden unless the expression value is changed to **true**.

### 3.2 Column Capabilities

#### 3.2.1 Can Sort

If set to **Yes**, then rows can be sorted by the data in this column.

#### 3.2.2 Can Resize

If set to **Yes**, then the column can be resized by dragging the edge of the column header.

#### 3.2.3 Can Reorder

If set to **Yes**, then the column position in the grid can be changed by the user.

#### 3.2.4 Can Hide

If set to **Yes**, the column can be hidden in the view settings. 

If hidden by default, column is hidden on first render and can be shown using view settings. 

If set to **No**, column cannot be hidden in view settings.

### 3.3 Appearance

#### 3.3.1 Column Width

This property controls how the column width is calculated.

 **Auto-fill** fills the available space. **Auto-fit content** uses just enough space to display the column content. **Manual** is used to set the number for the flex-grow CSS property.

#### 3.3.2 Alignment

Sets the text alignment in the column.

#### 3.3.3 Dynamic Cell CSS

An expression used to compute the CSS class for the row using the data for the current entity and the list of selected items.

#### 3.3.4 Wrap Text

If set to **Yes**, then the column tries to wrap long text.
