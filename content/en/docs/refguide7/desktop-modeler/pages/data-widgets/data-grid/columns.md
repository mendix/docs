---
title: "Columns"
url: /refguide7/columns/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---
## Common Properties

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

## Data Source Properties

### Attribute (Path)

The attribute (path) property specifies the attribute's value that will be displayed in this column. It can be an attribute of the grid entity, or it can be an attribute of an associated entity, in which case we speak of an attribute path. The path can follow multiple associations of type reference, and at the end (optionally) one of type reference set. If you show a reference set in a column the values will be separated by a comma.

## Formatting Properties

### Enumeration Format (Only for Attributes of the Enumeration Type)

A column connected to an attribute of type enumeration can show its contexts as text (default) or as image.

| Value | Description |
| --- | --- |
| Text | Show the caption text of the enumeration. |
| Image | Show the image of the enumeration value. |

### Decimal Precision (Only for Decimal Attributes)

The precision of a value is defined the number of digits that is used to express that value. This property indicates the number of decimal places (the number of digits following the decimal point).

_Default value:_ 2

### Group Digits (Only for Numeric Attributes)

For ease of reading, numbers with many digits before the decimal separator may be divided into groups using a delimiter. This property defines whether the end user will see these groups, or not.

_Default value:_ False

### Date Format (Only for Attributes of the Type DateTime)

The date format determines whether the date part, the time part or both are shown. How the date and time parts are formatted depends on the localization of the user using the application.

These are the possible values:
* **Date** (this is the default)
* **Time**
* **Date and time**
* **Custom** (see below for more deteails)

_Default value:_ Date

If you choose **Custom** as the date format, the custom date format determines the way date and/or time are formatted. The custom date format is a string that follows the rules in this table:

| Symbol | Number of Symbols | Example | Example Result | Description |
| --- | --- | --- | --- | --- |
| G | 1 | G | AD | Era |
| y | 1–n | y | 2010 | Year |
| M | 1–2 | MM | 09 | Month (number) |
| M | 3 | MMM | Sept | Month (abbreviation) |
| M | 4 | MMMM | September | Month (full) |
| w | 1–2 | w | 27 | Week of year |
| D | 1–3 | DD | 083 | Day of year |
| a | 1 | a | AM | AM or PM |
| h | 1–2 | h | 11 | Hour (1-12) |
| H | 1–2 | HH | 09 | Hour (0-23) |
| k | 1–2 | k | 10 | Hour (1-24) |
| K | 1–2 | KK | 05 | Hour (0-11) |
| m | 1–2 | m | 59 | Minute |
| s | 1–2 | ss | 06 | Second |

{{% alert color="info" %}}

These are some examples:

| Format | Example output |
| --- | --- |
| `EEEE d MMMM yyy G, h:mm a ss's` | Tuesday 29 March 2011 AD, 1:37 PM 48s |
| `h:mm a` | 1:37 PM |
| `yyy D KK:mm` | 2011 88 01:26 |

{{% /alert %}}

## General Properties

### Caption

The caption of a column is the text that appears as a header above the rows. This is a translatable text. See [Translatable Texts](/refguide7/translatable-texts/).

### Editable

The editable property indicates whether the values of the column will be editable inline, as in, without opening a page with a data view. In-line editing allows the data grid to behave like you would expect from a spreadsheet application.

### Aggregate Function

The values in a column can be aggregated in several ways. The aggregate function determines the way in which the values are aggregated. The aggregate will be shown at the bottom of the column that precedes by the aggregate caption (see below).

| Value | Description |
| --- | --- |
| None | Do not aggregate the values in the column. |
| Average | Show the average of the values. |
| Minimum | Show the smallest value. |
| Maximum | Show the largest value. |
| Sum | Show the sum of the values. |
| Count | Show the count of the values. |

{{% alert color="warning" %}}

Note that all objects will be taken into account, and not just the ones on the current page.

{{% /alert %}}

### Aggregate Caption

The aggregate caption is the text that appears in front of the computed value. This is a translatable text. See [Translatable Texts](/refguide7/translatable-texts/).

{{% alert color="info" %}}

'Total' could be an aggregate caption for a column that shows the sum of the values.

{{% /alert %}}

### Show Tooltip

This property determines whether the tooltip page is shown as the mouse is hovered over this column. The tooltip page can be configured on the [Data grid](/refguide7/data-grid/).

_Default value:_ False
