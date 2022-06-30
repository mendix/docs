---
title: "Test the Implementation"
url: /howto7/mobile/testing-the-implementation/
weight: 60
tags: ["mobile", "push notification"]
---

## 1 Introduction

Once you finish implementing the steps described in [How to Implement Push Notifications](/howto7/mobile/implementation-guide/), you need to test whether everything works correctly. As a prerequisite, you will need to build (new) versions of your mobile application. You can refer to the [hybrid app package documentation](https://github.com/mendix/hybrid-app-template/) for instructions. Please note that, during this process, you will need to put the *google-services.json* and *GoogleService-Info.plist* files in the config folder.

Once you have your apps built and running, you can send your first push notifications. This can be done easily using the administration pages that should be included in your application (for details, see [Setting Up the Administration Pages](/howto7/mobile/implementation-guide/#setting) in *How to Implement Push Notifications*). 

## 2 Sending a Push Notification to a Device

Follow these steps to send a push notification to a device:

1. Open your application in the browser and log in as administrator (for example, MxAdmin`).
2. To be able to log in into your hybrid mobile application, you will need to create a new user. Typically, this can be done from the administration pages of your application. If you have anonymous access enabled, this step is of course not necessary.
3. Open your hybrid mobile app and log in. If you are testing offline-mode, press the sync button to send the pending device registration request to the server.
4.  Open the **Push Notifications Administration** page. Back in the administrator view of your web application, navigate to the **Devices** tab in the Push Notifications administration page. Here you should see one device in the list of registered devices, which is the device that you used to log in to your hybrid mobile application. Continue by selecting the device and press **New Message**.

	{{< figure src="/attachments/howto7/mobile/push-notifications/testing-the-implementation/21168174.png" >}}

5. Fill in the title and the message in the form and press **Send**. Your device should receive a new push notification. If your hybrid mobile app is currently running in the foreground, the notification will be displayed in the app. Otherwise, it will be shown as a standard push notification.
