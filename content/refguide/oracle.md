---
title: "Oracle"
parent: "data-storage"
menu_order: 60
tags: ["studio pro", "database", "oracle"]
---

## 1 Introduction

The behavior of Mendix using an Oracle database has some minor differences when compared with using a PostgreSQL database. These differences are documented below.

## 2 Unlimited and Very Long Strings

The majority of differences between PostgreSQL and Oracle are in how they handle very long, or unlimited length, strings.

### 2.1 Comparison Functions

Oracle does not support unlimited strings or strings with a specified size greater than 2000 characters when using the equal (`=`) or not equal (`!=`) operators in XPath constraints. However, it does support functions including `contains()`, `starts-with()`, and `ends-with()`.

### 2.2 Sorting, Grouping and Aggregating

It is not possible to sort, group, or use aggregate functions such as `count()` on unlimited strings or strings with a specified length greater than 2000 characters. This is because such long or unlimited strings are implemented with the data type CLOB. Consider decreasing the length of the string attribute or removing it from data grids.

### 2.3 Selecting DISTINCT Attribute

Selecting DISTINCT attributes of the string type with a size greater than 2000 characters is not supported by Mendix due to a known Oracle limitation of selecting DISTINCT columns with a CLOB data type. If you run into this limitation, you may encounter an exception in the logs with a message like this: **Error Msg = ORA-06502: PL/SQL: numeric or value error: character string buffer too small**.

## 3 Required Privileges

The Mendix runtime will require a user with roles with the following privileges to set up and maintain the Mendix database on Oracle:

* create tables
* drop tables
* create indexes
* create sequences
* create, read, update and delete data

## 4 Known Issues

### 4.1 Numeric Conversion

There is a known bug in older versions of Oracle 11.2 where converting numeric attributes to string attributes with a length greater than 80 leads to corrupted data on existing rows.

This problem is fixed in Oracle 11.2.0.4. See [https://support.oracle.com/epmos/faces/DocumentDisplay?id=9949330.8](https://support.oracle.com/epmos/faces/DocumentDisplay?id=9949330.8) and [http://stackoverflow.com/questions/16735793/strange-behavior-on-oracle-cast-to-nvarchar2](http://stackoverflow.com/questions/16735793/strange-behavior-on-oracle-cast-to-nvarchar2).
