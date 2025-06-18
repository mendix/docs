---
title: "SAP HANA"
url: /refguide9/saphana/
weight: 70
---

## Introduction

The behavior of Mendix using an SAP HANA database has some minor differences when compared with using a PostgreSQL database. These differences are documented below.

## Ordering on Associated Attributes

Retrieving an entity that is sorted on an attribute of one of its associated entities is not supported in SAP HANA.

For example, you have two associated entities — **Person** and **Address** — and they have the **name** and **street** attributes, respectively. You cannot retrieve `Person` objects sorted on `Person_Address/Address/street`. 

{{% alert color="info" %}}
This limitation has been removed in Studio Pro [9.8.0](/releasenotes/studio-pro/9.8/) and above, and also from [9.6.3](/releasenotes/studio-pro/9.6/#963).
{{% /alert %}}

## Behavior of Unlimited and Very Long Strings

### Comparison Functions

SAP HANA does not support unlimited strings or strings with a specified length greater than 5000 characters when using the equal (`=`) or not equal (`!=`) operators in XPath constraints. However, it does support functions including `contains()`, `starts-with()`, and `ends-with()`.

See also [Case-Sensitive Database Behavior](/refguide9/case-sensitive-database-behavior/).

{{% alert color="warning" %}}
In versions of Mendix below 8.11.0, string comparisons in SAP HANA were case sensitive.
{{% /alert %}}

### Sorting, Grouping, and Aggregating

It is not possible to sort, group, or use aggregate functions such as `count()` on unlimited strings or strings with a specified length greater than 5000 characters. This is because such long or unlimited strings are implemented with the data type CLOB. Consider decreasing the length of the string attribute or removing it from data grids.  

### Selecting DISTINCT Attribute

Selecting DISTINCT attributes of the string type with a size greater than 5000 characters is not supported by Mendix due to a known SAP HANA limitation of selecting DISTINCT columns with a CLOB data type.
 
## Known Issues

### Unicode Support

Currently, only [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane) Unicode characters are supported.
