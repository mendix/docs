---
title: "Use Push Notifications"
category: "Mobile"
---

## 1 Introduction to Push Notifications

Push notifications enable your app to notify a user of events, even if the user is not actively using the app. This is a native capability available on both Android and iOS devices, and it is controlled via Google Cloud Messaging (GCM) and Apple Push Notifications service (APNs).

The Mendix push notifications solution consists of these two parts:

* **PushNotifications module** – this is the "server-side" component responsible for sending push notifications to GCM/APNs, which will in turn send the notifications to the user devices
* **PushNotifications widget** – this resides in the hybrid mobile (PhoneGap) app and is responsible for the application's interaction with GCM/APNs (via a PhoneGap Push Plugin) in terms of registering the devices with these services and handling the push notifications received from them

The Mendix push notifications functionality makes it easy for developers to include push notification capabilities in their Mendix hybrid mobile apps.

## 2 Prerequisites

To use push notifications, make sure you have the following:

* Mendix Desktop Modeler version 7.1–7.3
    * Please note that 7.3 is the last version verified to work with [Push Notifications Connector](https://appstore.home.mendix.com/link/app/3003/)
    * Download the Modeler in the [App Store](https://appstore.home.mendix.com/link/modeler)
* A mobile device (to get started, we recommend an Android device connected to your development machine via a data cable)
* An [Adobe PhoneGap Build](https://build.phonegap.com/) account

## 3 Supported Platforms

* Android 4.4 and above
* iOS 9.0 and above

## 4 Demo

In the Mendix App Store, you can find an example implementation of the [Push Notifications Connector](https://appstore.home.mendix.com/link/app/3020/Mendix/Push-Notifications-Connector-Demo). To start sending push notifications to your Android or iOS device, download the project, deploy it to a free app, and follow the on-screen instructions.

{{% alert type="warning" %}}

The Push Notifications Connector assumes that the mobile app and the "back-end" part will reside in the same project.

{{% /alert %}}

## 5 GCM vs. FCM

Google has replaced GCM with Firebase Cloud Messaging (FCM). This impacts how Google projects need to be set up and how credentials can be obtained. The push notifications module will occasionally refer to GCM. Mendix  will replace these references in the future.

## 6 APNs

From the admin pages, you currently cannot disable the APNs service completely. Mendx will address this in a later release.

## 7 Dependencies

* Java Apple Push Notification Service Library: BSD 3-clause
* Apache ServiceMix – Commons Codec: Apache 2.0
* Apache Commons IO: Apache 2.0
* Jackson (core+databind+annotations): Apache 2.0
* JSON.simple: Apache 2.0
* Smack (core+tcp): Apache 2.0 
* XmlPull: Public domain
* XmlPull XPP3: Indiana University Extreme! Lab Software License

## 8 Contributing

For more information on contributing to this repository, see [How to Contribute to a GitHub Repository](../collaboration-requirements-management/contribute-to-a-github-repository).

## 9 Documents in This Sub-Category

* [How to Implement Push Notifications](implementation-guide)
* [How to Test the Push Notifications Implementation](testing-the-implementation)
* [How to Set Up the Apple Push Notification Server](setting-up-apple-push-notification-server)
* [How to Set Up the Firebase Cloud Messaging Server](setting-up-google-firebase-cloud-messaging-server)
* [How to Use the Push Notification APIs](apis)
