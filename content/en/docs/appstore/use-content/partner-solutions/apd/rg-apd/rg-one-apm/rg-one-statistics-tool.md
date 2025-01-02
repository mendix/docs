---
title: "Statistics Tool"
url: /appstore/partner-solutions/apd/rg-one-statistics-tool/
---

## Introduction

This chapter gives an overview of the statistics tool, which measures the durations of microflows and browser-client requests and gathers statistics like number of executions as well as the, minimum, maximum and average durations. The statistics tool is used as the first step in gaining insight into what a system is doing when it doesn’t perform optimally. The tool is also used to determine potential performance issues by looking at the trends.

## Statistics

The statistics tool screen is split into several sections:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/Overview.png" class="no-border" >}}

Statistics are stored periodically to be able to determine potential trends. The **Periodic store frequency** can be changed in the [Options](#Options).   

## History Chart

It is possible to select a microflow and press the **History chart** button to see a graph with history statistics:  

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Trend.png" class="no-border" >}}

The statistics can be started or stopped using the start/stop buttons in the **Start/Stop** dialog box. This dialog is accessible through the top-bar start button.

## Manual Statistics

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Manual_statistics.png" class="no-border" >}}  

In the manual statistics section it is possible to create a snapshot of statistics. This snapshot can be used to compare with other snapshots or to gain insight in statistics for a certain duration. By using the **Reset snapshot** button, the statistics will be reset. With the **Store snapshot** button, the statistics will be saved to a stored snapshot in the database.

**Note**: By default, the result is sorted by **Total (ms)**. This will give an overview of the actions and microflows on which the application spent the most time. The average (**Avg**) is **Total (ms)** divided by **Count**. Sorted on **Avg**, the actions and microflows with the longest average duration can be found. Sorted on **Count** the actions and microflows that were run the most can be found. The results can also be sorted on **Last run** to see what microflows have been run recently.

## Running Actions

This section will give a real-time overview of running actions and microflows. This is the best place to start when there are performance complaints. Running actions show a list of microflows that have been started but have not yet ended. The duration is the time between the start and the moment when the refresh button was hit.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Now_Running.png" class="no-border" >}}

**Note**: When the server generates a lot of log messages, the server is running at a high CPU, and all the tools are running, a queue can build up in the Mendix thread that sends the log messages to the subscribers. As a consequence, it can look like running microflows takes 10 seconds while the maximum in the statistics is 1 second. This is caused by the fact that the running time is calculated on the refresh date, and the duration of a microflow is calculated by the message date. When this happens, the debug running counter for the message delay shows a high number (for example, 10000 milliseconds). The statistics tool pauses collecting and handling messages if the processing delay is above the configured **Max Processing Delay (ms)**.

## Stored Snapshot

A stored snapshot is a collection of statistics saved to the database. This section provides an overview of all the stored snapshots.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Snapshots.png" class="no-border" >}}

In stored snapshots, you can find all the statistics bundled per snapshot. These snapshots can have several types: 

* You can manually create snapshots – these will have the type **Manual**
* A snapshot is taken periodically, by default daily – these will have the type **Periodic**
* A trigger can fire the creation of a snapshot – these will have the type **Measurement**
* The source of a trigger can be the measurements tool and also statistics triggers or message triggers

You can prevent a snapshot from being deleted by cleanup when you select to keep it.

## Snapshot Details

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Snapshot_Details.png" class="no-border" >}}

You can rename snapshots and view the details that will include filtering details when applied.

## Statistics Tool options {#Options}

This screenshot shows the options of the statistics tool:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Options.png" class="no-border" >}}

The statistics tool will measure all microflow statistics all the time. The statistics tool can exclude certain microflows while presenting from memory or storing to the database.

You can configure the frequency of the statistics tool snapshots that are stored, for example, daily or hourly. You also configure the top **N** statistics to be stored and an exclude pattern. The APM tools itself are excluded via a constant as configured by an administrator.

The top **N** is both for maximum duration and total duration, so between *N* and *2 times N*, records are presented or stored in the database. When the top **N** value is empty or 0, all microflows are retrieved.

The dashboard options include also a top **N** and an exclude pattern to interactively filter with these options.

### Protections Tab

On the **Protections** tab, you see the following:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Protections.png" class="no-border" >}}

You can run the statistics tool for a fixed amount of time. The statistics tool is intended to always be running. This option is available if you want to measure statistics for short periods (for example, during busy hours) and compare that to statistics during less busy hours.

The statistics tool is also protected with a **Max Processing Delay (ms)**. The tool acts differently when the processing delay is too large – it will pause handling messages until the processing delay is below 50ms. Therefore, choosing a value below 100ms is not allowed. The reason each tool has its own max processing delay is that you might want the log tool to stop first, then the performance tool, and last, the trap or statistics tool.

The data is cleaned up automatically after a certain amount of days.

### Triggers Tab

On the trigger tab you can define triggers that fire on a certain microflow duration.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-statistics-tool/Triggers.png" class="no-border" >}}

See the description of [Triggers](/appstore/partner-solutions/apd/rg-one-triggers/) for how to configure triggers.

### Save & Apply

Changes to the options are applied to the statistics tool session currently running if the button **Save & apply** is used.
