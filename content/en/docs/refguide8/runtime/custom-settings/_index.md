---
title: "Runtime Customization"
url: /refguide8/custom-settings/
description: "Describes custom settings for server, log file, database, Amazon S3 storage service, IBM Cloud Object Storage, Microsoft Azure, IBM Bluemix object storage, web client, and proxy server in Mendix."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #amazon-s3-storage-service-settings below is mapped, so it should not be removed or changed.
---

## Introduction

You can use custom server settings to configure Mendix Runtime beyond the standard possibilities offered by Studio Pro.

{{% alert color="warning" %}}
Only use this functionality if you know exactly what you are doing. Incorrect values can prevent Mendix Runtime from starting.
{{% /alert %}}

Each custom setting consists of a name and a value. For example, to enable persistent sessions you add a custom setting with name `PersistentSessions` and value `true`. For a more detailed list of settings and example values, consult [full-documented-m2ee.yaml](https://github.com/mendix/m2ee-tools/blob/master/examples/full-documented-m2ee.yaml).

If you are running your app on the Mendix Cloud, you can access these settings in **Apps** via **Environments** > **Environment Details** > **Runtime** > **Custom Runtime Settings**. For more information see the [Runtime Tab](/developerportal/deploy/environments-details/#runtime-tab) section of *Environment Details*.

If you are running on SAP Cloud, you can add custom settings as User-Provided Variables prefixed with `MXRUNTIME_`. If the setting contains a dot `.` you can use an underscore `_` in the variable. [Reference](https://github.com/mendix/cf-mendix-buildpack#custom-runtime-settings)

## General Settings{#general}

The following custom settings can be configured:

| Name | Description | Default Value |
| --- | --- | --- |
| **TempPath** | The location of the temporary files. | [deployment folder]\data\tmp |
| **UploadedFilesPath** | The location of the uploaded files. A valid path can be: `\\FileServer\CustomerPortalFiles`. | [deployment folder]\data\files |
| **ApplicationRootUrl** | Can be used within Java actions to get the public location of the application. Useful when the HOST header is not available, for example when including a URL to the application when sending emails from a scheduled event. | In Mendix Cloud, https://\[domain\].mendixcloud.com |
| **ScheduledEventExecution** | Specify which scheduled events should be executed. Choices are `ALL`, `NONE`, or `SPECIFIED`. In the case of `SPECIFIED`, enumerate the scheduled events using the `MyScheduledEvents` configuration option described below. | NONE |
| **MyScheduledEvents** | A comma-separated string with the names of the events. Please don't forget the name of the module (a name can be, for example, `CRM.UpdateCustomerStatistics`). |   |
| **PersistentSessions** | Defines whether sessions will be persisted in the database or not. When sessions are persisted, statistics will be made about logged-in users. When the Runtime server restarts, sessions still exist and users don't have to sign in again. In a clustered environment you must have persistent sessions. The only exception is for on-premises installations which have implemented sticky sessions. The value can be true or false. | true |
| **TrackWebServiceUserLastLogin** | Defines whether to update the web service user's `LastLogin` field on each login. When this happens a database update query has to be sent and this can have performance consequences on heavy load systems. When this setting is set to false, no database interaction is necessary. | true |
| **JavaKeyStorePassword** | Password for the default Java keystore. | changeit |
| <a id="ca-certificates"></a>**CACertificates** | A comma-separated list of paths to CA certificates. |   |
| **ClientCertificates** | Comma-separated list of paths to Client Certificates. Example: `D:\App\Mx1.pfx, D:\App\Mx2.pfx, D:\App\Mx3.pfx, D:\App\Mx4.pfx` |  |
| **ClientCertificatePasswords** | Comma-separated list of passwords for Client Certificates (should match the **ClientCertificates** order). Example: `pwd1, pwd2, pwd3, pwd4` |   |
| **ClientCertificateUsages** | Only use this when you have multiple client certificates and you want to configure specific certificates for specific servers.<br/> This setting defines which service must use which client certificate. See **NoClientCertificateUsages** if you want to make sure that no client certificate is used for a certain host or web service. The value of **ClientCertificateUsages** must be a comma-separated list of key/value items. A key/value item must be specified as `"identifier": "path to certificate"`.<br/>For web services, use the imported web service name as the identifier.<br/>For REST services, use the host name of the remote server as the identifier.<br/>Please note that any backslash in the path must be doubled. The whole value must be enclosed by braces (`{ }`). For example: {{< figure src="/attachments/refguide/runtime/custom-settings/code_snippet.png" class="no-border" >}} |   |
| **NoClientCertificateUsages** | Comma-separated list of host names or imported web service names that should never be contacted using a client certificate. |   |
| **com.mendix.core.SameSiteCookies** | The [SameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) property can be included in all cookies that are returned by the embedded HTTP server. The possible values are `"Strict"`, `"Lax"`, and `"None"`. At present, `"None"` is the default, but this will change to `"Strict"` in the next major Mendix release. Setting it to `"None"` is typically needed only when an application is embedded in an iframe of another application with a different domain. Newer browsers may require the connection to be secure (HTTPS) when set to `"None"`. If the connection is plain HTTP, then this setting must be changed to `"Strict"` (recommended) or `"Lax"`. This setting is available in Studio Pro [8.11.0](/releasenotes/studio-pro/8.11/#8110) and above. | |
| **SessionTimeout** | Defines after how much time session becomes invalid (in milliseconds). After that timeout a session becomes applicable for removal. The session will not be destroyed until the next time the cluster manager evaluates the active sessions. | 600000 |
| **HashAlgorithm** | Specifies the hash algorithm used to generate hash values for attributes of the HashString type, such as the password of a user. This setting overrides the setting in Studio Pro, see [Hash Algorithm](/refguide8/project-settings/#hash-algorithm). Possible values are `BCRYPT`, `SSHA256`, `SHA256` (not recommended) and `MD5` (not recommended). To override the default BCrypt cost, you can specify `BCRYPT:cost`, where 'cost' is a number between 10 and 30. An example value is `BCRYPT:12`. | BCRYPT |
| **http.client.MaxConnectionsPerRoute** | The [maximum number of connections for a route](https://hc.apache.org/httpcomponents-client-4.5.x/current/httpclient/apidocs/org/apache/http/impl/client/HttpClientBuilder.html#setMaxConnPerRoute(int)) for call REST service and call web service activities.<br/>{{% alert color="warning" %}}If your app uses these calls, it is strongly recommended that this value is increased. The default could prevent multiple end-users accessing the API simultaneously. A good value is around the number of concurrent users you expect, with a maximum of 250. The value of `http.client.MaxConnectionsTotal` may also need to increase.{{% /alert %}} | 2 |
| **http.client.MaxConnectionsTotal** | The [maximum number of connections allowed across all routes](https://hc.apache.org/httpcomponents-client-4.5.x/current/httpclient/apidocs/org/apache/http/impl/client/HttpClientBuilder.html#setMaxConnTotal(int)) for the call REST service and call web service activities.<br/>{{% alert color="warning" %}}If you change the value of `http.client.MaxConnectionsPerRoute`, you will need to increase this value in line with that, up to a maximum of 250.{{% /alert %}} | 20 |
| **http.client.CleanupAfterSeconds** | For the call REST service and call web service activities, the first request to a new host will create an HTTP client that will handle subsequent requests. When there are no new requests to the host for the specified time, the HTTP client will be cleaned up. A value of `0` means no cleanup. | `12 * 60 * 60` (12 hours) (for Studio Pro 8.18.0 and below) or `355` (for Studio Pro 8.18.1 and above) |
| **ClusterManagerActionInterval** | The interval (in milliseconds) used for performing all cluster manager actions. These actions include, unblocking users, and removing invalid sessions. If nothing is specified the interval is half the `SessionTimeout`. | 300000 |
| **com.mendix.core.StorageService** | Defines which storage service module will be used. The storage service module takes care of storing the actual files associated with `System.FileDocument` objects, such as uploaded files. Possible values are `com.mendix.storage.localfilesystem`, `com.mendix.storage.s3`, and `com.mendix.storage.azure`. | com.mendix.storage.localfilesystem |
| **com.mendix.storage.PerformDeleteFromStorage** | Defines whether a delete of a Mendix file document should result in an actual delete in the storage service. A reason to not perform an actual delete in the storage service can be when it is also used as a backup service. | true |
| **com.mendix.core.SessionIdCookieName** | Defines the name of the cookie value which represents the session ID. Can be useful to change when running in a container which assumes a certain name for the session cookie. | XASSESSIONID |
| **EnableApacheCommonsLogging** | Some libraries used by the Mendix runtime use [Apache Commons](https://commons.apache.org/) for logging. By default these log messages are suppressed. Set this value to `true` to receive the log messages from these libraries in the Mendix logs. This setting is available in Mendix 8.18.6 and later. | false |
| **EnableFileDocumentCaching** | Defines whether file documents should be cached. Only enable this if you are sure that the file documents will not contain sensitive information. Images are always cached. This setting is available in Studio Pro 8.18.12 and above.| false |
| **RequestHandling.AllowLegacyCookies** | Allows violations of RFC 6265 which is enforced since Studio Pro 8.18.25. See [RFC6265_LEGACY CookieCompliance mode](https://www.eclipse.org/jetty/javadoc/jetty-10/org/eclipse/jetty/http/CookieCompliance.html#RFC6265_LEGACY) for more information. Be aware of the fact that enabling this custom setting exposes your app to CVE-2023-26049. This setting is available in Studio Pro 8.18.25 and above. | false |

## Log File Settings

The settings below influence the behavior of the log files. These settings can only be used on premises. In the cloud, these settings do not change any behavior.

| Name | Description | Default Value |
| --- | --- | --- |
| **LogFileName** | The name of the log file. The log files (actual log file plus back-up files) will be placed in the folder specified by the setting log path. | Application.log |
| **MaxLogFileSize** | The maximum size per log file. When the log file reaches this maximum size, the log file will be backed up and a new empty log file will be used. | 2097152 (2 MB) |
| **MaxLogFileCount** | The maximum count of log files preserved (actual file plus back-up files). When the maximum count is reached, the oldest backup file will be removed. | 10 |

## Database Settings

### Common Settings

| Name | Description | Default Value |
| --- | --- | --- |
| **ClientQueryTimeout** | Defines the timeout in seconds for most of the database queries which are executed to load data into client widgets, like data grids. After the duration as specified here, a query will be canceled and an exception will be thrown. |   |
| **DatabaseType** | Defines the database engine which is used as the Mendix database. Valid values are `DB2`, `HSQLDB`, `MYSQL`, `ORACLE,` `POSTGRESQL`, `SAPHANA`, and `SQLSERVER`. | |
| **DatabaseUserName** | Name required for authentication to the database. | |
| **DatabasePassword** | Password for the `DatabaseUserName` supplied above. | |
| **DatabaseHost** | The host name and optionally the TCP port number of the database. Use a colon (`:`) as separator between the host name and port number. Possible values are: `db.url.org`, `db.url.org:1521`, `10.0.0.5`, and`10.0.0.5:1433`\. It is possible to use a plain IPv6 address by enclosing it in brackets (for example, `[::1]:5432`).<br/>This will be overridden if you supply `DatabaseJdbcUrl`. | |
| **DatabaseName** | The name of the database or schema used by the Mendix app <br/>This will be overridden if you supply **DatabaseJdbcUrl**. | |
| **DatabaseJdbcUrl** | Defines the JDBC URL to use for the database connection (which overrides the other database connection settings). |   |
| **DatabaseUseSsl** | For PostgreSQL databases, defines whether the connection will be made using SSL without certificate validation. If you need certificate validation, use **DatabaseJdbcUrl** instead. | false |
| **DatabaseUseIntegratedSecurity** | This setting defines whether integrated security will be used to authenticate to SQL Server. If true, user name and password will not be used. | false |
| **LogMinDurationQuery** | Defines whether database queries are logged via the `ConnectionBus_Queries` log node if they finished after the number of milliseconds specified here. By default, only the relevant SQL query will be logged. Set the log level of the `ConnectionBus_Queries` log node to `TRACE` to show more information about the page or the microflow which leads to this query. |   |
| **OracleServiceName** | Defines the `SERVICE_NAME` when you have a connection with an Oracle DBMS. |   |
| **DataStorage.EnableDiagnostics** | This setting can be used to generate a uniqueness constraint violation report. | false |
| **UseNetworkTimeout** | This setting is applied to PostgreSQL and DB2. It affects the timeout mechanism used when reserving new ids for Mendix objects. If set to true, the socket level request timeout is used. In that case, the request timeout is handled within the operating system. If set to false, the timeout is handled by Mendix runtime. For other databases, timeouts are always handled by Mendix runtime. | true |
| **JdbcLoginTimeout** | This setting defines the database connection establishment time in milliseconds. | 5000 |

### Connection Pooling

The settings below are used to define the database connection pooling behavior. Mendix Runtime uses a pool of reusable database connections. You can, for example, define how many connections can be used. Connection pooling is implemented using the [Apache Commons Object-pooling API](https://commons.apache.org/pool/) .

These settings are configured *per runtime instance*. If you have [scaled your application](/developerportal/deploy/scale-environment/), the number of connections on the database side will be multiplied by the number of runtime instances. For example, if you set `ConnectionPoolingMaxIdle` to `50` and scale your app to 2 runtime instances, each runtime instance will create at most 50 connections, but on the database side this will lead to a maximum of 100 connections.

| Name | Value | Default Value |
| --- | --- | --- |
| **ConnectionPoolingMaxWait** | When the maximum number of "active" objects has been reached, the pool is said to be "exhausted." The "when exhausted" action used by the connection bus is `WHEN_EXHAUSTED_BLOCK`. Sets the maximum amount of time (in milliseconds) the `borrowObject()` method should block before throwing an exception when the pool is exhausted. When less than or equal to `0`, the `borrowObject()` method may block indefinitely. (!) | 10000 |
| **ConnectionPoolingMaxActive** | Sets the cap on the total number of active instances from the pool. | 50 |
| **ConnectionPoolingMaxIdle** | Sets the cap on the number of "idle" instances in the pool. | 50 |
| **ConnectionPoolingMinIdle** | Sets the minimum number of objects allowed in the pool before the evictor thread (if active) spawns new objects. Note that no objects are created when `numActive` + `numIdle` >= `maxActive`.  This setting has no effect if the idle object evictor is disabled (as in, if `timeBetweenEvictionRunsMillis` <= 0). | 0 |
| **ConnectionPoolingTimeBetweenEvictionRunsMillis** | Sets the number of milliseconds to sleep between runs of the idle object evictor thread. When non-positive, no idle object evictor thread will be run. | 300 000 (5 minutes) |
| **ConnectionPoolingSoftMinEvictableIdleTimeMillis** | Sets the minimum amount of time an object may sit idle in the pool before it is eligible for eviction by the idle object evictor (if any), with the extra condition that at least `minIdle` objects remain in the pool. When non-positive, no objects will be evicted from the pool due to idle time alone. | 300 000 (5 minutes) |
| **ConnectionPoolingNumTestsPerEvictionRun** | Sets the maximum number of objects to examine during each run of the idle object evictor thread (if any). When a negative value is supplied, `ceil(getNumIdle())/abs(getNumTestsPerEvictionRun())` tests will be run. This means that when the value is -n, roughly one nth of the idle objects will be tested per run. | -3 |

### Migration Settings

The settings below are used to define the source database from which all data should be copied to the main database. You have to specify the settings below only once. The main database should exist and should be empty. During the app start-up, the data will be copied if the settings below are specified. Remove the settings afterwards, because they are not needed anymore.

Before the data copy process starts, the source database will also be brought in line with the model, like the main database. This is necessary to make it possible to copy all the data without problems.

| Name | Value | Default Value |
| --- | --- | --- |
| **SourceBuiltInDatabasePath** | Defines the file location of the built-in source database. This setting is only necessary if a non-default location of the built-in database has to be used to copy the data from.  | [deployment folder]/data/database |
| **SourceDatabaseHost** | The host name and optionally the TCP port number of the source database. Use a colon as separator between host name and port number. Possible values are: `db.url.org`, `db.url.org:1521`, `10.0.0.5`, or `10.0.0.5:1433`. It's possible to use a plain IPv6 address by enclosing it in brackets (for example, `[::1]:5432`). |   |
| **SourceDatabaseJdbcUrl** | Defines the JDBC URL to use for the source database connection (which overrides the other source database connection settings). This feature is not supported for PostgreSQL databases. |   |
| **SourceDatabaseName** | The name of the source database. |   |
| **SourceDatabasePassword** | The password for the connection to the source database. |   |
| **SourceDatabaseType** | The type of the source database. Possible values: `HSQLDB`, `MYSQL`, `ORACLE`, `POSTGRESQL`, or `SQLSERVER`. |   |
| **SourceDatabaseUseIntegratedSecurity** | This setting defines whether integrated security will be used to authenticate to SQL Server. If true, user name and password will not be used. | false |
| **SourceDatabaseUseSsl** | For PostgreSQL databases, defines whether the connection to the source database will be made using SSL. | false |
| **SourceDatabaseUserName** | The user name for the connection to the source database. |   |
| **SourceOracleServiceName** | Defines the `SERVICE_NAME` when you have a connection with an Oracle DBMS as source. |   |

## S3 Storage Service Settings {#amazon-s3-storage-service-settings}

The settings described below influence the behavior of the Amazon S3 Storage Service module. This module can be used for both Amazon S3 Storage and IBM Cloud Object Storage. Using these settings manually in Mendix Cloud is strongly discouraged, as files stored in external systems will not be included in backup creation and restoration.

| Name | Description | Default Value |
| --- | --- | --- |
| **com.mendix.storage.s3.AccessKeyId** | Acts as the username to authenticate with the S3 service. |   |
| **com.mendix.storage.s3.SecretAccessKey** | Acts as the password to authenticate with the S3 service. |   |
| **com.mendix.storage.s3.BucketName** | Name of the bucket where the files are stored on S3. |   |
| **com.mendix.storage.s3.ResourceNamePrefix** | Prefix for the keys under which objects are stored. Separators are not added automatically to keys. For keys like `prefix/key1`, `com.mendix.storage.s3.ResourceNamePrefix` should have value `prefix/`. This setting is available in Mendix version 8.18.29 and above. |   |
| **com.mendix.storage.s3.ResourceNameSuffix** | Suffix for the keys under which objects are stored. This can be used when S3 buckets are divided into different segments for different users with different credentials (for example, store objects as `[key].customer1` for customer1 and as `[key].customer2` for customer2). Separators are not added automatically to keys. For keys like `key1.customer1`, `com.mendix.storage.s3.ResourceNameSuffix` should have value `.customer1`. |   |
| <a id="s3-region"></a>**com.mendix.storage.s3.Region** | Sets the region in which the S3 bucket is located. This will be used to determine the service endpoint, unless overridden in **com.mendix.storage.s3.EndPoint**. This setting will also be used as the signing region for requests. ||
| **com.mendix.storage.s3.EndPoint** | Overrides the default endpoint. This setting is required when the storage is on a non-AWS location (for example, IBM Cloud Object Storage). Both the endpoint (for example, `s3.example.com`) or the full URL (including the protocol) are supported (for example, `https://s3.example.com`). Note that when setting a custom endpoint, path style access will be enabled. For more information, see [Class S3ClientOptions](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/S3ClientOptions.html#withPathStyleAccess(boolean)). |   |
| **com.mendix.storage.s3.UseV2Auth** | Lets the authentication policy use `Signature Version 2` instead of the default `Signature Version 4`. Set this setting to `true` when the endpoint does not support `Signature Version 4`. | false |
| **com.mendix.storage.s3.EncryptionKeys** | List of keys which can be used to encrypt and decrypt data at rest in S3. The right key to decrypt the data with is automatically selected depending on with which key it was encrypted. Each encryption key consists of a key id, the encryption algorithm and the actual key (Base64 encoded). Example: {{< figure src="/attachments/refguide8/runtime/custom-settings/code_snippet_2.png" class="no-border" >}} |   |
| **com.mendix.storage.s3.ForceGlobalBucketAccessEnabled** | The value `true` allows the server to route requests to a different region than specified in these settings (`false` disallows it). This setting is available in Studio Pro [8.12.0](/releasenotes/studio-pro/8.12/#8120) and above. | true |
| **com.mendix.storage.s3.MaxConnections** | Overrides the default maximum connections limit in the S3 service. The default value is enough for most applications, so we do not recommend explicitly setting this to a custom value unless a larger maximum connections limit is absolutely necessary. | [DEFAULT_MAX_CONNECTIONS](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html#DEFAULT_MAX_CONNECTIONS) field of the ClientConfiguration interface in the AWS SDK for Java. |
| **com.mendix.storage.s3.ClientExecutionTimeout** | Sets the amount of time (in milliseconds) to allow a call to the storage service to complete. A value of `0` means no timeout. For more information, see the [AWS Java SDK](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html#setClientExecutionTimeout-int-). | 0 (no timeout) |
| **com.mendix.storage.s3.ConnectionTimeout** | Sets the amount of time to wait (in milliseconds) when initially establishing a connection before giving up and timing out. A value of `0` means infinity and is not recommended. For more information, see the [AWS Java SDK](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html#setConnectionTimeout-int-). | 10.000 (10 seconds) |
| **com.mendix.storage.s3.SocketTimeout** | Sets the amount of time to wait (in milliseconds) for data to be transferred over an established, open connection before the connection times out and is closed.  A value of `0` means infinity and is not recommended. For more information, see the [AWS Java SDK](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html#setSocketTimeout-int-). | 50.000 (50 seconds) |
| **com.mendix.storage.s3.RequestTimeout** | Sets the amount of time to wait (in milliseconds) for the request to complete before giving up and timing out. A value of `0` means no timeout. For more information, see [the AWS Java SDK](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html#setRequestTimeout-int-). | 0 (no timeout) |
| **com.mendix.storage.s3.UseCACertificates** | Set this value to `true` to use the configured [CACertificates](#ca-certificates) for the connection to the S3 service. This setting is available in Studio Pro [8.12.0](/releasenotes/studio-pro/8.12/#8120) and above. | false |

## Microsoft Azure SQL

These settings can be changed to use a Microsoft Azure SQL database for your Mendix application.

First, you need to create an Azure SQL database (for information on how to do this, see this [SQL Database Tutorial](https://azure.microsoft.com/en-us/documentation/articles/sql-database-get-started/)). Make sure your Azure firewall settings allow your Mendix application to reach the Azure SQL database (by default, the Azure firewall does not allow external connections).

| Name | Description | Default Value |
| --- | --- | --- |
| **DatabaseType** | `SQLSERVER` |   |
| **DatabaseHost** | `"your-database-host.database.windows.net:1433"` |   |
| **DatabaseName** | `your-databasename` |   |
| **DatabaseUserName** | `your-username` |   |
| **DatabasePassword** | `your-password` |   |

## Microsoft Azure Blob Storage Settings

These settings can be used to store files using the Microsoft Azure blob storage service. Server-side encryption can be configured through the Azure Portal (for more information, see [Azure Storage encryption for data at rest](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/)).

| Name | Description | Default Value |
| --- | --- | --- |
| **com.mendix.core.StorageService** | Has to be set to `com.mendix.storage.azure` to select Azure as the storage service. |   |
| **com.mendix.storage.azure.AccountName** | Account name to authenticate with the Azure blob storage service. |   |
| **com.mendix.storage.azure.AccountKey** | Account key to authenticate with the Azure blob storage service. |   |
| **com.mendix.storage.azure.SharedAccessSignature** | Provides delegated access to resources in your storage account. For more information, see [Shared Access Signature on docs.microsoft.com](https://docs.microsoft.com/en-us/azure/storage/common/storage-dotnet-shared-access-signature-part-1). |   |
| **com.mendix.storage.azure.BlobEndpoint** | Set the blob endpoint. This setting is required when authentication by `SharedAccessSignature` is used. |   |
| **com.mendix.storage.azure.Container** | Name of the container containing the blob. |   |
| **com.mendix.storage.azure.CreateContainerIfNotExists** | Indicates whether to check if the container exists, and creates it if it does not exist. This setting was introduced in Studio Pro [8.7.0](/releasenotes/studio-pro/8.7/#870). | `true` |
| **com.mendix.storage.azure.ParallelismFactor** | Maximum number of parallel multi-part file uploads/downloads. We advise not changing this setting unless you experience slow file transfers for large files. Choosing larger values will lead to higher memory usage. | 5 |
| **com.mendix.storage.azure.UseHttps** | For enabling or disabling secure connections using HTTPS. Can be `true` or `false`. | `true` |
| **com.mendix.storage.azure.TimeoutIntervalInMs** | Sets the amount of time (in milliseconds) to allow a call to the storage service to complete. For more information, see the [Azure libraries](https://azure.github.io/azure-sdk-for-java/storage.html). | No timeout |
| **com.mendix.storage.azure.MaximumExecutionTimeInMs** | Sets the maximum execution time (in milliseconds) to use when making this request. For more information, see the [Azure libraries](https://azure.github.io/azure-sdk-for-java/storage.html). | No maximum time |

{{% alert color="warning" %}}
Azure blob storage's default connection protocol is HTTPS in order to encourage secure connections by default. This is a highly recommended best practice (for more information, see [Configure Azure Storage Connection Strings](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string)). This should now be transparent, unless you use custom domain names (for details, see [Require Secure Transfer](https://docs.microsoft.com/en-us/azure/storage/common/storage-require-secure-transfer)). In that case, you should use the `UseHttps` setting above to revert to the previous default behavior and disable HTTPS.
{{% /alert %}}

## Web Client Settings{#web-client-settings}

The settings below influence the behavior of the Mendix web client.

| Name | Description | Default Value |
| --- | --- | --- |
| **EnableKeepAlive** | Defines whether the web client sends a keep alive request every SessionTimeout/2 milliseconds, to prevent a session timeout. Each click in the browser also acts as KeepAlive. Disabling this property will result in a user being logged out automatically after 10 minutes of inactivity, even if the browser remains open. | true |
| **PhoneUserAgentRegEx** | Defines the regular expression that is used to determine whether a user is visiting a Mendix application from a phone. The regular expression is matched against the user-agent header sent by the client's web browser. | Android, Mobile (iPhone, iPod, BlackBerry) |
| **TabletUserAgentRegEx** | Defines the regular expression that is used to determine whether a user is visiting a Mendix application from a tablet. The regular expression is matched against the User-Agent header sent by the client's web browser. | Android, iPad |
| **com.mendix.webui.HybridAppLoginTimeOut** | Determines how many minutes your token will remain valid before re-authenticating using your full credentials. This setting defaults to `-1`, which is equal to no timeout. | -1 |
| **com.mendix.webui.FeedbackSizeWarningThreshold** | A warning is logged when the feedback size exceeds the threshold. Feedback is sent from server to client to instruct (for example, to refresh objects or to open a page). They are serialized as "instructions" in the server response. If there are too many instructions, this can have performance implications, as they all have to be serialized to the client. For this reason, a warning is logged when the threshold is exceeded. | 5000 |
| **com.mendix.webui.StateSizeWarningThreshold** | A warning is logged when the state size exceeds the threshold. The state consists of changes in objects and of objects not committed to the database (yet). If there is too much state, this will have performance implications, as the whole state has to be serialized to the client. For this reason, a warning is logged when the threshold is exceeded. | 100 |
| **com.mendix.webui.CommittedObjectsThreshold** | The threshold controls how much data is sent back to the client after executing a microflow. By default, we send back full objects when they are changed or committed. When this threshold is reached, only object GUIDs are sent back instead so that the client knows about the changes while the amount of data sent over the network is reduced. The client will then retrieve the objects later on, if needed. | 100 |

## Proxy Settings

The settings below allow you to use a proxy.

| Name | Description | Default Value |
| --- | --- | --- |
| **http.proxyHost** | Defines the hostname of the proxy server. |  |
| **http.proxyPort** | Defines the port number of the proxy server. |  |
