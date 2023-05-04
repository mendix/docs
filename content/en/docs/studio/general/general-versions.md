---
title: "Studio Ranges and Mendix Versions"
url: /studio/general-versions/
category: "General Info"
description: "Describes how Studio ranges relate to Mendix versions."
tags: ["studio", "studio pro", "versions", "version", "range"]
---

## 1 Introduction 

In Mendix Studio, you will be prompted to upgrade to the latest **Mendix version** whenever a new Mendix version becomes available. Next to that, Studio has its own version and will be upgraded automatically (for example, on a daily basis). This document explains how these two versions relate to each other and what you can do to make use of the latest greatest features of the Mendix Platform along with Studio.

The **Mendix Studio version** is a build number of the Studio user interface. 

The **Mendix version** is the version of the app you are editing. **Mendix version** correlates to **Mendix Studio Pro version**, but is broader, as the Mendix version is the version of the whole platform including Mendix Studio Pro and Mendix Runtime. 

The **Mendix Studio version** and the **Mendix version** can be viewed by clicking the **More Options** icon > **About** in the upper-right corner of Studio.

{{< figure src="/attachments/studio/general/general-versions/about-dialog.png"   width="500"  >}}

## 2 Relation Between Studio Ranges and Mendix Versions 

Studio supports a range of **Mendix versions**. For example, Studio supports Mendix versions 7.15 – 7.22 (including all minor versions and path releases) as one range. This means that if one *Studio Pro* user has an app of Mendix 7.15.3 version, and another has an app of Mendix 7.22.0 version, for both users Studio interface and functionality will look the same, because it is one Studio range.

Studio introduces a new range when there are breaking changes in a model that prevent your app from functioning properly without an upgrade.  An example of a breaking change is introduction of a new functionality. 

## 3 Upgrading to the Next Version{#upgrade}

The *Studio version* is updated continuously (even daily), which will provide you with the latest user interface features for editing your app. No action is required from you, these updates are done automatically. However, when there is a new *Mendix version*, a top bar is displayed, informing you that you can upgrade your app to the next version.  

{{< figure src="/attachments/studio/general/general-versions/top-bar-upgrade.png" >}}

This means that when you upgrade, you upgrade your whole app to a new Mendix version. As Mendix version contains Mendix Studio Pro version, this also means that you or your team members need to install and use the new version for Studio Pro as well. 

When you see the upgrade notification, you can either stay on the current version and continue working (although you might not have the newest Mendix Platform features and improvements), or you can upgrade to the newest version. When you upgrade, you will automatically be upgraded to the latest version possible. Usually it is the latest version in the current Studio bundle. An upgrade from one Studio bundle to another can be done in Studio Pro. For example, if you want to upgrade from Mendix version 9.6 to Mendix version 9.10, you need to use Studio Pro.

{{% alert color="info" %}} 

Studio has a minimum supported Mendix Studio version. This means that if the Mendix version of your app is lower than the minimum supported version, the upgrade is obligatory; otherwise, you will not be able to work on your app in Studio. 

{{% /alert %}}

The table below shows how Studio ranges relate to Mendix versions and what version your  will be upgraded to in case you choose to upgrade:

| Studio range | Mendix version it will be upgraded to when Upgrade is clicked: |
| ------------ | ------------------------------------------------------------ |
| 7.11–7.22    | The latest 7.23 version; mandatory upgrade when opening an  in Studio. |
| 7.23         | The latest 7.23 version. <br />No automatic upgrade, only manual upgrade to Mendix 8. |
| 8.0–8.6      | The latest 8.18 version; mandatory upgrade when opening an  in Studio. |
| 8.7–8.18     | The latest 8.18 version.<br />No automatic upgrade to Mendix 9, only manual upgrade in Mendix Studio Pro. For details, see [Moving from Mendix Studio Pro 8 to 9](/refguide9/moving-from-8-to-9/). |
| 9.0–9.6     | Latest available version, but no lower than 9.5.1. Due to breaking changes, minimum Studio-supported version in this bundle is 9.5.1.  Apps below 9.5.1 will not open in Studio and an automatic upgrade will be suggested. |
| 9.7–9.20 | Latest available version from 9.7 to 9.20. Studio only supports apps built in Mendix 9.20 and below. Apps built with Mendix 9.21 or above can be opened with Studio Pro. For more information, see the blog post [Coming in 2023: The Merging of Studio and Studio Pro](https://www.mendix.com/blog/coming-in-2023-the-merging-of-studio-and-studio-pro/). |

{{% alert color="warning" %}} 

Once you have upgraded to the newest version, you cannot revert the upgrade. Also, anyone working on the app using Studio Pro must use the new version of Studio Pro from that moment on.

{{% /alert %}}    

### 3.1 Postponing the Immediate Upgrade to the Next Version 

Users on the business side and in IT who want to leverage both Studio and Studio Pro to collaborate on the same application may not want to upgrade right away (for example, because upgrading Studio Pro may not be desired until later). Also, specific company policies may be in place for approving software upgrades.

While we encourage users to upgrade to a new Mendix Studio Pro version as soon as possible, in many cases it is possible to postpone the upgrade. Even when you are editing an app that is not upgraded to the latest Mendix version, an older version of Studio will automatically be loaded when you open this app in Studio. 

## 4 Read More

* [Studio Release Notes](/releasenotes/studio/)
* [Studio Pro Release Notes](/releasenotes/studio-pro/)
