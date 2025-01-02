---
title: "Data Grid 2"
url: /appstore/modules/data-grid-2/
description: "Describes the configuration and usage of the Data Grid 2 widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction {#introduction}

[Data Grid 2](https://marketplace.mendix.com/link/component/116540) is the successor to the standard data grid widget for displaying content in a tabular form. It comes with many powerful new features and settings like support for widgets, row and cell coloring, responsive layout, accessibility, and paging options like virtual scrolling. The Data Grid 2 widget offers personalization support so that end-users can show, hide, and re-order columns. Personalizations can be persisted in the database for flexibility and control. 

This document focusing on explaining module features. For precise details on data grid 2 widget properties, see [Data Grid 2 Properties](/appstore/modules/data-grid-2-properties/).

The data source determines which objects will be shown in a Data Grid 2 widget. In v2.3.0 and above, selecting the entity of the data source will automatically fill the contents, create columns with filters, and create buttons. You can also select which columns to use for the content generation.

The widget also uses a flexible approach for filtering. You can drag data-grid-specific widgets into the header of the grid and tailor the behavior of the filters. There are filters for text, numbers, and dates, and there is an option to add drop-down filters for single or multiple selections.

Here is an example of a data grid using filters:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/example.png" alt="Example of data grid using filters" class="no-border" >}}

You can enable these advanced options to customize your data grid:

* Pagination type
* Pagination position
* Empty list option
* Dynamic row and cell class
* Column capabilities
* Custom configuration
* Header Filters

## Capabilities

In the new data grid, you are able to choose how users can iterate within the grid. Iteration capabilities are listed below.

### Sorting

**Sorting** enables the header to be clickable. When clicked it will switch between ascending, descending, and no sorting. This functionality can be discerned according to the arrows on the right side:

* Arrow up: ascending sorting applied
* Arrow down: descending sorting applied
* Double-sided arrow: no sorting is applied

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/sorting-asc.png" alt="Ascending sort" class="no-border" >}}
{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/sorting-desc.png" alt="Descending sort" class="no-border" >}}
{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/no-sorting.png" alt="Natural order (No sorting)" class="no-border" >}}

### Resizing

**Resizing** enables the header to be resizable by dragging the handle on the right side of a header. Here is an example of the handle indicating the column is resizable:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/resizing.png" alt="Handle indicating the column is resizable" class="no-border" >}}

### Reordering

**Reordering** enables the header to be reordered by dragging and dropping in another column. When dragging, a black handle indicates where the column can be dropped:

Here is an example of reordering in progress:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/reordering.gif" alt="Example of reordering" class="no-border" >}}

### Hiding

**Hiding** enables a column to be hidden. When this option is enabled for any column, a button with an eye icon ({{% icon name="view" %}}) will appear on the right side of the data grid like the example below. It contains all the columns **hidden by default** or enabled to be hidden. When de-selected, the column will not be visible in the grid anymore.

Here is an example of hiding button containing columns to be hidden:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/hiding.png" alt="Example of hiding button containing columns to be hidden" class="no-border" >}}

{{% alert color="info" %}}
When a column is marked as “Yes, hidden by default” it will render differently in **Structure mode** and **Design mode** and to indicate that the column is hidden. **When running the application, the column will in fact be hidden by default**. 
{{% /alert %}}

Here is an example containing a column with **Yes, hidden by default** in **Structure mode**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/hidden-columns-structure-mode.png" alt="Example containing a column with “Yes, hidden by default” in Structure mode" class="no-border" >}}

Here is an example containing a column with **Yes, hidden by default** in **Design mode**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/hidden-columns-design-mode.png" alt="Example containing a column with “Yes, hidden by default” in Design mode" class="no-border" >}}

## Pagination

{{% alert color="info" %}}
This widget does not support [system texts](/refguide/system-texts/), meaning is not possible to translate its content to another language.
{{% /alert %}}

In the new data grid we offer two types of pagination: **Paging Buttons** and **Virtual Scrolling**.

### Paging Buttons

The **Paging Buttons** option will render the default buttons as the previous data grid. When the data source is uncountable (for example, external entities), neither the last page button nor the counting will be available.

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/paging-buttons.png" alt="Example of paging buttons" >}}

You can configure pagination based on the following properties:

* **Position** — The **Position of paging button** options allow you to position paging buttons above or below the data grid.
* **Visibility** — The **Show paging buttons** options allow you to always show paging, or to automatically show and hide paging based on the amount of available data compared to the display limit per page.

### Virtual Scrolling 

The **Virtual Scrolling** option forces the data grid to show a fixed amount of items (defined in the page size option) within a scrollable container. When the end-user reaches the bottom of the scrollable container it fetches more items automatically.

### Load More

This option functions similarly to the **Virtual Scrolling** feature, but instead of automatically loading data as the end-user scrolls, a button is displayed at the end of the list of items. Clicking this button enables the end-user to fetch more items.

## Columns

In Data Grid you can choose what you want to render into columns. This can be an attribute, dynamic text, or even a combination of widgets (custom content). To choose what you want to render, open a column in the column list and select the appropriate option according to your needs.

Here is an example of column properties:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/column-properties.png" alt="Example of column properties" >}}

### Attribute

**Attribute** renders the value of a selected attribute.

### Dynamic Text

**Dynamic Text** renders a text-templated string which can contain text combined with attributes:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/column-dynamic-text.png" alt="Example of dynamic text" class="no-border" >}}

### Custom Content

**Custom Content** allows users to drop widgets into the data grid and use the column attribute value to show custom content. After selecting this option you will be given dropzones in which to drop your widgets.

Here is an example of custom content using new Badge widget in **Structure mode**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/column-custom-content.png" alt="Example of custom content using new Badge widget in Structure mode" class="no-border" >}}

For more information on configuring various widget properties, see [Common Widget Properties](/refguide/common-widget-properties/).

### Column Width

You can define how each cell will be rendered in the data grid. We offer three choices:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/column-width.png" alt="Settings for column width for each column item" class="no-border" >}}

* **Auto-fill** — With this option it will auto define the width of your column, if all columns are using auto-fill, it will divide evenly the same width, if another column is configured with auto-fit or manual, it will fill the available space.
* **Auto-fit** — Content With this option it will calculate the width of your column based on the content of each row.
* **Manual** — With this option you will manually define the size of your column based of flexbox grow values, for more information, please [check here](https://www.w3.org/TR/css-flexbox-1/).

### Alignment

You can choose how the content inside your columns will be aligned. We offer three choices: left, center, and right.

{{% alert color="info" %}}
This will also change the alignment of your header.
{{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/column-alignment.png" alt="Settings for alignment of each column item" class="no-border" >}}

### Dynamic Cell Class

In the new data grid we offer an option to dynamically apply a CSS class in a specific cell. You can achieve this by adding an expression based on the column value (attribute) like the example below.

In this example we check the value of `StringAttribute` and then apply the class `.my-name-class` if the attribute is equal to `my name` to the cell:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/dynamic-cell-class.png" alt="Example of dynamic cell class" class="no-border" >}}

### Wrap Text

You can choose if you want to wrap the text content of a column and apply ellipsis in the end of it.

{{% alert color="info" %}}
If you are using **Custom content** in the **Show** option of the **General** tab, please make sure you are using a **Text Widget** without containers around it. Containers sometimes interfere with wrapping texts.
{{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/column-wrap-text.png" alt="Example of wrap text" class="no-border" >}}

### Tooltip

If you need to display advisory information for cell content, you can specify the tooltip text. This text will be shown when a user is hovering over the cell content.

{{% alert color="warning" %}}
This property is not available if you enable **Custom content** for the column
{{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/tooltip-prop.png" alt="Example of wrap text" class="no-border" >}}

### Association Filter {#association-filter}

* **Reference** — this property defines the association that will be used for filtering. When set, it enables filtering over association with the Drop-down filter. Drop-down filter will prioritize this property over `Attribute` property.
* **Data source** — defines data source for filter options. The data source should return list of all possible entities that could be associated with a parent.
* **Option caption** — the expression that will be used as caption for the option.

{{% alert color="info" %}}
This column configuration is intended to be used in conjunction with [Drop-down Filter](#drop-down-filter). Other filter types do not support association filtering.
{{% /alert %}}

### Visible {#visible-filter}

When using a data grid, sometimes columns do not need to be shown. Using this **Visible** expression configuration, you can specify when you want to display columns

## Rows

This section defines options for the rows of the grid.

### Empty List Message

The **Empty List Message** option defines what users can see when the data grid does not have a value to be presented or when a filter is applied without results. When this option is defined as custom you can place widgets right above the rows in a dropzone. Here is an example:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/empty-list-message.png" alt="Example of empty list message placeholder in Structure mode" class="no-border" >}}

### Dynamic Row Class

The **Dynamic Row Class** option allows users to dynamically apply a CSS class in a specific row. This option will apply for the entire row the same class. You can achieve this by adding an expression based on the column value (attribute), like the example below.

{{% alert color="warning" %}}
If you have a dynamic cell class being applied it will have precedence over the row class.
{{% /alert %}}

In this example we check the value of `StringAttribute and` then apply the class `.my-name-class` if the attribute is equal to `my name` to the row:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/dynamic-row-class.png" alt="Example of dynamic row class" class="no-border" >}}

## Events

The new data grid can trigger some events while iterating with it.

### On Click Action

Triggers an action (such as a nanoflow, microflow, or Show page action) when the end-user clicks in one of the rows. It also adds a pointer cursor to signal that it is clickable. This function also complies with accessibility features and can be reached using only the keyboard.

## Filters {#filters}

Sets of filters can be used in combination with data grids. To be able to use filters you need to select the option **Show column filters**. When this option is selected a drop-zone where you can place your desired filter widget will appear in each column header.

{{% alert color="warning" %}}
The type of your selected attribute should match the filter type. For example, a **Text filter** should be used for a String attribute.

Also the desired attribute must be filterable. For example, not a value which is calculated.
{{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/settings-show-column-filters.png" alt="Settings for data grid 2" class="no-border" >}}

Here is an example of dropzones for filters in **Structure mode**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/dropzones-for-filters.png" alt="Example of dropzones for filters in Structure mode" class="no-border" >}}

### Date Filter

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/date-filter.png" alt="Example of default Date filter look and feel" class="no-border" >}}

**Date filter** allows users to match date attributes based on these predefined criteria:

* Between
* Greater than
* Greater than or equal
* Equal
* Not equal
* Smaller than
* Smaller than or equal

Here is an example of **Date filter** as **Between**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/date-filter-between.png" alt="Date filter between" class="no-border" >}}

{{% alert color="warning" %}}
When **Date filter** is defined with **Between** it is not possible to type the date manually. It also has a clear button to clear the date range.
{{% /alert %}}

You can select your filter criteria in the **Date Filter** settings:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/date-filter-settings.png" alt="Date filter settings" class="no-border" >}}

When **Adjustable by user** is defined as **No** it will not render the option to choose the filter type in the widget.

Here is an example of available filter types for **Date Filter**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/date-filter-types.png" alt="Filter types for Date Filter" class="no-border" >}}

Here is an example of **Date Filter** with **Adjustable by user** defined as **No**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/date-filter-not-adjustable.png" alt="Example of Date filter with “Adjustable by user” set as No" class="no-border" >}}

You can also define the default value of the widget which will be predefined as initial value when opening your data grid page.

When **Default filter** is defined as **Between** these fields will appear to define the start and end dates:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/date-filter-between-settings.png" alt="Example of Date filter with “Default value” set as Between" class="no-border" >}}

#### Configurations

In this section you can select a **Saved attribute** in order to save the current value of the filter. However, the value is not automatically applied to the widget. To restore the previously saved value of the filter, you must configure the same attribute as the **Default value** of the widget. The attribute available in this section must be this type:

* Date & Time

#### Events

In this section you can select an action to be executed **On change** by the filter value. This means every time the user types or selects a value it will be executed.

### Drop-Down Filter {#drop-down-filter}

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/dropdown-filter.png" alt="Example of default drop-down filter" class="no-border" >}}

**Drop-down filter** allows users to match enumeration values, Boolean attributes, or an association attribute. To configure the available options when you press the drop-down filter, you can manually add them to the options list or select **Automatic options** to automatically load the values:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/dropdown-filter-settings.png" alt="Example of settings for drop-down filter" class="no-border" >}}

{{% alert color="info" %}}
When a drop-down filter is used in conjunction with an Association Filter data grid configuration, only **Automatic options** are supported. Any custom options will be ignored. To enable association filtering, see the [Association Filter](#association-filter) section.
{{% /alert %}}

{{% alert color="warning" %}}
Due to current limitations, **Saved attribute**, and **Default value** properties will be ignored when a drop-down filter is used in conjunction with an [Association Filter](#association-filter) data grid configuration. This limitation also applies when using page state, meaning that the filter value used in the drop-down filter will not persist when navigating between pages.
{{% /alert %}}

When adding a new option, the following properties are required:

* **Caption** — The text being rendered for each option in the drop-down.
* **Value** — The corresponding value that will be compared, if a value is being compared with an enumeration, it should match exactly the enumeration value. This property allows the usage of expression (you can use conditionals to apply dynamic values).

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/dropdown-filter-item.png" alt="Example of settings for new option" class="no-border" >}}

This widget also allows multiple selections by selecting **Multiselect** in the settings. Multiple selections can look like this:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/dropdown-filter-multiselect.png" alt="Example of multi select drop-down filter" class="no-border" >}}

You can also define the empty option caption, which will be rendered as the first item if **Multiselect** if set as **No**. It allows users to clean the filter if pressed.

#### Configurations

In this section you can select a **Saved attribute** in order to save the current value of the filter. However, the value is not automatically applied to the widget. To restore the previously saved value of the filter, you must configure the same attribute as the **Default value** of the widget. The attribute available in this section must be this type:

* String

{{% alert color="warning" %}}
If **Multiselect** is enabled you must select a String attribute containing `Unlimited` in its size.
{{% /alert %}}

#### Events

In this section you can select an action to be executed **On change** by the filter value. This means every time the user types or selects a value it will be executed.

### Number Filter

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/number-filter.png" alt="Example of default number filter" class="no-border" >}}

The **Number filter** allows users to match decimal, integer, and long attributes based on these predefined criteria:

* Greater than
* Greater than or equal
* Equal
* Not equal
* Smaller than
* Smaller than or equal

You can select your filter criteria in the **Number Filter** settings:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/number-filter-settings.png" alt="Number filter settings" class="no-border" >}}

When **Adjustable by user** is defined as **No** it will not render the option to choose the filter type in the widget.

Here is an example of available filter types for **Number Filter**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/number-filter-types.png" alt="Filter types for number filter" class="no-border" >}}

Here is an example of **Number Filter** with **Adjustable by user** set as **No**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/number-filter-not-adjustable.png" alt="Example of number filter with “Adjustable by user” set as No" class="no-border" >}}

You can also define the default value of the widget, which will be predefined as initial value when opening your data grid page.

To have better control of when the filter will be applied, we offer a **Apply after (ms)** option under the **On change behavior** group. This option will only trigger the filter after a predefined period of time while typing. By default, Mendix suggests 500ms.

#### Configurations

In this section you can select a **Saved attribute** in order to save the current value of the filter. However, the value is not automatically applied to the widget. To restore the previously saved value of the filter, you must configure the same attribute as the **Default value** of the widget. The attribute available in this section must be one of the following types:

* Autonumber
* Decimal
* Integer
* Long

#### Events

In this section you can select an action to be executed **On change** by the filter value. This means every time the user types or selects a value it will be executed.

### Text Filter

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/text-filter.png" alt="Example of default text filter" class="no-border" >}}

**Text filter** allows users to match string attributes based on these predefined criteria:

* Contains
* Starts with
* Ends with
* Greater than
* Greater than or equal
* Equal
* Not equal
* Smaller than
* Smaller than or equal

You can select your filter criteria in the **Text filter** settings:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/text-filter-settings.png" alt="Text filter settings" class="no-border" >}}

When **Adjustable by user** is defined as **No** it will not render the option to choose the filter type in the widget.

Here is an example of available filter types for **Text Filter**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/text-filter-types.png" alt="Filter types for text filter" class="no-border" >}}

Here is an example of Text Filter with **Adjustable by user** set to **No**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/text-filter-not-adjustable.png" alt="Example of text filter with “Adjustable by user” set as No" class="no-border" >}}

You can also define the default value of the widget, which will be predefined as initial value when opening your data grid page.

To have better control of when the filter will be applied, we offer a **Apply after (ms)** option under the **On change behavior** group. This option will only trigger the filter after a predefined period of time while typing. By default, Mendix suggests 500ms.

#### Configurations

In this section you can select a **Saved attribute** in order to save the current value of the filter. However, the value is not automatically applied to the widget. To restore the previously saved value of the filter, you must configure the same attribute as the **Default value** of the widget. The attribute available in this section must be one of the following types:

* Hashed string
* String

#### Events

In this section you can select an action to be executed **On change** by the filter value. This means every time the user types or selects a value it will be executed.

### Grid Wide Filtering {#grid-wide-filtering}

In order to enable filtering within the data grid header (outside the columns) you need to enable `Grid wide filters` and select the desired attributes to be filtered in the **Filtering** tab. You can select attributes of the following types:

* Autonumber
* Boolean
* Date & time
* Decimal
* Enumeration
* Hashed string
* Integer
* Long
* String

The attributes selected here will be used for the matching filter placed inside the composable region. Only the first keyword in the filter will be considered when filtering multiple attributes in grid wide filtering

When using multiple attributes, the filters will automatically select the matching attributes and then compose the desired filter value in an `OR expression`. Make sure you only have one filter widget for each type, for example `Text Filter` and `Number Filter`.

{{% alert color="info" %}}
If a filter is being used and its type does not match with any selected attribute, then it will throw an error requesting you to select the correct filter widget.
{{% /alert %}}

{{% alert color="warn" %}}
There cannot be more than one filter of the same type in the data grid header. For example, if a data grid header already has a `Number Filter`, adding another `Number Filter` will cause incorrect data filtering.
{{% /alert %}}

## Export to Excel

The Data Grid 2 widget ships with built-in functionality to export data from the data source you configured in the settings. The export is done via the *Export_To_Excel* JavaScript action that is distributed as part of the [Data Widgets](/appstore/modules/data-widgets/) module.

To export data from the data grid, create a new nanoflow that calls *Export_To_Excel*. The *Export_To_Excel* action has a set of inputs:

* **Datagrid name** - the name of the data grid from which data should be exported (the name can be found and copied from the data grid's settings (**Properties** > **Common** > **Name**))
* **File name** - the file name to use for the exported document (does not require an appended file extension)
* **Sheet name** - the name to use for the Excel sheet of the exported document
* **Include column names** - a Boolean expression that, if true, tells the action to include column captions as the first row in the exported document

## Configuration

You can define an attribute to store the current configuration of the data grid. In this way, if you re-open your page then the current sorted columns, order, and hidden columns will remain the same as in the previous state. To set this option, you need to select a `String` attribute with `Unlimited` as its size as the attribute in the data grid **Personalization** tab in Studio Pro.

{{% alert color="warning" %}}
If the desired `String` attribute does not contain `Unlimited` in its size, the Data grid will not be able to save all the configurations as expected.
{{% /alert %}}

Here is an example of an unlimited string attribute:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/unlimited-string-attribute.png" alt="Example of unlimited string attribute" class="no-border" >}}

In order to select an attribute, you need to surround the new Data grid with a Data view. This will allow you to select an attribute. You can also define an action when the attribute will be updated with the new configurations.

Here is an example of a configuration containing an On change action:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/configuration.png" alt="Example of a configuration containing on change action" class="no-border" >}}

## Performance

The performance of the new data grid can be affected if sorting or filtering are enabled. This is because Data widgets v1.1 - 1.2 retrieve all available values for sorting or filtering while the widget runs. This problem does not occur in versions above 1.3 because those versions use [Filtering APIs](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values/#filter-helpers) to retrieve only the necessary data.

## Troubleshooting

If you are using Atlas v2.x and you cannot upgrade to Atlas 3 at the moment, please replace the line 3 `cssFiles` with the following code in the file `theme/settings.json`:

```json
"cssFiles": [ 
    "styles/web/css/main.css", 
    "theme.compiled.css" 
],
```

## In-Memory Selection {#selection}

{{% alert color="info" %}}
In-memory selection was introduced in Data Widgets v2.7.0.
{{% /alert %}}

Enabling selection allows users to select a row by clicking the row or a checkbox. Selection is disabled by default, and can be activated by changing the **Selection** setting from **None** to either **Single** or **Multi**.

Since the data grid widget keeps selected items in short-living memory that is cleared every time you change the data grid page, selecting items across multiple pages is not supported. This means that the end-user can only select items that are currently visible.

### Selection Mode

In **Single** selection mode, users are limited to selecting one row at a time. 

In **Multi** mode, the user can select multiple rows.

### Selection Method

When selection is enabled, you can choose a method for selecting rows. The **Checkbox** method adds a checkbox to the beginning of each row, and the end-user must click the checkbox to select the row. By contrast, the **Row** method does not add any additional controls to the row, and the end-user must click the row itself to select that row.

### Show (Un)check All Toggle

If this setting is enabled, then the data grid widget shows a checkbox at the header. This checkbox controls the selection for all visible items. Clicking on this checkbox will select all visible items. If all items are already selected, clicking the checkbox clears the selection.

### Selection and Row Click Action

{{% alert color="info" %}}
The **On click trigger** setting was introduced in Data Widgets v2.13.0. Previous versions did not allow both selection and click actions at the same time.
{{% /alert %}}

The data grid settings support the case where it is possible to have both a selection and an on-click action at the same time.

The setting for action triggers is related to the selection method and can sometimes be ambiguous. See the table below to see which combinations of selection method and trigger are supported.

| Selection method | Action trigger          | Selection trigger                                | Supported |
| ---------------- | ----------------------- | ------------------------------------------------ | --------- |
| Checkbox         | Single click on the row | Click on the checkbox, <kbd>Ctrl</kbd> + click on the row (or <kbd>Command</kbd> + click on the row on Mac) | Yes       |
| Checkbox         | Double-click on the row | Click on the checkbox, <kbd>Ctrl</kbd> + click on the row (or <kbd>Command</kbd> + click on the row on Mac) | Yes       |
| Row              | Single click on the row |                                                  | No        |
| Row              | Double-click on the row | <kbd>Ctrl</kbd> + click on the row (or <kbd>Command</kbd> + click on the row on Mac)                    | Yes       |

To achieve this behavior, set the **On click trigger** to **Double click**. When a data grid is configured this way, the user may select a row by double-clicking it.

## Keyboard Support {#keyboard-support}

| Key                      | Function                                                     |
| ------------------------ | ------------------------------------------------------------ |
| <kbd>→</kbd>              | Moves focus one cell to the right.                           |
| <kbd>←</kbd>               | Moves focus one cell to the left.                            |
| <kbd>↓</kbd>               | Moves focus one cell down.                                   |
| <kbd>↑</kbd>                 | Moves focus one cell up.                                     |
| <kbd>Page&nbsp;up</kbd>                  | Moves focus one page up.                                     |
| <kbd>Page&nbsp;down</kbd>                | Moves focus once page down.                                  |
| <kbd>Home</kbd>                     | Moves focus to the first cell in the row.                    |
| <kbd>End</kbd>                      | Moves focus to the last cell in the row.                     |
| <kbd>Ctrl</kbd> + <kbd>Home</kbd>              | Moves focus to the first cell in grid.                       |
| <kbd>Ctrl</kbd> + <kbd>End</kbd>               | Moves focus to the last cell in grid.                        |
| <kbd>Shift</kbd> + <kbd>Space</kbd>            | Selects current row. (1)                                     |
| <kbd>Ctrl</kbd> + <kbd>A</kbd>             | Select all visible rows. (1)(2)                              |
| <kbd>Shift</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd> | Moves focus and selects current and row above/below. (1)(2)  |
| <kbd>Shift</kbd> + <kbd>Page&nbsp;up</kbd>/<kbd>Page&nbsp;down</kbd>  | Moves focus one page up/down and selects all rows between current and final row. (1)(2) |
| <kbd>Shift</kbd> + <kbd>Home</kbd>/<kbd>End</kbd>         | Moves focus to the start/end of the grid and selects all rows between current and final row. (1)(2) |

Legend:

| Symbol    | Meaning   |
| --- | --- |
| 1 | Available only when selection is enabled. |
| 2 | Available only when selection mode should be “Multi”. |

## Resetting Filters

Resetting filters is possible using **Reset_Filter** and **Reset_All_Filters** actions available as part of the Data Widgets module. Setting up these actions is a manual process that requires creating a nanoflow and setting the name of the filter or data grid to be reset.

The name of the filter or data grid can be found at **Properties** > **Common** > **Name**.
