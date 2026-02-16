---
title: "Mobile"
url: /refguide9/mobile/
weight: 50
description: "Gives an overview of mobile app development with Mendix."
no_list: true
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
aliases:
    - /howto9/mobile/
---
## Introduction

With Mendix, you can use just one platform which supports various styles of mobile app development (native, web, PWA) for multiple devices. Mendix also provides common mobile back-end services.

Mendix allows you to quickly build true [native mobile apps](/refguide9/native-mobile/) and [progressive web apps](/refguide9/progressive-web-app/). This document gives an overview of mobile app development with Mendix. 

With Mendix, you can create different channels (for example, responsive, native phone) from a single model using navigation profiles. These mobile profiles can be added and removed separately. If you add a profile, you must also provide a home page for it. For more information on navigation profiles, see [Navigation](/refguide9/navigation/). 

## Getting Started with Mobile

As you begin mobile development with Mendix, our [Getting Started with Mobile](/refguide9/mobile/getting-started-with-mobile/) guide can help you learn the basics. This how-to teaches you how to create a native mobile Mendix app. After you create it, you will view your app on a mobile device using our [Make It Native](/releasenotes/mobile/make-it-native-parent/) testing app. Getting Started with Mobile is a lean guide designed to show the basics of mobile development.

For a broader introduction to Mendix development, you may also use the [Quick Starts](/quickstarts/) to learn some Studio Pro fundamentals:

* Learn Mendix Studio Pro's UI 
* Make a web app that uses the Domain Model, dynamic data, and handles logic with a microflow
* Add a native mobile navigation profile to your web app
* Give your native app the ability to take pictures and upload them to a database, then test it with the Make it Native app

## Mobile Technologies

With Mendix Studio Pro, you can build both native mobile apps and progressive web apps. Progressive web apps are the next evolution of web apps, and your users can access them directly from the browser instead of downloading them from an app store. Native mobile apps are distributed via app stores, and offer improved access to native device capabilities as well as fast performance.

For more information on the capabilities of various mobile apps, see [Introduction to Mobile Technologies](/refguide9/mobile/introduction-to-mobile-technologies/).

## Designing Mobile User Interfaces

Well-designed mobile apps take various design requirements into consideration. For example, users frequently change location while using them, often do so on a small screen, and might only use the app in short bursts of activity. Luckily Mendix uses technology that addresses these requirements, and provides design documentation to help you build user-friendly apps.

In web apps, you can use CSS to style the user interface. Styling in native mobile is different. Mendix's native mobile apps are based on React Native, which has its own styling system that uses JavaScript instead. You can style the UI elements by using JSON objects and setting their names to the corresponding widget’s class properties.

For more information on design and styling, see [Designing Mobile User Interfaces](/refguide9/mobile/designing-mobile-user-interfaces/).

## Building Efficient Mobile Applications

After you have built your application and tested it on end-user devices, you may notice room for improvement. With targeted data syncs, smart logs, and more you can optimize your apps for the smoothest developer and user experience possible.

The following documents will help you understand data syncing, accelerate your app's performance, and more:

* [Optimizing Native Startup](/refguide9/mobile/building-efficient-mobile-apps/native-startup/) – This guide teaches you how to speed up your native app's startup time.
* [Logging In Native Apps](/refguide9/mobile/building-efficient-mobile-apps/logging/) – In Mendix Studio Pro 9.16 and above, native mobile apps are able to send logs to the [Mendix Runtime](/refguide9/runtime/). Read this guide for information on native app logging configuration.
* [Offline-First Data](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/): native and progressive web apps use an offline database and a synchronization mechanism to replicate data on the client for efficient access and offline capabilities

## Using Mobile Capabilities

Building apps with Mendix gives you access to several mobile capabilities:

* [Deep Links](/refguide9/mobile/using-mobile-capabilities/deep-links/): native apps can define a custom URL scheme (for instance, `my-app://`) that allows other apps to access pages and functionalities of the app
* [Location and Maps](/refguide9/mobile/using-mobile-capabilities/location-and-maps/): native apps can access the user location and display native maps inside the application
* [Push Notifications](/refguide9/mobile/using-mobile-capabilities/push-notifications/): native apps can present a notification to the user that is triggered by the runtime even if the app is not running
* [Local Notifications](/refguide9/mobile/using-mobile-capabilities/location-and-maps/): in addition to push notifications, native apps can schedule notifications to be shown at a specific time even if the app is not running
* [Augmented Reality](/refguide9/mobile/using-mobile-capabilities/augmented-reality/): native apps can render 3D objects in the physical environments via the camera stream of a mobile device

Although this document is located in a different category, for more information offline-first capabilities see the following:

* [Offline-First Data](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/): native and progressive web apps use an offline database and a synchronization mechanism to replicate data on the client for efficient access and offline capabilities

For more information on empowering your apps, see [Using Mobile Capabilities](/refguide9/mobile/using-mobile-capabilities/).

## Building, Testing, and Distributing Apps

Distributing web apps is a single step; deploying to the production environment lets your end-users access the latest version of the web app. However, native mobile apps require more steps. Part of the application model (pages, nanoflows, and JavaScript actions) are distributed as part of the native mobile app. Even if you deploy a new version of the app, your end users will be interacting with the old version. That is why a second step is needed: distribution. To distribute the latest version of a native mobile app to users, you can either build a new version using the Native Mobile Builder and then release it to online app stores, or you can use the [over-the-air](/refguide9/mobile/distributing-mobile-apps/overtheair-updates/) update mechanism to update the app elements stored in the apps without releasing a new version of your native mobile app. For more information on all aspects of the app lifecycle, see [Building, Testing, and Distributing Apps](/refguide9/mobile/distributing-mobile-apps/).

As your native mobile app gets more complex, monitoring your app's behavior and users' interactions becomes an essential part of your app development cycle. Therefore Mendix supports sending default and custom logs of different levels from the Mendix native app to the [Mendix Runtime](/refguide9/runtime/). This allows app administrators to monitor the app, gain insight on different app states, and possess an improved overview for troubleshooting. To learn more about logging in native mobile apps, see [Logging](/refguide9/mobile/building-efficient-mobile-apps/logging/).

We also have the information you need to [test](/refguide9/mobile/distributing-mobile-apps/testing-mobile-apps/) and [debug](/refguide9/mobile/distributing-mobile-apps/native-debug/) your Mendix apps. To debug a web app's JavaScript, you simply open the developer console. But to debug a Mendix native app, you can use the Make It Native testing app's **Enable Remote JS Debugging** function to open the app up to normal debugging with Chrome.
