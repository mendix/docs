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

Double-click the **Query External Database** activity to view its properties.

In the **Query** section are the following properties:

* **Database** – the name of the database you want to query
* **Query** – the saved SQL query from your configuration of the Database connector
* **Parameters** – the saved parameters from your configuration of the Database connector

In the **Output** section are the following properties:

* **Return type** – the return type once the microflow is completed
* **Use return value** – select **Yes** or **No**
    * **List name** – if **Use return value** is set to **Yes**, this is the name of the returned list
