---
title: "Scroll Container"
url: /refguide/scroll-container/
weight: 50
tags: ["studio pro", "scroll container", "container widget", "widget"]
aliases:
    - /refguide/horizontal-split-pane.html
    - /refguide/vertical-split-pane.html
    - /refguide/horizontal-split-pane
    - /refguide/vertical-split-pane
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A scroll container is used to divide the layout in regions (for details on regions, see the [Scroll Container Region](#scroll-container-region) section) such as the header, sidebar, or footer. A scroll container must be the only top-level widget. Apart from that, a scroll container can only be placed directly in another scroll container.

Scroll containers may be placed on navigation layouts as well as on pages.

The scroll container example below divides the layout in three parts: a header containing an image, a part in the middle with a long piece of text, and a footer. You can scroll the long text inside the container, without scrolling the page.

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/scroll-container/scroll-container.PNG" alt="Scroll Container" >}}


A scroll container can consist of several scroll container regions. For more information on scroll container regions and their properties, see the [Scroll Container Region](#scroll-container-region) section. 

## 2 Properties

An example of scroll container properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/scroll-container/scroll-container-properties.png" alt="Scroll Container Properties" >}}

Scroll container properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [General](#general)
* [Regions](#regions)

### 2.1 Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### 2.2 Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### 2.3 General Section {#general}

#### 2.3.1 Layout Mode

This property determines in which mode the scroll container operates.

| Value | Description |
| --- | --- |
| Headline  *(default)* | The top and bottom regions extend the entire width of the container and the remaining regions are placed in the middle. |
| Sidebar | The side panels extend the full height of the container. |

{{% alert color="info" %}}This property is not supported on native mobile pages.{{% /alert %}}

#### 2.3.2 Scroll Behavior

This property determines what happens when the content of a region does not fit in the region.

| Value | Description |
| --- | --- |
| Per region *(default)*  | Every region will show its own scroll bar in case its content does not fit. |
| Full widget | The scroll container will grow to fit its contents and will leave scrolling to its parent. |

{{% alert color="info" %}}This property is not supported on native mobile pages.{{% /alert %}}

#### 2.3.3 Width {#width}

By default the scroll container will extend the full width of its parent widget. It can also be given a specific width, which can be defined either in pixels or percentage of its parent widget.

Default: *Full width*

{{% alert color="info" %}}This property is not supported on native mobile pages.{{% /alert %}}

#### 2.3.4 Width Value

This property is displayed only when the [Width](#width) property is set to *Pixels* or *Percentage*. This property determines the width of the scroll container, either in pixels or a percentage.

#### 2.3.5 Alignment 

This property is displayed only when the [Width](#width) property is set to *Pixels* or *Percentage*. The scroll container can be aligned to the left, to the right, or in the middle of its parent widget.

Default: *Center*

### 2.4 Regions Section {#regions}

{{% alert color="info" %}}Regions are not supported on native mobile pages.{{% /alert %}}

Regions define the content area of a scroll container. For more information see the [Scroll Container Region](#scroll-container-region) section.

{{% alert color="info" %}}
If you add regions in a [layout](/refguide/layout/), they will automatically be filled with [placeholders](/refguide/placeholder/).
{{% /alert %}}

#### 2.4.1 Enable Top

Determines whether the scroll container should contain a top region.

#### 2.4.2 Enable Bottom

Determines whether the scroll container should contain a bottom region.

#### 2.4.3 Enable Left

Determines whether the scroll container should contain a left region.

#### 2.4.4 Enable Right

Determines whether the scroll container should contain a right region.

## 3 Scroll Container Region {#scroll-container-region}

A scroll container region is part of a scroll container, and defines a content area. A scroll container can contain the following regions:

* Center 
* Left
* Right
* Top
* Bottom

You can add and remove all the regions listed above except the center one. 

### 3.1 Scroll Container Region Properties{#region}

#### 3.1.1 Common Section

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

#### 3.1.2 General Section

##### 3.1.2.1 Width or Height

A scroll container region has the following properties in the **General** section:

| Property     | Property is available for: | Description                                                  |
| ------------ | -------------------------- | ------------------------------------------------------------ |
| Width        | Left and right regions     | Defines whether the **Width value** (described below) of the region is specified in pixels or in percentage. |
| Width Value  | Left and right regions     | Allows you to specify the value of the width, either in pixels or in percentage. |
| Height       | Top and bottom regions     | Defines whether the **Height value** (described below) of the region is specified in pixels or in percentage. |
| Height Value | Top and bottom regions     | Allows you to specify the value of the height, either in pixels or in percentage. |

##### 3.1.2.2 Toggle Mode (Layouts Only)

One (left or right) scroll container region within a layout can be set to toggle using a [sidebar toggle button](/refguide/sidebar-toggle-button/). This setting determines which region (here called a sidebar) will be toggled, and how the toggling is implemented.

| Mode | Effect |
| --- | --- |
| None *(default)* | This sidebar is not affected by the sidebar toggle button. |
| Push content aside | The sidebar moves the rest of the content off-screen. |
| Slide over content | The sidebar moves over the content. |
| Shrink content (initially open) | The content is initially shrunk and the sidebar is displayed. The content expands when the sidebar is toggled. |
| Shrink content (initially closed) | The sidebar is initially hidden and the content shrinks to make space for it when it is toggled. |

## 4 Read More

* [Page](/refguide/page/)
* [Structure](/refguide/structure-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)