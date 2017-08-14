---
title: "Testing the Implementation"
parent: "push-notifications"
---
Once you finish implementing the steps described previously, you will want to test whether everything works correctly. This can be done easily using the administration pages that should have been included in your application during [step 6](implementation-guide) of the implementation guide. Follow these steps to send a push notification to a device:

### Step 1 - Log in as administrator to the web (desktop) application

Open your application in the browser and log in as administrator (e.g. `MxAdmin`).

### Step 2 - Create a user account for a mobile user

To be able to log in into your hybrid mobile application, you will need to create a new user. Typically, this can be done from the administration pages of your application.

### Step 3 - Log in to your hybrid mobile application

Open your hybrid mobile app and log in to it.
If you are testing offline-mode, please press the sync button to send the pending device registration request to the server.

### Step 4 - Open the Push Notifications administration page

Back in the administrator view of your web application, navigate to the `Devices` tab in the Push Notifications administration page. Here you should see one device already having been registered, which is the device that you used to log in to your hybrid mobile application. Continue by selecting the device and press the `New Message` button.

![](attachments/19955741/21168174.png)

### Step 5 - Send a message

Fill in the title and the message in the form and press `Send immediate` button. Your device should receive a new push notification. If your hybrid mobile app is currently running in the foreground, the notification will be displayed in the app. Otherwise, it will be shown as a standard push notification.

![](attachments/19955741/21168175.png)
