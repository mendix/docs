---
title: "Downloading a Backup"
url: /developerportal/operate/download-backup/
weight: 20
description: "This page describes how to download a backup."
tags: ["Backup","Download","Mendix Cloud","Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This how-to explains how to download a backup from a Free App environment or a licensed cloud node.

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a Free App or licensed cloud node with backups
* In the case of a licensed node, you have the correct [Node Permissions](/developerportal/deploy/node-permissions/)

## 3 Downloading a Free App Backup

To download a backup of a Free App, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com) and click **Apps** in the top navigation panel.
2. Select the app from which you want to download the backup.
3. Click **Backups**.
4. Select the backup you want to download and click **Download Backup**.

    {{< figure src="/attachments/developerportal/operate/backups/download-backup/backupoptions-free.png" >}}

5. Select the backup type: **Full snapshot**, **Database only**, or **Files only**. Then click **Start**.

## 4 Downloading a Licensed Cloud Node Backup

To download a backup of a licensed app, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com) and click **Apps** in the top navigation panel.
2. Click **My Apps** and select **Nodes**.
3. Select the node from which you want to download the backup.
4. Click **Backups**.
5. Select the environment from which you want to download the backup.

    {{< figure src="/attachments/developerportal/operate/backups/download-backup/environment.png" width="200" >}}

6. If you want to create a backup first, click **Create Backup**.
7. Select a backup and click **Download Backup**.

    {{< figure src="/attachments/developerportal/operate/backups/download-backup/backupoptions.png" >}}

8. Select the backup type: **Full snapshot**, **Database only**, or **Files only**. Then click **Start**.

    {{% alert color="info" %}}If a backup archive has been prepared recently, the **Show URL** and **Download** buttons will be active. In this case, you can download the backup archive immediately.{{% /alert %}}
    
9. Once the download archive has been prepared, you can do one of the following:

    * Click **Show URL** to see the URL of the backup
    * Click **Download** to immediately start downloading the archive using your browser.

## 5 Read More

* [How to Create a Backup](/developerportal/operate/create-backup/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [How to Restore a Backup](/developerportal/operate/restore-backup/)
