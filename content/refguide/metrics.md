---
title: "Metrics"
category: "Mendix Runtime"
tags: ["studio pro", "metrics", "micrometer"]
---

## 1 Introduction

Mendix supports reporting metrics through [Micrometer](https://micrometer.io/docs).

The Metrics can be configured and used with:

* [Metrics registries configuration](#registries-configuration): To configure the metrics supported by Mendix
* [Application tags](#application-tags): To include tags in all the metrics in application level
* [Microflow activities](#microflow-activities): To handle metrics in microflow activities
* [Java API](#java-api): To handle metrics using a Java API in a Java action
* [Logging](#logging): To log metrics to a log node

## 2 Metrics Registries Configuration {#registries-configuration}

Micrometer can send metrics to multiple registries. To configure micrometer for a specific registry, use the following syntax in `runtime settings` with configuration key as `Metrics.Registries`. See [Runtime Customization](custom-settings) for more information. The setting is in JSON format.

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

{{% alert type="info" %}}
The following should be taken into account when configuring the metrics registries.
{{% /alert %}}

1. There are also some internal metrics used by Mendix. Filters will also have an effect on them. For example metrics emitted by Mendix which starts with "com.mendix." or "mx.".

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
See the description of these activities [here](metrics-activities).

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

### 5.2 Deprecated usages

Below are deprecated usages which will be removed in the future releases,

1. `com.mendix.metrics.Type` setting `logger` and `statsd` are deprecated. You will also get a warning message to advise you to start using the `micrometer` metric type.
2. The Java API methods `counter()`, `timer()`, `gauges()`, and `sets()` are deprecated in `Core.metrics()`

## 6 Logging {#logging}

Metering-related log messages are sent to the `Metering` log node. If a registry is enabled, they will be reported with severity `debug`.

## 7 Read More

* [Meter Concepts](https://micrometer.io/docs/concepts)
