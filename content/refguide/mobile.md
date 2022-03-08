---
title: "Mobile"
weight: 50
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Mendix allows you to quickly build true [native mobile apps](#nativemobile) and [progressive web apps](progressive-web-app). This document gives an overview of mobile app development with Mendix. 

With Mendix, you can create different channels (for example, responsive, native phone) from a single model using navigation profiles. These mobile profiles can be added and removed separately. If you add a profile, you must also provide a home page for it. For more information on navigation profiles, see [Navigation](navigation). 

## 2 Native Mobile Apps {#nativemobile}

With Mendix 9, it is possible to build fully native mobile apps. Native mobile apps they do not render inside a web view, but use native UI elements instead. This results in fast performance, smooth animations, natural interaction patterns (like swipe gestures), and improved access to all native device capabilities.  To make such responsive native mobile apps, Mendix leverages the popular open-source framework [React Native](https://facebook.github.io/react-native/).

You can use pages, widgets, nanoflows, JavaScript actions, microflows, and many other familiar elements to build your app. For more information on how to to build a native mobile app, see [Get Started with Native Mobile](/howto/mobile/getting-started-with-native-mobile).

Native mobile apps' theming and styling is based on JavaScript. For more information on styling, see [Native Styling](native-styling-refguide). 

## 3 Progressive Web Apps {#pwa}

Progressive web apps (PWAs) are an evolution of traditional web apps. Overall, PWAs tend to behave more like native mobile apps. One key difference, however, is that PWAs do not need to be distributed via an app store but can be accessed directly via the browser.

Progressive web apps have three main characteristics:

* **Installable —** PWAs let you add your app to your user’s home screen and start a full screen app. This makes PWAs feel more fully-capable native apps.
* **Reliable —** Using service workers, PWAs can work offline or partially offline. Mendix PWAs can work partially offline (resources like styling, pages, and images are cached) or fully offline (like native mobile apps).
* **Capable —** PWAs can leverage several device capabilities like the camera and location, and can offer support for web push notifications. Note that support for features depend on which browser is used.

## 4 Offline-First Apps

With Mendix, you can build apps which work regardless of internet connection. Offline-first applications provide end-users with a continuous experience and the confidence that their data is secure in all situations. Pages and logic interact with an offline database on the device itself, and data is synchronized with the server when possible. This results in a nicer UI, increased reliability, and improved device battery life. For more information on offline-first app capabilities, see [Offline First](offline-first).

Mendix's native mobile apps are always configured with offline-first capabilities. When building an app, you can choose to build an online app which continously connects with a server, or an offline-first app that works even without an internet connection. This can be configured by choosing the corresponding navigation profile in Mendix Studio Pro. For more instructions on setting up such a profile, see [Navigation](navigation).

## 5 Main Documents in This Category

* [Native Mobile](native-mobile) – presents information on building fully native mobile apps with the Mendix Platform that utilize native UI elements
* [Progressive Web Apps](progressive-web-app) – explains the capabilities and configurations of progressive web apps
* [Hybrid Mobile](hybrid-mobile) – describes the depreciated state of hybrid mobile in Mendix 9 
* [Offline First](offline-first) – provides details on the architectural concepts of offline-first applications in Mendix
