---
title: "Building an App for Mendix Workstation Client"
linktitle: "Building an App"
url: /mendix-workstation/build-app/
description: "Describes how to install the Workstation Connector and build an app to work with Mendix Workstation Client."
weight: 30
---

## Introduction

The next step after [installing the Workstation Client](/mendix-workstation/installation/) is to build a Mendix application that sends data or commands to your devices, or extend an existing app accordingly. To do so, this guide explains how to download, install, and configure the [Mendix Workstation Connector](https://marketplace.mendix.com/link/component/247460) from the Mendix Marketplace.

### How the Connection Works

The Workstation Connector must authenticate itself to the Workstation Client so that the Client trusts the app using the Connector and establishes a connection. To achieve this, the Workstation Connector must generate a key pair with a private and a public key. The public key must be configured in the corresponding app in Workstation Management. The Workstation Client configuration must be up-to-date so that the public key can be verified.

The Workstation Connector establishes a connection with devices through the Workstation Client when needed. The connection is closed when it is no longer required.

When a client browser or tab instance tries to connect to a device, any previously connected browser or tab instances are disconnected from the device.

The Workstation Connector connects with the Workstation Client using a local websocket on port 8094. Communication with each configured device uses another websocket on port *8095* for the first device, *8096* for the second, and so on, so that the range of ports used is *8094* to *8094+n*, where *n* is the number of devices you have. Make sure that the Runtime or Admin port of your local development server in Studio Pro (**App Settings** > **Configurations** > **Server**) is not configured on a port greater than or equal to *8094*.  

## Prerequisites

* Mendix Workstation Client 3.0.0 or newer
* Mendix Studio Pro 9.24.11 or newer

## Installing and Configuring the Workstation Connector

To install and configure the Workstation Connector, perform the following steps:

1. Open an existing app you want to extend with Workstation features in Mendix Studio Pro or create a new app using a blank starter template.
2. Download the [Mendix Workstation Connector](https://marketplace.mendix.com/link/component/247460).
3. Configure the station in Workstation Management by performing the following steps:

    1. Navigate to the **Workspaces** page in [Workstation Management](https://workstation.home.mendix.com/) (default home page).
    2. Click **Create Workspace** or click an existing workspace in the overview.
    4. Click **Create Station**.
    5. Give the station an identifying name and optionally select or create a group to categorize it, such as *Assembly*.
    6. Add your devices in the **Devices** section.
    7. Register your computer by clicking **Register Computer**.
    8. Click **Download** to navigate to the Workstation Client listing in the Marketplace, download the Client installer for Windows, install it, and launch it.
    9. Copy and paste the registration token into the [Workstation Client](/mendix-workstation/installation/) registration field.

4. Configure your app as an allowed app by performing the following steps:

    1. In your app, go to [App Security](https://docs.mendix.com/refguide/app-security/#user-roles) and assign the module role **StationConnector.Administrator** to the Administrator user role.
    2. In your app, add the page **StationConnector_Security** to your navigation or link to it from an *Open page* button. Alternatively, place the snippet **SNIPPET_StationAdminPage** on a page available to the Administrator user role.
    3. Run the app.
    4. Log in as an Administrator, navigate to the page you added in step 2, and copy the displayed public key.
    6. Go back to [Workstation Management](https://workstation.home.mendix.com/) and navigate to the workspace you created in step 3.2.
    7. Go to the **Apps** page in your workspace and click **Create App**.
    8. Enter your app's URL (for example, `http://localhost:8080`, which is the default when running an app locally) and paste the copied public key into the **Public Key** field.
    9. Perform one of the following actions:
        * To enable the app for all stations, select **Enable in all stations**.
        * To enable it for a specific station, go to **Stations** and navigate to your station. You will find the created app under the **Apps** section. Here, you can enable the application for only this station by toggling it on.
    10. Refresh the Workstation Client.
    11. Optional: To recreate the key pair, additionally assign the module role **StationConnector.SecurityAdministrator** to your Administrator role. This adds a **Regenerate KeyPair** button to the **StationConnector_Security** page. Be careful when using this button in a production scenario to avoid the need to reconfigure the app in Workstation Management and refresh all Workstation Clients.  

## Managing Apps

The app that you created in the previous section is available on the **Apps** page, which you can access through the left navigation menu in your workspace. To enable or disable the app for all your stations or groups of stations, click the icon in the right column of the app list, and then click **Manage App**.

## Managing Users

Invite other Workstation Management users to your workspace to share your configurations and collaborate with them (requires a Workstation license). To do so, click **Team** in the left navigation menu, and then click **Invite Team Member**. Enter the email of the Workstation Management user and select a role. You can grant your users one of the following predefined roles as described [here](/mendix-workstation/installation/#workspace-team-and-collaboration).

To change a user's role or remove them from the workspace, click the three-dot icon in the right column of the user list (prerequisite: Owner or Workspace admin role).

## Getting Started with Custom Logic for Device Interaction

Now that you are ready to start using the Mendix Workstation Client, you can implement your own custom logic for interacting with devices. The following nanoflows and Java actions are essential for establishing connections, sending or receiving messages, and managing device interactions:

* **GetStation** - Retrieves the computer information connected to the Client.
* **SendMessage** - Sends data or commands to the connected device. For more information about the supported message syntax, see [Message Syntax for File, Smart Card, and Bluetooth Devices](/mendix-workstation/device-syntax/).
* **SubscribeToMessages** - Subscribes a nanoflow to be called when the device sends a message.
* **SubscribeToErrors** - Subscribes a nanoflow to be called on device connection errors.
* **Unsubscribe** - Ends the subscription to device messages or errors.
* **UnsubscribeByContext** - Ends all subscriptions related to a context object.
* **UnsubscribeByDevice** - Ends all subscriptions related to a specific device.
* **DisconnectDevice** - Unsubscribes and completely disconnects from a specific device.

These nanoflows and actions serve as the core building blocks for integrating devices into your Mendix applications and tailoring the functionality to your specific requirements.

### Understanding the Domain Model

The domain model contains the following entities:

* **Station** - Includes the station name, computer name, workspace name, and client version (non-persistent entities).
* **Device** - A list of devices associated with the station; includes device names and properties required to establish a connection (non-persistent entities).
* **AppKeyPair** - A persistent entity to store the app's key pair. The public key needs to be entered in the corresponding app in Workstation Management. 

### Using the Nanoflows and Actions

The following section provides more information about using the nanoflows and Java actions in your Mendix application.

#### GetStation

Call `GetStation` to retrieve the configuration of the Client computer via the Workstation Client. `GetStation` can be used multiple times, but it queries the Workstation Client only the first time. Subsequent calls return the current object loaded in the session. If the connection with the Workstation Client does not work, `GetStation` returns an empty object.

#### SendMessage

Call `SendMessage` to send a message to a device. `SendMessage` includes the option to wait for the device's response in the current nanoflow.

#### SubscribeToMessages

Call `SubscribeToMessages` to trigger a nanoflow when a message is received from a device. `SubscribeToMessages` includes the option to configure a context object to be passed to the callback nanoflow each time a message is received.

The callback nanoflow must have the following parameters:

* `Device` (object)
* `Message` (String)
* `Context object` (same as the name used when subscribing)

#### SubscribeToErrors

Call `SubscribeToErrors` to trigger a nanoflow on device connection errors.

The callback nanoflow must have the following parameters:

* `Device` (object)
* `ErrorMessage` (String)
* `ErrorCode` (Integer)
* `Context object` (same as the name used when subscribing)

#### Unsubscribe

Call `Unsubscribe` to end a subscription.

#### UnsubscribeByContext

Call `UnsubscribeByContext` to end all subscriptions related to a context object.

## Error Logs

Logs for the Workstation Management, Client, and Connector are available in case of issues. For more information about accessing the logs, see [Troubleshooting Mendix Workstation Client](/mendix-workstation/troubleshooting/).
