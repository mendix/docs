---
title: "Menu Item"
url: /refguide7/menu-item/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


[Menus](/refguide7/menu/) are composed of menu items. Menu items can contain other menu items within certain limits. Menu bars can have two levels, the navigation tree three levels and the simple menu bar only one.

## General Properties

### Caption

The caption is the text that will appear in the [menu widget](/refguide7/menu-widgets/). This is a translatable text. See [Translatable Texts](/refguide7/translatable-texts/).

### Icon

The glyph icon or image will appear next to or above the caption in the [menu widget](/refguide7/menu-widgets/).

### Target

The target of the menu item is the page or microflow that will be opened when the item is clicked. A menu item that has subitems cannot have a target itself.

{{% alert color="success" %}}

You can open a page that contains a data view from a menu item by setting as target a microflow that first retrieves an object for the data view and then opens the page.

{{% /alert %}}
