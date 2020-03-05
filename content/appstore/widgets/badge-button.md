---
title: "Badge Button"
category: "Widgets"
description: "Describes the configuration and usage of the Badge Button widget, which is available in the Mendix App Store."
tags: ["app store", "app store component", "widget", "badge button", "token", "platform support"]
draft: true
---

## 1 Introduction

The [Badge Button](https://appstore.home.mendix.com/link/app/52705/) widget can function as a special distinctive mark or token put on any display as a button.

### 1.1 Features

* Display a badge on a button
* Attach an on-click microflow or nanoflow
* Set static data when the persisted data is not specified

### 1.2 Demo App Project

For a demo app project that has been deployed with this widget, see [here](https://badgebutton.mxapps.io/).

## 2 Usage

To use this widget, place it in the context of an object that has a value attribute. However, on the **Badge** tab, the **Badge value attribute** from the data source is optional. If not set, static data should be specified in **Caption** on the **Button** tab.

Behavior is configured on the **Events** tab.
