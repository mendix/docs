---
title: "Backups"
url: /developerportal/operate/backups/
weight: 13
description: "Describes the Backups page of Apps."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

Backup snapshots for apps running in Mendix Cloud are automatically created every night, week, and month. They can also be created on demand, as described in the [Backups](#backups) section, below.

Backup snapshots contain both the database and file documents referred to in the database.

{{% alert color="info" %}}This page describes backups for apps deployed to Mendix Cloud. If your app is deployed to SAP Business Technology Platform (SAP BTP) instead, the **Backups** page links to the SAP BTP cockpit.{{% /alert %}}

## Creation and Retention Schedules

Backups are created and retained as follows:

| Frequency | Timing                                                     | Type                    | Retention Period |
| --------- | ---------------------------------------------------------- | ----------------------- | ---------------- |
| Nightly   | As specified in [Nightly Backups](#nightly-backups), below | Automatic               | Two weeks        |
| Weekly    | Each Sunday                                                | Automatic               | Three months     |
| Monthly   | First Sunday of each month                                 | Automatic               | One year         |
| On demand | On demand                                                  | Manual (user initiated) | Three months     |

Each backup is automatically deleted when its retention period is over, but you can always manually delete it before then. By default, backups are retained for exactly the specified period; for example, a weekly backup created at 3:18 on December 3 expires at 3:18 on March 3. If you want to keep a backup for longer than scheduled, you can download the backup to your computer.

{{% alert color="info" %}}Automatic backups are only created when the app is deployed and running.{{% /alert %}}

### Nightly Backups{#nightly-backups}

The **Start Time** of nightly backups in UTC is shown below. The **Local Time** indicates the time at the regional data center; this may vary if **Summer Time** or other adjustments are in place.

The **Estimated Duration** indicates the period during which backups are expected to be taken from apps in that region. Your app can be backed up at any time during this period; the exact period during which backups are taken can change due to factors at the data center that are outside Mendix's control.

| Region      | Replication Region | Start Time (UTC) | Local Time | Estimated Duration |
| ----------- | ------------------ | ---------------- | ---------- | ------------------ |
| Bahrain     | Mumbai             | 03:00            | 06:00      | 1 hour             |
| Canada      | Canada West        | 05:00            | 00:00      | 1 hour             |
| Cape Town   | Frankfurt          | 02:00            | 04:00      | 1 hour             |
| Dublin      | Frankfurt          | 23:00            | 00:00      | 3 hours            |
| Frankfurt   | Dublin             | 00:00            | 01:00      | 3 hours            |
| Jakarta     | Singapore          | 00:00            | 07:00      | 1 hour             |
| London      | Frankfurt          | 23:00            | 23:00      | 2 hours            |
| Mumbai      | Hyderabad          | 19:30            | 01:00      | 1 hour             |
| N. Virginia | N. California      | 05:00            | 00:00      | 4 hours            |
| Oregon      | Ohio               | 07:00            | 00:00      | 1 hour             |
| Osaka       | Tokyo              | 00:00            | 09:00      | 1 hour             |
| São Paulo   | N. Virginia        | 00:00            | 21:00      | 1 hour             |
| Seoul       | Singapore          | 00:00            | 09:00      | 1 hour             |
| Singapore   | Sydney             | 17:00            | 01:00      | 1 hour             |
| Sydney      | Melbourne          | 07:00            | 17:00      | 1 hour             |
| Tokyo       | Osaka              | 16:00            | 01:00      | 1 hour             |
| UAE         | Mumbai             | 00:00            | 04:00      | 1 hour             |

Nightly backups start once an app has been successfully deployed to and started in the environment.

If a nightly backup fails, it is retried two more times.

### Notes on Retention

The monthly backup occurs on the first Sunday of the month. If the first nightly backup takes place after the first Sunday in the month, then there is no monthly backup retained for that month. In this case, you can download a copy of a nightly or weekly backup if you need to retain a backup for longer than three months.

## Backups{#backups}

The **Backups** page presents options for managing your backups. These are described below.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/backup-controls.png" alt="" >}}

### Create Backup

Clicking **Create Backup** automatically generates a backup snapshot from your application data. For more information, see [Creating a Backup](/developerportal/operate/create-backup/).

### Upload Backup {#upload}

To upload a backup, click **Upload Backup** and then select the backup archive you want to upload. For information on downloading backup archives, see [Download Backup](#download-backup), below.

You can upload archives containing the following:

* Full Snapshot
* Database Only

{{% alert color="info" %}}
**Files Only** archives are meant for offline archiving purposes only. Because this archive type does not contain a database, it is not possible to restore it.
{{% /alert %}}

Uploading a backup creates a new backup item in your backup list. You can then restore the new backup item via the regular restore process (as described in [Restore Backup](#restore-backup), below). This ensures less downtime for your application.

### Download Backup {#download-backup}

To download a backup, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) > **Download** on the backup you want to download.

You can download a backup archive containing one of the following: 

* Full Snapshot
* Database Only
* Files Only

For more information, see the [Downloading a Backup](/developerportal/operate/download-backup/) page.

{{% alert color="info" %}}
Because the download archive is generated on request, it is not possible to estimate the file size before requesting a download.
{{% /alert %}}

### Restore Backup {#restore-backup}

To restore a backup, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) > **Restore** on the backup you want to restore.

You can choose the destination environment to which you want to restore the backup snapshot. This allows you to, for example, restore a production environment backup to an acceptance environment.

If you restore a backup snapshot that was originally deployed with an older Mendix version, you get a warning. You can still restore the data, but you will have to deploy the older model later on.

{{% alert color="info" %}}
If the restore takes too long, the system shows a timeout message. In this case, the restore continues behind the scenes; you can track the progress of the restore by inspecting your database free disk space graphs. As long as the database free disk space keeps decreasing, the restore process is still in progress. If the database free disk space is constant, that means the restore process is finished, and you can try to start your application. If you regularly see the timeout message, consider upgrading to a database plan with more CPU cores; this allows the restore process to happen faster.
{{% /alert %}}

For more information, see the [Restoring a Backup](/developerportal/operate/restore-backup/) page.
 
### Details {#backups-details}

You can view details of a backup by clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) and then **Details**. You will see the following details:

| Backup Details                      | Description                                                                                   |
| :---------------------------------- | :-------------------------------------------------------------------------------------------- |
| **Status**                          | The status of the backup (**Queued**, **Running**, **Failed**, or **Completed**)              |
| **Type**     | The name of the person who created the backup; automated system backups are named **Nightly** |
| **Snapshot id**      | A unique identifier for the backup snapshot                                                   |
| **Created on**     | The creation date of the backup                                                               |
| **Expires on**                      | The date when the backup will be removed from the system                                      |
| **Model version**                   | The version of the deployment package used during backup creation                             |
| **Snapshot Size Uncompressed (MB)** | The size of database dump and files of the snapshot in MB                                     |
| **Comment**                         | A comment added to the backup                                                                 |

{{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/backup-details.png" alt="Backup Details" max-width=60% class="no-border" >}}

## Data Location {#data-location}

Backups are always stored in at least one secondary location, separate from the primary hosting location. Each individual backup is immutable; in other words, once it has been written to Mendix’s storage location, it can no longer be modified or overwritten.

For some regions, data is always stored in the same political region. This applies to the following regions:

* Data in the EU, including backups, stays within the EU
    * Data in the EU is not backed up in the UK
    * Data in the UK is backed up in the EU
* Data in the US, including backups, stays within the US
* Data in Japan is backed up in Japan

## Limitations

### Performance {#limitations-performance}

Mendix Cloud backups that contain a very large number of files (that is, greater than about 50,000) experience slow performance for all backup operations (create, download, restore, and upload). This is because of the inherent overhead associated with each file. As the number of files increases, the overhead becomes quite significant and can add several hours to the duration.

### Customizations {#limitations-customizations}

Customization of the databases of apps in Mendix Cloud is not supported. This includes, but is not limited to, installing extensions and enabling or disabling specific features. Mendix does not support uploading and restoring backups of customized databases to Mendix Cloud. If you attempt to restore a backup of a customized database, the restore will likely fail. Note that customizing the database of an app in Mendix Cloud breaks the support and SLA for the app.

## Read More

* [Creating a Backup](/developerportal/operate/create-backup/)
* [Downloading a Backup](/developerportal/operate/download-backup/)
* [Restoring a Backup](/developerportal/operate/restore-backup/)
* [Restoring a Backup Locally](/developerportal/operate/restore-backup-locally/)
