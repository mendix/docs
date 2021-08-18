---
title: "Use Notifications"
parent: "implementation"
menu_order: 50
description: Tutorials for configuring push and local notifications.
tags: ["mobile", "native", "push", "local", "firebase"]
---

## 1 Introduction {#intro}

These guides will teach you to configure both push notifications (also known as remote notifications) and local notifications for your Mendix apps:

* [Add Module Dependencies](add-module-depends) — 1 sentence doc description.
* [Implement the Push Notifications Module](notif-implement-module) — 1 sentence doc description.
* [Configure Push Notifications](notif-config-push) — 1 sentence doc description.
* [Native Push Notification Implementation](notif-implement-native) — 1 sentence doc description.
* [Build a Native Mobile App with Push Notifications](notif-build-native) — 1 sentence doc description.
* [Send Your First Test Push Notification](notif-send-test) — 1 sentence doc description.

For information on local notifications specifically, see [DOC NAME HERE](DOCNOTMADEYET).

Notifications are currently supported for native mobile apps. For information on push notifications in hybrid apps, see [Include Push Notifications](DOCNOTMADEYET).

## 2 Push Notification Options

To implement push notifications in your app there are a few steps depending on the types of push notifications you would like to use. The following notification types are available:

* **Push notifications** — When you want to notify your users from the back-end (server) of your app, use push notifications. These may be targeted at single, specific, grouped, or all users. They will always be triggered from the back-end.
* **Local notifications** — When you want to show notifications directly on the device without the need for any server interaction, use local notifications. Local notifications only target an app running on a single user's specific device.

The how-to's in the [introduction](#intro) are meant to be completed in order, and assume you are starting without an existing app. If you already have an app, you can still use these how-to's. 

Depending on your app's starting template your app may already satisfy certain prerequisites and conditions. Complete only the steps which apply to your use case, and skip what does not apply.

To get started, begin with the series' first entry: [Add Module Dependencies](add-module-depends).