---
title: "Data Grid 2 Properties"
url: /appstore/modules/data-grid-2-properties/
description: "This document describes the properties of the Data Grid 2 and their configurations."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This guide lists all the properties of the Data Grid 2 widget located inside the [Data Widgets](/appstore/modules/data-widgets/) module. The properties are grouped by the tabs and groups in which they appear in Studio Pro. Because each column of a data grid has its own set of properties, these are described separately in the [Column Properties](#column-properties) section.

For more information on using Data Grid 2 features, see [Data Grid 2](/appstore/modules/data-grid-2/).

## Configuration {#data-grid2-properties}

### General Tab

#### General

##### Data Source

This specifies the source of the data being presented in the data grid. You can select data from **Database**, **Microflow**, **Nanoflow**, or **Association**.

##### Refresh Time (in Seconds)

The time (in seconds) the grid waits between refreshing the data. Auto-refreshing is turned off when the value is 0. The default value is 0.

#### Columns {#columns}

##### Columns

A list of columns displayed in the data grid. Each item in this list is a set of properties that define and control the appearance and behavior of the column. For more information on each property, see the [Column Properties](#column-properties) section.

##### Show Column Filters

If set to **No**, then all column filters are hidden, and the **Filter** property of the columns is not shown. The default value is **Yes**.

#### Events

##### On Click Trigger

This determines how the click action is triggered. The following options are available:

* **Single click** (default): triggers the action on a single click on a row
* **Double click**: triggers the action when the row is double-clicked

##### On Click Action

This sets the action to be performed when the row is clicked.

{{% alert color="info" %}}
The setting for actions and action triggers is related to the selection method and can sometimes be ambiguous. When **Selection method** is set to **Row click**, set **On click trigger** to **Double click**; otherwise Studio Pro shows a consistency error.

For the combinations of selection method and action triggers that are supported, see the [Selection and Row Click Action](/appstore/modules/data-grid-2/#selection-and-row-click-action) section of *Data Grid 2*.
{{% /alert %}}

##### On Selection Change

This sets the action to be performed when the row is selected or unselected. This property is only shown when **Selection** is set to **Single** or **Multi**.

##### On Before Export

This sets the action to be performed before data is exported from the data grid. The action receives the following variables:

* **Grid Name** (String)
* **Column Titles** (String)
* **Chunk Size** (Integer)
* **File Name** (String)
* **Sheet Name** (String)
* **Start Time** (Date and time)

##### On After Export

Sets the action to be performed after data is exported from the data grid. The action receives the following variables:

* **Grid Name** (String)
* **Column Titles** (String)
* **Chunk Size** (Integer)
* **File Name** (String)
* **Sheet Name** (String)
* **Exported Item Count** (Integer)
* **Status** (String): `success` when the export completes, or `aborted` when it is canceled
* **Start Time** (Date and time)
* **End Time** (Date and time)

##### Filters Placeholder {#filters-placeholder}

This placeholder acts as a container for filter widgets that operate on the entire grid. It provides a designated area for placing filter widgets (text filter, date filter, number filter, drop-down filter) that filter across all grid data rather than being limited to individual columns.

Filter widgets placed here are automatically linked to the grid's data source, and changes immediately affect the grid data. You still need to configure the filter widgets themselves, for example to select which attributes they filter on. Multiple filters work together using **AND** logic.

###### Grid-Wide Filtering {#grid-wide-filtering}

{{% alert color="info" %}}
Grid-wide filtering, which was configured on the data grid itself, was removed in [Data Widgets](/appstore/modules/data-widgets/) 3.0.0. Use the [filters placeholder](#filters-placeholder) together with the [Text Filter](/appstore/modules/datagrid-text-filter/), [Date Filter](/appstore/modules/datagrid-date-filter/), [Number Filter](/appstore/modules/datagrid-number-filter/), and [Drop-Down Filter](/appstore/modules/datagrid-dropdown-filter/) widgets instead.
{{% /alert %}}

### Behavior Tab

#### Selection

##### Selection

This controls row selection capabilities. The following options are available:

* **None**: selection is turned off
* **Single**: only one row can be selected at a time
* **Multi**: several rows can be selected at a time

{{% alert color="info" %}}
When **Keep selection** is set to **No**, the selection is cleared when the selected items are no longer in the current set of data source items, for example when you change a data grid page. When **Keep selection** is set to **Yes**, selections persist across page navigation, data refreshes, filter operations, and sorting changes.
{{% /alert %}}

##### Selection Method

This specifies the method of selection. This property is only shown when **Selection** is set to **Single** or **Multi**. The following options are available:

* **Checkbox** (default): adds a checkbox to the beginning of the row, which acts as the primary way to select the row
* **Row click**: makes the whole row clickable; clicking a row selects it

##### Auto Select First Row

When set to **Yes**, the first row is selected automatically. This property is only shown when **Selection** is set to **Single** or **Multi**. The default value is **No**.

##### Toggle on Click

This defines the selection behavior when a row is clicked. When set to **Yes**, clicking a row toggles its selection and keeps the other selected rows. When set to **No**, clicking a row selects that row and clears the rest of the selection. The default value is **No**.

This property is only shown when **Selection** is set to **Single** or **Multi** and **Selection method** is set to **Row click**.

##### "Select All" Checkbox

When set to **Yes**, the data grid displays a checkbox in the header that selects or clears all rows on the current page. The default value is **Yes**.

This property is only shown when **Selection** is set to **Multi** and **Selection method** is set to **Checkbox**.

##### "Select All" Across Pages

When set to **Yes**, the data grid shows a banner with the option to select all rows across all pages when all rows on the current page are selected. The default value is **No**.

This property is only shown when **Selection** is set to **Multi**.

##### Keep Selection

When set to **No** (default), the selection is cleared when the selected items are not in the current set of data source items.

When set to **Yes**, selected items persist across page navigation, data refreshes, filter operations, and sorting changes. Selections remain active until they are cleared by the user or by a nanoflow.

This property is only shown when **Selection** is set to **Single** or **Multi**.

{{% alert color="warning" %}}
**Keep selection** cannot be used with non-persistable entities (NPEs) or view entities, as their IDs change on refresh.
{{% /alert %}}

##### Show Selection Count

This sets where the number of selected rows is displayed, together with a button to clear the selection. The following options are available:

* **Top**: displays the count above the grid
* **Bottom** (default): displays the count below the grid
* **Off**: hides the count

This property is only shown when **Selection** is set to **Multi**.

#### Loading State

##### Loading Type

This controls how the loading state is displayed while the grid loads data. The following options are available:

* **Spinner** (default): displays a spinner
* **Skeleton**: displays placeholder content in the shape of the grid rows

##### Show Refresh Indicator

When set to **Yes**, the grid shows a refresh indicator while the data is being reloaded. The default value is **No**.

#### Pagination

##### Page Size

This sests the number of rows to display per page. When **Pagination** is set to **Virtual scrolling** or **Load more**, this number defines how many rows are added each time more data is loaded. The default value is 20.

##### Pagination

Defines the type of pagination. The following options are available:

* **Paging buttons** (default): groups rows into pages, and displays buttons to navigate between pages
* **Virtual scrolling**: hides the navigation buttons and loads the next chunk of data when the user scrolls to the bottom of the grid
* **Load more**: displays a button below the rows that loads the next chunk of data

##### Custom Pagination

When set to **Yes**, the built-in paging buttons are replaced with your own pagination. A second property, also named **Custom pagination**, then appears. It is a widget area where you place the widgets that make up the custom pagination. The default value is **No**.

These properties are only shown when **Pagination** is set to **Paging buttons**.

##### Show Paging Buttons

This controls the visibility of navigation buttons. The following options are available:

* **Always** (default): navigation buttons are always visible
* **Auto**: navigation buttons are only visible when the number of elements in the data source exceeds the page size

This property is only shown when **Pagination** is set to **Paging buttons** and **Custom pagination** is set to **No**.

##### Show Number of Rows

When set to **Yes**, the pagination area shows the number of loaded rows and the total number of rows, such as "20 of 150". The default value is **No**. On large datasets, calculating the total number of rows can slow down the initial load.

This property is only shown when **Pagination** is set to **Virtual scrolling** or **Load more**.

##### Position of Pagination

Defines where the pagination is displayed. The following options are available:

* **Below grid** (default)
* **Above grid**
* **Both**

When **Pagination** is set to **Virtual scrolling** or **Load more**, this property is only shown when **Show number of rows** is set to **Yes**. If **Custom pagination** is set to **Yes**, custom pagination cannot be shown in both positions; when this property is set to **Both**, Studio Pro shows a warning and the custom pagination is rendered below the grid.

##### Load More Caption

This sets the caption of the button that loads more rows. The default value is **Load More**. This property is only shown when **Pagination** is set to **Load more**.

##### Page Size Attribute

This is an **Integer** attribute used to set the page size dynamically. When this attribute is set, it is used as the page size instead of **Page size**.

##### Page Attribute

This is an **Integer** attribute used to set the current page dynamically. The data grid also writes the current page back to this attribute when the user navigates between pages.

##### Total Count

This is an **Integer** attribute in which the data grid stores the current total number of rows.

##### Loaded Rows

This is a read-only **Integer** attribute that reflects the number of rows currently loaded. This property is only shown when **Pagination** is set to **Virtual scrolling** or **Load more**.

#### Appearance

##### Empty List Message

This controls whether a message is displayed when there is no data in the data source, or the filter result is empty. The following options are available:

* **None** (default): no message is displayed
* **Custom**: displays the content of the **Empty placeholder** area

##### Empty Placeholder

This is a widget area where you place the widgets to display when the list is empty. This property is only shown when **Empty list message** is set to **Custom**.

##### Dynamic Row Class

This is an expression that returns the CSS class for the row. The data source entity is available as `$currentObject` within the scope of the expression.

#### Advanced

##### Custom Row Key

This is an expression that returns a stable identifier for each row. Use it to maintain the scroll position when using view entities. When it is not set, the object ID is used.

### Personalization Tab

#### Column Capabilities

##### Sorting

This controls column sorting for the entire data grid. If set to **No**, then sorting is disabled for all columns and the **Can sort** column property is not shown. The default value is **Yes**.

##### Resizing

This controls column resizing for the entire data grid. If set to **No**, then resizing is disabled for all columns and the **Can resize** column property is not shown. The default value is **Yes**.

##### Reordering

This controls column reordering for the entire data grid. If set to **No**, then reordering is disabled for all columns and the **Can reorder** column property is not shown. The default value is **Yes**.

##### Hiding

This controls column hiding for the entire data grid. If set to **No**, then hiding is disabled for all columns and the **Can hide** column property is not shown. The default value is **Yes**.

#### Configuration

##### Store Configuration In

This sets where the personalized configuration of the data grid is stored. The following options are available:

* **Attribute** (default): stores the configuration in the attribute selected in **Attribute**
* **Browser local storage**: stores the configuration in the browser's local storage. The configuration is scoped to a browser profile and is not tied to a Mendix user.

##### Attribute

This sets the entity attribute that is used to store the personalized configuration of the data grid. The configuration is automatically stored and loaded. The attribute must be an unlimited String.

This property is only shown when **Store configuration in** is set to **Attribute**.

##### Store Filters

This controls whether filter states are saved as part of the personalized configuration. When set to **Yes** (default), filter values are stored together with the rest of the configuration, so they persist across sessions and page refreshes. When set to **No**, filters are not stored and reset to their default values on every page load. This is useful for shared screens, dashboards, or public interfaces.

##### On Change

This sets the action to be performed when the **Attribute** value is changed. This property is only shown when **Store configuration in** is set to **Attribute**.

### Texts Tab

#### Aria Labels

##### Filter Section

This defines a string value that labels the header area of the data grid, which contains the filtering and sorting section. Used by assistive technologies and screen readers.

##### Export Progress

This defines a string value that labels the export dialog of the data grid. Used by assistive technologies and screen readers. The default value is "Export progress".

##### Cancel Data Export

This defines a string value that labels the cancel button of the export dialog. Used by assistive technologies and screen readers. The default value is "Cancel data export".

##### Select Row Label

This defines a string value that labels the checkbox of a row when selection is enabled. Used by assistive technologies and screen readers. The default value is "Select row".

##### Select All Label

This defines a string value that labels the **Select all** checkbox in the grid header when selection is enabled. Used by assistive technologies and screen readers. The default value is "Select all rows".

##### Single Selection Column Label

This defines a string value that labels the header of the selection column when single selection is enabled. Used by assistive technologies and screen readers. The default value is "Select single row". This property is only shown when **Selection** is set to **Single**.

##### Selecting All Label

This defines a string value that labels the progress dialog shown while all items are being selected. Used by assistive technologies and screen readers. The default value is "Selecting all items...".

##### Cancel Selection Label

This defines a string value that labels the cancel button in the selection progress dialog. Used by assistive technologies and screen readers. The default value is "Cancel selection".

#### Captions

##### Row Count Singular

This sets the text displayed when one row is selected. It must include `%d` to denote the position of the number. The default value is "%d row selected".

##### Row Count Plural

This sets the text displayed when several rows are selected. It must include `%d` to denote the position of the number. The default value is "%d rows selected".

##### Select All Text

This sets the text of the button that selects all rows in the data source. The default value is "Select all rows in the data source".

##### Select All Template

This sets the text of the button that selects all rows in the data source, used when the total count is available. Use `%d` to denote the position of the number. The default value is "Select all %d rows in the data source".

##### Select Status Template

This sets the text displayed when all rows are selected. Use `%d` to denote the position of the number. The default value is "All %d rows selected.".

##### Clear Selection Label

This controls the label of the button that clears the selection. The default value is **Clear selection**. This property is only shown when **Selection** is set to **Multi**.

## Column Properties {#column-properties}

To see these properties, open the properties dialog box of Data Grid 2, then click **Columns** > **New**.

### General

#### Show

Controls the type of the data displayed in the column. The following options are available:

* **Attribute** (default): displays the value of the attribute selected in **Attribute**
* **Dynamic text**: displays the text from **Dynamic text**, which can have multiple parameters
* **Custom content**: displays the widgets placed in **Custom content**

#### Attribute

This sets the attribute used for the column. This property is required when **Show** is set to **Attribute**, and when the column can be sorted or filtered.

This property is hidden when **Show** is not set to **Attribute**, **Can sort** is set to **No**, and **Show column filters** is set to **No**.

#### Custom Content

A widget area where you place the widgets to display in each cell of the column. This property is only shown when **Show** is set to **Custom content**.

#### Dynamic Text

This is a text template that sets the text displayed in each cell of the column. This property is only shown when **Show** is set to **Dynamic text**.

#### Export Value

This is a text template that sets the value exported for this column when data is exported to Excel. Columns with custom content are only included in the export when this property is set. This property is only shown when **Show** is set to **Custom content**.

#### Export Type

This sets the cell type used for the column's values when data is exported to Excel. The following options are available:

* **Default** (default)
* **Number**
* **Date**
* **Boolean**

This property is hidden when **Show** is set to **Dynamic text**.

#### Export Number Format

THis is an optional expression that returns the Excel number format for exported numeric values, for example `"#,##0.00"`, `"$0.00"`, or `"0.00%"`. For the available formats, see [Number Formats](https://docs.sheetjs.com/docs/csf/features/nf/) in the SheetJS documentation.

This property is only shown when **Export type** is set to **Number**, and is hidden when **Show** is set to **Dynamic text**.

#### Export Date Format

This is an optional expression that returns the Excel date format for exported date and time values, for example `"yyyy-mm-dd"` or `"dd/mm/yyyy hh mm"`.

This property is only shown when **Export type** is set to **Date**, and is hidden when **Show** is set to **Dynamic text**.

#### Caption

This sets the text to be displayed in the column header. A caption is required when the column can be hidden; otherwise Studio Pro shows a warning.

#### Tooltip

This sets the text to display when hovering over a cell of the column. The text is set as the `title` attribute of the cell content. This property is hidden when **Show** is set to **Custom content**.

#### Filter

This is a widget area where you place a filter widget for the column. The filter is displayed in the column header. This property is hidden when **Show column filters** is set to **No**.

#### Visible

This is a Boolean expression that controls the visibility of the column in the data grid. If the expression returns **false**, then the column is hidden and remains hidden unless the expression value is changed to **true**. The default value is `true`.

### Column Capabilities

#### Can Sort

If set to **Yes**, then rows can be sorted by the data in this column. The default value is **Yes**. This property is hidden when **Sorting** is set to **No**.

#### Can Resize

If set to **Yes**, then the column can be resized by dragging the edge of the column header. The default value is **Yes**. This property is hidden when **Resizing** is set to **No**.

#### Can Reorder

If set to **Yes**, then the column position in the grid can be changed by the user. The default value is **Yes**. This property is hidden when **Reordering** is set to **No**.

#### Can Hide

This controls whether the column can be hidden in the view settings. The following options are available:

* **Yes** (default): the column can be hidden in the view settings
* **Yes, hidden by default**: the column is hidden on first render and can be shown using the view settings
* **No**: the column cannot be hidden in the view settings

This property is hidden when **Hiding** is set to **No**.

#### Allow Row Events

If set to **Yes**, then all default events on the row, such as **On click action** or selection, are triggered when the user interacts with the custom content. The default value is **Yes**. This property is only shown when **Show** is set to **Custom content**.

For more information, see the [Allow Row Events](/appstore/modules/data-grid-2/#allow-row-events) section of *Data Grid 2*.

### Appearance

#### Column Width

This controls how the column width is calculated. The following options are available:

* **Auto-fill** (default): fills the available space
* **Auto-fit content**: uses just enough space to display the column content
* **Manual**: uses the value of **Column size**

#### Column Size

This sets the number used to size the column relative to the other columns, as the flex-grow CSS property. The default value is 1. This property is only shown when **Column width** is set to **Manual**.

#### Min Width

This sets the minimum width of the column. The following options are available:

* **Auto** (default): no specific minimum width is set
* **Set by content**: the minimum width is the minimum width of the column content
* **Manual**: uses the value of **Min width value (px)**

#### Min Width Value (px)

This sets the minimum width of the column in pixels. The default value is 100. This property is only shown when **Min width** is set to **Manual**.

#### Alignment

This sets the text alignment in the column. The following options are available:

* **Left** (default)
* **Center**
* **Right**

#### Dynamic Cell Class

This is an expression that returns the CSS class for each cell of the column. The data source entity is available as `$currentObject` within the scope of the expression.

#### Wrap Text

If set to **Yes**, then the column tries to wrap long text. The default value is **No**.
