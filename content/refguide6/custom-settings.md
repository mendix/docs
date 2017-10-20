---
title: "Custom Settings"
category: "Runtime"
---

## 1 Custom Settings

You can use custom server settings to configure the Runtime beyond the standard possibilities offered by the Modeler.

{{% alert type="warning" %}}

Only use this functionality if you know exactly what you are doing. Wrong values can prevent the Runtime from starting.

{{% /alert %}}

Each custom setting consists of a name and a value. For example, to enable persistent sessions you add a custom setting with name `PersistentSessions` and value `true`. For a more detailed list of settings and example values please consult the [fully-documented m2ee.yaml](https://github.com/mendix/m2ee-tools/blob/master/examples/full-documented-m2ee.yaml).

## 2 General Settings

The following custom settings can be configured:

| Name | Description | Default value |
| --- | --- | --- |
| TempPath | The location of the temporary files. | [deployment folder]\data\tmp |
| UploadedFilesPath | The location of the uploaded files. A valid path can be: \\FileServer\CustomerPortalFiles. | [deployment folder]\data\files |
| ApplicationRootUrl | Can be used within Java Actions to get the public location of the application. Useful when the HOST header is not available, for example when including a url to the application when sending e-mails from a scheduled event. | In Mendix Cloud, https://\[domain\].mendixcloud.com |
| ScheduledEventExecution | Specify which scheduled events should be executed. Choices are 'ALL', 'NONE' or 'SPECIFIED'. In case of 'SPECIFIED' enumerate the scheduled events using the 'MyScheduledEvents' configuration option described below. | NONE |
| MyScheduledEvents | A comma-separated string with the names of the events. Please don't forget the name of the module. A name can be CRM.UpdateCustomerStatistics. |   |
| PersistentSessions | Defines whether sessions will be persisted in the database or not. When sessions are persisted, statistics will be made about logged-in users. When the Runtime server restarts, sessions still exist and users don't have to log in again. However, making sessions persistent can have a negative influence on the speed of the application. The value can be true or false. | false |
| TrackWebServiceUserLastLogin | Defines whether to update the web service user's 'LastLogin' field on each login. When this happens a database update query has to be sent and this can have performance consequences on heavy load systems. When this setting is set to false, no database interaction is necesssary. | true |
| JavaKeyStorePassword | Password for the default Java keystore. | changeit |
| CACertificates | Comma separated list of paths to Authority Certificates. |   |
| ClientCertificates | Comma separated list of paths to Client Certificates. Example: `D:\App\Mx1.pfx, D:\App\Mx2.pfx, D:\App\Mx3.pfx, D:\App\Mx4.pfx` |  |
| ClientCertificatePasswords | Comma separated list of passwords for Client Certificates (should match the "ClientCertificates" order). Example: `pwd1, pwd2, pwd3, pwd4` |   |
| WebServiceClientCertificates | Defines which web service must use which client certificate. The value of this setting must be a comma separated list of key/value items. A key/value item must be specified as [imported web service name:"path to certificate"] without brackets. Please note that any backslash in the path must be doubled. The whole value must be enclosed by braces. Example:![](attachments/Custom+Settings/code_snippet.png) |  |
| SessionTimeout | Defines after how much time session becomes invalid (in milliseconds). After that timeout a session becomes applicable for removal. The session won't be destroyed until the next time the cluster manager evaluates the active sessions. | 600000 |
| ClusterManagerActionInterval | The interval (in milliseconds) used for performing all cluster manager actions. These actions include, unblocking users, and removing invalid sessions. If nothing is specified the interval is half the SessionTimeout. | 300000 |
| com.mendix.core.StorageService | Defines which storage service module will be used. The storage service module takes care of storing the actual files asssociated with 'System.FileDocument' objects, such as uploaded files. Possible values are 'com.mendix.storage.localfilesystem' and 'com.mendix.storage.s3'. From Mendix 6.6 onwards 'com.mendix.storage.azure' is also available. | com.mendix.storage.localfilesystem |
| com.mendix.core.SessionIdCookieName | Defines the name of the cookie value which represents the session id. Can be useful to change when running in a container which assumes a certain name for the session cookie (e.g. Pivotal assumes 'JSESSIONID' as session cookie name). | XASSESSIONID |
| com.mendix.core.localfilesystem.cleaning.isEnabled | **Warning: This is an experimental feature that will be replaced in the near future. This feature should not be used in production.** Enables the scheduled task to clean orphan files from the local file system. Orphan files are files in the uploaded file directory (see UploadedFilesPath setting above) which do not have a corresponding database entry. Because there is no deterministic approach to distinguish between application files and other files, it's important to avoid placing non application files in the uploaded file directory, otherwise they may be deleted as well. This setting can only be used in Mendix 6.5 and later releases. | false |
| com.mendix.core.localfilesystem.cleaning.time | Defines the hour of the day to trigger the scheduled task to clean orphan files from the local file system. Accepted values are in the range of 1 to 24\. The default value is 24 which triggers the task at midnight. In order to avoid running many of such tasks on different instances at the same time, the exact start time can be delayed up to 30 minutes. Because this can be a memory intensive operation, it's important to configure this value such that the task runs at the low pick of the application. This setting can only be used in Mendix 6.5 and later releases. | 24 |

## 3 Log File Settings

The settings below influence the behavior of the log files. These settings can only be used on-premises. In the cloud these won't result in a difference in behavior.

| Name | Description | Default value |
| --- | --- | --- |
| LogFileName | The name of the log file. The log files (actual log file plus back-up files) will be placed in the folder specified by the setting Log Path. | Application.log |
| MaxLogFileSize | The maximum size per log file. When the log file has been reached this maximum size, the log file will be backed up and a new empty log file will be used. | 2097152 (2 MB) |
| MaxLogFileCount | The maximum count of log files preserved (actual file plus back-up files). When the maximum count has been reached, the oldest backup file will be removed. | 10 |

## 4 Database Settings

### 4.1 Common Settings

| Name | Description | Default value |
| --- | --- | --- |
| ClientQueryTimeout | Defines the timeout in seconds for most of the database queries which are executed to load data into client widgets, like data grids. After the duration as specified here, a query will be canceled and an exception will be thrown. |   |
| DatabaseJdbcUrl | Defines the JDBC URL to use for the database connection (which overrides the other database connection settings). This feature is not supported for PostgreSQL databases. |   |
| DatabaseUseSsl | For PostgreSQL databases, defines whether the connection will be made using SSL. | false |
| LogMinDurationQuery | Defines whether database queries are logged via the ConnectionBus_Queries log node if they finished after the amount of milliseconds specified here. By default, only the concerning SQL query will be logged. Set the log level of the ConnectionBus_Queries log node to TRACE to show more information about the form or the microflow which leads to this query. |   |
| OracleServiceName | Defines the SERVICE_NAME when you have a connection with an Oracle DBMS. |   |
| ReadCommittedSnapshot | Defines whether the READ_COMMITTED_SNAPSHOT option of Microsoft SQL Server must be enabled or not. See for more information: [Using Snapshot Isolation](http://msdn.microsoft.com/en-us/library/tcbchxcb(VS.80).aspx).
The value can be true or false. | true |

### 4.2 Connection Pooling

The settings below are used to define the database connection pooling behavior. The Runtime uses a pool of reusable database connections. You can for example define how many connections can be used. Connection pooling is implemented using the [Apache Commons Object-pooling API](http://commons.apache.org/pool/) .

| Name | Value | Default value |
| --- | --- | --- |
| ConnectionPoolingMaxWait | When the maximum number of "active" objects has been reached, the pool is said to be 'exhausted'. The "when exhausted" action used by the Connection Bus is WHEN_EXHAUSTED_BLOCK. Sets the maximum amount of time (in milliseconds) the borrowObject() method should block before throwing an exception when the pool is exhausted. When less than or equal to 0, the borrowObject() method may block indefinitely. (!) | 10000 |
| ConnectionPoolingMaxActive | Sets the cap on the total number of active instances from the pool. | 50 |
| ConnectionPoolingMaxIdle | Sets the cap on the number of "idle" instances in the pool. | 50 (since Mendix 3.3, 20 before Mendix 3.3) |
| ConnectionPoolingMinIdle | Sets the minimum number of objects allowed in the pool before the evictor thread (if active) spawns new objects. Note that no objects are created when numActive + numIdle >= maxActive.  This setting has no effect if the idle object evictor is disabled (i.e. if timeBetweenEvictionRunsMillis <= 0). | 0 |
| ConnectionPoolingTimeBetweenEvictionRunsMillis | Sets the number of milliseconds to sleep between runs of the idle object evictor thread. When non-positive, no idle object evictor thread will be run. | 300 000 (5 minutes) |
| ConnectionPoolingSoftMinEvictableIdleTimeMillis | Sets the minimum amount of time an object may sit idle in the pool before it is eligible for eviction by the idle object evictor (if any), with the extra condition that at least "minIdle" amount of object remain in the pool. When non-positive, no objects will be evicted from the pool due to idle time alone. | 300 000 (5 minutes) |
| ConnectionPoolingNumTestsPerEvictionRun | Sets the max number of objects to examine during each run of the idle object evictor thread (if any). When a negative value is supplied, ceil(getNumIdle())/abs(getNumTestsPerEvictionRun()) tests will be run. I.e., when the value is -n, roughly one nth of the idle objects will be tested per run. | -3 |

### 4.3 Migration Settings

The settings below are used to define the source database from which all data should be copied to the main database. You have to specify the settings below only at once. The main database should exist and should be empty. During the app start-up, the data will be copied if the settings below are specified. Remove the settings afterwards, because they are not necessary anymore.

Before the data copy process starts, the source database will also be brought in line with the model, like the main database. This is necessary to make it possible to copy all the data without problems.

| Name | Value | Default value |
| --- | --- | --- |
| SourceBuiltInDatabasePath | Defines the file location of the built-in source database. This setting is only necessary if a non-default location of the built-in database has to be used to copy the data from.  | [deployment folder]/data/database |
| SourceDatabaseHost | The host name and optionally the TCP port number of the source database. Use a colon as separator between host name and port number. Possible values are: db.url.org, db.url.org:1521, 10.0.0.5, 10.0.0.5:1433\. It's possible to use a plain IPv6 address by enclosing it in brackets, like: [::1]:5432 |   |
| SourceDatabaseJdbcUrl | Defines the JDBC URL to use for the source database connection (which overrides the other source database connection settings). This feature is not supported for PostgreSQL databases. |   |
| SourceDatabaseName | The name of the source database. |   |
| SourceDatabasePassword | The password for the connection to the source database. |   |
| SourceDatabaseType | The type of the source database.
Possible values: HSQLDB, MYSQL, ORACLE, POSTGRESQL, SQLSERVER |   |
| SourceDatabaseUseIntegratedSecurity | This setting defines whether integrated security should be used for SQL Server. If true, user name and password will not be used. | false |
| SourceDatabaseUseSsl | For PostgreSQL databases, defines whether the connection to the source database will be made using SSL. | false |
| SourceDatabaseUserName | The user name for the connection to the source database. |   |
| SourceOracleServiceName | Defines the SERVICE_NAME when you have a connection with an Oracle DBMS as source. |   |

## 5 Amazon S3 Storage Service Settings

The following settings influence the behavior of the Amazon S3 Storage Service module. Using these settings manually in the Mendix Cloud is strongly discouraged as the files stored in external systems will not be included in backups creation/restoration.

| Name | Description | Default value |
| --- | --- | --- |
| com.mendix.storage.s3.AccessKeyId | Acts as the username to authenticate with the Amazon S3 service. |   |
| com.mendix.storage.s3.SecretAccessKey | Acts as the password to authenticate with the Amazon S3 service. |   |
| com.mendix.storage.s3.BucketName | Name of the bucket where the files are stored on S3. |   |
| com.mendix.storage.s3.ResourceNameSuffix | Suffix for the keys under which objects are stored. This can be used when buckets are divided in different segments for different users with different credentials (e.g. store objects as "[key].customer1" for customer1 and as "[key].customer2" for customer2) |   |
| com.mendix.storage.s3.PerformDeleteFromStorage | Defines whether a delete of a Mendix File Document should result in an actual delete in the storage service. A reason to not perform an actual delete in the storage service can be when it's also used as a backup service. | true |
| com.mendix.storage.s3.EndPoint | Overrides the default AWS endpoint. Use this setting when the storage service is on a non-AWS location. Both the endpoint (e.g. `s3.example.com`) or the full URL, including the protocol, are supported (e.g. `https://s3.example.com`). Note that when setting a custom endpoint path style access will be enabled. [Click here for more information.](http://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/S3ClientOptions.html#withPathStyleAccess(boolean)) |   |
| com.mendix.storage.s3.UseV2Auth | Let the authentication policy use 'Signature Version 2' instead of the default 'Signature Version 4'. Set this setting to 'true' when the endpoint does not support 'Signature Version 4'. | false |
| com.mendix.storage.s3.EncryptionKeys | List of keys which can be used to encrypt and decrypt data at rest in S3\. The right key to decrypt the data with is automatically selected depending on with which key it was encrypted. Each encryption key consists of a key id, the encryption algorithm and the actual key (Base64 encoded). Example: ![](attachments/Custom+Settings/code_snippet_2.png) |   |

## 6 Microsoft Azure SQL

{{% alert type="info" %}}

This is supported from Mendix version 6.9.

{{% /alert %}}

These settings can be changed to use a Microsoft Azure SQL database for your Mendix application.

First you need to create an Azure SQL database (for information on how to do this, see this [SQL Database Tutorial](https://azure.microsoft.com/en-us/documentation/articles/sql-database-get-started/)). Make sure your Azure firewall settings allow your Mendix application to reach the Azure SQL database (by default, the Azure firewall doesn't allow external connections).

| Name | Description | Default value |
| --- | --- | --- |
| DatabaseType | SQLSERVER |   |
| DatabaseHost | "your-database-host.database.windows.net:1433" |   |
| DatabaseName | your-databasename |   |
| DatabaseUserName | your-username |   |
| DatabasePassword | your-password |   |

## 7 Microsoft Azure Blob Storage Settings

{{% alert type="info" %}}

This is supported from Mendix version 6.6

{{% /alert %}}

These settings can be used to store files using the Microsoft Azure blob storage service. Server side encryption can be configured through the Azure Portal (see [https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/)).

| Name | Description | Default value |
| --- | --- | --- |
| com.mendix.core.StorageService | Has to be set to 'com.mendix.storage.azure' to select Azure as the storage service |   |
| com.mendix.storage.azure.AccountName | Account name to authenticate with the azure blob storage service |   |
| com.mendix.storage.azure.AccountKey | Account key to authenticate with the azure blob storage service |   |
| com.mendix.storage.azure.Container | Name of the container containing the blob. The container is created in case it does not exist yet. |   |
| com.mendix.storage.azure.ParallelismFactor | Maximum number of parallel multi-part file uploads / downloads. We advise not to change this setting unless you experience slow file transfers for large files. Choosing larger values will lead to higher memory usage. | 5 |

## 8 IBM Bluemix Object Storage Settings

{{% alert type="info" %}}

This is supported from Mendix version 6.7.

{{% /alert %}}

These settings can be used to store files using the IBM Bluemix object storage service.

Mendix supports unscoped authentication of OpenStack Identity (Keystone) v3\. The credentials related settings must be filled with the corresponding values which can be found in the Service Credentials section of your object storage service.

Note that unlike other storage services, IBM Bluemix does not provide server-side encryption.

| Name | Description | Default value |
| --- | --- | --- |
| com.mendix.core.StorageService | Has to be set to 'com.mendix.storage.swift' to select IBM Bluemix as the storage service |   |
| com.mendix.storage.swift.Container | Container name of the object storage service |   |
| com.mendix.storage.swift.Container.AutoCreate | If enabled (value `true`) the container will be automatically created if it does not exist. | false |
| com.mendix.storage.swift.credentials.DomainId | Unique identifier of the domain |   |
| com.mendix.storage.swift.credentials.Authurl | Authentication url |   |
| com.mendix.storage.swift.credentials.Username | Username |   |
| com.mendix.storage.swift.credentials.Password | Password |   |
| com.mendix.storage.swift.credentials.Region | Region |   |

## 9 Web Client Settings

The following settings influence the behavior of the Mendix web client.

| Name | Description | Default value |
| --- | --- | --- |
| EnableKeepAlive | Defines whether the web client sends a keep alive request every SessionTimeout/2 milliseconds, to prevent a session timeout. Each click in the browser also acts as KeepAlive. Disabling this property will result in a user being logged out automatically after 10 minutes of inactivity, even if the browser remains open. | true |
| PhoneUserAgentRegEx | Defines the regular expression that is used to determine whether a user is visiting a Mendix application from a phone. The regular expression is matched against the User-Agent header sent by the client's web browser. | Android. *Mobile (iPhone, iPod, BlackBerry) |
| TabletUserAgentRegEx | Defines the regular expression that is used to determine whether a user is visiting a Mendix application from a tablet. The regular expression is matched against the User-Agent header sent by the client's web browser. | Android, iPad |
| com.mendix.webui.HybridAppLoginTimeOut | Determines how many minutes your token will remain valid before re-authenticating using your full credentials. This setting defaults to -1, which is equal to no timeout. | -1 |

## 10 Parallelism Settings

{{% alert type="warning" %}}

This setting is only relevant for Mendix 5.19 and higher. Adjusting parallelism setting parameters may drastically impact your system behaviour and performance. Only advanced users should modify these parameters.

{{% /alert %}}

Internally Mendix uses an actor system to dispatch and process requests. This actor system uses a thread pool to process these requests in parallel.
The amount of parallelism / number of threads provided by this thread pool is configurable.

Configuring the parallelism can be done by specifying the following JVM parameter:

```java
-Dmendix.action.parallelism=300
```

This parameter specifies the number of threads the thread pool can assign to execute requests concurrently. The default value is 300.

The default value should be more than enough for most use cases. If your application experiences extremely high load and it runs out of threads you can try to increase this number.

{{% alert type="success" %}}

If you want to inspect the configuration being used, you can set the system or config property 'akka.log-config-on-start' to 'on'. This will then print the complete configuration at INFO level when the actor system is started.

{{% /alert %}}
