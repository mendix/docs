---
title: "Use the External Database Connector"
url: /refguide/use-the-external-database-connector/
weight: 40
description: "Overview of the External Database Connector in Studio Pro"
aliases: 
    - /howto/integration/use-the-external-database-connector/
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

For information on how to configure the connector, see [External Database Connector](/appstore/modules/external-database-connector/). For information about the database wizard and how to connect using the External Database Connection document, see [External Database Connection](/refguide/external-database-connection/). 

## Prerequisites

Download the [External Database Connector](https://marketplace.mendix.com/link/component/219862) into your app. Make sure you have the following details for your external connection:  

* **Username** and **Password** for signing into the external database
* Connection details: **Host**, **Port**, **Database name**

If additional connection properties are required to connect, you can alternatively use **JDBC Connection String**.

## Connect to the External Database

### Establish Connection Between the External Database and Mendix App

1. Right-click the module you want to add the external database document to and click **Add other** > **External database connection**.

2. Select the database you want to connect to and add the connection details the Database Connection wizard.

    {{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/1.png" width="600" >}}

3. Click **“Test Connection”** to validate the connection to the external database.

{{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/2.png" width="600" >}}

Click **Save** to save the connection details, which are stored in 3 constants:

* `\<Document Name\>_DBSource`
* `\<Document Name\>_DBUsername`
* `\<Document Name\>_DBPassword`

For example: `*Database*_DBsource.`

{{% alert color="info" %}}Values for these constants are stored in the Active configuration of the user, the password is stored as a private value.{{% /alert %}}

### Explore Schemas of a Connected Database

When the connection is successful and saved, you can search the **Browse database** tab for Tables, Views, Procedures, and Functions.

{{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/3.png" width="700" >}}

### Create and Validate SQL Queries with Parameters

1. Create a new query by entering an SQL query in the **SQL query** field.

2. Open the **Parameters** tab and click **Add Parameter** if you want to use constants or variables in your query during runtime. Use curly braces to include a parameter in the query. 

3. Assign a Test Value to each parameter.

4. Click **Run Query** to validate the query and view the response.

For example, the query below retrieves a list of RequestedProductRequirement where the ProductLine is **Planes**.

SQL Query:
`Select requestedProductRequirement from productlines where productLine = {productLine}`

{{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/4.png" width="700" >}}

### Typecast Parameter Data Type

You can typecast `String` into UUID as shown below:

{{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/13.png" width="700" >}}

## Save Query

### Save Query to Retrieve Data

1. Click **Use Response** to view the response data and mapping.

2. In the **Response Structure** tab, you can choose create **New Entity** or **Reuse Existing Entity**.

3. If **New Entity** is selected, you can view the entity in the **Response** tab. Click **Save Query & Create Entity** to save the query and the newly created entity in the domain model. 

    {{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/5.png" width="600" >}}

4. If **Reuse Entity** is selected, all entities mapped to other queries of same document are listed in the drop down list. Select  the entity you want to reuse and and click on **Save Query**.

    {{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/5a.png" width="600" >}}

### Save DML Query

1. For DML queries, *Number of affected rows* will be displayed as a response.

    For example, `INSERT INTO classicmodels.productlines(productLine, requestedProductRequirement)VALUES({productLine}, {requestedProductRequirement})`

2. Click **Save Query**.

    {{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/6.png" width="600" >}}

{{% alert color="info" %}} For all DML Queries, changes made to database in the Mendix Design phase are automatically rolled back. {{% /alert %}}

## Update Existing Query

It is possible to use the existing entity when updating a existing query. 

{{% alert color="info" %}}

This possibility was introduced in Studio Pro 10.15 and above.

{{% /alert %}}

For example, you can modify the query below to retrieve a list of productLine, textDescription, htmlDescription columns from ProductLines where the ProductLine is **Planes**.

SQL Query:
Existing Query: `Select requestedProductRequirement from productlines where productLine = {productLine}`
Modified Query: `Select productLine, textDescription, htmlDescription from productlines where productLine = {productLine}`

Do the following:

1. Rerun the Query, to see the **Response**.

2. Click **Use Response** to see the entity preview.

3. Use the existing entity or create a new entity:

4. If **New Entity** is selected, you can view the entity in the **Response** tab.
     1. Click **Save Query & Create Entity** to save the query and the newly created entity in the domain model.

5. If **Update Entity** is selected,you can see changes that will be made to the existing entity.
     1. Click **Update Entity** to save the query and the changes made to the entity in the domain model.
            {{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/5b.png" width="600" >}}

## Call Stored Procedure

{{% alert color="info" %}} Calling stored procedures with parameters is supported for Studio Pro 10.13 and above. {{% /alert %}}

To call a stored procedure, do the following:

1. Select the **Stored procedure** checkbox.

2. Enter the query to call a stored procedure. Add a schema name with the stored procedure name. For example, use the following syntax, where `latest_schema` is the schema name, and `InsertDataIntoTable1` is the stored procedure: `Call latest_schema.InsertDataIntoTable1({1},{2})`. 

    {{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/9.png" width="600" >}}

3. Create **IN**, **OUT**, and **INOUT** parameters for all parameters present in the stored procedure. Make sure the **Name in DB** is the same as the name of parameter in the stored procedure.
   
    {{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/10.png" width="600" >}}

4. Click **Run Query**. This returns an entity with the number of affected rows and all INOUT and OUT parameters. If the stored procedure returns a **Result set**, an associated entity is created.

    {{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/11.png" width="600"  >}}

5. Click **Use Response** > **Save Query & Create Entity** to save the query and the newly-created entities in the domain model.
   
    {{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/12.png" width="600"  >}}

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

    {{< figure src="/attachments/refguide/modeling/integration/use-the-external-database-connector/7.png" width="600"  >}}

You are now ready to use data from an external database in your Mendix App.

{{% alert color="warning" %}}
Make sure to use secure measures, as this action can allow for SQL injection into your app. Do not use user-supplied or environment-supplied variables in your SQL statement; if possible, they should be static.
{{% /alert %}}
