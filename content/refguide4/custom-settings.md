---
title: "Custom Settings"
category: "Runtime"
---
You can use custom server settings to configure the Runtime beyond the standard possibilities offered by the Modeler.

{{% alert type="warning" %}}

Only use this functionality if you know exactly what you are doing. Wrong values can prevent the Runtime from starting.

{{% /alert %}}

Each custom setting consists of a name and a value. For example, to enable persistent sessions you add a custom setting with name `PersistentSessions` and value `true`.

The following custom settings can be configured:

| Name | Value | Default value |
| --- | --- | --- |
| TempPath | The location of the temporary files. | [deployment folder]\data\tmp
| UploadedFilesPath | The location of the uploaded files. A valid path can be: \\FileServer\CustomerPortalFiles. | [deployment folder]\data\file
| ScheduledEventExecution | Determine which scheduled events to execute on this server: "All", "Specified" or "None". In case of "Specified" the specific events can be entered for the "MyScheduledEvents" configuration option. | None
| MyScheduledEvents | A comma-separated string with the names of the events. Please don't forget the name of the module. A name can be CRM.UpdateCustomerStatistics.
| PersistentSessions | Defines whether sessions will be persisted in the database or not. When sessions are persisted, statistics will be made about logged-in users. When the Runtime server restarts, sessions still exist and users don't have to log in again. However, making sessions persistent has a negative influence on the speed of the application. The value can be true or false. | false
| TrackWebServiceUserLastLogin (since 4.3.0) | Defines whether to update the web service user's 'LastLogin' field on each login. When this happens a database update query has to be sent and this can have performance consequences on heavy load systems. When this setting is set to false, no database interaction is necesssary. | true
| ReadCommittedSnapshot | Defines whether the READ_COMMITTED_SNAPSHOT option of Microsoft SQL Server must be enabled or not. See for more information: [Using Snapshot Isolation](http://msdn.microsoft.com/en-us/library/tcbchxcb(VS.80).aspx). The value can be true or false. | true
| LogFileName | The name of the log file. The log files (actual log file plus back-up files) will be placed in the folder specified by the setting Log Path. | Application.log |
| MaxLogFileSize | The maximum size per log file. When the log file has been reached this maximum size, the log file will be backed up and a new empty log file will be used. | 2097152 (2 MB) |
| MaxLogFileCount | The maximum count of log files preserved (actual file plus back-up files). When the maximum count has been reached, the oldest backup file will be removed. | 10
| JavaKeyStorePassword | Password for the default Java keystore. | changeit
| CACertificates | Comma separated list of paths to Authority Certificates. |
| ClientCertificates | Comma separated list of paths to Client Certificates. Example: `D:\App\Mx1.pfx, D:\App\Mx2.pfx, D:\App\Mx3.pfx, D:\App\Mx4.pfx` |
| ClientCertificatePasswords | Comma separated list of passwords for Client Certificates (should match the "ClientCertificates" order). Example: `pwd1, pwd2, pwd3, pwd4` |
| WebServiceClientCertificates | Defines which web service must use which client certificate. The value of this setting must be a comma separated list of key/value items. A key/value item must be specified as [imported web service name:"path to certificate"] without brackets. Please note that any backslash in the path must be doubled. The whole value must be enclosed by braces. Example: `{Module.WebService2: "D:\\App\\Mx2.pfx", Module.WebService3: D:\\App\\Mx3.pfx"}` |
| OracleServiceName | Defines the SERVICE_NAME when you have a connection with
an Oracle DBMS.  |
| SessionTimeout | Defines the timeout for user sessions in milliseconds. | 600000 |
| EnableKeepAlive (since 4.1.0) | Defines whether the web client sends a keep alive request every SessionTimeout/2 milliseconds, to prevent a session timeout. | true |
| EnableSessionFingerprinting (4.1.0 – 4.2.2) | Defines whether user sessions are fingerprinted in order to prevent session hijacking. Default value is 'true', but some third-party software (e.g. Google Toolbar in IE9) can change request headers during session, which would cause the session fingerprint to change. When this occurs in the user base of your application, set this configuration option to 'false' to avoid session logouts. | true |
| DatabaseUseSsl | For PostgreSQL databases, defines whether the connection will be made using SSL. | false |
| LogMinDurationQuery (since 4.1.0) | Defines whether database queries are logged via the ConnectionBus_Queries log node if they finished after the amount of milliseconds specified here. By default, only the concerning SQL query will be logged. Set the log level of the ConnectionBus_Queries log node to TRACE to show more information about the form or the microflow which leads to this query. |

The settings below are used to define the database connection pooling behavior. The Runtime uses a pool of reusable database connections. You can for example define how many connections can be used. Connection pooling is implemented using the [Apache Commons Object-pooling API](http://commons.apache.org/pool/).

| Name | Value | Default value |
| --- | --- | --- |
| ConnectionPoolingMaxWait | When the maximum number of "active" objects has been reached, the pool is said to be 'exhausted'. The "when exhausted" action used by the Connection Bus is WHEN_EXHAUSTED_BLOCK Sets the maximum amount of time (in milliseconds) the borrowObject() method should block before throwing an exception when the pool is exhausted. When less than or equal to 0, the borrowObject() method may block indefinitely. (!)  | 10000 |
| ConnectionPoolingMaxActive | Sets the cap on the total number of active instances from the pool. | 50 |
| ConnectionPoolingMaxIdle | Sets the cap on the number of "idle" instances in the pool. | 50 (since Mendix 3.3, 20 before Mendix 3.3) |
| ConnectionPoolingMinIdle | Sets the minimum number of objects allowed in the pool before the evictor thread (if active) spawns new objects. Note that no objects are created when numActive + numIdle >= maxActive.  This setting has no effect if the idle object evictor is disabled (i.e. if timeBetweenEvictionRunsMillis <= 0). | 0 |
| ConnectionPoolingTimeBetweenEvictionRunsMillis | Sets the number of milliseconds to sleep between runs of the idle object evictor thread. When non-positive, no idle object evictor thread will be run. | 300 000 (5 minutes) |
| ConnectionPoolingSoftMinEvictableIdleTimeMillis | Sets the minimum amount of time an object may sit idle in the pool before it is eligible for eviction by the idle object evictor (if any), with the extra condition that at least "minIdle" amount of object remain in the pool. When non-positive, no objects will be evicted from the pool due to idle time alone. | 300 000 (5 minutes) |
| ConnectionPoolingNumTestsPerEvictionRun | Sets the max number of objects to examine during each run of the idle object evictor thread (if any). When a negative value is supplied, ceil(getNumIdle())/abs(getNumTestsPerEvictionRun()) tests will be run. I.e., when the value is -n, roughly one nth of the idle objects will be tested per run. | -3 |
