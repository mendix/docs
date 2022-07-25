---
title: "Branch Line Manager Dialog"
url: /refguide7/branch-line-manager-dialog/
---

## 1 Introduction

Use this dialog box to create and delete [branch lines](/refguide7/version-control/#branch-line) of an application that is stored on a version control server.

A branch line allows independent development from other development lines. There are two main reasons for creating a branch line:

* To do maintenance development in the branch line on a version of your app that is running in production, while still keeping on developing in the main line
* To start developing a very large feature that will take more than a day to develop in the branch line, without disturbing other development in the main line

## 2 Location

Use this setting to select the location where your app is stored. This can be either the Team Server or another SVN server.

### 2.1 Mendix Team Server

Select the Team Server app of which you want to manage the branch lines. If you have an app open in the Desktop Modeler it will be selected automatically. However, you can also manage branch lines without opening an app first, in which case no app will be selected.

For more information, see [Team Server](/refguide7/team-server/).

### 2.2 Other SVN Server

In the **SVN repository address** field, enter the address of the app you want to manage and click **Connect** to load the available branches from the repository.

{{% alert color="info" %}}

This option is only available when support for other SVN servers is enabled in the [Preferences](/refguide7/preferences-dialog/#enabled) dialog box.

{{% /alert %}}

## 3 Creating Branch Lines

You can create a new branch line by clicking **New** above the list of branch lines. This will show a new dialog box where you can specify the properties of the new branch.

For more information, see [Create Branch Line Dialog](/refguide7/create-branch-line-dialog/).

## 4 Deleting Branch Lines

You can delete existing branch lines by selecting them and then clicking **Delete**. 

{{% alert color="warning" %}}

Once a branch line is deleted, the operation cannot be undone.

{{% /alert %}}