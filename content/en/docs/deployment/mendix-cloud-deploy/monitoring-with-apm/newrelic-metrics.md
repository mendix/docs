---
title: "New Relic for Mendix Cloud"
url: /developerportal/operate/newrelic-metrics/
weight: 20
description: "How to configure Mendix Cloud to enable monitoring and analysis with New Relic."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

[New Relic](https://www.newrelic.com/) is a monitoring and analysis tool for cloud applications. It provides monitoring of servers, databases, tools, and services through a SaaS-based data analytics platform.

This document explains how to configure your Mendix Cloud app to send data to New Relic to provide additional monitoring.

{{% alert color="info" %}}
New Relic logging and application metrics are supported in Mendix 9.7 and above.
{{% /alert %}}

{{% alert color="info" %}}
For support on other cloud deployment options, such as Private Cloud, refer to their dedicated documentation. For Private Cloud deployment, for example, see [Monitoring Environments in Mendix for Private Cloud](/developerportal/deploy/private-cloud-monitor/).
{{% /alert %}}

For more information on the data you can send to New Relic, see [Monitoring Your Mendix Apps with an APM Tool](/developerportal/operate/monitoring-with-apm/).

## Setting up New Relic for Your Mendix App

### New Relic API Key {#newrelic-api-key}

To make use of New Relic, you need a New Relic API key. To find an existing key or request a new one for your app, follow these steps:

1. Log in to your New Relic account.
2. Open the user menu options by clicking your name in the lower-left corner. Then click **API Keys**.
3. Copy an existing API key or create a new one. For this purpose, New Relic recommends the **License** type.

{{% alert color="info" %}}For more information, see [New Relic API keys](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).{{% /alert %}}

### Connecting Your Node to New Relic{#connect-node}

To send your runtime information to New Relic, you must provide the New Relic API key to your environment.

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
1. Click **Details** on the environment you wish to monitor with New Relic. 
1. Switch to the **Runtime** tab.
1. Add the following **Custom Environment Variables**:
    | Variable | Description |
    | --- | --- |
    | `NEW_RELIC_LICENSE_KEY` | License key or API key from New Relic. Obtained in the [New Relic API Key](#newrelic-api-key) section.
    | `NEW_RELIC_LOGS_URI` | URI for the New Relic's Logs API. For more information, consult [New Relic Regions](#uri-regions). Example: `https://log-api.eu.newrelic.com/log/v1`. |
    | `NEW_RELIC_METRICS_URI` | URI for the New Relic's Metrics API. For more information, consult [New Relic Regions](#uri-regions). Example: `https://metric-api.eu.newrelic.com/metric/v1`. |
    | `NEW_RELIC_APP_NAME` (optional) | Mendix Application name shown on New Relic's APM & Services. Default: Domain host name. |
    | `LOGS_REDACTION` (optional) | Email addresses are automatically redacted before log entries are sent to New Relic. To disable this redaction, set `LOGS_REDACTION` to `false`. Default: `true`. |

1. Return to the **Environments** page for your app and **Deploy** or **Transport** your app into the selected environment.

    {{% alert color="warning" %}}To start sending data to New Relic, you must redeploy your app and then restart it. Just restarting the app is not sufficient because additional dependencies need to be included.{{% /alert %}}
    
## Tagging Metrics for New Relic

To help you with analyzing your app metrics as described in the [App Metrics](/developerportal/operate/monitoring-with-apm/#app-metrics) section of *Monitoring Your Mendix Apps with an APM Tool*, Mendix adds tags to metrics from microflows and activities when using New Relic.

### Metadata

In addition to the runtime application logs, the following JSON-formatted metadata is automatically sent to New Relic:

* `environment_id` – unique identifier of the environment
* `instance_index` – number of the application instance
* `hostname` – name of the application host
* `application_name` – default application name, retrieved from the domain name
* `model_version` – model version of the Mendix runtime
* `runtime_version` – version of the Mendix runtime

You can filter the data by these fields.

### Custom Tags

If you use New Relic to monitor more than one app and environment, you will not be able to tell which app or environment these metrics apply to. To identify the metrics for your app and environment in New Relic, you need to add tags for the app name and environment.

Mendix recommends using the following tags:

* `app:{app_name}` (for example, `app:customermanagement`) – this enables you to identify all metrics sent from your app
* `env:{environment_name}` (for example, `env:accp``) – this enables you to identify metrics sent from a particular environment so you can separate out production metrics from test metrics

To set these tags, do the following:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
1. Click **Details** on an environment you are monitoring with New Relic. 
1. On the **Tags** tab, add a tag. This is the string that is sent to New Relic as a tag.
1. Restart the app.

Setting these values for your app causes all metrics from this environment of your app to have these tags. For example, the tags for `mx.microflow.time.avg` for this set of metrics include `app:customermanagement` and `env:accp`.

## Additional Information{#additional-info}

### New Relic Regions{#uri-regions}

The valid values for `NEW_RELIC_LOGS_URI` and `NEW_RELIC_METRICS_URI` are listed at [Send Your Logging Data with Our Log API](https://docs.newrelic.com/docs/logs/log-api/introduction-log-api/) and [Introduction to the Metric API](https://docs.newrelic.com/docs/data-apis/ingest-apis/metric-api/introduction-metric-api/) in the New Relic documentation.

### New Relic Issues

If you have any issues related to accessing New Relic, contact [New Relic Support](https://support.newrelic.com/s/).

## Read More

* [Metrics](/developerportal/operate/metrics/)
* [New Relic Java Agent](https://docs.newrelic.com/docs/apm/agents/java-agent/getting-started/introduction-new-relic-java/) – New Relic documentation
* [JVM metrics](https://docs.newrelic.com/docs/apm/agents/java-agent/features/jvms-page-java-view-app-server-metrics-jmx/) – New Relic documentation
