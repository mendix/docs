---
title: "List View"
url: /refguide9/list-view/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A list view shows a list of objects. For example, you can display a list of all profiles:

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/list-view/list-view-example-profile.png" class="no-border" >}} 

Each object is shown using a template. This template is defined by placing widgets inside the list view's drop-zone. The list of objects shown is determined by a [data source](#data-source).

{{% alert color="warning" %}}
The list view provides its own scrolling behavior in native apps. Consequently, you cannot place a list view inside a scroll view in native apps. Furthermore, you cannot place input widgets below a list view in native apps.

To address this issue, you can use the repeater widget from [Native Mobile Resources](/appstore/modules/native-mobile-resources/) instead.
{{% /alert %}}

## Properties

An example of list view properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/pages/data-widgets/list-view/list-view-properties.png"   width="250"  class="no-border" >}}

List view properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [General](#general)
* [Templates](#templates)
* [Visibility](#visibility)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

### Data Source Section {#data-source}

The data source determines which objects will be shown in a list view. For general information on data sources, see [Data Sources](/refguide9/data-sources/).

#### Type

The list view supports the following types of data sources: 

* [Database source](/refguide9/database-source/) – objects are retrieved directly form the database. The database source can be used in [offline](/refguide9/offline-first/) applications. 
* [XPath source](/refguide9/xpath-source/) – objects are retrieved directly form the database
* [Microflow source](/refguide9/microflow-source/) – calculates the list of objects by executing a microflow
* [Nanoflow source](/refguide9/nanoflow-source/) – calculates the list of objects by executing a nanoflow
* [Association source](/refguide9/association-source/) – follows an association to get to objects

The database and XPath sources retrieve objects from the database and supports searching and sorting. 

{{% alert color="warning" %}}Searching is not supported on native mobile pages.{{% /alert %}}

### Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide9/design-section-link.md" %}} 

### General Section {#general}

#### Editable

If this property is set to *Yes*, items in the list view can be edited. The changes made to list view items can be saved with a **Save** button and reverted with a **Cancel** button. **On click** and **Page size** properties are not displayed to avoid confusion about what changes are saved or reverted.

#### On Click 

An on-click event defines what action is performed when a user clicks a list view row. For more information on on-click events, see [On Click Event](/refguide9/on-click-event/). 

#### Page Size {#page-size}

the number of rows displayed on the page; after the indicated limit is reached, the **Load more...** button is displayed on the page.

{{% alert color="info" %}}The **Load more** button is not visible on native mobile pages. The list view will automatically load new items, when the last of the currently loaded items is shown.{{% /alert %}}

#### Scroll Direction

{{% alert color="info" %}}The scroll direction property is only supported on native mobile pages.{{% /alert %}}

This property determines whether the list view lays out its items vertically (default) or horizontally.

#### Number of Columns

{{% alert color="info" %}}The number of columns property is only supported on native mobile pages.{{% /alert %}}

With this property you can change the number of items that will be shown next to each other in one row.
If you set the scroll direction property to horizontal, this property determines the number of items per column.

#### Pull Down Action

{{% alert color="info" %}}The number of columns property is only supported on native mobile pages.{{% /alert %}}

The pull down action defines what action is performed when you drag downwards on a list view.
Its common behavior is to update the contents of the list view by synchronizing data.

### Templates Section {#templates}

{{% alert color="warning" %}}Templates are not supported on native mobile pages.{{% /alert %}}

If the entity that is connected to the list view has specializations, you can optionally specify templates for each specialization. For each row in the list view the most specific template is shown. The different templates can be selected by clicking the extra header that appears when a specialization template is added.

{{% alert color="info" %}}
Let us say you have an entity Vehicle and two specializations thereof: Bicycle and Car. And there is a specialization of Car called SportsCar. You create a list view that is connected to Vehicle. With the templates property of the list view you specify what template to show for arbitrary Vehicles. For the specializations Bicycle and Car you create separate templates to show them.

Now if there is a row of type Bicycle the template specific for bicycles will be shown. A row of type Car will be shown in the template for Car. A row of type SportsCar is shown in the template for Car. There is no template specific for sports cars (in this example) and Car is the 'closest' generalization for which there is a template.
{{% /alert %}}

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide9/visibility-section-link.md" %}}

## Performing Specific Actions

To perform actions on a list view, select it on a page and right-click it. The list of possible actions opens. While some actions from this list, such as **Select data source**, **Edit condition for visible**, are a quick way to set the properties, the following actions are specific actions that you can perform:

* **Go to entity** – opens a domain model and highlights an entity that is used as the data source
* **Go to data source microflow** – this action is only displayed when a microflow is set as the data source and opens this microflow 
* **Go to data source nanoflow** – this action is only displayed when a nanoflow is set as the data source and opens this nanoflow

## Read More

* [Page](/refguide9/page/)
* [Data Containers](/refguide9/data-widgets/)
* [Data Sources](/refguide9/data-sources/)
* [Properties Common in the Page Editor](/refguide9/common-widget-properties/)
