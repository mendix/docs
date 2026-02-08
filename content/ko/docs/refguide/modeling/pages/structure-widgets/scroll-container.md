---
title: "Scroll Container"
url: /refguide/scroll-container/
weight: 50
aliases:
    - /refguide/horizontal-split-pane.html
    - /refguide/vertical-split-pane.html
    - /refguide/horizontal-split-pane
    - /refguide/vertical-split-pane
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A scroll container is used to divide the layout in regions (for details on regions, see the [Scroll Container Region](#scroll-container-region) section) such as the header, sidebar, or footer. A scroll container must be the only top-level widget. Apart from that, a scroll container can only be placed directly in another scroll container.

Scroll containers may be placed on navigation layouts as well as on pages.

The scroll container example below divides the layout in three parts: a header containing an image, a part in the middle with a long piece of text, and a footer. You can scroll the long text inside the container, without scrolling the page.

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/scroll-container/scroll-container.PNG" alt="Scroll Container" class="no-border" >}}

A scroll container can consist of several scroll container regions. For more information on scroll container regions and their properties, see the [Scroll Container Region](#scroll-container-region) section. 

## Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Scroll container properties consist of the following sections:

Properties:

* [General](#general)
* [Common](#common)
* [Regions](#region)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

Miscellaneous:

* [Scroll Container Region](#scroll-container-region)

## Properties

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

### Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### Regions Section {#region}

{{% alert color="info" %}}Regions are not supported on native mobile pages.{{% /alert %}}

Regions define the content area of a scroll container. For more information see the [Scroll Container Region](#scroll-container-region) section.

{{% alert color="info" %}}
If you add regions in a [layout](/refguide/layout/), they will automatically be filled with [placeholders](/refguide/placeholder/).
{{% /alert %}}

#### Enable Top

Determines whether the scroll container should contain a top region.

#### Enable Bottom

Determines whether the scroll container should contain a bottom region.

#### Enable Left

Determines whether the scroll container should contain a left region.

#### Enable Right

Determines whether the scroll container should contain a right region.

## Styling

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### Common Section {#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## Miscellaneous

### Scroll Container Region Section {#scroll-container-region}

A scroll container region is part of a scroll container, and defines a content area. A scroll container can contain the following regions:

* Center 
* Left
* Right
* Top
* Bottom

You can add and remove all the regions listed above except the center one. 

## Read More

* [Page](/refguide/page/)
* [Structure](/refguide/structure-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
