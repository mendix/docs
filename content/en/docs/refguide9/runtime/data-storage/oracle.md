---
title: "Oracle"
url: /refguide9/oracle/
weight: 60
---

## Introduction

There are some minor differences in how Mendix behaves when using an Oracle database in comparison to using a PostgreSQL database. This document describes these differences.

## Setting Up a User for Mendix

When setting up an integration with an Oracle back end, Mendix recommends creating a user/schema with the appropriate privileges. Mendix uses a single user to update the schema-structure (for example, tables and indices) and to execute DML statements. The former is done when Mendix is starting up and synchronizing the model with the storage structure, and the latter is done in normal runtime operations. 

When setting-up perform the following steps:

1. Create a new user and schema for Mendix with the profile "DEFAULT". 
2. Grant the user the following privileges:

    * CREATE SESSION

    * CREATE SEQUENCE

    * CREATE TABLE

    This will ensure that the account has sufficient privileges to create the structure needed to represent the domain model and to create, query, and modify data.

3. Ensure that the user has been granted enough quotas to create the resources they need, or give them an unlimited grant (for example, `GRANT UNLIMITED TABLESPACE TO mendix` where `mendix` is the user/schema that you have created).

{{% alert color="info" %}}
During the creation of the Mendix database, the number of structural modifications made will depend on the size of your domain model. If this number is quite large, or if there is a large structural change, it may be prudent to increase the value of `OPEN_CURSORS`.
{{% /alert %}}

## Unlimited and Very Long Strings

The majority of differences between PostgreSQL and Oracle are in how they handle very long, or unlimited length, strings. Oracle has limitations on the functionality of CLOB (character large object) data. Mendix stores long strings as CLOB objects and this means that Mendix restricts some of the things you can do with your Oracle database if you define string attributes which are unlimited or longer than 2000 characters. These restrictions are listed below.

The workaround is to use string attributes which are less than 2000 characters if you want to use this functionality.

### Comparison Functions

Oracle does not support strings longer than 2000 characters when using the equal (`=`) or not equal (`!=`) operators in XPath constraints. It does, however, support functions including `contains()`, `starts-with()`, and `ends-with()`.

### Sorting, Grouping, and Aggregating

You cannot sort, group, or use aggregate functions such as `count()` on strings longer than 2000 characters. If you cannot use shorter strings, consider removing the attribute from data grids.

### Selecting DISTINCT Attribute

Using [SELECT DISTINCT](/refguide9/oql-select-clause/) in OQL queries is not supported for strings longer than 2000 characters.

If you run into this limitation, a message like `Error Msg = ORA-06502: PL/SQL: numeric or value error: character string buffer too small` will be logged.

### Uniqueness Constraint

You cannot set a [uniqueness constraint](/refguide9/validation-rules/#uniqueness) on string attributes longer than 2000 characters.

If you run into this limitation, an exception like `Error Msg = ORA-02329: PL/SQL: column of datatype LOB cannot be unique or a primary key` will be logged.

## DDL commands

DDL (data definition language) commands in Oracle are not transactional and will not be rolled back in case of an error. This means that if your Oracle database needs to be synchronized with your model when you start your application and an error occurs during this synchronization, the changes that have made been made up until the point when the error occurs are *not* rolled back. This can leave the database in an inconsistent state which cannot be recovered automatically. Mendix recommends creating a backup of your database before deploying any new version of your app, so that you can restore the backup if the database synchronization fails.
