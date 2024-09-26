---
title: "Table (Document Template)"
url: /refguide9/table-document-template/
aliases:
    - /refguide9/table-(document-template).html
    - /refguide9/Table+(document+template.html
    - /refguide9/table-(document-template)
    - /refguide9/Table+(document+template
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Tables can be used to change the layout of the form. They contain a number of rows and columns and the intersection of the two is called a cell. Each cell can contain widgets. Cells can be merged horizontally and vertically to allow for asymmetric layouts.

Tables can be used both inside and outside the data view or templategrid widgets.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide9/modeling/resources/document-templates/918134.png" class="no-border" >}}

This table has four rows and three columns. The last row contains a data view with another table.

{{% /alert %}}

## Components

### Column

A column in a table.

### Row

A row in a table. See [Row (document template)](/refguide9/row-document-template/).

## Appearance Properties

### Weights

The column weights are percentages separated by semi-colons that determine the widths of the columns. The weights have to add up to 100\. An alternative way of changing the widths of columns is by dragging the separating line between columns.

{{% alert color="info" %}}

In the screenshot above, the column weights of the enclosing table are `25;25;50`.

{{% /alert %}}

### Cell Spacing

Cell spacing specifies the space in between cells.

### Cell Padding

Cell padding specifies the space between the content of the cell and the cell wall.

### Style

For details, see [Style](/refguide9/style/).

## Common Properties

{{% snippet file="/static/_includes/refguide9/name-property.md" %}}
