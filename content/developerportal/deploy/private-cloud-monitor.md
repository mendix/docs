---
title: "Monitoring Environments in Mendix for Private Cloud"
parent: "private-cloud"
description: "Describes the processes for setting up a monitoring solution for Mendix environments in the Private Cloud"
menu_order: 31
tags: ["Monitor", "Logging", "Private Cloud", "Environment"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

{{% alert type="info" %}}Monitoring Mendix for Private Cloud environments is supported in Mendix Operator v2.1.0 and above.{{% /alert %}}

Mendix for Private Cloud provides a [Prometheus](https://prometheus.io/) API that can be scraped by a local Prometheus server.
This API can also be used by other monitoring solutions such as [Datadog](https://docs.datadoghq.com/integrations/prometheus/).

The metrics API can only be accessed inside the Kubernetes cluster, and metrics are never sent to the Mendix Private Cloud Portal.
To collect, store, and display metrics, you will need to install a local monitoring solution.

Mendix for Private Cloud writes all logs to the standard output (`stdout` and `stderr`).
Any Kubernetes log processing solution should be able to read and collect those logs.
This document shows an example how to use [Grafana Loki](https://grafana.com/docs/loki/next/) and [Promtail](https://grafana.com/docs/loki/latest/clients/promtail/) to collect those logs.

This document will help you quickly set up a solution for monitoring Mendix for Private Cloud environments.
You can customize this solution to match the requirements of your team or organization.

## 2 Installing Monitoring Tools{#install-grafana-loki}

If you already have installed Prometheus, Loki, and Grafana in your cluster, you can skip this section and go directly to [enable metrics scraping](#enable-metrics-scraping).

This section contains a quick start guide on how to install Grafana and its dependencies in a cluster by using the [Loki Helm chart](https://grafana.com/docs/loki/latest/installation/helm/).
In addition, this section explains how to install and configure a logging solution based on [Loki](https://grafana.com/docs/loki/next/).

{{% alert type="warning" %}}These instructions have been simplified to make the installation process as easy as possible.

Before installing Prometheus, Loki, and Grafana in a production environment, consult with your cluster administrator and IT security teams
to ensure that this logging/monitoring solution is compliant with your organization's security policies.{{% /alert %}}

### 2.1 Prerequisites

{{% alert type="warning" %}}The Grafana Helm chart doesn't yet support Kubernetes version 1.22 and above.{{% /alert %}}

Before installing Grafana, make sure you have [installed Helm](https://grafana.com/docs/loki/latest/installation/helm/) and can access your Kubernetes cluster.

Download the latest version of the Grafana Helm chart using the following commands:
```
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
```

### 2.2 Installation in Kubernetes{#install-in-k8s}

This section documents how to install Grafana and Prometheus into a Kubernetes cluster.
For installation in OpenShift, use the [Installation in OpenShift](#install-in-openshift) instructions.

#### 2.2.1 Preparations

Create a new namespace (replace `{namespace}` with the namespace name, for example `grafana`):

```shell
kubectl create namespace {namespace}
```

Use the following command to create a secret containing the Grafana admin password: replace `{namespace}` with the namespace name (for example `grafana`); `{username}` with the admin username (for example `admin`); and `{password}` with the admin password:

```shell
kubectl --namespace {namespace} create secret generic grafana-admin --from-literal=admin-user={username} --from-literal=admin-password={password}
```

This username and password can be used later to log into Grafana.

#### 2.2.2 Install the Grafana Loki Stack

Run the following commands in a Bash console, (replace `{namespace}` with the namespace name, for example `grafana`):

```shell
NAMESPACE={namespace}
helm upgrade --install loki grafana/loki-stack --version='^2.5.0' --namespace=${NAMESPACE} --set grafana.enabled=true,grafana.persistence.enabled=true,grafana.persistence.size=1Gi,grafana.initChownData.enabled=false,grafana.admin.existingSecret=grafana-admin \
--set prometheus.enabled=true,prometheus.server.persistentVolume.enabled=true,prometheus.server.persistentVolume.size=50Gi,prometheus.server.retention=7d \
--set loki.persistence.enabled=true,loki.persistence.size=10Gi,loki.config.chunk_store_config.max_look_back_period=168h,loki.config.table_manager.retention_deletes_enabled=true,loki.config.table_manager.retention_period=168h \
--set promtail.enabled=true,promtail.securityContext.privileged=true \
--set prometheus.nodeExporter.enabled=false,prometheus.alertmanager.enabled=false,prometheus.pushgateway.enabled=false
```

This Helm chart will install and configure Grafana, Prometheus, Loki, and their dependencies.

You might need to adjust some parameters to match the scale and requirements of your environment:

* **grafana.persistence.size** – specifies the volume size used by Grafana to store its configuration;
* **prometheus.server.persistentVolume.size** – specifies the volume size used by Prometheus to store metrics;
* **prometheus.server.retention** – specifies how long metrics are kept by Prometheus before they will be discarded;
* **loki.persistence.size** – specifies the volume size used by Loki to store logs;
* **loki.config.chunk_store_config.max_look_back_period** – specifies the maximum retention period for storing chunks (compressed log entries);
* **loki.config.table_manager.retention_period** – specifies the maximum retention period for storing logs in indexed tables;
* **promtail.enabled** – specifies whether the Promtail component should be installed (required for collecting Mendix app environment logs).

For more details see the [Loki installation guide](https://grafana.com/docs/loki/next/installation/helm/).

If your Kubernetes cluster requires a StorageClass to be specified, add the following arguments to the `helm upgrade` command (replace `{class}` with a storage class name, e.g. `gp2`):

```shell
--set grafana.persistence.storageClassName={class},loki.persistence.storageClassName={class},prometheus.server.persistentVolume.storageClass={class}
```

#### 2.2.3 Expose the Grafana Web UI

Create an Ingress object to access Grafana from your web browser: replace `{namespace}` with the namespace name (for example `grafana`); `{domain}` with the domain name (for example `grafana.mendix.example.com`:

```shell
kubectl --namespace={namespace} create ingress loki-grafana \
--rule="{domain}/*=loki-grafana:80,tls" \
--default-backend="loki-grafana:80"
```

{{% alert type="info" %}}The Ingress object configuration depends on how the Ingress Controller is set up in your cluster.

You might need to adjust additional Ingress parameters, for example specify the ingress class, annotations, or TLS configuration.{{% /alert %}}


{{% alert type="info" %}}The domain name needs to be configured so that it resolves to the Ingress Controller's IP address.

You can use the same wildcard domain name as other Mendix apps - for example, if you're using _mendix.example.com_ as the Mendix for Private Cloud domain name,
you can use `grafana.mendix.example.com` as the domain name for Grafana.{{% /alert %}}

### 2.3 Installation in OpenShift{#install-in-openshift}

This section documents how to install Grafana and Prometheus into an OpenShift 4 cluster. These instructions have not been validated with OpenShift 3.
For all other cluster types, use [Installation in Kubernetes](#install-in-k8s) instructions.

Prometheus and Grafana which are included with OpenShift can only be used to [monitor the OpenShift cluster itself](https://docs.openshift.com/container-platform/4.7/monitoring/accessing-third-party-uis.html) and cannot be used to display Mendix app metrics.

To monitor Mendix app environments, you will need to install a separate copy of Grafana and Prometheus.

#### 2.3.1 Preparations

Use the following command to create a new project: replace `{project}` with the project name (for example `grafana`):

```shell
oc create project {project}
```

Use the following command to create a secret containing the Grafana admin password: replace `{project}` with the project name (for example `grafana`); `{username}` with the admin username (for example `admin`); and `{password}` with the admin password:

```shell
oc --namespace {project} create secret generic grafana-admin --from-literal=admin-user={username} --from-literal=admin-password={password}
```

This username and password can be used later to log into Grafana.

By default, OpenShift [restricts UIDs and group IDs](https://docs.openshift.com/container-platform/4.7/authentication/managing-security-context-constraints.html#security-context-constraints-pre-allocated-values_configuring-internal-oauth) that can be used by containers in a project.

To get a valid UID range, run the following command to get the project annotations: (replace `{project}` with the project name, for example `grafana`):

```shell
oc describe project {project}
```

and note the value of the `openshift.io/sa.scc.uid-range` annotation.
This annotation specifies the starting UID and range of UIDs allowed to be used in the project, for example, `openshift.io/sa.scc.uid-range=1001280000/10000` means that the project accepts UIDs from 1001280000 to 1001289999.

Choose a UID from the allowed range, for example 1001280000.

#### 2.3.2 Install the Grafana Loki Stack

Run the following commands in a Bash console: replace `{uid}` with the UID chosen in the previous step (for example 1001280000); and `{project}` with the project name (for example `grafana`):

```shell
PROJECT={project}
GRAFANA_UID={uid}
helm upgrade --install loki grafana/loki-stack --version='^2.5.0' --namespace=${PROJECT} --set grafana.enabled=true,grafana.persistence.enabled=true,grafana.persistence.size=1Gi,grafana.initChownData.enabled=false,grafana.admin.existingSecret=grafana-admin \
--set prometheus.enabled=true,prometheus.server.persistentVolume.enabled=true,prometheus.server.persistentVolume.size=50Gi,prometheus.server.retention=7d \
--set loki.persistence.enabled=true,loki.persistence.size=10Gi,loki.config.chunk_store_config.max_look_back_period=168h,loki.config.table_manager.retention_deletes_enabled=true,loki.config.table_manager.retention_period=168h \
--set promtail.enabled=true,promtail.securityContext.privileged=true \
--set prometheus.nodeExporter.enabled=false,prometheus.alertmanager.enabled=false,prometheus.pushgateway.enabled=false \
--set grafana.securityContext.runAsUser=${GRAFANA_UID},grafana.securityContext.runAsGroup=0,grafana.securityContext.fsGroup=${GRAFANA_UID} \
--set prometheus.server.securityContext.runAsUser=${GRAFANA_UID},prometheus.server.securityContext.runAsGroup=0,prometheus.server.securityContext.fsGroup=${GRAFANA_UID} \
--set prometheus.kube-state-metrics.securityContext.runAsUser=${GRAFANA_UID},prometheus.kube-state-metrics.securityContext.runAsGroup=0,prometheus.kube-state-metrics.securityContext.fsGroup=${GRAFANA_UID} \
--set loki.securityContext.runAsUser=${GRAFANA_UID},loki.securityContext.runAsGroup=0,loki.securityContext.fsGroup=${GRAFANA_UID}
```

This Helm chart will install and configure Grafana, Prometheus, Loki, and their dependencies.

You might need to adjust some parameters to match the scale and requirements of your environment:

* **grafana.persistence.size** – specifies the volume size used by Grafana to store its configuration;
* **prometheus.server.persistentVolume.size** – specifies the volume size used by Prometheus to store metrics;
* **prometheus.server.retention** – specifies how long metrics are kept by Prometheus before they will be discarded;
* **loki.persistence.size** – specifies the volume size used by Loki to store logs;
* **loki.config.chunk_store_config.max_look_back_period** – specifies the maximum retention period for storing chunks (compressed log entries);
* **loki.config.table_manager.retention_period** – specifies the maximum retention period for storing logs in indexed tables;
* **promtail.enabled** – specifies if the Promtail component should be installed (required for collecting Mendix app environment logs).

For more details see the [Loki installation guide](https://grafana.com/docs/loki/next/installation/helm/).

#### 2.3.3 Add Permissions to Collect Container Logs

To read logs from Pods (including logs from Mendix app environments), the Loki stack uses [Promtail](https://grafana.com/docs/loki/next/clients/promtail/).

Promtail runs a pod on every Kubernetes node, and this pod reads local container logs from the host system.
Promtail pods require elevated permissions to read those logs.

{{% alert type="info" %}}Promtail can be replaced with other similar components, for example Fluentd, Fluent Bit, Filebeat, or Azure Container Insights.

All of these use the same mechanism for reading logs, and replacing Promtail with an alternative will still require logs to be collected using a privileged container.{{% /alert %}}

To allow the Promtail to read the container logs in OpenShift, run the following command: replace `{project}` with the project name (for example `grafana`):

```shell
PROJECT={project}
cat <<EOF | oc apply -f -
apiVersion: security.openshift.io/v1
kind: SecurityContextConstraints
metadata:
  name: loki-promtail
allowHostDirVolumePlugin: true
allowHostIPC: false
allowHostNetwork: false
allowHostPID: false
allowHostPorts: false
allowPrivilegeEscalation: true
allowPrivilegedContainer: true
allowedCapabilities: null
defaultAddCapabilities: null
fsGroup:
  type: RunAsAny
groups: []
priority: null
readOnlyRootFilesystem: true
requiredDropCapabilities: 
- ALL
runAsUser:
  type: RunAsAny
seLinuxContext:
  type: RunAsAny
supplementalGroups:
  type: RunAsAny
users:
- system:serviceaccount:${PROJECT}:loki-promtail
volumes:
- 'configMap'
- 'secret'
- 'hostPath'
EOF
```

#### 2.3.4 Expose the Grafana Web UI

Use the following command to create an OpenShift Route object to access Grafana from your web browser: replace `{project}` with the project name (for example `grafana`):

```shell
oc --namespace {project} create route edge loki-grafana --service=loki-grafana --insecure-policy=Redirect
```

To get the Grafana web UI URL (domain), run the following command: replace `{project}` with the project name (for example `grafana`):

```shell
oc --namespace {project} get route loki-grafana -o jsonpath="{.status.ingress[*].host}"
```

## 3 Enable Metrics Scraping{#enable-metrics-scraping}

To collect Mendix app environment metrics for a specific environment, Prometheus needs to discover and scrape pods with the following annotations:

* `privatecloud.mendix.com/component`: `mendix-app`
* `privatecloud.mendix.com/app`: _Environment internal name_

Each Mendix app pod listens on port `8900` and provides a `/metrics` path that can be called by Prometheus to get metrics from a specific app Pod.

Prometheus supports [multiple ways](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config) to set up metrics scraping. 
The easiest way is to use pod annotations.
It is possible to specify annotations for all Mendix app environments in the namespace, or set annotations only for specific environments.

### 3.1 Enable Scraping for Entire Namespace

To enable scraping annotations for all environments in a namespace, add the following `runtimeDeploymentPodAnnotations` in the [Mendix App Deployment settings](private-cloud-cluster#advanced-deployment-settings):

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

Then restart the Mendix Operator.

### 3.2 Enable Scraping for a Specific Environment

If you would like to enable Prometheus scraping only for a specific environment, you can add the Prometheus scraping annotations just for that environment.

#### 3.2.1 Enable Scraping in Connected Mode

1. Go to the Cluster Manager page by clicking **Cluster Manager** in the top menu of the **Clouds** page of the Developer Portal.

    ![](attachments/private-cloud-cluster/cluster-manager.png)

2. Click **Details** next to the namespace where your environment is deployed.

    ![](attachments/private-cloud-cluster/cluster-details.png)
    
3. Click **Configure** next to the environment name where Prometheus scraping should be enabled.

    ![](attachments/private-cloud-cluster/image27.png)

4. Click **Quick setup** within  **Pod annotations**:

    ![](attachments/private-cloud-monitor/private-cloud-prometheus-annotations.png)

5. Check the **Prometheus Metrics** checkbox and click  **Close**:

    ![](attachments/private-cloud-monitor/private-cloud-quick-setup-prometheus.png)

6. Click **Apply Changes**:

    ![](attachments/private-cloud-monitor/private-cloud-apply-annotations.png)

<!-- Be careful - this documentation reuses some screenshots from other pages like private-cloud-cluster.md -->

#### 3.2.2 Enable Scraping in Standalone Mode

{{% alert type="warning" %}}Do not use this approach in Connected mode - any annotations you set this way will be overridden by annotations set in the Private Cloud section of the Developer Portal.{{% /alert %}}

Open an environment's `MendixApp` CR [for editing](private-cloud-operator#edit-cr) and add the following pod annotations:

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

Save and apply the changes.

## 4 Setting up a Grafana Dashboard

Mendix for Private Cloud offers a reference dashboard that looks similar to [Mendix Cloud V4 metrics](/developerportal/operate/trends-v4).

In addition, this dashboard will display Mendix app and Runtime logs.

{{% alert type="warning" %}}
Mendix for Private Cloud uses a `m2ee-metrics` sidecar that collects metrics from the [admin port](/refguide/monitoring-mendix-runtime) and translates them into a format supported by Prometheus.
This approach works with all Mendix versions, starting from Mendix 7.23.

Mendix 9.6 introduces native [Prometheus metrics](/refguide/metrics).
The Mendix Runtime Prometheus metrics are not yet supported by Mendix for Private Cloud.
The reference dashboard provided in this document will not be compatible with the native Mendix 9.6 metrics.
{{% /alert %}}

### 4.1 Import the Dashboard

To install the reference dashboard, download the [dashboard JSON](https://cdn.mendix.com/mendix-for-private-cloud/grafana-dashboard/mendix_app_dashboard-1.0.0.json) to a local file.

[Import](https://grafana.com/docs/grafana/latest/dashboards/export-import/#import-dashboard) the downloaded JSON into Grafana:

1. Open Grafana in a web browser using the domain name, admin username and password from [Section 2](#install-grafana-loki).
2. Click **Create**, then **Import**:

    ![](attachments/private-cloud-monitor/grafana-import-button.png)
3. Then click **Upload JSON file** and select the dashboard JSON you downloaded earlier.

    ![](attachments/private-cloud-monitor/grafana-import.png)
4. Select **Prometheus** from the _Prometheus data source_ dropdown, and **Loki** from the _Loki data source_ dropdown.
   If necessary, rename the dashboard and change its uid.
   Press **Import** to import the dashboard into Grafana.

    ![](attachments/private-cloud-monitor/grafana-import-settings.png)

### 4.2 Using the Dashboard

Click **Dashboards**, then **Manage** and click _Mendix app dashboard_ to open the dashboard:

![](attachments/private-cloud-monitor/grafana-open-dashboard.png)

Select the **Namespace**, **Environment internal name** and **Pod name** from the dropdowns to see the metrics and logs for a specific Pod:

![](attachments/private-cloud-monitor/grafana-select-pod.png)

{{% alert type="info" %}}If the dropdowns are empty, this means that no metrics are available for that date range.
Select another date range in the top right corner, or check if Prometheus is set up correctly.{{% /alert %}}

Metrics are displayed per pod and not aggregated on a namespace or environment level.
Every time an app is restarted or scaled up, this will add new pods or replace existing pods with new ones.
You will need to select the currently running pod from the dropdown to monitor its metrics and logs.

{{% alert type="info" %}}This dashboard is provided for reference and can be used as an example.
You can use it to build a custom dashboard with details that are relevant for your organization, such as aggregating metrics per namespace/project or displaying additional metrics from another source.{{% /alert %}}

### 4.3 Configuring Metrics Links

To provide Mendix app developers with quick access to the dashboard, you can set the **Metrics** and **Logs** links in the namespace configuration.

The Developer Portal supports placeholder (template) variables in **Metrics** and **Logs** links:

* `{namespace}` will be replaced with the environment namespace;
* `{environment_name}` will be replaced with the environment internal name.

<!-- TODO: update these instructions if necessary -->

For example, if you have imported the reference dashboard JSON with default parameters, set **Metrics** and **Logs** links to the following:

```
https://grafana.mendix.example.com/d/4csBnmWnk/mendix-app-dashboard?var-namespace={namespace}&var-environment_id={environment_name}
```

(replace `grafana.mendix.example.com` with the Grafana domain name used in your cluster).

When a Mendix app developer clicks a **Metrics** or **Logs** link in the Developer Portal, the `{namespace}` and `{environment_name}` placeholders
will be replaced with that environment's namespace and name, and the Mendix app developer will just need to select a **Pod name** in the Grafana dashboard dropdown.

To set the **Metrics** and **Logs** links:

1. Go to the Cluster Manager page by clicking **Cluster Manager** in the top menu of the **Clouds** page of the Developer Portal.

    ![](attachments/private-cloud-cluster/cluster-manager.png)

2. Click **Details** next to the namespace where your environment is deployed.

    ![](attachments/private-cloud-cluster/cluster-details.png)

3. Open the **Operate** tab, enter dashboard URL for the **Metrics** and **Logs** links, and click **Save** for each one.

    ![](attachments/private-cloud-cluster/image32.png)

<!-- Be careful - this documentation reuses some screenshots from other pages like private-cloud-cluster.md -->
