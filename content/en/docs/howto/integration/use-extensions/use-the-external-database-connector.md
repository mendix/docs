---
title: "Use the External Database Connector"
url: /howto/integration/use-the-external-database-connector
weight: 21
description: "Overview of the External Database Connector in Studio Pro"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team (buildpack) know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Use the [External Database Connector](https://marketplace.mendix.com/link/component/219862) to connect, retrieve, and insert data into your Mendix app.

{{% alert color="info" %}}
If you are using Studio Pro 10.12, please make sure to use the latest version 3.0.0 [External Database Connector](https://marketplace.mendix.com/link/component/219862).
{{% /alert %}}

The External Database Connector supports connections to the following databases:

* MSSQL
* MySQL
* PostgreSQL
* Oracle
* Snowflake (GA support from [Studio Pro 10.12](/releasenotes/studio-pro/10.12/) – Beta versions are available from [Studio Pro 10.10](/releasenotes/studio-pro/10.10/))

This how-to teaches you how to do the following:

* Connect your Mendix App to an external database
* Create and validate SQL Queries
* Use created queries in the **Query External Database** activity

## Prerequisites

Download the [External Database Connector](https://marketplace.mendix.com/link/component/219862) into your app. Make sure you have the following details for your external connection:  

* **Username** and **Password** for signing into the external database
* Connection details: **Host**, **Port**, **Database name**

If additional connection properties are required to connect, you can alternatively use **JDBC Connection String**.

## Connect to the External Database

### Establish Connection Between the External Database and Mendix App

1. Right-click the module you want to add the external database document to and click **Add other** > **External database connection**.

2. Select the database you want to connect to and add the connection details the Database Connection wizard.

    {{< figure src="/attachments/howto/integration/use-the-external-database-connector/1.png" >}}

3. Click **“Test Connection”** to validate the connection to the external database.

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/2.png" >}}

Click **Save** to save the connection details, which are stored in 3 constants:

* `\<Document Name\>_DBSource`
* `\<Document Name\>_DBUsername`
* `\<Document Name\>_DBPassword`

For example: `*Database*_DBsource.`

{{% alert color="info" %}}Values for these constants are stored in the Active configuration of the user, the password is stored as a private value.{{% /alert %}}

### Explore Schemas of a Connected Database

When the connection is successful and saved, you can search the **Browse database** tab for Tables, Views, Procedures, and Functions.

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/3.png" >}}

### Create and Validate SQL Queries with Parameters

1. Create a new query by entering an SQL query in the **SQL query** field.

2. Open the **Parameters** tab and click **Add Parameter** if you want to use constants or variables in your query during runtime. Use curly braces to include a parameter in the query. 

3. Assign a Test Value to each parameter.

4. Click **Run Query** to validate the query and view the response.

For example, the query below retrieves a list of RequestedProductRequirement where the ProductLine is **Planes**.

SQL Query:
`Select requestedProductRequirement from productlines where productLine = {productLine}`

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/4.png" >}}

### Typecast Parameter Data Type

You can typecast `String` into UUID as shown below:

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/13.png" >}}

## Save Query

### Save Query to Retrieve Data

1. Click **Use Response** to view the response data and mapping.

2. In the **Response Structure** tab, you can view the entity.

3. Click **Save Query & Create Entity** to save the query and the newly created entity in the domain model. 

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/5.png" >}}

### Save DML Query

1. For DML queries, *Number of affected rows* will be displayed as a response.
   
    For example, `INSERT INTO classicmodels.productlines(productLine, requestedProductRequirement)VALUES({productLine}, {requestedProductRequirement})`

2. Click **Save Query**.

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/6.png" >}}

{{% alert color="info" %}} For all DML Queries, changes made to database in the Mendix Design phase are automatically rolled back. {{% /alert %}}

## Call Stored Procedure

{{% alert color="info" %}} Calling stored procedures with parameters is supported for Studio Pro 10.13 and above. {{% /alert %}}

To call a stored procedure, do the following:

1. Select the **Stored procedure** checkbox.

2. Enter the query to call a stored procedure. Use the syntax: `Call latest_schema.InsertDataIntoTable1({1},{2})`

    {{< figure src="/attachments/howto/integration/use-the-external-database-connector/9.png" >}}

3. Create **IN**, **OUT**, and **INOUT** parameters for all parameters present in the stored procedure. Make sure the **Name in DB** is the same as the name of parameter in the stored procedure.
   
    {{< figure src="/attachments/howto/integration/use-the-external-database-connector/10.png" >}}

4. Click **Run Query**. This returns an entity with the number of affected rows and all INOUT and OUT parameters. If the stored procedure returns a **Result set**, an associated entity is created.

    {{< figure src="/attachments/howto/integration/use-the-external-database-connector/11.png" >}}

5. Click **Use Response** > **Save Query & Create Entity** to save the query and the newly-created entities in the domain model.
   
    {{< figure src="/attachments/howto/integration/use-the-external-database-connector/12.png" >}}

{{% alert color="info" %}}DML commands within a stored procedure are rolled back if they are not committed by a stored procedure, but DDL commands are not.{{% /alert %}}

{{% alert color="info" %}}Only stored procedures with primitive datatype parameters are supported.{{% /alert %}}

For Postgres, Mendix supports the following parameters:

* Decimal/numeric
* Real
* Double Precision
* Big Serial
* Small Serial
* Serial
* Bpchar
* Char
* Varchar
* Text
* Integer
* Smallint
* Bigint
* Timestamp with timezone
* Date only
* Time without timezone
* Time with timezone

For MSSQL, for **INOUT** and **OUT** parameters of type Decimal, test values (in design time) are rounded off. 

## Use the Query External Database Activity

1. Add the **Query external database** activity into your microflow.

2. Double-click on the activity and select the new external database document.

3. In the **Query** field, select the required query from the drop-down.

4. Assign values to the parameters using the **Expression editor**.

5. Output details for the selected query auto-populate.

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/7.png" >}}

You are now ready to use data from an external database in your Mendix App.

{{% alert color="warning" %}}
Make sure to use secure measures, as this action can allow for SQL injection into your app. Do not use user-supplied or environment-supplied variables in your SQL statement; if possible, they should be static.
{{% /alert %}}
