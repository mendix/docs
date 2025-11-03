---
title: "Data Grid 2 Properties"
url: /appstore/modules/data-grid-2-properties/
description: "This document describes the properties of the Data Grid 2 and their configurations."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This guide lists all the properties of the Data Grid 2 widget located inside the [Data Widgets](/appstore/modules/data-widgets/) module. Because data grids also contain columns and rows, properties for those [columns](#columns) and [rows](#rows) are also described below.

For more information on using Data Grid 2 features, see [Data Grid 2](/appstore/modules/data-grid-2/).

## Configuration {#data-grid2-properties}

### General Tab

#### Data Source

Data source specifies the source of the data being presented in the data grid. You can select data from **Database**, **Microflow**, **Nanoflow**, or **Association**.

#### Refresh Time (in seconds)

The time (in seconds) the grid waits between refreshing the data. Auto-refreshing is turned off when the value is 0.

#### Selection

This property controls row selection capabilities. Selection is turned off by default, but can be enabled by choosing ether **Single** or **Multi**:

* The **Single** selection is selection type where only one row can be selected at the time
* The **Multi** type support selecting several rows at the time

{{% alert color="info" %}}
Data grid currently supports only in-memory selection. This implies some limitation which allows selecting only visible rows. If you change a data grid page or reload the browser window, then selection will be cleared.{{% /alert %}}

#### Selection Method

This property specifies the method of selection.

{{% alert color="info" %}}
This property is available only when **Selection method** is set to **Single** or **Multi**.
{{% /alert %}}

The **Checkbox** method adds a checkbox to the beginning of the row, which acts as the primary way to select the row. The **Row click** method makes the whole row clickable; clicking on a row makes it selected.

#### Show (Un)check All Toggle

{{% alert color="info" %}}
This property is available only when **Selection method** is set to **Checkbox** in combination with **Selection** > **Multi**.
{{% /alert %}}

When set to **Yes**, the data grid displays a checkbox in the header that, when selected, selects all visible rows. Clearing it will clear the selected rows.

#### Loading Type

This property controls how loading states are displayed during data operations such as pagination, filtering, and refresh. 

Available options include spinner (rotating overlay) and skeleton (placeholder content). Loading indicators automatically appear during initial data load, pagination navigation, filter operations, sorting, and export operations. The system includes smart timing to prevent flickering on fast operations, and also provides appropriate timeout handling for slow operations.

### Columns Tab {#columns}

#### Columns

A list of columns displayed in the data grid. Each item in this list is a set of properties that define and control the appearance and behavior of the column. To read more about each property, see the [Column properties](#column-properties) section.

#### Show Column Filters

If set to **No**, then all column filters will be hidden.

### Rows Tab {#rows}

#### Page Size

The number of rows to display per page. When **Pagination** type is **Virtual scrolling**, then this number defines how many rows added to the end when the grid is scrolled to the bottom.

#### Pagination

#### Position of Pagination

Defines the type of pagination. By default, the data grid groups rows into pages, and employs buttons to navigate between pages.

When the property is set to **Virtual scrolling**, then the navigation buttons are hidden and the data grid scrolling is used as a trigger to show the next chunk of data.

#### Show Paging Buttons

This property controls the visibility of navigation buttons. If set to **Auto**, navigation buttons are only visible when the number of elements in the data source exceeds the page size.

#### Show Number of Rows

This property displays the total number of rows in the pagination area, providing users with context about the dataset size. 

When enabled, it shows information such as **1 to 20 of 150**. It works with virtual scrolling, load more pagination, and standard pagination modes. On large datasets, the total count calculation may impact initial load time.

#### Empty List Message

Sets a custom message to be displayed when there is no data in the data source, or the filter result is empty.

#### Dynamic Row Class

An expression that returns the CSS class for the row. The data source entity is available as `$currentObject` within the scope of the expression.

### Events Tab

#### On Click Trigger

This property determines how the click action is triggered.

The default option is **Single click**, which triggers the action on a single click on a row. If set to **Double click**, the action is triggered when the row is double-clicked.

#### On Click Action

This property sets the action to be performed when the row is clicked.

#### On Selection Change

This property sets the action to be performed when the row is selected or unselected.

#### Filters  {#filters-placeholder}

This placeholder acts as a container for filter widgets that operate on the entire grid. This placeholder provides a designated area for placing filter widgets (text filter, date filter, number filter, drop-down filter) that filter across all grid data rather than being limited to individual columns. 

Filter widgets placed here automatically link to the grid's datasource, and changes immediately affect the grid data. Still, widgets should be configured to work properly. Multiple filters work together using **AND** logic by default.

### Column Capabilities Tab

#### Sorting

This flag controls column sorting for the entire data grid. If set to **No**, then sorting is disabled for any column.

#### Resizing

This flag controls column resizing for the entire data grid. If set to **No**, then resizing is disabled for any column.

#### Reordering

This flag controls column reordering for the entire data grid. If set to **No**, then reordering is disabled for any column.

#### Hiding

This flag controls column hiding for the entire data grid. If set to **No**, then hiding is disabled for any column.

### Configuration Tab

#### Store Filters in Personalization

This property controls whether filter states are saved as part of user personalization settings or not. When enabled, the system preserves filter input values, selected filter types, applied filter combinations, filter visibility states, and custom filter configurations in the user's personalization profile. 

Filter states can be stored in browser localStorage or database attributes depending on personalization configuration. When enabled, users' filter preferences persist across sessions and page refreshes. When disabled, filters reset to default values on every page load — useful for shared screens, dashboards, or public interfaces.

#### Attribute

This property sets the entity attribute that is used to store custom visual settings for the data grid.

#### On Change

This property sets the action to be performed when the **Attribute** value is changed.

### Grid Wide Filtering

{{% alert color="warning" %}}
Grid Wide Filtering has been deprecated and removed. Use the [Filters Placeholder](#filters-placeholder) along with dedicated filter widgets ([Text Filter](/appstore/modules/datagrid-text-filter/), [Date Filter](/appstore/modules/datagrid-date-filter/), [Number Filter](/appstore/modules/datagrid-number-filter/), and [Dropdown Filter](/appstore/modules/datagrid-dropdown-filter/)) for filtering functionality.
{{% /alert %}}

### Aria Labels

#### Filter Section

Defines a string value that labels the header area of the data grid. Used by assistive technologies and screen readers.

#### Export Progress

Defines a string value that labels the export dialog of the data grid. Used by assistive technologies and screen readers.

#### Cancel Data Export

Defines a string value that labels the cancel export button of the export dialog. Used by assistive technologies and screen readers.

#### Select Row

Defines a string value that labels the checkbox of the row when the selection is enabled. Used by assistive technologies and screen readers.

#### Select All Rows

This property provides an ARIA label for the **Select All** checkbox in the grid header. This ARIA label is announced by screen readers when users navigate to the select all checkbox. 

The label integrates with three-state checkbox functionality (unchecked, checked, indeterminate) and supports localization through text templates. Screen readers announce appropriate state changes when the checkbox is toggled, improving accessibility compliance for bulk-selection operations.

## Column Properties {#column-properties}

You can easily see these properties by opening up the property dialog box of Data Grid 2, then clicking **Columns** > **New**.

### General Tab

#### Show

Controls the type of the data displayed in the column.

The attribute displays the value of an entity attribute. The dynamic text uses the expression and can have multiple parameters. The custom content allows for custom text and widgets.

#### Attribute

This property controls the attribute used for the column. This property is required when filtering or sorting is enabled.

#### Caption

Text to be displayed in the column header.

#### Tooltip

Text to display when hovering over column header.

#### Visible

A Boolean expression that controls the visibility of columns in the data grid. If the expression returns **false**, then the column is hidden and remains hidden unless the expression value is changed to **true**.

### Column Capabilities

#### Can Sort

If set to **Yes**, then rows can be sorted by the data in this column.

#### Can Resize

If set to **Yes**, then the column can be resized by dragging the edge of the column header.

#### Can Reorder

If set to **Yes**, then the column position in the grid can be changed by the user.

#### Can Hide

If set to **Yes**, the column can be hidden in the view settings.

If hidden by default, column is hidden on first render and can be shown using view settings.

If set to **No**, column cannot be hidden in view settings.

### Appearance

#### Column Width

This property controls how the column width is calculated.

**Auto-fill** fills the available space. **Auto-fit content** uses just enough space to display the column content. **Manual** is used to set the number for the flex-grow CSS property.

#### Alignment

Sets the text alignment in the column.

#### Dynamic Cell CSS

An expression used to compute the CSS class for the row using the data for the current entity and the list of selected items.

#### Wrap Text

If set to **Yes**, then the column tries to wrap long text.
