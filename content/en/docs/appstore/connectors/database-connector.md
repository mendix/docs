---
title: "Database"
url: /appstore/connectors/database-connector/
category: "Connectors"
description: "Describes the configuration and usage of the Database connector, which is available in the Mendix Marketplace."
tags: ["marketplace",  "marketplace component", "database connector", "jdbc", "hikari", "query" ]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

Use the [Database](https://marketplace.mendix.com/link/component/2888/) connector to incorporate your external data directly in your Mendix application. This connector enables seamlessly connecting to external databases without being limited in your choice of database or SQL dialect.

This document focuses on executing an SQL `SELECT` query and SQL statements on external relational databases.

The **Execute query** action (which is present in the connector) provides a consistent environment for Mendix apps to perform an arbitrary `SELECT` SQL query on relational external databases.  A Java database connectivity (JDBC) API (which is a standard Java API) is used when the Java action attempts to connect with a relational database for which a JDBC driver exists.

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

Once you have imported the Database Connector into your app, you will have the **Database connector** category available in the **Toolbox**. The connector supports five actions: **Execute query**, **Execute statement**, **Execute parameterized query**, **Execute parameterized statement**, and **Execute callable statement**.

![](/attachments/appstore/connectors/database-connector/database-connector-in-toolbox.png)

### 3.1 Executing Queries & Statements

#### 3.1.1 Usage

To use any of **Execute parameterized query**, **Execute parameterized statement**, **Execute query** or **Execute statement**, in your Mendix application, drag them into your microflow. Next, provide all the arguments for the selected action and choose the output result name.

The **Execute query** and **Execute parameterized query** actions should be used for querying objects with a `SELECT` SQL command. The **Execute statement** and **Execute parameterized statement** actions should be used for the other DML commands (for instance, `INSERT`, `UPDATE`, or `DELETE`).

For both queries and statements, the difference between the parameterized and regular versions are that the parameterized version takes a string template parameter, while the regular version takes a fully formed SQL command string with no placeholders.

{{% alert color="info" %}}
The parameterized actions are only available with Database Connector versions 3.0.0 and above. For these, it is necessary to use Mendix [8.6.0](/releasenotes/studio-pro/8.6/#860).
{{% /alert %}}

#### 3.1.2 Results

These are the results of the actions:

* **Execute query** and **Execute parameterized query** – a list of objects of the row type, which is also the output of the `SELECT` SQL query
* **Execute statement** and **Execute parameterized statement** – either an integer or a long value, which usually represents the amount of affected rows

### 3.2 Executing Callable Statements

The **Execute callable statement** microflow action is used to execute stored procedures and functions in the database engine. In addition to **JDBC Url**, **Username**, and **Password**, this action expects an input object of type `DatabaseConnector.Statement`, which should define the contract to perform the execution and retrieve the results:

![](/attachments/appstore/connectors/database-connector/callable-statement-action.png)

The `DatabaseConnector.Statement` type is a non-persistable entity defined as follows:

![](/attachments/appstore/connectors/database-connector/statement-parameter-diagram.png)

The **Content** attribute of the `DatabaseConnector.Statement` type should contain the statement body (meaning, the SQL content). An association with a `DatabaseConnector.Parameter` type is also available to define, if applicable, the input and output parameters that the stored procedure expects. 

The `DatabaseConnector.Parameter` type uses the **Name** and **Position** attributes to refer to either the parameter name or position in the stored procedure. All parameters within a statement should use one of the two options uniformly.

The `DatabaseConnector.Parameter` type also has a **ParameterMode** attribute to indicate which parameter mode to use:

* `DatabaseConnector.ParameterMode.INPUT` – for **IN** parameters
* `DatabaseConnector.ParameterMode.OUTPUT` – for **OUT** parameters
* `DatabaseConnector.ParameterMode.INOUT` – for **INOUT** parameters

This type should also not be used directly but through one of its type specific specializations instead.

#### 3.2.1 Supported Parameter Types

For a type-safe representation of a stored procedure's **IN**, **OUT**, or **INOUT** parameters, the `DatabaseConnector.Parameter` type has pre-defined specializations that should be used.

##### 3.2.1.1 Primitive Types

The `DatabaseConnector.ParameterDecimal`, `DatabaseConnector.ParameterLong`, `DatabaseConnector.ParameterDateTime`, and `DatabaseConnector.ParameterString` specializations can be used to refer to the SQL primitive types for decimals, natural numbers, dates, and character types, respectively.

![](/attachments/appstore/connectors/database-connector/primitive-types-parameters.png)

The **Value** attribute defined in these specializations will be handled differently depending on the parameter mode used. For input parameters, the attribute must hold the value to pass to the stored procedure. For output parameters, it will be set to the output from the stored procedure.

##### 3.2.1.2 ParameterObject Type

Some database vendors support creating complex SQL object types, which can be referred to using the `DatabaseConnector.ParameterObject`. The **SQLTypeName** attribute should be set to the underlying SQL object type name.

![](/attachments/appstore/connectors/database-connector/parameter-object-parameter.png)

Attributes of the object can be represented by associated `DatabaseConnector.Parameter` objects using the `ParameterObject_Parameter` association. You can use any specialization of `DatabaseConnector.Parameter` for the associated parameter objects. This also allows for flexibility defining the nested object hierarchies (as in, objects with attributes of the object type).

{{% alert color="info" %}}
Attributes within an object are identified by their position in the object and not by their name. Therefore, it is necessary to set the **Position** attribute correctly for all object attributes.
{{% /alert %}}

##### 3.2.1.3 ParameterList Type {#parameterlist}

List parameters are also supported and usable via the `DatabaseConnector.ParameterList` type. The **SQLTypeName** attribute should refer to the SQL list type:

![](/attachments/appstore/connectors/database-connector/parameter-list-parameter.png)

List items can be represented by associated `DatabaseConnector.Parameter` objects using the `ParameterObject_Parameter` association. You can use any specialization of `DatabaseConnector.Parameter` for the list items.

##### 3.2.1.4 ParameterRefCursor Type

To deal with **REF CURSOR** outputs, use the `DatabaseConnector.ParameterRefCursor` type:

![](/attachments/appstore/connectors/database-connector/parameter-ref-cursor-parameter.png)

The many-to-many-association with `DatabaseConnector.Parameter` is also used here for the same reasons mentioned in the [ParameterList Type](#parameterlist) section above about list parameters.

## 4 Best Practices

* Avoid having a user input as part of your dynamic SQL queries and statements, and use parameters instead
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
* [PostgreSQL](https://jdbc.postgresql.org/download.html)
* [Presto](https://prestodb.github.io/docs/current/installation/jdbc.html)
* [SQLite](https://bitbucket.org/xerial/sqlite-jdbc/downloads/)

{{% alert color="info" %}}
If you intend to connect to SQL Server using integrated security, please be aware that the JDBC driver in the **userlib** folder needs to match the version supplied with the Mendix Platform (via the **runtime/bundles/** folder inside the Mendix installation directory).
{{% /alert %}}

## 6 Developing This Marketplace Component

1. Clone [https://github.com/mendix/database-connector.git](https://github.com/mendix/database-connector.git).
2. Open the *DatabaseConnector.mpr* in the Desktop Modeler or Studio Pro.
3. Use the **Deploy for Eclipse** option (<kbd>F6</kbd>) and then import this connector as an Eclipse project to the Eclipse IDE.

## 7 Read More

* [How to Implement Best Practices for App Security](/howto/security/best-practices-security/)
