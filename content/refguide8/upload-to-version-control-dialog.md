---
title: "Upload to Version Control Server"
parent: "version-control-menu"
menu_order: 70
tags: ["studio pro"]
aliases:
    - /refguide8/upload-to-team-server-dialog.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/upload-to-version-control-dialog.pdf).
{{% /alert %}}

## 1 Introduction

Use this dialog box to upload an app that is not yet stored in a version control server.

![Upload to Version Control Server menu option](attachments/upload-to-version-control/upload-to-version-control-server.png)

## 2 Location

Use this setting to select the location where you want to store your app. There are three options, which are described below.

### 2.1 New Mendix Team Server

You can create a new app on [Mendix Team Server](/developerportal/collaborate/team-server).

* Select **New Mendix Team Server**
* Enter the name for the new Team Server project and repository in the **App name** field

	![Enter App name for New Mendix Team Server](attachments/upload-to-version-control/new-team-server-app.png)

### 2.2 Existing Mendix Team Server

{{% alert type="warning" %}}
You can only upload to an existing repository if the repository is currently empty
{{% /alert %}}

* Select **Existing Mendix Team Server**
* Select the **Team Server App** from the list

	![Select existing mendix Team Server](attachments/upload-to-version-control/existing-team-server-app.png)

### 2.3 Private Server

This option is only available when support for other servers is enabled in **Edit** > **Preferences** > **Advanced** > [Enable private version control](preferences-dialog#enable)).

![Enable private version control in advanced preferences](attachments/upload-to-version-control/enable-private-version-control.png)

<a name="private-server"></a>If you select **Private server**, enter the address of the repository to which you want to upload your app in the **App repository address** field.

![Enable private version control in advanced preferences](attachments/upload-to-version-control/private-server-app.png)

## 3 Read More

* [How to Work with an On-Premises Version Control Server](/howto8/collaboration-requirements-management/on-premises-svn-howto)
