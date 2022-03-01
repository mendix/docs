---
title: "Range Slider"
category: "Widgets"
description: "Describes the configuration and usage of the Range Slider widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "range slider", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

You can use the [Range Slider](https://marketplace.mendix.com/link/component/52704/) widget to change a range of values using a slider. This range has an upper bound value and a lower bound value, and the whole range stays between the minimum and maximum values of the slider.

{{% alert type="info" %}}
If you need to set one value, instead of a range of values, you should use the [Slider](https://marketplace.mendix.com/link/component/48786/) widget instead.
{{% /alert %}}

### 1.1 Features

* Set the minimum value and the maximum value which are the limits of the slider, as well as a lower bound value and an upper bound value of a range:

  ![](attachments/range-slider/sample-range.png)

* Set a step size, which is the difference between two adjacent values on the slider:

  ![](attachments/range-slider/step-value.png)

* Set a microflow that is executed once a range value is changed on the slider

* Show or hide a tooltip when you click or move the slider handle

* Render the slider with different colors

## 2 Configuration

To configure this widget, follow these steps:

1. In Studio Pro, place the widget in the context of an object that has attributes for the lower bound value and the upper bound value of a range
2. Double-click the Ranger Slider widget to open the **Edit Ranger Slider** dialog box.
3. Configure the widget using the properties described in the sections below.

### 2.1 General Tab

#### 2.1.1 Data Source Section

- **Lower bound attribute** – defines the attribute to store the lower bound value of the range
- **Upper bound attribute** – defines the attribute to store the upper bound value of the range

#### 2.1.2 General Section

- **Minimum value type** – sets the type of the value source for the **Minimum value** property
  
  - **Static** – if selected, the minimum value is a static value
  - **Dynamic** – if selected, the minimum value is a dynamic value
  - **Expression** – if selected, the minimum value is an [expression](/refguide/expressions)
- **Minimum value** – sets the minimum value of the slider
- **Maximum value type** – sets the type of the value source for the **Maximum value** property
  
  - **Static** – if selected, the maximum value is a static value
  - **Dynamic** – if selected, the maximum value is a dynamic value
  - **Expression** – if selected, the maximum value is an [expression](/refguide/expressions)
- **Maximum value** – sets the maximum value of the slider

  {{% alert type="info" %}}The difference between the maximum value and the minimum value should be divisible by 2 (as in, `(maximumValue – minimumValue) % 2 = 0`).{{% /alert %}}

- **Step size type** – sets the type of the value source for the **Step size** property
  - **Static** – if selected, the step size is a static value
  - **Dynamic** – if selected, the step size is a dynamic value
  - **Expression** – if selected, the step size is an [expression](/refguide/expressions)
- **Step size** – sets the difference between two adjacent values on the slider
- **Show tooltip**
  - **Yes** (default) – if selected, a tooltip is displayed when you click or move the slider handle
    - **Lower bound tooltip type** – sets the tooltip type for the lower bound value
      - **Value** (default) – if selected, the tooltip shows the current lower bound value of the range
      - **Custom** – if selected, you can define a custom tooltip
      - **Tooltip** – sets the custom tooltip
    - **Upper bound tooltip type** – sets the tooltip type for the upper bound value
      - **Value** (default) – if selected, the tooltip shows the current upper bound value of the range
      - **Custom** – if selected, you can define a custom tooltip
      - **Tooltip** – sets the custom tooltip
  - **No** – if selected, no tooltip is shown
- **Tooltip always visible**
  - **Yes** –  if selected, the tooltip is always visible
  - **No** (default) – if selected, the tooltip is only shown when you click or move the slider handles
- **Show label** 
  - **Yes** – if selected, the **Label caption** property becomes available
    - **Label caption** – defines the label caption of the widget that is shown on the page
  - **No** (default) – if selected, the **Label caption** property is unavailable

#### 2.1.3 Editability Section

- **Editable** – determines if the widget can be edited

  {{% alert type="info" %}}For more information, see [Editability Section](/refguide/common-widget-properties#editability) in the *Studio Pro 9 Guide*.{{% /alert %}}

#### 2.1.4 Visibility Section

- **Visible** – determines if the widget visible or not

  {{% alert type="info" %}}For more information, see [Visibility Section](/refguide/common-widget-properties#visibility-properties) in the *Studio Pro 9 Guide*.{{% /alert %}}

### 2.2 Track Tab

- **Number of markers** – sets the number of the markers that appear along the slider's track
- **Decimal places** – sets the number of decimal places for marker values
- **Orientation** – determines the orientation of the slider
  - **Horizontal** – if selected, the orientation of the slider is horizontal
  - **Vertical** – if selected, the orientation of the slider is vertical and you must set **Height unit** and **Height**
    - **Height unit** – specifies the type of unit which is used for the **Height** property
      - **Percentage** (default) – if selected, the aspect ratio is used to specify the height
      - **Pixels** – if selected, an absolute value is used to specify the height
    - **Height** – the height in pixels or percentage based on the setting of **Height unit**

### 2.3 Events Tab

- **On change** – sets the action to execute when the slider changes its value

For more information, see [Event Actions](/refguide/on-click-event#actions) in the *Studio Pro 9 Guide*.

### 2.4 Common Tab

For more information, see [Common Section](/refguide/common-widget-properties#common-properties) in the *Studio Pro 9 Guide*.

## 3 Widgets Below Version 2.0.0

Features:

* Adjust lower bound and upper bound values on the slider
* Execute a microflow when a slider value is changed or clicked
* Show or hide a tooltip upon hover
* Render slider with different Bootstrap colors

Configuration:

* **Data source** tab
  * **Range minimum attribute** – the attribute that contains the minimum slider value; if not provided, the **Default minimum value** is used
  * **Range maximum attribute** – the attribute that contains the maximum slider value; if not provided, the **Default maximum value** is used
  * **Selected minimum attribute** – the attribute that contains the minimum bound slider value
  * **Selected maximum attribute** – the attribute that contains the maximum bound slider value
