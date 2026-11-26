---
title: "Grafana Integration for Private Mendix Platform"
url: /private-mendix-platform/grafana/
banner: "Grafana, Loki, and Prometheus are the recommended monitoring stack for Kubernetes-based services like Private Mendix Platform. The customer is responsible for configuring the stack. The document below is provided for reference purposes only and no rights or expectations can be derived from it. Private Mendix Platform Certified Customers and Partners are ultimately responsible for the monitoring implementation, and should exercise all due diligence and care in using the examples provided in the document."
description: "Provides information on Grafana integration options for Private Mendix Platform."
weight: 52
---

## Introduction

This document explains how to integrate Private Mendix Platform with an existing Grafana installation. Private Mendix Platform requires access to Grafana's API to retrieve monitoring data (metrics and logs).

Follow this guide to configure the following values:

* A Grafana API Key for Private Mendix Platform authentication
* Private Mendix Platform configured to connect to your Grafana instance
* Successful data retrieval from Prometheus and Loki

The following diagram shows how Private Mendix Platform (PMP) uses Grafana:

{{< figure src="/attachments/private-platform/pmp-grafana1.png" class="no-border" >}}

## Prerequisites

To configure Grafana integration for your environment, make sure that you fulfill the following prerequisites:

* Grafana 12.4.x must be installed and accessible. For more information, see [Installing Grafana](#install-grafana).
* Prometheus 3.13.x must be configured as a metrics data source in Grafana.
* The logs data source in Grafana is either Loki (available for all cluster types) or Azure Monitor (available only for AKS-type clusters). If you use Loki, Private Mendix Platform supports Loki 3.7.x.
* If you use Loki, Kube event exporter must be deployed in the cluster and configured to push events to Loki. The event exporter is not needed if Azure Monitor is configured as the data source.
* You must have admin access to Private Mendix Platform settings.
* Private Mendix Platform must be able to reach the Grafana host URL.

## Installing Grafana and Other Components {#install-grafana}

Install the monitoring components with Helm, using the official charts. The following components and versions have been tested with Private Mendix Platform:

| Component | Helm Chart | App version |
| --- | --- | --- |
| Grafana Alloy | `alloy-1.15.0` | `v1.21.3` |
| Grafana | `grafana-11.6.1` and `grafana-14.4.0` | `12.4.3` and `13.3.0` |
| Loki | `loki-21.0.0` | `3.7.9` |
| Prometheus | `kube-prometheus-stack-92.18.0` | `v0.94.2` |

### Prometheus – Scraping Mendix App Pods

To collect Mendix app environment metrics for a specific environment, Prometheus needs to discover and scrape pods with the following annotations:

* `privatecloud.mendix.com/component`: `mendix-app`
* `privatecloud.mendix.com/app`: *Environment internal name*

Each Mendix app pod listens on port `8900` and provides a `/metrics` path that can be called by Prometheus to get metrics from a specific app Pod.

Prometheus supports [multiple ways](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config) to set up metrics scraping. The easiest way is to use pod annotations. It is possible to specify annotations for all Mendix app environments in the namespace, or set annotations only for specific environments.

To enable scraping annotations, perform the following steps:

1. If you want to enable scraping for all environments in a namespace, add the following `runtimeDeploymentPodAnnotations` in the [Mendix App Deployment settings](/developerportal/deploy/private-cloud-cluster/#advanced-deployment-settings):

    ```yaml
    apiVersion: privatecloud.mendix.com/v1alpha1
    kind: OperatorConfiguration
    spec:
      # Existing configuration
      # ...
      runtimeDeploymentPodAnnotations:
        # Existing annotations
        # ...
        # Add these new annotations:
        prometheus.io/path: /metrics
        prometheus.io/port: '8900'
        prometheus.io/scrape: 'true'
    ```

2. If you want to enable scraping only for a specific environment, open the environment's `MendixApp` CR [for editing](/developerportal/deploy/private-cloud-operator/#edit-cr) and add the following pod annotations:
    
    ```yaml
    apiVersion: privatecloud.mendix.com/v1alpha1
    kind: MendixApp
    metadata:
      name: example-mendixapp
    spec:
      # Existing configuration
      # ...
      runtimeDeploymentPodAnnotations:
        # Existing annotations
        # ...
        # Add these new annotations:
        prometheus.io/path: /metrics
        prometheus.io/port: '8900'
        prometheus.io/scrape: 'true'
    ```

3. Save and apply the changes.
4. Restart or redeploy the apps for the pod annotations to take effect.
5. In the `kube-prometheus-stack` values, under `prometheus.prometheusSpec.additionalScrapeConfigs`, add a pod scrape job to Prometheus that keeps annotated pods and sets the namespace and pod labels:

    ```text
    - job_name: kubernetes-pods
      honor_labels: true
      kubernetes_sd_configs:
        - role: pod
      relabel_configs:
        - action: keep
          regex: "true"
          source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        - action: replace
          regex: (.+)
          source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
          target_label: __metrics_path__
        - action: replace
          regex: (\d+);((([0-9]+?)(\.|$)){4})
          replacement: $2:$1
          source_labels:
            - __meta_kubernetes_pod_annotation_prometheus_io_port
            - __meta_kubernetes_pod_ip
          target_label: __address__
        - action: labelmap
          regex: __meta_kubernetes_pod_label_(.+)
        - action: replace
          source_labels: [__meta_kubernetes_namespace]
          target_label: namespace
        - action: replace
          source_labels: [__meta_kubernetes_pod_name]
          target_label: pod
    ```

Private Mendix Platform queries Prometheus by the labels namespace, pod, and container. `Alertmanager` and `NodeExporter` can remain disabled in the Prometheus chart without affecting Private Mendix Platform's ability to retrieve the correct data.

### Alloy – Labeling Pod Logs

Private Mendix Platform queries Loki by the labels namespace, pod, container, and app. Use the following Alloy configuration to set them:

```text
discovery.kubernetes "pods" {
  role = "pod"
}
discovery.relabel "pods" {
  targets = discovery.kubernetes.pods.targets
  rule {
    source_labels = ["__meta_kubernetes_namespace"]
    target_label  = "namespace"
  }
  rule {
    source_labels = ["__meta_kubernetes_pod_name"]
    target_label  = "pod"
  }
  rule {
    source_labels = ["__meta_kubernetes_pod_container_name"]
    target_label  = "container"
  }
  rule {
    source_labels = ["__meta_kubernetes_pod_controller_name"]
    regex         = "([0-9a-z-.]+?)(-[0-9a-f]{8,10})?"
    target_label  = "__tmp_controller_name"
  }
  rule {
    source_labels = [
      "__meta_kubernetes_pod_label_app_kubernetes_io_name",
      "__meta_kubernetes_pod_label_app",
      "__tmp_controller_name",
      "__meta_kubernetes_pod_name",
    ]
    regex         = "^;*([^;]+)(;.*)?$"
    target_label  = "app"
  }
}
loki.source.kubernetes "pods" {
  targets    = discovery.relabel.pods.output
  forward_to = [loki.write.default.receiver]
}
loki.write "default" {
  endpoint {
    url = "http://<loki-gateway-host>/loki/api/v1/push"
  }
}
```

### Kubernetes Event Exporter

Private Mendix Platform reads app events from Loki using the stream label `k8sEventExporter="mxAppEvent"`. The event lines must be compact JSON containing the fields namespace and name of the involved object. Configure the exporter as follows:

```text
logFormat: json
omitLookup: true
route:
  routes:
    - match:
        - receiver: loki
receivers:
  - name: loki
    loki:
      url: http://<loki-gateway-host>/loki/api/v1/push
      streamLabels:
        k8sEventExporter: mxAppEvent
```

#### Additional Considerations

When configuring the Kubernetes Event Exporter, keep in mind the following considerations:

* Run a single replica of the exporter. Multiple replicas push every event more than once.
* If you use another event exporter, make sure it sets the same stream label and JSON fields.

## Grafana Data Sources

This section describes the required configuration for Loki and Azure Monitor to use them as data sources for Grafana.

### Loki

If you use Loki for logs and events, add it as a data source in Grafana.

### Azure Monitor

For AKS clusters, you can use Azure Monitor instead of Loki for logs and events. Metrics still come from Prometheus. In this case, you do not need Alloy and the Kubernetes Event Exporter, because Container Insights stores logs and events in Log Analytics with its own columns (`PodName`, `PodNamespace`, `ContainerName` in `ContainerLogV2`, and `Name`, `Namespace` in `KubeEvents`).

You must configure the following prerequisites:

* Container Insights must be enabled on the AKS cluster and configured to send pod logs (`ContainerLogV2`) and events (`KubeEvents`) to a **Log Analytics** workspace.
* The Azure Monitor data source must be added in Grafana, with the type `grafana-azure-monitor-datasource` and the AKS cluster subscription.
* Authentication of the data source must be configured correctly, using any authentication method that Grafana supports for Azure Monitor. The identity which Grafana uses to authenticate must be able to read the Log Analytics workspace and the AKS cluster resource. You are responsible for selecting and configuring the authentication method. For more information, refer to the [Grafana documentation](https://grafana.com/docs/grafana/latest/datasources/azure-monitor/configure/).

## Generating a Grafana API Key {#grafana-api-key}

Private Mendix Platform requires an Admin-level API key to authenticate with Grafana. To configure the key, perform the following steps:

1. Recommended: Create a Service Account. 

    {{< figure src="/attachments/private-platform/pmp-grafana2.png" class="no-border" >}}
 
    1. Log into Grafana as an Admin
    2. Go to **Administration > Service Accounts**.
    3. Click **Add service account**, and add an account like the following:

        * **Name** – *PMP-integration*
        * **Role** – Admin
    
    4. Click **Create**.

2. Generate an API token.

    {{< figure src="/attachments/private-platform/pmp-grafana3.png" class="no-border" >}}
 
    1. Click the **PMP-integration** service account.
    2. Click **Add service account token**, and add a token like the following:

        * **Token name** – *PMP-key*
        * **Expiration** – Leave blank (no expiration), or set as needed

    3. Click **Generate token**.

{{% alert color="warning" %}}
Save the key immediately. It will only be shown once.
{{% /alert %}}

The key has a format like the following:

```text
glsa_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## Identifying Required Information for Private Mendix Platform

Before configuring Private Mendix Platform, collect these details from your Grafana installation:

| Required Setting | Description | How to Find |
| --- | --- | --- |
| Grafana Host | URL where Grafana is accessible | Your ingress URL or service endpoint |
| Prometheus Name | Data source name for Prometheus | In Grafana, go to **Connections > Data Sources > Prometheus** |
| Loki Name | Data source name for Loki | In Grafana, go to **Connections > Data Sources > Loki** |
| Grafana API Key | Admin API token | Generated in [Generating a Grafana API Key](#grafana-api-key) |

### Default Names When Using Loki Stack

If you installed using the Grafana Loki Stack Helm chart, the default data source names are as follows:

| Data Source | Default Name |
| --- | --- |
| Prometheus | `prometheus` |
| Loki | `loki` |

## Configuring Private Mendix Platform

To configure a Private Mendix Platform cluster for Grafana, perform the following steps:

1. Access the Private Mendix Platform admin settings.

    1. Log into Private Mendix Platform as an administrator.
    2. In the **Manage** section of the admin menu, go to **Deployment > Cluster Manager**.

2. Provide the Grafana configuration.

    1. Either edit an existing cluster, or click **Register new cluster** and specify the **Cluster Type**.
    2. In the **Logging and Monitoring** section, set **Use Grafana and Loki** and **Use Prometheus** to **Yes**.
    3. Fill in the following information:

        * **Grafana Host** – Full URL to Grafana, for example, `https://grafana.yourcompany.com`.
        * **Grafana API Key** – The admin API key generated in [Generating a Grafana API Key](#grafana-api-key), for example, `glsa_abc123...`.
        * **Data Source Type** – Select **Loki** or **Azure Monitor**.
        * **Prometheus Name** – Data source name in Grafana, for example, `prometheus`.
        * **Loki Name** – Data source name in Grafana, for example, `loki`; required when the data source type is set to Loki.
        * **Azure Monitor Name** – The name of the Azure Monitor data source in Grafana; required when the data source type is set to Azure Monitor.
        * **AKS Name** – The AKS cluster from which to collect logs; required when the data source type is set to Azure Monitor.
        * **Resource ID** – The Azure resource ID of the AKS cluster. It is filled in automatically when you select the AKS cluster. Required when the data source type is set to Azure Monitor.

    {{< figure src="/attachments/private-platform/pmp-grafana4.png" class="no-border" >}}

3. Configure any other required settings and click **Save**.

## Verification

After configuring Private Mendix Platform, verify that it can retrieve data by navigating to any Private Mendix Platform dashboard that displays metrics or logs.

You can filter the results by the following properties:

* **Container** – The container instance.
* **Timespan** – The date and time range to display.
* **Filter by Log Level** – The highest log level to display. The following log levels are available:

    * **Trace** – Provides highly detailed information. Trace level messages are written only to logs.
    * **Debug** – Provides detailed information, typically of interest only when diagnosing problems.
    * **Info** – Confirms that things are working as expected.
    * **Warning** – Indicates that something unexpected happened or warns about an upcoming problem (for example, *disk space low*). The application is still working as expected.
    * **Error** – Indicates a serious problem that prevented the application from performing some function.
    * **Critical** – Indicates that a serious error has occurred; the application may be unable to continue running.

## Grafana APIs Details

Private Mendix Platform uses the following Grafana endpoints:

* `GET /api/health` – This endpoint is used to check the health and status of the Grafana instance itself. It allows Private Mendix Platform to get the Grafana version and verify that Grafana is running before saving the logging and monitoring configuration.
* `GET /api/datasources` – This endpoint is used to fetch the unique identifiers (IDs) of datasources, like Loki (logs) and Prometheus (metrics). These IDs are required for subsequent queries.
* `GET /api/datasources/proxy/uid/:uid/*`  – This endpoint acts as a proxy for calls to the data source identified by the specified UID. Private Mendix Platform uses this to call Loki and Prometheus APIs to query logs and labels.
* `GET /loki/api/v1/query_range` – This is the primary endpoint for fetching log data. Private Mendix Platform uses this Loki API to query application logs over a specific time range. The results of this query are used for real-time monitoring, and displayed within the Private Mendix Platform interface.
* `GET /api/v1/labels` (Prometheus API through Grafana) – This endpoint queries the available labels from Prometheus. Private Mendix Platform uses this to check if a specific label (for example, `namespace`) exists in Prometheus.
* `GET /api/v1/label/pod/values` (Prometheus API through Grafana) – This endpoint retrieves the list of all unique pod names for a target environment. This is used to populate the filter dropdown in the Private Mendix Platform interface.
* `POST /api/ds/query?ds_type=prometheus` – This is a universal Grafana API endpoint for executing queries on a specific data source. Private Mendix Platform uses it to send PromQL queries to the Prometheus data source to fetch metric data for the Metrics dashboard.

## Metrics and Labels

The following sections list the metrics and labels used by each graph.

### Number of Handled External Requests

{{< figure src="/attachments/private-platform/pmp-grafana6.png" class="no-border" >}}

| Metric Name | Required Labels |
| --- | --- |
| `mx_runtime_stats_handler_requests_total` | `namespace`; `pod`; `name(name!="" or name="")` |

### User Accounts and Login Sessions

{{< figure src="/attachments/private-platform/pmp-grafana7.png" class="no-border" >}}

| Metric Name | Required Labels |
| --- | --- |
| `mx_runtime_stats_sessions_named_users`; `mx_runtime_stats_sessions_named_user_sessions`; `mx_runtime_stats_sessions_anonymous_sessions` | `namespace`; `pod` |

### JVM Process Memory Usage

{{< figure src="/attachments/private-platform/pmp-grafana8.png" class="no-border" >}}

| Metric Name | Required Labels |
| --- | --- |
| `jvm_memory_used_bytes` | `namespace`; `pod` | 
| `jvm_memory_committed_bytes` | `namespace`; `pod`; `area=”heap”/”nonheap”` | 
| `kube_pod_container_resource_limits` | `namespace`; `pod`; `container="mendix"`; `resource="memory"`; `unit="byte"` |
| `container_memory_usage_bytes` | `namespace`; `pod`; `container="mendix"` |

### JVM heap contents

{{< figure src="/attachments/private-platform/pmp-grafana9.png" class="no-border" >}}

| Metric Name | Required Labels |
| --- | --- |
| `jvm_memory_used_bytes`; `jvm_memory_committed_bytes`; `jvm_memory_max_bytes` | `namespace`; `pod`; `area=”heap”` |

### Threadpool for Handling External Requests

{{< figure src="/attachments/private-platform/pmp-grafana10.png" class="no-border" >}}

| Metric Name | Required Labels |
| --- | --- |
| `jetty_threads_config_max`; `jetty_threads_config_min`; `jetty_threads_current`; `jetty_threads_idle`; `jetty_threads_busy`; `jetty_threads_jobs` | `namespace`; `pod` |

### Total Number of Threads

{{< figure src="/attachments/private-platform/pmp-grafana11.png" class="no-border" >}}

| Metric Name | Required Labels |
| --- | --- |
| `container_threads` | `namespace`; `pod`; `container="mendix"` |
| `jvm_threads_live_threads`; `jvm_threads_daemon_threads` | `namespace`; `pod` |

### Container CPU Usage

{{< figure src="/attachments/private-platform/pmp-grafana12.png" class="no-border" >}}

| Metric Name | Required Labels |
| --- | --- |
| `container_cpu_usage_seconds_total` | `namespace`; `pod`; `container="mendix"` |
| `kube_pod_container_resource_requests`; `kube_pod_container_resource_limits` | `namespace`; `pod`; `container="mendix"`; `resource="cpu"`; `unit="core"` |

### Network

{{< figure src="/attachments/private-platform/pmp-grafana13.png" class="no-border" >}}

| Metric Name | Required Labels |
| --- | --- |
| `container_network_transmit_bytes_total`; `container_network_receive_bytes_total`; `jetty_connections_bytes_in_bytes_sum`; `jetty_connections_bytes_out_bytes_sum` | `namespace`; `pod` |
