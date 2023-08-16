---
title: "Backups"
url: /developerportal/operate/backups/
category: "Operations"
weight: 40
description: "Describes the Backups page of the Developer Portal."
tags: ["Operate", "App", "Developer Portal", "Backup"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Backup snapshots for apps running in the Mendix Cloud are created every night or on demand, as described in the [Backups](#backups) section, below.

Backup snapshots contain both the database and file documents referred to in the database.

## 2 Creation and Retention Schedules

The pruning schedule applies to nightly backups and backups initiated by users. If you want to keep a backup for longer than scheduled, you will have to download it.

The following backups are retained:

* Nightly backups: 30 days
* Weekly backups (Sunday night): three months
* Monthly backups (First Sunday night of the month): one year
* Manual (user-initiated) backups: three months

### 2.1 Nightly Backups

The **Start Time** of nightly backups in UTC is shown below. The **Local Time** indicates the time at the regional data center – this may vary if *Summer Time* or other adjustments are in place. The **Estimated Duration** indicates the period during which backups are expected to be taken from apps in that region – your app can be backed up at any time during this period and the exact period during which backups are taken can change due to factors at the data center which are outside Mendix's control.

| Region | Replication Region | Start Time (UTC) | Local Time | Estimated Duration |
| --- | --- | --- | --- | --- |
| Bahrain | Mumbai | 03:00 | 06:00 | 1 hour |
| Canada | Oregon | 05:00 | 00:00 | 1 hour |
| Cape Town | Frankfurt | 02:00 | 04:00 | 1 hour |
| Dublin | Frankfurt | 23:00 | 00:00 | 3 hours |
| Frankfurt | Dublin | 00:00 | 01:00 | 3 hours |
| London | Frankfurt | 23:00 | 23:00 | 2 hours |
| Mumbai | Hyderabad | 19:30 | 01:00 | 1 hour |
| N. Virginia | N. California | 05:00 | 00:00 | 4 hours |
| Oregon | Ohio | 07:00 | 00:00 | 1 hour |
| São Paulo | N. Virginia | 00:00 | 21:00 | 1 hour |
| Singapore | Sydney | 17:00 | 01:00 | 1 hour |
| Sydney | Melbourne | 07:00 | 17:00 | 1 hour |
| Tokyo | Osaka | 16:00 | 01:00 | 1 hour |

Nightly backups will start once an app has been successfully deployed to, and started in, the environment.

If the nightly backup fails, it is retried two more times.

### 2.2 Notes on Retention

The Monthly backup is from the first Sunday in the month. If the first nightly backup takes place after the first Sunday in the month, then there are no monthly backup retained for that month. In this case, you can download a copy of a nightly or weekly backup if you need to retain a backup for longer than three months.

## 3 Backups{#backups}

The **Backups** page presents options for managing your backups. These are described below.

### 3.1 Create Backup

This will automatically generate a backup snapshot from your application data. See [Create a Backup](/developerportal/operate/create-backup/).

### 3.2 Upload Backup {#upload}

The sections below present details on uploading data in recent Mendix Cloud versions.

#### 3.2.1 Uploading Data in Mendix Cloud

In the **Mendix Cloud**, the upload creates a new backup item in your backup list, which you can then restore via the regular restore process. This ensures less downtime for your application. 

Anything you can download you can also upload again, which means you can upload archives containing the following:

* **Full Snapshot**
* **Database Only**
* **Files Only**

{{% alert color="info" %}}
Uploading a **Files Only** archive resulta in a backup item with an exclamation mark and a warning message. Since the archive does not contain a database, it is not possible to restore it.
{{% /alert %}}

### 3.3 Download Backup {#download-backup}

You can download a backup archive containing one of the following: 

* **Full Snapshot**
* **Database Only**
* **Files Only**

For more information, see [Download a Backup](/developerportal/operate/download-backup/).

{{% alert color="info" %}}
As the download archive is generated on request, it is not possible to estimate the file size before requesting a download.
{{% /alert %}}

### 3.4 Restore Backup

You can choose the **destination** environment to which you want to restore the backup snapshot. This allows you to, for example, restore a production environment backup to an acceptance environment.

If you restore a backup snapshot that was originally deployed with an older Mendix version, you get a warning. You can still restore the data, but you will have to deploy the older model later on. 

{{% alert color="info" %}}
If the restore takes too long, the system shows a timeout message. The restore continues behind the scenes, and you can track the progress of the restore by inspecting your database free disk space graphs. While the database free disk space keeps decreasing, the restore process is still in progress. If the database free disk space is constant, the restore process is finished and you can try to start your application. If this happens regularly, consider upgrading to a database plan with more CPU cores, so that the restore process can be executed faster.
{{% /alert %}}

See [Restore a Backup](/developerportal/operate/restore-backup/) for more information.

### 3.5 Details

When you click **Details**, you can view the following details:

| Backup Details | Description |
| :--- | :--- |
| **Status** | The status of the backup. Backups can have the status of **Queued**, **Running**, **Failed**, and **Completed** |
| **Created by**/ <br /> **Type** | The name of the person who created the backup. Automated system backups are named **Nightly** |
| **ID**/ <br /> **Snapshot id** | A unique identifier for the backup *snapshot* |
| **Date**/ <br /> **Created on** | The creation date of the backup |
| **Expires on** | The date on which the backup will be removed from the system |
| **Model version** | The version of the deployment package used during backup creation |
| **Snapshot Size Uncompressed (MB)** | The size of database dump and files of the snapshot in MB |
| **Comment** | A specific comment added to the backup |

At the bottom of the screen, you can click **Delete** to delete this particular backup.

{{< figure src="/attachments/developerportal/operate/backups/backup-details.png" alt="Backup Details" >}}

## 4 Limitations

Mendix Cloud backups that contain a very large number of files (that is, greater than about 50,000) will experience slow performance for all backup operations (create, download, restore, and upload). This is because of the inherent overhead associated with each file; as the number of files increases, this overhead becomes quite significant, and can be in the order of hours.

## 5 Read More

* [How to Create a Backup](/developerportal/operate/create-backup/)
* [How to Download a Backup](/developerportal/operate/download-backup/)
* [How to Restore a Backup](/developerportal/operate/restore-backup/)
* [How to Restore a Backup Locally](/developerportal/operate/restore-backup-locally/)
