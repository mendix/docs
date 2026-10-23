---
title: "Optimizing Native Startup"
url: /refguide9/mobile/building-efficient-mobile-apps/native-startup/
weight: 15
description: "Describes optimizing native app startup times by tailoring the way your app syncs data."
---

## Introduction

As native apps increase in size, model complexity, and the amount of data they deal, the app’s startup time can increase as well. This is usually caused by too much data being initially synchronized to the device, however there can be other causes. In this guide you will learn what happens at startup and how to optimize your native app for a quick startup experience.

## Startup Activities

Four major things take place when the launch screen is shown:

1. The application is initialized.
2. An over-the-air (OTA) update is downloaded and installed (if available).
3. An initial full sync is executed.
4. If you have a nanoflow as home page, it will be executed.

You can inspect what is actually happening by enabling Trace logs for the various `Client_` log-nodes (most important are `Client_Startup` and `Client_Synchronization`). For more details see [Mobile Logging](/refguide9/mobile/building-efficient-mobile-apps/logging/).

## Application Initialization

Application initialization should not take long in most scenarios. However, it is difficult to debug because it happens before logging is initialized. If you suspect you have a problem with app initialization, check your native modules. Issues in this area are most often caused by problems with native modules.

## Over-the-Air Updates

OTA updates let you upgrade your native client from the cloud without installing an updated version on the cloud. You can enable OTA updates in the native navigation profile. Once enabled, each time you publish your Mendix app an OTA bundle is generated and published as well. For more details see [Updating Native Apps](/refguide9/mobile/distributing-mobile-apps/overtheair-updates/).

The Mendix Client checks for a new OTA update each time end-users start their native mobile apps. If there is no new OTA update the app starts as usual. If there is a new OTA update, the client downloads and installs it automatically. If the size of the OTA package is large, this may slow startup performance as downloading large packages takes time.

OTA updates can be optimized by keeping the application's payload small. Avoid including large images or animations in the static resources of your project or widgets (including their dependencies). 

You can an OTA bundle's size by downloading it via a link like this from a deployed runtime: `https://{YOUR-RUNTIME-URL}/mxota/ios.zip` (or android.zip for Android apps).

## Initial Synchronization

Synchronization ensures that the changes to domain model objects on the client and the runtime are kept in sync. Full synchronization ensures that all changes from the client are sent to the runtime, and all entities that are configured to synchronize “All Objects” are sent to the client. For more details see [Offline Synchronization](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/synchronization/).

The initial full sync cannot be skipped. Therefore, for data-heavy apps it is important to control the sync behavior and use **All Objects** and **By XPath** sparingly. 

It is often better to use **Nothing (preserve data)** and synchronize (using a microflow and Sync-To-Device) only when the data is accessed or refreshed. Excluding file documents and images from startup synchronization and then synchronizing them lazily on-demand can boost your app's performance significantly. 

If you need to synchronize files and images on startup, ensure their size is small. In most cases, image sizes can be reduced by lowering their resolution. You can refer to the **Client_Startup** log node’s logs to see how long your startup synchronization took. For more information on Native Logging, see [Logging in Native Apps](/refguide9/mobile/building-efficient-mobile-apps/logging/).

## Nanoflow Home Page

If you have configured a nanoflow as a startup nanoflow it may affect your app's startup performance—especially if the nanoflow performs additional data synchronization, excessive data operations on the local device, or microflow calls. 

Mendix recommends creating short-running startup nanoflows, because native apps keep showing their splash screen until your startup nanoflow executes a **Show page** action. If you must perform long operations in your startup nanoflow, you can show a page at the beginning to help the end-user understand the process. 
