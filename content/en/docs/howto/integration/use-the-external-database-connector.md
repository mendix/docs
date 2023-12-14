---
title: "Use the External Database Connector"
url: /howto/integration/use-the-external-database-connector
weight: 21
description: "Overview of the External Database Connector in Studio Pro"


#If moving or renaming this doc file, implement a temporary redirect and let the respective team (buildpack) know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

It is often required to use and access data from External Database directly in your Mendix App.This how-to describes how to easily and seamlessly connect and use data from an external database using [External Database Connector](https://marketplace.mendix.com/link/component/219862).

External Database Connector supports connecting to below databases:

- MSSQL
- MySQL
- PostgreSQL
- Oracle

This how-to teaches you how to do the following:

* Connect your Mendix App with an external Database.
* Create and execute different SQL Queries.

Let's use External Database Connector in  Mendix App, to connect, retreive and insert data.

## 2 Prerequisites

Let's assume that you already have Mendix app.

* Download the [External Database Connector](https://marketplace.mendix.com/link/component/219862) from the Mendix Marketplace into your app.

* **username** and **password** for signing into the external database
* Connection details: **Host**, **Port**, **Database name**

if additional connection properties are required to connect, you can alternatively use **“JDBC Connection String”**.

## Steps to follow:

### 1. Establish connection between external database and Mendix app

1. Create new document of type **'External Database document'**(File -> New Document -> External Database Connection or Rightclick on Module -> Add other -> External Database Connection)

2. Select Database and add Connection details to connect to Database

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/1.png" >}}

3. Use **“Test Connection”** to validate connection of Mendix app with External Database 

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/2.png" >}}

Hurray Connection between your external database and Mendix app is established successfully.

Click on **Save** to save connection details, these details are stored in 3 constants.

- \<Document Name\>_DBSource
- \<Document Name\>_DBUsername
- \<Document Name\>_DBPassword

For example: *Database*_DBsource. 

### 2. Explore Tables and Views of a connected Database:

Once connection is successful and saved, you can explore and search **Tables & Views** of external database in External Database Connection document.

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/3.png" >}}

### 3. Create and Validate SQL Queries with Parameters:

a. Create new query by entering **SQL Query** in SQL query editor box.
b. Add **Parameters** if you want to use mendix constants or variables in your query during runtime(use curly braces to include parameters in query).
c. Testvalue should be assigned to the parameter using **Add Parameter**.
d. **Run Query** to validate query and see the response.

for example:
Below query retrieves list of RequestedProductRequirement where ProductLine is "Planes"
SQL Query :
`Select requestedProductRequirement from productlines where productLine = {productLine}`

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/4.png" >}}

### 4a. Save Query & Create Enity:

a. For query which returns a resultset, click **Use Response** to create mapping.
b. In **Response Structure** you can see Entity preview.
c. Click on **Save Query & Create Enity** to save query and a new Entity is created in the domain model using response structure.

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/5.png" >}}

### 4b. Save Query:

a. For DML queries, *Number of affected rows* will be displayed as a Reponse.
For example: 
`INSERT INTO classicmodels.productlines(productLine, requestedProductRequirement)VALUES({productLine}, {requestedProductRequirement})`
b. Click **Save Query**
{{< figure src="/attachments/howto/integration/use-the-external-database-connector/6.png" >}}

**For all DML Queries, changes made to database in Mendix Design phase are automatically rolled back**

### 5. Use “Query External Database” activity:

a. Use `Query External Database` activity from toolbox in the microflow.
b. Double click on activity and select created External Database Connection document.
c. All the queries created for the selected document will appear in the dropdown, select the required one.
d. Assign values to the parameters using `Expression editor`.
e. Output details for the selected query will be auto-populated.

{{< figure src="/attachments/howto/integration/use-the-external-database-connector/7.png" >}}

With these steps you are ready to use data from external database in your Mendix App.

{{% alert color="warning" %}}
It is your responsibility to apply the proper security, as this action can allow for SQL injection into your Mendix application. Among others things, do not use user-supplied or environment-supplied variables in your SQL statement; if possible, you should prefer them to be static.
{{% /alert %}}