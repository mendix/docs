---
title: "Text Area"
url: /refguide7/text-area/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


A text area can be used to display and/or edit a long text value that can be split over several lines.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/input-widgets/text-area/text-area.png" >}}

This text area allows the end-user to set the description of the product.

{{% /alert %}}

A text area must be placed in a data view or template grid and connected to an attribute of type String. The connected attribute is shown in blue and between brackets inside the text area.

## General Properties

### Grow Automatically

This property defines whether the text area grows automatically depending on the amount of text in it.

_Default value:_ No

### Number of Lines

The number of lines determine how many lines the text area shows at the same time. If the text in the text area contains more lines you will have to use a scrollbar to see it all. This property is only shown if Grow automatically is set to No.

_Default value:_ 5

### Counter Message

This is the text displayed when typing in the text area. This text has 2 placeholders. The first placeholder shows the number of characters already typed and the second placeholder shows the maximum number of characters.

{{% alert color="info" %}}

You've used {1} characters of the {2} characters that are allowed.

{{% /alert %}}

### Text Too Long Message

This is the text displayed when the number of typed characters is higher than the maximum allowed number of characters.

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
