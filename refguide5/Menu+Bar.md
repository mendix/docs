---
title: "Menu Bar"
category: "refguide5"
space: "Reference Guide 5"
---


The menu bar widget shows a configured menu in the form of a horizontal bar with items. Items can have subitems in which case the main item can be expanded. Subitems cannot have subitems again. In the end a [Menu Item](Menu+Item) points to either the page or the microflow that will opened or started when the item is clicked.

<div class="alert alert-info">{% markdown %}

![](attachments/4522346/4751447.png)

{% endmarkdown %}</div>

## Common Properties

### Name

The internal name of the widget. You can use this to give sensible names to widgets. The name property also appears in the generated HTML: the widget DOM element automatically includes the class '`mx-name-{NAME}`', which can be useful for [Selenium testing](/howto50/Selenium+Support).

### Class

The class property allows you to specify a cascading style sheet (CSS) class for the widget. This class will be applied to the widget in the browser and the widget will get the corresponding styling. The class should be a class from the theme that is used in the project. It overrules the default styling of the widget.

<div class="alert alert-warning">{% markdown %}

Note that the styling is applied in the following order:

1.  Default styling defined by the theme the project uses.
2.  The 'Class' property of the widget.
3.  The 'Style' property of the widget.

{% endmarkdown %}</div>

### Style

The style property allows you to specify additional CSS styling. If a class is also specified, this styling is applied _after_ the class.

<div class="alert alert-info">{% markdown %}

background-color:blue;
This will result in a blue background

{% endmarkdown %}</div>

## General Properties

### Menu source

The items that are shown in the menu widget are determined by the menu source. A menu widget is either filled from a menu configured in the [Navigation](Navigation) document or a [Menu](Menu) document.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Project Navigation</td><td class="confluenceTd">The menu items are taken from one of the menus defined in the <a href="Navigation">Navigation</a> document. Use this for the main menu of your application.</td></tr><tr><td class="confluenceTd">Menu Document</td><td class="confluenceTd">The menu items are taken from a <a href="Menu">Menu</a> document. Use menu documents for auxiliary menus.</td></tr></tbody></table>

_Default value:_ Project navigation

### Menu (only for menu source 'Project navigation')

If the menu source is 'Project navigation', this property specify which of the three menus that can be configured in the [Navigation](Navigation) document will be used to fill the menu widget.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Desktop</td><td class="confluenceTd">Use the 'Desktop' menu</td></tr><tr><td class="confluenceTd">Tablet</td><td class="confluenceTd">Use the 'Tablet' menu</td></tr><tr><td class="confluenceTd">Phone</td><td class="confluenceTd">Use the 'Phone' menu</td></tr></tbody></table>

_Default value:_ Desktop

### Menu document (only for menu source 'Menu document')

If the menu source is 'Menu document', you can select a [Menu](Menu) document that will be used to fill the menu widget.