---
title: "APM 1 Use Cases"
url: /appstore/partner-solutions/apd/uc-one/
weight: 20
---

## Introduction

The APM tools have been used extensively by CLEVR’s developers and support engineers in developing and supporting ExpertDesk and other Mendix applications. The tools were originally developed to overcome the difficulties of analyzing performance issues in Mendix without the proper information and have grown to an application monitoring and analysis suite.

The different use cases are described here:

## Generic

The trap tool is always on in development, test, acceptance and production and is used to have all logging immediately available when an error occurs.

The statistics tool is always on to collect valuable statistics. Snapshots are stored frequently and also on shutdown of the Mendix application, so during development also interesting comparing analyses can be done. In production you can look at the functionality that takes the most time to optimize this functionality. Also you can look at the trend to see performance issues coming.

The log tool is a tool for cases that need analysis, but have no specific trigger, so when a trap is not fired. Also in production the log tool makes logging available and searchable to support engineers without the need for technical application support to deliver a file or worse turn on and off the logging and then deliver the file.

The measurements tool is used to detect high memory usage or high CPU to find out which functionality is causing the issue.

## In Development

During the development the performance tool is used when a function is seen as slow. Also it can be used to verify the expected flow/path is followed.

Instead of debugging with breakpoint you can just record everything and analyze afterwards. This is especially helpful in complex modules with web service interfaces and scheduled events were you cannot simply follow a flow.

The trap tool is saving time because logging from an error is immediately stored and you can even run the microflow logging through the performance tool. In development the trap tool records a longer period of time, so trap memory can be used to send to the performance tool and see what is happening.

The statistics tool snapshots are stored also on shutdown of the Mendix application, so during development also an interesting comparing analyses can be done.

The query tool can be used to do an explain plan of long running queries.

## In Test and Acceptance

During the test and acceptance phase other users than the developer are testing and using the application. Now it is especially important to collect information for further analysis if they find an issue.

Also statistics on a production-database-dump may give other insights than on a small development sample.

The performance tool can be always turned on with a small threshold to capture the microflows that might be interesting to tune.

Another strategy would be to record all MicroflowEngine with the log tool to be able to see what the users have done afterwards.

## In Production

The trap tool is used to have all needed logging immediately available when something unwanted occurs. Off course the first day the trap log is monitored and exclusions are made for often occurring warnings or known errors.

The statistics tool is running to collect frequent, for example daily or hourly statistics.  If the system is slow the statistics tool can be used to see what is running now.

Also a brief run of the performance tool can be done if some issue cannot be reproduced on other environments or the other environments so a different behavior. This can be done with good protection parameters so the performance tool does not claim too much memory or resources.

The measurements tool can be used to collect application specific metrics and build triggers for when they exceed thresholds. The measurements tool can also be used to detect new deployments and send an email to inform people about this.

## In a Load Test

In a lab a large load is generated and the statistics tool and performance tool with thresholds are used to analyze what is happening. With some filtering the performance tool does not fill up the entire memory and still captures the longest running microflows in full detail. Extra protection is built in to stop recording when the amount of data is exceeding a threshold.

Several tests can be compared to each other by using the marker to mark microflows as belonging to a certain lab setup.
