---
title: "Datadog for the Mendix Cloud"
url: /developerportal/operate/datadog-metrics/
weight: 20
description: "How to configure the Mendix Cloud to enable monitoring and analysis with Datadog."
tags: ["Datadog", "Mendix Cloud", "monitoring", "analysis"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

[Datadog](https://www.datadoghq.com/) is a monitoring and analysis tool for cloud applications, providing monitoring of servers, databases, tools, and services through a SaaS-based data analytics platform. This document explains how to configure your Mendix Cloud app to send data to Datadog to provide additional monitoring.

{{% alert color="info" %}}
Datadog logging and application metrics are supported in Mendix version 7.15 and above.
{{% /alert %}}

{{% alert color="info" %}}
For support on other cloud deployment options, such as Private Cloud, refer to their dedicated [documentation pages](/developerportal/deploy/private-cloud-monitor/).
{{% /alert %}}

For more information on the data you can send to Datadog, see [Monitoring Your Mendix Apps with an APM Tool](/developerportal/operate/monitoring-with-apm/)

## 2 Setting Up Datadog For Your Mendix App

### 2.1 Datadog API Key {#datadog-api-key}

To make use of Datadog you will need a Datadog API key. If you already use Datadog, skip to the [Existing Datadog User](#existing-datadog-user) section to learn how to get one.

#### 2.1.1 New Datadog User

If you are new to Datadog, you will need to get an account first.

1. Go to the Datadog site (for example, [https://www.datadoghq.com/](https://www.datadoghq.com/)) and choose **GET STARTED FREE**.
2. Enter your Datadog account details. Once you have entered your details you cannot continue until you have set up your agent.
3. Select one of the installation instructions presented on the *Install your first Datadog Agent* page.
4. Copy the value of the api key shown in the install script. This can have a different name, depending on the agent being installed – for example `api-key`, `datadog_api_key`, `DD_API_KEY`, and so forth.

    {{< figure src="/attachments/developerportal/operate/metrics/datadog-metrics/dd-api-key.png" alt="Agent script shows your API key" >}}

5. You now need to use this API key with your app: see [Connect Node to Datadog](#connect-node).

#### 2.1.2 Existing Datadog User{#existing-datadog-user}

To find your existing API key, or to request a new one for your app, do the following:

1. Login to your Datadog account.
2. Go to the **Integrations > API** screen.

    {{< figure src="/attachments/developerportal/operate/metrics/datadog-metrics/datadog-integrations-api.png" alt="Datadog site: navigation to Integration, API" >}}

3. Copy an existing **API Key** or create a new one.

    {{< figure src="/attachments/developerportal/operate/metrics/datadog-metrics/datadog-api=keys.png" alt="Datadog site: API Keys page" >}}

4. For more information on Datadog API keys, see the following page on the Datadog site: [How do I reset my Application Keys](https://docs.datadoghq.com/account_management/faq/how-do-i-reset-my-application-keys/) and related documentation.

### 2.2 Connect Node to Datadog{#connect-node}

To send your runtime information to Datadog, you need to provide the Datadog API key to your environment.

1. Go to the **Environments** page of your app in the *Developer Portal*.
2. Click **Details** to select the environment you wish to monitor with Datadog. 
3. Open the **Runtime** tab.
4. Add a **Custom Environment Variable**.
5. Select **DD_API_KEY** from the *Name* drop-down.

    {{< figure src="/attachments/developerportal/operate/metrics/datadog-metrics/environment-variable-dd-api-key.png" alt="Dropdown containing custom environment variable names" >}}

6. Enter the Datadog **API key**, obtained in the [Datadog API Key](#datadog-api-key) section, above, as the *Value* of the Environment Variable.
7. Add a second **Custom Environment Variable**:

    * **Name**: *DD_LOG_LEVEL*
    * **Value**: *INFO*

    This will ensure that some messages are sent from the Mendix Datadog agent to Datadog – for example, that the agent has started. You can change the log level later once you have confirmed that Datadog is receiving them. See [Log Levels](#log-levels), below for more information on valid values for this custom environment variable.
    
    {{% alert color="warning" %}}The variable *DD_LOG_LEVEL* defines the log level of the log messages sent to Datadog via the Datadog Agent. The variable does **not** define what is logged by the Mendix application itself. See [Set Log Levels](/howto/monitoring-troubleshooting/log-levels/) for information on how to set the log levels in the application.
    {{% /alert %}}

8. By default, the Datadog integration defaults to the US region (datadoghq.com). If you want to use a Datadog site which is another region, set the `DD_SITE` environment variable to the required site. For example, for the EU Datadog site, set `DD_SITE` to `datadoghq.eu`.

9. Return to the **Environments** page for your app and *Deploy* or *Transport* your app into the selected environment.

    {{% alert color="warning" %}}Your app must be **redeployed** before it is started as additional dependencies need to be included.<br/><br/>Restarting the app is not sufficient to start sending data to Datadog.{{% /alert %}}
    
### 2.3 Install the Mendix integration{#install-integration}

In the Datadog marketplace, there is an integration containing an example dashboard for monitoring your Mendix apps. This dashboard shows what metrics are available for your Mendix app and how you can display them. You can use this dashboard as a starting point for your own dashboard: you can customize it by adding or removing metrics and changing the way they are displayed.

Once you have connected your node to Datadog, you can install the Mendix integration from the Datadog Marketplace by doing the following:

1. Sign in to your Datadog account.
2. Go to **Integrations > Marketplace**.
3. Search for *Mendix*. You can also find the integration [here](https://app.datadoghq.eu/marketplace/integration/mendix?search=mendix).
4. Click **Install Integration** to install the integration.
5. Go to **Dashboards > Dashboard List** and open the *Mendix Application Overview* dashboard.
6. Select a Mendix app, environment, and instance on the top left to view data.

If you want to customize the dashboard you should clone it and modify the clone. Alternatively, you can build your own dashboard from scratch.

## 3 Tagging Metrics for Datadog

To help you with analyzing your app metrics as described in the [App Metrics](/developerportal/operate/monitoring-with-apm/#app-metrics) section of *Monitoring Your Mendix Apps with Saas*, Mendix adds tags to metrics from microflows and activities when using Datadog.

### 3.1 Request Handler Tags

In Datadog, each request handler metric is also tagged with `resource:{resource_name}` to indicate which resource was being requested.

### 3.2 Microflow Tags

Each metric from a microflow will be tagged with the `microflow:{microflow_name}` tag which indicates which microflow the metric came from. The microflow name is in the format `{module}.{microflow}`.

This can help you to target long-running microflows for improvement, if required.

### 3.3 Activity Tags

All activities reported to Datadog by Mendix will have the tag `activity:{activity_name}` and `microflow:{microflow_name}` to indicate which activity and microflow the metric came from.

The activity name will be one of the following activities which are reported:

* CastObject
* ChangeObject
* CommitObject
* CreateObject
* DeleteObject
* RetrieveObject
* RollbackObject
* AggregateList
* ChangeList
* ListOperation
* JavaAction
* Microflow
* CallRestService
* CallWebService
* ImportWithMapping
* ExportWithMapping

This information can be used during performance optimization. Even when you cannot identify the exact activity (for example, if there are several different *retrieveObject* activities in the same microflow), you can still use this information to identify which activities might be related to trends in performance, or to compare performance between different versions or environment configurations.

### 3.4 Custom Tags

If you use Datadog to monitor more than one app and environment you will not be able to tell which app or environment these metrics apply to. To identify the metrics for your app and environment in Datadog, you need to add tags for the app name and environment.

Our recommendation is that you use the following tags:

* app:{app_name} – this enables you to identify all metrics sent from your app (for example, **app:customermanagement**)
* env:{environment_name} – this enables you to identify metrics sent from a particular environment so you can separate out production metrics from test metrics (for example, **env:accp**)

To set these tags, do the following:

1. Go to the **Environments** page of your app in the *Developer Portal*.
2. Click **Details** to select an environment you are monitoring with Datadog. 
3. Open the **Tags** tab.
4. Add a **Tag** – this is the string which is sent to Datadog as a tag.
    {{< figure src="/attachments/developerportal/operate/metrics/datadog-metrics/set-tags.png" alt="Example metric showing tags in Datadog" >}}
5. **Restart** the application.

Setting these values for your app means that all metrics from this environment of your app will have these tags. For example, the tags for mx.microflow.time.avg for this set of metrics include **app:customermanagement** and **env:accp**.

{{< figure src="/attachments/developerportal/operate/metrics/datadog-metrics/datadog-summary-tags.png" alt="Example metric showing tags in Datadog" >}}

{{% alert color="info" %}}
You can add more tags if you want, but note that Datadog's charges include an element for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) as described on the Datadog site.
{{% /alert %}}

## 4 Multi-Instance metrics {#multi-instance-metrics}

You can view metrics for multiple instances of an application on the Datadog dashboard:

* Navigate to the [Metrics Explorer](https://docs.datadoghq.com/metrics/explorer/#overview) on the Datadog Dashboard.
* On the top part of the page, in the filter form, search a metric. 
* In the field `from` specify environment id of an application in the format: `application_name:<environment id>`.
* In the field `avg by` search `instance_index`.

If the app has more then one instance you will see lines on the graph for each instance.  

## 5 Additional Information{#additional-info}

### 5.1 Log Levels (DD_LOG_LEVEL){#log-levels}

The **DD_LOG_LEVEL** sets the level for which log messages *from the Mendix Datadog agent* will be sent to the Mendix application logs. It does not affect the [log level set in your app](/howto/monitoring-troubleshooting/log-levels/). Valid values are:

* CRITICAL
* ERROR
* WARNING
* INFO
* DEBUG

### 5.2 Datadog Regions (DD_SITE)

The valid values for **DD_SITE** are:

* datadoghq.com
* datadoghq.eu

### 5.3 Java Metrics

In addition to the standard metrics available to all monitoring tools, Datadog also provides metrics from the runtime, using the prefix `jmx`. These are provided via the [JMX integration](https://docs.datadoghq.com/integrations/java/?tab=host) of Datadog.

### 5.4 Database Disk Storage Availability

You can decide whether a metric for the disk storage size available to the database is sent to Datadog. To disable this metric, set **DATADOG_DATABASE_DISKSTORAGE_METRIC** to *false*.

*Default value: true*

### 5.5 Email Address Redaction{#redact-emails}

Email addresses are automatically redacted before log entries are sent to Datadog. To disable this redaction, set **DATADOG_LOGS_REDACTION** to *false*.

*Default value: true*

### 5.6. Rate and Count Database Metrics{#database-metrics}

Datadog sends gauge database metrics to Datadog as a default. Rate and Count metrics are not compatible with the Datadog PostgreSQL integration. You can enable these additional metrics by setting **DATADOG_DATABASE_RATE_COUNT_METRICS** to *true*.

If these additional metrics are enabled, the rate and counter metrics will be sent to Datadog. The metrics will be suffixed by _rate and_count, respectively, to prevent collisions with the official Datadog metrics. You can change the metric types in the Datadog console to reflect this — see [Modify a metric’s type within Datadog](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#modify-a-metrics-type-within-datadog) in the Datadog documentation for more information. We also set a helpful `interval` tag (10s) which can be used here. The correct type and unit for submitted metrics can be found in the GitHub repo for [Datadog core integrations](https://github.com/DataDog/integrations-core/blob/master/postgres/metadata.csv).

*Default value: false*

### 5.7 System Metrics{#system-metrics}

System metrics are disabled by default as they usually reflect metrics for a host, rather than for a specific container. You can enable these additional metrics by setting **DD_ENABLE_CHECKS** to *true*.

*Default value: false*

### 5.8 Datadog Events Log

The Datadog Events log contains events which come from your app: those are the same events that would appear in the Mendix Console. It does not contain events from the environment.

{{< figure src="/attachments/developerportal/operate/metrics/datadog-metrics/datadog-event-log.png" alt="Example events log" >}}

By default all email addresses contained in log events will be redacted. You can change this – see [Email Address Redaction](#redact-emails), above.

### 5.9 Datadog Agent Not Started

If you configure your app for Datadog but the Datadog agent is not started, the events will be sent to the app log files.

### 5.10 Datadog Issues

If you have any issues related to accessing Datadog, please contact their support here: [Support | Datadog](https://www.datadoghq.com/support/), or by email at [support@datadoghq.com](mailto:support@datadoghq.com).

### 5.11 Metrics on Datadog Usage

Metrics on Datadog can include an additional namespace, **datadog** which contains metrics on Datadog usage.

## 6 Read More

* [Monitor Your Mendix Apps with Datadog](https://www.mendix.com/blog/monitor-your-mendix-apps-with-datadog/) – a Mendix blog about the capabilities of Datadog and, in particular, using Datadog with Mendix
* [Metrics](/developerportal/operate/metrics/)
* [Java Runtime Metrics](https://docs.datadoghq.com/tracing/runtime_metrics/java/) – Datadog documentation
* [Postgres](https://docs.datadoghq.com/integrations/postgres/)  – Datadog documentation
* [System Check](https://docs.datadoghq.com/integrations/system/) – Datadog documentation
