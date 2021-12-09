---
title: "Tooltip"
category: "Widgets"
description: "Describes the Tooltip widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "tooltip", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

[//]: # (TODO: Add real marketplace link after publish.)
You can use the [Tooltip](https://marketplace.mendix.com/link/component/) widget to add tooltip texts to any widget
available in Mendix.

### 1.1 Trigger

When placing the new Tooltip widget onto a page a composable region will be available to place the content which will trigger the tooltip. You can freely model and combine widgets at your own choice.

## 2 Configuration

Several options can be defined in the Tooltip widget:

### 2.1 Render Method

For the sake of simplicity, there are two methods available to create a tooltip:

* **Text** – this is the default method in which you can enter a text with or without parameters to quickly implement a
  tooltip in your app.
* **Custom** – enable this mode to freely design what will be shown in the tooltip, such as the text, images, and
  widgets.

### 2.2 Tooltip Position

You can define how to position the tooltip in relation to the trigger element. The available options are:

- Top
- Left
- Bottom
- Right

### 2.3 Arrow Position

With the new Tooltip widget you also can define how to position the tooltip arrow in relation to the tooltip. The arrow
is the connection between the trigger element and the tooltip content. The available options are:

- Start
- Center
- End

### 2.4 Open on

This option defines how the tooltip will be triggered. It can be one of the following:

- Click: will be triggered when the user clicks on the trigger content; 
- Hover: will be triggered when the user hovers the mouse on it;
- Hover and focus: will be triggered in both previous cases.

{{% alert type="warning" %}}
On mobile devices the option “hover” will be triggered on touch.
{{% /alert %}}
