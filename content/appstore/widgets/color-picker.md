---
title: "Color Picker"
category: "Widgets"
description: "Describes the configuration and usage of the Color Picker widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "color picker", "react", "platform support"]
draft: true
---

## 1 Introduction

The [Color Picker](https://appstore.home.mendix.com/link/app/107044/) enables selecting and adjusting a color value.

### 1.1 Features 

* Render using the button, input box, and inline modes
* Execute an action after a color change via a microflow or nanoflow
* Add a label and label width
* Support the hex, RGB, or RGBA color formats

Supported color pickers are based on the [React Color](http://casesandberg.github.io/react-color/) library:

* Sketch
* Chrome
* Block
* Github
* Twitter
* Circle
* Hue
* Slider
* Compact
* Material
* Swatches

### 1.2 Demo

For a demo app project that has been deployed with this widget, see [here](https://colorpicker.mxapps.io).

## 2 Configuration

To configure this widget, follow these steps:

1. Create an entity with a string attribute for storing the color value.
2. Place the widget in a data form within the context of the entity.
3. Select the attribtue for the color.
4. Optionally, change the rendering and appearance properties to your need.
