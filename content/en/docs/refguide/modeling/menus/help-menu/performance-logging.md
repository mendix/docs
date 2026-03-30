---
title: "Performance Logging"
url: /refguide/performance-logging/
description: "Describes how to enable, view and compare performance metrics to key functionalities in Studio Pro."
---

## Introduction

Studio Pro can log performance measurements to key functionalities (such as opening and closing microflow editors and moving items around in the App Explorer) that can help identify performance degradations.

The performance logging feature can be reached by clicking **Help** > **Support Tools** > **Performance logging**:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/performance-logging/performance-logging-menu.png" class="no-border" >}}

This tool enables you to do the following:

* Enable performance logging
* Start a new session of performance logging
* View performance measurements
* Compare performance measurements

## Enable Performance Logging

Check **Enable performance logging** to turn on performance logging.

* If it is checked, performance logging is enabled and measurements are being logged
* If it is unchecked, performance logging is disabled

## Start a New Session of Performance Logging {#new-session}

When you click **Start new session**, you will see the following dialog:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/performance-logging/naming-new-session.png" class="no-border" width="650" >}}

You can specify a name for the new performance logging session that can be used later when comparing performance measurements:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/performance-logging/compare-measurements.png" class="no-border" width="750" >}}

## View Performance Measurements

When you click **Show measurements**, you will see the following dialog:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/performance-logging/view-measurements.png" class="no-border" width="700" >}}

The **Measurement Source** field allows you to choose the source for the performance measurements you want to view: a previously created logging session or a log file where the measurements were logged.

The dialog displays the data grid with the measurements:

* **ID** – displays a unique ID for the measurement that is being logged
* **Category** – displays the category of the measurement, which are split to categories (such as measurements related to documents and UI)
* **Description** – displays a description for the measurement that is being logged
* **Duration** – displays the execution time (in milliseconds) of the currently logged operation

The **Generate Report** button in the bottom-right corner allows you to view the results in text editor documents (such as Notepad).

## Compare Performance Measurements

When you click **Compare measurements**, you will see the following dialog:

{{< figure src="/attachments/refguide/modeling/menus/help-menu/performance-logging/compare-measurements-dialog.png" class="no-border" >}}

This allows you to compare between two different performance measurements sources (for example, the installed version and log file).

The rows in the grid are colored according to the following indication:

* Gray – there is no change in the execution time
* Green – there was an improvement in the execution time
* Red – there was a degradation in the execution time

The **Generate Report** at the bottom-right corner allows you to view the results in text editor documents. 
