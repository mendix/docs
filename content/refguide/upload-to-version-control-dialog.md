---
title: "Upload to Version Control Server"
parent: "dialogs"
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Use this dialog box to upload an app that is not yet stored in a version control server.

## 2 Location

Use this setting to select the location where you want to store your app. This can be either the [Team Server](/developerportal/develop/team-server) or an SVN server other than the Team Server.

{{% alert type="warning" %}}
This option is only available when support for other SVN servers is enabled in the **Preferences** dialog box.
{{% /alert %}}

### 2.1 Mendix Team Server

When uploading the app to the Team Server, you can choose between creating a new repository (in which a new Team Server project will also be created) or uploading to an existing one:

* When creating a new repository, enter the name for the new Team Server project and repository in the **App name** field
* To use an existing repository, select the corresponding Team Server app from the list (note that this only works when the existing repository is empty)

### 2.2 Another SVN Server

In the **SVN repository address** field, enter the address of the repository to which you want to upload your app.

## 3 Read More

* [How to Work with an On-Premises Version Control Server](/howto/collaboration-requirements-management/on-premises-svn-howto)
