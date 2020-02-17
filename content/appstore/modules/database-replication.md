---
title: "Database Replication"
category: "Modules"
description: "Describes the configuration and usage of the Database Replication module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "database replication", "platform support"]
draft: true
---

## 1 Introduction

You can use the [Database Replication](https://appstore.home.mendix.com/link/app/160/) module to import data from existing databases into your Mendix application. You can configure how to map each table, column, and relation to your Mendix domain model. Complex mappings over multiple table joins are also possible. You can configured in the client or from Java.

### 1.1 Typical Usage Scenarios

* Convert an existing database to a Mendix domain model
* Synchronize your application with a database used by another application
* Create mappings between database columns and object attributes
* Map database references to Mendix object references
* Map object attributes based on multiple joined tables

### 1.2 Features

* Support for custom queries for object attributes
* Support for SQL Server 2005 or higher, Oracle, PostgreSQL, AS400, DB2, DMS2, and Informix databases
* Support for non-persistable objects
* Automatic query generation for object attribute values
* Object events are executed when importing

### 1.3 Dependencies

* [Mx Model Reflection](https://appstore.home.mendix.com/link/app/69/) module – this module is required in order to configure the mapping between the Excel columns and the domain model
* The *replication.jar* file (supplied in the *.mpk* file)
	* Make sure you remove any older versions of *replication.jar* before installing this module (if you update, you do not need to remove the library anymore)
	* If you have an old *replication.jar file* and are using the [Excel Importer](https://appstore.home.mendix.com/link/app/72/), update this module as well, since you need Excel Importer 3.0 or higher when using this module

## 2 Configuration

After downloading the module, you should place the **DatabaseMapping** page in the menu or put both the **Database_Overview** and **TableMapping_Overview** pages in your menu. With these pages, you can create database connections and table mappings. 

To use this module, you need a database connection definition and a table mapping. The connection definition points to the location of the database you want to import. The table mapping determines how this database will be mapped to your domain model.

Once a database and mapping have been defined, you can use the **importByMapping** Java action to run an import. You can also use the **Import by table mapping** button on the mapping overview.

### 2.1 Database Connection Properties

You can create new database connections from the **Databases** page. Each connection has a few basic properties. After creating a database connection, you should synchronize the table information using the button on the overview. This makes sure the connection information is correct, and that the replication module has all the table information from your database.

#### 2.1.1 Type

This is the type of database you want to import.

#### 2.1.2 URL & Port

This is the host name and port number of the server on which your database is running.

#### 2.1.3 Name & Instance Name

This is the name and instance name of the database schema to connect to. The **Instance name** is optional.

#### 2.1.4 Username & Password

These are the credentials necessary to sign in to the database.

### 2.2 Mapping Properties

Table mappings are created from the **Mappings** page. Each mapping is associated to a single database. A mapping is always defined for one main Mendix object type and one corresponding database table. The information that is needed from other tables can be joined in later. The **New mapping** dialog box enables setting these properties.

#### 2.2.1 Description

A descriptive name for your mapping.

#### 2.2.2 Database Name & Table

This is the database and table from which you want to retrieve data. If you need other tables to create your Mendix object, you can select these later.

#### 2.2.3 Object Type

The Mendix object type to which this table should be mapped.

## 3 Defining the Mappings

Once the mapping has been created, you can use the mapping editor to define various aspects of the mapping. The mapping editor tabs are described below.

At the top of the page, you can set the **Import action**. This setting controls how mapped objects are added to your application. This option only applies to the object selected on the template level. All associations need to be configured separately.

* **Synchronize and create objects** – updates objects that already exist with the values from the database; objects that cannot be found are created
* **Synchronize only existing objects** – only updates objects that already exist, but does not create new objects
* **Create an object for each row** – does not check whether objects already exist; for each row in the sheet, a new object is created
* **Only create new objects** – searches for any objects with the defined key; if an object is not found, a new object is created; if the object is found, it is skipped

## 4 Tab Page Column Mappings

For each attribute or reference on the target Mendix object, you must define a column mapping. This defines which column will be used to get the attribute value. A column mapping has the properties described below.

### 4.1 Mapping Type

Use this field to indicate which type of object the column should be processed as. You can choose an object attribute or an object reference. Depending on your choice, different subsequent options will be available.

### 4.2 Query Type

This field determines whether you want to provide a custom query or use the automatic querying for this field. Usually, you will want the automatic querying, which is the default. Custom queries can be used to merge database fields, evaluate fields, or alter their notation. When you choose custom, you need to use escape characters or aliases exactly as the database expects.

### 4.3 Table Alias

This indicates the table that has the column you want to map. The tables in this drop-down menu are the ones you joined in in the **include additional tables** tab. The **Start object** entry represents the table you selected when creating the table mapping.

### 4.4 Column Name

This is the name of the column you want to map.

### 4.5 Format with Microflow

You can use a custom microflow to parse data for an attribute. Such a microflow should have one string input parameter. This will receive the data entry from the database. The microflow should return the value to put in the field you want to map (for example, a DateTime if mapping to a DateTime attribute).

### 4.6 Attribute Name

This field is the name of the attribute you map this column to. This field also has quicksearch functionality. Type in the box to the left of the reference selector and press “tab” to search for the value you typed.

### 4.7 Reference & Object Type

These fields are used to configure referenced objects. You can specify what reference should be followed and what type of object is used. Both fields have a quicksearch box.

### 4.8 Is Key

This field determines whether the attribute can uniquely identify its object.

The following options are available:

* **No** – no special handling for this column
* **Yes** or **Yes, only for the main object** – the field is a key value (unique) for the object to which it is mapped
* **Yes, only for the associated object** – the field is a key for the object to which it is a reference
* **Yes, for both** – the field is a key for both the mapped object and the referenced object

### 4.9 Case Sensitive

This determines whether values in this column should be interpreted as case sensitive or not. Keep in mind that this is only possible if the database you are using is case-sensitive as well. For example, if you are using MS SQL, you cannot use case sensitivity, hence Microsoft does not search case-sensitive by default.

### 4.10 Custom Query

If you selected **Custom** as the query type, you can enter a custom select value for the field. This enables constructing a complex value for the mapped field. For example, you can concatenate multiple database columns together. The **Join tokens** table (below the query field) shows the tokens representing the tables you joined using the **Include additional tables** tab. You can insert these into your query and they will be replaced by the proper table names. Keep in mind that this query must be provided in the dialect from the database from which you are retrieving the data.

For example, to map a first name and last name column to a full name object attribute, use a query like this: `“[%startobject%].firstname + ‘ ‘ + [%startobject%].lastname”`.

## 5 Tab Page References

For each reference that is used in the mapping, you can configure what should happen if a referenced object is not found. 

The following options are available:

* **Create if not found** – if the referenced object is not found, a new one will be created with the values found in the database
* **Ignore if not found** – if the referenced object is not found, the reference will not be set and no new object will be created
* **create an object for each row** – does not check whether objects already exist; for each row in the dataset, a new object is created; references between objects are not set. 
* **Only create new objects** – searches for any objects with the defined key; if those objects were not found, it will create a new object; if the object was found, it will be skipped

### 5.1 Data Handling

Like in Studio Pro, the value of a reference (set) can be added to the current values or be overwritten. This property specifies which of those actions is used (< 3.0 used **Overwrite** by default).

* **Overwrite** – always uses the contents of the sheet to overwrite the current reference value; in the case of an empty cell, the reference will be set to empty as well
* **Append** – adds the new found associated objects to the reference (set); in the case of an empty cell, the reference remains unchanged

### 5.2 Print Message When Reference Is Not Found

This keeps track of all the object keys in this association that could not be found.

{{% alert type="warning" %}}
This consumes a lot of memory, since all the values need to be remembered.
{{% /alert %}}

### 5.3 Commit Unchanged Objects

Even if there are no changes to the object, this still commits the objects in order to execute the events.

## 6 Including Additional Tables

You can define which additional tables are necessary to get the data for the Mendix object you are mapping. Each additional joined table has the properties described below.

### 6.1 Short Name

This is a descriptive name for this table. You will see this name in the **Table alias** selector for the column mapping configuration.

### 6.2 Join Type

This is the type of join to make. Most standard database join types are supported.

### 6.3 Left & Right Table

These are the tables to join together. The left table is always the one that is already included in this table mapping. The right table can be any other table.

### 6.4 Join Constraints

You can specify join constraints. Each constraint specifies that two fields—one from each table—should be equal to each other. Usually, you will want at least one constraint. If you do not specify any constraints, the join will be a cross join.

## 7 Tab Page Settings

There are a number of settings that control the behavior of the table mapping as a whole. These are described below.

### 7.1 Custom Constraints (Deprecated)

You can put a constraint on the rows that are imported from the database. Here, you can insert a custom SQL constraint that will be appended as a `WHERE` clause to all queries. This means that any database rows that do not satisfy this constraint will be ignored by the replication module.

### 7.2 Print Statistics & Not Found Messages

These control which kinds of messages are printed on the application console.

### 7.3 Remove Unsynced Objects

This option causes objects that are not found in the imported database to be removed from your Mendix database. In other words, objects that are in your Mendix database that do not correspond to any imported database rows (anymore) are deleted. You can use this option if, for example, you want to mirror any changes to a target database and not just import new data.

This functionality requires your Mendix objects to have an integer attribute that is used to keep track of which objects to remove. You can specify which attribute to use for this in the selector marked **Attribute**. This attribute must not be used by your application in any other way, because this will cause unexpected results. Also, note that objects created by your application (as in, not imported) will be removed on the next import if this option is used.

### 7.4 Mode

Setting this to advanced reveals more options. These should only be modified by users who know what they are doing.

* **Import in a new context** – creates a new context for each mapping import; if you clear this, you can control the contexts in which imports are done yourself
* **Use transactions** – controls the use of database transaction functionality by the replication module; normally, each mapping is imported in its own transaction; clearing this box places the transaction control in the hand of the application
* **Ignore objects with empty keys** – this means that empty values for key fields are not considered valid; clearing this allows objects with empty key values to exist
* **Reset empty associations** – this means that if there is an empty value found for the associations, the reference should be reset
* **Commit unchanged objects** – even if there are no changes to the object, this still commits the objects in order to execute the events
* **Print not found messages for main object** – keeps track of all the object keys that could not be found; please note that this consumes a lot of memory, since all the values need to be remembered (this only works in combination with the "find ignore" sync option)

## 8 Configuring an Import Call

With an import call, you can easily configure both static constraints (meaning, every call with the same value) and dynamic constraints (meaning, based on a value from an attribute).

### 8.1 Constraint

This defines the type of constraint. You can use normal constraints that result in a constraint with all `AND` operators. The constraints will be in alphabetical order according to the constraint number.

When selecting **Advanced**, you can set up the constraints yourself using the tokens of the constraint. You can use braces and all the operators supported by the database (`AND`, `OR`, `IN`, `NOT`, etc.). For example: `[&7&] OR ([&1&] AND [&2&])`.

### 8.2 Data Objects

When executing the import using an import call, you can optionally provide two Mendix objects to use as a constraint. This can be all types of objects (even non-persistable). However, if you are using scheduled import actions and you want to use the last successful import date as a constraint, you should select **ScheduledImportActivity** as data object 1.

### 8.3 Constraint Type

* **Dynamic** – use the value from an attribute as a constraint; this can either be an attribute from data object 1 or data object 2
* **Static** – choose any of the columns and set a static value as the constraint

### 8.4 Ignore When Empty

This is only applicable when selecting the constraint mode **Normal**. When a dynamic value is empty (null), the constraint will be ignored, and only the other constraints will be applied to the import action.

### 8.5 Table

This determines the tables from the mapping on which the constraint applies. You can select all the tables you have configured in the mapping (both additional joined tables as well as the main table).

### 8.6 Constraint

The first value to select is any of the columns from the selected table. After that, you can select any operator followed by the value you want to constrain. In case you select the `Is (not) null` operator, the value is no longer useful and will be hidden.

## 9 Planned Import Actions

The module supports the configuration of scheduled import actions. When importing multiple tables from a database, there are several problems you will run into when placing all the import activities in one or more microflows. Therefore, an option is added to the module, which you can use to configure your complete import scheduled event.

Each import action can consist of one or multiple import calls. The default scheduled event flow will process all the enabled import actions, and for each action it will call the import call configuration automatically. This way, you will be able to configure the complete order and the dependency between the import actions.

You can use the DateTime from the last successful import as a constraint. This DateTime is the start time of the last successful run.

Each import action is executed in a single transaction, which means it is able to revert all the changes if an exception occurs. Then, configure the mapping not to create a new transaction nor a new context.

## 10 Importing & Exporting a File

You can import and export table mappings to an XML file using the **Import/export file** tab.

## 11 Troubleshooting

### 11.1 A Table Alias Is Selected but the Column Name Field Does Not Show Anything

This is a limitation. The workaround is to select the blank option in the table alias selector, and then select your desired table again. This should repopulate the column selector.

### 11.2 No Automatic Mapping Inheritance 

An example of mapping inheritance would be creating a different sub-type of a generalization based on a value in a column.

The database importer cannot do this automatically. To do this, map your table to temporary objects containing the fields for which you need to determine the sub-type. Then, use a microflow to convert each of these to the proper type.
