---
title: "Mendix Workstation Release Notes"
linktitle: Mendix Workstation
url: /releasenotes/workstation/
description: "Release notes for updates to the Mendix Workstation"
weight: 40
cascade:
    - numberless_headings: true
---

These release notes cover changes made to the [Mendix Workstation](/mendix-workstation/).

## 2.4.0

### Release date: August 20, 2025

{{% alert color="info" %}}
The third pre-release of the Mendix Workstation Client is available under the conditions of the Mendix Workstation Client Pre-Release Program. Support is available only to members of the program. To become a program member, contact Mendix Sales.
{{% /alert %}}

#### New Features

##### Workstation Management

* The **Team** page enables users to share workspaces and assign individual permissions, facilitating collaborative deployment of Workstation projects across multiple environments and sites at scale.
* Apps are managed at workspace level on the **Apps** page. Each app can be enabled or disabled individually - per station, for a group of stations, or for all stations within a workspace.
* App keys are generated from **Apps** and then copied into a workspace app, allowing a single instance of a deployed app to be used with multiple workspaces.
* The **Test Your Station** page can be activated or deactivated on the **Settings** page.
* Stations in a workspace can be grouped into a **Station Group**.
* The **Device class** can be configured for each device.
* The **File Device** interface is more secure and configurable:

    * You can configure which folder to read, write to, and watch for change.
    * Read, write, and watch permissions are configurable.
    * Environment variables are supported to define folder path.

##### Workstation Client 

* The Workstation Client is now available in a [Linux ARM 64 version](https://marketplace.mendix.com/link/component/245627) for running the client on single-board computers such as Raspberry Pi.

##### Workstation Connector

* The new **Unsubscribe by Device** nanoflow action removes all subscriptions on a device.
* The new **Disconnect Device** nanoflow action disconnects the device, unlike the unsubscribe actions which keep the connection open.

##### Other

* The **Get Started** app includes a step-by-step guide on how to get started with Mendix Workstation and build a device messenger.
* Workstation documentation now available on [Mendix Docs](/mendix-workstation/).

#### Improvements

##### Workstation Management 

* The main device connection parameters are displayed in the list of Devices in a connection string.
* The Workstation Client version is updated in the **Station** view.

##### Workstation Client

* Client configuration is maintained after upgrading the Workstation Client.
* Detected smart card readers are shown in the list of devices. Detection happens dynamically, without having to restart or refresh configuration.
* The main pages have been redesigned:

    * The workspace name is displayed in the main window of the Workstation Client.
    * The station and workspace names are clickable and redirect the user to the Workstation Management app.
    * The Workstation Client version is displayed.
    * Internal IDs are displayed for supportability.

* When using the **Unlink** function from the Workstation Client, the computer is unregistered in Workstation Management.
* Logs are visible in the Workstation Client.
* An End User License Agreement has been added to the Workstation Client installer.

##### Workstation Connector

* The workspace name is available in Workstation Connector, together with the station and client computer names.
* The Workstation Client version is available in Workstation Connector.

#### Fixes

##### Workstation Client

* We have fixed an issue where connecting, sending a message, and disconnecting quickly on a serial port would result in a *Port not open* error.

##### Workstation Connector

* We have fixed the security model so that private key of the app is only available to admin users.
* We have fixed an issue where a Device object was deleted when user was using the cancel button of a page on which Device was a parameter.
* Detected card reader devices are set to the class `CardReader`.
* Windows Hello for Business is no longer detected as a card reader.

#### Upgrade

To upgrade from a previous version, perform the following steps:

1. Install the new Workstation Client on each computer.
2. Update the Workstation Connector in your app.
3. For each app, perform the following steps:

    1. Run the app and generate the app key.
    2. Use the copied key to add the app to the **Apps** page of your workspace, and make it available for all stations.

4. Refresh the Workstation Client on each computer to get access to the apps that you defined.
5. Refresh the app client in the browser.

## 2.1.0

### Release date: June 13, 2025

{{% alert color="info" %}}
The second pre-release of the Mendix Workstation Client is available under the conditions of the Mendix Workstation Client Pre-Release Program. 
{{% /alert %}}

### New Features

#### Workstation Management

* You can now group stations per workspace.

#### Workstation Client 

* The Workstation Client is now digitally signed.
* We have provided a portable version of the Workstation Client for users without administrator rights.

#### Workstation Connector

* The Station Connector is now delivered as an open module, instead of a protected module.
* The Station Interface module is no longer required and has been removed from the release.
* The Device property has been removed from the data model, reducing the number of non-persistent entities by a factor of 10.
* Connecting to and disconnecting from a device is automatically managed by the Connector.
* Connector actions are exposed in the nanoflow toolbox under the Workstation category.
* You can now send and wait for response in a synchronous nanoflow.
* Device data can directly be managed in an App nanoflow using a subscription pattern.
* We have added support for concurrent connections to devices. When a client browser or tab instance tries to connect to a device, the previously connected instance is disconnected from the device.
* The Workstation Management URL constant is not required anymore in your app.

#### Starter App

* We have created a Starter App showing how to use the connector, exchange messages with devices, and measure the exchange performance.

#### Marketplace

* The Workstation Client, Connector, and Starter App are available in the Mendix Marketplace as a private Marketplace listing. They can be accessed by all members of the pre-release program on the **Shared with me** page, as well as through the Marketplace search in Studio Pro.

### Improvements

#### Workstation Management 

* We have improved the usability of the **Test your Station** page.
* **Test your Station** now includes a button to refresh the Workstation Client configuration in the Client.
* We have added validation to prevent the station name from including special characters.
* We have changed the navigation to a dynamic sidebar menu.
* The parsing of incoming messages can be configured without split and without delimiter.

#### Workstation Client

* The Mendix Workstation data folder is now in the following locations:

    * `%ProgramData%\Mendix Workstation` when installed for all users
    * `%AppData%\Mendix Workstation` for the portable version

#### Logging

* The Workstation Client generates complete logs when started with the command line argument `--log-level=debug` from Powershell or Command Prompt.
* The log files are organized by day and located in the *Logs* subfolder of the Mendix Workstation data folder.

#### Security

* We have simplified and improved app security by replacing the access key replaced with a private key used for communication with the Workstation Client signature through asymmetric security key pairs.

### Fixes

#### Workstation Client

* We have fixed a bug where the device connection was not available anymore after connection errors. The Client now always tries to reconnect.
* We have fixed a bug where smart card readers were not detected when no other devices were configured.
* We have fixed a bug where computer registration was not possible if client time was not synchronized with server time.

#### Breaking Changes

* The new connector is incompatible with the previous releases. Your Mendix app must be refactored to adopt the new pattern.
* Due to the introduction of the Workspace, existing station configurations are deleted. Stations must be reconfigured.
* The Workstation Management is no longer compatible with the Workstation Client version 2.0. Clients must be updated to version 2.1.

#### App Upgrade

To upgrade your app from a previous version, perform the following steps:

1. Remove the existing StationConnector module.
2. Remove the existing StationInterface module.
3. Import the StationConnector 2.1.0 .mpk from the Mendix Marketplace.
4. Refactor your app replacing calls to previous actions with new actions:

    1. Replace the connection action call with a **SubscribeToMessages** call:

        1. Configure the callback nanoflow.
        2. Set **Subscribe once** to **false**.
        3. Configure the **Application context** object. It will be conveyed to the nanoflow when receiving messages.
        4. Save the **SubscriptionId** in your object.
        5. Provide the following parameters for the **Message call back** nanoflow:

            * Application context object (the same as for subscribing)
            * Device
            * Message (String)

    2. Add a call to **SubscribeToError** to manage error logic:

        1. Save the **ErrorSubscriptionId** in your object.
        2. Provide the following parameters for the **Error call back nanoflow**:

            * Application context object (the same as for subscribing)
            * Device
            * ErrorMessage (String)
            * ErrorCode (Integer)

    3. Replace the Disconnect call with **Unsubscribe** (passing **SubscriptionId** and **ErrorSubscriptionId**) or **Unsubscribe by Context** (passing the **Application context** object).
    4. Replace Send Message by the new **Send Message**; to implement the same behavior as before, set **Wait for response** to **false**. Alternatively, rework your app logic to leverage the new **Wait for response** option.

5. In Workstation Management, perform the following steps:

    1. Add your app URL to the list of apps configured for your station.
    2. By the added app, click the menu icon, and then click **Generate Private Key**.
    3. Copy the generated key.
    4. Click **Use this private key**.

6. Refresh the Workstation Client.
7. Run the app.
8. Add the private key to your App Data using the **StationConnector_Security** page.
9. Refresh the page.

#### Known Bugs and Limitations

* The Workstation Connector currently allows user roles to read and write the **ManagementPrivateKey** entity, leading to the key being exposed through the XAS API. 
* The Workstation Client command line argument `log-level=debug` does not work for the portable Client if started from the terminal.

## 2.0.0

### Release date: March 14, 2025

{{% alert color="info" %}}
The first pre-release of the Mendix Workstation Client is available under the conditions of the Mendix Workstation Client Pre-Release Program. 
{{% /alert %}}

### New Features

* You can log in to Workstation Management with your Mendix account through Mendix Single Sign-On. 
* Stations can be managed by Mendix account. 
* Devices can be managed by station. There is no more global device management to be linked to stations. 
* You can enable and disable detection and connection with smart card readers (PC/SC specification) with a radio button. 
* You can download the Workstation Agent installer and Workstation Mendix Connector from Workstation Management.
* It is now possible to register a computer running Workstation Agent to a station by copying and pasting a registration token from Workstation Management.
* You can also unregister a computer from Workstation Management.
* Testing the connection with a local device is now available from within Workstation Management.
* You can restrict and secure communication between app and agent with an access key.

### Improvements

#### Workstation Management

* We have simplified the user journey of configuring devices and apps with prefilled values, validations, and tooltips. 
* Mendix Platform Design is now available.
* We have enabled connections with device connected to a client serial port (RS232).
* Comprehensive and error proof configuration of Serial Port connection properties is now available. 
* Comprehensive and error proof configuration of Serial Port message parsing is now available. 
* Messages coming from a serial port device can be parsed by time and size.
* Connection with devices connected on local Ethernet network (TCP/IP) is now available. 
* Comprehensive and error proof configuration of TCP/IP connection properties is now available. 
* Comprehensive and error proof configuration of TCP/IP message parsing is now available. 
* Connection with TCP/IP servers running on a client to emulate devices is now available.
* Comprehensive and error proof configuration of TCP/IP Server device properties (emulated device) is now available.
* Connection with smart card readers is now available.
* We have removed the old version of the PCSC Smart Card interface. Only the NFC version is used.

#### Workstation Agent

* We have simplified the user interface.
* Computer registration with registration token has replaced the embedded onboarding page.
* We have added a new installer for the agent.
* You can install the Workstation Agent for all users in `C:\Program Files`.
* The Workstation Agent data files are saved in `C:\ProgramData` to make it available for all users.
* There is now a proper clean-up of Workstation Agent data files when uninstalling the agent.
* We have added support for quiet installation and uninstallation calls by Windows command-line shell (NSIS specification).
* We have added support for multiple user sessions running the Workstation Agent on a single computer.
* Workstation Agent data files on client computers are deleted when the Workstation Agent is reset.

#### Workstation Connector

* The Connector is shipped as a protected add-on module.
* You can refresh the Workstation Agent programmatically from the Mendix Client app.
* You can refresh the station and device configuration loaded in the app client when the refresh happen in the Workstation Agent.

### Fixes

* We have fixed an issue where no message was received from serial port devices when no termination char has been configured.
* We have fixed issues that occurred when exchanging binary data with a serial port.

### Deprecations

* The **Connect**, **Disconnect** and **Send Message** buttons are removed from the client and replaced by **Local Device Testing** in Workstation Management.
* We have removed the option to launch the Workstation Agent on login and start in systray. The option will be restored in a future release.
* Support for Output Suffix Wait will be removed in future releases.

### Breaking Changes

* Stations and devices must be reconfigured manually in the new Workstation Management.
* The new Workstation Agent must be installed on the client computer.
* The Station Connector and Interface modules must be replaced with the new one.
* The Device Class attribute has been temporary removed from Workstation Management. The attribute contains the device type when used in the StationConnector module.

### App Upgrade

To upgrade your app from a previous version, perform the following steps:

1. Remove the existing StationConnector module.
2. Import the downloaded *StationConnector-2.0.0.mxmodule*.
3. Import the downloaded *StationInterface-2.0.0.mpk* replacing the existing StationInterface module.
4. In Workstation Management, perform the following steps:

    1. Add your app URL to the list of apps configured for your station.
    2. By the added app, click the menu icon, and then click **Show Access Key**.
    3. Copy the generated App Access Key.

5. Refresh the Workstation Agent.
6. Run the app.
7. In your App Data, enter the app access key.
8. Refresh the client.

### Known Bugs and Limitations

* Station configuration cannot be shared between users.
* App instances using the Connector can only be used by one user for their station configuration.
* The Mendix Workstation folder is emptied but not deleted when uninstalling the Workstation Agent.
* Smart card readers are not detected when no other devices are configured.
* The sidebar of the device testing page in Workstation Management cannot be scrolled on screens with a larger scaling factor. Zoom out to display and use the full page.
