---
title: "APIs"
parent: "push-notifications"
---
This is a list of microflow actions that can be called by your application to send push notifications. They are located in the **Toolbox** under the **Push notifications** category.

| Action Name | Description |
| --- | --- |
| SendMessage | An action to send a message to a device immediately. |
| SendMessageToUser | An action to send a message to all the devices of a user immediately. |
| QueueMessage | An action to send a message to a device using a queue. |

These actions accept the parameters described below.

## SendMessage & QueueMessage

| Parameter | Description |
| --- | --- |
| Device | Android, iOS, or Windows. |
| Title | The title of the message. |
| MessageText |

The contents of the message:

| Parameter | Description |
| --- | --- |
| Badge | The number that appears on the app icon (iOS). |
| LaunchImage | The file name of the launch image (iOS). |
| Sound | The name of the system sound to play (iOS). |

## SendMessageToUser

| Parameter | Description |
| --- | --- |
| User | The user to whom you want to send the message. |
| Title | The title of the message. |
| MessageText |

The contents of the message:

| Parameter | Description |
| --- | --- |
| Badge | A number that appears on the app icon (iOS) |
| LaunchImage | File name of the launch image (iOS) |
| Sound | Name of the system sound to play (iOS) |

## Sending Queued Messages

For sending queued messages to work, you need to ensure that the scheduled event `PushQueue` is active. For TAP environments, you need to explicitly activate the scheduled event in the Mendix Cloud Portal. For free apps, the scheduled events feature is not supported, so a queued message won't be sent.
