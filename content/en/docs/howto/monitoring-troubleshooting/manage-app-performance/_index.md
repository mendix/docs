---
title: "Manage App Performance"
url: /howto/monitoring-troubleshooting/manage-app-performance/
category: "Monitoring and Troubleshooting"
weight: 12
description: "Describes how to manage app performance by using New Relic."
tags: ["monitoring", "troubleshooting", "performance", "new relic"]
---

## 1 Introduction

There are a number of tools you can use to monitor and/or manage Mendix app performance.

### 1.1 Mendix Cloud

For apps deployed to the **Mendix Cloud** you can use the standard metrics as described in [Trends in Mendix Cloud v4](/developerportal/operate/trends-v4/). 
You can also set up an integration to [Datadog](/developerportal/operate/datadog-metrics/), [AppDynamics](/developerportal/operate/appdynamics-metrics/) or [Dynatrace](/developerportal/operate/dynatrace-metrics/).

### 1.2 Other Deployment Options

Outside the Mendix Cloud, you can use Datadog, or there are alternative monitoring tools you can use. You can see these under [Telemetry Configuration](https://github.com/mendix/cf-mendix-buildpack#telemetry-configuration) in the Mendix *Cloud Foundry Buildback*.

{{% alert color="warning" %}}
Only Datadog, AppDynamics and Dynatrace are supported for apps deployed to the Mendix Cloud.
{{% /alert %}}

* **New Relic** – see [Manage App Performance with New Relic](/howto/monitoring-troubleshooting/manage-app-performance-with-new-relic/)
