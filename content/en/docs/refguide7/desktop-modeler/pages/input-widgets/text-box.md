---
title: "Text Box"
url: /refguide7/text-box/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


A text box can be used to display and/or edit a textual value.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/text-box/text-box.png" >}}
This text box allows the end-user to set the name of the customer.

{{% /alert %}}

A text box must be placed in a data view or template grid and connected to an attribute of type String. The connected attribute is shown in blue and between brackets inside the text box.

## General Properties

{{% snippet file="/static/_includes/refguide7/Numeric+Formatting+Properties.md" %}}

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

*   [Data view](/refguide7/data-view/)
*   [Attributes](/refguide7/attributes/)
