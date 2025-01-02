---
title: "Database"
url: /appstore/modules/database-connector/
description: "Describes the configuration and usage of the Database connector, which incorporates your external data directly in your Mendix app."
aliases:
    - /appstore/connectors/database-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

Use the [Database](https://marketplace.mendix.com/link/component/2888/) connector to incorporate your external data directly in your Mendix application. This connector lets you seamlessly connect to external databases without limiting your choice of database or SQL dialect.

This document focuses on executing an SQL `SELECT` query and SQL statements on external relational databases.

The **Execute query** action (which is present in the connector) provides a consistent environment for Mendix apps to perform an arbitrary `SELECT` SQL query on relational external databases. A Java database connectivity (JDBC) API (which is a standard Java API) is used when the Java action attempts to connect with a relational database for which a JDBC driver exists.

The **Execute statement** action works internally in the same manner as the **Execute query** action. However, **Execute statement** is used for `INSERT`, `UPDATE`, `DELETE`, `STORED PROCEDURE`, and `DDL` statements.

### Dependencies

This connector has one dependency: [HikariCP](https://github.com/brettwooldridge/HikariCP). HikariCP is a high-performance JDBC connection pool.

## Prerequisites{#prerequisites}

To use the Database connector, you must have the following prerequisites:

* A database URL address that points to your database
* The username for logging into the database, relative to the database URL address
* The password for logging into the database, relative to the database URL address
* The JDBC driver libraries (*.jar* extension) for the databases you want to connect to, placed inside the **userlib** directory of your Mendix application
    * For example, if you want to connect to the Amazon RDS PostgreSQL database (`jdbc:postgresql://xyz-rds-instance.ccnapcvoeosh.eu-west-1.rds.amazonaws.com:5432/postgres`), you need to place the PostgreSQL JDBC driver *.jar* inside the **userlib** folder
    * For more information, see the [Common JDBC Drivers](#links) section below
* Specific to the `Execute` query action: an entity in the domain model that can be used for the results of the executed query
    * For example, a query like `select name, number from stock` has two columns (of the string and integer type, respectively). To use the **Execute query** action, you have to add an entity in the domain model that has the same attributes as the columns in the query.

{{% alert color="info" %}}
Follow these prerequisites carefully to avoid connection errors. It is especially important to make sure you add the *.jar* files for the database to which you want to connect into the **userlib** folder.
{{% /alert %}}

## Getting Started

Once you have imported the Database connector into your app, you will have the **Database connector** category available in the **Toolbox**. This connector supports five actions: 

* **Execute query**
* **Execute statement**
* **Execute parameterized query**
* **Execute parameterized statement**
* **Execute callable statement**

{{< figure src="/attachments/appstore/platform-supported-content/modules/database-connector/database-connector-in-toolbox.png" class="no-border" >}}

### Executing Queries and Statements

#### Usage

To use **Execute parameterized query**, **Execute parameterized statement**, **Execute query**, or **Execute statement** in your application, drag it into your microflow. Next, provide all the arguments for the selected action and choose the output result name.

The **Execute query** and **Execute parameterized query** actions are used for querying objects with a `SELECT` SQL command. The **Execute statement** and **Execute parameterized statement** actions should be used for the other DML commands (for instance, `INSERT`, `UPDATE`, or `DELETE`).

For both queries and statements, the parameterized version takes a string template parameter, while the regular version takes a fully formed SQL command string with no placeholders.

{{% alert color="info" %}}
The parameterized actions are available only with Database connector versions 3.0.0 and above. To use them, you must use Studio Pro [8.6.0](/releasenotes/studio-pro/8.6/#860) and above.
{{% /alert %}}

##### Execute Query Action {#execute-query}

To use the **Execute query** action, you need to create an actual object of the entity that will reflect the structure of the result set. The action requires this object for mapping. It is an empty object with the purpose of passing on the structure (because Java actions cannot access the model).

##### Execute Statement Action

See [Execute an SQL Statement on an External Database](/howto/integration/execute-an-sql-statement-on-an-external-database/) for detailed instructions on how to use this action.

#### Results

The results of the actions are:

* **Execute query** and **Execute parameterized query** – a list of objects of the row type, which is also the output of the `SELECT` SQL query
* **Execute statement** and **Execute parameterized statement** – either an integer or a long value, which usually represents the number of affected rows

### Executing Callable Statements

The **Execute callable statement** microflow action is used to execute stored procedures and functions in the database engine. In addition to **JDBC Url**, **Username**, and **Password**, this action expects an input object of type **DatabaseConnector.Statement**. This input object should define the contract to perform the execution and retrieve the results:

{{< figure src="/attachments/appstore/platform-supported-content/modules/database-connector/callable-statement-action.png" class="no-border" >}}

The **DatabaseConnector.Statement** type is a non-persistable entity defined as follows:

{{< figure src="/attachments/appstore/platform-supported-content/modules/database-connector/statement-parameter-diagram.png" class="no-border" >}}

The **Content** attribute of the **DatabaseConnector.Statement** type should contain the statement body (the SQL content). If applicable, you can also define the input and output parameters that the stored procedure expects using an association with a **DatabaseConnector.Parameter** type. 

The **DatabaseConnector.Parameter** type uses the **Name** and **Position** attributes to refer to either the parameter name or position in the stored procedure. All parameters within a statement should use one of the two options uniformly.

The **DatabaseConnector.Parameter** type also has a **ParameterMode** attribute to indicate which parameter mode to use:

* **DatabaseConnector.ParameterMode.INPUT** – for **IN** parameters
* **DatabaseConnector.ParameterMode.OUTPUT** – for **OUT** parameters
* **DatabaseConnector.ParameterMode.INOUT** – for **INOUT** parameters

Do not use the **DatabaseConnector.Parameter** type directly; use it through one of its type-specific specializations instead.

#### Supported Parameter Types

For a type-safe representation of a stored procedure's **IN**, **OUT**, or **INOUT** parameters, use the **DatabaseConnector.Parameter** type's predefined specializations.

##### Primitive Types

The following table outlines which specialization to use to refer to each SQL primitive type.

| SQL Primitive Type | Specialization                          |
| ------------------ | --------------------------------------- |
| Decimals           | **DatabaseConnector.ParameterDecimal**  |
| Natural numbers    | **DatabaseConnector.ParameterLong**     |
| Dates              | **DatabaseConnector.ParameterDateTime** |
| Character types    | **DatabaseConnector.ParameterString**   |

{{< figure src="/attachments/appstore/platform-supported-content/modules/database-connector/primitive-types-parameters.png" class="no-border" >}}

The **Value** attribute defined in these specializations is handled differently depending on the parameter mode used. For input parameters, the attribute must hold the value to pass to the stored procedure. For output parameters, it is set to the output from the stored procedure.

##### ParameterObject Type

Some database vendors support creating complex SQL object types, which can be referred to using the **DatabaseConnector.ParameterObject**. The **SQLTypeName** attribute should be set to the underlying SQL object type name.

{{< figure src="/attachments/appstore/platform-supported-content/modules/database-connector/parameter-object-parameter.png" class="no-border" >}}

Attributes of the object can be represented by associated **DatabaseConnector.Parameter** objects using the **ParameterObject_Parameter** association. You can use any specialization of **DatabaseConnector.Parameter** for the associated parameter objects. This also allows for flexibility defining the nested object hierarchies (as in, objects with attributes of the object type).

{{% alert color="info" %}}
Attributes within an object are identified by their position in the object and not by their name. Therefore, it is necessary to set the **Position** attribute correctly for all object attributes.
{{% /alert %}}

##### ParameterList Type{#parameterlist}

List parameters are also supported and usable via the **DatabaseConnector.ParameterList** type. The **SQLTypeName** attribute should refer to the SQL list type:

{{< figure src="/attachments/appstore/platform-supported-content/modules/database-connector/parameter-list-parameter.png" class="no-border" >}}

List items can be represented by associated **DatabaseConnector.Parameter** objects using the **ParameterObject_Parameter** association. You can use any specialization of **DatabaseConnector.Parameter** for the list items.

##### ParameterRefCursor Type

To manage **REF CURSOR** outputs, use the **DatabaseConnector.ParameterRefCursor** type:

{{< figure src="/attachments/appstore/platform-supported-content/modules/database-connector/parameter-ref-cursor-parameter.png" class="no-border" >}}

The many-to-many-association with **DatabaseConnector.Parameter** is also used here for the same reasons mentioned in the [ParameterList Type](#parameterlist) section above.

## Best Practices

When using the Database connector, keep these best practices in mind:

* Avoid having a user input as part of your dynamic SQL queries and statements. Use parameters instead.
* Avoid fetching large amounts of data. Fetching too much data can lead to memory issues because all the **ResultSet** data is loaded into memory at once.

## Common JDBC Drivers{#links}

* [Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/configure-jdbc-connection.html#download-jdbc-driver)
* [Apache Derby](https://db.apache.org/derby/derby_downloads.html)
* [Firebird](https://www.firebirdsql.org/en/jdbc-driver/)
* [H2 Database Engine](https://www.h2database.com/html/main.html)
* [HSQLDB](https://sourceforge.net/projects/hsqldb/files/)
* [IBM DB2](https://www.ibm.com/support/pages/download-initial-version-115-clients-and-drivers)
* [IBM Informix](https://www.ibm.com/products/informix?mhsrc=ibmsearch_a&mhq=informix)
* [MariaDB](https://downloads.mariadb.org/connector-java/)
* [Microsoft SQL Server/SQL Database](https://www.microsoft.com/en-us/download/details.aspx?id=11774)
* [MySQL](https://dev.mysql.com/downloads/connector/j/)
* [Oracle Database](https://www.oracle.com/database/technologies/appdev/jdbc-downloads.html)
* [OrientDB](https://orientdb.org/)
* [PostgreSQL](https://jdbc.postgresql.org/download)
* [Presto](https://prestodb.github.io/docs/current/installation/jdbc.html)
* [SQLite](https://www.sqlite.org/src/tree?ci=trunk)

{{% alert color="info" %}}
If you intend to connect to SQL Server using integrated security, be aware that the JDBC driver in the **userlib** folder needs to match the version supplied with Studio Pro (via the **runtime/bundles/** folder inside the Mendix installation directory).
{{% /alert %}}

### Errors

Errors can often be resolved by adding missing **JAR** dependencies to the **userlib** folder in the module. For more information, see the [Prerequisites](#prerequisites) section.

## Developing This Marketplace Component

To develop this component, follow these steps:

1. Clone [https://github.com/mendix/database-connector.git](https://github.com/mendix/database-connector.git).
2. Open the *DatabaseConnector.mpr* in the Desktop Modeler or Studio Pro.
3. Use the **Deploy for Eclipse** option (<kbd>F6</kbd>), then import this connector as an Eclipse project to the Eclipse IDE.

## Read More

* [How to Implement Best Practices for App Security](/howto/security/best-practices-security/)
