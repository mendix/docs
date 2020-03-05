---
title: "Version Control Menu"
parent: "menus"
description: "Describes the Project Menu in Studio Pro."
menu_order: 40
tags: ["Studio Pro", "project menu", "top bar"]
---

## 1 Introduction

In the **Version Control** menu you can view and/or manipulate settings that are connected to the version control. For example, you can view the history of the current development line.

{{% image_container width="300" %}}![Version Control Menu](attachments/version-control-menu/version-control-menu.png)
{{% /image_container %}}


## 2 Update

The **Update** option updates the local app to the latest revision that was committed to the version control server.

## 3 Commit

The **Commit** option commits all local changes made to the app since the previous commit to the version control server. For more information, see [Commit](commit-dialog).

## 4 Show Changes on Disk

**Show Changes on Disk** opens a dialog that shows which files on disk have been changed since the last commit.  

## 5 History

The **History** option shows the history of committed revisions of the app. For more information on what is displayed in **History**, see [History](history-dialog).

## 6 Download from Version Control Server

The **Download from Version Control Server** option downloads an app from the Team Server or another SVN server. This creates a local working copy of the app for development. For more information on what settings are displayed in the **Download from Version Control Server** dialog box, see [Download from Version Control Server](download-from-version-control-dialog).

## 7 Upload to Version Control Server

The **Upload to Version Control Server** option uploads a local app to a new or existing Team Server repository, or to another SVN server. This is only possible if the app is not yet version controlled. For more information on what settings are displayed in the **Upload to Version Control Server** dialog box, see [Upload to Version Control Server](upload-to-version-control-dialog).

## 8 Manage Branch Lines

The **Manage Branch Lines** option allows you to manage branch lines on the version control server that can be used to develop functionality separately from the main line. For more information on the Branch Line Manager and creating a new branch line, see [Branch Line Manager](branch-line-manager-dialog) and [Create Branch Line](create-branch-line-dialog). 

## 9 Merge Changes Here

The **Merge Changes Here** option allows you to merge changes that were committed in another development line to the development line that is currently opened in Studio Pro.

## 10 Reverse Merge Changes

The **Reverse Merge Changes** option allows locally rolling back changes that were committed to the version control repository. These local changes can then be committed as a new revision.

## 11 Revert All Changes

The **Revert All Changes** option allows rolling back all local changes, both in the project and in files on disk, that have been introduced since the last commit.

## 12 Add Snapshot of Data

The **Add Snapshot of Data** option creates a snapshot of the built-in database and adds that to the version control repository. This is especially useful for adding test data to your app or for demo purposes.

## 13 Read More

* [Studio Pro Overview](studio-pro-overview)
* [Version Control](version-control)
