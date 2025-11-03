---
title: "OQL RANGEBEGIN"
url: /refguide8/oql-rangebegin/
---

## Description

The `RANGEBEGIN` function extracts the initial value of a range parameter.

The syntax is as follows:

```sql
RANGEBEGIN ( $range )
```

`$range` specifies the range parameter.

## Example

`RANGEBEGIN` and [RANGEEND](/refguide8/oql-rangeend/) are OQL functions that use a parameter, and OQL parameters are only available in datasets (which are used for generating a report). When you create a page and add a report that has a dataset, you can use `RANGEBEGIN` and `RANGEEND` in that dataset.

This is an example of using a range in OQL, where `$range` is set to last week, which will give you all the customers born in the last week:

```java
select FirstName as First, LastName as Last, Name as Name, Birthday as BDay, CustomerType as Type from Sales.Customer
where Birthday IN ($rangeLastWeek)
```

This example uses the `RANGEBEGIN` function in the where-clause, which will give you all the customers born since the beginning of last week:

```java
select FirstName as First, LastName as Last, Name as Name, Birthday as BDay, CustomerType as Type from Sales.Customer
where Birthday > RANGEBEGIN($rangeLastWeek)
```
