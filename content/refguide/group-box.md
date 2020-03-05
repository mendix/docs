---
title: "Group Box"
parent: "container-widgets"
menu_order: 30
tags: ["studio pro", "group box", "container widget", "widget"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}The group box widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

A group box can be used to visually group related widgets together. Group boxes are displayed as a frame around nested widgets with an optional header. Group boxes can be configured to collapse and expand dynamically.

![](attachments/container-widgets/group-box.jpg)

## 2 Properties

An example of group box properties is represented in the image below:

{{% image_container width="300" %}}![Group Box Properties](attachments/container-widgets/group-box-properties.png)
{{% /image_container %}}

Group box properties consist of the following sections:

* [Common](#common)
* Design Properties
* [General](#general)
* [Visibility](#visibility)

### 2.1 Common Section {#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 2.2 General Section {#general}

#### 2.2.1 Show Header

**Show Header** defines whether a header is shown above the group box. 

Default: *True*

#### 2.2.2 Caption

This property is only displayed when the **Show Header** option is enabled. It defines the caption that is shown in the header.

Default: *Group box*

#### 2.2.3 Collapsible

This property specifies whether the group box can be collapsed by clicking the header and if so, whether it is displayed collapsed or expanded. This property is only displayed when the **Show Header** is enabled.

Possible values of this property are the following:

* **Yes (start expanded)**  *(default)* – the elements inside the group box will be initially displayed and can be collapsed when a user clicks a minus icon in the header
* **Yes (start collapsed)** – the elements inside the group box will be initially hidden and can be expanded when a user clicks a plus icon in the header
* **No** – group box elements are always displayed and the group box cannot be collapsed

### 2.3 Visibility Section {#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 3 Read More

* [Page](page)
* [Container Widgets](container-widgets)
* [Properties Common in the Page Editor](common-widget-properties)


