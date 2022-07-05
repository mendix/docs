---
title: "Troubleshoot Common Native Mobile Issues"
url: /howto8/mobile/common-issues/
weight: 80
description: Troubleshoot common issues associated with building and running native mobile apps.
tags: ["native", "mobile", "developer", "troubleshoot", "app"]
---

## 1 Introduction

Mendix strives to make building and running native mobile apps as simple as possible. But because some complexity is inherent in making apps, problems can come up. If you are having issues while building or running native mobile apps, please consult the sections below to see if your issue has already been solved.

## 2 Make It Native App

To troubleshoot issues related to the [Make it Native](/refguide8/getting-the-make-it-native-app/) app, see the sections below.

### 2.1 Port Issues

We recommend keeping the **Runtime port** in your [configuration](/refguide8/configuration/#server) on **8080**. If you change it, do not change it to **8083**, because that is designated for app packaging.

### 2.2 Wifi Network Settings

If you are using Windows, make sure your WiFi network is set to **Private**. Windows often sets WiFi to **Public** by default, which blocks incoming connections.

### 2.3 Error: Unable to Load Script

Depending on your device settings and network characteristics, the Make it Native app can fail to connect to the runtime. If so, the Make it Native app can show the following error messages:

*  **Unable to load script**:

	{{< figure src="/attachments/howto8/mobile/native-mobile/common-issues/unabletoloadscript.png" alt="unable to load script"   width="250"  >}}

*  **Cannot detect your runtime**:

	{{< figure src="/attachments/howto8/mobile/native-mobile/common-issues/min-error-firewall.png" alt="cannot detect runtime"   width="250"  >}}

These failures are often caused by the Windows Defender firewall. In such cases, attempts to open the runtime URL from the mobile browser will also fail. To mitigate these issues, please do the following:

1. Make sure that your computer and the mobile device are connected to the same network.
1. Make sure that incoming connections are allowed by doing the following:<br />
    a. Open **Firewall & Network Protection** settings in Windows.<br />
    b. Go to **Advanced Settings**.<br />
    c. Select the **Inbound Rules** and scroll to the **Node.js** entries.<br />
    d. For each Node.js entry, note their values in the **Program** column. They should all have a green check mark in front of them.<br /> 
    e. If the **Program** column shows a Mendix installation directory, then there should be a green icon in front of the entry. If this is not the case, double-click the entry and select **Allow the connection**:
    
    {{< figure src="/attachments/howto8/mobile/native-mobile/common-issues/inboundrules.png" alt="inbound rules"   width="350"  >}}

1. Windows distinguishes between two types of networks: private and public. Windows Defender Firewall applies stricter regulations for public networks. If, and only if, you are connected to a trusted network, configure the network as **Private** on your computer.

## 3 Read More

* [How to Debug Native Mobile Apps (Advanced)](/howto8/mobile/native-debug/)
* [Native Builder Reference Guide](/refguide8/native-builder/)
