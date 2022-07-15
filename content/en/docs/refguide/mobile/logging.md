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

Starting from Mendix Studio Pro v9.16 and above, native mobile apps are able to send logs to [MxRuntime](refguide/runtime/).


## 2 Enable logging for native app

By default sending logs from native apps is disabled, and it can be enabled from your [Native phone profile](refguide/navigation/#native-phone) by checking the `Enable sending logs to runtime` checkbox inside `Logging` groupbox.

{{% alert color="warning" %}}
Please note that when enabling/disabling sending logs to runtime a new build of the native mobile app has to be created and distrbuted in order for this change to take an effect. For more information regarding that, check [Building and distributing native mobile apps](/refguide/mobile/distributing-mobile-apps/).
{{% /alert %}}

{{< figure src="attachments/refguide/mobile/native-mobile/logging/enable-logging.png" >}}


## 3 Log Levels

{{% alert color="warning" %}}
Please note that at the moment only `Information` and `Warning` log levels are supported. Support for the rest of the log levels will be added in the future.
{{% /alert %}}

// TODO: this piece is a duplicate of leg levels in  `/refguide/runtime/loggin` can we create a strucutre to reuse that, check with tech writers team. 

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

## 3 Native client default log nodes

This section provides some details on specific log nodes used by Mendix native client. It is recommended that if you write your own [log messages](/refguide/log-message/) you use your own log node names to avoid confusion with the Mendix log messages.

### 3.1 Default mendix native client log nodes {#native-client-log-nodes}

The following log nodes are used by Mendix when writing log messages.

| Log Node | Description
| --- | --- |
| Auth | Logs messages related to the different authentication state & actions of the user.|
| AppCenter| Logs messages related to the state and phases of over-the-air updates by AppCenter. |
| Client | The default log node when no log node is provided. |
| OTA | Logs messages related to the state and phases of over-the-air updates by Mendix OTA. |
| SelectiveSync | Logs message related to selective synchronization, like the differfent syhcnronization phases, the count of objects have been synchronized, how long did it take, ..etc. |
| Nanoflow | Logs messages related to nanoflows being executed.|  
| NanoflowDebugger | Logs messages related to different steps and available variables while debugging a nanoflow. |
| Database | Logs messages related to different read/write operation on the local database. |
| FileSystem | Logs messages related to different read/write operation on the local file system e.g. downloading a file and store it in the file system, moving a file, removing a file, ..etc.|
| Navigation | Logs messages related to the navigarion behavior in the app. |
| Network | Logs messages related to the different interaction between the client and runime ovefr the network |
| Startup | Logs messages related to client startup phase. |
| Synchronization | Logs messages related to full synchronization action and its phases. |


## 4 Sending log messages to runtime

Native client stores log messages locally on the device, when sending logs to the runtime option is enabled, native client will attempt to send log messages in batches of **100** messages if there is network connectavity, once the log message have been successfuly sent to the runtime thses log messages will be cleared from the device.