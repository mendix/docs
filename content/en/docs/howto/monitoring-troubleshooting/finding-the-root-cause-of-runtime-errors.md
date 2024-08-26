---
title: "Find the Root Cause of Runtime Errors"
url: /howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/
weight: 8
description: "Describes how to find the root cause of runtime errors via Studio Pro and via the application logs."
---

## Introduction

This how to will show you how to find the information necessary to locate the root cause of a runtime error. The message displayed in the application is often vague and nondescript. Depending on the environment in which the error occurred, there are two methods for finding this information.

This how-to teaches you how to do the following:

* Find the root cause of runtime errors via two methods

## Method #1 – Using Studio Pro

If the application is deployed from Studio Pro, the information is located in the console:

{{< figure src="/attachments/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/18580024.png" class="no-border" >}}

When an error occurs, a line with a red font appears in the console.  Double-clicking on this line brings up the **View Log Line Details** dialog box:

{{< figure src="/attachments/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/18580023.png" class="no-border" >}}

There are three key pieces of information in this window:

1. The microflow and action where the error occurred.
2. The type of error that occurred.
3. The expression in which the error occurred.

With these three pieces of information, you should be able to find the cause of the error. If you cannot determine the cause from this information, you can put a break point in the specified microflow and debug the situation.

## Method #2 – Using the Application Logs

If the application is deployed from the service console or in the cloud, the information is available in the application logs. 

{{% alert color="info" %}}
You need to have the timestamp of when the error occurred. The logs can contain a lot of information, and this timestamp will make searching through them much easier. Once you navigate to the log file, you can search for the error.
{{% /alert %}}

{{< figure src="/attachments/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/18580022.png" class="no-border" >}}

Go to the section of the log that corresponds to the time of the error. There will be a number of lines in that timeframe that have `ERROR –` after the timestamp. These are the lines of the log file that contain the necessary information. There are three key pieces of information here:

1. The microflow and action where the error occurred.
2. The type of error that occurred.
3. The expression in which the error occurred.

With these three pieces of information, you should be able to find the cause of the error. If you cannot determine the cause from this information, you can put in a break point in the specified microflow and debug the situation.

## Read More

* [Clear Warning Messages](/howto/monitoring-troubleshooting/clear-warning-messages/)
* [Test Web Services Using SoapUI](/howto/testing/testing-web-services-using-soapui/)
* [Monitor Mendix Using JMX](/howto/monitoring-troubleshooting/monitoring-mendix-using-jmx/)
* [Debug Java Actions Remotely](/howto/monitoring-troubleshooting/debug-java-actions-remotely/)
* [Log Levels](/howto/monitoring-troubleshooting/log-levels/)
* [Debugging Microflows and Nanoflows](/refguide/debug-microflows-and-nanoflows/)
* [Debugging Microflows Remotely](/refguide/debug-microflows-remotely/)
* [Debug Java Actions](/howto/monitoring-troubleshooting/debug-java-actions/)
* [The Root Cause of Runtime Errors and Resolving the 2 Most Common Issues](https://www.mendix.com/blog/the-root-cause-of-runtime-errors-and-resolving-the-2-most-common-issues/)
