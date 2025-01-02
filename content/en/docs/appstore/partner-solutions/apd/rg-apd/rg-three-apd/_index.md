---
title: "APD 3 Reference Guide"
url: /appstore/partner-solutions/apd/rg-three-apd/
weight: 1
---

## Introduction

The Application Performance Diagnostics (APD) tool is a solution that helps you to analyze performance issues and runtime behavior.

{{% alert color="info" %}}
To obtain or renew your purchased license, go to [this form](https://addon.mendix.com/index.html).
{{% /alert %}}

{{% alert color="info" %}}
In earlier releases, this tool was called Application Performance Monitor (APM).
{{% /alert %}}

This is the reference guide for CLEVR's APD 3 for Mendix. It has the following chapters:

* [Apps](/appstore/partner-solutions/apd/rg-three-apps/)
* [Environments](/appstore/partner-solutions/apd/rg-three-environments/)
* [Dashboard](/appstore/partner-solutions/apd/rg-three-dashboard/)
* [Logs](/appstore/partner-solutions/apd/rg-three-logs/)
* [Performance Statistics](/appstore/partner-solutions/apd/rg-three-statistics/)
* [Performance Recorder](/appstore/partner-solutions/apd/rg-three-recorder/)
* [Settings](/appstore/partner-solutions/apd/rg-three-settings/)

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/APD_Powered_logo.png" class="no-border" >}}

The sections below provide a short explanation of APD along with its features and possible uses.

## Definition of the APD Tool

APD is based on Wikipedia's definition of [application performance management](https://en.wikipedia.org/wiki/Application_performance_management). The goal of APD is to emphasize this point: "to detect and diagnose complex application performance problems to maintain an expected level of service."

You need the basic infrastructure probes to measure hardware parts like the CPU, memory, and disk as well as components like the database and web server. However, for higher quality support, you should also look at the application and how it is performing, and especially look to link this to the user’s business perspective.

It is common knowledge that software contains bugs, and also that software is tested before being brought into production. For users, an error is a sign that an application is not functioning. If the error appears unexpectedly, the user loses trust in the system. The standard reaction of Support is usually to ask questions (including whether the customer can reproduce the issue), ask that logging be turned on, and ask for a database dump so that they can investigate the issue in a safe environment.

The APD tools provide valuable information for analyzing the behavior and performance of an application in production. This allows for direct analysis without asking the customer to wait, reproduce, or deliver technical information. The same information is available during development as well to prevent issues before they appear in production.

## Statistics for Seeing Performance Issues in Advance

Application performance is difficult to test during the initial development stage. The dataset is too small, and exact usage by users (for example, their search behavior) is unknown. Even after applying all performance best practices while building a Mendix application, issues will still appear in production. Usually they appear over time as the dataset grows, so the question is how can you see them coming.

Mendix APD collects statistical data about microflows, client API requests, and user click paths. These statistics are stored hourly and can be used to see trends before users sound the alarm. It is strongly advised for Support to frequently check the longest and most frequently running microflows to see if they can be improved. These statistics can be drilled down into in order to investigate a performance issue. The statistics show individual actions, loop iterations, and exactly where the obstacles are.

In development, adding a check of APD to the generic definition of done is advised.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-three-apd/statistics_history.png" class="no-border" >}}

## Performance Recorder for Collecting Individual Traces

When Support or DevOps wants to investigate a performance issue, they can use the APD [Performance Recorder](/appstore/partner-solutions/apd/rg-three-recorder/). This shows individual actions, loop iterations, and exactly where the obstacles are.

## Your Flight Data Recorder

The runtime agent's **Trap** feature is listening on all levels of logging, up to the TRACE level. If an error occurs, the logging in memory and the error is stored in the APD manager database, which can provide information regarding what the runtime was processing at the time of the error.

## Logs

The logs are used to collect Mendix Runtime log messages and store them in the APD manager database.

This gives remote access to log information, makes it available to consultants, and allows for easy searching and analyzing.
