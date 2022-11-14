---
title: "Download a Backup"
url: /developerportal/operate/download-backup/
weight: 20
description: "This page describes how to download a backup."
tags: ["Backup","Download","Mendix Cloud","Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This how-to describes downloading a back up from a Free App environment or a licensed cloud node.

This how-to will teach you how to do the following:

* Download a full backup of a Free App environment
* Download a full backup of a licensed cloud node

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Have a Free App or licensed cloud node with backups
* In case of an licensed node, you have the correct [Node Permissions](/developerportal/deploy/node-permissions/)

## 3 Downloading a Free App Backup

To download a backup of a Free App, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com) and click **Apps** in the top navigation panel.
2. Select the app from which you want to download the backup.
3. Click **Backups**.
4. Select the backup you want to download and click **Download Backup**.

    {{< figure src="/attachments/developerportal/operate/backups/download-backup/backupoptions-free.png" >}}

5. Select the backup type **Full Snapshot**, **Database Only**, or **Files Only**

## 4 Downloading a Licensed Cloud Node Backup

To download a backup of a licensed app, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com) and click **Apps** in the top navigation panel.
2. Click **My Apps** and select **Nodes**.
3. Select the node from which you want to download the backup.
4. Click **Backups**.
5. Select the environment from which you want to download the backup.

    {{< figure src="/attachments/developerportal/operate/backups/download-backup/environment.png" >}}

6. If you want to create a backup first, click **Create Backup**.

    {{< figure src="/attachments/developerportal/operate/backups/download-backup/backupoptions.jpg" >}}

7. Select a backup and click **Download Backup**.
8. Select the backup type **Full Snapshot**, **Database Only**, or **Files Only** and click **Start**.

    {{% alert color="info" %}}If a backup archive has been prepared recently, the **Show URL** and **Download** buttons will be active and you can download it immediately.{{% /alert %}}
    
9. Once the download archive has been prepared, you can do one of the following:

    * Click **Show URL** to see the URL of the backup
    * Click **Download** to immediately initiate the download of the archive using your browser.

## 5 Read More

* [How to Create a Backup](/developerportal/operate/create-backup/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [How to Restore a Backup](/developerportal/operate/restore-backup/)
