---
title: "Part 7: Send Your First Test Push Notification"
linktitle: "7. Test Push Notification"
url: /refguide9/mobile/using-mobile-capabilities/push-notifications/notif-send-test/
weight: 80
description: Tutorial for testing your push notifications.
aliases:
    - /howto9/mobile/notif-send-test/
---

## 1 Introduction

After [configuring the Push Notifications module](/refguide9/mobile/using-mobile-capabilities/push-notifications/notif-config-push/) and [building your native app](/refguide9/mobile/using-mobile-capabilities/push-notifications/notif-build-native/) it is now time to send your first test push notification.

## 2 Sending the Test Notification

To send your first test notification, do the following:

1. Login to your web application. 
1. Go to the push notification administration page you added earlier to your navigation.
1. Go to the **Devices** tab.
1. Select the your test device.
1. Click **New Message** (or double click your test device).
1. Fill in any **Title**/**Body** that you want for your notification.
1. Set the **Action name** to *Example*.
1. Leave the remaining fields to the defaults.
1. Click **Send**:

    {{< figure src="/attachments/howto9/mobile/native-mobile/implementation/notifications/notif-send-test/push-send-message.png" alt="test entity"   width="350"  class="no-border" >}}

You should now receive the notification on your device. If the application is already opened, the action will log a message (on log node **ExampleNotification**) and show a dialog box in the app.

If the app is not open (or running in the background) it will deliver and show the notification in the usual location for Android or iOS devices. Click on the notification to trigger the in-app action.

Congratulations, you have just sent your first push notification! 

If you did not receive the message, check the application's logs to see if the message was sent successfully. See the troubleshooting section below for solutions to the most common issues.

## 3 Troubleshooting Notification Issues {#troubleshoot}

| Issue | Cause | Solution |
|-----|----|-----|
| Sending a message causes a **SenderId mismatch** error or **403: Forbidden**. | Your native mobile app registered the device within your Mendix applications, but not with Firebase. | Follow the [Build Your Native App](/refguide9/mobile/using-mobile-capabilities/push-notifications/notif-build-native/#build-native-app) section in *Build a Native App with Push Notifications Enabled* and make sure you add the *google-services.json* file. |
| Sending a message causes a **Request contains an invalid argument** error or **400: Bad Request**. | Your **Project ID** does not match the **project_id** in your private key *json* file. | Upload the correct file or [generate a new private key](/refguide9/mobile/using-mobile-capabilities/push-notifications/setting-up-google-firebase-cloud-messaging-server/#setting-up-a-service-account) in Firebase and upload it. |
| Mendix Runtime exception on JavaAction 'DecryptString': **Key should not be empty**. | This module depends on the **Encryption** module, which requires a key. | Set the constant **EncryptionKey** in the **Encryption** module with a key of exactly 16 characters. |
| Error sending message: **Error reading credentials from stream, 'type' field not specified. at PushNotifications.SendFCMMessages (JavaAction : 'GetFCMAccessToken')**. | The wrong private key file was uploaded. | Upload the correct file or [generate a new private key](/refguide9/mobile/using-mobile-capabilities/push-notifications/setting-up-google-firebase-cloud-messaging-server/#setting-up-a-service-account) in Firebase and upload it. |
