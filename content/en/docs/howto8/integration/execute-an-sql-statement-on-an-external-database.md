---
title: "Execute an SQL Statement on an External Database"
linktitle: "Execute SQL on External Database"
url: /howto8/integration/execute-an-sql-statement-on-an-external-database/
weight: 17
---

## Introduction

The Mendix Platform offers many ways to integrate with external data, but integrating with external databases has not been a seamless experience until now. The [Database Connector](/appstore/modules/database-connector/) can be used to seamlessly connect to external databases without limiting you in your choice of database or SQL dialect, thus enabling you to incorporate external data directly in your Mendix application. Two actions are available via the connector: [Execute statement](#statement) and **Execute query**.

The **Execute statement** action provides a consistent environment for Mendix apps to perform an arbitrary SQL statement on relational external databases. A Java database connectivity (JDBC) API is used when this Java action attempts to connect with a relational database for which a JDBC driver exists.

The Database Connector can be used for the following SQL statements:

* `CREATE`
* `INSERT`
* `UPDATE`
* `STORED PROCEDURE`
* `DELETE`
* `DDL`
* `SELECT` (only with the **Execute query** action, not with **Execute statement**)

{{% alert color="info" %}}
Automatic mapping is currently not possible.
{{% /alert %}}

This document will focus on executing an SQL on relational external databases.

This how-to teaches you how to do the following:

* Execute SQL statements on relational external databases with the help of the Database Connector
* Configure the **Execute statement** action

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download the Database Connector from the Mendix Marketplace into your app
* Have a database **URL** address that points to your database
* Have the **username** and **password** for signing into the database (relative to the database URL address)
* Have the SQL statement to execute (relative to the database type; note that the SQL dialect differs for different databases)
* Have the JDBC driver *.jar* for the database to which you want to connect

## Preparation

You must place the JDBC driver *.jar* files for the databases to which you want to connect inside the **userlib** directory of your Mendix app. 

For example, if you want to connect to an Amazon RDS PostgreSQL database (for example, `jdbc:postgresql://xyz-rds-instance.ccnapcvoeosh.eu-west-1.rds.amazonaws.com:5432/postgres`), you need to place the PostgreSQL Jdbc driver *.jar* file inside the userlib folder.

## Using the Execute Statement Action in a Microflow {#statement}

To use an ExecuteStatement action in a microflow, follow these steps:

1. Find the **Database Connector** in the **Toolbox**.

    {{< figure src="/attachments/howto8/integration/execute-an-sql-statement-on-an-external-database/19399122.png" class="no-border" >}}

2. Drag the **Execute statement** action into your microflow: 

    {{< figure src="/attachments/howto8/integration/execute-an-sql-statement-on-an-external-database/19399123.png" class="no-border" >}}

3. Configure the statement:
    * Provide all the valid arguments to the statement action
    * The **Jdbc url** argument must specify a database URL that points to your relational database and is dependent upon the particular database and JDBC driver
        * It will always begin with `jdbc:` protocol text, but the rest is up to the particular vendor (for example, the `jdbc:<a rel="nofollow">mysql://hostname/databaseName'</a>` JDBC URL format can be used for MySQL databases)
    * Specify the **Output Variable name**
        * In the example below, the variable is **amountOfUpdatedRows**, which is the output of the SQL statement; this is also the output of the SQL statement provided for the **Sql** argument within the connector

    {{< figure src="/attachments/howto8/integration/execute-an-sql-statement-on-an-external-database/19399146.png" class="no-border" >}}

    The statement action's result is either an **Integer** or a **Long** value, which usually represents the amount of affected rows.

{{% alert color="warning" %}}
It is your responsibility to apply the proper security, as this action can allow for SQL injection into your Mendix application. Among others things, do not use user-supplied or environment-supplied variables in your SQL statement; if possible, you should prefer them to be static.
{{% /alert %}}
