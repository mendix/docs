---
title: "OQL RANGEEND"
url: /refguide/oql-rangeend/
tags: ["studio pro"]
---

## 1 Description

The `RANGEEND` function extracts the end value of a range parameter.

[RANGEBEGIN](/refguide/oql-rangebegin/) and `RANGEEND` are OQL functions that use a parameter, and OQL parameters are only available in [datasets](/refguide/data-sets/) (which are used for generating a report). When you create a page and add a report that has a dataset, you can use `RANGEBEGIN` and `RANGEEND` in that dataset.

## 2 Syntax

The syntax is as follows:

```sql
RANGEEND ( $range )
```

`$range` specifies the range parameter.

## 3 Example

This is an example of using a range in OQL, where `$range` is set to last week, which will give you all the customers born in the last week:

```sql
SELECT FirstName AS First, LastName AS Last, Name AS Name, Birthday AS BDay, CustomerType AS Type FROM Sales.Customer
WHERE Birthday IN ($rangeLastWeek)
```

This example uses the `RANGEEND` function in the `WHERE` clause, which will give you all the customers born since the end of last week:

```sql
SELECT FirstName AS First, LastName AS Last, Name AS Name, Birthday AS BDay, CustomerType AS Type FROM Sales.Customer
WHERE Birthday > RANGEEND($rangeLastWeek)
```
