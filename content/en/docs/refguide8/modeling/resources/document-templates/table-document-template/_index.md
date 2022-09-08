---
title: "Table (Document Template)"
url: /refguide8/table-document-template/
aliases:
    - /refguide8/table-(document-template).html
    - /refguide8/Table+(document+template.html
    - /refguide8/table-(document-template)
    - /refguide8/Table+(document+template
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/table-document-template.pdf).
{{% /alert %}}

## 1 Introduction

Tables can be used to change the layout of the form. They contain a number of rows and columns and the intersection of the two is called a cell. Each cell can contain widgets. Cells can be merged horizontally and vertically to allow for asymmetric layouts.

Tables can be used both inside and outside the data view or templategrid widgets.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/918134.png" >}}

This table has four rows and three columns. The last row contains a data view with another table.

{{% /alert %}}

## 2 Components

### 2.1 Column

A column in a table.

### 2.2 Row

A row in a table. See [Row (document template)](/refguide8/row-document-template/).

## 3 Appearance Properties

### 3.1 Weights

The column weights are percentages separated by semi-colons that determine the widths of the columns. The weights have to add up to 100\. An alternative way of changing the widths of columns is by dragging the separating line between columns.

{{% alert color="info" %}}

In the screenshot above, the column weights of the enclosing table are `25;25;50`.

{{% /alert %}}

### 3.2 Cell Spacing

Cell spacing specifies the space in between cells.

### 3.3 Cell Padding

Cell padding specifies the space between the content of the cell and the cell wall.

### 3.4 Style

For details, see [Style](/refguide8/style/).

## 4 Common Properties

{{% snippet file="/static/_includes/refguide8/name-property.md" %}}
