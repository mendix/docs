---
title: "Range Slider"
url: /appstore/widgets/range-slider/
description: "Describes the configuration and usage of the Range Slider widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Range Slider](https://marketplace.mendix.com/link/component/52704/) allows the user to set a range using a slider. You need to configure a minimum value and a maximum value for the slider, which define the limits of the slider's track. The user can set a range within these limits by defining the lower bound value and the upper bound value of the range.

{{% alert color="info" %}}
If the user needs to set one value, instead of a range, you should use the [Slider](/appstore/widgets/slider/) widget instead.
{{% /alert %}}

### Features

* Configure the minimum value and the maximum value, which define the limits of the slider's track, and then the user can set the lower bound value and the upper bound value of a range within these limits:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/range-slider/sample-range.png" class="no-border" >}}

* Set a step size, which is the difference between two adjacent values on the slider:

    {{< figure src="/attachments/appstore/platform-supported-content/widgets/range-slider/step-value.png" class="no-border" >}}

* Set a microflow that is executed when the user changes the range value on the slider
* Show a tooltip when the user clicks or moves a slider handle
* Render the slider with different colors

## Configuration

To configure this widget, follow these steps:

1. In Studio Pro, place the Ranger Slider widget in the context of an object that has Integer or Decimal attributes to store the lower bound value and the upper bound value of the range
2. Double-click the Ranger Slider widget to open the **Edit Ranger Slider** dialog box.
3. Configure the widget using the properties described in the sections below.

### General Tab

#### Data Source Section

* **Lower bound attribute** – defines the attribute to store the lower bound value of the range
* **Upper bound attribute** – defines the attribute to store the upper bound value of the range

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
    * **Yes** (default) – if selected, a tooltip is displayed when the user clicks or moves a slider handle
        * **Lower bound tooltip type** – sets the tooltip type for the lower bound value
            * **Value** (default) – if selected, the tooltip shows the current lower bound value of the range
            * **Custom** – if selected, you can define a custom tooltip
                * **Tooltip** – defines the custom tooltip
        * **Upper bound tooltip type** – sets the tooltip type for the upper bound value
            * **Value** (default) – if selected, the tooltip shows the current upper bound value of the range
            * **Custom** – if selected, you can define a custom tooltip
                * **Tooltip** – defines the custom tooltip
    * **No** – if selected, no tooltip is shown when the user clicks or moves a slider handle
* **Tooltip always visible**
    * **Yes** – if selected, the tooltip is always visible
    * **No** (default) – if selected, the tooltip is only shown when you click or move the slider handles
* **Show label** 
    * **Yes** – if selected, you can define the label caption
        * **Label caption** – defines the label caption of the widget that is displayed on the page
    * **No** (default) – if selected, there is no label for this widget on the page

#### Editability Section

**Editable** – determines if the widget can be edited

{{% alert color="info" %}}For more information, see [Editability Section](/refguide/common-widget-properties/#editability) in *Properties Common in the Page Editor*.{{% /alert %}}

#### Visibility Section

**Visible** – determines if the widget visible or not

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

    {{% alert color="info" %}}The difference between the maximum value and the minimum value should be divisible by 2 (as in, `(maximumValue – minimumValue) % 2 = 0`).{{% /alert %}}
