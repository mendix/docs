---
title: "APM 1 Reference Guide"
url: /appstore/partner-solutions/apd/rg-one-apm/
weight: 2
---

## Introduction

The Application Performance Monitor (APM) is a solution that helps to analyze performance issues as well as support users in analyzing runtime behavior.

This is the reference guide for the CLEVR APM for Mendix. It has the following chapters:

* [Dashboard](/appstore/partner-solutions/apd/rg-one-dashboard/)
* [Configuration](/appstore/partner-solutions/apd/rg-one-configuration/)
* [Log Tool](/appstore/partner-solutions/apd/rg-one-log-tool/)
* [Trap Tool](/appstore/partner-solutions/apd/rg-one-trap-tool/)
* [Statistics Tool](/appstore/partner-solutions/apd/rg-one-statistics-tool/)
* [Performance Tool](/appstore/partner-solutions/apd/rg-one-performance-tool/)
* [JVM Browser](/appstore/partner-solutions/apd/rg-one-jvm-browser/)
* [Measurements Tool](/appstore/partner-solutions/apd/rg-one-measurements-tool/)
* [Triggers](/appstore/partner-solutions/apd/rg-one-triggers/)
* [Query Tool](/appstore/partner-solutions/apd/rg-one-query-tool/)
* [Load Test Recorder](/appstore/partner-solutions/apd/rg-one-load-test-recorder/)

The sections below provide an introduction to APM. There is an explanation of what APM is, which tools are in the APM suite, and what they are used for. APM consists of the following tools:

* Statistics Tool
* Performance Tool
* Trap Tool
* Measurements Tool
* JVM Browser
* Query Tool
* Log Tool

## Definition of APM

Wikipedia provides a good definition of [Application Performance Management](https://en.wikipedia.org/wiki/Application_performance_management).

APM is the monitoring and management of performance and availability of software applications.
APM strives to detect and diagnose application performance problems to maintain an expected level of service.
APM is the translation of IT metrics into business meaning (value).

Of course you need the basic infrastructure probes to measure hardware parts like the CPU, memory and disk, as well as components like the database and the web server. However, for higher quality support you should also look at the application and how it is performing, especially linking this to the user’s business perspective.

We all know software contains bugs, and of course we all test before we bring something into production. For users, an error is a sign that the application is not functioning. If the error appears unexpected, the user loses trust in the system. The standard reaction of support was always to ask questions, including whether the customer can reproduce the issue, to turn on logging and to ask for a database dump, so support can investigate the issue in a safe environment.

{{% alert color="info" %}}

The APM tools provide valuable information for analyzing the behavior and performance of an application in production. A testing tool should of course also be used during development and test phases.

{{% /alert %}}

## The Statistics Tool to See Performance Issues Coming

We know that performance in applications is difficult to test in the initial stage. The dataset is small and the exact usage of, for example, search behavior of users is unknown. Therefore, even if all performance best practices are applied in building a Mendix application, some issues still appear in production. Usually they appear over time, so the question is how to see them coming.

The APM Statistics tool collects statistical data about microflows and client API requests. These statistics are stored periodically (usually daily, configurable) and used to see a trend long before the users sound the alarm. Also, as a good habit, support frequently checks the longest and most frequently running microflows to see if they can be improved.

This is the statistics tool (for load balanced environments you see the server where the microflow runs):

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Overview.png" class="no-border" >}}

## The Performance Tool to Record Microflows

When support wants to investigate a performance issue, either proactively through the statistics tool or reactively when a customer reports an issue, they use the APM Performance tool. With it they can see the duration of the steps in the microflow on the action level. They can drill down to see individual SQL statements. They can even ask the database for an explain plan that tells you how the database processes the query, which indexes it uses, and more. This tool quickly helps to pinpoint the issue.

This is the call tree, which provides an overview of what happens, showing the called microflows and one iteration of a loop, filtered by duration:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Performance_Tool_Tree_View.png" class="no-border" >}}

Below is the performance tool output. You can double-click all actions and in the case of a microflow call, you can browse to the next microflow. In the case of loops you will see the individual iterations.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Performance_Tool_Browse_Microflow.png" class="no-border" >}}

This is the SQL statements during an action:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Performance_Tool_Browse_Actions.png" class="no-border" >}}

## The Trap Tool Is Your Flight Data Recorder

The APM Trap tool is always listening on all levels of logging up to the highest TRACE level and remembers the last couple of seconds (configurable!). When an error occurs the last few seconds of logging leading up to the error are saved in the database. The APM Measurements tool can also monitor memory usage or CPU and trap logging when a threshold is reached. In this way, the information is collected the first time something occurs, which speeds up the problem resolution considerably.

## The Measurements Tool for Collecting More Information and Triggering an Alarm When Needed

The APM Measurements tool is measurements to linking business logic and is bridging the gap between the model and the infrastructure metrics, like CPU measurements. The APM Measurements tool gets information from several sources. First, a simple APM JVM browser to present similar information as shown in the standard Java management tool like JConsole, VisualVM and JMC. Second, the APM query tool to perform business and database queries to monitor database specific meta information and/or business values. Third, the internal metrics of Mendix and the APM tool are available as well via the APM JVM Browser or other Java JVM management platforms.

The measurements can be used to trigger events on thresholds. For example, if more than 80% memory is used or if more than 80% of the CPU is used, a trigger fires. At some customers, support has configured a trigger on a model change so they are informed when a new deployment is done.

The trigger can be to trap logging, or to run a microflow, for example, to send an email or to make a heap dump.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Measurements_Tool.png" class="no-border" >}}

## JVM Browser

The JVM browser can be used to see JVM information similar to tools like JConsole, JVisualVM or JMC. This gives the information to more functional people without the need for specialists and technical access to the machines running the Mendix application.

## Query Tool

The query tool lets you perform XPath, OQL and JDBC queries to collect either business statistics (like reports), application statistics (number of scheduled events running at the same time) or database specific statistics like the number of sessions. This module is also used for the functionality of the performance tool.

## Log Tool

The log tool is used to collect Mendix Runtime log messages and store them in the database.
This gives remote access to log information, makes it available to consultants, and allows for easy searching and analyzing.

The log rerouting makes sure that Java messages that are sent to the Java console, to the Java util library or to the log4j library, are rerouted to the Mendix log. For example, javamail sends debug output to the console and with this option you can collect that information and make it visible in the Mendix log as well as in the APM Log Tool and APM Trap Tool. This helped support a lot in solving email issues and issues with web services security and certificates.
