---
title: "Data View & List View"
url: /studio/page-editor-data-view-list-view/
description: "Describes the data view and list view in the page editor of Mendix Studio."
weight: 10
tags: ["studio", "page editor", "pages", "data view", "list view"]
---

## 1 Introduction 

A *data view* is a starting point for showing the contents of one object on a page.  A data view typically contains input elements like text boxes. 

For example, if you want to fill out the information on each customer, a data view is the best way to do that.

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-data-view-list-view/data-view-example.png"   width="300"  >}}

In more complex templates, a data view can contain other data views for related objects, for example, showing customer details and showing customer payment status, if these are modeled as two different entities. 

A *list view* is a starting point for showing a list of objects. For example, if you want to display a list of all customers, use a list view. 

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-data-view-list-view/list-view-example.png"   width="300"  >}}

A data view and list view belong to the **Data Container** category of widgets. For more information on different widget categories, see [Widgets](/studio/page-editor-widgets/). 

## 2 Data View Properties {#data-view-properties}

Data view consists of the following properties:

* [Data Source](#data-source-data-view)

* [General](#general-section-data-view)

* [Conditional Visibility](#visibility-data-view)

* [Design](#design-section-data-view)

    
    
    {{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-data-view-list-view/data-view-properties.png"   width="250"  >}}

### 2.1 Data Source Section {#data-source-data-view} 

The data source determines which object will be shown in the data view. For general information on data sources, see [Data Sources](/refguide/data-sources/) in the *Studio Pro Guide*. 

| Data Source Property | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| Context              | A data source determining that wherever you are opening the page from, you are passing the selected object. For example, when you add the **Show Page** activity in the microflow, you select the page and the object to pass. (For more information on the microflows, see [Microflows](/studio/microflows/).) That means that when the page is opened in the microflow, the object of this type is provided and will be shown in the data view on the page. For more technical information on the context source, see [Context Source](/refguide/context-source/) in the *Studio Pro Guide*. |
| Microflow            | A data source that runs a selected microflow and displays a return value. For more technical information, see [Microflow Source](/refguide/microflow-source/) in the *Studio Pro Guide*. |
| List widget          | A data source that allows a data view to display detailed information on an object in the list widget (list view) on the same page. For more technical information, see [Listen To Widget Source](/refguide/listen-to-grid-source/) in the *Studio Pro Guide*. |

### 2.2 General Section {#general-section-data-view}

The **General** section properties of are described in the table below:

| General Section Property           | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| Form Orientation                   | Determines the position of the [input element labels](/studio/page-editor-widgets-input-elements/#show-label) inside the data view. You can choose the following orientation: <ul><li>**Horizontal** – the labels will be placed next to the input elements</li><li>**Vertical** – the labels will be placed above the input elements</li></ul> Note that a data view with a vertical orientation cannot be placed inside a data view with a horizontal orientation. In that case, the form will be rendered horizontally. |
| Read-Only *(disabled by default)*  | When enabled, all [input elements](/studio/page-editor-widgets-input-elements/) (for example, a text area, a check box) in the data view will be in read-only mode. |
| Show Footer *(enabled by default)* | A footer is an area at the bottom of the document, usually containing information common for all pages, such as copyrights. |


### 2.3 Conditional Visibility {#visibility-data-view}

{{% snippet file="/static/_includes/studio/visibility-section-link.md" %}}

### 2.4 Design Section {#design-section-data-view}

For information on the **Design** section and its properties, see [Design Section](/studio/page-editor-widgets-design-section/).

## 3 List View Properties {#list-view-properties}

List view consists of the following properties:

* [Data Source](#data-source-list-view)
* [General](#general-section-list-view)
* [Conditional Visibility](#visibility-list-view)
* [Design](#design-section-list-view)

    {{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-data-view-list-view/list-view-properties.png"   width="250"  >}}

### 3.1 Data Source Section {#data-source-list-view}

The data source determines which objects will be shown in the list view. For general information about data sources, see [Data Sources](/refguide/data-sources/) in the *Studio Pro Guide*. 

| Data Source Property | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| Database             | A data source that determines that the object or objects shown are retrieved directly from the database. You need to select an **Entity** (that you have in the domain model), or create a new entity, if you set database as the data source. For more technical information, see [Database Source](/refguide/database-source/) in the *Studio Pro Guide*.<br />**Filter** – limits data in the list view. You can create a filter only after you specify an entity for the list view. For more information on data filtering, see [Data Filters](/studio/data-filters/).<br />**Sort Order** – the order in which items in the list view are shown. You can specify a sort order only after you select an entity for the list view. You can add multiple sorting rules. For example, you can add two sorting rules: one is to sort item by name in ascending order, and the other one is to sort items by email in descending order. Unique items will be sorted by name in ascending order, but if two or more items have the same name, then these items will be sorted by email. |
| Microflow            | A data source that runs a selected microflow and displays a return value (as in, a list of objects). For more technical information, see [Microflow Source](/refguide/microflow-source/) in the *Studio Pro Guide*. |
| XPath                | Currently, this data source can only be configured in Studio Pro. For more information, see [XPath Source](/refguide/xpath-source/). |
| Nanoflow             | Currently, this data source can only be configured in Studio Pro. For more information, see [Nanoflows](/refguide/nanoflows/). |
| Association          | Available when a list view is placed inside another data container, for example, a data view. The list view is filled with the objects linked to the data view object by an association. For example, you can show all orders for a customer. |

### 3.2 Events Section

 You can choose the **On Click Action** in the **Events** section. The **On Click Action** defines what action is performed when the user clicks a row of the list view. 

For more information on the **Events** section and on click actions, see [Events Section](/studio/page-editor-widgets-events-section/). 

### 3.3 General Section {#general-section-list-view}

In the **General** section, you can select the number of rows to be displayed on the page and set the read-only for the list view:

* **Page Size** – the number of rows displayed on the page; after the indicated limit is reached, the **Load more...** button is displayed on the page.

	{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-data-view-list-view/load-more-list-view.png"   width="400"  >}}

* **Read-Only** (enabled by default) – when enabled, all [input elements](/studio/page-editor-widgets-input-elements/) (for example, a text area, a check box) in the list view will be in read-only mode

### 3.4 Conditional Visibility Section {#visibility-list-view}

{{% snippet file="/static/_includes/studio/visibility-section-link.md" %}}

### 3.5 Design Section {#design-section-list-view}

For information on the **Design** section and its properties, see [Design Section](/studio/page-editor-widgets-design-section/).

## 4 Read More

* [Pages](/studio/page-editor/)
