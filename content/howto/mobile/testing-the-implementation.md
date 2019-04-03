---
title: "Test the Implementation"
parent: "push-notifications"
menu_order: 60
tags: ["mobile", "push notification"]
---

## 1 Introduction

Once you finish implementing the steps described in [How to Implement Push Notifications](implementation-guide), you need to test whether everything works correctly. As a prerequisite, you will need to build (new) versions of your mobile application. You can refer to the [hybrid app package documentation](https://github.com/mendix/hybrid-app-template/) for instructions. Please note that, during this process, you will need to put the *google-services.json* and *GoogleService-Info.plist* files in the config folder.

Once you have your apps built and running, you can send your first push notifications. This can be done easily using the administration pages that should be included in your application (for details, see [Setting Up the Administration Pages](implementation-guide#setting) in *How to Implement Push Notifications*). 

## 2 Using APNS instead of FCM for IOS Devices
When you check the box to enable push notifications in [Configuring FCM in Your Application](setting-up-google-firebase-cloud-messaging-server#7-configuring-fcm-in-your-application), it automatically includes a reference to a file called GoogleService-info.plist. Therefore, in order to successfully use FCM push notifications with IOS, you must include the file GoogleService-info.plist in your application source. When you add this file, it causes the push widget to register your iOS device with FCM and share the FCM registration token with your Mendix backend server. Due to this, you must use FCM to send messages to IOS devices. If you would like to use APNS instead of FCM for your IOS devices, then you will have to remove the reference to GoogleService-info.plist from the config.xml file. By doing this, you will not need to include the GoogleService-info.plist file, and can then use APNS to send messages to iOS devices


## 3 Sending a Push Notification to a Device

Follow these steps to send a push notification to a device:

1. Open your application in the browser and log in as administrator (for example, MxAdmin`).
2. To be able to log in into your hybrid mobile application, you will need to create a new user. Typically, this can be done from the administration pages of your application. If you have anonymous access enabled, this step is of course not necessary.
3. Open your hybrid mobile app and log in. If you are testing offline-mode, press the sync button to send the pending device registration request to the server.
4.  Open the **Push Notifications Administration** page. Back in the administrator view of your web application, navigate to the **Devices** tab in the Push Notifications administration page. Here you should see one device in the list of registered devices, which is the device that you used to log in to your hybrid mobile application. Continue by selecting the device and press **New Message**.

	![](attachments/19955741/21168174.png)

5. Fill in the title and the message in the form and press **Send**. Your device should receive a new push notification. If your hybrid mobile app is currently running in the foreground, the notification will be displayed in the app. Otherwise, it will be shown as a standard push notification.
