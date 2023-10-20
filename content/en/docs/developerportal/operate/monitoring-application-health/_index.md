---
title: "Alerts"
url: /developerportal/operate/monitoring-application-health/
category: "Operations"
weight: 20
description: "Describes how to monitor the health and status of your app."
tags: ["Monitoring","Mendix Cloud","Developer Portal","Performance","Health", "Database IOPS Burst Balance", "Database Freeable Memory"]
aliases:
    - /mendixcloud/monitoring-application-health.html
    - /howtogeneral/mendixcloud/monitoring-application-health.html
    - /mendixcloud/monitoring-application-health
    - /howtogeneral/mendixcloud/monitoring-application-health
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

When your application has reached production status, it's important to keep track of its status and health. When you click **Alerts** in the **Developer Portal**, you can inspect your application's health in the Mendix Cloud. 

Mendix analyzes the application and platform status periodically. All status alerts are logged in the **History** of the **Alerts**. 
If you [Receive Environment Status Alerts](/developerportal/operate/receive-alerts/), you will receive a status alert only once. Mendix will not send you multiple alerts of the same status.

This document will explain how to access the application status page, what the information on this page means, and how to look at the alerts for your app.

## 2 Application Status

The Mendix Cloud automatically monitors the health and status of apps that are deployed on cloud nodes. To access the information gathered in this way, follow these steps:

1. Go to the [Developer Portal](https://home.mendix.com).
2. Open the app that you want to monitor.
3. Click **Alerts**. This will display the status of your app node in various categories.

    {{< figure src="/attachments/developerportal/operate/monitoring-application-health/18580000.png" >}}

    {{% alert color="warning" %}}The drop-down at the top lets you switch between viewing the status for your node environments. Note that accessing production information may require additional authentication and is subject to your app's security settings.{{% /alert %}}

4. If one of the status items is not listed as **OK**, click the line to show an additional information box with details about the error.

    {{< figure src="/attachments/developerportal/operate/monitoring-application-health/18579999.png" >}}

This status information will tell you important information that you either need in order to resolve the issue, or that needs to be included when submitting a support request to [Mendix Support](https://support.mendix.com). You can download a log of the alerts on the **Log** page.

Any status that could cause your app to stop functioning will result in an alert. For example, the monitoring information from the image shows that one of the status indicators was **Critical**. When this happens to one of your nodes, all users that are subscribed to alerts will receive an email alert.

## 3 Mendix Cloud Alerting Categories and Thresholds

There are a number of categories on the status overview that are related to various technical parts of your application environment. Any category that does not display as *OK* needs to be investigated. Each category indicates a different part of the app infrastructure that is monitored.

Some alerts listed in the tables below only appear when the alert is triggered. Therefore, an alert not being present in the overview is the same as the alert having an *OK* status.

### 3.1 Application Status

Application Status | |
:---|:---|
Description | Our application runtime sends a heartbeat signal every few minutes to show it is still alive. If no heartbeat timeout has been received for some time, the system will generate an alert.|
Example message | No runtime heartbeat received for 8m45s.
Warning Threshold | Not used.                                              |
Critical Threshold | If the runtime heartbeat of the application has not been received for 5 minutes, a critical alert will be generated.
First actions to take | Check the application logs for issues. Also check [https://status.mendix.com/](https://status.mendix.com/) for any planned maintenance.                         |

Application Container CPU Percentage | |
:---|:---|
Description | Track the CPU utilization of the application container |
Example message | Application container 34234543-6543-6543-6543-153d247b6543 - Instance Index: 0 has high CPU usage: 90.5
Warning Threshold | CPU utilization is between 75% and 85%. |
Critical Threshold | CPU utilization is higher than 85%.
First actions to take | Inspect the trends for **Application node CPU usage** combined with all **Application Statistics** for anomalies and correlate those with application behavior. |

Application Container Disk Percentage | |
:---|:---|
Description | Track the disk utilization of the application container |
Example message | Application container 34234543-6543-6543-6543-153d247b6543 - Instance Index: 0 has high disk usage: 90.5
Warning Threshold | Disk utilization is between 75% and 85%. |
Critical Threshold | Disk utilization is higher than 85%.
First actions to take | Inspect the trends for **Application node disk usage (percentage)** combined with all **Application Statistics** for anomalies and correlate those with application behavior. |

Application Container Memory Percentage | |
:---|:---|
Description | Track the memory utilization of the application container |
Example message | Application container 34234543-6543-6543-6543-153d247b6543 - Instance Index: 0 has high memory usage: 90.5
Warning Threshold | Memory utilization is between 90% and 95%. |
Critical Threshold | Memory utilization is higher than 95%.
First actions to take | Inspect the trends for **Application node operating system memory** combined with all **Application Statistics** for anomalies and correlate those with application behavior. |

Critical Logs | |
:---|:---|
Description | The CRITICAL log level is reserved for issuing messages in rare cases where the application may not be able to function reliably anymore. For example, there is a chance of data corruption when the application continues to be running. Internal JVM errors are logged to this level. Out of memory errors (which are JVM errors) must be treated as harmful for the stability and integrity of your Mendix application process.
Example message | Critical errors count is 2.
Warning Threshold | Not used.
Critical Threshold | If any logging is done on the CRITICAL level, the alerts status always directly switches to Critical. The critical log message counter will only be reset when restarting the application process.
First actions to take | Inspect the application log file and look up the CRITICAL error messages. Restart the application as soon as possible in case of stability issues.

Database CPU Utilization | |
:---|:---|
Description | Track the CPU utilization for the database belonging to the application
Example message | Database has 95% CPU utilization.
Warning Threshold | Not used.
Critical Threshold | CPU utilization is higher than 90%. 
First actions to take | Inspect the trends for **Application node CPU usage** combined with **Application node disk throughput** and **Application node load** for anomalies and correlate those with application behavior.

Database Free Space | |
:---|:---|
Description | Track the amount of disk space used for the database belonging to the application.
Example message | Database has less than 5% free space.
Warning Threshold | Database has less than 25% and more than 10% free space available. 
Critical Threshold | Database has less than 10% free space available.
First actions to take | Check if there is a sudden increase or a slow increase over time. Resolve by either stopping a runaway process, removing old data, or upgrading the cloud resource pack (for example, by ordering more storage).

Database Freeable Memory | |
:---|:---|
Description | Track the amount of freeable memory for the database belonging to the application.
Example message | Database has 35% freeable memory.
Warning Threshold | Not used.
Critical Threshold | Database has 10% freeable memory.
First actions to take | Inspect the trends graph **Database Node Operating System Memory** for anomalies and correlate those with application behavior. Resolve by identifying and optimizing long-running database queries, or upgrading the cloud resource pack (for example, by ordering more memory).

Database IOPS Burst Balance | |
:---|:---|
Description | Track the available IOPS burst balance credit for the database belonging to the application.
Example message | Database has 10% IOPS burst balance.
Warning Threshold | Not used.
Critical Threshold | Database has 20% IOPS burst balance.
First actions to take | Inspect the trends graph **Database IOPS Burst Balance** for anomalies and correlate those with application behavior.

Health Check | |
:---|:---|
Description | Each application can define a health check microflow. This microflow is called every 10 seconds by the Mendix Runtime to determine if the application is still healthy. This can be used to check for application-specific health indicators.
Example message | Health: the nightly import job took more than an hour to complete!
Warning Threshold | If the health check microflow returns a non-empty string value, this means the application is not healthy and a WARNING alert is generated.
Critical Threshold | If the health check microflow itself experiences an error, a CRITICAL alert is generated. This will also happen when no database connection can be established.
First actions to take | Since the health check microflow is specific to your application, we cannot generically advise actions to take.

Virtual Machine Error | |
:---|:---|
Description | Show the state of the application's virtual machine (JVM), or an error state if there is an issue with JVM.
Example message | Your application's virtual machine died because of non-recoverable error in the last 5 minutes.
Warning Threshold | Not used.
Critical Threshold | If the JVM process has experienced a fatal (non-recoverable) error and the application's JVM crashed.
First actions to take | Check the log files and application metrics for a possible cause of the error.

Virtual Machine Out Of Memory | |
:---|:---|
Description | Show the state of the application's virtual machine (JVM), or an error state when the issue occurs with a JVM.
Example message | Your application's virtual machine ran out of memory and died in the last 5 minutes.
Warning Threshold | Not used.
Critical Threshold | If the JVM process has run out of memory and the application's JVM crashed.
First actions to take | Check the log files and application metrics for a possible cause of the crash.

## 4 Basic License

### 4.1 Database Errors In the Log

You might see database connection errors in your app logs. For example, something like: `ERROR - ConnectionBus: Error occurred on rollback database transaction. This connection has been closed.` You do not have to do anything, your app will continue to work as expected.

The reason you receive a message is that when you are using a [basic license](/developerportal/deploy/basic-package/), you are given your own database schema which is part of a shared database hosted by AWS. As part of normal operations, AWS can apply autoscaling to the shared database. This will cause these error messages.

The autoscaling might occur when your app does not have high resource usage because of the way shared databases are managed. More resources may be required by an app using another schema on the shared database. This is a known phenomenon, which AWS terms a [noisy neighbor](https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/noisy-neighbor.html).

## 5 Alerts History

To access the history of the alerts from your app, follow these steps:

1. Click the tab **History** on the **Alerts** page.
2. You will see an overview of all alerts that have been sent for this application.

    {{< figure src="/attachments/developerportal/operate/monitoring-application-health/alerts-history.png" >}}

    The overview shows alert types and details including date and time. The alert types provide a broad indication of the type of error that occurred, such as critical log messages or failures of the health check microflow. Recovery notifications will also be shown here.

    The drop-down at the top lets you switch between viewing the status for your node environments. Note that accessing production information may require additional authentication and is subject to your app's security settings.

3. Click **Details**. This will open the alert details, which contains additional information. More information might be available in your application's log file.

## 6 Read More

* [Metrics](/developerportal/operate/metrics/)
* [Maintenance Windows: Configuration](/developerportal/deploy/maintenance-windows/)
* [Mendix Cloud Status](/developerportal/deploy/mendix-cloud-status/)
* [How to Submit Support Requests](/developerportal/support/submit-support-request/)
