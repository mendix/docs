---
title: "Part 2: Implement the Push Notifications Module"
linktitle: "2. Push Notifications Module"
url: /refguide/mobile/using-mobile-capabilities/push-notifications/notif-implement-module/
weight: 30
description: Tutorial for implementing the push notification module.
aliases:
    - /howto/mobile/notif-implement-module/
---

## Introduction

Now that you have implemented the prerequisites in your app, you must implement the [Push Notifications Connector](/appstore/modules/push-notifications/) module. Complete the steps below to enable the basic configuration.

## Downloading From Marketplace

If you have not done so, make sure to download the **Push Notification Connector** module from the Marketplace:

1. Open up the Marketplace from Studio Pro.
1. Search for *Push Notification Connector*.
1. Open the **Push Notification Connector** module.
1. Click **Download**.

{{% alert color="info" %}}
When importing the module in Mendix 10.6.0 or above, you might get consistency error CE6087 for renamed design properties. Right-click and update all renamed design properties in the project.
{{% /alert %}}

## Configuring Your App {#config}

In order for your app to use to use the Push Connections Module, configure the following things:

1. Open **App** > **Security** in the App Explorer.
1. Go to **User roles**.<br />
1. Adjust the user roles that should have access to the push notifications:<br />
    1. The `Administrator` module role should be assigned to at least one user executing configuration and administrative tasks. <br />
    1. The `Anonymous` module role may be assigned to your anonymous app user role. <br />
    1. The `User` role is for any user role that needs to interact with notifications without being an `Administrator` or `Anonymous` user.
    1. Verify that the `NativeMobileResources.User` module role has been added to any user role that needs to interact with notifications (only for native mobile apps).
1. Save the Security settings.
1. Open up **App** > **Navigation** in the App Explorer.
1. Add a new open page navigation item to the **Responsive** navigation profile.
1. Select the **Administration** page from the **PushNotifications** module. This page is located in the **_USE ME/Admin** folder of the **PushNotifications** module.
1. Add a microflow sub-call to your **AfterStartup** microflow for the microflow **AfterStartup_PushNotifications**:<br />
    * If you do not have an **AfterStartup** microflow configured yet, read the [After Startup](/refguide/app-settings/#after-startup) section of *App Settings* for more information.

Now you are able to start your app and move on to the next section.
