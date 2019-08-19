---
title: "Studio Version & Mendix Version Correlation"
category: "General Info"
description: "Describes how the Studio version relates to the Mendix version."
tags: ["studio", "studio pro", "versions"]
---

## 1 Introduction 

In Mendix Studio, you will be prompted to upgrade to the latest **Mendix version** whenever a new Mendix version becomes available. Next to that, Studio has its own version and will be upgraded automatically (for example, on a daily basis). This document explains how these two versions relate to each other and what you can do to make use of the latest greatest features of the Mendix Platform along with Studio.

The **Mendix Studio version** is a build number of the Studio user interface. 

The **Mendix version** is the version of the app project you are editing. **Mendix version** correlates to **Mendix Studio Pro version**, but is broader, as the Mendix version is the version of the whole platform including Mendix Studio Pro and Mendix Runtime. 

The **Mendix Studio version** and the **Mendix version** can be viewed by clicking the info icon **About** in the top-right corner of Studio.

{{% image_container width="500" %}}![](attachments/general-versions/about-dialog.png)
{{% /image_container %}}

## 2 Studio Bundles and Mendix Version

Studio supports a range of **Mendix versions**, which form a *bundle*. For example, Studio supports Mendix versions 7.15 – 7.22 (including all minor versions and path releases) as one bundle. This means that if one *Studio Pro* user has a project of Mendix 7.15.3 version, and another has a project of Mendix 7.22.0 version, for both users Studio interface and functionality will look the same, because it is one bundle of Studio.

Studio introduces a new bundle when there are breaking changes in a model that prevent your app from functioning properly without an upgrade.  An example of a breaking change is introduction of a new functionality. 

## 3 Upgrading to the Next Version

The *Studio version* is updated continuously (even daily), which will provide you with the latest user interface features for editing your app. No action is required from you, these updates are done automatically. However, when there is a new *Mendix version*, an orange top-bar is displayed, informing you that you can upgrade your app to the next version.  

![](attachments/general-versions/top-bar-upgrade.png)

{{% alert type="info" %}}

Automatic upgrade will not be offered in Studio when moving from Mendix 7 to Mendix 8, as Mendix 8 contains changes that cannot be upgraded automatically using the regular Studio upgrade mechanism. For more information, see the [Upgrading to Mendix Version 8](#upgrade-to-8) section below.

{{% /alert %}}

This means that when you upgrade, you upgrade your whole project to a new Mendix version. As Mendix version contains Mendix Studio Pro version, this also means that you or your team members need to install and use the new version for Studio Pro as well. 

When you see the upgrade notification, you can either stay on the current version and continue working (although you might not have the newest Mendix Platform features and improvements), or you can upgrade to the newest version. You will automatically be upgraded to the latest version possible, even if it is in a new bundle. 

The table below gives examples of Mendix versions correlations to Studio bundles, and what version it will be upgraded to in case you choose to upgrade:

| Mendix Version | Studio Bundle | Mendix version it will be upgraded to when Upgrade is clicked: |
| -------------- | ------------- | ------------------------------------------------------------ |
| 7.11.0         | 7.11–7.14     | 7.23.7                                                       |
| 7.15.1         | 7.15–7.22     | 7.23.7                                                       |
| 7.22.2         | 7.15–7.22     | 7.23.7                                                       |
| 7.23.0         | 7.23          | 7.23.7                                                       |
| 7.23.7         | 7.23          | No automatic upgrade, only manual upgrade to Mendix 8. For details, see the [Upgrading to Mendix Version 8](#upgrade-to-8) section below. |
| 8.0.0          | 8.0 & Above   | Latest available version of Mendix 8.                        |

{{% alert type="warning" %}} 

Once you have upgraded to the newest version, you cannot revert the upgrade. Also, anyone working on the app using Studio Pro must use the new version of Studio Pro from that moment on. 

{{% /alert %}}    

### 2.1 Upgrading to Mendix Version 8 {#upgrade-to-8}

Mendix version 8 brings many improvements to the platform and opens up new app building capabilities to Mendix developers. However, this release contains changes that cannot be upgraded automatically using the regular Studio upgrade mechanism. 

This means the following:

* Existing apps built in Studio will remain on the latest release of Mendix version 7.23 
* Newly created apps in Studio will have Mendix version 8 from the start

Developers wanting to upgrade their Studio apps to Mendix version 8 can only do so in Studio Pro or by involving developers familiar with Studio Pro. For more information on upgrading apps using Studio Pro, see [Moving from Desktop Modeler Version 7 to Studio Pro 8](/refguide/moving-from-7-to-8).

Automatic upgrade will not be offered in Studio when moving from Mendix 7 to Mendix 8.  However, if your app has Mendix 8 beta version, it will be upgraded to Mendix 8 automatically.

{{% alert type="info" %}}
Note that apps with version lower than 7.23.7 will still show the orange upgrade bar to upgrade to Mendix 7.23.7 version.
{{% /alert %}}

## 3 Postponing the Immediate Upgrade to the Next Version 

Users on the business side and in IT who want to leverage both Studio and Studio Pro to collaborate on the same application may not want to upgrade right away (for example, because upgrading Studio Pro may not be desired until later).

Also, specific company policies may be in place for approving software upgrades.

While we encourage users to upgrade to a new Mendix Studio Pro version as soon as possible, in many cases it is possible to postpone the upgrade.

Even when you are editing an app that is not upgraded to the latest Mendix version, Studio in many cases will still be available for use. An older version of Studio will automatically be loaded when you open this project in Studio. This Studio version will not contain the latest Studio features, but it will still allow you to edit the app. For more information on the latest changes to Studio, see the [Studio Release Notes](../../releasenotes/studio).

{{% alert type="info" %}} 

Studio has a minimum supported Mendix Studio version. This means that if the version of your project is lower than the minimum supported version, the upgrade is obligatory; otherwise, you will not be able to work on your app in Studio.  

{{% /alert %}}

## 4 Read More

* [Studio Release Notes](../../releasenotes/studio)
