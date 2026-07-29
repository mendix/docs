---
title: "Getting Started with Mendix Workstation"
linktitle: "Getting Started"
url: /mendix-workstation/quickstart/
description: "Provides a step-by-step walkthrough through a simple installation and configuration process for Mendix Workstation."
aliases:
    - /mendix-workstation/installation/
weight: 10
---

## Introduction

This guide helps you configure and test a minimum working version of [Mendix Workstation](/mendix-workstation/) to help you develop or test Workstation configurations. By following these steps, you will complete the following:

* Create a basic configuration within Workstation Management.
* Set up a pair of virtual TCP/IP Client and Server devices for testing.
* Install the Workstation Client on your computer.
* Verify the connection between your virtual devices directly from Workstation Management.

For more detailed information about implementing Mendix Workstation in a production setting, refer to the following topics:

* [Workstation Management](/mendix-workstation/management/)
* [Workstation Client](/mendix-workstation/client/)
* [Workstation Connector](/mendix-workstation/connector/)

## Prerequisites

For information about the system and access requirements specific to Mendix Workstation, see [Installing the Workstation Client: Prerequisites](/mendix-workstation/install-client/#prerequisites).

## Creating a Workspace and Station {#create-workspace}

A *station* represents a workstation on the shop floor. It can connect to one or more apps or devices. A *workspace* is a grouping of one or more stations. For example, a workspace may group together all the stations which belong to the same factory or factory line.

1. Go to [Mendix Workstation Management](https://workstation.home.mendix.com/) and sign in with your Mendix account.
2. In **Workspace Overview**, click **Create Workspace**.

    {{< figure src="/attachments/workstation/wks-install1.png" class="no-border" >}}

3. Enter a name for your new workspace, select **Test** as the environment type, and then click **Create Workspace**.

    {{< figure src="/attachments/workstation/wks-install2.png" class="no-border" >}}

    Environments created with the Test environment type have [developer mode](/mendix-workstation/management-stations/#developer-mode) enabled by default for easier testing. Changing the environment type after creation does not enable or disable developer mode.

4. After the workspace is created, in the **Stations** page, click **Create a New Station**.

    {{< figure src="/attachments/workstation/wks-install3.png" class="no-border" >}}

5. Enter a name for the station, and then click **Create Station**.

    {{< figure src="/attachments/workstation/wks-install4.png" class="no-border" >}}

6. Optional: If you do not want Workstation Management to detect smart card readers, perform the following steps:

    1. In **Station** view, click the **three dots** icon.
    2. Click **Edit Station**.
    3. Clear the **Detect Card Readers** check box.

## Installing the Workstation Client

The Workstation Client is a connector between between a Mendix app and various devices. You must install it on a computer, and then register it in Workstation Management.

{{% alert color="info" %}}
The following instructions assume that your operating system is Windows, and that you have Windows administrator rights that allow you to perform a global installation. If you do not have administrator rights, or if you want to install the Client on a Linux machine, see [Installing the Workstation Client](/mendix-workstation/install-client/) for instructions.
{{% /alert %}}

1. Open the [station that you created](#create-workspace) and click **Register Computer**.

    {{< figure src="/attachments/workstation/wks-install5.png" class="no-border" >}}

2. In the **Computer Registration** dialog, click **Download**.

    {{< figure src="/attachments/workstation/wks-install6.png" class="no-border" >}}

3. Run the Workstation Client installer. 
4. If you get a prompt from Windows User Account Control, click **Yes** to allow Workstation Client to be installed. 

    For a silent installation, you can also run the installer as an administrator with the `/S` argument, that is, `MendixWorkstationX.Y.Z.exe /S`. 
    
The default installation folder is *C:\Program Files\Mendix Workstation*. The app data folder can be found at *C:\ProgramData\Mendix Workstation*. The client runs automatically after the installation is completed.
    
### Registering your Computer

With the Workstation Client running on your computer, you must now register your computer in the Workstation Management.

{{% alert color="info" %}}
The following instructions assume that you are registering a single computer for testing purposes. If you want to register multiple Workstation clients and their host computers in a single rollout, see [Registering Workstation Clients](/mendix-workstation/register/) for instructions.
{{% /alert %}}

1. Open the [Workspaces](https://workstation.home.mendix.com/) page.
2. Click the workspace where you want to register the Clients.
3. On the **Stations** page, edit or create a station representing the computer where you installed the Workstation Client.
4. Click the **Register Computer** button in the top right corner of the screen.
5. Click **Copy** to copy the registration token to your clipboard.

    {{< figure src="/attachments/workstation/wks-install7.png" class="no-border" >}}

6. Open the Workstation Client and paste the copied registration token into the **Enter your registration token** field.
7. Click **Register computer**.

    {{< figure src="/attachments/workstation/wks-install8.png" class="no-border" >}}

8. In Workstation Management, in the **Computer Registration** dialog, click **Done**.

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

1. In the left navigation menu of the current workspace, click **Settings**, and ensure that the **Enable Local Device Testing** setting is enabled.
2. In the left navigation menu, click **Test Your Station**.

    The page refreshes and displays a list of all your devices. This includes detected smart card readers available on your computer if you did not [disable detecting card readers](#create-workspace).

3. In your web browser, duplicate the tab where you have opened the **Test Your Station** page.
4. Arrange the two opened tabs so that you can view the two **Test Your Station** pages side by side.
5. In the left tab, click on the client device (**Test Client**).
6. In the right tab, click on the server device (**Test Server**).
7. In the left tab, on the **Test Client** device, enter a test message, and then click **Send Message**. In the other tab, on the **Test Server**, the sent message appears in the **Last message received** field.
8. In the same way, send a message from the **Test Server** to the **Test Client** device.

{{% alert color="info" %}}
Different device types have different requirements for the message syntax. For more information, see [Configuring Devices](/mendix-workstation/management-devices/).
{{% /alert %}}

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
