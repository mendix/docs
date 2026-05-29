---
title: "Mendix Workstation Management"
linktitle: "Workstation Management"
url: /mendix-workstation/management/
description: "Describes how to set up and administer Mendix Workstation Management."
weight: 30
---

## Introduction

[Workstation Management](https://workstation.home.mendix.com/) is a Mendix Platform service which provides a centralized interface to configure and monitor all stations and devices across the organization. Whether managing a few stations or hundreds across multiple global sites, administrators can register computers, assign devices, group them into workspaces, and remotely troubleshoot connection issues.

This makes it easier to manage a large, diverse fleet of devices without the need for manual setup or on-site support.

### Users

Workstation Management is used by central IT and application support teams.

## Initial Configuration

To start using Mendix Workstation, you must first create a [workspace and a station](/mendix-workstation/glossary/), by performing the following steps:

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

### Workspace Apps

It is crucial to configure the Mendix apps that are allowed to connect to the Workstation Client via the Workstation Connector. To do so, apps are managed on a workspace level and can be enabled or disabled for all stations in workspace, by station station groups, or individually per station.

### Workspace Settings

Navigate to the **Settings** page in a workspace to configure settings that are applied to all stations in that workspace.

#### Log Settings

Log settings are available in Workstation Management at **Settings > Log Settings**.

The Workstation Client always stores logs to the file system it is installed on (c.f. [Troubleshooting - Workstation Client](/mendix-workstation/troubleshooting/#workstation-client)). No logs are send to the Workstation Management. However, you can configure the log level and retention policy of all the Workstation Clients that are registered to stations in the workspace.

##### Log Level

Configure the log level of the logs stored by the Workstation Client(s).

* Info (default) - Logs normal operation and key application events. For example, the time when the Client was launched or terminated.
* Warn - Info logs and potential issues or suboptimal conditions. For example, if a request to refresh the Client's configuration timed out.
* Error - Warning logs and visible problem, something is not working as expected. For example, if a port to connect to a device is already in use.
* Debug - Error logs and detailed internal state for developer diagnostics. For example, requests to the Workstation Management, communication with devices.

By default, the unregistered Workstation Client is set to the Debug log level. After the client is registered, the log level as configured in the Workspace settings is applied.

#### Retention Policy

Verbosity and thus log file size increases with each log level. To constrain this, the logs are limited to 10 MB in size and stored for 7 days by default. 

Modify these settings to the needs of your logging policy, especially if you require to keep debug level logs in production for retrospective troubleshooting.

#### Client's Auto-Refresh {#auto-refresh}

Auto-refresh settings are available in Workstation Management at **Settings > Client's Auto-Refresh**.

By default, the Workstation Client operates in auto-refresh mode. That is, any changes made to the configuration in Workstation Management are immediately reflected in the Client. 

To change this behavior, set the **Auto-Refresh Mode** toggle to **Off**. You can then force the configuration to refresh by clicking **Refresh on Computer** in Workstation Management, or by clicking **Refresh** in the Workstation Client.

The **Check Interval** setting is only available when the auto-refresh mode is enabled. It specifies how often a Workstation Client that is disconnected due to a web socket failure should automatically refresh its configuration by polling Workstation Management. By default, this happens every 60 minutes.

#### Local Device Testing

Local device testing settings are available in Workstation Management at **Settings > Local Device Testing**.

By default, the Workstation Management is pre-configured as an allowed app to connect to the Workstation Client on the **Test your Station** page in a workspace. To disable this setting, toggle it off. 

### Workspace Team and Collaboration {#collaboration}

{{% alert color="info" %}}
Collaborating with other users in a workspace requires a Workstation license.
{{% /alert %}}

Invite and manage members of a Workspace on the Team page. Only users who have signed into Workstation Management can be invited via email. One of the following roles can be assigned:

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

All members except for the Workspace owner can leave a workspace. 

### Advanced Station Settings

#### Station Developer Mode {#developer-mode}

Developer mode can be configured on a **Station** page by toggling **Enable Developer Mode**. 

*Developer Mode* is enabled by default for each station. This allows users of the Workstation Client to 

* quit the program from the start menu, 
* unlink the Workstation Client so that it can be registered to another station,
* gives access to debug level live logs displayed in the **Logs** pane of the Workstation Client even if the workspace's log level is set to a different level,
* give access to developer tools (available by pressing *Ctrl + Shift + I*). 

For production environments, it is recommended to disable *Developer Mode* to prevent Workstation operators from accidentally quitting or unlinking the Workstation Client.

## Device Types and Settings

### Card Readers

Card reader devices cannot be configured as separate devices in the **Devices** overview of a **Station** page. Instead, they are automatically detected by the Workstation Client and added to the device list of the Client. 

Auto detecting card readers is enabled by default. This setting can be configured on a **Station** page by toggling **Detect Card Readers**. 

Refer to [Message Syntax - Card Readers](/mendix-workstation/device-syntax/#card-readers) for a more in-depth explaination how to communicate with card readers.

### File Device

This section explains the configuration of a file device. Refer to [Message Syntax - File Device](/mendix-workstation/device-syntax/#file-device) for a more in-depth explaination how to communicate with file devices.

#### Allowed Folder Configuration

The *Allowed Folder* feature supports flexible path configuration through environment variables, providing cross-platform compatibility for both Windows and Unix-based systems. This functionality allows administrators to define the allowed folder where the Workstation Client can perform actions. 

#### Environment Variable Support

The system accepts environment variables in the allowed folder configuration within the Workstation Management interface. Both Windows and Unix syntax formats are supported on all platforms, meaning you can use Windows-style environment variables on Unix systems and vice versa.

#### Supported Path Formats

Windows and Unix-style paths can be used independently of the operating system the Workstation Client is running on. The following examples demonstrate the various syntax options available:

#### Basic Examples

* **Windows-style with backslash**: `%AppData%\test`
* **Windows-style with forward slash**: `%AppData%/test`
* **Unix-style with backslash**: `$EnvVar\test`
* **Unix-style with forward slash**: `$EnvVar/test`

#### Allowed Actions

The administrator can choose to allow either one or a combination of the following permissions: subscribe to change events, read files, and write files.

### Bluetooth Devices

Simply add Bluetooth LE (BLE) devices that use the ATT protocol by entering the exact device name as displayed in your OS' device manager 

Refer to [Message Syntax - Bluetooth](/mendix-workstation/device-syntax/#bluetooth) for a more in-depth explaination how to communicate with bluetooth devices.

## Device Syntax

To enable Mendix Workstation to communicate with your devices, you must ensure that the messages you send have the correct syntax. This syntax varies depending on the type of device. The following sections show the required syntax for file system, smart card, and Bluetooth devices.

### Bluetooth {#bluetooth}

This device type requires the following message and response:

#### Message

* `0#ServiceUUID#CharacteristicUUID` - Subscribe to characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `1#ServiceUUID#CharacteristicUUID` - Unsubscribe from characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `2#ServiceUUID#CharacteristicUUID` - Read characteristic `CharacteristicUUID` from service `ServiceUUID`.
* `3#ServiceUUID#CharacteristicUUID` - Write to characteristic `CharacteristicUUID` from service `ServiceUUID`.

#### Response

* `CharacteristicUUID#Response`

### File Device {#file-device}

This device type requires the following message and response:

#### Important Considerations

Before sending messages to the File Device, review the following points:

* Path handling - You can provide the paths either as absolute (for example, `/var/log/app.log` or `C:\Data\report.txt`), or as relative paths. Relative paths are always interpreted relative to the allowed folder configured in Workstation Management.
* Delimiter - The `#` character is used as a delimiter within messages. Paths and data may not contain the `#` character. 
* Case sensitivity - File and directory paths may be case-sensitive depending on the underlying operating system. For example, Linux paths are typically case-sensitive, while Windows paths are not.

#### Message

* `0#Path` - Initiate watching for changes in the specified `Path`. If `Path` is a directory, the device will watch for changes within that directory (creation, deletion, renaming, or modification of files/subdirectories). If `Path` is a file, the device will watch for changes to that specific file (modification, deletion, or renaming).
* `1#Path` - Stop watching for changes in the specified `Path`.
* `2#File path` - Read the content of the file at the specified `File Path`.
* `3#File path#Data#flag` - Write `Data` to the file at the specified `File Path`. The `flag` can be `w` for overwrite, `a` for append If left blank, the value defaults to `w`.

#### Response

* `R#Path` - File or directory at the specified `Path` was renamed, created, or deleted.
* `C#Path` - File or directory at the specified `Path` was changed. This is triggered both when a file is modified and when the contents of a directory changes. 
* `D#Data` - `Data` from file read.
* `E#Error` - `Error` message from operating system.
* `S#{0,1,2,3}#directory` - The command `{0,1,2,3}` on `directory` was successful.

#### Example Test

The section below shows a sample test that you can run to verify the configuration.

1. Create a new Workspace in the Workstation Management.
2. Create a new Station.
3. Add a `File Device` with the following configuration to this Station:
    * **Device Name** - *Write files to test folder* 
    * **Allowed Folder** - For example, on a Windows computer you can use a path like `C:\MyTestFolder`
    * **Allow writing files** - **Yes**
    * Use the default values for everything else 
4. Register the Station to your computer (assuming the Workstation Client is installed there).
5. In your Workspace, navigate to **Test Your Station** and click **Test** by the configured file device.
6. Enter `3#test.txt#Hello from Mendix` in the **Send Message** field, and then press **Send Message**.

    The test should show a response like `S#3#C:\MyTestFolder\test.txt` to indicate that the text file *test.txt* was successfully written to *MyTestFolder*. 

7. Go to *C:\MyTestFolder* and verify that it contains the text file.
8. Open the test file and verify that it contains the text *Hello from Mendix*.

### Card Readers {#card-readers}

This device type requires the following message and response:

#### Message

Send instruction in hexadecimal as a string, for example, *FFCA000000* to read the smart card ID. The messages exchanged with the smart card are APDU messages. For more information, refer to the documentation of the APDU command for your smart card reader.

#### Response

* `0#` - Card connected
* `1#` - Card disconnected
* `2# Response` - Response from device as raw hexadecimal.
* `3# Error` - Error message from device.