---
title: "Unlimited String Behavior"
url: /refguide9/unlimited-string-behavior/
weight: 20
---

## Introduction

In the domain model, you can select the attribute type String and set its length to **Unlimited**. The underlying implementation of this attribute differs per database.

## Behavior of Unlimited Strings by Database Type

The following section describes the default behavior of the databases supported by Mendix.

### HSQLDB, PostgreSQL, and MariaDB

You can sort by and compare unlimited strings. Unlimited strings can be used in uniqueness constraints.

### SQL Server and MySQL

You can sort by and compare unlimited strings. Uniqueness constraints on unlimited strings are not supported.

### Oracle

You can sort by unlimited strings. Uniqueness constraints on unlimited strings are not supported. Comparison of unlimited strings is not supported.

### DB2

You can compare unlimited strings. Uniqueness constraints on unlimited strings are not supported. Sorting by unlimited strings is not supported.

### SAP HANA

Sorting by and comparison of unlimited strings is not supported. Uniqueness constraints on unlimited strings are not supported.

## Overview of Unlimited String Behavior

| **Database Type** | **Comparison** | **Sorting**   | **Uniqueness constraint** |
|------------------:|:--------------:|:-------------:|:-------------------------:|
| HSQLDB            | **Supported**  | **Supported** | **Supported**             |
| POSTGRESQL        | **Supported**  | **Supported** | **Supported**             |
| DB2               | **Supported**  | Not supported | Not supported             |
| MARIADB           | **Supported**  | **Supported** | **Supported**             |
| MYSQL             | **Supported**  | **Supported** | Not supported             |
| ORACLE            | Not supported  | **Supported** | Not supported             |
| SAP HANA          | Not supported  | Not supported | Not supported             |
| SQL SERVER        | **Supported**  | **Supported** | Not supported             |
