---
title: "Horizontal Split Pane"
parent: "container-widgets"
---


The horizontal split pane is deprecated in version 5.18.0 in favor of the more powerful [Scroll Container](scroll-container).

A horizontal split pane creates a region that is split in two by a horizontal divider. In the client the divider can be dragged up and down by the end user.

{{% alert type="info" %}}

![](attachments/819203/918038.png)
An empty horizontal split pane.

{{% /alert %}}

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

### Splitter position

This property determines the initial position of the dividing line in percentages. The default value of 50 will place the line exactly halfway the split pane.

_Default value:_ 50

### Animated resize

This property indicates whether re-sizing, by dragging the divider, is visualized in real time.

_Default value:_ False

### Height

The height property determines the height of the split pane. A height of 0 will set the pane's height to the default defined in the theme.

_Default value:_ 0
