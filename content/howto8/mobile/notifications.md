---
title: "Use Notifications"
parent: "native-mobile"
menu_order: 50
description: Tutorials for configuring push and local notifications.
tags: ["mobile", "native", "push", "local", "firebase"]
---

## 1 Introduction {#intro}

These guides will teach you to configure push notifications (also known as remote notifications) for your Mendix apps. The guides are meant to be completed in order, and will teach you to **send a test push notification to a single device**. Depending on your app's starting template your app may already satisfy certain prerequisites and conditions. Complete only the steps which apply to your use case, and skip what does not apply.

* [Add Module Dependencies](notif-add-module-depends) — Install the required dependency modules so your app can use push notifications.
* [Implement the Push Notifications Module](notif-implement-module) — Learn to implement the Push Notifications Connector module.
* [Set Up the Google Firebase Cloud Messaging Server](setting-up-google-firebase-cloud-messaging-server) — To send push notifications, you must set up a Firebase account and configure the service in your app.
* [Configure Push Notifications](notif-config-push) — Learn to configure push notifications in the runtime.
* [Native Push Notification Implementation](notif-implement-native) — Implement push notifications for a native app.
* [Build a Native Mobile App with Push Notifications](notif-build-native) — Build a native app with push notifications enabled.
* [Send Your First Test Push Notification](notif-send-test) — Send a test notification to confirm your app is working properly.

After you complete the how-to's above, you may wish to do more advanced tasks with notifications. See the document below to **send push notifications to multiple devices**:

* [Send Notifications to Multiple Devices](notif-mult-devices)

This documentation is specifically for native mobile apps. For information on push notifications in hybrid apps, see [Set Up Hybrid Push Notifications](setting-up-hybrid-push-notifications). For information on local notifications, see [Use Local Notifications](local-notif-parent).

To get started, begin with the series' first entry: [Add Module Dependencies](notif-add-module-depends).