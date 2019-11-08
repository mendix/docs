---
title: "Upload to Version Control Server"
parent: "dialogs"
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Use this dialog box to upload an app that is not yet stored in a version control server.

## 2 Location

Use this setting to select the location where you want to store your app. There are three options, which are described below.

### 2.1 Mendix Team Server

When uploading the app to [Mendix Team Server](/developerportal/develop/team-server), you can choose between the following:

* Create a **New Mendix Team Server** project
	* Enter the name for the new Team Server project and repository in the **App name** field
* Upload to an **Existing Mendix Team Server**
	* Select the corresponding **Team Server App** from the list
	* This only works when the existing repository is empty

### 2.2 Private Server

{{% alert type="warning" %}}
This option is only available when support for other servers is enabled in **Edit** > **Preferences** > **Advanced** > [Enable private version control](preferences-dialog#enable)).
{{% /alert %}}

If you select **Private server**, enter the address of the repository to which you want to upload your app in the **App repository address** field.

## 3 Read More

* [How to Work with an On-Premises Version Control Server](/howto/collaboration-requirements-management/on-premises-svn-howto)
