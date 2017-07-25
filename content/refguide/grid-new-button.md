---
title: "Grid Create Button"
parent: "control-bar"
---


The **Create** button allows the user to create new objects in a grid or reference set selector.

## Common Properties

{{% snippet file="refguide/Class+Property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

## Data Source Properties

### Entity

This property determines of which entity this button should create an instance. If the entity that is connected to the grid or reference set selector has no specializations, the page builder will automatically set this property for you. Otherwise, you will have to select one of the specializations yourself.

{{% alert type="info" %}}

Let us say you have an entity Vehicle and two specializations, namely Bicycle and Car. In a grid on Vehicle you have to specify for the create button whether a Vehicle, a Bicycle or a Car will be created. You can even have three create buttons, one for each possibility.

{{% /alert %}}

## General Properties

{{% snippet file="refguide/Caption+Property.md" %}}

{{% snippet file="refguide/Tooltip+Property.md" %}}

{{% snippet file="refguide/Image+Property.md" %}}

{{% snippet file="refguide/Button+Style+Property.md" %}}

{{% snippet file="refguide/Is+default+button+Property.md" %}}

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

{{% snippet file="refguide/Visible+Property.md" %}}
