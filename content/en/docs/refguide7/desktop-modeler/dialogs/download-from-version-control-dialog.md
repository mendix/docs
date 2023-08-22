---
title: "Download From Version Control Server Dialog"
url: /refguide7/download-from-version-control-dialog/
aliases:
    - /refguide7/download-from-team-server-dialog.html
    - /refguide7/download-from-team-server-dialog
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Use the **Download from Version Control Server** dialog box to download an app from an SVN version control server. 

{{< figure src="/attachments/refguide7/desktop-modeler/dialogs/download-from-version-control-dialog/download-from-version-control-server-dialog-original.png" >}}

{{% alert color="info" %}}

You can use the [Open App](/refguide7/open-app-dialog/) dialog box to download and open an app from Team Server. However, you will need to use this option if you want to download a second copy of an app (and development line) you already have on disk.

{{% /alert %}}

To open the **Download from Version Control Server** dialog box, go to **Project > More Versioning > Download from Version Control Server**.

## 2 Where Is Your App Stored?

Use this setting to select the location where your app is stored. You can choose between the Team Server or an SVN server other than the Team Server.

### 2.1 Mendix Team Server

In the **Team Server App** drop-down list, select the Team Server app you wish to open, and then choose the development line you want to download in the **Development line** drop-down list.

{{< figure src="/attachments/refguide7/desktop-modeler/dialogs/download-from-version-control-dialog/download-from-version-control-server.png" >}}

For more information about the Mendix Team Server, see [Team Server](/refguide7/team-server/).

For more information about development lines, see [Version Control Concepts](/refguide7/version-control/).

### 2.2 Private Server

In the **App repository address** field, enter the repository address of the app you want to open and click **Connect** to load the development lines from the repository. Then choose the development line you want to download in the **Development line** drop-down list.

{{< figure src="/attachments/refguide7/desktop-modeler/dialogs/download-from-version-control-dialog/download-from-private-server.png" >}}

{{% alert color="info" %}}

This option is only available when support for other servers is enabled in the [Preferences](/refguide7/preferences-dialog/#enabled) dialog box.

{{% /alert %}}

## 3 Disk Location

In the **Project directory** field, choose the directory where you want to store the downloaded app. The suggested name includes the name of the development line (**main** or the name of the branch line).
