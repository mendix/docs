---
title: "Manage App Performance"
url: /howto9/monitoring-troubleshooting/manage-app-performance/
weight: 12
description: "Describes how to manage app performance by using New Relic."
---

## Introduction

There are a number of tools you can use to monitor and/or manage Mendix app performance.

### Mendix Cloud

For apps deployed to the **Mendix Cloud** you can use the standard metrics as described in [Metrics](/developerportal/operate/metrics/).

You can also set up an integration to [Datadog](/developerportal/operate/datadog-metrics/), [AppDynamics](/developerportal/operate/appdynamics-metrics/), or [Dynatrace](/developerportal/operate/dynatrace-metrics/).

### Other Deployment Options

{{% alert color="warning" %}}
For apps deployed to the Mendix Cloud, only Datadog, AppDynamics, and Dynatrace are supported.
{{% /alert %}}

Outside the Mendix Cloud, you can use the following monitoring tools:

* Datadog
* New Relic – see [Manage App Performance with New Relic](/howto9/monitoring-troubleshooting/manage-app-performance-with-new-relic/)
* Dynatrace – for example on [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/#runtime-tab)
* Other tools – you can see these under [Telemetry Configuration](https://github.com/mendix/cf-mendix-buildpack#telemetry-configuration) in the Mendix *Cloud Foundry Buildpack*.
