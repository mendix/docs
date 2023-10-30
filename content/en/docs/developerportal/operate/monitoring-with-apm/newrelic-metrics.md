---
title: "New Relic for Mendix Cloud"
url: /developerportal/operate/newrelic-metrics/
weight: 20
description: "How to configure Mendix Cloud to enable monitoring and analysis with New Relic."
tags: ["New Relic", "Mendix Cloud", "monitoring", "analysis"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

[New Relic](https://www.newrelic.com/) is a monitoring and analysis tool for cloud applications, providing monitoring of servers, databases, tools, and services through a SaaS-based data analytics platform.
This document explains how to configure your Mendix Cloud app to send data to New Relic to provide additional monitoring.

{{% alert color="info" %}}
New Relic logging and application metrics are supported in Mendix 9.7 and above.
{{% /alert %}}

{{% alert color="info" %}}
For support on other cloud deployment options, such as Private Cloud, refer to their dedicated [documentation pages](/developerportal/deploy/private-cloud-monitor/).
{{% /alert %}}

For more information on the data you can send to New Relic, see [Monitoring Your Mendix Apps with an APM Tool](/developerportal/operate/monitoring-with-apm/)

## 2 Setting Up New Relic For Your Mendix App

### 2.1 New Relic API Key {#newrelic-api-key}

To make use of New Relic you will need a New Relic API key.

To find an existing key, or to request a new one for your app, do the following:

1. Login to your New Relic account.
2. In the bottom left corner, select **your name > API keys**.
3. Copy an existing **API Key** or create a new one. For this purpose, New Relic recommends the *License* type.
4. For more information on New Relic API keys, see the following page on the New Relic site: [New Relic API keys](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).

### 2.2 Connect Node to New Relic{#connect-node}

To send your runtime information to New Relic, you need to provide the New Relic API key to your environment.

1. Go to the **Environments** page of your app in the *Developer Portal*.
2. Click **Details** to select the environment you wish to monitor with New Relic. 
3. Open the **Runtime** tab.
4. Add **Custom Environment Variable**s.
    1. `NEW_RELIC_LICENSE_KEY`

        License key or API key from New Relic. Obtained in the [New Relic API Key](#newrelic-api-key) section.

    2. `NEW_RELIC_LOGS_URI`

        URI for the New Relic's Logs API. For more, check: [New Relic Regions](#uri-regions). Example: `https://log-api.eu.newrelic.com/log/v1`.

    3. `NEW_RELIC_METRICS_URI`
       
        URI for the New Relic's Metrics API. For more, check: [New Relic Regions](#uri-regions). Example: `https://metric-api.eu.newrelic.com/metric/v1`. 

    4. `NEW_RELIC_APP_NAME`

        Optional. Mendix Application name shown on New Relic's APM & Services.

        *Default: domain host name*
   
    5. `LOGS_REDACTION`

       Optional. Email addresses are automatically redacted before log entries are sent to New Relic. To disable this redaction, set `LOGS_REDACTION` to `false`.

       *Default: `true`*
   

5. Return to the **Environments** page for your app and *Deploy* or *Transport* your app into the selected environment.

    {{% alert color="warning" %}}Your app must be **redeployed** before it is started as additional dependencies need to be included.<br/><br/>Restarting the app is not sufficient to start sending data to New Relic.{{% /alert %}}
    
## 3 Tagging Metrics for New Relic

To help you with analyzing your app metrics as described in the [App Metrics](/developerportal/operate/monitoring-with-apm/#app-metrics) section of *Monitoring Your Mendix Apps with SaaS*, Mendix adds tags to metrics from microflows and activities when using New Relic.

### 3.1 Metadata

In addition to the runtime application logs, the following JSON-formatted metadata is automatically sent to New Relic:

* `environment_id` - unique identifier of the environment
* `instance_index` - number of the application instance
* `hostname` - name of the application host
* `application_name` - default application name, retrieved from domain name
* `model_version` - model version of the Mendix runtime
* `runtime_version` - version of the Mendix runtime

You can filter the data by these fields.

### 3.2 Custom tags

If you use New Relic to monitor more than one app and environment you will not be able to tell which app or environment these metrics apply to. To identify the metrics for your app and environment in New Relic, you need to add tags for the app name and environment.

Our recommendation is that you use the following tags:

* `app:{app_name}` – this enables you to identify all metrics sent from your app (for example, `app:customermanagement`)
* `env:{environment_name}` – this enables you to identify metrics sent from a particular environment so you can separate out production metrics from test metrics (for example, **env:accp**)

To set these tags, do the following:

1. Go to the **Environments** page of your app in the *Developer Portal*.
2. Click **Details** to select an environment you are monitoring with New Relic. 
3. Open the **Tags** tab.
4. Add a **Tag** – this is the string which is sent to New Relic as a tag.
5. **Restart** the application.

Setting these values for your app means that all metrics from this environment of your app will have these tags. For example, the tags for mx.microflow.time.avg for this set of metrics include **app:customermanagement** and **env:accp**.

## 4 Additional Information{#additional-info}

### 4.1 New Relic Regions{#uri-regions}

The valid values for **NEW_RELIC_LOGS_URI** and **NEW_RELIC_METRICS_URI** are listed at [Send your logging data with our Log API](https://docs.newrelic.com/docs/logs/log-api/introduction-log-api/) and [Introduction to the Metric API
](https://docs.newrelic.com/docs/data-apis/ingest-apis/metric-api/introduction-metric-api/) in the New Relic documentation.

### 4.2 New Relic Issues

If you have any issues related to accessing New Relic, please contact their support here: [Support | New Relic](https://support.newrelic.com/s/).

## 5 Read More

* [Metrics](/developerportal/operate/metrics/)
* [New Relic Java Agent](https://docs.newrelic.com/docs/apm/agents/java-agent/getting-started/introduction-new-relic-java/) - New Relic documentation
* [JVM metrics](https://docs.newrelic.com/docs/apm/agents/java-agent/features/jvms-page-java-view-app-server-metrics-jmx/) – New Relic documentation
