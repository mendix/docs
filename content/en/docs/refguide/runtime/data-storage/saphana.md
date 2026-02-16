---
title: "SAP HANA"
url: /refguide/saphana/
weight: 70
---

## Introduction

The behavior of Mendix using an SAP HANA database has some minor differences when compared with using a PostgreSQL database. These differences are documented below.

## Behavior of Unlimited and Very Long Strings

### Comparison Functions

SAP HANA does not support unlimited strings or strings with a specified length greater than 5000 characters when using the equal (`=`) or not equal (`!=`) operators in XPath constraints. However, it does support functions including `contains()`, `starts-with()`, and `ends-with()`.

See also [Case-Sensitive Database Behavior](/refguide/case-sensitive-database-behavior/).

### Sorting, Grouping, and Aggregating

It is not possible to sort, group, or use aggregate functions such as `count()` on unlimited strings or strings with a specified length greater than 5000 characters. This is because such long or unlimited strings are implemented with the data type CLOB. Consider decreasing the length of the string attribute or removing it from data grids.  

### Selecting DISTINCT Attribute

Selecting DISTINCT attributes of the string type with a size greater than 5000 characters is not supported by Mendix due to a known SAP HANA limitation of selecting DISTINCT columns with a CLOB data type.
 
## Known Issues

### Unicode Support

Currently, only [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane) Unicode characters are supported.
