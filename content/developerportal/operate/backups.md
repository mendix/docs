---
title: "Backups"
category: "Operate"
menu_order: 40
description: "This page describes the Backups page of the Developer Portal."
tags: ["Operate","App","Developer Portal","Backup"]
---

## 1 Introduction

Backups in the Mendix Cloud have two parts: database and file documents. A backup is created every night or on-demand, as described in [3 Backups](#Backups). For the database, a full backup is made. File documents are backed up incrementally. 

Additionally, a replication/failover add-on can be purchased that will enable incremental backups with a 15 minute interval for the database and file documents.

## 2 Nightly Backups – Creation and Retention Schedules

The pruning schedule applies to nightly backups and backups initiated by users. If you want to keep a backup for longer than scheduled, you will have to download it.

The following backups are retained:

* Last two weeks: every day
* Last three months: every Sunday
* Last year: every first Sunday of the month

The start time of nightly backups is between 21:00 and 05:00 in the local time of the region.

## 3 Backups<a name="Backups"></a>

The **Backups** page under the **Operate** category presents options for managing your backups. These are described below.

### 3.1 Creating a Backup

This will automatically generate a backup from your application data.

### 3.2 Uploading Data
#### 3.2.1 Uploading Data in Mendix Cloud V3
You must stop the application before executing this process. This functionality is used to transfer data from your local or on-premises application to the cloud environment. This will not add a backup to the backup list but directly update the application with the newly uploaded data. Your environment will be cleared completely. The deployment package, uploaded files, and database will be removed. If you are uploading data to the production environment, any published app services will be unpublished.

You can upload two types of data:

* **Database**
* **Uploaded files** (*zip* or *tar.gz*)

#### 3.2.2 Uploading Data in Mendix Cloud V4
In Mendix Cloud V4, the upload functionality is symmetrical equivalent of the download function. This means there is no need to stop the application before uploading data. Instead, the upload will create a new backup item in your backup list, which you can then restore via the regular restore process. This will ensure less downtime for your application. 

Anything you can download you can also upload again. This means you can upload:
* **Full Snapshot**
* **Database Only**
* **Files Only**

Please note that uploading a **Files Only** archive will result in an backup item with an exclamation mark and a warning message. Since the archive does not contain a database, it is not possible to restore it. This functionality can be used to move File Documents from one environment to another, especially if you have a lot of File Documents. It will still be necessary to upload a **Database Only** archive to make sure the database can be restored. 

### 3.3 Restoring a Backup

You can choose the **destination** to which you want the environment to restore the backup. This allows you to, for example, restore a production environment backup to an acceptance environment.

If you restore a backup that was originally deployed on an older Modeler version, you will get a warning. You can still restore the backup, but you have to deploy the older model later on. 

{{% alert type="info" %}}
In Mendix Cloud V4, if the restore takes too long, the system will show a timeout message. The restore will continue behind the scenes. You can track the progress of the restore by inspecting your database free disk space graphs. while the database free disk space keeps decreasing, the restore is still in progress. If the database free disk space is constant, the restore has stopped and you can try to start your application. If this happens regularly you may consider upgrading to a database plan with more CPU cores, so the restore can be executed faster.
{{% /alert %}}

### 3.4 Downloading a Backup

These are the options:

* **Full Snapshot**
* **Database Only**
* **Files Only**

{{% alert type="info" %}}
As the download files are generated "on the fly" (meaning, while in progress), it is not possible to estimate the file size before downloading. Your browser will not show a progress bar.
{{% /alert %}}

## 4 Backup Details

When you click **Details**, you can view the following details:

Backup Details | Description |
:---|:---|
**Status** | The status of the backup. Backups can have the status of **Queued**, **Running**, **Failed**, and **Completed**
**Created by** | The name of the person who created the backup. Automated system backups are named **Nightly**
**Date** | The creation date of the backup
**Expires on** | The date on which the backup will be removed from the system
**Model version** | The version of the deployment package used during backup creation
**Comment** | A specific comment added to the backup

At the bottom of the screen, you can click **Delete** to delete this particular backup.

## 5 Related Content

* [How to Create a Backup](/developerportal/howto/how-to-create-backup)
* [How to Download a Backup](/developerportal/howto/how-to-download-a-backup)
* [How to Restore a Backup](/developerportal/howto/how-to-restore-a-backup)
