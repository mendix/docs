---
title: "Template Grid"
url: /refguide9/template-grid/
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The template grid widget is not supported on native mobile pages.{{% /alert %}}

## Introduction

A template grid shows a list of objects in a tile view. For example, a template grid can show a list of employees with their profile pictures. Using controls provided by the template grid you can browse, search, and manipulate those objects:

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/grids/template-grid/template-grid.png" class="no-border" >}}

The template grid has a lot in common with a [data grid](/refguide9/data-grid/). The main difference is that the objects are shown in templates instead of rows.

## Components

### Control Bar

For more information, see [Control Bar](/refguide9/control-bar/).

### Search Bar

**Search Bar** is only available for **Database** and **XPath** [data sources](#data-source). For more information on a search bar and its settings, see [Search Bar](/refguide9/search-bar/).

### Sort Bar

**Sort Bar** is only available for **Database** and **XPath** [data sources](#data-source). For more information on a sort bar and its settings, see [Sort Bar](/refguide9/sort-bar/).

## Properties

An example of template grid properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/grids/template-grid/template-grid-properties.png"   width="250"  class="no-border" >}}

Template grid properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [General](#general)
* [Visibility](#visibility)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

### Data Source Properties {#data-source}

The data source determines which objects will be shown in the template grid. For general information about data sources, see [Data Sources](/refguide9/data-sources/).

#### Type

The template grid supports the following types of data sources: 

* [Database source](/refguide9/database-source/) – objects are retrieved directly form the database
* [XPath source](/refguide9/xpath-source/) – objects are retrieved directly form the database
* [Microflow source](/refguide9/microflow-source/) – calculates the list of objects by executing a microflow
* [Association source](/refguide9/association-source/) – follows an association to get to objects

The database and XPath sources retrieve objects from the database and supports searching and sorting. 

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide9/design-section-link.md" %}} 

### General Section {#general}

#### Show Control Bar {#show-control-bar}

This property indicates whether the control bar will be visible in the end-user interface. The control bar also includes the paging buttons.

{{% alert color="warning" %}}
Even if the control bar is invisible there can still be a default button that is triggered by (double) clicking a row. See the property 'Default button trigger' and [grid buttons](/refguide9/control-bar/) for more information.
{{% /alert %}}

Default: *True*

#### Show Paging Bar {#show-paging-bar}

With this property, you can change the way the paging bar is shown.

| Value | Description |
| --- | --- |
| Yes (with total count) | The paging bar is shown, including the **Go to last page** button and the total count of objects. |
| Yes (without total count) | The paging bar is shown (except for the **Go to last page** button). Also, the total count of objects is not shown, as page numbers are shown instead. |
| No | The paging buttons are not shown. |

Default: *Yes (with total count)*

{{% alert color="warning" %}}
Hiding the control bar also hides the paging buttons. For details, see [Show Control Bar](#show-control-bar).
{{% /alert %}}

#### Number of Rows {#number-of-rows}

With this property you can change the number of rows of templates that will be shown on one page.

Default: *3*

#### Number of Columns {#number-of-columns}

With this property you can change the number of templates that will be shown next to each other in one row.

Default: *2*

#### Style Template {#style-template}

The style template property allows you to choose from three different styling of the template grid. These stylings depend on your theme package.

#### Selection Mode {#selection-mode}

The selection mode determines whether and how the user can select items in the grid.

| Value | Description |
| --- | --- |
| No selection | The user cannot select items. |
| Single selection  *(default)* | The user can select a single item by clicking on it. Clicking another item will make that item the selection. |
| Single selection and maintain | The user can select one item at a time by clicking on it. Users cannot deselect an item. By default the first item will be selected and removing a selected item will autoselect a subsequent item. |
| Multi-selection | The user can select multiple items by clicking the first one and holding the 'Ctrl' key while clicking on other items. Simply clicking an item will deselect all items and make the clicked item the selection. |
| Simple multi-selection | The user can select multiple items by simply clicking on them. |

#### Select First {#select-first}

This property indicates whether the first item will be selected initially. This is especially useful if there is a data view listening to this grid.

Default: *False*

#### Default Button Trigger {#default-button-trigger}

The default button can be triggered by single- or double-clicking a row.

| Value | Description |
| --- | --- |
| Single click | A single click triggers the default button. This cannot be used in combination with allowing the user to select rows. |
| Double click *(default)* | A double-click triggers the default button. |

#### Refresh Time (in Seconds) {#refresh-time}

If the refresh time is non-zero, the template grid will refresh its contents every given number of seconds. For example, a task list could be refreshed every minute so that you know when new tasks arrive. By default the refresh time is zero and this means that the grid will not automatically refresh itself.

Default: *0*

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide9/visibility-section-link.md" %}}

## Performing Specific Actions

To perform actions on a template grid, select it on a page and right-click it. The list of possible actions opens. While some actions from this list, such as **Select data source**, **Edit condition for visible**, are a quick way to set the properties, the following actions are specific actions that you can perform:

* **Go to entity** – opens a domain model and highlights an entity that is used as the data source 
* **Go to data source microflow** – this action is only displayed when a microflow is set as the data source and opens this microflow 

## Read More

* [Page](/refguide9/page/)
* [Data Containers](/refguide9/data-widgets/)
* [Data Sources](/refguide9/data-sources/)
* [Properties Common in the Page Editor](/refguide9/common-widget-properties/)
