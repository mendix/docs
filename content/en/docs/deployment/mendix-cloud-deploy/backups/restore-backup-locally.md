---
title: "Restoring a Backup Locally"
url: /developerportal/operate/restore-backup-locally/
weight: 40
description: "This page describes how to restore a backup."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

Restoring a backup locally can be useful if you want to test your cloud environment's data without interrupting your live cloud environment. This lets you see locally how your app behaves when using data in your cloud environment. By using Mendix Studio Pro and a PostgreSQL database, you can debug your app using backups of your cloud test/acceptance/production data.

This how-to explains how to do the following:

* Download a backup from your cloud environment
* Create a new database
* Configure the settings of the app
* Download and restore FileDocument (binary) objects in your Domain Model

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* [Download a backup](/developerportal/operate/download-backup/) that you want to restore locally.
* Install PostgreSQL version 12 or above (as you need pgAdmin version 4.12 or above) on your local machine by downloading and running the [PostgreSQL Installer](https://www.postgresql.org/download/windows/). When installing, use the program defaults and choose a password.

    {{% alert color="info" %}}You will need this password later to allow your Mendix app to access the restored data.{{% /alert %}}

    {{% alert color="info" %}}This how-to was made with PostgreSQL version 9.6.5.{{% /alert %}}

* When you are restoring a database hosted in Mendix Cloud, or when downloading a full backup, your local machine must have [7-Zip](https://www.7-zip.org/) or another utility that can extract files from *.gz* and *.tar* archives.

## Restoring the Backup to Postgres

Once PostgreSQL is installed and you have downloaded a backup file, you need to create a local database in PostgreSQL. The backup database will be restored into this local PostgreSQL database.

{{% alert color="info" %}}
If your backup came from Mendix Cloud, it will have been compressed as a *.gz* file. You will first have to extract the file (or files) from this archive using a tool such as 7-Zip.

If you have downloaded a full backup, this will also have been archived as a *.tar* file, which you need to extract to get your *.backup* file containing the database backup. The *.backup* file is in the **db** folder of the archive.
{{% /alert %}}

1. Start **pgAdmin 4** from the Windows start menu. 
2. Click the **+** in the **Browser** pane to open the **Servers > PostgreSQL 9.6** menu.
3. Right-click **Databases** and **Create** a new database.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/restore-backup-locally/add-database.png" class="no-border" >}}

4. Fill in the **Database** name.
5. Select the correct owner (the default is **postgres**) and click **Save**.
6. Right-click the newly created database and click **Restore**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/restore-backup-locally/restore-database.png" class="no-border" >}}

7. Select the **.backup** file you downloaded from the Team Server.
8. Click the **Restore options** tab.
9. Under **Do not save**, set **Owner** to **Yes**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/restore-backup-locally/restore-options.png" class="no-border" >}}

10. Click **Restore**.
11. Wait until you see a message that the backup is "Successfully completed." This message appears in the right corner of the screen.

## Linking the Database to the App in Mendix Studio Pro

After the backup has been restored as a local Postgres database, you have to link the database to Studio Pro. This tells Studio Pro to use the database that you have just created in PostgreSQL, rather than the database that was originally created with the app.

1. Open your app in **Studio Pro**.
2. Open **App > Settings** from the **App Explorer**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/restore-backup-locally/app-settings.png" class="no-border" >}}

3. Under the tab **Configurations**, click **New**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/restore-backup-locally/add-configuration.png" class="no-border" >}}

4. Fill in the database information:
    * **Name**: *{a unique name}*
    * **Type**: *PostgreSQL*
    * **URL**: *localhost:5432*
    * **Database name**: *{database name} (the name of the database you created in pgAdmin)*
    * **User name**: *{database owner} (set when you created the database in pgAdmin; the default is postgres)*
    * **Password**: *{password for database owner} (by default, this is the password you provided for Postgres when first setting up PostgreSQL)*

5. Click **OK**.
6. Run the app by clicking **Run Locally** ({{% icon name="controls-play-filled" %}}) or choosing the menu option **Run** > **Run Locally**.

## Restoring Files

The steps above restore the database but do not restore any **FileDocuments** (which are binary files, such as images).

{{% alert color="warning" %}}
You are restoring the FileDocuments to the same directory as your original local test files. Remember to back up the files directory before adding your restored FileDocuments.
{{% /alert %}}

If you also want to restore the **FileDocuments**, follow these steps:

1. Download a **Full Snapshot**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/restore-backup-locally/backup-choice.png" width=75% alt="" class="no-border" >}}

2. Select **App** > **Show App Directory in Explorer** from the Studio Pro menu:

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/restore-backup-locally/project-directory.png" class="no-border" >}}

3. Navigate to the **deployment/data/files** folder within your app.
4. Extract the *{backup name}.tar* file from the *.gz* archive using a program like 7-Zip.
5. Extract the contents of your **tree** folder from the backup archive to the  **deployment/data/files** folder within your app.
6. Run the app by clicking **Run Locally** ({{% icon name="controls-play-filled" %}}) or choosing the menu option **Run > Run Locally**.

## Read More

* [Backups](/developerportal/operate/backups/)
