---
title: "Monitoring environments in Mendix for Private Cloud"
parent: "private-cloud"
description: "Describes the processes for setting up a monitoring solution for Mendix environments in the Private Cloud"
menu_order: 20
tags: ["Monitor", "Private Cloud", "Environment"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

{{% alert type="info" %}}Monitoring Mendix for Private Cloud environments is supported in Mendix Operator v2.1.0 and later versions.{{% /alert %}}

Mendix for Private Cloud provides a [Prometheus](https://prometheus.io/) API that can be scraped by a local Prometheus server.
This API can also be used by other monitoring solutions such as [Datadog](https://docs.datadoghq.com/integrations/prometheus/).

The metrics API can only be accessed inside the Kubernetes cluster, and metrics are never sent to the Mendix Private Cloud Portal.
To collect, store and display metrics, you will need to install a local monitoring solution.

This document will help you quickly set up a solution for monitoring Mendix for Private Cloud environments.
You can customize this solution to match the requirements of your team or organization.

## 2 Installing monitoring tools

If you already have installed Prometheus and Grafana in your cluster, you can skip this section and to directly to [enable metrics scraping](#enable-metrics-scraping).

This section contains a quick start guide how to install Grafana and its dependencies in a cluster by using the [Loki Helm chart](https://grafana.com/docs/loki/latest/installation/helm/).

Before installing Grafana, make sure you have [installed Helm](https://grafana.com/docs/loki/latest/installation/helm/) and can access your Kubernetes cluster.

Download the latest version of the Grafana Helm chart:
```
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
```

### 2.1 Installation in Kubernetes{#install-in-k8s}

<!-- TODO -->

### 2.2 Installation in OpenShift

This section documents how to install Grafana and Prometheus into an OpenShift cluster. For all other cluster types, use [Installation in Kubernetes](#install-in-k8s) instructions.

Prometheus and Grafana which are included with OpenShift can only be used to [monitor the OpenShift cluster itself](https://docs.openshift.com/container-platform/4.7/monitoring/accessing-third-party-uis.html) and cannot be used to display Mendix app metrics.

To monitor Mendix app environments, you will need to install a separate copy of Grafana and Prometheus.

#### 2.2.1 Preparations

Create a new project (replace `{project}` with the project name, for example `grafana`):

```shell
oc create project {project}
```

Create a Secret containing the Grafana admin password (replace `{project}` project name, for example `grafana`; `{username}` with the admin username, for example `admin`; `{password}` with the admin password):

```shell
oc --namespace {project} create secret generic grafana-admin --from-literal=admin-user={username} --from-literal=admin-password={password}
```

This username and password can be used later to log into Grafana.

By default, OpenShift [restricts UIDs and group IDs](https://docs.openshift.com/container-platform/4.7/authentication/managing-security-context-constraints.html#security-context-constraints-pre-allocated-values_configuring-internal-oauth) that can be used by containers in a project.

To get a valid UID range, get the project annotations: (replace `{project}` with the project name, for example `grafana`):

```shell
oc describe project {project}
```

and get the value of the `openshift.io/sa.scc.uid-range` annotation.
This annotation specifies the starting UID and range of UIDs allowed to be used in the project, for example, `openshift.io/sa.scc.uid-range=1001280000/10000` means that the project accepts UIDs from 1001280000 to 1001289999.

Choose a UID from the allowed range, for example 1001280000.

#### 2.2.2 Install Grafana

Run the following commands in a Bash console, (replace `{uid}` with the UID chosen in the previous step, for example 1001280000; and `{project}` with the project name, for example `grafana`):

```shell
NAMESPACE={project}
GRAFANA_UID={uid}
helm upgrade --install loki grafana/loki-stack --namespace=${NAMESPACE} --set grafana.enabled=true,grafana.persistence.enabled=true,grafana.persistence.size=1Gi,grafana.initChownData.enabled=false \
--set prometheus.enabled=true,prometheus.server.persistentVolume.enabled=true,prometheus.server.persistentVolume.size=50Gi,prometheus.server.retention=7d \
--set promtail.enabled=false,prometheus.nodeExporter.enabled=false,prometheus.alertmanager.enabled=false,prometheus.pushgateway.enabled=false \
--set grafana.securityContext.runAsUser=${GRAFANA_UID},grafana.securityContext.runAsGroup=0,grafana.securityContext.fsGroup=${GRAFANA_UID} \
--set prometheus.server.securityContext.runAsUser=${GRAFANA_UID},prometheus.server.securityContext.runAsGroup=0,prometheus.server.securityContext.fsGroup=${GRAFANA_UID} \
--set prometheus.kube-state-metrics.securityContext.runAsUser=${GRAFANA_UID},prometheus.kube-state-metrics.securityContext.runAsGroup=0,prometheus.kube-state-metrics.securityContext.fsGroup=${GRAFANA_UID} \
--set loki.securityContext.runAsUser=${GRAFANA_UID},loki.securityContext.runAsGroup=0,loki.securityContext.fsGroup=${GRAFANA_UID}
```

This Helm chart will install and configure Grafana, Prometheus and their dependencies.

You might need to adjust some parameters to match the scale and requirements of your environment:

* **grafana.persistence.size** specifies the volume size used by Grafana to store its configuration, 
* **prometheus.server.persistentVolume.size** specifies the volume size used by Prometheus to store 
* **prometheus.server.retention** specifies how long metrics are kept by Prometheus before they will be discarded.

#### 2.2.3 Expose the Grafana web UI

To access the Grafana web UI, create an OpenShift Route (replace `{project}` with the project name, for example `grafana`):

```shell
oc --namespace {project} create route edge loki-grafana --service=loki-grafana --insecure-policy=Redirect
```

To get the Grafana web UI URL, run the folling command (replace `{project}` with the project name, for example `grafana`):

```shell
oc --namespace {project} get route loki-grafana -o jsonpath="{.status.ingress[*].host}"
```

## 3 Enable metrics scraping{#enable-metrics-scraping}

<!-- TODO: formal spec how to find and scrape app pods -->
<!-- TODO: annotations in OperatorConfiguration -->
<!-- TODO: annotations in Portunus -->

## 4 Setting up a Grafana dashboard

<!-- TODO: how to install and use the default dashboard -->
<!-- TODO: how to set metrics links in Portunus -->

