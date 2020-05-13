---
title: "Logging"
category: "Mendix Runtime"
tags: ["studio pro"]
---

## 1 Introduction

Below we describe what the various log levels of the runtime will show as output.
During development, these log levels can be set in the console (advanced -> set log levels), when deployed on a server, please refer to the [Deployment](/developerportal/deploy/mendix-cloud-deploy) pages.

## 2 Log Levels

### 2.1 Critical

Critical is reserved for rare cases where the application may not be able to function reliably anymore. This should normally not occur. If it does, you should immediately take action. The 3.0 cloud treats these messages as alerts and will notify you on the cloud dashboard.

### 2.2 Error

Error is used to log all unhandled exceptions. These are unexpected events that should not occur, but are not critical. The application should be able to function normally afterwards.

### 2.3 Warning

Warning is often used for handled 'exceptions' or other important log events. For example, if your application requires a configuration setting but has a default in case the setting is missing, then the Warning level should be used to log the missing configuration setting.

### 2.4 Information

The Information level is typically used to output information that is useful to the running and management of your system. Information would also be the level used to log entry and exit points in key areas of your application. However, you may choose to add more entry and exit points at Debug level for more granularity during development and testing.

### 2.5 Debug

This should be used for debugging systems during development, but never in a production system. It can be used to easily pinpoint problems and the general flow of your application.

### 2.6 Trace

This is the most verbose logging level, and can be used if you want even more fine-grained logging than debug.

## 3 Log Nodes

This section provides some details on specific log nodes.

### 3.1 Default Mendix Log Nodes

The following log nodes are used by Mendix when writing log messages.

| Log Node | Description
| --- | --- |
| ActionManager | |
| Configuration | |
| ConnectionBus | General logging related to database startup, synchronization and connections management for Mendix |
| ConnectionBus_Mapping | Information relating to the translations of XPath Queries and OQL text queries to OQL Queries |
| ConnectionBus_Queries | Deprecated: This is a legacy node |
| ConnectionBus_Retrieve | All information related to the retrieval of data, such as: Incoming requests from the application, the executed statement. Also logs issues encountered during the processing of the received data |
| ConnectionBus_Security | Information regarding access rights needed to access the database |
| ConnectionBus_Synchronize | Deprecated: This is a legacy node |
| ConnectionBus_Update | All information related to the update of data in the database. Incoming storage requests, the executed statements and issues encountered during storage |
| ConnectionBus_Validation | Information related modification of the existing database, and database migration |
| Connector | |
| Core | |
| DataStorage_QueryHandling | |
| DataStorage_QueryPlan | Query execution plan information for installations (currently only supported for PostgreSQL databases)|
| DocumentExplorer |
| FileDocumentSizesPopulateJob | |
| I18NProcessor | |
| JSON | See [JSON](#json), below, for more information |
| Jetty | |
| LocalFileSystemStore | |
| Logging | |
| MicroflowDebugging | |
| MicroflowEngine | |
| ModelStore | |
| Module | |
| ObjectManagement | |
| QueryParser | |
| REST Publish | |
| RequestStatistics | |
| Services | |
| StorageAzure | |
| StorageS3 | |
| StorageSwift | |
| WebServices | |
| WebUI | |

### 3.2 JSON{#json}

Has only one relevant level, which is debug.

Setting this log level to debug will show you all the JSON requests and responses from client to server. This may degrade performance as this output is normally done streaming. This can also be used to gain insight in what users are doing in a production environment. When using it here, make sure you have enough disk space available for your log files though.
