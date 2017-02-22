---
title: "Table"
space: "Mendix 7 Reference Guide"
parent: "container-widgets"
---


Tables can be used to lend structure to a page. They contain a number of [rows](table-row) and columns, the intersection of which is called a [cell](table-cell). Each cell can contain widgets.

<div class="alert alert-info">{% markdown %}

![](attachments/16713853/16843973.jpg)
An example of how you can create a structured page with a table.

{% endmarkdown %}</div>

Cells can be merged horizontally and vertically to allow for asymmetric lay-outs. To merge cells the cell you wish to merge to must be empty. A merge can then be initiated either in a cell's context menu or by clicking the merge button that will automatically appear if you select an eligible cell.

<div class="alert alert-info">{% markdown %}

![](attachments/16713853/16843971.jpg)
The merge button

{% endmarkdown %}</div>

Tables can be selected by clicking the white square in the top-left corner.

Tables allow for a number of keyboard interactions. Examples include navigating between rows and columns with the cursor keys and copy(ctrl+c)/pasting(ctrl+v) rows and cells.

## Common properties

{% snippet Name+Property.md %}

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

## General properties

{% snippet Column+Width+Properties.md %}

<div class="alert alert-info">{% markdown %}

![](attachments/16713853/16843970.png)
A table with widths 30% and 70%

{% endmarkdown %}</div>

## Visibility properties

{% snippet Visibility+Property+With+Module+Roles+Simple.md %}
