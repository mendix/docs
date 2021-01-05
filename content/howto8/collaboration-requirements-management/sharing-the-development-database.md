---
title: "Share the Development Database"
category: "Collaboration"
menu_order: 40
tags: ["studio pro"]
---

## 1 Introduction

All Mendix applications need a database running in the background. While developing an application it is advised to use the standard built-in database that is supplied with Mendix Studio Pro. This how-to will teach you how to open and manage the data stored inside the built-in database.

## 2 Prerequisites

To get the most out of the built-in database, make sure you have completed the following prerequisites:

* Have an internet connection (to commit the database)
* Have a Team Server-enabled application (to share the database)
* Have a running application
* Have some data in the database to commit SQL queries to

## 3 Type of Database

The built-in database is a flatfile database called HSQLDB (HyperSQL DataBase). This is the leading SQL relational database software written in Java. It offers a small, fast multithreaded and transactional database engine with in-memory and disk-based tables and supports embedded and server modes. It includes a powerful command line SQL tool and simple GUI query tools.

HSQLDB has been constantly developed over 12 years and is used as a database and persistence engine. It is known for its small size, ability to execute completely or partly in memory, its flexibility and speed.

Therefore this type of database is excellent to use while developing and running applications in Mendix Studio Pro on a local machine. Thanks to this built in functionality, the developer doesn't have to run a local database engine and management tools.

## 4 Selecting the Preferred Database

One application can make use of many different databases. Take the following steps to select the preferred database (if there is more than one configured)

1.  Double-click **Settings** in the **Project Explorer**.
2.  Select the preferred database configuration and click **Make active**.
  
    ![](attachments/18448637/18580427.png)

## 5 Starting the Database Viewer

To start the built-in database viewer, the following steps have to be applied:

1.  Run the application locally (if this  is the first time, Studio Pro will ask you to create the new database, so click **Yes**):

    ![](attachments/18448637/18580426.png)

2.  When the application is running, open the built=in database viewer:

    ![](attachments/18448637/18580425.png) 

3.  This will result in the following screen being displayed (depending on the data model of the application):

    ![](attachments/18448637/18580424.png)

This is the database manager. On the left pane all tables from all modules in the running application are showed. On the right top pane it is possible to enter SQL queries and on the right lower pane the results from the entered SQL query will be shown.

## 6 Executing the Queries

Queries can be executed in two ways. It can be done directly from the command line (top right pane) in SQL script, or via the explorer on the left pane. For more information about SQL, visit the following page: [http://www.w3schools.com/sql/](http://www.w3schools.com/sql/). To execute queries from the database explorer (left pane), the following steps have to be applied:

1.  Right-click any table and select the preferred action:

    ![](attachments/18448637/18580423.png)

2.  To select all customers from the table CUSTOMER, click the first option. It will automatically fill the SQL command in the top-right pane.

    ![](attachments/18448637/18580422.png)

3.  Click **Execute SQL** to execute this query:

    ![](attachments/18448637/18580421.png)

On the bottom-right pane, the results are shown and a total of 50 rows is retrieved from the database. From the standard actions it is also possible to delete, update and insert records. The standard actions can also be customized to retrieve, update or delete specific data. Advanced knowledge about the SQL language is needed to get the desired results.

## 7 Committing the Data Snapshot

The built-in database can easily be shared with other members of the team. Like the business logic itself, it is possible to commit a snapshot of the database to the team server. To do this, take the following steps:

1.  Select **Version Control** > **Add Snapshot of Data**:

    ![](attachments/18448637/18580420.png)

2.  Click **Yes** to commit if one already exists, then add the informational message and click **OK**.

The data is now committed to the team server and can be used by other team members.

## 8 Updating the Data Snapshot

To import a data snapshot into the model, the app project has to be updated since the last database snapshot has been committed by another team member. To get the data from the committed database snapshot the following steps have to be applied:

1.  First the application has to be updated, so click **Update* on the **Changes** tab:

    ![](attachments/18448637/18580419.png)

2.  To implement the data snapshot, the database has to be extracted from a ZIP file to the deployment directory:

    ![](attachments/18448637/18580417.png)

3.  Now copy the data directory to the data directory in the deployment directory

{{% alert type="warning" %}}
Make sure the names of the databases aren't the same or make a copy of your own database first so it will not be overwritten.
{{% /alert %}}

## 9 Read More

*   [Stories](/developerportal/collaborate/stories)
*   [Contributing to a GitHub repository](contribute-to-a-github-repository)
*   [Starting your own repository](starting-your-own-repository)
*   [Version Control](/refguide8/version-control)
