---
title: "Database Connector"
category: "Connectors"
description: "Describes the configuration and usage of the Database Connector, which is available in the Mendix App Store."
tags: ["app store", "app store component", "database connector", "jdbc", "hikari", "query" ]
draft: true
---

## 1 Introduction

Use the [Database Connector](https://appstore.home.mendix.com/link/app/2888/) to incorporate your external data directly in your Mendix application. This connector enables seamlessly connecting to external databases without being limited in your choice of database or SQL dialect.

This document focuses on executing an SQL `SELECT` query and SQL statements on external relational databases.

The **Execute query** action (which is present in the connector) provides a consistent environment for Mendix app projects to perform an arbitrary `SELECT` SQL query on relational external databases.  A Java database connectivity (JDBC) API (which is a standard Java API) is used when the Java action attempts to connect with a relational database for which a JDBC driver exists.

The **Execute statement** action works internally in the same manner as the **Execute query** action. However, it is used for `INSERT`, `UPDATE`, `DELETE`, `STORED PROCEDURE`, or `DDL` statements.

### 1.1 Dependencies

* [HikariCP](https://github.com/brettwooldridge/HikariCP), a high-performance JDBC connection pool

## 2 Prerequisites

These are the prerequisites for using this connector:

* A database URL address that points to your database
* The user name for logging into the database, relative to the database URL address
* The password for logging into the database, relative to the database URL address
* The JDBC driver libraries (*.jar* extension) for the databases you want to connect to must be placed inside the **userlib** directory of your Mendix application
	* For example, if you want to connect to Amazon RDS PostgreSQL database (`jdbc:postgresql://xyz-rds-instance.ccnapcvoeosh.eu-west-1.rds.amazonaws.com:5432/postgres`), you need to place the PostgreSQL JDBC driver *.jar* inside the **userlib** folder
	* For more information, see the [Common JDBC Drivers](#links) section below
* Specific to the `Execute` query action: an entity in the domain model that can be used for the results of the executed query
	* For example, a query like `select name, number from stock` has two columns (of the string and integer type, respectively), so in order to use the **Execute query** action, you have to add an entity in the domain model that has the same attributes as the columns in the query

## 3 Getting Started

### 3.1 Usage

Once you have imported the Database Connector into your app project, you will have **Database Connector** available in the **Toolbox**. The connector supports two actions: **Execute query** and **Execute statement**. To use either of these in your Mendix application, drag them into your microflow. Next, provide all the arguments for the selected action and choose the output result name.

### 3.2 Results

These are the results of the actions:

* **Execute query** –  a list of objects of the row type, which is also the output of the `SELECT SQL` query
* **Execute statement** – either an integer or a long value, which usually represents the amount of affected rows

## 4 Best Practices

* Avoid having a user input as part of your dynamic SQL queries and statements (in the future, using parameters with queries or statements will be supported)
* Avoid fetching large amounts of data, which can lead to memory issues (as all the **ResultSet** data is loaded into memory at once)

## 5 Common JDBC Drivers {#links}

* [Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/configure-jdbc-connection.html#download-jdbc-driver)
* [Apache Derby](http://db.apache.org/derby/derby_downloads.html)
* [Firebird](http://www.firebirdsql.org/en/jdbc-driver/)
* [H2 Database Engine](http://www.h2database.com/html/main.html)
* [HSQLDB](https://sourceforge.net/projects/hsqldb/files/)
* [IBM DB2](https://www.ibm.com/support/pages/download-initial-version-115-clients-and-drivers)
* [IBM Informix](https://www.ibm.com/products/informix?mhsrc=ibmsearch_a&mhq=informix)
* [MariaDB](https://downloads.mariadb.org/connector-java/)
* [Microsoft SQL Server/SQL Database](https://www.microsoft.com/en-us/download/details.aspx?id=11774)
* [MySQL](https://dev.mysql.com/downloads/connector/j/)
* [Oracle Database](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html)
* [OrientDB](https://orientdb.org/)
* [PostgreSQL](https://orientdb.org/)
* [Presto](https://prestodb.github.io/docs/current/installation/jdbc.html)
* [SQLite](https://bitbucket.org/xerial/sqlite-jdbc/downloads/)

## 6 Developing This App Store Component

1. Clone [https://github.com/mendix/database-connector.git](https://github.com/mendix/database-connector.git).
2. Open the *DatabaseConnector.mpr* in the Desktop Modeler or Studio Pro.
3. Use the **Deploy for Eclipse** option (<kbd>F6</kbd>) and then import this connector as an Eclipse project to the Eclipse IDE.

## 7 Read More

* [How to Implement Best Practices for App Security](https://docs.mendix.com/howto/security/best-practices-security)
