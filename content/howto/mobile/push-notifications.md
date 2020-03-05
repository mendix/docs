---
title: "Include Push Notifications"
parent: "hybrid-mobile"
menu_order: 10
tags: ["mobile", "push notification"]
---

## 1 Introduction

Push notifications enable your app to notify a user of events, even if the user is not actively using the app. This is a native capability available on both Android and iOS devices, and it is controlled through external services via, for example, Firebase Cloud Messaging (FCM) or Apple Push Notifications service (APNs).

The Mendix push notifications solution consists of these two parts:

* **PushNotifications module** – this is the "server-side" component responsible for sending push notifications to FCM/APNs, which will in turn send the notifications to the user devices
* **PushNotifications widget** – this resides in the hybrid mobile (PhoneGap) app and is responsible for the application's interaction with FCM/APNs (via the PhoneGap Push Plugin) in terms of registering the devices with these services and handling the push notifications received from them

The Mendix push notifications functionality makes it easy for developers to include push notification capabilities in their Mendix hybrid mobile apps.

## 2 Prerequisites

To use push notifications, make sure you have the following:

* Mendix Studio Pro from the [App Store](https://appstore.home.mendix.com/link/modeler)
* The Mendix [Push Notifications Connector](https://appstore.home.mendix.com/link/app/3003/)
* A mobile device (to get started, we recommend an Android device connected to your development machine via a data cable)
* An [Adobe PhoneGap Build](https://build.phonegap.com/) account

## 3 Supported Platforms

* Android 5.0 and above
* iOS 9.0 and above

## 4 GCM vs. FCM

Earlier versions of the Mendix Push Notifications Connector supported Google Cloud Messaging (GCM) and APNs. Google has replaced GCM with FCM.

## 5 Dependencies

* Apache Commons IO: Apache 2.0
* Jackson (core+databind+annotations): Apache 2.0
* Google APIs Client Library for Java: Apache 2.0
* Google HTTP Client Library for Java: Apache 2.0
* Google OAuth Client Library for Java: Apache 2.0
* Gson: Apache 2.0
* Guice: Apache 2.0
* Netty: Apache 2.0
* Netty Tomcat Native Fork: Apache 2.0
* Pushy: MIT

## 6 Contributing

For more information on contributing to this repository, see [How to Contribute to a Mendix GitHub Repository](../collaboration-requirements-management/contribute-to-a-github-repository).

## 7 Documents in This Section

* [Implement Push Notifications](implementation-guide)
* [Send Push Notifications](sending-push-notifications)
* [Set Up the Firebase Cloud Messaging Server](setting-up-google-firebase-cloud-messaging-server)
* [Set Up the Apple Push Notification Server](setting-up-apple-push-notification-server)
* [Test the Push Notifications Implementation](testing-the-implementation)
