---
title: "Part 6: Build a Native App with Push Notifications Enabled"
url: /refguide/mobile/using-mobile-capabilities/push-notifications/notif-build-native/
weight: 70
description: Tutorial for building a native app with push notifications enabled.
aliases:
    - /howto/mobile/notif-build-native/
---

## 1 Introduction

Now that you have implemented push notifications, it is time to build and deploy the native mobile app. Deploying your iOS or Android app allows the server to send push notifications to mobile devices which have your app installed.

## 2 Building Your Native App {#build-native-app}

1.  In Studio Pro top bar navigation, click **App** > **Build Native Mobile App**: </br>
	a. If you are building your native app for the first time, click [here](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) for instructions.</br>
1. After choosing the type of build (local development or distribution) go to **App capabilities**.</br>
1. Under **Firebase configuration** switch **Push notifications** to **On**.</br>
1.  Scroll down and upload the Firebase configurations:</br>
    a. *google-services.json* for the Android build.</br>
    b. *GoogleServices-Info.plist* for the iOS build.</br>

    These files contain the information and private keys necessary to enable push notifications in your iOS and Android apps. 

    | **File**    | **Source**   | **Usage**      |
    | -------- | -------- | ------- |
    | **google-services.json** | Google Firebase | Firebase configuration and private key, bundled as part of your Android application. |
    | **GoogleServices-Info.plist** | Google Firebase | Firebase configuration and private key, bundled as part of your iOS application. |
1. Save the configuration. Now you are ready to build.

When building for local development, keep in mind that Mendix's Make it Native does not support push notifications. In order to use and test push notifications, you will have to build your own native app as described above and distribute it to an emulator (Android only) or test device.

Now you are able to build, the next step is to run your app in an emulator or test device. This will let you send your first test push notification in the next section.
