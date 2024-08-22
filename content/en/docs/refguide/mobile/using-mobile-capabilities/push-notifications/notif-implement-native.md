---
title: "Part 5: Implement Push Notifications in Your Native App"
linktitle: "5. Push Notifications in Native App"
url: /refguide/mobile/using-mobile-capabilities/push-notifications/notif-implement-native/
weight: 60
description: Tutorial for implementing push notifications in a native app.
aliases:
    - /howto/mobile/notif-implement-native/
    - /howto/mobile/notif-build-native/
    - /refguide/mobile/using-mobile-capabilities/push-notifications/notif-build-native/
---

## Introduction

This guide will help you set up, build, and publish your native app to handle push notifications. Deploying your iOS or Android app allows the server to send push notifications to mobile devices which have your app installed.

To make setup easy, the Push Notifications Connector module includes snippets that will help you with the initial setup. Do the following:

1. Expand the **Marketplace modules** > **PushNotifications** > **USE ME** folder.
1. Find and copy the **Native** folder.
1. Paste the **Native** folder contents into your own app's navigation.
1. In your app's navigation, expand the new **Native** folder.
1. Copy the **NativeHomepage_Snippet** snippet.
1. Paste the snippet into your Native navigation’s home page.

## App Events Widget

Completing the previous section brings the **App events** widget into your app. This widget is already configured and part of a snippet, so you should not need to change it. 

If you already had an **App events** widget on your home page, follow these steps:

1. Open the **App events** widget.
1. In  **Page load**, select **Call a nanoflow** from the **On load**  drop-down list. 
1. For **Nanoflow**, click **Select** and specify the nanoflow **OnPageLoad_RegisterPushNotifications** from the **PushNotifications** module:<br /> 
    * If you already have a nanoflow selected, make a **Call nanoflow** activity to the nanoflow in that existing nanoflow.<br />
1. In **App resume**, select **Call a nanoflow** from the **On Resume** drop-down list. 
1. For **Nanoflow**, click and specify the nanoflow **OnPageLoad_RegisterPushNotifications** from the **PushNotifications** module: <br />
    * If you already have a nanoflow selected, make a **Call nanoflow** activity to the nanoflow in that existing nanoflow. <br /> 

## Notifications Widget

The snippet also adds the **Notifications** widget which lets users interact with the notifications the app receives.

By default this widget is configured with an **Example** action. It uses a non-persistable entity ([NPE](/refguide/persistability/#non-persistable)) that stores data received from the notifications. It then uses that data in the nanoflow upon receiving or opening the notification. Use this example to make your own actions. 

## Customizing Offline Synchronization

To ensure push notification integration executes properly on your native app you must adjust the objects that are synchronized to your mobile device:

1. Open your app's **Navigation**.
1. Click the **Native mobile (tablet & phone)** navigation tab.
1. Click the **Synchronization configuration** button.
1. If it is not already added, add the **DeviceRegistration** entity from the **PushNotifications** module.
1. From the **Download** dropdown menu, select **All Objects** for that entity and click **OK**.

This will ensure that the correct objects are synchronized to your native apps.

## Building Your Native App {#build-native-app}

Now that you have everything set up, it is time to deploy your native app:

1. In Studio Pro top bar navigation, click **App** > **Build Native Mobile App**: </br>
    * If you are building your native app for the first time, click [here](/refguide/mobile/distributing-mobile-apps/building-native-apps/native-build-locally/) for instructions.</br>
1. After choosing the type of build (local development or distribution) go to **App capabilities**.</br>
1. Under **Firebase configuration** switch **Push notifications** to **On**.</br>
1. Scroll down and upload the Firebase configurations:</br>
    1. *google-services.json* for the Android build.</br>
    1. *GoogleServices-Info.plist* for the iOS build.</br>

    These files contain the information and private keys necessary to enable push notifications in your iOS and Android apps. 

    | **File**    | **Source**   | **Usage**      |
    | -------- | -------- | ------- |
    | **google-services.json** | Google Firebase | Firebase configuration and private key, bundled as part of your Android application. |
    | **GoogleServices-Info.plist** | Google Firebase | Firebase configuration and private key, bundled as part of your iOS application. |
1. Save the configuration. Now you are ready to build.

When building for local development, keep in mind that Mendix's Make It Native app does not support push notifications. In order to use and test push notifications, you will have to build your own native app as described above and distribute it to an emulator (Android only) or test device.

Now you are able to build, the next step is to run your app in an emulator or test device. Proceed to [part 7](/refguide/mobile/using-mobile-capabilities/push-notifications/notif-send-test/) to send your first push notifications or continue with the next section to set up push notifications for progressive web apps.
