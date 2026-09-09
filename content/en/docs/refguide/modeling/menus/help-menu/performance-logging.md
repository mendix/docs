---
title: "Performance Logging"
url: /refguide/performance-logging/
description: "Describes how to enable, view, and compare performance metrics for key functionalities in Studio Pro."
---

## Introduction

Studio Pro can log performance measurements for key functionalities (such as opening and closing microflow editors and moving items in the App Explorer). These measurements help identify performance degradations.

To access the performance logging feature, click **Help** > **Support Tools** > **Performance logging**:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/performance-logging/performance-logging-menu.png" alt="" class="no-border" >}}

This tool enables you to do the following:

* Enable performance logging
* Start a new session of performance logging
* View performance measurements
* Compare performance measurements

## Enable Performance Logging

Select **Enable performance logging** to turn on performance logging.

* If selected, performance logging is enabled and measurements are logged
* If cleared, performance logging is disabled

## Start a New Session of Performance Logging {#new-session}

When you click **Start new session**, you will see the following dialog:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/performance-logging/naming-new-session.png" alt="" class="no-border" width="650" >}}

You can specify a name for the new performance logging session that can be used later when comparing performance measurements:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/performance-logging/compare-measurements.png" alt="" class="no-border" width="750" >}}

## View Performance Measurements

When you click **Show measurements**, you will see the following dialog:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/performance-logging/view-measurements.png" alt="" class="no-border" width="700" >}}

The **Measurement Source** field lets you choose the source for the performance measurements you want to view: a previously created logging session or a log file where the measurements were logged.

The dialog displays a data grid with the following measurements:

* **ID** – a unique ID for the measurement that is being logged
* **Category** – the category of the measurement (such as measurements related to documents and UI)
* **Description** – a description of the measurement that is being logged
* **Duration** – the execution time (in milliseconds) of the currently logged operation

The **Generate Report** button in the lower-right corner lets you view the results in text editor documents (such as Notepad).

## Compare Performance Measurements

When you click **Compare measurements**, you will see the following dialog:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/performance-logging/compare-measurements-dialog.png" alt="" class="no-border" >}}

This lets you compare two different performance measurement sources (for example, the installed version and log file).

The rows in the grid are colored according to the following indicators:

* Gray – no change in execution time
* Green – improvement in execution time
* Red – degradation in execution time

The **Generate Report** button in the lower-right corner lets you view the results in text editor documents. 
