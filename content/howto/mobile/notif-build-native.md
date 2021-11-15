---
title: "Build a Native App with Push Notifications Enabled"
parent: "notifications"
menu_order: 60
description: Tutorial for building a native app with push notifications enabled.
tags: ["mobile", "native", "push", "local", "firebase"]
---

## 1 Introduction

Now that you have implemented push notifications, it is time to build and deploy the native mobile app. Deploying your iOS or Android app allows the server to send push notifications to mobile devices which have your app installed.

## 2 Build Your Native App

1.  In Studio Pro top bar navigation, click **App** > **Build Native Mobile App**. </br>
	a. If you are building your native app for the first time, click [here]() for instructions.
1. After choosing the type of build (local development or distribution) go to `App capabilities`
1. Under `Firebase configuration` switch `Push notifications` to **On**
1.  Scroll down and upload the firebase configurations
    a. `google-services.json` for the Android build
    b. `GoogleServices-Info.plist` for the iOS build
1. Save the configuration and now you are ready to build

When building for local development, keep in mind that the `Make it Native 8/9` apps from Mendix do not support your own push notifications. This means you will always have to build your own local package and distribute it to an emulator (Android only)/test device for testing native push notifications.

Now you are able to build, after making sure your application runs in an emulator/test device click here for instructions on sending your first test notification.
