---
title: "Table cell"
parent: "table"
---


Each section of a table row or column is called a cell. Cells can contain a wide variety of widgets.

## Common properties

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

## General properties

### Render mode

The render mode of a table cell determines what the table cell will look like.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Header</td><td class="confluenceTd">The text is bold and aligned to the left.</td></tr><tr><td class="confluenceTd">Default</td><td class="confluenceTd">All text in the cell is aligned to the left.</td></tr><tr><td class="confluenceTd">Title</td><td class="confluenceTd">All text in the cell is aligned to the left.</td></tr></tbody></table>

### Cell type

Indicates the type of the cell. Two types are supported:

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Normal</td><td class="confluenceTd">Normal cell containing data (&lt;td&gt;).</td></tr><tr><td class="confluenceTd">Header</td><td class="confluenceTd">Header cell containing captions (&lt;th&gt;).</td></tr></tbody></table>

_Default value:_ Normal
