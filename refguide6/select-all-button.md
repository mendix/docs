---
title: "Select all button"
space: "Reference Guide 6"
parent: "control-bar"
---


The select all button allows the end-user to select all objects in a grid, or reference set selector. With the selection type property you can determine whether this button should select the objects on the current page, or the objects on all pages.

## Common properties

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

## General properties

{% snippet Caption+Property.md %}

{% snippet Tooltip+Property.md %}

{% snippet Image+Property.md %}

{% snippet Button+Style+Property.md %}

{% snippet Is+default+button+Property.md %}

### Selection type

| Value | Description |
| --- | --- |
| Select page | Clicking on this button selects all objects on the current page. |
| Select all | Clicking on this button selects all objects. |

<div class="alert alert-warning">{% markdown %}

Due to technical limitations, a button with selection type 'Select all' cannot be combined with remove, delete or select buttons.

{% endmarkdown %}</div>

_Default value:_ Select page

## Visibility properties

<div class="alert alert-info">{% markdown %}
Conditional visibility settings were added in version 5.10.0.
{% endmarkdown %}</div>

{% snippet Visibility+Property+With+Module+Roles+Simple.md %}
