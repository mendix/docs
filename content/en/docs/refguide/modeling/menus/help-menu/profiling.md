---
title: "Profiling"
url: /refguide/profiling/

description: "Describes how to run a performance profiler session on the local machine from within Studio-Pro."
tags: ["monitoring", "troubleshooting", "performance", "profiling"]
---

## 1 Introduction

To investigate performance issues that are reproduced on your local machine, it’s possible to run a performance profiler session from within Studio-Pro, without the need to install the actual profiler on your machine. A report of the session is written to disk, and you can ship this report to the Mendix Support teams, after which our developers can load it on their machines & investigate the performance issues you experience locally.

This feature can be reached from the 'Help' menu -> 'Support Tools' -> 'Profiling':

{{< figure src="/attachments/howto/monitoring-troubleshooting/profiling/profiling-menu.png" class="no-border" >}}

This how-to teaches you how to start and stop a performance profiler session.

## 2 Run (start and stop) a performance profiler session

Upon clicking on the 'Start profiling' menu item, you will be presented with a dialog that asks you to choose a location on the local disk to save the performance reports to. Please choose a local location on your disk and avoid selecting a network drive here.

Then, perform the operations that lead to a degrading performance or slowness. 

When you are done, click on the 'Profiling → Stop profiling' menu item: Please zip up all the files you can find in the directory that is opened (the directory you chose when you've clicked on the 'Profiling → Start profiling' menu item).

Then, send the archive to Mendix Support.

## 3 Important notes

* It is not necessary to start profiling immediately after running Studio Pro. It can be started when you start seeing the performance degradation (once you begin noticing the performance issues). The flow might be the following: you start profiling before an action you consider slow, and then stop after it.

* This feature is not yet supported on native MacOS machines.
