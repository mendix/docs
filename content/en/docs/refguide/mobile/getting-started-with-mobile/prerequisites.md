---
title: "Native App Prerequisites and Troubleshooting" 
linktitle: "Prerequisites and Troubleshooting"
url: /refguide/mobile/getting-started-with-mobile/prerequisites/
weight: 10
description: Troubleshoot common issues associated with building and running native mobile apps.
aliases:
    - /refguide/getting-the-make-it-native-app/
    - /howto/mobile/common-issues/
---

## Introduction

While developing Mendix apps, you will need to test and iterate to make the best products possible. You may also occasionally run into issues which require troubleshooting. This guide addresses both of those needs:

* The [Getting the Make It Native App](#get-min-app) section explains how to download the Make It Native App, which you can use to test your apps using a simple QR code
* The [Troubleshooting Common Mobile Issues](#troubleshooting) section explains port forwarding, WiFi settings, and other common troubleshooting issues

## Getting the Make It Native App {#get-min-app}

The Make It Native app allows developers to preview, test, and debug native mobile apps in conjunction with Mendix Studio Pro. This app is available for both Android and iOS devices.

Depending on the Mendix version used to build your app, you have to use a different version of Make It Native. The following list explains which version to use:

* **Latest Mendix Version** - Latest version of Make It Native 10 ([Android](https://play.google.com/apps/testing/com.mendix.developerapp.mx10), [iOS](https://testflight.apple.com/join/bQfLf27w))
    * Please note that the latest version of Make It Native 10 is offered in online stores' beta version programs. Simply follow the instructions on those sites to download and install the latest version of MIN 10.
* **10.12.x** – Make It Native 10 MTS ([Android](https://play.google.com/store/apps/details?id=com.mendix.developerapp.mx10), [iOS](https://apps.apple.com/app/make-it-native-10/id6450037464))
* **10.6.x to 10.11.x** – These versions are no longer supported by Make It Native. Please use MIN 9 LTS (below) or 10 MTS (above) instead, or make your own [custom MIN app](/refguide/mobile/distributing-mobile-apps/use-min-older-sp/) from open source.
* **9.24.0 to 10.5.x** – Make It Native 9 LTS ([Android](https://play.google.com/store/apps/details?id=com.mendix.developerapp.mx9), [iOS](https://apps.apple.com/app/make-it-native-9/id1542182000))
* **8.18.x** – Make It Native 8 LTS ([iOS](https://apps.apple.com/app/make-it-native-8/id1334081181))
* **Other** – [Creating a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/) or [Building Your Own Make It Native App](https://github.com/mendix/make-it-native)

For information on which mobile operating systems are supported by the Mendix native mobile apps, see the [Mobile Operating Systems](/refguide/system-requirements/#mobileos) section of *System Requirements*.

### Direct Download Links {#direct-links}

Download the latest version of Make It Native 10 using these QR codes:

|                                  Android                                  |                                iOS                                |
| :-----------------------------------------------------------------------: | :---------------------------------------------------------------: |
| {{< figure src="/attachments/refguide/mobile/native-mobile/getting-the-make-it-native-app/android-min-10.png" alt="Android QR Code" class="no-border" >}} | {{< figure src="/attachments/refguide/mobile/native-mobile/getting-the-make-it-native-app/ios-min-10.png" alt="iOS QR Code" class="no-border" >}} |
|   [Latest Version](https://play.google.com/apps/testing/com.mendix.developerapp.mx10)    |        [Latest Version](https://testflight.apple.com/join/bQfLf27w)         |

Download the MTS version of Make it Native 10 using these QR codes:

|                                  Android                                  |                                iOS                                |
| :-----------------------------------------------------------------------: | :---------------------------------------------------------------: |
| {{< figure src="/attachments/refguide/mobile/native-mobile/getting-the-make-it-native-app/android-min-10.png" alt="Android QR Code" class="no-border" >}} | {{< figure src="/attachments/refguide/mobile/native-mobile/getting-the-make-it-native-app/ios-min-10.png" alt="iOS QR Code" class="no-border" >}} |
|   [MTS Version](https://play.google.com/store/apps/details?id=com.mendix.developerapp.mx10)    |        [MTS Version](https://apps.apple.com/us/app/make-it-native-10/id6450037464)         |

### Using the Latest Version of Make It Native

The latest version of Make It Native app receives monthly updates, and is compatible exclusively with the latest minor release of Mendix. We recommend using this version only if you intend to update your application regularly.

To access the latest version of Make It Native, you must join our official beta testing programs on the Google Play store and the Apple App Store. To do so, click the [relevant links above](#get-min-app) and follow the instructions.

Note that it is not possible to install both **Latest** and **MTS** versions on the same device.

### Recommendations

When working with applications on a Long-Term Support (LTS) version of Mendix, use the corresponding LTS version of Make It Native. All patch versions of the Mendix LTS version can be used.

When working with applications on a Mid-Term Support (MTS) version, it is important to anticipate updating your application every 6 months. The MTS version of Make It Native exclusively supports the most recent MTS version of Mendix and receives updates one month after a new Mendix MTS version is released. We recommend performing the update during this month and using the latest version of Make It Native during the update process.

Only use the latest version of Mendix if you are prepared to update your application every month. The latest version of Make It Native only supports the latest version of Mendix and is updated monthly.

If you want to use a custom version of Mendix you can always [create a Custom Developer App](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/) or [build your own Make It Native App](https://github.com/mendix/make-it-native) for that version of Mendix.

## Troubleshooting Common Mobile Issues {#troubleshooting}

Mendix strives to make building and running native mobile apps as simple as possible. But because some complexity is inherent in making apps, problems can come up. If you are having issues while building or running native mobile apps, please consult the sections below to see if your issue has already been solved.

### Make It Native App

To troubleshoot issues related to the Make it Native app, see the sections below.

#### Port Issues

Mendix recommends keeping the **Runtime port** in your [configuration](/refguide/configuration/#server) on **8080**. If you change it, do not change it to **8083**, because that is designated for app packaging.

#### Wifi Network Settings

If you are using Windows, make sure your WiFi network is set to **Private**. Windows often sets WiFi to **Public** by default, which blocks incoming connections.

#### Error: Unable to Load Script {#unable-load-script}

Depending on your device settings and network characteristics, the Make it Native app can fail to connect to the runtime. If so, the Make it Native app can show the following error messages:

* **Unable to load script**:

    {{< figure src="/attachments/howto/mobile/native-mobile/get-started/common-issues/unabletoloadscript.png" alt="unable to load script"   width="250"  class="no-border" >}}

* **Cannot detect your runtime**:

    {{< figure src="/attachments/howto/mobile/native-mobile/get-started/common-issues/min-error-firewall.png" alt="cannot detect runtime"   width="250"  class="no-border" >}}

These failures are often caused by a firewall blocking your device from accessing your laptop. In such cases, attempts to open the runtime URL from a mobile browser will also fail. To mitigate these issues, please make sure your firewall allows incoming traffic to your laptop on the runtime and native packing ports (8080 and 8083 by default). Instructions on how to do this differ per firewall. Mendix recommends you consult your firewall administrator.

For the Windows Defender firewall, the most common firewall, do the following:

1. Make sure that your computer and the mobile device are connected to the same network.
1. Make sure that incoming connections are allowed by doing the following:<br />
    1. Open **Firewall & Network Protection** settings in Windows.<br />
    1. Go to **Advanced Settings**.<br />
    1. Select the **Inbound Rules** and scroll to the **Mendix Native Mobile** entries.<br />
    1. For each Node.js entry, note their values in the **Program** column. They should all have a green check mark in front of them.<br /> 
    1. If the **Program** column shows a Mendix installation directory, then there should be a green icon in front of the entry. If this is not the case, double-click the entry and select **Allow the connection**:

    {{< figure src="/attachments/howto/mobile/native-mobile/get-started/common-issues/inboundrules.png" alt="inbound rules"   width="350"  class="no-border" >}}

1. Windows distinguishes between two types of networks: private and public. Windows Defender Firewall applies stricter regulations for public networks. If, and only if, you are connected to a trusted network, configure the network as **Private** on your computer.

#### Error: Unable to Detect Studio Pro

If your port forwarding settings are correct but you still get an error that the Make It Native app **cannot detect Studio Pro**, please reinstall the Make It Native app on your mobile device.

#### Strict Company Policies Prevent Your Connection

If your company has strict network policies which do not allow you to open the ports Mendix requires, here are 3 alternate approaches you can try:

* Connect your PC via Wifi to a personal hotspot on your mobile phone, then look up your PC's IP address and connect to `http://{YOUR PC'S IP ADDRESS}:8080` from the mobile phone
* Install the Make It Native app or a custom developer app on an Android emulator (for example [BlueStacks](https://www.bluestacks.com)), then connect to `http://localhost:8080`
* Tunnel the ports from your desktop to your Android device via USB by executing the following commands from your shell (requires [Android Studio](https://developer.android.com/studio)):

    ```
    adb reverse tcp:8080 tcp:8080
    adb reverse tcp:8083 tcp:8083
    ```

### Use Make It Native 9 with an Older Version of Mendix 9 {#use-MIN-older}

The latest version of Make It Native 9 is only compatible with versions of Mendix 9.24.0 and above. To develop with older versions of Mendix 9, you can create a custom developer app by following [this guide](/refguide/mobile/distributing-mobile-apps/building-native-apps/how-to-devapps/). Note that a custom developer app can be used to develop multiple older Mendix apps as long as no custom dependencies are introduced.

### Configure Parallels

To use Studio Pro on a Mac device, you will first need to install and configure Parallels. For more information, see [Configuring Parallels](/refguide/using-mendix-studio-pro-on-a-mac/).

### Avoid Network or Cloud Folders

Storing a Mendix project on a network drive or in a cloud folder (such as those provided by OneDrive or Dropbox) is **not recommended**. Storing your projects in such folders will significantly slow down Studio Pro and cause errors when trying to run projects containing a native mobile profile. Note also that projects with a native mobile profile can only be started from drive **C:**.

If your home directory is managed by OneDrive, create a new folder on your computer outside of your home directory (for example **C:\Mendix**) and place the Mendix projects in there.
