---
title: "Enable Hermes"
url: /refguide/mobile/building-efficient-mobile-apps/enable-hermes/
weight: 15
description: "Improve native app performance by enable the Hermes engine."
aliases:
    - /refguide/mobile/hermes
---

## Introduction

As Mendix applications grow in complexity and scale, optimizing performance becomes essential to ensure a smooth user experience. The Hermes engine, an optimized JavaScript engine designed for React Native, offers significant performance enhancements — particularly in terms of application startup time and runtime efficiency. This guide will introduce the Hermes engine, describe the benefits of enabling it, demonstrate how to enable it in Mendix Studio Pro, explain its impact on code, and discuss potential challenges.

## Performance Gain from Enabling Hermes

Enabling the Hermes engine can provide substantial performance improvements for Mendix applications. Key benefits include:

* **Faster Startup Times** — Hermes compiles JavaScript into bytecode ahead of time, reducing the time used to parse and execute JavaScript at startup.
* **Reduced Memory Usage** — Hermes features efficient garbage collection and memory management, which can lead to lower memory consumption.
* **Improved Execution Speed** — Hermes optimizes the execution of JavaScript, enhancing the performance of complex operations and interactions within the application.

These performance gains are particularly noticeable in applications with extensive JavaScript logic or large data sets.

## Enabling Hermes in Mendix Studio Pro

To enable the Hermes engine in Mendix Studio Pro, do the following:

1. Launch Mendix Studio Pro and open the project you wish to enable it for.
1. In the Project Explorer, go to the **Navigation** section and select **Native mobile (tablet & phone)**.
1. Within the navigation profile settings, select the option labeled **Enable Hermes**.
1. Save your changes and deploy your application to see Hermes' benefits.

{{% alert color="warning" %}}
If you enable or disable Hermes and this does not match the Hermes state in the deployed app in the iOS App Store or Google Play, OTA updates will not be available. In this case, you must upload a new version of your application to the store.
{{% /alert %}}

## Impact on Code

Enabling Hermes generally does not require any modifications to your existing Mendix application code. However, there are some considerations to keep in mind:

* **JavaScript Compatibility** — Ensure that your JavaScript code is compatible with Hermes. Hermes supports most modern JavaScript features, but we advise you test your application thoroughly.
* **Debugging** — Mendix does not support Hermes debugging yet.

## Challenges When Enabling Hermes

While Hermes offers numerous benefits, there are some potential challenges to be aware of:

* **Compatibility Issues** — Some third-party libraries or native modules might not be fully compatible with Hermes. Test your application thoroughly to identify and resolve any issues.
* **Initial Setup** — Transitioning to Hermes might require initial setup and configuration efforts, especially if your application relies on specific JavaScript features or libraries.

## Read More
  
* [Optimizing Native Startup](/refguide/mobile/building-efficient-mobile-apps/native-startup/)
* [Testing Native Apps](/refguide/mobile/distributing-mobile-apps/testing-mobile-apps/)
