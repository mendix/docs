---
title: "Develop an App with the Workstation Connector"
url: /mendix-workstation/develop-app/
description: "Describes the Workstation Connector domain model, nanoflows, and JavaScript actions that you use to build device interactions into your app."
weight: 25
---

## Introduction

To start using Mendix Workstation, implement your own custom logic for interacting with devices. The following nanoflows and actions serve as the core building blocks for integrating devices into your Mendix applications and tailoring the functionality to your specific requirements.

## Prerequisites

To help you develop your application, familiarize yourself with the [Mendix Studio Pro Guide](/refguide/), especially the following topics:

* [Studio Pro Overview](/refguide/studio-pro-overview/)
* [Data in the Domain Model](/refguide/domain-model/)
* [Pages](/refguide/pages/)
* [Microflows and Nanoflows](/refguide/microflows-and-nanoflows/)
* [Development Best Practices](/refguide/dev-best-practices/)

## Understanding the Domain Model

The Workstation domain model contains the following entities:

* **Station** - A non-persistent entity representing the Workstation Client configuration.
* **Device** - A non-persistent entity representing a connectable peripheral device. Includes the name, class and state (Available, Connected, or Error). Specialize this to maintain your device specific state.
* **AppKeyPair** - A persistent entity to store the app's key pair. The public key needs to be entered in the corresponding app in the Workstation Management. 

## Using the Nanoflows and Actions {#javascript-actions}

The following section provides more information about using the Workstation nanoflows and JavaScript actions in your Mendix application. Call only the documents in the **_USE_ME** folder of the **StationConnector** module. The documents outside that folder are implementation details.

### Callback Nanoflows {#callback-nanoflows}

Several actions take a nanoflow as a parameter and call it when something happens, for example the `onMessage` parameter of `GetCreateDevice`, or the `callback` parameter of `SubscribeToDeviceMessages`. The JavaScript actions pass the complete set of parameters documented for that callback, and your nanoflow decides which of them it uses:

* To use a parameter, add it to your nanoflow with exactly the name and type listed for the callback. For example, to read an incoming message, add a `Message` parameter of type String.
* Objects are passed under their entity name, without the module name. For example, a `MyModule.MyContext` object is passed as `MyContext`.
* A device is always passed as `Device` of type `StationConnector.Device`. If the device is a specialization, it is additionally passed under the specialization name and type. For example, a `MyModule.BarcodeScanner` device is passed as `Device` of type `StationConnector.Device` and as `BarcodeScanner` of type `MyModule.BarcodeScanner`. Declare a `BarcodeScanner` parameter of type `MyModule.BarcodeScanner` when you need the attributes of the specialization.

### SendDeviceRequest

Call `SendDeviceRequest` to send a message to a device and return the response or error. Requires Workstation Client 4.0 or later, and a device that supports requests. For more information about the supported message syntax, see [Device Message Syntax](/mendix-workstation/device-syntax/). This action has the following parameters:

* `device` (Object) - A `StationConnector.Device` object or a specialization of it to send the message to.
* `message` (String) - The message to send to the device.

### SendDeviceMessage

Call `SendDeviceMessage` to send a message to a device. For more information about the supported message syntax, see [Device Message Syntax](/mendix-workstation/device-syntax/). This action has the following parameters:

* `device` (Object) - A `StationConnector.Device` object or a specialization of it to send the message to.
* `message` (String) - The message to send to the device.

Responses are passed through message callbacks. For more information, see `GetCreateDevice` (`onMessage`), `WaitForDeviceMessage`, and `SubscribeToDeviceMessages`.

### WaitForDeviceMessage 

Call `WaitForDeviceMessage` to wait for a message from the connected device for the duration of the specified timeout period. This action has the following parameters:

* `device` (Object) - A `StationConnector.Device` object or a specialization of it to wait for a message from.
* `timeout` (Integer/Long) - Time in milliseconds before a timeout error is thrown. Leave empty for no timeout.

### WaitForObjectChange

Call `WaitForObjectChange` to wait for changes in the attributes of the specified object for the duration of the specified timeout period. This action has the following parameters:

* `objectToObserve` (Object) - The Mendix object to observe.
* `attributes` (String) - Optional, a comma-separated list of the attributes to observe.
* `timeout` (Integer/Long) - Time in milliseconds before a timeout error is thrown. Leave empty for no timeout.

### GetCreateDevice

Call `GetCreateDevice` to create and configure a device, and define the actions that should happen on connection, disconnection, or messages from the device. This action has the following parameters:

* `deviceName` (String) - The name to match a Workstation device on.
* `deviceClass` (String) - The class to match a Workstation device on. Provide a name and/or a class. If no device is matched within three seconds, the action returns empty.
* `initialize` (Nanoflow, optional) - The `Initialize` nanoflow, which sets up communication with the Workstation Client if that has not happened yet.
* `createDevice` (Nanoflow, optional) - A nanoflow that creates and returns a `StationConnector.Device` object or a specialization of it. If you do not provide a nanoflow, a `StationConnector.Device` with default values is created.
* `deviceEntity` (Entity) - The entity returned by the `createDevice` nanoflow, or `StationConnector.Device`.
* `onConnect` (Nanoflow, optional) - Called when the device connects, with the following parameters:
    * `Device` (Object)
* `onMessage` (Nanoflow, optional) - Called when the device sends a message, with the following parameters:
    * `Message` (String)
    * `Device` (Object)
* `onDisconnect` (Nanoflow, optional) - Called when the device disconnects, with the following parameters:
    * `Device` (Object)

The device object is created once and returned for every call that uses the same name and class.

### ConnectDevice

Call this action to connect to a specific device. This action has the following parameter:

* `device` (Object) - A `StationConnector.Device` object or a specialization of it to connect to.

### DisconnectDevice

Call this action to disconnect from a specific device. This action has the following parameter:

* `device` (Object) - A `StationConnector.Device` object or a specialization of it to disconnect from.

### Initialize

This nanoflow sets up communication with the Workstation Client. It should be automatically called through the `initialize` parameter of `GetStation` or `GetCreateDevice`.

### GetStation

Call the `GetStation` nanoflow to retrieve the current Workstation Client configuration and devices. This nanoflow creates and returns a station object with a linked device object per peripheral.

To interact with a specific device, it is better to use `GetCreateDevice` instead. `GetCreateDevice` has a more convenient API, allows specialization, and does not create station and device objects which may not be needed.

### SubscribeToObjectChanges

Call `SubscribeToObjectChanges` to trigger a nanoflow when the specified object changes.  This action has the following parameters:

* `objectToObserve` (Object) - The Mendix object to observe.
* `attributes` (String) - Optional, a comma-separated list of the attributes to observe.
* `callback` (Nanoflow, optional) - Called when the object changes, with the following parameters:
    * The object to observe, for example `MyEntity` of type `MyModule.MyEntity`.
    * The application context, if you provided one, for example `MyContext` of type `MyModule.MyContext`.
* `applicationContext` (Object) - Optional, an extra object to pass to the callback.

### SubscribeToDeviceMessages

Call `SubscribeToDeviceMessages` to trigger a nanoflow when a message is received from a device. This action has the following parameters: 

* `device` (Object) - A `StationConnector.Device` object or a specialization of it to subscribe to.
* `callback` (Nanoflow, optional) - Called when the device sends a message, with the following parameters:
    * `Message` (String)
    * `Device` (Object)
    * The application context, if you provided one, for example `MyContext` of type `MyModule.MyContext`.
* `applicationContext` (Object) - Optional, an extra object to pass to the callback.

### SubscribeToDeviceErrors

Call `SubscribeToDeviceErrors` to trigger a nanoflow on device connection error. This action has the following parameters: 

* `device` (Object) - A `StationConnector.Device` object or a specialization of it to subscribe to.
* `callback` (Nanoflow, optional) - Called when the device connection fails, with the following parameters:
    * `ErrorMessage` (String)
    * `ErrorCode` (Integer/Long)
    * `Device` (Object)
    * The application context, if you provided one, for example `MyContext` of type `MyModule.MyContext`.
* `applicationContext` (Object) - Optional, an extra object to pass to the callback.

### Unsubscribe

Call `Unsubscribe` to end a subscription. This action has the following parameter:

* `subscriptionId` (String) - The subscription ID returned by one of the subscribe actions.

### Deprecated Actions

The following actions are still available so that existing applications keep working, but Mendix does not recommend them for new applications. In Studio Pro, you find them in the **Deprecated** folder of the **StationConnector** module.

#### SendMessage

Use `SendDeviceMessage` and `WaitForDeviceMessage` instead. Those actions keep sending and waiting separate, so you only wait when you need to. When `waitForResponse` is true, `SendMessage` returns the next message that the device sends, which is not necessarily a reply to the message you sent. This action has the following parameters:

* `device` (Object) - A `StationConnector.Device` object or a specialization of it to send the message to.
* `message` (String) - The message to send to the device.
* `waitForResponse` (Boolean) - Blocks the nanoflow until a response is received from the device.
* `responseTimeout` (Integer/Long) - Time in milliseconds before a timeout error is thrown. Leave empty for no timeout.

#### SubscribeToMessages

Use `SubscribeToDeviceMessages`, `Unsubscribe`, and `ConnectDevice` instead. Those actions keep subscribing, connecting, and unsubscribing separate, so you decide when each one happens. `SubscribeToMessages` always connects the device as well, and ties unsubscribing to the `subscribeOnce` parameter. This action has the following parameters:

* `device` (Object) - A `StationConnector.Device` object or a specialization of it to subscribe to.
* `callback` (Nanoflow, optional) - Called when the device sends a message, with the following parameters:
    * `Message` (String)
    * `Device` (Object) - Unlike `SubscribeToDeviceMessages`, a specialization is not also passed under its own entity name.
    * The application context, if you provided one, for example `MyContext` of type `MyModule.MyContext`.
* `subscribeOnce` (Boolean) - If true, the callback is called once and then unsubscribed automatically.
* `applicationContext` (Object) - Optional, an extra object to pass to the callback.

#### SubscribeToErrors

Use `SubscribeToDeviceErrors`, `Unsubscribe`, and `ConnectDevice` instead. Those actions keep subscribing, connecting, and unsubscribing separate, so you decide when each one happens. `SubscribeToErrors` always connects the device as well, and ties unsubscribing to the `subscribeOnce` parameter. This action has the following parameters:

* `device` (Object) - A `StationConnector.Device` object or a specialization of it to subscribe to.
* `callback` (Nanoflow, optional) - Called when the device connection fails, with the following parameters:
    * `ErrorMessage` (String)
    * `ErrorCode` (Integer/Long)
    * `Device` (Object) - Unlike `SubscribeToDeviceErrors`, a specialization is not also passed under its own entity name.
    * The application context, if you provided one, for example `MyContext` of type `MyModule.MyContext`.
* `subscribeOnce` (Boolean) - If true, the callback is called once and then unsubscribed automatically.
* `applicationContext` (Object) - Optional, an extra object to pass to the callback.

#### UnsubscribeByDevice

Use `Unsubscribe` instead, and keep track of the subscription IDs that the subscribe actions return. Unsubscribing by device makes it easy to end more subscriptions than intended. This action has the following parameter:

* `device` (Object) - A `StationConnector.Device` object or a specialization of it. All subscriptions that match this device are ended.

#### UnsubscribeByContext

Use `Unsubscribe` instead, and keep track of the subscription IDs that the subscribe actions return. Unsubscribing by device or application context makes it easy to end more subscriptions than intended. This action has the following parameters:

* `device` (Object) - A `StationConnector.Device` object or a specialization of it that was used in the subscriptions.
* `applicationContext` (Object) - The application context used in the subscriptions. Provide a device and/or an application context. All matching subscriptions are ended.

### Private Nanoflows

`CreateStation`, `CommitStation`, `CreateDevice`, and `CommitDevice` are private nanoflows, required to be compatible with [strict mode](/refguide/strict-mode/).

## Widgets {#widgets}

The following widgets allow you to specify when to execute an action:

* **On Load/Unload** - Execute the action when the widget is first rendered, or when it is removed (unloaded).
* **On Change** - Execute the action when the specified attribute changes.
* **On Equal** - Execute the action when an attribute is equal to the specified expression.
* **On True** - Execute the action when the specified expression is true.

## Error Logs

Logs for the Workstation Management, Client, and Connector are available in case of issues. For more information about accessing the logs, see [Troubleshooting Mendix Workstation](/mendix-workstation/troubleshooting/).

## Deploying Your Application

There are multiple ways to deploy a Mendix application. You can deploy to your local machine for development and testing. You can deploy to Mendix Cloud, which is the default location for both free and licensed apps. You can also deploy to SAP Business Technology (SAP BTP) Platform, Kubernetes and Cloud Foundry-based platforms, Docker containers, Azure, or to a server you configured yourself. For more information, see [Deploying Apps](/deployment/).
