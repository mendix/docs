---
title: "SAP Logging Connector"
url: /appstore/modules/sap/sap-logger/
weight: 49
description: "The connector which formats logs for the Kibana dashboard"
aliases:
    - /partners/sap/sap-logger/
    - /appstore/connectors/sap/sap-logger/
---

## Introduction

The [SAP Logging](https://marketplace.mendix.com/link/component/110219/) connector allows a Mendix app to output logs in a format supported by the Kibana dashboard provided by the *SAP Business Technology Platform Application Logging* service. Without this connector, logs sent to Kibana will not have the correct structure and log level.

By using this connector, logs will be output in a JSON format with the following fields:

* `msg` – the actual log message
* `level` – the log level
* `written_at` – the log timestamp as reported by the Mendix app
* `written_ts` – the log timestamp which can be used for ordering the logs
* `stacktrace` – the stack trace attached to the log message (if it exists)

In addition, the Connector supports multiline log messages.

## Getting the SAP Logging Connector

To use the [SAP Logging](https://marketplace.mendix.com/link/component/110219/) connector, you need to import it into your app from the Marketplace. For more information on importing modules from the Marketplace, see [How to Use Marketplace Content](/appstore/use-content/).

## Using the Connector

To format all the log messages, the SAP Logging Connector needs to be initialized during the startup of the Mendix application<sup><small>[1]</small></sup>.

To initialize the connector, do the following:

1. Open **App** > **Settings** in the **App Explorer**.
2. Switch to the **Runtime** tab.
3. Go to the **After startup** microflow by clicking **Show** next to the **After startup** microflow:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-logger/logger_project_runtime_show_startup.png" alt="Runtime show After startup microflow" class="no-border" >}}

    {{% alert color="info" %}}If there's no existing microflow (as indicated by the text `(none)`, instead of a microflow name), click **Select…** and create a new microflow by clicking **New**:<br/>   
    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-logger/logger_project_runtime_nostartup.png" alt="Runtime no After Startup" class="no-border" >}}
    {{% /alert %}}

4. In the **App Explorer**, drag and drop the **RegisterSubscriber** action from the **SapApplicationLogs** > **USE_ME** folder at the end of the *After startup* microflow:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-logger/logger_drag_component.png" alt="Drag logging subscriber into After startup microflow" class="no-border" >}}

5. Double-click the **RegisterSubscriber** action make sure that **Log level** is set to the constant *SapLogLevel*:

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-logger/logger_edit_action.png" alt="log level is set to SapLogLevel" class="no-border" >}}
    
6. Edit the constant **SapLogLevel** to select the minimum log level which you want to send to the *SAP Business Technology Platform Application Logging service*. The supported log levels (case-insensitive) are `Debug`, `Trace`, `Info`, `Warning`, `Error`, and `Critical`.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/sap-logger/edit_log_level_constant.png" alt="SapLogLevel is set to Info" class="no-border" >}}

Now, when the application is started, it will produce logs in the JSON format supported by Kibana.

## Notes

* Due to technical limitations, the **SAP Logging Connector** is activated with a 5 second delay. This means that logging configuration is updated after the *RegisterSubscriber* action is completed.
* The *RegisterSubscriber* action checks to see if the Mendix application is running in an SAP environment with the *SAP Business Technology Platform Application Logging* service. If the *SAP Business Technology Platform Application Logging* service cannot be found, *RegisterSubscriber* assumes that the app is running locally and doesn't change the logging configuration.
* When log messages are generated rapidly, it is possible that Kibana will display them in the wrong order. The `written_at` field can be used to sort the log messages.
