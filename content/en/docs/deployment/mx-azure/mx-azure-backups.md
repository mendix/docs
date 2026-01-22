---
title: "Backups for Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/backups/
weight: 13
description: "Describes the backups functionality for apps running on Mendix on Azure."
---

## Introduction

Mendix on Azure integrates backup and restore functionality that allows you to create and restore database snapshots for your Mendix application environments hosted on the platform.

Backup snapshots include both the database and the file documents associated with the Mendix app environment.

## Enabling Backups

To start using backups, select **Try new Backup and Restore** on the **Backups** page in the Mendix for Kubernetes portal.

{{< figure src="/attachments/deployment/mx-azure/backups/backup-controls.png" alt="" >}}

You must have **Manage Apps Backups** permission for the namespace to use this feature.

## Creating a Backup {#creating-backup}

1. On the [Apps](https://sprintr.home.mendix.com) page, select your app.
2. Click **Backups** in the navigation pane.
3. Choose the environment to back up from the environment dropdown.

    {{% alert color="info" %}}
<!-- Need to do it this way to satisfy linter and get correct format-->
Backups cannot be created while the environment is in any of these states:

* Creation in progress
* Creation failed
* Deployment package is being deployed

    {{% /alert %}}

1. Click **Create Backup**.
1. Monitor progress in the **Status** column.

{{% alert color="info" %}} 
Tables are locked during backup creation, so if you attempt to start the environment while a backup is in progress, you may encounter a timeout error. Wait for backup completion before restarting. 
{{% /alert %}}

### Backup Snapshot Details {#backups-details}

Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) > **Details** to view:

| Backup Detail | Description |
| --- | --- |
| **Status** | Backup status: **Processing**, **Failed**, or **Finished** |
| **Snapshot ID** | Unique identifier |
| **Created on** | Date and time created |
| **Deployment Package** | Version at backup creation |
| **Comment** | User-added comment |

{{< figure src="/attachments/deployment/mx-azure/backups/backup-details.png" alt="Backup Details" max-width=60% class="no-border" >}}

## Deleting a Backup Snapshot {#backups-delete}

To delete a backup snapshot, perform the following steps:

1. Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) next to the desired backup.
2. Click **Delete**.

## Restoring a Backup Snapshot {#restore-backup}

{{% alert color="info" %}} 
Restore requires **Manage Apps Backups** and **Stop Apps** permissions on the namespace. 
{{% /alert %}}

To restore a backup snapshot, perform the following steps:

1. Stop the app if running by clicking **Stop Application**.
2. Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) next to the backup to restore.

    If restoring a backup from a different Mendix model version, you will be warned. You must deploy the matching model after restore.

3. Click **Restore**.

    {{< figure src="/attachments/deployment/mx-azure/backups/backups-restore.png" alt="Backup Restore" max-width=60% class="no-border" >}}

4. Select the destination environment (for example, restoring production backup to acceptance).

{{% alert color="info" %}} 
Avoid modifying the environment during restore. 
{{% /alert %}}

The environment details page will show restore progress. Activity log shows **FINISHED** on success or **FAILED** on failure.

## Uploading a Backup Snapshot {#upload-backup}

To upload a backup, perform the following steps:

1. Click **Upload Backup**.
2. Select the archive to upload (must contain a Full Snapshot).

Uploaded backups appear in the backup list and can be restored normally.

{{% alert color="info" %}} 
You can upload backups from Mendix Cloud to migrate app data to Mendix on Azure. 
{{% /alert %}}

## Downloading a Backup {#download-backup}

To download a backup, perform the following steps:

1. Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) > **Download** on the desired backup.
2. Click **Start** to request the download.
3. After processing completes, use the **Download** button to retrieve the archive.
4. Optional: Click **Show URL** to copy the download link.

{{% alert color="info" %}} 
File size cannot be estimated before request completion. 
{{% /alert %}}

Backup archives are compatible with Mendix Cloud backups allowing migration from Mendix on Azure to Mendix Cloud.

## Automated Backups Schedule

| Frequency | Timing | Type | Retention Period |
| --- | --- | --- | --- |
| Nightly | Every night | Automatic| 14 days (from previous day) |
| Weekly | Every Sunday | Automatic| 3 months (from previous day) |
| Monthly | First Sunday of each month | Automatic| 1 year (on that Sunday) |
| On demand | When triggered | Manual | 14 days (from previous day) |

Backups older than retention are deleted automatically but can be manually removed earlier. To keep backups longer, download them locally.

{{% alert color="info" %}} 
Automatic backups only run when the app is deployed. 
{{% /alert %}}

### Retention Notes

If the first nightly backup occurs after the first Sunday, no monthly backup will be retained that month. Download a nightly or weekly backup to extend retention.

## Known Limitations

* Partial data restoration may occur if a restore process fails.
* No API support exists currently for backup and restore.
* Although the portal UI suggests cross-namespace restores, only restores within the same namespace are supported.
