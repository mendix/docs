---
title: "SAP HANA"
parent: "data-storage"
---

## 1 Ordering on Associated Attributes

Retrieving an entity that is sorted on an attribute of one of its associated entities is not supported in SAP HANA.

For example, you have two associated entities—**Person** and **Address**—and they have the **name** and **street** attributes, respectively. You cannot retrieve `Person` objects sorted on `Person_Address/Address/street`. 

## 2 Case Sensitivity

SAP HANA is case sensitive when doing string comparisons and checks. This is important when using functions such as `contains()`, `starts-with()`, and `ends-with()`, or when using the equal (`=`) or not equal (`!=`) operators in XPath constraints.

For example, `contains('OneTwo', 'one')` will return `false`.

## 3 Behavior of Unlimited & Very Long Strings

### 3.1 Comparison Functions

SAP HANA does not support unlimited strings or strings with a specified length greater than 5000 characters when using the equal (`=`) or not equal (`!=`) operators in XPath constraints. However, it supports functions including `contains()`, `starts-with()`, and `ends-with()`.

### 3.2 Sorting, Grouping & Aggregating

It is not possible to sort, group, or use aggregate functions such as `count()` on unlimited strings or strings with a specified length greater than 5000 characters. This is because such long or unlimited strings are implemented with the data type CLOB. Consider decreasing the length of the string attribute or removing it from data grids.  

### 3.3 Selecting DISTINCT Attribute of Type CLOB

Selecting DISTINCT attributes of the string type with a size greather 5000 characters is not supported by Mendix due to a known SAP HANA limitation of selecting DISTINCT columns with a CLOB data type.
 
## 4 Known Issues

### 4.1 Unicode Support

Currently, only [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane) unicode characters are supported.
