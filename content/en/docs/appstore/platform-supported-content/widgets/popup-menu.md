---
title: "Pop-Up Menu"
url: /appstore/widgets/popup-menu/
description: "Describes the configuration and usage of the Pop-Up Menu widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Pop-Up Menu](https://marketplace.mendix.com/link/component/115826/) widget shows a floating menu with items. The widget allows users to create their own items in "custom" mode.

### Features

* Allows you to configure widgets that trigger the menu visibility
* Allows you to change the menu's relative position to the trigger widgets
* Shows the menu when hovering or clicking the trigger widgets
* Allows you to create textual or custom menu items with an on click action
* Allows for additional styling customizations through Atlas UI

## Configuration

Drag the widget onto a page. Place one or more widgets inside the Pop-Up Menu widget's trigger area to appoint which widgets trigger the menu. After that, use the configuration properties included in the **General** tab.

The **Menu items** property allows you to configure actions and dividers that are part of the menu. Click **New** to create a new item. On the **Edit Menu Items Item** dialog box, configure the tabs and properties described below.

The **General** tab in the **Edit Menu Items Item** dialog box has the following properties:

* **Item type** – determines if the menu item is an action button or a divider for buttons
    * Default: **Button**
    * Configurable when **Custom visualization** is set to **Yes**
* **Text** – the text value to be displayed in the button
    * Configurable when the **Item type** is **Button**
* **Visible** – a Boolean expression indicating whether the item is visible or not
    * Default: **true**
* **On click action** – executes an action when the button is activated through mouse or keyboard.
    * Configurable when the **Item type** is **Button**
* **Style** – sets the button's brand style
    * Default: **Default**
    * Configurable when the **Item type** is **Button**

Other main properties of the widget are as follows:

* **Open on** – determines whether hovering or clicking the trigger widgets displays the menu
    * Default: **Click**
* **Menu position** – determines the location of a visible menu relative to the trigger area
    * Default: **Bottom**
* **Custom visualization** – determines whether menu items can be composed of text or widgets
    * Default: **No**
    * Note that the on click action should still be configured on the menu items and not internal widgets

If you want to use dynamic content, make sure to wrap the widget in a [data view](/refguide/data-view/) and set **Custom visualization** to **Yes**.
