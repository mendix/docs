---
title: "Monitoring Private Mendix Platform"
linktitle: "Monitoring"
url: /private-mendix-platform/monitoring/
description: "Documents the recommended monitoring stack for Private Mendix Platform."
weight: 30
---

## Introduction

Grafana, Loki, and Prometheus are the recommended monitoring stack for Kubernetes-based services like Private Mendix Platform. The customer is responsible for configuring the stack. For more information, see [Grafana Integration for Private Mendix Platform](/private-mendix-platform/grafana/).

## Logs & Events

From the **Logs** page, you can access the logs produced by your app. For information about configuring 

To access the logs, perform the following steps:

1. Click on your app on the Private Mendix Platform [Home page](/private-mendix-platform/reference-guide/common/signin/).
2. In the left navigation pane, click **Monitoring > Logs & Events**.
3. Select the environment for which you want to view the logs.

You can filter the results by the following properties:

* **Container** - The container instance.
* **Retrieve last** - The number of results to retrieve.
* **Timespan** - The date and time range to display.
* **Filter by Log Level** - The highest log level to display. The following log levels are available:

    * **Trace** - Provides highly detailed information. Trace level messages are written only to logs.
    * **Debug** - Provides detailed information, typically of interest only when diagnosing problems.
    * **Info** - Confirms that things are working as expected.
    * **Warning** - Indicates that something unexpected happened or warns about an upcoming problem (for example, *disk space low*). The application is still working as expected.
    * **Error** - Indicates a serious problem that prevented the application from performing some function.
    * **Critical** - Indicates that a serious error has occurred; the application may be unable to continue running.

* **Keyword** - A keyword to use for filtering.

### Help Me Function

On the **Logs & Events** page, you can also download the **Help Me** package, containing diagnostic logs which you can attach to a support ticket if needed. For more information about the **Help Me** function, see [Private Mendix Platform Events and the Help Me Function](/private-mendix-platform/support-help-me/).

## Metrics

The **Metrics** page contains detailed graphs about your app and its environment. You can use this page to monitor the performance and health of your app; for example, you can track the usage growth of your app or debug performance problems.

These statistics are displayed as trends over time. 

To view the graphs on **Metrics** page, perform the following steps:

1. Open your app in the Private Mendix Platform portal.
2. In the left navigation pane, click **Monitoring > Metrics**.
3. Select the environment and pod.

You can filter the results by the following properties:

* **Container** - The container instance.
* **Retrieve last** - The number of results to retrieve.
* **Timespan** - The date and time range to display.
* **Filter by Log Level** - The highest log level to display. The following log levels are available:

    * **Trace** - Provides highly detailed information. Trace level messages are written only to logs.
    * **Debug** - Provides detailed information, typically of interest only when diagnosing problems.
    * **Info** - Confirms that things are working as expected.
    * **Warning** - Indicates that something unexpected happened or warns about an upcoming problem (for example, *disk space low*). The application is still working as expected.
    * **Error** - Indicates a serious problem that prevented the application from performing some function.
    * **Critical** - Indicates that a serious error has occurred; the application may be unable to continue running.

* **Keyword** - A keyword to use for filtering.

## Webhooks {#webhooks}

Webhooks allow you to send information about your licensed Mendix app deployed to Private Mendix Platform to an external app or workflow. You can use them to trigger a step in an automated [Build](/private-mendix-platform/reference-guide/admin/system/#build-steps) or [Deployment](/private-mendix-platform/reference-guide/admin/system/#deploy-steps) pipeline.

### Creating a New Webhook {#setting-up}

To set up a webhook, do the following:

1. On the **Monitoring > Webhooks** page, click **New Webhook**.
2. Enter the following information:

    * **Webhook Name** – This is a name which you can use to identify the webhook.
    * **URL** – This is the endpoint that will receive the payload when one of the event types selected in **Available Events** occurs.
    * **Validation Secret** – This is a secret that is shared with the endpoint to verify that it has been triggered by this webhook. If you leave this blank, a secret is generated automatically. You can see the generated value any time you return to edit the webhook.
    * **Available Events** – This is the event (or events) that triggers the webhook to send information to the endpoint. Company administrators can activate or deactivate specific event types in the **Webhooks > Event Management** tab of administrator menu. For more information, see [Company Administrators: Webhooks](/private-mendix-platform/reference-guide/admin/company/#webhooks).
    * **Custom Headers** – This is a key-value pair that is sent as an HTTP header to the endpoint. Company administrators can configure a predefined custom header in the **Webhooks > Preset Headers** tab of administrator menu. For more information, see [Company Administrators: Webhooks](/private-mendix-platform/reference-guide/admin/company/#webhooks).

You can edit or delete an existing webhook by clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the **Action** column for the webhook you want to change, and then selecting **Edit** or **Delete**.