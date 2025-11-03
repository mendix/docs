---
title: "Creating a Backup"
url: /developerportal/operate/create-backup/
weight: 10
description: "This page describes how to create a backup."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

This how-to describes creating a backup of a licensed cloud node.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* You have a licensed cloud node. This option is not available for Free Apps.
* You have **Access to Backups** permissions for the node. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).

## Creating a Backup

To create a backup archive of a licensed app, follow these steps:

1. Go to [Apps](https://sprintr.home.mendix.com) and select the app.
2. Click **Backups** in the navigation pane.
3. Select the environment for which you want to create a backup snapshot.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/create-backup/environment.png" width=25% class="no-border" >}}

4. Click **Create Backup**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/create-backup/backupoptions.png" class="no-border" >}}

Once you have created a backup archive, you can download it by clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) then selecting **Download**. For more information, see [Downloading a Backup](/developerportal/operate/download-backup/).

{{% alert color="info" %}}
If you want to restart your environment after creating a backup archive, wait until the backup completes. Tables are locked while the database is in the process of creating a backup, so you may receive a timeout error if you try to start your environment while the backup is being created.
{{% /alert %}}

## Files in a Backup

All files will be included in the backup unless the **DeleteAfterDownload** attribute of the **System.FileDocument** entity, or any of its generalizations, is set to **true**.

The **DeleteAfterDownload** flag is a security feature that automatically removes files from the file storage system immediately after a successful download and ensures these files are excluded from system backups. 

This flag is particularly important when handling sensitive or confidential data, as it guarantees that once a file is downloaded and deleted, it cannot be retrieved from either the active storage or backup systems, thereby maintaining complete data security throughout the file's lifecycle.

## Read More

* [How to Deploy to Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [How to Download a Backup](/developerportal/operate/download-backup/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [How to Restore a Backup](/developerportal/operate/restore-backup/)
