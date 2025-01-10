---
title: "Pusher"
url: /appstore/services/pusher/
description: "Describes the configuration and usage of the Pusher service, which is available in the Mendix Marketplace."
aliases:
    - /appstore/modules/pusher/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Pusher](https://marketplace.mendix.com/link/component/107957/) service allows you to trigger a microflow or nanoflow directly from the server on non-native client apps. This means it is triggered from the other session, without waiting for end-users to interact with the page.

In the standard situation, updates in the client are triggered by a user interaction, by timed actions, or by data-grid refresh time. For information not created by the same user session that needs to be updated immediately in the client app, the Mendix core product does not support a viable option to accomplish this. As an alternative, you need to refresh the page constantly with timers or constant clicking. This is not user-friendly, and it is not preferred when scaling.

With this service, you can create a notify event on the server that directly causes an action in the client application. The event is based on a persistable object that is available in the server and the client page. From a microflow, the notify action will send a message to every listening widget that is listening to the same object and the action name.

{{% alert color="info" %}}
The listening widget can only listen when the page is active, so the widget cannot be used to send a notification when the user has navigated away.
{{% /alert %}}

### Typical Use Cases

* Asynchronous refreshes
* Notifications
* Chat function

### Dependencies

* External service [Pusher](https://pusher.com/) – the service is built around the Pusher [Channels](https://pusher.com/channels) product; Pusher is a paid service, but there is a generous [free Sandbox plan](https://pusher.com/channels/pricing):

    | Detail | Sandbox |
    | --- | --- |
    | Price | Free |
    | Connections | 100 Max |
    | Number of channels | Unlimited |
    | Messages | 200k / Day |
    | Support | Limited |
    | Protection | SSL |

## Setting Up the Pusher App

To set up the necessary Pusher app, follow these steps:

1. Sign up at [Pusher](https://dashboard.pusher.com/accounts/sign_up).
2. From the dashboard, create an app
3. On the **Channels Apps** page, select the new app. The keys are shown in **App Keys**.
4. Copy the key information into the following **Pusher** service constants:
    * `app_id` – `Pusher_App_ID`
    * `key` – `Pusher_Key`
    * `secret` – `Pusher_Secret`
    * `cluster` – `Pusher_Cluster`

{{% alert color="info" %}}
Make sure you have different apps (keys) created for each app and environment (development, acceptance, and production). When the credentials are shared, messages could go across environments and have unwanted side effects. The configuration can also be set per developer via **App Settings** > **Edit** configuration > [Constants](/refguide/configuration/#constants).
{{% /alert %}}

## Configuration

To use this service after importing it from the Marketplace, follow these steps:

1. Add the **Pusher User** [module role](/refguide/module-security/#module-role) to the relevant app security [user role](/refguide/security/#user-role).
2. Update the constants in the **Configuration** folder with the keys of the app.
3. Create a microflow to execute the **Notify** action with the following input parameters:
    * Key settings
    * **Action name** same as configured in the widget
    * The context object of the widget
4. Place the widget in a page within a [data view](/refguide/data-view/), where the context should match the parameter object.
5. In the **Action list**, add an action in which the **Action name** matches the action name parameter provided in the **Notify** action.
6. Select a microflow or nanoflow the execute the action.

This diagram describes updating an object via the Notify action:

{{< figure src="/attachments/appstore/platform-supported-content/services/pusher/SequenceDiagramUpdateObject.png" alt="update object via notify listen" class="no-border" >}}

### Refresh Microflow

You can use a microflow to retrieve data that is changed by other users as long is it committed and the transaction has finished.

The `$Message` variable contains the object in the session state. With the `[id = $Message]` XPath query, the object is retrieved from the database. The changes action only does a refresh in the client, which triggers a refresh update on the client page.

{{< figure src="/attachments/appstore/platform-supported-content/services/pusher/RefreshMicroflowSample.png" alt="refresh microflow" class="no-border" >}}

### Security 

The notify messages are sent to anybody who is listening. 

A message will contain limited data (entity name, ID, changed date, notifier user name). To send a notify message, it is required to have the private key that is stored on the server in the `NotifyListen.secret` constant. This secret should not be shared with anybody. The listening widget will use the public `NotifyListen.key` to receive a signal and perform the action as the logged-in user.

An addition authentication request is made to the Mendix REST server via `<host>/rest/pusher/key` and `<host>/rest/pusher/auth`. Only when successful is the user allowed to access the lists. The service will only allow a logged-in user with the **NotifyListen.User** module role to listen when the user has entity access to the object of the data in which the widget is placed.

## Strict CSP Compatibility

This service requires additional configuration to be compliant with strict content security policy (CSP). The Pusher service makes use of an external service for its functionalities. To make this service work, you need to configure the CSP headers to allow resources from that domain.
