---
title: "Test the Push Notifications Implementation"
url: /howto8/mobile/testing-the-implementation/
weight: 60
tags: ["mobile", "push notification"]
---

## 1 Introduction

Once you finish implementing the steps described in [How to Implement Push Notifications](/howto8/mobile/implementation-guide/), you need to test whether your push notifications work correctly. 

## 2 Prerequisites

To begin testing your push notifications, you will need to build new versions of your mobile application:

1. Navigate to the [Developer Portal](https://sprintr.home.mendix.com/index.html), then click your app.
2. Click **Deploy** > **Mobile App**.
3. Make sure the check box **Permissions** > **Push Notifications** is selected.
4. Click **Publish for Mobile App Stores**.
5. Select the **Do it yourself** check box, make sure your preferred environment is selected, and then click **Download Customizable Package**. 

This will give you a *zip* app that you can use to customize your app according to the [hybrid app package documentation](https://github.com/mendix/hybrid-app-template/). The *zip* app contains a *config.xml* file that refers to *google-services.json* and *GoogleService-info.plist* files. 

To successfully use FCM push notifications, you must put the *google-services.json* and *GoogleService-Info.plist* files – obtained in the [Downloading the Google Services Config Files](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/#downloading-the-google-services-config-files) section of *Set Up the Google Firebase Cloud Messaging Server* – in your app's **config** folder.

When you add these files, it causes the **PushNotifications** widget to register your device with FCM, and then share the FCM registration token with your Mendix back-end server. This means you must use FCM to send messages to your devices. 

### 2.1 Using APNS Instead of FCM for iOS Devices

If you would like to use APNS instead of FCM for your iOS devices, then you will have to delete the reference to *GoogleService-info.plist* from *config.xml*. By doing this, you will not need to include the *GoogleService-info.plist* file, and can then use APNS to send messages to iOS devices.

## 3 Building Your Mobile App

Now that you have set up your hybrid app for push notifications you may continue building it. by following the [hybrid app package documentation](https://github.com/mendix/hybrid-app-template/). Once you have a running app, continue to the section below. 

## 4 Sending a Push Notification to a Device

Follow these steps to test and send a push notification to a device:

1. Open your application in the browser and sign in as administrator (for example, MxAdmin`).
2. To be able to sign in into your hybrid mobile application, you will need to create a new user. Typically, this can be done from the administration pages of your application. If you have anonymous access enabled, this step is of course not necessary.
3. Open your hybrid mobile app and sign in. If you are testing offline-mode, click the sync button to send the pending device registration request to the server.
4.  Open the **Push Notifications Administration** page. Back in the administrator view of your web application, navigate to the **Devices** tab in the Push Notifications administration page. Here you should see one device in the list of registered devices, which is the device that you used to sign in to your hybrid mobile application. Continue by selecting the device and click **New Message**.

	{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/testing-the-implementation/21168174.png" >}}

5. Fill in the title and the message in the form and press **Send**. Your device should receive a new push notification. If your hybrid mobile app is currently running in the foreground, the notification will be displayed in the app. Otherwise, it will be shown as a standard push notification.

If you saw the notification, congratulations! By following this document, you have successfully tested push notifications on your device.

## 5 Read More

* [Publish a Mendix Hybrid Mobile App in Mobile App Stores](/howto8/mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores/)
* [Debug a Hybrid Mobile App](/howto8/mobile/debug-a-mobile-app/)
