
---
title: "Accessibility Helper"
category: "Widgets"
description: "Describes the Accessibility Helper widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "accessibility helper", "a11y helper", "token", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Accessibility Helper](https://appstore.home.mendix.com/link/app/47784/) widget allows adding list of HTML properties to elements in the HTML page.carousel.

### 1.1 Features

* Target elements via CSS selectors for easy usage.
* Multiple CSS selectors are allowed.
* HTML attributes can be dynamic values.
* HTML attributes can be conditionally added or removed.

## 2 Usage

The widget acts like a container and alters the elements inside it. In order to change an elements HTML attributes do the following:

### 2.1 Drag-in the widget

Since Accessibility Helper is a containment widget it will try to change the widgets inside. Thus user must drag and drop the necessary widgets wants to change.

### 2.2 Specify the target selector

Target selector is a basic CSS selector and more information can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

### 2.2 Add new accessibility properties

Every HTML attribute consists of a "name" and a "value". User can add any attribute via filling the HTML attributes list. However following attribute names are not allowed since it will interfere with mendix's core mechanism: ["class", "style", "widgetid", "data-mendix-id"].

After selecting a "name" for the attribute, user can determine what kind of value the attribute will get via "Source Type" ("Text" or "Expression"). Text can be used for static value, Expression can be used for dynamic values. 

User may be able to select on which circumstances this HTML attribute must be set or not via "Condition".