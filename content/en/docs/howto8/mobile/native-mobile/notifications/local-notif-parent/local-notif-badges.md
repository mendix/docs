---
title: "Part 2: Badges"
url: /howto8/mobile/local-notif-badges/
parent: "local-notif-parent"
menu_order: 20
description: A tutorial for setting up badges for local push notifications.
tags: ["mobile", "push notification", "local", "push", "notification"]
---

## 1 Introduction

Badges are crucial for many apps on iOS and Android. Badges differ in appearance based on platform, and often indicate important information in applications. For example with messaging applications, it is good practice to employ badges which alert users to new messages.

You will need to build badge functionality into your app so that when a user gets a notification, the app shows a badge on its app's icon. Also, badges are *not automatically decreased or removed* when a user checks an app. These two functions must be built manually by a developer. 

In this document you will learn to add badge functionality to your app, as well as how to remove a badge.

## 2 Prerequisites 

Before starting this how-to, make sure you have completed the following prerequisites:

* Review the [basic differences](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/) between local notifications and push notifications
* Install the [Make It Native](/refguide8/getting-the-make-it-native-app/) app on your mobile device
* Complete the preceding tutorial in this [Use Local Notifications](/howto8/mobile/local-notif-parent/) series

## 3 Setting a Badge Number

Since you know how to send a simple local notification, you can now set the badge number by following these steps:

1. Open **ACT_CreateAndSendNotification**.
2.  Drag and drop a **Create variable** activity to the right of the three string variables you made:

	{{% image_container width="500" %}}![new create variable](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/new-variable-badge.png){{% /image_container %}}

3. Double-click the variable activity and select **Data type** > **Integer/Long**.
4. Type *1* into the expression value field. 
5.  Type *badge_number* into the **variable name** field:

	{{% image_container width="400" %}}![badge number](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/badge-1.png){{% /image_container %}}

6. Click **OK**.
7.  Drag and drop a **Set badge number** JavaScript action to the right of your merge activity:

	![drag set badge number](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/set-badge-act.png)

8. Double-click the badge number activity.
9.  Set the value of **Badge number** to **$badge_number**

	![value badge number](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/badge-input.png)

10. Click **OK**.

Start and load the app on your mobile device and tap the button which calls your nanoflow. You will see a notification. Go to your device's start screen to see the notification badge on your app:

{{% image_container width="300" %}}![badge number on mobile](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/badge-mobile.png){{% /image_container %}}

## 4 Reducing a Badge Number

To make your badge disappear after your user opens your app, follow the instructions below.

1. Drop an **App events** widget onto **Home_Native** (you have this widget because it is included in the [Blank Native Mobile App](https://marketplace.mendix.com/link/component/109511/)):

	![app event widget](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/app-events.png)

2. Double-click your **App events** widget.
3. Select **On load** > **Call a nanoflow**.
4. Click **New** and make a new nanoflow: *ACT_ClearBadge*.
5. Go to **ACT_ClearBadge**.
6. Drag and drop a **Set badge number** activity onto your nanoflow:

	![set badge activity](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/clear-set-badge.png)

7. Double-click your **Set badge number** activity.
8. Click **Badge number** > **Edit**.
9. Type *0* and click **OK**.
10. Set **Use Return Value** to **No**:

	{{% image_container width="400" %}}![return value](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/clear-badge-settings.png){{% /image_container %}}

11. Drag and drop a **Log message** activity onto your microflow.
12. Double-click your **Log message** activity, write *Your notification has been cleared* into **Template**, and click **OK**:

	{{% image_container width="500" %}}![clear text](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/clear-text-log.png){{% /image_container %}}

13. Go back to your **Home_Native** page and double-click your **App events** activity.
14. Make sure **Page load** > **On load** is set to **Call a nanoflow**, and specify that nanoflow as **ACT_ClearBadge**. This will make sure your badge clears on page load.
15. Set **App resume** > **On resume** is set to **Call a nanoflow**, and specify that nanoflow as **ACT_ClearBadge**. This will make sure your badge clears when your app is resumed:

	{{% image_container width="300" %}}![app event final settings](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/app-event-final-settings.png){{% /image_container %}}

16. Click **OK** and save your changes.

You can now test your badge clearing.

1. Start and load the app on your mobile device and tap the button which calls your nanoflow. You will see a notification. 
2. Go to your device's start screen to see the notification badge on your app:

	{{% image_container width="300" %}}![badge number on mobile](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/badge-mobile.png){{% /image_container %}}

3. Tap your app again to open it.
4. Navigate to your device's home screen and see that your Make It Native app has no more badge:

	{{% image_container width="300" %}}![cleared-badge-icon.png](/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/local-notif-badges/cleared-badge-icon.png){{% /image_container %}}

5. Check your Studio Pro **Console** to read the **Your notification has been cleared** text you set up.

Congratulations! You successfully implemented basic badge clearing. Next, in [How to Use Local Notifications Part 3: Actions](/howto8/mobile/local-notif-action/), you will learn how to configure a notification so that when a user taps a notification, they are brought to a page.

## 5 Read More

* [Implement Push Notifications](/howto8/mobile/implementation-guide/)
* [Build JavaScript Actions](/howto8/extensibility/build-javascript-actions/)