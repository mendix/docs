---
title: "Select All Button"
url: /refguide7/select-all-button/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

The select all button allows the end-user to select all objects in a grid, or reference set selector. With the selection type property you can determine whether this button should select the objects on the current page, or the objects on all pages.

## Common Properties

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

## General Properties

{{% snippet file="/static/_includes/refguide7/Caption+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Tooltip+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Image+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Button+Style+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Is+default+button+Property.md" %}}

### Selection Type

| Value | Description |
| --- | --- |
| Select page | Clicking on this button selects all objects on the current page. |
| Select all | Clicking on this button selects all objects. |

{{% alert color="warning" %}}

Due to technical limitations, a button with the selection type "Select all" cannot be combined with Remove, Delete, or Select buttons. An Edit button always behaves as if the selection type is "Select page," regardless of the actual settings of the "Select all" button that had been used to select objects.

{{% /alert %}}

_Default value:_ Select page

## Visibility Properties

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Simple.md" %}}
