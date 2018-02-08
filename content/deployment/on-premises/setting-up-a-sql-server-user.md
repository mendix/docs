---
title: "Set Up an SQL Server User"
parent: "mendix-on-windows-microsoft-sql-server"
---

## 1 Description

This article describes how to configure the users of a SQL server to create a secure environment for a Mendix based application.
To create a secure environment it is important to make a clear distinction between an user with an administrator role and a regular user of the application.

## 2 Instructions

*   **Create an administrator:** Create a user with the administrator role, for example 'MendixAdmin'.
*   **Set the server roles for the administrator:** Depending on the tasks this user has to execute the administrator role should be connected to the following database roles:

    | | Create Databases | Create Users | Database Maintenance | Complete Maintenance |
    | --- | --- | --- | --- | --- |
    | `dbcreator` | **X** |  |  | |
    | `diskadmin` | **X** |  |  | |
    | `processadmin` |  |  |  | |
    | `securityadmin` | | **X** |  | |
    | `serveradmin` |  |  | **X** | |
    | `setupadmin` |  |  |  | |
    | `sysadmin` |  |  |  | **X** |

*   **Define the user mapping for the administrator:** Associate all the databases related to Mendix with the administrator. The template for these databases should be `dbo` and the role of the administrator should be: `db_owner`.
*   **Create (a) database user(s) for each Mendix application:** Each Mendix application should have its own database user(s).
*   **Set the server role for each user:** Associate each user with the role `public`.
*   **Define the user mapping for each user:** Associate all the databases related to Mendix with their respective user(s). The template for these databases should be: `dbo` and the roles for each corresponding user should be: `db_datareader` and `datawriter`.

On this page you can find a step by step instruction on how to: [Set up the database user](setting-up-the-database-user)

## 3 Related Content

*   [Activating a Mendix License on Microsoft Windows](activate-a-mendix-license-on-microsoft-windows)
*   [Setting Up the Database User](setting-up-the-database-user)
*   [Troubleshooting](troubleshooting)
*   [Restoring a SQL Server Database](restoring-a-sql-server-database)
*   [Troubleshooting SQL Server](troubleshooting-sql-server)
*   [Mendix SQL Maintenance Plans](mendix-sql-maintenance-plans)
*   [Setting Up a new SQL Server Database](setting-up-a-new-sql-server-database)
