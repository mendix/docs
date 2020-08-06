---
title: "OQL RANGEBEGIN"
parent: "oql-functions"
tags: ["studio pro"]
---


The RANGEBEGIN function extracts the initial value of a range parameter.

The syntax is as follows:

```
RANGEBEGIN ( $range )
```

**$range**
Specifies the range parameter.

RANGEBEGIN and RANGEEND are OQL-functions that use a parameter and OQL-parameters are only available in datasets (which are used for generating a report).

Create a page, add a report having a dataset and in that dataset you can use RANGEBEGIN and RANGEEND. 

An example of using a range in an OQL, where $range is set to last week, which will  give you all customers born in the last week is:

```java
select FirstName as First, LastName as Last, Name as Name, Birthday as BDay, CustomerType as Type from Sales.Customer
where Birthday IN ($rangeLastWeek)
```

Same example, but using function RANGEBEGIN in the where-clause, which will  give you all customers born since the beginning of last week, is:

```java
select FirstName as First, LastName as Last, Name as Name, Birthday as BDay, CustomerType as Type from Sales.Customer
where Birthday > RANGEBEGIN($rangeLastWeek)
```


