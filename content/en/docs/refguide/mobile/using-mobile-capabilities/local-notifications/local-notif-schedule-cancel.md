---
title: "Part 5: Scheduling"
url: /refguide/mobile/using-mobile-capabilities/local-notifications/local-notif-schedule-cancel/
weight: 50
description: A tutorial for scheduling and cancelling push notifications.
---


## Introduction

Local notifications should rarely notify a user right after they perform an action. Here you will learn to configure local notifications to trigger after a period of time. To do this, you will use a JavaScript action named **ScheduleNotification**. After that, you will learn how to cancel scheduled notifications.

## Prerequisites

Before starting this guide, make sure you have completed the following prerequisites:

* Review the [basic differences](https://developer.apple.com/documentation/usernotifications) between local notifications and push notifications
* Install the [Make It Native](/refguide/getting-the-make-it-native-app/) app on your mobile device
* Complete the preceding tutorials in this [Use Local Notifications](/refguide/mobile/using-mobile-capabilities/local-notifications/) series

## Scheduling a Notification

To schedule a notification for a specific time, do the following:

1. Navigate to your **ACT_CreateAndSendNotification** nanoflow. 
2. Replace your **Display notification** JavaScript action with a new **Schedule notification** action:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/new-schedule-action.png" alt="schedule action replace"   width="500"  class="no-border" >}}

3. Double-click your new **Schedule notification activity**.
4. Set the **Date** to **EndOfCurrentMinute**.
5. Change the **body**, **title**, and **subtitle** to the variables that you created.
6. Set **Play sound** to **true**.
7. For now, set **Notification id** to **empty**.
8. Set **Action name** and **Action guid** to **empty**.
9. Click **OK**.
10. Start and load the app on your mobile device.
11. Tap the **Send notification** button, then quickly minimize your app.

The notification should be displayed at the end of the minute.

If your app is open, it will not show the notification due to iOS and Android user guidelines. However, notifications for open apps can still trigger onReceive events. This allows you to design custom actions for notifications, such as showing a page with pop-up layout. Follow these steps to model an onReceive event:

1. Make a new nanoflow named *ON_ReceiveNotification*.
2. Drag a **Log message** activity into your nanoflow.
3. Double-click this activity. 
4. In **Template** write *I triggered on receive notification* then click **OK**.
5. Double-click your home page's notifications widget.
6. Click **Actions** > **New**.
7. Create a **New Action** named *TriggerOnReceive*, set **On receive** to **Call a nanoflow**, and select **ON_ReceiveNotification**:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/on-receive-action.png" alt="on receive settings"   width="500"  class="no-border" >}}

8. Click **OK** then **OK** again.
9. In **ACT_CreateAndSendNotification**, double-click your schedule notification activity.
10. Click **Action name** > **Edit**.
11. Type *'TriggerOnReceive'* into the argument field and click **OK**.
12. Click **OK**.
13. Start and load the app on your mobile device.
14. Tap the **Send notification** button, and *do not* minimize your app.
15. You will see the log **I triggered on receive notification** in the Studio Pro console.

### Additional Steps for Android 14 and Above

If your app is targeting devices with Android 14 (API levels 34 and above), you must complete some required actions before scheduling local notifications. Read below for guidance. 

If you are familiar with setting precise alarms on Android devices, you might notice recent changes introduced in Android 14. Specifically, the **SCHEDULE_EXACT_ALARM** permission (crucial for scheduling exact alarms) is no longer automatically granted to most newly installed apps targeting Android 13 and higher. 

This means that for scheduling notifications on such devices, the end-user must give an explicit approval to that permission. We have updated our [Native Mobile Resources](/appstore/modules/native-mobile-resources/#native-mobile-category), so that you can easily implement these permission exchanges. 

Using **Check generic permission** you can first check if a **SCHEDULE_EXACT_ALARM** is granted to an end-user's device. To achieve that, you must select **SCHEDULE_EXACT_ALARM_ANDROID** from **Permissions Enum**:

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-request-schedule/permissionsenumeration.png" alt="Permission enum" width="400" height="340" >}}

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-request-schedule/checkgenericpermission.png" alt="Check generic permission" width="320" height="300" >}}

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-request-schedule/checkgenericpermissionaction.png" alt="Check generic permission action" width="320" height="300" >}}

As an output, you will receive either the ***granted*** or ***blocked*** status. With that information, you can proceed with further actions.

Consider the default case for Android 14 devices; the **SCHEDULE_EXACT_ALARM** permission is not given by default. In that case, you need to use **Request generic permission** with selected permission to request it. Requesting of **SCHEDULE_EXACT_ALARM** permission assumes that user will be navigated into the app's **Alarm & Reminders** settings:

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-request-schedule/requestgenericpermission.png" alt="Request generic permission" width="320" height="350" >}}

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-request-schedule/requestgenericpermissionaction.png" alt="Request generic permission action" width="320" height="350" >}}

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-request-schedule/alarmandreminders.png" alt="Alarm and reminders" width="220" height="500" >}}

After that step, you are ready to schedule notifications on an end-user's device!

Please note that to properly ensure that an end-user allowed the alarm permission, you can use an **App Events** widget and call **check-** or **request-** permission actions again and again if needed (for example, when an end-user has returned from application settings, but did not set the permission to **enabled**). 

As you might expect, if you attempt to schedule a notification without the end-user giving a **granted** permission, nothing will happen on end-user's device.

But what if you want to cancel a scheduled notification? Read on to learn just that.

## Cancelling Scheduled Notifications

To cancel a scheduled notification, you can use either the **Cancel Scheduled Notification** or **Cancel All Scheduled Notification** JavaScript actions. To cancel a specific notification, provide an identifier of that particular notification to **Cancel Scheduled Notification**. To cancel all notifications, call the **Cancel All Scheduled Notification** JavaScript action. For further information, see the subsections below.

### Cancelling all Scheduled Notifications

To cancel all scheduled notifications, do the following:

1. Create a nanoflow named  *ACT_CancelAllScheduledNotifications*.
2. Drag a JavaScript action named **Cancel all scheduled notifications** into your nanoflow: 

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-all-action.png" alt="cancel scheduled action"   width="500"  class="no-border" >}}

3. Double-click your new cancel notification action.
4. Select  **Use return value** > **No**.
5. Click **OK**.
6. Drag this nanoflow onto your home screen and name its button *Cancel all*.

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-button.png" alt="cancel button"   width="300"  class="no-border" >}}

To test your new cancel button, do the following:

1. Start and load the app on your mobile device.
2. Tap your **Send notification** button.
3. Tap your **Cancel all** button.
4. Minimize your app.

You will not see a notification at the end of the minute, proving your cancel action a success!

### Cancelling a Specific Scheduled Notification

To cancel a specific scheduled notification, you will need to supply a notification ID for the notification you wish to cancel. 

1. Navigate to **ACT_CreateAndSendNotification**.
2. Double-click your **Schedule notification** activity.
3. Click **Notification id** > **Edit**. 
4. Type *'testID'* into the argument field and click **OK**:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/test-id-arg.png" alt="test id argument" class="no-border" >}}

5. Click **OK** once more to close the dialog box. 
6. Create a nanoflow named *ACT_CancelScheduledNotifications*.
7. Drag a JavaScript Action named **Cancel scheduled notification** into your nanoflow:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-scheduled-notif.png" alt="cancel one notification" class="no-border" >}}

8. Double-click your new cancel notification action.
9. Click **Notification id** > **Edit**.
10. Type *'testID'* into the parameter argument field and click **OK**.
11. Click **OK** again to close the dialog box.
12. Drag this nanoflow onto your home screen and name its button *Cancel a specific notification*:

    {{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-specific-button.png" alt="cancel one button"   width="300"  class="no-border" >}}

To test your new cancel button, do the following:

1. Start and load the app on your mobile device.
2. Tap your **Send notification** button.
3. Tap your **Cancel a specific notification** button.
4. Minimize your app.

You will not see a notification at the end of the minute, proving your cancel action a success! Congratulations on completing this series and mastering the power of local notifications.

## Read More

* [Build JavaScript Actions](/howto/extensibility/build-javascript-actions/)
