---
title: "Pusher"
url: /appstore/services/pusher/
description: "Describes the configuration and usage of the Pusher service, which is available in the Mendix Marketplace."
aliases:
    - /appstore/modules/pusher/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Pusher](https://marketplace.mendix.com/link/component/107957/) service lets you trigger a client action from the server in non-native client apps. This means an action can be triggered by another user session without waiting for end-user interaction.

In standard scenarios, client updates are triggered by user interaction, timed actions, or data grid refresh intervals. When data is changed outside the current user session and must be updated immediately in the client, the Mendix core product does not provide a direct option. As an alternative, you can refresh the page continuously by using timers or repeated clicks, but this is not user-friendly and does not scale well.

With this service, you can create a notify event on the server that directly triggers a configured client action in the client app. The event is based on a persistable object that is available on the server and on the client page. When the server-side **Notify** action is executed from a microflow, it sends a message to every listening widget that listens to the same object and action name.

{{% alert color="info" %}}
The listening widget only listens while the page is active, so it cannot receive a notification after the user navigates away from the page.
{{% /alert %}}

### Typical Use Cases

* Asynchronous refreshes
* Notifications
* Chat functions

### Dependencies

* External service [Pusher](https://pusher.com/). The service is built around Pusher [Channels](https://pusher.com/channels). Pusher is a paid service and also provides a [free Sandbox plan](https://pusher.com/channels/pricing):

    | Detail | Sandbox |
    | --- | --- |
    | Price | Free |
    | Connections | 100 Max |
    | Number of channels | Unlimited |
    | Messages | 200k / Day |
    | Support | Limited |
    | Protection | SSL |

### React Client Compatibility

Versions below v4 do not support React client apps. Starting with v4, this module includes a new widget that supports React client apps while the legacy widget remains available. Both widgets can be used side by side while migrating to React client. The runtime parts stay the same for both widgets. The new widget is compatible with Mendix [11.11](/releasenotes/studio-pro/11.11/) and above.

## Setting Up the Pusher App

To set up the Pusher app, follow these steps:

1. Sign up at [Pusher](https://dashboard.pusher.com/accounts/sign_up).
2. In the dashboard, create an app.
3. On the **Channels Apps** page, select the new app. The keys are listed in **App Keys**.
4. Copy the key information into the following **Pusher** service constants:
    * `app_id` – `Pusher_App_ID`
    * `key` – `Pusher_Key`
    * `secret` – `Pusher_Secret`
    * `cluster` – `Pusher_Cluster`

{{% alert color="info" %}}
Use different apps (keys) per Mendix app and environment (development, acceptance, and production). If credentials are shared, messages can cross environments and cause unwanted side effects. You can also set the configuration per developer via **App Settings** > **Edit** configuration > [Constants](/refguide/configurations-tab/#constants).
{{% /alert %}}

## Configuration

After you import this module from the Marketplace, configure both parts:

* Server-side configuration for sending notify messages.
* Client-side configuration for listening to notify messages and executing client actions.

### Server Side Configuration

Follow these steps to configure the server side:

1. Add the **Pusher User** [module role](/refguide/module-security/#module-role) to the relevant app security [user role](/refguide/security/#user-role).
2. Update the pusher service constants in the **Configuration** folder with the app keys.
3. Create a microflow that executes the **Notify** action with these input parameters:
    * Key settings
    * **Action name** that matches the action name configured in the widget
    * Context object of the widget

### Client Side Configuration

To receive notify messages in the client, place a widget on a page inside a [data view](/refguide/data-view/). The widget listens for notify messages from the server and executes the configured client action when a message is received.

#### React-Compatible Widget

1. Place the new widget on a page within a [data view](/refguide/data-view/) where the context matches the parameter object.
2. Configure **Action list**. For each entry:
    * **Action name** matches the notify message name sent from the server.
    * **Action** defines the client action to run when the message is received. The new widget can run any configured client action. For example, you can run a microflow to retrieve committed data and refresh the page.

#### Legacy Widget

1. Place the legacy widget on a page within a [data view](/refguide/data-view/) where the context matches the parameter object.
2. Configure **Action list**. For each entry:
    * **Action name** matches the notify message name sent from the server.
    * Select whether a nanoflow or microflow is executed when the message is received.

### Fetching Updated Data Example

You can use a microflow to retrieve data changed by other users, as long as the data is committed and the transaction is complete.

In this example, the `$Message` variable contains the object in session state. Use the `[id = $Message]` XPath query to retrieve the object from the database. The change action refreshes the client, which triggers an update on the client page:

{{< figure src="/attachments/appstore/platform-supported-content/services/pusher/RefreshMicroflowSample.png" alt="Sample refresh microflow that retrieves updated data for the current page" class="no-border" >}}

## Working Flow

This diagram shows how an object is updated through the **Notify** action:

{{< figure src="/attachments/appstore/platform-supported-content/services/pusher/SequenceDiagramUpdateObject.png" alt="Sequence diagram for updating an object through notify and listen" class="no-border" >}}

## Security

Notify messages are sent to any listener.

A message contains limited data (entity name, ID, changed date, and notifier username). Sending a notify message requires the private key stored on the server in the `NotifyListen.secret` constant. Do not share this secret. The listening widget uses the public `NotifyListen.key` to receive a signal and perform the action as the logged-in user.

An additional authentication request is made to the Mendix REST server through `<host>/rest/pusher/key` and `<host>/rest/pusher/auth`. Only after successful authentication can a user access the lists. The service only allows a logged-in user with the **NotifyListen.User** module role to listen when the user has entity access to the object used by the widget's data context.

## Strict CSP Compatibility

This service requires extra configuration to comply with a strict content security policy (CSP). The Pusher service uses an external service for its functionality. To make this service work, configure CSP headers to allow resources from that domain.
