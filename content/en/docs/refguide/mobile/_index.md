---
title: "Mobile"
url: /refguide/mobile/
weight: 50
no_list: false 
description_list: true 
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
aliases:
    - /howto/mobile/
---
## 1 Introduction

With Mendix, you can use just one platform which supports various styles of mobile app development (native, web, PWA) for multiple devices. Mendix also provides common mobile back-end services.

Mendix allows you to quickly build true [native mobile apps](/refguide/native-mobile/) and [progressive web apps](/refguide/progressive-web-app/). This document gives an overview of mobile app development with Mendix. 

With Mendix, you can create different channels (for example, responsive, native phone) from a single model using navigation profiles. These mobile profiles can be added and removed separately. If you add a profile, you must also provide a home page for it. For more information on navigation profiles, see [Navigation](/refguide/navigation/). 

## 2 Getting Started with Mobile

As you begin mobile development with Mendix, our [Getting Started with Mobile](/refguide/mobile/getting-started-with-mobile/) guide can help you learn the basics. This simple guide will teach you to create a native mobile Mendix app. After you create it, you will view your app on a mobile device using our [Make It Native](/releasenotes/mobile/make-it-native-parent/) testing app. Getting Started with Mobile is a lean guide designed to show the basics of mobile development.

For a broader introduction to Mendix development, you may also use the [Quickstart](/refguide/quickstart-guide/) guide to learn some Studio Pro fundamentals:
* Learn Mendix Studio Pro's UI 
* Make a web app that uses the Domain Model, dynamic data, and handles logic with a microflow
* Add a native mobile navigation profile to your web app
* Give your native app the ability to take pictures and upload them to a database, then test it with the Make it Native app

## 3 Mobile Technologies

With Mendix Studio Pro, you can build both native mobile apps and progressive web apps. Progressive web apps are the next evolution of web apps, and your users can access them directly from the browser instead of downloading them from an app store. Native mobile apps are distributed via app stores, and offer improved access to native device capabilities as well as fast performance.

For more information on the capabilities of various mobile apps, see [Introduction to Mobile Technologies](/refguide/mobile/introduction-to-mobile-technologies/).

## 4 Designing Mobile User Interfaces

Well-designed mobile apps take various design requirements into consideration. For example, users frequently change location while using them, often do so on a small screen, and might only use the app in short bursts of activity. Luckily Mendix uses technology that addresses these requirements, and provides design documentation to help you build user-friendly apps.

In web apps, you can use CSS to style the user interface. Styling in native mobile is different. Mendix's native mobile apps are based on React Native, which has its own styling system that uses JavaScript instead. You can style the UI elements by using JSON objects and setting their names to the corresponding widget’s class properties.

For more information on design and styling, see [Designing Mobile User Interfaces](/refguide/mobile/designing-mobile-user-interfaces/).

## 5 Using Mobile Capabilities

Building apps with Mendix gives you access to several mobile capabilities:

* [Local Push Notifications](/refguide/mobile/using-mobile-capabilities/local-notifications/): these allow you to schedule and send notifications confined to one mobile device
* [Push Notifications](/refguide/mobile/using-mobile-capabilities/push-notifications/): sometimes referred to as "remote" notifications, push notifications allow you to send notifications to multiple devices
* [Augmented Reality](/refguide/mobile/using-mobile-capabilities/augmented-reality/): add virtual objects to the real world through the mobile phone camera view, then allow users to interact with them
* [Offline-First Data](/refguide/mobile/using-mobile-capabilities/offlinefirst-data/): consult our guides and best practices to make offline-first apps which work regardless of internet connection 
* [Locations & Maps](/refguide/mobile/using-mobile-capabilities/location-&-maps/): use the Maps module to include map capabilities in your native mobile apps
* [Deep Links](/refguide/mobile/using-mobile-capabilities/deep-links/): learn how to make a tailored URL that can open an app and pass additional data

For more information on empowering your apps, see [Using Mobile Capabilities](/refguide/mobile/using-mobile-capabilities/).

## 6 Building, Testing, and Distributing Apps

* Summarize the necessary steps to build and distribute a mobile app
* Explain briefly why testing/debugging works different from web apps
* [Building, Testing and Distributing Aps](/refguide/mobile/distributing-mobile-apps/)
