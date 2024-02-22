---
title: "Part 5: Implement Push Notifications in Your Native App"
linktitle: "5. Push Notifications in Native App"
url: /refguide9/mobile/using-mobile-capabilities/push-notifications/notif-implement-native/
weight: 60
description: Tutorial for implementing push notifications in a native app.
aliases:
    - /howto9/mobile/notif-implement-native/
---

## 1 Introduction

This section will help you set up the elements which allow your native app to handle push notifications sent from your server Mendix application. After completing this step you will be able to build a native app with support for push notifications.

To make setup easy, the Push Notifications Connector module includes snippets that will help you with the initial setup. Do the following:

1. Expand the **Marketplace modules** > **PushNotifications** > **USE ME** folder.
1. Find and copy the **Native** folder.
1. Paste the **Native** folder contents into your own app's navigation.
1. In your app's navigation, expand the new **Native** folder.
1. Copy the **NativeHomepage_Snippet** snippet.
1. Paste the snippet into your Native navigation’s home page.

## 2 App Events Widget

Completing the previous section brings the **App events** widget into your app. This widget is already configured and part of a snippet, so you should not need to change it. 

If you already had an **App events** widget on your home page, follow these steps:

1. Open the **App events** widget.
1. In  **Page load**, select **Call a nanoflow** from the **On load**  drop-down list. 
1. For **Nanoflow**, click **Select** and specify the nanoflow **OnPageLoad_RegisterPushNotifications** from the **PushNotifications** module:<br /> 
    * If you already have a nanoflow selected, make a **Call nanoflow** activity to the nanoflow in that existing nanoflow.<br />
1. In **App resume**, select **Call a nanoflow** from the **On Resume** drop-down list. 
1. For **Nanoflow**, click and specify the nanoflow **OnPageLoad_RegisterPushNotifications** from the **PushNotifications** module: <br />
    * If you already have a nanoflow selected, make a **Call nanoflow** activity to the  nanoflow in that existing nanoflow. <br /> 

## 3 Notifications Widget

The snippet also adds the **Notifications** widget which lets users interact with the notifications the app receives.

By default this widget is configured with an **Example** action. It uses a non-persistable entity ([NPE](/refguide9/persistability/#non-persistable)) that stores data received from the notifications. It then uses that data in the nanoflow upon receiving or opening the notification.

### 3.1 Configuring Custom Actions

In certain situations, you may wish to configure your own custom actions. For example, if you want to promote a sales offer in a push notification and have a user tap the notification to bring them to the product page, you will require a custom action. 

To configure your own actions, do the following:

1. Copy or inline the snippet **NativeHomepage_Snippet** into your own module.
1. Open the properties of the notifications widget. In the **General** tab, add a new action and give it a unique name. This name should match the action name that is used when sending a notification.
1. In the **"On recieve"** field, select the action you want to be triggered when the notification is recieved while the app is open. For example, use a nanoflow and the Notification object as a parameter (see the **ORN_ExampleNotification** as a reference).
1. In the **"On open"** field, select the action you want to be triggered when the user taps on the notification in the system tray. For example, use a nanoflow and the Notification object as a parameter (see the **OON_ExampleNotification** as a reference).

## 4 Customizing Offline Synchronization

To ensure push notification integration executes properly on your native app you must adjust the objects that are synchronized to your mobile device:

1. Open your app's **Navigation**.
1. Click the **Native mobile (tablet & phone)** navigation tab.
1. Click the **Synchronization configuration** button.
1. If it is not already added, add the **DeviceRegistration** entity from the **PushNotifications** module.
1. From the **Download** dropdown menu, select **All Objects** for that entity and click **OK**.

This will ensure that the correct objects are synchronized to your native apps.

Now that you have everything set up, it is time to deploy your native app. See [Build a Native Mobile App with Push Notifications](/refguide9/mobile/using-mobile-capabilities/push-notifications/notif-build-native/) for instructions on enabling push notifications when building a native app. 
