---
title: "Table"
parent: "container-widgets"
menu_order: 60
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert type="warning" %}}The table widget is not supported on native mobile pages.
{{% /alert %}}

Tables can be used to lend structure to a page. They contain a number of [rows](table-row) and columns, the intersection of which is called a [cell](table-cell). Each cell can contain widgets.

{{% alert type="info" %}}
![](attachments/pages/table.png)

An example of how you can create a structured page with a table.
{{% /alert %}}

Cells can be merged horizontally and vertically to allow for asymmetric lay-outs. To merge cells the cell you wish to merge to must be empty. A merge can then be initiated either in a cell's context menu or by clicking the merge button that will automatically appear if you select an eligible cell.

{{% alert type="info" %}}
![](attachments/pages/table-merge.png)

The merge button.
{{% /alert %}}

Tables can be selected by clicking the white square in the top-left corner.

Tables allow for a number of keyboard interactions. Examples include navigating between rows and columns with the cursor keys and copy-pasting rows and cells.

## 2 Common Properties

{{% snippet file="refguide/name+property.md" %}}

{{% snippet file="refguide/class+property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

## 3 General Properties

### 3.1 Width Unit

The width unit specifies the unit of the specified column widths (see property 'Column Widths' below). There are two possible values for the unit:

| Value | Description |
| --- | --- |
| Percentage | Column widths are expressed as percentages of the available width. When resizing, columns will become wider/narrower while keeping the same relative widths. |
| Pixels | Column widths are expressed as pixels. Optionally, some columns can have width 'auto' and those columns evenly divide the rest of the space. When resizing, the pixel width columns will keep the same size; auto columns will become wider/narrower. |

*Default value*: Percentage

### 3.2 Column Widths

The column widths property describes the widths of each of the columns as a list of numbers separated by semi-colons. The unit (see above) determines what these numbers mean: percentages or pixels. In the case of pixels, 'auto' is also a valid value for the width of a column. Auto columns evenly divide space that remains after giving the pixel width columns their desired width.

Examples:

| Widths | Unit | Description |
| --- | --- | --- |
| 30;70 | Percentage | Two columns of which the first is 30% and the second is 70% |
| 20;200;auto | Pixels | Three columns of which the first is 20 pixels wide, the second is 200 pixels and the last one is 'auto' which means that it will take up the rest of the space. |

## 4 Visibility Properties

{{% snippet file="refguide/Visibility+Property.md" %}}

{{% snippet file="refguide/Visibility+Property+With+Module+Roles+Simple.md" %}}
