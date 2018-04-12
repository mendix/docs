---
title: "Select all button"
parent: "control-bar"
---

The select all button allows the end-user to select all objects in a grid, or reference set selector. With the selection type property you can determine whether this button should select the objects on the current page, or the objects on all pages.

## Common Properties

{{% snippet file="refguide/Class+Property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

## General Properties

{{% snippet file="refguide/Caption+Property.md" %}}

{{% snippet file="refguide/Tooltip+Property.md" %}}

{{% snippet file="refguide/Image+Property.md" %}}

{{% snippet file="refguide/Button+Style+Property.md" %}}

{{% snippet file="refguide/Is+default+button+Property.md" %}}

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

{{% snippet file="refguide/Visibility+Property.md" %}}

{{% snippet file="refguide/Visibility+Property+With+Module+Roles+Simple.md" %}}
