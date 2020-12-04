---
title: "Oracle"
parent: "data-storage"
menu_order: 60
tags: ["studio pro", "database", "oracle"]
---

## 1 Introduction

There are some minor differences in how Mendix behaves when using an Oracle database in comparision to using a PostgreSQL database. This document describes these differences.

## 2 Setting Up a User for Mendix

When setting up an integration with an Oracle backend we recommend that you create a user/schema with the appropriate privileges. In Mendix, we use a single user to update the schema-structure (for example, tables and indices) and to execute DML statements. The former is done when Mendix is starting up and synchronizing the model with the storage structure, and the latter is done in normal runtime operations. 

When setting-up perform the following steps:

1. Create a new user and schema for Mendix with the profile "DEFAULT". 
2. Grant the user the following privileges:
   * CREATE SESSION
   * CREATE SEQUENCE
   * CREATE TABLE
     This will ensure that the account has sufficient privileges to create the structure needed to represent the domain model and to create, query, and modify data.
3. Ensure that the user has been granted enough quotas to create the resources they need, or give them an unlimited grant (for example, `GRANT UNLIMITED TABLESPACE TO mendix` where `mendix` is the user/schema that you have created).

{{% alert type="info" %}}
During the creation of the Mendix database, the number of structural modifications made will depend on the size of your domain model. If this number is quite large, or if there is a large structural change, it may be prudent to increase the value of `OPEN_CURSORS`.
{{% /alert %}}

## 2 Unlimited and Very Long Strings

The majority of differences between PostgreSQL and Oracle are in how they handle very long, or unlimited length, strings.

### 2.1 Comparison Functions

Oracle does not support unlimited strings or strings with a specified size greater than 2000 characters when using the equal (`=`) or not equal (`!=`) operators in XPath constraints. However, it does support functions including `contains()`, `starts-with()`, and `ends-with()`.

### 2.2 Sorting, Grouping, and Aggregating

It is not possible to sort, group, or use aggregate functions such as `count()` on unlimited strings or strings with a specified length greater than 2000 characters. This is because such long or unlimited strings are implemented with the data type CLOB. Consider decreasing the length of the string attribute or removing it from data grids.

### 2.3 Selecting DISTINCT Attribute

Selecting DISTINCT attributes of the string type with a size greater than 2000 characters is not supported by Mendix due to a known Oracle limitation of selecting DISTINCT columns with a CLOB data type. If you run into this limitation, you may encounter an exception in the logs with a message like this: **Error Msg = ORA-06502: PL/SQL: numeric or value error: character string buffer too small**.
