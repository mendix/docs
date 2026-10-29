---
title: "Data Grid 2"
url: /appstore/modules/data-grid-2/
description: "Describes the configuration and usage of the Data Grid 2 widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction {#introduction}

[Data Grid 2](https://marketplace.mendix.com/link/component/116540) is the successor to the standard data grid widget for displaying content in a tabular form. It comes with many powerful new features and settings like support for widgets, row and cell coloring, responsive layout, accessibility, and paging options like virtual scrolling. The Data Grid 2 widget offers personalization support so that end-users can show, hide, and re-order columns. Personalizations can be persisted in the database for flexibility and control.

This document focusing on explaining module features. For precise details on Data Grid 2 widget properties, see [Data Grid 2 Properties](/appstore/modules/data-grid-2-properties/).

The data source determines which objects will be shown in a Data Grid 2 widget. In v2.3.0 and above, selecting the entity of the data source will automatically fill the contents, create columns with filters, and create buttons. You can also select which columns to use for the content generation.

The widget uses a flexible, modular approach for filtering. You can place dedicated filter widgets (text filter, date filter, number filter, drop-down filter) in the filters placeholder above the grid, or within individual column headers. These specialized filter widgets provide tailored behavior for different data types and use cases. This system is superior to a built-in filtering system in that it allows for a more maintainable and customizable architecture.

Here is an example of a data grid using filters:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/example.png" alt="Example of data grid using filters" class="no-border" >}}

You can enable these advanced options to customize your data grid:

* Pagination type and positioning
* Row count display
* Loading state indicators
* Empty list option
* Dynamic row and cell class
* Column capabilities
* Filter personalization settings
* Custom configuration
* Modular filtering with dedicated filter widgets

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

### Allow Row Events {#allow-row-events}

{{% alert color="info" %}}
**Allow Row Events** is only available when a column is set to **Custom Content**.
{{% /alert %}}

When set to **Yes**, default events such as On click action or selection will be triggered when the user interacts with the content.

{{% alert color="alert" %}}
If a column contains interactive elements such as buttons, this might lead to unexpected behavior when both a click on the button and the action configured on the row are triggered. To prevent default events from triggering when interacting with content, set this setting to **No**.
{{% /alert %}}

## Pagination

{{% alert color="info" %}}
The paging status text (for example, `1 to 20 of 150`) is built into the widget and cannot be translated.
{{% /alert %}}

The data grid offers three types of pagination: **Paging buttons**, **Virtual scrolling**, and **Load more**.

### Paging Buttons

The **Paging Buttons** option will render the default buttons as the previous data grid. When the data source is uncountable (for example, external entities), neither the last page button nor the counting will be available.

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/paging-buttons.png" alt="Example of paging buttons" >}}

You can configure pagination based on the following properties:

* **Position** – The **Position of pagination** options (**Below grid**, **Above grid**, or **Both**) set where the pagination appears. For **Virtual scrolling** and **Load more**, this option is available only when **Show number of rows** is set to **Yes**.
* **Visibility** – The **Show paging buttons** options allow you to always show paging, or to automatically show and hide paging based on the amount of available data compared to the display limit per page. This option is available only when **Pagination** is set to **Paging buttons** and **Custom pagination** is set to **No**.

### Virtual Scrolling

The **Virtual Scrolling** option forces the data grid to show a fixed amount of items (defined in the page size option) within a scrollable container. When the end-user reaches the bottom of the scrollable container it fetches more items automatically.

### Load More

This option functions similarly to the **Virtual Scrolling** feature, but instead of automatically loading data as the end-user scrolls, a button is displayed at the end of the list of items. Clicking this button enables the end-user to fetch more items.

### Row Count Display

When **Show number of rows** is set to **Yes**, the pagination area displays the number of loaded rows and the total number of rows. This provides users with context about the data set size. The counter shows information such as "20 of 150", and automatically updates when users load more rows, apply filters, or refresh data. This option is available only for **Virtual scrolling** and **Load more**.

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

**Custom Content** allows users to drop widgets into the data grid and use the column attribute value to show custom content. After selecting this option you will be given drop-zones in which to drop your widgets.

{{% alert color="info" %}}
Placing widgets within custom content which use the row object will automatically set the [network optimization mode](/refguide/datasource-runtime/#network-optimization-modes) to **Optimize for Network Round Trips**.
{{% /alert %}}

Here is an example of custom content using new Badge widget in **Structure mode**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/column-custom-content.png" alt="Example of custom content using new Badge widget in Structure mode" class="no-border" >}}

For more information on configuring various widget properties, see [Properties Common in the Page Editor](/refguide/common-widget-properties/).

### Column Width

You can define how each cell will be rendered in the data grid. We offer three choices:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/column-width.png" alt="Settings for column width for each column item" class="no-border" >}}

* **Auto-fill** – With this option it will auto define the width of your column, if all columns are using auto-fill, it will divide evenly the same width, if another column is configured with auto-fit or manual, it will fill the available space.
* **Auto-fit content** – With this option it will calculate the width of your column based on the content of the header and each visible row.
* **Manual** – With this option you will manually define the size of your column based of flexbox grow values, for more information, please [check here](https://www.w3.org/TR/css-flexbox-1/).

### Alignment

You can choose how the content inside your columns will be aligned. We offer three choices: left, center, and right.

{{% alert color="warning" %}}
This setting has no effect on columns that use **Custom content** in the **Show** option of the **General** tab.
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

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/tooltip-prop.png" alt="Tooltip property" class="no-border" >}}

### Association Filter {#association-filter}

{{% alert color="warning" %}}
Association filtering configuration has been moved from column properties to the dedicated drop-down filter widget. Configure association filtering directly in the drop-down filter widget properties by setting **Filter by** to **Association**.
{{% /alert %}}

The drop-down filter widget supports association filtering when **Filter by** is set to **Association**:

* **Entity** – Defines the association that will be used for filtering.
* **Selectable objects** – Defines data source for filter options, returning list of all possible entities that could be associated.
* **Use lazy load** – Controls when filter options are loaded. When set to **No** (recommended), data is fetched immediately providing better personalization support. When set to **Yes**, data is fetched only when the filter is opened, improving initial load times but limiting personalization capabilities.
* **Caption source** and **Caption** – Set whether option captions come from an attribute or an expression, and which attribute or expression is displayed for each option in the drop-down.
* **Search attribute** – Sets the string attribute used for searching when **Caption source** is **Expression** and **Filterable** is **Yes**.

### Visible {#visible-filter}

When using a data grid, sometimes columns do not need to be shown. Using this **Visible** expression configuration, you can specify when you want to display columns

## Rows

This section defines options for the rows of the grid.

### Empty List Message

The **Empty List Message** option defines what users can see when the data grid does not have a value to be presented or when a filter is applied without results. When this option is defined as custom you can place widgets right above the rows in a drop-zone. Here is an example:

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

### On Selection Change Action

The **On selection change** property triggers an action (such as a nanoflow, microflow, or client action) when the end-user changes selection in the data grid. This includes selecting or deselecting individual rows, using the **"Select all" checkbox**, or clearing the selection. The action provides a way to respond to selection state changes and implement custom logic based on the current selection.

## Filters {#filters}

Data Grid 2 uses a modular filtering system with dedicated filter widgets that can be placed in two locations:

* **Column Headers**: Individual filters can be placed in column headers by enabling **Show column filters**. When this option is selected, a drop zone appears in each column header where you can place the appropriate filter widget.
* **Filters Placeholder**: Filter widgets can be placed in the [filters placeholder](/appstore/modules/data-grid-2-properties/#filters-placeholder) above the grid. This allows for filtering across multiple attributes and more complex filtering scenarios.

{{% alert color="warning" %}}
The type of your selected attribute should match the filter type. For example, a **Text filter** should be used for a string attribute.

Also the desired attribute must be filterable. For example, not a value which is calculated.
{{% /alert %}}

### Filter Widget Configuration

The text, number, and date filters have a **Filter attributes** property. The drop-down filter has an **Attribute config** property, which is available only when **Filter by** is set to **Attribute**. Both properties have two values:

* **Auto** – Uses the attribute of the column that the filter is placed in. This option works only when the filter is placed in a column.
* **Custom** – You select the attributes in **Attributes** (or the attribute in **Attribute** for the drop-down filter). The filter is linked to the data source of the data widget it is placed in. Use this option when the filter is placed outside a column.

When the drop-down filter's **Filter by** is set to **Association**, there is no **Auto** or **Custom** choice.

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
* Empty
* Not empty

Here is an example of **Date filter** as **Between**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/date-filter-between.png" alt="Date filter between" class="no-border" >}}

{{% alert color="warning" %}}
When **Date filter** is defined with **Between** it is not possible to type the date manually. It also has a clear button to clear the date range.
{{% /alert %}}

You can select the initial filter criterion in the **Default filter** property of the date filter:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/date-filter-settings.png" alt="Date filter settings" class="no-border" >}}

When **Adjustable by user** is defined as **No** it will not render the option to choose the filter type in the widget.

Here is an example of available filter types for **Date Filter**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/date-filter-types.png" alt="Filter types for Date Filter" class="no-border" >}}

Here is an example of **Date Filter** with **Adjustable by user** defined as **No**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/date-filter-not-adjustable.png" alt="Example of Date filter with “Adjustable by user” set as No" class="no-border" >}}

You can also define the default value of the widget which will be predefined as initial value when opening your data grid page.

When **Default filter** is defined as **Between**, the **Default start date** and **Default end date** fields replace **Default value** so you can define the start and end dates:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/date-filter-between-settings.png" alt="Example of Date filter with “Default filter” set as Between" class="no-border" >}}

#### Configurations

In this section you can select a **Saved attribute** in order to save the current value of the filter. When **Default filter** is set to **Between**, **Saved attribute** is replaced by **Saved start date attribute** and **Saved end date attribute**. However, the value is not automatically applied to the widget. To restore the previously saved value of the filter, you must use the same attribute in the **Default value** expression (or **Default start date** and **Default end date** for a range). The attribute available in this section must be this type:

* Date & Time

#### Events

In this section you can select an action to be executed **On change** of the filter value or filter type. This means it is executed every time the user types or selects a value, or changes the filter type.

### Drop-Down Filter {#drop-down-filter}

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/dropdown-filter.png" alt="Example of default drop-down filter" class="no-border" >}}

**Drop-down filter** allows users to match enumeration values, Boolean attributes, or an association. Use **Filter by** to choose between **Attribute** and **Association**. When filtering by attribute, **Attribute config** can be set to **Auto** (uses the attribute of the column that the filter is placed in) or **Custom** (you select the attribute).

To filter by association, set **Filter by** to **Association** and configure the following properties:

* **Entity**: selects the association (reference or reference set) to filter on
* **Selectable objects**: configures the data source that provides available filter options
* **Caption source**: sets whether option captions come from an **Attribute** or an **Expression**
* **Caption**: the string attribute or expression that is displayed for each option
* **Search attribute**: the string attribute used for searching when **Caption source** is **Expression** and **Filterable** is **Yes**
* **Use lazy load**: controls when options are loaded (immediately or when the filter is opened)

The filter also supports **Multiselect**, **Filterable** (search input), **Clearable**, **Show selected items as** (**Text** or **Labels**), and **Selection method** (**Checkbox** or **Row click**). **Show selected items as** is available only when **Filterable** and **Multiselect** are both set to **Yes**, and **Selection method** only when **Show selected items as** is set to **Labels**. **Clearable** is hidden when **Filterable** is set to **Yes**, because a filterable drop-down is always clearable.

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/dropdown-filter-settings.png" alt="Example of settings for drop-down filter" class="no-border" >}}

{{% alert color="info" %}}
When **Filter by** is set to **Attribute** and **Attribute config** is set to **Custom**, you select the attribute directly in the filter widget properties. **Auto** works only when the filter is placed in a data grid column.
{{% /alert %}}

{{% alert color="warning" %}}
When **Filter by** is set to **Association** and **Use lazy load** is set to **Yes**, both **Default value** and **Saved attribute** properties are ignored. This limitation also applies when using page state, meaning that the filter value used in the drop-down filter will not persist when navigating between pages.
{{% /alert %}}

To define the options yourself, set **Automatic options** to **No** and add items to **Options**. When adding a new option, the following properties are required:

* **Caption** – The text being rendered for each option in the drop-down.
* **Value** – The corresponding value that will be compared, if a value is being compared with an enumeration, it should match exactly the enumeration value. This property allows the usage of expression (you can use conditionals to apply dynamic values).

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/dropdown-filter-item.png" alt="Example of settings for new option" class="no-border" >}}

This widget also allows multiple selections by setting **Multiselect** to **Yes**. Multiple selections can look like this:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/dropdown-filter-multiselect.png" alt="Example of multi select drop-down filter" class="no-border" >}}

You can also define the **Empty option caption**, which is rendered as the first item when **Multiselect** and **Filterable** are set to **No**. It allows users to clear the filter.

#### Configurations

In this section you can select a **Saved attribute** in order to save the current value of the filter. However, the value is not automatically applied to the widget. To restore the previously saved value of the filter, you must use the same attribute in the **Default value** expression. The attribute available in this section must be this type:

* String

{{% alert color="warning" %}}
If **Multiselect** is enabled you must select a String attribute containing `Unlimited` in its size.
{{% /alert %}}

#### Events

In this section you can select an action to be executed **On change** by the filter value. This means every time the user types or selects a value it will be executed.

### Number Filter

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/number-filter.png" alt="Example of default number filter" class="no-border" >}}

The **Number filter** allows users to match autonumber, decimal, integer, and long attributes based on these predefined criteria:

* Greater than
* Greater than or equal
* Equal
* Not equal
* Smaller than
* Smaller than or equal
* Empty
* Not empty

You can select the initial filter criterion in the **Default filter** property of the number filter:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/number-filter-settings.png" alt="Number filter settings" class="no-border" >}}

When **Adjustable by user** is defined as **No** it will not render the option to choose the filter type in the widget.

Here is an example of available filter types for **Number Filter**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/number-filter-types.png" alt="Filter types for number filter" class="no-border" >}}

Here is an example of **Number Filter** with **Adjustable by user** set as **No**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/number-filter-not-adjustable.png" alt="Example of number filter with “Adjustable by user” set as No" class="no-border" >}}

You can also define the **Default value** of the widget, an expression that returns a Decimal value. It is used as the initial value when your data grid page opens.

To control when the filter is applied, use the **Apply after (ms)** option in the **On change behavior** group. This option applies the filter after a predefined period of time while typing. The default value is 500 ms.

#### Configurations

In this section you can select a **Saved attribute** in order to save the current value of the filter. However, the value is not automatically applied to the widget. To restore the previously saved value of the filter, you must use the same attribute in the **Default value** expression. The attribute available in this section must be one of the following types:

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
* Empty
* Not empty

You can select the initial filter criterion in the **Default filter** property of the text filter:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/text-filter-settings.png" alt="Text filter settings" class="no-border" >}}

When **Adjustable by user** is defined as **No** it will not render the option to choose the filter type in the widget.

Here is an example of available filter types for **Text Filter**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/text-filter-types.png" alt="Filter types for text filter" class="no-border" >}}

Here is an example of Text Filter with **Adjustable by user** set to **No**:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/text-filter-not-adjustable.png" alt="Example of text filter with “Adjustable by user” set as No" class="no-border" >}}

You can also define the **Default value** of the widget, an expression that returns a String value. It is used as the initial value when your data grid page opens.

To control when the filter is applied, use the **Apply after (ms)** option in the **On change behavior** group. This option applies the filter after a predefined period of time while typing. The default value is 500 ms.

#### Configurations

In this section you can select a **Saved attribute** in order to save the current value of the filter. However, the value is not automatically applied to the widget. To restore the previously saved value of the filter, you must use the same attribute in the **Default value** expression. The attribute available in this section must be one of the following types:

* Hashed string
* String

#### Events

In this section you can select an action to be executed **On change** by the filter value. This means every time the user types or selects a value it will be executed.

### Grid-Wide Filtering {#grid-wide-filtering}

{{% alert color="info" %}}
Starting with [Data Widgets](/appstore/modules/data-widgets/) 3.0.0, filtering is configured in the filter widgets. When you update the module, existing grid-wide filtering configurations are automatically converted to the new setup.
{{% /alert %}}

To filter across multiple attributes from the data grid header (outside the columns), place filter widgets in the [filters placeholder](/appstore/modules/data-grid-2-properties/#filters-placeholder). The data grid does not have its own filtering configuration. Instead, configure the filter widgets themselves. Filter widgets placed in the filters placeholder are linked to the data grid automatically. To choose which attributes a filter applies to, set **Filter attributes** (text, number, and date filters) or **Attribute config** (drop-down filter) to **Custom** and select the attributes. For more information, see the documentation for each filter widget:

* [Text Filter](/appstore/modules/datagrid-text-filter/)
* [Number Filter](/appstore/modules/datagrid-number-filter/)
* [Date Filter](/appstore/modules/datagrid-date-filter/)
* [Drop-Down Filter](/appstore/modules/datagrid-dropdown-filter/)

## Export to Excel

The Data Grid 2 widget ships with built-in functionality to export data from the data source you configured in the settings. The export is done via the **Export_To_Excel** JavaScript action that is distributed as part of the [Data Widgets](/appstore/modules/data-widgets/) module.

To export data from the data grid, create a new nanoflow that calls **Export_To_Excel**. The **Export_To_Excel** action has a set of inputs:

* **Datagrid name**: the name of the data grid from which data should be exported (the name can be found and copied from the data grid's settings (**Properties** > **Common** > **Name**))
* **File name**: the file name to use for the exported document (does not require an appended file extension)
* **Sheet name**: the name to use for the Excel sheet of the exported document.
* **Include column names**: a Boolean expression that, if true, tells the action to include column captions as the first row in the exported document
* **Chunk size**: the number of rows fetched from the backend to the browser at a time.

{{% alert color="info" %}}
The recommended value for **Chunk size** is 200. However, because each data grid has a unique set of columns and varying amounts of data per row, a different chunk size might result in better performance.
{{% /alert %}}

## Configuration

You can store the current configuration of the data grid. In this way, if you re-open your page then the current sorted columns, column order, column widths, and hidden columns will remain the same as in the previous state. When **Store filters** is set to **Yes**, filter values are stored as well. Use **Store configuration in** on the data grid **Personalization** tab in Studio Pro to choose where the configuration is stored: **Attribute** or **Browser local storage**. Browser local storage is scoped to the browser profile, not to the Mendix user, and hides the **Attribute** and **On change** properties. When you choose **Attribute**, you need to select a `String` attribute with `Unlimited` as its size in **Attribute**.

{{% alert color="warning" %}}
If the desired `String` attribute does not contain `Unlimited` in its size, the Data grid will not be able to save all the configurations as expected.
{{% /alert %}}

Here is an example of an unlimited string attribute:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/unlimited-string-attribute.png" alt="Example of unlimited string attribute" class="no-border" >}}

When **Store configuration in** is set to **Attribute**, you need to surround the data grid with a data view in order to select an attribute. You can also define an action when the attribute will be updated with the new configurations.

Here is an example of a configuration containing an On change action:

{{< figure src="/attachments/appstore/platform-supported-content/modules/data-widgets/data-grid-2/configuration.png" alt="Example of a configuration containing on change action" class="no-border" >}}

## In-Memory Selection {#selection}

{{% alert color="info" %}}
In-memory selection was introduced in Data Widgets v2.7.0.
{{% /alert %}}

Enabling selection allows users to select a row by clicking the row or a checkbox. Selection is disabled by default, and can be activated by changing the **Selection** setting (on the **Behavior** tab, in the **Selection** group) from **None** to either **Single** or **Multi**.

By default, the data grid widget keeps selected items in short-living memory that is cleared when the data source changes, for example when you change the data grid page. To keep the selection across pages, set **Keep selection** to **Yes**. To let the end-user select all rows across all pages, set **"Select all" across pages** to **Yes**.

### Selection Mode

In **Single** selection mode, users are limited to selecting one row at a time.

In **Multi** mode, the user can select multiple rows.

### Selection Method

When selection is enabled, you can choose a method for selecting rows. The **Checkbox** method adds a checkbox to the beginning of each row, and the end-user must click the checkbox to select the row. By contrast, the **Row click** method does not add any additional controls to the row, and the end-user must click the row itself to select that row.

### "Select All" Checkbox

If the **"Select all" checkbox** setting is enabled, then the data grid widget shows a checkbox at the header. This setting is available only when **Selection** is set to **Multi** and **Selection method** is set to **Checkbox**. This checkbox controls the selection for all rows on the current page. Clicking on this checkbox will select all rows on the current page. If all items are already selected, clicking the checkbox clears the selection.

### Keep Selection

If this setting is enabled, then selected items persist across page navigation, data refreshes, filtering, and sorting operations. 

By default, **Keep selection** is disabled and the selection is cleared when the data source changes. When enabled, selected items remain selected until manually cleared by the user.

### Selection and Row Click Action

{{% alert color="info" %}}
The **On click trigger** setting was introduced in Data Widgets v2.13.0. Previous versions did not allow both selection and click actions at the same time.
{{% /alert %}}

The data grid settings support the case where it is possible to have both a selection and an on-click action at the same time.

The setting for action triggers is related to the selection method and can sometimes be ambiguous. See the table below to see which combinations of selection method and trigger are supported.

| Selection method | Action trigger          | Selection trigger                                                                                           | Supported |
| ---------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------- | --------- |
| Checkbox         | Single click on the row | Click on the checkbox, <kbd>Ctrl</kbd> + click on the row (or <kbd>Command</kbd> + click on the row on Mac) | Yes       |
| Checkbox         | Double-click on the row | Click on the checkbox, <kbd>Ctrl</kbd> + click on the row (or <kbd>Command</kbd> + click on the row on Mac) | Yes       |
| Row click        | Single click on the row |                                                                                                             | No        |
| Row click        | Double-click on the row | Click on the row; <kbd>Ctrl</kbd> + click (or <kbd>Command</kbd> + click on Mac) toggles the row            | Yes       |

To use the **Row click** selection method together with an on-click action, set the **On click trigger** to **Double click**. When a data grid is configured this way, the end-user selects a row with a single click and triggers the action by double-clicking the row.

### Selection and Actions in the Filters Placeholder

When the button is placed in the [filters placeholder](/appstore/modules/data-grid-2-properties/#filters-placeholder), the assigned action can receive the currently selected rows as a parameter.

#### How Selection is Passed to Actions

When a button placed in the filters placeholder triggers a **microflow** or **nanoflow**, the selected rows are passed as input:

* If **Selection** is set to **Single**:
    * The action receives a **single object**.
* If **Selection** is set to **Multi**:
    * The action receives a **list of objects**.

This allows developers to build logic that operates on one or several items.

#### Example Use Cases

* **Mark as Done**: A button triggers a microflow that updates the status of selected tasks.
* **Delete Selected**: A button deletes all selected records.
* **Export Selected**: A button triggers a microflow or nanoflow that exports the selected list to a file.

#### Configuration

To configure selection, do the following:

1. Enable **Selection** in the data grid 2 widget.
1. Insert an **Action Button** into the **Filters placeholder**.
1. Configure the button to trigger a microflow or nanoflow.
1. Set the input parameter of the flow to match the selection type (single object or list).

## Keyboard Support {#keyboard-support}

| Key                                                                  | Function                                                                                            |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <kbd>→</kbd>                                                         | Moves focus one cell to the right.                                                                  |
| <kbd>←</kbd>                                                         | Moves focus one cell to the left.                                                                   |
| <kbd>↓</kbd>                                                         | Moves focus one cell down.                                                                          |
| <kbd>↑</kbd>                                                         | Moves focus one cell up.                                                                            |
| <kbd>Page&nbsp;up</kbd>                                              | Moves focus one page up.                                                                            |
| <kbd>Page&nbsp;down</kbd>                                            | Moves focus once page down.                                                                         |
| <kbd>Home</kbd>                                                      | Moves focus to the first cell in the row.                                                           |
| <kbd>End</kbd>                                                       | Moves focus to the last cell in the row.                                                            |
| <kbd>Ctrl</kbd> + <kbd>Home</kbd>                                    | Moves focus to the first cell in grid.                                                              |
| <kbd>Ctrl</kbd> + <kbd>End</kbd>                                     | Moves focus to the last cell in grid.                                                               |
| <kbd>Shift</kbd> + <kbd>Space</kbd>                                  | Selects current row. (1)                                                                            |
| <kbd>Ctrl</kbd> + <kbd>A</kbd>                                       | Select all visible rows. (1)(2)                                                                     |
| <kbd>Shift</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd>                         | Moves focus and selects current and row above/below. (1)(2)                                         |
| <kbd>Shift</kbd> + <kbd>Page&nbsp;up</kbd>/<kbd>Page&nbsp;down</kbd> | Moves focus one page up/down and selects all rows between current and final row. (1)(2)             |
| <kbd>Shift</kbd> + <kbd>Home</kbd>/<kbd>End</kbd>                    | Moves focus to the start/end of the grid and selects all rows between current and final row. (1)(2) |

Legend:

| Symbol | Meaning                                                 |
| ------ | ------------------------------------------------------- |
| 1      | Available only when selection is enabled.               |
| 2      | Available only when selection mode should be **Multi**. |


## Resetting Filters {#resetting-filters}

The [Data Widgets](/appstore/modules/data-widgets/) module includes two JavaScript actions that reset filters from a nanoflow:

* **Reset Filter** (`Reset_Filter`) – This resets a single filter widget.
* **Reset All Filters** (`Reset_All_Filters`) – This resets all filter widgets of a Data Grid 2 or Gallery widget.

Both actions are available for web apps only. In the nanoflow toolbox, you can find them in the **Data widgets** category.

### Parameters

Both actions have the following parameters:

* **targetName** – The name of the widget to reset, as a String. For **Reset Filter**, this is the name of a text, number, date, or drop-down filter. For **Reset All Filters**, this is the name of a Data Grid 2 or Gallery widget. You can find the name of a widget in its properties, at **Common** > **Name**.
* **setToDefault** – A Boolean that sets how the filters are reset:
    * **true** – The filter returns to its default state. For text, number, and date filters, this is the filter type set in **Default filter** and the value set in **Default value** (or **Default start date** and **Default end date** when the default filter is **Between**). For the drop-down filter, this is the selection set in **Default value**.
    * **false** – The filter is emptied. Text, number, and date filters keep the filter type that is currently selected, and their value is cleared. The drop-down filter clears its selection.

**Reset All Filters** resets both the filters in the column headers and the filters in the [filters placeholder](/appstore/modules/data-grid-2-properties/#filters-placeholder) of the data grid.

{{% alert color="info" %}}
The action above find the widget by its name. If no widget with the specified name is on the current page, the action does nothing and does not show an error. To address this issue, confirm that **targetName** matches the name of the widget exactly.
{{% /alert %}}

### Adding a Reset Button

To add a button that resets all filters of a data grid, do the following:

1. Create a nanoflow.
1. Drag the **Reset All Filters** action from the **Data widgets** category of the toolbox into the nanoflow.
1. Set **targetName** to the name of the data grid, as a String expression, for example `'productsGrid'`.
1. Set **setToDefault** to `true` to return the filters to their default values, or to `false` to clear them.
1. Place a button on the page, for example in the filters placeholder of the data grid, and set its **On click** action to call the nanoflow.

To reset a single filter, follow the same steps with the **Reset Filter** action, and set **targetName** to the name of the filter widget.

## Troubleshooting Runtime Errors {#troubleshooting-runtime-errors}

### Filter Widget Errors {#filter-widget-errors}

**Error**:

> "The filter widget must be placed inside the column or header of the Data grid 2.0 or inside header of the Gallery widget."

* Widget placement is incorrect.

**Solution**:
Place the widget in the filters placeholder of Gallery or Data Grid 2, or in a Data Grid 2 column.

**Error**:

> "Unable to get filter store. Check parent widget configuration."

* This error indicates that there is issue with widget settings. Most of the time this error happens when widget is placed in the header of Data Grid 2 or Gallery, but the **Filter attributes** setting (or **Attribute config** for the drop-down filter) is still set to **Auto**.

**Solution**:
Switch **Filter attributes** (or **Attribute config** for the drop-down filter) to **Custom** and configure the attribute for filtering.

**Error**:

> "The [filter] is not compatible with [datatype] data type."

* This error indicates that attribute configured in the Data Grid 2 for column is not compatible with current filter type.

**Solution**: Change filter to appropriate filter type. For example for string attributes use text filter.

> "The attribute is not filterable. Please choose a different attribute."

* This error indicates that it is not possible to use current attribute for filtering due to technical limitations.

**Solution**: Read and understand why some attributes are filterable and other are not. Change the model or choose another attribute.
