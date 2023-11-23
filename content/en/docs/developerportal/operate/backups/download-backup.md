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

1. Go to the [Developer Portal](http://sprintr.home.mendix.com).
2. Select the app from which you want to download the backup.
3. In the [navigation pane](/developerportal/#navigation-pane), click **Backups**.
4. On the backup you want to download, click the **More Options** icon. Select **Download** from the drop-down list.
5. Select the backup type: **Full snapshot**, **Database only**, or **Files only**. Then click **Start**.

## 4 Downloading a Licensed Cloud Node Backup

To download a backup of a licensed app, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com).
2. Open the [Global Navigation menu](/developerportal/global-navigation/) in the upper-left corner. Then click **Deployment** (or **Deployment** > **Public Cloud**).
3. On the node that you want to download the backup from, click **Environments**.
4. In the navigation pane, click **Backups**.
5. Select the environment from which you want to download the backup.

    {{< figure src="/attachments/developerportal/operate/backups/download-backup/environment.png" width="25%" >}}

6. If you want to create a backup first, click **Create Backup**.
7. On the backup you want to download, click the **More Options** icon. Select **Download** from the drop-down list.

    {{< figure src="/attachments/developerportal/operate/backups/download-backup/backupoptions.png" >}}

8. Select the backup type: **Full snapshot**, **Database only**, or **Files only**. Then click **Start**.

    {{< figure src="/attachments/developerportal/operate/backups/download-backup/backup-choice.png" alt="" width=75% >}}

    {{% alert color="info" %}}If a backup archive has been prepared recently, the **Show URL** and **Download** buttons will be active. In this case, you can download the backup archive immediately.{{% /alert %}}
    
9. Once the download archive has been prepared, you can do one of the following:

    * Click **Show URL** to see the URL of the backup
    * Click **Download** to immediately start downloading the archive using your browser.

## 5 Read More

* [Creating a Backup](/developerportal/operate/create-backup/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [Restoring a Backup](/developerportal/operate/restore-backup/)
