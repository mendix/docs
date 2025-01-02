---
title: "Metrics"
url: /refguide/metrics/
description: "Describes how to configure and report metrics in Mendix."
---

## Introduction

Mendix supports reporting metrics through [Micrometer](https://micrometer.io/docs).

The Metrics can be configured in the following ways:

* [Metrics registries configuration](#registries-configuration) – to configure the metrics supported by Mendix
* [Application tags](#application-tags) – to include tags in all the metrics in application level
* [Microflow activities](#microflow-activities) – to handle metrics in microflow activities
* [Java API](#java-api) – to handle metrics using a Java API in a Java action
* [Logging](#logging) – to log metrics to a log node

## Metrics Registries Configuration {#registries-configuration}

Micrometer can send metrics to multiple registries. To configure micrometer for a specific registry, use the following syntax in `runtime settings` with the custom runtime setting name `Metrics.Registries`. See [Runtime Customization](/refguide/custom-settings/#metrics-settings) for more information. The setting is in JSON format.

* Custom Runtime Setting – **Name**: `Metrics.Registries`

```json
[
  {
    "type": "<registry1>",
    "settings": { <settings> },
    "filters": [ <list-of-filters> ]
  },
  {
    "type": "<registry2>",
    "settings": { <settings> },
    "filters": [ <list-of-filters> ]
  },
  …
]
```

The details of each settings are listed below.

* `type` *(mandatory)* – the type of registry to use. Currently supported types are [`prometheus`](https://prometheus.io/docs/introduction/overview/), [`jmx`](https://www.oracle.com/java/technologies/javase/javamanagement.html), [`influx`](https://www.influxdata.com/), and [`statsd`](https://www.datadoghq.com/dg/monitor/ts/statsd/). Depending on the type of the registry the `settings` may vary.
* `settings` *(conditional mandatory)* – settings for the registry. Each registry has different settings depending upon the **type** specified. Follow the links below to see the settings for each type:
    * [Prometheus](#prometheus)
    * [jmx](#jmx)
    * [influx](#influx)
    * [statsd](#statsd)
* `filters` *(optional)* – instructions on which metrics to accept or deny. See the [Filters](#filters) section, below, for more information.

### Settings

The following settings can be used, depending on the type of metrics being generated:

| Setting | DataType | Manda-tory | Type | Description | Default Value | Examples |
| --- | --- | --- | --- | --- | --- | --- |
| `db` | *String* | No | influx | The db to send metrics to | mydb | customDb, metricDb |
| `password` | *String* | Yes | influx | Authenticate requests with this password | - | - |
| `uri` | *String* | No | influx | The URI for the back end | http://localhost:8086 (for Influx) | - |
| `userName` | *String* | Yes | influx | Authenticate requests with this user | - | - |
| `protocol` | *String* | No | influx | Protocol of the statsd connection | UDP | TCP, UDP |
| `domain` | *String* | No | jmx | Jmx domain to publish the metrics to | metrics | "Mendix", "Employee" |
| `enabled` | *Boolean* | No | influx / statsd | Enables / Disables the meter | true | true, false |
| `flavor` | *StatsdFlavor* | No | statsd | The variant of the StatsD protocol | DATADOG | ETSY, TELEGRAF, SYSDIG |
| `host` | *String* | No | statsd | The host name of the StatsD agent | localhost | - |
| `port` | *Int* | No | statsd | The port of the StatsD agent | 8125 | - |
| `step` | *Duration* | No | all | The step size (reporting frequency) to use | 1m | `1ms`, `2s`, `3m`, `4h`, `5d` or [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) -> `P3Y6M4DT12H30M5S` |
| `filters` | *Json* | No | all | Custom setting from Mendix to filter metrics | - | [See below](#filters)    

#### Prometheus{#prometheus}

We do not support multiple [Prometheus](https://prometheus.io/docs/introduction/overview/). When the Prometheus registry is set, it can be accessed through the `/prometheus` context path over the admin endpoint.

{{% alert color="warning" %}}
Prometheus has a limitation where it sometimes ignores metrics with the same name but a different set of tags. Make sure all metrics with the same name have the same set of tags.
{{% /alert %}}

* `step` – the step size or reporting frequency to use.

Example 1

```json
[
  {
    "type": "prometheus",
    "settings": {
      "step": "3m"
    }
  }
]
```

Example 2

```json
[
  {
    "type": "prometheus",
    "settings": {
      "step": "P3Y6M4DT12H30M5S"
    }
  }
]
```

#### Jmx{#jmx}

* `step` – The step size or reporting frequency to use.
* `domain` – The Jmx domain to which to publish the metrics.

Example 1

```json
[
  {
    "type": "jmx",
    "settings": {
      "step": "3m",
      "domain": "Mendix"
    }
  }
]
```

Example 2

```json
[
  {
    "type": "jmx",
    "settings": {
      "step": "P3Y6M4DT12H30M5S"
    }
  }
]
```

#### Influx{#influx}

* `uri` – the URI for the Influx back end.
* `db` – the database name to which to send the metrics.
* `userName` – the userName for authentication.
* `password` – the password for authentication.
* `step` – the step size or reporting frequency to use.
* `enabled` – set to `true` to enable the registry. This means you can switch the meter on and off while keeping the settings in the configuration.

Example 1

```json
[
  {
    "type": "influx",
    "settings": {
      "userName": "mendix",
      "password": "MayBeThis**"
    }
  }
]
```

Example 2

```json
[
  {
    "type": "influx",
    "settings": {
      "uri": "http://mendix.influx.com",
      "db": "mx.metrics",
      "userName": "mendix",
      "password": "MayBeThis**",
      "step": "P2Y6M4DT12H21M5S"
    }
  }
]
```

#### StatsD{#statsd}

* `flavor` – specifies the variant of the StatsD protocol to use.
* `host` – the host name of the StatsD agent.
* `port` – the port used by the StatsD agent.
* `step` – the step size or reporting frequency to use.
* `protocol` – the protocol of the connection.
* `enabled` – set to `true` to enable the registry. This means you can switch the meter on and off while keeping the settings in the configuration.
  
Example 1

```json
[
  {
    "type": "statsd",
    "settings": {
      "host": "mx.datadog.com",
      "port": "8181",
      "protocol": "TCP",
      "flavor": "TELEGRAF"
    }
  }
]
```

Example 2

```json
[
  {
    "type": "statsd",
    "settings": {
      "flavor": "SYSDIG",
      "step": "3m"
    }
  }
]
```

### Filters {#filters}

Filters are optional, but can help in filtering metrics based on given criteria. Below is the syntax:

```json
"filters" : [
  {"type" : "<filter-type>", "result" : "filter-result", "values": [ "<list-of-filter-values>"] }
]
```

* `filter-type` – the type of filter to apply. Currently we support the following:
    * `nameStartsWith` – matches the metric if its name begins with the given list-of-filter-values.
* `filter-result` – the desired result of applying the filter-type to the list-of-filter-values. Supported values are:
    * `accept` – metrics matching the criteria are passed to the registry
    * `deny` – metrics matching the criteria are not passed to the registry
* `list-of-filter-values` – a list of values used in the given filter type

Example 1

```json
[
  {
    "type": "statsd",
    "settings": { "protocol": "TCP" },
    "filters": [
      { "type" : "nameStartsWith", "result" : "accept", "values" : ["app.", "employee.", "myapp."] }
    ]
  }
]
```

The above filter accepts metrics which starts with `app.`, `employee.`, or `myapp.`.

Example 2

```json
[
  {
    "type": "influx",
    "settings": {
      "userName": "mendix",
      "password": "MayBeThis**"
    },
    "filters": [
      { "type" : "nameStartsWith", "result" : "deny", "values" : ["Unnamed.", "Invalid.", "Internal."] }
    ]
  }
]
```

The above filter discards metrics which start with `Unnamed.`, `Invalid.`, or `Internal.`.

### Notes

{{% alert color="info" %}}
The following should be taken into account when configuring the metrics registries.
{{% /alert %}}

1. Filters also affect internal metrics used by Mendix. For example, metrics emitted by Mendix which start with `mx.`.
2. If you have two metrics with the same name but one has additional tags, these are considered as different metrics. For example, metrics `app.counter1` with tag `"version" -> "1"` and `app.counter1` with no tag are different.
3. Filters are executed on a first come, first served basis. In other words, the first matching filter gets the priority. For example, take the filters defined below:

    ```json
    [
      {
        "type": "statsd",
        "settings": { "protocol": "TCP" },
        "filters": [
          { "type" : "nameStartsWith", "result" : "accept", "values" : ["app."] },
          { "type" : "nameStartsWith", "result" : "deny", "values" : ["app.others."] }
        ]
      }
    ]
    ```

    This example allows metrics like `app.others.counter` as they pass the first `accept` filter, `nameStartsWith "app."`. However, if you reverse the filters, `app.others.counter` would be denied, while `app.somethingelse.` would still be accepted.

    {{% alert color="info" %}}Ensure that more specific filters are defined before less specific ones so that they are applied correctly.{{% /alert %}}

4. To accept only specific filters and deny all others, add a deny filter with the value `""` as the last filter. For example, to accept only metrics starting with `app.`

    ```json
    [
      {
        "type": "statsd",
        "settings": { "protocol": "TCP" },
        "filters": [
          { "type" : "nameStartsWith", "result" : "accept", "values" : ["app."] },
          { "type" : "nameStartsWith", "result" : "deny", "values" : [""] }
        ]
      }
    ]
    ```

## Application Tags {#application-tags}

Common tags which should be reported by every metric can be specified using the `Metrics.ApplicationTags` setting. This setting should be in JSON format.

* Custom Runtime Setting – **Name**: `Metrics.ApplicationTags`

```json
{
  "hostId": "7a3c0356-4dab-42ab-a139-87efb497f3e9",
  "environment": "prod"
}
```

## Microflow Activities {#microflow-activities}

You can use activities to provide custom metrics from your app. See [Metrics Activities](/refguide/metrics-activities/) for information about these activities .

## Java API {#java-api}

Micrometer metrics can be accessed through [Mendix Runtime Java APIs](/apidocs-mxsdk/apidocs/runtime-api/) as well inside Mendix. This can be achieved by using the custom runtime setting `com.mendix.metrics.Type`. This setting defaults to `micrometer`.

* Custom Runtime Setting – **Name**: `com.mendix.metrics.Type`
* **Value**: `micrometer`

### Current Metrics and Usage

Currently supported metrics are `counter`, `gauge`, and `timer`. We support [Bloch's builder pattern](https://blogs.oracle.com/javamagazine/java-builder-pattern-bloch) to create the metrics and support `Tag` and `Description` which can be added to each metric.

To create the metrics,

```Java
import com.mendix.metrics.Counter;
import com.mendix.core.Core;
…

// Create a counter
Counter counter1 = Core.metrics().createCounter("app.strikes")
                                .withTag("app", "myapp")
                                .withDescription("Metrics to count the strike outs")
                                .build();
Counter counter2 = Core.metrics().createCounter("app.count").build();
```

In the same way, we can also create a `gauge` and a `timer` using the `createGauge` and `createTimer` methods respectively.

The name must adhere to the following rules:

* The name can only contain alpha-numeric characters, dots or underscores.
* The name must start with a letter.
* The name cannot start with `mx`, because this prefix is reserved for Mendix internal metrics.
* The name is case-insensitive.

{{% alert color="info" %}}
It is recommended to use a common prefix that uniquely defines your organization and application.
{{% /alert %}}

### ⚠ Deprecated Usages

The following deprecated usages will be removed in the future releases,

1. The [`Core.metrics()` Mendix Runtime Java API methods](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/metrics/Metrics.html) `counter()`, `timer()`, `gauges()`, and `sets()`, and the corresponding `Counters`, `Timers`, `Gauges` and `Sets` interfaces are deprecated.

## Logging {#logging}

Metering-related log messages are sent to the `Metering` log node. If a registry is enabled, they will be reported with severity `debug`.

## List of Metrics {#list-of-metrics}

The Runtime Server produces various metrics. Some of these metrics are controlled by Mendix: these are prefixed with `mx`.

Other metrics are produced by Micrometer, the library that is used for metrics. This library outputs metrics for other libraries that it recognizes, such as the Jetty server that is embedded in the Runtime Server. These additional Micrometer metrics are not under our control and might change.

### Runtime Server Metrics

The Runtime Server produces the following metrics out-of-the-box:

| Name | Type | Tags | Description |
| --- | --- | --- | --- |
| **mx.<wbr>runtime.<wbr>stats.<wbr>handler_requests** | counter | `XASId`, `name` | The total number of requests on a request handler (`name`) that were received by a node (`XASId`) since it was started. |
| **mx.<wbr>runtime.<wbr>stats.<wbr>sessions.<wbr>named_users** | gauge | | The current number of active, named users in the database. |
| **mx.<wbr>runtime.<wbr>stats.<wbr>sessions.<wbr>named_user_sessions** | gauge | | The current number of sessions in the database for named users. |
| **mx.<wbr>runtime.<wbr>stats.<wbr>sessions.<wbr>anonymous_sessions** | gauge | | The current number of sessions in the database for anonymous users. |
| **mx.<wbr>runtime.<wbr>stats.<wbr>connectionbus.<wbr>transactions** | counter | `XASId` | The total number of transactions on the database that were created by a node (`XASId`) since it was started. |
| **mx.<wbr>runtime.<wbr>stats.<wbr>connectionbus.<wbr>selects** | counter | `XASId` | The total number of `SELECT` statements that were executed on the database by a node (`XASId`) since it was started. |
| **mx.<wbr>runtime.<wbr>stats.<wbr>connectionbus.<wbr>inserts** | counter | `XASId` | The total number of `INSERT` statements that were executed on the database by a node (`XASId`) since it was started. |
| **mx.<wbr>runtime.<wbr>stats.<wbr>connectionbus.<wbr>updates** | counter | `XASId` | The total number of `UPDATE` statements that were executed on the database by a node (`XASId`) since it was started. |
| **mx.<wbr>runtime.<wbr>stats.<wbr>connectionbus.<wbr>deletes** | counter | `XASId` | The total number of `DELETE` statements that were executed on the database by a node (`XASId`) since it was started. |
| **mx.<wbr>odata.<wbr>consume.<wbr>created** | counter | `entity` | The total number of objects of a certain entity type (`entity`) that were created using the [Send External Object activity](/refguide/send-external-object/). |
| **mx.<wbr>odata.<wbr>consume.<wbr>updated** | counter | `entity` | The total number of objects of a certain entity type (`entity`) that were updated using the [Send External Object activity](/refguide/send-external-object/). |
| **mx.<wbr>odata.<wbr>consume.<wbr>deleted** | counter | `entity` | The total number of objects of a certain entity type (`entity`) that were created using the [Delete External Object activity](/refguide/delete-external-object/). |
| **mx.<wbr>odata.<wbr>publish.<wbr>objects** | counter | `entity` | The total number of objects that were served for a particular type of object (`entity`) by a [published OData/GraphQL service](/refguide/published-odata-services/). |
| **mx.<wbr>odata.<wbr>publish.<wbr>created** | counter | `entity` | The total number of objects of a certain entity type (`entity`) that were created due to client requests to a [published OData service](/refguide/published-odata-services/). |
| **mx.<wbr>odata.<wbr>publish.<wbr>updated** | counter | `entity` | The total number of objects of a certain entity type (`entity`) that were updated due to client requests to a [published OData service](/refguide/published-odata-services/). |
| **mx.<wbr>odata.<wbr>publish.<wbr>deleted** | counter | `entity` | The total number of objects of a certain entity type (`entity`) that were deleted due to client requests to a [published OData service](/refguide/published-odata-services/). |
| **mx.<wbr>odata.<wbr>retrieve** | counter | `entity` | The total number of objects of a certain entity type (`entity`) that were retrieved from an [OData service](/refguide/consumed-odata-service/). |

{{% alert color="info" %}}
Note that the actual name may vary slightly depending on the back end (for example, Prometheus replaces dots by underscores).
Additionally, a suffix may be added for the unit of the metric (for example, `_bytes`).
{{% /alert %}}

### Additional Metrics

{{% alert color="info" %}}
The additional Micrometer metrics are not under our control and might change unannounced over time.
{{% /alert %}}

#### System and Process Metrics 

| Name | Type | Description |
| --- | --- | --- |
| `system.cpu.count` | gauge | The number of processors available to the Java Virtual Machine. |
| `system.cpu.usage` | gauge | The recent CPU usage of the system the Runtime Server is running on (in the range [0…1]). |
| `system.load.average.1m` | gauge | The average number of runnable (queued and running) threads on the available processors. |
| `process.cpu.usage` | gauge | The recent CPU usage for the Java Virtual Machine process (in the range [0…1]). |

#### Java Virtual Machine Metrics 

| Name | Type | Tags | Description |
| --- | --- | --- | --- |
| `jvm_info` | gauge | `vendor`, `runtime`, `version` | Details about the Java Virtual Machine (represented in the tags, the value is always 1). |
| `jvm.classes.loaded` | gauge | | The number of classes that are currently loaded in the Java Virtual Machine. |
| `jvm.classes.unloaded` | counter | | The total number of classes unloaded since the Java Virtual Machine started execution. |
| `jvm.buffer.count` | gauge | `id` | An estimate of the number of buffers in a Java Virtual Machine memory pool (`id`). |
| `jvm.buffer.memory_used` | gauge | `id` | An estimate of the memory (in bytes) that the Java Virtual Machine is using for a buffer pool (`id`). |
| `jvm.buffer.total_capacity` | gauge | `id` | An estimate of the total capacity (in bytes) of the buffers in a buffer pool (`id`). |
| `jvm.memory.used` | gauge | `id`, `area` | The amount of memory (in bytes) used for a certain area (`area`): `heap` or `nonheap`. |
| `jvm.memory.committed` | gauge | `id`, `area` | The amount of memory (in bytes) that is committed for the Java Virtual Machine to use. |
| `jvm.memory.max` | gauge | `id`, `area` | The maximum amount of memory (in bytes) that can be used for memory management. |
| `jvm.memory.usage.after.gc` | gauge | `area`, `pool` | The percentage of long-lived heap pool used after the last Garbage Collection (GC) event (in the range [0…1]). |
| `jvm.threads.live_threads` | gauge | | The current number of live threads (both daemon and non-daemon threads). |
| `jvm.threads.daemon_threads` | gauge | | The current number of live daemon threads. |
| `jvm.threads.peak_threads` | gauge | | The peak live thread count since the Java Virtual Machine started or peak was reset. |
| `jvm.threads.states_threads` | gauge | `state` | The current number of threads having in a certain state (`state`). |
| `jvm.gc.live.data.size` | gauge | | The current size (in bytes) of the long-lived heap memory pool. |
| `jvm.gc.max.data.size` | gauge | | The maximum size (in bytes) of the long-lived heap memory pool. |
| `jvm.gc.memory.allocated` | counter | | Incremented for an increase in the size of the (young) heap memory pool after one GC to before the next. |
| `jvm.gc.memory.promoted` | counter | | Count of positive increases in the size of the old generation memory pool before GC or to after GC. |
| `jvm.gc.pause` | timer | `action`, `cause` | The time spent in GC pause. |
| `jvm.gc.concurrent.phase.time` | timer | `action`, `cause` | The time spent in the concurrent GC phase. |
| `jvm.gc.overhead` | gauge | | An approximation of the percent of CPU time used by GC activities over the last lookback period or since monitoring began, whichever is shorter (in the range [0…1]). |

Refer to the [Java Virtual Machine documentation](https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ManagementFactory.html) for more details.

#### Jetty HTTP Server Metrics

| Name | Type | Description |
| --- | --- | --- |
| `jetty.connections.messages.in` | counter | The number of messages received by tracked connections. |
| `jetty.connections.messages.out` | counter | The number of messages sent by tracked connections. |
| `jetty.connections.bytes.in` | gauge | The number of bytes received by tracked connections. |
| `jetty.connections.bytes.out` | gauge | The number of bytes sent by tracked connections. |
| `jetty.connections.current` | gauge | The current number of open Jetty connections. |
| `jetty.connections.max` | gauge | The maximum number of observed connections over a rolling 2-minute interval. |
| `jetty.threads.current` | gauge | The total number of threads in the Jetty pool. |
| `jetty.threads.idle` | gauge | The number of idle threads in the Jetty pool. |
| `jetty.threads.busy` | gauge | The number of busy threads in the Jetty pool. |
| `jetty.threads.jobs` | gauge | The number of jobs queued waiting for a thread. |
| `jetty.threads.config.min` | gauge | The minimum number of threads in the Jetty pool. |
| `jetty.threads.config.max` | gauge | The maximum number of threads in the Jetty pool. |

#### Database Connection Pool Metrics

| Name | Type | Description |
| --- | --- | --- |
| `commons.pool2.num.idle` | gauge | The number of connections currently idle in the pool. |
| `commons.pool2.num.active` | gauge | The number of connections currently active in the pool. |
| `commons.pool2.num.waiters` | gauge | An estimate of the number of threads currently blocked waiting for a connection from the pool. |
| `commons.pool2.mean.active` | gauge | The mean time for which connections are active. |
| `commons.pool2.mean.idle` | gauge | The mean time for which connections are idle. |
| `commons.pool2.mean.borrow.wait` | gauge | The mean time threads wait to get a connection. |
| `commons.pool2.max.borrow.wait` | gauge | The maximum time a thread has waited to get a connection from the pool. |
| `commons.pool2.created` | counter | The total number of connections created for the pool over its lifetime. |
| `commons.pool2.borrowed` | counter | The total number of connections borrowed from the pool over its lifetime. |
| `commons.pool2.returned` | counter | The total number of connections returned to the pool over its lifetime. |
| `commons.pool2.destroyed` | counter | The total number of connections destroyed by the pool over its lifetime. |
| `commons.pool2.destroyed.by.evictor` | counter | The total number of connections destroyed by the evictor associated with the pool over its lifetime. |
| `commons.pool2.destroyed.by.borrow.validation` | counter | The total number of connections destroyed by the pool over its lifetime as a result of failing validation during borrowing. |

## Read More

* [Meter Concepts](https://micrometer.io/docs/concepts)
