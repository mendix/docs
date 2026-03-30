---
title: "Color Picker"
url: /appstore/widgets/color-picker/
description: "Describes the configuration and usage of the Color Picker widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Color Picker](https://marketplace.mendix.com/link/component/107044/) enables selecting and adjusting a color value that is stored in a string attribute

### Features

* Render using the button, input box, and inline modes
* Execute an action after a color change using the [Events tab](#events-tab)
* Add a label
* Choose when the Color Picker should be [editable](#editability-tab)
* Choose when the Color Picker should be [visible](#visibility-tab)
* Support the hex, RGB, and RGBA color formats

## Configuration

To configure this widget, follow these steps:

1. Create an entity with a String attribute for storing the color value.
2. Place the Color Picker widget in a data container like a Data view, List view, or Template grid widget, with the entity you created as its data source.
3. Double-click the Color Picker widget to open the **Edit Color Picker** dialog box.
4. Configure the widget using the properties described in the sections below.

### Data source Tab

**Data source** (required) – a String attribute containing a valid color in hex, RGB or RGBA color formats

### General Tab

* **Enable advanced options**
    
    * **Yes** – if selected, the following advanced options become available:
        * **Display mode** – determines how Color Picker is displayed in your app
            * **Button** (default) – a button is displayed
            * **Input** – a button is displayed with a text box that shows the color in the selected format
            * **Inline** – a spectrum color picker is displayed      
        * **Picker type** – select one of the following available pickers from the [React Color](https://casesandberg.github.io/react-color/) library: 
            * **Block**
            * **Chrome**
            * **Circle**
            * **Compact**
            * **Github**
            * **Hue**
            * **Material**
            * **Sketch**
            * **Slider**
            * **Swatches**
            * **Twitter**
        * **Color format** – defines which color format to use
            * **HEX**
            * **RGB**
            * **RGBA**
        * **Default colors** – defines a list of pre-defined colours used with the color picker
    
            {{% alert color="info" %}}The **Default colors** property is only available if the **Picker type** property is set to **Block**, **Sketch**, **Circle**, **Compact**, or **Twitter**.{{% /alert %}}
    
            * **New** – opens the **Edit Default Colors Item** dialog box where you can create a new default color
                * **Color** – defines the default color in hex, RGB, or RGBA format
            * **Delete** – deletes the selected default color
            * **Edit** – opens the **Edit Default Colors Item** dialog box where you can make changes to the selected default color
            * **Move up** – moves up the selected default color
            * **Move down** – moves down the selected default color
            * **Color** – the list of the existing default colors
    * **No** (default) – if selected, the advanced options are disabled.
* **Invalid format message** – defines the message that is shown when the user provides a wrong input
* **Show label** 
    * **Yes** – if selected, you can define the label caption
        * **Label caption** – defines the label caption of the widget that is displayed on the page
    * **No** (default) – if selected, there is no label for this widget on the page

### Events Tab {#events-tab}

**On change** – executes an action when the attribute value changes

### Edibility Tab {#editability-tab}

For more information, see [Editability Section](/refguide/common-widget-properties/#editability) in *Properties Common in the Page Editor*.

### Visibility Tab {#visibility-tab}

For more information, see [Visibility Section](/refguide/common-widget-properties/#visibility-properties) in *Properties Common in the Page Editor*.

### Common Tab

For more information, see [Common Section](/refguide/common-widget-properties/#common-properties) in *Properties Common in the Page Editor*.

## Strict CSP Compatibility

This widget is not yet fully compliant with strict content security policy (CSP). If used with strict CSP, it will result in CSP errors in the console and potentially broken flows in the widget.

## Widgets Below Version 2.0.0

Features

* Render using the button, input box, and inline modes
* Execute an action after a color change via a microflow or nanoflow
* Add a label and label width
* Support the hex, RGB, or RGBA color formats
* Supported color pickers are based on the [React Color](https://casesandberg.github.io/react-color/) library
