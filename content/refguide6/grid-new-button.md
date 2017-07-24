---
title: "Grid New Button"
parent: "control-bar"
---


The new button allows the end-user to create new objects in a grid or reference set selector.

## Common Properties

{{% snippet file="refguide6/Class+Property.md" %}}

{{% snippet file="refguide6/Style+Property.md" %}}

## Data Source Properties

### Entity

This property determines of which entity this button should create an instance. If the entity that is connected to the grid or reference set selector has no specializations, the page builder will automatically set this property for you. Otherwise, you will have to select one of the specializations yourself.

{{% alert type="info" %}}

Let us say you have an entity Vehicle and two specializations, namely Bicycle and Car. In a grid on Vehicle you have to specify for the New button whether a Vehicle, a Bicycle or a Car will be created. You can even have three new buttons, one for each possibility.

{{% /alert %}}

## General Properties

{{% snippet file="refguide6/Caption+Property.md" %}}

{{% snippet file="refguide6/Tooltip+Property.md" %}}

{{% snippet file="refguide6/Image+Property.md" %}}

{{% snippet file="refguide6/Button+Style+Property.md" %}}

{{% snippet file="refguide6/Is+default+button+Property.md" %}}

### Edit location

| Value | Description |
| --- | --- |
| Inline at top | The new instance is added directly at the top of the grid or reference set selector and can be edited inline. |
| Inline at bottom | The new instance is added directly at the bottom of the grid or reference set selector and can be edited inline. |
| In a page | The new instance is added and can be edit in a page. The page in which this instance is being edited can be set with the page property |

_Default value:_ In a page

### Page

This property is relevant if the edit location is set to 'In a page' and it indicates the page that is shown to the end-user when he or she clicks this button. The end-user can use this page to edit the newly created object before it is saved. This page should contain a data view connected to the same entity as this grid or reference set selector.

See [Opening Pages](opening-pages).

## Visibility Properties

{{% alert type="info" %}}
Conditional visibility settings were added in version 5.10.0.
{{% /alert %}}

{{% snippet file="refguide6/Visible+Property.md" %}}
