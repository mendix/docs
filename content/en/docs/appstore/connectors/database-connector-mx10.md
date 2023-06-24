---
title: "Database (Mendix 10)"
url: /appstore/connectors/database-connector-mx10/
category: "Connectors"
description: "Describes the configuration and usage of the new Database connector, which incorporates your external data directly in your Mendix app."
tags: ["marketplace",  "marketplace component", "database connector", "mendix 10", "studio pro 10", "query", "mssql", "mysql", "postgres", "oracle", "new"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

Connect to MSSQL, MySQL, PostgresSQL, and Oracle databases with the [Mendix 10 Database](add marketplace link here) connector.

This connector is supported for Studio Pro [10.2](/releasenotes/studio-pro/10.2/) and above. 

### 1.1 Typical Use Cases

Use this module if you need to connect to databases and select data to use in your app. This connector allows you to directly test connections and queries during configuration in Studio Pro ([design time](#design-time)). 

If you need to connect to other database types or use other statements besides `SELECT`, check out the [Database](/appstore/connectors/database-connector/) connector.

### 1.2 Features {#features}

This connector supports connections to the following database types:

* MSSQL
* MySQL
* PostgresSQL
* Oracle

This connector supports the following statements:

* `SELECT` — retrieves rows and columns from a database

### 1.3 Limitations

This connector currently has the following limitations:

* MSSQL database connections is only supported on x64 architecture.
* Parameterized queries are currently not supported.
* Queries are saved when clicking **Save Query & Create Entity**, which you may not want.

### 1.4 Prerequisites

* Studio Pro [10.2](/releasenotes/studio-pro/10.0/) or above
* External database connection details, including the following:
    * Login credentials
    * Database type
    * Hostname, port, and database name; or, instead, the JDBC connection string
* Familiarity with the [SELECT SQL query](https://www.w3schools.com/sql/sql_select.asp)

### 1.5  Dependencies

Hooray, this connector has no dependencies!

## 2 Installation {#installation}

Download the [Mendix 10 Database Connector](add marketplace link here) and [add it to your app](/appstore/general/app-store-content/#install).

## 3 Usage

### 3.1 Getting Started: Connecting to a Database {#connect-database}

After [installing](#installation) the connector, get started by doing the following:

1.  Right-click on the module where you would like to add the connection and click **Add other > External database connection**. This opens the **Connect to Database** [wizard](#wizard):

    {{< figure src="/attachments/appstore/connectors/database-connector-mx10/database-wizard-filled-in.png" >}}

2.  Enter the information for the database to which you would like to connect. For detaild descriptions of the fields in the wizard, see the [Connect to Database Wizard](/refguide/external-database-connection/#wizard) section of the *External Database Connection* document entry in the Studio Pro guide.

3.  Click **Test Connection** to see if the connection works. If you do not see a green **Connection Succcessful** text pop-up, try checking your database details again.

4.  Click **Save** to open the external database document for this database.

Now you can start [querying the database](#query-database) to select data for use in your app.

### 3.2 Querying a Database {#query-database}

To query the database, do the following:

1. Enter a **Query Name** so you can access the same query later.
2. Enter your `SELECT`  **SQL Query** to select data from your database for use in your app. For example, the query `SELECT * FROM Cars` selects all rows in the **Cars** table:

    {{< figure src="/attachments/appstore/connectors/database-connector-mx10/select-query-columns.png" >}}
3. Click **Execute Query** to move to the **Response** screen and view the queried data.

### 3.3 Using Query Response {#use-query-response}

After [querying the database](#query-database), you can look at the response in the **Reponse** screen. 

Click **Use Response** if you like what you see and want to move on to [creating an entity from the reponse](#create-entity).

{{< figure src="/attachments/appstore/connectors/database-connector-mx10/execute-query.png" >}}

### 3.4 Creating an Entity from the Response {#create-entity}

In the **Data Structure** screen you will see a preview of the queried data in an entity. You can adjust the entity name, though one is suggested for you:

{{< figure src="/attachments/appstore/connectors/database-connector-mx10/use-response.png" >}}

**Save Query & Create Entity** to create the entity and add it to your domain model:

{{< figure src="/attachments/appstore/connectors/database-connector-mx10/entity-created-from-database.png" >}}

### 3.5 Using Entity in a Microflow {#entity-microflow}

The [External Database] custom activity is still being developed.

## 4 Troubleshooting

