---
title: "Runtime Customization"
url: /refguide/custom-settings/
description: "Describes custom settings for server, log file, database, Amazon S3 storage service, IBM Cloud Object Storage, Microsoft Azure, IBM Bluemix object storage, web client, and proxy server in Mendix."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #amazon-s3-storage-service-settings below is mapped, so it should not be removed or changed.
---

## Introduction

You can use custom server settings to configure Mendix Runtime beyond the standard possibilities offered by Studio Pro.

{{% alert color="warning" %}}
Only use this functionality if you know exactly what you are doing. Incorrect values can prevent Mendix Runtime from starting.
{{% /alert %}}

Each custom setting consists of a name and a value. For example, to set the hash algorithm to BCRYPT you add a custom setting with name `HashAlgorithm` and value `BCRYPT`. For a more detailed list of settings and example values, consult [full-documented-m2ee.yaml](https://github.com/mendix/m2ee-tools/blob/master/examples/full-documented-m2ee.yaml).

If you are running your app on Mendix Cloud or SAP Business Technology Platform, you can access these settings by opening your app in [Apps](https://sprintr.home.mendix.com/) and choosing **Environments** > **Environment Details** > **Runtime** > **Custom Runtime Settings**. For more information see:

* the [Runtime Tab](/developerportal/deploy/environments-details/#runtime-tab) section of *Environment Details* for information about Mendix Cloud
* the [Runtime tab](/developerportal/deploy/sap-cloud-platform/#runtime-tab) section of *SAP Business Technology Platform* for information about the SAP BTP

When you are running your app locally, you can set these values in a [Configuration](/refguide/configuration/#custom).

There is more information on how this is done in the Cloud Foundry buildpack in [Custom Runtime Settings](https://github.com/mendix/cf-mendix-buildpack#custom-runtime-settings) in the GitHub repo.

### Duration/Interval Settings

Durations and intervals can be specified in the following formats:

* **ISO 8601 Periods**, such as `P7D`, `PT1H30M`, or `PT1S` (See https://en.wikipedia.org/wiki/ISO_8601#Durations for more information)
* **HOCON durations**, such as `7 days`, `90m`, or `1 second` (See https://github.com/lightbend/config/blob/main/HOCON.md#duration-format for more information)

## General Settings {#general}

The following custom settings can be configured:

| Name | Description | Default Value |
| --- | --- | --- |
| <a id="ApplicationRootUrl" href="#ApplicationRootUrl">ApplicationRootUrl</a> | see [ApplicationRootUrl](#applicationrooturl-section), below | In Mendix Cloud, https://\[domain\].<wbr>mendixcloud.<wbr>com |
| <a id="CACertificates" href="#CACertificates">CACertificates</a> | A comma-separated list of paths to CA certificates. Example: `D:\App\CA1.pem, D:\App\CA2.pem, D:\App\CA3.pem, D:\App\CA4.pem` |   |
| <a id="ClientCertificatePasswords" href="#ClientCertificatePasswords">ClientCertificatePasswords</a> | Comma-separated list of passwords for Client Certificates (should match the **ClientCertificates** order). Example: `pwd1, pwd2, pwd3, pwd4` |   |
| <a id="ClientCertificates" href="#ClientCertificates">ClientCertificates</a> | Comma-separated list of paths to Client Certificates. Example: `D:\App\Mx1.pfx, D:\App\Mx2.pfx, D:\App\Mx3.pfx, D:\App\Mx4.pfx` |   |
| <a id="ClientCertificateUsages" href="#ClientCertificateUsages">ClientCertificateUsages</a> | Only use this when you have multiple client certificates and you want to configure specific certificates for specific servers.<br/> This setting defines which service must use which client certificate. See **NoClientCertificateUsages** if you want to make sure that no client certificate is used for a certain host or web service. The value of **ClientCertificateUsages** must be a comma-separated list of key/value items. A key/value item must be specified as `"identifier": "path to certificate"`.<br/>For web services, use the imported web service name as the identifier.<br/>For REST services, use the host name of the remote server as the identifier.<br/>Please note that any backslash in the path must be doubled. The whole value must be enclosed by braces (`{ }`). For example: {{< figure src="/attachments/refguide/runtime/custom-settings/code_snippet.png" class="no-border" >}} |   |
| <a id="NoClientCertificateUsages" href="#NoClientCertificateUsages">NoClientCertificateUsages</a> | Comma-separated list of host names or imported web service names that should never be contacted using a client certificate. |   |
| <a id="ClusterManagerActionInterval" href="#ClusterManagerActionInterval">ClusterManagerActionInterval</a> | The interval (in milliseconds) used for performing all cluster manager actions. These actions include, unblocking users, and removing invalid sessions. If nothing is specified the interval is half the `SessionTimeout`. | 300000 (5 minutes) |
| <a id="commendixcoreisClusterSlave" href="#commendixcoreisClusterSlave">com.<wbr>mendix.<wbr>core.<wbr>isClusterSlave</a> | Set to `true` in a high-availability scenario when this is *not* the [Cluster Leader](/refguide/clustered-mendix-runtime/#cluster-leader-follower). The buildpack will usually enforce this setting, but it may need to be set for some on-premises deployments. | `false` |
| <a id="commendixcoreSameSiteCookies" href="#commendixcoreSameSiteCookies">com.<wbr>mendix.<wbr>core.<wbr>SameSiteCookies</a> | The [SameSite](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) property can be included in all cookies that are returned by the embedded HTTP server. The possible values are `Strict`, `Lax`, and `None`. The default is `Strict`. Setting it to `None` is typically needed only when an application is embedded in an iframe of another application with a different domain. Newer browsers may require the connection to be secure (HTTPS) when set to `None`. If the connection is plain HTTP, then this setting must be changed to `Strict` (recommended) or `Lax`. |   |
| <a id="commendixcoreScheduledEventsCleanupAge" href="#commendixcoreScheduledEventsCleanupAge">com.<wbr>mendix.<wbr>core.<wbr>ScheduledEventsCleanupAge</a> | This setting specifies (in milliseconds) how old objects in the System.<wbr>ScheduledEventInformation table have to be before they are removed from the database. See [Scheduled Events - Legacy](/refguide9/scheduled-events-legacy/#cleanup) for more details. | 365 days for projects migrated from Mendix 9 and 7 days for new projects or projects with an empty database. |
| <a id="commendixcoreScheduledEventsCleanupBatchSize" href="#commendixcoreScheduledEventsCleanupBatchSize">com.<wbr>mendix.<wbr>core.<wbr>ScheduledEventsCleanupBatchSize</a> | This setting specifies how many System.<wbr>ScheduledEventInformation objects will be removed from the database each time the ScheduledEventInformation cleanup task runs. See [Scheduled Events - Legacy](/refguide9/scheduled-events-legacy/#cleanup) for more details.  <br />*This setting was introduced in Mendix version 10.9.0* | 10000 |
| <a id="commendixcoreSessionIdCookieName" href="#commendixcoreSessionIdCookieName">com.<wbr>mendix.<wbr>core.<wbr>SessionIdCookieName</a> | Defines the name of the cookie value which represents the session ID. Can be useful to change when running in a container which assumes a certain name for the session cookie. | XASSESSIONID |
| <a id="commendixcoreStorageService" href="#commendixcoreStorageService">com.<wbr>mendix.<wbr>core.<wbr>StorageService</a> | Defines which storage service module will be used. The storage service module takes care of storing the actual files associated with `System.FileDocument` objects, such as uploaded files. Possible values are `com.mendix.storage. localfilesystem`, `com.mendix.storage.s3`, and `com.mendix.storage.azure`. | com.<wbr>mendix.<wbr>storage.<wbr>localfilesystem |
| <a id="commendixcoreUseMimeDecoderForBase64" href="#commendixcoreUseMimeDecoderForBase64">com.<wbr>mendix.<wbr>core.<wbr>UseMimeDecoderForBase64</a> | The setting defines whether to use the Basic decoder ([RFC 4648](https://datatracker.ietf.org/doc/html/rfc4648)) or MIME decoder ([RFC 2045](https://datatracker.ietf.org/doc/html/rfc2045)) when decoding base64 binary data. The Basic decoder is recommended due to its strictness in not accepting any character outside the Base64 specification, see [Security Considerations](https://datatracker.ietf.org/doc/html/rfc4648#section-12). This setting exists for reasons of backward compatibility. <br/>{{% alert color="warning" %}}Using the MIME decoder is deprecated and the option will be removed in future versions.{{% /alert %}} | false |
| <a id="commendixstoragePerformDeleteFromStorage" href="#commendixstoragePerformDeleteFromStorage">com.<wbr>mendix.<wbr>storage.<wbr>PerformDeleteFromStorage</a> | Defines whether a delete of a Mendix file document should result in an actual delete in the storage service. A reason to not perform an actual delete in the storage service can be when it is also used as a backup service. The options are: <ul><li>`AllFiles` – Deletes files from file storage</li><li>`TemporaryFiles` – Deletes files which were created during a transaction but not referenced by any file document from file storage </li><li>`NoFiles` – No files are deleted from file storage.</ul>Additionally, we have legacy options `true` (same as `AllFiles`) and `false` (same as `TemporaryFiles`) which will be deprecated in the future. | true |
| <a id="commendixcoreProcessedTasksCleanupAge" href="#commendixcoreProcessedTasksCleanupAge">com.<wbr>mendix.<wbr>core.<wbr>ProcessedTasksCleanupAge</a> | This setting specifies (in milliseconds) how old objects in the System.<wbr>ProcessedQueueTask have to be before they are removed from the database. See [Task Queue](/refguide/task-queue/#cleanup) for more details. | 365 days for projects migrated from Mendix 9 and 7 days for new projects or projects with an empty database. |
| <a id="commendixcoreProcessedTasksCleanupBatchSize" href="#commendixcoreProcessedTasksCleanupBatchSize">com.<wbr>mendix.<wbr>core.<wbr>ProcessedTasksCleanupBatchSize</a> | This setting specifies how many System.<wbr>ProcessedQueueTask objects will be removed from the database each time the ProcessedTask cleanup action runs. See [Task Queue](/refguide/task-queue/#cleanup) for more details. <br />*This setting was introduced in Mendix version 10.9.0* | 10000 |
| <a id="EnableApacheCommonsLogging" href="#EnableApacheCommonsLogging">EnableApacheCommonsLogging</a> | Some libraries used by the Mendix runtime use [Apache Commons](https://commons.apache.org/) for logging. By default these log messages are suppressed. Set this value to `true` to receive the log messages from these libraries in the Mendix logs. | false |
| <a id="HashAlgorithm" href="#HashAlgorithm">HashAlgorithm</a> | Specifies the hash algorithm used to generate hash values for attributes of the HashString type, such as the password of a user. This setting overrides the setting in Studio Pro, see [Hash Algorithm](/refguide/app-settings/#hash-algorithm). Possible values are `BCRYPT`, `SSHA256`, `SHA256` (not recommended) and `MD5` (not recommended). To override the default BCrypt cost, you can specify `BCRYPT:cost`, where 'cost' is a number between 10 and 30. An example value is `BCRYPT:12`. | BCRYPT |
| <a id="httpclientCleanupAfterSeconds" href="#httpclientCleanupAfterSeconds">http.<wbr>client.<wbr>CleanupAfterSeconds</a> | For the call REST service and call web service activities, the first request to a new host will create an HTTP client that will handle subsequent requests. When there are no new requests to the host for the specified time, the HTTP client will be cleaned up. A value of `0` means no cleanup.<br/>{{% alert color="warning" %}}If the infrastructure provider closes this connection before this cleanup time, you can receive a `java.net. SocketException: Connection reset` error. You can reduce this value to prevent this, or handle the error in your [REST call](/refguide/call-rest-action/#troubleshooting).{{% /alert %}} | 355 (355 seconds) |
| <a id="httpclientMaxConnectionsPerRoute" href="#httpclientMaxConnectionsPerRoute">http.<wbr>client.<wbr>MaxConnectionsPerRoute</a> | The [maximum number of connections for a route](https://hc.apache.org/httpcomponents-client-4.5.x/current/httpclient/apidocs/org/apache/http/impl/client/HttpClientBuilder.html#setMaxConnPerRoute(int)) for call REST service and call web service activities.<br/>{{% alert color="warning" %}}If your app uses these calls, it is strongly recommended that this value is increased. The default could prevent multiple end-users accessing the API simultaneously. A good value is around the number of concurrent users you expect, with a maximum of 250. The value of `http.client. MaxConnectionsTotal` may also need to increase.{{% /alert %}} | 2 |
| <a id="httpclientMaxConnectionsTotal" href="#httpclientMaxConnectionsTotal">http.<wbr>client.<wbr>MaxConnectionsTotal</a> | The [maximum number of connections allowed across all routes](https://hc.apache.org/httpcomponents-client-4.5.x/current/httpclient/apidocs/org/apache/http/impl/client/HttpClientBuilder.html#setMaxConnTotal(int)) for the call REST service and call web service activities.<br/>{{% alert color="warning" %}}If you change the value of `http.client. MaxConnectionsPerRoute`, you will need to increase this value in line with that, up to a maximum of 250.{{% /alert %}} | 20 |
| <a id="JavaKeyStorePassword" href="#JavaKeyStorePassword">JavaKeyStorePassword</a> | Password for the default Java keystore. | changeit |
| <a id="LongLivedSessionTimeout" href="#LongLivedSessionTimeout">LongLivedSessionTimeout</a> | This setting is the same as `SessionTimeout`, but specific to offline-first progressive web apps. | 604800000 (7 days) |
| <a id="MyScheduledEvents" href="#MyScheduledEvents">MyScheduledEvents</a> | A comma-separated string with the names of the events. Please don't forget the name of the module (a name can be, for example, `CRM.UpdateCustomerStatistics`). |   |
| <a id="ScheduledEventExecution" href="#ScheduledEventExecution">ScheduledEventExecution</a> | Specify which scheduled events should be executed. Choices are `ALL`, `NONE`, or `SPECIFIED`. In the case of `SPECIFIED`, enumerate the scheduled events using the `MyScheduledEvents` configuration option described below. {{% alert color="warning" %}}This setting cannot be configured when running locally. To enable and disable scheduled events when running locally, please use the 'Enabled' setting on the [Scheduled Events execution properties](/refguide/scheduled-events/) in Studio Pro.{{% /alert %}} | NONE |
| <a id="SessionKeepAliveUpdatesInterval" href="#SessionKeepAliveUpdatesInterval">SessionKeepAliveUpdatesInterval</a> | Defines how often a runtime writes session LastActive dates in its memory back to the database. | one sixth of the value configured for the `SessionTimeout` setting; if the `SessionTimeout` is not set, this value defaults to 100000 (100 seconds) |
| <a id="SessionTimeout" href="#SessionTimeout">SessionTimeout</a> | Defines after how much time session becomes invalid (in milliseconds). After that timeout a session becomes applicable for removal. The session will not be destroyed until the next time the cluster manager evaluates the active sessions. | 600000 (10 minutes) |
| <a id="TaskQueueShutdownGracePeriod" href="#TaskQueueShutdownGracePeriod">TaskQueue.<wbr>ShutdownGracePeriod</a> | Time in ms to wait for task in a task queue to finish when shutting down. | 10000 (10 seconds) |
| <a id="TempPath" href="#TempPath">TempPath</a> | The location of the temporary files. | [deployment folder]\data\tmp |
| <a id="TrackWebServiceUserLastLogin" href="#TrackWebServiceUserLastLogin">TrackWebServiceUserLastLogin</a> | Defines whether to update the web service user's `LastLogin` field on each login. When this happens a database update query has to be sent and this can have performance consequences on heavy load systems. When this setting is set to false, no database interaction is necessary. | true |
| <a id="UploadedFilesPath" href="#UploadedFilesPath">UploadedFilesPath</a> | The location of the uploaded files. A valid path can be: `\\FileServer\CustomerPortalFiles`. | [deployment folder]\data\files |
| <a id="EnableFileDocumentCaching" href="#EnableFileDocumentCaching">EnableFileDocumentCaching</a> | Defines whether file documents should be cached. Only enable this if you are sure that the file documents will not contain sensitive information. Images are always cached. | false |
| <a id="ObjectManagementStrictChangeBehavior" href="#ObjectManagementStrictChangeBehavior">ObjectManagement.<wbr>StrictChangeBehavior</a> | Defines the behavior when changing values of Enums and Calculated attributes.<br/>When set to true, setting an invalid value for an Enum attribute and/or setting a value for a Calculated attribute will result in an InvalidEnumerationValueException and/or ReadOnlyAttributeException respectively.<br/>When set to false, changes to the values of Enums and/or Calculated attributes will be allowed.<br/>We plan to remove this setting in Mendix 11, after which, an exception will always be raised when setting an invalid value. | true |
| <a id="mapping.import.MaxJsonReadingLength" href="#mapping.import.MaxJsonReadingLength">mapping.import.MaxJsonReadingLength</a> | The maximum length of the JSON string received from the remote which can be processed with import mapping. Use this setting when you expect a string which is longer than the default. See [Import Mappings](/refguide/import-mappings/#troubleshooting) for more information. <br />*This setting was introduced in Mendix version 10.9.0 and Mendix MTS version 10.6, patch version 10.6.5.* | 20000000 *(dependent on library version)* |

### ApplicationRootUrl {#applicationrooturl-section}

The ApplicationRootUrl setting is used to specify the domain and path to your application. This can be used within Java actions to get the public location of the application, for example when including a URL to the application when sending emails from a scheduled event. 

There are two main ways that you might use to host multiple applications.

* Routing based on a (sub)domain
* Routing based on a subpath (supported since Mendix 10.3.0)

Say we are hosting two apps, App1 and App2. In domain-based routing, every app gets its own domain (for example. `app1.domain.com` and `app2.domain.com`). In subpath-based routing, this would be on a subpath, for example `domain.com/app1` and `domain.com/app2`.

When setting up either routing variant, most content is correctly served automatically as it is relative to the path in which it is being served. Exceptions to this include:

1. Client components that automatically forward/route you to a top-level domain
1. Content that specifies a full path to your public domain/path

For the first case, domain-based routing is generally more stable, although path-based routing is possible with Mendix version 10.3.0 or above.

Examples of the second case are OData contracts, sending mails to your organization, and any place you want to render a static URL in your application. For this case it is possible to specify the ApplicationRootUrl.

#### Multiple External Domains

Mendix systems like OData that generate content based on a http request to the server, will use the headers passed (for example, by a proxy) to generate content. These headers are `X-Forwarded-Proto`, `X-Forwarded-Scheme`, `X-Forwarded-Host`, `X-Forwarded-Port`, `X-Forwarded-Prefix` and `Host`. For Mendix 10 and above, `ApplicationRootUrl` will take precedence over these headers. If you host a single application on two or more domains, you will have to choose one of the domains to represent the public-facing URL.

## Log File Settings

The settings below influence the behavior of the log files. These settings can only be used on premises. In the cloud, these settings do not change any behavior.

| Name | Description | Default Value |
| --- | --- | --- |
| <a id="LogFileName" href="#LogFileName">LogFileName</a> | The name of the log file. The log files (actual log file plus back-up files) will be placed in the folder specified by the setting log path. | Application.log |
| <a id="MaxLogFileSize" href="#MaxLogFileSize">MaxLogFileSize</a> | The maximum size per log file. When the log file reaches this maximum size, the log file will be backed up and a new empty log file will be used. | 2097152 (2 MB) |
| <a id="MaxLogFileCount" href="#MaxLogFileCount">MaxLogFileCount</a> | The maximum count of log files preserved (actual file plus back-up files). When the maximum count is reached, the oldest backup file will be removed. | 10 |

## Database Settings {#database-settings}

### Common Settings

| Name | Description | Default Value |
| --- | --- | --- |
| <a id="ClientQueryTimeout" href="#ClientQueryTimeout">ClientQueryTimeout</a> | Defines the timeout in seconds for most of the database queries which are executed to load data into client widgets, like data grids. After the duration as specified here, a query will be canceled and an exception will be thrown. |   |
| <a id="DatabaseType" href="#DatabaseType">DatabaseType</a> | Defines the database engine which is used as the Mendix database. Valid values are `HSQLDB`, `MYSQL`, `ORACLE`, `POSTGRESQL`, `SAPHANA`, and `SQLSERVER`. | |
| <a id="DatabaseUserName" href="#DatabaseUserName">DatabaseUserName</a> | Name required for authentication to the database. | |
| <a id="DatabasePassword" href="#DatabasePassword">DatabasePassword</a> | Password for the `DatabaseUserName` supplied above. | |
| <a id="DatabaseHost" href="#DatabaseHost">DatabaseHost</a> | The host name and optionally the TCP port number of the database. Use a colon (`:`) as separator between the host name and port number. Possible values are: `db.url.org`, `db.url.org:1521`, `10.0.0.5`, and`10.0.0.5:1433`\. It is possible to use a plain IPv6 address by enclosing it in brackets (for example, `[::1]:5432`).<br/>This will be overridden if you supply [DatabaseJdbcUrl](#DatabaseJdbcUrl). | |
| <a id="DatabaseName" href="#DatabaseName">DatabaseName</a> | The name of the database or schema used by the Mendix app <br/>This will be overridden if you supply [DatabaseJdbcUrl](#DatabaseJdbcUrl). | |
| <a id="DatabaseJdbcUrl" href="#DatabaseJdbcUrl">DatabaseJdbcUrl</a> | Defines the JDBC URL to use for the database connection (which overrides the other database connection settings). |   |
| <a id="DatabaseUseSsl" href="#DatabaseUseSsl">DatabaseUseSsl</a> | When `true`, the connection will be made using SSL without certificate validation. If you need certificate validation, use [DatabaseJdbcUrl](#DatabaseJdbcUrl) instead.<br />When `false`, the connection will be made without SSL (this is only relevant for SQL Server, which uses SSL by default). | |
| <a id="DatabaseUseIntegratedSecurity" href="#DatabaseUseIntegratedSecurity">DatabaseUseIntegratedSecurity</a> | This setting defines whether integrated security will be used to authenticate to SQL Server. If true, user name and password will not be used.<br />Ensure that the proper domain user for accessing the SQL Server is authenticated on the runtime server using the `kinit` command. | false |
| <a id="LogMinDurationQuery" href="#LogMinDurationQuery">LogMinDurationQuery</a> | Defines whether database queries are logged via the `ConnectionBus_Queries` log node if they finished after the number of milliseconds specified here. By default, only the relevant SQL query will be logged. Set the log level of the `ConnectionBus_Queries` log node to `TRACE` to show more information about the page or the microflow which leads to this query. |   |
| <a id="OracleServiceName" href="#OracleServiceName">OracleServiceName</a> | Defines the `SERVICE_NAME` when you have a connection with an Oracle DBMS. |   |
| <a id="DataStorageEnableDiagnostics" href="#DataStorageEnableDiagnostics">DataStorage.EnableDiagnostics</a> | This setting can be used to generate a uniqueness constraint violation report. | false |
| <a id="UseNetworkTimeout" href="#UseNetworkTimeout">UseNetworkTimeout</a> | This setting is applied to PostgreSQL. It affects the timeout mechanism used when reserving new ids for Mendix objects. If set to true, the socket level request timeout is used. In that case, the request timeout is handled within the operating system. If set to false, the timeout is handled by Mendix runtime. For other databases, timeouts are always handled by Mendix runtime. | true |
| <a id="JdbcLoginTimeout" href="#JdbcLoginTimeout">JdbcLoginTimeout</a> | This setting defines the database connection establishment time in milliseconds. | 5000 (5 seconds) |
| <a id="SynchronizationCleanupInterval" href="#SynchronizationCleanupInterval">com.mendix.offline.SynchronizationCleanupInterval</a> | This setting defines how often objects of type `System.OfflineSynchronizationHistory` are cleaned up. | 90 (90 days) |

### Connection Pooling {#connection-pooling}

The settings below are used to define the database connection pooling behavior. Mendix Runtime uses a pool of reusable database connections. You can, for example, define how many connections can be used. Connection pooling is implemented using the [Apache Commons Object-pooling API](https://commons.apache.org/proper/pool/). 

These settings are configured *per runtime instance*. If you have [scaled your application](/developerportal/deploy/scale-environment/), the number of connections on the database side will be multiplied by the number of runtime instances. For example, if you set `ConnectionPoolingMaxIdle` to `50` and scale your app to 2 runtime instances, each runtime instance will create at most 50 connections, but on the database side this will lead to a maximum of 100 connections.

| Name | Value | Default Value |
| --- | --- | --- |
| <a id="ConnectionPoolingMaxWait" href="#ConnectionPoolingMaxWait">ConnectionPoolingMaxWait</a> | When the maximum number of "active" objects has been reached, the pool is said to be "exhausted." The "when exhausted" action used by the connection bus is `WHEN_EXHAUSTED_BLOCK`. Sets the maximum amount of time (in milliseconds) the `borrowObject()` method should block before throwing an exception when the pool is exhausted. When less than or equal to `0`, the `borrowObject()` method may block indefinitely. (!) | 10000 (10 seconds) |
| <a id="ConnectionPoolingMaxActive" href="#ConnectionPoolingMaxActive">ConnectionPoolingMaxActive</a> | Sets the cap on the total number of active instances from the pool. | 50 |
| <a id="ConnectionPoolingMaxIdle" href="#ConnectionPoolingMaxIdle">ConnectionPoolingMaxIdle</a> | Sets the cap on the number of "idle" instances in the pool. | 50 |
| <a id="ConnectionPoolingMinIdle" href="#ConnectionPoolingMinIdle">ConnectionPoolingMinIdle</a> | Sets the minimum number of objects allowed in the pool before the evictor thread (if active) spawns new objects. Note that no objects are created when `numActive` + `numIdle` >= `maxActive`.  This setting has no effect if the idle object evictor is disabled (as in, if `timeBetweenEvictionRunsMillis` <= 0). | 0 |
| <a id="ConnectionPoolingTimeBetweenEvictionRunsMillis" href="#ConnectionPoolingTimeBetweenEvictionRunsMillis">ConnectionPoolingTimeBetweenEvictionRunsMillis</a> | Sets the number of milliseconds to sleep between runs of the idle object evictor thread. When non-positive, no idle object evictor thread will be run. | 300 000 (5 minutes) |
| <a id="ConnectionPoolingSoftMinEvictableIdleTimeMillis" href="#ConnectionPoolingSoftMinEvictableIdleTimeMillis">ConnectionPoolingSoftMinEvictableIdleTimeMillis</a> | Sets the minimum amount of time an object may sit idle in the pool before it is eligible for eviction by the idle object evictor (if any), with the extra condition that at least `minIdle` objects remain in the pool. When non-positive, no objects will be evicted from the pool due to idle time alone. | 300 000 (5 minutes) |
| <a id="ConnectionPoolingNumTestsPerEvictionRun" href="#ConnectionPoolingNumTestsPerEvictionRun">ConnectionPoolingNumTestsPerEvictionRun</a> | Sets the maximum number of objects to examine during each run of the idle object evictor thread (if any). When a negative value is supplied, `ceil(getNumIdle())/ abs(getNumTestsPerEvictionRun())` tests will be run. This means that when the value is -n, roughly one nth of the idle objects will be tested per run. | -3 |
| <a id="ConnectionPoolingTestOnBorrow" href="#ConnectionPoolingTestOnBorrow">ConnectionPoolingTestOnBorrow</a> | If `true`, a database connection will be validated by the connection pool before returning it to the application. This can be useful in situations where database connections can be closed by processes outside of the Mendix runtime, like firewalls. Supported in Mendix version 10.6 in patch versions 10.6.4 and above, and in Mendix version 10.8.0 and above. | false |
| <a id="ConnectionPoolingTestOnCreate" href="#ConnectionPoolingTestOnCreate">ConnectionPoolingTestOnCreate</a> | If `true`, a database connection will be validated by the connection pool after being created. Supported in Mendix version 10.6 in patch versions 10.6.4 and above, and in Mendix version 10.8.0 and above. | false |
| <a id="ConnectionPoolingTestOnReturn" href="#ConnectionPoolingTestOnReturn">ConnectionPoolingTestOnReturn</a> | If `true`, a database connection will be validated by the connection pool when it is returned to the pool by the application. Supported in Mendix version 10.6 in patch versions 10.6.4 and above, and in Mendix version 10.8.0 and above. | false |
| <a id="ConnectionPoolingTestWhileIdle" href="#ConnectionPoolingTestWhileIdle">ConnectionPoolingTestWhileIdle</a> | If `true`, all idle database connections will be validated when the idle object evictor runs. Supported in Mendix version 10.6 in patch versions 10.6.4 and above, and in Mendix version 10.8.0 and above. | false |

### Migration Settings

The settings below are used to define the source database from which all data should be copied to the main database. You have to specify the settings below only once. The main database should exist and should be empty. During the app start-up, the data will be copied if the settings below are specified. Remove the settings afterwards, because they are not needed anymore.

Before the data copying process starts, the main database structure will be generated based on the source database structure. This is necessary to make sure all the data is copied without any problems, especially in cases where the source database has a larger element value than the current domain model specifies.

| Name | Value | Default Value |
| --- | --- | --- |
| <a id="SourceBuiltInDatabasePath" href="#SourceBuiltInDatabasePath">SourceBuiltInDatabasePath</a> | Defines the file location of the built-in source database. This setting is only necessary if a non-default location of the built-in database has to be used to copy the data from.  | [deployment folder]/data/database |
| <a id="SourceDatabaseHost" href="#SourceDatabaseHost">SourceDatabaseHost</a> | The host name and optionally the TCP port number of the source database. Use a colon as separator between host name and port number. Possible values are: `db.url.org`, `db.url.org:1521`, `10.0.0.5`, or `10.0.0.5:1433`. It's possible to use a plain IPv6 address by enclosing it in brackets (for example, `[::1]:5432`). |   |
| <a id="SourceDatabaseJdbcUrl" href="#SourceDatabaseJdbcUrl">SourceDatabaseJdbcUrl</a> | Defines the JDBC URL to use for the source database connection (which overrides the other source database connection settings). This feature is not supported for PostgreSQL databases. |   |
| <a id="SourceDatabaseName" href="#SourceDatabaseName">SourceDatabaseName</a> | The name of the source database. |   |
| <a id="SourceDatabasePassword" href="#SourceDatabasePassword">SourceDatabasePassword</a> | The password for the connection to the source database. |   |
| <a id="SourceDatabaseType" href="#SourceDatabaseType">SourceDatabaseType</a> | The type of the source database. Possible values: `HSQLDB`, `MYSQL`, `ORACLE`, `POSTGRESQL`, `SAPHANA`, or `SQLSERVER`. |   |
| <a id="SourceDatabaseUseIntegratedSecurity" href="#SourceDatabaseUseIntegratedSecurity">SourceDatabaseUseIntegratedSecurity</a> | This setting defines whether integrated security will be used to authenticate to SQL Server. If true, user name and password will not be used. See [DatabaseUseIntegratedSecurity](#DatabaseUseIntegratedSecurity) for more information. | false |
| <a id="SourceDatabaseUseSsl" href="#SourceDatabaseUseSsl">SourceDatabaseUseSsl</a> |  When `true`, the connection to the source database will be made using SSL without certificate validation. If you need certificate validation, use [SourceDatabaseJdbcUrl](#SourceDatabaseJdbcUrl) instead.<br />When `false`, the connection to the source database will be made without SSL (this is only relevant for SQL Server, which uses SSL by default). | |
| <a id="SourceDatabaseUserName" href="#SourceDatabaseUserName">SourceDatabaseUserName</a> | The user name for the connection to the source database. |   |
| <a id="SourceOracleServiceName" href="#SourceOracleServiceName">SourceOracleServiceName</a> | Defines the `SERVICE_NAME` when you have a connection with an Oracle DBMS as source. |   |

## S3 Storage Service Settings {#amazon-s3-storage-service-settings}

The settings described below influence the behavior of the Amazon S3 Storage Service module. This module can be used for both Amazon S3 Storage and IBM Cloud Object Storage.

{{% alert color="warning" %}}
For deployments to Mendix Cloud, SAP BTP, and Mendix for Private Cloud, these settings are managed for you and cannot be overwritten.
{{% /alert %}}

| Name | Description | Default Value |
| --- | --- | --- |
| <a id="commendixstorages3AccessKeyId" href="#commendixstorages3AccessKeyId">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>AccessKeyId</a> | Acts as the username to authenticate with the S3 service. |   |
| <a id="commendixstorages3SecretAccessKey" href="#commendixstorages3SecretAccessKey">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>SecretAccessKey</a> | Acts as the password to authenticate with the S3 service. |   |
| <a id="commendixstorages3BucketName" href="#commendixstorages3BucketName">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>BucketName</a> | Name of the bucket where the files are stored on S3. |   |
| <a id="commendixstorages3ResourceNamePrefix" href="#commendixstorages3ResourceNamePrefix">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>ResourceNamePrefix</a> | Prefix for the keys under which objects are stored. Separators are not added automatically to keys. For keys like `prefix/key1`, `com.mendix.storage.s3.ResourceNamePrefix` should have value `prefix/`. This setting is available in Mendix version 10.6 in patch versions 10.6.4 and above, and in Mendix version 10.8.0 and above. |   |
| <a id="commendixstorages3ResourceNameSuffix" href="#commendixstorages3ResourceNameSuffix">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>ResourceNameSuffix</a> | Suffix for the keys under which objects are stored. This can be used when S3 buckets are divided into different segments for different users with different credentials (for example, store objects as `[key].customer1` for customer1 and as `[key].customer2` for customer2). Separators are not added automatically to keys. For keys like `key1.customer1`, `com.mendix.storage.s3.ResourceNameSuffix` should have value `.customer1`. |   |
| <a id="commendixstorages3Region" href="#commendixstorages3Region">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>Region</a> | Sets the region in which the S3 bucket is located. This will be used to determine the service endpoint, unless overridden in **com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>EndPoint**. This setting will also be used as the signing region for requests. ||
| <a id="commendixstorages3EndPoint" href="#commendixstorages3EndPoint">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>EndPoint</a> | Overrides the default endpoint. This setting is required when the storage is on a non-AWS location (for example, IBM Cloud Object Storage). Both the endpoint (for example, `s3.example.com`) or the full URL (including the protocol) are supported (for example, `https://s3.example.com`). Note that when setting a custom endpoint, path style access will be enabled. For more information, see [Class S3ClientOptions](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/s3/S3ClientOptions.html#withPathStyleAccess(boolean)). |   |
| <a id="commendixstorages3UseV2Auth" href="#commendixstorages3UseV2Auth">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>UseV2Auth</a> | Lets the authentication policy use `Signature Version 2` instead of the default `Signature Version 4`. Set this setting to `true` when the endpoint does not support `Signature Version 4`. | false |
| <a id="commendixstorages3EncryptionKeys" href="#commendixstorages3EncryptionKeys">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>EncryptionKeys</a> | List of keys which can be used to encrypt and decrypt data at rest in S3. The right key to decrypt the data with is automatically selected depending on with which key it was encrypted. Each encryption key consists of a key id, the encryption algorithm and the actual key (Base64 encoded). Example: {{< figure src="/attachments/refguide/runtime/custom-settings/code_snippet_2.png" class="no-border" >}} |   |
| <a id="commendixstorages3ForceGlobalBucketAccessEnabled" href="#commendixstorages3ForceGlobalBucketAccessEnabled">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>ForceGlobalBucketAccessEnabled</a> | The value `true` allows the server to route requests to a different region than specified in these settings (`false` disallows it). | true |
| <a id="commendixstorages3MaxConnections" href="#commendixstorages3MaxConnections">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>MaxConnections</a> | Overrides the default maximum connections limit in the S3 service. The default value is enough for most applications, so we do not recommend explicitly setting this to a custom value unless a larger maximum connections limit is absolutely necessary. | [DEFAULT_MAX_CONNECTIONS](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html#DEFAULT_MAX_CONNECTIONS) field of the ClientConfiguration interface in the AWS SDK for Java. |
| <a id="commendixstorages3ClientExecutionTimeout" href="#commendixstorages3ClientExecutionTimeout">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>ClientExecutionTimeout</a> | Sets the amount of time (in milliseconds) to allow a call to the storage service to complete. A value of `0` means no timeout. For more information, see the [AWS Java SDK](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html#setClientExecutionTimeout-int-). | 0 (no timeout) |
| <a id="commendixstorages3ConnectionTimeout" href="#commendixstorages3ConnectionTimeout">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>ConnectionTimeout</a> | Sets the amount of time to wait (in milliseconds) when initially establishing a connection before giving up and timing out. A value of `0` means infinity and is not recommended. For more information, see the [AWS Java SDK](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html#setConnectionTimeout-int-). | 10.000 (10 seconds) |
| <a id="commendixstorages3SocketTimeout" href="#commendixstorages3SocketTimeout">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>SocketTimeout</a> | Sets the amount of time to wait (in milliseconds) for data to be transferred over an established, open connection before the connection times out and is closed.  A value of `0` means infinity and is not recommended. For more information, see the [AWS Java SDK](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html#setSocketTimeout-int-). | 50.000 (50 seconds) |
| <a id="commendixstorages3RequestTimeout" href="#commendixstorages3RequestTimeout">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>RequestTimeout</a> | Sets the amount of time to wait (in milliseconds) for the request to complete before giving up and timing out. A value of `0` means no timeout. For more information, see [the AWS Java SDK](https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/ClientConfiguration.html#setRequestTimeout-int-). | 0 (no timeout) |
| <a id="commendixstorages3UseCACertificates" href="#commendixstorages3UseCACertificates">com.<wbr>mendix.<wbr>storage.<wbr>s3.<wbr>UseCACertificates</a> | Set this value to `true` to use the configured [CACertificates](#CACertificates) for the connection to the S3 service. | false |

## Microsoft Azure SQL {#azure-sql}

These settings can be changed to use a Microsoft Azure SQL database for your Mendix application.

{{% alert color="warning" %}}
For deployments to Mendix Cloud, SAP BTP, and Mendix for Private Cloud, these settings are managed for you and cannot be overwritten.
{{% /alert %}}

First, you need to create an Azure SQL database (for information on how to do this, see this [SQL Database Tutorial](https://azure.microsoft.com/en-us/documentation/articles/sql-database-get-started/)). Make sure your Azure firewall settings allow your Mendix application to reach the Azure SQL database (by default, the Azure firewall does not allow external connections).

| Name | Description | Default Value |
| --- | --- | --- |
| <a id="AzureDatabaseType" href="#AzureDatabaseType">DatabaseType</a> | `SQLSERVER` |   |
| <a id="AzureDatabaseHost" href="#AzureDatabaseHost">DatabaseHost</a> | `"your-database-host.database.windows.net:1433"` |   |
| <a id="AzureDatabaseName" href="#AzureDatabaseName">DatabaseName</a> | `your-databasename` |   |
| <a id="AzureDatabaseUserName" href="#AzureDatabaseUserName">DatabaseUserName</a> | `your-username` |   |
| <a id="AzureDatabasePassword" href="#AzureDatabasePassword">DatabasePassword</a> | `your-password` |   |

{{% alert color="info" %}}
An alternative to using `DatabaseUserName` and `DatabasePassword` is appending `Authentication=ActiveDirectoryDefault` to the [`DatabaseJdbcUrl`](#DatabaseJdbcUrl) setting.
This will use the credential information present in the running environment to connect to the database. See [Connect using ActiveDirectoryDefault authentication mode](https://learn.microsoft.com/en-us/sql/connect/jdbc/connecting-using-azure-active-directory-authentication?view=sql-server-ver16#connect-using-activedirectorydefault-authentication-mode) and [DefaultAzureCredential Class](https://learn.microsoft.com/en-us/java/api/com.azure.identity.defaultazurecredential?view=azure-java-stable) in the Microsoft documentation for more information.
{{% /alert %}}

## Microsoft Azure Blob Storage Settings{#azure-blob}

These settings can be used to store files using the Microsoft Azure blob storage service. Server-side encryption can be configured through the Azure Portal (for more information, see [Azure Storage encryption for data at rest](https://azure.microsoft.com/en-us/documentation/articles/storage-service-encryption/)).

{{% alert color="warning" %}}
For deployments to Mendix Cloud, SAP BTP, and Mendix for Private Cloud, these settings are managed for you and cannot be overwritten.
{{% /alert %}}

| Name | Description | Default Value |
| --- | --- | --- |
| <a id="commendixcoreStorageService" href="#commendixcoreStorageService">com.<wbr>mendix.<wbr>core.<wbr>StorageService</a> | Has to be set to `com.mendix.storage.azure` to select Azure as the storage service. |   |
| <a id="commendixstorageazureAccountName" href="#commendixstorageazureAccountName">com.<wbr>mendix.<wbr>storage.<wbr>azure.<wbr>AccountName</a> | Account name to authenticate with the Azure blob storage service. |   |
| <a id="commendixstorageazureAccountKey" href="#commendixstorageazureAccountKey">com.<wbr>mendix.<wbr>storage.<wbr>azure.<wbr>AccountKey</a> | Account key to authenticate with the Azure blob storage service. |   |
| <a id="commendixstorageazureSharedAccessSignature" href="#commendixstorageazureSharedAccessSignature">com.<wbr>mendix.<wbr>storage.<wbr>azure.<wbr>SharedAccessSignature</a> | Provides delegated access to resources in your storage account. For more information, see [Shared Access Signature on docs.microsoft.com](https://docs.microsoft.com/en-us/azure/storage/common/storage-dotnet-shared-access-signature-part-1). |   |
| <a id="commendixstorageazureUseDefaultAzureCredential" href="#commendixstorageazureUseDefaultAzureCredential">com.<wbr>mendix.<wbr>storage.<wbr>azure.<wbr>UseDefaultAzureCredential</a> | Enables the use of the credential information present in the running environment. For more information, see [DefaultAzureCredential](https://learn.microsoft.com/en-us/java/api/overview/azure/identity-readme?view=azure-java-stable#defaultazurecredential) on Microsoft Learn. |   |
| <a id="commendixstorageazureBlobEndpoint" href="#commendixstorageazureBlobEndpoint">com.<wbr>mendix.<wbr>storage.<wbr>azure.<wbr>BlobEndpoint</a>¹ | Set the blob endpoint. This setting is required when authentication by `SharedAccessSignature` or `UseDefaultAzureCredential` is used. |   |
| <a id="commendixstorageazureContainer" href="#commendixstorageazureContainer">com.<wbr>mendix.<wbr>storage.<wbr>azure.<wbr>Container</a> | Name of the container containing the blob. |   |
| <a id="commendixstorageazureCreateContainerIfNotExists" href="#commendixstorageazureCreateContainerIfNotExists">com.<wbr>mendix.<wbr>storage.<wbr>azure.<wbr>CreateContainerIfNotExists</a> | Indicates whether to check if the container exists, and creates it if it does not exist. | `true` |
| <a id="commendixstorageazureParallelismFactor" href="#commendixstorageazureParallelismFactor">com.<wbr>mendix.<wbr>storage.<wbr>azure.<wbr>ParallelismFactor</a> | Maximum number of parallel multi-part file uploads/downloads. We advise not changing this setting unless you experience slow file transfers for large files. Choosing larger values will lead to higher memory usage. | 5 |
| <a id="commendixstorageazureUseHttps" href="#commendixstorageazureUseHttps">com.<wbr>mendix.<wbr>storage.<wbr>azure.<wbr>UseHttps</a> | For enabling or disabling secure connections using HTTPS. Can be `true` or `false`. | `true` |
| <a id="commendixstorageazureTimeoutIntervalInMs" href="#commendixstorageazureTimeoutIntervalInMs">com.<wbr>mendix.<wbr>storage.<wbr>azure.<wbr>TimeoutIntervalInMs</a> | Sets the amount of time (in milliseconds) to allow a call to the storage service to complete. For more information, see the [Azure libraries](https://azure.github.io/azure-sdk-for-java/storage.html). | No timeout |
| <a id="commendixstorageazureMaximumExecutionTimeInMs" href="#commendixstorageazureMaximumExecutionTimeInMs">com.<wbr>mendix.<wbr>storage.<wbr>azure.<wbr>MaximumExecutionTimeInMs</a> | Sets the maximum execution time (in milliseconds) to use when making this request. For more information, see the [Azure libraries](https://azure.github.io/azure-sdk-for-java/storage.html). | No maximum time |

{{% alert type="warning" %}}
¹ The `com.mendix.storage.azure.BlobEndpoint` setting can include the container name, as in `https://storageaccount.blob.core.windows.net/some-container-name`. In this case the value in the `com.mendix.storage.azure.Container` setting will be used as a directory name.

This behavior is broken in the following versions

* 8.18.28
* 9.24.14, 9.24.15, 9.24.16, 9.24.17, 9.24.18
* 10.6.1, 10.6.2, 10.6.3, 10.6.4, 10.6.5, 10.7.0, 10.8.0, 10.8.1.

In these versions, the container name in the `com.mendix.storage.azure.BlobEndpoint` setting is ignored and files are stored at the root of the container. If you upgrade to one of these versions from a previous version, you will no longer have access to any files uploaded previously.
{{% /alert %}}

{{% alert color="warning" %}}
Azure blob storage's default connection protocol is HTTPS in order to encourage secure connections by default. This is a highly recommended best practice (for more information, see [Configure Azure Storage Connection Strings](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string)). This should now be transparent, unless you use custom domain names (for details, see [Require Secure Transfer](https://docs.microsoft.com/en-us/azure/storage/common/storage-require-secure-transfer)). In that case, you should use the `UseHttps` setting above to revert to the previous default behavior and disable HTTPS.
{{% /alert %}}

## Web Client Settings{#web-client-settings}

The settings below influence the behavior of the Mendix web client.

| Name | Description | Default Value |
| --- | --- | --- |
| <a id="EnableKeepAlive" href="#EnableKeepAlive">EnableKeepAlive</a> | Defines whether the web client sends a keep alive request every SessionTimeout/2 milliseconds, to prevent a session timeout. Each click in the browser also acts as KeepAlive. Disabling this property will result in a user being logged out automatically after 10 minutes of inactivity, even if the browser remains open. | true |
| <a id="PhoneUserAgentRegEx" href="#PhoneUserAgentRegEx">PhoneUserAgentRegEx</a> | Defines the regular expression that is used to determine whether a user is visiting a Mendix application from a phone. The regular expression is matched against the user-agent header sent by the client's web browser. | Android, Mobile (iPhone, iPod, BlackBerry) |
| <a id="TabletUserAgentRegEx" href="#TabletUserAgentRegEx">TabletUserAgentRegEx</a> | Defines the regular expression that is used to determine whether a user is visiting a Mendix application from a tablet. The regular expression is matched against the User-Agent header sent by the client's web browser. | Android, iPad |
| <a id="commendixwebuiHybridAppLoginTimeOut" href="#commendixwebuiHybridAppLoginTimeOut">com.<wbr>mendix.<wbr>webui.<wbr>HybridAppLoginTimeOut</a> | Determines how many minutes your token will remain valid before re-authenticating using your full credentials.  If no value is set the token will expire after One year *(Mendix version 10.9.0 and above)* or never expire *(Mendix versions below 10.9.0)*. |  |
| <a id="commendixwebuiFeedbackSizeWarningThreshold" href="#commendixwebuiFeedbackSizeWarningThreshold">com.<wbr>mendix.<wbr>webui.<wbr>FeedbackSizeWarningThreshold</a> | A warning is logged when the feedback size exceeds the threshold. Feedback is sent from server to client to instruct (for example, to refresh objects or to open a page). They are serialized as "instructions" in the server response. If there are too many instructions, this can have performance implications, as they all have to be serialized to the client. For this reason, a warning is logged when the threshold is exceeded. | 5000 |
| <a id="commendixwebuiStateSizeWarningThreshold" href="#commendixwebuiStateSizeWarningThreshold">com.<wbr>mendix.<wbr>webui.<wbr>StateSizeWarningThreshold</a> | A warning is logged when the state size exceeds the threshold. The state consists of changes in objects and of objects not committed to the database (yet). If there is too much state, this will have performance implications, as the whole state has to be serialized to the client. For this reason, a warning is logged when the threshold is exceeded. | 100 |
| <a id="commendixwebuiCommittedObjectsThreshold" href="#commendixwebuiCommittedObjectsThreshold">com.<wbr>mendix.<wbr>webui.<wbr>CommittedObjectsThreshold</a> | The threshold controls how much data is sent back to the client after executing a microflow. By default, we send back full objects when they are changed or committed. When this threshold is reached, only object GUIDs are sent back instead so that the client knows about the changes while the amount of data sent over the network is reduced. The client will then retrieve the objects later on, if needed. | 100 |

## Metrics Settings{#metrics-settings}

The settings below configure metrics through [micrometer](https://micrometer.io/docs). See [Metrics](/refguide/metrics/) for more information and the specification of the settings format. 

| Name | Description | Default Value |
| --- | --- | --- |
| <a id="commendixmetricsType" href="#commendixmetricsType">com.mendix.metrics.Type</a> | Enable access to Micrometer metrics through Java APIs | micrometer |
| <a id="MetricsRegistries" href="#MetricsRegistries">Metrics.Registries</a> | Registries to send metrics to |   |
| <a id="MetricsApplicationTags" href="#MetricsApplicationTags">Metrics.ApplicationTags</a> | Common tags used for every meter |   |

## Proxy Settings {#proxy-settings}

The settings below allow you to use a proxy. 

{{% alert color="warning" %}}
These settings have to be set as JVM properties, not as custom Runtime settings.
{{% /alert %}}

| Name | Description | Default Value |
| --- | --- | --- |
| <a id="httpproxyHost" href="#httpproxyHost">http.proxyHost</a> | Defines the hostname of the HTTP proxy server. |  |
| <a id="httpproxyPort" href="#httpproxyPort">http.proxyPort</a> | Defines the port number of the HTTP proxy server. |  |
| <a id="httpproxyUser" href="#httpproxyUser">http.proxyUser</a> | Defines the user of the HTTP proxy server. | | 
| <a id="httpproxyPassword" href="#httpproxyPassword">http.proxyPassword</a> | Defines the password of the HTTP proxy server. | | 
| <a id="httpsproxyHost" href="#httpsproxyHost">https.proxyHost</a> | Defines the hostname of the HTTPS proxy server. |  |
| <a id="httpsproxyPort" href="#httpsproxyPort">https.proxyPort</a> | Defines the port number of the HTTPS proxy server. |  |
| <a id="httpsproxyUser" href="#httpsproxyUser">https.proxyUser</a> | Defines the user of the HTTPS proxy server. | | 
| <a id="httpsproxyPassword" href="#httpsproxyPassword">https.proxyPassword</a> | Defines the password of the HTTPS proxy server. | | 

{{% alert color="info" %}} `http.nonProxyHosts` only affects the license server. {{% /alert %}}
