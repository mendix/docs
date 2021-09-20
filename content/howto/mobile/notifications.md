---
title: "Use Notifications"
parent: "implementation"
menu_order: 50
description: Tutorials for configuring push and local notifications.
tags: ["mobile", "native", "push", "local", "firebase"]
---

## 1 Introduction {#intro}

These guides will teach you to configure both push notifications (also known as remote notifications) and local notifications for your Mendix apps:

* [Add Module Dependencies](add-module-depends) — Install the required dependency modules so your app can use push notifications.
* [Implement the Push Notifications Module](notif-implement-module) — Learn to implement the Push Notifications Connector module.
* [Set Up the Google Firebase Cloud Messaging Server](firebase-setup) — To send push notifications, you must set up a Firebase account and configure the service in your app..
* [Configure Push Notifications](notif-config-push) — Learn to configure push notifications on the runtime.
* [Native Push Notification Implementation](notif-implement-native) — Implement push notifications for a native app.
* [Build a Native Mobile App with Push Notifications](notif-build-native) — Build a native app with push notifications enabled.
* [Send Your First Test Push Notification](notif-send-test) — Send a test notification to confirm your app is working properly.

For information on local notifications specifically, see [DOC NAME HERE](DOCNOTMADEYET).

Notifications are currently supported for native mobile apps. For information on push notifications in hybrid apps, see [Include Push Notifications](DOCNOTMADEYET).

## 2 Push Notification Options

To implement push notifications in your app there are a few steps depending on the types of push notifications you would like to use. The following notification types are available:

* **Push notifications** — When you want to notify your users from the back-end (server) of your app, use push notifications. These may be targeted at single, specific, grouped, or all users. They will always be triggered from the back-end.
* **Local notifications** — When you want to show notifications directly on the device without the need for any server interaction, use local notifications. Local notifications only target an app running on a single user's specific device.

The how-to's in the [introduction](#intro) are meant to be completed in order, and assume you are starting without an existing app. If you already have an app, you can still use these how-to's. 

Depending on your app's starting template your app may already satisfy certain prerequisites and conditions. Complete only the steps which apply to your use case, and skip what does not apply.

To get started, begin with the series' first entry: [Add Module Dependencies](add-module-depends).