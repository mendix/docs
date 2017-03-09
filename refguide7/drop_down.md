---
title: "Drop-Down"
space: "Mendix 7 Reference Guide"
parent: "input-widgets"
---

A drop-down is an [input widget](input-widgets) that can be used to display and edit enumeration attributes. It should not be confused with a reference selector, which is used to select a object with which to fill an [association](associations).

<div class="alert alert-info">{% markdown %}

 ![](attachments/16713880/16844000.png)
 
This drop-down widget allows the user to select the state of the customer.

{% endmarkdown %}</div>

## General Properties

### Empty Option Caption

This property represents the caption for the empty option in the drop-down shown to the user. This is a translable text. For more details, see [Translatable Texts](translatable-texts).

<div class="alert alert-info">{% markdown %}

Filling out the caption for an empty option increases the user experience of your application. It also helps screen-reader users to operate the application easily. For example, the drop-down that represents the color selection for a car could have a caption reading "Select a color."

{% endmarkdown %}</div>

<div class="alert alert-info">{% markdown %}

The empty option caption is available from Mendix 7.1.0.

{% endmarkdown %}</div>

{% snippet Required+Property.md %}

{% snippet Required+message+Property.md %}

## Data Source Properties

{% snippet Attribute+Path+Property.md %}

{% snippet Label+Property.md %}

## Editability Properties

{% snippet Editable+Property.md %}

{% snippet Read+Only+Style.md %}

{% snippet Condition+Property.md %}

## Visibility properties

{% snippet Visibility+Property+With+Module+Roles+Simple.md %}

## Events Properties

{% snippet On+Change+Event.md %}

{% snippet On+Enter+event.md %}

{% snippet On+Leave+Event.md %}

## Common Properties

{% snippet Name+Property.md %}

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

{% snippet Tab+index+Property.md %}

## Related Content

*   [Data View](data-view)
*   [Attributes](attributes)
