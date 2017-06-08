--
title: "Backups"
space: "Developer Portal"
category: "Operate"
description: "This page describes the the Backups page of the Operate category."
tags: ["Operate","App","Developer Portal"]
---

## 1 Backups 

On this page under the **Operate** category, you have the following options to your backups:

*   Create a backup
*   Upload data
*   Restore a backup
*   Download a backup

### 1.1 Create a backup

This will automatically generate a backup from your application data.

### 1.2 Upload data

You must stop the application before executing this process. This functionality is used to transfer data from your local or on-premises application to the cloud environment. This will not add a backup to the backup list but directly update the application with the newly uploaded data. Your environment will be cleared completely. The Deployment Package, Uploaded Files and Database will be removed. If you are uploading data to the production environment, any published AppServices will be unpublished.

You can upload to types of data:

*   Database
*   Uploaded files - zip or tar.gz

### 1.3 Restore a backup

You can choose the environment you want to restore the backup to.
If you restore a backup that was originally deployed on an older model version, you will get a warning. You can still restore the backup but you have to deploy the older model later on. 

### 1.4 Download a backup

*   Full backup
*   Uploaded files
*   Database

### 1.5 Backup details

If you click on **Details** you can view the following information:

*   Status: The status of this backup. Backup have the status ‘Queued’ of ‘Running’. If not the backup has Failed or is Completed.
*   Created by: The name of the person who created the backup. Automated system backups are named ‘Nightly’.
*   Date: Creation date of the backup.
*   Expires on: The date on which the backup will be removed from the system.
*   Model version: used version of the Deployment Package during backup creation.
*   Comment: add a specific comment to this backup.

## 6 Related Content