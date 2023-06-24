---
title: "Database Connection"
url: /refguide/external-database-connection/
weight: 49
description: "Overview of the external database connection document in Studio Pro"
tags: ["studio pro", "database connector", "mendix 10", "mendix connect", "connect to database"]
---

## 1 Introduction

The [Mendix 10 Database Connector](/appstore/connectors/database-connector-mx10/) integrates with Studio Pro with an **External database connection** service document. Use this document alongside the connector to connect to external databases right in Studio Pro.

This page references the **External database connection** document in Studio Pro. See [Mendix 10 Database Connector](/appstore/connectors/database-connector-mx10/) for the complete documentation. 

{{% alert color="warning" %}}
You must have the [Mendix 10 Database Connector](add marketplace link) installed for external database connections to work properly while running your app. For instructions on adding modules or connectors to your app, see [Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/).
{{% /alert %}}

## 2 Connect to Database Wizard

Clicking **Add other > External database connection** on your module opens the Connect to Database wizard. Learn more about this wizard in the [Connect to Database Wizard](/appstore/connectors/database-connector-mx10/) section of the main *Mendix 10 Database Connector* documentation.

## 3 External Database Connection Document {#external-database-document}

After completing the **Connect to Database** wizard, the external database connection document is open in Studio Pro. 

The name of the document is the **Name** (not **Database name**) you provided when running the wizard.

### 3.1 Query Screen {#query-screen}

On the left side of the document is the **Query** screen. Here, you can write an SQL query to retrieve data, and then run it to validate its response.

View data from the database in the [Tables & Columns](#tables-columns) screen on the right.

This screen includes the following fields:

* **Query Name**
* **SQL Query**
* **Parameters**
    * **Name**
    * **Data Type**
    * **Test Value**

Click **Execute Query** to view a preview of the reponse.

### 3.2 Tables & Columns {#tables-columns}

### 3.3 Response {#response}

### 3.4 Data Structure {#data-structure}