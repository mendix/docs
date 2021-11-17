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
	a. If you are building your native app for the first time, click [here](native-build-locally) for instructions.
1. After choosing the type of build (local development or distribution) go to `App capabilities`
1. Under `Firebase configuration` switch `Push notifications` to **On**
1.  Scroll down and upload the Firebase configurations
    a. `google-services.json` for the Android build
    b. `GoogleServices-Info.plist` for the iOS build
1. Save the configuration and now you are ready to build

When building for local development, keep in mind that the `Make it Native` app from Mendix does not support push notifications. In order to use and test push notifications, you will have to build your own native app as described above and distribute it to an emulator (Android only) or test device.

Now you are able to build, the next step is to run your app in an emulator/test device, so you can try to [Send Your First Test Push Notification](notif-send-test).