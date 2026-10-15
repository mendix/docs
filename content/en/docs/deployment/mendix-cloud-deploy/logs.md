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
To configure logs if your app is running on a different cloud, go to the cloud management portal for the cloud to which your app is deployed. For more information, see [Monitoring Environments in Mendix on Kubernetes](/developerportal/deploy/private-cloud-monitor/) or [Monitoring Environments in Mendix Apps on SAP BTP](/developerportal/deploy/sap-cloud-platform/sap-monitoring/).
{{% /alert %}}

To access the **Logs** page, open your app in [Projects](https://projects.home.mendix.com/). Navigate to **Monitoring** and select **Logs** in the navigation pane.

Use the drop-down menu in the upper-right corner to select the environment you want to view logs for.

{{% alert color="info" %}}
To view logs, you must have **Monitoring Access** permission. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).
{{% /alert %}}

## Apps Deployed to Mendix Cloud

When your app is deployed to Mendix Cloud, it automatically creates daily app and access logs. The **Logs** page has the following tabs:

* **Dashboard** – an overview of errors, warnings, failed dependencies, and security markers in your app's logs. This is the default tab.
* **Log Files** – archived app and access logs, and the live log
* **Activity** – a record of who has viewed or downloaded the logs

For apps deployed to Mendix Cloud, you can select which environment you want logs for. Viewing production logs requires [two-factor authentication](/developerportal/deploy/two-factor-authentication/).

{{% alert color="info" %}}
Logging for apps deployed to Mendix Cloud is limited to 500 loglines per second. Any loglines above this limit are suppressed; they do not appear in the log files or live log. If loglines are suppressed because of this rate limit, the log displays a notification with the number of loglines that were suppressed.
{{% /alert %}}

### Dashboard {#dashboard}

The **Dashboard** tab summarizes your app's logs for the selected environment, to help you identify issues and decide where to start investigating.

Use the **Time interval** drop-down menu to select the period that the dashboard covers. You can select **Last 6 hrs**, **Last 12 hrs**, **Last 24 hrs**, **Last 2 days**, or **Last 7 days**. All time intervals are in UTC.

{{% alert color="info" %}}
The dashboard covers at most the last seven days. To investigate older activity, download the archived logs from the **Log Files** tab.
{{% /alert %}}

The dashboard contains the following sections:

| Section | Description |
| --- | --- |
| **Summary** | Shows the **Total Errors**, **Total Warnings**, **Failed Dependencies** (the number of grouped failure types), and **Security Markers** (the number of grouped pattern types) in the selected time interval. |
| **Logs Activity Timeline** | Shows the number of errors and the total log volume (log lines) over time, so you can see when errors started or peaked. |
| **Top Error Messages** | Lists the most frequent error messages, with the number of occurrences (**Count**) and when each message was last logged (**Last Seen**). |
| **Top Warning Messages** | Lists the most frequent warning messages, with the number of occurrences (**Count**) and when each message was last logged (**Last Seen**). |
| **Top Endpoints by Error Rate** | Lists the endpoints of your app with the highest error rate. For each endpoint, it shows the HTTP **Method**, the **Path**, the total number of requests (**Count**), the number of failed requests (**Errors**), the **Error Rate %**, and when the endpoint was last called (**Last Seen**). |
| **Dependency Failures** | Lists log messages that show your app had trouble reaching a service or database it depends on. Examples are refused or timed-out connections, DNS or TLS certificate errors, unavailable upstream services, and an exhausted database connection pool. Messages are grouped by failure type. |
| **Security Markers** | Lists requests to your app that match patterns used by automated attacks and vulnerability scanners. Examples are SQL injection attempts, requests for configuration files or admin pages, and requests from known scanning tools. Requests are grouped by pattern type. |

In the **Dependency Failures** and **Security Markers** sections, each group is a collapsible section. Use **Expand All Sections** or **Collapse All Sections** to show or hide the details of all groups at once.

{{% alert color="info" %}}
Security markers are based only on the requests recorded in your access log. A marker does not mean that your app was compromised, because apps that are reachable from the internet regularly receive this kind of automated traffic. Injection-type patterns, such as SQL injection, are counted only when your app responded with an error status code.
{{% /alert %}}

### Log Files

The **Log Files** tab shows the archived app and access logs, and the live log.

#### Archived App and Access Logs

For each day, you can download the app log or the access log by clicking the corresponding **Download** button ({{% icon name="download-bottom" %}}).

File sizes are displayed for archived logs, but in-progress logs show the **Unknown** label instead. You can download the in-progress app and access logs for the current day; however, these logs will contain incomplete records because the day's activity is not yet completed. 

By default, archived logs are sorted by date; the current log is the first one listed. You can manually click through the archived logs or use the search field to find logs for a specific date.

##### Rotation and Retention Schedule {#retention-schedule}

For apps deployed to Mendix Cloud, application logs and access logs are rotated and archived every day. They are kept for six months. If you want to keep a log for longer than that, you can download the log to your computer.

#### Live Log

Click **View Live Log** to access your app's log in real time. You can use the drop-down menus to adjust the log sources and log levels that appear in the live log.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/logs/live-log.png" alt="" class="no-border" >}} 

{{% alert color="info" %}}
The live log displays in the local time of the browser. All other logs have timestamps in UTC.
{{% /alert %}}

### Activity {#activity-log}

The **Activity** tab shows the activity log. The activity log reports data on who has viewed or downloaded the logs. You can see which log was interacted with, by whom, and when. If you are the app's [Technical Contact](/developerportal/general/app-roles/#technical-contact), you can download the activity log data as a CSV file.

{{% alert color="info" %}}
The activity log records access by team members as well as members of Mendix Support, who may view or download your app's logs in connection with any support tickets you have open. 
{{% /alert %}}

## Free App

Archived logs are not available for Free Apps. The **Logs** page displays sample data instead of archived data for your app.

You can still interact with the sample data, and you can click **View Live Log** to access a live log of your deployed Free App.
