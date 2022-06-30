---
title: "Import App Package"
url: /refguide/import-app-package-dialog/
weight: 40
description: "Describes the Import App Package process and Import App Package dialog box."
tags: ["studio pro", "import app package"]
aliases:
    - /refguide/import-project-package-dialog/
---
## 1 Introduction

To create a new app from a Mendix app package (*.mpk*) file, you need to import an app package. The new app can either be stored in a version control server or locally on disk.

To import an app package, do the following:

1. Select the **File** menu in the top bar > **Import App Package** 

2. Browse to the *.mpk* file you would like to import.

3.  Select the relevant options in the **Import App Package** dialog box and click **OK**. For more information on what options you can select, see the sections below. 

    {{< figure src="/attachments/refguide/modeling/menus/file-menu/import-app-package-dialog/import-app-package.png" alt="Import App Package Dialog Window" >}}

App packages can be created using [Export App Package](/refguide/export-app-package-dialog/).

## 2 Where Should We Store Your App?

Use this setting to select the location where you want to store your app. This can be the [Team Server](#team-server), a [private server](#private-server) (an SVN server other than the Team Server), or a [local disk](#local).

### 2.1 Mendix Team Server {#team-server}

When uploading the app to the Team Server, you can choose between creating a new repository, or uploading to an existing one. 

#### 2.1.1 New Mendix Team Server

If you select to store your app in a new Mendix Team Server, a new Team Server app will be created. You need to enter the name for the new Team Server app and repository in the **App name** field.

#### 2.1.2 Existing Mendix Team Server

If you want to use an existing repository, select the app in the **Team Server App** option. Note that this works only when the existing repository is empty.

For more information about the Mendix Team Server, see [Team Server](/developerportal/collaborate/team-server/).

### 2.2 Private Server {#private-server}

{{% alert color="info" %}}

The **Private server** option is only available when support for other SVN servers is enabled: **Edit** >**Preferences** > **Version Control** > **Enable private version control**. 

{{% /alert %}}

In the **App repository address** field, enter the address of the repository you want to upload your app to.

### 2.3 Locally on Disk {#local}

Select this option if you don't need to upload the new app to a version control server. In this case it will only be stored on the local disk of the computer that's running Studio Pro.

## 3 App Directory

Use this field to choose the directory where the app files of the app will be stored. If the version control is enabled, the suggested name ends with *-main* to indicate this will be the main development line of the app. 

## 4 Read More

* [Team Server](/developerportal/collaborate/team-server/)
* [Export App Package](/refguide/export-project-package-dialog/)