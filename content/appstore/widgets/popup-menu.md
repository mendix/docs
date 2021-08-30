---
title: "Pop-Up Menu"
category: "Widgets"
description: "Describes the configuration and usage of the Pop-Up Menu widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "popup", "pop-up", "popup menu", "pop-up menu", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Pop-Up Menu](https://marketplace.mendix.com/link/component/115826/) widget shows a floating menu with items. The widget allows users to create their own items in "custom" mode.

### 1.1 Features

* Allows you to configure widget(s) that trigger the menu visibility.
* Allows you to change the menu's relative position to the trigger widget(s).
* Shows the menu when hovering or clicking the trigger widget(s).
* Allows you to create textual or custom menu items with an on click action.
* Allows for additional styling customizations through Atlas UI.

## 2 Configuration

Drag and drop the widget onto a page. Place one or more widgets inside the widget's trigger area to appoint which widgets trigger the menu. After that, use the configuration properties part of the **General** tab:

The **Menu items** property allows to configure actions and dividers that are part of the menu. Click **New** to create a new item. On the **Edit Menu Items Item** dialog box, configure the tabs and properties described below.

The **General** tab in the **Edit Menu Items Item** dialog box has the following properties:

* **Item type** (configurable when **Custom visualization** is set to **Yes**; default: **Button** ) – Determines if the menu item is an action button or a divider for buttons.
* **Text** (configurable when the **Item type** is **Button**) – The text value to be displayed in the button.
* **On click action** (configurable when the **Item type** is **Button**) – Executes an action when the button is activated through mouse or keyboard.
* **Style** (configurable when the **Item type** is **Button**; default: **Default**) – Sets the button's brand style.

Other main properties of the widget are:
* **Open on** (default: **Click** ) – Determines whether hovering or clicking the trigger widget(s) displays the menu.
* **Menu position** (default: **Bottom** ) – Determines the location of a visible menu relative to the trigger area with widgets.
* **Custom visualization** (default: **No** ) – Determines whether menu items can be composed of text or widgets. Note that the on click action should still be configured on the menu items and not internal widgets.

If you want to use dynamic content, make sure to wrap the widget in a [data view](/refguide/data-view) and set **Custom visualization** to **Yes**.
