---
title: "External Database Connection"
url: /refguide/external-database-connection/
weight: 49
description: "Overview of the external database connection document in Studio Pro"
tags: ["studio pro", "database connector", "mendix 10", "mendix connect", "connect to database"]
---

## 1 Introduction

The [Database Connector](/appstore/connectors/external-database-connector/) integrates with Studio Pro with an **External database connection** service document. Use this document alongside the connector to connect to external databases right in Studio Pro.

This page references the **External database connection** document in Studio Pro. See [External Database Connector](/appstore/connectors/external-database-connector/) for the complete documentation. 

{{% alert color="warning" %}}
You must have the [External Database Connector](https://marketplace.mendix.com/link/component/219862) installed for external database connections to work properly while running your app. For instructions on adding modules or connectors to your app, see [Use Marketplace Content in Studio Pro](/appstore/overview/use-content/).
{{% /alert %}}

## 2 Connect to Database Wizard {#wizard}

Right-click on your module and click **Add other > External database connection** to open the **Connect to Database** wizard:

{{< figure src="/attachments/appstore/connectors/external-database-connector/database-connection-wizard.png" >}}

Once in the wizard, enter or select the following:

* **Name** — name of your database connection
* **Database Type** — Microsoft SQL, MySQL, Oracle, or PostgreSQL

### 2.1 Connecting Using Connection Details

If you select **Use connection details**, enter:

* **Host** — the hostname (`localhost` when testing locally)
* **Port** — the port number
* **Database Name** — the name of the database
* **User Name** — the username to access the database
* **Password** — the password to access the database

### 2.2 Connecting Using Connection String

If you select **Use connection string**, enter the following:

* **Username** — the username to access the database
* **Password** — the password to access the database
* **JDBC Connection String** — the connection string, in the following formats for each database type:
    * **Microsoft SQL** — `jdbc:sqlserver://myHostName:myPortNumber;databasename=myDatabaseName`
    * **MySQL** — `jdbc:mysql://myHostName:myPortNumber/myDatabaseName`
    * **Oracle** — `jdbc:oracle:thin:@//myHostName:myPortName/myDatabaseName`
    * **PostgresSQL** — `jdbc:postgresql://myHostName:myPortNumber/myDatabaseName`

## 3 External Database Connection Document {#external-database-document}

After entering your database information in the **Connect to Database** wizard, the external database connection document is open in Studio Pro. 

The name of the document is the **Name** (not **Database name**) you provided when running the wizard:

{{< figure src="/attachments/appstore/connectors/external-database-connector/database-service-document.png" >}}

### 3.1 Query Screen {#query-screen}

On the left side of the document is the **Query** screen. Here, you can write an SQL query to retrieve data and run it to validate its response.

View data from the database in the [Tables & Columns](#tables-columns) screen on the right.

This screen includes the following fields:

* **Query Name** — query name, which is saved and can be used later
* **SQL Query** — text box where you can enter your query

In the **Parameters** section, click **Add Parameter** to enter the following information:

* **Name** — name of the parameter that can be used in the **SQL Query** field (in the form of {parameter_name})
* **Data Type** — select the type of data for your parameter
* **Test Value** — enter or select the value of the parameter

Click **Execute Query** to view a preview of the reponse.

### 3.2 Tables & Columns {#tables-columns}

The **Tables & Columns** field on the right side of the screen displays the information from your database. You can use queries to access certain information in your database.

### 3.3 Response {#response}

After [querying the database](/appstore/connectors/external-database-connector/#query-database), you can view the data included in the query in the **Response** screen.

If you are satisfied with the response, click **Use Response**. This will take you to the [Data Structure](#data-structure) tab where you can preview and create an entity from the response.

### 3.4 Response Structure {#data-structure}

The **Data Structure** tab displays a preview of an entity that can be created from the response of your query. You can adjust the name, or move back to a previous step. Click **Save Query & Create Entity** to create the entity in your domain model.

## 4 Read More

To learn about how to use the data in a microflow, see the [Query External Database](/refguide/query-external-database/) activity. 
