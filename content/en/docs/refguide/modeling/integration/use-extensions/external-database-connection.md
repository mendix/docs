---
title: "External Database Connection"
url: /refguide/external-database-connection/
weight: 30
description: "Overview of the [External Database Connection document](https://marketplace.mendix.com/link/component/219862) in Studio Pro, downloaded from the Mendix Marketplace."
---

## Introduction

The [External Database Connector](/appstore/modules/external-database-connector/) integrates with Studio Pro with an **External database connection** service document. Use this document to connect to external databases in Studio Pro.

This page references the External Database Connection document in Studio Pro. For information on how to configure the connector, see [External Database Connector](/appstore/modules/external-database-connector/). For information on how to create and validate SQL queries, see [Use the External Database Connector](/refguide/use-the-external-database-connector/).

{{% alert color="info" %}}
You must have the [External Database Connector](https://marketplace.mendix.com/link/component/219862) installed for external database connections to work properly while running your app. For instructions on adding modules or connectors to your app, see [Use Marketplace Content in Studio Pro](/appstore/use-content/).
{{% /alert %}}

{{% alert color="info" %}}
For Studio Pro 10.18, the External Database Connector uses a different approach to connect to databases during design time. This functionality enhances consistency between design time and runtime environments. To enable this beta feature, use the flag: `--enable-live-preview`

For information on how to connect using the External Database Connection document with a feature flag, see [External Database Connection](/refguide/use-the-external-database-connector/#enable-live-preview).
{{% /alert %}}

## Connect to Database Wizard {#wizard}

Right-click your module and click **Add other > External database connection** to open the **Database Connection** wizard:

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/database-connection-wizard.png" class="no-border" width="600" >}}

Enter or select the following:

* **Name** — name of your database connection
* **Database Type** — Microsoft SQL, MySQL, Oracle, PostgreSQL, or Snowflake (Beta support from [Studio Pro 10.10](/releasenotes/studio-pro/10.10/))

### Connection Details

If you select **Use connection details**, enter:

* **Host** — the host name (`localhost` when testing locally)
* **Port** — the port number
* **Database Name** — the name of the database
* **User Name** — the username to access the database
* **Password** — the password to access the database

### Connection String

If you select **Use connection string**, enter the following:

* **Username** — the username to access the database
* **Password** — the password to access the database
* **JDBC Connection String** — the connection string, in the following formats for each database type:
    * **Microsoft SQL** — `jdbc:sqlserver://myHostName:myPortNumber;databasename=myDatabaseName`
    * **MySQL** — `jdbc:mysql://myHostName:myPortNumber/myDatabaseName`
    * **Oracle** — `jdbc:oracle:thin:@//myHostName:myPortName/myDatabaseName`
    * **PostgreSQL** — `jdbc:postgresql://myHostName:myPortNumber/myDatabaseName`
    * **Snowflake** — `jdbc:snowflake://my_account_identifier.snowflakecomputing.com/?db=myDatabaseName` 

### Password Security

The password you provide when using one of the above connection methods will be stored in a constant, which can be altered upon deployment on a Cloud node. As of Mendix Studio Pro 10.9, you can indicate which constants contain private or sensitive information to ensure this information is saved locally, and that it is not shared on the TeamServer or Cloud Portal.

## External Database Connection Document {#external-database-document}

After entering your database information in the Database Connection wizard, the external database connection document is open in Studio Pro. 

The name of the document is the **Name** (not **Database name**) you provided when running the wizard:

{{< figure src="/attachments/appstore/platform-supported-content/modules/external-database-connector/database-service-document.png" class="no-border" width="600" >}}

### Query Field {#query-screen}

On the left side of the document is the **Query** field. In this field, you can write an SQL query to retrieve data and run it to validate its response.

View data from the database in the [Tables & Columns](#tables-columns) screen on the right.

The Query field includes the following fields:

* **Query Name** — query name, which is saved and can be used later
* **SQL Query** — text box where you can enter your query

In the **Parameters** field, click **Add Parameter** to enter the following information:

* **Name** — name of the parameter that can be used in the **SQL Query** field (in the form of `{parameter_name}`)
* **Data Type** — the type of data for your parameter
* **Test Value** — enter or select the value of the parameter

Click **Run Query** to view a preview of the response.

### Tables & Columns {#tables-columns}

The **Tables & Columns** field on the right side of the screen displays the information from your database. You can use queries to access specific information in your database.

### Response {#response}

After [querying the database](/appstore/modules/external-database-connector/#query-database), view the data included in the query in the **Response data** field.

If you are satisfied with the response, click **Use Response**. This will take you to the [Response Structure](#data-structure) tab where you can preview and create an entity from the response.

### Response Structure {#data-structure}

The **Response Structure** tab displays a preview of an entity that can be created from the response of your query. You can adjust the name, or move back to a previous step. Click **Save Query & Create Entity** to create the entity in your domain model.

## Read More

To learn about how to use the data in a microflow, see the [Query External Database](/refguide/query-external-database/) activity. 
