---
title: "Configuring Parallels"
url: /refguide/using-mendix-studio-pro-on-a-mac/
linktitle: "Configuring Parallels"
category: "Installation"
weight: 40
description: "Describes how to start making Mendix apps on your Mac device."
tags: ["Native", "Parallels", "Mac", "Mobile"]
aliases:
    - /howto/general/using-mendix-studio-pro-on-a-mac/
---

## 1 Introduction

Using Parallels, you can run Mendix Studio Pro on your Mac device using a Windows virtual machine.

{{% alert color="info" %}}
When using parallels, some users might experience slow network speed. For instance, it might take much longer than usual when uploading a **Blank Web App** to create a new app. For information on how to solve this issue, see the [Increasing Network Speed](#increase-network-speed) section below.
{{% /alert %}}

To start making Mendix apps on your Mac, follow this how-to.

This how-to will teach you how to do the following:

* Configure your Windows virtual machine for Mendix Studio Pro
* Run a Mendix app on a test device using your Windows virtual machine
* Make changes to your app, then view those changes on your test device

For a deep-dive look into installing Studio Pro on a Mac, check out this video:

{{< vidyard "nJ9Tz8VnHPPKPrtSBgHv3U" >}}

## 2 Prerequisites

Make sure you have completed the following prerequisites:

* Install [Parallels Desktop Pro Edition](https://www.parallels.com/products/desktop/pro/), install Windows when prompted by Parallels, and create a Windows virtual machine (Parallels Desktop Pro Edition is necessary for Mendix's network features to work)
* Install Mendix Studio Pro on your Windows virtual machine

{{% alert color="warning" %}}
Use the default browser installed in the Windows VM as the default browser for the Parallels VM, or configure your Windows virtual machine. Using the Windows VM browser or configuring it ensures your ability to sign in.
{{% /alert %}}

## 3 Configuring Your Windows Virtual Machine for Mendix Studio Pro {#configuring}

To configure your Windows virtual machine to work with Mendix Studio Pro, follow these steps:

1. Open your Parallels **Control Center**:

    {{< figure src="/attachments/refguide/installation/using-mendix-studio-pro-on-a-mac/windows-control-center.png" alt="parallels control center"   width="450"  >}}

2. Click the **gear** symbol to open the **Configuration Panel**.
3. Navigate to the **Hardware** tab, and select **Network** from the left panel:

    {{< figure src="/attachments/refguide/installation/using-mendix-studio-pro-on-a-mac/windows-configuration.png" alt="network in configuration"   width="450"  >}}

4. Make sure **Source** is set to **Shared Network**.
5. Make sure that both the **Inbound** bandwidth and **Outbound** bandwidth show **unlimited**.

    If this is not the case, either enable **Network Conditioner** and set it to a profile that does not limit bandwidth, or click the **Options** tab then the **Optimization** pane and set **Resource usage** to **No limit**.
6. In the Parallels drop-down menu, select **Preferences**:

    {{< figure src="/attachments/refguide/installation/using-mendix-studio-pro-on-a-mac/preferences-dropdown.png" alt="preferences in parallels"   width="200"  >}}

7. Navigate to the **Network** tab, and select **Shared** from the left panel:

    {{< figure src="/attachments/refguide/installation/using-mendix-studio-pro-on-a-mac/parallels-preferences-no-ports.png" alt="network tab"   width="450"  >}}

8. Click the **+** button and add three ports: one for 8080, one for 8083, and one for 8100. Forward all of them to your Windows virtual machine (the 8083 port is only necessary for developing native mobile apps):

    {{< figure src="/attachments/refguide/installation/using-mendix-studio-pro-on-a-mac/port-setup.png" alt="plus button"   width="450"  >}}

    After adding those three ports, your **Port forwarding rules** should look like this:

    {{< figure src="/attachments/refguide/installation/using-mendix-studio-pro-on-a-mac/parallels-preferences-ports.png" alt="finished ports"   width="450"  >}}

Congratulations! You have successfully configured port forwarding to enable testing Mendix apps with your Mac.

{{% alert color="warning" %}}
Make sure your Windows VM Firewall is active and properly configured.
{{% /alert %}}

## 4 Checking Network Drive

{{% alert color="warning" %}}
Whenever you create or open a Mendix app in Mendix Studio Pro, be sure to do so from a mapped drive instead of a network drive.

The **Z:** drive is typically how Parallels names the network drive on the Mac it is running on. This **Z:** drive starts with a letter, but *is not a mapped drive*. **Use the C: drive instead, as it is a mapped drive.**
{{% /alert %}}

Read the tips below to check the network drive before viewing your app on your testing device:

* Correct mapped drives will always have a letter at the start of their file location:

    {{< figure src="/attachments/refguide/installation/using-mendix-studio-pro-on-a-mac/mapped-drive.png" alt="mapped drive"   width="450"  >}}

* Incorrect network drives will always have **\\** at the start of their file location:

    {{< figure src="/attachments/refguide/installation/using-mendix-studio-pro-on-a-mac/network-drive.png" alt="network drive"   width="450"  >}}
    
## 5 Viewing Your App on Your Testing Device

When running your app on your test device, you cannot use the QR code within Mendix Studio Pro's **View Mobile App** dialog box:

{{< figure src="/attachments/refguide/installation/using-mendix-studio-pro-on-a-mac/view-mobile-app.png" alt="view mobile app"   width="400"  >}}

Instead, you must enter your Mac's IP address into your Make It Native app. To run your app on your test device, follow the steps below:

1. Make sure your test device and Mac are on the same Wi-Fi network.
2. Place your cursor over your Wi-Fi symbol in your system tray, then and click while holding <kbd>Option</kbd> to see your Mac's advanced network information. You will see your **IP Address** in this drop-down menu.
3. In your Make It Native app's **Host** field, type `{your IP address}:8080` like this:

    {{< figure src="/attachments/refguide/installation/using-mendix-studio-pro-on-a-mac/ip-in-dev-app.png" alt="ip in dev app"   width="200"  >}}

4. Tap **Launch** to view your app.

Congratulations! You have successfully viewed your app on a test device.

{{% alert color="info" %}}
If you experience issues connecting with the Make It Native app, make sure your firewall is not preventing a connection. For information resolving Windows Defender and other firewall-related issues, see the [Error: Unable to Load Script](/refguide/mobile/getting-started-with-mobile/prerequisites/#unable-load-script) section of *Prerequisites*
{{% /alert %}}

## 6 Viewing Changes to Your App on Your Testing Device

For information on how to change to your app and then see that change on your device, see the [Viewing Changes to Your App on Your Testing Device](/refguide/mobile/getting-started-with-mobile/#viewingchanges) section in *Getting Started with Mobile*.

## 7 Improving Performance {#performance}

To improve the performance, you can do the following: 

* Run Parallels in full-screen mode in a window instead of in **Coherence** mode
* Store your apps in the virtual machine (VM) on local disk *C:\*

### 7.1 Increasing Network Speed {#increase-network-speed}

When using parallels, some users might experience slow network speed. For instance, it might take much longer than usual when uploading a **Blank Web App** to create a new app. You try the following approach, which can increase the upload speed significantly:

1. In Windows 10 or 11, navigate to **Start** > **Control Panel**> **Device Manager** > **Network adapters** > **Parallels VirtIO Ethernet Adapter**. 
2. Right-click **Parallels VirtIO Ethernet Adapter** and select **Properties** in the drop-down list. 
3. On the **Advance** tab, find the **Large Send Offload** **(IPv4)** property and change its value to **Disabled**. 
4. Click **OK**.

Now the upload speed becomes faster! For more information, see [Parallels Forum](https://forum.parallels.com/threads/horribly-slow-upload-download-speeds.264819/).

## 8 Read More

* [Getting Started with Mobile](/refguide/mobile/getting-started-with-mobile/)
