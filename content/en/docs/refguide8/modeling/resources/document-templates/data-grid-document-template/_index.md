---
title: "Data Grid (Document Template)"
url: /refguide8/data-grid-document-template/
tags: ["studio pro"]
aliases:
    - /refguide8/Data+Grid+(document+template).html
    - /refguide8/data-grid-(document-template).html
    - /refguide8/Data+Grid+(document+template)
    - /refguide8/data-grid-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/data-grid-document-template.pdf).
{{% /alert %}}

## 1 Introduction

The data grid shows a list of objects in a grid. For example, a data grid can show all the orders a customer has placed.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide8/modeling/resources/document-templates/data-grid-document-template/918138.png" >}}

A data grid showing a list of orders with a description and the referenced customer name.

{{% /alert %}}

## 2 Components

### 2.1 Columns

See [Columns (document template)](/refguide8/columns-document-template/).

### 2.2 Sort Bar

See [Sort Bar](/refguide8/sort-bar/).

## 3 Appearance Properties

### 3.1 Column Weights

The column weights are percentages separated by semi-colons that determine the widths of the columns. The weights have to add up to 100\. An alternative way of changing the widths of columns is by dragging the separating line between columns.

{{% alert color="info" %}}
In the screenshot above the column weights are 50;25;25.
{{% /alert %}}

### 3.2 Cell Spacing

Cell spacing specifies the space in between cells

### 3.3 Cell Padding

Cell padding specifies the space between the content of the cell and the cell wall

### 3.4 Enable Striping

With striping enabled you can set the properties of even and uneven data grid rows individually. This way you can create a striping effect by varying color for the 2 different row styles.

### 3.5 Style

See [Style](/refguide8/style/)

## 4 Common Properties

### 4.1 Name

The internal name of the widget. You can use this to give sensible names to widgets. The name property also appears in the generated HTML: the widget DOM element automatically includes the class '`mx-name-{NAME}`', which can be useful for [Selenium testing](/howto8/integration/selenium-support/).

## 5 Data Source Properties

The data source properties determine which objects will be shown in the data grid. The list of objects in the data grid is constrained by the following mechanisms:

1.  For top-level data grids, the objects passed in the microflow calling the document export action are shown.
2.  For nested data grids, if an entity path is used, only the objects reachable by following the path from the containing object are shown.
3.  For nested data grids, if a microflow is used, the objects returned by the microflow are shown.

### 5.1 Entity (Path)

The entity (path) property specifies which entity instances will be shown in the data grid. A top-level data grid is always connected to an entity. A nested data grid can either be connected to an entity or to an entity path starting in the entity of the containing data view. The entity path can follow associations irrespective of type and ownership.

### 5.2 Microflow

When a nested data grid is connected to a template, a microflow is needed to retrieve the data. The input parameter of these microflows is always the object of the containing data view and the output is a list of objects of the type of the nested data grid.
