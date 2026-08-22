---
title: "Grafana Integration for Private Mendix Platform"
url: /private-mendix-platform/grafana/
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

* Grafana 12.2.1 must be nstalled and accessible. For more information, see [Installing Grafana](#install-grafana).
* Prometheus 3.7.3 must be configured as a metrics data source in Grafana.
* Loki 2.6.1 must be configured as a logs data source in Grafana.
* You must have admin access to Private Mendix Platform settings.
* Private Mendix Platform must be able to reach the Grafana host URL.

## Installing Grafana {#install-grafana}

For information about installing Grafana with Prometheus and Loki, refer to
[Monitoring Environments in Mendix on Kubernetes](/developerportal/deploy/private-cloud-monitor/).

### Example Helm-Based Installation

{{% alert color="info" %}}
The code samples are intended to show the range of available options. No rights can be derived from them, as they are presented as examples only, and may require significant adaptation to work in your own environment. It is your responsibility to interpret and adjust them to fit real-world scenarios.
{{% /alert %}}

```bash
export monitorNs=grafana
export grafanaAdminPass="xxxxx"
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
kubectl create namespace ${monitorNs} --dry-run=client -o yaml | kubectl apply -f -
kubectl --namespace ${monitorNs} create secret generic grafana-admin --from-literal=admin-user=Admin --from-literal=admin-password=${grafanaAdminPass}
helm upgrade --install loki grafana/loki-stack --version='^2.10.2' --namespace=${monitorNs} \
  --set grafana.enabled=true \
  --set grafana.persistence.enabled=true \
  --set grafana.persistence.size=1Gi \
  --set grafana.initChownData.enabled=false \
  --set grafana.admin.existingSecret=grafana-admin \
  --set prometheus.enabled=true \
  --set prometheus.server.persistentVolume.enabled=true \
  --set prometheus.server.persistentVolume.size=50Gi \
  --set prometheus.server.retention=7d \
  --set loki.persistence.enabled=true \
  --set loki.persistence.size=10Gi \
  --set loki.config.chunk_store_config.max_look_back_period=168h \
  --set loki.config.table_manager.retention_deletes_enabled=true \
  --set loki.config.table_manager.retention_period=168h \
  --set promtail.enabled=true \
  --set promtail.containerSecurityContext.privileged=true \
  --set promtail.containerSecurityContext.allowPrivilegeEscalation=true \
  --set prometheus.kubeStateMetrics.enabled=true \
  --set prometheus.kubeStateMetrics.resources.limits.memory=512Mi \
  --set prometheus.cadvisor.enabled=true \
  --set prometheus.nodeExporter.enabled=true \
  --set prometheus.alertmanager.enabled=false \
  --set prometheus.pushgateway.enabled=false
```

The following script automates the deployment of the Grafana Loki-Stack (Loki, Promtail, Prometheus, Grafana) into a Kubernetes cluster using Helm. It also configures persistent storage and basic security settings.

Before running the script:

* Ensure you have kubectl and Helm installed and configured to access your Kubernetes cluster.
* Make sure you have a default StorageClass available in your cluster, or adjust the `kubectl patch storageclass` command if you need to specify a different one.
* Replace 'xxxxx' with a strong password for the Grafana admin user.

```text
# --- Configuration Variables ---
# Define the Kubernetes namespace where all monitoring components will be deployed.
# Using a dedicated namespace helps organize resources and manage access control.
# Define the password for the Grafana 'Admin' user.
# IMPORTANT: Replace 'xxxxx' with a strong, secure password.
# --- Helm Repository Management ---
# Add the official Grafana Helm repository. This repository contains the charts for Loki-Stack, Grafana, etc.
# This command makes the Grafana charts available for Helm to use.
# Update your local Helm chart repositories.
# This fetches the latest information about charts from all added repositories, ensuring you can install
# the most recent versions and bug fixes.
# --- Kubernetes Namespace Creation ---
# Create the Kubernetes namespace defined by the 'monitorNs' variable (e.g., 'grafana').
# '--dry-run=client -o yaml': Generates the YAML output for the namespace without actually creating it.
# '| kubectl apply -f -': Pipes the generated YAML to 'kubectl apply', which then creates the namespace.
# This approach is idempotent, meaning it won't fail if the namespace already exists.
# --- Grafana Admin Secret Creation ---
# Create a Kubernetes secret to store the Grafana administrator username and password.
# This secret is later referenced by the Grafana Helm chart to configure the admin user.
# '--namespace ${monitorNs}': Specifies that the secret should be created in the designated monitoring namespace.
# 'create secret generic grafana-admin': Creates a generic secret named 'grafana-admin'.
# '--from-literal=admin-user=Admin': Sets the username for Grafana to 'Admin'.
# '--from-literal=admin-password=${grafanaAdminPass}': Sets the password for Grafana using the value from 'grafanaAdminPass'.
# --- Set Default StorageClass (Important for Persistent Volumes) ---
# This command identifies the first available StorageClass in your Kubernetes cluster and
# patches it to be the default StorageClass.
# This is crucial because many Helm charts (including Loki-Stack) request Persistent Volumes
# without explicitly specifying a StorageClass. If no default is set, PVCs might remain pending.
#
# 'kubectl get storageclass -o json': Retrieves all StorageClasses in JSON format.
# '| jq -r '.items[0].metadata.name'': Uses 'jq' (a JSON processor) to extract the name
#                                     of the first StorageClass found.
# '-p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'':
#   Patches the identified StorageClass to add the annotation that marks it as the default.
#
# NOTE: If you have multiple StorageClasses and want a specific one to be default,
#       you might need to adjust the 'jq' filter or manually specify the StorageClass name.
# --- Install/Upgrade Grafana Loki-Stack with Helm ---
# This is the main command to deploy the entire monitoring stack.
# 'helm upgrade --install loki grafana/loki-stack':
#   - 'upgrade': Attempts to upgrade an existing release named 'loki'.
#   - '--install': If no release named 'loki' exists, it will install a new one.
#   - 'loki': The name of the Helm release.
#   - 'grafana/loki-stack': Specifies the chart to use from the 'grafana' repository.
#
# '--version='^2.10.2'': Specifies the version range for the loki-stack chart.
#                     '^2.10.2' means any version starting with 2.10.2 but less than 2.11.0.
#                     
# '--namespace=${monitorNs}': Deploys all resources within the specified Kubernetes namespace.
#
# --- Grafana Configuration ---
# '--set grafana.enabled=true': Enables the Grafana dashboard component within the stack.
# '--set grafana.persistence.enabled=true': Enables persistent storage for Grafana.
#                                         This ensures dashboards, users, and settings are saved across restarts.
# '--set grafana.persistence.size=1Gi': Sets the size of the Persistent Volume Claim (PVC) for Grafana to 1 Gigabyte.
# '--set grafana.initChownData.enabled=false': Disables the init container that changes ownership of persistent data.
#                                            This can sometimes cause issues with certain StorageClasses or security contexts.
# '--set grafana.admin.existingSecret=grafana-admin': Tells Grafana to use the Kubernetes secret named 'grafana-admin'
#                                                   (created earlier) for its admin user credentials.
#
# --- Prometheus Configuration ---
# '--set prometheus.enabled=true': Enables the Prometheus monitoring system within the stack.
# '--set prometheus.server.persistentVolume.enabled=true': Enables persistent storage for Prometheus server data.
#                                                        This saves your metrics data.
# '--set prometheus.server.persistentVolume.size=50Gi': Sets the size of the PVC for Prometheus server to 50 Gigabytes.
# '--set prometheus.server.retention=7d': Configures Prometheus to retain metrics data for 7 days.
#
# --- Loki Configuration ---
# '--set loki.persistence.enabled=true': Enables persistent storage for Loki's logs and index data.
#                                      This is crucial for retaining your log data.
# '--set loki.persistence.size=10Gi': Sets the size of the PVC for Loki to 10 Gigabytes.
# '--set loki.config.chunk_store_config.max_look_back_period=168h':
#   Configures Loki's chunk store to allow querying logs up to 168 hours (7 days) back.
# '--set loki.config.table_manager.retention_deletes_enabled=true':
#   Enables Loki's table manager to delete old data based on retention policies.
# '--set loki.config.table_manager.retention_period=168h':
#   Sets Loki's retention period for log data to 168 hours (7 days). Data older than this will be deleted.
#
# --- Promtail Configuration ---
# Promtail is an agent that ships logs from your Kubernetes nodes to Loki.
# '--set promtail.enabled=true': Enables the Promtail agent within the stack.
# '--set promtail.containerSecurityContext.privileged=true':
#   Grants the Promtail container privileged access. This is often required for Promtail
#   to read logs from all directories on the host, including those usually protected.
#   WARNING: Granting privileged access should be done with caution and understanding of security implications.
# '--set promtail.containerSecurityContext.allowPrivilegeEscalation=true':
#   Allows the Promtail process to gain more privileges than its parent process.
#   This is often needed in conjunction with 'privileged=true'.
#
# --- Prometheus Exporters Configuration ---
# Exporters are agents that expose metrics from various services for Prometheus to scrape.
# '--set prometheus.kubeStateMetrics.enabled=true':
#   Enables kube-state-metrics, which provides metrics about the state of Kubernetes objects
#   (e.g., deployments, pods, nodes).
# '--set prometheus.kubeStateMetrics.resources.limits.memory=512Mi':
#   Sets a memory limit of 512 MiB for the kube-state-metrics pod to prevent it from consuming excessive resources.
# '--set prometheus.cadvisor.enabled=true':
#   Enables cAdvisor, which collects resource usage and performance metrics from containers.
#   This is typically run as part of the Kubelet on each node.
# '--set prometheus.nodeExporter.enabled=true':
#   Enables the Prometheus Node Exporter, which exposes host-level metrics (CPU, memory, disk, network)
#   from the Kubernetes nodes.
# '--set prometheus.alertmanager.enabled=false': Disables the Prometheus Alertmanager component.
#                                              Enable this if you need alerting functionality.
# '--set prometheus.pushgateway.enabled=false': Disables the Prometheus Pushgateway component.
#                                             Enable this if you have ephemeral jobs that push metrics.
```

## Generating a Grafana API Key {#grafana-api-key}

Private Mendix Platform requires an Admin-level API key to authenticate with Grafana. To configure the key, perform the following steps:

1. Recommended: Create a Service Account. 

    {{< figure src="/attachments/private-platform/pmp-grafana2.png" class="no-border" >}}
 
    1. Log into Grafana as an Admin
    2. Go to **Administration > Service Accounts**.
    3. Click **Add service account**, and add an account like the following:

        * **Name** - *PMP-integration*
        * **Role** - Admin
    
    4. Click **Create**.

2. Generate an API token.

    {{< figure src="/attachments/private-platform/pmp-grafana3.png" class="no-border" >}}
 
    1. Click the **PMP-integration** service account.
    2. Click **Add service account token**, and add a token like the following:

        * **Token name** - *PMP-key*
        * **Expiration** - Leave blank (no expiration), or set as needed

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

To configure Private Mendix Platform for Grafana, perform the following steps:

1. Access the Private Mendix Platform admin settings.

    1. Log into Private Mendix Platform as an administrator.
    2. Go to `https://<pmp_base_url>>/link/manage/cluster-manager`.

2. Provide the Grafana configuration.

    1. Click **Register new cluster**.
    2. Fill in the following information:

        * **Grafana Host** - Full URL to Grafana, for example, `https://grafana.yourcompany.com`
        * **Grafana API Key** - The admin API key generated in [Generating a Grafana API Key](#grafana-api-key), for example, `glsa_abc123...`
        * **Prometheus Name** - Data source name in Grafana, for example, `prometheus`
        * **Loki Name** - Data source name in Grafana, for example, `loki`

    {{< figure src="/attachments/private-platform/pmp-grafana4.png" class="no-border" >}}

3. Click **Save**.

## Verification

After configuring Private Mendix Platform, verify that it can retrieve data by navigating to any Private Mendix Platform dashboard that displays metrics or logs.

{{< figure src="/attachments/private-platform/pmp-grafana5.png" class="no-border" >}}

## Grafana APIs Details

Private Mendix Platform uses the following Grafana endpoints:

* `GET /api/health` - This endpoint is used to check the health and status of the Grafana instance itself. It allows Private Mendix Platform to get the Grafana version and verify that Grafana is running before saving the logging and monitoring configuration.
* `GET /api/datasources` - This endpoint is used to fetch the unique identifiers (IDs) of datasources, like Loki (logs) and Prometheus (metrics). These IDs are required for subsequent queries.
* `GET /api/datasources/proxy/uid/:uid/*`  - This endpoint acts as a proxy for calls to the data source identified by the specified UID. Private Mendix Platform uses this to call Loki and Prometheus APIs to query logs and labels.
* `GET /loki/api/v1/query_range` - This is the primary endpoint for fetching log data. Private Mendix Platform uses this Loki API to query application logs over a specific time range. The results of this query are used for real-time monitoring, and displayed within the Private Mendix Platform interface.
* `GET /api/v1/labels` (Prometheus API through Grafana) - This endpoint queries the available labels from Prometheus. Private Mendix Platform uses this to check if a specific label (for example, `namespace`) exists in Prometheus.
* `GET /api/v1/label/pod/values` (Prometheus API through Grafana) - This endpoint retrieves the list of all unique pod names for a target environment. This is used to populate the filter dropdown in the Private Mendix Platform interface.
* `POST /api/ds/query?ds_type=prometheus` - This is a universal Grafana API endpoint for executing queries on a specific data source. Private Mendix Platform uses it to send PromQL queries to the Prometheus data source to fetch metric data for the Metrics dashboard.

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

For more information about Grafana and Prometheus API integration, see [Monitoring Environments in Mendix on Kubernetes](/developerportal/deploy/private-cloud-monitor/).