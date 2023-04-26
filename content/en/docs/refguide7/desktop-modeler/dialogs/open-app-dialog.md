---
title: "Open App Dialog"
url: /refguide7/open-app-dialog/
aliases:
    - /refguide7/open-project-dialog.html
    - /refguide7/open-project-dialog
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Use this dialog box to open apps. Apps can be located on the Team Server, on another SVN server, or on the local disk. When opening an app from the Team Server or another SVN server, the Desktop Modeler will check whether you have already downloaded this app. If so, it will simply open it. If not, the app will be downloaded from the version control server first.

## 2 Location

Use this setting to select the location where your app is stored. This can be the Team Server, an SVN server other than the Team Server, or a local disk. An app on disk can also be stored in the Team Server or another SVN server, in which case there is no difference in opening it using the Team Server/Other SVN server option and selecting the file on disk.

### 2.1 Mendix Team Server

From the list select the Team Server app you wish to open, then choose the development line in which you want to start developing.

For more information about the Mendix Team Server, see [Team Server](/refguide7/team-server/).

For more information about development lines, see [Version Control](/refguide7/version-control/).

### 2.2 Other SVN Server

In the **SVN repository address** field, enter the address of the app you want to open and press the **Connect** button to load the development lines from the repository. Then choose the development line in which you want to start developing.

{{% alert color="info" %}}

The **Other SVN server** option is only available when support for other SVN servers is enabled in the [Preferences](/refguide7/preferences-dialog/#enabled) dialog box.

{{% /alert %}}

### 2.3 Locally on Disk

For opening an app you already have on disk, simply point to the project file.

## 3 Disk Location

If you already have the selected development line of the app on disk, you will see the message "You have this App on disk." and the directory on disk where this app is located will be shown. If you do not have it yet, you can now choose the directory where you want to download the app to. If version control is enabled, the suggested name includes the name of the development line (**main** or the name of the branch line).

{{% alert color="info" %}}

The Desktop Modeler remembers all app that you open. In this way it can point you to existing downloads of version controlled apps. If you move an app directory, the Desktop Modeler will not know about that directory anymore and offer to download a fresh copy. If you want to continue using the existing download, you will have to open it via the **Locally on disk** option.

{{% /alert %}}
