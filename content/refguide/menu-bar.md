---
title: "Menu Bar"
parent: "menu-widgets"
menu_order: 1
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}The menu bar widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

A menu bar shows menu items of a [navigation profile](navigation#profiles) or in a [menu](menu) document in the form of a horizontal bar with items. These items are determined by the [Menu source](#menu-source) and are either configured in the [Navigation](navigation) or a [Menu](menu).

Menu bars can go two levels deep, that means menu items can have sub-items. For more information on menu items and their properties, see [Menu](menu).

![Menu Bar](attachments/menu-widgets/menu-bar.png)

## 2 Properties

An example of menu bar properties is represented in the image below:

{{% image_container width="300" %}}![](attachments/menu-widgets/menu-bar-properties.png)
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

The items that are shown in the menu widget are determined by the **Menu source**. Possible menu sources are described in the table below:

| Value              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Project navigation  *(default)* | The menu items are taken from one of profiles defined in the [Navigation](navigation#profiles). |
| Menu document      | The menu items are taken from a [menu](menu) document.       |

#### 2.3.2 Profile 

Only available when the [menu source](#menu-source) is set to **Project navigation**. The **Profile** property specifies what [navigation profile](navigation#profiles) is used for the widget. 

Default: *Responsive*

#### 2.3.3 Menu 

Only available when the [menu source](#menu-source) is set to **Menu document**. The **Menu** property specifies what [menu](menu) document is used for the widget.

## 3 Read More

* [Page](page)
* [Menu Widgets](menu-widgets)
* [Properties Common in the Page Editor](common-widget-properties)
