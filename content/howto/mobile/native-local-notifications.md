---
title: "Set Up Local Notifications"
#category: "native"
#parent: "native-mobile"
#menu_order: 10
---

## 1 Introduction

This how-to will teach you to build local notifications for native applications. Local notifications will only allow you to schedule and send notifications confined to one mobile device. An example of a local notification might be an alarm app which sends a notification after an amount of time has elapsed.

**This how-to will teach you how to do the following:**

* Introduce the native notification module to a Mendix project
* Configure the native notification module
* Build an app which uses the native notifications widget
* Set up JavaScript actions for native notifications

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Review the differences between local notifications and push notifications
* Install the Make it Native app on your mobile device

## 3 Create a Project and Configure Notifications

In the subsections below you will create a project, send a local native notification, set a badge number for after a notification, and configure your notifications in important ways.

### 3.1 Display a Local Notification

1. Open Mendix Studio Pro.

2. Select **File** > **New Project**.

3.  Select the **Native Mobile Quickstart** app:

	![native mobile quickstart app](attachments/native-push/quickstart.png)

4.  Click **Use this starting point**:

	![use this starting point](attachments/native-push/starting-point.png)

5.  Click **Create App** to close the dialog box:

	{{% image_container width="500" %}}![app settings](attachments/native-push/app-settings.png){{% /image_container %}}

6.  Make sure you have a **Native phone** profile enabled:

	{{% image_container width="500" %}}![app settings](attachments/native-push/native-profile.png){{% /image_container %}}

7.  Drag and drop a **Call nanoflow button** onto your app's home page, then click **New** to make a new nanoflow (note: you may wish to rename this button **Send Notification** later): 

	{{% image_container width="500" %}}![app settings](attachments/native-push/call-button.png){{% /image_container %}}

8.  Name the nanoflow *ACT_CreateAndSendNotification* and click **OK**:

	{{% image_container width="500" %}}![app settings](attachments/native-push/name-nano.png){{% /image_container %}}

9.  In **ACT_CreateAndSendNotification**, drag and drop three **Create variable** activities onto your nanoflow and set them as string variables titled *Title*, *Subtitle*, and *Body*:

   {{% image_container width="500" %}}![app settings](attachments/native-push/create-string-variables.png){{% /image_container %}}

10.  Double-click your **Title** activity and then configure the activity:<br />
	a. Make sure **Data type** is set to **String**.<br />
	b. Click **Generate**.<br />
	c. Type *Title* into the **Constant** field.<br />
	d. Type *Title* into **Output** > **Variable**.<br />
	e. Click **OK**:

	{{% image_container width="500" %}}![app settings](attachments/native-push/title-activity.png){{% /image_container %}}

11. Double-click your **Subtitle** activity and configure it as you did your **Title** activity.

12. Double-click your **Body** activity and configure it as your did your **Title** activity.

At this stage you will set up the final logic necessary to display a notification. You must account for the fact that if an app user has not given permission to that app to send notifications, it cannot send them. You must include a **Request notification permission** activity in your nanoflow to account for this, as well as a few other activities.

1.  Drag and drop a **Has notification permission** activity onto your nanoflow:

	{{% image_container width="500" %}}![app settings](attachments/native-push/has-notif.png){{% /image_container %}}

2.  Double-click your **Has notification permission** activity, enter *NotificationPermission* into **Variable**, then click **OK**:

	{{% image_container width="500" %}}![app settings](attachments/native-push/set-haspermission-variable.png){{% /image_container %}}

3.  Drag and drop a decision after your **Has notification permission** activity onto your nanoflow:

	{{% image_container width="500" %}}![app settings](attachments/native-push/new-decision.png){{% /image_container %}}

4.  Double-click that decision and give it the **Caption** *Permission*:

	{{% image_container width="500" %}}![app settings](attachments/native-push/decision-caption.png){{% /image_container %}}
	
5.  Click **Expression wizard**, select **Variable** > **NotificationPermission (Boolean)**, and then click **OK** until you are back at your nanoflow:

	{{% image_container width="500" %}}![app settings](attachments/native-push/expression-variable.png){{% /image_container %}}
	
6.  Drag and drop a **Request notification permission** activity onto your nanoflow:

	{{% image_container width="500" %}}![app settings](attachments/native-push/request-notif.png){{% /image_container %}}

7.  Double-click your **Request notification permission** activity and set **Output** > **Variable** to *PermissionGranted*:

	{{% image_container width="500" %}}![app settings](attachments/native-push/set-variable.png){{% /image_container %}}

8.  Drag and drop a decision next to your **Request notification permission** activity.

	{{% image_container width="500" %}}![app settings](attachments/native-push/decision-1.png){{% /image_container %}}

9.  Connect your activities and decisions, and set those connections' values, like this:

	{{% image_container width="500" %}}![app settings](attachments/native-push/connections-1.png){{% /image_container %}}

10. Double-click the decision, then set the **Caption** as *Permission?*:
11. Click **Expression wizard**
12. Select **Value** > **Variable** > **Permission (Boolean)** from the drop-down menu. When finished, your **Decision** should look like this:

	{{% image_container width="500" %}}![app settings](attachments/native-push/decision-1-config.png){{% /image_container %}}

13. Navigate back to your nanoflow.

14. Drag and drop a **Show message** activity on your nanoflow and connect it like this: 

	{{% image_container width="500" %}}![app settings](attachments/native-push/show-message.png){{% /image_container %}}

15.  Double-click your **Show message** activity, then do the following:<br />
	a. Select **Type** > **Error** from the drop-down menu.<br />
	b. Into **Template** type *No notfication permissions, go to your app permission settings to grant permission.*.<br />
	Click **OK**.

16. Drag and drop an **End event** under your **Show message** and connect them like this:

	{{% image_container width="500" %}}![app settings](attachments/native-push/error-end-event.png){{% /image_container %}}

Now you will set up the final piece of your nanoflow's logic. 

1.  Delete your upper end event, drag and drop a **Merge** in its place, and rebuild your connections:

	{{% image_container width="500" %}}![app settings](attachments/native-push/merge.png){{% /image_container %}}

2.  Drag and drop a **Display Notification** activity and connect it to your merge like this:

	{{% image_container width="500" %}}![app settings](attachments/native-push/display-notif-merge.png){{% /image_container %}}

4.  Set its **Body**, **Title**, and **Subtitle** to the variables that you created in the same nanoflow:

	{{% image_container width="500" %}}![app settings](attachments/native-push/tsb-variables.png){{% /image_container %}}

5.  Set **Play sound** to **true**.

	{{% image_container width="500" %}}![app settings](attachments/native-push/sound.png){{% /image_container %}}

6.  Set **Action name** and **Action guid** to **empty**:

	{{% image_container width="500" %}}![app settings](attachments/native-push/notif-action-actionguid.png){{% /image_container %}}
	
7.  Select **Use return value** > **no**:

	![app settings](attachments/native-push/return-no.png)

8. Click **OK**, navigate back to your nanoflow.
9.  Add a final **End event** next to your **Display notification** activity and connect it like this:

	![app settings](attachments/native-push/final-end-event.png)

10. When you are all finished, your nanoflow will look like this:

	{{% image_container width="500" %}}![app settings](attachments/native-push/finished-flow.png){{% /image_container %}}

Now you can run your app and see if your notification works.

1.  Start and load the app in your mobile device, then tap the nanoflow button:

	{{% image_container width="500" %}}![app settings](attachments/native-push/app-1.png){{% /image_container %}}

2. When prompted to **Allow notifications** tap **OK**.
3.  After you allow notifications, you will receive a notification:

	{{% image_container width="500" %}}![app settings](attachments/native-push/basic-notif.png){{% /image_container %}}

	If you did not see a notification, try clicking **Run Locally** to reload your app, then tap the **Send Notification** button again.

Congratulations! You can now see local notifications on your device. Next, you will learn how to configure an action when a user taps on a notification.

### 3.2 Set a Badge Number

Badges are crucial for many apps on both iOS and Android. Badge numbers can indicate important information in various applications. For example with messaging applications, it is good practice to indicate how many messages are unread.

You will need to build badge functionality into your app so that when a user gets a notification, the app shows a badge number on its app's icon. Also, badge numbers are *not automatically decreased or removed* when a user checks an app. These two things must be handled manually by a developer.

Since we covered how to send a simple local notification, we can also set the badge number by following steps:

1. Open **ACT_CreateAndSendNotification**.
2.  Drag and drop a **Create variable** activity to the right of the three string variables you made:

	{{% image_container width="500" %}}![new create variable](attachments/native-push/new-variable-badge.png){{% /image_container %}}

3. Double-click the variable activity and select **Data type** > **Integer/Long**.
4. Type *1* into the expression value field. 
5.  Type *badge_number* into the **variable name** field:

	{{% image_container width="500" %}}![badge number](attachments/native-push/badge-1.png){{% /image_container %}}

6. Click OK.
7.  Drag and drop a **Set badge number** JavaScript action to the right of your merge activity:

	![drag set badge number](attachments/native-push/set-badge-act.png)

8. Double-click the badge number activity.
9.  Set the value of **Badge number** to **$badge_number**

	![value badge number](attachments/native-push/badge-input.png)

10. Click **OK**.

Start and load the app on your mobile device and tap the button which calls your nanoflow. You will see a notification. Go to your device's start screen to see the notification badge on your app:

{{% image_container width="500" %}}![badge number on mobile](attachments/native-push/badge-mobile.png){{% /image_container %}}

### 3.3 Set an Action for When a Notification is Tapped

In this section you will learn to show a page when a user taps a notification.

1.  Drag and drop a **Notifications** widget onto your native home page. 

	{{% image_container width="500" %}}![notifications widget](attachments/native-push/notif-widget.png){{% /image_container %}}

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

	![click home page](attachments/native-push/home-native-select.png)

12. Click the **Select** button. Now you have a button which will bring you back to your home screen when you are testing:

	![click home page](attachments/native-push/nav-button.png)

Navigate back to your **ACT_CreateAndSendNotification** nanoflow. There you will set up the logic for tapping a notification which brings you to a page. This process requires you set up a string variable. However, because this string variable will never be used with other variables — it will only be used for internal notification functionality — you will not set it up by dragging and dropping a create variable activity like you did before. You will set it up with an expression.

1.  Double-click your **Display Notification** activity:

	![click display notification](attachments/native-push/set-action-name-display.png)

2. Click **Action Name** > **Edit** 

	{{% image_container width="500" %}}![edit action name](attachments/native-push/add-action-name.png){{% /image_container %}}

3.  Type `'show_page'` into the expression field:

	{{% image_container width="500" %}}![show page expression](attachments/native-push/show-page-exp.png){{% /image_container %}}

4. Click the **OK** buttons until you are back at your nanoflow.

Great job setting up your notification. Now you can test it:

1. Click **Run Locally** to update your app.
2. Start the app on your mobile device.
3. Tap your **Send notification** button.
4. Tap the notification to navigate to the page you selected.
5. Tap the **Return to home page** button to navigate back to your home page.

Now you can show pages after notifications are tapped. Next you will learn to pass data to these pages. 

### 3.4 Send Data to Pages

Several apps make it so that when user taps a notification, the user is taken to specific page with specific parameters set. You can achieve this by sending data along with a notification. 

For example, a user could tap a notification about an entity object. They should be brought to a details page which shows an entity object's details. But in order to make that happen, you must set your notification up to pass that particular entity to its details page.

Every entry in the Mendix database has an unique ID. If you want to pass an object, your GetGUID JavaScript action must retrieve that object's GUID and pass it to your local notification. When the notification is tapped, the widget can use the object's GUID to retrieve that object using the GetObjectByGUID JavaScript action. Finally, your object will be passed to the action you specify in your notification.

You will create the following things to send data to pages:

* **Two entities** — *TestEntity* to test how to show particular object, and *Notification* for your workaround
* **One page** — *DetailTestEntity* which will be shown on tapping a notification
* **One microflow** — *DS_TestEntity* to create dummy data for testing
* **Three nanoflows** — *DS_Notification* to create a dummy notification object, *ACT_PassGUIDToNotification* to pass a GUID, and *On_tapNotification* to process data from your notification

To make your two entities, do the following:

1.  Navigate to your domain model.
2.  Drag and drop a new entity onto your domain model: 

	{{% image_container width="500" %}}![new entity](attachments/native-push/new-entity.png){{% /image_container %}}

2.  Double-click it and name it *TestEntity*:

	{{% image_container width="500" %}}![test entity](attachments/native-push/test-entity.png){{% /image_container %}}

3.  Click **Attributes** > **New**, name it *StringAttribute_1*, and click **OK**:

	{{% image_container width="500" %}}![string attribute](attachments/native-push/first-string-attribute.png){{% /image_container %}}

4. Click **OK** again until you are back at the domain model.
5.  Create an entity *Notification* on your domain model with a string attribute *GUIDString*:

	{{% image_container width="500" %}}![GUID string](attachments/native-push/guid-notification.png){{% /image_container %}}

To set up a notification nanoflow, do the following:

1. Create a nanoflow named *DS_Notification*. <br />
2. Drag and drop a create object activity onto your nanoflow.
3. Double-click your create object activity.
4. Click **Entity** > **Select**.
5. Click **Notification**, then click **Select**.
6. Click **OK**.
5.  Right-click your create object activity and select **Set $NewNotification as return value**: <br />

	{{% image_container width="500" %}}![create notification nanoflow](attachments/native-push/create-notif-nano.png){{% /image_container %}}

To set up your microflow, do the following:

1. Create a microflow named *DS_TestEntity*.
2. Drag and drop a create entity activity onto your microflow.
3. Double-click your create entity activity.
4. Click **Entity** > **Select**.
5. Click **NativeMobile.TestEntity**.
6. Click **Select**.
7. Click **OK**.
8. Drag and drop a commit object activity onto your microflow.
9. Double-click your commit object activity.
10. From the **Object or List** drop-down menu, select **NewTestEntity (NativeMobile.TestEntity)**.
11. Click **OK**.
12. Double-click your end event, make sure its **Type** is **Boolean**, then type *true* into the value field and click **OK**:

	{{% image_container width="500" %}}![end event true](attachments/native-push/end-event-true.png){{% /image_container %}}

To make this microflow run after startup, do the following:

1.  Double-click **Settings** in your Project Explorer:

   {{% image_container width="500" %}}![project explorer](attachments/native-push/pe-settings.png){{% /image_container %}}

2.  Click the **Runtime** tab:

   {{% image_container width="500" %}}![click runtime](attachments/native-push/runtime-tab.png){{% /image_container %}}

3.  Click **After startup** > **Select**:

   {{% image_container width="500" %}}![select after start up](attachments/native-push/after-startup.png){{% /image_container %}}

4.  Click **DS_TestEntity** then click the **Select** button:

   {{% image_container width="500" %}}![select test entity](attachments/native-push/select-ds-entity.png){{% /image_container %}}

5. Click **OK**

To make your page, do the following: 

1. Crete a new blank native page named *DetailTestEntity*.
2. Drag and drop a data view widget onto your new page.
3. Double-click your data view widget.
4. In **Data Source**, click **Entity (path)** > **Select**.
5. Click **TestEntity**.
6.  Click **Select** to see the following:

	![entity test entity](attachments/native-push/data-view-source.png)

7.  Click **OK**. 
8.  When asked "Do you want to automatically fill the contents of the data view?" click **Yes**.
9.  This will be the page your user sees when they tap the notification:

	{{% image_container width="500" %}}![page with data view](attachments/native-push/page-with-data-view.png){{% /image_container %}}

Next you will create a workaround which allows data to be passed to pages. First, make a nanoflow:

1. Create a nanoflow named *ACT_PassGUIDToNotification*.

2. Add a retrieve action to your nanoflow, set **Source** to **From Database**, and set **Range** to **First**. Click **Entity** > **Select** and select the **TestEntity**. In **Object name** type *FirstTestEntityObject*. Then click **OK**. This will be the object that gets the GUID: 
	
	![retrieve object](attachments/native-push/retrieve-object.png)
	
3. Add a JavaScript Action Call activity to your nanoflow.
4. Double-click the action call activity.
5. Click **JavaScript Action** > **Select**.
6. Type *GetGuid* into the search field, click **GetGuid**, and click **Select**. This JavaScript action is available in the Mendix App Store under the NanoflowCommons module included in the Native Quickstarter template. [todo: change this to "if you wanna integrate this tech into your existing project outside this howto example and you dont use the native movile quickstart..."]
7. Click **Entity Object** drop-down and click **$TestEntity**.
8. In **Variable name** field type **GUIDForFirstObject**.
9. Click **OK**.
10. Drag and drop four create variable activities onto your nanoflow: *Title*, *Subtitle*, *Body*, and *ActionName*. Give them the values *'title1'*, *'subtitle1'*, *'body1'*, and *'OpenPageWithParams'* respectively:
	
	{{% image_container width="400" %}}![title1](attachments/native-push/title1-activity.png){{% /image_container %}}
	
	{{% image_container width="400" %}}![subtitle1](attachments/native-push/subtitle1-activity.png){{% /image_container %}}
	
	{{% image_container width="400" %}}![body1](attachments/native-push/body1-activity.png){{% /image_container %}}
	
	{{% image_container width="400" %}}![actionname](attachments/native-push/actionname-activity.png){{% /image_container %}}

	This is how all of your activities will look:
	
	{{% image_container width="500" %}}![actionname](attachments/native-push/guid-nano-with-four-strings.png){{% /image_container %}}
	
11. Drag and drop a JavaScript action call activity onto your nanoflow. 
12. Double-click the action call.
13. Click **JavaScript action** > **Select**.
14. Type *DisplayNotification* into the search field, click the corresponding JavaScript action, and click **Select**.
15. Set the **Body**, **Title**, **Subtitle**, **Action name**, and **Action guid** to the corresponding variables you created previously, and set **Play Sound** to **True**:

	{{% image_container width="500" %}}![first guid action](attachments/native-push/first-guid-action.png){{% /image_container %}}

16. Click **OK**.
17. Drag and drop this nanoflow onto your app's **Home_Native** page to create a button which calls it, and name the button *Pass GUID to Notification*:
	
	{{% image_container width="500" %}}![guid button](attachments/native-push/pass-guid-button.png){{% /image_container %}}
	

Good job! When a user taps a notification from the **Pass GUID to Notification** button, they will now be brought to the **DetailTestEntity** page. Next you will create a nanoflow which receives **notificationEntity** as a parameter, retrieves an object via this parameter, and passes the object to a page.

1. Make a new nanoflow named *ON_tapNotification*.
2. Drag and drop a parameter onto your nanoflow. 
3. Click **Data Type** > **Select**. Click **Notification**, then click **Select**.
4. Fill **Name** in as *notificationEntity*.
5.  Click **OK**:

![guid button](attachments/native-push/notif-entity.png)

6. Drag and drop a JavaScript action call onto your nanoflow.

7. Double-click the JavaScript action call, then click **Select**. 

8. Type *GetObjectByGuid* into the search field, click that action, then click **Select**. 

9. Click **TestEntity** and then click **Select**.

10. Next to the **Object guid** drop-down menu click **Edit**.

11. Type *$NotificationEntity/GUIDString* into your argument field and click **OK**.

12. Select **Use Return Value** > **Yes**.

13. In **Object name** write *ReturnedObjectByGUID*:

	![guid settings](attachments/native-push/get-object-by-guid-settings.png)

14. Click **OK** to save and close your JavaScript Action settings:

	![guid activity](attachments/native-push/guid-activity.png)

15. Drop a **Change object** activity onto your nanoflow:

	![change object](attachments/native-push/new-change-object.png)

16. Double-click the change object activity.
17. Select **Object** > **ReturnedObjectByGUID (NativeMobile.TestEntity)** from the drop-down menu.
18. Click **Action** > **New**, make sure **Member** is set to the string attribute, and into **Value** type *'Your notification has forwarded you here!'*:

	![change object action](attachments/native-push/change-object-action.png)

19. Click **OK**. Check that your dialog box looks like this, then click **OK** again to close it: 

	![change object final](attachments/native-push/change-object-final.png)

Next you are going to create a show page action for **ON_tapNotification**.

1.  Drag and drop a **Show Page** action onto your nanoflow:

	![new show page](attachments/native-push/add-show-page.png)

2. Double-click the show page activity.

3. From the **Object to pass** drop-down menu select **ReturnedObjectByGuid**.

4.  Click **Page** > **Select**, click **DetailTestEntity**, then click **OK**:

  ![guid button](attachments/native-push/show-page-settings.png)

5. Click **OK** to close the **Show Page** activity settings, then navigate to your **Home_Native** page.

Now you will set up a data view on your home page.

1. Drag and drop a **Data View** widget on your **Home_Native** page.
2. Double-click your data view.
3. Select **Data source** > **Type** > **Nanoflow**.
4. Click **Nanoflow** > **Select** and choose **DS_Notification**.
5. Click **OK** to go back to your home page, and click **OK** on the subsequent data view dialog box.
6. Move the **Notifications** widget inside this data view.
7.  Confirm that the text box in your data flow is using **GUIDString** as its data source:

	{{% image_container width="500" %}}![first guid action](attachments/native-push/GUID-data-source.png){{% /image_container %}}

8. Double-click your notifications widget.
9. Click **Actions** > **New**.
10. Create a **New Action** named *OpenPageWithParams*, set **On open** to **Call a nanoflow**, and select **ON_tapNotification**.

	{{% image_container width="500" %}}![notification action](attachments/native-push/notif-action-2.png){{% /image_container %}}

11. Start and load the app on your mobile device, tap the nanoflow button you created in 3.e, then tap the notification to navigate to the **DetailTestEntity** page with the proper object.

Explaining the work-around above:

* Since the data view is on your homepage and nanoflow is set as a data source, it creates an empty notification object. This object will be referred to as XwithGUID.
* We trigger a ACT_PassGuidToNotification. JSAction DisplayNotification creates a notification with correct parameters (title, subtitle, body, Action name, and Action guid). This step happens before a notification is displayed.
* A user taps the notification. Before executing **ON_tapNotification**, your app passes **XwithGUID** to your widget then sets its GUID attribute programatically. Since you set the GUID attribute of the widget to **XwithGUID**, now you can use this in your **ON_tapNotification** nanoflow.
* Your widget executes **ON_tapNotification** that expects a notification object with a GUID, which in this case will be **XwithGUID**. After this, you can safely use **ON_tapNotification's** notification parameter for retrieval purposes. [todo: half of these steps are written in "present tense" as a USER is experiencing it. The second half is more written from the dev's perspective as they are building the app. Mehmet, can you please rewrite these steps to be all one or the other? I suspect writing them all from the dev's perspective might be easiest. Also if these are just a collection of notes they can stay bullets. If they are a sequence of things in order, they need to be changed to a numbered list.]

## 4 Scheduling a Notification

Local notifications should rarely notify a user right after they do an action. Here you will learn to configure local notifications to trigger after a period of time. To do this, you will use a JavaScript action named **ScheduleNotification**.

[todo: make sure to cover "on received" action in this section because we haven't yet]

To schedule a notification for a specific time, do the following:

1. Navigate to your **ACT_CreateAndSendNotification** nanoflow. 
2.  Replace your **Display notification** JavaScript action with a new **Schedule notification** action:

	![schedule action replace](attachments/native-push/new-schedule-action.png)

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

If your app open, it will not show the notification due to iOS and Android user guidelines. However, notifications for open apps can still trigger onReceive events. This allows you to design custom actions for notifications, such as showing a page with pop-up layout.

But what if you want to cancel a scheduled notification? Read on to learn more.

## 5 Cancelling Scheduled Notifications

To cancel a scheduled notification, you can use either the **Cancel Scheduled Notification** or **Cancel All Scheduled Notification** JavaScript actions. To cancel a specific notification, provide an identifier of that particular notification to **Cancel Scheduled Notification**. To cancel all notifications, call the **Cancel All Scheduled Notification** JavaScript action. For further information, see the subsections below.

### 5.1 Cancelling all Scheduled Notifications

To cancel all scheduled notifications, do the following:

1. Create a nanoflow named  *ACT_CancelAllScheduledNotifications*.
2.  Drag and drop a JavaScript action named **Cancel all scheduled notifications** onto your nanoflow: 

	![cancel scheduled action](attachments/native-push/cancel-all-action.png)

3. Double-click your new cancel notification action.
4. Select  **Use return value** > **No**.
5. Click **OK**.
6.  Drag and drop this nanoflow to your home screen and name its button *Cancel all*.

	![cancel button](attachments/native-push/cancel-button.png)

To test your new cancel button, do the following:

1. Start and load the app on your mobile device.
2. Tap your **Send notification** button.
3. Tap your **Cancel all** button.
4. Minimize your app.

You will not see a notification at the end of the minute, proving your cancel action a success!

### 5.2 Cancelling a Specific Scheduled Notification

To cancel a specific scheduled notification, you will need to supply a notification ID for the notification you wish to cancel. 

1. Navigate to **ACT_CreateAndSendNotification**.
2. Double-click your **Schedule notification** activity.
3. Click **Notification id** > **Edit**. 
4.  Type *'testID'* into the argument field and click **OK**:

	![test id argument](attachments/native-push/test-id-arg.png)

5. Click **OK** once more to close the dialog window. 
4. Create a nanoflow named *ACT_CancelScheduledNotifications*.
5.  Drag and drop a JavaScript Action named **Cancel scheduled notification** onto your nanoflow:

	![cancel one notification](attachments/native-push/cancel-scheduled-notif.png)

6. Double-click your new cancel notification action.
7. Click **Notification id** > **Edit**.
8. Type *'testID'* into the parameter argument field and click **OK**.
9. Click **OK** again to close the dialog window.
7.  Drag and drop this nanoflow onto your home screen and name its button *Cancel a specific notification*:

	![cancel one button](attachments/native-push/cancel-specific-button.png)

To test your new cancel button, do the following:

1. Start and load the app on your mobile device.
2. Tap your **Send notification** button.
3. Tap your **Cancel a specific notification** button.
4. Minimize your app.

You will not see a notification at the end of the minute, proving your cancel action a success!

## 6 Read More

* [Implement Push Notifications](implementation-guide)
* [Build JavaScript Actions](/howto/extensibility/build-javascript-actions)