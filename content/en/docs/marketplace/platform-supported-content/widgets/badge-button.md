---
title: "Badge Button"
url: /appstore/widgets/badge-button/
description: "Describes the configuration and usage of the Badge Button widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Badge Button](https://marketplace.mendix.com/link/component/52705/) widget can function as a special distinctive mark or token put on any display as a button.

### Features

* Display a badge on a button
* Attach an on-click microflow or nanoflow
* Set static data when the persisted data is not specified

## Usage

To use this widget, place it on a page and configure the following properties on the **General** tab:

* **Caption** (in the **General** section) – the text template displayed on the button
    * Default: **Button**
* **Value** (in the **Badge** section) – the text template displayed in the badge on the button
* **On click** (in the **Events** section) – the action executed when the button is clicked

## Styling

The following design properties are available on the **Appearance** tab:

* **Style** – the brand color of the button: **Brand Primary**, **Brand Secondary**, **Brand Success**, **Brand Warning**, or **Brand Danger**
    * When no style is selected, the button uses the primary brand style
* **Size** – **Small** or **Large**
* **Full width** – makes the button take the full width of its container
* **Border** – shows the button with a border
