---
title: "AppDynamics for the Mendix Cloud"
url: /developerportal/operate/appdynamics-metrics/
weight: 10
description: "How to configure Mendix Cloud v4 to enable monitoring and analysis with AppDynamics."
tags: ["AppDynamics", "Mendix Cloud", "v4", "monitoring", "analysis"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

[AppDynamics](https://www.appdynamics.com/) is a monitoring and analysis tool for cloud applications, providing monitoring of servers, databases, tools, and services through a SaaS-based data analytics platform. This document explains how to configure your Mendix Cloud v4 app to send data to AppDynamics to provide additional monitoring.

{{% alert color="warning" %}}
AppDynamics is not supported in the deprecated Mendix Cloud v3, nor in default deployment buildpacks for other cloud platforms.
{{% /alert %}}

{{% alert color="info" %}}
AppDynamics is fully supported in Mendix version 9.7 and above. For older supported versions, only the basic AppDynamics Java Agent metrics are available, along with the `postgresql` and `mx.client` namespaces.
{{% /alert %}}

For more information on the data you can send to AppDynamics, see [Monitoring Your Mendix Apps with an APM Tool](/developerportal/operate/monitoring-with-apm/).

## 2 Prerequisites

To use AppDynamics, and to send data to AppDynamics from your Mendix app, you will need the following:

* Access to a  cloud- or self-hosted AppDynamics controller
* The following information about AppDynamics
    * The account name and access key for your AppDynamics account
    * The hostname or IP address of your AppDynamics controller
* A licensed Mendix app of which you are the [Technical Contact](/developerportal/collaborate/app-roles/#technical-contact)

## 3 Connect Node to AppDynamics{#connect-node}

To send your runtime information to AppDynamics, you need to set it up using environment variables in the Developer Portal.

1. Go to the **Environments** page of your app in the *Developer Portal*.
2. Click **Details** to select the environment you wish to monitor with AppDynamics. 
3. Open the [**Runtime** tab](/developerportal/deploy/environments-details/#runtime-tab).
4. Add the following **Custom Environment Variable**s.

    1. APPDYNAMICS_MACHINE_AGENT_ENABLED

        Set to `true` to enable metrics specific to Mendix. If this is not set, or set to `false` AppDynamics will only receive the general AppDynamics metrics, provided by the AppDynamics Java Agent.

        *Default: `false`*

    2. APPDYNAMICS_CONTROLLER_PORT

        The HTTP(S) port of the AppDynamics Controller. This is the port used to access the AppDynamics browser-based user interface. If **APPDYNAMICS_CONTROLLER_SSL_ENABLED** is set to `true`, specify the HTTPS port of the Controller; otherwise specify the HTTP port.

        *Default: `443`*

    3. APPDYNAMICS_CONTROLLER_SSL_ENABLED

        Set to `true` if the agent should use SSL (HTTPS) to connect to the controller.

        *Default: `true`*

    4. APPDYNAMICS_CONTROLLER_HOST_NAME

        The hostname or the IP address of the AppDynamics Controller without the *scheme* (protocol). This is the same host that you use to access the AppDynamics browser-based user interface. Example values are `192.168.1.22` or `myhost` or `myhost.example.com`.
        
        For an on-premises Controller, use the value for Application Server Host Name that was configured when the Controller was installed.
        
        For the AppDynamics SaaS Controller service, see the welcome email from AppDynamics.

    5. APPDYNAMICS_AGENT_APPLICATION_NAME

        A unique name to identify all the metrics coming from your app. We recommend using the app name.

        *Default: App Name*

    6. APPDYNAMICS_AGENT_ACCOUNT_NAME

        The name of your AppDynamics account. This can be found in the **license** section of your AppDynamics Controller dashboard.

    7. APPDYNAMICS_AGENT_ACCOUNT_ACCESS_KEY

        The secret key used to authenticate your AppDynamics account.

    8. APPDYNAMICS_AGENT_NODE_NAME

        This is how you will identify which node the metrics are coming from.

        The value of the CF_INSTANCE_ID variable will be appended to the node name. For example, if APPDYNAMICS_AGENT_NODE_NAME is set to  `node` and the node has multiple instances, the AppDynamics agent will be configured as `node-0`, `node-1`, … for the different instances.

        *Default: `"node"`*

    9. APPDYNAMICS_AGENT_TIER_NAME

        This allows you to classify different environments of your app. We recommend using the **Environment ID** to distinguish between *Test*, *Acceptance*, and *Production* environments. You can find this on the **General** tab of the [Environment Details](/developerportal/deploy/environments-details/) page of your app environment.

        *Default: Environment ID of the app*

For more information on Nodes and Tiers in AppDynamics, see the [Overview of Application Monitoring](https://docs.appdynamics.com/22.1/en/application-monitoring/overview-of-application-monitoring)(https://docs.appdynamics.com/22.1/en/application-monitoring/overview-of-application-monitoring#OverviewofApplicationMonitoring-Nodes) in the AppDynamics documentation.

5.  Return to the **Environments** page for your app and *Deploy* or *Transport* your app into the selected environment.

	{{% alert color="warning" %}}Your app must be **redeployed** before it is started as additional dependencies need to be included.<br/><br/>Restarting the app is not sufficient to start sending data to AppDynamics.{{% /alert %}}

## 4 Additional Information{#additional-info}

### 4.1 AppDynamics Default Values

Mendix provides default values for most of the AppDynamics environment variables. However, the following variables cannot be defaulted and if any of the following environment variables are set for your app, you will need to provide all of them:

* APPDYNAMICS_CONTROLLER_HOST_NAME
* APPDYNAMICS_AGENT_ACCOUNT_NAME
* APPDYNAMICS_AGENT_ACCOUNT_ACCESS_KEY

### 4.2 Tagging AppDynamics Metrics

Mendix does not send additional tags to AppDynamics to indicate Resource, Microflow, or Activity names. It is also not possible to add custom tags to the metrics you send to AppDynamics.

### 4.3 AppDynamics Issues

If you have any issues related to accessing AppDynamics, please contact their support here: [Support | AppDynamics](https://help.appdynamics.com/hc/en-us/requests/). You will need an AppDynamics account to request support.

## 5 Read More

* [Metrics](/developerportal/operate/metrics/)
