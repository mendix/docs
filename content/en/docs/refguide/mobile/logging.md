---
title: "Logging In Native Apps"
url: /refguide/mobile/logging/
weight: 30
description: "Describes using logging in native mobile apps"
tags: ["native", "logging", "troubleshooting"]
aliases:
    - /howto/mobile/logging/
---
## 1 Introduction

In Mendix Studio Pro v9.16 and above native mobile apps are able to send logs to [Mendix Runtime](refguide/runtime/). Read this guide for logging configuration information.

## 2 Enable Native App Logging

Sending logs from native apps is disabled by default. However, sending logs can be enabled from your [native phone profile](refguide/navigation/#native-phone) by selecting the **Enable sending logs to runtime** checkbox inside the **Logging** group box.

{{% alert color="warning" %}}
Please note that after enabling or disabling sending logs to runtime, you must create and distribute a new build of the native mobile app for this change to take effect. For more information on creating and distributing builds, see [Building, Testing, and Distributing Apps](/refguide/mobile/distributing-mobile-apps/).
{{% /alert %}}

{{< figure src="attachments/refguide/mobile/native-mobile/logging/enable-logging.png" >}}

## 3 Log Levels

{{% alert color="warning" %}}
Please note that at the moment only `Information` and above log levels are supported. Support for other log levels will be added in the future.
{{% /alert %}}

// TODO: this piece is a duplicate of log levels in  `/refguide/runtime/loggin` can we create a structure to reuse that, check with tech writers team. 

### 3.1 Critical

Critical is reserved for rare cases where the application may not be able to function reliably anymore. This should normally not occur. If it does, you should immediately take action. The 3.0 cloud treats these messages as alerts and will notify you on the cloud dashboard.

### 3.2 Error

Error is used to log all unhandled exceptions. These are unexpected events that should not occur, but are not critical. The application should be able to function normally afterwards.

### 3.3 Warning

Warning is often used for handled 'exceptions' or other important log events. For example, if your application requires a configuration setting but has a default in case the setting is missing, then the Warning level should be used to log the missing configuration setting.

### 3.4 Information

The Information level is typically used to output information that is useful to the running and management of your system. Information would also be the level used to log entry and exit points in key areas of your application. However, you may choose to add more entry and exit points at Debug level for more granularity during development and testing.

### 3.5 Debug

This should be used for debugging systems during development, but never in a production system. It can be used to easily pinpoint problems and the general flow of your application.

### 3.6 Trace

This is the most verbose logging level, and can be used if you want even more fine-grained logging than debug.

## 4 Native Client Default Log Nodes

This section provides some details on specific log nodes used by Mendix native client. It is recommended that if you write your own [log messages](/refguide/log-message/) you use your own log node names to avoid confusion with the Mendix log messages.

### 4.1 Default Mendix Native Client Log Nodes {#native-client-log-nodes}

The following log nodes are used by Mendix when writing log messages.

| Log Node | Description
| --- | --- |
| Client_Auth | Logs messages related to the different authentication state & actions of the user.|
| Client_AppCenter| Logs messages related to the state and phases of over-the-air updates by AppCenter. |
| Client | The default log node when no log node is provided. |
| Client_OTA | Logs messages related to the state and phases of over-the-air updates by Mendix OTA. |
| Client_SelectiveSync | Logs message related to selective synchronization, like the different synchronization phases, the count of objects have been synchronized, how long did it take, ..etc. |
| Client_Nanoflow | Logs messages related to nanoflows being executed.|  
| Client_NanoflowDebugger | Logs messages related to different steps and available variables while debugging a nanoflow. |
| Client_Database | Logs messages related to different read/write operation on the local database. |
| Client_FileSystem | Logs messages related to different read/write operation on the local file system (for example downloading a file and store it in the file system, moving a file, or removing a file.)|
| Client_Navigation | Logs messages related to the navigation behavior in the app. |
| Client_Network | Logs messages related to the different interaction between the client and runtime over the network |
| Client_Startup | Logs messages related to client startup phase. |
| Client_Synchronization | Logs messages related to full synchronization action and its phases. |

## 5 Sending Log Messages to Runtime

The native client stores log messages locally on the device. When sending logs to the runtime option is enabled, the native client will attempt to send log messages in batches of **100** messages or after 1 hour from the time these log messages were occurred therefore these clint log nodes will not appear directly in the cloud portal logs overview before they are sent. If there is a network connectivity, once the log messages have been successfully sent to the runtime these log messages will be cleared from the device.