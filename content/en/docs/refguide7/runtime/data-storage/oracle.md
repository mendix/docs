---
title: "Oracle"
url: /refguide7/oracle/
weight: 60
---

## 1 Introduction

The behavior of Mendix using an Oracle database has some minor differences when compared with using a PostgreSQL database. These differences are documented below.

## 2 Unlimited and Very Long Strings

The majority of differences between PostgreSQL and Oracle are in how they handle very long, or unlimited length, strings. Oracle has limitations on the functionality of CLOB (character large object) data. Mendix stores long strings as CLOB objects and this means that Mendix restricts some of the things you can do with your Oracle database if you define string attributes which are unlimited or longer than 2000 characters. These restrictions are listed below.

The workaround is to use string attributes which are less than 2000 characters if you want to use this functionality.

### 2.1 Comparison Functions

Oracle does not support strings longer than 2000 characters when using the equal (`=`) or not equal (`!=`) operators in XPath constraints. It does, however, support functions including `contains()`, `starts-with()`, and `ends-with()`.

### 2.2 Sorting, Grouping, and Aggregating

You cannot sort, group, or use aggregate functions such as `count()` on strings longer than 2000 characters. If you cannot use shorter strings, consider removing the attribute from data grids.

### 2.3 Selecting DISTINCT Attribute

Using [SELECT DISTINCT](/refguide7/oql-select-clause/) in OQL queries is not supported for strings longer than 2000 characters.

If you run into this limitation, a message like `Error Msg = ORA-06502: PL/SQL: numeric or value error: character string buffer too small` will be logged.

### 2.4 Uniqueness Constraint

You cannot set a [uniqueness constraint](/refguide/validation-rules/#uniqueness) on string attributes longer than 2000 characters.

If you run into this limitation, an exception like `Error Msg = ORA-02329: PL/SQL: column of datatype LOB cannot be unique or a primary key` will be logged.

## 3 DDL commands

DDL (data definition language) commands in Oracle are not transactional and will not be rolled back in case of an error. This means that if your Oracle database needs to be synchronized with your model when you start your application and an error occurs during this synchronization, the changes that have made been made up until the point when the error occurs are *not* rolled back. This can leave the database in an inconsistent state which cannot be recovered automatically. We recommended that you create a backup of your database before deploying any new version of your app, so that you can restore the backup if the database synchronization fails.
