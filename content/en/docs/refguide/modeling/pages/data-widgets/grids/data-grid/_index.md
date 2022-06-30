---
title: "Data Grid"
url: /refguide/data-grid/
weight: 10
tags: ["studio pro", "data grid", "grid", "data widget"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The data grid widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

A data grid shows a list of objects in a table format. For example, a data grid can show customer's name, grade, and all the orders a customer has placed:

{{< figure src="/attachments/refguide/modeling/pages/data-widgets/grids/data-grid/data-grid.png" >}}
Using controls provided by the data grid you can browse, search, and edit those objects.

## 2 Components

A data grid contains the following components: 

1. [Search bar](/refguide/search-bar/) – allows end-users to search for objects in the data grid
2. [Control bar](/refguide/control-bar/) – allows you to control the objects displayed in the data grid by means of buttons
3. [Sort bar](/refguide/sort-bar/) – allows end-users to sort items in the data grid 
4.  [Grid Columns](/refguide/columns/) – allows end-users to set properties for a data grid column
	{{< figure src="/attachments/refguide/modeling/pages/data-widgets/grids/data-grid/data-grid-components.png" >}}

## 3 Properties

An example of data grid properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/data-widgets/grids/data-grid/data-grid-properties.png"   width="250"  >}}

Data grid properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [General](#general)
* [Visibility](#visibility)

### 3.1 Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### 3.2 Data Source Section {#data-source}

The data source determines which objects will be shown in a list view. For general information on data sources, see [Data Sources](/refguide/data-sources/).

#### 3.2.1 Type

The list view supports the following types of data sources: 

* [Database source](/refguide/database-source/) – objects are retrieved directly form the database. The database source can be used in [offline](/refguide/offline-first/) applications. 
* [XPath source](/refguide/xpath-source/) – objects are retrieved directly form the database
* [Microflow source](/refguide/microflow-source/) – calculates the list of objects by executing a microflow
* [Association source](/refguide/association-source/) – follows an association to get to objects

The database and XPath sources retrieve objects from the database and supports searching and sorting. 

### 3.3 Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### 3.4 General Section {#general}

#### 3.4.1 Show Control Bar Buttons {#show-control-bar}

This property indicates whether the control bar buttons will be visible in the end-user interface.

{{% alert color="warning" %}}
Even if the control bar buttons are invisible, there can still be a default button that is triggered by (double) clicking a row. For more information, see the property [Default Button Trigger](#default-button-trigger) and [Control Bar](/refguide/control-bar/).
{{% /alert %}}

Default: *True*

#### 3.4.2 Show Paging Bar {#show-paging-bar}

With this property, you can change the way the paging bar is shown.

| Value | Description |
| --- | --- |
| Yes (with total count) | The paging bar is shown, including the **Go to last page** button and the total count of objects. |
| Yes (without total count) | The paging bar is shown (except for the **Go to last page** button). Also, the total count of objects is not shown, as page numbers are shown instead. |
| No | The paging buttons are not shown. |

Default: *Yes (with total count)*

{{% alert color="warning" %}}
Hiding the control bar also hides the paging buttons. For details, see [Show Control Bar Buttons](#show-control-bar).
{{% /alert %}}

#### 3.4.3 Number of Rows {#number-of-rows}

With this property you can change the number of rows that will be shown in one page. See also the property 'Show empty rows'.

Default: *20*

#### 3.4.4 Show Empty Rows {#show-empty-rows}

If you choose to show empty rows there will always be the grid will always show the same number of rows (see 'Number of rows') even if there are less objects to show on the page.

Default: *False*

#### 3.4.5 Selection Mode {#selection-mode}

The selection mode determines whether and how the user can select items in the grid.

| Value | Description |
| --- | --- |
| No selection | The user cannot select items. |
| Single selection  *(default)* | The user can select a single item by clicking on it. Clicking another item will make that item the selection. |
| Single selection and maintain | The user can select one item at a time by clicking on it. Users cannot deselect an item. By default the first item will be selected and removing a selected item will autoselect a subsequent item. |
| Multi-selection | The user can select multiple items by clicking the first one and holding the 'Ctrl' key while clicking on other items. Simply clicking an item will deselect all items and make the clicked item the selection. |
| Simple multi-selection | The user can select multiple items by simply clicking on them. |

#### 3.4.6 Select First {#select-first}

This property indicates whether the first item will be selected initially. This is especially useful if there is a data view listening to this grid.

Default: *False*

#### 3.4.7 Default Button Trigger {#default-button-trigger}

The default button can be triggered by a single or a double click a row.

| Value | Description |
| --- | --- |
| Single click | A single click triggers the default button. This cannot be used in combination with allowing the user to select rows. |
| Double click  *(default)* | A double click triggers the default button. |

#### 3.4.8 Refresh Time (in Seconds) {#refresh-time}

If the refresh time is non-zero, the data grid will refresh its contents every given number of seconds. For example, a task list could be refreshed every minute so that you know when new tasks arrive. By default the refresh time is zero and this means that the grid will not automatically refresh itself.

Default: *0*

#### 3.4.9 Tooltip Page {#tooltip-page}

A tooltip page is a page that appears when you hover your mouse over a row. The tooltip page should consist of a data view on the same entity as the data grid. Besides creating and connecting a tooltip page you also have to specify on which columns the tooltip will appear. See the property 'Show tooltip' of [data grid columns](/refguide/columns/).

### 3.5 Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

## 4 Performing Specific Actions

To perform actions on a data grid, select it on a page and right-click it. The list of possible actions opens. While some actions from this list, such as **Select data source**, **Edit condition for visible**, are a quick way to set the properties, the following actions are specific actions that you can perform:

* **Go to entity** – opens a domain model and highlights an an entity that is used as the data source 
* **Go to data source microflow** – this action is only displayed when a microflow is set as the data source and opens this microflow 
* **Go to tooltip page** – opens a page select as the [tooltip page](#tooltip-page) in properties

## 5 Read More

* [Page](/refguide/page/)
* [Data Containers](/refguide/data-widgets/)
* [Data Sources](/refguide/data-sources/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
* [Grid Columns](/refguide/columns/) 
