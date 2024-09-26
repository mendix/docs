---
title: "Datadog for Mendix Cloud"
url: /developerportal/operate/datadog-metrics/
weight: 20
description: "How to configure Mendix Cloud to enable monitoring and analysis with Datadog."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

[Datadog](https://www.datadoghq.com/) is a monitoring and analysis tool for cloud applications. It is a SaaS-based data analytics platform that provides monitoring for servers, databases, tools, and services. You can use Datadog for additional monitoring for your apps running on Mendix Cloud.

This document explains how to configure your Mendix Cloud app to send data to Datadog.

For more information on the data you can send to Datadog, see [Monitoring Your Mendix Apps with an APM Tool](/developerportal/operate/monitoring-with-apm/).

{{% alert color="info" %}}
For support on other cloud deployment options, refer to their dedicated documentation. For Private Cloud deployment, for example, see [Monitoring Environments in Mendix for Private Cloud](/developerportal/deploy/private-cloud-monitor/).
{{% /alert %}}

## Setting up Datadog for Your Mendix App

To set up Datadog for your Mendix app, you will follow these steps:

1. Access your Datadog API key.
2. Connect your cloud node to Datadog.
3. Install Datadog's Mendix integration.

Each step is described in detail below.

### Datadog API Key{#datadog-api-key}

To use Datadog with a Mendix app, you need a Datadog API key. If you are new to Datadog, follow the instructions in the [New Datadog User](#new-datadog-user) section, below. If you already use Datadog, skip to the [Existing Datadog User](#existing-datadog-user) section.

{{% alert color="info" %}}For details on Datadog API keys, see [API and Application Keys](https://docs.datadoghq.com/account_management/api-app-keys) on the Datadog site.{{% /alert %}}

#### New Datadog User{#new-datadog-user}

To set up a new Datadog account and access your API key as a new Datadog user, follow these steps:

1. Go to the [Datadog website](https://www.datadoghq.com/) and choose **Get Started Free**.
2. Complete the account setup steps: enter your desired account details, describe your stack, and install a Datadog agent. You must set up an agent to continue, so select one of the installation options presented on the *Install Your First Datadog Agent* page.
3. Copy the value of the API key shown in the installation script. The key name varies depending on the agent you are installing, but it will be something like `api-key`, `datadog_api_key`, or `DD_API_KEY`.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/datadog-metrics/dd-api-key.png" alt="Agent script shows your API key" class="no-border" >}}

4. Follow the instructions in [Connecting Your Node to Datadog](#connect-node), below, to start using the API key with your app.

#### Existing Datadog User{#existing-datadog-user}

To find your existing API key or to request a new key for your app as an existing Datadog user, follow these steps:

1. Log in to your Datadog account.
2. In the navigation menu, click **Go to** to launch the search dialog box. Search for *API Keys*.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/datadog-metrics/datadog-integrations-api.png" alt="API Keys search results" width=400 class="no-border" >}}

3. Copy an existing API key or create a new one.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/datadog-metrics/datadog-api-keys.png" alt="Datadog site: API Keys page" class="no-border" >}}

4. Follow the instructions in [Connecting Your Node to Datadog](#connect-node), below, to start using the API key with your app.

### Connecting Your Node to Datadog{#connect-node}

To send your runtime information to Datadog, you need to provide the Datadog API key to your environment. To do so, follow these steps:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
1. Click **Details** on the environment you wish to monitor with Datadog. 
1. Switch to the **Runtime** tab.
1. Click **Add** in the **Custom Environment Variables** section.
1. In the **Name** field, select **DD_API_KEY**.
    {{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/datadog-metrics/environment-variable-dd-api-key.png" alt="Drop-down list containing custom environment variable names" width=400 class="no-border" >}}

1. In the **Value** field, enter the Datadog API key that you obtained in the [Datadog API Key](#datadog-api-key) section, above.
1. Click **Save**.
1. Return to the **Environments** page for your app and **Deploy** or **Transport** your app into the selected environment.

    {{% alert color="warning" %}}To start sending data to Datadog, you must redeploy your app and then restart it. Just restarting the app is not sufficient because additional dependencies need to be included.{{% /alert %}}
    
### Install the Mendix Integration{#install-integration}

In the Datadog marketplace, there is an integration containing an example dashboard for monitoring your Mendix apps. This dashboard shows what metrics are available for your Mendix app and how you can display them. You can use this dashboard as a starting point for your own dashboard; for example, you can customize it by adding or removing metrics and changing the way they are displayed.

Once you have connected your node to Datadog, you can install the Mendix integration in Datadog by following these steps:

1. Sign in to your Datadog account.
2. Go to **Integrations** and search for *Mendix*.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/datadog-metrics/datadog-mendix-integration.png" alt="" class="no-border" >}}

3. Install the Mendix integration.
4. Go to **Dashboards** > **Dashboard List** and open the **Mendix Application Overview** dashboard.
5. To view data on the dashboard, use the drop-down lists to select a Mendix app, environment, and instance.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/datadog-metrics/mendix-application-overview.png" alt="" class="no-border" >}}

If you want to customize the dashboard, clone it and modify the clone. Alternatively, you can build your own dashboard from scratch.

## Tagging Metrics for Datadog

To help with analyzing your app metrics as described in the [App Metrics](/developerportal/operate/monitoring-with-apm/#app-metrics) section of *Monitoring Your Mendix Apps with an APM Tool*, Mendix adds tags to metrics from microflows and activities when using Datadog.

### Request Handler Tags

In Datadog, each request handler metric is also tagged with `resource:{resource_name}` to indicate which resource was requested.

### Microflow Tags

Each metric from a microflow is tagged with the `microflow:{microflow_name}` tag, indicating which microflow the metric came from. The microflow name is in the format `{module}.{microflow}`.

You can use these tags to target long-running microflows for improvement.

### Activity Tags

All activities reported to Datadog by Mendix have the tag `activity:{activity_name}` and `microflow:{microflow_name}`, indicating which activity and microflow the metric came from.

The activity name will be one of the following reported activities:

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

You can use this information during performance optimization. Even when you cannot identify the exact activity (for example, if there are several different `retrieveObject` activities in the same microflow), you can still use this information to identify which activities might be related to trends in performance. You can also use it to compare performance between different versions or environment configurations.

### Custom Tags

If you use Datadog to monitor more than one app and environment, you will not be able to tell which app or environment these metrics apply to. To identify the metrics for your app and environment in Datadog, you need to add tags for the app name and environment.

Mendix recommends using the following tags:

* `app:{app_name}` (for example, `app:customermanagement`) – this enables you to identify all metrics sent from your app
* `env:{environment_name}` (for example, `env:accp`) – this enables you to identify metrics sent from a particular environment so you can separate out production metrics from test metrics

To set these tags, do the following:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
1. Click **Details** on an environment you are monitoring with Datadog. 
1. Switch to the **Tags** tab
    {{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/datadog-metrics/set-tags.png" alt="Example metric showing tags in Datadog" class="no-border" >}}
1. Click **Add** and type in a string to be sent to Datadog as a tag.
1. Restart your app.

Setting these values for your app causes all metrics from this environment of your app to have these tags. For example, the tags for `mx.microflow.time.avg` for this set of metrics include `app:customermanagement` and `env:accp`.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/datadog-metrics/datadog-summary-tags.png" alt="Example metric showing tags in Datadog" class="no-border" >}}

{{% alert color="info" %}}
You can add more tags if you want, but note that Datadog may charge for custom metrics. For more information, see [Custom Metrics Billing](https://docs.datadoghq.com/account_management/billing/custom_metrics) on the Datadog site.
{{% /alert %}}

## Multi-Instance Metrics{#multi-instance-metrics}

To view metrics for multiple instances of an application on the Datadog dashboard, follow these steps:

1. In Datadog, go to **Metrics** > **Explorer**.
2. In the search form, search for your desired metric.
3. In the **from** field, specify your desired app environment's **Environment ID**. Use the format `application_name:<environment id>`.
4. In the **avg by** field, select **instance_index**.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/datadog-metrics/datadog-metrics-explorer.png" alt="Metrics Explorer search form" class="no-border" >}}

If the app has more than one instance, you will see lines on the graph for each instance.  

## Additional Information{#additional-info}

### Datadog Regions (`DD_SITE`){#dd-regions}

By default, the Datadog integration defaults to the US region (`datadoghq.com`). If you want to use a Datadog site that is in another region, go to the [Custom Environment Variables](/developerportal/deploy/environments-details/#custom-environment-variables) section of your Mendix app environment and add a `DD_SITE` custom environment variable. Set the variable's value to the relevant site. For example, for the EU Datadog site, set `DD_SITE` to `datadoghq.eu`.

The valid values for `DD_SITE` are listed in the **Site Parameter** column of the table on the [Access the Datadog Site](https://docs.datadoghq.com/getting_started/site/#access-the-datadog-site) page in the Datadog documentation.

### Java Metrics

In addition to the standard metrics available to all monitoring tools, Datadog also provides metrics from the runtime, using the prefix `jmx`. These are provided via Datadog's [JMX Integration](https://docs.datadoghq.com/integrations/java/?tab=host).

### Database Disk Storage Availability

You can decide whether a metric for the disk storage size available to the database is sent to Datadog. To disable this metric, create a `DATADOG_DATABASE_DISKSTORAGE_METRIC` custom environment variable and set its value to `false`. (By default, this variable is set to `true`.)

### Email Address Redaction{#redact-emails}

Email addresses are automatically redacted before log entries are sent to Datadog. To disable this redaction, create a `LOGS_REDACTION` custom environment variable and set its value to `false`. (By default, this variable is set to `true`.)

The environment variable `DATADOG_LOGS_REDACTION` is still supported, but it is now deprecated and will be removed in a later version. Its use is not recommended.

### Rate and Count Database Metrics{#database-metrics}

Datadog sends gauge database metrics to Datadog as a default. Rate and count metrics are not compatible with the Datadog PostgreSQL integration. You can enable these additional metrics by creating a `DATADOG_DATABASE_RATE_COUNT_METRICS` custom environment variable and setting its value to `true`. (By default, this variable is set to `false`.)

If these additional metrics are enabled, the rate and counter metrics will be sent to Datadog. These metrics are suffixed by `_rate` and `_count`, respectively, to prevent collisions with the official Datadog metrics. You can change the metric types in the Datadog console to reflect this; for more information, see [Modify a Metric’s Type within Datadog](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#modify-a-metrics-type-within-datadog) in the Datadog documentation. There is also a helpful `interval` tag (10s), which you can use here.

You can find the correct type and unit for submitted metrics in the GitHub repo for [Datadog core integrations](https://github.com/Datadog/integrations-core/blob/master/postgres/metadata.csv).

### System Metrics{#system-metrics}

System metrics are disabled by default as they usually reflect metrics for a host, rather than for a specific container. You can enable these additional metrics by creating a `DD_ENABLE_CHECKS` custom environment variable and setting its value to `true`. (By default, this variable is set to `false`.)

### Datadog Events Explorer

The Datadog [Events Explorer](https://docs.datadoghq.com/service_management/events/explorer/navigate) contains events that come from your app; they are the same events that would appear in the Mendix Console. The Events Explorer does not log events from the environment.

By default, all email addresses contained in log events are redacted. For guidance on how to change this, see [Email Address Redaction](#redact-emails), above.

### Datadog Agent Not Started

If you configure your app for Datadog but the Datadog agent is not started, the events are sent to the app log files.

### Datadog Issues

If you have any issues related to accessing Datadog, contact their support on the [Datadog Support](https://www.datadoghq.com/support/) page or by email at [support@datadoghq.com](mailto:support@datadoghq.com).

### Metrics on Datadog Usage

Metrics on Datadog can include an additional namespace, `datadog`, which contains metrics on Datadog usage.

## Read More

* [Monitor Your Mendix Apps with Datadog](https://www.mendix.com/blog/monitor-your-mendix-apps-with-datadog/) – a Mendix blog about the capabilities of Datadog and using Datadog with Mendix
* [Metrics](/developerportal/operate/metrics/)
* [Java Runtime Metrics](https://docs.datadoghq.com/tracing/runtime_metrics/java/) – Datadog documentation
* [Postgres](https://docs.datadoghq.com/integrations/postgres/) – Datadog documentation
* [System Check](https://docs.datadoghq.com/integrations/system/) – Datadog documentation
