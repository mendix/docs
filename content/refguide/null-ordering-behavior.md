---
title: "NULL Order Behavior"
parent: "data-storage"
tags: ["studio pro"]
menu_order: 20
---

## 1 Introduction

An `ORDER BY` clause allows you to specify the order in which rows appear in the result set. For instance, sorting on a column in a data grid sorts the data of the column in either ascending (smallest value first) or descending (largest value first) order. The default order is ascending.

However, `NULL` is a special marker used in SQL to indicate that a data value does not exist in the database.

If you have `NULL` values in the column and a sort is applied on the column, the decision whether the `NULLs` should come first or last varies per database type.

## 2 Default NULL Value Sort Order Behavior by Database Type

### 2.1 HSQLDB

If you specify the `ORDER BY` clause, a `NULL` value always comes first before any non-`NULL` value, irrespective of the sort order.

### 2.2 MARIADB, MYSQL, SAP HANA, & SQLSERVER

If you specify the `ORDER BY` clause, `NULL` values by default are ordered as less than values that are not `NULL`. Using the `ASC` order, a `NULL` value comes before any non-`NULL` value. Using the `DESC` order, the `NULL` comes last.

### 2.3 DB2, ORACLE, & POSTGRESQL

If you specify the `ORDER BY` clause, `NULL` values by default are ordered as more than values that are not `NULL`. Using the `ASC` order, a `NULL` value comes after any non-`NULL` value. Using the `DESC` order, the `NULL` comes first.

## 3 Overview of Default NULLs Sort Order

This table presents the `NULLs` default sort ordering provided by different database types:

| NULL Ordering Behavior/Database Types  | DB2 | HSQLDB | MARIADB/ MYSQL | ORACLE | POSTGRESQL | SAP HANA | SQL SERVER |
|---------------------:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **ASC NULLS FIRST** |  | ✔ | ✔ |  |   | ✔ | ✔ |
| **ASC NULLS LAST**| ✔ |  |  |  ✔ |  ✔| | |
| **DESC NULLS FIRST**| ✔ | ✔ |   | ✔  | ✔| | |
| **DESC NULLS LAST**|  |  | ✔ |   |  | ✔ | ✔ |
