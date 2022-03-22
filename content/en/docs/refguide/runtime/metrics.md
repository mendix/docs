---
title: "Metrics"
url: /refguide/metrics/
category: "Mendix Runtime"
tags: ["studio pro", "metrics", "micrometer"]
---

{{% alert color="warning" %}}
Custom metrics were introduced in Studio Pro [9.6.0](/releasenotes/studio-pro/9.6/#960).
{{% /alert %}}

## 1 Introduction

Mendix supports reporting metrics through [Micrometer](https://micrometer.io/docs).

The Metrics can be configured and used with:

* [Metrics registries configuration](#registries-configuration): To configure the metrics supported by Mendix
* [Application tags](#application-tags): To include tags in all the metrics in application level
* [Microflow activities](#microflow-activities): To handle metrics in microflow activities
* [Java API](#java-api): To handle metrics using a Java API in a Java action
* [Logging](#logging): To log metrics to a log node

## 2 Metrics Registries Configuration {#registries-configuration}

Micrometer can send metrics to multiple registries. To configure micrometer for a specific registry, use the following syntax in `runtime settings` with configuration key as `Metrics.Registries`. See [Runtime Customization](/refguide/custom-settings/) for more information. The setting is in JSON format.

**Configuration Key:** `Metrics.Registries`

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
  ...
]
```

The details of each settings are listed below:

### type (mandatory)

The type of the registry to use. Currently supported types are : `prometheus`, `jmx`, `influx`, and `statsd`. Depending on the type of the registry the `settings` may vary.

### settings (conditional mandatory)

These are settings for the registry. Each registry has different settings depending upon the **type** specified. Supported settings for each type are as follows:.

#### [Prometheus](https://prometheus.io/docs/introduction/overview/)

  Multiple Prometheus registrations are **NOT supported**. When the Prometheus registry is set, it can be accessed through the `/prometheus` context path over the admin endpoint.

  `step`: The step size or reporting frequency to use.

##### Example 1

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

##### Example 2

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

#### [Jmx](https://www.oracle.com/java/technologies/javase/javamanagement.html)

  `step`: The step size or reporting frequency to use.
  `domain`: The Jmx domain to which to publish the metrics.

##### Example 1

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

 ##### Example 2

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

#### [Influx](https://www.influxdata.com/)

  `uri`: The URI for the Influx backend.
  `db`: The database name to which to send the metrics.
  `userName`: The userName for authentication.
  `password`: The password for authentication.
  `step`: The step size or reporting frequency to use.
  `enabled`: set to `true` to enable the registry. This helps in switching the meter _on_ and _off_ while keeping the settings in the configuration.

##### Example 1

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

##### Example 2

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

#### [StatsD](https://www.datadoghq.com/dg/monitor/ts/statsd/)

  `flavor`: Specifies the variant of the StatsD protocol to use.
  `host`: The host name of the StatsD agent.
  `port`: The port used by the StatsD agent.
  `step`: The step size or reporting frequency to use.
  `protocol`: The protocol of the connection.
  `enabled`: set to `true` to enable the registry. This helps in switching the meter _on_ and _off_ while keeping the settings in the configuration.
  
##### Example 1

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

##### Example 2

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

#### All settings details

More information about all the settings,

| Setting      | DataType       | Mandatory | Type           | Description                                   | Default Value                      | Examples                                                                                                 |
| ------------ | -------------- | ----------| -------------- | --------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------|
| `db`         | _String_       | No        | influx         | The db to send metrics to                     | mydb                               | customDb, metricDb                                                                                       |
| `password`   | _String_       | Yes       | influx         | Authenticate requests with this password      | -                                  | -                                                                                                        |
| `uri`        | _String_       | No        | influx         | The URI for backend                           | http://localhost:8086 (for Influx) | -                                                                                                        |
| `userName`   | _String_       | Yes       | influx         | Authenticate requests with this user          | -                                  | -                                                                                                        |
| `protocol`   | _String_       | No        | influx         | Protocol of the statsd connection             | UDP                                | TCP, UDP                                                                                                 |
| `domain`     | _String_       | No        | jmx            | Jmx domain to publish the metrics             | metrics                            | "Mendix", "Employee"                                                                                     |
| `enabled`    | _Boolean_      | No        | influx/statsd  | Enables/Disables the meter                    | true                               | true, false                                                                                              |
| `flavor`     | _StatsdFlavor_ | No        | statsd         | The variant of the StatsD protocol            | DATADOG                            | ETSY, TELEGRAF, SYSDIG                                                                                   |
| `host`       | _String_       | No        | statsd         | The host name of the StatsD agent             | localhost                          | -                                                                                                        |
| `port`       | _Int_          | No        | statsd         | The port of the StatsD agent                  | 8125                               | -                                                                                                        |
| `step`       | _Duration_     | No        | all            | The step size (reporting frequency) to use    | 1m                                 | `1ms`, `2s`, `3m`, `4h`, `5d` or [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) -> `P3Y6M4DT12H30M5S` |                                                                 |
| `filters`    | _Json_         | No        | all            | Custom setting from Mendix to filter metrics  | -                                  | [See below](#filters)                                                                                    |

### filters (optional) {#filters}

Filters help in filtering metrics based on given criteria. Below is the syntax,

```json
"filters" : [
  {"type" : "<filter-type>", "result" : "filter-result", "values": [ "<list-of-filter-values>"] }
]
```

#### type

The type of filter to apply. Currently we support the following:

* `nameStartsWith` : Filters the metric if it begins with the given values.

#### result

The result of applying the filter. If the filter matches the criteria, the result value will be applied to the metric. Supported values are: `accept` (or) `deny`.

#### values

A list of values to be applied in the given filter type.

##### Example 1

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

The above filter accepts metrics which starts with **"app."**, **"employee."**, or **"myapp."**

##### Example 2

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

The above filter discards metrics which starts with **"Unnamed."**, **"Invalid."**, or **"Internal."**

### Notes

{{% alert color="info" %}}
The following should be taken into account when configuring the metrics registries.
{{% /alert %}}

1. There are also some internal metrics used by Mendix. Filters will also have an effect on them. For example metrics emitted by Mendix which start with "mx.".

2. If you have a metric and another metric with the same name but with additional tags, these will be considered as different metrics. Example, Metric ("app.counter1") and ("app.counter1" with tag ("version" -> "1")) are different.

3. Filters are executed on a first come, first served basis. Hence the first applied filter gets the priority. For example, If you have a below setup,

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

    This will deny metrics like **"app.others.counter"** due to the contradiction with the first `accept` filter **"app."**.

4. To accept only specific filters and deny all others, ensure to deny with value **""**. For example, to accept only "app."

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

## 3 Application Tags {#application-tags}

Common tags which should be reported by every metric can be specified using the `Metrics.ApplicationTags` setting. This setting should be in JSON format.

**Configuration Key:** `Metrics.ApplicationTags`

```json
{
  "hostId": "7a3c0356-4dab-42ab-a139-87efb497f3e9",
  "environment": "prod"
}
```

## 4 Microflow Activities {#microflow-activities}
See the description of these activities [here](/refguide/metrics-activities/).

## 5 Java API {#java-api}

Micrometer metrics can be accessed through Java APIs as well inside Mendix. This can be achieved by setting `com.mendix.metrics.Type`. This setting defaults to `micrometer`.

**Configuration Key:** `com.mendix.metrics.Type`
**Configuration Value:** `micrometer`

### 5.1 Current Metrics and Usage

Currently supported metrics are `counter`, `gauge`, and `timer`. We support [Bloch's builder pattern](https://blogs.oracle.com/javamagazine/java-builder-pattern-bloch) to create the metrics and support `Tag` and `Description` which can be added to each metric.

To create the metrics,

```Java
import com.mendix.metrics.Counter;
import com.mendix.core.Core;

...
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
It is recommended to use a common prefix that uniquely defines your organisation and application.
{{% /alert %}}

### 5.2 Deprecated usages

Below are deprecated usages which will be removed in the future releases,

1. `com.mendix.metrics.Type` setting `logger` and `statsd` are deprecated. You will also get a warning message to advise you to start using the `micrometer` metric type.
2. The Java API methods `counter()`, `timer()`, `gauges()`, and `sets()` are deprecated in `Core.metrics()`

## 6 Logging {#logging}

Metering-related log messages are sent to the `Metering` log node. If a registry is enabled, they will be reported with severity `debug`.

## 7 List of Metrics

The Runtime Server produces various metrics. Some of these metrics are controlled by Mendix: these are prefixed with `mx`.

Other metrics are produced by Micrometer, the library that is used for metrics. This library will output metrics for other
libraries that it recognizes, such as the Jetty server that is embedded in the Runtime Server. These additional Micrometer metrics are not under our control and might change.

### 7.1 Runtime Server Metrics

The Runtime Server produces the following metrics out-of-the-box:

| Name | Type | Tags | Description |
| --- | --- | --- | --- |
| `mx.runtime.stats.handler_requests` | counter | `XASId`, `name` | The total number of requests on a request handler (`name`) that was received by a node (`XASId`) since it was started. |
| `mx.runtime.stats.requests{path}` | counter | | The total number of requests on a request handler (`path`) that was received by a node; deprecated, use `mx.runtime.stats.handler_requests` instead. |
| `mx.runtime.stats.sessions.named_users` | gauge | | The current number of active, named users in the database. |
| `mx.runtime.stats.sessions.named_user_sessions` | gauge | | The current number of sessions in the database for named users. |
| `mx.runtime.stats.sessions.anonymous_sessions` | gauge | | The current number of sessions in the database for anonymous users. |
| `mx.runtime.stats.connectionbus.transactions` | counter | `XASId` | The total number of transactions on the database that were created by a node (`XASId`) since it was started. |
| `mx.runtime.stats.connectionbus.selects` | counter | `XASId` | The total number of `SELECT` statements that were executed on the database by a node (`XASId`) since it was started. |
| `mx.runtime.stats.connectionbus.inserts` | counter | `XASId` | The total number of `INSERT` statements that were executed on the database by a node (`XASId`) since it was started. |
| `mx.runtime.stats.connectionbus.updates` | counter | `XASId` | The total number of `UPDATE` statements that were executed on the database by a node (`XASId`) since it was started. |
| `mx.runtime.stats.connectionbus.deletes` | counter | `XASId` | The total number of `DELETE` statements that were executed on the database by a node (`XASId`) since it was started. |
| `mx.odata.retrieve` | counter | `entity` | The total number of OData requests that were sent for a particular type of object (`entity`). |
| `mx.odata.publish.objects` | counter | `entity` | The total number of OData objects that were served for a particular type of object (`entity`). |

{{% alert color="info" %}}
Note that the actual name may vary slightly depending on the back-end (for example, Prometheus replaces dots by underscores).
Additionally, a suffix may be added for the unit of the metric (for example, `_bytes`).
{{% /alert %}}

### 7.2 Additional Metrics

{{% alert color="info" %}}
The additional Micrometer metrics are not under our control and might change unannounced over time.
{{% /alert %}}

#### 7.2.1 System and Process Metrics 

| Name | Type | Description |
| --- | --- | --- |
| `system.cpu.count` | gauge | The number of processors available to the Java Virtual Machine. |
| `system.cpu.usage` | gauge | The recent CPU usage of the system the Runtime Server is running on (in the range [0..1]). |
| `system.load.average.1m` | gauge | The average number of runnable (queued and running) threads on the available processors. |
| `process.cpu.usage` | gauge | The recent CPU usage for the Java Virtual Machine process (in the range [0..1]). |

#### 7.2.2 Java Virtual Machine Metrics 

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
| `jvm.memory.usage.after.gc` | gauge | `area`, `pool` | The percentage of long-lived heap pool used after the last Garbage Collection (GC) event (in the range [0..1]). |
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
| `jvm.gc.overhead` | gauge | | An approximation of the percent of CPU time used by GC activities over the last lookback period or since monitoring began, whichever is shorter (in the range [0..1]). |

Refer to the [Java Virtual Machine documentation](https://docs.oracle.com/en/java/javase/11/docs/api/java.management/java/lang/management/ManagementFactory.html) for more details.

#### 7.2.3 Jetty HTTP Server Metrics

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

#### 7.2.4 Other Metrics

There can be more metrics for additional libraries that are detected by Micrometer, such as `commons.pool2.*`, `postgres.*`, `kafka.*`, etc.

## 8 Read More

* [Meter Concepts](https://micrometer.io/docs/concepts)
