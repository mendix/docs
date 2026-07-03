---
title: "OpenTelemetry for Mendix Cloud"
url: /developerportal/operate/opentelemetry/
weight: 15
description: "How to configure Mendix Cloud to send traces, metrics, and logs to an OpenTelemetry-compatible observability backend."
---

## Introduction

Mendix Cloud supports sending telemetry—traces, metrics, and logs—directly to any [OpenTelemetry](https://opentelemetry.io/) Protocol (OTLP)-compatible observability backend, such as Grafana Cloud.

When enabled, the Mendix operator automatically injects an OpenTelemetry Collector sidecar container alongside your application. This sidecar receives telemetry from the Mendix Runtime and forwards it to your chosen backend. No manual installation of the collector is required.

For more information about what metrics and data Mendix provides, see [Monitoring Your Mendix Apps with an APM Tool](/developerportal/operate/monitoring-with-apm/).

{{% alert color="info" %}}
The OpenTelemetry integration requires Mendix Runtime **10.24.12** and above, or **11.5** and above.
{{% /alert %}}

## Prerequisites

This integration exclusively supports destinations that ingest telemetry via standard core exporters. Compatible backends include any vendor or platform that natively accepts inbound OTLP (via gRPC or HTTP) or Prometheus Remote Write (PRW) streams. Custom, proprietary vendor SDK exporters are not supported.

Before connecting your app to an OpenTelemetry backend, ensure you have:

* Access to an OTLP-compatible observability backend (for example, Grafana Cloud)
* The OTLP ingestion endpoint URL for your backend
* An API token or other credentials for authenticating with the backend
* A licensed Mendix Cloud app

## Connecting Your Node to an OpenTelemetry Backend{#connect-node}

To connect your Mendix Cloud environment to an OpenTelemetry backend:

1. Go to [Apps](https://sprintr.home.mendix.com/).
2. Click **Environments** on the app of choice.
3. Click **Details** ({{% icon name="notes-paper-edit" %}}) for the environment you want to configure.
4. Go to the **Runtime** tab.
5. In the **Custom Environment Variables** section, add the following environment variables:

    | Variable | Description | Default |
    |---|---|---|
    | `MX_OTEL_ENABLED` | Master switch. Set to `true` to enable the integration. | `false` |
    | `MX_OTEL_EXPORTER_OTLP_ENDPOINT` | OTLP ingestion URL for all signals (traces, metrics, and logs). | — |
    | `MX_OTEL_EXPORTER_OTLP_HEADERS` | HTTP headers sent with every request. Used for authentication. Format: `key1=value1,key2=value2`. | — |
    | `MX_OTEL_EXPORTER_OTLP_PROTOCOL` | Transport protocol. One of `grpc`, `http/protobuf`, or `http/json`. | `http/protobuf` |

6. Optionally, set service identity variables to control how your app appears in your observability backend. For more information, refer to the [Service Identity](#service-identity) section below.
7. Click **Save**.

{{% alert color="warning" %}}
You need to redeploy your app, not just restart it, for the OpenTelemetry integration to take effect. The sidecar is injected at deploy time.
{{% /alert %}}

### Example – Grafana Cloud

Grafana Cloud exposes a single OTLP endpoint for all signals over HTTPS. To connect your app:

1. In your Grafana Cloud stack, navigate to **Getting Started guide** > **OpenTelemetry** > **Serverless/Other**.
2. Create an access policy token with `metrics:write`, `logs:write`, and `traces:write` scopes.
3. Copy the OTLP endpoint URL and your token.
4. Set the following environment variables in your Mendix environment:

    ```
    MX_OTEL_ENABLED=true
    MX_OTEL_EXPORTER_OTLP_ENDPOINT=https://otlp-gateway-prod-eu-west-0.grafana.net/otlp
    MX_OTEL_EXPORTER_OTLP_HEADERS=Authorization=Basic BASE64_ENCODED_INSTANCE_ID:TOKEN
    MX_OTEL_SERVICE_NAME=my-mendix-app  # only necessary if you want to override the default service name (app subdomain)
    MX_OTEL_DEPLOYMENT_ENV=production   # only necessary if you want to set the deployment environment (defaults to `none`) or can be set via the `env` application tag
    ```

    Replace `BASE64_ENCODED_INSTANCE_ID:TOKEN` with the base64 encoding of `<instance-id>:<token>` as shown on the Grafana Cloud OTLP configuration page.

5. Redeploy your app.

Within a minute of the first request to your app, traces appear in Grafana Cloud's **Explore** view, and metrics are visible in Prometheus datasource queries.

## Additional Information{#additional-info}

### Per-Signal Configuration{#per-signal}

By default, all three signals—traces, metrics, and logs—are sent to the backend configured with `MX_OTEL_EXPORTER_OTLP_ENDPOINT`. You can control each signal independently using the following variables:

| Variable | Default | Valid values |
| --- | --- | --- |
| `MX_OTEL_TRACES_EXPORTER` | *(inferred)* | `otlp`, `none` |
| `MX_OTEL_METRICS_EXPORTER` | *(inferred)* | `otlp`, `prometheusremotewrite`, `none` |
| `MX_OTEL_LOGS_EXPORTER` | *(inferred)* | `otlp`, `none` |

When not set explicitly, the exporter for each signal is inferred from the endpoint variables that are present. Setting a signal to `none` disables it. The sidecar accepts the data from the Runtime but discards it without forwarding.

### Per-Signal OTLP Overrides

If your backend requires different endpoints, headers, or protocols per signal, you can override the base OTLP configuration for each signal individually:

| Base variable | Traces override | Metrics override | Logs override |
|---|---|---|---|
| `MX_OTEL_EXPORTER_OTLP_ENDPOINT` | `MX_OTEL_EXPORTER_OTLP_TRACES_ENDPOINT` | `MX_OTEL_EXPORTER_OTLP_METRICS_ENDPOINT` | `MX_OTEL_EXPORTER_OTLP_LOGS_ENDPOINT` |
| `MX_OTEL_EXPORTER_OTLP_HEADERS` | `MX_OTEL_EXPORTER_OTLP_TRACES_HEADERS` | `MX_OTEL_EXPORTER_OTLP_METRICS_HEADERS` | `MX_OTEL_EXPORTER_OTLP_LOGS_HEADERS` |
| `MX_OTEL_EXPORTER_OTLP_PROTOCOL` | `MX_OTEL_EXPORTER_OTLP_TRACES_PROTOCOL` | `MX_OTEL_EXPORTER_OTLP_METRICS_PROTOCOL` | `MX_OTEL_EXPORTER_OTLP_LOGS_PROTOCOL` |

{{% alert color="info" %}}
Per-signal headers **fully replace** the base headers, they do not merge. If you set `MX_OTEL_EXPORTER_OTLP_TRACES_HEADERS`, the value of `MX_OTEL_EXPORTER_OTLP_HEADERS` is ignored for traces.
{{% /alert %}}

### Log Redaction{#log-redaction}

Email addresses are automatically redacted from log entries before they are sent to your backend. To disable redaction, set `LOGS_REDACTION` to `false`. By default, this variable is set to `true`.

| Variable | Default | Description |
|---|---|---|
| `LOGS_REDACTION` | `true` | When `true`, email addresses are redacted from log entries before export. Set to `false` to disable email redaction. |

Also, certain secret patterns, such as database connection strings and storage endpoint URLs logged by the Mendix Runtime are always redacted regardless of this setting and cannot be turned off.

### Prometheus Remote Write (Metrics Only){#prometheus-remote-write}

If your metrics backend uses Prometheus Remote Write (for example, Grafana Mimir, Thanos, or VictoriaMetrics), you can send metrics via PRW while still sending traces and logs via OTLP.

| Variable | Default | Description |
| --- | :---: | --- |
| `MX_OTEL_EXPORTER_PROMETHEUSREMOTEWRITE_ENDPOINT` | — | Remote Write URL (for example, `https://mimir.example.com/api/v1/push`). When set and no OTLP endpoint covers metrics, the PRW exporter is selected automatically. You do not need to set `MX_OTEL_METRICS_EXPORTER=prometheusremotewrite` explicitly. |
| `MX_OTEL_EXPORTER_PROMETHEUSREMOTEWRITE_HEADERS` | — | HTTP headers for the PRW endpoint. Format: `key1=value1,key2=value2`. |

OTel resource attributes (service name, version, environment, and custom tags) are automatically converted to Prometheus labels when using this exporter.

**Example - metrics to a PRW endpoint, traces and logs via OTLP:**

```bash
MX_OTEL_ENABLED=true

# Traces and logs via OTLP
MX_OTEL_EXPORTER_OTLP_ENDPOINT=https://otlp.example.com
MX_OTEL_EXPORTER_OTLP_HEADERS=Authorization=Bearer YOUR_OTLP_TOKEN

# Metrics via Prometheus Remote Write (takes precedence over OTLP for metrics)
MX_OTEL_METRICS_EXPORTER=prometheusremotewrite
MX_OTEL_EXPORTER_PROMETHEUSREMOTEWRITE_ENDPOINT=https://mimir.example.com/api/v1/push
MX_OTEL_EXPORTER_PROMETHEUSREMOTEWRITE_HEADERS=Authorization=Bearer YOUR_MIMIR_TOKEN

MX_OTEL_SERVICE_NAME=my-mendix-app
```

### Service Identity{#service-identity}

These variables control the resource attributes attached to all telemetry. They determine how your app is identified in your observability backend.

| Variable | Default | Description |
|---|---|---|
| `MX_OTEL_SERVICE_NAME` | App subdomain | Service name (`service.name` attribute). Defaults to the subdomain of the app's first route (for example, `my-app` from `my-app.mendixcloud.com`). Set this variable to override it. |
| `MX_OTEL_SERVICE_VERSION` | Model version | Service version (`service.version` attribute). Defaults to the Mendix model version. Falls back to the `version` application tag if set, otherwise `unversioned`. |
| `MX_OTEL_DEPLOYMENT_ENV` | `env` tag or `none` | Deployment environment (`deployment.environment.name` attribute). Defaults to the `env` application tag if set, otherwise `none`. |
| `MX_OTEL_RESOURCE_ATTRIBUTES` | _(from app tags)_ | Additional resource attributes as comma-separated `key=value` pairs. Automatically populated from the application tags set in the Developer Portal. Can be set directly to override the tag-derived value. |

### OpenTelemetry Issues

If you encounter issues with the OpenTelemetry integration that are not caused by your backend configuration, submit a support request through [Mendix Support Portal](https://support.mendix.com/).

## Read More

* [Metrics - Mendix Runtime](/refguide/metrics/)
