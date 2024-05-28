---
title: "Profiling"
url: /refguide/profiling/

description: "Describes how to run a performance profiler session on the local machine from within Studio-Pro."
tags: ["monitoring", "troubleshooting", "performance", "profiling"]
---

## 1 Introduction

To investigate performance issues that are reproduced on your local machine, you can run a performance profiler session from within Studio Pro without installing the actual profiler on your machine. This session generates a report written to disk, which you can then send to the Mendix Support teams. Mendix developers will load this report on their machines to investigate the performance issues you experienced locally. 

This feature can be reached by clicking **Help** > **Support Tools** > **Profiling**:

{{< figure src="/attachments/howto/monitoring-troubleshooting/profiling/profiling-menu.png" class="no-border" >}}

## 2 Run (start and stop) a performance profiler session

Upon clicking on the 'Start profiling' menu item, you will be presented with a dialog that asks you to choose a location on the local disk to save the performance reports to. Please choose a local location on your disk and avoid selecting a network drive here.

Then, perform the operations that lead to a degrading performance or slowness. 

When you are done, click on the 'Profiling → Stop profiling' menu item: Please zip up all the files you can find in the directory that is opened (the directory you chose when you've clicked on the 'Profiling → Start profiling' menu item).

Then, send the archive to Mendix Support.

## 3 Important notes

* It is not necessary to start profiling immediately after running Studio Pro. It can be started when you start seeing the performance degradation (once you begin noticing the performance issues). The flow might be the following: you start profiling before an action you consider slow, and then stop after it.

* This feature is not yet supported on native MacOS machines.
