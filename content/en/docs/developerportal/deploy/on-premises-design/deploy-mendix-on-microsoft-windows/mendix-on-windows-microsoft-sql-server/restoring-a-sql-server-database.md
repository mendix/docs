---
title: "Restore Database on SQL Server"
url: /developerportal/deploy/restoring-a-sql-server-database/
weight: 70
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/restoring-a-sql-server-database.pdf).
{{% /alert %}}

## 1 Introduction

In certain situations (for example, unwanted database updates or data corruption), it might be necessary to restore the Mendix database from a backup. This document describes the actions needed to perform a complete database restore and defines the prerequisites for restoring backups.

This how-to will teach you how to do the following:

* Restore the database

For a deep-dive look into this action, check out this video:

{{< vidyard "WZu7QtHZPjtYUTdcV58PKr?" >}}

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have sufficient rights on the DBMS (for details, see the [Permissions](#Permissions) section below)
* Make sure the following points are true:
    * The Mendix database is maintained using maintenance plans as described in [How to Set Up Mendix SQL Maintenance Plans](/developerportal/deploy/mendix-sql-maintenance-plans/)
    * A valid database backup file exists for the Mendix database
    * Valid transaction log files exist for the Mendix database

## 3 Permissions {#Permissions}

If the database being restored does not exist, the user must have **CREATE DATABASE** permissions to be able to execute **RESTORE**. If the database exists, RESTORE permissions default to members of the `sysadmin` and `dbcreator` fixed server roles and the owner of the database (`dbo`).

RESTORE permissions are given to roles in which membership information is always readily available to the server. Because fixed database role membership can be checked only when the database is accessible and undamaged (which is not always the case when RESTORE is executed, members of the `db_owner` fixed database role do not have RESTORE permissions.

## 4 Restoring the Database

To restore the database, follow these steps:

1. After you connect to the appropriate instance of the Microsoft SQL Server Database Engine, click the server name to expand the server tree in **Object Explorer**.
2. Expand **Databases**. Depending on the database, either select a user database or expand **System Databases** and select a system database.
3. Right-click the database, select **Tasks** > **Restore** > **Database**, which will open the **Restore Database** dialog box.
4. In the **Source** section of the **General Settings** page, specify the source and the location of the backup sets to restore by selecting **Device** > **Add** and then locating the backup file:

    {{< figure src="/attachments/developerportal/deploy/on-premises-design/deploy-mendix-on-microsoft-windows/mendix-on-windows-microsoft-sql-server/restoring-a-sql-server-database/18580646.jpg" >}}

5. In the **Destination** section of the **General Settings** page, the **Database** field is automatically populated with the name of the database to be restored. To change the name of the database, enter the new name in this field.
6. In the **Restore plan** section of the **General Settings** page, leave the default as **To the last backup taken** or click **Timeline** to access the **Backup Timeline** dialog box where you can manually select a point in time to stop the recovery action.
7. In the **Backup sets to restore** grid, select the backups to restore. This grid displays the backups available for the specified location. By default, a recovery plan is suggested. To override the suggested recovery plan, change the selections in the grid. Backups that depend on the restoration of an earlier backup are automatically deselected when the earlier backup is deselected.

    {{% alert color="info" %}}Optionally, click "Files" in the "Select a page" pane to access the "Files" dialog box. From here, you can restore the database to a new location by specifying a new restore destination for each file in the "Restore the database files as" grid.{{% /alert %}}

8. To view or select the advanced options, in the **Restore options** panel on the **Options** page you can select any of the following options if appropriate for your situation:
    * **WITH** options (not required):
        * Overwrite the existing database (**WITH REPLACE**)
        * Preserve the replication settings (**WITH KEEP_REPLICATION**)
        * Restrict access to the restored database (**WITH RESTRICTED_USER**)
    * Select an option for the **Recovery state** box, which determines the state of the database after the restore operation:
        * **RESTORE WITH RECOVERY** is the default behavior, which leaves the database ready for use by rolling back the uncommitted transactions
            * Additional transaction logs cannot be restored
            * Select this option if you are restoring all of the necessary backups now
        * **RESTORE WITH NORECOVERY** leaves the database non-operational and does not roll back the uncommitted transactions
            * Additional transaction logs can be restored
            * The database cannot be used until it is recovered
        * **RESTORE WITH STANDBY** leaves the database in read-only mode
            * It undoes the uncommitted transactions but saves the undo actions in a standby file so that recovery effects can be reverted
    * Take tail-log backup before the restore is selected if it is necessary for the point in time that you have selected
        * You do not need to modify this setting, but you can choose to backup the tail of the log even if it is not required
    * Restore operations may fail if there are active connections to the database
        * Check the **Close existing connections** option to ensure that all active connections between Management Studio and the database are closed (this check box sets the database to single user mode before performing the restore operations and sets the database to multi-user mode when complete)
    * Select **Prompt before restoring each backup** if you wish to be prompted between each restore operation
        * This is not usually necessary unless the database is large and you wish to monitor the status of the restore operation
9. Click **OK**.

## 5 Read More

* [How to Troubleshoot an SQL Server](/developerportal/deploy/troubleshooting-sql-server/)
* [How to Set Up an SQL Server User](/developerportal/deploy/setting-up-a-sql-server-user/)
* [How to Set Up a New SQL Server Database](/developerportal/deploy/setting-up-a-new-sql-server-database/)
* [How to Set Up Mendix SQL Maintenance Plans](/developerportal/deploy/mendix-sql-maintenance-plans/)
* [How to Set Up a Security Checklist for Your On-Premises Installation](/developerportal/deploy/security-checklist-for-your-on-premises-installation/)
