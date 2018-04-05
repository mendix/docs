---
title: "Text box"
parent: "input-widgets"
---


A text box can be used to display and/or edit a textual value.

{{% alert type="info" %}}

![](attachments/pages/text-box.png)
This text box allows the end-user to set the name of the customer.

{{% /alert %}}

A text box must be placed in a data view or template grid and connected to an attribute of type String. The connected attribute is shown in blue and between brackets inside the text box.

## General Properties

### Decimal Precision (Only for Numeric Attributes)

The precision of a value describes the number of digits that are used to express that value. This property indicates the number of decimal places (the number of digits following the point).

_Default value:_ 2

### Group Digits (Only for Numeric Attributes)

For ease of reading, numbers with many digits before the decimal separator may be divided into groups using a delimiter. This property indicates whether the end user will see these groups.

_Default value:_ False

### Show as Password (Only for Attributes of the String or HashString Type)

| Value | Description |
| --- | --- |
| False | Normal text box |
| True | Typed characters are not shown to the end user. Instead an asterisk is shown for every typed character. |

_Default value:_ False

### Input Mask (Only in Web Forms)

The input mask limits what the user can enter in the text box. A '9' means any digit, 'Z' means any letter, 'U' an upper-case letter, 'L' a lower-case letter and '*' a letter or a digit. Other characters will be taken literally. For example, the input mask 99-LLL-9999 matches 24-apr-2008.

### Maximum Length

This property indicates the maximum number of characters that can be typed in this text box.

| Value | Description |
| --- | --- |
| Attribute length | The maximum number of characters is the same as the maximum length of the connected attribute. |
| Unlimited | The maximum number of characters is unlimited. |
| Custom | The maximum number of characters is set by the user. |

_Default value: Attribute length_

### Placeholder Text

The placeholder text is shown when no text has been entered yet. It can be used to give a hint to the user what kind of text should be entered.

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

*   [Data view](data-view)
*   [Attributes](attributes)
