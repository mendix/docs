---
title: "Profiling"
url: /refguide/profiling/
description: "Describes how to run a performance profiler session on the local machine from within Studio Pro."
---

## Introduction

{{% alert color="info" %}}
These features are not yet supported on native macOS machines.
{{% /alert %}}

The **Profiling** section of the **Help** menu > **Support Tools** allows you to run a performance profiler session and to capture a memory snapshot:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/profiling/profiling-menu.png" alt="Profiling menu options in Studio Pro" class="no-border" width="500" >}}

### Run a Performance Profiler Session (Start Profiling/Stop Profiling)

To investigate performance issues on your local machine, you can run a performance profiler session from within Studio Pro without installing a separate profiler. The session generates a report written to disk, which you can send to Mendix Support. Mendix developers load this report to investigate the performance issues you experienced. 

When you click **Start profiling**, a dialog box prompts you to choose a location on the local disk to save the performance reports. Choose a local directory and avoid selecting a network drive.

Then, perform the operations that cause slow performance.

When you are done, click **Profiling** > **Stop profiling**. Zip all the files in the directory that opens (the directory you chose when clicking **Start profiling**), and then send the archive to Mendix Support.

{{% alert color="info" %}}
You can start profiling at any time, not just immediately after running Studio Pro. Start profiling when you see performance issues.
{{% /alert %}}

### Capture Memory Snapshot

You can capture a snapshot of memory consumed by Studio Pro. The snapshot is written to disk, which you can send to Mendix Support. Mendix developers load this snapshot to investigate issues related to memory consumption.

When you click **Profiling** > **Capture Memory Snapshot**, a dialog box prompts you to choose a location on the local disk to save the memory snapshot. Avoid selecting a network drive.

When the operation completes, zip the file from the directory that opens (the directory you chose when clicking **Capture Memory Snapshot**), and then send the archive to Mendix Support.

{{% alert color="info" %}}
The **Capture Memory Snapshot** menu is not available when a performance profiler session is in progress. Stop the running session to capture a memory snapshot.
{{% /alert %}}
