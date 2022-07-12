---
title: "Native Mobile"
url: /refguide/mobile/introduction-to-mobile-technologies/native-mobile/
weight: 10
aliases:
    - /refguide/native-mobile/
    - /howto/mobile/native-mobile/
---

## 1 Introduction

With Mendix you can build fully native mobile apps. Native mobile apps differ from hybrid apps in that they do not render inside a web view. Instead, they use native UI elements. This enables fast performance, smooth animations, like swipe gestures, and improved access to all native device capabilities.

You build Mendix native mobile apps the same way you build web or hybrid apps. You can use familiar elements such as pages, widgets, nanoflows, JavaScript actions, and microflows to put together your app. However, there are some differences between building native apps and hybrid apps. For example, the set of available widgets (and their properties) is slightly different. In addition, native styling is based on JavaScript instead of SASS/CSS. 

## 2 Styling

Native mobile apps' theming and styling is based on JavaScript. For more information on styling, see [Native Styling](/refguide/native-styling-refguide/). 

## 3 Using Device Capabilities

Native mobile apps have full access to all of the device's capabilities. Many capabilities are supported in through standard components. For other capabilities, you can implement a native module.

## 4 Distribution

Native mobile apps must be distribute via AppStores. Updates can be distributed with Over-the-Air Updates.
