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
* **Caption** – the text value to be displayed in the button
    * Configurable when the **Item type** is **Button**
* **Visible** – a Boolean expression indicating whether the item is visible or not
    * Default: **true**
    * Configurable when the **Item type** is **Button**
* **On click action** – executes an action when the button is activated through mouse or keyboard.
    * Configurable when the **Item type** is **Button**
* **Style** – sets the button's brand style: **Default**, **Inverse**, **Primary**, **Info**, **Success**, **Warning**, or **Danger**
    * Default: **Default**
    * Configurable when the **Item type** is **Button**
    * Any style other than **Default** adds the `popupmenu-basic-item-[style]` class to the item, for example `popupmenu-basic-item-primary`

Other main properties of the widget are as follows:

* **The area to open or close the menu.** – the widgets that toggle the menu (required)
* **Open on** – determines whether hovering or clicking the trigger widgets displays the menu
    * Default: **Click**
* **Close on** – determines when an open menu closes
    * When **Open on** is **Click**, the options are **Click anywhere** (default), which closes the menu on a click anywhere on the page, and **Click outside**, which closes the menu only on a click outside the menu
    * When **Open on** is **Hover**, the options are **Hover leave** (default), which closes the menu when the pointer leaves it, and **Click outside**, which keeps the menu open until a click outside the menu
* **Menu position** – determines the location of a visible menu relative to the trigger area: **Left**, **Right**, **Top**, or **Bottom**
    * Default: **Bottom**
* **Clipping strategy** – determines the relative positioning of floating elements on the page. 
    * **Absolute** (default) - positions the floating element relative to its nearest positioned ancestor.
    * **Fixed** - positions the floating element relative to the viewport. It breaks the element out of any clipping ancestor.

### Advanced Options

If you want to use dynamic content, make sure to wrap the widget in a [data view](/refguide/data-view/) and set **Enable advanced options** to **Yes**. With advanced options enabled, the **Menu items** property contains custom items instead of buttons and dividers. Each custom item has the following properties:

* **Content** – the widgets to show as the menu item
* **Visible** – a Boolean expression indicating whether the item is visible or not
    * Default: **true**
* **On click action** – executes an action when the item is clicked

{{% alert color="info" %}}
To make sure the menu closes correctly after a click, do not place clickable widgets inside **Content**. Use the item's **On click action** instead.
{{% /alert %}}

## Styling

The widget styling is part of Atlas Core. For Pop-Up Menu version 4.0.0 and above, use Atlas Core version 3.15.0 or above (Studio Pro 10.6.0 and above) or version 3.12.5 or above (below Studio Pro 10.6.0) to keep the styling intact.

## Limitations

Current notable limitations are as follows:

* Menu items are not hidden based on user access to actions set in an **On click action**. For example, if a user does not have access to a microflow assigned to a menu item, the item will still be visible, but clicking it will have no effect.
