---
title: "Rating"
url: /appstore/widgets/rating/
category: "Widgets"
description: "Describes the configuration and usage of the Star Rating widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "star rating", "rating", "glyphicon", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Rating](https://marketplace.mendix.com/link/component/54611) widget enables rating from 0 to a defined maximum amount using an attribute.

To see the component in the Mendix Marketplace, click here:

{{% button color="dark" href="https://marketplace.mendix.com/link/component/54611" text="See component in Marketplace" title="See component in Marketplace" %}}

{{< figure src="/attachments/appstore/widgets/rating/example.gif" alt="Example" >}}

## 2 Usage

To use this widget, place it in a [data container](/refguide/data-sources/) that has an Integer, Long, or Decimal attribute.

The widget offers the following for configuration:

* An Integer, Long, or Decimal attribute to store the rating on user-interaction
* An action (such as microflow or nanoflow) to trigger when the value of rating changes
* An empty icon, to be shown when the value is not yet selected
* A selected icon, to be shown when the value is selected
* An amount to define the maximum amount of icons to be rendered
* Animation, to define whether the widget should animate when clicking on the desired icon  
* A **Size** design property with two options (`Small` and `Large`) influencing icon size
* [Common properties](/refguide/common-widget-properties/)

This widget is compatible with [Atlas Core](https://marketplace.mendix.com/link/component/117187).

## 3 Widgets Below Version 2.0.0

Features:

* Rate an object with stars
* Display average rating
* Display rating in whole and half stars
* Execute a microflow when the rate is changed
* Configurable star colors
* Flexible number of stars
* Support for mobile touch events

In order to overwrite the default star icon, add these classes to your app theme and replace the content with your preferred glyphicon:

```text
 .rating-flag [class*="widget-star-rating-full"]:before {
  content: "\e034"; /* flag icon */ 
 }
.rating-flag .widget-star-rating-empty:before {
  content: "\e034"; /* flag icon */
 }
```

The `rating-flag` class should be added to the widget configuration on the **Common** tab.
