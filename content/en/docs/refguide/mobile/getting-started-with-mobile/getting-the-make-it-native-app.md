---
title: Getting the Make It Native App
url: /refguide/mobile/getting-started-with-mobile/getting-the-make-it-native-app/
parent: /refguide/mobile/getting-started-with-mobile/
weight: 10
description: Troubleshoot common issues associated with building and running native mobile apps.
aliases:
    - /refguide/getting-the-make-it-native-app/
    - /howto/mobile/common-issues/
---

>>>>> /refguide/mobile/native-mobile/getting-the-make-it-native-app.md

## 1 Introduction

The Make It Native app allows developers to preview, test, and debug native mobile apps in conjunction with Mendix Studio Pro. It currently comes in two versions: 

* The **Make It Native 8 app** for Mendix Studio Pro 8 (v8.8 and above) 
* The **Make It Native 9 app** for Studio Pro v9.0 and above

Both of these apps are available for both Android and iOS devices.

For more information on using the Make It Native app to test an app, see [How To Get Started with Native Mobile](/howto/mobile/getting-started-with-native-mobile/). For advanced information on debugging with the Make It Native app, see [Debug Native Mobile Apps (Advanced)](/howto/mobile/native-debug/). If your app will require custom dependencies, such as custom widgets or fonts, see [How to Create a Custom Developer App](/howto/mobile/how-to-devapps/).

For information on which mobile operating systems are supported by the Make It Native app, see the [Mobile Operating Systems](/refguide/system-requirements/#mobileos) section of *System Requirements*.

To download the Make It Native app, search for *Make It Native* in your device's app store.

## 2 Archives {#archives}

Occasionally Mendix will introduce features, bug fixes, and functionality that will make the Make It Native app incompatible with older versions of the Mendix Studio Pro.

For example, you might be working on a time-critical app where updating to the latest Mendix Studio Pro version might be difficult, and due to incompatible changes on the Make It Native app your latest app might not work.

To solve this issue and others like it, the apps provided in this document can be installed side by side with the latest Make It Native app. Those apps working together will allow you to continue your work unimpeded.

### 2.1 Android

To acquire the archive you need, see the [Android Make It Native Archive](https://www.dropbox.com/sh/37s3d4gumhej6j3/AAAdXd97G3s8W0sUE1TQyYW9a?dl=0). To install the APKs, navigate with your device to the link provided, choose the version you would like to install, then download and install it on your device.

### 2.2 iOS

iOS archive versions for Make It Native are served via TestFlight links. To join a specific TestFlight version of the Make It Native app and install it, tap the appropriate link using the device with the account you would like to join TestFlight with. Use the TestFlight app to install the version of the app you already joined.

## 3 Direct Download Links {#direct-links}

For Make it Native 9 apps, please download them in their app stores. If you would like to download an older Make it Native 8 version directly, see the section below.

### 3.1 Make It Native for Studio Pro 8.8 and Below:

|                                  Android                                  |                                iOS                                |
| :-----------------------------------------------------------------------: | :---------------------------------------------------------------: |
| {{< figure src="/attachments/refguide/mobile/native-mobile/getting-the-make-it-native-app/qr-android-8.8.png" alt="Android QR Code" >}} | {{< figure src="/attachments/refguide/mobile/native-mobile/getting-the-make-it-native-app/qr-ios-8.8.png" alt="iOS QR Code" >}} |
|   [Link](https://www.dropbox.com/s/z0255q1gcxpvlwl/MiN%208.8.apk?dl=0)    |        [Link](https://testflight.apple.com/join/ra3QR6iG)         |


## 4 Read More

* [How to Deploy Your First Mendix Native Mobile App](/howto/mobile/deploying-native-app/)
* [How to Create a Custom Developer App](/howto/mobile/how-to-devapps/)
* [How to Debug Native Mobile Apps (Advanced)](/howto/mobile/native-debug/)


>>>>> /howto/mobile/native-mobile/get-started/common-issues.md

## 1 Introduction

Mendix strives to make building and running native mobile apps as simple as possible. But because some complexity is inherent in making apps, problems can come up. If you are having issues while building or running native mobile apps, please consult the sections below to see if your issue has already been solved.

## 2 Make It Native App

To troubleshoot issues related to the [Make it Native](/refguide/getting-the-make-it-native-app/) app, see the sections below.

### 2.1 Port Issues

We recommend keeping the **Runtime port** in your [configuration](/refguide/configuration/#server) on **8080**. If you change it, do not change it to **8083**, because that is designated for app packaging.

### 2.2 Wifi Network Settings

If you are using Windows, make sure your WiFi network is set to **Private**. Windows often sets WiFi to **Public** by default, which blocks incoming connections.

### 2.3 Error: Unable to Load Script {#unable-load-script}

Depending on your device settings and network characteristics, the Make it Native app can fail to connect to the runtime. If so, the Make it Native app can show the following error messages:

*  **Unable to load script**:

	{{< figure src="/attachments/howto/mobile/native-mobile/get-started/common-issues/unabletoloadscript.png" alt="unable to load script"   width="250"  >}}

*  **Cannot detect your runtime**:

	{{< figure src="/attachments/howto/mobile/native-mobile/get-started/common-issues/min-error-firewall.png" alt="cannot detect runtime"   width="250"  >}}

These failures are often caused by a firewall blocking your device from accessing your laptop. In such cases, attempts to open the runtime URL from a mobile browser will also fail. To mitigate these issues, please make sure your firewall allows incoming traffic to your laptop on the runtime and native packing ports (8080 and 8083 by default). Instructions on how to do this differ per firewall. We recommend you consult your firewall administrator.

For the Windows Defender firewall, the most common firewall, do the following:

1. Make sure that your computer and the mobile device are connected to the same network.
1. Make sure that incoming connections are allowed by doing the following:<br />
    a. Open **Firewall & Network Protection** settings in Windows.<br />
    b. Go to **Advanced Settings**.<br />
    c. Select the **Inbound Rules** and scroll to the **Node.js** entries.<br />
    d. For each Node.js entry, note their values in the **Program** column. They should all have a green check mark in front of them.<br /> 
    e. If the **Program** column shows a Mendix installation directory, then there should be a green icon in front of the entry. If this is not the case, double-click the entry and select **Allow the connection**:
    
    {{< figure src="/attachments/howto/mobile/native-mobile/get-started/common-issues/inboundrules.png" alt="inbound rules"   width="350"  >}}

1. Windows distinguishes between two types of networks: private and public. Windows Defender Firewall applies stricter regulations for public networks. If, and only if, you are connected to a trusted network, configure the network as **Private** on your computer.

### 2.4 Error: Unable to Detect Studio Pro

If your port forwarding settings are correct but you still get an error that the Make It Native app **cannot detect Studio Pro**, please reinstall the Make It Native app on your mobile device.

## 3 Configure Parallels

To use Studio Pro on a Mac device, you will first need to install and configure Parallels. For more information, see [How to Configure Parallels](/howto/general/using-mendix-studio-pro-on-a-mac/).

## 4 Read More

* [How to Debug Native Mobile Apps (Advanced)](/howto/mobile/native-debug/)
