---
title: "Case Sensitive Database Behavior"
parent: "data-storage"
tags: ["studio pro"]
menu_order: 20
---

## 1 Introduction

Case sensitive string operations are those that consider upper and lower case as different letters.
Operations that affect strings in queries (for instance, inside an XPath constraint) can be case sensitive or case insensitive depending on the database vendor, version, and configuration used by the Mendix application.

It is also important to note that each implementation of case insensitive operation may treat the case normalization of letters differently.
As a general rule, it is based on locale which is either specified explicitly on database/table, or the database infers it from the OS.
This normalization of letters, or case folding, is further described in the [W3C case folding wiki page](https://www.w3.org/International/wiki/Case_folding).

For the purposes of this document we can divide these operations three categories:

- Sorting: Indicates the order in which you want objects to be loaded (alphabetically ascending or descending).
- Comparing: These are operations that involve equality directly in queries (for instance, in the query `\\Entity[Attribute = 'a']`)
- String functions: These are the [contains](xpath-contains), [starts-with](xpath-starts-with), and [ends-with](xpath-ends-with) functions.

Unless otherwise indicated below, sorting and comparing strings is case sensitive whereas string functions are case insensitive.
This is affected the by database, table or column collation, and sometimes by other database specific options.
The available collations and options are vendor (and sometimes version) specific.

## 2 Behavior of Case Sensitivity by Database Type

The following section describes the default behavior of the following databases in Mendix.

### 2.1 HSQLDB

Case insensitive for sorting, comparing, and in string functions.

### 2.2 POSTGRESQL

Sorting and comparison are case sensitive with no possible configuration.
String functions are case insensitive as they are implemented using the `ILIKE` SQL operator.

### 2.3 DB2

Case sensitive for sorting, comparing, and in string functions.
Cannot be configured otherwise.

Does not support sorting on attributes of strings of unlimited length.

### 2.4 MARIADB & MYSQL

All operations depend on collation.
The default collation is `utf8_general_ci` when the `utf8` character set is used or `latin1_swedish_ci` when the `latin1` character set is used.
These are both case insensitive.

### 2.5 ORACLE

Sorting and comparison depend on collation.
The default collation is `binary`, which is case sensitive, but a `binary_ci` is available for case insensitive operations.

It is possible to set different collations for sorting and comparison operations by setting different values to the `NLS_SORT` and `NLS_COMP` "Linguistic Sort Parameters".

Does not support comparison on attributes of strings of unlimited length.

String functions are implemented by converting all letters to uppercase using the database's `UPPER` function and is, therefore, insensitive to the `locale` in which it is executed.

### 2.6 SAP HANA

All operations are case sensitive.

Does not support sorting or comparison on attributes of strings of unlimited length.

### 2.7 SQL SERVER

All operations depend on collation.
The default recommended collation is `SQL_Latin1_General_CP1_CI_AS`.
For more information, see our guide on [Setting Up a new SQL Server Database](setting-up-a-new-sql-server-database) and the [Windows Collation Sorting Style](https://msdn.microsoft.com/en-us/library/ms143515.aspx).

## 3 Overview of Default Case Sensitivity

This table presents the default case sensitivity by different database types:

| **Database Types** | **Comparison** | **Sorting** | **String functions** |
|-------------------:|:--------------:|:-----------:|:--------------------:|
| HSQLDB             | I              | I           | I                    |
| POSTGRESQL         | S              | S           | I                    |
| DB2                | S              | S¹          | S                    |
| MARIADB & MYSQL    | C              | C           | C                    |
| ORACLE             | C¹             | C           | I                    |
| SAP HANA           | S¹             | S¹          | S                    |
| SQL SERVER         | C              | C           | C                    |

Where the letters have the following meaning:

- **S**: Case sensitive
- **C**: Collation/configuration dependent
- **I**: Case insensitive

1 - Operation not supported on strings of unlimited length.
