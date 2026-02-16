---
title: "Tracing"
url: /refguide/tracing-in-runtime/
description: "Describes how to setup and use tracing in the Mendix Runtime."
---

## Introduction

Mendix supports tracing via OpenTelemetry. When tracing is enabled, the runtime generates traces that help you analyze errors and performance.
These traces can be sent to observability tools like [Jaeger](https://www.jaegertracing.io/) or [Datadog](https://www.datadoghq.com/).

{{% alert color="warning" %}}
Tracing is currently not supported on Mendix Cloud and Mendix Cloud Dedicated.
{{% /alert %}}

## Generated spans

The runtime generates spans for the following:

* Runtime operations coming from the front end, for example, microflow calls, retrieves, commits, and deletes
* Microflow execution within the runtime, including sub-microflow calls
* Microflow loops and loop iterations
* Execution of task queue tasks

## Configuration

### Minimal Configuration {#min-configuration}

You can enable tracing from the `App Settings` -> `Configuration` dialog. In the `Tracing` tab, you can enable tracing and specify an **Endpoint** and **Service Name**.

{{< figure src="/attachments/refguide/runtime/tracing-in-runtime/tracing-configuration.png" >}}

### Filtering

{{% alert color="info" %}}
Filtering was introduced in Mendix 11.5.0.
{{% /alert %}}

You can filter out specific traces using the `mendix.tracing.filter` system property. The specified spans and their sub-spans will be filtered out.

`matchType` specifies how the name of the span is matched. The `matchType` must be set to `partial`. This checks if the span name contains the provided value.

```json
[
  {
    "type": "drop", "matchType": "partial", "spanName": "Loop"
  }
]
```

### Testing

You can test the tracing using [Jaeger](https://www.jaegertracing.io/). For example, you can use the all-in-one binary or Docker image. Jaeger will listen to endpoint `http://localhost:4318/v1/traces` by default.

Alternatively, you can set up the [OpenTelemetry collector](https://opentelemetry.io/docs/collector/), which will also listen to the default endpoint and can be configured to send to backends which support OpenTelemetry. Check with your APM vendor to confirm that OpenTelemetry is supported. The free online collector configuration tool [OTelBin](https://github.com/dash0hq/otelbin) can help with collector configuration.

### All settings

The following settings are supported by the Mendix runtime. See [Configure the SDK](https://opentelemetry.io/docs/languages/java/configuration/#environment-variables-and-system-properties) for more information about the settings that are prefixed with `otel.`.

You can configure the Java Agent through system properties which can be added to the **Extra JVM parameters** field (for example, `-Dotel.exporter.otlp.traces.endpoint`), or set through environment variables. 

| Name | Description | Default |
|------|-------------|---------|
| `otel.service.name` | The name of the service. | `runtimelauncher` |
| `otel.resource.attributes` | Extra resource attributes to include in every span. Example: `attribute1=value1,attribute2=value2` | |
| `otel.traces.exporter` | Comma-separated list of span exporters. Supported values are: `otlp`, `console`, `logging-otlp`, and `none`. | `otlp` |
| `otel.exporter.otlp.traces.protocol` | The transport protocol to use on OTLP trace requests. Options include `grpc` and `http/protobuf`. | `http/protobuf` (Java Agent) |
| `otel.exporter.otlp.traces.endpoint` | The endpoint to send all OTLP traces to. It must be a URL with a scheme of either http or https, based on the use of TLS. | `http://localhost:4318/v1/traces` when the protocol is `http/protobuf`<br>`http://localhost:4317` when the protocol is `grpc` |
| `otel.exporter.otlp.traces.certificate` | The path to the file containing trusted certificates to use when verifying a trace server's TLS credentials. The file should contain one or more X.509 certificates in PEM format. | By default the host platform's trusted root certificates are used. |
| `otel.exporter.otlp.traces.client.key` | The path to the file containing the private client key to use when verifying a trace client's TLS credentials. The file should contain one private key in PKCS8 PEM format. | By default no client key file is used. |
| `otel.exporter.otlp.traces.client.certificate` | The path to the file containing trusted certificates to use when verifying a trace client's TLS credentials. The file should contain one or more X.509 certificates in PEM format. | By default no certificate file is used. |
| `mendix.tracing.max.microflow.depth` | Specifies the maximum nesting level of microflow calls for which the system will generate tracing spans. *Introduced in Mendix 11.2.0*. | 10 |
| `mendix.tracing.max.loop.iteration` | Defines the maximum number of loop iterations for which individual tracing spans will be generated within a single microflow loop. *Introduced in Mendix 11.2.0*. | 10 |

## Enabling Tracing for Deployed Applications

You enable tracing for your deployed Mendix application, by the following JVM parameters:

```
-javaagent:mxinstallation/runtime/agents/opentelemetry-javaagent.jar
-Dotel.javaagent.extensions=mxinstallation/runtime/agents/mendix-opentelemetry-agent-extension.jar
-Dotel.service.name=MyServiceName
```

{{% alert color="info" %}}
Replace `MyServiceName` with a meaningful identifier for your service.
{{% /alert %}}

### OpenTelemetry Collector on Different Host

If the OpenTelemetry Collector is not running on the same host as your application, you must also specify the trace export endpoint:

```
-Dotel.exporter.otlp.traces.endpoint=http://collector-host:port
```

{{% alert color="info" %}}
Replace `collector-host` and `port` with the host and port of your OpenTelemetry collector.
{{% /alert %}}

### Docker-Based Deployment

For Docker deployments, you can set the JVM parameters using the `JAVA_TOOL_OPTIONS` environment variable. For example:

```
docker run MyMendixApp \
  -e JAVA_TOOL_OPTIONS="-javaagent:mxinstallation/runtime/agents/opentelemetry-javaagent.jar \
  -Dotel.javaagent.extensions=mxinstallation/runtime/agents/mendix-opentelemetry-agent-extension.jar \
  -Dotel.service.name=MyServiceName \
  -Dotel.exporter.otlp.traces.endpoint=http://collector-host:port"
```

{{% alert color="info" %}}
Replace `MyServiceName` with a meaningful identifier for your service, and `collector-host` and `port` with the host and port of your OpenTelemetry collector.
{{% /alert %}}

## Sending Traces to Datadog

You can export OpenTelemetry traces to Datadog using one of the following two ways: 

* Datadog Distribution of OpenTelemetry (DDOT) 
* OpenTelemetry Collector

### Datadog Distribution of OpenTelemetry (DDOT)

You can deploy DDOT to Kubernetes or Linux (Preview). The default setup provides minimal configuration, allowing it to receive OpenTelemetry traces or logs from your Mendix app and send them to Datadog. With this default configuration, the collector listens on the same ports as your Mendix application.

For installation instructions, refer to the official [DDOT documentation](https://docs.datadoghq.com/opentelemetry/setup/ddot_collector/install).

### OpenTelemetry Collector

You can install the OpenTelemetry Collector on various operating systems, including Windows, macOS, and Linux. 

To use the OpenTelemetry Collector with Datadog, follow these steps:  

1. Install the OpenTelemetry Collector by following the official [installation guide](https://opentelemetry.io/docs/collector/installation/).
2. Install the `otelcol_contrib` package instead of `otelcol` to include Datadog support. 
3. Run the collector with the [appropriate configuration](https://docs.datadoghq.com/opentelemetry/setup/collector_exporter/install/#2---configure-the-datadog-exporter-and-connector) adapted for Datadog.
