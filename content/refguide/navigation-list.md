---
title: "Navigation List"
parent: "container-widgets"
menu_order: 70
tags: ["studio pro", "navigation list", "container widget", "widget"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
The navigation list widget is not supported on native mobile pages.
{{% /alert %}}

## 1 Introduction

A navigation list can be used to attach an action to an entire row when a user clicks this row. Such a row is called a navigation list item. 

For example, clicking one row can open a page, clicking another one can execute a microflow. 

![Navigation List](attachments/container-widgets/navigation-list.png)

## 2 Properties

An example of navigation list properties is represented in the image below:

{{% image_container width="300" %}}![Navigation List Properties](attachments/container-widgets/navigation-list-properties.png)
{{% /image_container %}}

Navigation list properties consist of the following sections:

* [Common](#common)
* Design Properties
* [Visibility](#visibility)

### 2.1 Common Section {#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 2.3 Visibility Section {#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 3 Navigation List Item

A row in a navigation list is a navigation list item. You can set a separate **On click** event for each row of the navigation list. 

### 3.1 Navigation List Item Properties

#### 3.1.1 Common Section

{{% snippet file="refguide/common-section-link.md" %}}

#### 3.1.2 General Section

In the **General** section, you can set a specific on click event for each navigation list item. An on click event defines what action is performed when a user clicks a row. For more information on on click events, see [On Click Event & Events Section](on-click-event).

{{% alert type="info" %}}

Microflows set as an on click event for a navigation list item have no **Execution**, **Confirmation**, or **Advanced** microflow settings. For more information on calling a microflow, see [On Click Event & Events Section](on-click-event#call-microflow). 

{{% /alert %}}

#### 3.1.3 Visibility Section

{{% snippet file="refguide/visibility-section-link.md" %}}

## 4 Read More

* [Page](page)
* [Container Widgets](container-widgets)
* [Properties Common in the Page Editor](common-widget-properties)