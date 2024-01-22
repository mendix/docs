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

From the **Logs** page, you can access the logs produced by your app. What you see depends on the environment to which your app is deployed.

To access the **Logs** page, open your app in the [Developer Portal](https://sprintr.home.mendix.com/). Then select **Logs** in the navigation pane. Use the drop-down menu in the upper-right corner to select the environment you want to view logs for.

{{% alert color="info" %}}
To view logs, you must have **Access to Monitoring** permission. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).
{{% /alert %}}

## 2 Apps Deployed to Mendix Cloud

{{% alert color="info" %}}
Mendix Cloud is the default Mendix deployment for a licensed app.
{{% /alert %}}

When your app is deployed to Mendix Cloud, it automatically creates daily app and access logs. On the **Logs** page, you can view archived logs, view the live log, and view log access activity.

{{< figure src="/attachments/developerportal/operate/logs/logs-archives.png" alt="Logs Page" >}}

For apps deployed to Mendix Cloud, you can select which environment you want logs for. Viewing production logs requires [two-factor authentication](/developerportal/deploy/two-factor-authentication/).

### 2.1 Archived App and Access Logs

{{% alert color="info" %}}For apps deployed to Mendix Cloud, logs are rotated and archived every day. They are retained for six months.{{% /alert %}}

For each day, you can download the app log or the access log by clicking the corresponding **Download** button ({{% icon name="download-bottom" %}}).

File sizes are displayed for archived logs, but in-progress logs show the label "Unknown" instead. You can download the in-progress app and access logs for the current day; however, these logs will contain incomplete records because the day's activity is not yet completed. 

By default, archived logs are sorted by date; the current log is the first one listed. You can manually click through the archived logs or use the search field to find logs for a specific date.

{{< figure src="/attachments/developerportal/operate/logs/logs-filter.png" alt="" >}}

### 2.2 Live Log

Click **View Live Log** to access your app's log in real time. You can use the drop-down menus to adjust the log sources and log levels that appear in the live log.

{{< figure src="/attachments/developerportal/operate/logs/live-log.png" alt="" >}} 

{{% alert color="info" %}}
The live log displays in the local time of the browser. All other logs have timestamps in UTC.
{{% /alert %}}

### 2.3 Activity Log

At the bottom of the **Logs** page, there is an activity log. This section reports data on who has viewed or downloaded the logs. You can see which log was interacted with, by whom, and when. If you are the app's [Technical Contact](/developerportal/general/app-roles/#technical-contact), you can download the activity log data as a CSV file.

{{% alert color="info" %}}
The activity log records access by team members as well as members of Mendix Support, who may view or download your app's logs in connection with any support tickets you have open. 
{{% /alert %}}

{{< figure src="/attachments/developerportal/operate/logs/activity-log.png" alt="Activity log" class="image-border" >}}

## 3 Apps on SAP Business Technology Platform

For apps deployed to SAP Business Technology Platform (SAP BTP), you can see the logs using Kibana.

{{% alert color="info" %}}
To make full use of Kibana and see proper mapping of the log level, multi-line log messages, and stack traces, you need to configure the *SAP Logger Connector* in your app. For more information, see [SAP Logger Connector](/appstore/connectors/sap/sap-logger/).
{{% /alert %}}

The **Logs** page shows all the environments for this app. Click the **Logs** button to open the log in Kibana.

{{< figure src="/attachments/developerportal/operate/logs/log-sap.png" alt="Logs Page SAP" >}}

You may be asked to provide your SAP credentials before you can see the log in Kibana.

For more details about using Kibana, consult the [Kibana User Guide](https://www.elastic.co/guide/en/kibana/current/index.html). For more details on how Kibana is integrated with SAP BTP, see [Application Logging for the Cloud Foundry Environment](https://help.sap.com/viewer/ee8e8a203e024bbb8c8c2d03fce527dc/Cloud/en-US/68454d44ad41458788959485a24305e2.html).

{{% alert color="info" %}}If your app is deployed to an environment created before October 22, 2018, the **Application Logging (application-logs)** service will not have been bound to your app automatically. To resolve this, you can do one of the following:

* Create a new environment and deploy your app there.

* Bind the service to your existing app, as follows:

    1. Go to the SAP BTP cockpit.
    2. Go to the space for your environment.
    3. Find **Application Logging** in the Service Marketplace.
    4. Go to **Instances**.
    5. Create a **New Instance** and follow the instructions, ensuring that you bind it to your app.
    6. Restart the app.
{{% /alert %}}

## 4 Free App

Archived logs are not available for Free Apps. The **Logs** page displays sample data instead of archived data for your app.

{{< figure src="/attachments/developerportal/operate/logs/free-app.png" alt="" >}}

You can still interact with the sample data, and you can click **View Live Log** to access a live log of your deployed Free App.

## 5 App Deployed to Other Clouds

Logs are not available in the Development Portal for apps running on any clouds that are not mentioned above. To configure logs if your app is running on a different cloud, go to the cloud management portal for the cloud to which your app is deployed. For details on setting up Private Cloud logs, see [Monitoring Environments in Mendix for Private Cloud](/developerportal/deploy/private-cloud-monitor/).
