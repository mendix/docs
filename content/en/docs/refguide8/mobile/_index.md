---
title: "Mobile"
url: /refguide8/mobile/
weight: 50
no_list: false
description_list: true 
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Mendix allows you to quickly build true [native mobile apps](#nativemobile) and [hybrid apps](#hybridmobile). This document gives an overview of mobile app development with Mendix. 

With Mendix, you can create different channels (for example, responsive, hybrid mobile, native phone) from a single model using navigation profiles. These mobile profiles can be added and removed separately. If you add a profile, you must also provide a home page for it. For more information on navigation profiles, see [Navigation](/refguide8/navigation/). 

## Native Mobile Apps {#nativemobile}

With Mendix 8, it is possible to build fully native mobile apps. Native mobile apps differ from hybrid apps: they do not render inside a web view, but use native UI elements instead. This results in fast performance, smooth animations, natural interaction patterns (like swipe gestures), and improved access to all native device capabilities.  To make such responsive native mobile apps, Mendix leverages the popular open-source framework [React Native](https://facebook.github.io/react-native/).

You build Mendix native mobile apps the same way you build web or hybrid apps. You can use pages, widgets, nanoflows, JavaScript actions, microflows, and many other familiar elements to build your app. For more information on how to build a native mobile app, see [Get Started with Native Mobile](/howto8/mobile/getting-started-with-native-mobile/).

There are some differences, however, between building native mobile apps and building hybrid apps. For example, the set of widgets (and their available properties) differs slightly when optimizing for native mobile apps. In addition, native mobile apps' theming and styling is based on JavaScript instead of SASS/CSS. For more information on styling, see [Native Styling](/refguide8/native-styling-refguide/). 

## Hybrid Mobile Apps {#hybridmobile}

Mendix's hybrid mobile apps are versatile apps viewed through mobile web browsers. Some mobile device features, however, cannot be accessed through the HTML and JavaScript on which these apps are built.

Mendix uses [Cordova](https://cordova.apache.org/) in combination with [local builds](/howto8/mobile/build-hybrid-locally/) to build mobile apps which can leverage certain device features and be published to the Apple App Store or Google Play store. Cordova creates a native wrapper around a web application and provides access to native functions through a JavaScript API. These apps are called "hybrid" because they are hybrids of both web and native apps.

For your hybrid app to access a device's native functions, Mendix provides several widgets in the [Mendix Marketplace](https://marketplace.mendix.com/). You can also build your own custom widgets or JavaScript actions which leverage native features. For more information on building custom widgets or JavaScript actions, see [How to Build Pluggable Widgets](/howto8/extensibility/pluggable-widgets/) and [Build JavaScript Actions](/howto8/extensibility/build-javascript-actions/), respectively.

## Offline-First Apps

With Mendix, you can build apps which work regardless of internet connection. Offline-first applications provide end-users with a continuous experience and the confidence that their data is secure in all situations. Pages and logic interact with an offline database on the device itself, and data is synchronized with the server when possible. This results in a nicer UI, increased reliability, and improved device battery life. For more information on offline-first app capabilities, see [Offline First](/refguide8/offline-first/).

Mendix's native mobile apps are always configured with offline-first capabilities. When building a hybrid mobile app, you can choose to build an online app which continously connects with a server, or an offline-first app that works even without an internet connection. This can be configured by choosing the corresponding navigation profile in Mendix Studio Pro. For more instructions on setting up such a profile, see [Navigation](/refguide8/navigation/).

## Documents in This Category
