---
title: "Badge"
url: /appstore/widgets/badge/
category: "Widgets"
description: "Describes the purpose, features, and configuration of the Badge widget which is available in the Mendix Marketplace."
tags: ["marketplace", "app store", "marketplace component", "app store component", "widget", "badge", "color label", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Badge](https://marketplace.mendix.com/link/component/50325/) widget shows a value inside a colored badge or label.

The widget does the following:

* Displays a value based on a configured text template
* Becomes a fully accessible button when an On click action is configured
* Offers brand styling with the **Style** design property

## 2 Configuration

To configure the Badge widget, do the following:

1. Place the widget in a data container like a Data view, List view, or Template grid widget.
1. Navigate to the **General** tab and configure the value to be displayed. The value may be configured empty as well.

Optionally, you can configure the widget further:

* Choose whether the badge should display itself like a badge or label by setting the **Type** configuration property
* Select an On click action to convert the badge into a button, which will execute this action when clicked on or activated with an <kbd>{Enter}</kbd> or <kbd>{Space}</kbd> key press
* Navigate to the **Appearance** tab and select a brand style with the **Style** design property to give the badge or label a suitable color

## 3 Widgets Below Version 2.0.0

Features:

* Attach an on-click microflow or nanoflow
* Set static data text when dynamic data is not specified

To configure the widget:

1. Place the widget in the context of an object that has a value attribute.
2. On the **General** tab, specifying the **Value attribute**  is optional. If this is not set, a static **Default value** should be specified.
