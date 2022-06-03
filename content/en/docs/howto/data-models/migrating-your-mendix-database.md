---
title: "Migrate Your Mendix Database"
url: /howto/data-models/migrating-your-mendix-database/
category: "Data Models"
weight: 7
tags: ["database", "migrate", "PostgreSQL", "export", "import"]
---

## 1 Introduction

This document explains how to migrate the data in an existing Mendix database to another Mendix database. This can be useful if you want to migrate from one type of database to another, for example MS SQL Server to PostgreSQL.

**After completing this how-to you will know how to do the following:**

* Migrate a non-PostgreSQL database to a PostgreSQL database
* Export a PostgreSQL database
* Upload an exported PostgreSQL database to the Mendix cloud
* Export a Mendix cloud database
* Import into an on-premise PostgreSQL database
* Migrate a PostgreSQL database to a non-PostgreSQL database, including migrating a PostgreSQL database to SAP HANA

{{% alert color="warning" %}}
You cannot use these methods to transfer data from one app to another. This is because each app labels the entities uniquely, even if the name in the domain model is the same. See [Data Storage](/refguide/data-storage/) for more information.

If you want to copy data to another app, we recommend using the [Database Replication](/appstore/modules/database-replication/) module.
{{% /alert %}}

## 2 Overview

You can copy all the data from any Mendix-supported database management system to any other Mendix-supported database management system. For example you can copy demo, test, and production databases from built-in to PostgreSQL, and from PostgreSQL to built-in. You can also migrate production data from SQL Server or Oracle (on-premises) to PostgreSQL in our cloud.

To do this, start your app on the database you would like to copy the data to. This database should already exist and should be totally empty. To let Mendix know from which database all data should be copied, you have to set some custom configuration settings. These custom settings identify the source database and give Mendix the authentication required to access it.

The most commonly used custom settings for database migration are:

*   SourceDatabaseType (HSQLDB, MYSQL, ORACLE, POSTGRESQL, SQLSERVER)
*   SourceDatabaseHost
*   SourceDatabaseName
*   SourceDatabaseUserName
*   SourceDatabasePassword

For more information on the full list of available settings, see [Runtime Customization](/refguide/custom-settings/).

These settings can be configured as follows:

*  Studio Pro – in **App Explorer**, expand **App**, double-click **Settings**, edit a configuration, and go to the **Custom** tab:

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/19398970.png" >}} 

*  Service Console – click an app in the left pane, click **Configuration**, click **Advanced**, then see **Custom Mendix settings**:

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/19398971.png" >}} 

* m2ee-tools – add the custom settings to the mxruntime section (for more information, see [Full Documented m2ee](https://github.com/mendix/m2ee-tools/blob/develop/examples/full-documented-m2ee.yaml))

You can migrate databases using Studio Pro, the Service Console, or m2ee-tools. The Service Console gives you the advantage of seeing a progress bar during the copy process, which is handy if you copy a lot of data which takes a long time to execute.

{{% alert color="info" %}}
Database migration is handled by Mendix as a normal database synchronization phase during the start-up process of an app. When using m2ee-tools, it is possible that during the start-up process you will get to see messages like ‘The database has to be synchronized’ or you will see an empty message. You can ignore these messages — the database migration will be performed.
{{% /alert %}}

{{% alert color="warning" %}}
Before the data copying process starts, the main database structure will be generated based on the source database structure. This is necessary to make sure all the data is copied without any problems, especially in cases where the source database has a larger element value than what the current domain model specifies.

The source database structure and data do not change as part of the migration.
{{% /alert %}}

## 3 Using your PostgreSQL Database in Studio Pro

You can configure Studio Pro to use a PostgreSQL database instead of the inbuilt (HSQLDB) database.

To do this, perform the following steps:

1. Open your **App** > **Settings**.

2. Click **New** to add a new configuration from the **Configurations** tab.

3. Give your configuration a new **Name**.

4. On the **Database** tab, set the following values:
    * **Type** – **PostgreSQL**
    * **Database name** – *default*
    * **URL** – the URL for your local PostgreSQL server
    * **User name** – the user name of a database administrator in your local PostgreSQL
    * **Password** – the password for the user specified above

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/postgresql-config.png" >}}

    Your new configuration will be set as the active configuration.
5. Ensure that PostgreSQL is running locally on the correct port.
6. Run your app locally. Provided your PostgreSQL database is empty, your app will configure the database to support the domain model of your app.

{{% alert color="info" %}}
If you already have the database, for example a test database in the cloud, you can also restore this to a local PostgreSQL database. Instructions for doing this can be found in [Restore a Backup Locally](/developerportal/operate/restore-backup-locally/).
{{% /alert %}}

## 4 Migrating a Non-PostgreSQL Database to a PostgreSQL Database

The Mendix Cloud V4 environment only uses PostgreSQL as a database server. The recommended way is to migrate your existing on-premises non-PostgreSQL source database to a new on-premises PostgreSQL target database. 

The source database is the database with the data that you would like to migrate to the cloud. The target PostgreSQL database should be completely empty, as in, it should not contain any tables. In the Mendix app the active configuration in Settings should point to the target database, and you should add the Custom configuration settings for the source database as explained above in the overview.

Having configured the Mendix app, just run the application locally and it will automatically migrate the database schema and all the data from the source database to the target database. Before exporting the target database, you should always validate it first by viewing the application in a browser. 

### 4.1 Exporting a PostgreSQL Database

To export a PostgreSQL database, refer to either the [pg_dump](https://www.postgresql.org/docs/current/backup-dump.html) command line tool or the [PG Admin](https://www.pgadmin.org/docs/) visual tool documentation to understand how to create a backup of your new PostgreSQL database.

### 4.2 Uploading an Exported PostgreSQL Database to a Mendix Cloud Database

Use the Developer Portal to upload the migrated, exported database backup to the Mendix Cloud V4. This can be accessed using the Nodes page in the Developer Portal. Perform the following steps:

1. Select your app.
2. Click **Backups** in the left-hand menu
3. Click **Upload Backup** to upload your Database.
4. Select the exported database file from your local file system using the file chooser
5. After the upload is done, stop the application.
6. Select the uploaded backup and click **Restore Backup** to restore the new Backup.
7. Finally, start the application.

## 5 Exporting a Mendix Cloud Database

The same procedure can be used to export an existing Mendix cloud database, import it into an on-premises PostgreSQL source database and migrate that to an on-premises non-PostgreSQL target database.

Export the Mendix cloud database via the Developer Portal. This can be accessed using the Nodes page in the Developer Portal: select your app and environment, click **Details**, click the **Backup** tab, select an existing Backup from the list, and click the **Download Backup** button to download the database to your local file system using the Database URL shown in the dialog. A fresh backup with recent data could also be created first using the **Create Backup** button.

### 5.1 Importing into an On-premises PostgreSQL Database

To import a PostgreSQL database using the downloaded database file, refer to either the [pg_dump](https://www.postgresql.org/docs/current/backup-dump.html) command line tool or the [PG Admin](https://www.pgadmin.org/docs/) visual tool documentation to understand how to restore your downloaded database file.

### 5.2 Migrating a PostgreSQL Database To a Non-PostgreSQL Database

Below is general guidance on how to migrate a PostgreSQL database to a different database. There is a special section for the case of migrating a PostgreSQL database being used by a Mendix application running on SAP Business Technology Platform (SAP BTP).

#### 5.2.1 General Guidance

The source database is a PostgreSQL database with the downloaded database from the Mendix cloud. The target non-PostgreSQL database should be completely empty, as in, it should not contain any tables. In the Mendix app the active configuration in Settings should point to the target database, and you should add the Custom configuration settings for the source PostgreSQL database as explained above in the overview.

Having configured the Mendix app, just run the application locally and it will automatically migrate the database schema and all the data from the source database to the target database. You should always validate it first by viewing the application in a browser.

#### 5.2.2 Migrating to SAP HANA on SAP BTP

If you have a Mendix application running on SAP BTP with PostgreSQL as the database service and want to migrate the database to SAP HANA, you will need to take some extra steps to migrate the existing data.

To do this, perform the following steps:

1. Sign in to the SAP BTP Cloud Foundry environment (containing the PostgreSQL service) using the Cloud Foundry command line.
2. Get the PostgreSQL service instance details from the environment variables of the application using the following command:

    `cf env {application-name}`

3. Inspect the **VCAP_SERVICES** list, and note down the values of the following properties in the `postgresql` service:
    * `dbname` – `{dbname}`
    * `hostname` – `{hostname}`
    * `password` – `{password}`
    * `port` – `{port}`
    * `username` – `{username}`

    as shown in the highlighted image below:

    {{< figure src="/attachments/howto/data-models/migrating-your-mendix-database/sap-postgres-config.png" >}}

4. Create an environment using the SAP HANA database service using Mendix Developer Portal.
5. Deploy the mda, but **do not start the application**.
6. Sign in to the SAP BTP Cloud Foundry environment (containing the SAP HANA service) using the Cloud Foundry command line.
7. Set the following runtime properties in the SAP HANA environment using the command line. Use the values from the PostgreSQL instance values you noted above.

    ```bash
    cf set-env {application-name} MXRUNTIME_SourceDatabaseType POSTGRESQL
    cf set-env {application-name}  MXRUNTIME_SourceDatabaseHost {hostname}:{port}
    cf set-env {application-name} MXRUNTIME_SourceDatabaseName {dbname}
    cf set-env {application-name}  MXRUNTIME_SourceDatabaseUserName {username}
    cf set-env {application-name}  MXRUNTIME_SourceDatabasePassword {password}
    ```

8. Start the application either from the Developer Portal or the command line. 
9. Once the application is started, verify the data in the application.
