---
title: Local Notifications
url: /refguide/mobile/using-mobile-capabilities/local-notifications/
parent: /refguide/mobile/using-mobile-capabilities/
weight: 60
description: Tutorials for setting up local push notifications which do not use an internet connection.
description: A tutorial for setting up local push notifications which do not use an internet connection.
description: A tutorial for setting up badges for local push notifications.
description: A tutorial for making your push notifications trigger actions when tapped.
description: A tutorial for integrating data into your push notifications.
description: A tutorial for scheduling and cancelling push notifications.
aliases:
    - /howto/mobile/local-notif-parent/
    - /howto/mobile/native-local-notifications/
    - /howto/mobile/local-notif-badges/
    - /howto/mobile/local-notif-action/
    - /howto/mobile/local-notif-data/
    - /howto/mobile/local-notif-schedule-cancel/
---

>>>>> /howto/mobile/native-mobile/implementation/notifications/local-notif-parent/_index.md

These step-by-step guides will teach you to build local notifications for native mobile applications. Local notifications will only allow you to schedule and send notifications confined to one mobile device. These notifications do not use an internet connection. One use of a local notification might be an alarm app which sends a notification after an amount of time has elapsed.

**These how-to's will teach you how to do the following:**

* [Part 1: Local Notifications](/howto/mobile/native-local-notifications/) – Trigger native notifications from Mendix app's microflow, configure your notification permissions, and test the notifications on a device
* [Part 2: Badges](/howto/mobile/local-notif-badges/) – Make your notifications leave badge indicators on your application's icon
* [Part 3: Actions](/howto/mobile/local-notif-action/) – Configure notifications to do an action after being tapped (in this case, show a page)
* [Part 4: Data](/howto/mobile/local-notif-data/) – Enable notifications to pass data and bring a user to a page with specific parameters set
* [Part 5: Scheduling](/howto/mobile/local-notif-schedule-cancel/) – Make notifications trigger at a certain time and cancel them


>>>>> /howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications.md

## 1 Introduction

This how-to will teach you to build local notifications for native mobile applications. Local notifications will only allow you to schedule and send notifications confined to one mobile device. These notifications do not use an internet connection. One use of a local notification might be an alarm app which sends a notification after an amount of time has elapsed.

**This how-to will teach you how to do the following:**

* Build a button connected to a nanoflow which calls a local notification
* Make your notification nanoflow request device permission for local notifications

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Review the [basic differences](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/) between local notifications and push notifications
* Install the [Make It Native](/refguide/getting-the-make-it-native-app/) app on your mobile device

{{% alert color="info" %}}
To use push notifications with apps created with the Native Builder, make sure you have completed [How To Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app/) and the how-to's described in [Use Notifications](/howto/mobile/notifications/)
{{% /alert %}}


## 3 Creating an App and Configuring Notifications

Follow the instructions below to set up your first local notification:

1. Open Mendix Studio Pro.
2. Select **File** > **New App**.
3.  Select the **Blank Native Mobile App** (also available online [here](https://marketplace.mendix.com/link/component/109511/)):

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/quickstart.png" alt="Blank Native Mobile App" >}}

4.  Click **Use this starting point**.
5.  Click **Create App** to close the dialog box:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/app-settings.png" alt="app settings"   width="500"  >}}

6.  Make sure you have a **Native phone** profile enabled:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/native-profile.png" alt="app settings"   width="500"  >}}

7.  Drag and drop a **Call nanoflow button** onto your app's home page, then click **New** to make a new nanoflow (note: you may wish to rename this button *Send Notification*): 

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/call-button.png" alt="app settings"   width="400"  >}}

8.  Name the nanoflow *ACT_CreateAndSendNotification* and click **OK**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/name-nano.png" alt="app settings"   width="400"  >}}

9.  In **ACT_CreateAndSendNotification**, drag and drop three **Create variable** activities onto your nanoflow and set them as string variables titled *Title*, *Subtitle*, and *Body*:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/create-string-variables.png" alt="app settings"   width="500"  >}}

10. Double-click your **Title** activity and then configure it:<br />
	a. Make sure **Data type** is set to **String**.<br />
	b. Click **Generate**.<br />
	c. Type *Title* into the **Constant** field.<br />
	d. Type *Title* into **Output** > **Variable**.<br />
	e. Click **OK**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/title-activity.png" alt="app settings"   width="400"  >}}

11. Double-click your **Subtitle** activity and configure similarly to your **Title** activity.

12. Double-click your **Body** activity and configure similarly to your **Title** activity.

Now you will set up the final logic necessary for your app to display a notification. A user must give permission for an app to send notifications. You will include a **Request notification permission** activity in your nanoflow to account for this, and include a few other activities.

1.  Drag and drop a **Has notification permission** activity onto your nanoflow:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/has-notif.png" alt="app settings"   width="500"  >}}

2.  Double-click your **Has notification permission** activity, type *NotificationPermission* into **Variable**, then click **OK**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/set-haspermission-variable.png" alt="app settings"   width="500"  >}}

3.  Drag and drop a decision after your **Has notification permission** activity onto your nanoflow:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/new-decision.png" alt="app settings"   width="500"  >}}

4.  Double-click that decision and give it the **Caption** *Permission*:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/decision-caption.png" alt="app settings"   width="500"  >}}
	
5.  Click **Expression wizard**, select **Variable** > **NotificationPermission (Boolean)**, and then click **OK** until you are back at your nanoflow:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/expression-variable.png" alt="app settings"   width="500"  >}}
	
6.  Drag and drop a **Request notification permission** activity onto your nanoflow:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/request-notif.png" alt="app settings"   width="500"  >}}

7.  Double-click your **Request notification permission** activity and set **Output** > **Variable** to *PermissionGranted*:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/permission-granted.png" alt="app settings"   width="500"  >}}

8.  Drag and drop a decision next to your **Request notification permission** activity.

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/decision-1.png" alt="app settings"   width="400"  >}}

9.  Connect your activities and decisions, and set those connections' values like so:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/connections-1.png" alt="app settings"   width="400"  >}}

10. Double-click the decision, then set the **Caption** as *Permission?*.
11. Click **Expression wizard**
12. Select **Value** > **Variable** > **Permission (Boolean)** from the drop-down menu. When finished, your **Decision** should look like this:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/decision-1-config-new.png" alt="app settings"   width="400"  >}}

13. Navigate back to your nanoflow.

14. Drag and drop a **Show message** activity on your nanoflow and connect it like this: 

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/show-message.png" alt="app settings"   width="400"  >}}

15.  Double-click your **Show message** activity, then do the following:<br />
	a. Select **Type** > **Error** from the drop-down menu.<br />
	b. Into **Template** type *No notification permissions, go to your app permission settings to grant permission*.<br />
	c. Click **OK**.

16. Drag and drop an **End event** under your **Show message** and connect them like this:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/error-end-event.png" alt="app settings"   width="400"  >}}

Now you will set up the final piece of your nanoflow's logic. 

1.  Delete the end event in the upper-right corner of your nanoflow, drag and drop a **Merge** in its place, and rebuild your connections:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/merge.png" alt="app settings"   width="400"  >}}

2.  Drag and drop a **Display Notification** activity and connect it to your merge like this:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/display-notif-merge.png" alt="app settings"   width="400"  >}}

4.  Set its **Body**, **Title**, and **Subtitle** to the variables that you created in the same nanoflow:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/tsb-variables.png" alt="app settings"   width="500"  >}}

5.  Set **Play sound** to **true**.

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/sound.png" alt="app settings"   width="500"  >}}

6.  Set **Action name** and **Action guid** to **empty**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/notif-action-actionguid.png" alt="app settings"   width="500"  >}}
	
7.  Select **Use return value** > **no**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/return-no.png" alt="app settings" >}}

8. Click **OK**, then navigate back to your nanoflow.
9.  Add a final **End event** next to your **Display notification** activity and connect it like this:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/final-end-event.png" alt="app settings" >}}

10. When you are all finished, your nanoflow will look like this:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/finished-flow.png" alt="app settings"   width="500"  >}}

Now you can run your app and see if your notification works.

1.  Start and load your app in your mobile device, then tap **Send Notification**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/app-1.png" alt="app settings"   width="400"  >}}

2. When prompted to **Allow notifications**, tap **OK**.
3.  After you allow notifications, you will receive a notification:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/native-local-notifications/basic-notif.png" alt="app settings"   width="400"  >}}

	If you did not see a notification, try clicking **Run Locally** to reload your app. Then, tap the **Send Notification** button again.

Congratulations! You can now see local notifications on your device. Next, in [How to Use Local Notifications Part 2: Badges](/howto/mobile/local-notif-badges/), you will learn how to configure notification badges.

## 4 Read More

* [Build JavaScript Actions](/howto/extensibility/build-javascript-actions/)


>>>>> /howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges.md

## 1 Introduction

Badges are crucial for many apps on iOS and Android. Badges differ in appearance based on platform, and often indicate important information in applications. For example with messaging applications, it is good practice to employ badges which alert users to new messages.

You will need to build badge functionality into your app so that when a user gets a notification, the app shows a badge on its app's icon. Also, badges are *not automatically decreased or removed* when a user checks an app. These two functions must be built manually by a developer. 

In this document you will learn to add badge functionality to your app, as well as how to remove a badge.

## 2 Prerequisites 

Before starting this how-to, make sure you have completed the following prerequisites:

* Review the [basic differences](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/) between local notifications and push notifications
* Install the [Make It Native](/refguide/getting-the-make-it-native-app/) app on your mobile device
* Complete the preceding tutorial in this [Use Local Notifications](/howto/mobile/local-notif-parent/) series

## 3 Setting a Badge Number

Since you know how to send a simple local notification, you can now set the badge number by following these steps:

1. Open **ACT_CreateAndSendNotification**.
2.  Drag and drop a **Create variable** activity to the right of the three string variables you made:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/new-variable-badge.png" alt="new create variable"   width="500"  >}}

3. Double-click the variable activity and select **Data type** > **Integer/Long**.
4. Type *1* into the expression value field. 
5.  Type *badge_number* into the **variable name** field:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/badge-1.png" alt="badge number"   width="400"  >}}

6. Click **OK**.
7.  Drag and drop a **Set badge number** JavaScript action to the right of your merge activity:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/set-badge-act.png" alt="drag set badge number" >}}

8. Double-click the badge number activity.
9.  Set the value of **Badge number** to **$badge_number**

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/badge-input.png" alt="value badge number" >}}

10. Click **OK**.

Start and load the app on your mobile device and tap the button which calls your nanoflow. You will see a notification. Go to your device's start screen to see the notification badge on your app:

{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/badge-mobile.png" alt="badge number on mobile"   width="300"  >}}

## 4 Reducing a Badge Number

To make your badge disappear after your user opens your app, follow the instructions below.

1. Drop an **App events** widget onto **Home_Native** (you have this widget because it is included in the [Blank Native Mobile App](https://marketplace.mendix.com/link/component/109511/)):

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/app-events.png" alt="app event widget" >}}

2. Double-click your **App events** widget.
3. Select **On load** > **Call a nanoflow**.
4. Click **New** and make a new nanoflow: *ACT_ClearBadge*.
5. Go to **ACT_ClearBadge**.
6. Drag and drop a **Set badge number** activity onto your nanoflow:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/clear-set-badge.png" alt="set badge activity" >}}

7. Double-click your **Set badge number** activity.
8. Click **Badge number** > **Edit**.
9. Type *0* and click **OK**.
10. Set **Use Return Value** to **No**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/clear-badge-settings.png" alt="return value"   width="400"  >}}

11. Drag and drop a **Log message** activity onto your microflow.
12. Double-click your **Log message** activity, write *Your notification has been cleared* into **Template**, and click **OK**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/clear-text-log.png" alt="clear text"   width="500"  >}}

13. Go back to your **Home_Native** page and double-click your **App events** activity.
14. Make sure **Page load** > **On load** is set to **Call a nanoflow**, and specify that nanoflow as **ACT_ClearBadge**. This will make sure your badge clears on page load.
15. Set **App resume** > **On resume** is set to **Call a nanoflow**, and specify that nanoflow as **ACT_ClearBadge**. This will make sure your badge clears when your app is resumed:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/app-event-final-settings.png" alt="app event final settings"   width="300"  >}}

16. Click **OK** and save your changes.

You can now test your badge clearing.

1. Start and load the app on your mobile device and tap the button which calls your nanoflow. You will see a notification. 
2. Go to your device's start screen to see the notification badge on your app:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/badge-mobile.png" alt="badge number on mobile"   width="300"  >}}

3. Tap your app again to open it.
4. Navigate to your device's home screen and see that your Make It Native app has no more badge:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-badges/cleared-badge-icon.png" alt="cleared-badge-icon.png"   width="300"  >}}

5. Check your Studio Pro **Console** to read the **Your notification has been cleared** text you set up.

Congratulations! You successfully implemented basic badge clearing. Next, in [How to Use Local Notifications Part 3: Actions](/howto/mobile/local-notif-action/), you will learn how to configure a notification so that when a user taps a notification, they are brought to a page.

## 5 Read More

* [Build JavaScript Actions](/howto/extensibility/build-javascript-actions/)


>>>>> /howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-action.md

## 1 Introduction

Several apps which use push notifications will also need actions to trigger after a user taps a notification. This step-by-step guide will teach you to make a tapped notification show a specific page.

{{% alert color="warning" %}}
The Make It Native app is currently experiencing limitations which interfere with notifications. We are currently fixing those limitations. To test your local notification actions, please use a native release app installed on a mobile testing device instead of the Make It Native app. To build a native release app, please complete [How to Deploy a Native App](/howto/mobile/deploying-native-app/) and use that app to test local notification actions.
{{% /alert %}}

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Review the [basic differences](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/) between local notifications and push notifications
* Install the [Make It Native](/refguide/getting-the-make-it-native-app/) app on your mobile device
* Complete the preceding tutorials in this [Use Local Notifications](/howto/mobile/local-notif-parent/) series

## 3 Setting an Action for When a Notification is Tapped

In this section you will learn to show a page when a user taps a notification.

1.  Drag and drop a **Notifications** widget onto your native home page. 

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-action/notif-widget.png" alt="notifications widget"   width="400"  >}}

2. Double-click the widget.
3. Click **Actions** > **New**. 
4. Name your action *show_page*.
5. Select **On open to** > **Show a Page**.
6. Click **New** to make a new page.
7. Type *NotifPage* into **Page Name**.
8. Click **Blank** pane on the left and select the **Blank** page template. 
9. Click **OK** to create your page. 
10. Drag and drop an **Open page button** widget onto **NotifPage**.
11. When prompted, click your **Home_Native** page:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-action/home-native-select.png" alt="click home page"   width="400"  >}}

12. Click **Select**. Now you have a button which will bring you back to your home screen when you are testing:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-action/nav-button.png" alt="click home page" >}}

13. Navigate back to your **ACT_CreateAndSendNotification** nanoflow. 

In **ACT_CreateAndSendNotification** you will set up the logic for tapping a notification which brings you to a page. This process requires you set up a string variable. However, because this string variable will never be used with other variables—it will only be used for internal notification functionality—you will not set it up by dragging and dropping a create variable activity like you did before. You will set it up with an expression.

1.  Double-click your **Display Notification** activity:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-action/set-action-name-display.png" alt="click display notification" >}}

2. Click **Action Name** > **Edit** 

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-action/add-action-name.png" alt="edit action name"   width="500"  >}}

3.  Type `'show_page'` into the expression field:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-action/show-page-exp.png" alt="show page expression"   width="400"  >}}

4. Click the **OK** buttons until you are back at your nanoflow.

Great job setting up your notification. Now you can test it:

1. Click **Run Locally** to update your app.
2. Start the app on your mobile device.
3. Tap your **Send notification** button.
4. Tap the notification to navigate to the page you selected.
5. Tap the **Return to home page** button to navigate back to your home page.

Now you can show pages after notifications are tapped. Next, in [How to Use Local Notifications Part 4: Data](/howto/mobile/local-notif-data/), you will learn to pass data to such pages.

## 4 Read More

* [Build JavaScript Actions](/howto/extensibility/build-javascript-actions/)


>>>>> /howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data.md

##  1 Introduction

Several apps make it so that when user taps a notification, the user is taken to specific page with specific parameters set. You can achieve this by sending data along with a notification. 

For example, a user could tap a notification about an entity object. They should be brought to a details page which shows an entity object's details. But in order to make that happen, you must set your notification up to pass that particular entity to its details page.

Every entry in the Mendix database has an unique ID. If you want to pass an object, your GetGUID JavaScript action must retrieve that object's GUID and pass it to your local notification. When the notification is tapped, the widget can use the object's GUID to retrieve that object using the GetObjectByGUID JavaScript action. Finally, your object will be passed to the action you specify in your notification.

You will create the following things to send data to pages:

* **Two entities** – *TestEntity* to test how to show particular object, and *Notification* to help pass data to your page
* **One page** – *DetailTestEntity* which will be shown on tapping a notification
* **One microflow** – *DS_TestEntity* to create dummy data for testing
* **Three nanoflows** – *DS_Notification* to create a dummy notification object, *ACT_PassGUIDToNotification* to pass a GUID, and *On_tapNotification* to process data from your notification

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Review the [basic differences](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/) between local notifications and push notifications
* Install the [Make It Native](/refguide/getting-the-make-it-native-app/) app on your mobile device
* Complete the preceding tutorials in this [Use Local Notifications](/howto/mobile/local-notif-parent/) series

## 3 Sending Data to Pages

To make your two entities, do the following:

1. Navigate to your domain model.
2.  Drag and drop a new entity onto your domain model: 

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/new-entity.png" alt="new entity"   width="500"  >}}

2.  Double-click it and name it *TestEntity*:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/test-entity.png" alt="test entity"   width="500"  >}}

3.  Click **Attributes** > **New**, name it *StringAttribute_1*, and click **OK**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/first-string-attribute.png" alt="string attribute"   width="400"  >}}

4. Click **OK** again until you are back at the domain model.
5.  Create an entity named *Notification* on your domain model with a string attribute *GUIDString*:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/guid-notification.png" alt="GUID string"   width="500"  >}}

To set up a notification nanoflow, do the following:

1. Create a nanoflow named *DS_Notification*. <br />
2. Drag and drop a create object activity onto your nanoflow.
3. Double-click your create object activity.
4. Click **Entity** > **Select**.
5. Click **Notification**, then click **Select**.
6. Click **OK**.
5.  Right-click your create object activity and select **Set $NewNotification as return value**: <br />

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/create-notif-nano.png" alt="create notification nanoflow"   width="500"  >}}

To set up your microflow, do the following:

1. Create a microflow named *DS_TestEntity*.
2. Drag and drop a create object activity onto your microflow.
3. Double-click your create object activity.
4. Click **Entity** > **Select**.
5. Click **NativeMobile.TestEntity**.
6. Click **Select**.
7. Check **Commit** 
8. Click **OK**.
9. Double-click your end event, make sure its **Type** is **Boolean**, type *true* into the value field, and click **OK**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/end-event-true.png" alt="end event true"   width="500"  >}}

To make this microflow run after startup, do the following:

1.  Double-click **Settings** in your App Explorer:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/pe-settings.png" alt="app explorer"   width="400"  >}}

2.  Click the **Runtime** tab:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/runtime-tab.png" alt="click runtime"   width="400"  >}}

3.  Click **After startup** > **Select**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/after-startup.png" alt="select after start up"   width="500"  >}}

4.  Click **DS_TestEntity** then click the **Select** button to achieve this result:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/select-ds-entity.png" alt="select test entity"   width="500"  >}}

5. Click **OK**

To make your page, do the following: 

1. Crete a new blank native page named *DetailTestEntity*.
2. Drag and drop a data view widget onto your new page.
3. Double-click your data view widget.
4. In **Data Source**, click **Entity (path)** > **Select**.
5. Click **TestEntity**.
6.  Click **Select** to see the following:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/data-view-source.png" alt="entity test entity" >}}

7.  Click **OK**. 
8.  When asked **"Do you want to automatically fill the contents of the data view?"** click **Yes**.
9.  This will be the page your user sees when they tap the notification:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/page-with-data-view.png" alt="page with data view"   width="300"  >}}

Next you will learn how to pass data to pages after you have tapped a notification. First, make a nanoflow:

1. Create a nanoflow named *ACT_PassGUIDToNotification*.

2. Add a retrieve action to your nanoflow, set **Source** to **From Database**, and set **Range** to **First**. Click **Entity** > **Select** and select the **TestEntity**. In **Object name** type *FirstTestEntityObject*. Then click **OK**. This will be the object that gets the GUID: 

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/retrieve-object.png" alt="retrieve object" >}}

3. Add a JavaScript Action Call activity to your nanoflow.
4. Double-click the action call activity.
5. Click **JavaScript Action** > **Select**.
6. Type *GetGuid* into the search field, click **GetGuid**, and click **Select**. (You are able to find the GetGuid JavaScript action because it is included in the NanoflowCommons module inside the Native Quickstarter template.)
7. Click **Entity Object** drop-down and click **$FirstTestEntityObject**.
8. In **Variable name** field type **GUIDForFirstObject**.
9. Click **OK**.
10. Drag and drop four create variable activities onto your nanoflow: *Title*, *Subtitle*, *Body*, and *ActionName*. Give them the values *'title1'*, *'subtitle1'*, *'body1'*, and *'OpenPageWithParams'* respectively:
	
	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/title1-activity.png" alt="title1"   width="400"  >}}
	
	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/subtitle1-activity.png" alt="subtitle1"   width="400"  >}}
	
	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/body1-activity.png" alt="body1"   width="400"  >}}
	
	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/actionname-activity.png" alt="actionname"   width="400"  >}}

	This is how all of your activities will look:
	
	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/guid-nano-with-four-strings.png" alt="actionname"   width="500"  >}}
	
11. Drag and drop a JavaScript action call activity onto your nanoflow. 
12. Double-click the action call.
13. Click **JavaScript action** > **Select**.
14. Type *DisplayNotification* into the search field, click the corresponding JavaScript action, and click **Select**.
15. Set the **Body**, **Title**, **Subtitle**, **Action name**, and **Action guid** to the corresponding variables you created previously, and set **Play Sound** to **True**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/first-guid-action.png" alt="first guid action"   width="500"  >}}

16. Click **OK**.
17. Drag and drop this nanoflow onto your app's **Home_Native** page to create a button which calls it, and name the button *Pass GUID to Notification*:
	
	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/pass-guid-button.png" alt="guid button"   width="500"  >}}
	

Good job! When a user taps a notification from the **Pass GUID to Notification** button, they will now be brought to the **DetailTestEntity** page. Next you will create a nanoflow which receives **notificationEntity** as a parameter, retrieves an object via this parameter, and passes the object to a page.

1. Make a new nanoflow named *ON_tapNotification*.
2. Drag and drop a parameter onto your nanoflow. 
3. Click **Data Type** > **Select**. Click **Notification**, then click **Select**.
4. Fill **Name** in as *notificationEntity*.
5.  Click **OK**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/notif-entity.png" alt="guid button" >}}

6. Drag and drop a JavaScript action call onto your nanoflow.

7. Double-click the JavaScript action call, then click **Select**. 

8. Type *GetObjectByGuid* into the search field, click that action, then click **Select**. 

9. Click **TestEntity** and then click **Select**.

10. Next to the **Object guid** drop-down menu click **Edit**.

11. Type *$NotificationEntity/GUIDString* into your argument field and click **OK**.

12. Select **Use Return Value** > **Yes**.

13. In **Object name** write *ReturnedObjectByGUID*:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/get-object-by-guid-settings.png" alt="guid settings"   width="500"  >}}

14. Click **OK** to save and close your JavaScript Action settings:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/guid-activity.png" alt="guid activity"   width="500"  >}}

15. Drop a **Change object** activity onto your nanoflow:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/new-change-object.png" alt="change object"   width="500"  >}}

16. Double-click the change object activity.
17. Select **Object** > **ReturnedObjectByGUID (NativeMobile.TestEntity)** from the drop-down menu.
18. Click **Action** > **New**, make sure **Member** is set to the string attribute, and into **Value** type *'Your notification has forwarded you here!'*:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/change-object-action.png" alt="change object action"   width="400"  >}}

19. Click **OK**. Check that your dialog box looks like this, then click **OK** again to close it: 

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/change-object-final.png" alt="change object final"   width="400"  >}}

Next you are going to create a show page action for **ON_tapNotification**.

1.  Drag a **Show Page** activity onto your nanoflow:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/add-show-page.png" alt="new show page"   width="500"  >}}

2. Double-click the **Show Page** activity.

3. From the **Object to pass** drop-down menu select **ReturnedObjectByGuid**.

4.  Click **Page** > **Select**, click **DetailTestEntity**, then click **OK**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/show-page-settings.png" alt="guid button"   width="400"  >}}

5. Click **OK** to close the **Show Page** activity settings, then navigate to your **Home_Native** page.

Now you will set up a data view on your home page.

1. Drag and drop a **Data View** widget on your **Home_Native** page.
2. Double-click your data view.
3. Select **Data source** > **Type** > **Nanoflow**.
4. Click **Nanoflow** > **Select** and choose **DS_Notification**.
5. Click **OK** to go back to your home page, and click **OK** on the subsequent data view dialog box.
6. Move the **Notifications** widget inside this data view.
7.  Confirm that the text box in your data flow is using **GUIDString** as its data source:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/GUID-data-source.png" alt="first guid action"   width="500"  >}}

8. Double-click your notifications widget.
9. Click **GUID** > **Select**.
10. Click **GUIDString (String (200))**, then click **Select**. Your results will look like this:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/set-guid-string.png" alt="guid string"   width="500"  >}}

9. Click **Actions** > **New**.
10. Create a **New Action** named *OpenPageWithParams*, set **On open** to **Call a nanoflow**, and select **ON_tapNotification**.

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-data/notif-action-2.png" alt="notification action"   width="500"  >}}

Great job! Now you will test your data notification functionality.

1. Start and load the app on your mobile device.
2. Tap the button which sends a notification.
3. Tap the notification to navigate to the **DetailTestEntity** page with the proper object.

Congratulations! You have harnessed the power of data to enhance your push notifications. Next, in [How to Use Local Notifications Part 5: Scheduling](/howto/mobile/local-notif-schedule-cancel/), you will learn how to schedule notifications for specific times and cancel them.

## 4 Read More

* [Build JavaScript Actions](/howto/extensibility/build-javascript-actions/)


>>>>> /howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel.md

## 1 Introduction

Local notifications should rarely notify a user right after they perform an action. Here you will learn to configure local notifications to trigger after a period of time. To do this, you will use a JavaScript action named **ScheduleNotification**. After that, you will learn how to cancel scheduled notifications.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Review the [basic differences](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/) between local notifications and push notifications
* Install the [Make It Native](/refguide/getting-the-make-it-native-app/) app on your mobile device
* Complete the preceding tutorials in this [Use Local Notifications](/howto/mobile/local-notif-parent/) series

## 3 Scheduling a Notification

To schedule a notification for a specific time, do the following:

1. Navigate to your **ACT_CreateAndSendNotification** nanoflow. 
2.  Replace your **Display notification** JavaScript action with a new **Schedule notification** action:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/new-schedule-action.png" alt="schedule action replace"   width="500"  >}}

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
2. Drag and drop a **Log message** activity on your nanoflow.
3. Double-click this activity. 
4. In **Template** write *I triggered on receive notification* then click **OK**.
5. Double-click your home page's notifications widget.
6. Click **Actions** > **New**.
7.  Create a **New Action** named *TriggerOnReceive*, set **On receive** to **Call a nanoflow**, and select **ON_ReceiveNotification**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/on-receive-action.png" alt="on receive settings"   width="500"  >}}

8. Click **OK** then **OK** again.
8. In **ACT_CreateAndSendNotification**, double-click your schedule notification activity.
10. Click **Action name** > **Edit**.
11. Type *'TriggerOnReceive'* into the argument field and click **OK**.
11. Click **OK**.
12. Start and load the app on your mobile device.
13. Tap the **Send notification** button, and *do not* minimize your app.
14. You will see the log **I triggered on receive notification** in the Studio Pro console.

But what if you want to cancel a scheduled notification? Read on to learn more.

## 4 Cancelling Scheduled Notifications

To cancel a scheduled notification, you can use either the **Cancel Scheduled Notification** or **Cancel All Scheduled Notification** JavaScript actions. To cancel a specific notification, provide an identifier of that particular notification to **Cancel Scheduled Notification**. To cancel all notifications, call the **Cancel All Scheduled Notification** JavaScript action. For further information, see the subsections below.

### 4.1 Cancelling all Scheduled Notifications

To cancel all scheduled notifications, do the following:

1. Create a nanoflow named  *ACT_CancelAllScheduledNotifications*.
2.  Drag and drop a JavaScript action named **Cancel all scheduled notifications** onto your nanoflow: 

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-all-action.png" alt="cancel scheduled action"   width="500"  >}}

3. Double-click your new cancel notification action.
4. Select  **Use return value** > **No**.
5. Click **OK**.
6.  Drag and drop this nanoflow to your home screen and name its button *Cancel all*.

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-button.png" alt="cancel button"   width="300"  >}}

To test your new cancel button, do the following:

1. Start and load the app on your mobile device.
2. Tap your **Send notification** button.
3. Tap your **Cancel all** button.
4. Minimize your app.

You will not see a notification at the end of the minute, proving your cancel action a success!

### 4.2 Cancelling a Specific Scheduled Notification

To cancel a specific scheduled notification, you will need to supply a notification ID for the notification you wish to cancel. 

1. Navigate to **ACT_CreateAndSendNotification**.
2. Double-click your **Schedule notification** activity.
3. Click **Notification id** > **Edit**. 
4.  Type *'testID'* into the argument field and click **OK**:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/test-id-arg.png" alt="test id argument" >}}

5. Click **OK** once more to close the dialog box. 
6. Create a nanoflow named *ACT_CancelScheduledNotifications*.
7.  Drag and drop a JavaScript Action named **Cancel scheduled notification** onto your nanoflow:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-scheduled-notif.png" alt="cancel one notification" >}}

8. Double-click your new cancel notification action.
9. Click **Notification id** > **Edit**.
10. Type *'testID'* into the parameter argument field and click **OK**.
11. Click **OK** again to close the dialog box.
12. Drag and drop this nanoflow onto your home screen and name its button *Cancel a specific notification*:

	{{< figure src="/attachments/howto/mobile/native-mobile/implementation/notifications/local-notif-parent/local-notif-schedule-cancel/cancel-specific-button.png" alt="cancel one button"   width="300"  >}}

To test your new cancel button, do the following:

1. Start and load the app on your mobile device.
2. Tap your **Send notification** button.
3. Tap your **Cancel a specific notification** button.
4. Minimize your app.

You will not see a notification at the end of the minute, proving your cancel action a success! Congratulations on completing this series and mastering the power of local notifications.

## 5 Read More

* [Build JavaScript Actions](/howto/extensibility/build-javascript-actions/)
