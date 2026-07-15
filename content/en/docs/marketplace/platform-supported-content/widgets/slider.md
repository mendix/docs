---
title: "Slider"
url: /appstore/widgets/slider/
description: "Describes the configuration and usage of the Slider widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Slider](https://marketplace.mendix.com/link/component/48786/) widget allows the user to set a value using a slider. You need to configure a minimum value and a maximum value for the slider, which define the limits of the slider's track. The user can adjust the value within these limits.

{{% alert color="info" %}}
If the user needs to set a range, instead of one value, you should use the [Range Slider](/appstore/widgets/range-slider/) widget instead.
{{% /alert %}}

### Features

* Configure the maximum and minimum values, which define the limits of the slider's track, and then the user can set the slider value within these limits

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/slider/slider1.png" class="no-border" >}}

* Set a step value, which is the difference between two adjacent values on the slider

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/slider/slider2.png" class="no-border" >}}

* Set a microflow that is executed when the user changes the slider value
* Show a tooltip when the user clicks or moves the slider handle
* Render the slider with colors

## Configuration

To configure this widget, follow these steps:

1. In Studio Pro, place the Slider widget in the context of an object that has an Integer or Decimal attribute to store the slider value.
2. Double-click the Slider widget to open the **Edit Slider** dialog box.
3. Configure the widget using the properties described in the sections below.

### General Tab

#### Data Source Section

**Value attribute** – defines the attribute to store the value

#### General Section

* **Minimum value type** – sets the type of the value source for the **Minimum value** property
    * **Static** – if selected, the minimum value is a static value
    * **Dynamic** – if selected, the minimum value is a dynamic value
    * **Expression** – if selected, the minimum value is an [expression](/refguide/expressions/)
* **Minimum value** – sets the minimum value of the slider
* **Maximum value type** – sets the type of the value source for the **Maximum value** property
    * **Static** – if selected, the maximum value is a static value
    * **Dynamic** – if selected, the maximum value is a dynamic value
    * **Expression** – if selected, the maximum value is an [expression](/refguide/expressions/)
* **Maximum value** – sets the maximum value of the slider
* **Step size type** – sets the type of the value source for the **Step size** property
    * **Static** – if selected, the step size is a static value
    * **Dynamic** – if selected, the step size is a dynamic value
    * **Expression** – if selected, the step size is an [expression](/refguide/expressions/)
* **Step size** – sets the difference between two adjacent values on the slider
* **Show tooltip**
    * **Yes** (default) – if selected, a tooltip is displayed when the user clicks or moves the slider handle
        * **Tooltip type** – sets the tooltip type
            * **Current value** (default) – if selected, the tooltip shows the current slider value
            * **Custom** – if selected, you can define a custom tooltip
                * **Tooltip** – defines the custom tooltip
    * **No** – if selected, no tooltip is shown
* **Tooltip always visible**
    * **Yes** – if selected, the tooltip is always visible
    * **No** (default) – if selected, the tooltip is only shown when the user clicks or moves the slider handle
* **Show label** 
    * **Yes** – if selected, you can define the label caption
        * **Label caption** – defines the label caption of the widget that is displayed on the page
    * **No** (default) – if selected, there is no label for this widget on the page

#### Editability Section

**Editable** – determines if the widget can be edited

{{% alert color="info" %}}For more information, see [Editability Section](/refguide/common-widget-properties/#editability) in *Properties Common in the Page Editor*.{{% /alert %}}

#### Visibility Section

**Visible** – determines if the widget is visible or not

{{% alert color="info" %}}For more information, see [Visibility Section](/refguide/common-widget-properties/#visibility-properties) in *Properties Common in the Page Editor*.{{% /alert %}}

### Track Tab

* **Number of markers** – sets the number of the markers that appear along the slider's track
* **Decimal places** – sets the number of decimal places for marker values
* **Orientation** – determines the orientation of the slider
    * **Horizontal** – if selected, the orientation of the slider is horizontal
    * **Vertical** – if selected, the orientation of the slider is vertical and you must set **Height unit** and **Height**
        * **Height unit** – specifies the type of unit which is used for the **Height** property
            * **Percentage** (default) – if selected, the aspect ratio is used to specify the height
            * **Pixels** – if selected, an absolute value is used to specify the height
        * **Height** – the height in pixels or percentage based on the setting of **Height unit**

### Events Tab

**On change** – sets the action to execute when the slider changes its value

{{% alert color="info" %}}For more information, see [Event Actions](/refguide/on-click-event/#actions) in *Properties Common in the Page Editor*.{{% /alert %}}

### Common Tab

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.

## Widgets Below Version 2.0.0

Features:

* Adjust the slider value
* Execute a microflow when a slider value is changed or clicked
* Show a tooltip on hover
* Render slider with different bootstrap colors

Configuration:

* **Data source** tab
    * **Value attribute** – the selected value on the slider
    * **Range minimum attribute** – the attribute that contains the minimum slider value; if not provided, **Default minimum value** is used
    * **Range maximum attribute** – the attribute that contains the maximum slider value; if not provided, **Default maximum value** is used

    {{% alert color="info" %}}The difference between the maximum value and the minimum value should be divisible by 2 (as in, `(maximumValue – minimumValue) % 2 = 0`).{{% /alert %}}
