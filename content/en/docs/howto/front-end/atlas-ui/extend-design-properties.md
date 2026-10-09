---
title: "Extend Design Properties"
url: /howto/front-end/extend-design-properties/
weight: 60
---

## Introduction

Design properties make it simple to change the appearance of widgets. These changes can include properties like colors, borders, and spacing. Out of the box, the Atlas framework comes with a default set of design properties which can be extended.

Design properties are based on the classes in the styling for both web apps and native mobile apps. Basically a design property toggles a class. For web apps, an option of a design property can also apply a CSS variable to a CSS property of the widget.

For web apps, Atlas Core uses the following types of design properties:

* **Toggle** – Can be turned on or off, and applies a class when it is turned on.
* **Dropdown** – Offers a set of related options, of which one can be selected.
* **Colorpicker** – Is like a **Dropdown**, and can show a preview of the color of each option. The preview can be a theme variable, such as `--brand-primary`.
* **ToggleButtonGroup** – Offers a set of related options, and can be configured to allow selecting multiple options. For example, the **Screen width** design property applies a theme variable such as `--screen-lg` to `--max-screen-width`.
* **Spacing** – Sets both the margin and the padding of a widget.

For native mobile apps, Atlas Core uses the **Toggle** and **Dropdown** types. CSS variables are not available for native mobile apps.

Design properties can be grouped in the widget properties with a `category`, such as **Appearance** or **Typography**.

An option that applies a theme variable uses the value of that theme setting. When you change the theme setting, the widgets that use the option change with it. For more information on theme settings, see [Customize Styling](/howto/front-end/customize-styling-new/).

Design properties are visible as part of the widget properties:

{{< figure src="/attachments/howto/front-end/atlas-ui/extend-design-properties/studio-pro-design-properties.png" alt="Design Properties in Studio Pro"   width="350"  class="no-border" >}}

For more information on learning how to add design properties, see the [Design Properties API Documentation](/apidocs-mxsdk/apidocs/design-properties-11/).

Developers can also add additional design properties as part of a module. For more information, see the [File and Folder Structure](/howto/front-end/customize-styling-new/#file-and-folder) section of *How to Customize Styling*.
