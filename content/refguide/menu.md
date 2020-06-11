---
title: "Menu"
parent: "page-resources"
menu_order: 50
tags: ["studio pro", "menu", "menu item", "page resource"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
#The anchor <menu-item> below is mapped, so it should not be removed or changed.
---

## 1 Introduction

A menu document defines a navigation menu that can be used by a [menu widget](menu-widgets). Typically the main menus for your application are defined in device types, while you use menu documents for auxiliary menus, e.g. a side bar.

A menu consists of a list of menu items, which optionally contain sub-items. Depending on the widget a number of levels are allowed.

{{% alert type="info" %}}

If [security](project-security) is enabled, the menu will only show items that the user has access to.

{{% /alert %}}

## 2 Menu Item {#menu-item}

Menus are composed of menu items. Menu items can contain a number sub-items. Menu bars can go two levels deep, the navigation tree – three levels, and the simple menu bar cannot have any sub-items.

### 2.1 Menu Item Properties 

A menu item or a sub-item has the following general properties:

* Caption – the caption is the text that will appear in the [menu widget](menu-widgets). Caption is a translatable text. (For more information, see [Language Menu](translatable-texts).)

* Icon – you can select a glyphicon (a character in a special font that stays sharp while scaling) or an image that will appear next to or above the caption in the [menu widget](menu-widgets)

* Target –  the target of a menu item is a page or a microflow that will be opened when the item is clicked. A menu item that has sub-items cannot have a target.

  {{% alert type="info" %}}To open a page with a data view on it from a menu item, set a microflow that first retrieves an object for the data view and then opens the page as a target.

  {{% /alert %}}

## 3 Read More

* [Pages](pages)
* [Menu Widgets](menu-widgets)

