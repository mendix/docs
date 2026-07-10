---
title: "Developing Workstation-Enabled Applications"
url: /mendix-workstation/build-app/
description: "Describes the key concepts and best practices to consider when building an app to work with Mendix Workstation."
weight: 25
---

## Introduction


## Getting Started with Custom Logic for Device Interaction

Now that you are ready to start using Mendix Workstation, you can implement your own custom logic for interacting with devices. The following nanoflows and actions serve as the core building blocks for integrating devices into your Mendix applications and tailoring the functionality to your specific requirements.

### Understanding the Domain Model

The domain model contains the following entities:

* **Station** - A non-persistent entity representing the Workstation Client configuration.
* **Device** - A non-persistent entity representing a connectable peripheral device. Includes the name, class and state (Available, Connected, or Error). Specialize this to maintain your device specific state.
* **AppKeyPair** - A persistent entity to store the app's key pair. The public key needs to be entered in the corresponding app in the Workstation Management. 

### Using the Nanoflows and Actions {#javascript-actions}

The following section provides more information about using the nanoflows and Java actions in your Mendix application.

#### SendDeviceMessage

Call `SendDeviceMessage` to send a message to a device. For more information about the supported message syntax, see [Configuring Devices](/mendix-workstation/management-devices/). This action has the following parameters:

* `device` 
* `message`

#### WaitForDeviceMessage 

Call `WaitForDeviceMessage` to wait for a message from the connected device for the duration of the specified timeout period. This action has the following parameters:

* `device` 
* `timeout`

#### WaitForObjectChange

Call `WaitForObjectChange` to wait for changes in the attributes of the specified object for the duration of the specified timeout period. This action has the following parameters:

* `objectToObserve`
* `attributes`
* `timeout`

#### GetCreateDevice

Call this nanoflow to create and configure a device, and define the actions that should happen on connection, disconnection, or messages from the device. This action has the following parameters:

* `name`
* `class` 
* `initialize`
* `createDevice` 
* `entity`
* `onConnect`
* `onMessage` 
* `onDisconnect`

#### ConnectDevice

Call this action to connect to a specific device.

#### DisconnectDevice

Call this action to disconnect from a specific device.

#### Initialize

This action sets up communication with the Workstation Client. It should be automatically called through the `initialize` parameter of `GetStation` or `GetCreateDevice`.

#### GetStation

Call `GetStation` to retrieve the current Workstation Client configuration and devices. This action creates and returns a station object with a linked device object per peripheral.

To interact with a specific device, it is better to use `GetCreateDevice` instead. `GetCreateDevice` has a more convenient API, allows specialization, and does not create station and device objects which may not be needed.

#### SubscribeToObjectChanges

Call `SubscribeToObjectChanges` to trigger a nanoflow when the specified object changes.  This action has the following parameters:

* `objectToObserve`
* `attributes`
* `callback`
* `applicationContext`

#### SubscribeToDeviceMessages

Call `SubscribeToDeviceMessages` to trigger a nanoflow when a message is received from a device. This action has the following parameters: 

* `device`
* `callback`
* `applicationContext`

#### SubscribeToDeviceErrors

Call `SubscribeToDeviceErrors` to trigger a nanoflow on device connection error. This action has the following parameters: 

* `device`
* `callback`
* `applicationContext`

#### Unsubscribe

Call `Unsubscribe` to end a subscription.

#### Private Nanoflows

`CreateStation`, `CommitStation`, `CreateDevice`, and `CommitDevice` are private nanoflows, required be compatible with [strict mode](/refguide/strict-mode/).

### Widgets {#widgets}

The following widgets allow you to specify when to execute an action:

* **On Load/Unload** - Execute the action when the widget is first rendered, or when it is removed (unloaded).
* **On Change** - Execute the action when the specified attribute changes.
* **On Equal** - Execute the action when an attribute is equal to the specified expression.
* **On True** - Execute the action when the specified expression is true.

## Error Logs

Logs for the Workstation Management, Client, and Connector are available in case of issues. For more information about accessing the logs, see [Troubleshooting Mendix Workstation](/mendix-workstation/troubleshooting/).
