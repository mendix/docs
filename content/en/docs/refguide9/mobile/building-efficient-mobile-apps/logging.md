---
title: "Logging in Native Apps"
url: /refguide9/mobile/building-efficient-mobile-apps/logging/
weight: 25
description: "Describes using logging in native mobile apps"
aliases:
    - /refguide9/mobile/logging/
---
## Introduction

In Mendix Studio Pro 9.16 and above, native mobile apps are able to send logs to the [Mendix Runtime](/refguide9/runtime/). Read this guide for information on native app logging configuration.

{{% alert color="warning" %}}
Please note the following current limitations regarding native client logs:

* Crash logs that happen outside the Mendix Native Client will not be collected and sent to the Mendix Runtime.
{{% /alert %}}

## Enabling Native App Logging

Sending logs from native apps is disabled by default. However, sending logs can be enabled from your [native phone profile](/refguide9/navigation/#native-phone) by selecting the **Enable sending logs to runtime** checkbox inside the **Logging** group box.

{{% alert color="warning" %}}
Please note that after enabling or disabling sending logs to runtime, you must create and distribute a new build of the native mobile app for this change to take effect. For more information on creating and distributing builds, see [Building, Testing, and Distributing Apps](/refguide9/mobile/distributing-mobile-apps/).
{{% /alert %}}

{{< figure src="/attachments/refguide9/mobile/native-mobile/logging/enable-logging.png" class="no-border" >}}

## Log Levels

{{% alert color="warning" %}}
Please note the following:

* `Crash` logs are not supported currently
{{% /alert %}}

For more information on log levels, see the [Log Levels](/refguide9/logging/#log-levels) section of *Logging*.

### Critical

**Critical** is reserved for rare cases where the application may not be able to function reliably anymore. This should normally not occur. If it does, you should immediately take action.

### Error

**Error** is used to log all unhandled exceptions. These are unexpected events that should not occur, but are not critical. The application should be able to function normally afterwards.

### Warning

**Warning** is often used for handled exceptions or other important log events. For example, if your application requires a configuration setting but has a default in case the setting is missing, then the **Warning** level should be used to log the missing configuration setting.

### Information

The **Information** level is typically used to output information that is useful to the running and management of your system. **Information** is typically the level used to log entry and exit points in key areas of your application. 

However, you may choose to add more entry and exit points at the **Debug** level for more granularity during development and testing.

### Debug

**Debug** should be used for debugging systems during development, but never in a production system. It can be used to easily assess problems as well as your app's general flow.

### Trace

**Trace** is the most verbose logging level, and should be used if you want more detailed logging than **Debug**.

## Native Client Default Log Nodes

This section provides some details on specific log nodes used by the Mendix native client. Mendix recommends that if you write your own [log messages](/refguide9/log-message/), you should also use your own log node names to avoid confusion with the Mendix log messages.

### Default Mendix Native Client Log Nodes {#native-client-log-nodes}

The following log nodes are used by Mendix when writing log messages:

{{% alert color="warning" %}}

* From Mendix Studio Pro 9.18.1 and above log messages are filtered based on the log levels set in the Cloud Portal app.
* Enabling the `trace` log level may cause too many logs to be sent to the [Mendix Runtime](/refguide9/runtime/), so it should not be kept enabled for long periods of time.
{{% /alert %}}

| Log Node | Description |
| --- | --- |
| Client_AppCenter| Logs messages related to the state and phases of over-the-air updates by AppCenter. |
| Client_Auth | Logs messages related to the different authentication states and user actions.|
| Client | The default log node when no log node is provided. |
| Client_Database | Logs messages related to different read/write operations on the local database. |
| Client_FileSystem | Logs messages related to different read/write operations on the local file system (for example downloading a file and storing it in the file system, moving a file, or removing a file).|
| Client_Nanoflow | Logs messages related to nanoflows being executed.|  
| Client_NanoflowDebugger | Logs messages related to different steps and available variables while debugging a nanoflow. |
| Client_Navigation | Logs messages related to the navigation behavior in the app. |
| Client_Network | Logs messages related to the different interactions between the client and runtime over the network. |
| Client_OTA | Logs messages related to the state and phases of over-the-air updates by Mendix OTA. |
| Client_SelectiveSync | Logs messages related to selective synchronization, like the different synchronization phases, the count of objects which have been synchronized, sync duration, and more. |
| Client_Startup | Logs messages related to client startup phase. |
| Client_Synchronization | Logs messages related to the full synchronization action and its phases. |

## Sending Log Messages to Runtime {#sending-client-log-nodes-to-runtime}

The native client stores logs on the device's memory. When **Enable sending logs to runtime** is selected, the native client will attempt to send logs whenever a quota of 1,000 logs has been reached or after 1 hour from the last sending attempt.

When the app goes to the background or closes, the native client will save buffered log messages on the file system and will restore them once the app is active again.

In this scenario, it will discard older messages so that it will not overflow with too many logs. An additional `info` log message will be added with the number of discarded logs and the timestamps of when these log messages were ignored.

The body of the log message consists of the timestamp in which the message was logged (which differs from the timestamp that is normally shown in the Cloud Portal as that one refers to the timestamps the log messages were collected), a unique session ID so that the log messages can be grouped by device or origin, and the main content of the log message itself. 

## Extending Logging

It is possible to add a custom log handler to react to all log messages, including errors, as they arise. This can be used to integrate with your own custom logging and error handling infrastructure, such as Google Crashlytics.

The following JavaScript code demonstrates how to add and remove a custom log handler. This JavaScript code must be executed on the mobile client, for instance via a JavaScript action or a pluggable widget:

```javascript
import { addLogListener } from "mendix/logging";

// Start handling logs
const removeListener = addLogListener((logLevel, logNode, ...args) => {
    const message = args.map(arg => arg instanceof Error ? arg.message : String(arg)).join(", ");
    alert(`Incoming ${logLevel} log from ${logNode}: ${message}`);
});

// To remove the listener, call the returned function
removeListener();
```
