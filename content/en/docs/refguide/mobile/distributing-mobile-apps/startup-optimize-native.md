---
title: "Optimize Native Startup"
url: /refguide/mobile/distributing-mobile-apps/native-startup/
weight: 32
description: "Describes optimizing native app startup times by tailoring the way your app syncs data."
tags: ["native", "startup", "performance", "optimization"]
---
## 1 Introduction

When native apps increase in size (model complexity and amount of data), the app’s startup time can increase as well. This is usually caused by too much data being initially synchronized to the device--but there could be other causes as well. In this guide you will learn what happens at startup and how to optimize your app for a quick startup experience.


## 2 Startup Activities

There are four major things going on when the launch screen is shown:
 

1. The application is initialized
2. An Over-the-air update is downloaded and installed (if available)
3. An initial Full Sync is executed
4. If you have a nanoflow as home page, it will be executed.

You can inspect what is actually happening by enabling Trace logs for the various `Client_` log-nodes (most important are `Client_Startup` and `Client_Synchronization`). For more details see [Mobile Logging](https://docs.mendix.com/refguide/mobile/distributing-mobile-apps/logging/).

## 3 Application Initialization

Application initialization should not take long in most scenarios and is hard to debug (because this happens before logging is initialized). If you suspect a problem here, please reach out with more details so we can look at it together.

[x] What about bundle size?

## 4 Over-the-Air Updates

Explanation of how OTA and startups are tied together.

Over-the-Air Updates let you upgrade your native client from the cloud without installing an updated version on the cloud. You can enable OTA Updates in the native navigation profile. Once enabled, each time you publish your Mendix application an OTA bundle is generated and published as well. For more details see [Updating Native Apps](https://docs.mendix.com/refguide/mobile/distributing-mobile-apps/overtheair-updates/).

The Mendix client checks for a new OTA update each time end-users start their native mobile apps. If there is no new OTA, the app starts as usual. If there is a new OTA update, the client downloads and installs it automatically. If the size of the OTA package is large, this may affect the startup performance as downloading a larger package would take longer.

Over-the-air updates can be optimized by keeping the payload of the application small. Avoid large images or animations in the static resources of your project or widgets (including their dependencies). You can check the size of the OTA bundle by downloading it via this link from a deployed runtime: https://[RUNTIME-URL]/mxota/ios.zip (or android.zip).

## 5 Initial Synchronization

Synchronization ensures that the changes to domain model objects on the client and the runtime and kept in sync. The full synchronization ensures that all changes from the client are sent to the runtime and all entities that are configured to synchronize “All Objects” are sent to the client. For more details see [Offline Synchronization](https://docs.mendix.com/refguide/mobile/using-mobile-capabilities/offlinefirst-data/synchronization/).

The initial full sync cannot be skipped. Therefore, for data-heavy apps it is important to control the sync behavior and use All Objects/By Xpath only sparingly. It is often better to use Nothing (preserve data) and synchronize (using an MF + Sync-To-Device) only when the data is accessed or refreshed. Excluding file documents / images from startup synchronization and synchronizing them lazily on-demand can boost the performance of your app significantly. If you need to synchronize files / images on startup, ensure that they’re small in size. For example, in most cases, image sizes can be reduced by lowering the resolution. You can refer to the “Client_Startup” log node’s logs to learn how long the startup synchronization takes. 

## 6 Nanoflow Home Page

If you’ve configured a nanoflow as a startup nanoflow, it may affect the startup performance, especially if the nanoflow performs additional data synchronization, excessive data operations on the local device, or microflow calls. We recommend creating short-running startup nanoflows, because the native apps keeps showing the splash screen of your app until your startup nanoflow executes a Show page action. If you must perform long operations in your startup nanoflow, you can show a page at the beginning to let the end-user know about the process. 

