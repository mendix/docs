---
title: "Import Project Package"
url: /refguide7/import-project-package-dialog/
---

## 1 Introduction

To create a new app from a Mendix project package (*.mpk*) file, you need to import an app package. The new app can either be stored in a version control server or locally on disk.

To open this dialog box,  go to **File > Import App Package**, browse to the *.mpk* file, and then open it.

{{< figure src="/attachments/refguide7/desktop-modeler/dialogs/import-project-package-dialog/import-project-package.png" >}}

## 2 Where Should We Store Your App?

Use this setting to select the location where you want to store your app. This can be the [Mendix Team Server](#team-server), a [private server](#private-server) (an SVN server other than the Team Server), or a [local disk](#local).

### 2.1 Mendix Team Server {#team-server}

When uploading the app to the Mendix Team Server, you can choose between creating a new repository or uploading to an existing one.

#### 2.1.1 New Mendix Team Server

If you select this option, a new Team Server repository will be created to store the app. You need to enter the name for the new Team Server app and repository in the **App name** field. 

#### 2.1.2 Existing Mendix Team Server

If you select this option, the app will be uploaded to an existing Team Server repository. You need to select the repository in the **Team Server App** drop-down list.

{{% alert color="info" %}}

This only works when the existing repository is empty.

{{% /alert %}}

### 2.2 Private Server {#private-server}

If you select this option, the app will be stored on a private server. You need to enter the **App repository address** to which you want to upload your app.

{{% alert color="info" %}}

This option is only available when support for other servers is enabled in the [Preferences](/refguide7/preferences-dialog/#enabled) dialog box.

{{% /alert %}}

### 2.3 Locally on Disk {#local}

If you select this option, the app will be stored on the local disk of the computer that is running Desktop Modeler.

{{% alert color="info" %}}

Select this option if you do not need to upload the new app to a version control server. 

{{% /alert %}}

## 3 Disk Location

In the **Project directory** field, specify the directory where the project files of the app will be stored. If version control is enabled, the suggested name includes ends with **-main** to indicate this will be the main development line of the app.

## 4 Read More

* [Export Project Package](/refguide7/export-project-package-dialog/)

