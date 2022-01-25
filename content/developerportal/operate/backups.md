---
title: "Backups"
category: "Operations"
menu_order: 40
description: "The Backups page of the Developer Portal described."
tags: ["Operate", "App", "Developer Portal", "Backup"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Backup snapshots are created every night or on-demand, as described in the [Backups](#backups) section, below.

Backup snapshots contain both the database and file documents referred to in the database.

## 2 Creation and Retention Schedules

The pruning schedule applies to nightly backups *and* backups initiated by users. If you want to keep a backup for longer than scheduled, you will have to download it.

The following backups are retained:

* Nightly backups: 30 days
* Weekly backups (Sunday night): three months
* Monthly backups (First Sunday night of the month): one year
* Manual (user-initiated) backups: three months

### 2.1 Nightly Backups

The **Start Time** of nightly backups in UTC is shown below. The **Local Time** indicates the time at the regional data center – this may vary if *Summer Time* or other adjustments are in place. The **Estimated Duration** indicates the period during which backups are expected to be taken from apps in that region – your app can be backed up at any time during this period and the exact period during which backups are taken can change due to factors at the data center which are outside Mendix's control.

| Region | Start Time (UTC) | Local Time | Estimated Duration |
| --- | --- | --- | --- |
| Dublin | 23:00 | 00:00 |  3 hours |
| Frankfurt | 00:00 | 01:00 | 3 hours |
| London | 23:00 | 23:00 | 2 hours |
| Oregon | 07:00 | 00:00 | 1 hour |
| Singapore | 17:00 | 01:00 | 1 hour |
| Tokyo | 16:00 | 01:00 | 1 hour |
| N. Virginia | 05:00 | 00:00 | 4 hours |

Nightly backups will start once an app has been successfully deployed to, and started in, the environment.

### 2.2 Notes on Retention

The Monthly backup is from the *first* Sunday in the month. If the first nightly backup takes place after the first Sunday in the month, then there will be no monthly backup retained for that month. In this case, you can download a copy of a nightly or weekly backup if you need to retain a backup for longer than three months.

## 3 Backups{#backups}

The **Backups** page presents options for managing your backups. These are described below.

### 3.1 Create Backup

This will automatically generate a backup snapshot from your application data. See [Create a Backup](create-backup).

### 3.2 Upload Backup

The sections below present details on uploading data in recent Mendix Cloud versions.

#### 3.2.1 Uploading Data in Mendix Cloud v4

In **Mendix Cloud v4**, the upload will create a new backup item in your backup list, which you can then restore via the regular restore process. This will ensure less downtime for your application. 

Anything you can download you can also upload again, which means you can upload archives containing the following:

* **Full Snapshot**
* **Database Only**
* **Files Only**

{{% alert type="info" %}}
Uploading a **Files Only** archive will result in a backup item with an exclamation mark and a warning message. Since the archive does not contain a database, it is not possible to restore it.
{{% /alert %}}

#### 3.2.2 Uploading Data in Mendix Cloud v3

{{% alert type="warning" %}}
Our Mendix Cloud V3 is deprecated, currently in a grace period, and will be retired at the beginning of Q3 2021. To continue running your licensed Mendix application on the Mendix Cloud, you need to migrate your app to Mendix Cloud V4. To learn more about Mendix Cloud V4 and how to migrate from Mendix Cloud V3, please visit the following page: [Migrate to Mendix Cloud V4](/developerportal/deploy/migrating-to-v4). 
{{% /alert %}}

{{% alert type="warning" %}}
In **Mendix Cloud v3**, this will *not* add a backup to the backup list but directly update the application with the newly uploaded data.

Your environment will be cleared completely. The existing deployment package, uploaded files, and database will be removed. If you are uploading data to the production environment, any published app services will be unpublished.
{{% /alert %}}

You must stop the application before executing this process. This functionality is used to transfer data from your local or on-premises application to the cloud environment.

You can upload two types of data:

* **Database**
* **Uploaded files** (*zip* or *tar.gz*)

### 3.3 Download Backup

You can download a backup archive containing one of the following: 

* **Full Snapshot**
* **Database Only**
* **Files Only**

See [Download a Backup](download-backup) for more information.

{{% alert type="info" %}}
As the download archive is generated on request, it is not possible to estimate the file size before requesting a download.
{{% /alert %}}

### 3.4 Restore Backup

You can choose the **destination** environment to which you want to restore the backup snapshot. This allows you to, for example, restore a production environment backup to an acceptance environment.

If you restore a backup snapshot that was originally deployed with an older Mendix version, you will get a warning. You can still restore the data, but you will have to deploy the older model later on. 

{{% alert type="info" %}}
In Mendix Cloud v4, if the restore takes too long, the system will show a timeout message. The restore will continue behind the scenes, and you can track the progress of the restore by inspecting your database free disk space graphs. While the database free disk space keeps decreasing, the restore is still in progress. If the database free disk space is constant, the restore has stopped and you can try to start your application. If this happens regularly, consider upgrading to a database plan with more CPU cores, so that the restore can be executed faster.
{{% /alert %}}

See [Restore a Backup](restore-backup) for more information.

### 3.5 Details

When you click **Details**, you can view the following details:

Backup Details | Cloud Version | Description
:---|:---|:---
**Origin of Environment** | v3 | From which environment this backup was made
**Status** | v3 & v4 | The status of the backup. Backups can have the status of **Queued**, **Running**, **Failed**, and **Completed**
**Created by**/ <br /> **Type** | v3 <br /> v4 | The name of the person who created the backup. Automated system backups are named **Nightly**
**ID**/ <br /> **Snapshot id** | v3 <br /> v4 | Unique identifier for the backup *snapshot*
**Date**/ <br /> **Created on** | v3 <br /> v4 | The creation date of the backup
**Expires on** | v3 & v4 | The date on which the backup will be removed from the system
**Model version** | v3 & v4 | The version of the deployment package used during backup creation
**Snapshot Size Uncompressed (MB)** | v4 | The size of database dump and files of the snapshot in MB
**Comment** | v3 & v4 | A specific comment added to the backup

At the bottom of the screen, you can click **Delete** to delete this particular backup.

![Backup Details](attachments/backups/backup-details.png)

## 4 Known issues

**Mendix Cloud v4** backups that contain a very large number of files (that is, greater than about 50,000) will experience slow performance for _all_ backup operations (create, download, restore, and upload). This is because of the inherent overhead associated with each file; as the number of files increases, this overhead becomes quite significant, and can be in the order of hours.

## 5 Read More

* [How to Create a Backup](create-backup)
* [How to Download a Backup](download-backup)
* [How to Restore a Backup](restore-backup)
* [How to Restore a Backup Locally](restore-backup-locally)
