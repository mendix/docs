---
title: "Generic"
parent: "use-cases-1"
---
The trap tool is always on in development, test, acceptance and production and is used to have all logging immediately available when an error occurs.

The statistics tool is always on to collect valuable statistics. Snapshots are stored frequently and also on shutdown of the Mendix application, so during development also interesting comparing analyses can be done. In production you can look at the functionality that takes the most time to optimize this functionality. Also you can look at the trend to see performance issues coming.

The log tool is a tool for cases that need analysis, but have no specific trigger, so when a trap is not fired. Also in production the log tool makes logging available and searchable to support engineers without the need for technical application support to deliver a file or worse turn on and off the logging and then deliver the file.

The measurements tool is used to detect high memory usage or high CPU to find out which functionality is causing the issue.
