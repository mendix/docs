---
title: "AI Log Summary"
url: /developerportal/maia-operate/ai-log-summary/
description: "Describes the AI Log Summary feature, which provides a daily AI-generated digest of application log activity for Mendix applications running on Mendix Cloud."
weight: 10
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, see [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

AI Log Summary is a feature of Maia Operate that provides an AI-generated overview of your application's log activity for a single Mendix environment. By analyzing the previous 24 hours of log data, it generates a summary of error patterns, application lifecycle events, and security signals, giving you a quick operational overview without the need to manually download or review raw log files.

Summaries are generated on demand and are intended to help identify areas that may require further investigation. They provide a starting point for troubleshooting and should be used alongside the underlying log data, not as a replacement for it.

{{% alert color="info" %}}
AI Log Summary is currently not available in Mendix Cloud Africa (Cape Town).
{{% /alert %}}

## Prerequisites

To use AI Log Summary, you must have **Access to Monitoring** permission for the environment. For more information, refer to [Node Permissions](/developerportal/deploy/node-permissions/#access-to-monitoring).

## Generating a Log Summary {#generate-log-summary}

To generate an AI Log Summary:

1. Open your app in [Mendix Cloud](https://cloud.home.mendix.com).
2. In the **Overview** tab, locate the target environment.
3. Click **Explain**.

Analysis typically takes 10–30 seconds. AI Log Summary displays a progress indicator while the analysis is running.

## Understanding the Log Summary {#understand-log-summary}

When the AI analysis is complete, the summary opens in a read-only window. It is presented in plain language, which can be copied for use in tickets or documentation. It includes the following sections:

* **Status overview** – a snapshot of application health, including uptime, total error count and security events
* **Timeline of events** – a chronological view of significant lifecycle events, such as startup and shutdown events, critical errors, deployments, and configuration changes
* **Error analysis** – errors grouped by pattern, with occurrence counts and the timeframe in which they appeared
* **Security signals** – patterns in HTTP access logs that may indicate unusual activity, such as repeated failed authentication attempts or suspected probes

{{% alert color="warning" %}}
Summaries are AI-generated and may miss edge cases or omit patterns that appear infrequently in the log data. Always verify findings against the raw log data before taking action. Do not use summaries as the sole basis for application changes, compliance decisions, or security assessments.
{{% /alert %}}

## Data Handling {#data-handling}

Log retention follows the existing log retention policies for your environment, independent of this feature. For more information, refer to the [Rotation and Retention Schedule](/developerportal/operate/logs/#retention-schedule) section of *Logs*.

## Read More

* [Logs](/developerportal/operate/logs/)
* [Monitoring Your Mendix Apps](/developerportal/operate/monitoring-application-health/)
