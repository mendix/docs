---
title: "Drop-Down"
parent: "input-widgets"
---

A drop-down is an [input widget](input-widgets) that can be used to display and edit enumeration attributes. It should not be confused with a reference selector, which is used to select a object with which to fill an [association](associations).

{{% alert type="info" %}}

 ![](attachments/pages/drop-down.png)
 
This drop-down widget allows the user to select their favorite color.

{{% /alert %}}

## General Properties

### Empty Option Caption

This property represents the caption for the empty option in the drop-down shown to the user. This is a translable text. For more details, see [Translatable Texts](translatable-texts).

{{% alert type="info" %}}

Filling out the caption for an empty option increases the user experience of your application. It also helps screen-reader users to operate the application easily. For example, the drop-down that represents the color selection for a car could have a caption reading "Select a color."

{{% /alert %}}

{{% alert type="info" %}}

The empty option caption is available from Mendix 7.2.0.

{{% /alert %}}

## Validation Properties

{{% snippet file="refguide/Widget+Validation.md" %}}

## Data Source Properties

{{% snippet file="refguide/Attribute+Path+Property.md" %}}

{{% snippet file="refguide/Label+Property.md" %}}

## Editability Properties

{{% snippet file="refguide/Editable+Property.md" %}}

{{% snippet file="refguide/Read+Only+Style.md" %}}

{{% snippet file="refguide/Condition+Property.md" %}}

## Visibility Properties

{{% snippet file="refguide/Visibility+Property.md" %}}

{{% snippet file="refguide/Visibility+Property+With+Module+Roles+Simple.md" %}}

## Events Properties

{{% snippet file="refguide/On+Change+Event.md" %}}

{{% snippet file="refguide/On+Enter+event.md" %}}

{{% snippet file="refguide/On+Leave+Event.md" %}}

## Common Properties

{{% snippet file="refguide/Name+Property.md" %}}

{{% snippet file="refguide/Class+Property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

{{% snippet file="refguide/Tab+index+Property.md" %}}

## Related Content

*   [Data View](data-view)
*   [Attributes](attributes)
