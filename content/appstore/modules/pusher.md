---
title: "Pusher"
category: "Modules"
description: " "
tags: ["app store", "app store component", "pusher", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Pusher](https://appstore.home.mendix.com/link/app/107957/) module allows you to trigger a microflow or nanoflow directly from the server on the client app. This means it is triggered from the other session, without waiting for end-users to interact with the page.

In the standard situation, updates in the client are triggered by a user interaction, by timed actions, or by data-grid refresh time. For information not created by the same user session that needs to be updated immediately in the client app, the Mendix core product does not support a viable option to accomplish this. As an alternative, you need need to refresh the page constantly with timers or constant clicking. This is not user-friendly, and it is not preferred when scaling.

With this module, you can create a notify event on the server that directly causes an action in the client application. The event is based on a persistable object that is available in the server and the client page. From a microflow, the notify action will send a message to every listening widget that is listening to the same object and the action name.

{{% alert type="info" %}}
The listening widget can only listen when the page is active, so the widget cannot be used to send a notification when the user has navigated away.
{{% /alert %}}

### 1.1 Typical Use Cases

* Asynchronous refreshes
* Notifications
* Chat function

### 1.2 Dependencies

* External service [Pusher](pusher.com)

## 2 Dependent External Service

This module is build around the pusher.com/channels product. https://pusher.com/channels.
Pusher.com is a payed service, however there is very generous free tree sandbox plan.
https://pusher.com/channels/pricing

At the moment, 28 September 2018

| Plan | Sandbox |
| --- | --- |
| Price | Free |
| Connections | 100 Max |
| Number of channels | Unlimited |
| Messages | 200k / Day |
| Support | Limited |
| Protection | SSL |

### Setup app

1. Sign up at https://pusher.com
1. From the dashboard, create an app
1. On the `Channels Apps` page select the new app. In `App Keys` keys are shown
1. Copy key information into the `Pusher` module constants:
   1. app_id => Pusher_App_ID
   1. key => Pusher_Key
   1. secret => Pusher_Secret
   1. cluster => Pusher_Cluster

NOTE: Make sure you have different apps (keys) created for each app and environment (development, acceptance and production). When the credentials are shared, messages could go across environment and have unwanted side effects. The configuration can also be set per developer via: `Project settings > Edit configuration > Constants.`

## Usage

1. Import the module from the app store
1. Add the module role `Pusher User` to the relevant project security user role
1. Update the constants in the Configuration folder with the keys of the app
1. Create a microflow to execute the the `Notify` action. With input parameters
    1. Key settings
    1. `Action name`, same as configured in the widget
    1. The context object of the widget
1. Place the widget in the page within a data view, the context should match the parameter object
1. In the `Action list` add an action
    1. The `Action name` should match the action name parameter provided in the `Notify` action.
    1. Select a microflow or nanoflow the execute the action

## Sequence diagram

![Update object via Notify - Listen](/assets/SequenceDiagramUpdateObject.png)

## Refresh microflow

A microflow can be used to retrieve data that is changed by other users as long is it committed and the transaction has finished.

The `$Message` variable is containing the object in session state, and the with the XPath query `[id = $Message]` the object is retried from the database. The changes action does only do a `Refresh in client`. This will trigger an refresh update on the client page.

![Update object via Notify - Listen](/assets/RefreshMicroflowSample.png)

## Security

The notify messages are sent to anybody who is listening.
A message will contain limited data: entity name, id, changed date, notifier username. To send a 'Notify' message it is requires to have the private key which is stored on the server in the `NotifyListen.secret` constant. This 'secret' should not shared with anybody. he 'Listen' widget will use the public `NotifyListen.key` to receive a signal and will perform the action as the logged in user.

An addition authentication requests is made to the Mendix REST server `<host>/rest/pusher/key` and `<host>/rest/pusher/auth`. Only when success full the user is allowed to lists. The service will only allow logged in user with the module right `NotifyListen.User` to listen, if the user have entity access to the object of the data where the widget is placed in.
