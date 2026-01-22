---
title: "Monitoring Mendix on Azure with Grafana"
url: /developerportal/deploy/mendix-on-azure/monitor/
weight: 15
description: "Describes the Grafana monitoring functionality for apps running on Mendix on Azure."
---

## Introduction

Mendix on Azure uses integrated Grafana instances to provide observability and analytics for your apps. This document describes how you can access Grafana dashboards, view logs and metrics, and configure alerts for your Mendix applications running on Azure.

Grafana is an open-source platform that offers the following capabilities:

* Query and visualize metrics, logs, and traces.
* Build interactive dashboards.
* Configure alerts based on operational thresholds.

When deploying Mendix on Azure, an Azure Managed Grafana instance is automatically provisioned as part of the cluster setup.

## Overview

Azure Managed Grafana is a fully managed Grafana service provided by Microsoft Azure. It removes the operational overhead of managing Grafana infrastructure.

Azure Managed Grafana offers the following benefits:

* Azure hosts, maintains, and secures the Grafana instance
* No manual installation, upgrades, or patching required
* Authentication and access control integrated with Azure Active Directory (AAD)
* Native integration with Azure observability services, including:
    * Azure Monitor
    * Log Analytics
    * Azure Managed Prometheus

## Grafana Access Configuration

You can configure access to Azure Managed Grafana dashboards as either *public* or *private*. For private access, the Grafana instance must be connected through a private endpoint. For more information, see [Enabling Connectivity between Mendix on Azure and Other Private Networks](/developerportal/deploy/mendix-on-azure/configuration/interconnecting-networks/#solution-2-privatelink-with-private-endpoints).

You can enable private Grafana access during cluster creation, or later under **Advanced Settings**.

To access Grafana dashboards, the user must have the Grafana Admin permissions assigned on the target Azure subscription. Developers cannot access Grafana dashboards, unless they have the required permissions on the subscription.

## Viewing Grafana Logs and Metrics

Azure Managed Prometheus is provisioned automatically to collect application and Platform metrics. Logs are collected by Azure Monitor and stored in the Log Analytics Workspace.

To view the logs, perform the following steps:

1. In Grafana, go to **Dashboards > Mendix**.
2. Choose one of the following options:

    * For Container logs, click **Container Insights**, and then select one of the following containers:

        * **mendix-operator** - The Mendix Operator manages the lifecycle of all Mendix app containers.
        * **m2ee-sidecar** - The M2EE sidecar container sends the configuration into the Mendix Runtime and monitors its status.
        * **mendix-agent** - The Mendix Agent is responsible for maintaining a secure communication channel between the cluster and the Mendix on Kubernetes portal.
        * **mx-coastguard** - Coastguard is responsible for executing backup and restore jobs in the cluster.

    * For Mendix application logs, click **Mendix App Dashboard (Native)**.
    * For Azure-managed NGINX ingress logs, select the **app-routing-system** namespace.

## Setting up Grafana Alerts

Grafana alerts help monitor your application and notify you when specific conditions occur, such as errors in logs or high CPU usage.

To set up alerts in Grafana Unified Alerting, you must create a contact point to which notifications are sent, and an alert rule which Grafana evaluates.

### Creating a Contact Point

A contact point defines where Grafana sends alert notifications (for example, email, Slack, or Webhook).

{{% alert color="info" %}}  
For testing, we recommend using a Webhook contact point. This type of contact point makes it easy to verify alert delivery.  
{{% /alert %}}

To create a contact point, perform the following steps:

1. In Grafana, go to **Alerting > Contact points**.
2. Click **Manage contact points**.
3. Click **Create contact point**.
4. Enter a **Name** for the contact point.
5. Select the **Integration type** (for example, **Webhook**).
6. Provide the required configuration details.
7. Click **Save contact point**.

When an alert is triggered, the endpoint (for example, `Webhook.site`) receives incoming request, confirming that notifications are working.

### Creating an Alert Rule

An Alert rule defines what Grafana continuously evaluates and when an alert should transition into a firing state. Alert rules are based on queries from supported data sources such as logs and metrics.

To create an alert rule, perform the following steps:

1. In Grafana, go to **Alerting > Alert rules**.
2. Click **New alert rule**.
3. Select the **Data source** (**Logs** or **Metrics**).
4. Add a **Query**.
5. Add the **Expressions**:

    * **Reduce** - To convert time series data into a single value
    * **Threshold** - To define when the alert fires.

6. Configure the **Alert condition**.
7. Set an **Evaluation interval**.
8. Assign the rule to a **Folder** and **Evaluation group**.
9. Verify the following:

    * A contact point exists.
    * A notification policy references the contact point.
    * The query returns data.
    * Reduce and Threshold conditions are configured.
    * The alert rule is enabled.

10. Click **Save rule**.

#### Sample Alert Rule 1: Alert for Critical or Fatal Log Errors

This alert detects severe errors in Mendix application logs. It helps detect serious application failures early by triggering when a critical or fatal log message appears.

##### Query

```text
ContainerLogV2
| where PodName startswith "envname-"
  and ContainerName == "mendix"
  and LogLevel in ("critical", "fatal")
| summarize count() by bin(TimeGenerated, 1m)
| order by TimeGenerated asc
```

##### Alert Condition

* **Reduce** - **Last** 
* **Threshold** - `count > 0`

Any critical or fatal log entry cause the alert to fire.

#### Sample Alert Rule 2: Alert for High CPU Usage

This alert monitors CPU usage for a Mendix application. It help identify performance or scaling issues by triggering when CPU usage exceeds the defined threshold.

##### Query

```text
rate(
  sum without (id, name) (
    container_cpu_usage_seconds_total{
      namespace=~"mendix",
      pod=~"envname-*",
      container="mendix"
    }
  )[1m:]
)
```

##### Expressions

* **Reduce** - **Median**

##### Threshold

* Trigger when the reduced value is above **0.1**.

This alert fires when the application consumes more than 0.1 CPU core.