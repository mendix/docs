---
title: "Monitoring Environments in Mendix Apps on SAP BTP"
url: /developerportal/deploy/sap-cloud-platform/sap-monitoring/
weight: 19
description: "Presents reference information on logging and monitoring for Mendix apps running on SAP BTO."
---

## Introduction

For apps deployed to SAP Business Technology Platform (SAP BTP), you can see the logs using Kibana.

{{% alert color="info" %}}
To make full use of Kibana and see proper mapping of the log level, multi-line log messages, and stack traces, you need to configure the *SAP Logger Connector* in your app. For more information, see [SAP Logger Connector](/appstore/modules/sap/sap-logger/).
{{% /alert %}}

## Configuring Kibana

For information about configuring and using Kibana, see the [Kibana User Guide](https://www.elastic.co/guide/en/kibana/current/index.html). For more details on how Kibana is integrated with SAP BTP, see [Application Logging for the Cloud Foundry Environment](https://help.sap.com/viewer/ee8e8a203e024bbb8c8c2d03fce527dc/Cloud/en-US/68454d44ad41458788959485a24305e2.html).

## Viewing the Logs

The **Logs** page in your Mendix app shows all the environments for this app. Click the **Logs** button to open the log in Kibana.

{{< figure src="/attachments/deployment/sap-btp/log-sap.png" alt="Logs Page SAP" class="no-border" >}}

You may be asked to provide your SAP credentials before you can see the log in Kibana.

## Troubleshooting

If you encounter any issues while using the configuring the logging service, use the following troubleshooting tips to help you solve them.

### Application Logging Service Not Bound to App

The **Application Logging (application-logs)** service is not bound to your app automatically.

#### Cause

This issue may occur if your app is deployed to an environment created before October 22, 2018.

#### Solution

To resolve this issue, perform one of the following actions:

* Create a new environment and deploy your app there.
* Bind the service to your existing app by doing the following steps:

    1. Go to the SAP BTP cockpit.
    2. Go to the space for your environment.
    3. Find **Application Logging** in the Service Marketplace.
    4. Go to **Instances**.
    5. Create a **New Instance** and follow the instructions, ensuring that you bind it to your app.
    6. Restart the app.
