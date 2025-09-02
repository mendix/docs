---
title: "Backups for Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/backups/
weight: 13
description: "Describes the backups functionality for apps running on Mendix on Azure."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

For apps running in Mendix on Azure, the [Backups](/developerportal/operate/backups/) functionality enables you to create and restore database or file document backups. Other backup functionalities, such as uploading and downloading backup snapshots, or scheduling nightly backups, are not yet supported for Mendix on Azure. 

Backup snapshots contain both the database and file documents referred to in the database.

## Enabling Backups

If you would like to enable creating and restoring backups, select **Try new Backup and Restore** on the **Backups** page. 

{{< figure src="/attachments/deployment/mx-azure/backups/backup-controls.png" alt="" >}}

You must have permission to **Manage Apps Backups** for the namespace.

## Creating a Backup {#creating-backup}

1. In the [Apps](https://sprintr.home.mendix.com) page, select your app.
2. In the navigation pane, click **Backups**.
3. Select the environment for which you want to create a backup from the dropdown on the right. 

{{% alert color="info" %}}
You may not create backups while the environment status is any of the following:

* Environment creation is in progress
* Environment creation failed
* A deployment package is being deployed in the environment
* The environment is in transition state (runtime is processing)
{{% /alert %}}

4. Click **Create Backup**. 
5. To check the status of the backup, see the **Status** column. 

{{% alert color="info" %}}
If you want to restart your environment after creating a backup archive, wait until the backup completes. Tables are locked while the database is in the process of creating a backup, so you may receive a timeout error if you try to start your environment while the backup is being created.
{{% /alert %}}

### Backup Details {#backups-details}

You can view details of a backup by clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) and then **Details**. The following details are displayed:

| Backup Details | Description |
| --- | --- |
| **Status** | The status of the backup (**Processing**,**Failed**, or **Finished**) |
| **Snapshot ID** | A unique identifier for the backup snapshot |
| **Created on** | The creation date and time of the backup |
| **Deployment Package** | The version of the deployment package used during backup creation |
| **Comment** | A comment added to the backup |

{{< figure src="/attachments/deployment/mx-azure/backups/backup-details.png" alt="Backup Details" max-width=60% class="no-border" >}}

## Deleting a Backup {#backups-delete}

To delete a backup snapshot, perform the following steps:

1. Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) by a backup that you want to delete.
2. Click **Delete**.

The backup file is retained until you delete it from the portal. 

## Restoring a Backup {#restore-backup}

You can restore a backup that has been created in your Mendix on Azure environment. Backups from other cloud providers are not supported.

{{% alert color="info" %}}
You can only restore a backup if you have **Manage Apps Backups and Stop Apps** permissions in the respective namespace.
{{% /alert %}}

To restore a backup, perform the following steps:

1. If your app is running, stop it by clicking **Stop Application**.
2. Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) by a backup that you want to restore.

    If you select a backup snapshot that was originally deployed with a different Mendix version, you will see a warning. You can still restore the data, but you must deploy the same model afterwards.
   
4. Click **Restore**.

    {{< figure src="/attachments/deployment/mx-azure/backups/backups-restore.png" alt="Backup Restore" max-width=60% class="no-border" >}}

5. Choose the destination environment to which you want to restore the backup snapshot. This allows you to, for example, restore a production environment backup to an acceptance environment.

{{% alert color="info" %}}
Do not update the environment while the restore process is in progress.
{{% /alert %}}

Your environment details page displays a message while the backup is being restored. After the restore process is completed, the environment activity log shows the status as **FINISHED**. If a backup restore fails, the backup activity log of your environment shows the status as **FAILED**.

## Known Limitations
 
* If a backup restore fails, all data that was restored until the point of failure is present in the database. This leaves the database only partially restored.
* There is currently no API support for the backup and restore process.
* The portal interface appears to allow restoring backups across different namespaces, but in reality this operation is unsupported. Backup and restore operations must be performed within the same namespace only.
