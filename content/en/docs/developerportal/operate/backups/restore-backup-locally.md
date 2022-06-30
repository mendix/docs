---
title: "Restore a Backup Locally"
url: /developerportal/operate/restore-backup-locally/
# try using linktitle rather than having to rename everything to add the -a-
url: /developerportal/operate/restore-backup-locally/
weight: 40
description: "This page describes how to restore a backup."
tags: ["Backup","Restore","Local","Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Restoring a backup locally can be useful if you want to test your cloud environment's data without interrupting your live cloud environment. In this way you can see locally how your app behaves when using data in your cloud environment. By using Mendix Studio Pro and a PostgreSQL database, you can debug your app using backups of your cloud test/acceptance/production data.

This how-to will teach you how to do the following:

* Download a backup from your cloud environment
* Create a new database
* Configure the settings of the app
* Download and restore FileDocument (binary) objects in your Domain Model

## 2 Prerequisites

**Before starting this how-to, make sure you have completed the following prerequisites:**

* [Download a backup](/developerportal/operate/download-backup/) that you want to restore locally
* Install PostgreSQL version 12 or above (as you need pgAdmin version 4.12 or above) on your local machine by downloading and running the [PostgreSQL Installer](https://www.postgresql.org/download/windows/); use the program defaults and choose a password:

    {{< figure src="/attachments/developerportal/operate/backups/restore-backup-locally/postgres-password.png" >}}

    {{% alert color="info" %}}You will need this password later to allow your Mendix app to access the restored data. 
    {{% /alert %}}

* When restoring a database hosted in Mendix Cloud v4, or downloading a full backup, you will need a utility such as [7zip](http://www.7-zip.org/) on your local machine which can extract files from *.gz* and *.tar* archives.

NOTE: This how-to has been made with PostgreSQL version Version 9.6.5.

## 3 Restoring the Backup to Postgres

Once PostgreSQL is installed and you have downloaded a backup file, you need to create a local database in PostgreSQL. The backup database will be restored into this local PostgreSQL database.

{{% alert color="info" %}}
If your backup came from Mendix Cloud v4, it will have been compressed as a *.gz* file. You will first have to extract the file(s) from this archive using a tool such as 7zip.

If you have downloaded a full backup, this will also have been archived as a *.tar* file which you need to extract to get your .backup file containing the database backup. The .backup file is in the **db** folder of the archive.
{{% /alert %}}

1. Start **pgAdmin 4** from the Windows start menu. 
2. Click the **+** in the Browser pane to open the **Servers > PostgreSQL 9.6** menu.
3. Right-click **Databases** and **Create** a new database.

    {{< figure src="/attachments/developerportal/operate/backups/restore-backup-locally/add-database.png" >}}

4. Fill in the **Database** name.
5. Select the correct owner (the default is **postgres**) and click **Save**.
6. Right-click the newly created database and click **Restore...**.

    {{< figure src="/attachments/developerportal/operate/backups/restore-backup-locally/restore-database.png" >}}

7. Select the **.backup** file you downloaded from the Team Server.
8. Click on the **Restore options** tab.
9. Under **Do not save** set **Owner** to **Yes**.

    {{< figure src="/attachments/developerportal/operate/backups/restore-backup-locally/restore-options.png" >}}

10. Click **Restore**.
11.	Wait until you see that the backup is **Successfully completed.** in the right corner of the screen.

## 4 Linking the Database to the App in Mendix Studio Pro

After the backup has been restored as a local Postgres database, you have to link the database to Studio Pro. This tells Studio Pro to use the database that you have just created in PostgreSQL, rather than the database that was originally created with the app.

1. Open your app in **Studio Pro**.
2. Open **Project... > Settings** from the **App Explorer**.

    {{< figure src="/attachments/developerportal/operate/backups/restore-backup-locally/app-settings.png" >}}

3. Under the tab **Configurations** click **New**.

    {{< figure src="/attachments/developerportal/operate/backups/restore-backup-locally/add-configuration.png" >}}

4. Fill in the database information:
    * **Name**: *{a unique name}*
    * **Type**: *PostgreSQL*
    * **URL**: *localhost:5432*
    * **Database name**: *{database name} (the name of the database you created in pgAdmin)*
    * **User name**: *{database owner} (set when you created the database in pgAdmin; the default is postgres)*
    * **Password**: *{password for database owner} (by default the password you provided for postgres when first setting up PostgreSQL)*

5. Click **OK**.
6. Run the app by clicking the play button (▶) or choosing the menu option **Run > Run Locally**.

## 5 Restoring Files

The steps above restore the database, but do not restore any **FileDocuments** (binary files, such as images).

{{% alert color="warning" %}}
You are restoring the FileDocuments to the same directory as your original local test files. Please remember to backup the files directory before adding your restored FileDocuments.
{{% /alert %}}

If you also want to restore the **FileDocuments**, you need to follow the following steps:

1. Download a **Full Snapshot**.

    {{< figure src="/attachments/developerportal/operate/backups/restore-backup-locally/backup-choice.png" >}}

2. Select **Project > Show App Directory in Explorer** from the Studio Pro menu:

    {{< figure src="/attachments/developerportal/operate/backups/restore-backup-locally/project-directory.png" >}}

3. Navigate to the **deployment/data/files** folder within your app.
4. Extract the *{backup name}.tar* file from the *.gz* archive using a program like **7-zip**.
5. Extract the entire **tree** folder from the backup archive to the  **deployment/data/files** folder within your app.
6. Run the app by clicking the play button (▶) or choosing the menu option **Run > Run Locally**.

## 6 Read More

* [Backups](/developerportal/operate/backups/)
