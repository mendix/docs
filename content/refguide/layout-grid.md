---
title: "Layout Grid"
parent: "container-widgets"
menu_order: 10
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}The layout grid widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

The layout grid is a widget that gives structure to your pages. A layout grid makes your page responsive, i.e. a layout grid has a built-in behavior to show how a page will look like on different devices. 

A layout grid contains one or more rows and each row contains one to twelve columns. Each column has a weight (a number from 1 to 12), and the weight of columns in a row must add up to 12. 

In a browser, the layout grid is implemented by the Bootstrap grid system. For more information on the Bootstrap grid system, see the [official Bootstrap documentation](http://getbootstrap.com/css/#grid).

## Automatic classes

The layout grid is exported as nested div elements. In addition to the classes you specify in the various Class properties, a number of classes are added automatically.

```
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6"> ... </div>
    <div class="col-md-6"> ... </div>
  </div>
  ...
</div> 
```

The outermost `div` represents the widget as a whole and gets the one of the following classes:

*   `container-fluid` when width is set to full width
*   `container` when width is set to fixed width

The second `div` represents a row and automatically gets the `row` class. The innermost `div` represents a column and automatically gets the weight class `col-md-<weight>`.

## 2 Components

### 2.1 Rows

A layout grid can contain one or more rows. 

Each row contains columns and the number of columns can differ per row.

### 2.2 Columns

A row in a layout grid contains one or more columns. Each column can be styled with the Class and Style properties. Additionally, the Weight property determines how wide the column is. The weights of all columns in a row must add up to 12\. Examples of valid rows are:

*   one column with weight 12
*   two columns, both with weight 6
*   a column with weight 3 and a column with weight 9. 

There is rarely a use case for more than four columns in a row.

![](attachments/pages/layout-grid.png)

## 3 Properties

### 3.1 Common Section

### 3.2 General Section

### Width

This property determines the width of the layout grid. 

| Value | Description |
| --- | --- |
| Full width | The layout grid spans the full width of the available space and will stretch and shrink. |
| Fixed width | The layout grid has a fixed width but it is still responsive to viewport changes. Note that the width is not configurable in Studio Pro but is determined by Bootstrap. |

{{% alert type="warning" %}}

As the layout grid responds to the viewport width, and not to the width of its container, a fixed width layout grid should only be used on top-level.

{{% /alert %}}

### 3.3 Visibility Section

## Read More

