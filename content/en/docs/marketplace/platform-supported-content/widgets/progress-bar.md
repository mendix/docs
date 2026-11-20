---
title: "Progress Bar"
url: /appstore/widgets/progress-bar/
description: "Describes the purpose, features, and configurations of the Progress Bar widget which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Progress Bar](https://marketplace.mendix.com/link/component/48910/) widget displays a progress bar.

The widget does the following:

* Displays a progress percentage in the form of a bar based on a configurable range
* Offers brand styling for the bar through the **Appearance** design properties
* Offers option for a striped bar

## Usage

The Progress Bar widget requires three values: a **Minimum value** and **Maximum value** to describe the full range of progress as well as a **Current value** to indicate the progression on that range. 

These values can be provided in three different ways, set with the **Type** property: as a **Static** integer value (default), a **Dynamic** value from a Decimal, Integer, or Long attribute, or an **Expression** that returns a Decimal. The default static values are 0 for **Minimum value**, 100 for **Maximum value**, and 50 for **Current value**. An **On click** action can be set onto the progress bar in the **Events** section to trigger custom logic during click interactions.

### Label

Configuring the label on the progress bar can be done on the **Progress Label** tab and has the following options:

* **Show label** – whether to show a label or not (default: **No**)
* **Label type** – the type of the label:
    * **Text** (default): a custom text, set in **Label text**
    * **Percentage**: the **Current value** converted onto the configured range as a percentage. 
    * **Custom**: a custom widget, placed in **Custom label**

### Styling

Under the **Appearance** tab, the following styling properties can be adjusted for the progress bar:

* **Striped bar**: whether the bar should be striped or plain
* **Bar color** based on brand styling: **Primary**, **Success**, **Warning**, or **Danger**
* **Size** (**Small**, **Medium**, and **Large**)
    * Note that when the size is configured to small no label will be shown due to limited space: text and percentage labels are shown as a tooltip on hover, and custom labels are ignored

## Widgets Below Version 2.0.0

Features:

* Show percentage of progress based on value
* Render bar types: plain, striped, or animated stripes
* Use bar Bootstrap colors: success, info, warning, or danger

Place the widget in the context of an object that has attributes for **Progress attribute** and **Maximum value attribute**:

* If **Progress attribute** is not set, **Value static** will be used to calculate the progress
* If **Maximum value attribute** is not set, the maximum value defaults to **Maximum value static**

Progress percentage is calculated via `(value / maximumValue) * 100`.

Depending on the specified Bootstrap style (primary, success, info, warning, danger), the progress bar can appear in the associated colors.

For negative progress values, the bar is drawn from right to left.
