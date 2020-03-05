---
title: "Open Project"
parent: "file-menu"
menu_order: 20
description: "Describes the Open Project (app) flow and the Open App dialog box"
tags: ["studio pro", "open app", "open project"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

To open a project in Mendix Studio Pro, do one of the following:

* Open the **File** menu in the top bar > **Open Project**
*  Click **Open App** on the Studio Pro landing page

The **Open App** dialog box will open, where you can select the app location:

![Open App](attachments/file-menu/open-app.png)

For more information on the app location, see the [Where Is Your App Stored?](#location) section

Apps can be located on the Team Server, on another SVN server, or on the local disk. When opening an app from the Team Server or another SVN server, Studio Pro will check whether you have already downloaded this app. If so, it will simply open it. If not, the app will be downloaded from the version control server first.

## 2 Where Is Your App Stored? {#location}

Use this setting to select the location where your app is stored. This can be the [Team Server](#team-server), a [private server](#private-server), that is an SVN server other than the Team Server, or a [local disk](#local). An app on disk can also be stored in the Team Server or another SVN server, in this case there is no difference in opening it using the **Team Server**/**Private server** option and or the **Locally on disk** option.

### 2.1 Mendix Team Server {#team-server}

Select the Team Server app you would like to open, then choose the development line.

For more information about the Mendix Team Server, see [Team Server Overview](/developerportal/develop/team-server).

For more information about development lines, see [Version Control](version-control).

### 2.2 Private Server {#private-server}

{{% alert type="info" %}}

The **Private server** option is only available when support for other SVN servers is enabled: **Edit** >**Preferences** > **Advanced** > **Enable private version control**. 

{{% /alert %}}

In the **App repository address** field, enter the address of the app you want to open and press the **Connect** button to load development lines from the repository. Then choose the development line in which you want to start developing.

### 2.3 Locally on Disk {#local}

For opening an app you already have on disk, simply point to the project file. 

## 3 Read More

* [Import Project Package](import-project-package-dialog)