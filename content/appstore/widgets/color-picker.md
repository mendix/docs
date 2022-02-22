---
title: "Color Picker"
category: "Widgets"
description: "Describes the configuration and usage of the Color Picker widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "color picker", "react", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Color Picker](https://marketplace.mendix.com/link/component/107044/) enables selecting and adjusting a color value.

### 1.1 Features
* Render using the button, input box, and inline modes
* Execute an action after a color change using [Events](https://docs.mendix.com/studio/page-editor-widgets-events-section) section
* Add a label
* Choose when color picker should be editable
* Choose when it should be visible 
* Support the **hex**, **RGB**, or **RGBA** color formats

## 2 Usage

The widget requires a defined **Data source**.

## 3 Configuration

The following sections will describe the different available widget properties and how to configure the widget using them.

### 3.1 Data source tab

* **Data source** - the attribute containing a valid color

### 3.2 General

* **Display mode**
    * Default - **Button**
    * **Input**
    * **Inline**
* **Enable advanced options** - provides ability to choose
    * **Picker type** - select one of the available picker from [React Color](https://casesandberg.github.io/react-color/)
        * Block
        * Chrome
        * Circle
        * Compact
        * Github
        * Hue
        * Material
        * Sketch
        * Slider
        * Swatches
        * Twitter
    * **Color format** - support the hex, RGB, or RGBA color formats
    * **Default colors** - available only for Block, Sketch, Circle, Compact, Twitter
* **Invalid format message** - message shown when user provides a wrong input


### 3.3 Events

* **On change** – executes an action when the attribute value changes

## 4 Widgets Below Version 2.0.0

## 1 Introduction

The [Color Picker](https://marketplace.mendix.com/link/component/107044/) enables selecting and adjusting a color value.

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

## 2 Configuration

To configure this widget, follow these steps:

1. Create an entity with a string attribute for storing the color value.
2. Place the widget in a data form within the context of the entity.
3. Select the attribtue for the color.
4. Optionally, change the rendering and appearance properties to your need.
