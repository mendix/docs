---
title: "Setting up a SQL Server user"
space: "Mendix 6 How-to's"
parent: "Mendix+on+Windows+-+Microsoft+SQL+Server"
---
## 1. Description

This article describes how to configure the users of a SQL server to create a secure environment for a Mendix based application.
To create a secure environment it is important to make a clear distinction between an user with an administrator role and a regular user of the application.

## 2. Instructions

*   **Create an administrator:** Create a user with the administrator role, for example 'MendixAdmin'.
*   **Set the server roles for the administrator:** Depending on the tasks this user has to execute the administrator role should be connected to the following database roles:

    | | Create Databases | Create Users | Database Maintenance | Complete Maintenance |
    | --- | --- | --- | --- | --- |
    | dbcreator | **X** |  |  | |
    | diskadmin | **X** |  |  | |
    | processadmin |  |  |  | |
    | securityadmin | | **X** |  | |
    | serveradmin |  |  | **X** | |
    | setupadmin |  |  |  | |
    | sysadmin |  |  |  | **X** |

*   **Define the user mapping for the administrator:** Associate all the databases related to Mendix with the administrator. The template for these databases should be _dbo_ and the role of the administrator should be: _db_owner_.
*   **Create (a) database user(s) for each Mendix application:** Each Mendix application should have its own database user(s).
*   **Set the server role for each user:** Associate each user with the role _public_.
*   **Define the user mapping for each user:** Associate all the databases related to Mendix with their respective user(s). The template for these databases should be: _dbo_ and the roles for each corresponding user should be: _db_datareader_ and _datawriter_.

On this page you can find a step by step instruction on how to: [Set up the database user](Setting+up+the+database+user)

## 3. Related content

*   [Activating a Mendix license on Microsoft Windows](Activate+a+Mendix+License+on+Microsoft+Windows)
*   [Setting up the database user](Setting+up+the+database+user)
*   [Troubleshooting](Troubleshooting)
*   [Restoring a SQL Server database](Restoring+a+SQL+Server+database)
*   [Troubleshooting SQL Server](Troubleshooting+SQL+Server)
*   [Mendix SQL Maintenance Plans](Mendix+SQL+Maintenance+Plans)
*   [Setting up a new SQL Server database](Setting+up+a+new+SQL+Server+database)
*   [Setting up a SQL Server user](Setting+up+a+SQL+Server+user)
