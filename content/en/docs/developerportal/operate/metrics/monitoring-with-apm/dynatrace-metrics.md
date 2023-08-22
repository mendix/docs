---
title: "Dynatrace for the Mendix Cloud"
url: /developerportal/operate/dynatrace-metrics/
weight: 25
description: "How to configure the Mendix Cloud to enable monitoring and analysis with Dynatrace."
tags: ["Dynatrace", "Mendix Cloud", "monitoring", "analysis"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

[Dynatrace](https://www.dynatrace.com/) is a monitoring and analysis tool for cloud applications, providing monitoring of servers, databases, tools, and services through a SaaS-based data analytics platform. This document explains how to configure your Mendix Cloud app to send data to Dynatrace to provide additional monitoring.

For Dynatrace monitoring, [Dynatrace OneAgent](https://www.dynatrace.com/platform/oneagent/) is being used to collect metrics.

In addition to auto-instrumented built-in metrics collected by OneAgent, we also collect custom application metrics. Custom application metrics are supported in Mendix version 9.7 and above.
For more information on the custom metrics you can send to Dynatrace, see [Monitoring Your Mendix Apps with an APM Tool](/developerportal/operate/monitoring-with-apm/).

## 2 Prerequisites

To use Dynatrace, and to send data to Dynatrace from your Mendix app, you will need the following:

* Access to a Saas or Managed Dynatrace environment
* The following information about Dynatrace
    * The Dynatrace environment url
    * The Dynatrace environment id - see [Dynatrace Environment ID](https://www.dynatrace.com/support/help/get-started/monitoring-environment/environment-id)
    * An access token for integrating your Dynatrace environment with your Mendix app — you can find out how to obtain this in the Dynatrace documentation [Generate an access token](https://www.dynatrace.com/support/help/get-started/access-tokens#create-api-token)
* A licensed Mendix app of which you are the [Technical Contact](/developerportal/general/app-roles/#technical-contact)

## 3 Connect Node to Dynatrace {#connect-node}

To start sending your Mendix app's metrics to Dynatrace, you need to set some environment variables in the Developer Portal.

1. Go to the **Environments** page of your app in the *Developer Portal*.
2. Click **Details** to select the environment you wish to monitor with Dynatrace. 
3. Open the [**Runtime** tab](/developerportal/deploy/environments-details/#runtime-tab).
4. Add the following **Custom Environment Variable**s.

    * DT_SAAS_URL – *Required*

        The url of Dynatrace environment. 

        The format when using the Dynatrace SaaS environment is similar to `https://<your-environment-id>.live.dynatrace.com`.

        If you are using a Dynatrace managed environment you just need to provide the full URL of the Dynatrace domain, like  `https://<your-dynatrace-domain>`.
   
    * DT_TENANT – *Required*

        The Dynatrace environment id, [Dynatrace Environment ID](https://www.dynatrace.com/support/help/get-started/monitoring-environment/environment-id).

    * DT_PAAS_TOKEN – *Required*

        The access token for integrating your Mendix app with Dynatrace. You [create this on the Dynatrace environment](https://www.dynatrace.com/support/help/get-started/access-tokens#create-api-token).

        The token must include the `PaaS integration - Installer download` and `Ingest metrics` scopes.
   
    * DT_IS_MANAGED - *Optional*
        
        Should be set to `true` if you are using Dynatrace Managed. The default is assumed to be Dynatrace SaaS and set to `false`.

        Only needed for custom application metrics ingestion.

    * DT_CLUSTER_ID - *Optional*

        This can be used to tag your cluster, process group, or deployment group.

    * DT_CUSTOM_PROP - *Optional*

        This can be used to provide metadata for your process group. For more information, see [Define your own process group metadata](https://www.dynatrace.com/support/help/platform-modules/infrastructure-monitoring/process-groups/configuration/define-your-own-process-group-metadata) for more information about process group metadata.

5. Return to the **General** tab and *restart* your environment.

## 4 Additional Information {#additional-info}

### 4.1 Dimensions (Only Valid for Custom Metrics)

If you use Dynatrace to monitor more than one app and environment you will need some dimensions to be able to tell which app or environment these metrics apply to. To identify the metrics for your app and environment in Dynatrace, Mendix provide some default dimensions. You can also add extra dimensions.

#### 4.1.1 Default Dimensions

Mendix attaches these default dimensions to metrics that are pushed to Dynatrace:

* app – Environment Id of your Mendix environment
* instance_index – Instance index that metrics belong to

#### 4.1.2 Extra Dimensions

{{% alert color="info" %}}
What Dynatrace calls "dimensions", other monitoring tools call "tags". The Mendix Developer Portal therefore refers to a "tag" when it is setting up a Dynatrace "dimension".
{{% /alert %}}

Extra dimensions can be set as tags in the Developer Portal. We recommend that you at least set the following tag:

* env:{environment_name} – this enables you to identify metrics sent from a particular environment so you can separate out production metrics from test metrics (for example, **env:accp**)

To set this tag, do the following:

1. Go to the **Environments** page of your app in the *Developer Portal*.
2. Click **Details** to select an environment you are monitoring with Dynatrace. 
3. Open the **Tags** tab.
4. Add a **Tag** – this is the string which is sent to Dynatrace as a dimension. See [Tags Tab](/developerportal/deploy/environments-details/#tags) in *Environment Details* for more information.
5. **Restart** the application.

Setting this value for your app means that all metrics from this environment of your app will have these tags. For example, the tags for mx.microflow.time.avg for this set of metrics include **env:accp**.

### 4.2 Dynatrace Issues

If you have any issues related to accessing Dynatrace, please contact their support here: [Dynatrace Support](https://one.dynatrace.com/hc/en-us/requests). You will need a Dynatrace account to request support.

## 5 Read More

* [Metrics](/developerportal/operate/metrics/)
