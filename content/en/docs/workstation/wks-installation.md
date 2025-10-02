---
title: "Installing and Configuring Mendix Workstation Client"
linktitle: "Installation and Configuration"
url: /mendix-workstation/installation/
description: "Documents the installation process for Mendix Workstation Client."
weight: 20
---

## Introduction

This document provides a quick start guide for installing Mendix Workstation Client, and then configuring its basic settings. Mendix Workstation Client is available for the following operating systems:

* [Microsoft Windows (global installer)](https://marketplace.mendix.com/link/component/247448)
* [Microsoft Windows (portable)](https://marketplace.mendix.com/link/component/247456)
* [Linux ARM 64](https://marketplace.mendix.com/link/component/247459)

To configure Mendix Workstation Client, perform the following steps:

### Creating a Workspace and Station

A *station* represents a workstation on the shopfloor. It can connect to one or more apps or devices. A *workspace* is a grouping of one or more stations. For example, a workspace may group together all the stations which belong to the same factory or factory line.

1. Go to [Mendix Workstation Management](https://workstation.home.mendix.com/) and sign in with your Mendix account.
2. In **Workspace Overview**, click **Create Workspace**.

    {{< figure src="/attachments/workstation/wks-install1.png" class="no-border" >}}

3. Enter a name for your new workspace, and then click **Create Workspace**.

    {{< figure src="/attachments/workstation/wks-install2.png" class="no-border" >}}

3. After the workspace is created, in the **Stations** page, click **Create a New Station**.

    {{< figure src="/attachments/workstation/wks-install3.png" class="no-border" >}}

4. Enter a name for the station, and then click **Create Station**.

    {{< figure src="/attachments/workstation/wks-install4.png" class="no-border" >}}

5. Optional: If you do not want Workstation Management to detect smart card readers, in **Station** view, set the **Detect Card Readers** toggle to **Off**.

    {{< figure src="/attachments/workstation/wks-install16.png" class="no-border" >}}

## Downloading and Running the Workstation Client

The Workstation Client is a connector between the devices and your local PC. You can download and enable the client by performing the following steps:

1. Open a station and click **Register Computer**.

    {{< figure src="/attachments/workstation/wks-install5.png" class="no-border" >}}

2. In the **Computer Registration** dialog, click **Download**. The [Workstation Client](https://marketplace.mendix.com/link/component/247448) page on the Mendix Marketplace opens for the Windows installer. Alternatively, you can find the component on the Mendix Marketplace by searching for "Workstation Client". You can also find the [portable](https://marketplace.mendix.com/link/component/247456) and [Linux](https://marketplace.mendix.com/link/component/247459) version by using the search, or navigate to them through the above links. 

    {{< figure src="/attachments/workstation/wks-install6.png" class="no-border" >}}

3. Perform one of the following actions:

    * For Windows:

        * If you have administrator rights for your computer, click **Download** and run the Workstation Client installer in the form of an NSIS installer package. If you get a prompt from Windows Access Control, click **Yes** to allow Workstation Client to be installed; for a silent installation, you can also run the installer as an administrator with the `/S` argument, that is, `MendixWorkstationX.Y.Z.exe /S`. The default installation folder is *C:\Program Files\Mendix Workstation*. The app data folder can be found at *C:\ProgramData\Mendix Workstation*. The client runs automatically after the installation is completed.
        * If you do not have administrator rights for your computer, download the [Workstation Client Portable](https://marketplace.mendix.com/link/component/247456) instead. As a best practice, put the portable client in  a new folder in your Documents folders, and then click the .exe file to run the client.
    
    * For Linux:
        * Download the [Linux](https://marketplace.mendix.com/link/component/247459) version of the Client
        * Install: `sudo apt install ./workstation_X.X.X_arm64.deb`
        * Install card reader dependencies: `sudo apt install pcscd libcap2-bin`
        * Enable card reader dependencies: `sudo systemctl enable pcscd --now`
        * Start the application from the applications menu > Accessories > Mendix Workstation
        * Bluetooth support requires starting the application with `CAP_NET_RAW` privilege: `sudo capsh --user=$(whoami) --iab="^cap_net_raw" -- -c "'/opt/Mendix Workstation/Mendix Workstation'"`
    
## Registering your Computer

With the Workstation Client running on your computer, you must now register your computer in the Workstation Management.

1. Go to [Mendix Workstation Management](https://workstation.home.mendix.com/) and navigate to the **Station Overview** in the workspace which contains the station that you want to register to your computer. 
2. Click the menu in the overview and select **Register computer**.
3. Click **Copy** to copy the registration token to your clipboard.

    {{< figure src="/attachments/workstation/wks-install7.png" class="no-border" >}}

4. Open the Workstation Client and paste the copied registration token into the **Enter your registration token** field.
5. Click **Register computer**.

    {{< figure src="/attachments/workstation/wks-install8.png" class="no-border" >}}

6. In Workstation Management, in the **Computer Registration** dialog, click **Done**.

    {{< figure src="/attachments/workstation/wks-install9.png" class="no-border" >}}

The **Stations** page now shows your station's status as **Computer Registered**.

    {{< figure src="/attachments/workstation/wks-install10.png" class="no-border" >}}

## Configuring and Testing Virtual Devices

After registering your computer, test your connectivity by creating a pair of virtual devices: a TCP/IP server that will emulate a device, and a TCP/IP client that will connect to the emulated device.

### Creating a TCP/IP Server

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

### Creating a TCP/IP Client

1. Go to [Mendix Workstation Management](https://workstation.home.mendix.com/).
2. In the **Station** page, click **Add Device**.
3. Select **TCP/IP Client** as the **Device Type**, and then click **Next**.
4. In the **Device Name** field, enter **Test Client**, and then click **Next**.
5. In the **Device Class** field, select or create a class (for example, *Virtual*), and then click **Next**.
6. In the **Host** and **Port** fields, leave the default value of **localhost** and **1705**, and click **Next**.

    {{< figure src="/attachments/workstation/wks-install14.png" class="no-border" >}}

7. In the **Messages** dialog, leave all values as default, and click **Add Device**.

The device, which will be used to connect to the TCP/IP server running in Workstation Client, is added to the **Devices** list in the **Station** page.

### Testing the Devices

After configuring the server and client pair, test their connectivity by performing the following steps:

1. In the left navigation menu of the current workspace, click **Settings**, and ensure that the **Enable Local Device Testing** toggle is set to **On**.
2. In the left navigation menu, click **Test Your Station**.

    The page refreshes and displays a list of all your devices. If you do not want the list to show any smart card readers available on your computer, make sure to set the **Detect Card Readers** toggle to **Off**.

3. In your web browser, duplicate the tab where you have opened the **Test Your Station** page.
4. Arrange the two opened tabs so that you can view the two **Test Your Station** pages side by side.
5. In the left tab, click on the client device (**Test Client**).
6. In the right tab, click on the server device (**Test Server**).
7. In the left tab, on the **Test Client** device, enter a test message, and then click **Send Message**. In the other tab, on the **Test Server**, the sent message appears in the **Last message received** field.
8. In the same way, send a message from the **Test Server** to the **Test Client** device.

{{% alert color="info" %}}
Different device types have different requirements for the message syntax. For more information, see [Message Syntax for File, Smart Card, and Bluetooth Devices](/mendix-workstation/message-syntax/).
{{% /alert %}}

## Quitting the Workstation Client

The **Close** button closes the Client but does not stop it. The Client continues to run in the background. To quit the Client, right-click on its icon in the Windows systray, and then click **Quit**.
