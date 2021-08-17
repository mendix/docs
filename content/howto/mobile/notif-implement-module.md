---
title: "Implement the Push Notifications Module"
parent: "notifications"
menu_order: 54
description: Tutorial for implementing the push notification module.
tags: ["mobile", "native", "push", "local", "firebase"]
---

## 1 Introduction

Now that all the prerequisites have been implemented in your application it is time to implement the [Push Notifications Connector](https://marketplace.mendix.com/link/component/3003) module. We will focus on a few simple steps first to get the basic configuration operational. Next steps will take care of configuration for local notifications, native push notifications, hybrid notifications and web notifications. 

## 2 Download From Marketplace

If you haven’t done so make sure to download the module from the Marketplace

1. Open up the Marketplace from Studio Pro.
1. Search for `Push Notification Connector`.
1. Open the Push Notification Connector module.
1. Click **Download**.

## 3 Configure Your App

In order for your app to use to use the Push Connections Module, configure the following things:

1. Open **Project** > **Security** in the App Explorer.
1. Go to **User roles**.
1.  Adjust the user roles that should have access to the push notifications:
	a. `Administrator` module role should be assigned to at least one user executing configuration and administrative tasks. <br />
	b. `Anonymous` module role may be assigned to your anonymous project user role. <br />
	c. `User` is for any user role that needs to interact with notifications without being an `Administrator` or `Anonymous` user role.
1. Save the Security settings.
1. Open up **Project** > **Navigation** in the App Explorer.
1. Add a new open page navigation item to the `Responsive` navigation profile.
1. Select the page **Administration** from the **PushNotifications** module.
	a. This page is located in the `_Use Me/Web` folder of the **PusNotifications** module.
1. Add a microflow sub-call to your **Afterstartup** microflow for the microflow **AfterStartup_PushNotifications**.
	a. If you do not have any afterstartup microflow configured yet read here how to set one up.

Now you are able to start your application and move on to the next step configuring your runtime.
