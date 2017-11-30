---
title: "Navigation Item"
parent: "navigation"
---
Each menu, menu item and item in the navigation tree is a navigation item. Navigation items can contain other navigation items within certain limits. Menus can have menu items (2 levels) and the navigation tree can have three levels.

## Appearance Properties

### Caption

The caption is the text that will apear in the menu or the navigation tree. This is a translatable text. See [Translatable Texts](translatable-texts).

### Image

The image will appear before the caption in the menu or navigation tree. Note that images of menus will not be shown.

## Behavior Properties

### Target

The target of the navigation item is the form or microflow that will be opened when the item is clicked.

{{% alert type="success" %}}

You can open a form that contains a data view from a navigation item by setting as target a microflow that first retrieves an object for the data view and then opens the form.

{{% /alert %}}
