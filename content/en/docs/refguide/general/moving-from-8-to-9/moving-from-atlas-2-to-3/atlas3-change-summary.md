---
title: "Atlas 3 Change Summary"
url: /refguide/atlas3-change-summary/
weight: 7
tags: ["Atlas", "UI", "UX", "user experience", "design"]

---

## 1 Introduction

This document is a high-level summary of the changes Atlas 3 brings to Mendix.

## 2 High-Level Summary

Atlas 3 includes many changes to style and branding, and has a more modern look and feel. The differences between Atlas 2 and Atlas 3 are best expressed through comparison, using our reference apps. To learn more about how your app can look with Atlas 3, see the [Atlas Design System](https://atlasdesignsystem.mendixcloud.com/) website.

On both web and native, improvements have been made to layouts, widgets, building blocks, and page templates. These changes include but are not limited to layout and spacing, colors and aesthetics, and user experience.

### 2.1 New Theme

Our new theme has the following advantages:

* Updated color palette
* Values changed in variables
* Introduced exclusion variables for widget default styling
* Changed from Mendix Blue to Ultramarine
* MxDock added to template to create one unified platform experience

### 2.2 Grid System

Our new grid system has the following advantages:

* Moved to an 8 pixel grid system
* Provides a good basic unit to work with (the numbers 4 and 8 are easily multiplied)
* Offers more uniformity in design

### 2.3 Float Removal

Our removal of float has the following advantages:

* Removal of the use of “float: left” and “float: right” throughout Atlas core
* Migration of float to flex layout
* Removal of the reliance on floats for layout (flex is more a modern option than float)

### 2.4 Design Properties 

Consult the table below for a summary of the changes to existing design properties.

| Spacing options - <br>added spacing-inner, spacing-inner-medium, spacing-inner-large | Introduction of options for inner spacing to all components. Align design properties with that of native. Design in the two mediums of native and web should be the same experience. |
| --- | --- |
| Spacing outer options                                        | Previous spacing options are renamed to outer to be more explicit and to refer to “margin”, while inner refers to “padding”. Aligning design implementation between native and web. |
| Streamlined style options                                    | Across a number of widgets we have streamlined the options available for style to primary, secondary, success, warning and danger. The options of “brand-inverse” and “brand-info” are still actionable classes in the sass framework. |

Consult the table below for a summary of additional design properties.

| Tab Container                    | Addition of design properties for tab styling and positioning. |
| --- | --- |
| Datagrid 2                       | Addition of design properties for styling and layout of the datagrid 2. |
| Badge                            | Addition of style design property for styling the new updated badge. |
| Badge Button                     | Addition of design properties for design of the badge button, same properties as that of the standard button: style, size, full-width and border. |
| Progress Circle                  | Addition of design properties for styling the new updated progress circle. Properties including bar color and bar thickness. |
| Progress Bar                     | Addition of design properties for the styling the new updated progress bar. Properties including bar color and bar thickness. |
| Additional background variants   | Dark and light variations can be added to your background colors via design properties. |
| Responsive images with image-fit | Options can now be added for images to be resized to fit its container. options include fill, contain, cover and scale-down. |

### 2.5 Web Environment Changes

Here is a list of key changes pertaining to the web environment:

* The color palette has been improved which influences all aspects of design and user-experience, from widgets to page templates
* Layout and spacing now relies on an 8 pixel system, creating more uniformity in design
* Display type **flex** has been used instead of **float** where possible
* Many design properties have been introduced, and existing ones have recieved added options:
  * **Inner** spacing options allowing users to configure **padding** for widgets. This applies to all widgets
    * Previous spacing options are now renamed to **Outer** to be more explicit and apply to **margin** for widgets
  * Structure  widgets get a new **gradient** option for background color
  * Structure  widgets get a **shade** design property with options to apply shades to background colors
  * List View widgets get a **style** option to add horizontal borders at the top and bottom of each list item
  * Static and dynamic images each get a new design property to assist with fitting images (for example fill, contain, cover, or scale-down)
  * Tab container widgets get new design properties to style and space tabs
  * Text widgets get a new **color** option to color text white
  * Table widgets get new design properties for styling and layout
* Helper classes have been added (in *core/base/_spacing.scss*) to assist with the following:
  * Spacing
  * Shadows
  * Widget height
  * Widget width
  * Widget borders
* Some design properties have been removed:
  * Info and Inverse brand styles for all widgets
* Some design properties have been deprecated:
  * List View widgets’ **styleless** option
* Design properties such as **Style**, **Color**, and **Background color** that had a **Brand Default** option are now called **Brand Secondary**

## 3 UI Content

If you are using building blocks or page templates, please make sure you download the corresponding modules from the [Mendix Marketplace](https://marketplace.mendix.com/).

For the web platform, download the [Atlas Web Content](https://marketplace.mendix.com/link/component/117183) module:

{{< figure src="/attachments/refguide/general/moving-from-8-to-9/moving-from-atlas-2-to-3/atlas3-change-summary/atlas-web-content-marketplace.png" alt="Atlas web content" >}}

For the native platform, download the [Atlas Native Mobile Content](https://marketplace.mendix.com/link/component/117175) module:

{{< figure src="/attachments/refguide/general/moving-from-8-to-9/moving-from-atlas-2-to-3/atlas3-change-summary/atlas-native-content-marketplace.png" alt="Atlas native content" >}}

## 4 Design Properties for Web

These are the design property changes for Atlas 3 web:

| Parent   | Property   | Removed  | Added  | Renamed   |
| --- | --- | --- | --- | --- |
| Widget  | Spacing Top  |   | {"name": "Inner none","class": "spacing-inner-top-none"},{"name": "Inner small","class": "spacing-inner-top"},{"name": "Inner medium","class": "spacing-inner-top-medium"},{"name": "Inner large","class": "spacing-inner-top-large"} | “None” => "Outer none”“Small” => “Outer small”“Medium” => “Outer medium”“Large” => “Outer large” |
| Widget     | Spacing bottom |          | Same as Spacing Top      | Same as Spacing Top     |
| Widget     | Spacing right    |            | Same as Spacing Top        | Same as Spacing Top      |
| Widget     | Spacing left  |        | Same as Spacing Top     | Same as Spacing Top   |
| DivContainer     | Background color             | {  "name": "Brand Default",  "oldNames": [    "Default"  ],  "class": "background-default"},{  "name": "Brand Inverse",  "oldNames": ["Inverse"],  "class": "background-inverse"},{  "name": "Brand Info",  "oldNames": ["Info"],  "class": "background-info"}, | {  "name": "Background Primary",  "oldNames": ["Background Default"],  "class": "background-main"},{  "name": "Brand Secondary",  “oldNames”: [“Brand Default”, “Default”]  "class": "background-secondary"},{  "name": "Brand Gradient",  "class": "background-brand-gradient"} |                                                              |
| DivContainer       | Shade (new)      |           | {"name": "Light","class": "background-light"},{"name": "Dark","class": "background-dark"} |          |
| GroupBox        | Style                        | {"name": "Brand Default","oldNames": ["Default"],"class": "groupbox-default"},{"name": "Brand Inverse","oldNames": ["Inverse"],"class": "groupbox-inverse"},{"name": "Brand Info","oldNames": ["Info"],"class": "groupbox-info"}, | {"name": "Brand Secondary","oldNames": ["Default", "Brand Default"],"class": "groupbox-secondary"}, |          |
| StaticImageViewer        | Fit (new)       |           | {"name": "Fill","class": "img-fill"},{"name": "Contain","class": "img-contain"},{"name": "Cover","class": "img-cover"},{"name": "Scale-down","class": "img-scale-down"} |             |
| DynamicImageViewer    | Fit (new)   |         | Same as StaticImageViewer  |                                                              |
| Label                                                        | Style                        | {"name": "Brand Default","oldNames": ["Default"],"class": "label-default"},{"name": "Brand Inverse","oldNames": ["Inverse"],"class": "label-inverse"},{"name": "Brand Info","oldNames": ["Info"],"class": "label-info"}, | {"name": "Brand Secondary","oldNames": ["Default", "Brand Default"],"class": "label-secondary"}, |                                                              |
| TabContainer (new)       |     |        |      |       |
| DynamicText      | FontWeight renamed to Weight |      |     |     |
| DynamicText   | Size (new)   |        | {"name": "Small","class": "text-small"},{"name": "Large","class": "text-large"} |      |
| DynamicText   | Color   | {"name": "Brand Default","oldNames": ["Default"],"class": "text-default"},{"name": "Brand Inverse","oldNames": ["Inverse"],"class": "text-inverse"},{"name": "Brand Info","oldNames": ["Info"],"class": "text-info"}, | {"name": "White","class": "text-white"},{  "name": "Brand Secondary",  "oldNames": ["Default", "Brand Default"],  "class": "text-secondary"}, |                                                              |
| Table (new )    |     |       |          |     |
| com.mendix.widget.custom.badge.Badge (new)                   |   |    |   |   |
| com.mendix.widget.custom.progressbar.ProgressBar (new)       |   |    |   |   |
| com.mendix.widget.custom.badgebutton.BadgeButton (new)       |   |    |   |   |
| com.mendix.widget.custom.progresscircle.ProgressCircle (new) |   |    |   |   |

## 5 Design Properties for Native Mobile

These are the design property changes for Atlas 3 native mobile:

| Parent  | Property  | Removed  | Added  |
| --- | --- | --- | --- |
| All      | Background color          | {<br>    "name": "Primary",<br>    "class": "backgroundPrimary"<br>},<br>{<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>}, | {<br>    "name": "Background Primary",<br>    "oldNames": ["Background Default"],<br>    "class": "background-main"<br>},<br>{<br>    "name": "Background Secondary",<br>    "oldNames": ["Background Dashboard"],<br>    "class": "background-secondary"<br>}, |
| Widget                                                       | Spacing top               |                                                              | {<br>    "name": "Smaller",<br>    "class": "spacingOuterTopSmaller"<br>},<br>{<br>    "name": "Larger",<br>    "class": "spacingOuterTopLarger"<br>}, |
| Widget                                                       | Spacing bottom            |                                                              | {<br>    "name": "Smaller",<br>    "class": "spacingOuterBottomSmaller"<br>},<br>{<br>    "name": "Larger",<br>    "class": "spacingOuterBottomLarger"<br>}, |
| Widget                                                       | Spacing right             |                                                              | {<br>    "name": "Smaller",<br>    "class": "spacingOuterRightSmaller"<br>},<br>{<br>    "name": "Larger",<br>    "class": "spacingOuterRightLarger"<br>}, |
| Widget                                                       | Spacing left              |                                                              | {<br>    "name": "Smaller",<br>    "class": "spacingOuterLeftSmaller"<br>},<br>{<br>    "name": "Larger",<br>    "class": "spacingOuterLeftLarger"<br>}, |
| DivContainer                                                 | Background color          | {<br>    "name": "Secondary",<br>    "class": "backgroundSecondary"<br>}, | {<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>},<br>{<br>    "name": "Brand Info",<br>    "class": "backgroundBrandInfo"<br>} |
| ScrollContainer                                              | Background color          | {<br>    "name": "Secondary",<br>    "class": "backgroundSecondary"<br>}, | {<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>},<br>{<br>    "name": "Brand Info",<br>    "class": "backgroundBrandInfo"<br>} |
| Image               | No longer exists          | No longer exists            | No longer exists            |
| StaticImageViewer | Shape   |     | {<br>    "name": "Square",<br>    "class": "imageSquare"<br>},<br>{<br>    "name": "Circle",<br>    "class": "imageCircle"<br>} |
| StaticImageViewer  | Size   |   | {<br>    "name": "Icon",<br>    "class": "imageIcon",<br>    "oldNames": ["imageCircleIcon", "imageSquareIcon"]<br>},<br>{<br>    "name": "Small",<br>    "class": "imageSmall",<br>    "oldNames": ["imageCircleSmall", "imageSquareSmall"]<br>},<br>{<br>    "name": "Medium",<br>    "class": "imageMedium",<br>    "oldNames": ["imageCircleMedium", "imageSquareMedium"]<br>},<br>{<br>    "name": "Large",<br>    "class": "imageLarge",<br>    "oldNames": ["imageCircleLarge", "imageSquareLarge"]<br>},<br>{<br>    "name": "Larger",<br>    "class": "imageLarger",<br>    "oldNames": ["imageCircleLarger", "imageSquareLarger"]<br>},<br>{<br>    "name": "FullSize",<br>    "class": "imageFullSize"<br>} |
| DynamicImage   | No longer exists  | No longer exists  | No longer exists |
| DynamicImageViewer  | Same as StaticImageViewer | Same as StaticImageViewer | Same as StaticImageViewer |
| DynamicText | Color  | {<br>    "name": "Contrast lowest",<br>    "class": "textContrastLowest"<br>},<br>{<br>    "name": "Contrast lower",<br>    "class": "textContrastLower"<br>},<br>{<br>    "name": "Contrast low",<br>    "class": "textContrastLow"<br>},<br>{<br>    "name": "Contrast default",<br>    "class": "textContrastDefault"<br>},<br>{<br>    "name": "Contrast high",<br>    "class": "textContrastHigh"<br>},<br>{<br>    "name": "Contrast higher",<br>    "class": "textContrastHigher"<br>},<br>{<br>    "name": "Contrast highest",<br>    "class": "textContrastHighest"<br>} | {<br>    "name": "Paragraph",<br>    "class": "textParagraph"<br>},<br>{<br>    "name": "Disabled",<br>    "class": "textDisabled"<br>},<br>{<br>    "name": "Black",<br>    "class": "textBlack"<br>}, |
| DynamicText  | Size  |   | {<br>    "name": "Smallest",<br>    "class": "textSmallest"<br>},<br>{<br>    "name": "Largest",<br>    "class": "textLargest"<br>} |
| DynamicText | Weight  | {<br>    "name": "Light",<br>    "class": "textLight"<br>},<br>{<br>    "name": "Semibold",<br>    "class": "textSemiBold"<br>}, |     |
|  | Decoration (New)          |  | {<br>    "name": "Underline",<br>    "class": "textUnderline"<br>},<br>{<br>    "name": "Line Through",<br>    "class": "textLineThrough"<br>} |
| LayoutGrid (New)   |  |    |  |
| LayoutGridRow (New) |   |   |    |
| LayoutGridColumn (New)  |     |    | |
| ListView  | Background color (new)    |   | {<br>    "name": "Primary",<br>    "class": "backgroundPrimary"<br>},<br>{<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>},<br>{<br>    "name": "Brand Primary",<br>    "class": "backgroundBrandPrimary"<br>},<br>{<br>    "name": "Brand Success",<br>    "class": "backgroundBrandSuccess"<br>},<br>{<br>    "name": "Brand Warning",<br>    "class": "backgroundBrandWarning"<br>},<br>{<br>    "name": "Brand Danger",<br>    "class": "backgroundBrandDanger"<br>},<br>{<br>    "name": "Brand Info",<br>    "class": "backgroundBrandInfo"<br>} |
| com.mendix.widget.native.animation.Animation                 | Background color          | {<br>    "name": "Secondary",<br>    "class": "backgroundSecondary"<br>}, | {<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>},<br>{<br>    "name": "Brand Info",<br>    "class": "backgroundBrandInfo"<br>} |
| com.mendix.widget.native.floatingactionbutton.FloatingActionButton | Style                     |                                                              | {<br>    "name": "Secondary",<br>    "class": "floatingActionButtonSecondary"<br>}, |
| com.mendix.widget.native.safeareaview.SafeAreaView           | Background color          | {<br>    "name": "Secondary",<br>    "class": "backgroundSecondary"<br>}, | {<br>    "name": "Gray",<br>    "class": "backgroundGray"<br>},<br>{<br>    "name": "Brand Info",<br>    "class": "backgroundBrandInfo"<br>} |

## 6 Read More

* [Atlas 3 Website](https://www.mendix.com/atlas/)
* [Atlas Design System App](https://atlasdesignsystem.mendixcloud.com/)
* [Studio Pro 9 Release Notes](/releasenotes/studio-pro/9.0/)
