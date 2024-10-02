---
title: "Part 1: Local Notifications"
url: /howto8/mobile/native-local-notifications/
weight: 10
description: A tutorial for setting up local push notifications which do not use an internet connection.
---

## Introduction

This how-to teaches you how to build local notifications for native mobile applications. Local notifications will only allow you to schedule and send notifications confined to one mobile device. These notifications do not use an internet connection. One use of a local notification might be an alarm app which sends a notification after an amount of time has elapsed.

This how-to teaches you how to do the following:

* Build a button connected to a nanoflow which calls a local notification
* Make your notification nanoflow request device permission for local notifications

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Review the [basic differences](https://developer.apple.com/documentation/usernotifications) between local notifications and push notifications
* Install the [Make It Native](/refguide8/getting-the-make-it-native-app/) app on your mobile device

{{% alert color="info" %}}
To use push notifications with apps created with the Native Builder, make sure you have completed [How To Build a Mendix Native App in the Cloud](/howto8/mobile/deploying-native-app/) and the how-tos described in [Use Notifications](/howto8/mobile/notifications/)
{{% /alert %}}

## Creating a Project and Configuring Notifications

Follow the instructions below to set up your first local notification:

1. Open Mendix Studio Pro.
2. Select **File** > **New Project**.
3. Select the **Blank Native Mobile App** (also available online [here](https://marketplace.mendix.com/link/component/109511/)):

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/quickstart.png" alt="Blank Native Mobile App" class="no-border" >}}

4. Click **Use this starting point**.
5. Click **Create App** to close the dialog box:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/app-settings.png" alt="app settings"   width="500"  class="no-border" >}}

6. Make sure you have a **Native phone** profile enabled:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/native-profile.png" alt="app settings"   width="500"  class="no-border" >}}

7. Drag a **Call nanoflow button** onto your app's home page, then click **New** to make a new nanoflow (note: you may wish to rename this button *Send Notification*): 

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/call-button.png" alt="app settings"   width="400"  class="no-border" >}}

8. Name the nanoflow *ACT_CreateAndSendNotification* and click **OK**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/name-nano.png" alt="app settings"   width="400"  class="no-border" >}}

9. In **ACT_CreateAndSendNotification**, drag three **Create variable** activities into your nanoflow and set them as string variables titled *Title*, *Subtitle*, and *Body*:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/create-string-variables.png" alt="app settings"   width="500"  class="no-border" >}}

10. Double-click your **Title** activity and then configure it:<br />
    1. Make sure **Data type** is set to **String**.<br />
    1. Click **Generate**.<br />
    1. Type *Title* into the **Constant** field.<br />
    1. Type *Title* into **Output** > **Variable**.<br />
    1. Click **OK**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/title-activity.png" alt="app settings"   width="400"  class="no-border" >}}

11. Double-click your **Subtitle** activity and configure similarly to your **Title** activity.

12. Double-click your **Body** activity and configure similarly to your **Title** activity.

Now you will set up the final logic necessary for your app to display a notification. A user must give permission for an app to send notifications. You will include a **Request notification permission** activity in your nanoflow to account for this, and include a few other activities.

1. Drag a **Has notification permission** activity into your nanoflow:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/has-notif.png" alt="app settings"   width="500"  class="no-border" >}}

2. Double-click your **Has notification permission** activity, type *NotificationPermission* into **Variable**, then click **OK**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/set-haspermission-variable.png" alt="app settings"   width="500"  class="no-border" >}}

3. Drag a decision after your **Has notification permission** activity into your nanoflow:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/new-decision.png" alt="app settings"   width="500"  class="no-border" >}}

4. Double-click that decision and give it the **Caption** *Permission*:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/decision-caption.png" alt="app settings"   width="500"  class="no-border" >}}

5. Click **Expression wizard**, select **Variable** > **NotificationPermission (Boolean)**, and then click **OK** until you are back at your nanoflow:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/expression-variable.png" alt="app settings"   width="500"  class="no-border" >}}

6. Drag a **Request notification permission** activity into your nanoflow:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/request-notif.png" alt="app settings"   width="500"  class="no-border" >}}

7. Double-click your **Request notification permission** activity and set **Output** > **Variable** to *PermissionGranted*:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/permission-granted.png" alt="app settings"   width="500"  class="no-border" >}}

8. Drag a decision next to your **Request notification permission** activity.

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/decision-1.png" alt="app settings"   width="400"  class="no-border" >}}

9. Connect your activities and decisions, and set those connections' values like so:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/connections-1.png" alt="app settings"   width="400"  class="no-border" >}}

10. Double-click the decision, then set the **Caption** as *Permission?*.
11. Click **Expression wizard**
12. Select **Value** > **Variable** > **Permission (Boolean)** from the drop-down menu. When finished, your **Decision** should look like this:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/decision-1-config-new.png" alt="app settings"   width="400"  class="no-border" >}}

13. Navigate back to your nanoflow.

14. Drag a **Show message** activity into your nanoflow and connect it like this: 

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/show-message.png" alt="app settings"   width="400"  class="no-border" >}}

15. Double-click your **Show message** activity, then do the following:<br />
    1. Select **Type** > **Error** from the drop-down menu.<br />
    1. Into **Template** type *No notification permissions, go to your app permission settings to grant permission*.<br />
    1. Click **OK**.

16. Drag an **End event** under your **Show message** and connect them like this:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/error-end-event.png" alt="app settings"   width="400"  class="no-border" >}}

Now you will set up the final piece of your nanoflow's logic. 

1. Delete the end event in the upper-right corner of your nanoflow, drag and drop a **Merge** in its place, and rebuild your connections:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/merge.png" alt="app settings"   width="400"  class="no-border" >}}

2. Drag and drop a **Display Notification** activity and connect it to your merge like this:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/display-notif-merge.png" alt="app settings"   width="400"  class="no-border" >}}

3. Set its **Body**, **Title**, and **Subtitle** to the variables that you created in the same nanoflow:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/tsb-variables.png" alt="app settings"   width="500"  class="no-border" >}}

4. Set **Play sound** to **true**.

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/sound.png" alt="app settings"   width="500"  class="no-border" >}}

5. Set **Action name** and **Action guid** to **empty**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/notif-action-actionguid.png" alt="app settings"   width="500"  class="no-border" >}}

6. Select **Use return value** > **no**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/return-no.png" alt="app settings" class="no-border" >}}

7. Click **OK**, then navigate back to your nanoflow.
8. Add a final **End event** next to your **Display notification** activity and connect it like this:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/final-end-event.png" alt="app settings" class="no-border" >}}

9. When you are all finished, your nanoflow will look like this:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/finished-flow.png" alt="app settings"   width="500"  class="no-border" >}}

Now you can run your app and see if your notification works.

1. Start and load your app in your mobile device, then tap **Send Notification**:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/app-1.png" alt="app settings"   width="400"  class="no-border" >}}

2. When prompted to **Allow notifications**, tap **OK**.
3. After you allow notifications, you will receive a notification:

    {{< figure src="/attachments/howto8/mobile/native-mobile/notifications/local-notif-parent/native-local-notifications/basic-notif.png" alt="app settings"   width="400"  class="no-border" >}}

    If you did not see a notification, try clicking **Run Locally** to reload your app. Then, tap the **Send Notification** button again.

Congratulations! You can now see local notifications on your device. Next, in [How to Use Local Notifications Part 2: Badges](/howto8/mobile/local-notif-badges/), you will learn how to configure notification badges.

## Read More

* [Implement Push Notifications](/howto8/mobile/implementation-guide/)
* [Build JavaScript Actions](/howto8/extensibility/build-javascript-actions/)
