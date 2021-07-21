---
title: "Slider"
category: "Widgets"
description: "Describes the configuration and usage of the Slider widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "slider", "bound", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Slider](https://marketplace.mendix.com/link/component/48786/) widget can be used to change a number value using a slider.

### 1.1 Features

* Adjust the slider value
* Execute a microflow when a slider value is changed or clicked
* Show a tooltip on hover
* Render slider with different bootstrap colors

### 1.2 Demo App

For a demo app that has been deployed with this widget, see [here](https://slider.mxapps.io/).

## 2 Configuration

The following properties must be configured:

* **Value attribute** – the selected value on the slider
* **Range minimum attribute** – the attribute that contains the minimum slider value; if not provided, **Default minimum value** is used
* **Range maximum attribute** – the attribute that contains the maximum slider value; if not provided, **Default maximum value** is used

## 3 Usage

The slider enables setting a value between two bounds (minimum value and maximum value). However, if there are two values that need to be set between two bounds, using the [Range Slider](range-slider) widget is recommended..

![](attachments/slider/slider1.png)

In Studio Pro, place the widget in the context of an object that has attributes for a maximum value, minimum value, and value. The maximum and minimum values determine the range within which the slider value can be adjusted. The step value determines the next point to shift to when sliding (meaning, it is the interval between two points or numbers).

![](attachments/slider/slider2.png)

When choosing the step value, the difference between the maximum value and the minimum value should be divisible by 2 (meaning, `(maximumValue - minimumValue) % 2 = 0`).

## 4 Read More

* [Native Mobile Styling Reference Guide](/refguide/native-styling-refguide)
