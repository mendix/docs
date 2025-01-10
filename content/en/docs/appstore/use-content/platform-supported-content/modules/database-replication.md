---
title: "Database Replication"
url: /appstore/modules/database-replication/
description: "Describes the configuration and usage of the Database Replication module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

You can use the [Database Replication](https://marketplace.mendix.com/link/component/160/) module to import data from existing databases into your Mendix application. You can configure how to map each table, column, and relation to your Mendix domain model. Complex mappings over multiple table joins are also possible. You can configured in the client or from Java.

### Typical Use Cases

* Convert an existing database to a Mendix domain model
* Synchronize your application with a database used by another application
* Create mappings between database columns and object attributes
* Map database references to Mendix object references
* Map object attributes based on multiple joined tables

### Features

* Support for custom queries for object attributes
* Support for SQL Server 2005 or higher, Oracle, PostgreSQL, AS400, DB2, DMS2, and Informix databases
* Support for non-persistable objects
* Automatic query generation for object attribute values
* Object events are executed when importing

### Dependencies

* [Mx Model Reflection](/appstore/modules/model-reflection/) module – this module is required in order to configure the mapping between the Excel columns and the domain model
* The *replication.jar* file (supplied in the *.mpk* file)
    * Make sure you remove any older versions of *replication.jar* before installing this module (if you update, you do not need to remove the library anymore)
    * If you have an old *replication.jar file* and are using the [Excel Importer](/appstore/modules/excel-importer/), update this module as well, since you need Excel Importer 3.0 or higher when using this module

## Configuration

After downloading the module, you should place the **DatabaseMapping** page in the menu. With this page, you can create database connections and table mappings. 

To use this module, you need a database connection definition and a table mapping. The connection definition points to the location of the database you want to import. The table mapping determines how this database will be mapped to your domain model.

Once a database and mapping have been defined, you can use the **importByMapping** Java action to run an import. You can also use the **Import by table mapping** button on the mapping overview.

### Database Connection Properties

You can create new database connections from the **Databases** page. Each connection has a few basic properties. After creating a database connection, you should synchronize the table information using the button on the overview. This makes sure the connection information is correct, and that the replication module has all the table information from your database.

On this page you must select the database type before filling in the connection details. Available database parameters vary depending on database type.

#### Common Parameters

The following parameters are available to most database types:

* Host
* Port
* Username
* Password
* Database time zone

Depending on the database, some of the following parameters may be available:

* Database name
* Instance name
* Service name (exclusive to Oracle)
* SID (exclusive to Oracle)
* Use Integrated Security (for example, to connect to SQL Server using the your Windows user credentials)

##### Database time zone {#database-timezone}

By default, the module assumes that time zone of the source database is the same as Mendix application server time zone. Starting with module version 8.2.0, it is possible to configure source database time zone. If the setting is defined, the module will convert imported datetime values from specified database time zone to UTC. If the setting is not defined, the module will assume that database time zone is the same as application server time zone and will convert imported datetime values from server time zone to UTC.

#### Custom Connection Parameters

If your database type is not listed, it may still be possible to connect using a JDBC compatible driver and the **Custom** connection option. You need to obtain the drivers and place them inside the `userlib` directory and then configure the connection parameters:

* Username and Password: The credentials given to the driver to connect to the database server.
* Connection string: A fully formed JDBC URL string (for example, `jdbc:postgresql://localhost:5432/database` for a PostgreSQL database).
* Open/Close escape character: Characters used to quote table and column names (for example, `"` in PostgreSQL or `[` and `]` in SQL Server).
* Driver class: The full name of the driver to be loaded (for example, `org.postgresql.Driver` for PostgreSQL).
* Escape column names: Checkbox indicating if column names must be quoted using the escape characters when querying the database.
* Escape table names: Checkbox indicating if table names must be quoted using the escape characters when querying the database.
* Escape the schema and table name separately: Checkbox indicating schema and table names should be quoted together (for example, `"public_schema.table_name"`) or separately (for example, `"public_schema"."table_name"`).
* Allow AS token for tables: Checkbox indicating if `AS` is necessary when aliasing table names (for example, `SELECT * FROM table AS A` vs `SELECT * FROM table A`).
* Close connection after query: Checkbox indicating if the connection to the database must be closed after every query.

### Mapping Properties

Table mappings are created from the **Mappings** page. Each mapping is associated to a single database. A mapping is always defined for one main Mendix object type and one corresponding database table. The information that is needed from other tables can be joined in later. The **New mapping** dialog box enables setting these properties.

#### Description

A descriptive name for your mapping.

#### Database Name and Table

This is the database and table from which you want to retrieve data. If you need other tables to create your Mendix object, you can select these later.

#### Object Type

The Mendix object type to which this table should be mapped.

## Defining the Mappings

Once the mapping has been created, you can use the mapping editor to define various aspects of the mapping. The mapping editor tabs are described below.

At the top of the page, you can set the **Import action**. This setting controls how mapped objects are added to your application. This option only applies to the object selected on the template level. All associations need to be configured separately.

* **Synchronize and create objects** – updates objects that already exist with the values from the database; objects that cannot be found are created
* **Synchronize only existing objects** – only updates objects that already exist, but does not create new objects
* **Create an object for each row** – does not check whether objects already exist; for each row in the sheet, a new object is created
* **Only create new objects** – searches for any objects with the defined key; if an object is not found, a new object is created; if the object is found, it is skipped

## Tab Page Column Mappings

For each attribute or reference on the target Mendix object, you must define a column mapping. This defines which column will be used to get the attribute value. A column mapping has the properties described below.

### Mapping Type

Use this field to indicate which type of object the column should be processed as. You can choose an object attribute or an object reference. Depending on your choice, different subsequent options will be available.

### Query Type

This field determines whether you want to provide a custom query or use the automatic querying for this field. Usually, you will want the automatic querying, which is the default. Custom queries can be used to merge database fields, evaluate fields, or alter their notation. When you choose custom, you need to use escape characters or aliases exactly as the database expects.

### Table Alias

This indicates the table that has the column you want to map. The tables in this drop-down menu are the ones you joined in in the **include additional tables** tab. The **Start object** entry represents the table you selected when creating the table mapping.

### Column Name

This is the name of the column you want to map.

### Format with Microflow

You can use a custom microflow to parse data for an attribute. Such a microflow should have one string input parameter. This will receive the data entry from the database. The microflow should return the value to put in the field you want to map (for example, a DateTime if mapping to a DateTime attribute).

### Attribute Name

This field is the name of the attribute you map this column to. This field also has quicksearch functionality. Type in the box to the left of the reference selector and press “tab” to search for the value you typed.

### Reference and Object Type

These fields are used to configure referenced objects. You can specify what reference should be followed and what type of object is used. Both fields have a quicksearch box.

### Is Key

This field determines whether the attribute can uniquely identify its object.

The following options are available:

* **No** – no special handling for this column
* **Yes** or **Yes, only for the main object** – the field is a key value (unique) for the object to which it is mapped
* **Yes, only for the associated object** – the field is a key for the object to which it is a reference
* **Yes, for both** – the field is a key for both the mapped object and the referenced object

### Case Sensitive

This determines whether values in this column should be interpreted as case sensitive or not. Keep in mind that this is only possible if the database you are using is case-sensitive as well. For example, if you are using MS SQL, you cannot use case sensitivity, hence Microsoft does not search case-sensitive by default.

### Custom Query

If you selected **Custom** as the query type, you can enter a custom select value for the field. This enables constructing a complex value for the mapped field. For example, you can concatenate multiple database columns together. The **Join tokens** table (below the query field) shows the tokens representing the tables you joined using the **Include additional tables** tab. You can insert these into your query and they will be replaced by the proper table names. Keep in mind that this query must be provided in the dialect from the database from which you are retrieving the data.

For example, to map a first name and last name column to a full name object attribute, use a query like this: `“[%startobject%].firstname + ‘ ‘ + [%startobject%].lastname”`.

## Tab Page References

For each reference that is used in the mapping, you can configure what should happen if a referenced object is not found. 

The following options are available:

* **Create if not found** – if the referenced object is not found, a new one will be created with the values found in the database
* **Ignore if not found** – if the referenced object is not found, the reference will not be set and no new object will be created
* **create an object for each row** – does not check whether objects already exist; for each row in the dataset, a new object is created; references between objects are not set. 
* **Only create new objects** – searches for any objects with the defined key; if those objects were not found, it will create a new object; if the object was found, it will be skipped

### Data Handling

Like in Studio Pro, the value of a reference (set) can be added to the current values or be overwritten. This property specifies which of those actions is used (< 3.0 used **Overwrite** by default).

* **Overwrite** – always uses the contents of the sheet to overwrite the current reference value; in the case of an empty cell, the reference will be set to empty as well
* **Append** – adds the new found associated objects to the reference (set); in the case of an empty cell, the reference remains unchanged

### Print Message When Reference Is Not Found

This keeps track of all the object keys in this association that could not be found.

{{% alert color="warning" %}}
This consumes a lot of memory, since all the values need to be remembered.
{{% /alert %}}

### Commit Unchanged Objects

Even if there are no changes to the object, this still commits the objects in order to execute the events.

## Including Additional Tables

You can define which additional tables are necessary to get the data for the Mendix object you are mapping. Each additional joined table has the properties described below.

### Short Name

This is a descriptive name for this table. You will see this name in the **Table alias** selector for the column mapping configuration.

### Join Type

This is the type of join to make. Most standard database join types are supported.

### Left and Right Table

These are the tables to join together. The left table is always the one that is already included in this table mapping. The right table can be any other table.

### Join Constraints

You can specify join constraints. Each constraint specifies that two fields—one from each table—should be equal to each other. Usually, you will want at least one constraint. If you do not specify any constraints, the join will be a cross join.

## Tab Page Settings

There are a number of settings that control the behavior of the table mapping as a whole. These are described below.

### ⚠ Custom Constraints

You can put a constraint on the rows that are imported from the database. Here, you can insert a custom SQL constraint that will be appended as a `WHERE` clause to all queries. This means that any database rows that do not satisfy this constraint will be ignored by the replication module.

{{% alert color="warning" %}}
This feature is deprecated and might be removed in a future version. Mendix recommends configuring constraints using [import calls](#import-call) instead.
{{% /alert %}}

### Print Statistics and Not Found Messages

These control which kinds of messages are printed on the application console.

### Remove Unsynced Objects

This option defines what to do to objects in your Mendix database with no corresponding entry in the imported database. There are three options:

* **Nothing** (default) – nothing is done to Mendix objects, whether they have corresponding entries or not
* **Track changes** – keep track of which objects were synchronized, but do not remove them if they have no corresponding entries in the imported database
* **Remove unchanged objects** – keep track of which objects were synchronized and remove those with no corresponding entries in the imported database; you can use this option if, for example, you want to mirror any changes to a target database and not just import new data

This functionality requires your Mendix objects to have an integer attribute that is used to keep track of which objects to remove. If you select **Track changes** or **Remove unchanged objects**, an extra field to select this integer attribute will appear. This tracking attribute must not be used by your application in any other way, as this may cause unexpected results. Also, if you select **Remove unchanged objects**, note that objects created by your application (as in, not imported) will be removed on the next import.

### Mode

Setting this to advanced reveals more options. These should only be modified by users who know what they are doing.

* **Import in a new context** – creates a new context for each mapping import; if you clear this, you can control the contexts in which imports are done yourself
* **Use transactions** – controls the use of database transaction functionality by the replication module; normally, each mapping is imported in its own transaction; clearing this box places the transaction control in the hand of the application
* **Ignore objects with empty keys** – this means that empty values for key fields are not considered valid; clearing this allows objects with empty key values to exist
* **Reset empty associations** – this means that if there is an empty value found for the associations, the reference should be reset
* **Commit unchanged objects** – even if there are no changes to the object, this still commits the objects in order to execute the events
* **Print not found messages for main object** – keeps track of all the object keys that could not be found; please note that this consumes a lot of memory, since all the values need to be remembered (this only works in combination with the "find ignore" sync option)

### Final Microflow

This setting allows specifying a microflow that will be executed after the import is completed. The microflow can have 2 optional parameters: `TableMapping` and `ReplicationStatus`. `TableMapping` is the instance that has just been executed. `ReplicationStatus` (not committed) contains the statistics that are also printed in the log.

### Time Zone of Datetime Values in the Database

This setting specifies the time zone in which datetime values are stored in the source database. If the setting is defined, all imported datetime values are converted from database time zone to UTC and stored in UTC in resulting Mendix objects. If the setting is not defined, it defaults to [database time zone](#database-timezone).

In most of the cases, there is no need to change this setting unless you know that datetime values in this particular table are stored in a time zone that is different from the rest of the database.

## Configuring Import Calls  {#import-call}

An import call is a table mapping configured to be run with constraints. This constraint may be static, where all calls will be constrained by the same values, or dynamic, where the constraint relies on the value of attributes in the table.

### Constraint

This field defines how the custom constraints will be combined to form the import call constraint:

* **Normal** - All constraints will be combined together with the `AND` operator following their constraint number.
* **Advanced** - You need to explicitly define the import call constraint in the `Constraint dependency` field. You can use braces and all the operators supported by the database (`AND`, `OR`, `IN`, `NOT`, etc.). For example: `[&7&] OR ([&1&] AND [&2&])`.

### Data Objects

When executing the import using an import call, you can optionally provide two Mendix objects to use as constraint parameters. All object types are supported (including non-persistable).

{{% alert color="info" %}}
If you are using scheduled import actions and you want to use the last successful import date as a constraint, you should select **ScheduledImportActivity** as data object 1.
{{% /alert %}}

These objects must be provided as input explicitly in a microflow. Using these objects in an import call prevents it from being executed directly by a user action. **Import** on the **Import call** tab and **Run scheduled events** on the **Planned import action** tab will be affected, as they perform an import using import calls.

### Custom Constraints

If you click any constraint in the **Custom constraints** table, the **Constraint details** dialog box opens. The fields are as follows:

* **Constraint Type**
    * **Dynamic** – Use the value from an attribute as a constraint. This can either be an attribute from data object 1 or data object 2.
    * **Static** – Choose any of the columns and set a static value as the constraint.
* **Ignore When Empty** – This is only applicable when selecting the constraint mode **Normal**. When a dynamic value is empty (null), the constraint will be ignored, and only the other constraints will be applied to the import action.
* **Table** – This determines the tables from the mapping on which the constraint applies. You can select all the tables you have configured in the mapping (both additional joined tables as well as the main table).
* **Constraint** – The first value to select is any of the columns from the selected table. After that, you can select any operator followed by the value you want to constrain. In case you select the `Is (not) null` operator, the value is no longer useful and will be hidden.

## Planned Import Actions

The module supports the configuration of scheduled import actions. When importing multiple tables from a database, there are several problems you will run into when placing all the import activities in one or more microflows. Therefore, an option is added to the module, which you can use to configure your complete import scheduled event.

Each import action can consist of one or multiple import calls. The default scheduled event flow will process all the enabled import actions, and for each action it will call the import call configuration automatically. This way, you will be able to configure the complete order and the dependency between the import actions.

You can use the DateTime from the last successful import as a constraint. This DateTime is the start time of the last successful run.

Each import action is executed in a single transaction, which means it is able to revert all the changes if an exception occurs. Then, configure the mapping not to create a new transaction nor a new context.

## Importing and Exporting a File

You can import and export table mappings to an XML file using the **Table mapping** tab.

## Data types

Database-specific data types are converted to a Java type with the JDBC driver. The module then converts these Java types into a Mendix primitive type. This step also performs implicit conversions between types.

[Mendix primitive types](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/systemwideinterfaces/core/meta/IMetaPrimitive.PrimitiveType.html) and supported mappings from java objects are defined below (supported conversions are marked with *X*):

| Mendix Type / Java Type | Boolean | DateTime | Integer | AutoNumber / Long | Decimal | HashString / String / Enum | Binary |
|:---------------------------:|:-------:|:--------:|:-------:|:--------------------:|:-------:|:-----------------------------:|:------:|
|           Boolean           |    X    |          |         |                      |         |                               |        |
|          util.Date          |         |    X     |         |          X           |         |               X               |        |
|           Integer           |    X    |    X     |    X    |                      |    X    |                               |        |
|            Long             |    X    |    X     |    X    |          X           |    X    |                               |        |
|           Double            |    X    |          |    X    |          X           |    X    |                               |        |
|         BigDecimal          |    X    |          |    X    |          X           |    X    |                               |        |
|           String            |    X    |    X     |    X    |          X           |    X    |               X               |        |

{{% alert color="info" %}}
CLOBs (of java type `java.sql.clob`) are not supported.

Boolean mapping treats numeric positive/negative values as true/false and supports the following string values: "yes", "1", "true", "ja", "no", "0", "false", "nee".

Decimal mapping supports currency format strings.
{{% /alert %}} 

## Troubleshooting

### A Table Alias Is Selected but the Column Name Field Does Not Show Anything

This is a limitation. The workaround is to select the blank option in the table alias selector, and then select your desired table again. This should repopulate the column selector.

### No Automatic Mapping Inheritance 

An example of mapping inheritance would be creating a different sub-type of a generalization based on a value in a column.

The database importer cannot do this automatically. To do this, map your table to temporary objects containing the fields for which you need to determine the sub-type. Then, use a microflow to convert each of these to the proper type.
