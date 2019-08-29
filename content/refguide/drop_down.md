---
title: "Drop-Down"
parent: "input-widgets"
menu_order: 30
tags: ["Drop-down", "input", "page", "widget", "enumeration", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

A drop-down is an [input widget](input-widgets) that can be used to display and edit enumeration attributes. It should not be confused with a reference selector, which is used to select a object with which to fill an [association](associations).

{{% alert type="info" %}}

 ![](attachments/pages/drop-down.png)

This drop-down widget allows the user to select their favorite color.

{{% /alert %}}

## General Properties

### Empty Option Caption

This property represents the caption for the empty option in the drop-down shown to the user. This is a translatable text. For more details, see [Translatable Texts](translatable-texts).

{{% alert type="info" %}}

Filling out the caption for an empty option improves the user experience of your application. It also helps screen-reader users to operate the application easily. For example, the drop-down that represents the color selection for a car could have a caption reading "Select a color".

{{% /alert %}}

## Validation Properties

{{% snippet file="refguide/Widget+Validation.md" %}}

## Data Source Properties

{{% snippet file="refguide/attribute-path-property.md" %}}

{{% snippet file="refguide/label-property.md" %}}

## Editability Properties

{{% snippet file="refguide/editable-property.md" %}}

{{% snippet file="refguide/Read+Only+Style.md" %}}

{{% snippet file="refguide/condition-property.md" %}}

## Visibility Properties

{{% snippet file="refguide/Visibility+Property.md" %}}

{{% snippet file="refguide/Visibility+Property+With+Module+Roles+Simple.md" %}}

## Events Properties

{{% snippet file="refguide/on-change-event.md" %}}

{{% snippet file="refguide/on-enter-event.md" %}}

{{% snippet file="refguide/on-leave-event.md" %}}

## Common Properties

{{% snippet file="refguide/name-property.md" %}}

{{% snippet file="refguide/class-property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

{{% snippet file="refguide/Tab+index+Property.md" %}}

## Read More

*   [Data View](data-view)
*   [Attributes](attributes)
