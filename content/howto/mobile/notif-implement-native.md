---
title: "Implement Push Notifications in Your Native App"
parent: "notifications"
menu_order: 58
description: Tutorial for implementing push notifications in a native app.
tags: ["mobile", "native", "push", "local", "firebase"]
---

## 1 Introduction

This how-to will help you model the required elements for allowing your native application to handle push notifications send from your server Mendix application. After completing this step you will be able to build a native application with support for push notifications.

To make setup easy the module has snippets included that will help you with the initial setup.

1. Expand the **Marketplace modules** > **PushNotifications** > **USE ME** folder.
1. Find and copy the **Native** folder.
1. Paste the **Native** folder contents into your own app's navigation.
1. In your app's navigation, expand the new **Native** folder.
1. Copy the snippet **NativeHomepage_Snippet**.
1. Paste the snippet into your Native navigation’s homepage.

## 2 App Events Widget

Following the previous section's instructions will bring the **App events** widget into your app. This widget is already configured and part of a snippet, so you should not need to change it. 

If you already had an **App events** widget on your homepage, follow these steps:

1. Open the **App events** widget.
1.  In  **Page load**, select **Call a nanoflow** from the **On load**  dropdown menu. 
2.  For **Nanoflow**, click **Select** and specify the nanoflow **OnPageLoad_RegisterPushNotifications** from the **PushNotifications** module.<br /> 
	a. If you already have a nanoflow selected, make a **Call nanoflow** activity to the nanoflow in that existing nanoflow.<br />
1. In **App resume**, select **Call a nanoflow** from the **On Resume** dropdown menu. 
1. For **Nanoflow**, click and specify the nanoflow **OnPageLoad_RegisterPushNotifications** from the **PushNotifications** module. <br />
    a. If you already have a nanoflow selected, make a **Call nanoflow** activity to the  nanoflow in that existing nanoflow. <br /> 

## 3 Notifications Widget

The snippet also adds the **Notifications** widget which lets users interact with the notifications the app recieves.

By default this widget is configured with an **Example** action. It uses a non-persistable entity ([NPE](/refguide/persistability#non-persistable)) that stores data received from the notifications, and then uses that data in the nanoflow upon receiving or opening the notification. Use this example to make your own actions. 

## 4 Customize Offline Synchronization

To ensure push notification integration executes properly on your native app you must adjust the objects that are synchronized to your mobile device:

1. Open your app's **Navigation**.
1. Click the **Native mobile (tablet & phone)** navigation tab.
1. Click the **Synchronization configuration** button.
1. If it is not already added, add the **DeviceRegistration** entity from the **PushNotifications** module.
1. From the **Download** dropdown menu, select **All Objects** for that entity and click **OK**.

This will ensure that the correct objects are synchronized to your native apps.

Now that you have everything set up it is time to deploy your native app. See [Build a Native Mobile App with Push Notifications](notif-build-native) for instructions on enabling push notifications when building a native app. 