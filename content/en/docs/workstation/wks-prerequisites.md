---
title: "Getting Started with Mendix Workstation"
linktitle: "Getting Started"
url: /mendix-workstation/prerequisites/
description: "Documents the requirements for Mendix Workstation, as well as a step-by-step walkthrough through a simple installation and configuration process."
weight: 10
---

## Introduction

Use this guide to help you get started with Mendix Workstation. Review the system, access, and network prerequisites, and then follow a step-by-step walkthrough to help you set up and test the connection.

## Prerequisites

Before you get started with Mendix Workstation, ensure that you fulfill the following prerequisites.

### System Requirements

* Operating System - Windows 10 or Windows 11 (64-bit);  Linux ARM64
* Memory - Minimum 4 GB RAM (8 GB recommended for optimal performance)
* Disk Space - 400 MB of free disk space for installation

### Access Requirements

* A Mendix account
* Access to Mendix Workstation Management for configuration

### Network Configuration

Before implementing Mendix Workstation, perform the following steps:

1. Ensure that the Workstation user can access the Mendix Cloud.
2. Open the required ports for communication (for example, TCP 443 for HTTPS).
3. Add the Workstation Client to the Allow list for any firewall or antivirus software, if applicable.

### Custom Certificates and Proxy Settings

The Workstation Client uses the operating system's certificates and proxy environment variables to establish a connection with Workstation Management. In most controlled corporate environments, these settings are preconfigured on employee computers by IT departments.

To use a custom proxy configuration, you must start the Workstation Client from the command line and set the environment variables as described [here](https://github.com/nodejs/undici/blob/main/docs/docs/api/EnvHttpProxyAgent.md#class-envhttpproxyagent). For example, from the Windows Command Prompt, run the following command:

```
set HTTPS_PROXY=[PROXY_IP_ADDRESS] && "C:\Program Files\Mendix Workstation\Mendix Workstation.exe"
```

## Device Connectivity

Before connecting devices with Mendix Workstation perform the following steps:

* Make sure the devices are correctly set up and connected to your computer.
* Verify that the device driver is installed and up to date.
* Take a note of the connection parameters used by the devices:

    * For Serial Port connection - baud rate, data bits, parity and stop bits, flow control.
    * For TCP/IP connection - IP address and port.

* Obtain the manual and technical documentation for your devices, including chapters describing the communication protocol and how to configure it.
* Test the connection and protocol on your operating system using the tool recommended in the device technical documentation or using common tool such as PuTTY.
    * For Serial Port connection - Open the device and test device basic commands.
    * For TCP/IP connection - Ping the device to make sure that it is reachable on the network and not blocked by a firewall, and then test the basic device commands.

## Workstation Client Download Links

Mendix Workstation can be downloaded from the Mendix Marketplace:

* [Microsoft Windows (global installer)](https://marketplace.mendix.com/link/component/247448)
* [Microsoft Windows (portable)](https://marketplace.mendix.com/link/component/247456)
* [Linux ARM 64](https://marketplace.mendix.com/link/component/247459)

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
Different device types have different requirements for the message syntax. For more information, see [Configuring Devices](/mendix-workstation/management-devices/).
{{% /alert %}}

### Quitting the Workstation Client

The **Close** button closes the Client window but does not terminate the application; it continues to run in the background. To completely quit the Client, right-click its icon in the Windows systray and select **Quit**. This action is only available if [Developer Mode](/mendix-workstation/management-stations/#developer-mode) is enabled. Alternatively, the Workstation Client process can always be stopped via Windows Task Manager.

## Best Practices for Working with Mendix Workstation

As you begin your work with Mendix Workstation, keep in mind the following best practices to help you.

### Security Recommendations

For more information, see [Security Best Practices for Mendix Workstation](/mendix-workstation/security/).

### Performance Optimization

* Ensure stations meet the recommended hardware specifications.
* Minimize background processes to improve performance.
* When building app logic reusing the Connectors nanoflows, minimize the amount of microflow calls and [other actions](/refguide/nanoflows/#logic-where-no-connection-is-needed) that require a server connection. One key benefit of Mendix Workstation is client-sided data processing. Every call to the Mendix runtime adds an performance overhead.  

### Maintenance Guidelines

* Periodically review and update workstation and device configurations.
* Monitor workstation health and resolve any connectivity issues promptly.
