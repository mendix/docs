---
title: "Menu Item"
space: "Reference Guide 6"
parent: "Menu"
---


[Menus](Menu) are composed of menu items. Menu items can contain other menu items within certain limits. Menu bars can have two levels, the navigation tree three levels and the simple menu bar only one.

## General Properties

### Caption

The caption is the text that will appear in the [menu widget](Menu+Widgets). This is a translatable text. See [Translatable Texts](Translatable+Texts).

### Icon

The glyph icon or image will appear next to or above the caption in the [menu widget](Menu+Widgets).

### Target

The target of the menu item is the page or microflow that will be opened when the item is clicked. A menu item that has subitems cannot have a target itself.

<div class="alert alert-success">{% markdown %}

You can open a page that contains a data view from a menu item by setting as target a microflow that first retrieves an object for the data view and then opens the page.

{% endmarkdown %}</div>
