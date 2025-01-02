---
title: "APM 2 Reference Guide"
url: /appstore/partner-solutions/apd/rg-two-apm/
weight: 1
aliases:
    - /apm/reference-guide/rg-2/reference-guide-2.html
    - /apm/reference-guide/rg-2/reference-guide-2/
---

## Introduction

The Application Performance Monitor (APM) is a solution that helps you to analyze performance issues and runtime behavior.

This is the reference guide for CLEVR APM 2 for Mendix. It has the following chapters:

* [Apps](/appstore/partner-solutions/apd/rg-two-apps/)
* [Environments](/appstore/partner-solutions/apd/rg-two-environments/)
* [Dashboard](/appstore/partner-solutions/apd/rg-two-dashboard/)
* [Logs](/appstore/partner-solutions/apd/rg-two-logs/)
* [Performance Statistics](/appstore/partner-solutions/apd/rg-two-statistics/)
* [Performance Recorder](/appstore/partner-solutions/apd/rg-two-recorder/)
* [Settings](/appstore/partner-solutions/apd/rg-two-settings/)

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/APM_Powered_logo.png" class="no-border" >}}

The sections below provide a short explanation of APM along with its features and possible uses.

## Definition of APM

CLEVR APM is based on Wikipedia's definition of [Application Performance Management](https://en.wikipedia.org/wiki/Application_performance_management), with emphasis on these points:

* APM is the "monitoring and management of performance and availability of software applications"
* APM strives "to detect and diagnose complex application performance problems to maintain an expected level of service"
* APM is "the translation of IT metrics into business meaning (as in, value)"

Of course, you need the basic infrastructure probes to measure hardware parts like the CPU, memory, and disk as well as components like the database and the web server. However, for higher quality support, you should also look at the application and how it is performing, especially linking this to the user’s business perspective.

We all know that software contains bugs, and of course we all test before we bring something into production. For users, an error is a sign that the application is not functioning. If the error appears unexpectedly, the user loses trust in the system. The standard reaction of Support is usually to ask questions (including whether the customer can reproduce the issue), to ask that logging be turned on, and to ask for a database dump so that they can investigate the issue in a safe environment.

The APM tools provide valuable information for analyzing the behavior and performance of an application in production. This allows for direct analysis without asking the customer to wait, reproduce, or deliver technical information. The same information is available during development as well to prevent issues before they appear in production.

## Performance Statistics to See Performance Issues in Advance

Performance in applications is difficult to test during the initial/developing stage. The dataset is too small and the exact usage by users (for example, their search behavior) is unknown. Even after applying all performance best practices while building a Mendix application, issues will still appear in production. Usually they appear over time as the dataset grows, so the question is how can you see them coming.

Mendix APM collects statistical data about microflows, client API requests, and user click paths. These statistics are stored hourly and can be used to see trends before users sound the alarm. It is strongly advised for support to frequently check the longest and most frequently running microflows to see if they can be improved. These statistics can be drilled down into to investigate a performance issue. They show individual actions, loop iterations, and exactly where the obstacles are.

In development, it is advised to add checking in APM to the generic definition of done.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-two-apm/statistics_history.png" class="no-border" >}}

## The Performance Recorder to Collect Individual Traces

When Support or DevOps wants to investigate a performance issue, they can use the APM Performance Recorder. It shows individual actions, loop iterations, and exactly where the obstacles are.

## Your Flight Data Recorder

The runtime agent's **Trap** feature is listening on all levels of logging, up to the TRACE level. If an error occurs, the logging in memory and the error is stored in the APM manager database, which can provide information regarding what the runtime was processing at the time of the error.

## Logs

The logs are used to collect Mendix Runtime log messages and store them in the APM manager database.

This gives remote access to log information, makes it available to consultants, and allows for easy searching and analyzing.
