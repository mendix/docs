---
title: "Set Up Web Push Notifications"
parent: "web-push-notifications"
menu_order: 10
description: Learn how to set up web push notifications for web (responsive) apps.
tags: ["web push notification", "web", "push", "notification"]
---

## 1 Introduction

Web Push notifications allow you to remotely trigger small text messages, sounds, and more on your users' devices.
For more information see [this review by OneSignal](https://onesignal.com/webpush).

Unlike native push notifications, web push notifications do not need a mobile app to work, only a browser, and they are supported on most modern browsers. 

In order to setup web push notifications you will have to:

1. Install the web push notifications module
2. Allow users to subscribe to web push notifications

Follow the sections below to complete these two tasks and enable web push notifications.

**This how-to will teach you how to do the following:**

* Enable web push notifications in your web (responsive) app

## 2 Install the web push notifications module

Install the [web push notifications app store module](https://marketplace.mendix.com/link/component/114331).

This can be done from StudioPro directly by visiting the app store and searching for "web push notificaiion".
Alternatively, you can click on the link above, downloading the .mpk file and import that to your project.

## 3 Allow users to subscribe to web push notifications

In order to send users web push notifications users first need to allow your web app to send notifications them.
By default browsers do not allow any web app to send notifications unless the user has explicitly given permission, through a subscription.

The permission has to be requested by the user with a click to comply with browser guidelines and privacy and GDPR laws.
This means that asking for permissions is not allowed unless the user first clicks a button or checks a checkbox that they would like to receive notifications from the app.

Luckily this is all done by the web push module. All you need to do is add the snippet *WebPushNotifications.WebPushSnippet* to the page where you want users to subscribe.
This could be, for example a user profile page or a settings page.

Next, for users to be able to see the subscription prompt they must have the module role "NotificationReceiver".
So make sure that all project roles that you want to be able to subscribe have that module role assigned.

With those steps completed you have enabled web push notifications for your Mendix app and allowed users to subscribe.
