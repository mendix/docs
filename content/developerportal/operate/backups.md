---
title: "Backups"
category: "Operations"
menu_order: 40
description: "The Backups page of the Developer Portal described."
tags: ["Operate", "App", "Developer Portal", "Backup"]
---

## 1 Introduction

Backups in the Mendix Cloud have two parts: database and file documents. A backup is created every night or on-demand, as described in section 3, [Backups](#backups). A full backup of the database is made. File documents are backed up incrementally. 

Additionally, a replication/failover add-on can be purchased that will enable incremental backups with a 15 minute interval for both the database and file documents.

## 2 Creation and Retention Schedules

The pruning schedule applies to nightly backups *and* backups initiated by users. If you want to keep a backup for longer than scheduled, you will have to download it.

The following backups are retained:

* Nightly backups: two weeks
* Weekly backups (Sunday night): three months
* Monthly backups (First Sunday night of the month): one year
* Manual (user-initiated) backups: three months

The start time of nightly backups is between 21:00 and 05:00 **UTC**.

## 3 Backups{#backups}

The **Backups** page under the **Operate** category presents options for managing your backups. These are described below.

### 3.1 Create Backup

This will automatically generate a backup from your application data. See [Create a Backup](create-backup).

### 3.2 Upload Backup

The sections below present details on uploading data in recent Mendix Cloud versions.

#### 3.2.1 Uploading Data in Mendix Cloud V4

In **Mendix Cloud V4**, the upload will create a new backup item in your backup list, which you can then restore via the regular restore process. This will ensure less downtime for your application. 

Anything you can download you can also upload again, which means you can upload the following:

* **Full Snapshot**
* **Database Only**
* **Files Only**

{{% alert type="info" %}}
Uploading a **Files Only** archive will result in a backup item with an exclamation mark and a warning message. Since the archive does not contain a database, it is not possible to restore it. This functionality can be used to move file documents from one environment to another (especially useful if you have a lot of file documents). It will still be necessary to upload a **Database Only** archive to make sure the database can be restored.
{{% /alert %}}

#### 3.2.2 Uploading Data in Mendix Cloud V3

{{% alert type="warning" %}}
In **Mendix Cloud v3**, this will *not* add a backup to the backup list but directly update the application with the newly uploaded data.

Your environment will be cleared completely. The existing deployment package, uploaded files, and database will be removed. If you are uploading data to the production environment, any published app services will be unpublished.
{{% /alert %}}

You must stop the application before executing this process. This functionality is used to transfer data from your local or on-premises application to the cloud environment.

You can upload two types of data:

* **Database**
* **Uploaded files** (*zip* or *tar.gz*)

### 3.3 Download Backup

You can download one of the following: 

* **Full Snapshot**
* **Database Only**
* **Files Only**

See [Download a Backup](download-backup) for more information.

{{% alert type="info" %}}
As the download files are generated "on the fly" (meaning, while in progress), it is not possible to estimate the file size before downloading. Your browser will not show a progress bar.
{{% /alert %}}

### 3.4 Restore Backup

You can choose the **destination** environment to which you want to restore the backup. This allows you to, for example, restore a production environment backup to an acceptance environment.

If you restore a backup that was originally deployed with an older Modeler version, you will get a warning. You can still restore the backup, but you will have to deploy the older model later on. 

{{% alert type="info" %}}
In Mendix Cloud V4, if the restore takes too long, the system will show a timeout message. The restore will continue behind the scenes, and you can track the progress of the restore by inspecting your database free disk space graphs. While the database free disk space keeps decreasing, the restore is still in progress. If the database free disk space is constant, the restore has stopped and you can try to start your application. If this happens regularly, consider upgrading to a database plan with more CPU cores, so that the restore can be executed faster.
{{% /alert %}}

See [Restore a Backup](restore-backup) for more information.

### 3.5 Details

When you click **Details**, you can view the following details:

Backup Details | Cloud Version | Description
:---|:---|:---
**Origin of Environment** | V3 | From which environment this backup was made
**Status** | V3 & V4 | The status of the backup. Backups can have the status of **Queued**, **Running**, **Failed**, and **Completed**
**Created by**/ <br /> **Type** | V3 <br /> V4 | The name of the person who created the backup. Automated system backups are named **Nightly**
**ID**/ <br /> **Snapshot id** | V3 <br /> V4 | Unique identifier for the backup *snapshot*
**Date**/ <br /> **Created on** | V3 <br /> V4 | The creation date of the backup
**Expires on** | V3 & V4 | The date on which the backup will be removed from the system
**Model version** | V3 & V4 | The version of the deployment package used during backup creation
**Comment** | V3 & V4 | A specific comment added to the backup

At the bottom of the screen, you can click **Delete** to delete this particular backup.

## 4 Related Content

* [How to Create a Backup](create-backup)
* [How to Download a Backup](download-backup)
* [How to Restore a Backup](restore-backup)
* [How to Restore a Backup Locally(database-size-reduction)
* [Database Size Reduction](database-size-reduction)
