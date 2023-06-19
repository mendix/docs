---
title: "Logs"
url: /developerportal/operate/logs/
category: "Operations"
weight: 30
description: "Describes how to see the logs from your app."
tags: ["Operate", "App", "Developer Portal", "SAP", "Mendix Cloud"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

From this page of the Developer Portal, you can access the logs produced by your app. What you see depends on the environment to which your app is deployed.

The page is accessed through the **Logs** menu item in the left-hand menu.

{{% alert color="warning" %}}
You must have the **Access to Monitoring** permission to view logs. This needs to be set by the Technical Contact of the app. See [Node Permissions](/developerportal/deploy/node-permissions/) for information on how to do this.
{{% /alert %}}

## 2 Apps Deployed to the Mendix Cloud

{{% alert color="info" %}}
This is the default Mendix deployment for a licensed app.
{{% /alert %}}

For apps deployed to the Mendix Cloud, you can select which environment you want logs for. Production logs will require [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/).

You can view the live (current) log, download it, or view and download an archived log.

{{% alert color="info" %}}
The live log is displayed in the local time of the browser. All other logs have timestamps in UTC.
{{% /alert %}}
 
Logs on the Mendix Cloud are rotated and archived every day. The logs are kept for at least 6 months.

{{< figure src="/attachments/developerportal/operate/logs/log-v4.png" alt="Logs Page" >}}

| Action Button | Performs the Action |
| :--- | :--- |
| Download App Log | download an application log selected from the list underneath — the current log is the first one listed  |
| Download Access Log | download a log of who has created a user session on the app on the date selected from the list underneath |
| View Live Log | view today's log on the screen |

## 3 Apps on SAP Business Technology Platform

For apps deployed to SAP Business Technology Platform (SAP BTP) you can see the logs using Kibana.

{{% alert color="info" %}}
To make full use of Kibana and see proper mapping of the log level, multiline log messages, and stack traces, you will need to configure the *SAP Logger Connector* in your app. For more information see [SAP Logger Connector](/partners/sap/sap-logger/).
{{% /alert %}}

The logs page shows all the environments for this app. Click the **Logs** button to open the log in Kibana.

{{< figure src="/attachments/developerportal/operate/logs/log-sap.png" alt="Logs Page SAP" >}}

You may be asked to provide your SAP credentials before you can see the log in Kibana.

The Kibana user guide is available here: [Kibana User Guide](https://www.elastic.co/guide/en/kibana/current/index.html) and within Kibana. More information on how Kibana is integrated with SAP BTP is available on the SAP help site here: [Application Logging for the Cloud Foundry Environment](https://help.sap.com/viewer/ee8e8a203e024bbb8c8c2d03fce527dc/Cloud/en-US/68454d44ad41458788959485a24305e2.html).

{{% alert color="info" %}}For apps deployed to environments created before 22 October 2018, the *Application Logging (application-logs)* service will not have been bound to your app automatically. To resolve this you can either:

1. Create a new environment and deploy your app there.

2. Bind the service to your existing app by:

    * Going to the SAP BTP cockpit
    * Going to the space for your environment
    * Finding *Application Logging* in the Service Marketplace
    * Going to *Instances*
    * Creating a *New Instance* and following the instructions, ensuring that you bind it to your app
    * Stopping and starting the app
{{% /alert %}}

## 4 Free App

Logs are not available for Free Apps. You will see a sample screen on the logs page. You only have access to a live log of your deployed free app, on the **Environments** page, under **View Live Log**. 

{{% alert color="info" %}}
If you have set up custom log messages, you will only be able to see messages up to Info log level. Debug and Trace log messages will not be shown in the live log.
{{% /alert %}}

## 5 App Deployed to Other Clouds

Logs are not available in the Development Portal for apps running on clouds not mentioned above. You will need to go to the cloud management portal for the cloud to which your app is deployed.
