---
title: "Simple Menu Bar"
parent: "menu-widgets"
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}The simple menu bar widget is not supported on native mobile pages.{{% /alert %}}

The simple menu bar widget shows a configured menu in the form of a horizontal or vertical bar with images and captions. Items cannot have subitems; the menu structure can only have one level. The [menu items](menu#menu-item) points to either the page or the microflow that will opened or started when the item is clicked.

{{% alert type="info" %}}

![](attachments/pages/simple-menu-bar-horizontal.png)

{{% /alert %}}{{% alert type="info" %}}

![](attachments/pages/simple-menu-bar-vertical.png)

{{% /alert %}}

## Common Properties

{{% snippet file="refguide/name-property.md" %}}

{{% snippet file="refguide/class-property.md" %}}

{{% snippet file="refguide/style-property.md" %}}

## General Properties

{{% snippet file="refguide/menu-source-properties.md" %}}

### Orientation

This property determines how the simple menu bar is laid out.

| Orientation | Description |
| --- | --- |
| Horizontal | The menu items are next to each other and the images are above the captions. |
| Vertical | The menu items are underneath each other and the images are next to the captions. |

_Default value:_ Horizontal
