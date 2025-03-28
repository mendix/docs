---
title: "Hermes Engine"
url: /refguide/mobile/building-efficient-mobile-apps/hermes-engine/
weight: 15
description: "Hermes is a JavaScript engine optimized for React Native, enhancing app performance and efficiency."
aliases:
    - /refguide/mobile/hermes
---

## Introduction

As Mendix applications grow in complexity and scale, optimizing performance is essential for a smooth user experience. The Hermes engine, an optimized JavaScript engine designed for React Native, offers significant performance enhancements — particularly in terms of application startup time and runtime efficiency. This guide will introduce the Hermes engine, describe its benefits, and explain its impact on code.

{{% alert color="info" %}}
Hermes is enabled for all projects in Mendix 10.18.0 or above with no option to disable it.
{{% /alert %}}

## Performance Gain from Enabling Hermes

The Hermes engine can provide substantial performance improvements for Mendix applications. Key benefits include:

* **Faster Startup Times** — Hermes compiles JavaScript into bytecode ahead of time, reducing the time used to parse and execute JavaScript at startup.
* **Reduced Memory Usage** — Hermes features efficient garbage collection and memory management, which can lead to lower memory consumption.
* **Improved Execution Speed** — Hermes optimizes the execution of JavaScript, enhancing the performance of complex operations and interactions within the application.

These performance gains are particularly noticeable in applications with extensive JavaScript logic or large data sets.

## Impact on Code

The Hermes engine generally does not require any modifications to your existing Mendix application code. However, there are some considerations to keep in mind:

* **JavaScript Compatibility** — Ensure that your JavaScript code is compatible with Hermes. Hermes supports most modern JavaScript features, but we advise you test your application thoroughly.
* **Debugging** — Mendix does not support Hermes debugging yet.

## Read More

* [Optimizing Native Startup](/refguide/mobile/building-efficient-mobile-apps/native-startup/)
* [Testing Native Apps](/refguide/mobile/distributing-mobile-apps/testing-mobile-apps/)
