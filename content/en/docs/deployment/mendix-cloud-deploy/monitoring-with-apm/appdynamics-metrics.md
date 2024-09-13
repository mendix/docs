---
title: "AppDynamics for Mendix Cloud"
url: /developerportal/operate/appdynamics-metrics/
weight: 10
description: "How to configure Mendix Cloud to enable monitoring and analysis with AppDynamics."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

[AppDynamics](https://www.appdynamics.com/) is a monitoring and analysis tool for cloud applications. It is a SaaS-based data analytics platform that provides monitoring for servers, databases, tools, and services. You can use AppDynamics for additional monitoring for your apps running on Mendix Cloud.

This document explains how to configure your Mendix Cloud app to send data to AppDynamics.

{{% alert color="info" %}}
For support on other cloud deployment options, such as Private Cloud, refer to their documentation. For Private Cloud deployment, for example, see [Monitoring Environments in Mendix for Private Cloud](/developerportal/deploy/private-cloud-monitor/).
{{% /alert %}}

{{% alert color="info" %}}
AppDynamics is fully supported in Mendix 9.7 and above. For older supported versions, only the basic AppDynamics Java Agent metrics are available, along with the `postgresql` and `mx.client` namespaces.
{{% /alert %}}

For more information on the data you can send to AppDynamics, see [Monitoring Your Mendix Apps with an APM Tool](/developerportal/operate/monitoring-with-apm/).

## Prerequisites

To use AppDynamics and send data to AppDynamics from your Mendix app, you need the following:

* Access to a cloud- or self-hosted AppDynamics controller
* The following information about AppDynamics
    * The account name and access key for your AppDynamics account
    * The hostname or IP address of your AppDynamics controller
* A licensed Mendix app of which you are the [Technical Contact](/developerportal/general/app-roles/#technical-contact)

## Connecting Your Node to AppDynamics{#connect-node}

To send your runtime information to AppDynamics, you must set it up using environment variables in the Mendix Portal.

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
1. Click **Details** on the environment you wish to monitor with AppDynamics. 
1. Switch to the [**Runtime** tab](/developerportal/deploy/environments-details/#runtime-tab).
1. Add the following **Custom Environment Variables**.

    | Variable | Description | Default |
    | -------- | ----------- | ------- |
    | `APPDYNAMICS_MACHINE_AGENT_ENABLED` | Set to `true` to enable metrics specific to Mendix. If this is not set, or set to `false`, AppDynamics will only receive the general AppDynamics metrics provided by the AppDynamics Java Agent. | `false` |
    | `APPDYNAMICS_CONTROLLER_PORT` | The HTTP (or HTTPS) port of the AppDynamics Controller. This is the port used to access the AppDynamics browser-based user interface. If `APPDYNAMICS_CONTROLLER_SSL_ENABLED` is set to `true`, specify the HTTPS port of the Controller; otherwise, specify the HTTP port. | `443` |
    | `APPDYNAMICS_CONTROLLER_SSL_ENABLED` | Set to `true` if the agent should use SSL (HTTPS) to connect to the controller. | `true` |
    | `APPDYNAMICS_CONTROLLER_HOST_NAME` |  The hostname or the IP address of the AppDynamics Controller without the scheme (protocol). This is the same host that you use to access the AppDynamics browser-based user interface. Example values are `192.168.1.22` or `myhost` or `myhost.example.com`.<br>For an on-premises Controller, use the value for Application Server Host Name that was configured when the Controller was installed. For the AppDynamics SaaS Controller service, see the welcome email from AppDynamics. | |
    | `APPDYNAMICS_AGENT_APPLICATION_NAME` | A unique name to identify all the metrics coming from your app. Mendix recommends using the app name. | |
    | `APPDYNAMICS_AGENT_ACCOUNT_NAME` | The name of your AppDynamics account. This can be found in the **License** section of your AppDynamics Controller dashboard. | |
    | `APPDYNAMICS_AGENT_ACCOUNT_ACCESS_KEY` | The secret key used to authenticate your AppDynamics account. | |
    | `APPDYNAMICS_AGENT_NODE_NAME` | This is how you will identify which node the metrics are coming from. The value of the `CF_INSTANCE_ID` variable will be appended to the node name. For example, if `APPDYNAMICS_AGENT_NODE_NAME` is set to `node` and the node has multiple instances, the AppDynamics agent will be configured as `node-0`, `node-1`, … for the different instances. | `"node"` |
    | `APPDYNAMICS_AGENT_TIER_NAME` | This allows you to classify different environments of your app. Mendix recommends using the **Environment ID** to distinguish between Test, Acceptance, and Production environments. You can find this on the **General** tab of the [Environment Details](/developerportal/deploy/environments-details/) page of your app environment. | Environment ID of the app |

    For more information on Nodes and Tiers in AppDynamics, see the [Overview of Application Monitoring](https://docs.appdynamics.com/appd/22.x/22.1/en/application-monitoring/overview-of-application-monitoring) in the AppDynamics documentation.

1. Return to the **Environments** page for your app and **Deploy** or **Transport** your app into the selected environment.

    {{% alert color="warning" %}}To start sending data to AppDynamics, you must redeploy your app and then restart it. Just restarting the app is not sufficient because additional dependencies need to be included.{{% /alert %}}

## Multi-Instance Metrics{#multi-instance-metrics}

You can view metrics for multiple instances of an application on the AppDynamics Controller.

* To see combined metrics values for all the instances together, use the [Metric Browser](https://docs.appdynamics.com/appd/22.x/latest/en/appdynamics-essentials/metrics-and-graphs/metric-browser) (by default `tier name = environment ID`) and navigate to `Application Infrastructure Performance/<tier name>/Custom Metrics/Mx Runtime Statistics`.
* AppDynamics Nodes are associated with Mendix application instances. To observe metrics for specific instance (node), navigate in Metric Browser to `Application Infrastructure Performance/<tier name>/Individual Nodes/<node name>/Custom Metrics/Mx Runtime Statistics`.

## Additional Information{#additional-info}

### AppDynamics Default Values

Mendix provides default values for most of the AppDynamics environment variables. However, the following variables cannot be defaulted. If any of the following environment variables are set for your app, you must provide all of them:

* `APPDYNAMICS_CONTROLLER_HOST_NAME`
* `APPDYNAMICS_AGENT_ACCOUNT_NAME`
* `APPDYNAMICS_AGENT_ACCOUNT_ACCESS_KEY`

### Tagging AppDynamics Metrics

Mendix does not send additional tags to AppDynamics to indicate Resource, Microflow, or Activity names. It is also not possible to add custom tags to the metrics you send to AppDynamics.

### AppDynamics Issues

If you have any issues related to accessing AppDynamics, contact their support on the [AppDynamics Support](https://help.appdynamics.com/hc/en-us/requests/) page. You need an AppDynamics account to request support.

## Read More

* [Metrics](/developerportal/operate/metrics/)
