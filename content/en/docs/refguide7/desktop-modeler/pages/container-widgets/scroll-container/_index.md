---
title: "Scroll Container"
url: /refguide7/scroll-container/
aliases:
    - /refguide7/horizontal-split-pane.html
    - /refguide7/vertical-split-pane.html
    - /refguide7/horizontal-split-pane
    - /refguide7/vertical-split-pane
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

A scroll container is used to divide the layout in regions (for details on regions, see [Scroll Container Region](/refguide7/scroll-container-region/) in the Mendix Reference Guide) such as the header, sidebar, or footer. A scroll container must be the only top-level widget. Apart from that, a scroll container can only be placed directly in another scroll container.

Scroll containers may be placed on navigation layouts as well as on pages.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/container-widgets/scroll-container/scroll-container.PNG" >}}
The scroll container splits the layout in three parts: a header containing a logo, a content part with a placeholder and a footer.

{{% /alert %}}

## Common Properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

## General Properties

### Layout Mode

This property determines in which mode the scroll container operates.

| Value | Description |
| --- | --- |
| Headline | The top and bottom regions extend the entire width of the container and the remaining regions are placed in the middle. |
| Sidebar | The side panels extend the full height of the container. |

_Default value:_ Headline

### Scroll Behavior

This property determines what happens when the content of a region does not fit in the region.

| Value | Description |
| --- | --- |
| Per region | Every region will show its own scroll bar in case its content does not fit. |
| Full widget | The scroll container will grow to fit its contents and will leave scrolling to its parent. |

_Default value:_ Per region

### Width

By default the scroll container will extend the full width of its parent widget. It can also be given a specific width, which can be defined either in pixels or a percentage of its parent widget.

_Default value:_ Full width

### Width Value (for Width Set to 'pixels' or 'percentage')

The width of the scroll container, either in pixels or a percentage, depending on the value of the width property.

### Alignment (for Width Set to 'pixels' or 'percentage')

The scroll container can be aligned to the left, to the right or in the middle of its parent widget.

_Default value:_ Center

## Regions

### Enable Top

Determines whether the scroll container should contain a top region (for details on regions, see [Scroll Container Region](/refguide7/scroll-container-region/) in the Mendix Reference Guide).

### Enable Bottom

Determines whether the scroll container should contain a bottom region (for details on regions, see [Scroll Container Region](/refguide7/scroll-container-region/) in the Mendix Reference Guide).

### Enable Left

Determines whether the scroll container should contain a left region (for details on regions, see [Scroll Container Region](/refguide7/scroll-container-region/) in the Mendix Reference Guide).

### Enable Right

Determines whether the scroll container should contain a right region (for details on regions, see [Scroll Container Region](/refguide7/scroll-container-region/) in the Mendix Reference Guide).
