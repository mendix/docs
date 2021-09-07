---
title: "Oracle"
parent: "data-storage"
menu_order: 60
---

## 1 Introduction

The behavior of Mendix using an Oracle database has some minor differences when compared with using a PostgreSQL database. These differences are documented below.

## 2 Behavior of Unlimited & Very Long Strings

### 2.1 Comparison Functions

Oracle does not support unlimited strings or strings with a specified size greater than 2000 characters when using the equal (`=`) or not equal (`!=`) operators in XPath constraints. However, it does support functions including `contains()`, `starts-with()`, and `ends-with()`.

### 2.2 Sorting, Grouping & Aggregating

It is not possible to sort, group, or use aggregate functions such as `count()` on unlimited strings or strings with a specified length greater than 2000 characters. This is because such long or unlimited strings are implemented with the data type CLOB. Consider decreasing the length of the string attribute or removing it from data grids.

### 2.3 Selecting DISTINCT Attribute

Selecting DISTINCT attributes of the string type with a size greater than 2000 characters is not supported by Mendix due to a known Oracle limitation of selecting DISTINCT columns with a CLOB data type. If you run into this limitation, you may encounter an exception in the logs with a message like this: **Error Msg = ORA-06502: PL/SQL: numeric or value error: character string buffer too small**.

### 2.4 Unique Constraint
Setting a unique constraint on attributes of the string type with a size greater than 2000 characters is not supported by Mendix due to a known Oracle limitation of setting unique constraints on columns with a CLOB data type. If you run into this limitation, you may encounter an exception in the logs with a message like this: **Error Msg = ORA-02329: PL/SQL: column of datatype LOB cannot be unique or a primary key**. Consider decreasing the length of the string attribute or removing the unique constraint.
