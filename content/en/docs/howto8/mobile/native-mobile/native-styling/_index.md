---
title: "Implement Native Mobile Styling"
url: /howto8/mobile/native-styling/
weight: 30
description: General information for native styling in Mendix.
tags: ["styling", "design", "native"]
---

## 1 Introduction

With Mendix 8, you can build native mobile apps with custom styling in Mendix Studio Pro. Styling native mobile apps uses JavaScript style sheets, which are new to Mendix Studio Pro. Consult the guidelines below for information on theme folder structure, classes, and design properties.

## 2 Theme Folder Structure

For each app, styling is stored in the **theme/styles** folder. From there styling is split into **native** and **web** folders. Both have the same structure. 

These folders have strict protocols:

* Users should only add or change styling in the **app** folder 
* The **app** folder has two files: *custom.js* and *custom-variables.js*—when changing the styling, always copy the variable you want to change from *native/core/variables.js*  to *native/app/custom-variables.js*
* The *custom-variables.js* file will overwrite the *variables.js* file—do not change anything in the **core** folder directly, as this makes updating Atlas more difficult
* Any variables you want to change or add should be put in *custom-variables.js* 
* Any classes you want to change or add should be put in *custom.js*

The **native/core/base** folder contains global helper classes. These classes are generic and can be put on all widgets. Some of them are also available as design properties in Mendix Studio Pro.

The **native/core/helpers** folder contains helper classes for widgets. Every widget has its own file which contains its design properties and some extra classes.

The **native/core/helpers/_helperfunctions** folder contains multiple helper functions. These functions can help you style more easily. For example, the `adjustFont` function receives a font and adjusts it to the screen size. This will make your font sizes responsive. For more information about these helper classes, see their descriptions in the code.

The **native/core/widgets** folder contains the default widget styling. Every widget has its own file which contains its default class name.

In **native/ui_resources** you will find resource package styling. Here you can find all styling related to building blocks, page templates and layouts.

## 3 Classes

Default class names—which are the class names set by Mendix Studio Pro—will always be named in Pascal case. All other classes will be in lowerCamelCase. This keeps changes to default widget styles clear.

## 4 Design Properties

Available in Mendix Studio and Mendix Studio Pro, design properties are an easier way to apply classes. Atlas already offers several useful design properties out of the box. You can see them by clicking on a widget and looking at the **Properties** panel. A design property can be either a drop-down menu or a toggle. A toggle will toggle one class, while a drop-down menu will apply a different class for each drop-down item. 

## 5 Read More

* [Mendix Atlas UI](/howto8/front-end/atlas-ui/)
* [Get Started with Native Mobile](/howto8/mobile/getting-started-with-native-mobile/)
