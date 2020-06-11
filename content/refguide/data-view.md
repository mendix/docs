---
title: "Data View"
parent: "data-widgets"
menu_order: 10
tags: ["page", "data view", "widget", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The data view is a starting point for showing the contents of exactly one object. For example, if you want to show the details of a single program item, you can use a data view to do this:

![](attachments/data-widgets/data-view-example-structure-mode.png)

In a more complex example, a data view can contain customer information and [tab containers](tab-container) per specific topic (for example, addresses and payment information) with nested data grids for related objects:

![](attachments/data-widgets/data-view-complex-example.png)

## 2 Data View Footer

The footer of the data view is the section at the bottom of the data view that often contains buttons to confirm or cancel changes.  

## 3 Properties

An example of data view properties is represented in the image below:

{{% image_container width="250" %}}![](attachments/data-widgets/data-view-properties.png)
{{% /image_container %}}

Data view properties consist of the following sections:

* [Common](#common)
* [Data source](#data-source)
* [Design Properties](#design-properties)
* [Editability](#editability)
* [General](#general)
* [Visibility](#visibility)

### 3.1 Common Section {#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 3.2 Data Source Section {#data-source}

The data source determines which object will be shown in the data view. For more information on data sources, see [Data Sources](data-sources).

The data view supports the following types of data source: context, microflow, nanoflow, and listen to widget. 

| Data Source Type | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| Context          | A data source determining that wherever you are opening the page from, you are passing the selected object. For example, when you add the **Show Page** activity in the microflow, you select the page and the object to pass. (For more information on the microflows, see [Microflows](microflows).) That means that when the page is opened in the microflow, the object of this type is provided and will be shown in the data view on the page. <br />If a data view is nested inside another data widget, you can specify an entity path that starts in the context object and follows one or more associations. For more information on the context source, see [Context Source](context-source).<br /> |
| Microflow        | A data source that runs a selected microflow and displays a return value. For more  information on the microflow source, see [Microflow Source](microflow-source). |
| Nanoflow         | A data source that runs a selected nanoflow and displays a return value. For more  information on the nanoflow source, see [Nanoflow Source](nanoflow-source). |
| Listen to widget | A data source that allows a data view to display detailed information on an object in the list widget on the same page. For more information on listen to widget source, see [Listen To Widget Source](microflow-source). |

### 3.3 Design Properties Section{#design-properties}

{{% snippet file="refguide/design-section-link.md" %}} 

### 3.4 Editability Section {#editability}

#### 3.4.1 Editable {#editable}

The editable property indicates whether the data view as a whole is editable or not. If the data view is not editable, no widget inside the data view will be editable. On the other hand, if the data view is editable, each widget is determined to be editable based on its own editable property.

Default: *True*

#### 3.4.2 Read-Only Style

This property determines how input widgets are rendered if they are read-only. 

| Value   | Description                                                  |
| ------- | ------------------------------------------------------------ |
| Control *(default)*  | The widget is displayed but disabled, so the value cannot be modified. |
| Text    | The widget is replaced by a textual representation of the value. |

{{% alert type="info" %}}Read-only style is not supported on native mobile pages.{{% /alert %}}

### 3.5 General Section {#general}

#### 3.5.1 Form Orientation

With this property, you can specify the position of the input widget labels inside the data view. If the orientation is horizontal, the labels will be placed next to the input widgets. If the orientation is vertical, the labels will be placed above the input widgets.

Note that form groups are responsive and the labels may be placed above input widgets, even if the orientation is set to horizontal, depending on the viewport size. Also, note that a data view with a vertical orientation cannot be nested inside a data view with a horizontal orientation. In that case, the form groups will be rendered horizontally, regardless of the value of the orientation property.

Default: *Horizontal*

#### 3.5.2. Label Width (Weight)

If the form orientation is set to horizontal, this property can be used to specify the width of the input widget labels inside the data view. The width is specified using column weights from the [Bootstrap grid system](http://getbootstrap.com/css/#grid). For more details, see [Layout Grid](layout-grid).

Default: *3*

#### 3.5.3 Show Footer

With this property, you can specify whether you want the footer of the data view to be visible. The footer of nested data views is always invisible, regardless of the value of this property.

Default: *True*

#### 3.5.4 Empty Entity Message

If this message is specified, a data view that receives no source data will show this message instead of its content. Otherwise, the data view will show its static content and disabled input widgets. This property is a translatable text. For more details, see [Language Menu](translatable-texts).

There are a number of ways a data view can end up without source data. For instance, a data view with a **Listen to widget** data source will remain empty until an object is selected in the target grid. In this scenario, **Empty entity message** can be used to guide the user to select an item from the grid.

Default: *empty*

### 3.6 Visibility Section {#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 4 Performing Specific Actions

To perform actions on a data view, select it on a page and right-click it. The list of possible actions opens. While some actions from this list, such as **Select data source**, **Edit condition for visible**, are a quick way to set the properties, the following actions are specific actions that you can perform:

* **Go to entity** – opens a domain model and highlights an an entity that is used as the data source 
* **Go to data source** **microflow **– this action is only displayed when a microflow is set as the data source and opens this microflow 
* **Go to data source nanoflow** – this action is only displayed when a nanoflow is set as the data source and opens this nanoflow

## 5 Read More

* [Page](page)
* [Data Widgets](data-widgets)
* [Data Sources](data-sources)
* [Properties Common in the Page Editor](common-widget-properties)
