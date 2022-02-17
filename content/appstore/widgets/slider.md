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

- Adjust the slider value
- Execute a microflow when slider value is changed or clicked
- Show a tooltip on hover
- Render slider with colors

## 2 Configuration

### 2.1 General tab

#### 2.1.1 Data source section

- **Value attribute** – the selected value on the slider

#### 2.1.2 General section

- **Minimum value type** – type of value source for _Minimum value_ property
- **Minimum value** – defines the minimum value of the slider
- **Maximum value type** – type of value source for _Maximum value_ property
- **Maximum value** – defines the maximum value of the slider
- **Step size type** – type of value source for _Step size_ property
- **Step size** – the difference between the two adjacent values of the slider
- **Show tooltip** – when enabled, moving cursor over slider handle will show tooltip with current slider value
- **Tooltip type** – defines type of tooltip content. If set to _Current value_ then only current slider value  is visible to the user. Use _Custom_ to set custom text template to create more descriptive tooltip
- **Show label** – if enabled, show label for slider

#### 2.1.3 Editability section

- **Editable** – controls weather this widget can be edited or not

#### 2.1.4 Visibility section
- **Visible** – weather widget visible or not

### 2.2 Track tab

#### 2.2.1 Track section

- **Number of markers** – number of marker ticks that appear along the slider's track
- **Decimal places** – number of decimal places form marker values
- **Orientation** – controls orientation of the slider. When set to "Vertical" _height_ property should be set in order to prevent slider from being collapsed

### 2.3 Events tab

#### 2.3.1 Events section

- **On change** – set the action to execute when slider change its value.

## 3 Usage

The slider enables setting a value between two bounds (minimum value and maximum value). However, if there are two values that need to be set between two bounds, using the [Range Slider](range-slider) widget is recommended..

![](attachments/slider/slider1.png)

In Studio Pro, place the widget in the context of an object that has attributes for a maximum value, minimum value, and value. The maximum and minimum values determine the range within which the slider value can be adjusted. The step value determines the next point to shift to when sliding (meaning, it is the interval between two points or numbers).

![](attachments/slider/slider2.png)

When choosing the step value, the difference between the maximum value and the minimum value should be divisible by 2 (meaning, `(maximumValue - minimumValue) % 2 = 0`).

## 4 Read More

* [Native Mobile Styling Reference Guide](/refguide/native-styling-refguide)


## 5 Previous Version's Documentation

### Widgets below v2.0.0

#### 1 Introduction

The [Slider](https://marketplace.mendix.com/link/component/48786/) widget can be used to change a number value using a slider.

##### 1.1 Features

* Adjust the slider value
* Execute a microflow when a slider value is changed or clicked
* Show a tooltip on hover
* Render slider with different bootstrap colors

#### 2 Configuration

The following properties must be configured:

* **Value attribute** – the selected value on the slider
* **Range minimum attribute** – the attribute that contains the minimum slider value; if not provided, **Default minimum value** is used
* **Range maximum attribute** – the attribute that contains the maximum slider value; if not provided, **Default maximum value** is used

#### 3 Usage

The slider enables setting a value between two bounds (minimum value and maximum value). However, if there are two values that need to be set between two bounds, using the [Range Slider](range-slider) widget is recommended..

![](attachments/slider/slider1.png)

In Studio Pro, place the widget in the context of an object that has attributes for a maximum value, minimum value, and value. The maximum and minimum values determine the range within which the slider value can be adjusted. The step value determines the next point to shift to when sliding (meaning, it is the interval between two points or numbers).

![](attachments/slider/slider2.png)

When choosing the step value, the difference between the maximum value and the minimum value should be divisible by 2 (meaning, `(maximumValue - minimumValue) % 2 = 0`).

#### 4 Read More

* [Native Mobile Styling Reference Guide](/refguide/native-styling-refguide)
