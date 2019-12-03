---
title: "Layout Grid"
parent: "container-widgets"
menu_order: 10
tags: ["studio pro", "layout grid", "container widget", "grid", "layout"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}The layout grid widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

The layout grid is a widget that gives structure to your pages.  A layout grid contains rows and columns: ![Layout Grid Example](attachments/container-widgets/layout-grid.png)

In a browser, the layout grid is based on the Bootstrap grid system. For more information on the Bootstrap grid system, see the [official Bootstrap documentation](http://getbootstrap.com/css/#grid).

## 2 Layout Grid Properties

An example of layout grid properties is represented in the image below:

{{% image_container width="350" %}}![Layout Grid Properties](attachments/container-widgets/layout-grid-properties.png)
{{% /image_container %}}

Layout grid properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [General](#general)
* [Visibility](#visibility)

### 2.1 Common Section {#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 2.2 Design Properties Section{#design-properties}

{{% snippet file="refguide/design-section-link.md" %}}

### 2.3 General Section {#general}

#### 2.3.1 Width

The **General** section contains the **Width** property, which determines the width of the layout grid. 

| Value       | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Full width  | The layout grid spans the full width of the available space and will stretch and shrink. |
| Fixed width | The layout grid has a fixed width but it is still responsive to viewport changes. Note that the width is not configurable in Studio Pro but is determined by Bootstrap. |

{{% alert type="warning" %}}

As the layout grid responds to the viewport width, and not to the width of its container, a fixed width layout grid should only be used on top-level.

{{% /alert %}}

### 2.4 Visibility Section {#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 3 Read More

* [Page](page)
* [Container Widgets](container-widgets)
* [Properties Common for Widgets](common-widget-properties)
