---
title: "Configure Push Notifications"
parent: "notifications"
menu_order: 56
description: Tutorial for configuring push notifications.
tags: ["mobile", "native", "push", "local", "firebase"]
---

## 1 Introduction 

This how-to will teach you to configure the runtime for using push notifications in native or hybrid apps. For other use cases, you can skip this how-to and choose one of the following:
* To configure local notifications, see [title](nodocyet)
* To configure web notifications, see [title](nodocyet)

## 2 Configure Your Notifications

If you have completed [Add Module Dependencies](add-module-depends) and [Implement the Push Notifications Module](notif-implement-module) per your use case, do the following to configure your push notifications:

1. Open your app in Mendix Studio Pro.
1. Log in as the Administrator user you [previously designated](notif-implement-module#config).
1. Navigate to the **Administration** page.

The first time you open this page it will present you with a wizard to set up Firebase configurations. These are required to use push notifications. If you have not set up Firebase configurations, see [doc title](nodoc). The wizard will mention the following files:

| **File**    | **Source**   | **Usage**      |
| -------- | -------- | ------- |
| GoogleServices-Info.plist | Google Firebase | Used to push notifications to your iOS native applications.     |
| google-services.json      | Google Firebase | Used to push notifications to your Android native applications. |

These files are also known as private key files. They must be configured as you build your native apps for Android and iOS, and also on the runtime when configuring your server. This last part is done from the administration page and setup wizard.

If you did follow the instructions on the page to set up your apps for iOS or Android in for the server sided part.

After doing that you will be redirected to the configuration page. For more information on the configuration page click here.

Now that we have set up the backend part it is time to implement hybrid/native push notifications for your hybrid/native app. Click here for hybrid or here for native.
