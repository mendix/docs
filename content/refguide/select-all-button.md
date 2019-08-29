---
title: "Select All Button"
parent: "control-bar"
menu_order: 60
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

The select all button allows the end-user to select all objects in a grid, or reference set selector. With the selection type property you can determine whether this button should select the objects on the current page, or the objects on all pages.

## Common Properties

{{% snippet file="refguide/class-property.md" %}}

{{% snippet file="refguide/style-property.md" %}}

## General Properties

{{% snippet file="refguide/caption-property.md" %}}

{{% snippet file="refguide/tooltip-property.md" %}}

{{% snippet file="refguide/image-property.md" %}}

{{% snippet file="refguide/button-style-property.md" %}}

{{% snippet file="refguide/is-default-button-property.md" %}}

### Selection Type

| Value | Description |
| --- | --- |
| Select page | Clicking on this button selects all objects on the current page. |
| Select all | Clicking on this button selects all objects. |

{{% alert type="warning" %}}

Due to technical limitations, a button with the selection type "Select all" cannot be combined with Remove, Delete, or Select buttons. An Edit button always behaves as if the selection type is "Select page," regardless of the actual settings of the "Select all" button that had been used to select objects.

{{% /alert %}}

_Default value:_ Select page

## Visibility Properties

{{% snippet file="refguide/visibility-property.md" %}}

{{% snippet file="refguide/visibility-property-with-module-roles-simple.md" %}}
