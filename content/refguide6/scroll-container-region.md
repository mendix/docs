---
title: "Scroll Container Region"
parent: "scroll-container"
---

A scroll container region is part of a [Scroll Container](scroll-container), and defines a content area.

## Common Properties

{{% snippet file="refguide6/Class+Property.md" %}}

{{% snippet file="refguide6/Style+Property.md" %}}

## General Properties

### Width (Only for Left and Right Regions)

Whether the width value of the region is defined in pixels or as a percentage of its parent's width.

### Width Value (Only for Left and Right Regions)

The width of the region, either in pixels or a percentage, depending on the value of the width property.

### Height (Only for Top and Bottom Regions)

Whether the height value of the region is defined in pixels or as a percentage of its parent's height.

### Height Value (Only for Top and Bottom Regions)

The height of the region, either in pixels or a percentage, depending on the value of the height property.

### Toggle Mode (Only for Left and Right Regions)

This setting determines whether the region is always visible or can be hidden from view. The different options allow the sidebar to interact with the page in a variety of ways when moving in and out of view. The visibility of the region is triggered by the [sidebar+toggle](sidebar-toggle-button).

{{% alert type="info" %}}

This setting used to be configured in the sidebar toggle button itself. It was moved to the scroll container region to improve transparency in Mendix 6.10.

{{% /alert %}}

Option | Description
--- | ---
None | The sidebar is always visible. 
Push content aside | The sidebar moves the rest of the content off screen.
Slide over content | The sidebar moves over the content.
Shrink content (initially open) | The content shrinks to make space for the sidebar and will be visible when the page loads. 
Shrink content (initally closed) | The content shrinks to make space for the sidebar and will not be visible when the page loads.
