---
title: "New Database Setup on SQL Server"
url: /developerportal/deploy/setting-up-a-new-sql-server-database/
weight: 10
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

This how-to explains how to manually set up a new SQL Server database.

{{% alert color="info" %}}
You only need to follow these steps if the database user used by Mendix does not have enough permission to create the database for you.

Some of these steps are only required for specific versions of SQL Server or Mendix.
{{% /alert %}}

## Setting Up a New Database

When setting up a new database for Mendix, you can leave most of the settings to the default configuration. When looking at the general settings, you only need to set up the database name. Set up the database files according to the [Microsoft SQL Server best practices](https://www.mssqltips.com/sqlservertip/4891/sql-server-installation-best-practices/).

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/setting-up-a-new-sql-server-database/18580676.png" class="no-border" >}}

In the database options, the default properties need to be evaluated. When choosing a collation, pay attention to the type of collation you are going to use. Mendix uses UTF-8 for all data evaluation. Depending on your exact locale, you will most likely want to choose one of the `SQL_Latin1_General_` collations. The exact encoding depends on your OS. For an **en_US** installation, for example, the encoding is `CP1`.

The last two collation arguments identify how sorting and uniqueness are interpreted. For example, the collation argument `CS` indicates that the collation sorting style is case sensitive. For more information on collations and case sensitivity, see [Case-Sensitive Database Behavior](/refguide/case-sensitive-database-behavior/) and the Microsoft documentation [Windows Collation Name](https://docs.microsoft.com/en-us/sql/t-sql/statements/windows-collation-name-transact-sql).

Mendix recommends using the **Simple** recovery model option. Mendix does not use the full functionality offered in the **Full** recovery model option; although you can successfully use the **Full** recovery model, it could increase the data usage of all the transactions and might slow down any rollbacks in case of an error.

{{< figure src="/attachments/deployment/on-premises-design/ms-windows/sql-server/setting-up-a-new-sql-server-database/18580675.png" class="no-border" >}}

After the database is created, the Mendix Runtime can initiate the initial setup and prepare all the tables and functions for usage by the platform. Some of these queries require `sysadmin` privileges. The `sysadmin` role can be temporarily assigned to the user, or these queries can be executed by the administrator. Other queries need privileges that are implicitly assigned to the `db_owner` role. If the user used by the Mendix Runtime does not have enough permissions for any of these queries, you can run them manually – see below for more information.

## Enabling Read Committed Snapshot Isolation Level and Snapshot Isolation

Mendix apps using SQL Server use both **Read Committed Snapshot** and **Snapshot Isolation** features for their database. This allows read operations to continue even if the record has been updated by a concurrent transaction, improving concurrency. For more information, see the [Transaction Locking and Row Versioning Guide](https://docs.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide?view=sql-server-ver15).

{{% alert color="info" %}}
You only need to follow these steps if the database user used by the Mendix Runtime does not have enough permission to issue the `ALTER DATABASE` command (usually the `sysadmin` role).
{{% /alert %}}

The database schema needs to be configured so that the **Read Committed Snapshot** and **Snapshot Isolation** features are enabled. To enable them, run the following commands on the database:

```sql
ALTER DATABASE [MySchema] SET READ_COMMITTED_SNAPSHOT ON;

ALTER DATABASE [MySchema] SET ALLOW_SNAPSHOT_ISOLATION ON;
```

{{% alert color="info" %}}
When you run the commands above, replace `[MySchema]` with the name of your schema.
{{% /alert %}}

## Read More

* [How to Activate a Mendix License on Microsoft Windows](/developerportal/deploy/activate-a-mendix-license-on-microsoft-windows/)
* [How to Set Up the Database User](/developerportal/deploy/setting-up-the-database-user/)
* [How to Share the Development Database](/howto/data-models/sharing-the-development-database/)
* [How to Restore a SQL Server Database](/developerportal/deploy/restoring-a-sql-server-database/)
* [How to Troubleshoot](/developerportal/deploy/troubleshooting-iis/)
* [How to Troubleshoot an SQL Server](/developerportal/deploy/troubleshooting-sql-server/)
* [How to Set Up Mendix SQL Maintenance Plans](/developerportal/deploy/mendix-sql-maintenance-plans/)
