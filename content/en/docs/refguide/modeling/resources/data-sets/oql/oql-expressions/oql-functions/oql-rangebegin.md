---
title: "OQL RANGEBEGIN"
url: /refguide/oql-rangebegin/
tags: ["studio pro"]
---

## 1 Description

The `RANGEBEGIN` function extracts the initial value of a range parameter.

`RANGEBEGIN` and [RANGEEND](/refguide/oql-rangeend/) are OQL functions that use a parameter, and OQL parameters are only available in [datasets](/refguide/data-sets/) (which are used for generating a report). When you create a page and add a report that has a dataset, you can use `RANGEBEGIN` and `RANGEEND` in that dataset.

## 2 Syntax

The syntax is as follows:

```sql
RANGEBEGIN ( $range )
```

`$range` specifies the range parameter.

## 3 Example

This is an example of using a range in OQL, where `$range` is set to last week, which will give you all the customers born in the last week:

```sql
SELECT FirstName AS First, LastName AS Last, Name AS Name, Birthday AS BDay, CustomerType AS Type FROM Sales.Customer
WHERE Birthday IN ($rangeLastWeek)
```

This example uses the `RANGEBEGIN` function in the `WHERE` clause, which will give you all the customers born since the beginning of last week:

```sql
SELECT FirstName AS First, LastName AS Last, Name AS Name, Birthday AS BDay, CustomerType AS Type FROM Sales.Customer
WHERE Birthday > RANGEBEGIN($rangeLastWeek)
```
