---
title: "Database Connector"
category: "Connectors"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

Use the [Database Connector](https://appstore.home.mendix.com/link/app/2888/) to seamlessly connect to external databases without limiting you in your choice of database or SQL dialect, enabling you to incorporate your external data directly in your Mendix application. This document will focus on executing an SQL (Structured Query Language) Select Query and executing an SQL Statement on external relational databases.

The Execute query action (present in the Database connector) provides a consistent environment for Mendix projects to perform an arbitrary Select SQL query on relational external databases. JDBC (Java Database Connectivity) API, a standard Java API, is used when this Java action attempts to connect with a relational database for which a JDBC driver exists.

The Execute statement action (present in the Database connector) internally works in the same manner as Execute query action. However, it is used for INSERT, UPDATE, DELETE, STORED PROCEDURE or DDL statements.

### 1.1 Dependencies

    HikariCP, a high-performance JDBC connection pool.

## 2 Installation

These are the prerequisites:

    A database URL address that points to your database.
    The username for logging into the database, relative to the database URL address.
    The password for logging into the database, relative to the database URL address.
    The JDBC driver libraries (.jar extension) (see also here), for the databases you want to connect to, must be placed inside the userlib directory of your Mendix application.
    So if you want to connect to Amazon RDS PostgreSQL database (For e.g. jdbc:postgresql://xyz-rds-instance.ccnapcvoeosh.eu-west-1.rds.amazonaws.com:5432/postgres), you need to place PostgreSQL Jdbc driver jar inside the userlib folder.
    Specific to the Execute query action:
    An entity in the domain model, to be used for the results of the executed query.
    Let's say that you want to execute a query like select name, number from stock. This query has two columns of type String and Integer respectively. In order to use the Execute query action, you have to add an entity in the domain model that has the same attributes as the columns in the query.

To install, import the module Database connector in your project (from the Mendix AppStore or by downloading and exporting the module from this project)

## 3 Getting Started

Once you have imported the DatabaseConnector module in your mendix application, you will have Database connector available in the Toolbox. It supports two actions Execute query and Execute statement. In order to use any of these in your Mendix application, you can just drag and drop them to your microflow. Next step would be to provide all the arguments to the selected action and choose the output result name.

### 3.1 Execute query action

The result of this action is a list of objects of type Row, which is also the output of the SELECT SQL query.

### 3.2 Execute statement action

The result of this action is either an Integer or a Long value which usually represents the amount of affected rows.

## 4 Notes

    It is a good practice to avoid having user input as part of your dynamic SQL queries and statements. In the future we will support using parameters with the queries or statements.
    Avoid fetching large amounts of data as it can lead to memory issues because all the ResultSet data is being loaded into memory at once.

## 5 Links to common JDBC drivers

    Amazon Redshift
    Apache Derby
    Firebird
    H2 Database Engine
    HSQLDB
    IBM DB2
    IBM Informix
    MariaDB
    Microsoft SQL Server/SQL Database
    MySQL
    Oracle Database
    OrientDB
    PostgreSQL
    Presto
    SQLite

## 6 License

Licensed under the Apache license.

## 7 Developers notes

    git clone https://github.com/mendix/database-connector.git
    Open the DatabaseConnector.mpr in the Mendix Modeler.
    Use Deploy for Eclipse option (F6) and you can then import this module as an Eclipse project to the Eclipse IDE.
