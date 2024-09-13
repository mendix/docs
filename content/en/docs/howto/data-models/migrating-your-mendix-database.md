---
title: "Migrate Your Mendix Database"
url: /howto/data-models/migrating-your-mendix-database/
weight: 10
description: "Describes how to migrate a non-PostgreSQL database to a PostgreSQL database, export a PostgreSQL database, and perform other actions for database migration."
---

## Introduction

This document explains how to migrate the data in an existing Mendix database to another Mendix database. This can be useful if you want to migrate from one type of database to another—for example, from MS SQL Server to PostgreSQL.

After completing this how-to, you will know how to do the following:

* Migrate a non-PostgreSQL database to a PostgreSQL database
* Export a PostgreSQL database
* Upload an exported PostgreSQL database to Mendix Cloud
* Export a Mendix Cloud database
* Import into an on-premise PostgreSQL database
* Migrate a PostgreSQL database to a non-PostgreSQL database, including migrating a PostgreSQL database to SAP HANA

{{% alert color="warning" %}}
You cannot use these methods to transfer data from one app to another. This is because each app labels the entities uniquely, even if the name in the domain model is the same. For more information, see [Data Storage](/refguide/data-storage/).

If you want to copy data to another app, Mendix recommends using the [Database Replication](/appstore/modules/database-replication/) module.
{{% /alert %}}

## Overview{#overview}

You can copy all the data from any Mendix-supported database management system to any other Mendix-supported database management system. For example, you can copy demo, test, and production databases from built-in to PostgreSQL, and from PostgreSQL to built-in. You can also migrate production data from SQL Server or Oracle (on-premises) to PostgreSQL in our cloud.

To do this, start your app on the database you want to copy the data to. This database should already exist and should be empty. To indicate which database the data should be copied from, you have to set some custom configuration settings. These custom settings identify the source database and give Mendix the authentication required to access the database.

These are the most commonly used custom settings for database migration:

* SourceDatabaseType (HSQLDB, MYSQL, ORACLE, POSTGRESQL, SQLSERVER)
* SourceDatabaseHost
* SourceDatabaseName
* SourceDatabaseUserName
* SourceDatabasePassword

For more information and the full list of available settings, see [Runtime Customization](/refguide/custom-settings/).

These settings can be configured as follows:

* Studio Pro – in **App Explorer**, expand **App**, double-click **Settings**, edit a configuration, and go to the **Custom** tab:

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/19398970.png" class="no-border" >}} 

* Service Console – click an app in the left pane, click **Configuration**, click **Advanced**, then see **Custom Mendix settings**:

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/19398971.png" class="no-border" >}} 

* m2ee-tools – add the custom settings to the mxruntime section (for more information, see [Full Documented m2ee](https://github.com/mendix/m2ee-tools/blob/develop/examples/full-documented-m2ee.yaml))

You can migrate databases using Studio Pro, the Service Console, or m2ee-tools. The Service Console gives you the advantage of seeing a progress bar during the copy process, which is handy if you copy a lot of data which takes a long time to execute.

{{% alert color="info" %}}
Database migration is handled by Mendix as a normal database synchronization phase during the startup process of an app. When using m2ee-tools, you may see messages like "The database has to be synchronized" or an empty message during the startup process. You can ignore these messages—the database migration will be performed.
{{% /alert %}}

{{% alert color="warning" %}}
Before the data-copying process starts, the main database structure will be generated based on the source database structure. This is necessary to make sure all the data is copied without any problems, especially in cases where the source database has a larger element value than the current domain model specifies.<br><br>The source database structure and data do not change as part of the migration.
{{% /alert %}}

## Using your PostgreSQL Database in Studio Pro

You can configure Studio Pro to use a PostgreSQL database instead of the built-in (HSQLDB) database.

To do this, follow these steps:

1. Open your app and go to **Settings**.
2. Click **New** to add a new configuration from the **Configurations** tab.
3. Give your configuration a new **Name**.
4. On the **Database** tab, set the following values:
    * **Type** – **PostgreSQL**
    * **Database name** – *default*
    * **URL** – the URL for your local PostgreSQL server
    * **User name** – the user name of a database administrator in your local PostgreSQL
    * **Password** – the password for the user specified above

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/postgresql-config.png" class="no-border" >}}

    Your new configuration will be set as the active configuration.

5. Ensure that PostgreSQL is running locally on the correct port.
6. Run your app locally. Provided your PostgreSQL database is empty, your app will configure the database to support the domain model of your app.

{{% alert color="info" %}}
If you already have the database, such as a test database in the cloud, you can also restore this to a local PostgreSQL database. For details on how to do this, see [Restoring a Backup Locally](/developerportal/operate/restore-backup-locally/).
{{% /alert %}}

## Migrating a Non-PostgreSQL Database and Uploading It

The Mendix Cloud environment only uses PostgreSQL as a database server. Therefore, it is recommended to migrate your existing on-premises non-PostgreSQL source database to an on-premises PostgreSQL target database. Then you can export it and upload it to Mendix Cloud. The migration, export, and upload steps are described below.

### Step 1: Migrating a Non-PostgreSQL Database to a PostgreSQL Database

The source database is the database with the data that you want to migrate to the cloud. The target database should be a completely empty PostgreSQL database; it should not contain any tables. You can either create a new database for this or [clear an existing one](/developerportal/deploy/environments-details/#clear-environment).

In the Mendix app, the active configuration in **Settings** should point to the target database. Add the **Custom configuration settings** for the source database as explained above in the [overview](#overview). Once you have configured the Mendix app, run the application locally. That automatically migrates the database schema and all the data from the source database to the target database. Validate that the target database is functioning as expected by viewing the application in a browser.

### Step 2: Exporting a PostgreSQL Database

To export a PostgreSQL database, use either pg_dump or pgAdmin, as described below.

#### Using pg_dump

If you are using [pg_dump](https://www.postgresql.org/docs/current/app-pgdump.html), use the command `pg_dump -O -x -Fc`.

For more information about pg_dump methods, see [SQL Dump](https://www.postgresql.org/docs/current/backup-dump.html).

{{% alert color="warning" %}}
As described in [Restoring a Backup](/developerportal/operate/restore-backup/#db-folder), the backup must be created using pg_dump version 1.14 or below, which is currently bundled with PostgreSQL 12, 13, 14, and 15. If it is created with a later version, then it will not be possible to upload the file to Mendix Cloud.
{{% /alert %}}

#### Using pgAdmin

If you are using [pgAdmin](https://www.pgadmin.org/docs/), follow these steps:

1. Right-click the migrated backup and select **Backup**.
1. In the **Filename** field, click **Save As** ({{% icon name="folder-closed" %}}) and save the file as a *.backup* file.
{{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/saving-backup-file.png" alt="" >}}
1. Click **Backup** and wait for the process to complete.
1. If you want to upload a [full snapshot](/developerportal/operate/restore-backup/#full-snapshot) instead of just the database, move the modified *.backup* data to the **db** folder within your (unzipped) **.tar.gz** folder. Then compress the folders (**db**, **tree** and **.metadata**) into a TAR file using an archival tool such as 7-Zip.

### Step 3: Uploading an Exported PostgreSQL Database to a Mendix Cloud Database

Use the Mendix Portal to upload the migrated, exported database backup to Mendix Cloud. Follow these steps:

1. Go to [Apps](https://sprintr.home.mendix.com/) and open your app.
2. Click **Backups** in the navigation pane.
3. Click **Upload Backup** to upload your database.
4. In the **Upload Archive** dialog box, select the exported database file from your local file system.
5. After the upload is done, stop the application.
6. On the uploaded backup, click **More Options** > **Restore** to restore the new backup.
7. Start the application.

## Exporting a Mendix Cloud Database

You can use the same procedure to export an existing Mendix Cloud database, import it into an on-premises PostgreSQL source database, and migrate that to an on-premises non-PostgreSQL target database.

Export the Mendix Cloud database via the Mendix Portal. Follow these steps:

1. Open your app from the Mendix Portal.
2. Click **Backups** in the navigation pane.
3. Select your desired environment.
4. Optionally, click **Create Backup** to create a fresh backup with recent data.
5. Click **More Options** > **Download** on the backup you want to download. This downloads the database to your local file system using the database URL shown in the dialog box.

### Importing into an On-Premises PostgreSQL Database

To import a PostgreSQL database using the downloaded database file, refer to either the [pg_dump](https://www.postgresql.org/docs/current/backup-dump.html) command-line tool or the [pgAdmin](https://www.pgadmin.org/docs/) visual tool documentation to understand how to restore your downloaded database file.

### Migrating a PostgreSQL Database To a Non-PostgreSQL Database

Below is general guidance on how to migrate a PostgreSQL database to a different database. There is a special section for the case of migrating a PostgreSQL database being used by a Mendix application running on SAP Business Technology Platform (SAP BTP).

#### General Guidance

The source database is a PostgreSQL database with the downloaded database from Mendix Cloud. The target non-PostgreSQL database should be completely empty; it should not contain any tables. In the Mendix app, the active configuration in **Settings** should point to the target database, and you should add the **Custom configuration** settings for the source PostgreSQL database as explained above in the overview.

Once you have configured the Mendix app, run the application locally—it will automatically migrate the database schema and all the data from the source database to the target database. Before exporting the target database, you should always validate it by viewing the application in a browser. 

#### Migrating to SAP HANA by using the SAP BTP CLI

If you have a Mendix application running on SAP BTP with PostgreSQL as the database service, and you want to migrate the database to SAP HANA, you will need to take some extra steps to migrate the existing data:

1. Sign in to the SAP BTP, Cloud Foundry environment (containing the PostgreSQL service) using the Cloud Foundry command line.
2. Get the PostgreSQL service instance details from the environment variables of the application using the following command:

    `cf env {application-name}`

3. Inspect the **VCAP_SERVICES** list and note down the values of the following properties in the `postgresql` service:
    * `dbname` – `{dbname}`
    * `hostname` – `{hostname}`
    * `password` – `{password}`
    * `port` – `{port}`
    * `username` – `{username}`

    as shown in the highlighted image below:

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/sap-postgres-config.png" class="no-border" >}}

4. Create an environment using the SAP HANA database service using Mendix Portal.
5. Deploy the MDA, but do not start the application.
6. Sign in to the SAP BTP, Cloud Foundry environment (containing the SAP HANA service) using the Cloud Foundry command line.
7. Set the following runtime properties in the SAP HANA environment using the command line. Use the values from the PostgreSQL instance values you noted above.

    ```bash
    cf set-env {application-name} MXRUNTIME_SourceDatabaseType POSTGRESQL
    cf set-env {application-name}  MXRUNTIME_SourceDatabaseHost {hostname}:{port}
    cf set-env {application-name} MXRUNTIME_SourceDatabaseName {dbname}
    cf set-env {application-name}  MXRUNTIME_SourceDatabaseUserName {username}
    cf set-env {application-name}  MXRUNTIME_SourceDatabasePassword {password}
    ```

8. Start the application either from the Mendix Portal or the command line. 
9. Once the application is started, verify the data in the application.

#### Migrating to SAP HANA on SAP BTP by using the SAP BTP Cockpit

If you have a Mendix application running on SAP BTP with PostgreSQL as the database service, and you want to migrate the database to SAP HANA, you need to perform some additional steps to migrate the existing data.

1. Sign in to the SAP BTP Cockpit.
2. Navigate to the subaccount containing the application from which you want to migrate the database.
3. In the service bindings of the application, find the postgreSQL DB or the shared postgreSQL DB.
4. Click **Show sensitive data**.
5. Write down the values of the following properties in the `postgresql` service:
    * `dbname` – `{dbname}`
    * `hostname` – `{hostname}`
    * `password` – `{password}`
    * `port` – `{port}`
    * `username` – `{username}`

    Example shared database:
   
    ```json
    {
        "uri": "postgres://{username}:{password}@{hostname}:{port}/{databasename}"
    }
    ```

    Example database:
   
    ```json
    {
        "dbname": "",
        "hostname": "",
        "password": "",
        "port": "",
        "uri": "",
        "read_url": "",
        "write_url": "",
        "username": ""
    }
    ```

6. Create an environment using the SAP HANA database service and the Mendix Portal.
7. Deploy the MDA without starting the application.
8. Sign in to the SAP BTP Cockpit.
9. Navigate to the new application and go to **User-Provided Variables**.
10. Set the following runtime properties by clicking **Add Variable**. Use the values from the PostgreSQL instance values that you noted above.

    | Key                                | Value               |
    | ---------------------------------- | ------------------- |
    | `MXRUNTIME_SourceDatabaseType`     | `POSTGRESQL`        |
    | `MXRUNTIME_SourceDatabaseHost`     | `{hostname}:{port}` |
    | `MXRUNTIME_SourceDatabaseName`     | `{dbname}`          |
    | `MXRUNTIME_SourceDatabaseUserName` | `{username}`        |
    | `MXRUNTIME_SourceDatabasePassword` | `{password}`        |

11. Start the application either from the Mendix Portal or from the SAP BTP Cockpit. 
12. Once the application is started, verify the data in the application.
