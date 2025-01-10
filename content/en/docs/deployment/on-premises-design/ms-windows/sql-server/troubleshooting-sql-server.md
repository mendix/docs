---
title: "Troubleshooting SQL Server"
url: /developerportal/deploy/troubleshooting-sql-server/
weight: 80
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

This document covers various errors you might encounter when using SQL Server, and offers suggestions on how to resolve them.

## Issues

### Read Committed Snapshot

```text
Error while executing queries
ALTER DATABASE [YourDatabase] SET READ_COMMITTED_SNAPSHOT ON;
CREATE ASSEMBLY [Mendix.SqlServerExtensions] FROM [a dll file] WITH PERMISSION_SET = SAFE;
```

In order to set **Read Committed Snapshot** or to create an assembly, the user will need to have the `db_ddladmin` role. For each new Mendix database, the Read Committed Snapshot configuration must be enabled. The assembly query is only executed once per database server instance, and is used by all Mendix applications.

### Create Function

```text
Error while executing query
CREATE FUNCTION [dbo].[mx_toLocalDateTime] (@utcDateTime datetime, @dstTimeZone nvarchar(50)) RETURNS datetime AS EXTERNAL NAME [Mendix.SqlServerExtensions].[Mendix.SqlServerExtensions.DateTimeLocalizer].[ConvertToLocalDateTime];
```

This permission is granted implicitly to the `db_ddladmin` and `db_owner` fixed database roles. In SQL Server 2005 or higher, the user will still need `ALTER SCHEMA` rights to create the function in a particular schema.

In general if the user has the `db_owner` role for the database they will have sufficient privileges to executing this query. 

### JDBC Connections

#### Time Out

```text
Opening JDBC connection to yourServerAddress\YourInstanceName:0 failed with SQLState: 08S01 Error code: 0 Message: The connection to the host localhost, named instance sqlexpress2008 failed.
Error: "java.net.SocketTimeoutException: Receive timed out". Verify the server and instance names and check that no firewall is blocking UDP traffic to port 1434\.  For SQL Server 2005 or later, verify that the SQL Server Browser Service is running on the host. Retrying...(1/4)
```

If the server address and instance name are correct, then validate if the service “SQL Server Browser” is running. When this process is not running start the service. If you don’t want to use “SQL Server Browser” you need to include the port of the database instance in your URL as well.

#### Login Failed

```text
Opening JDBC connection to localhost\sqlexpress2008:0 failed with SQLState: S0001 Error code: 18470
Message: Login failed for user 'YourDatabaseUser'. Reason: The account is disabled. ClientConnectionId:5d971a3f-ab50-4594-b17b-88b90effcaab Retrying...(1/4)
```

Validate the ‘Status’ of the User. One of the login properties of the user is probably configured to be Deny or Disabled. Both permissions should be configured as Grant/Enabled.

#### Could not establish a secure connection

```text
Opening JDBC connection to yourServerAddress:1433\YourInstanceName failed with SQLState: 08S01 Error code: 0
Message: "The driver could not establish a secure connection to SQL Server by using Secure Sockets Layer (SSL) encryption.
Error: "PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target".
ClientConnectionId:[...]", retrying...(1/4)
```

Turn off connection encryption by setting the `DatabaseUseSsl` [custom setting](/refguide/custom-settings/#DatabaseUseSsl) to false. Since Mendix 10, the JDBC driver used in the database connection uses TLS encryption by default, while many on-premises SQL Server installations are not set up for this.

## Read More

* [Setting Up the Database User](/developerportal/deploy/setting-up-the-database-user/)
* [Restoring a SQL Server Database](/developerportal/deploy/restoring-a-sql-server-database/)
* [Mendix SQL Maintenance Plans](/developerportal/deploy/mendix-sql-maintenance-plans/)
* [Setting Up a New SQL Server Database](/developerportal/deploy/setting-up-a-new-sql-server-database/)
* [Setting Up a SQL Server User](/developerportal/deploy/setting-up-a-sql-server-user/)
