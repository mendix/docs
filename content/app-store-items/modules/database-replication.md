---
title: "Database Replication"
category: "Modules"
description: " "
tags: [ ]
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

These are the credentials necessary to log in to the database.

### 2.2 Mapping Properties

Table mappings are created from the **Mappings** page. Each mapping is associated to a single database. A mapping is always defined for one main Mendix object type and one corresponding database table. The information that is needed from other tables can be joined in later. The **New mapping** dialog box enables setting these properties.

#### 2.2.1 Description

A descriptive name for your mapping.

#### 2.2.2 Database name, table

The database and table you want to retrieve data from. If you need other tables to create your Mendix object, you can select these later.

#### 2.2.3 Object type

The Mendix object type this table should be mapped to.

### 2.3 Defining a mapping

Once a mapping has been created, you can use the mapping editor to define various aspects of the mapping. The mapping editor has 4 tabs that will be explained below.

At the top of the form, you can set the “import action”. This setting controls how mapped objects are added to your application. This option only applies to the object selected on template level, all associations need te be configured separately.

    “synchronize and create objects” updates objects that already exist with the values from the database. Objects that cannot be found are created. 
    “synchronize only existing objects” only updates objects that already exist, but does not create any new objects.
    “create an object for each row” does not check whether objects already exist. For each row in the sheet a new object is created. 
    "Only create new objects" searches for any objects with the defined key. If those objects were not found it will create a new object. If the object was found it will be skipped. 

## 3 Tab page Column mappings

For each attribute or reference on a target Mendix object, you must define a column mapping. This defines which column will be used to get the attribute value. A column mapping has the following properties.

### 3.1 Mapping type

Use this field to indicate as which type object the column should be processed. You can choose an object attribute or an object reference. Depending on your choice, different subsequent options will be available.

### 3.2 Query type

Whether you want to provide a custom query or use the automatic querying for this field. Usually, you will want the automatic querying, which is the default. Custom queries can be used to merge database fields, evaluate fields or alter their notation. When you choose custom you need to use escape characters, aliases etc. exactly as the database expects it. 

### 3.3 Table alias

Indicates the table that has the column you want to map. The tables in this dropdown are the ones you joined in in the “include additional tables” tab. The entry “Start object” represents the table you selected when creating the table mapping.

### 3.4 Column name

The name of the column you want to map.

### 3.5 Format with microflow

You can use a custom microflow to parse data for an attribute. Such a microflow should have one String input parameter. This will receive the data entry from the database. The microflow should return the value to put in the field you want to map (i.e. a DateTime if mapping to a DateTime attribute).

### 3.6 Attribute name

This field is the name of the attribute you map this column to. This field also has quicksearch functionality. Type in the box to the left of the reference selector and press “tab” to search for the value you typed.

### 3.7 Reference and Object type

These fields are used to configure referenced objects. You can specify what reference should be followed and what type of object is used. Both fields have a quicksearch box.

### 3.8 Is key

This field determines whether the attribute can uniquely identify its object.

    “No”: No special handling for this column.
    “Yes” or “Yes, only for the main object ”: The field is a key value (unique) for the object it is mapped to.
    “Yes, only for the associated object”: The field is a key for the object it is a reference to.
    “Yes, for both”: The field is a key for both the mapped object and the referenced object.

### 3.9 Case sensitive

Whether values in this column should be interpreted as case sensitive or not. Keep in mind that this is only possible if the database you are using is case sensitive as well. For example if you’re using MS SQL you can’t use case sensitivity hence Microsoft doesn’t search case sensitive by default.

### 3.10 Custom query

If you selected “custom” as a query type, you can enter a custom select value for the field. This enables you to construct a complex value for the mapped field. For instance, you can concatenate multiple database columns together. The “join tokens” table, below the query field, shows tokens representing tables you joined using the “include additional tables” tab. You can insert these into your query and they will be replaced by the proper table names. Keep in mind that this query must be provided in the dialect from the database you are retrieving the data from.

Example: To map a firstname and lastname column to a fullname object attribute, use a query like this: “[%startobject%].firstname + ‘ ‘ + [%startobject%].lastname” 

## 4 Tab page References

For each reference that is used in the mapping, you can configure what should happen if a referenced object is not found. There are two options:

    “Create if not found”: If the referenced object is not found, a new one will be created with the values found in the database.
    “Ignore if not found”: If the referenced object is not found, the reference will not be set and no new object will be created.
    “create an object for each row” does not check whether objects already exist. For each row in the dataset a new object is created. References between objects are not set. 
    "Only create new objects" searches for any objects with the defined key. If those objects were not found it will create a new object. If the object was found it will be skipped. 

### 4.1 Data handling

Just like in the modeler the value of a reference(set) can be added to the current values of be overwritten. This property specifies which of those actions is used (<3.0 used overwrite as default)

    "Overwrite" always uses the contents of the sheet to overwrite the current reference value. In case of an empty cell, the reference will be set to empty as well.
    "Append" add the new found associated objects to the reference(set). In case of an empty cell the reference remains unchanged.

### 4.2 Print message when reference is not found

Keep track of all the object keys in this association that could not be found. Warning: This consumes a lot of memory since all values need to be remembered.

### 4.3 Commit unchanged objects

Even if there aren't any changes to the object still commit the objects in order to execute the events. 

## 5 Include additional tables

Here you can define which additional tables are necessary to get the data for the Mendix object you are mapping. Each additional joined table has the following properties.

### 5.1 Short name

A descriptive name for this table. You will see this name in the “table alias” selector for the column mapping configuration.

### 5.2 Join type

The type of join to make. Most standard database join types are supported.

### 5.3 Left, Right table

The tables to join together. The left table is always one that is already included in this table mapping. The right table can be any other table.

### 5.4 Join constraints

You can specify join constraints. Each constraint specifies that two fields, one from each table, should eb equal to each other. Usually, you will want at least one constraint. If you do not specify any constraints, the join will be a cross join.

## 6 Tab page Settings

There are a number of settings that control the behavior of the table mapping as a whole.

### 6.1 Custom constraints (Deprecated)

You can put a constraint on the rows that are imported from the database. Here, you can insert a custom SQL constraint which will be appended as a WHERE clause to all queries. This means any database rows that do not satisfy this constraint will be ignored by the replication module.

### 6.2 Print statistics, not found messages

These control which kinds of messages are printed on the application console.

### 6.3 Remove unsynced objects

This option causes objects that are not found in the imported database to be removed from your Mendix database. In other words, objects that are in your Mendix database that do not correspond to any imported database rows (anymore), are deleted. You can use this option if, for example, you want to mirror any changes to a target database and not just import new data.

This functionality requires your Mendix objects to have an Integer attribute that is used to keep track of which objects to remove. You can specify which attribute to use for this in the selector marked “attribute”. This attribute must not be used by your application in any other way, because this will cause unexpected results. Also note that objects created by your application (i.e. not imported) will be removed on the next import, if this option is used.

### 6.4 Mode

Setting this to advanced reveals three more options. These should only be modified by users who know what they are doing.

    “Import in a new context” Creates a new context for each mapping import. If you uncheck this, you can control the contexts in which imports are done yourself.
    “Use transactions” controls the use of database transaction functionality by the replication module. Normally, each mapping is imported in its own transaction. Unchecking this places the transaction control in the hand of the application.
    “Ignore objects with empty keys” means empty values for key fields are not considered valid. Unchecking this allows objects with empty key values to exist.
    “Reset empty associations” In case there is an empty value found for the associations should the reference be reset.
    “Commit unchanged objects” Even if there aren't any changes to the object still commit the objects in order to execute the events. 
    “Print not found messages for main object” keep track of all the object keys that could not be found. Warning: This consumes a lot of memory since all values need to be remembered. (only works in combination with sync option: find ignore)

## 7 Configure an import call

With an import call you can easily configure your constraints, both static constraints (every call the same value) and dynamic constraints (based on a value from some attribute).

### 7.1 Constraint

This defines the type of constraint, either use normal constraints which result in a constraint with all AND operators. The constraints will be in alphabetical order by the constraint nr.

When selecting advanced you’ll be able to setup the constraints yourself using the tokens of the constraint and you can use braces and all operators supported by the database (AND, OR, IN, NOT, etc). For example [&7&] OR ([&1&] AND [&2&])

### 7.2 Data object 1 / 2

When executing the import using an import call you can optionally provide two Mx objects to use as a constraint. This can be all types of objects (even non-persistent). However if you are using scheduled import actions and you want to use the last successful import date as a constraint you should select ‘ScheduledImportActivity’ as data object 1.

### 7.3 Constraint type

    Dynamic    Use the value from an attribute as a constraint, this can either be an attribute from data object 1 or data object 2.
    Static        Choose any of the columns and set a static value as the constraint.

### 7.4 Ignore when empty

Only applicable when selecting constraint mode ‘normal’. When a dynamic value is empty (null), the constraint will be ignore and only the other constraints will be applied to the import action.

### 7.5 Table

On which of the tables from the mapping does the constraint apply. You can select here all the tables you’ve configured in the mapping (both additional joined tables as well as the main table)

### 7.6 Constraint

The first value to select is any of the columns from the selected table. After which you can select any operator followed by the value you want to constraint. In case you select the Is (not) null operator the value is no longer useful and will be hidden.

## 8 Planned import actions

The module supports the configuration of scheduled import actions. When importing multiple tables from a database there are several problems you’ll run into when placing all import activities in one or more microflows. Therefore an option is added to the module which you can use to configure your complete import scheduled event.

Each import action can consist of one or multiple import calls. The default scheduled event flow will process all enabled import actions and for each action it will call the import call configuration automatically. This way you’ll be able to configure the complete order and dependency between the import actions.

You’re able to use the date/time from the last successful import as a constraint, this datetime is the start time of the last successful run.

Each import action is executed in a single transaction, which means it is able to revert all changes if an exception occurs. When you’ll configure the mapping not to create a new transaction nor a new context.

## 9 Import/export file

You can import and export table mappings to an XML file using this tab. It is a known bug that this functionality is not working at the moment.

## 10 Q&A

### 10.1 I selected a table alias, but the column name field doesn’t show anything. 

This is a known issue. Please try selecting the blank option in the table alias selector, and then select your desired table again. This should repopulate the column selector.

How can I map inheritance, for example create a different subtype of a generalization based on a value in a column?

The database importer cannot do this automatically. To do this, map your table to temporary objects containing the fields you need to determine the subtype. Then later, use a microflow to convert each of these to the proper type.