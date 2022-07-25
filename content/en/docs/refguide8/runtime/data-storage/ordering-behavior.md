---
title: "Order By Behavior"
url: /refguide8/ordering-behavior/
tags: ["studio pro"]
weight: 20
---

## 1 Introduction

An `ORDER BY` clause allows you to specify the order in which rows appear in the result set. For instance, sorting on a column in a data grid sorts the data of the column in either ascending (smallest value first) or descending (largest value first) order. The default order is ascending.

However, in certain cases, the behavior is slightly different, either due to the use case or the database engine itself.

## 2 Reference Sets Order Behavior

When a column is used to display an attribute from an entity associated by a many-to-many association, the sorting will rely on the SQL `MIN()` function to determine the `MIN(attribute)` values and use those instead of the displayed text.

Below is an example that uses the `Order` and `Product` entities, which have a many-to-many association. The **Product Names** column in the data grid displays for each order the names of the products that are associated to it:

{{< figure src="/attachments/refguide8/runtime/data-storage/ordering-behavior/sorting-reference-sets.png" >}}

Sorting the **Product Names** column will use the underlined values and not the displayed text. These values are the result of `MIN(productName)` for each Order.

## 3 NULL Values Order Behavior {#null-ordering-behavior}

In SQL, `NULL` is a special marker used to indicate that a data value does not exist in the database. If a sort is applied on a column that contains `NULL` values, the decision whether the `NULLs` should come first or last varies per database type.

### 3.1 NULL Order Behavior by Database Engine

#### 3.1.1 HSQLDB

If you specify the `ORDER BY` clause, a `NULL` value always comes first before any non-`NULL` value, irrespective of the sort order.

#### 3.1.2 MARIADB, MYSQL, SAP HANA & SQLSERVER

If you specify the `ORDER BY` clause, `NULL` values by default are ordered as less than values that are not `NULL`. Using the `ASC` order, a `NULL` value comes before any non-`NULL` value. Using the `DESC` order, the `NULL` comes last.

#### 3.1.3 DB2, ORACLE & POSTGRESQL

If you specify the `ORDER BY` clause, `NULL` values by default are ordered as more than values that are not `NULL`. Using the `ASC` order, a `NULL` value comes after any non-`NULL` value. Using the `DESC` order, the `NULL` comes first.

### 3.2 Overview of Default NULLs Sort Order

This table presents the `NULLs` default sort ordering provided by different database types:

| NULL Ordering Behavior/Database Types  | DB2 | HSQLDB | MARIADB/ MYSQL | ORACLE | POSTGRESQL | SAP HANA | SQL SERVER |
|---------------------:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **ASC NULLS FIRST** |  | ✔ | ✔ |  |   | ✔ | ✔ |
| **ASC NULLS LAST**| ✔ |  |  |  ✔ |  ✔| | |
| **DESC NULLS FIRST**| ✔ | ✔ |   | ✔  | ✔| | |
| **DESC NULLS LAST**|  |  | ✔ |   |  | ✔ | ✔ |
