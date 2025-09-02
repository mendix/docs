---
title: "Tracing"
url: /refguide/tracing-in-runtime/
description: "Describes how to setup and use tracing in the Mendix Runtime."
---

## Introduction

Mendix now supports tracing via OpenTelemetry. When tracing is enabled the runtime will generate traces that will help you analyze errors and performance.
These traces can be sent to observability tools like [Jaeger](https://www.jaegertracing.io/) or [Datadog](https://www.datadoghq.com/).

{{% alert color="warning" %}}
Tracing is currently not supported on Mendix Cloud and Mendix Cloud Dedicated.
{{% /alert %}}

## Generated spans

The runtime generates spans for:

* Runtime operations coming from the front end, for example microflow calls, retrieves, commits, and deletes
* Microflow execution within the runtime, including sub-microflow calls
* Microflow loops and loop iterations
* Execution of task queue tasks

## Configuration

### Minimal Configuration {#min-configuration}

Tracing can be enabled from the `App Settings` -> `Configuration` dialog. In the `Tracing` tab you can enable tracing and specify an **Endpoint** and **Service Name**.

{{< figure src="/attachments/refguide/runtime/tracing-in-runtime/tracing-configuration.png" >}}

### Testing

To test the tracing you can use [Jaeger](https://www.jaegertracing.io/). For example, the all-in-one binary or docker image. Jaeger will listen to the above endpoint by default.

Alternatively you can set up the [OpenTelemetry collector](https://opentelemetry.io/docs/collector/), which will also listen to the default endpoint and can be configured to send to backends which support OpenTelemetry. Check with your APM vendor to confirm that OpenTelemetry is supported. The free online collector configuration tool [OTelBin](https://github.com/dash0hq/otelbin) can help with collector configuration.

### All settings

Below we list the ones that are supported by the Mendix runtime. See [Configure the SDK](https://opentelemetry.io/docs/languages/java/configuration/#environment-variables-and-system-properties) for a reference on the settings that are prefixed with `otel.`.

The Java Agent can be configured through system properties, which can be added to the **Extra JVM parameters** field (for example, `-Dotel.exporter.otlp.traces.endpoint`), or set through environment variables. 

| Name | Description | Default |
|------|-------------|---------|
| `otel.service.name` | The name of the service. | `runtimelauncher` |
| `otel.resource.attributes` | Extra resource attributes to include in every span. Example: `attribute1=value1,attribute2=value2` | |
| `otel.traces.exporter` | Comma-separated list of span exporters. Supported values are: `otlp`, `console`, `logging-otlp`, and `none`. | `otlp` |
| `otel.exporter.otlp.traces.protocol` | The transport protocol to use on OTLP trace requests. Options include `grpc` and `http/protobuf`. | `http/protobuf` (Java Agent) |
| `otel.exporter.otlp.traces.endpoint` | The endpoint to send all OTLP traces to. It must be a URL with a scheme of either http or https based on the use of TLS. | `http://localhost:4318/v1/traces` when the protocol is `http/protobuf`<br>`http://localhost:4317` when the protocol is `grpc` |
| `otel.exporter.otlp.traces.certificate` | The path to the file containing trusted certificates to use when verifying a trace server's TLS credentials. The file should contain one or more X.509 certificates in PEM format. | By default the host platform's trusted root certificates are used. |
| `otel.exporter.otlp.traces.client.key` | The path to the file containing the private client key to use when verifying a trace client's TLS credentials. The file should contain one private key in PKCS8 PEM format. | By default no client key file is used. |
| `otel.exporter.otlp.traces.client.certificate` | The path to the file containing trusted certificates to use when verifying a trace client's TLS credentials. The file should contain one or more X.509 certificates in PEM format. | By default no certificate file is used. |
