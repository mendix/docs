---
title: "External Database Connector"
url: /appstore/connectors/external-database-connector/
category: "Connectors"
description: "Describes the configuration and usage of the new Database connector, which incorporates your external data directly in your Mendix app."
tags: ["marketplace",  "marketplace component", "database connector", "mendix 10", "studio pro 10", "query", "mssql", "mysql", "postgresql", "oracle", "new"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

Connect to Microsoft SQL, MySQL, PostgreSQL, and Oracle databases with the [External Database Connector](https://marketplace.mendix.com/link/component/219862).

{{% alert color="info" %}}
The External Database Connector is supported for [Studio Pro 10.6](/releasenotes/studio-pro/10.6/) and above.
{{% /alert %}}

### 1.1 Typical Use Cases

Use this module if you need to connect to databases and select data to use in your app. This connector allows you to directly test connections and queries during configuration in Studio Pro (design time). 

If you need to connect to other database types, check out the [Database Connector](/appstore/connectors/database-connector/). Keep in mind that design time support is not available for the older verison of the connector.

### 1.2 Features {#features}

This connector supports connections to the following database types:

* Microsoft SQL
* MySQL
* PostgreSQL
* Oracle

If you are looking for another database type, follow the prompt to request support your database when you open the database connection wizard.

This connector supports the following statements:

* `SELECT`
* `INSERT` 
* `UPDATE`
* `DELETE`

### 1.3 Limitations 

* `SELECT` queries can be saved only if they are successfully executed and a response structure is created
* The connector supports columns with primitive data types only
* If column names contain special characters, use an alias for the column name
* Parameters are only supported for filter values (prepared statements)

### 1.4 Prerequisites

* Studio Pro 10.6 or above
* External database connection details, including the following:
    * Login credentials
    * Database type
    * Hostname, port, and database name; or, instead, the JDBC connection string

## 2 Installation {#installation}

Download the [External Database Connector](https://marketplace.mendix.com/link/component/219862) and [add it to your app](/appstore/overview/use-content/).

## 3 Configuration in Design Time {#configuration}

With this connector, you can test database connections and add queries and parameters during design time before your app is running. This allows you to make sure everything works before deploying your app.

### 3.1 Getting Started: Connecting to a Database {#connect-database}

After [installing](#installation) the connector, get started by doing the following:

1. Right-click the module you would like to add the connection to and click **Add other** > **External database connection**. This opens the **Database Connection** wizard:

{{< figure src="/attachments/appstore/connectors/external-database-connector/database-connection-wizard.png" >}}

2. Select the database to which you would like to connect and enter the required information.

3. Click **Test Connection** to see if the connection works. If you do not see a green **Connection Successful** text confirmation, try checking your database details again.

4. Click **Save** to open the external database document for this database.

Now you can start [querying the database](#query-database) to select data for use in your app.

### 3.2 Querying a Database {#query-database}

To query the database, do the following:

1. Enter a query **Name** so you can access the same query later.
2. Enter your **SQL Query** to select data from your database for use in your app. For example, the query `SELECT * from customers` selects all rows in the **Customers** table:

{{< figure src="/attachments/appstore/connectors/external-database-connector/select-query-columns.png" >}}
   
3. Click **Run Query** to move to the **Response data** tab and view the queried data.

#### 3.2.1 Adding Parameters {#parameters}

Click **Add Parameter** to add parameters to your SQL queries to pass dynamic values to the query at runtime. 

The example database in [Querying a Database](#query-database) is a table of customer details with information such as customer name, address, and phone number. Let's say you want to specify a specific customer while your app is running. You can add the following parameter:

{{< figure src="/attachments/appstore/connectors/external-database-connector/example-parameter.png" >}}

Then, use the parameter in the query:

`select * from customers where contactFirstName like {paramFirstName}`

### 3.3 Using Query Response {#use-query-response}

After [querying the database](#query-database), you can view the response in the **Response** screen. 

Click **Use Response** if you want to [create an entity from the response](#create-entity).

{{< figure src="/attachments/appstore/connectors/external-database-connector/execute-query.png" >}}

### 3.4 Creating an Entity from the Response {#create-entity}

In the **Response Structure** tab, there is a preview of the queried data in an entity. You can adjust the entity name, though one is suggested for you:

{{< figure src="/attachments/appstore/connectors/external-database-connector/response-structure.png" >}}

Click **Save Query & Create Entity** to create the entity and add it to your domain model:

{{< figure src="/attachments/appstore/connectors/external-database-connector/entity-created-from-database.png" >}}

### 3.5 Using the Entity in a Microflow {#entity-microflow}

Use the Query External Database activity to call the database in a microflow. Do the following:

1. Create a new microflow and drag the **Query external database** activity into it.

{{< figure src="/attachments/appstore/connectors/external-database-connector/query-external-database.png" >}}

2. Double-click the activity and in the **Database** field, click **Select** to choose the database you want to query.
3. Select the **Query** you want to include in the activity (that you saved while [querying the database](#query-database)).
4. Include any [parameters](#parameters).
5. In the Output field, select if you want to **Use return value**.

{{< figure src="/attachments/appstore/connectors/external-database-connector/return-type.png" >}}
 
6. Click **OK**.
7. Configure the end event (such as displaying a list, if you are selecting data to appear in a list). 

You can now use the microflow in your app. Here is an example of a configured microflow:

{{< figure src="/attachments/appstore/connectors/external-database-connector/example-microflow.png" >}}

See the [Integration Activities](/refguide/integration-activities/) entry in the Studio Pro guide for further explanation of the properties in this activity.
