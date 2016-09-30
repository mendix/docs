---
title: "Text box"
space: "Reference Guide 6"
parent: "Input+Widgets"
---


A text box can be used to display and/or edit a textual value.

<div class="alert alert-info">{% markdown %}

![](attachments/16713878/16843994.png)
This text box allows the end-user to set the name of the customer.

{% endmarkdown %}</div>

A text box must be placed in a data view or template grid and connected to an attribute of type String. The connected attribute is shown in blue and between brackets inside the text box.

## General properties

### Decimal precision (only for numeric attributes)

The precision of a value describes the number of digits that are used to express that value. This property indicates the number of decimal places (the number of digits following the point).

_Default value:_ 2

### Group digits (only for numeric attributes)

For ease of reading, numbers with many digits before the decimal separator may be divided into groups using a delimiter. This property indicates whether the end user will see these groups.

_Default value:_ False

### Show as password (only for attributes of type String or HashString)

| Value | Description |
| --- | --- |
| False | Normal text box |
| True | Typed characters are not shown to the end user. Instead an asterisk is shown for every typed character. |

_Default value:_ False

### Input mask (only in web forms)

The input mask limits what the user can enter in the text box. A '9' means any digit, 'Z' means any letter, 'U' an upper-case letter, 'L' a lower-case letter and '*' a letter or a digit. Other characters will be taken literally. For example, the input mask 99-LLL-9999 matches 24-apr-2008.

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
