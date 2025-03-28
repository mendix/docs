---
title: "Tracing"
url: /refguide/tracing-in-runtime/
beta: true
description: "Describes how to setup and use tracing in the Mendix Runtime."
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

Starting in version 10.18.0, Mendix now supports tracing via OpenTelemetry. When tracing is enabled the runtime will generate traces that will help you analyze errors and performance.
These traces can be sent to observability tools like [Jaeger](https://www.jaegertracing.io/) or [Datadog](https://www.datadoghq.com/).

## Generated spans

In Mendix 10.18.0 and above, the runtime generates spans for:

* Runtime operations coming from the front end, for example microflow calls, retrieves, commits, and deletes
* Microflow execution within the runtime, including sub-microflow calls
* Microflow loops and loop iterations
* Execution of task queue tasks

## Configuration

Since Mendix 10.19.0, 

### Minimal Configuration {#min-configuration}

#### Mendix 10.19.0 and Above

In Mendix 10.19 and above, tracing configuration is handled through the [OpenTelemetry Java Agent](https://opentelemetry.io/docs/zero-code/java/agent/). Use the following steps to set up a minimal tracing configuration:

1. Download [opentelemetry-javaagent.jar](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar) from the [OpenTelemetry Java Instrumentation release page](https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases).
1. In the [Server settings](/refguide/configuration/#server) of Studio Pro, locate the field **Extra JVM parameters** and add the following:

    ```
    -javaagent:{/path/to/opentelemetry-javaagent.jar} -Dotel.instrumentation.common.default-enabled=false -Dotel.instrumentation.opentelemetry-api.enabled=true -Dotel.service.name="{My App}"
    ```
  
    * Change `{/path/to/opentelemetry-javaagent.jar}` to the location where you saved the agent earlier. Make sure it is the full absolute path to the file, e.g. `C:\Users\SomeUser\Documents\opentelemetry-javaagent.jar` (Windows) or `/Users/SomeUsers/Documents/opentelemetry-javaagent.jar` (MacOS).
    * Change `{My App}` to the name under which you want your traces to appear.

This will enable Mendix related tracing, while silencing the tracing of internals. The OpenTelemetry Java Agent sends traces to http://localhost:4318/v1/traces using the `http/protobuf` protocol by default.

#### Mendix 10.18

In Mendix 10.18, the minimal configuration to enable tracing is:

* Set the `OpenTelemetry.Enabled` [runtime setting](/refguide/custom-settings/) to `true`
* Set the `otel.service.name` runtime setting to a service name

This will enable tracing. The traces will be sent to http://localhost:4317 using the `grpc` protocol by default.

### Testing

To test the tracing you can use [Jaeger](https://www.jaegertracing.io/). For example, the all-in-one binary or docker image. Jaeger will listen to the above endpoint by default.

Alternatively you can set up the [OpenTelemetry collector](https://opentelemetry.io/docs/collector/), which will also listen to the default endpoint and can be configured to send to backends which support OpenTelemetry. Check with your APM vendor to confirm that OpenTelemetry is supported. The free online collector configuration tool [OTelBin](https://github.com/dash0hq/otelbin) can help with collector configuration.

### All settings

Below we list the ones that are supported by the Mendix runtime. See [Configure the SDK](https://opentelemetry.io/docs/languages/java/configuration/#environment-variables-and-system-properties) for a reference on the settings that are prefixed with `otel.`.

In Mendix 10.19.0 and above, the Java Agent can be configured through system properties, which can be added to the **Extra JVM parameters** field (for example, `-Dotel.exporter.otlp.traces.endpoint`), or set through environment variables. 

| Name | Description | Default |
|------|-------------|---------|
| `otel.service.name` | The name of the service. | `runtimelauncher` *(In Mendix 10.18 `unknown_service:java`)* |
| `otel.resource.attributes` | Extra resource attributes to include in every span. Example: `attribute1=value1,attribute2=value2` | |
| `otel.traces.exporter` | Comma-separated list of span exporters. Supported values are: `otlp`, `console`, `logging-otlp`, and `none`. | `otlp` |
| `otel.exporter.otlp.traces.protocol` | The transport protocol to use on OTLP trace requests. Options include `grpc` and `http/protobuf`. | `http/protobuf` (Java Agent, Mendix 10.19 and higher), `grpc` (Mendix 10.18 only) |
| `otel.exporter.otlp.traces.endpoint` | The endpoint to send all OTLP traces to. It must be a URL with a scheme of either http or https based on the use of TLS. | `http://localhost:4318/v1/traces` when the protocol is `http/protobuf`<br>`http://localhost:4317` when the protocol is `grpc` |
| `otel.exporter.otlp.traces.certificate` | The path to the file containing trusted certificates to use when verifying a trace server's TLS credentials. The file should contain one or more X.509 certificates in PEM format. | By default the host platform's trusted root certificates are used. |
| `otel.exporter.otlp.traces.client.key` | The path to the file containing the private client key to use when verifying a trace client's TLS credentials. The file should contain one private key in PKCS8 PEM format. | By default no client key file is used. |
| `otel.exporter.otlp.traces.client.certificate` | The path to the file containing trusted certificates to use when verifying a trace client's TLS credentials. The file should contain one or more X.509 certificates in PEM format. | By default no certificate file is used. |
| `OpenTelemetry.Enabled` *(Mendix 10.18 only)*| Can be set to `true` or `false` in order to disable or enable tracing. | `false` |
