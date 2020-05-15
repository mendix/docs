---
title: "Case Sensitive Database Behavior"
parent: "data-storage"
tags: ["studio pro"]
menu_order: 20
---

## 1 Introduction

Case sensitive string operations are those that consider upper and lower case as different letters.
Operations that affect strings in queries (for instance, inside an XPath constraint) can be case sensitive or case insensitive depending on the database vendor, version, and configuration used by the Mendix application.

For the purposes of this document we can divide these operations three categories:

- Sorting: Indicates the order in which you want objects to be loaded (alphabetically ascending or descending).
- Comparing: These are operations that involve equality directly in queries (for instance, in the query `\\Entity[Attribute = 'a']`)
- String functions: These are the [contains](xpath-contains), [starts-with](xpath-starts-with), and [ends-with](xpath-ends-with) functions.

Sometimes it is possible to change case sensitivity of operations, depending on the database.
The most common mechanism is changing the database, table, or column collation.
Sometimes other factors such as settings specific environment or session variables.
Both the available collation and any other possible settings are database vendor (and sometimes version) specific.

## 2 Behavior of Case Sensitivity by Database Type

The following section describes the default behavior of the following databases in Mendix.

### 2.1 HSQLDB

Case sensitive by default, but its behavior depends on collation. Setting collation to `SQL_TEXT_UCC` makes all comparisons case-insensitive.

### 2.2 POSTGRESQL

Case sensitive with no possible configuration. String functions are case insensitive as they are implemented using the `ILIKE` SQL operator.

### 2.3 MARIADB & MYSQL

Case insensitive by default, but its behavior depends on collation. The default collation is `utf8_general_ci` when the `utf8` character set is used or `latin1_swedish_ci` when the `latin1` character set is used. Changing this collation will affect case sensitivity.

### 2.4 SQL SERVER

Case insensitive by default, but its behavior depends on collation. The default recommended collation is `SQL_Latin1_General_CP1_CI_AS`. For more information, see our guide on [Setting Up a new SQL Server Database](setting-up-a-new-sql-server-database) and the [Windows Collation Sorting Style](https://msdn.microsoft.com/en-us/library/ms143515.aspx).

### 2.5 DB2

Case sensitive. Cannot be configured otherwise.

It also does not support sorting on attributes of strings of unlimited length.

### 2.6 ORACLE

Case sensitive by default, but its behavior depends on collation. The default collation is `binary`, but a `binary_ci` is available for case insensitive operations.

It is possible to set different collations for sorting and comparison operations by setting different values to the `NLS_SORT` and `NLS_COMP` "Linguistic Sort Parameters".

It does not support comparison on attributes of strings of unlimited length.

### 2.7 SAP HANA

Case sensitive by default. Cannot be configured otherwise.

It does not support sorting or comparison on attributes of strings of unlimited length.

## 3 Overview of Default Case Sensitivity

This table presents the default case sensitivity by different database types:

| Case Sensitive Operation/Database Types  | DB2 | HSQLDB | MARIADB/ MYSQL | ORACLE | POSTGRESQL | SAP HANA | SQL SERVER |
|-----------------------------------------:|:---:|:------:|:--------------:|:------:|:----------:|:--------:|:----------:|
| **Sorting**                              | S¹  | C      | I              | C      | S          | S¹       | C          |
| **Comparison**                           | S   | C      | I              | C¹     | S          | S¹       | C          |
| **String functions**                     | S   | I      | I              | I      | I          | S        | I          |

Where the letters have the following meaning:

- **S**: Case sensitive
- **C**: Collation/configuration dependent
- **I**: Case insensitive

1 - Operation not supported on strings of unlimited length.
