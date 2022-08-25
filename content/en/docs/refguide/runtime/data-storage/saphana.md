---
title: "SAP HANA"
url: /refguide/saphana/
weight: 70
tags: ["studio pro"]
---

## 1 Introduction

The behavior of Mendix using a SAP HANA  database has some minor differences when compared with using a PostgreSQL database. These differences are documented below.

## 2 Ordering on Associated Attributes

Retrieving an entity that is sorted on an attribute of one of its associated entities is not supported in SAP HANA.

For example, you have two associated entities — **Person** and **Address** — and they have the **name** and **street** attributes, respectively. You cannot retrieve `Person` objects sorted on `Person_Address/Address/street`. 

{{% alert color="info" %}}
This limitation has been removed in Studio Pro version [9.8.0](/releasenotes/studio-pro/9.8/) and above, and also from MTS version [9.6.3](/releasenotes/studio-pro/9.6/#963) and above.
{{% /alert %}}

## 3 Behavior of Unlimited & Very Long Strings

### 3.1 Comparison Functions

SAP HANA does not support unlimited strings or strings with a specified length greater than 5000 characters when using the equal (`=`) or not equal (`!=`) operators in XPath constraints. However, it does support functions including `contains()`, `starts-with()`, and `ends-with()`.

See also [Case-Sensitive Database Behavior](/refguide/case-sensitive-database-behavior/).

{{% alert color="warning" %}}
In versions of Mendix below 8.11.0, string comparisons in SAP HANA were case sensitive.
{{% /alert %}}

### 3.2 Sorting, Grouping & Aggregating

It is not possible to sort, group, or use aggregate functions such as `count()` on unlimited strings or strings with a specified length greater than 5000 characters. This is because such long or unlimited strings are implemented with the data type CLOB. Consider decreasing the length of the string attribute or removing it from data grids.  

### 3.3 Selecting DISTINCT Attribute

Selecting DISTINCT attributes of the string type with a size greater than 5000 characters is not supported by Mendix due to a known SAP HANA limitation of selecting DISTINCT columns with a CLOB data type.
 
## 4 Known Issues

### 4.1 Unicode Support

Currently, only [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane) Unicode characters are supported.
