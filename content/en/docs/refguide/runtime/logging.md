---
title: "Logging"
url: /refguide/logging/
description: "Describes what the various log levels of the runtime will show as output."
---

## Introduction

Below we describe what the various log levels of the runtime will show as output.
During development, these log levels can be set in the console (advanced -> set log levels), when deployed on a server, please refer to the [Deployment](/developerportal/deploy/mendix-cloud-deploy/) pages.

You can also set log levels to provide more or less information when testing locally using the console in Studio Pro. See [Configuring the Log Levels for Standard Log Messages](/howto/monitoring-troubleshooting/log-levels/#standard-log-levels) in *How To Set Log Levels* for more information.

## Log Levels {#log-levels}

### Critical{#critical}

Critical is reserved for rare cases where the application may not be able to function reliably anymore. This should normally not occur. If it does, you should immediately take action. The 3.0 cloud treats these messages as alerts and will notify you on the cloud dashboard.

### Error

Error is used to log all unhandled exceptions. These are unexpected events that should not occur, but are not critical. The application should be able to function normally afterwards.

### Warning

Warning is often used for handled 'exceptions' or other important log events. For example, if your application requires a configuration setting but has a default in case the setting is missing, then the Warning level should be used to log the missing configuration setting.

### Information

The Information level is typically used to output information that is useful to the running and management of your system. Information would also be the level used to log entry and exit points in key areas of your application. However, you may choose to add more entry and exit points at Debug level for more granularity during development and testing.

### Debug

This should be used for debugging systems during development, but never in a production system. It can be used to easily pinpoint problems and the general flow of your application.

### Trace

This is the most verbose logging level, and can be used if you want even more fine-grained logging than debug.

## Log Nodes

This section provides some details on specific log nodes used by Mendix. It is recommended that if you write your own [log messages](/refguide/log-message/) you use your own log node names to avoid confusion with the Mendix log messages.

### Default Mendix Log Nodes {#mendix-nodes}

The following log nodes are used by Mendix when writing log messages.

{{% alert color="info" %}}
This list is currently incomplete and is being updated.
{{% /alert %}}

| Log Node | Description|
| --- | --- |
| ActionManager | Logs messages related to action scheduling (for example, scheduled events) and action execution (for example, running microflows). |
| Configuration | Logging related to the configuration of the Mendix app that is read in at startup. |
| ConnectionBus | General logging related to database startup, synchronization and connections management for Mendix. |
| ConnectionBus_Mapping | Information relating to the translations of XPath Queries and OQL text queries to OQL Queries. |
| ConnectionBus_Queries | If `LogMinDurationQuery` has been set, queries that take longer than `LogMinDurationQuery` milliseconds will be logged here. |
| ConnectionBus_Retrieve | All information related to the retrieval of data, such as: Incoming requests from the application, the executed statement. Also logs issues encountered during the processing of the received data. |
| ConnectionBus_Security | Information regarding access rights needed to access the database. |
| ConnectionBus_Synchronize | ⚠ Deprecated: This is a legacy node. |
| ConnectionBus_Update | All information related to the update of data in the database. Incoming storage requests, the executed statements and issues encountered during storage. |
| ConnectionBus_Validation | Information related modification of the existing database, and database migration. |
| Connector | Logs when standard or custom request handlers (added through Core#addRequestHandler) are registered, or when a path is called that does not have a registered request handler. |
| Core | Logs messages from the core runtime. This can be startup of the runtime, version of the runtime, license being used and issues related to interpreting the model. |
| DataStorage_QueryHandling | Logs messages related to the queries that are being executed. |
| DataStorage_QueryPlan | Query execution plan information for installations (currently only supported for PostgreSQL databases). |
| DocumentExporter | Logs messages related to the templating engine that generates documents. |
| FileDocumentSizesPopulateJob | Logs messages for a background job that populates the file-size field in the database for documents that do not have that field filled (used during legacy migration). |
| IDResolution | Information on retrieval queries and runtime operations that are being executed. |
| I18NProcessor | Logs messages related to translation of the app. |
| Integration API | Logs messages related to the documentation of integration APIs. |
| JSON | JSON messages from the Mendix Client to the Runtime Server. See [JSON](#json), below, for more information |
| JSON Export | Logs messages related to export mappings to JSON. |
| JSON Import | Logs messages related to import mappings from JSON. |
| Jetty | Logs messages from the internal Jetty webserver that handles HTTP requests between the runtime and the outside world. |
| LocalFileSystemStore | Logs messages related to file handling if you are using local file system as your file store. |
| Logging | Logs messages related to the logging framework used by Mendix. |
| M2EE | Logs messages from the administration interface with the Mendix Runtime. |
| MicroflowDebugger | Logs messages related to the status of the microflow debugger (for example, connection status, incoming and outgoing requests). |
| MicroflowEngine | Logs messages related to microflow execution (for example, which microflow or microflow action is being executed and errors that occur during the execution). |
| ModelStore | Logs debug messages related to synchronizing User Role and language information to the system tables. |
| Module | Logs messages for modules that are loaded on-demand in the core runtime like the microflow-engine. |
| ObjectManagement | Logs errors relating to attempts to make associations to non-existent object |
| ODataConsume | Logs messages related to consumed OData services. |
| OData Publish | Logs messages related to published OData/GraphQL services. |
| QueryParser | Logs messages related to the parsing or interpretation of XPath and OQL queries. |
| Queue | All actions related to Task Queues |
| REST Consume | Logs messages related to the Call REST service activity. |
| REST Publish | Logs messages related to published REST services. |
| RequestStatistics | Logs if thresholds related to state defined in [Client Runtime Settings](/refguide/custom-settings/#web-client-settings) have exceeded the defined threshold. |
| Services | Logs messages related to [Web Services](/refguide/integration/web-services/) |
| StorageAzure | Logs messages related to file handling if you are using Azure system as your file store. |
| StorageS3 | Logs messages related to file handling if you are using Amazon S3 system as your file store. |
| WebServices | Traces SOAP call request and response contents. |
| WebUI | Logs if thresholds related to feedback size defined in [Client Runtime Settings](/refguide/custom-settings/#web-client-settings) have exceeded the defined threshold, or creating a valid session has failed. |
| Workflow Engine | Logs messages related to workflow executions, for example, lifecycle events, such as a start or an end of a workflow, execution of workflow actions, and errors that occur during the execution. |
| XML Export | Logs messages related to export mappings to XML. |
| XML Import | Logs messages related to import mappings from XML. |

### JSON {#json}

Has only one relevant level: *Debug*.

Setting this log level to debug will show you all the JSON requests and responses from the Mendix Client to the Runtime Server. This may degrade performance as this output is normally streamed. This can also be used to gain insight in what users are doing in a production environment. When using it here, make sure you have enough disk space available for your log files though.
