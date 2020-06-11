---
title: "Simple Menu Bar"
parent: "menu-widgets"
menu_order: 2
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}The simple menu bar widget is not supported on native mobile pages.{{% /alert %}}

## 1 Introduction

A simple menu bar shows menu items of a [navigation profile](navigation#profiles) or in a [menu](menu) document in the form of a horizontal or vertical bar. These items are determined by the [Menu source](#menu-source) and are either configured in the [Navigation](navigation) or a [Menu](menu).

Sub-items of menu items are not displayed by this widgets, that means the menu structure can only have one level. For more information on menu items and their properties, see [Menu](menu).

![Simple Menu Bar](attachments/menu-widgets/simple-menu-bar.png)

## 2 Properties

An example of a simple menu bar properties is represented in the image below:

{{% image_container width="300" %}}![Simple Menu Bar Properties](attachments/menu-widgets/simple-menu-bar-properties.png)
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
| Project navigation  *(default)* | The menu items are taken from one of the profiles defined in the [Navigation](navigation). |
| Menu document      | The menu items are taken from a [menu](menu) document.       |

#### 2.3.2 Profile 

Only available when the [Menu source](#menu-source) is set to **Project navigation**. The **Profile** property specifies what [Navigation profile](navigation#profiles) is used for the widget. 

Default: *Responsive*

#### 2.3.3 Menu 

Only available when the [Menu source](#menu-source) is set to **Menu document**. The **Menu** property specifies what [Menu](menu) document is used for the widget.

#### 2.3.4 Orientation

This property determines how the simple menu bar is laid out.

| Orientation | Description |
| --- | --- |
| Horizontal  *(default)* | The menu items are next to each other and the images are above the captions. |
| Vertical | The menu items are underneath each other and the images are next to the captions. |

## 3 Read More

* [Page](page)
* [Menu Widgets](menu-widgets)
* [Properties Common in the Page Editor](common-widget-properties)
