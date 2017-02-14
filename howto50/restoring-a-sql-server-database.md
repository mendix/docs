---
title: "Restoring a SQL Server database"
parent: "mendix-on-windows-microsoft-sql-server"
space: "Mendix 5 How-to's"
---


## Introduction

In certain situations, i.e. unwanted database updates, data corruption, etc. it might be necessary to restore the Mendix database from backup. This document will describe the actions needed to perform a complete database restore, as well as defining the prerequisites for restoring backups.

# Table of contents

## Prerequisites

The steps detailed in this document are based on the following assumptions:

*   The Mendix database is maintained using Maintanance Plans as described in, or similar to: [Mendix SQL Maintenance Plans](mendix-sql-maintenance-plans)
*   A valid database backup file exists for the Mendix database
*   Valid transaction log files exist for the Mendix database
*   The user performing the restore has sufficient rights on the DBMS (see paragraph: Permissions below)

## Permissions

If the database being restored does not exist, the user must have CREATE DATABASE permissions to be able to execute RESTORE. If the database exists, RESTORE permissions default to members of the sysadmin and dbcreator fixed server roles and the owner (dbo) of the database.

RESTORE permissions are given to roles in which membership information is always readily available to the server. Because fixed database role membership can be checked only when the database is accessible and undamaged, which is not always the case when RESTORE is executed, members of the db_owner fixed database role do not have RESTORE permissions.

## Restoring the database

*   After you connect to the appropriate instance of the Microsoft SQL Server Database Engine, in Object Explorer, click the server name to expand the server tree.

*   Expand Databases. Depending on the database, either select a user database or expand System Databases, and then select a system database.

*   Right-click the database, point to Tasks, point to Restore, and then click Database, which opens the Restore Database dialog box.

*   On the General page, use the Source section to specify the source and location of the backup sets to restore. Select: Device > ...

![](attachments/2949337/3080851.jpg)

*   In the Destination section, the Database box is automatically populated with the name of the database to be restored. To change the name of the database, enter the new name in the Database box.

*   In the Restore to box, leave the default as To the last backup taken or click on Timeline to access the Backup Timeline dialog box to manually select a point in time to stop the recovery action.

*   In the Backup sets to restore grid, select the backups to restore. This grid displays the backups available for the specified location. By default, a recovery plan is suggested. To override the suggested recovery plan, you can change the selections in the grid. Backups that depend on the restoration of an earlier backup are automatically deselected when the earlier backup is deselected.

*   Optionally, click Files in the Select a page pane to access the Files dialog box. From here, you can restore the database to a new location by specifying a new restore destination for each file in the Restore the database files as grid.

*   To view or select the advanced options, on the Options page, in the Restore options panel, you can select any of the following options, if appropriate for your situation:
    *   WITH options (not required):
        *   Overwrite the existing database (WITH REPLACE)
        *   Preserve the replication settings (WITH KEEP_REPLICATION)
        *   Restrict access to the restored database (WITH RESTRICTED_USER)
    *   Select an option for the Recovery state box. This box determines the state of the database after the restore operation.
        *   RESTORE WITH RECOVERY is the default behavior which leaves the database ready for use by rolling back the uncommitted transactions. Additional transaction logs cannot be restored. Select this option if you are restoring all of the necessary backups now.
        *   RESTORE WITH NORECOVERY which leaves the database non-operational, and does not roll back the uncommitted transactions. Additional transaction logs can be restored. The database cannot be used until it is recovered.
        *   RESTORE WITH STANDBY which leaves the database in read-only mode. It undoes uncommitted transactions, but saves the undo actions in a standby file so that recovery effects can be reverted.
    *   Take tail-log backup before restore will be selected if it is necessary for the point in time that you have selected. You do not need to modify this setting, but you can choose to backup the tail of the log even if it is not required.
    *   Restore operations may fail if there are active connections to the database. Check the Close existing connections option to ensure that all active connections between Management Studio and the database are closed. This check box sets the database to single user mode before performing the restore operations, and sets the database to multi-user mode when complete.
    *   Select Prompt before restoring each backup if you wish to be prompted between each restore operation. This is not usually necessary unless the database is large and you wish to monitor the status of the restore operation.

*   Click OK.

## Related content

*   [License key activation on Linux server](/howtogeneral/license-key-activation-on-linux)
*   [Restoring a SQL Server database](restoring-a-sql-server-database)
*   [Mendix SQL Maintenance Plans](mendix-sql-maintenance-plans)
*   [Setting up a new SQL Server database](setting-up-a-new-sql-server-database)
*   [Troubleshooting SQL Server](troubleshooting-sql-server)
*   [Setting up a SQL Server user](setting-up-a-sql-server-user)
*   [Restoring a SQL Server database](/howto6/restoring-a-sql-server-database)
*   [Troubleshooting SQL Server](/howto6/troubleshooting-sql-server)
*   [Mendix SQL Maintenance Plans](/howto6/mendix-sql-maintenance-plans)
*   [Setting up a new SQL Server database](/howto6/setting-up-a-new-sql-server-database)
