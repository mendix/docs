---
title: "Scroll Container Region"
parent: "scroll-container"
---


A scroll container region is part of a [Scroll Container](scroll-container), and defines a content area.

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

## General Properties

### Width (only for left and right region)

Whether the width value of the region is defined in pixels or as a percentage of its parent's width.

### Width value (only for left and right region)

The width of the region, either in pixels or a percentage, depending on the value of the width property.

### Height (only for top and bottom region)

Whether the height value of the region is defined in pixels or as a percentage of its parent's height.

### Height value (only for top and bottom region)

The height of the region, either in pixels or a percentage, depending on the value of the height property.
