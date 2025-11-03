---
title: "Part 2: Badges"
url: /refguide/mobile/using-mobile-capabilities/local-notifications/local-notif-badges/
weight: 20
description: A tutorial for setting up badges for local push notifications.
---


## Introduction

Badges are crucial for many apps on iOS and Android. Badges differ in appearance based on platform, and often indicate important information in applications. For example with messaging applications, it is good practice to employ badges which alert users to new messages.

You will need to build badge functionality into your app so that when a user gets a notification, the app shows a badge on its app's icon. Also, badges are *not automatically decreased or removed* when a user checks an app. These two functions must be built manually by a developer. 

In this document you will learn to add badge functionality to your app, as well as how to remove a badge.

## Prerequisites 

Before starting this guide, make sure you have completed the following prerequisites:

* Review the [basic differences](https://developer.apple.com/documentation/usernotifications) between local notifications and push notifications
* Install the [Make It Native](/refguide/getting-the-make-it-native-app/) app on your mobile device
* Complete the preceding tutorial in this [Use Local Notifications](/refguide/mobile/using-mobile-capabilities/local-notifications/) series

## Setting a Badge Number

Since you know how to send a simple local notification, you can now set the badge number by following these steps:

1. Open **ACT_CreateAndSendNotification**.
2. Drag a **Create variable** activity to the right of the three string variables you made:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/new-variable-badge.png" alt="new create variable"   width="500"  class="no-border" >}}

3. Double-click the variable activity and select **Data type** > **Integer/Long**.
4. Type *1* into the expression value field. 
5. Type *badge_number* into the **variable name** field:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/badge-1.png" alt="badge number"   width="400"  class="no-border" >}}

6. Click **OK**.
7. Drag a **Set badge number** JavaScript action to the right of your merge activity:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/set-badge-act.png" alt="drag set badge number" class="no-border" >}}

8. Double-click the badge number activity.
9. Set the value of **Badge number** to **$badge_number**

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/badge-input.png" alt="value badge number" class="no-border" >}}

10. Click **OK**.

Start and load the app on your mobile device and tap the button which calls your nanoflow. You will see a notification. Go to your device's start screen to see the notification badge on your app:

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/badge-mobile.png" alt="badge number on mobile"   width="300"  class="no-border" >}}

## Reducing a Badge Number

To make your badge disappear after your user opens your app, follow the instructions below.

1. Drop an **App events** widget onto **Home_Native** (you have this widget because it is included in the [Blank Native Mobile App](https://marketplace.mendix.com/link/component/109511/)):

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/app-events.png" alt="app event widget" class="no-border" >}}

2. Double-click your **App events** widget.
3. Select **On load** > **Call a nanoflow**.
4. Click **New** and make a new nanoflow: *ACT_ClearBadge*.
5. Go to **ACT_ClearBadge**.
6. Drag a **Set badge number** activity into your nanoflow:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/clear-set-badge.png" alt="set badge activity" class="no-border" >}}

7. Double-click your **Set badge number** activity.
8. Click **Badge number** > **Edit**.
9. Type *0* and click **OK**.
10. Set **Use Return Value** to **No**:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/clear-badge-settings.png" alt="return value"   width="400"  class="no-border" >}}

11. Drag a **Log message** activity into your microflow.
12. Double-click your **Log message** activity, write *Your notification has been cleared* into **Template**, and click **OK**:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/clear-text-log.png" alt="clear text"   width="500"  class="no-border" >}}

13. Go back to your **Home_Native** page and double-click your **App events** activity.
14. Make sure **Page load** > **On load** is set to **Call a nanoflow**, and specify that nanoflow as **ACT_ClearBadge**. This will make sure your badge clears on page load.
15. Set **App resume** > **On resume** is set to **Call a nanoflow**, and specify that nanoflow as **ACT_ClearBadge**. This will make sure your badge clears when your app is resumed:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/app-event-final-settings.png" alt="app event final settings"   width="300"  class="no-border" >}}

16. Click **OK** and save your changes.

You can now test your badge clearing.

1. Start and load the app on your mobile device and tap the button which calls your nanoflow. You will see a notification. 
2. Go to your device's start screen to see the notification badge on your app:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/badge-mobile.png" alt="badge number on mobile"   width="300"  class="no-border" >}}

3. Tap your app again to open it.
4. Navigate to your device's home screen and see that your Make It Native app has no more badge:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/cleared-badge-icon.png" alt="cleared-badge-icon.png"   width="300"  class="no-border" >}}

5. Check your Studio Pro **Console** to read the **Your notification has been cleared** text you set up.

Congratulations! You successfully implemented basic badge clearing. Next, in [How to Use Local Notifications Part 3: Actions](/refguide/mobile/using-mobile-capabilities/local-notifications/local-notif-action/), you will learn how to configure a notification so that when a user taps a notification, they are brought to a page.

## Read More

* [Build JavaScript Actions](/howto/extensibility/build-javascript-actions/)
