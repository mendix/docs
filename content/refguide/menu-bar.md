---
title: "Menu Bar"
parent: "menu-widgets"
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}The menu bar widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

The menu bar widget shows a configured menu in the form of a horizontal bar with items. Menu bars can go two levels deep, that means menu items can have sub-items. For more information on menu items and their properties, see [Menu](menu).

![Menu Bar](attachments/menu-widgets/menu-bar.png)

## 2 Properties

An example of menu bar properties is represented in the image below:

{{% image_container width="350" %}}![](attachments/menu-widgets/menu-bar-properties.png)
{{% /image_container %}}

Menu bar properties consist of the following sections:

* [Common](#common)
* [Design properties](#design)
* [General](#general)

### 2.1 Common Section {#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 2.2 Design Properties Section {#design}

{{% snippet file="refguide/design-section-link.md" %}}

### 2.3 General Section {#general}

#### 2.3.1 Menu Source {#menu-source}

The items that are shown in the menu widget are determined by the menu source. A menu widget is either filled from a menu configured in the [Navigation](navigation) document or a [Menu](menu) document.

| Value              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Project navigation | The menu items are taken from one of the menus defined in the [Navigation](navigation) document. Use this for the main menu of your application. |
| Menu document      | The menu items are taken from a [Menu](menu) document. Use menu documents for auxiliary menus. |

_Default value:_ Project navigation

#### 2.3.2 Profile 

Only available when the [menu source](#menu-source) is set to **Project navigation**. The **Profile** property specifies what [navigation profile](navigation#profiles) is used for the widget. 

_Default value:_ Responsive

#### 2.3.3 Menu 

Only available when the [menu source](#menu-source) is set to **Menu document**. The **Menu** property specifies what [Menu](menu) document is used for the widget.

## 3 Read More

* [Page](page)
* [Menu Widgets](menu-widgets)
* [Properties Common for Widgets](common-widget-properties)