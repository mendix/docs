---
title: "Downloading a Backup"
url: /developerportal/operate/download-backup/
weight: 20
description: "This page describes how to download a backup."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This how-to explains how to download a backup from a Free App environment or a licensed cloud node.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a Free App or licensed cloud node with backups
* In the case of a licensed node, you have the correct [Node Permissions](/developerportal/deploy/node-permissions/)

## Downloading a Free App Backup

To download a backup of a Free App, follow these steps:

1. Go to [Apps](https://sprintr.home.mendix.com) and open your app.
1. In the [navigation pane](/developerportal/#navigation-pane), click **Backups**.
1. On the backup you want to download, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}). Select **Download** from the drop-down list.
1. Select the backup type: **Full snapshot**, **Database only**, or **Files only**. Then click **Start**.

## Downloading a Licensed Cloud Node Backup

To download a backup of a licensed app, follow these steps:

1. Go to [Apps](https://sprintr.home.mendix.com) and open your app.
1. In the navigation pane, click **Backups**.
1. Select the environment from which you want to download the backup.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/download-backup/environment.png" width="25%" class="no-border" >}}

1. If you want to create a backup first, click **Create Backup**.
1. On the backup you want to download, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}). Select **Download** from the drop-down list.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/download-backup/backupoptions.png" class="no-border" >}}

1. Select the backup type: **Full snapshot**, **Database only**, or **Files only**. Then click **Start**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/download-backup/backup-choice.png" alt="" width=75% class="no-border" >}}

    {{% alert color="info" %}}Some backups may take a while to be archived and made ready for download. You can close the window and return later; once the archival process is complete, selecting the same download type for the same backup instantly enables the **Show URL** and **Download** buttons.{{% /alert %}}
   
    {{% alert color="info" %}}If a backup archive has been prepared recently, the **Show URL** and **Download** buttons will be active if you have selected the same download type. In this case, you can download the backup archive immediately.{{% /alert %}}
    
1. Once the download archive has been prepared, you can do one of the following:

    * Click **Show URL** to see the URL of the backup
    * Click **Download** to immediately start downloading the archive using your browser.

## Read More

* [Creating a Backup](/developerportal/operate/create-backup/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [Restoring a Backup](/developerportal/operate/restore-backup/)
