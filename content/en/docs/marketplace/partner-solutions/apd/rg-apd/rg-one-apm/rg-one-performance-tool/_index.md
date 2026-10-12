---
title: "Performance Tool"
url: /appstore/partner-solutions/apd/rg-one-performance-tool/
---

## Introduction

Use the Performance Tool to measure individual microflows and break them up into actions, loop iterations and sub-microflows. Optionally it is possible to run the Mendix profiler and link SQL statements to actions.

The performance tool consists of:

* [Recorder](#recorder)
* [Filter](#filter)
* [Options](#options)
* [Show recorded](#show-recorded)
* [Advanced usage](#advanced)

## Recorder {#recorder}

The performance tool is a recorder that when started records all action and SQL statements and on stop gives you the option to process and store the recording. During the recording and even when recording is stopped you can filter the recorded data. This filtering removes the recorded items from memory, so there is no undo here.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Recorder.png" class="no-border" >}}

Enter a **Session name** and start recording.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Recorder_Started.png" class="no-border" >}}

You can use **Set marker** to label or mark recorder items, so when recording multiple functions at once, you can recognize the recorded items in the results.

The **Show recorded** button is used to see what has been recorded to assist in filtering. This button is also available under the {{% icon name="search" %}} icon. The show recorded function is described below.

The **Filter** button opens the filter dialog and is described below.

The recording will automatically stop if the maximum amount of items in memory is reached.

On **Stop** you get the option to process the recorded items. You can also filter some more.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Recorder_Stopped.png" class="no-border" >}}

If on processing the actual data is more than allowed to store a special filter dialog appears. In this dialog you can filter further. If you use the process button in the filter dialog you overule the checked and process all the data that is in memory.

During processing of recorded data SQL statements are linked to actions or if that fails to the complete microflow. Not every SQL statement can be traced back to a microflow and/or action. Heuristics is applied to improve on this.

## Filter {#filter}

The following screenshot shows the filter options of the Performance Tool when the performance tool is running:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Filter_Running.png" class="no-border" >}}

The thresholds are used to filter recorded microflows, actions or SQL statements and not store them in/remove them from memory if they have an execution duration less than the threshold.

You can see what has been recorded in memory with the **Show recorded** button ({{% icon name="search" %}}).

The option **Include sub-microflows** can be used to keep sub-microflows called from a long running microflow in memory.

When **Record SQL statements** is enabled SQL statements are recorded by the Mendix profiler and the runtime requests the profiler outputs are filtered with the microflow threshold. The SQL statements are filtered by the SQL statement threshold.

Changes to the options are applied to the Performance Tool if the button **Save, apply filter & close**
is used.

* If record SQL statements is unchecked while running, recording of SQL statements is cancelled.
* If the record SQL statements is checked while running, recording of SQL statements is started.
* If the thresholds are increased, the already recorded microflows and/or SQL statements are filtered to match the new threshold.

## Options {#options}

The following screenshot shows the options of the Performance Tool:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Options.png" class="no-border" >}}

The **Max actions to record**, **Max SQL statements to record** and **Run fixed period of time (seconds)**
 offer some protection in production environments to prevent that the Performance Tool runs and fills up memory. If any of the maximum thresholds is reached the Performance Tool is stopped. When stopped the Performance Tool stopped recording and you can still filter data and choose to cancel.

The **Max actions to store** and **Max SQL statements to store** are introduced to prevent large recordings taking a very long time being processed and stored in the database. Using these settings allows for filtering or increasing the amount of data being recorded and processed.

You can define a **Max Processing Delay (ms)**. When the processing delay is higher than this value the Performance Tool stops recording. You can still filter data and choose to cancel or stop.

Changes to the options are applied to the Performance Tool if the button **Save** (when not running) or **Save & apply** (when running) is used.

* If record SQL statements is unchecked while running, recording of SQL statements is cancelled.
* If the record SQL statements is checked while running, recording of SQL statements is started.
* If the thresholds are increased, the already recorded microflows and/or SQL statements are filtered to match the new threshold

## Show Recorded {#show-recorded}

You can look at what is being recorded in the **Show recorded** dialog:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-performance-tool/Recorded_Microflows.png" class="no-border" >}}

Here the running and finished microflow grids are loaded per 10 records. Using the **Refresh & next chunk**
 button refreshes existing records that are not finished. An additional 10 records are loaded. If microflows have finished in the meantime those records move from running to finished. If filtering is applied finished running microflows can disappear. Running microflows are sorted by start date, oldest first. Finished microflows are sorted by duration, longest first.

You can store an individual microflow (including sub microflows if recorded as such). This can save time if you know what you are looking for.

You can [View] and drill down into microflows. However, you cannot see SQL statements or event microflows as main microflows inside the interval of an action here. This is only visible after processing and storing the recorded data in the database.

## Advanced Usage {#advanced}

To insert context information in the performance tool recording you can use a special action. This is described in the following article: [Inserting context information](/appstore/partner-solutions/apd/rg-one-inserting-context-information/)
