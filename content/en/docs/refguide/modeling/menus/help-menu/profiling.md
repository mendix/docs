---
title: "Profiling"
url: /refguide/profiling/
description: "Describes how to run a performance profiler session on the local machine from within Studio-Pro."
---

## Introduction

{{% alert color="info" %}}
This feature is not yet supported on native MacOS machines.
{{% /alert %}}

To investigate performance issues that are reproduced on your local machine, you can run a performance profiler session from within Studio Pro without installing the actual profiler on your machine. This session generates a report written to disk, which you can then send to the Mendix Support teams. Mendix developers will load this report on their machines to investigate the performance issues you experienced locally. 

The profiling feature can be reached by clicking **Help** > **Support Tools** > **Profiling**:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/profiling/profiling-menu.png" class="no-border" width="500" >}}

## Run a Performance Profiler Session

When you click **Start profiling**, you are presented with a dialog box that asks you to choose a location on the local disk to save the performance reports to. Choose a local spot on your disk and avoid selecting a network drive.

Then, perform the operations that lead to a degrading performance or slowness. 

When you are done, click **Profiling** > **Stop profiling**. Zip all the files you can find in the directory that are opened (the directory you chose when clicking **Start profiling**), then send the archive to Mendix Support.

{{% alert color="info" %}}
Profiling can be started at any time (when you start to see performance issues) and does not need to start immediately after running Studio Pro.
{{% /alert %}}
