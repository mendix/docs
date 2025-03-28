---
title: "Share the Development Database"
url: /howto/data-models/sharing-the-development-database/
weight: 9
description: "Describes how to open and manage the data stored inside the built-in database that is supplied with Studio Pro."
aliases:
  - /howto/collaboration-requirements-management/sharing-the-development-database/
---

## Introduction

All Mendix applications need a database running in the background. While developing an application it is best to use the standard built-in database that is supplied with Mendix Studio Pro. This how-to teaches you how to open and manage the data stored inside the built-in database.

{{% alert color="warning" %}}
This document is about sharing a database between developers working on **the same app**. It is not possible to share one database between different apps. If you need to copy data to another app, use the [Database Replication](/appstore/modules/database-replication/) module.
{{% /alert %}}

## Prerequisites

To get the most out of the built-in database, make sure you have completed the following prerequisites:

* Have an internet connection (to commit the database)
* Have a Team Server-enabled application (to share the database)
* Have a running application
* Have some data in the database to commit SQL queries to

## Type of the Database

The database built into Mendix Studio Pro is a flat file database called HSQLDB (HyperSQL DataBase). This is the leading SQL relational database software written in Java. It offers a small, fast, multithreaded, and transactional database engine with in-memory and disk-based tables and supports embedded and server modes. It includes a powerful command line SQL tool and simple GUI query tools.

HSQLDB was first released in 2001 and is used as a database and persistence engine. It is known for its small size, ability to execute completely or partly in memory, flexibility, and speed.

This type of database is excellent to use while developing and running applications in Mendix Studio Pro on a local machine. Thanks to the built-in functionality, the developer does not have to run a local database engine and management tools.

## Selecting the Preferred Database

Each application uses a single database, but you can choose a different database, even one based on a different database management systems. You can switch between configured databases as follows:

1. Double-click **Settings** in the **App Explorer** to open the **App Settings** dialog box.
2. On the **Configurations** tab, select the preferred database configuration, and click **Make active**.

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580427.png" class="no-border" >}}

3. Click **OK** to confirm your choice. 

## Starting the Database Viewer

To start the built-in database viewer, follow these steps:

1. Run the application locally (if this is the first time, Studio Pro will ask you to create the new database, click **Yes** when this occurs):

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580426.png"   width="150"  class="no-border" >}}

2. When the application is running, in the **Console** pane, select **Advanced** > **Start built-in database viewer** to open the built-in database viewer:

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580425.png" class="no-border" >}} 

    The **HyperSQL Database Manager** app will be started (depending on the data model of the application):

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580424.png" class="no-border" >}}

On the left pane, all tables from all modules in the running application are shown. On the upper-right pane, it is possible to enter SQL queries and on the lower-right pane, the results from the entered SQL query will be shown.

## Executing Queries

You can execute queries in two ways:

* Directly from the command line in the upper-right pane using SQL script
* Via the database explorer on the left pane

To execute queries from the database explorer (the left pane) in the **HyperSQL Database Manager**, follow the steps below:

1. Right-click a table and select the preferred action:

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580423.png" class="no-border" >}}

2. To select all customers from the table CUSTOMER, choose the first option. It will automatically fill the SQL command in the upper-right pane:

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580422.png" class="no-border" >}}

3. Click **Execute SQL** to execute this query:

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580421.png" class="no-border" >}}

In the lower-right pane, the results are shown and up to 50 rows are retrieved from the database. From the standard actions, it is also possible to delete, update, and insert records.

If you know SQL, you can customize the standard actions to retrieve, update, or delete specific data.

## Committing the Data Snapshot

The built-in database can easily be shared with other members of the team. Firstly, you need to commit a snapshot of the database to the Team Server. To do this, take the following steps:

1. Select **Version Control** > **Add Snapshot of Data**:

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580420.png" class="no-border" >}}

2. Click **Yes** to commit.
3. In the **Commit** dialog box, add an informational message and click **OK**.

The data is now committed to the Team Server and can be used by other team members.

## Updating the Data Snapshot

To import a data snapshot committed by another team member into the model, you first need to update the app. To get the data from the committed database snapshot, follow these steps:

1. Click **Update** on the **Changes** tab to update the application.

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580419.png" class="no-border" >}}

1. Click **App** > **Show App Directory in Explorer** to open the root directory of your app.

    The data snapshot is in the file `data-snapshot.zip`. 

1. Extract the database from the ZIP file to a temporary directory.

    {{< figure src="/attachments/howto/data-models/sharing-the-development-database/18580417.png" class="no-border" >}}

1. Delete all the files and folders in the **data** directory in the **deployment** directory.

1. Copy the files and folders from the **data** directory of the extracted database to the **data** directory in the **deployment** directory.

{{% alert color="warning" %}}
If you want to keep a copy of your existing data before using the data from the shared database, you can make a copy of the data folder first so the existing data will not be overwritten.
{{% /alert %}}

## Read More

* [Version Control](/refguide/version-control/)
