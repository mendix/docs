---
title: "Using the Hermes Engine in Mendix Native apps"
url: /refguide/mobile/building-efficient-mobile-apps/hermes/
weight: 15
description: "Describes improving native applications performance by enable Hermes engine."
tags: ["native", "startup", "performance", "optimization", "js engine"]
---

## 1 Introduction
As Mendix applications grow in complexity and scale, optimizing performance becomes essential to ensure a smooth user experience. The Hermes engine, an optimized JavaScript engine designed for React Native, offers significant performance enhancements, particularly in terms of application startup time and runtime efficiency. This guide will introduce the Hermes engine, describe the benefits of enabling it, demonstrate how to enable it in Mendix Studio Pro, explain its impact on code, and discuss potential challenges.

## 2 Performance Gain from Enabling Hermes
Enabling the Hermes engine can provide substantial performance improvements for Mendix applications. Key benefits include:

- **Faster Startup Times**: Hermes compiles JavaScript into bytecode ahead of time, reducing the time taken to parse and execute JavaScript at startup.
- **Reduced Memory Usage**: Hermes features efficient garbage collection and memory management, which can lead to lower memory consumption.
- **Improved Execution Speed**: Hermes optimizes the execution of JavaScript, enhancing the performance of complex operations and interactions within the application.

These performance gains are particularly noticeable in applications with extensive JavaScript logic or large data sets.

## 3 Enabling Hermes in Mendix Studio Pro
To enable the Hermes engine in Mendix Studio Pro, follow these steps:

1. **Open Your Project**: Launch Mendix Studio Pro and open the project you wish to enable it for.
2. **Navigate to Navigation Profiles**: In the Project Explorer, go to the `Navigation` section and select `Native mobile (tablet & phone)`.
3. **Enable Hermes**: Within the navigation profile settings, find the option labeled "Enable Hermes" and .
4. **Save and Deploy**: Save your changes and deploy your application to see the benefits of Hermes.

{{% alert color="warning" %}}
* If you enable or disable Hermes and this does not match the Hermes state in the deployed app in the app store/google play, OTA updates will not be available. In this case, you must upload a new version of your application to the store.
  {{% /alert %}}

## 4 Impact on Code
Enabling Hermes generally does not require any modifications to your existing Mendix application code. However, there are some considerations to keep in mind:

- **JavaScript Compatibility**: Ensure that your JavaScript code is compatible with Hermes. Hermes supports most modern JavaScript features, but it is advisable to test your application thoroughly.
- **Debugging**: We don't support hermes debugging yet.

## 5 Challenges When Enabling Hermes
While Hermes offers numerous benefits, there are some potential challenges to be aware of:

- **Compatibility Issues**: Some third-party libraries or native modules might not be fully compatible with Hermes. Test your application thoroughly to identify and resolve any issues.
- **Initial Setup**: Transitioning to Hermes might require initial setup and configuration efforts, especially if your application relies on specific JavaScript features or libraries.

## Conclusion
Enabling the Hermes engine in Mendix native applications can lead to significant performance improvements, particularly in terms of startup time and runtime efficiency. By following the steps outlined in this guide, you can easily enable Hermes and optimize your Mendix applications. Be mindful of potential compatibility issues and debugging changes to ensure a smooth transition.

For further information on optimizing your Mendix applications, refer to the [Mendix documentation](https://docs.mendix.com).
