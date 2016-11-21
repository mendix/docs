---
title: "Table (document template)"
space: "Reference Guide 6"
parent: "document-templates"
---


Tables can be used to change the layout of the form. They contain a number of rows and columns and the intersection of the two is called a cell. Each cell can contain widgets. Cells can be merged horizontally and vertically to allow for asymmetric layouts.
Tables can be used both in- and outside the data view or templategrid widgets.

<div class="alert alert-info">{% markdown %}

![](attachments/819203/918134.png)]
A table with four rows and three columns. The last row containing a dataview with another table.

{% endmarkdown %}</div>

## Components

### Column

A column in a table.

### Row

A row in a table. See [Row (document template)](/refguide6/row-document-template).

## Appearance Properties

### Weights

The column weights are percentages separated by semi-colons that determine the widths of the columns. The weights have to add up to 100\. An alternative way of changing the widths of columns is by dragging the separating line between columns.

<div class="alert alert-info">{% markdown %}

In the screenshot above the column weights of the enclosing table are 25;25;50.

{% endmarkdown %}</div>

### Cell spacing

Cell spacing specifies the space in between cells.

### Cell padding

Cell padding specifies the space between the content of the cell and the cell wall.

### Style

See [Style](/refguide6/style)

## Common Properties

{% snippet Name+Property.md %}
