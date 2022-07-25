---
title: "Drop-Down"
url: /refguide7/drop_down/
tags: ["Drop-down", "input", "page", "widget", "enumeration"]
aliases:
    - /refguide7/drop-down-widget.html
    - /refguide7/drop-down-widget
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

A drop-down is an [input widget](/refguide7/input-widgets/) that can be used to display and edit enumeration attributes. It should not be confused with a reference selector, which is used to select a object with which to fill an [association](/refguide7/associations/).

{{% alert color="info" %}}

 {{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/drop_down/drop-down.png" >}}

This drop-down widget allows the user to select their favorite color.

{{% /alert %}}

## General Properties

### Empty Option Caption

This property represents the caption for the empty option in the drop-down shown to the user. This is a translatable text. For more details, see [Translatable Texts](/refguide7/translatable-texts/).

{{% alert color="info" %}}

Filling out the caption for an empty option improves the user experience of your application. It also helps screen-reader users to operate the application easily. For example, the drop-down that represents the color selection for a car could have a caption reading "Select a color".

{{% /alert %}}

{{% alert color="info" %}}

The empty option caption is available from Mendix 7.2.0.

{{% /alert %}}

## Validation Properties

{{% snippet file="/static/_includes/refguide7/Widget+Validation.md" %}}

## Data Source Properties

{{% snippet file="/static/_includes/refguide7/Attribute+Path+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Label+Property.md" %}}

## Editability Properties

{{% snippet file="/static/_includes/refguide7/Editable+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Read+Only+Style.md" %}}

{{% snippet file="/static/_includes/refguide7/Condition+Property.md" %}}

## Visibility Properties

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Simple.md" %}}

## Events Properties

{{% snippet file="/static/_includes/refguide7/On+Change+Event.md" %}}

{{% snippet file="/static/_includes/refguide7/On+Enter+event.md" %}}

{{% snippet file="/static/_includes/refguide7/On+Leave+Event.md" %}}

## Common Properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Tab+index+Property.md" %}}

## Read More

*   [Data View](/refguide7/data-view/)
*   [Attributes](/refguide7/attributes/)
