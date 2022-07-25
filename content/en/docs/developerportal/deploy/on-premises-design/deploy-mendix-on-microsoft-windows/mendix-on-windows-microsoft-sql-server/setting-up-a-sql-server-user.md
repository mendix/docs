---
title: "User Setup on SQL Server"
url: /developerportal/deploy/setting-up-a-sql-server-user/
weight: 20
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/setting-up-a-sql-server-user.pdf).
{{% /alert %}}

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
*   **Define the user mapping for each user:** Associate all the databases related to Mendix with their respective user(s). The template for these databases should be: `dbo` and the roles for each corresponding user should be: `db_datareader` and `db_datawriter`. Additionally, the user should be granted the `view definition` permission.

On this page you can find a step by step instruction on how to: [Set up the database user](/developerportal/deploy/setting-up-the-database-user/)

## 3 Read More

*   [Activating a Mendix License on Microsoft Windows](/developerportal/deploy/activate-a-mendix-license-on-microsoft-windows/)
*   [Setting Up the Database User](/developerportal/deploy/setting-up-the-database-user/)
*   [Troubleshooting](/developerportal/deploy/troubleshooting-iis/)
*   [Restoring a SQL Server Database](/developerportal/deploy/restoring-a-sql-server-database/)
*   [Troubleshooting SQL Server](/developerportal/deploy/troubleshooting-sql-server/)
*   [Mendix SQL Maintenance Plans](/developerportal/deploy/mendix-sql-maintenance-plans/)
*   [Setting Up a new SQL Server Database](/developerportal/deploy/setting-up-a-new-sql-server-database/)
