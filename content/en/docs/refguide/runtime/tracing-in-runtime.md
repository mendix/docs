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

### Minimal configuration

The minimal configuration to enable tracing is:

* Set the `OpenTelemetry.Enabled` [runtime setting](/refguide/custom-settings/) to `true`
* Set the `otel.service.name` runtime setting to a service name

This will enable tracing. The traces will be sent to http://localhost:4317.

To test you can use [Jaeger](https://www.jaegertracing.io/), for example the all-in-one binary or docker image. Jaeger will listen to the above endpoint by default.

Alternatively you can set up the [OpenTelemetry collector](https://opentelemetry.io/docs/collector/), which will also listen to the default endpoint and can be configured to send to backends which support OpenTelemetry. Check with your APM vendor to confirm that OpenTelemetry is supported. The free online collector configuration tool [OTelBin](https://github.com/dash0hq/otelbin) can help with collector configuration.

### All settings

Below we list the supported tracing-related runtime settings. See [Configure the SDK](https://opentelemetry.io/docs/languages/java/configuration/#environment-variables-and-system-properties) for a reference on the settings that are prefixed with `otel.`.

| Name | Description | Default |
|------|-------------|---------|
| `OpenTelemetry.Enabled` | Can be set to `true` or `false` in order to disable or enable tracing.<br/> {{% alert color="info" %}} We support dynamically enabling/disabling tracing using this setting, but the other settings will only be applied the first time you enable tracing.{{% /alert %}} | `false` |
| `otel.service.name` | The name of the service. | `unknown_service:java` |
| `otel.resource.attributes` | The resource attributes to include in every span. Example: `attribute1=value1,attribute2=value2` | |
| `otel.traces.exporter` | Comma-separated list of span exporters. Supported values are: `otlp`, `console`, `logging-otlp`, and `none`. | `otlp` |
| `otel.exporter.otlp.traces.protocol` | The transport protocol to use on OTLP trace requests. Options include `grpc` and `http/protobuf`. | `grpc` |
| `otel.exporter.otlp.traces.endpoint` | The endpoint to send all OTLP traces to. It must be a URL with a scheme of either http or https based on the use of TLS. | `http://localhost:4317` when the protocol is `grpc`<br>`http://localhost:4318` when the protocol is `http/protobuf` |
| `otel.exporter.otlp.traces.certificate` | The path to the file containing trusted certificates to use when verifying a trace server's TLS credentials. The file should contain one or more X.509 certificates in PEM format. | By default the host platform's trusted root certificates are used. |
| `otel.exporter.otlp.traces.client.key` | The path to the file containing the private client key to use when verifying a trace client's TLS credentials. The file should contain one private key in PKCS8 PEM format. | By default no client key file is used. |
| `otel.exporter.otlp.traces.client.certificate` | The path to the file containing trusted certificates to use when verifying a trace client's TLS credentials. The file should contain one or more X.509 certificates in PEM format. | By default no certificate file is used. |

In addition to the above settings, additional settings for OpenTelemetry can be passed as environment variables or system properties. We do not explicitly support these settings, but they will all be passed to the OpenTelemetry system in the runtime. [See here for a list of all OpenTelemetry settings.](https://opentelemetry.io/docs/languages/java/configuration/#environment-variables-and-system-properties)
