---
title: "Logs"
url: /developerportal/operate/logs/
weight: 12
description: "Describes how to see the logs from your app."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

From the **Logs** page, you can access the logs produced by your app. What you see depends on the environment to which your app is deployed.

{{% alert color="info" %}}
This page describes logs for licensed apps deployed to Mendix Cloud. Logs are not available for Free Apps deployed to Mendix Cloud.
{{% /alert %}}

{{% alert color="info" %}}
To configure logs if your app is running on a different cloud, go to the cloud management portal for the cloud to which your app is deployed. For more information, see [Monitoring Environments in Mendix for Private Cloud](/developerportal/deploy/private-cloud-monitor/) or [Monitoring Environments in Mendix Apps on SAP BTP](/developerportal/deploy/sap-cloud-platform/sap-monitoring/).
{{% /alert %}}

To access the **Logs** page, open your app in [Apps](https://sprintr.home.mendix.com/). Then select **Logs** in the navigation pane.

Use the drop-down menu in the upper-right corner to select the environment you want to view logs for.

{{% alert color="info" %}}
To view logs, you must have **Access to Monitoring** permission. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).
{{% /alert %}}

## Apps Deployed to Mendix Cloud

When your app is deployed to Mendix Cloud, it automatically creates daily app and access logs. On the **Logs** page, you can view archived logs, view the live log, and view log access activity.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/logs/logs-archives.png" alt="Logs Page" class="no-border" >}}

For apps deployed to Mendix Cloud, you can select which environment you want logs for. Viewing production logs requires [two-factor authentication](/developerportal/deploy/two-factor-authentication/).

{{% alert color="info" %}}
Logging for apps deployed to Mendix Cloud is limited to 500 loglines per second. Any loglines above this limit are suppressed; they do not appear in the log files or live log. If loglines are suppressed because of this rate limit, the log displays a notification with the number of loglines that were suppressed.
{{% /alert %}}

### Archived App and Access Logs

{{% alert color="info" %}}For apps deployed to Mendix Cloud, logs are rotated and archived every day. They are retained for six months.{{% /alert %}}

For each day, you can download the app log or the access log by clicking the corresponding **Download** button ({{% icon name="download-bottom" %}}).

File sizes are displayed for archived logs, but in-progress logs show the label "Unknown" instead. You can download the in-progress app and access logs for the current day; however, these logs will contain incomplete records because the day's activity is not yet completed. 

By default, archived logs are sorted by date; the current log is the first one listed. You can manually click through the archived logs or use the search field to find logs for a specific date.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/logs/logs-filter.png" alt="" class="no-border" >}}

### Live Log

Click **View Live Log** to access your app's log in real time. You can use the drop-down menus to adjust the log sources and log levels that appear in the live log.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/logs/live-log.png" alt="" class="no-border" >}} 

{{% alert color="info" %}}
The live log displays in the local time of the browser. All other logs have timestamps in UTC.
{{% /alert %}}

### Activity Log

At the bottom of the **Logs** page, there is an activity log. This section reports data on who has viewed or downloaded the logs. You can see which log was interacted with, by whom, and when. If you are the app's [Technical Contact](/developerportal/general/app-roles/#technical-contact), you can download the activity log data as a CSV file.

{{% alert color="info" %}}
The activity log records access by team members as well as members of Mendix Support, who may view or download your app's logs in connection with any support tickets you have open. 
{{% /alert %}}

{{< figure src="/attachments/deployment/mendix-cloud-deploy/logs/activity-log.png" alt="Activity log" >}}

## Free App

Archived logs are not available for Free Apps. The **Logs** page displays sample data instead of archived data for your app.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/logs/free-app.png" alt="" class="no-border" >}}

You can still interact with the sample data, and you can click **View Live Log** to access a live log of your deployed Free App.
