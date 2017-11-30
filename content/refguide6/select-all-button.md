---
title: "Select all button"
parent: "control-bar"
---


The select all button allows the end-user to select all objects in a grid, or reference set selector. With the selection type property you can determine whether this button should select the objects on the current page, or the objects on all pages.

## Common properties

{{% snippet file="refguide6/Class+Property.md" %}}

{{% snippet file="refguide6/Style+Property.md" %}}

## General properties

{{% snippet file="refguide6/Caption+Property.md" %}}

{{% snippet file="refguide6/Tooltip+Property.md" %}}

{{% snippet file="refguide6/Image+Property.md" %}}

{{% snippet file="refguide6/Button+Style+Property.md" %}}

{{% snippet file="refguide6/Is+default+button+Property.md" %}}

### Selection type

| Value | Description |
| --- | --- |
| Select page | Clicking on this button selects all objects on the current page. |
| Select all | Clicking on this button selects all objects. |

{{% alert type="warning" %}}

Due to technical limitations, a button with selection type 'Select all' cannot be combined with remove, delete or select buttons.

{{% /alert %}}

_Default value:_ Select page

## Visibility properties

{{% alert type="info" %}}
Conditional visibility settings were added in version 5.10.0.
{{% /alert %}}

{{% snippet file="refguide6/Visibility+Property+With+Module+Roles+Simple.md" %}}
