---
title: "Troubleshooting SQL Server"
parent: "mendix-on-windows-_-microsoft-sql-server"
space: "Mendix 5 How-to's"
---
# Troubleshooting SQL Server



<table><thead><tr><th class="confluenceTh">Error while executing queriesALTER DATABASE [YourDatabase] SET READ_COMMITTED_SNAPSHOT ON;CREATE ASSEMBLY [Mendix.SqlServerExtensions] FROM [a dll file] WITH PERMISSION_SET = SAFE;</th></tr></thead><tbody><tr><td class="confluenceTd">In order to set Read Committed Snapshot or to create an Assembly the user will need to have the db_ddladmin role. For each new Mendix databasea the Read Committed Snapshot must be enabled.&nbsp;<br>The Assembly query is only executed once per database server instance, and used by all Mendix applications.</td></tr></tbody></table><table><thead><tr><th class="confluenceTh">Error while executing queryCREATE FUNCTION [dbo].[mx_toLocalDateTime] (@utcDateTime datetime, @dstTimeZone nvarchar(50)) RETURNS datetime AS EXTERNAL NAME [Mendix.SqlServerExtensions].[Mendix.SqlServerExtensions.DateTimeLocalizer].[ConvertToLocalDateTime];</th></tr></thead><tbody><tr><td class="confluenceTd"><p>This permission is granted implicitly to the db_ddladmin and db_owner fixed database roles. In SQL Server 2005 or higher, the user will still need ALTER SCHEMA rights to create the function in a particular schema.</p><p>In general if the user has the the db_owner role for the database he will have sufficient privileges to executing this query.&nbsp;</p></td></tr></tbody></table><table><thead><tr><th class="confluenceTh">&nbsp;Opening JDBC connection to yourServerAddress\YourInstanceName:0 failed with SQLState: 08S01 Error code: 0 Message: The connection to the host localhost, named instance sqlexpress2008 failed. Error: "java.net.SocketTimeoutException: Receive timed out". Verify the server and instance names and check that no firewall is blocking UDP traffic to port 1434\. &nbsp;For SQL Server 2005 or later, verify that the SQL Server Browser Service is running on the host. Retrying...(1/4)</th></tr></thead><tbody><tr><td class="confluenceTd"><span>If the server address and instance name are correct, then validate if the service “SQL Server Browser” is running. When this process is not running start the service. If you don’t want to use “SQL Server Browser” you need to include the port of the database instance in your URL as well.</span></td></tr></tbody></table><table><thead><tr><th class="confluenceTh">&nbsp;Opening JDBC connection to localhost\sqlexpress2008:0 failed with SQLState: S0001 Error code: 18470 Message: Login failed for user 'YourDatabaseUser'. Reason: The account is disabled. ClientConnectionId:5d971a3f-ab50-4594-b17b-88b90effcaab Retrying...(1/4)</th></tr></thead><tbody><tr><td class="confluenceTd"><span>Validate the ‘Status’ of the User. One of the login properties of the user is probably configured to be Deny or Disabled. Both permissions should be configured as Grant/Enabled.</span></td></tr></tbody></table>

## Related content

*   [Setting up the database user](/howto50/setting-up-the-database-user)
*   [Setting up the database user](/howto6/setting-up-the-database-user)
*   [How to execute an SQL statement on an external database](/bestpractices/how-to-execute-an-sql-statement-on-an-external-database)
*   [Restoring a SQL Server database](/howto50/restoring-a-sql-server-database)
*   [Mendix SQL Maintenance Plans](/howto50/mendix-sql-maintenance-plans)
*   [Setting up a new SQL Server database](/howto50/setting-up-a-new-sql-server-database)
*   [Troubleshooting SQL Server](/howto50/troubleshooting-sql-server)
*   [Setting up a SQL Server user](/howto50/setting-up-a-sql-server-user)
*   [Restoring a SQL Server database](/howto6/restoring-a-sql-server-database)
*   [Troubleshooting SQL Server](/howto6/troubleshooting-sql-server)
