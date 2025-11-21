---
title: "Building an App for Mendix Workstation Client"
linktitle: "Building an App"
url: /mendix-workstation/build-app/
description: "Describes how to install the Workstation Connector and build an app to work with Mendix Workstation Client."
weight: 30
---

## Introduction

After [installing the Workstation Client](/mendix-workstation/installation/), the next step is to build a Mendix application that can send data or commands to devices, or to extend an existing app accordingly. This guide explains how to install and configure the [Mendix Workstation Connector](https://marketplace.mendix.com/link/component/247460) from the Mendix Marketplace.

### How the Connection Works

The Workstation Connector must authenticate with the Workstation Client, ensuring the Client trusts the application using the Connector and establishes a connection. To accomplish this, the Workstation Connector generates a key pair consisting of a private key and a public key. The public key is then configured in the corresponding app in Workstation Management. The Workstation Client configuration must be current to ensure the public key can be verified.

The Workstation Connector establishes a connection with devices through the Workstation Client when needed. The connection is closed when it is no longer required.

When a browser or tab instance attempts to connect to a device, all previously connected browser or tab instances are automatically disconnected from the device.

The Workstation Connector connects with the Workstation Client using a local WebSocket on port *8094*. Communication with each configured device uses a separate WebSocket on port *8095* for the first device, *8096* for the second, and so on, meaning the port range used is *8094* to *8094+n*, where *n* is the number of devices configured. Ensure that the Runtime or Admin port of your local development server in Studio Pro (**App Settings** > **Configurations** > **Server**) is not configured to use a port greater than or equal to *8094* to avoid conflicting ports.  

## Prerequisites

* Mendix Workstation Client 3.0.0 or newer
* Mendix Studio Pro 9.24.11 or newer

## Installing and Configuring the Workstation Connector

To install and configure the Workstation Connector, perform the following steps:

1. Open an existing app to extend with Workstation functionality in Mendix Studio Pro, or create a new app.
2. Import the [Mendix Workstation Connector](https://marketplace.mendix.com/link/component/247460) from the Mendix Marketplace.
3. Configure the station in Workstation Management by performing the following steps:

    1. Navigate to the **Workspaces** page in [Workstation Management](https://workstation.home.mendix.com/).
    2. Click **Create Workspace**, or select an existing workspace from the overview.
    3. Click **Create Station**.
    4. Enter a name for the station and optionally select or create a group to categorize it, such as *Assembly*.
    5. Add devices in the **Devices** section.
    6. Click **Register Computer** to register your computer.
    7. Click **Download** to navigate to the Workstation Client listing in the Marketplace, download the Client installer for Windows, install it, and launch it.
    8. Copy the registration token and paste it into the [Workstation Client](/mendix-workstation/installation/) registration field.

4. Configure your app as an allowed app by performing the following steps:

    1. In your app, go to [App Security](https://docs.mendix.com/refguide/app-security/#user-roles) and assign the module role **StationConnector.Administrator** to the Administrator user role.
    2. In your app, add the page **StationConnector_Security** to your navigation or link to it from an *Open page* button. Alternatively, place the snippet **SNIPPET_StationAdminPage** on a page available to the Administrator user role.
    3. Run the app.
    4. Log in as an Administrator, navigate to the page you added in step 2, and copy the displayed public key.
    5. Return to [Workstation Management](https://workstation.home.mendix.com/) and navigate to the workspace you created above.
    6. Navigate to the **Apps** page in your workspace and click **Create App**.
    7. Enter your app URL (such as `http://localhost:8080`, the default when running an app locally) and paste the copied public key into the **Public Key** field.
    8. Perform one of the following actions:
        * To enable the app for all stations, select **Enable in all stations**.
        * To enable the app for a specific station, navigate to **Stations** and select your station. The created app appears under the **Apps** section. Enable the application for this station only by toggling it on.
    9. Refresh the Workstation Client.
    10. (Optional) To recreate the key pair, also assign the module role **StationConnector.SecurityAdministrator** to your Administrator role. This action adds a **Regenerate KeyPair** button to the **StationConnector_Security** page. Use caution when regenerating keys in production environments, as this requires reconfiguring the app in Workstation Management and refreshing all Workstation Clients.

## Managing Apps

Apps you create appear on the **Apps** page, accessible through the left navigation menu in your workspace. To enable or disable an app for all stations or specific station groups, click the three-dot icon in the right column of the app list, then click **Manage App**.

## Managing Users

You can invite other Workstation Management users to your workspace to share configurations and collaborate. This feature requires a Workstation license.

To invite a user, click **Team** in the left navigation menu, then click **Invite Team Member**. Enter the user's email address and select a role. Available roles are described in the [installation guide](/mendix-workstation/installation/#workspace-team-and-collaboration).

To change a user's role or remove them from the workspace, click the three-dot icon in the right column of the user list. This action requires the Owner or Workspace Admin role.

## Implementing Custom Device Interaction Logic

Once you have configured Mendix Workstation Client, you can implement custom logic for interacting with devices. The following nanoflows and Java actions are essential for establishing connections, sending and receiving messages, and managing device interactions:

* **GetStation** – Retrieves information about the computer connected to the Client.
* **SendMessage** – Sends data or commands to a connected device. For more information about supported message syntax, see [Message Syntax for File, Smart Card, and Bluetooth Devices](/mendix-workstation/device-syntax/).
* **SubscribeToMessages** – Subscribes to device messages and triggers a nanoflow when messages are received.
* **SubscribeToErrors** – Subscribes to device connection errors and triggers a nanoflow when errors occur.
* **Unsubscribe** – Ends a subscription to device messages or errors.
* **UnsubscribeByContext** – Ends all subscriptions related to a context object.
* **UnsubscribeByDevice** – Ends all subscriptions related to a specific device.
* **DisconnectDevice** – Unsubscribes and disconnects from a specific device.

These nanoflows and actions serve as the core building blocks for integrating devices into your Mendix applications and tailoring functionality to your specific requirements.

### Understanding the Domain Model

The domain model contains the following entities:

* **Station** – Contains the station name, computer name, workspace name, and client version (non-persistent entity).
* **Device** – Contains a list of devices associated with the station, including device names and properties required to establish connections (non-persistent entity).
* **AppKeyPair** – Stores the application's key pair (persistent entity). The public key must be configured in the corresponding app in Workstation Management. 

### Using the Nanoflows and Actions

The following section describes how to use the nanoflows and Java actions.

#### GetStation

Call `GetStation` to retrieve the configuration of the Client computer via the Workstation Client. `GetStation` can be called multiple times, but it queries the Workstation Client only on the first call. Subsequent calls return the current object loaded in the session. If the connection with the Workstation Client fails, `GetStation` returns an empty object.

#### SendMessage

Call `SendMessage` to send a message to a device. `SendMessage` provides an option to wait for the device's response within the current nanoflow.

#### SubscribeToMessages

Call `SubscribeToMessages` to trigger a nanoflow when a message is received from a device. `SubscribeToMessages` provides an option to specify a context object that will be passed to the callback nanoflow whenever a message is received.

The callback nanoflow must have the following parameters:

* `Device` (Object)
* `Message` (String)
* `Context Object` (same as the name used when subscribing)

#### SubscribeToErrors

Call `SubscribeToErrors` to trigger a nanoflow on device connection errors.

The callback nanoflow must have the following parameters:

* `Device` (Object)
* `ErrorMessage` (String)
* `ErrorCode` (Integer)
* `Context Object` (same as the name used when subscribing)

#### Unsubscribe

Call `Unsubscribe` to end a subscription.

#### UnsubscribeByContext

Call `UnsubscribeByContext` to end all subscriptions related to a context object.

## Error Logs

Log files are available for troubleshooting issues with Workstation Management, the Client, and the Connector. For more information about accessing logs, see [Troubleshooting Mendix Workstation Client](/mendix-workstation/troubleshooting/).
