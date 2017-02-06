---
title: "Text Area"
category: "refguide4"
space: "Reference Guide 4"
---
A text area can be used to display and/or edit a long text value that can be split over several lines.

<div class="alert alert-info">{% markdown %}

![](attachments/819203/917556.png)
This text area allows the end-user to set the description of the product.

{% endmarkdown %}</div>

A text area must be placed in a table cell within a data view or template grid and connected to an attribute of type String. The connected attribute is shown in blue and between brackets inside the text area.

## General Properties

### Number of lines (only in web forms)

The number of lines determine how many lines the text area shows at the same time. If the text in the text area contains more lines you will have to use a scrollbar to see it all.

_Default value:_ 5

### Maximum length

This property indicates the maximum number of characters that can be typed in this text box.

| Value | Description |
| --- | --- |
| Attribute length
 | The maximum number of characters is the same as the maximum length of the connected attribute. |
| Unlimited
 | The maximum number of characters is unlimited.
 |
| Custom
 | The maximum number of characters is set by the user.
 |

_Default value: Attribute length_

### Counter message (only in web forms)

This is the text displayed when typing in the text area. This text has 2 placeholders. The first placeholder shows the number of characters already typed and the second placeholder shows the maximum number of characters.

<div class="alert alert-info">{% markdown %}

You've used {1} characters of the {2} characters that are allowed.

{% endmarkdown %}</div>

### Text too long message (only in web forms)

This is the text displayed when the number of typed characters is higher than the maximum allowed number of characters.

### Placeholder text (only in mobile forms)

The placeholder text is shown when no text has been entered yet. It can be used to give a hint to the user what kind of text should be entered.

### Required (only in web forms)

See [Widget Properties](Widget+Properties).

### Required message (only in web forms)

See [Widget Properties](Widget+Properties).

## Common Properties

### Tab index (only in web forms)

See [Widget Properties](Widget+Properties).

### Name

See [Widget Properties](Widget+Properties).

### Class

See [Widget Properties](Widget+Properties).

### Style

See [Widget Properties](Widget+Properties).

## Data Source Properties

### Attribute (path)

See [Widget Properties](Widget+Properties).

## Editability Properties

### Editable

See [Widget Properties](Widget+Properties).

### Condition

See [Widget Properties](Widget+Properties).

## Events

### On change

See [Widget Events](Widget+Events).

### On change settings

See [Widget Events](Widget+Events).

### On enter (only in web forms)

See [Widget Events](Widget+Events).

### On enter settings (only in web forms)

See [Widget Events](Widget+Events).

### On leave (only in web forms)

See [Widget Events](Widget+Events).

### On leave settings (only in web forms)

See [Widget Events](Widget+Events).

## See also

*   [Data View](Data+View)
*   [Attributes](Attributes)