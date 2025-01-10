---
title: "Monitoring Your Mendix Apps with an APM Tool"
linktitle: "Monitoring with APM"
url: /developerportal/operate/monitoring-with-apm/
weight: 10
description: "How to use an APM (application performance monitoring) tool to monitor your Mendix Cloud app."
---

## Introduction

There are several application performance monitoring (APM) tools for cloud applications available through a software as a service (SaaS) based data analytics platform. These APM tools provide comprehensive monitoring of servers, databases, tools, and services.

Mendix provides out-of-the-box configuration to use Datadog, AppDynamics, Dynatrace, Splunk Cloud Platform, and New Relic to provide additional monitoring for your Mendix Apps running on Mendix Cloud.

{{% alert color="info" %}}
[AppDynamics](https://www.appdynamics.com/) application monitoring is fully supported in Mendix 9.7 and above. For older supported versions, only the basic AppDynamics Java Agent metrics are available, along with the `postgresql` and `mx.client` namespaces.

[Dynatrace](https://www.dynatrace.com/) OneAgent is used to collect metrics. Additionally, in Mendix 9.7 and above, custom application runtime and database metrics are supported.

[Datadog](https://www.datadoghq.com/) logging and application metrics are supported in Mendix 7.15 and above.

[Splunk Cloud Platform](https://www.splunk.com/en_us/products/splunk-cloud-platform.html) is supported for analyzing runtime application logs.

[New Relic](https://www.newrelic.com/) logging and application metrics are supported in Mendix 9.7 and above. Custom application runtime and database metrics are supported.
{{% /alert %}}

This document explains what information can be provided to a SaaS-based data analytics platform.

For details on how to add a specific APM tool to your app, see one of the following documents:

* [AppDynamics for Mendix Cloud](/developerportal/operate/appdynamics-metrics/)
* [Datadog for Mendix Cloud](/developerportal/operate/datadog-metrics/)
* [Dynatrace for Mendix Cloud](/developerportal/operate/dynatrace-metrics/)
* [Splunk for Mendix Cloud](/developerportal/operate/splunk-metrics/)
* [New Relic for Mendix Cloud](/developerportal/operate/newrelic-metrics/)

{{% alert color="info" %}}
These third-party integrations require an agent to run alongside your runtime container, gathering and sending metrics. This agent consumes resources from your [cloud resource pack](/developerportal/deploy/mendix-cloud-deploy/#resource-pack).
{{% /alert %}}

{{% alert color="info" %}}
For support on other cloud deployment options, such as Private Cloud, refer to their dedicated documentation. For Private Cloud deployment, for example, see [Monitoring Environments in Mendix for Private Cloud](/developerportal/deploy/private-cloud-monitor/).
{{% /alert %}}

## What Information Can Mendix Supply to a SaaS-Based Data Analytics Platform?

{{% alert color="info" %}}
The integration with Splunk Cloud Platform sends only runtime application logs. It does not include other monitoring information.
{{% /alert %}}

Mendix provides two types of monitoring data:

* Data from the Mendix Runtime, the Java Virtual Machine (JVM), the database, and the SaaS (for example, Cloud Foundry) environment – this is described in [Environment Metrics](#environment), below
* Data from within the Mendix app itself – this is described in [App Metrics](#app-metrics), below

## Environment Metrics{#environment}

Once you have configured your data analytics platform for your app, it will automatically send information about the environment in which your app is running.

### Environment Metrics Namespaces

The metrics from your app's environment are supplied in the following namespaces:

* commons.pool2 – database connection pool metrics
* jetty – metrics from the ingress controller of the app
* jvm – metrics from the Java virtual machine in which the Mendix runtime runs
* postgresql – database metrics specific to PostgreSQL databases
* system – metrics from the base system running on the platform or PaaS — in Datadog, these are disabled by default but can be enabled using the [`DD_ENABLE_CHECKS`](/developerportal/operate/datadog-metrics/#system-metrics) environment variable.

Many of these metrics are described in more detail in [Metrics – Mendix Runtime](/refguide/metrics/).

### Useful Metrics for Mendix Apps

The following metrics are useful when monitoring the performance of your Mendix app:

* mx.database.diskstorage_size
* jvm.heap_memory
* jvm.heap_memory_committed
* jvm.heap_memory_init
* jvm.heap_memory_max
* jvm.non_heap_memory
* jvm.non_heap_memory_committed
* jvm.non_heap_memory_init
* jvm.non_heap_memory_max
* postgresql.connections
* postgresql.database_size
* postgresql.max_connections
* postgresql.percent_usage_connections

Note that the absolute values are often not useful, but looking at trends over time can indicate performance issues or future action that might be required. Some of these trends are similar to those described in [Metrics](/developerportal/operate/metrics/).

## App Metrics {#app-metrics}

Mendix provides logging of various actions within the app. These are sent to your data analytics platform with the namespace `mx`. Timing values are sent in milliseconds.

By default, Mendix only passes request handler activity, but you can configure it to provide metrics for microflows and activities as well. You can find how to do this in [Customizing the Metrics Agent](#customizing), below.

### What Metrics Can You Get From Your App?

#### Request Handler Metrics

Unless you customize your metrics agent, the metrics agent provides metrics for all your request handlers. The metrics provided are listed below:

##### mx.soap.time

This is a timing/histogram value for SOAP requests.

##### mx.odata.time

This is a timing/histogram value for OData requests.

##### mx.rest.time

This is a timing/histogram value for REST requests.

##### mx.client.time

This indicates the time it takes to handle a request to a request handler used by the web UI. You can get results for all of the following types of requests:

* REST, ODATA, SOAP **doc** requests
* `/xas` requests (general queries for data in data grids, sending changes to the server, and triggering the execution of microflows)
* File upload/download requests
* `/p` requests

This metric helps you to gain an overview of how long users have to wait for individual requests; hence, it indicates overall application performance.

#### Microflow Metrics

For the microflows you select (see [Customizing the Metrics Agent](#customizing), below), the metrics agent provides the following metrics relating to the time the microflow takes to run:

* mx.microflow.time.avg
* mx.microflow.time.count
* mx.microflow.time.max
* mx.microflow.time.median
* mx.microflow.time.95percentile

#### Activity Metrics

For the activities you select (see [Customizing the Metrics Agent](#customizing), below), the metrics agent provides the following metrics:

* mx.activity.time.avg
* mx.activity.time.count
* mx.activity.time.max
* mx.activity.time.median
* mx.activity.time.95percentile

### Customizing the Metrics Agent{#customizing}

By default, Mendix passes a log of all request handler activity to your data analytics platform and no other information. However, by using JSON to configure the metrics agent, you can add logs of microflows and activities within microflows, and restrict which request handler calls are sent.

#### Format of Metrics Agent Configuration{#mx-agent-format}

<!-- Changes to this should be reflected in "Configuring the Java Instrumentation Agent" in /developerportal/deploy/private-cloud-monitor,
updating relative links -->

To specify which request handlers, microflows, and activities are reported, use a JSON configuration with the following format. (Note that this is the syntax, not an example of this custom setting.)

```json
{
  "requestHandlers": [
    {
      "name": "*" | "<requesthandler>"
    }
  ],
  "microflows": [
    {
      "name": "*" | "<microflow>"
    }
  ],
  "activities": [
    {
      "name": "*" | "<activity>"
    }
  ]
}
```

| Value | What Is Sent | Note |
| --- | --- | --- |
| `"name": "*"` | All | Default |
| `"name": "<requesthandler>"` | All request handler calls of this type | Click **Request Handlers<sup><small>1</small></sup>** below to see the list of options |
| `"name": "<microflow>"` | Each time this microflow is run | The format is `<module>.<microflow>`<br />For example, `TrainingManagement.ACT_CancelScheduledCourse` |
| `"name": "<activity>"` | All activities of this type | Click **Activities<sup><small>2</small></sup>** below to see the list of options |

{{% alert color="warning" %}}
Microflow names are case sensitive. If the case is not exactly matched, metrics will not be properly submitted.
{{% /alert %}}

**<details><summary><sup><small>[1 ]</small></sup> Request Handlers (click to see list)</summary>**

The following Mendix request handler calls will be passed:

| Request Handler | Call Type | Namespace |
| --- | --- | --- |
| `WebserviceRequestHandler` | SOAP requests | `mx.soap.time` |
| `ServiceRequestHandler` | OData requests | `mx.odata.time` |
| `RestRequestHandler` | REST requests | `mx.rest.time` |
| `ProcessorRequestHandler` | REST, ODATA, SOAP **doc** requests | `mx.client.time` |
| `ClientRequestHandler` | `/xas` requests (general queries for data in data grids, sending changes to the server, and triggering the execution of microflows) | `mx.client.time` |
| `FileRequestHandler` | File upload/download requests | `mx.client.time` |
| `PageUrlRequestHandler` | `/p` requests | `mx.client.time` |

For details on how to analyze some of these values, see [Metrics](/developerportal/operate/metrics/).
</details>

**<details><summary><sup><small>[2]</small></sup> Activities (click to see list)</summary>**

The following Mendix activities can be passed:

* `CastObject`
* `ChangeObject`
* `CommitObject`
* `CreateObject`
* `DeleteObject`
* `RetrieveObject`
* `RollbackObject`
* `AggregateList`
* `ChangeList`
* `ListOperation`
* `JavaAction`
* `Microflow`
* `CallRestService`
* `CallWebService`
* `ImportWithMapping`
* `ExportWithMapping`

</details>

**Example**

The following example sends logs for the following:

* All request handlers
* The microflow `After_Startup` in the module `Administration`
* The `CreateObject` and `DeleteObject` activities

```json
{
  "requestHandlers": [
    {
      "name": "*"
    }
  ],
  "microflows": [
    {
      "name": "Administration.After_Startup"
    }
  ],
  "activities": [
    {
      "name": "CreateObject"
    },
    {
      "name": "DeleteObject"
    }
  ]
}
```

#### Passing a Configuration to the Metrics Agent

You pass the configuration to the metrics agent by adding a custom runtime setting to your Mendix Cloud environment.

1. Go to the **Environments** page of your app.
2. Click **Details** next to the environment you have configured for Datadog.
3. In the **Custom Environment Variable** section, add a `METRICS_AGENT_CONFIG` variable with the value of the JSON required for your configuration.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/metrics/metrics-agent-config.png" width=400 class="no-border" >}}

4. Click **Save**.
5. Restart your app to apply the new settings if you have already connected your node to your data analytics. If you are in the process of connecting your node, you must redeploy your application to apply the changes.

## Filtering Metrics Ingestion 

{{% alert color="info" %}}
The metrics collected by APM vendors' agents are not affected by this feature. Only runtime metrics collected by Mendix can be filtered.
{{% /alert %}}

To filter the ingestion of metrics to APM vendors, you can use these environment variables:

* [APM_METRICS_FILTER_ALLOW](#app-metrics-filter-allow)
* [APM_METRICS_FILTER_DENY](#app-metrics-filter-deny)
* [APM_METRICS_FILTER_DENY_ALL](#app-metrics-filter-deny-all)

{{% alert color="info" %}}
Database metrics (`postgresql.*` and `mx.database.diskstorage_size`) cannot be filtered by name. To turn them off, set the `APPMETRICS_INCLUDE_DB` environment variable to `false`. 
{{% /alert %}}

### APM_METRICS_FILTER_ALLOW{#app-metrics-filter-allow}

Set the value to a comma-separated list of prefixes for the metrics to be allowed. By default, all metrics are allowed, even if they are not specified via this environment variable.

For example, to allow only the session and the JVM metrics, set the environment variable to `mx.runtime.stats.sessions,jvm`.

### APM_METRICS_FILTER_DENY{#app-metrics-filter-deny}

Set the value to a comma-separated list of prefixes for the metrics to be denied. 

For example, to filter out only metrics starting with `jetty` or `mx.runtime`, set the environment variable to `jetty,mx.runtime`.

### APM_METRICS_FILTER_DENY_ALL{#app-metrics-filter-deny-all}

You can use this environment variable can be used to stop ingestion of all metrics at once. 

If its value is set to `true`, all metrics will be denied regardless of the values of `APM_METRICS_FILTER_ALLOW`, `APM_METRICS_FILTER_DENY`, and `APPMETRICS_INCLUDE_DB`.

## Tuning Log Levels

If desired, you can adjust the log levels. If you configure your app's log levels via the [**Log Levels** tab](/developerportal/deploy/environments-details/#log-levels) on the **Environment Details** page, the log levels that you set there are also reflected in your APM integrations.

## Read More

* [Metrics](/developerportal/operate/metrics/) – Describes the graphs that you can use to monitor the performance and health of your Mendix Cloud app on the **Metrics** page in **Apps**
