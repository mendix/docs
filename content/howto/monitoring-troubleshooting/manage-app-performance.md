---
title: "Manage App Performance"
category: "Monitoring & Troubleshooting"
menu_order: 12
tags: ["monitoring", "troubleshooting", "performance", "new relic"]
---

## 1 Introduction

There are a number of tools you can use to monitor and/or manage Mendix app performance.

### 1.1 Mendix Cloud

For apps deployed to the **Mendix Cloud** you can use the standard metrics as described in [Trends in Mendix Cloud v4](/developerportal/operate/trends-v4). You can also set up an integration to [Datadog](/developerportal/operate/datadog-metrics).

### 1.2 Other Deployment Options

Outside the Mendix Cloud, you can use Datadog, or there are alternative monitoring tools you can use. You can see these under [Monitoring Tools](https://github.com/mendix/cf-mendix-buildpack#monitoring-tools) in the Mendix *Cloud Foundry Buildback*.

{{% alert type="warning" %}}
Only Datadog is supported for apps deployed to the Mendix Cloud.
{{% /alert %}}

* **AppDynamics** – see [Manage App Performance with AppDynamics](manage-app-performance-with-appdynamics)
* **New Relic** – see [Manage App Performance with New Relic](manage-app-performance-with-new-relic)
* **Dynatrace** – for apps deployed to SAP BTP, see [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform#runtime-tab), for other platforms see [Monitoring Tools](https://github.com/mendix/cf-mendix-buildpack#monitoring-tools) in the Mendix *Cloud Foundry Buildback*.
