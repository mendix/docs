---
title: "Send Your First Test Push Notification"
parent: "notifications"
menu_order: 64
description: Tutorial for testing your push notifications.
tags: ["mobile", "native", "push", "local", "firebase"]
---

## 1 Introduction

After setting up your configuration on the server, and deploying your native app it is now time to send your first test push notification.

## 2 Send the Test Notification

1. Login to your web application. 
1. Go to the push notification administration page you added earlier to your navigation
1. Go to the `Devices` tab
1. Select the your test device
1. Click `New Message` (or double click your test device)
1. Fill in any `Title`/`Body` that you want for your notification
1. Set the `Action name` to `Example`
1. And leave the rest to the defaults
1. Click send

You should now receive the notification on your device, if the application is open the action will log a message (on log node `ExampleNotification`) and show a dialog in the app.

If the app is not open (or running in the background) it will deliver the notification and show in the usual location for Android/iOS devices. Click on the notification to trigger the in app action.

You have just sent your first notification, congratulations.

See the following reference pages for more information on adding your own actions, adding native local notifications and/or implementing web notifications.

## 3 Read More
