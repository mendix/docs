---
title: "Profiling"
url: /refguide/profiling/
description: "Describes how to run a performance profiler session on the local machine from within Studio-Pro."
---

## Introduction

{{% alert color="info" %}}
These features are not yet supported on native macOS machines.
{{% /alert %}}

The **Profiling** section of the **Help** menu > **Support Tools** allows you to run a performance profiler session and to capture a memory snapshot:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/profiling/profiling-menu.png" class="no-border" width="500" >}}

### Run a Performance Profiler Session (Start Profiling/Stop Profiling)

To investigate performance issues that are reproduced on your local machine, you can run a performance profiler session from within Studio Pro without installing the actual profiler on your machine. This session generates a report written to disk, which you can then send to the Mendix Support teams. Mendix developers will load this report on their machines to investigate the performance issues you experienced locally. 

When you click **Start profiling**, you are presented with a dialog box that asks you to choose a location on the local disk to save the performance reports to. Choose a local spot on your disk and avoid selecting a network drive.

Then, perform the operations that lead to a degrading performance or slowness. 

When you are done, click **Profiling** > **Stop profiling**. Zip all the files you can find in the directory that are opened (the directory you chose when clicking **Start profiling**), then send the archive to Mendix Support.

{{% alert color="info" %}}
Profiling can be started at any time (when you start to see performance issues) and does not need to start immediately after running Studio Pro.
{{% /alert %}}

### Capture Memory Snapshot

You can capture a snapshot of memory consumed by Studio Pro. The snapshot is written to disk, which you can then send to the Mendix Support teams. Mendix developers will load this snapshot on their machines to investigate the issues related to memory consumption.

When you click **Profiling** > **Capture Memory Snapshot**, you see a dialog box that asks you to choose a location on the local disk to save the memory snapshot to. Avoid selecting a network drive.

When the operation is complete, zip the file from the directory that are opened (the directory you chose when clicking **Capture Memory Snapshot**), then send the archive to Mendix Support.

{{% alert color="info" %}}
The **Capture Memory Snapshot** menu is not available when a performance profiler session is in progress. Stop the running session to capture memory snapshot.
{{% /alert %}}
