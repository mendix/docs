---
title: "Mendix Workstation Management"
linktitle: "Workstation Management"
url: /mendix-workstation/management/
description: "Describes how to set up and administer Mendix Workstation Management."
weight: 30
---

## Introduction

[Workstation Management](https://workstation.home.mendix.com/) is a tool for overseeing and optimizing Mendix Workstation deployments across your organization. Tailored for central IT and application support teams, this Mendix Platform service offers a centralized interface to streamline the configuration, monitoring, and troubleshooting of all Workstation Clients and their connected devices.

This document provides an overview of every facet of Workstation Management, so that you can discover how to perform initial setup, manage user access and roles, configure various device types with precise control, and implement robust monitoring and logging strategies. By mastering these functionalities, you can ensure seamless operation, enhance efficiency, and provide reliable support for your Mendix Workstation ecosystem, regardless of its scale or geographical distribution.

### Basic Concepts

For more information about the terms used in this document, such as *station* or *device*, refer to the [Mendix Workstation glossary](/mendix-workstation/glossary/).

### Users

Workstation Management is used by central IT and application support teams.

## Initial Configuration

To start using Mendix Workstation, you must first create a workspace and a station by performing the following steps:

1. Go to [Mendix Workstation Management](https://workstation.home.mendix.com/) and sign in with your Mendix account.
2. In **Workspace Overview**, click **Create Workspace**.

    {{< figure src="/attachments/workstation/wks-install1.png" class="no-border" >}}

3. Enter a name for your new workspace, and then click **Create Workspace**.

    {{< figure src="/attachments/workstation/wks-install2.png" class="no-border" >}}

4. After the workspace is created, in the **Stations** page, click **Create a New Station**.

    {{< figure src="/attachments/workstation/wks-install3.png" class="no-border" >}}

5. Enter a name for the station, and then click **Create Station**.

    {{< figure src="/attachments/workstation/wks-install4.png" class="no-border" >}}

6. Optional: If you do not want Workstation Management to detect smart card readers, in **Station** view, set the **Detect Card Readers** toggle to **Off**.

    {{< figure src="/attachments/workstation/wks-install16.png" class="no-border" >}}

## Administering Mendix Workstation

### Stations

The **Stations** tab displays a comprehensive overview of all your configured stations. This page provides quick insights into the status of each station and offers various actions for creation, management, and bulk operations.

#### Station Status Indicators

The overview page displays the current status of each station, helping you quickly identify any issues or pending actions:

* **No computer registered** - The station has been created in Workstation Management, but no physical computer running the Workstation Client has been linked to it yet.
* **Computer registered** - A Workstation Client on a physical computer is successfully registered and actively linked to this station.
* **Client's config is out of sync** - The configuration defined in Workstation Management for this station has changed, but the Workstation Client on the registered computer has not yet received or applied these updates. This can happen if auto-refresh is disabled or if there's a temporary connectivity issue.
* **Unknown computer** - The Workstation Client on the registered computer is reporting an unrecognized identifier, or there's an issue with its registration.
Error while registering: An error occurred during the attempt to register a Workstation Client to this station. Further investigation (for example, checking client logs) may be required.

#### Creating a New Station

To create a new station, choose one of the following options, depending on your deployment scenario.

##### Creating a Station from Scratch

To create a station from scratch, perform the following steps:

1. Click **Create Station**.
2. Provide a unique **Station Name**. 

    The name is a mandatory identifier for your station.

3. Optional: Add a station group to organize your stations (for example, by location, department, or function).
4. Optional: Specify an **Auto-Accepted Computer Name**. 

    If provided, during a bulk registration process, any Workstation Client reporting this computer name are automatically mapped and registered to this specific station, streamlining large-scale deployments.

##### Creating a Station from Clipboard

If you have previously copied the configuration of an existing station (for example, from another workspace or for duplication purposes), you can use the **Create Station from Clipboard** option to paste and create a new station based on that data.

##### Create Station from File

This option allows you to import a station's configuration from a previously exported file. This is particularly useful for migrating or replicating single station configurations.

#### Exporting and Importing Stations

Workstation Management provides robust features for managing stations in bulk, facilitating migration, backup, and replication tasks.

* **Export Stations** - Export all stations in the current workspace, or select specific stations from the overview list to export only those you need.
* **Import Stations** - When importing stations from a file, you have fine-grained control over how duplicates are handled:

    * **Ignore** - If a station with the same identifier already exists, the imported station will be skipped.
    * **Duplicate** - A new station will be created, even if one with the same identifier already exists, resulting in a duplicate entry.
    * **Replace** - The existing station with the matching identifier will be completely overwritten by the imported station's data.
    * **Merge** - The imported station's data will be intelligently merged with the existing station's configuration, updating fields where there are differences.

The import process allows you to specify what information to include:

* **Include Apps** - Specify whether to include the associated Mendix applications configured for the imported stations.
* **Include Devices** - Specify whether to include the device configurations linked to the imported stations.

#### Bulk Registration Tokens

For large-scale deployments, administrators can generate bulk registration tokens to simplify the process of linking multiple Workstation Clients to stations without manual intervention for each client.

##### Generating a Token

Specify a valid time period for the token, after which it will automatically expire.
Upon generation, the system provides the registration command for the terminal, which can be used to register Workstation Clients.

##### Managing Tokens

You can revoke an active bulk registration token at any time, immediately invalidating it and preventing further registrations using that token.

### Station Detail Page

Once a station is created, clicking on the arrow in the **Stations Overview** page will take you to the **Station Detail** page. This page is your central hub for viewing and configuring all specific settings and associated devices for that individual station.

From here, you can perform the following tasks:

* Change the station name.
* Manually refresh configuration to the client, forcing the Workstation Client on the registered computer to immediately pull the latest settings from Workstation Management.
* Configure advanced settings like **Detect Card Readers** and **Station Developer Mode**.
* Manage and configure all devices associated with this station.

### Advanced Station Settings

#### Detect Card Readers

Card readers are handled uniquely within Workstation Management. They are not configured as separate devices in the Devices overview of a Station page. Instead, the Workstation Client automatically detects connected card readers.

Auto detecting card readers is enabled by default. You can toggle the **Detect Card Readers** setting on the **Station Detail Page** to **Off** if you do not want the Workstation Client to automatically detect smart card readers for this specific station.

#### Station Developer Mode {#developer-mode}

Developer mode can be configured on a **Station** page by toggling **Enable Developer Mode**. 

When Developer Mode is enabled, users of the Workstation Client have access to:

* Quit the program from the start menu.
* Unlink the Workstation Client, allowing it to be registered to another station.
* Debug level live logs displayed in the Logs pane of the Workstation Client, even if the workspace's log level is set to a different level.
* Developer tools (accessible by pressing *Ctrl + Shift + I*).

{{% alert color="info" %}}
For production environments, it is strongly recommended to disable Developer Mode.  This prevents Workstation operators from accidentally quitting or unlinking the Workstation Client and restricts access to debugging tools that are not needed in a live operational setting.
{{% /alert %}}

## Configuring Devices

This section details how to configure various device types for the current station. For each device type, you'll find instructions on how to set it up in the Management UI, along with the specific message syntax required for Mendix applications to communicate with it via the Workstation Client.

### Card Readers

Card reader devices cannot be configured as separate devices in the **Devices** overview of a **Station** page. Instead, they are automatically detected by the Workstation Client and added to the device list of the Client. 

Auto detecting card readers is enabled by default. This setting can be configured on a **Station** page by toggling **Detect Card Readers**. 

#### Message Syntax {#card-readers}

This device type requires the following message and response:

##### Message

Send instruction in hexadecimal as a string, for example, *FFCA000000* to read the smart card ID. The messages exchanged with the smart card are APDU messages. For more information, refer to the documentation of the APDU command for your smart card reader.

##### Response

* `0#` - Card connected
* `1#` - Card disconnected
* `2# Response` - Response from device as raw hexadecimal.
* `3# Error` - Error message from device.

### File Device

The File Device allows Mendix applications to interact with the local file system of the computer running the Workstation Client.

#### Configuration in Management UI

To add a File Device, perform the following steps:

1. Navigate to the **Devices** section on the **Station Detail** page.
2. Click **Add Device** and select **File Device**.
3. Provide a **Device Name** (for example, *Write files to test folder*).

#### Allowed Folder Configuration

The *Allowed Folder* feature supports flexible path configuration through environment variables, providing cross-platform compatibility for both Windows and Unix-based systems. This functionality allows administrators to define the allowed folder where the Workstation Client can perform actions. 

##### Environment Variable Support

The system accepts environment variables in the allowed folder configuration within the Workstation Management interface. Both Windows and Unix syntax formats are supported on all platforms, providing cross-platform compatibility.

##### Supported Path Formats

Windows and Unix-style paths can be used independently of the operating system the Workstation Client is running on. The following examples demonstrate the various syntax options available:

* Windows-style with backslash: `%AppData%\test`
* Windows-style with forward slash: `%AppData%/test`
* Unix-style with backslash: `$EnvVar\test`
* Unix-style with forward slash: `$EnvVar/test`

#### Allowed Actions

You can grant one or more of the following permissions for the File Device:

* Subscribe to change events - Allow the Workstation Client to monitor the configured folder for changes.
* Read files - Allow Mendix applications to read the content of files within the allowed folder.
* Write files - Allow Mendix applications to write content to files within the allowed folder.

### Message Syntax {#file-device}

Before sending messages to the File Device, review the following points:

* Path handling - You can provide the paths either as absolute (for example, `/var/log/app.log` or `C:\Data\report.txt`), or as relative paths. Relative paths are always interpreted relative to the allowed folder configured in Workstation Management.
* Delimiter - The `#` character is used as a delimiter within messages. Paths and data may not contain the `#` character. 
* Case sensitivity - File and directory paths may be case-sensitive depending on the underlying operating system. For example, Linux paths are typically case-sensitive, while Windows paths are not.

##### Message

* `0#Path` - Initiate watching for changes in the specified `Path`. If `Path` is a directory, the device will watch for changes within that directory (creation, deletion, renaming, or modification of files/subdirectories). If `Path` is a file, the device will watch for changes to that specific file (modification, deletion, or renaming).
* `1#Path` - Stop watching for changes in the specified `Path`.
* `2#File path` - Read the content of the file at the specified `File Path`.
* `3#File path#Data#flag` - Write `Data` to the file at the specified `File Path`. The `flag` can be `w` for overwrite, `a` for append If left blank, the value defaults to `w`.

##### Response

* `R#Path` - File or directory at the specified `Path` was renamed, created, or deleted.
* `C#Path` - File or directory at the specified `Path` was changed. This is triggered both when a file is modified and when the contents of a directory changes. 
* `D#Data` - `Data` from file read.
* `E#Error` - `Error` message from operating system.
* `S#{0,1,2,3}#directory` - The command `{0,1,2,3}` on `directory` was successful.

#### Example Test: Verifying File Device Configuration

Follow these steps to verify that your File Device configuration is working correctly:

1. Create a new Workspace in the Workstation Management.
2. Create a new Station.
3. Add a `File Device` with the following configuration to this Station:

    * **Device Name** - A meaningful name, for example, *Write files to test folder*.
    * **Allowed Folder** - For example, on a Windows computer you can use a path like `C:\MyTestFolder`. Ensure this folder exists on the computer where the Workstation Client will run.
    * **Allow writing files** - Select **Yes**.
    * Use the default values for everything else.

4. Register the Station to your computer (assuming the Workstation Client is installed there).
5. In your Workspace, navigate to **Test Your Station** and click **Test** by the configured file device.
6. Enter `3#test.txt#Hello from Mendix` in the **Send Message** field, and then press **Send Message**.

    The test should show a response like `S#3#C:\MyTestFolder\test.txt` to indicate that the text file *test.txt* was successfully written to *MyTestFolder*. 

7. Go to *C:\MyTestFolder* and verify that it contains the text file.
8. Open the test file and verify that it contains the text *Hello from Mendix*.

### Bluetooth Devices

Bluetooth Low Energy (BLE) devices using the ATT protocol can be integrated with Mendix Workstation.

#### Configuration in Management UI

To add a Bluetooth Device, perform the following steps:

1. Navigate to the **Devices** section on the **Station Detail** page.
2. Click Add Device and select Bluetooth Device.
3. Enter the exact device name as it is displayed in your operating system's device manager.

#### Message Syntax

This device type requires the following message and response:

##### Message

* `0#ServiceUUID#CharacteristicUUID` - Subscribe to characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `1#ServiceUUID#CharacteristicUUID` - Unsubscribe from characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `2#ServiceUUID#CharacteristicUUID` - Read characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `3#ServiceUUID#CharacteristicUUID` - Write to characteristic `CharacteristicUUID` from service `ServiceUUID`.

#### Response

* `CharacteristicUUID#Response`

## Apps

The **Apps** page allows you to manage your apps on a workspace level.

### Creating Apps

To create a new app for your workspace, perform the following steps:

1. Click **Create App**.
2. Specify the following properties:

    * App name
    * URL
    * Public Key
    * Enable in Station Groups
    * Enable in all stations

## Settings

Navigate to the **Settings** page in a workspace to configure settings that are applied to all stations in that workspace.

### Log Settings

Log settings are available in Workstation Management at **Settings > Log Settings**.

The Workstation Client always stores logs to the file system it is installed on (c.f. [Troubleshooting - Workstation Client](/mendix-workstation/troubleshooting/#workstation-client)). No logs are send to the Workstation Management. However, you can configure the log level and retention policy of all the Workstation Clients that are registered to stations in the workspace.

#### Log Level

Configure the log level of the logs stored by the Workstation Client(s).

* Info (default) - Logs normal operation and key application events. For example, the time when the Client was launched or terminated.
* Warn - Info logs and potential issues or suboptimal conditions. For example, if a request to refresh the Client's configuration timed out.
* Error - Warning logs and visible problem, something is not working as expected. For example, if a port to connect to a device is already in use.
* Debug - Error logs and detailed internal state for developer diagnostics. For example, requests to the Workstation Management, communication with devices.

By default, the unregistered Workstation Client is set to the **Debug** log level. After the client is registered, the log level as configured in the Workspace settings is applied.

### Retention Policy

Verbosity and thus log file size increases with each log level. To constrain this, the logs are limited to 10 MB in size and stored for 7 days by default. 

Modify these settings to the needs of your logging policy, especially if you require to keep debug level logs in production for retrospective troubleshooting.

### Client's Auto-Refresh {#auto-refresh}

Auto-refresh settings are available in Workstation Management at **Settings > Client's Auto-Refresh**.

By default, the Workstation Client operates in auto-refresh mode. That is, any changes made to the configuration in Workstation Management are immediately reflected in the Client. 

To change this behavior, set the **Auto-Refresh Mode** toggle to **Off**. You can then force the configuration to refresh by clicking **Refresh on Computer** in Workstation Management, or by clicking **Refresh** in the Workstation Client.

The **Check Interval** setting is only available when the auto-refresh mode is enabled. It specifies how often a Workstation Client that is disconnected due to a web socket failure should automatically refresh its configuration by polling Workstation Management. By default, this happens every 60 minutes.

### Local Device Testing

Local device testing settings are available in Workstation Management at **Settings > Local Device Testing**.

By default, the Workstation Management is pre-configured as an allowed app to connect to the Workstation Client on the **Test your Station** page in a workspace. To disable this setting, toggle it off. 

## Team {#collaboration}

{{% alert color="info" %}}
Collaborating with other users in a workspace requires a Workstation license.
{{% /alert %}}

On the **Team** page, you can invite and manage members of a workspace. Only users who have signed into Workstation Management can be invited via email. You can assign the following roles to your users:

* Owner - The owner has full rights to manage the workspace. They can perform the following tasks:

    * Reading and editing configurations
    * Managing the team
    * Registering and deregistering computers to and from stations
    * Refreshing computer configurations
    * Managing workspace settings
    * Deleting a workspace or transfering ownership to a new owner
    
        By default, the user who created a workspace is assigned the owner role. Contact Mendix Support if a Workspace owner has left the company to transfer the ownership. 
    
    * Viewing bulk registration tokens
    * Copying existing bulk registration tokens
    * Creating new bulk registration tokens
    * Modifying bulk registration tokens
    * Revoking bulk registration tokens
    * Exporting and importing stations (single and in bulk)
    * Linking imported stations to existing workspace apps
    * Creating apps during station import.

* Workspace admin - The workspace admin can manage the workspace in the same way as the owner, but they cannot delete the workspace or change its ownership.
* Station admin - Station admins can perform the following tasks:

    * Viewing and editing station configurations
    * Registering and deregistering computers to and from stations
    * Refreshing computer configurations
    * Viewing bulk registration tokens
    * Copying existing bulk registration tokens
    * Creating new bulk registration tokens
    * Modifying bulk registration tokens
    * Revoking bulk registration tokens
    * Exporting and importing stations (single and in bulk)
    * Linking imported stations to existing workspace apps. 

* Computer admin - Computer admins can perform the following tasks:

    * Viewing configurations without editing them
    * Registering and deregistering computers to and from stations
    * Refreshing computer configurations
    * Viewing bulk registration tokens
    * Copying existing bulk registration tokens
    * Exporting stations (single and in bulk).

* View only - This role can perform the following tasks:

    * Viewing configurations without editing them
    * Exporting stations (single and in bulk).

All members except for the workspace owner can leave a workspace.