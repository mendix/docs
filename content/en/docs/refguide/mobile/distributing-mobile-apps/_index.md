---
title: "Building, Testing, and Distributing Apps"
linktitle: "Build, Test, Distribute Apps"
url: /refguide/mobile/distributing-mobile-apps/
category: Mobile
weight: 50
description: "Distribute native mobile apps."
tags: ["distribution", "native", "app stores", "ios", "android"]
aliases:
    - /howto/mobile/distribution/
---

## 1 Introduction

Guides in this section will help you build, test and distribute mobile apps. While web-based applications, including Progressive Web Apps, can be distributed using our built-in publishing process, distributing a Native App requires a few additional steps. Therefore, the guides in this section focus on Native Apps.

* [Building Native Apps](/refguide/mobile/distributing-mobile-apps/building-native-apps/) – The first step to install a native app on a mobile device is to create an application package (IPA on iOS and APK on Android).
* [Distributing Native Apps](/refguide/mobile/distributing-mobile-apps/distributing-native-apps/) – To install an application package, it must be signed and submitted to the appropriate app stores (AppStore on iOS or PlayStore on Android) or installed via a mobile device management (MDM) solution.
* [Updating Native Apps](/refguide/mobile/distributing-mobile-apps/overtheair-updates/) – Native apps are normally updated by building and distributing the updated version. In some situations (mainly for smaller changes) these steps can be skipped with an over-the-air update.
* [Logging In Native Apps](/refguide/mobile/distributing-mobile-apps/logging/) – In Mendix Studio Pro v9.16 and above native mobile apps are able to send logs to the [Mendix Runtime](/refguide/runtime/). Read this guide for information on native app logging configuration.
* [Debugging Native Apps](/refguide/mobile/distributing-mobile-apps/native-debug/) – Web applications can be debugged directly in the web browser. For native apps, this is also possible but requires a few extra steps to set up.
* [Testing Native Apps](/refguide/mobile/distributing-mobile-apps/testing-mobile-apps/) – To test native apps, third-party software is required. This guide explains how to use Appium to test native apps.
