---
title: "Monitoring Your Mendix Apps with an APM Tool"
linktitle: "Monitoring with APM"
url: /developerportal/operate/monitoring-with-apm/
weight: 30
description: "How to use an APM (Application Performance Monitoring) tool to monitor your Mendix Cloud app."
tags: ["Datadog", "Mendix Cloud", "monitoring", "analysis", "Saas", "AppDynamics", "APM", "Splunk", "Dynatrace"]
---

## 1 Introduction

There are a number of application performance monitoring (APM) tools for cloud applications which are available through a Software-as-a-service-based (Saas-based) data analytics platform. They provide comprehensive monitoring of servers, databases, tools, and services.

Mendix provides out-of-the-box configuration to use Datadog, AppDynamics, Dynatrace, and Splunk Cloud Platform to provide additional monitoring for your Mendix Apps running on the Mendix Cloud.

{{% alert color="info" %}}
[AppDynamics](https://www.appdynamics.com/) application monitoring is fully supported in Mendix version 9.7 and above. For older supported versions, only the basic AppDynamics Java Agent metrics are available, along with the `postgresql` and `mx.client` namespaces.

[Dynatrace](https://www.dynatrace.com/) OneAgent is used to collect metrics. Additionally, in Mendix version 9.7 and above, custom application runtime and database metrics are supported.

[Datadog](https://www.datadoghq.com/) logging and application metrics are supported in Mendix version 7.15 and above.

[Splunk Cloud Platform](https://www.splunk.com/en_us/products/splunk-cloud-platform.html) is supported for analyzing runtime application logs.
{{% /alert %}}

This document explains what information can be provided to a Saas-based data analytics platform.

For details on how to add a specific APM tool to your app, see one of the following documents:

* [AppDynamics for the Mendix Cloud](/developerportal/operate/appdynamics-metrics/)
* [Datadog for the Mendix Cloud](/developerportal/operate/datadog-metrics/)
* [Dynatrace for Mendix Cloud](/developerportal/operate/dynatrace-metrics/)
* [Splunk for the Mendix Cloud](/developerportal/operate/splunk-metrics/)

{{% alert color="info" %}}
For support on other cloud deployment options, such as Private Cloud, refer to their dedicated [documentation pages](/developerportal/deploy/private-cloud-monitor/).
{{% /alert %}}

## 2 What Information Can Mendix Supply to a Saas-based Data Analytics Platform?

{{% alert color="info" %}}
The integration with Splunk Cloud Platform currently sends only runtime application logs. It does not include other monitoring information.
{{% /alert %}}

Mendix provides two types of monitoring data:

* Data from the Mendix Runtime, the Java Virtual Machine (JVM), the database, and the SaaS (Software as a Service, for example Cloud Foundry) environment – this is described in [Environment Metrics](#environment), below
* Data from within the Mendix app itself – this is described in [App Metrics](#app-metrics), below

{{% alert color="info" %}}
If you are using AppDynamics with `APPDYNAMICS_MACHINE_AGENT_ENABLED` set to `false`, you will only receive the general AppDynamics metrics, provided by the AppDynamics Java Agent.

We recommend you set this to `true` to receive the analytics which will help you monitor your app environment.
{{% /alert %}}

## 3 Environment Metrics{#environment}

Once you have configured your data analytics platform for your app, it will automatically send information about the environment in which your app is running.

### 3.1 Environment Metrics Namespaces

The metrics from your app's environment are supplied in the following namespaces:

* commons.pool2 – database connection pool metrics
* jetty – metrics from the ingress controller of the app
* jvm – metrics from the Java virtual machine in which the Mendix runtime runs
* postgresql – database metrics specific to PostgreSQL databases
* system – metrics from the base system running on the platform or PaaS — in Datadog these are disabled by default, but can be enabled using the [`DD_ENABLE_CHECKS`](/developerportal/operate/datadog-metrics/#system-metrics) environment variable.

Many of these metrics are described in more detail in [Metrics – Mendix Runtime](/refguide/metrics/).

### 3.2 Useful Metrics for Mendix Apps

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

Note that the absolute values are often not useful, but looking at trends over time can indicate performance issues or future action which might be required. Some of these trends are similar to those described in [Trends in the Mendix Cloud](/developerportal/operate/trends-v4/).

## 4 App Metrics {#app-metrics}

Mendix provides logging of various actions within the app. These are sent to your data analytics platform with the namespace `mx`. Timing values are sent in milliseconds.

By default, Mendix will only pass request handler activity, but you can configure it to provide metrics for microflows and activities as well. You can find how to do this in [Customizing the Metrics Agent](#customizing), below.

### 4.1 What Metrics Can You Get From Your App?

#### 4.1.1 Request Handler Metrics

Unless you customize your metrics agent, the metrics agent will provide metrics for all your request handlers. The metrics provided are listed below:

##### 4.1.1.1 mx.soap.time

A timing/histogram value for SOAP requests.

##### 4.1.1.2 mx.odata.time

A timing/histogram value for OData requests.

##### 4.1.1.3 mx.rest.time

A timing/histogram value for REST requests.

##### 4.1.1.4 mx.client.time

The time it takes to handle a request to a request handler used by the web UI. You can get results for all of the following types of request

* REST, ODATA, SOAP **doc** requests
* `/xas` requests (general queries for data in data grids, sending changes to the server, and triggering the execution of microflows)
* File upload/download requests
* `/p` requests

This metric helps you to gain an overview of how long users have to wait for individual requests, and hence indicates overall application performance.

#### 4.1.2 Microflow Metrics

For the microflows you select (see [Customizing the Metrics Agent](#customizing), below), the metrics agent will provide the following metrics relating to the time the microflow takes to run:

* mx.microflow.time.avg
* mx.microflow.time.count
* mx.microflow.time.max
* mx.microflow.time.median
* mx.microflow.time.95percentile

#### 4.1.3 Activity Metrics

For the activities you select (see [Customizing the Metrics Agent](#customizing), below), the metrics agent will provide the following metrics:

* mx.activity.time.avg
* mx.activity.time.count
* mx.activity.time.max
* mx.activity.time.median
* mx.activity.time.95percentile

### 4.2 Customizing the Metrics Agent{#customizing}

By default, Mendix will pass a log of *all* **request handler** activity to your data analytics platform and no other information. However, by using JSON to configure the metrics agent, you can add logs of microflows and activities within microflows, and restrict which request handler calls are sent.

#### 4.2.1 Format of Metrics Agent Configuration{#mx-agent-format}

<!-- Changes to this should be reflected in "Configuring the Java Instrumentation Agent" in /developerportal/deploy/private-cloud-monitor,
updating relative links -->

You can specify which request handlers, microflows, and activities are reported using a JSON configuration with the following format (note that this is the syntax and not an example of this custom setting):

```json {linenos=false}
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
| `"name": "<requesthandler>"` | All request handler calls of this type | click **Request Handlers<sup><small>1</small></sup>** below to see the list of options |
| `"name": "<microflow>"` | Each time this microflow is run | The format is `<module>.<microflow>`<br />For example, `TrainingManagement.ACT_CancelScheduledCourse` |
| `"name": "<activity>"` | All activities of this type | click **Activities<sup><small>2</small></sup>** below to see the list of options |

{{% alert color="warning" %}}
Microflow names are case-sensitive. If the case is not exactly matched, metrics will not be properly submitted.
{{% /alert %}}

**<details><summary><sup><small>[1 ]</small></sup> Request Handlers (click to see list)</summary>**

The following Mendix *request handler* calls will be passed:

| Request Handler | Call Type | Namespace |
| --- | --- | --- |
| `WebserviceRequestHandler` | SOAP requests | `mx.soap.time` |
| `ServiceRequestHandler` | OData requests | `mx.odata.time` |
| `RestRequestHandler` | REST requests | `mx.rest.time` |
| `ProcessorRequestHandler` | REST, ODATA, SOAP **doc** requests | `mx.client.time` |
| `ClientRequestHandler` | `/xas` requests (general queries for data in data grids, sending changes to the server, and triggering the execution of microflows) | `mx.client.time` |
| `FileRequestHandler` | File upload/download requests | `mx.client.time` |
| `PageUrlRequestHandler` | `/p` requests | `mx.client.time` |

You can find help in analyzing some of these values in [Trends in the Mendix Cloud](/developerportal/operate/trends-v4/).
</details>

**<details><summary><sup><small>[2]</small></sup> Activities (click to see list)</summary>**

The following Mendix *activities* can be passed:

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

The following example will send logs for:

* All request handlers
* The microflow `After_Startup` in the module `Administration`
* The `CreateObject` and `DeleteObject` activities

```json {linenos=false}
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

#### 4.2.2 Passing a Configuration to the Metrics Agent

You pass the configuration to the metrics agent by adding a *Custom Runtime Setting* to your Mendix Cloud environment.

1. Go to the **Environments** page of your app.
2. Click **Details** next to the environment you have configured for Datadog.
3. Add a **Custom Environment Variable** *METRICS_AGENT_CONFIG* with the value of the JSON required for your configuration.

    {{< figure src="/attachments/developerportal/operate/metrics/datadog-metrics/datadog_metricsagentconfig.png" >}}

4. Click **Save**.
5. Restart your app to apply the new settings if you have already connected your node to your data analytics. If you are in the process of connecting your node, you must *redeploy* your application to apply the changes.

## 5 Filtering Metrics Ingestion 

{{% alert color="info" %}}
The metrics collected by APM vendors' agents are not affected by this feature, only runtime metrics collected by Mendix can be filtered.
{{% /alert %}}

To filter the ingestion of metrics to APM vendors, environment variables listed below can be used.

* [APM_METRICS_FILTER_ALLOW](#app-metrics-filter-allow)
* [APM_METRICS_FILTER_DENY](#app-metrics-filter-deny)
* [APM_METRICS_FILTER_DENY_ALL](#app-metrics-filter-deny-all)

{{% alert color="info" %}}
Database metrics (`postgresql.*` and `mx.database.diskstorage_size`) cannot be filtered by name, to turn them off, the `APPMETRICS_INCLUDE_DB` environment variable can be set to false. 
{{% /alert %}}

### 5.1 APM_METRICS_FILTER_ALLOW{#app-metrics-filter-allow}

Comma-separated list of prefixes for the metrics to be allowed. By default, all metrics are allowed, even if they are not specified via this environment variable.

For example, to allow only the session and the jvm metrics, the environment variable should be set to `mx.runtime.stats.sessions,jvm`.

### 5.2 APM_METRICS_FILTER_DENY{#app-metrics-filter-deny}

Comma-separated list of prefixes for the metrics to be denied. 

For example, to filter out only metrics starting with jetty or mx.runtime, the environment variable should be set to `jetty,mx.runtime`.

### 5.3 APM_METRICS_FILTER_DENY_ALL{#app-metrics-filter-deny-all}

This environment variable can be used to stop ingestion of all metrics at once.

If it is set to `true`, all metrics will be denied regardless of the values of `APM_METRICS_FILTER_ALLOW`, `APM_METRICS_FILTER_DENY`, and `APPMETRICS_INCLUDE_DB`.

## 6 Read More

* [Metrics](/developerportal/operate/metrics/)
