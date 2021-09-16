---
title: "Metrics"
category: "Mendix Runtime"
tags: ["studio pro"]
---

## 1 Introduction

Mendix supports reporting metrics through [Micrometer](https://micrometer.io/docs).

The Metrics can be configured and used with:

* **Metrics registries configuration:** To configure the metrics supported by Mendix
* **Application tags:** To include tags in all the metrics in application level
* **Microflow activities:** Microflow activities to handle metrics in Studio (Pro)
* **Java API:** Java API to handle metrics via Java action
* **Logging:** LogNode for logging metrics

## 2 Metrics registries configuration

Micrometer can send metrics to multiple registries. To configure micrometer to a specific registry, below is the syntax to be configured in `runtime settings` with configuration key as `Metrics.Registries`. The setting should be in JSON format.

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

The details about each settings are,

### type (mandatory)

Type of the registry to use. Currently supported types are : `prometheus`, `jmx`, `influx`, `statsd`. Depending upon the type of the registry the `settings` may vary.

### settings (conditional mandatory)

Settings for the specific registry. Each registry has different settings depending upon the type. Depending upon the default type of the settings in metrics, we can pass the settings or leave it to the default (If possible). Supported settings for each type are,

#### [Prometheus](https://prometheus.io/docs/introduction/overview/)

  Multiple Prometheus registration is **NOT supported**. When the Prometheus registry is set, it can be accessed through `/prometheus` context path over admin endpoint.

  `enabled`: creates the registry, if `true`. This helps in switching the meter _on/off_ with settings still in the configuration.
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
        "enabled": false,
        "step": "P3Y6M4DT12H30M5S"
      }
    }
  ]
  ```

#### [Jmx](https://www.oracle.com/java/technologies/javase/javamanagement.html)

  `enabled`: creates the registry, if `true`. This helps in switching the meter _on/off_ with settings still in the configuration.
  `step`: The step size or reporting frequency to use.
  `domain`: Jmx domain to publish the metrics.

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
        "enabled": false,
        "step": "P3Y6M4DT12H30M5S"
      }
    }
  ]
  ```

#### [Influx](https://www.influxdata.com/)

  `uri`: The URI for Influx backend
  `db`: Database name to send the metrics.
  `userName`: userName for authentication.
  `password`: password for authentication.
  `step`: The step size or reporting frequency to use.

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

  `flavour`: Specifies the variant of the StatsD protocol to use.
  `host`: Host name of the StatsD agent.
  `port`: Port of the StatsD agent.
  `step`: The step size or reporting frequency to use.
  `protocol`: The protocol of the connection

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

More Information about all the settings,

| Setting      | DataType       | Mandatory | Type           | Description                                   | Default Value                      | Examples                                                                                                 |
| ------------ | -------------- | ----------| -------------- | --------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------|
| `db`         | _String_       | No        | influx         | The db to send metrics to                     | mydb                               | customDb, metricDb                                                                                       |
| `password`   | _String_       | Yes       | influx         | Authenticate requests with this password      | -                                  | -                                                                                                        |
| `uri`        | _String_       | No        | influx         | The URI for backend                           | http://localhost:8086 (for Influx) | -                                                                                                        |
| `userName`   | _String_       | Yes       | influx         | Authenticate requests with this user          | -                                  | -                                                                                                        |
| `protocol`   | _String_       | No        | influx         | Protocol of the statsd connection             | UDP                                | TCP, UDP                                                                                                 |
| `domain`     | _String_       | No        | jmx            | Jmx domain to publish the metrics             | metrics                            | "Mendix", "Employee"                                                                                     |
| `enabled`    | _Boolean_      | No        | prometheus/jmx | Enables/Disables the meter                    | true                               | true, false                                                                                              |
| `flavor`     | _StatsdFlavor_ | No        | statsd         | The variant of the StatsD protocol            | DATADOG                            | ETSY, TELEGRAF, SYSDIG                                                                                   |
| `host`       | _String_       | No        | statsd         | The host name of the StatsD agent             | localhost                          | -                                                                                                        |
| `port`       | _Int_          | No        | statsd         | The port of the StatsD agent                  | 8125                               | -                                                                                                        |
| `step`       | _Duration_     | No        | all            | The step size (reporting frequency) to use    | 1m                                 | `1ms`, `2s`, `3m`, `4h`, `5d` or [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) -> `P3Y6M4DT12H30M5S` |                                                                 |
| `filters`    | _Json_         | No        | all            | Custom setting from Mendix to filter metrics  | -                                  | (Refer below)                                                                                            |

### filters (optional)

Filters helps in filtering metrics based on given criterias. Below is the syntax,

```json
"filters" : [
  {"type" : "<filter-type>", "result" : "filter-result", "values": [ "<list-of-filter-values>"] }
]
```

#### type

Type of the filter to apply. Currently supported type is, <br>
`nameStartsWith` : Filters the metric if it is started with the given name

#### result

Result of applying the filter. If the filter matches the criteria, the mentioned result will be applied to the metric. Supported values are: `accept` (or) `deny`

#### values

List of values to be applied in the given filter type

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

The above filter accepts metrics which starts with **"app.", "employee.", "myapp."**

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

The above filter discards metrics which starts with **"Unnamed.", "Invalid.", "Internal."**

### ATTENTION

1. There are also some internal metrics used by Mendix. Please note that, the filters will also have an effect on them. For example metrics emitted by Mendix which starts with "com.mendix." or "mx.".
2. A metric with name & metric with the same name with tags will be considered as different metrics. Example, Metric ("app.counter1") and ("app.counter1" with tag ("version" -> "1")) are different.
3. filters are executed on first come first serve basis. Hence the first applied filter gets the priority. For example, If you have a below setup,

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

    This will work in different ways for metrics like **"app.others.counter"** due to the contradiction with the first `accept` filter **"app."**.

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

## 3 Application tags

Common tags which should be reported by every metric can be specified using the `Metrics.ApplicationTags` setting. This setting should be in JSON format.

**Configuration Key:** `Metrics.ApplicationTags`

```json
{
  "hostId": "7a3c0356-4dab-42ab-a139-87efb497f3e9",
  "environment": "prod"
}
```

## 4 Microflow activities
See the description of these activities [here](metrics-activities).

## 5 Java API

Micrometer metrics can be accessed through Java APIs as well inside mendix. This can be achieved by setting `com.mendix.metrics.Type`. The setting is default to `micrometer` though.

**Configuration Key:** `com.mendix.metrics.Type`
**Configuration Value:** `micrometer`

### Current metrics and usage

Currently supported metrics are `counter`, `gauge`, `timer`. We support [builder pattern](https://blogs.oracle.com/javamagazine/java-builder-pattern-bloch) to create the metrics and support `Tag` & `Description` which can be added to each metrics.

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

In the same way, we can also create `gauge` and `timer` using `createGauge` and `createTimer` methods respectively.

### Deprecated usages

Below are deprecated usages which will be removed in the future releases,

1. `com.mendix.metrics.Type` setting `logger` and `statsd` are deprecated. You will also get a warning message to start using `micrometer` metric type.
2. In Java API methods `counter()`, `timer()`, `gauges()` and `sets()` are deprecated in `Core.metrics()`

## 6 Logging

Metering related log messages are sent to the `Metering` log node. If a registry is enabled that will be reported with severity debug.

## 7 Read More

* [Meter Concepts](https://micrometer.io/docs/concepts)
