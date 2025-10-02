---
title: "Query External Database"
url: /refguide/query-external-database/
weight: 90
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## Introduction

The **Query External Database** activity is used with the [External Database Connector](/appstore/modules/external-database-connector/) to use preconfigured database queries and display retrieved data in your app.

This document covers the properties of the **Query External Database** activity. 

To learn how to use this activity in a microflow and configure other aspects of the Database connector, see the [Configuration](/appstore/modules/external-database-connector/#configuration) section of *External Database Connector*.

## Properties

{{% alert color="info" %}}
Prior to Mendix 11.3.0, some of these properties were grouped in different sections.
{{% /alert %}}

Double-click the **Query External Database** activity to view its properties.

The **General** section contains the following properties, which are used to provide dynamic connection parameter values:

* **Database** – the name of the database you want to query

* **Connection Parameters**
    * **DBSource** – Enter the JDBC URL you want to use for connection during runtime
    * **DBUsername** – Enter the username you want to use for connection during runtime
    * **DBPassword** – Enter the password you want to use for connection during runtime

    If you are using SSL based authentication for Postgres, provide the value for

    * **ClientCertificateIdentifier**

    If you are using key-pair authentication for Snowflake, provide the value for:

    * **PrivateKey**
    * **Passphrase**

The **Query** section contains the following properties:

* **Query** – the saved SQL query from your configuration of the Database connector
* **Dynamic** – Choose **Yes** to update the query—*this option is available in Mendix 11.3.0 and above*
    * **SQL** – When **Yes** is selected, the SQL field appears prepopulated with the selected query; you can then modify this query, using variables and parameters if required
* **Parameters** – the saved parameters from your configuration of the Database connector

The **Output** section contains the following properties:

* **Return type** – the return type once the microflow is completed
* **Use return value** – select **Yes** or **No**
    * **List name** – if **Use return value** is set to **Yes**, this is the name of the returned list

{{% alert color="warning" %}}
It is your responsibility to apply the proper security, as this action can allow for SQL injection into your application. Do not use user-supplied or environment-supplied variables in your SQL statement; if possible, you should prefer them to be static.
{{% /alert %}}
