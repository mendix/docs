---
title: "Data Grid"
parent: "grids"
menu_order: 10
tags: ["studio pro", "data grid", "grid", "data widget"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}The data grid widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

shows a list of objects in a table format. For example, a data grid can show customer's name, grade, and all the orders a customer has placed:

![](attachments/data-widgets/data-grid.png)
Using controls provided by the data grid you can browse, search, and edit those objects.

## 2 Components

A data grid contains the following components: 

1. [Search bar](search-bar) – allows end-users to search for objects in the data grid
2. [Control bar](control-bar) – allows you to control the objects displayed in the data grid by means of buttons
3. [Sort bar](sort-bar) – allows end-users to sort items in the data grid 
4.  [Grid Columns](columns) – allows end-users to set properties for a data grid column
	![](attachments/data-widgets/data-grid-components.png)

## 3 Properties

An example of data grid properties is represented in the image below:

{{% image_container width="250" %}}![](attachments/data-widgets/data-grid-properties.png)
{{% /image_container %}}

Data grid properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* Design Properties
* [General](#general)
* [Visibility](#visibility)

### 3.1 Common Section {#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 3.2 Data Source Section {#data-source}

The data source determines which objects will be shown in a list view. For general information on data sources, see [Data Sources](data-sources).

#### 3.2.1 Type

The list view supports the following types of data sources: 

* [Database source](database-source) – objects are retrieved directly form the database. The database source can be used in [offline](offline-first) applications. 
* [XPath source](xpath-source) – objects are retrieved directly form the database
* [Microflow source](microflow-source) – calculates the list of objects by executing a microflow
* [Association source](association-source) – follows an association to get to objects

The database and XPath sources retrieve objects from the database and supports searching and sorting. 

### 3.3 General Section {#general}

#### 3.3.1 Show Control Bar Buttons

This property indicates whether the control bar buttons will be visible in the end-user interface.

{{% alert type="warning" %}}

Even if the control bar buttons are invisible, there can still be a default button that is triggered by (double) clicking a row. For more information, see the property [Default Button Trigger](#dbt) and [Control Bar](control-bar).

{{% /alert %}}

Default: *True*

#### 3.3.2 Show Paging Buttons

This property indicates with the buttons to page through the information in the grid are visible. Only hide these buttons if you are sure that there will never be more objects than the number of rows of the grid.

Default: *True*

#### 3.3.3 Number of Rows

With this property you can change the number of rows that will be shown in one page. See also the property 'Show empty rows'.

Default: *20*

#### 3.3.4 Show Empty Rows

If you choose to show empty rows there will always be the grid will always show the same number of rows (see 'Number of rows') even if there are less objects to show on the page.

Default: *False*

#### 3.3.5 Selection Mode

The selection mode determines whether and how the user can select items in the grid.

| Value | Description |
| --- | --- |
| No selection | The user cannot select items. |
| Single selection  *(default)* | The user can select a single item by clicking on it. Clicking another item will make that item the selection. |
| Single selection and maintain | The user can select one item at a time by clicking on it. Users cannot deselect an item. By default the first item will be selected and removing a selected item will autoselect a subsequent item. |
| Multi-selection | The user can select multiple items by clicking the first one and holding the 'Ctrl' key while clicking on other items. Simply clicking an item will deselect all items and make the clicked item the selection. |
| Simple multi-selection | The user can select multiple items by simply clicking on them. |

#### 3.3.6 Select First

This property indicates whether the first item will be selected initially. This is especially useful if there is a data view listening to this grid.

Default: *False*

#### 3.3.7 <a name="dbt"></a>Default Button Trigger

The default button can be triggered by a single or a double click a row.

| Value | Description |
| --- | --- |
| Single click | A single click triggers the default button. This cannot be used in combination with allowing the user to select rows. |
| Double click  *(default)* | A double click triggers the default button. |

#### 3.3.8 Refresh Time (in Seconds)

If the refresh time is non-zero, the data grid will refresh its contents every given number of seconds. For example, a task list could be refreshed every minute so that you know when new tasks arrive. By default the refresh time is zero and this means that the grid will not automatically refresh itself.

Default: *0*

#### 3.3.9 Tooltip Page {#tooltip-page}

A tooltip page is a page that appears when you hover your mouse over a row. The tooltip page should consist of a data view on the same entity as the data grid. Besides creating and connecting a tooltip page you also have to specify on which columns the tooltip will appear. See the property 'Show tooltip' of [data grid columns](columns).

### 3.4 Visibility Section {#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 4 Performing Specific Actions

To perform actions on a data grid, select it on a page and right-click it. The list of possible actions opens. While some actions from this list, such as **Select data source**, **Edit condition for visible**, are a quick way to set the properties, the following actions are specific actions that you can perform:

* **Go to entity** – opens a domain model and highlights an an entity that is used as the data source 
* **Go to data source microflow** – this action is only displayed when a microflow is set as the data source and opens this microflow 
* **Go to tooltip page** – opens a page select as the [tooltip page](#tooltip-page) in properties

## 5 Read More

* [Page](page)
* [Data Widgets](data-widgets)
* [Data Sources](data-sources)
* [Properties Common in the Page Editor](common-widget-properties)
* [Grid Columns](columns) 