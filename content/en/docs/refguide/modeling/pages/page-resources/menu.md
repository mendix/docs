---
title: "Menu"
url: /refguide/menu/
weight: 50
tags: ["studio pro", "menu", "menu item", "page resource"]
aliases:
    - /refguide/menu-item.html
    - /refguide/menu-item
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
#The anchor <menu-item> below is mapped, so it should not be removed or changed.
---

## 1 Introduction

A menu document defines a navigation menu that can be used by a [menu widget](/refguide/menu-widgets/). Typically the main menus for your application are defined in device types, while you use menu documents for auxiliary menus, for example, a side bar.

A menu consists of a list of menu items, which optionally contain sub-items. Depending on the widget a number of levels are allowed.

{{% alert color="info" %}}

If [security](/refguide/app-security/) is enabled, the menu will only show items that the user has access to.

{{% /alert %}}

## 2 Menu Item {#menu-item}

Menus are composed of menu items. Menu items can contain a number sub-items. Menu bars can go two levels deep, the navigation tree – three levels, and the simple menu bar cannot have any sub-items.

### 2.1 Menu Item Properties 

A menu item or a sub-item has the following general properties:

* Caption – The caption is the text that will appear in the [menu widget](/refguide/menu-widgets/). Caption is a translatable text. (For more information, see [Language Menu](/refguide/translatable-texts/).)
* Icon – You can select a glyphicon (a character in a special font that stays sharp while scaling) or an image that will appear next to or above the caption in the [menu widget](/refguide/menu-widgets/).
* Alternative text - You can specify alternative text if a caption is not provided. This will allow screen readers to announce a description for an icon.
* On click – Action to be performed when the item is clicked. A menu item that has sub-items cannot have an on click event.

{{% alert color="info" %}}To open a page with a data view on it from a menu item, set a microflow that first retrieves an object for the data view and then opens the page as a target.{{% /alert %}}

## 3 Read More

* [Pages](/refguide/pages/)
* [Menus & Navigation](/refguide/menu-widgets/)

