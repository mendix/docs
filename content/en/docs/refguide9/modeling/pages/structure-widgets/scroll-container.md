---
title: "Scroll Container"
url: /refguide9/scroll-container/
weight: 50
aliases:
    - /refguide9/horizontal-split-pane.html
    - /refguide9/vertical-split-pane.html
    - /refguide9/horizontal-split-pane
    - /refguide9/vertical-split-pane
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A scroll container is used to divide the layout in regions (for details on regions, see the [Scroll Container Region](#scroll-container-region) section) such as the header, sidebar, or footer. A scroll container must be the only top-level widget. Apart from that, a scroll container can only be placed directly in another scroll container.

Scroll containers may be placed on navigation layouts as well as on pages.

The scroll container example below divides the layout in three parts: a header containing an image, a part in the middle with a long piece of text, and a footer. You can scroll the long text inside the container, without scrolling the page.

{{< figure src="/attachments/refguide9/modeling/pages/structure-widgets/scroll-container/scroll-container.PNG" alt="Scroll Container" class="no-border" >}}

A scroll container can consist of several scroll container regions. For more information on scroll container regions and their properties, see the [Scroll Container Region](#scroll-container-region) section. 

## Properties

An example of scroll container properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/pages/structure-widgets/scroll-container/scroll-container-properties.png" alt="Scroll Container Properties" class="no-border" >}}

Scroll container properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [General](#general)
* [Regions](#regions)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide9/design-section-link.md" %}} 

### General Section {#general}

#### Layout Mode

This property determines in which mode the scroll container operates.

| Value | Description |
| --- | --- |
| Headline  *(default)* | The top and bottom regions extend the entire width of the container and the remaining regions are placed in the middle. |
| Sidebar | The side panels extend the full height of the container. |

{{% alert color="info" %}}This property is not supported on native mobile pages.{{% /alert %}}

#### Scroll Behavior

This property determines what happens when the content of a region does not fit in the region.

| Value | Description |
| --- | --- |
| Per region *(default)*  | Every region will show its own scroll bar in case its content does not fit. |
| Full widget | The scroll container will grow to fit its contents and will leave scrolling to its parent. |

{{% alert color="info" %}}This property is not supported on native mobile pages.{{% /alert %}}

#### Width {#width}

By default the scroll container will extend the full width of its parent widget. It can also be given a specific width, which can be defined either in pixels or percentage of its parent widget.

Default: *Full width*

{{% alert color="info" %}}This property is not supported on native mobile pages.{{% /alert %}}

#### Width Value

This property is displayed only when the [Width](#width) property is set to *Pixels* or *Percentage*. This property determines the width of the scroll container, either in pixels or a percentage.

#### Alignment 

This property is displayed only when the [Width](#width) property is set to *Pixels* or *Percentage*. The scroll container can be aligned to the left, to the right, or in the middle of its parent widget.

Default: *Center*

### Regions Section {#regions}

{{% alert color="info" %}}Regions are not supported on native mobile pages.{{% /alert %}}

Regions define the content area of a scroll container. For more information see the [Scroll Container Region](#scroll-container-region) section.

{{% alert color="info" %}}
If you add regions in a [layout](/refguide9/layout/), they will automatically be filled with [placeholders](/refguide9/placeholder/).
{{% /alert %}}

#### Enable Top

Determines whether the scroll container should contain a top region.

#### Enable Bottom

Determines whether the scroll container should contain a bottom region.

#### Enable Left

Determines whether the scroll container should contain a left region.

#### Enable Right

Determines whether the scroll container should contain a right region.

## Scroll Container Region {#scroll-container-region}

A scroll container region is part of a scroll container, and defines a content area. A scroll container can contain the following regions:

* Center 
* Left
* Right
* Top
* Bottom

You can add and remove all the regions listed above except the center one. 

### Scroll Container Region Properties{#region}

#### Common Section

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

#### General Section

##### Width or Height

A scroll container region has the following properties in the **General** section:

| Property     | Property is available for: | Description                                                  |
| ------------ | -------------------------- | ------------------------------------------------------------ |
| Width        | Left and right regions     | Defines whether the **Width value** (described below) of the region is specified in pixels or in percentage. |
| Width Value  | Left and right regions     | Allows you to specify the value of the width, either in pixels or in percentage. |
| Height       | Top and bottom regions     | Defines whether the **Height value** (described below) of the region is specified in pixels or in percentage. |
| Height Value | Top and bottom regions     | Allows you to specify the value of the height, either in pixels or in percentage. |

##### Toggle Mode (Layouts Only)

One (left or right) scroll container region within a layout can be set to toggle using a [sidebar toggle button](/refguide9/sidebar-toggle-button/). This setting determines which region (here called a sidebar) will be toggled, and how the toggling is implemented.

| Mode | Effect |
| --- | --- |
| None *(default)* | This sidebar is not affected by the sidebar toggle button. |
| Push content aside | The sidebar moves the rest of the content off-screen. |
| Slide over content | The sidebar moves over the content. |
| Shrink content (initially open) | The content is initially shrunk and the sidebar is displayed. The content expands when the sidebar is toggled. |
| Shrink content (initially closed) | The sidebar is initially hidden and the content shrinks to make space for it when it is toggled. |

## Read More

* [Page](/refguide9/page/)
* [Structure](/refguide9/structure-widgets/)
* [Properties Common in the Page Editor](/refguide9/common-widget-properties/)
