---
title: Columns
parent: data-grid
space: Reference Guide 5
---

## Common Properties

### Class

The class property allows you to specify a cascading style sheet (CSS) class for the widget. This class will be applied to the widget in the browser and the widget will get the corresponding styling. The class should be a class from the theme that is used in the project. It overrules the default styling of the widget.

{{% alert type="warning" %}}

Note that the styling is applied in the following order:

1. Default styling defined by the theme the project uses.
2. The 'Class' property of the widget.
3. The 'Style' property of the widget.

{{% /alert %}}

### Style

The style property allows you to specify additional CSS styling. If a class is also specified, this styling is applied _after_ the class.

{{% alert type="info" %}}

background-color:blue; This will result in a blue background

{{% /alert %}}

## Data Source Properties

### Attribute (path)

The attribute (path) property specifies the attribute's value that will be displayed in this column. It can be an attribute of the grid entity, or it can be an attribute of an associated entity, in which case we speak of an attribute path. The path can follow multiple associations of type reference, and at the end (optionally) one of type reference set. If you show a reference set in a column the values will be separated by a comma.

## Formatting Properties

### Enumeration format (only for attributes of type Enumeration)

A column connected to an attribute of type enumeration can show its contexts as text (default) or as image.

Value | Description
----- | -----------------------------------------
Text  | Show the caption text of the enumeration.
Image | Show the image of the enumeration value.

### Decimal precision (only for numeric attributes)

The precision of a value is defined the number of digits that is used to express that value. This property indicates the number of decimal places (the number of digits following the decimal point).

_Default value:_ 2

### Group digits (only for numeric attributes)

For ease of reading, numbers with many digits before the decimal separator may be divided into groups using a delimiter. This property defines whether the end user will see these groups, or not.

_Default value:_ False

### Date format (only for attributes of type DateTime)

The date format determines whether the date part, the time part or both are shown. How the date and time parts are formatted depends on the localization of the user using the application.

Possible values: 'Date', 'Time', 'Date and time' and 'Custom'.

_Default value:_ Date

If you choose 'Custom' as the date format (see above) the custom date format determines the way date and/or time are formatted. The custom date format is a string that follows the rules in this table,



Symbol | No.  | Example   | Description
------ | ---- | --------- | ---------------------------------------
G      | 1    | AD        | Era
y      | 1..n | 2010      | Year
M      | 1..2 | 09        | Month
M      | 3    | Sept
M      | 4    | September
w      | 1..2 | 27        | Week of Year
D      | 1..3 | 93        | Day of Year
a      | 1    | AM        | AM or PM
h      | 1..2 | 11        | Hour (1-12)
H      | 1..2 | 13        | Hour (0-23)
k      | 1..2 | 10        | Hour (1-24)
K      | 1..2 | 0         | Hour (0-11)
m      | 1..2 | 59        | Minute, use one or two for zero padding
s      | 1..2 | 12        | Second, use one or two for zero padding

{{% alert type="info" %}}





Format                           | Example output
-------------------------------- | -------------------------------------
`EEEE d MMMM yyy G, h:mm a ss's` | Tuesday 29 March 2011 AD, 1:37 PM 48s
`h:mm a`                         | 1:37 PM
`yyy D KK:mm`                    | 2011 88 01:26
`EEEE MMMM d yyy`                | Tuesday March 29 2011
`EEE, MMM d, ''yy`               | Wed, Jul 4, '01

 {{% /alert %}}



## General Properties

### Caption

The caption of a column is the text that appears as a header above the rows. This is a translatable text. See [Translatable Texts](translatable-texts).

### Editable

The editable property indicates whether the values of the column will be editable in-line, i.e. without opening a page with a data view. In-line editing allows the data grid to behave like you would expect from a spreadsheet application.

### Aggregate function

The values in a column can be aggregated in several ways. The aggregate function determines the way in which the values are aggregated. The aggregate will be shown at the bottom of the column that precedes by the aggregate caption (see below).



Value   | Description
------- | ------------------------------------------
None    | Do not aggregate the values in the column.
Average | Show the average of the values.
Minimum | Show the smallest value.
Maximum | Show the largest value.
Sum     | Show the sum of the values.
Count   | Show the count of the values.

{{% alert type="warning" %}}



Note that all objects will be taken into account, and not just the ones on the current page.

{{% /alert %}}

### Aggregate caption

The aggregate caption is the text that appears in front of the computed value. This is a translatable text. See [Translatable Texts](translatable-texts).

{{% alert type="info" %}}

'Total' could be an aggregate caption for a column that shows the sum of the values.

{{% /alert %}}

### Show tooltip

This property determines whether the tooltip page is shown as the mouse is hovered over this column. The tooltip page can be configured on the [Data grid](data-grid).

_Default value:_ False
