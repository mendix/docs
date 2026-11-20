---
title: "Progress Circle"
url: /appstore/widgets/progress-circle/
description: "Describes the purpose, features, and configuration of the Progress Circle widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Progress Circle](https://marketplace.mendix.com/link/component/47783/) widget displays a progress in a circle.

The widget does the following:

* Displays a progress percentage in the form of a circle based on a configurable range
* Offers brand styling for the circle color through the **Appearance** design properties

## Usage

The Progress Circle widget requires three values: a **Minimum value** and **Maximum value** to describe the full range of progress as well as a **Current value** to indicate the progression on that range. 

These values can be provided in three different ways, set with the **Type** property: as a **Static** integer value (default), a **Dynamic** value from a Decimal, Integer, or Long attribute, or an **Expression** that returns a Decimal. The default static values are 0 for **Minimum value**, 100 for **Maximum value**, and 50 for **Current value**. An **On click** action can be set onto the progress circle label in the **Events** section to trigger custom logic during click interactions.

By default, the widget shows an error when the **Current value** is higher than the **Maximum value**. To allow such values, set **Allow values above maximum** to **Yes** (default: **No**). The circle then stays full, the percentage label shows the actual value (for example, 120%), and the widget gets the `widget-progress-circle-overflow` class so you can style it. The widget still shows an error when the **Current value** is lower than the **Minimum value**, or when the **Maximum value** is lower than the **Minimum value**.

### Label

Configuring the label on the progress circle can be done on the **Progress Label** tab and has the following options:

* **Show label** – whether to show a label or not (default: **No**)
* **Label type** – the type of the label:
    * **Text** (default): a custom text, set in **Label text**
    * **Percentage**: the **Current value** converted onto the configured range as a percentage. 
    * **Custom**: a custom widget, placed in **Custom label**

### Styling

Under the **Appearance** tab, the following styling properties can be adjusted for the progress circle:

* **Bar color** based on brand styling: **Primary**, **Success**, **Warning**, or **Danger**
* **Size**, which sets the thickness of the circle (**Small**, **Medium**, and **Large**)

## Strict CSP Compatibility

This widget is not yet fully compliant with strict content security policy (CSP). If used with strict CSP, it will result in CSP errors in the console and potentially broken flows in the widget.

## Widgets Below Version 2.0.0

Features:

* Show percentage based on the progress value and maximum progress value
* Animate on load and on update
* Open a page or run a microflow on click
* Show the progress circle with different colors

Place the widget in the context of an object that has attributes for **Value attribute** and **Maximum value attribute**:

* If **Value attribute** is not set, **Value static** will be used to calculate the progress
* If **Maximum value attribute** is not set, the maximum value defaults to **Maximum value static**
