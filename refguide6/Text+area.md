---
title: "Text area"
space: "Reference Guide 6"
parent: "Input+Widgets"
---


A text area can be used to display and/or edit a long text value that can be split over several lines.

<div class="alert alert-info">{% markdown %}

![](attachments/16713877/16843992.png)

This text area allows the end-user to set the description of the product.

{% endmarkdown %}</div>

A text area must be placed in a data view or template grid and connected to an attribute of type String. The connected attribute is shown in blue and between brackets inside the text area.

## General properties

### Grow automatically

This property defines whether the text area grows automatically depending on the amount of text in it.

_Default value:_ No

### Number of lines

The number of lines determine how many lines the text area shows at the same time. If the text in the text area contains more lines you will have to use a scrollbar to see it all. This property is only shown if Grow automatically is set to No.

_Default value:_ 5

### Counter message

This is the text displayed when typing in the text area. This text has 2 placeholders. The first placeholder shows the number of characters already typed and the second placeholder shows the maximum number of characters.

<div class="alert alert-info">{% markdown %}

You've used {1} characters of the {2} characters that are allowed.

{% endmarkdown %}</div>

### Text too long message

This is the text displayed when the number of typed characters is higher than the maximum allowed number of characters.

### Maximum length

This property indicates the maximum number of characters that can be typed in this text box.

| Value | Description |
| --- | --- |
| Attribute length | The maximum number of characters is the same as the maximum length of the connected attribute. |
| Unlimited | The maximum number of characters is unlimited. |
| Custom | The maximum number of characters is set by the user. |

_Default value: Attribute length_

### Placeholder text

The placeholder text is shown when no text has been entered yet. It can be used to give a hint to the user what kind of text should be entered.

{% snippet Required+Property.md %}

{% snippet Required+message+Property.md %}

## Data source properties

{% snippet Attribute+Path+Property.md %}

{% snippet Label+Property.md %}

## Editability properties

{% snippet Editable+Property.md %}

{% snippet Read+Only+Style.md %}

{% snippet Condition+Property.md %}

## Visibility properties

{% snippet Visibility+Property+With+Module+Roles+Simple.md %}

## Events properties

{% snippet On+Change+Event.md %}

{% snippet On+Enter+event.md %}

{% snippet On+Leave+Event.md %}

## Common properties

{% snippet Name+Property.md %}

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

{% snippet Tab+index+Property.md %}

## Related articles

*   [Data view](Data+view)
*   [Attributes](Attributes)
