---
title: "Layout grid"
parent: "container-widgets"
---


{{% alert type="info" %}}

Added in Mendix 5.18.0.

{{% /alert %}}

The layout grid is a widget that gives structure to your pages. A layout grid contains one or more rows and each row contains one to twelve columns. Each column has a weight, a number from 1 to 12, and the weights of the columns in a row must add up to 12\. In the browser the layout grid is implemented by the Bootstrap grid system. Reading the official Bootstrap [documentation on the grid system](http://getbootstrap.com#grid) can help you understand what you can build with this widget.

## ![](attachments/14090483/14385185.png)

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

## Components

### Rows

A layout grid contains one or more rows. Each row can be styled with the Class and Style properties. Rows can be made conditionally visible through the property called 'Visible'.

Each row in turn contains columns and the number of columns can differ per row.

### Columns

A row in a layout grid contains one or more columns. Each column can be styled with the Class and Style properties. Additionally, the Weight property determines how wide the column is. The weights of all columns in a row must add up to 12\. Examples of valid rows are:

*   one column with weight 12
*   two columns, both with weight 6
*   a column with weight 3 and a column with weight 9. 

There is rarely a use case for more than four columns in a row.

## Common Properties

### Name

The internal name of the widget. You can use this to give sensible names to widgets. The name property also appears in the generated HTML: the widget DOM element automatically includes the class '`mx-name-{NAME}`', which can be useful for [Selenium testing](/howto50/selenium-support).

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

## General Properties

### Width

This property determines the width of the layout grid. 

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Full width</td><td class="confluenceTd">The layout grid spans the full width of the available space and will stretch and shrink.</td></tr><tr><td class="confluenceTd">Fixed width</td><td class="confluenceTd">The layout grid has a fixed width but it is still responsive to viewport changes. Note that the width is not configurable in the modeler but is determined by Bootstrap.</td></tr></tbody></table>{{% alert type="warning" %}}

As the layout grid responds to the viewport width, and not to the width of its container, a fixed width layout grid should only be used on top-level.

{{% /alert %}}

## Visibility Properties

### Visible

By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met.
