---
title: "Select All Button"
parent: "control-bar"
---
The select all button allows the end-user to select all objects in a grid, or reference set selector. With the selection type property you can determine whether this button should select the objects on the current page, or the objects on all pages.

## Appearance Properties

### Image

See [Button Properties](button-properties).

### Caption

See [Button Properties](button-properties).

### Class

See [Button Properties](button-properties)

### Style

See [Button Properties](button-properties)

## Behavior Properties

### Selection type

| Value | Description |
| --- | --- |
| Select page | Clicking on this button selects all objects on the current page. |
| Select all | Clicking on this button selects all objects. |

{{% alert type="warning" %}}

Due to technical limitations, a button with selection type 'Select all' cannot be combined with remove, delete or select buttons.

{{% /alert %}}

_Default value:_ Select page

### Default button

See [Button Properties](button-properties).

## Visibility Properties

### Visible

See [Button Properties](button-properties).
