---
title: "Restoring a Backup"
url: /developerportal/operate/restore-backup/
weight: 30
description: "How to restore a backup."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

This page describes how to restore a backup to Mendix Cloud.

You can restore a backup that has been stored in Mendix Cloud, associated with the environment from which it was made.

For licensed nodes, it is also possible to restore a backup that has been stored locally. For example, you can restore a backup that has been [downloaded from Mendix Cloud](/developerportal/operate/download-backup/).

{{% alert color="info" %}}
You can only restore a backup if you have **Access to Backups** permissions for the target node. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).
{{% /alert %}}

## Important Notes

### Transferring Data Between Apps

You cannot transfer data from one app to another by restoring a backup from one app to a different app. This is because each app labels the entities uniquely, even if the name in the domain model is the same. For more information, see [Data Storage](/refguide/data-storage/). If you want to copy data to another app, you can use the [Database Replication](/appstore/modules/database-replication/) module.

### Database Size 

If the database in your plan is not large enough to contain all the restored data, the restore operation will fail. This leaves the database only partially restored. If this occurs, you will need to upgrade your plan to increase the database size or restore a smaller database to ensure that the database is complete.

Your database must be large enough to hold the decompressed size of the database as stored in the [db folder](#db-folder) of your backup file, plus an overhead of 2.25 GB used during the restoration process. The decompressed database size can be determined by [restoring the backup locally](/developerportal/operate/restore-backup-locally/) and using the pgAdmin statistics page.

Contact [Mendix Support](https://support.mendix.com/) if you need further assistance.

## Restoring a Backup for the Same Licensed Cloud Node{#restore-cloud-backup}

Mendix Cloud automatically performs backups every night, and you can also manually trigger a backup. If you want to restore one of these backups to the node from which it was backed up, follow the steps below.

If you want to restore a backup to a different cloud node, or have your backup stored locally, then see [Restoring a Backup for a Different Licensed Cloud Node](#restore-local-backup), below.

1. From [Apps](https://sprintr.home.mendix.com), open your licensed app.
1. Use the navigation panel to go to your app's **Backups** page.
1. In the upper-right corner of the screen, select the environment to which the backup should be restored (for example, **Acceptance**).

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/restore-backup/environment.png" max-width=25%  class="no-border" >}}

1. On the backup you want to restore, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) and select **Restore** from the drop-down list.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/restore-backup/backupoptions.png" alt="" class="no-border" >}}

1. Confirm the backup restore by clicking **Restore Backup**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/restore-backup/restore-backup.png" alt="" max-width=60% >}}

{{% alert color="info" %}}
If the app is still running, you have to stop it by clicking **Stop Application**. Then click **Restore Backup** again.
{{% /alert %}}

{{% alert color="warning" %}}
You can choose to restore only the database by selecting **DB only restore**. Doing a database-only restore does not restore any of your files, leading to a risk that data will be missing from your app or that your app will not work as expected. Use this option with caution.
{{% /alert %}}

## Restoring a Backup for a Different Licensed Cloud Node{#restore-local-backup}

To transfer backups between environments, you need a downloaded backup file (*.db* or *.gz*) stored locally on your computer. This could also be the case if you want to restore a backup that has expired and been deleted from Mendix Cloud.

{{% alert color="warning" %}}
You can only restore data to an existing database. This means that there must have been an app deployed to the licensed node before you attempt to restore data. If it is a new node environment, you must deploy an app to it before attempting to restore data to the node.

However, the app previously deployed to the node does not need to have had the same Domain Model as the data you are restoring.
{{% /alert %}}

1. From [Apps](https://sprintr.home.mendix.com), open your app.
1. Use the navigation panel to go to your app's **Backups** page.
1. Select the environment to which the backup should be restored (for example, **Acceptance**).
1. Click **Upload Archive**. The upload creates a new backup item in your backup list, which you can then restore via the regular restore process. This ensures less downtime for your application.
1. Upload the *.db* or *.gz* backup file.
1. You will now need to restore your backup that is held in Mendix Cloud, as described in [Restoring a Backup for the Same Licensed Cloud Node](#restore-cloud-backup), above.

## Restoring a Backup for a Free App

{{% alert color="info" %}}For a Free App, you can only restore available backups that are made from the app and held in the cloud. It is not possible to upload a backup that was created or stored elsewhere. It also is not possible to manually create a backup.{{% /alert %}}

1. From [Apps](https://sprintr.home.mendix.com), open your Free App.
1. Use the navigation panel to go to your app's **Backups** page.
1. Select the environment to which the backup should be restored (for example, **Acceptance**).
1. On the backup you want to restore, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) and select **Restore** from the drop-down list.
1. Confirm the backup restore by clicking **Restore Backup**.

{{% alert color="info" %}}
If the app is still running, you have to stop it by clicking **Stop Application**. Then click **Restore Backup** again.
{{% /alert %}}

## Restoring After a Backup Fails{#restore-after-fail}

If a backup restore fails, the failure is logged in your app's **Backup Activity** log, which you can view on the **Backups** page when you open your app in [Apps](https://sprintr.home.mendix.com/). If this happens, all data that was restored until the point of failure will be present in your database. This will leave the database only partially restored; not all data from the backup file will be present in your database. 

Your database must be large enough to hold the decompressed size of the database as stored in your backup file's [db folder](#db-folder), plus an overhead of 2.25 GB. This overhead is employed during the restoration process. 

For example, if you run your app in a S21 Cloud Resource Pack, then your database size is 10 GB. To be able to restore a backup, the size of your decompressed database in the **db** folder must not be larger than 7.75 GB to allow for the overhead of 2.25 GB. For more information on the resource pack sizes Mendix offers, see [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack). 

In the event that a backup restore fails in this way, you will need to retry the backup restore. Before you retry, ensure your database meets the size requirements detailed above.

Contact [Mendix Support](https://support.mendix.com/) if you need further assistance with this issue.

## Format of a Backup File{#format-of-backup-file}

You may want to restore a backup that has been created on another platform (for example, an on-premises deployment). In this case, you will have to construct a backup file that Mendix Cloud will recognize. It is possible to upload a **Database Only** or **Full Snapshot** backup file.

### Database Only Format{#database-only}

A **Database Only** backup file is a *.backup* file (for example, *database-fc9e126f-201811210121.backup*).

### Full Snapshot Format{#full-snapshot}

#### .tar.gz Archive

A **Full Snapshot** backup file is a *.tar.gz* file (for example, *files_and_database-fc9e126f-201811210121.tar.gz*).

#### .tar Archive

The *.tar* archive within the *.tar.gz* archive (for example, *files_and_database-fc9e126f-201811210121.tar*) contains a [db](#db-folder) folder, a [tree](#tree-folder) folder, and a [.metadata](#metadata) file, like this:

{{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/restore-backup/tar-gz-structure.png" class="no-border" >}}

This contains the following files:

```shell
.metadata
db/db.backup
tree/0d/3e/0d3e301f-5551-46f8-ad44-8de2be084c95
tree/1f/bd/1fbdf930-67f9-47ee-b30e-e84c4c983e85
tree/22/70/22708b5d-3e9e-40ba-95e3-4a2ef1a02db3
tree/28/02/280283d7-0807-44e3-b80e-f699cee91ffa
tree/37/8c/378c70d9-605b-4cb4-a223-26e718cec733
tree/46/9c/469c9c80-34d3-4810-8494-86b63eb37214
tree/4d/8f/4d8ffd66-7ad3-4f5c-a992-985cf360581b
```

#### .metadata File{#metadata}

This file contains JSON describing the backup. Here is an example:

```json
{
    "duration":"0",
    "dumpSize":"94769",
    "modelVersion":"1.0.0.40",
    "databaseSize":"9730584",
    "filesSize":"1346575"
}
```

#### db Folder{#db-folder}

This folder contains the *db.backup* file, which is a PostgreSQL dump file created using the command `pg_dump -O -x -Fc`.

{{% alert color="warning" %}}
If the dump does not use the custom format, then the restore will fail.

The dump must be created with `pg_dump` version 1.14 or below, which is currently bundled with PostgreSQL 12, 13, 14, and 15. If it is created with a later version, then the upload will fail.
{{% /alert %}}

#### tree Folder{#tree-folder}

This folder contains any files that are stored in external file storage; the folder is part of the *.tar* archive as long as there is at least one file uploaded.

Each file has the name of the UUID used within Mendix to identify the resource. They are also stored in the following tree structure, where each file is stored in a second-level location:

```shell
/tree
   |---/[xx]
          |---/[yy]
                 |---/file
```

The file has the name of the UUID used within Mendix to identify the resource.

The directory [xx] is the first two characters of the UUID.

The directory [yy] is the third and fourth characters of the UUID.

So, in the example file list above, the first file (0d3e301f-5551-46f8-ad44-8de2be084c95) is stored in the following structure:

```shell
/tree
   /0d
      /3e
         /0d3e301f-5551-46f8-ad44-8de2be084c95
```

## Read More

* [Backups](/developerportal/operate/backups/)
* [Creating a Backup](/developerportal/operate/create-backup/)
* [Downloading a Backup](/developerportal/operate/download-backup/)
