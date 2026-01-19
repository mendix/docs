---
title: "Installing and Configuring Mendix Workstation"
linktitle: "Installation and Configuration"
url: /mendix-workstation/installation/
description: "Quick start and advanced guide for installing and configuring Mendix Workstation, including setting up workspaces, stations, and devices for initial testing from the Workstation Management."
weight: 20
---

## Introduction

This document outlines the installation and basic configuration of Mendix Workstation. It provides a quick-start guide for initial setup, followed by detailed instructions on advanced configurations for workspaces and stations.

## Quick Start Guide 

This guide helps you configure and test a minimum working version of Mendix Workstation. By following these steps, you will complete the following:

* Create a basic configuration within Workstation Management.
* Set up a pair of virtual TCP/IP Client and Server devices for testing.
* Install the Workstation Client on your computer.
* Verify the connection between your virtual devices directly from Workstation Management.

### Creating a Workspace and Station

A *station* represents a workstation on the shop floor. It can connect to one or more apps or devices. A *workspace* is a grouping of one or more stations. For example, a workspace may group together all the stations which belong to the same factory or factory line.

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

### Downloading and Running the Workstation Client

The Workstation Client is a connector between the devices and your local PC. You can download and enable the client by performing the following steps:

1. Open the station that you created, and click **Register Computer**.

    {{< figure src="/attachments/workstation/wks-install5.png" class="no-border" >}}

2. In the **Computer Registration** dialog, click **Download**.

    This will open the Mendix Marketplace page for the [Workstation Client Windows Installer](https://marketplace.mendix.com/link/component/247448). Alternatively, you can find the component on the Mendix Marketplace by searching for "Workstation Client". You can also find the [portable](https://marketplace.mendix.com/link/component/247456) and [Linux](https://marketplace.mendix.com/link/component/247459) version by using the search, or navigate to them through the above links. 

    {{< figure src="/attachments/workstation/wks-install6.png" class="no-border" >}}

3. Perform one of the following actions:

    * For Windows:

        * If you have administrator rights for your computer, click **Download** and run the Workstation Client installer in the form of an NSIS installer package. If you get a prompt from Windows User Account Control, click **Yes** to allow Workstation Client to be installed; for a silent installation, you can also run the installer as an administrator with the `/S` argument, that is, `MendixWorkstationX.Y.Z.exe /S`. The default installation folder is *C:\Program Files\Mendix Workstation*. The app data folder can be found at *C:\ProgramData\Mendix Workstation*. The client runs automatically after the installation is completed.
        * If you do not have administrator rights for your computer, download the [Workstation Client Portable](https://marketplace.mendix.com/link/component/247456) instead. As a best practice, put the portable client in  a new folder (for example, in your Documents folder), and then click the .exe file to run the client.
    
    * For Linux:
        * Download the [Linux](https://marketplace.mendix.com/link/component/247459) version of the Client
        * Run the following command to install: `sudo apt install ./MendixWorkstation_X.X.X.X_arm64.deb` (replace *X.X.X.X* with the actual version and build number of the downloaded .deb package)
        * Install card reader dependencies: `sudo apt install pcscd libcap2-bin`
        * Enable card reader dependencies: `sudo systemctl enable pcscd --now`
        * Start the application from the applications menu > **Accessories > Mendix Workstation**
        * Bluetooth support requires starting the application with `CAP_NET_RAW` privilege (for raw network packet access): `sudo capsh --user=$(whoami) --iab="^cap_net_raw" -- -c "'/opt/Mendix Workstation/Mendix Workstation'"`
    
### Registering your Computer

With the Workstation Client running on your computer, you must now register your computer in the Workstation Management.

1. Go to [Mendix Workstation Management](https://workstation.home.mendix.com/) and navigate to the **Station Overview** in the workspace which contains the station that you want to register to your computer. 
2. Click the menu associated with your station in the overview, and then select **Register computer**.
3. Click **Copy** to copy the registration token to your clipboard.

    {{< figure src="/attachments/workstation/wks-install7.png" class="no-border" >}}

4. Open the Workstation Client and paste the copied registration token into the **Enter your registration token** field.
5. Click **Register computer**.

    {{< figure src="/attachments/workstation/wks-install8.png" class="no-border" >}}

6. In Workstation Management, in the **Computer Registration** dialog, click **Done**.

    {{< figure src="/attachments/workstation/wks-install9.png" class="no-border" >}}

The **Stations** page now shows your station's status as **Computer Registered**.

    {{< figure src="/attachments/workstation/wks-install10.png" class="no-border" >}}

### Configuring and Testing Virtual Devices

After registering your computer, test your connectivity by creating a pair of virtual devices: a TCP/IP server that will emulate a device, and a TCP/IP client that will connect to the emulated device.

#### Creating a TCP/IP Server

1. Go to [Mendix Workstation Management](https://workstation.home.mendix.com/).
2. In the **Station** page, click **Add Device**.
3. Select **TCP/IP Server** as the **Device Type**, and then click **Next**.
4. In the **Device Name** field, enter **Test Server**
5. In the **Device Class** field, select or create a class (for example, *Virtual*), and then click **Next**.
6. In the **Port** field, leave the default value of **1705**, and click **Next**.
7. In the **Messages** dialog, leave all values as default, and click **Add Device**.

    {{< figure src="/attachments/workstation/wks-install12.png" class="no-border" >}}

The emulated device, a local TCP/IP server listening on port 1705, is added to the **Devices** list in the **Station** page.

    {{< figure src="/attachments/workstation/wks-install13.png" class="no-border" >}}

#### Creating a TCP/IP Client

1. Go to [Mendix Workstation Management](https://workstation.home.mendix.com/).
2. In the **Station** page, click **Add Device**.
3. Select **TCP/IP Client** as the **Device Type**, and then click **Next**.
4. In the **Device Name** field, enter **Test Client**, and then click **Next**.
5. In the **Device Class** field, select or create a class (for example, *Virtual*), and then click **Next**.
6. In the **Host** and **Port** fields, leave the default value of **localhost** and **1705**, and click **Next**.

    {{< figure src="/attachments/workstation/wks-install14.png" class="no-border" >}}

7. In the **Messages** dialog, leave all values as default, and click **Add Device**.

The device, which will be used to connect to the TCP/IP server running in Workstation Client, is added to the **Devices** list in the **Station** page.

#### Testing the Devices

After configuring the server and client pair, test their connectivity by performing the following steps:

1. In the left navigation menu of the current workspace, click **Settings**, and ensure that the **Enable Local Device Testing** toggle is set to **On**.
2. In the left navigation menu, click **Test Your Station**.

    The page refreshes and displays a list of all your devices. This includes detected smart card readers available on your computer if you did not disable detecting card readers as described [in step 6](/mendix-workstation/installation/#creating-a-workspace-and-station).

3. In your web browser, duplicate the tab where you have opened the **Test Your Station** page.
4. Arrange the two opened tabs so that you can view the two **Test Your Station** pages side by side.
5. In the left tab, click on the client device (**Test Client**).
6. In the right tab, click on the server device (**Test Server**).
7. In the left tab, on the **Test Client** device, enter a test message, and then click **Send Message**. In the other tab, on the **Test Server**, the sent message appears in the **Last message received** field.
8. In the same way, send a message from the **Test Server** to the **Test Client** device.

{{% alert color="info" %}}
Different device types have different requirements for the message syntax. For more information, see [Message Syntax for File, Smart Card, and Bluetooth Devices](/mendix-workstation/device-syntax/).
{{% /alert %}}

### Quitting the Workstation Client

The **Close** button closes the Client window but does not terminate the application; it continues to run in the background. To completely quit the Client, right-click its icon in the Windows systray and select **Quit**. This action is only available if [Developer Mode](#developer-mode) is enabled. Alternatively, the Workstation Client process can always be stopped via Windows Task Manager.

## Advanced Configurations

### Workspace Apps

It is crucial to configure the Mendix apps that are allowed to connect to the Workstation Client via the Workstation Connector. To do so, apps are managed on a workspace level and can be enabled or disabled for all stations in workspace, by station station groups, or individually per station.

### Workspace Settings

Navigate to the **Settings** page in a workspace to configure settings that are applied to all stations in that workspace.

#### Log Settings

The Workstation Client always stores logs to the file system it is installed on (c.f. [Troubleshooting - Workstation Client](/mendix-workstation/troubleshooting/#workstation-client)). No logs are send to the Workstation Management. However, you can configure the log level and retention policy of all the Workstation Clients that are registered to stations in the workspace.

##### Log Level

Configure the log level of the logs stored by the Workstation Client(s).

* Info (default) - Logs normal operation and key application events. For example, the time when the Client was launched or terminated.
* Warn - Info logs and potential issues or suboptimal conditions. For example, if a request to refresh the Client's configuration timed out.
* Error - Warning logs and visible problem, something is not working as expected. For example, if a port to connect to a device is already in use.
* Debug - Error logs and detailed internal state for developer diagnostics. For example, requests to the Workstation Management, communication with devices.

#### Retention Policy

Verbosity and thus log file size increases with each log level. To constrain this, the logs are limited to 10 MB in size and stored for 7 days by default. 

Modify these settings to the needs of your logging policy, especially if you require to keep debug level logs in production for retrospective troubleshooting.

#### Local Device Testing

By default, the Workstation Management is pre-configured as an allowed app to connect to the Workstation Client on the **Test your Station** page in a workspace. To disable this, navigate to the tab "Local Device Testing" on the **Settings** page and toggle it off. 

### Workspace Team and Collaboration {#collaboration}

{{% alert color="info" %}}
Collaborating with other users in a workspace requires a Workstation license.
{{% /alert %}}

Invite and manage members of a Workspace on the Team page. Only users who have signed into Workstation Management can be invited via email. One of the following roles can be assigned:

* Owner - The owner has full rights to manage the workspace. They can perform the following tasks:

    * Reading and editing configurations
    * Managing the team
    * Registering computers
    * Managing workspace settings
    * Deleting a workspace or transfering ownership to a new owner
    
        By default, the user who created a workspace is assigned the owner role. Contact Mendix Support if a Workspace owner has left the company to transfer the ownership. 
    
    * Exporting and importing stations (single and in bulk)
    * Linking imported stations to existing workspace apps
    * Creating apps during station import.

* Workspace admin - The workspace admin can manage the workspace in the same way as the owner, but they cannot delete the workspace or change its ownership.
* Station admin - Station admins can perform the following tasks:

    * Viewing and editing station configurations
    * Registering computers to stations
    * Exporting and importing stations (single and in bulk)
    * Linking imported stations to existing workspace apps. 

* Computer admin - Computer admins can perform the following tasks:

    * Viewing configurations without editing them
    * Registering computers to stations
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

#### Device Settings

##### Card Readers

Card reader devices cannot be configured as separate devices in the **Devices** overview of a **Station** page. Instead, they are automatically detected by the Workstation Client and added to the device list of the Client. 

Auto detecting card readers is enabled by default. This setting can be configured on a **Station** page by toggling **Detect Card Readers**. 

Refer to [Message Syntax - Card Readers](/mendix-workstation/device-syntax/#card-readers) for a more in-depth explaination how to communicate with card readers.

##### File Device

This section explains the configuration of a file device. Refer to [Message Syntax - File Device](/mendix-workstation/device-syntax/#file-device) for a more in-depth explaination how to communicate with file devices.

###### Allowed Folder Configuration

The *Allowed Folder* feature supports flexible path configuration through environment variables, providing cross-platform compatibility for both Windows and Unix-based systems. This functionality allows administrators to define the allowed folder where the Workstation Client can perform actions. 

###### Environment Variable Support

The system accepts environment variables in the allowed folder configuration within the Workstation Management interface. Both Windows and Unix syntax formats are supported on all platforms, meaning you can use Windows-style environment variables on Unix systems and vice versa.

###### Supported Path Formats

Windows and Unix-style paths can be used independently of the operating system the Workstation Client is running on. The following examples demonstrate the various syntax options available:

###### Basic Examples

* **Windows-style with backslash**: `%AppData%\test`
* **Windows-style with forward slash**: `%AppData%/test`
* **Unix-style with backslash**: `$EnvVar\test`
* **Unix-style with forward slash**: `$EnvVar/test`

###### Allowed Actions

The administrator can choose to allow either one or a combination of the following permissions: subscribe to change events, read files, and write files.

##### Bluetooth Devices

Simply add Bluetooth LE (BLE) devices that use the ATT protocol by entering the exact device name as displayed in your OS' device manager 

Refer to [Message Syntax - Bluetooth](/mendix-workstation/device-syntax/#bluetooth) for a more in-depth explaination how to communicate with bluetooth devices.
