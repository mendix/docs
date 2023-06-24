---
title: "Database (Mendix 10)"
url: /appstore/connectors/database-connector-mx10/
category: "Connectors"
description: "Describes the configuration and usage of the new Database connector, which incorporates your external data directly in your Mendix app."
tags: ["marketplace",  "marketplace component", "database connector", "mendix 10", "studio pro 10", "query", "mssql", "mysql", "postgres", "oracle", "new"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

Connect to MSSQL, MySQL, PostgresSQL, and Oracle databases with the [Mendix 10 Database](add marketplace link here) connector.

This connector is supported for Studio Pro [10.0](/releasenotes/studio-pro/10.0/) and above. 

### 1.1 Typical Use Cases

Use this module if you need to connect to databases and select data to use in your app. This connector allows you to directly test connections and queries during configuration in Studio Pro ([design time](#design-time)). 

If you need to connect to other database types or use other statements, check out the [Database](/appstore/connectors/database-connector/) connector.

### 1.2 Features {#features}

This connector supports connections to the following database types:

* MSSQL
* MySQL
* PostgresSQL
* Oracle

This connector supports the following statements:

* `SELECT` — retrieves rows and columns from a database

### 1.3 Limitations

This connector currently has the following limitations:

* MSSQL database connections is only supported on x64 architecture.
* Parameterized queries are currently not supported.
* Queries are saved when clicking **Save Query & Create Entity**, which you may not want.

### 1.4 Prerequisites

* Studio Pro [10.0](/releasenotes/studio-pro/10.0/) or above
* External database connection details, including the following:
    * Login credentials
    * Database type
    * Hostname, port, and database name, or JDBC connection string

### 1.5  Dependencies

{List important dependencies, especially when they are other Marketplace components.}

## 2 Installation

Curren

## 3 Configuration

{Describe the properties to be configured.}

## 4 Usage

### 4.1 Design Time {#design-time}

### 4.2 Runtime {#runtime}

## 5 Troubleshooting
