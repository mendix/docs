---
title: "Download from Version Control Server"
url: /refguide8/download-from-version-control-dialog/
parent: "version-control-menu"
menu_order: 60
tags: ["studio pro"]
aliases:
    - /refguide8/download-from-team-server-dialog.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/download-from-version-control-dialog.pdf).
{{% /alert %}}

## 1 Introduction

Use the **Download from Version Control Server…** menu item to download an app from an SVN version control server (for example, [Team Server](/developerportal/collaborate/team-server)). If you are currently editing an app, the project will be closed (after prompting to save any changes) and the newly downloaded app will be opened using the current version of Studio Pro.

{{% alert type="info" %}}
If the downloaded app was created with a different version of Mendix, you will be asked if it can be converted to the current version.

You can also use the [Open App Dialog](open-app-dialog) to download and open an app from Team Server. However, you will need to use this option if you want to download a second copy of an app (and development line) you already have on disk.
{{% /alert %}}

![Download from Version Control Server dialog box](attachments/version-control-menu/download-from-version-control-server.png)

## 2 Where Is Your App Stored?

If **Enable private version control** is set in the project [Preferences](preferences-dialog#enable), you can choose between the **Mendix Team Server** or a **Private server**. If it is not enabled, you will only be able to choose an app from the Mendix Team Server.

### 2.1 Mendix Team Server

Use the **Team Server App** dropdown to choose the app you want to download.

For more information about the Mendix Team Server, see [Team Server](/developerportal/collaborate/team-server).

### 2.2 Private Server

Enter the URL of your private SVN server in **App repository address** and click **Connect**.

![Download from Version Control Server dialog box](attachments/version-control-menu/download-from-private-server.png)

## 3 Development Line

Choose the **Development line** you want to download.

For more information about development lines, see [Version Control](version-control).

## 4 Project Directory

Choose the **Project directory** you want to download the app to. The suggested name includes the name of the development line (*main* or the name of the branch line), but you can change this if you want.
