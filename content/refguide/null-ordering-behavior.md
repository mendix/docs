---
title: "NULL Order Behavior"
parent: "data-storage"
---

An ORDER BY clause allows you to specify the order in which rows appear in the result set. For instance, sorting on a column in a **data grid** sorts the data of the column in either Ascending (smallest value first) or Descending (largest value first) order. The default order is ascending.

However, NULL is a special marker used in Structured Query Language (SQL) to indicate that a data value does not exist in the database.

In case we have NULL values in the column and a sort is applied on the column, the decision whether the NULLs should come first or last varies per database type. 

We will explain default NULL values ordering behaviour, per database type, going forward.

**HSQLDB**<br />
If you specify the ORDER BY clause, a NULL value always comes first before any non-NULL value, irrespective of the sort order.

**MARIADB / MYSQL / SQLSERVER**<br />
If you specify the ORDER BY clause, NULL values by default are ordered as less than values that are not NULL. Using the ASC order, a NULL value comes first before any non-NULL value; using DESC order, the NULL comes last.

**DB2 / ORACLE / POSTGRESQL** <br />
If you specify the ORDER BY clause, NULL values by default are ordered as more than values that are not NULL. Using the ASC order, a NULL value comes after any non-NULL value; using DESC order, the NULL comes first.

The following overview summarizes the NULLs default sort ordering provided by different database types.

| NULL Ordering Behavior/ Database Types  | MARIADB/MYSQL | SQLSERVER | HSQLDB | DB2 | ORACLE | POSTGRESQL
|------------------------|---|---|---|---|---|---|---|
| **ASC NULLS FIRST** | ✔ | ✔ |  ✔  |    |  |   |
| **ASC NULLS LAST**|  |   |   |  ✔ |  ✔ |  ✔|
| **DESC NULLS FIRST**|   |   | ✔ |  ✔| ✔  | ✔|
| **DESC NULLS LAST**| ✔ | ✔  |  |   |   |  |
