---
title: "List View"
url: /refguide8/list-view/
weight: 40
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/list-view.pdf).
{{% /alert %}}

## 1 Introduction

A list view shows a list of objects. For example, you can display a list of all profiles:

{{< figure src="/attachments/refguide8/modeling/pages/data-widgets/list-view/list-view-example-profile.png" >}} 

Each object is shown using a template. This template is defined by placing widgets inside the list view's drop-zone. The list of objects shown is determined by a [data source](#data-source).

## 2 Properties

An example of list view properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/data-widgets/list-view/list-view-properties.png"   width="250"  >}}

List view properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [General](#general)
* [Templates](#templates)
* [Visibility](#visibility)

### 2.1 Common Section {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### 2.2. Data Source Section {#data-source}

The data source determines which objects will be shown in a list view. For general information on data sources, see [Data Sources](/refguide8/data-sources/).

#### 2.2.1 Type

The list view supports the following types of data sources: 

* [Database source](/refguide8/database-source/) – objects are retrieved directly form the database. The database source can be used in [offline](/refguide8/offline-first/) applications. 
* [XPath source](/refguide8/xpath-source/) – objects are retrieved directly form the database
* [Microflow source](/refguide8/microflow-source/) – calculates the list of objects by executing a microflow
* [Nanoflow source](/refguide8/nanoflow-source/) – calculates the list of objects by executing a nanoflow
* [Association source](/refguide8/association-source/) – follows an association to get to objects

The database and XPath sources retrieve objects from the database and supports searching and sorting. 

{{% alert color="warning" %}}Searching is not supported on native mobile pages.{{% /alert %}}

### 2.3 Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### 2.4 General Section {#general}

#### 2.4.1 Editable

If this property is set to *Yes*, items in the list view can be edited. The changes made to list view items can be saved with a **Save** button and reverted with a **Cancel** button. **On click** and **Page size** properties are not displayed to avoid confusion about what changes are saved or reverted.

#### 2.4.2 On Click 

An on-click event defines what action is performed when a user clicks a list view row. For more information on on-click events, see [On Click Event](/refguide8/on-click-event/). 

#### 2.4.3 Page Size

the number of rows displayed on the page; after the indicated limit is reached, the **Load more...** button is displayed on the page.

{{% alert color="info" %}}The **Load more** button is not visible on native mobile pages. The list view will automatically load new items, when the last of the currently loaded items is shown.{{% /alert %}}

#### 2.4.4 Scroll Direction

{{% alert color="info" %}}The scroll direction property is only supported on native mobile pages.{{% /alert %}}

This property determines whether the list view lays out its items vertically (default) or horizontally.

#### 2.4.5 Number of Columns

{{% alert color="info" %}}The number of columns property is only supported on native mobile pages.{{% /alert %}}

With this property you can change the number of items that will be shown next to each other in one row.
If you set the scroll direction property to horizontal, this property determines the number of items per column.

#### 2.4.6 Pull Down Action

{{% alert color="info" %}}The number of columns property is only supported on native mobile pages.{{% /alert %}}

The pull down action defines what action is performed when you drag downwards on a list view.
Its common behavior is to update the contents of the list view by synchronizing data.

### 2.5 Templates Section {#templates}

{{% alert color="warning" %}}Templates are not supported on native mobile pages.{{% /alert %}}

If the entity that is connected to the list view has specializations, you can optionally specify templates for each specialization. For each row in the list view the most specific template is shown. The different templates can be selected by clicking the extra header that appears when a specialization template is added.

{{% alert color="info" %}}

Let us say you have an entity Vehicle and two specializations thereof: Bicycle and Car. And there is a specialization of Car called SportsCar. You create a list view that is connected to Vehicle. With the templates property of the list view you specify what template to show for arbitrary Vehicles. For the specializations Bicycle and Car you create separate templates to show them.

Now if there is a row of type Bicycle the template specific for bicycles will be shown. A row of type Car will be shown in the template for Car. A row of type SportsCar is shown in the template for Car. There is no template specific for sports cars (in this example) and Car is the 'closest' generalization for which there is a template.

{{% /alert %}}

### 2.6 Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## 3 Performing Specific Actions

To perform actions on a list view, select it on a page and right-click it. The list of possible actions opens. While some actions from this list, such as **Select data source**, **Edit condition for visible**, are a quick way to set the properties, the following actions are specific actions that you can perform:

* **Go to entity** – opens a domain model and highlights an an entity that is used as the data source
* **Go to data source** **microflow **– this action is only displayed when a microflow is set as the data source and opens this microflow 
* **Go to data source nanoflow** – this action is only displayed when a nanoflow is set as the data source and opens this nanoflow

## 4 Read More

* [Page](/refguide8/page/)
* [Data Widgets](/refguide8/data-widgets/)
* [Data Sources](/refguide8/data-sources/)
* [Properties Common in the Page Editor](/refguide8/common-widget-properties/)
