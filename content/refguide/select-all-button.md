---
title: "Select all button"
space: "Mendix 7 Reference Guide"
parent: "control-bar"
---

The select all button allows the end-user to select all objects in a grid, or reference set selector. With the selection type property you can determine whether this button should select the objects on the current page, or the objects on all pages.

## Common Properties

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

## General Properties

{% snippet Caption+Property.md %}

{% snippet Tooltip+Property.md %}

{% snippet Image+Property.md %}

{% snippet Button+Style+Property.md %}

{% snippet Is+default+button+Property.md %}

### Selection Type

| Value | Description |
| --- | --- |
| Select page | Clicking on this button selects all objects on the current page. |
| Select all | Clicking on this button selects all objects. |

<div class="alert alert-warning">{% markdown %}

Due to technical limitations, a button with selection type 'Select all' cannot be combined with remove, delete or select buttons.

{% endmarkdown %}</div>

_Default value:_ Select page

## Visibility Properties

{% snippet Visibility+Property.md %}

{% snippet Visibility+Property+With+Module+Roles+Simple.md %}
