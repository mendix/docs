---
title: "Native Styling"
url: /refguide/mobile/designing-mobile-user-interfaces/native-styling/
weight: 40
description: "General information for native styling in Mendix."
aliases:
    - /howto/mobile/native-styling/
    - /howto/mobile/how-to-use-native-styling/
---

## Introduction

You can build native mobile apps with custom styling in Mendix Studio Pro. Styling native mobile apps uses JavaScript style sheets, which are new to Mendix Studio Pro. 

Consult these sections below for information on theme folder structure, classes, and design properties:

* [Theme Folder Structure](#folder-structure)
* [Classes](#classes)
* [Design Properties](#design-properties)

Read [Using Native Styling](#using-styling) to practice basic Mendix styling tasks in a simple app.

## Theme Folder Structure {#folder-structure}

For each app, styling is stored in the **theme** and **themesource** folders. From there styling is split into **native** and **web** folders. Both have the same structure. 

These folders have strict protocols:

* Users should only add or change styling in **theme/native** or in their own user-defined module **themesource/your-module/native** folder (if they plan to create a reusable theming module)
* The **native** folder has two files: *main.js* and *custom-variables.js* — when changing the styling, always copy the variable you want to change from *themesource/atlas_core/native/variables.js* to *theme/native/custom-variables.js*
* The *custom-variables.js* file will overwrite the *variables.js* file—do not change anything in the **themesource/atlas_core/native** folder directly, as this makes updating Atlas more difficult
* Any variables you want to change or add should be put in *custom-variables.js* 
* Any classes you want to change or add should be put in *theme/native/main.js* or in your own user-defined module's *themesource/your-module/native/main.js*.

The **themesource/atlas_core/native/core/base** folder contains global helper classes. These classes are generic and can be put on all widgets. Some of them are also available as design properties in Mendix Studio Pro.

The **themesource/atlas_core/native/core/helpers** folder contains helper classes for widgets. Every widget has its own file which contains its design properties and some extra classes.

The **themesource/atlas_core/native/core/_functions** folder contains multiple helper functions. These functions can help you style more easily. For example, the `adjustFont` function receives a font and adjusts it to the screen size. This will make your font sizes responsive. For more information about these helper classes, see their descriptions in the code.

The **themesource/atlas_core/native/core/widgets** folder contains the default widget styling. Every widget has its own file which contains its default class name.

In **themesource/atlas_nativemobile_content/native** you will find resource package styling. Here you can find all styling related to building blocks, page templates and layouts.

## Classes {#classes}

Default class names—which are the class names set by Mendix Studio Pro—will always be named in Pascal case. All other classes will be in lowerCamelCase. This keeps changes to default widget styles clear.

## Design Properties {#design-properties}

Design properties are an easier way to apply classes. Atlas already offers several useful design properties out of the box. You can see them by clicking on a widget and looking at the **Properties** panel. A design property can be either a drop-down menu or a toggle. A toggle will toggle one class, while a drop-down menu will apply a different class for each drop-down item. 

## Using Native Styling {#using-styling}

You have the capacity to alter design properties with Mendix Studio Pro. Furthermore, because all native mobile styling is written in JavaScript, you have new ways of applying your styling customizations. For more details on native styling, class names, and widget styling, see the [Widget Styling Guide](/refguide/mobile/designing-mobile-user-interfaces/widget-styling-guide/).

### Prerequisites 

* Install an integrated development environment (IDE) of your choice (Mendix recommends [Microsoft Visual Studio Code](https://code.visualstudio.com/))
* Create a Mendix app based on the Blank Native Mobile App template by following the [Creating a New App Based on the Quickstarter App](/refguide/mobile/getting-started-with-mobile/#quickstartapp) section of *Get Started with Native Mobile*
* Download the Make It Native App on your mobile device. Depending on the Mendix version your app is developed in and the device you want to run on, you need a different Make It Native app. For more information on how to download the correct version, see the [Getting the Make It Native App](/refguide/mobile/getting-started-with-mobile/prerequisites/#get-min-app) section in *Native App Prerequisites and Troubleshooting*.

### Customizing the Quickstarter App

The [Blank Native Mobile App](https://marketplace.mendix.com/link/component/109511/) is styled using an Atlas UI resources package. This package consists of:

* Widgets
* Building blocks
* Page templates
* Page layouts 

These resources let you style your app with a wide variety of interface parts. However, you can customize them further by following these steps:

1. On your **Home_Native** home page, delete the **Intro screen** content.
1. Place a button widget on your app's home page:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-styling/how-to-use-native-styling/button-one.png" alt="button" width="400" class="no-border" >}}

1. Click **Run Locally** ({{% icon name="controls-play" %}}), and then click **View App** to see your app. The button will be blue with white text, which is its default styling.
1. Open *theme/native/custom-variables.js* using your IDE of choice.
1. Change the `brand.primary` from **#0595DB** to *rosybrown*:

    ```javascript
    //Brand Style
    export const brand = {
        primary: "rosybrown",
        success: "#76CA02",
        warning: "#f99b1d",
        danger: "#ed1c24",
    };
    ```

1. Save your file.
1. Click **Run Locally** ({{% icon name="controls-play" %}}) to apply your changes:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-styling/how-to-use-native-styling/brand-primary-rosybrown.png" alt="rosybrown button" width="400" class="no-border" >}}

    You have successfully altered a default button to look rosy brown These screenshots employ the Make It Native app's [Dark Mode](/releasenotes/mobile/make-it-native-app/#new-features-5).

### Classes

Classes are groups of styling properties which define how certain elements of your app will be rendered. Once you make a class, one which applies to a button for example, you can reuse that class to easily style subsequent buttons in the same way. To learn how to apply a class to a widget, follow the steps below.

1. Place a second button widget on your app's home page.
2. Run your app to view your button.
3. Select the button widget, and then click the **Properties** panel. Under **Common** you will see the button's **Class** field.
4. Type *btnSuccess* into the **Class** field:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-styling/how-to-use-native-styling/btn-success.png" alt="class field" width="400" class="no-border" >}}

5. Click **Run Locally** ({{% icon name="controls-play" %}}) to save and refresh your app. Notice the button turned green:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-styling/how-to-use-native-styling/green-button.png" alt="green button" width="400" class="no-border" >}}

    You have successfully applied an Atlas-provided class to a button widget.

### Design Properties

Design properties are easy-to-use classes in Mendix Studio Pro which you do not need to look up before using. Design properties are present inside Mendix Studio Pro with every widget they apply to. They can be accessed in the **Properties** panel, or by double-clicking the widget and clicking the **Appearance** tab for more advanced options. Design properties are particularly useful for creating generic styling for use on multiple widgets. Below you will use design properties to alter a button widget.

1. Place a third button widget on your app's home page.
2. Select the button, and find its **Design Properties** in the **Properties** panel.
3. Click the **Button style** drop-down arrow and select **Warning**.

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-styling/how-to-use-native-styling/btn-warning.png" alt="warning button" width="400" class="no-border" >}}

4. Run your app again to see the *design* button's new color:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-styling/how-to-use-native-styling/orange-button.png" alt="orange button" width="400" class="no-border" >}}

    Using design properties, you have changed the blue default button widget to orange. For any other warning buttons, you could easily apply the same design property.

### Creating Your Own Classes {#creating-your-own-classes}

When you have specific design requirements, you will need to build custom classes to fit. To harness the power of custom classes, follow the instructions below.

1. Place a fourth button widget on your app's home page.
2. Navigate to your Mendix app's folder using your IDE.
3. Open the **theme** folder of your app.
4. Open *native/main.js*.
5. Copy this code snippet into *native/main.js*:

    ```javascript
    export const className = {
        container: {
            <ViewStyle properties>
        },
        icon: {
        },
        caption: {
            <TextStyle properties>
        }
    }
    ```
    
    To alter a class on your own, consult the [Native Mobile Styling Guide](/refguide/native-styling-refguide/) to understand widget structures.

6. Now you will edit the code you pasted. Apply a transparent background color to customize the default button widget:

    ```javascript
    export const className = {
        container: {
            backgroundColor: "transparent"
        },
        icon: {
        },
        caption: {
        }
    }
    ```

7. Because your app already has default styling, you can remove the icon and caption properties. Also, change the constant to a unique, self-explanatory value such as `btnBordered`: 

    ```javascript
    export const btnBordered = {
        container: {
            backgroundColor: "transparent"
        },
    }
    ```

8. Save your work.
9. In Mendix Studio Pro, select your fourth button. In the **Properties** panel, type *btnBordered* into the **Class** field.
10. Click **Run Locally** ({{% icon name="controls-play" %}}) to see that your button's background color is transparent:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-styling/how-to-use-native-styling/bordered-button.png" alt="bordered button" width="400" class="no-border" >}}

    You have successfully customized a simple button widget. Using these basic principles, you can go on to customize widgets with distinct looks.

### Implementing Custom Design Properties

In this section you will learn to turn the class you made into a design property, so that it can be easily used by other people.

1. Place a fifth button widget on your app's home page.
2. Open *themesource/your-module/native/design-properties.json* in your IDE.
3. Find the `ActionButton` class. There are already design properties in `ActionButton`. Next, you will add some of your own.
4. Place this object under the first one in `ActionButton`:

    ```json
    {
        "name": "Bordered",
        "type": "Toggle",
        "description": "Create a bordered button.",
        "class": "btnBordered"
    },
    ```

5. In Mendix Studio Pro, press <kbd>F4</kbd> to synchronize your app directory.
6. Select the fifth button. In **Properties** > **Design Properties**, your **Bordered** design property should now be visible:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-styling/how-to-use-native-styling/bordered-design-property.png" alt="bordered design property" width="400" class="no-border" >}}

7. Enable the **Bordered** design property by clicking its drop-down menu and selecting **Yes**.

8. Click **Run Locally** ({{% icon name="controls-play" %}}) again and view your app:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/native-styling/how-to-use-native-styling/design-property-border-button.png" alt="design properties border" width="400" class="no-border" >}}

    You have implemented your own custom design property. Other users can quickly harness your design property without having to consult a class name list.

Congratulations! By completing this guide, you have learned how to alter a styling property, apply classes and design properties, and create your own classes and design properties.
