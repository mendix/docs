---
title: "<title>"
url: <utl>
description: "<description>"
tags:
    [
        "marketplace",
        "marketplace component",
        "data grid",
        "platform support",
        "external entities"
    ]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Data grid 2 properties {#data-grid2-properties}

### General

#### Data source

Data source specifies the source of the data being presented in the data grid. You can select data from **Database**, **Microflow**, **Nanoflow** or **Association**.

#### Refresh time

The time, in milliseconds (thousandths of a second), the grid should wait between refreshing the data. Auto refreshing turned off when value is 0.

#### Selection

This property controls row selection capabilities. Selection is turned off by default, but can be enabled by choosing ether “Single” or “Multi” option. The “Single” selection is selection type where only one row can be selected at the time. The “Multi” type support selecting several rows at the time.

{{% alert color="info" %}}Current versions of data grid support only “in-memory” selection. This implies some limitation which allows selecting only visible rows. If you change data grid page or reload browser window selection will be cleared.{{% /alert %}}

#### Selection method

This property specifies the method of selection. The “Checkbox” method adds a checkbox to the beginning of the row, which acts as the primary way to select the row. The “Row click” method, as it's name suggests, makes the whole row clickable and clicking on a row makes it selected.

#### Show (un)check all toggle

{{% alert color="info" %}}This property is available only when **Selection method** is set to “Checkbox” in combination with **Selection** “Multi”.{{% /alert %}}

When set to “Yes”, the data grid displays a checkbox in the header that, when checked, selects all visible rows. Unchecking it will clear the selection.

### Columns

#### Columns

A list of columns to display in the data grid. Each item in this list is a set of properties that define and control the appearance and behavior of the column. To read more about each property, go to the [Column properties](#column-properties) section.

#### Show column filters

If set to “No” all column filters will be hidden.

### Rows

#### Page size

The number of rows to display per page. When **Pagination** type is “Virtual scrolling” this number define how many rows added to the end when the grid is scrolled to the bottom.

#### Pagination

#### Position of pagination

Defines the type of pagination. By default, the data grid groups rows into pages, and buttons used to navigate between pages.

When the property set to "Virtual scrolling", the navigation buttons are hidden and the data grid scrolling is used as a trigger to show next chunk of data.

#### Show paging buttons

This property controls the visibility of navigation buttons. If set to "Auto", navigation buttons are only visible when the number of elements in the data source exceeds the page size.

#### Empty list message

A custom message to display when there is no data in the data source or the filter result is empty.

#### Dynamic row class

An expression that returns the CSS class for the row. The data source entity is available as `$currentObject` within the scope of the expression.

### Events

#### On click trigger

This property determines how the click action is triggered. The default option is “Single click”, which triggers the action on a single click on a row. If set to “Double click”, the action is triggered when the row is double clicked.

#### On click action

This property sets the action to be performed when the row is clicked.

#### On selection change

This property sets the action to be performed when the row is selected or unselected.

### Column capabilities

#### Sorting

This flag controls column sorting for the entire data grid. If set to “No” sorting is disabled for any column.

#### Resizing

This flag controls column resizing for the entire data grid. If set to “No” resizing is disabled for any column.

#### Reordering

This flag controls column reordering for the entire data grid. If set to “No” reordering is disabled for any column.

#### Hiding

This flag controls column hiding for the entire data grid. If set to “No” hiding is disabled for any column.

### Configuration

#### Attribute

This property sets the entity attribute that is used to store custom visual settings for the data grid.

#### On change

This property sets the action to be performed when the **Attribute** value is changed.

### Grid wide filtering

#### Filters

A list of filters that can be used in the header of the data grid. Each filter defines an attribute that is used as part of a joined query to select data from the data source.

{{% alert color="info" %}}This property require some advanced knowledge of data grid widget and, may cause some confusion for beginners. Please follow the documentation and examples to facilitate faster learning.{{% /alert %}}

### Aria labels

#### Filter section

Defines a string value that labels the header area of the data grid. Used by assistive technologies and screen readers.

#### Export progress

Defines a string value that labels the export dialog of the data grid. Used by assistive technologies and screen readers.

#### Cancel data export

Defines a string value that labels the cancel export button of the export dialog. Used by assistive technologies and screen readers.

#### Select row

Defines a string value that labels the checkbox of the row when the selection is enabled. Used by assistive technologies and screen readers.

## Column properties {#column-properties}

### General

#### Show

Controls the type of the data displayed in the column.

The attribute displays the value of an entity attribute. The dynamic text uses the expression and can have multiple parameters, and the custom content allows for custom text and widgets.

#### Attribute

This property controls the attribute used for the column. This property is required when filtering or sorting is enabled.

#### Caption

Text to be displayed in the column header.

#### Tooltip

Text to display when hovering over column header.

#### Reference

This property is used to select the reference entity that can be used for association filtering. Useful only in conjunction with the dropdown filter widget.

#### Data source

A data source that should return a list of entities selected in the reference property. All items in this list will be available in the dropdown filter.

#### Option caption

An expression used to create a caption for each reference. This text is then visible as an option in the dropdown filter.

#### Visible

A boolean expression that controls the visibility of columns in the data grid. If the expression returns false, the column is  hidden and remains hidden unless the expression value is changed to true.

### Column capabilities

#### Can sort

If set to yes, then rows can be sorted by the data in this column.

#### Can resize

If set to yes, the column can be resized by dragging the edge of the column header.

#### Can reorder

If set to yes, the column position in the grid can be changed by the user.

#### Can hide

If set to yes, the column can be hidden in the view settings. If hidden by default, column is hidden on first render and can be shown using view settings. If set to no, column can't be hidden in view settings.

### Appearance

#### Column width

Property that controls how the column width is calculated. Auto-fill will fills the available space. Auto-fit content uses just enough space to display the column content. Manual is used to set the number for the flex-grow CSS property.

#### Alignment

Sets the text alignment in the column.

#### Dynamic cell calss

An expression used to compute the CSS class for the row using the data for the current entity and the list of selected items.

#### Wrap text

If set to yes, the column tries to wrap long text.
