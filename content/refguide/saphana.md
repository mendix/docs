---
title: "SAP HANA"
parent: "data-storage"
---

## Known Issues

### Unicode Support

Currently, only [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane) unicode characters are supported.

### Ordering on Associated Attributes

Retrieving an entity that is sorted on an attribute of one of its associated entities is not supported in SAP HANA.

For example, you have two associated entities, *Person* and *Address*, and they have *name* and *street* attributes respectively. You cannot retrieve `Person` objects sorted on `Person_Address/Address/street`. 

### Case Sensitivity

SAP HANA is case sensitive when doing string comparisons and checks. This is important when using functions such as `contains()`, `starts-with()`, and `ends-with()`, or when using equality(`=`) or inequality(`!=`) in xpath constraints.

For example, `contains('OneTwo', 'one')` will return `false`.

### Unlimited and Very Long Strings Behavior

#### Comparison functions

 SAP HANA does not support unlimited strings or strings with a specified length greater than 5000 when using equality(`=`) or inequality(`!=`) in xpath constraints. However, it supports on functions including `contains()`, `starts-with()`, and `ends-with()`.

 #### Sorting, Grouping, and Aggregating

 It is not possible to sort, group or use aggregate functions such as `count()` on unlimited strings or strings with a specified length greater than 5000\. This is because such long or unlimited strings are implemented with the data type CLOB. Consider decreasing the length of the string attribute or removing it from data grids.  

 #### Select DISTINCT attribute of type CLOB

 Selecting DISTINCT attributes of type String and size > 5000 characters is not supported by Mendix due to a known SAP HANA limitation of selecting DISTINCT columns with a CLOB data type.