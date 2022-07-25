---
title: "Style Your Mendix Native Mobile App"
url: /howto8/mobile/how-to-use-native-styling/
weight: 30
description: A how-to for styling your first Mendix Native App.
tags: ["styling", "design", "classes", "native"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With Mendix 8, you have the capacity to alter design properties with Mendix Studio Pro. Furthermore, because all native mobile styling is written in JavaScript, you have new ways of applying your styling customizations. For more details on native styling, class names, and widget styling, see the [Native Mobile Styling Reference Guide](/refguide8/native-styling-refguide/).

## 2 Prerequisites 

* Install an integrated development environment (IDE) of your choice (Mendix recommends [Microsoft Visual Studio Code](https://code.visualstudio.com/))
* Create a Mendix app based on the Blank Native Mobile App template by following the [Creating a New App Based on the Quickstart App](/howto8/mobile/getting-started-with-native-mobile/#quickstartapp) section of *Get Started with Native Mobile*
* Download the Make It Native 8 app on your mobile device via either the [Google Play](https://play.google.com/store/apps/details?id=com.mendix.developerapp) store or the [Apple App Store](https://apps.apple.com/us/app/make-it-native/id1334081181) so you can text your app and see your styling changes

### 3 Customizing the Quickstart App

The [Blank Native Mobile App](https://marketplace.mendix.com/link/component/109511/) is styled using an Atlas UI resources package. This package consists of:

* Widgets
* Building blocks
* Page templates
* Page layouts 

These resources let you style your app with a wide variety of interface parts. However, you can customize them further by following these steps:

1. On your **Home_Native** home page, delete the **Intro screen** content.
1. Place a button widget on your app's home page:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/button-one.png" alt="button" >}}

2. Click **Run Locally** and then click **View** to see your app. The button will be blue with white text, which is its default styling.
3. Open *theme/styles/native/app/custom-variables.js* using your IDE of choice.
4. Change the `brand.primary` from **#0595DB** to *rosybrown*:

    ```javascript
    //Brand Style
    export const brand = {
        primary: "rosybrown",
        success: "#76CA02",
        warning: "#f99b1d",
        danger: "#ed1c24",
    };
    ```

5. Save your file.
6. Click **Run Locally** to apply your changes:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/brand-primary-rosybrown.png" alt="rosybrown button" >}}

    You have successfully altered a default button to look rosy brown These screenshots employ the Make It Native app's [Dark Mode](/releasenotes/mobile/make-it-native-app/#new-features-5).

## 4 Classes

Classes are groups of styling properties which define how certain elements of your app will be rendered. Once you make a class, one which applies to a button for example, you can reuse that class to easily style subsequent buttons in the same way. To learn how to apply a class to a widget, follow the steps below.

1. Place a second button widget on your app's home page.
2. Run your app to view your button.
3. Select the button widget, and then click the **Properties** panel. Under **Common** you will see the button's **Class** field.
4. Type *btnSuccess* into the **Class** field:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/btn-success.png" alt="class field" >}}

5. Click **Run Locally** to save and refresh your app. Notice the button turned green:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/green-button.png" alt="green button" >}}
    
    You have successfully applied an Atlas-provided class to a button widget.

## 5 Design Properties

Design properties are easy-to-use classes in Mendix Studio Pro which you do not need to look up before using. Design properties are present inside Mendix Studio Pro with every widget they apply to. They can be accessed in the **Properties** panel, or by double-clicking the widget and clicking the **Appearance** tab for more advanced options. Design properties are particularly useful for creating generic styling for use on multiple widgets. Below you will use design properties to alter a button widget.

1. Place a third button widget on your app's home page.
2. Select the button, and find its **Design Properties** in the **Properties** panel.
3. Click the **Button style** drop-down arrow and select **Warning**.

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/btn-warning.png" alt="warning button" >}}

4. Run your app again to see the *design* button's new color:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/orange-button.png" alt="orange button" >}}

    Using design properties, you have changed the blue default button widget to orange. For any other warning buttons, you could easily apply the same design property.

## 6 Creating Your Own Classes {#creating-your-own-classes}

When you have specific design requirements, you will need to build custom classes to fit. To harness the power of custom classes, follow the instructions below.

1. Place a fourth button widget on your app's home page.
2. Navigate to your Mendix app's folder using your IDE.
3. Open the **theme** folder of your app.
4. Open *styles/native/app/custom.js*.
5. Copy this code snippet into *styles/native/app/custom.js*:

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
    
    To alter a class on your own, consult the [Native Mobile Styling Reference Guide](/refguide8/native-styling-refguide/) to understand widget structures.

6. Now you will edit the code you pasted. Apply a transparent background color to customize the the default button widget:

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
10. Click **Run Locally** to see that your button's background color is transparent:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/bordered-button.png" alt="bordered button" >}}
    
    You have successfully customized a simple button widget. Using these basic principles, you can go on to customize widgets with distinct looks.

## 7 Implementing Custom Design Properties

In this section you will learn to turn the class you made into a design property, so that it can be easily used by other people.

1. Place a fifth button widget on your app's home page.
2. Open *theme/settings-native.json* in your IDE.
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
4. In Mendix Studio Pro, press <kbd>F4</kbd> to synchronize your project directory.
5. Select the fifth button. In **Properties** > **Design Properties**, your **Bordered** design property should now be visible:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/bordered-design-property.png" alt="bordered design property" >}}

6. Enable the **Bordered** design property by clicking its drop-down menu and selecting **Yes**.

7. Click **Run Locally** again and view your app:

    {{< figure src="/attachments/howto8/mobile/native-mobile/native-styling/how-to-use-native-styling/design-property-border-button.png" alt="design properties border" >}}

    You have implemented your own custom design property. Other users can quickly harness your design property without having to consult a class name list.

Congratulations! By completing this how-to, you have learned how to alter a styling property, apply classes and design properties, and create your own classes and design properties.

## 8 Read More

* [How to Implement Native Mobile Styling](/howto8/mobile/native-styling/)
* [Native Mobile Styling Reference Guide](/refguide8/native-styling-refguide/)
* [Mendix Atlas UI](/howto8/front-end/atlas-ui/)
* [How to Get Started with Native Mobile](/howto8/mobile/getting-started-with-native-mobile/)
