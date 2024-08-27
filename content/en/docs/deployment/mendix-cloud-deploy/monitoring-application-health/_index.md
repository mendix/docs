---
title: "Alerts"
url: /developerportal/operate/monitoring-application-health/
weight: 14
description: "Describes how to monitor the health and status of your app."
aliases:
    - /mendixcloud/monitoring-application-health.html
    - /howtogeneral/mendixcloud/monitoring-application-health.html
    - /mendixcloud/monitoring-application-health
    - /howtogeneral/mendixcloud/monitoring-application-health
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

When your application has reached production status, it is important to keep track of its status and health. When you click **Alerts** in the Mendix Portal, you can inspect your application's health in Mendix Cloud.

{{% alert color="info" %}}This page describes alerts for licensed apps deployed to Mendix Cloud. Alerts are not available for Free Apps deployed to Mendix Cloud.<br><br>If your app is deployed to SAP Business Technology Platform (SAP BTP) instead, the **Alerts** page links to the SAP BTP cockpit.{{% /alert %}}

Mendix analyzes the application and platform status periodically. All status alerts are logged in the **History** of the **Alerts**. 

{{% alert color="info" %}}
If you have status alerts set up (for details, see [Receive Environment Status Alerts](/developerportal/operate/receive-alerts/)), you will receive each status alert only once. Mendix will not send you multiple alerts for the same status.
{{% /alert %}}

This document explains how to access the application status page, what the information on this page means, and how to look at the alerts for your app.

## Application Status

Mendix Cloud automatically monitors the health and status of apps that are deployed on cloud nodes. To access the information gathered in this way, follow these steps:

1. From [Apps](https://sprintr.home.mendix.com), open the app that you want to monitor.

1. In the [navigation pane](/developerportal/#navigation-pane), click **Alerts**. This displays the status of your app node in various categories.

    {{% alert color="info" %}}To directly visit the **Alerts** page, you can also use this link: `https://cloud.home.mendix.com/link/monitor/{appID}`, with `{app ID}` replaced by your app ID.{{% /alert %}}

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/monitoring-application-health/application-status.png" class="no-border" >}}

1. To view more details about a specific alert, click it. Detailed information about that alert will appear below the alert status table.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/monitoring-application-health/alert-details.png" class="no-border" >}}

You may be able to use this information to resolve the issue yourself; otherwise, include this information when submitting a support request to [Mendix Support](https://support.mendix.com). You can download a log of the alerts on the [Logs](/developerportal/operate/logs/) page.

Any status that could cause your app to stop functioning results in an alert. For example, the monitoring information from the image above shows that one of the status indicators was **Critical**. If this happens to one of your nodes, all users who are subscribed to alerts receive an email alert.

## Mendix Cloud Alerting Categories and Thresholds

The status overview has several categories, which are related to various technical parts of your application environment. Each category indicates a different part of the app infrastructure that is monitored.

Any category that does not display as *OK* needs to be investigated. Some alerts listed in the tables below appear only when the alert is triggered. Therefore, if an alert is not present in the overview, that is the same as the alert having an *OK* status.

### Application Status {#app-status}

Application Status | |
:---|:---|
Description | The application runtime sends a heartbeat signal every few minutes to show it is still alive. If no heartbeat timeout has been received for some time, the system generates an alert.|
Example message | No runtime heartbeat received for 8m45s.
Warning Threshold | Not used.                                              |
Critical Threshold | If the runtime heartbeat of the application has not been received for 5 minutes, a critical alert will be generated.
First actions to take | Check the application logs for issues. Also check [Mendix Platform Status](https://status.mendix.com/) for any planned maintenance.                         |

### Application Container Disk Percentage {#app-container-disk-pct}

Application Container Disk Percentage | |
:---|:---|
Also called | Container disk overload |
Description | Track the disk utilization of the application container |
Example message | Application container 34234543-6543-6543-6543-153d247b6543 - Instance Index: 0 has high disk usage: 90.5
Warning Threshold | Disk utilization is between 75% and 85%. |
Critical Threshold | Disk utilization is higher than 85%.
First actions to take | Inspect the metrics for **Disk usage** combined with all **Application Statistics** for anomalies and correlate those with application behavior. |

### Application Container Memory Percentage {#app-container-memory-pct}

Application Container Memory Percentage | |
:---|:---|
Also called | Container memory overload |
Description | Track the memory utilization of the application container |
Example message | Application container 34234543-6543-6543-6543-153d247b6543 - Instance Index: 0 has high memory usage: 90.5
Warning Threshold | Memory utilization is between 90% and 95%. |
Critical Threshold | Memory utilization is higher than 95%.
First actions to take | Inspect the metrics for **Memory usage** combined with all **Application Statistics** for anomalies and correlate those with application behavior. |

### Critical Logs {#critical-logs}

Critical Logs | |
:---|:---|
Description | The CRITICAL log level is reserved for issuing messages in rare cases where the application may not be able to function reliably anymore. For example, there is a chance of data corruption when the application continues to be running. Internal JVM errors are logged to this level. Out of memory errors (which are JVM errors) must be treated as harmful to the stability and integrity of your Mendix application process.
Example message | Critical errors count is 2.
Warning Threshold | Not used.
Critical Threshold | If any logging is done on the CRITICAL level, the alerts status always directly switches to Critical. The critical log message counter will only be reset when restarting the application process.
First actions to take | Inspect the application log file and look up the CRITICAL error messages. Restart the application as soon as possible in case of stability issues.

### Database CPU Utilization {#dbase-cpu-pct}

Database CPU Utilization | |
:---|:---|
Description | Track the CPU utilization for the database belonging to the application
Example message | Database has 95% CPU utilization.
Warning Threshold | Not used.
Critical Threshold | CPU utilization is higher than 90%. 
First actions to take | Inspect the metrics for **CPU utilization of the database** combined with **Database throughput** for anomalies, and correlate those with application behavior.

### Database Free Space {#dbase-free-space}

Database Free Space | |
:---|:---|
Description | Track the amount of disk space used for the database belonging to the application.
Example message | Database has less than 5% free space.
Warning Threshold | Database has less than 25% and more than 10% free space available. 
Critical Threshold | Database has less than 10% free space available.
First actions to take | Check if there is a sudden increase or a slow increase over time. Resolve by either stopping a runaway process, removing old data, or upgrading the cloud resource pack (for example, by ordering more storage).

### Database Freeable Memory {#dbase-freeable-memory}

Database Freeable Memory | |
:---|:---|
Description | Track the amount of freeable memory for the database belonging to the application.
Example message | Database has 35% freeable memory.
Warning Threshold | Not used.
Critical Threshold | Database has 5% freeable memory for XS21, XS20, S, and Strato [cloud resource packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack). Database has 10% freeable memory for all other cloud resource packs.
First actions to take | Inspect the metrics graph **Database memory** for anomalies and correlate those with application behavior. Resolve by identifying and optimizing long-running database queries, or upgrading the cloud resource pack (for example, by ordering more memory).

### Database IOPS Burst Balance {#dbase-iops}

Database IOPS Burst Balance | |
:---|:---|
Description | Track the available IOPS burst balance credit for the database belonging to the application.
Example message | Database has 10% IOPS burst balance.
Warning Threshold | Not used.
Critical Threshold | Database has 20% IOPS burst balance.
First actions to take | Inspect the metrics graph **Database IOPS Burst Balance** for anomalies and correlate those with application behavior.

### Health Check {#health-check}

Health Check | |
:---|:---|
Description | Each application can define a health check microflow. This microflow is called every 10 seconds by the Mendix Runtime to determine if the application is still healthy. This can be used to check for application-specific health indicators.
Example message | Health: the nightly import job took more than an hour to complete!
Warning Threshold | If the health check microflow returns a non-empty string value, this means the application is not healthy and a WARNING alert is generated.
Critical Threshold | If the health check microflow itself experiences an error, a CRITICAL alert is generated. This will also happen when no database connection can be established.
First actions to take | Because the health check microflow is specific to your application, Mendix cannot generically advise actions to take.

### Virtual Machine Error {#virtual-machine-error}

Virtual Machine Error | |
:---|:---|
Description | Show the state of the application's virtual machine (JVM), or an error state if there is an issue with JVM.
Example message | Your application's virtual machine died because of non-recoverable error in the last 5 minutes.
Warning Threshold | Not used.
Critical Threshold | If the JVM process has experienced a fatal (non-recoverable) error and the application's JVM crashed.
First actions to take | Check the log files and application metrics for a possible cause of the error.

### Virtual Machine Out Of Memory {#virtual-machine-memory}

Virtual Machine Out Of Memory | |
:---|:---|
Description | Show the state of the application's virtual machine (JVM), or an error state when the issue occurs with a JVM.
Example message | Your application's virtual machine ran out of memory and died in the last 5 minutes.
Warning Threshold | Not used.
Critical Threshold | If the JVM process has run out of memory and the application's JVM crashed.
First actions to take | Check the log files and application metrics for a possible cause of the crash.

## Basic License

### Database Errors In the Log

You might see database connection errors in your app logs. For example, you might see something like "ERROR - ConnectionBus: Error occurred on rollback database transaction. This connection has been closed." You do not have to do anything; your app will continue to work as expected.

The reason you receive a message is that when you are using a [basic license](/developerportal/deploy/basic-package/), you get your own database schema which is part of a shared database hosted by AWS. As part of normal operations, AWS can apply autoscaling to the shared database. This will cause these error messages.

The autoscaling might occur when your app does not have high resource usage because of the way shared databases are managed. More resources may be required by an app using another schema on the shared database. This is a known phenomenon, which AWS terms a [noisy neighbor](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/noisy-neighbor.html).

## Alerts History

To access the history of the alerts from your app, follow these steps:

1. Click the **History** tab on the **Alerts** page.
2. Select the environment that you wish to see alert history for.
3. You will see an overview of all alerts that have been sent for this application.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/monitoring-application-health/alerts-history.png" >}}

    The overview shows alert types and details, including date and time. The alert types provide a broad indication of the type of error that occurred, such as critical log messages or failures of the health check microflow. Recovery notifications are also shown here.

## Read More

* [Metrics](/developerportal/operate/metrics/)
* [Maintenance Windows: Configuration](/developerportal/deploy/maintenance-windows/)
* [Mendix Cloud Status](/developerportal/deploy/mendix-cloud-status/)
* [How to Submit Support Requests](/support/submit-support-request/)
