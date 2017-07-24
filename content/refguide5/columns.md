---
title: "Columns"
parent: "data-grid"
space: "Reference Guide 5"
---
## Common Properties



### Class

The class property allows you to specify a cascading style sheet (CSS) class for the widget. This class will be applied to the widget in the browser and the widget will get the corresponding styling. The class should be a class from the theme that is used in the project. It overrules the default styling of the widget.

{{% alert type="warning" %}}

Note that the styling is applied in the following order:

1.  Default styling defined by the theme the project uses.
2.  The 'Class' property of the widget.
3.  The 'Style' property of the widget.

{{% /alert %}}

### Style

The style property allows you to specify additional CSS styling. If a class is also specified, this styling is applied _after_ the class.

{{% alert type="info" %}}

background-color:blue;
This will result in a blue background

{{% /alert %}}

## Data Source Properties

### Attribute (path)

The attribute (path) property specifies the attribute's value that will be displayed in this column. It can be an attribute of the grid entity, or it can be an attribute of an associated entity, in which case we speak of an attribute path. The path can follow multiple associations of type reference, and at the end (optionally) one of type reference set. If you show a reference set in a column the values will be separated by a comma.

## Formatting Properties

### Enumeration format (only for attributes of type Enumeration)

A column connected to an attribute of type enumeration can show its contexts as text (default) or as image.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Text</td><td class="confluenceTd">Show the caption text of the enumeration.</td></tr><tr><td class="confluenceTd">Image</td><td class="confluenceTd">Show the image of the enumeration value.</td></tr></tbody></table>

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

<table><thead><tr><th class="confluenceTh">Symbol</th><th class="confluenceTh">No.</th><th class="confluenceTh">Example</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">G</td><td class="confluenceTd">1</td><td class="confluenceTd">AD</td><td class="confluenceTd">Era</td></tr><tr><td class="confluenceTd">y</td><td class="confluenceTd">1..n</td><td class="confluenceTd">2010</td><td class="confluenceTd">Year</td></tr><tr><td class="confluenceTd">M</td><td class="confluenceTd">1..2</td><td class="confluenceTd">09</td><td class="confluenceTd">Month</td></tr><tr><td class="confluenceTd">M</td><td class="confluenceTd">3</td><td class="confluenceTd">Sept</td></tr><tr><td class="confluenceTd">M</td><td class="confluenceTd">4</td><td class="confluenceTd">September</td></tr><tr><td class="confluenceTd">w</td><td class="confluenceTd">1..2</td><td class="confluenceTd">27</td><td class="confluenceTd">Week of Year</td></tr><tr><td class="confluenceTd">D</td><td class="confluenceTd">1..3</td><td class="confluenceTd">93</td><td class="confluenceTd">Day of Year</td></tr><tr><td class="confluenceTd">a</td><td class="confluenceTd">1</td><td class="confluenceTd">AM</td><td class="confluenceTd">AM or PM</td></tr><tr><td class="confluenceTd">h</td><td class="confluenceTd">1..2</td><td class="confluenceTd">11</td><td class="confluenceTd">Hour (1-12)</td></tr><tr><td class="confluenceTd">H</td><td class="confluenceTd">1..2</td><td class="confluenceTd">13</td><td class="confluenceTd">Hour (0-23)</td></tr><tr><td class="confluenceTd">k</td><td class="confluenceTd">1..2</td><td class="confluenceTd">10</td><td class="confluenceTd">Hour (1-24)</td></tr><tr><td class="confluenceTd">K</td><td class="confluenceTd">1..2</td><td class="confluenceTd">0</td><td class="confluenceTd">Hour (0-11)</td></tr><tr><td class="confluenceTd">m</td><td class="confluenceTd">1..2</td><td class="confluenceTd">59</td><td class="confluenceTd">Minute, use one or two for zero padding</td></tr><tr><td class="confluenceTd">s</td><td class="confluenceTd">1..2</td><td class="confluenceTd">12</td><td class="confluenceTd">Second, use one or two for zero padding</td></tr></tbody></table>{{% alert type="info" %}}
<table><thead><tr><th class="confluenceTh">Format</th><th class="confluenceTh">Example output</th></tr></thead><tbody><tr><td class="confluenceTd"><code>EEEE d MMMM yyy G, h:mm a ss's</code></td><td class="confluenceTd">Tuesday 29 March 2011 AD, 1:37 PM 48s</td></tr><tr><td class="confluenceTd"><code>h:mm a</code></td><td class="confluenceTd">1:37 PM</td></tr><tr><td class="confluenceTd"><code>yyy D KK:mm</code></td><td class="confluenceTd">2011 88 01:26</td></tr><tr><td class="confluenceTd"><code>EEEE MMMM d yyy</code></td><td class="confluenceTd">Tuesday March 29 2011</td></tr><tr><td class="confluenceTd"><code>EEE, MMM d, ''yy</code></td><td class="confluenceTd">Wed, Jul 4, '01</td></tr></tbody></table>
{{% /alert %}}

## General Properties

### Caption

The caption of a column is the text that appears as a header above the rows. This is a translatable text. See [Translatable Texts](translatable-texts).

### Editable

The editable property indicates whether the values of the column will be editable in-line, i.e. without opening a page with a data view. In-line editing allows the data grid to behave like you would expect from a spreadsheet application.

### Aggregate function

The values in a column can be aggregated in several ways. The aggregate function determines the way in which the values are aggregated. The aggregate will be shown at the bottom of the column that precedes by the aggregate caption (see below).

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">None</td><td class="confluenceTd">Do not aggregate the values in the column.</td></tr><tr><td class="confluenceTd">Average</td><td class="confluenceTd">Show the average of the values.</td></tr><tr><td class="confluenceTd">Minimum</td><td class="confluenceTd">Show the smallest value.</td></tr><tr><td class="confluenceTd">Maximum</td><td class="confluenceTd">Show the largest value.</td></tr><tr><td class="confluenceTd">Sum</td><td class="confluenceTd">Show the sum of the values.</td></tr><tr><td class="confluenceTd">Count</td><td class="confluenceTd">Show the count of the values.</td></tr></tbody></table>{{% alert type="warning" %}}

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
