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
*   How to restore a full back up of a Free App.
*   How to restore a full back up of a licensed cloud node 


## 2 Prerequisites
Before starting this how-to, make sure you have completed the following prerequisites:

*   You have a Free App or licensed cloud node available
*   You have a backup from a Free App or a licensed cloud node


## 3 Restore A Backup

The process for restoring a backup from a Free App and a licensed cloud node are different. Refer to the chapter applicable to your situation for steps on how to restore a backup.


### 3.1 Restore A Backup For A Free App

1.  Go to the [Developer Portal](http://home.mendix.com)
2.  Click **Apps**
3.  Select the App you want to restore the backup of
4.  Click **Backups** under the **Operate** category
5.  Select the backup you want to restore and click **Restore Backup**
6.  Click **Yes** to confirm the restoration


### 3.2 Restoring a backup for a licensed cloud node.
There are two methods to restore a backup. Method 1 is to restore the backup online. Method 2 is to download the backup first and then upload it to the Developer Portal.

#### Method 1
If you want to restore a backup that is stored in the Mendix Cloud.

1.  Go to the [Developer Portal](http://home.mendix.com)
2.  Click **Apps**
3.  Click **My Apps** and select **Nodes**
4.  Select the Node you want to restore the backup of
5.  Click **Backups** under the **Operate** category
6.  Select the environment the backup should be restored to

[](attachments/backup/environment.jpg)

7.  Select the backup you want to restore and click **Restore Backup**
8.  Confirm the backup restore by clicking **Restore Backup**

<div class="alert alert-info">{% markdown %}

If the App is still running you have to stop the App first by clicking **Stop Application**. Then click **Restore Backup** again.

{% endmarkdown %}</div>

#### Method 2
If you already have a downloaded (.db or .gz) backup file stored locally on your computer.

1.  Go to the [Developer Portal](http://home.mendix.com)
2.  Click **Apps**
3.  Click **My Apps** and select **Nodes**
4.  Select the Node you want to restore the backup of
5.  Click **Backups** under the **Operate** category
6.  Select the environment the backup should be restored to

[](attachments/backup/environment.jpg)

7.  Click **Upload Archive**
8.  Because this action will immidiately stop your App, you will have to confirm this by clicking **Yes**
9.  Upload the .db or .gz backup file

The backup file is immediately uploaded to the database.

## 4 Related Content
*   [How To Unlink Your Sandbox](how-to-unlink-sandbox)
*   [How To Download a Backup](how-to-download-a-backup)
*   [How To Connect an App to a Licensed Cloud Node](how-to-link-app-to-node)
