---
title: "Configure Push Notifications"
url: /howto8/mobile/notif-config-push/
weight: 56
description: Tutorial for configuring push notifications.
tags: ["mobile", "native", "push", "local", "firebase"]
---

## 1 Introduction 

This how-to will teach you to configure the runtime for using push notifications in native apps. 

## 2 Configure Your Notifications

If you have completed [Add Module Dependencies](/howto8/mobile/notif-add-module-depends/) and [Implement the Push Notifications Module](/howto8/mobile/notif-implement-module/) per your use case, do the following to configure your push notifications:

1. Open your app in Mendix Studio Pro.
1. Log in as the Administrator user you [previously designated](/howto8/mobile/notif-implement-module/#config).
1. Navigate to the **Administration** page.

The first time you open this page it will present you with a wizard to set up the Firebase configuration. If you have not set up Firebase yet, see [Set Up the Google Firebase Cloud Messaging Server](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/). The wizard will mention the following files:

| **File**    | **Source**   | **Usage**      |
| -------- | -------- | ------- |
| **{project_id}-firebase-adminsdk-{identifier}.json** | Google Firebase | Private key for the Firebase service account, used in runtime configuration. | 
| **GoogleServices-Info.plist** | Google Firebase | Firebase configuration and private key, bundled as part of your iOS application. |
| **google-services.json** | Google Firebase | Firebase configuration and private key, bundled as part of your Android application. |

These files contain the information and private keys necessary to enable push notifications in your iOS and Android apps. The private key for the Firebase service account must be uploaded in the configuration wizard (or manual configuration) in your Mendix app. The Android and iOS specific configuration files must be configured when you build your native apps for Android and iOS, see [Build a Native App with Push Notifications Enabled](/howto8/mobile/notif-build-native/).

Before you build your app, make sure to implement push notifications in the native app first. See [Native Push Notification Implementation](/howto8/mobile/notif-implement-native/).