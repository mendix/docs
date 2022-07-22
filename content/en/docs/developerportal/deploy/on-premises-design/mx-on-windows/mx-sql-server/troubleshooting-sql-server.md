---
title: "Troubleshooting SQL Server"
url: /developerportal/deploy/troubleshooting-sql-server/
weight: 80
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/troubleshooting-sql-server.pdf).
{{% /alert %}}

## 1 Introduction

This document covers various errors you might encounter when using SQL Server, and offers suggestions on how to resolve them.

## 2 Issues

### 2.1 Read Committed Snapshot

```
Error while executing queries
ALTER DATABASE [YourDatabase] SET READ_COMMITTED_SNAPSHOT ON;
CREATE ASSEMBLY [Mendix.SqlServerExtensions] FROM [a dll file] WITH PERMISSION_SET = SAFE;
```

In order to set **Read Committed Snapshot** or to create an assembly, the user will need to have the `db_ddladmin` role. For each new Mendix database, the Read Committed Snapshot configuration must be enabled. The assembly query is only executed once per database server instance, and is used by all Mendix applications.

### 2.2 Create Function

```
Error while executing query
CREATE FUNCTION [dbo].[mx_toLocalDateTime] (@utcDateTime datetime, @dstTimeZone nvarchar(50)) RETURNS datetime AS EXTERNAL NAME [Mendix.SqlServerExtensions].[Mendix.SqlServerExtensions.DateTimeLocalizer].[ConvertToLocalDateTime];
```

This permission is granted implicitly to the `db_ddladmin` and `db_owner` fixed database roles. In SQL Server 2005 or higher, the user will still need `ALTER SCHEMA` rights to create the function in a particular schema.

In general if the user has the the `db_owner` role for the database he will have sufficient privileges to executing this query. 

### 2.3 JDBC Connections

#### 2.3.1 Time Out

```
Opening JDBC connection to yourServerAddress\YourInstanceName:0 failed with SQLState: 08S01 Error code: 0 Message: The connection to the host localhost, named instance sqlexpress2008 failed.
Error: "java.net.SocketTimeoutException: Receive timed out". Verify the server and instance names and check that no firewall is blocking UDP traffic to port 1434\.  For SQL Server 2005 or later, verify that the SQL Server Browser Service is running on the host. Retrying...(1/4)
```

If the server address and instance name are correct, then validate if the service “SQL Server Browser” is running. When this process is not running start the service. If you don’t want to use “SQL Server Browser” you need to include the port of the database instance in your URL as well.

#### 2.3.2 Login Failed

```
Opening JDBC connection to localhost\sqlexpress2008:0 failed with SQLState: S0001 Error code: 18470
Message: Login failed for user 'YourDatabaseUser'. Reason: The account is disabled. ClientConnectionId:5d971a3f-ab50-4594-b17b-88b90effcaab Retrying...(1/4)
```

Validate the ‘Status’ of the User. One of the login properties of the user is probably configured to be Deny or Disabled. Both permissions should be configured as Grant/Enabled.

## 3 Read More

*   [Setting Up the Database User](/developerportal/deploy/setting-up-the-database-user/)
*   [Restoring a SQL Server Database](/developerportal/deploy/restoring-a-sql-server-database/)
*   [Mendix SQL Maintenance Plans](/developerportal/deploy/mendix-sql-maintenance-plans/)
*   [Setting Up a New SQL Server Database](/developerportal/deploy/setting-up-a-new-sql-server-database/)
*   [Setting Up a SQL Server User](/developerportal/deploy/setting-up-a-sql-server-user/)
