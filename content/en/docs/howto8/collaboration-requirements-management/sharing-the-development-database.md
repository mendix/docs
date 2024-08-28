---
title: "Share the Development Database"
url: /howto8/collaboration-requirements-management/sharing-the-development-database/
weight: 40
---

## Introduction

All Mendix applications need a database running in the background. While developing an application it is advised to use the standard built-in database that is supplied with Mendix Studio Pro. This how-to teaches you how to open and manage the data stored inside the built-in database.

## Prerequisites

To get the most out of the built-in database, make sure you have completed the following prerequisites:

* Have an internet connection (to commit the database)
* Have a Team Server-enabled application (to share the database)
* Have a running application
* Have some data in the database to commit SQL queries to

## Type of Database

The built-in database is a flatfile database called HSQLDB (HyperSQL DataBase). This is the leading SQL relational database software written in Java. It offers a small, fast multithreaded and transactional database engine with in-memory and disk-based tables and supports embedded and server modes. It includes a powerful command line SQL tool and simple GUI query tools.

HSQLDB has been constantly developed over 12 years and is used as a database and persistence engine. It is known for its small size, ability to execute completely or partly in memory, its flexibility and speed.

Therefore this type of database is excellent to use while developing and running applications in Mendix Studio Pro on a local machine. Thanks to this built in functionality, the developer doesn't have to run a local database engine and management tools.

## Selecting the Preferred Database

One application can make use of many different databases. Take the following steps to select the preferred database (if there is more than one configured)

1. Double-click **Settings** in the **Project Explorer**.
2. Select the preferred database configuration and click **Make active**.

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580427.png" class="no-border" >}}

## Starting the Database Viewer

To start the built-in database viewer, the following steps have to be applied:

1. Run the application locally (if this is the first time, Studio Pro will ask you to create the new database, so click **Yes**):

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580426.png" class="no-border" >}}

2. When the application is running, open the built=in database viewer:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580425.png" class="no-border" >}} 

3. This will result in the following screen being displayed (depending on the data model of the application):

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580424.png" class="no-border" >}}

This is the database manager. On the left pane all tables from all modules in the running application are showed. On the right top pane it is possible to enter SQL queries and on the right lower pane the results from the entered SQL query will be shown.

## Executing the Queries

Queries can be executed in two ways. It can be done directly from the command line (top right pane) in SQL script, or via the explorer on the left pane. For more information about SQL, visit the following page: [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/). To execute queries from the database explorer (left pane), the following steps have to be applied:

1. Right-click any table and select the preferred action:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580423.png" class="no-border" >}}

2. To select all customers from the table CUSTOMER, click the first option. It will automatically fill the SQL command in the upper-right pane.

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580422.png" class="no-border" >}}

3. Click **Execute SQL** to execute this query:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580421.png" class="no-border" >}}

On the lower-right pane, the results are shown and a total of 50 rows is retrieved from the database. From the standard actions it is also possible to delete, update and insert records. The standard actions can also be customized to retrieve, update or delete specific data. Advanced knowledge about the SQL language is needed to get the desired results.

## Committing the Data Snapshot

The built-in database can easily be shared with other members of the team. Like the business logic itself, it is possible to commit a snapshot of the database to the team server. To do this, take the following steps:

1. Select **Version Control** > **Add Snapshot of Data**:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580420.png" class="no-border" >}}

2. Click **Yes** to commit if one already exists, then add the informational message and click **OK**.

The data is now committed to the team server and can be used by other team members.

## Updating the Data Snapshot

To import a data snapshot into the model, the app has to be updated since the last database snapshot has been committed by another team member. To get the data from the committed database snapshot the following steps have to be applied:

1. First the application has to be updated, so click **Update* on the **Changes** tab:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580419.png" class="no-border" >}}

2. To implement the data snapshot, the database has to be extracted from a ZIP file to the deployment directory:

    {{< figure src="/attachments/howto8/collaboration-requirements-management/sharing-the-development-database/18580417.png" class="no-border" >}}

3. Now copy the data directory to the data directory in the deployment directory

{{% alert color="warning" %}}
Make sure the names of the databases aren't the same or make a copy of your own database first so it will not be overwritten.
{{% /alert %}}

## Read More

* [Contributing to a GitHub repository](/howto8/collaboration-requirements-management/contribute-to-a-github-repository/)
* [Starting your own repository](/howto8/collaboration-requirements-management/starting-your-own-repository/)
* [Version Control](/refguide8/version-control/)
