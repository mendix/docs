---
title: "How to Restore a Backup"
space: "General How-To's"
category: "Mendix Cloud"
#parent: ""
#description: ""
#tags: []
---

## 1 Introduction
This how-to describes how to restore a backup to a Free App or licensed cloud node.

**This how-to will teach you how to do the following:**

* Restore a full backup of a Free App
* Restore a full backup of a licensed cloud node

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a Free App or licensed cloud node available
* Have a backup from a Free App or a licensed cloud node

## 3 Restoring a Backup

The process for restoring a backup from a Free App and a licensed cloud node are different. Refer to the section applicable to your situation for steps on how to restore a backup.

### 3.1 Restoring a Backup for a Free App

1. Go to the [Mendix Developer Portal](http://home.mendix.com).
2. Click **Apps**.
3. Select the app for which you want to restore the backup.
4. Click **Backups** under the **Operate** category.
5. Select the backup you want to restore and click **Restore Backup**.
6. Click **Yes** to confirm the restoration.

### 3.2 Restoring a Backup for a Licensed Cloud Node

There are two methods for restoring a backup for a licensed cloud node. The first method is to restore the backup online. The second method is to download the backup first and then upload it to the Developer Portal.

#### 3.2.1 Method 1

To restore a backup that is stored in the Mendix Cloud, follow these steps:

1. Go to the [MEndix Developer Portal](http://home.mendix.com).
2. Click **Apps**.
3. Click **My Apps** and select **Nodes**.
4. Select the node for which you want to restore the backup.
5. Click **Backups** under the **Operate** category.
6. Select the environment to which the backup should be restored.

[](attachments/developerportal/environment.jpg)

7. Select the backup you want to restore and click **Restore Backup**.
8. Confirm the backup restore by clicking **Restore Backup**.

<div class="alert alert-info">{% markdown %}

If the app is still running, you have to stop it by clicking **Stop Application**. Then click **Restore Backup** again.

{% endmarkdown %}</div>

#### 3.2.2 Method 2

If you already have a downloaded backup file (*.db* or *.gz*) stored locally on your computer, follow these steps:

1. Go to the [Mendix Developer Portal](http://home.mendix.com).
2. Click **Apps**.
3. Click **My Apps** and select **Nodes**.
4. Select the node for which you want to restore the backup.
5. Click **Backups** under the **Operate** category.
6. Select the environment to which the backup should be restored.

[](attachments/developerportal/environment.jpg)

7. Click **Upload Archive**.
8. Because this action will immidiately stop your app, confirm this by clicking **Yes**.
9. Upload the *.db* or *.gz* backup file.

The backup file is immediately uploaded to the database.

## 4 Related Content

* [How To Unlink Your Sandbox](how-to-unlink-sandbox)
* [How To Download a Backup](how-to-download-a-backup)
* [How To Connect an App to a Licensed Cloud Node](how-to-link-app-to-node)

