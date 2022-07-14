---
title: "Send Push Notifications"
url: /howto8/mobile/sending-push-notifications/
weight: 20
tags: ["mobile", "push notification", "mobile", "microflow"]
---

## 1 Overview

This is a list of microflow actions that can be called by your application to send push notifications. They are located in the **Toolbox** under the **Push notifications** category.

| Microflow Action Name | Description |
| --- | --- |
| SendMessageToDevice | Sends a message to a device immediately. |
| SendMessageToDevices | Sends a message to multiple devices immediately. |
| SendMessageToUser | Sends a message to all the devices of a user immediately. |
| SendMessageToUsers | Sends a message to all the devices of multiple users immediately. |

All actions accept a MessageData object as the first parameter. The MessageData entity contains all input data for the notification, such as title, body, and timeToLive.

You may use the **PrepareMessageData** microflow to generate this entity (but you can also create it manually).

| Parameter | Description |
| --- | --- |
| Title | The title of the message. |
| Body | The extended text of the notification. |
| TimeToLive | The number of seconds before the notification expires. |
| Badge | The number to show on the app icon. |
| ActionName | The name of the action to perform when the recipient clicks on the notification (see below). |
| ContextObjectGuid | The Mendix object ID of the entity to pass to the specified action. |

In addition, you can modify the NextTry attribute to influence when the notification is delivered.

As an alternative to providing a contextObjectGuid, you can pass the entity that you would like to use as a context object to the **SendMessage...** microflow actions.

## 2 Actions

You can specify actions to be performed once the recipient clicks a notification. To do so, you should specify the available actions in the widget by following these steps:

1.  Locate the **Online_Snippet** or **Offline_Snippet** document and open it.

	{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/sending-push-notifications/push_notifications_snippets.png" >}}

2. Double-click the widget to open the properties.

	{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/sending-push-notifications/push_notifications_widget_settings.png" >}}

Use the **New** button to add new actions. Each action requires a name, an action type (Open Page or Call Microflow), and optionally an entity (the type of the context object). Depending on the action type, you should configure the page to be opened or the microflow to be called.

{{< figure src="/attachments/howto8/mobile/hybrid-mobile/push-notifications/sending-push-notifications/push_notifications_action.png" >}}

The names of the actions can be used as the value of the ActionName attribute of the MessageData entity.

### 2.1 Shortcomings of This Approach

* Nanoflows are not yet supported
* Microflows can only be used in online apps; in offline apps, microflows are not supported

## 3 Read More

* [Set Up the Apple Push Notification Server](/howto8/mobile/setting-up-apple-push-notification-server/)
* [Set Up the Google Firebase Cloud Messaging Server](/howto8/mobile/setting-up-google-firebase-cloud-messaging-server/)

