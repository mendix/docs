---
title: "Data View & List View Properties in the Web Modeler"
parent: "page-editor-widgets-wm"
description: "Describes the data view and list view in the Page Editor of the Mendix Web Modeler."
menu_order: 10
tags: ["web modeler", "page editor", "pages", "data view", "list view"]
---

## 1 Introduction 

The data view is a starting point for showing the contents of one object on a page.  The data view typically contains input widgets like text boxes. 

For example, if you want to fill out the information on each customer, data view is the best way to do that.

![](attachments/page-editor-data-view-list-view-wm/wm-data-view-example.png)

In more complex templates, a data view can contain other data views for related objects, for example, showing customer details and showing customer payment status, if these are modeled as two different entities. 

## 2 Data View Properties {#data-view-properties}

Data view consists of the following properties:

* [Data Source](#data-source-data-view)
* [General](#general-section-data-view)
* [Design](#design-section-data-view)

![](attachments/page-editor-data-view-list-view-wm/wm-data-view-properties.png)

### 2.1 Data Source {#data-source-data-view} 

The data source determines which object will be shown in the data view. For general information on data sources, see [Data Sources](../data-sources) in the *Desktop Modeler* category. 

| Data Source Property | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| Context              | A data source determining that wherever you are opening the page from, you are passing the selected object. For example, when you add the **Show Page** activity in the microflow, you select the page and the object to pass. (For more information on the microflows, see [Microflows in the Web Modeler](microflows-wm).) That means that when the page is opened in the microflow, the object of this type is provided and will be shown in the data view on the page. For more technical information on the context source, see [Context Source](../entity-path-source) in the *Desktop Modeler* category. |
| Microflow            | A data source that runs a selected microflow and displays a return value. For more technical information, see [Microflow Source](../microflow-source) in the *Desktop Modeler* category. |
| List widget          | A data source that allows a data view to display detailed information on an object in the list widget (list view) on the same page. For more technical information, see [Listen To Widget Source](../microflow-source) in the *Desktop Modeler* category. |

### 2.2 General {#general-section-data-view}

In the **General** section, you can enable/disable the  following options:

* **Read-Only** (disabled by default) – when enabled, all [input widgets](page-editor-widgets-input-elements-wm) (for example, a text area, a check box) in the data view will be in read-only mode
* **Show Footer** (enabled by default) – a footer is an area at the bottom of the document, usually containing information common for all pages, such as copyrights  

### 2.3 Design {#design-section-data-view}

For information on the **Design** section and its properties, see [Design Section in Widgets of the Web Modeler](page-editor-widgets-design-section-wm).

## 3 List View Properties {#list-view-properties}

List view consists of the following properties:

* [Data Source](#data-source-list-view)
* [General](#general-section-list-view)
* [Design](#design-section-list-view)

![](attachments/page-editor-data-view-list-view-wm/wm-list-view-properties.png)

### 3.1 Data Source {#data-source-list-view}

The data source determines which objects will be shown in the list view. For general information about data sources, see [Data Sources](../data-sources) in the *Desktop Modeler* category. 

| Data Source Property | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| Database             | A data source that determines that the object or objects shown are retrieved directly from the database. You need to select **Entity** (that you have in the domain model), or create a new entity, if you set database as the data source. For more technical information, see [Database Source](../database-source) in the *Desktop Modeler* category.<br />After you have selected an entity, you can create one or more **Constraint** items. Constraints are used to limit (filter) data in a list view. To add a constraint, select an attribute and an operator for it (the number of available operators depend on the type of an attribute), and select a value. For example, to display a list of customers with only Gold grade, select an enumeration *Grade* as an attribute, select *Equals* as an operator, and set a value to *Gold*. <br />**Note** You can choose only the following types of attributes for constraints: AutoNumber, Boolean, Decimal, Enumeration, Integer, Long, and String. |
| Microflow            | A data source that runs a selected microflow and displays a return value (i.e. list of objects). For more technical information, see [Microflow Source](../microflow-source) in the *Desktop Modeler* category. |
| XPath                | Currently, this data source can only be configured in the Desktop Modeler. For more information, see [XPath Source](../xpath-source). |
| Nanoflow             | Currently, this data source can only be configured in the Desktop Modeler. For more information, see [Nanoflows](../nanoflows). |
| Association          | Currently, this data source can only be configured in the Desktop Modeler. For more information, see [Association Source](../association-source). |

### 3.2 Events

 You can choose the **On Click Action** in the **Events** section. The **On Click Action** defines what action is performed when the user clicks a row of the list view. 

For more information on the **Events** section and on click actions, see [Events Section in Widgets of the Web Modeler](page-editor-widgets-events-section-wm). 

### 3.3 General {#general-section-list-view}

In the **General** section, you can select the number of rows to be displayed on the page and set the read-only for the list view:

* **Page Size** – the number of rows displayed on the page; after the indicated limit is reached, the **Load more...** button is displayed on the page.

![](attachments/page-editor-data-view-list-view-wm/wm-load-more-list-view.png)

* **Read-Only** (enabled by default) – when enabled, all [input widgets](page-editor-widgets-input-elements-wm) (for example, a text area, a check box) in the list view will be in read-only mode

### 3.4 Design Section {#design-section-list-view}

For information on the **Design** section and its properties, see [Design Section in Widgets of the Web Modeler](page-editor-widgets-design-section-wm).

## 4 Related Content

* [Page Editor in the Web Modeler](page-editor-wm)
