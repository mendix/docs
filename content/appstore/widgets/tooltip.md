---
title: "Tooltip"
category: "Widgets"
description: "Describes the Tooltip widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "tooltip", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

You can use the [Tooltip](https://marketplace.mendix.com/link/component/) widget to add tooltip texts to any widget available in Mendix.

### 1.1 Trigger

When placing the new Tooltip widget onto a page, use the composable region to place the content which will trigger the tooltip. You can freely model and combine widgets per your use case.

## 2 Configuration

Several options can be defined in the Tooltip widget. For more information, see the sections below.

### 2.1 Render Method

For the sake of simplicity, there are two methods for creating a tooltip:

* **Text** (default) – this mode lets you can enter text with or without parameters to quickly implement a
  tooltip in your app
* **Custom** – enable this mode to freely design what will be shown in the tooltip such as the text, images, and
  widgets

### 2.2 Tooltip Position

You can define how to position the tooltip in relation to the trigger element. 

**Tooltip Position** options are as follows:

* Top
* Left
* Bottom
* Right

### 2.3 Arrow Position

With the new Tooltip widget you also can define how to position the tooltip arrow in relation to the tooltip. The arrow
is the connection between the trigger element and the tooltip content. 

**Arrow Position** options are as follows:

* Start
* Center
* End

### 2.4 Open On

This option defines how the tooltip will be triggered. 

**Open on** options are as follows:

* **Click** – triggered when the user clicks on the trigger content
* **Hover** – triggered when the user hovers the mouse over it
* **Hover and focus** – triggered in both cases described above

{{% alert type="warning" %}}
On mobile devices the **Hover** option will be triggered on touch.
{{% /alert %}}
