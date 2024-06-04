---
title: "Group Box"
url: /refguide/group-box/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}The group box widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

A group box can be used to visually group related widgets together. Group boxes are displayed as a frame around nested widgets with an optional header. Group boxes can be configured to collapse and expand dynamically.

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/group-box/group-box.jpg" class="no-border" >}}

## 2 Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Group box properties consist of the following sections:

Properties:

* [General](#general)
* [Visibility](#visibility)
* [Common](#common)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

## 3 Properties

### 3.1 General Section {#general}

#### 3.1.1 Show Header

**Show Header** defines whether a header is shown above the group box. 

Default: *True*

#### 3.1.2 Caption

This property is only displayed when the **Show Header** option is enabled. It defines the caption that is shown in the header.

Default: *Group box*

#### 3.1.3 Collapsible

This property specifies whether the group box can be collapsed by clicking the header and if so, whether it is displayed collapsed or expanded. This property is only displayed when the **Show Header** is enabled.

Possible values of this property are the following:

* **Yes (start expanded)**  *(default)* – the elements inside the group box will be initially displayed and can be collapsed when a user clicks a minus icon in the header
* **Yes (start collapsed)** – the elements inside the group box will be initially hidden and can be expanded when a user clicks a plus icon in the header
* **No** – group box elements are always displayed and the group box cannot be collapsed

### 3.2 Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

### 3.3 Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## 4 Styling

### 4.1 Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### 4.2 Common Section {#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## 5 Read More

* [Page](/refguide/page/)
* [Structure](/refguide/structure-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
