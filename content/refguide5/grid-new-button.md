---
title: "Grid New Button"
parent: "control-bar"
---


The new button allows the end-user to create new objects in a grid or reference set selector.

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

## Data Source Properties

### Entity

This property determines of which entity this button should create an instance. If the entity that is connected to the grid or reference set selector has no specializations, the page builder will automatically set this property for you. Otherwise, you will have to select one of the specializations yourself.

{{% alert type="info" %}}

Let us say you have an entity Vehicle and two specializations, namely Bicycle and Car. In a grid on Vehicle you have to specify for the New button whether a Vehicle, a Bicycle or a Car will be created. You can even have three new buttons, one for each possibility.

{{% /alert %}}

## General Properties

### Caption

{{% alert type="info" %}}

Changed in Mendix 5.19: button captions are based on templates with parameters that will be replaced by attribute values.

{{% /alert %}}

The caption defines the text that will be shown. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera. Note that to use template parameters the widget must be placed in a context of an entity, e.g. inside a [data view](data-view) or [list view](list-view). The parameters will be replaced by the values of the attributes.

_Before 5.19:_

This property indicates what text will be shown on this widget or part of the widget. This is a translatable text. See [Translatable Texts](translatable-texts).

### Tooltip

{{% alert type="info" %}}

Added in Mendix 5.8.0.

{{% /alert %}}

The tooltip property determines the text you will see in the tooltip that appears when you hover over the button. The tooltip text is translatable. See [Translatable Texts](translatable-texts). If the tooltip is not specified, no tooltip will be shown when hovering over the button.

### Image

{{% alert type="info" %}}

Replaced by the property 'Icon' in Mendix 5.16.

{{% /alert %}}

This property indicates which image will be shown in front of the caption of the button.

### Icon

{{% alert type="info" %}}

Added in Mendix 5.16.

{{% /alert %}}

The icon property determines the icon that will be shown in front of the caption of the button. There are three options: no icon, a glyph icon or a (bitmap) image. Glyph icons come from the Bootstrap Halflings collection. The advantages of a glyph icon over a bitmap image are that glyphs are scalable, look sharp on high-resolution screens and their color can be changed by changing the font color. The advantage of an image icon is that it can have multiple colors.

### Button Style

{{% alert type="info" %}}

Added in Mendix 5.18.

{{% /alert %}}

This property applies a predefined styling to the button.

### Is default button

This property indicates whether this button is the default button of the grid or reference set selector. A grid or reference set selector can only have one default button. The default button is triggered when clicking or double clicking a row. Whether a click or a double click triggers it depends on the 'default button trigger' property of the [Data grid](data-grid), [Template grid](template-grid) or [Reference set selector](reference-set-selector).

{{% alert type="info" %}}

The default button is marked with a "(default)" suffix in the Modeler, so that you can easily spot it. In the screenshot below the Edit button is the default button and the Delete button has a button style 'Warning'.
![](attachments/4522312/14385317.png)

{{% /alert %}}

_Default value:_ False

### Edit location

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Inline at top</td><td class="confluenceTd">The new instance is added directly at the top of the grid or reference set selector and can be edited inline.</td></tr><tr><td class="confluenceTd">Inline at bottom</td><td class="confluenceTd">The new instance is added directly at the bottom of the grid or reference set selector and can be edited inline.</td></tr><tr><td class="confluenceTd">In a page</td><td class="confluenceTd">The new instance is added and can be edit in a page. The page in which this instance is being edited can be set with the page property</td></tr></tbody></table>

_Default value:_ In a page

### Page

This property is relevant if the edit location is set to 'In a page' and it indicates the page that is shown to the end-user when he or she clicks this button. The end-user can use this page to edit the newly created object before it is saved. This page should contain a data view connected to the same entity as this grid or reference set selector.

See [Opening Pages](opening-pages).

## Visibility Properties

{{% alert type="info" %}}
Conditional visibility settings were added in version 5.10.0.
{{% /alert %}}

### Visible

By default, whether or not an element is displayed in the browser is determined by how the page is designed and the user's roles within the application. However, the page can be configured to hide the element unless a certain condition is met.
