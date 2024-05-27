---
title: "Performance Logging"
url: /howto/monitoring-troubleshooting/performance-logging/

description: "Describes how to enable, view and compare performance metrics to key functionalities in studio-pro."
tags: ["monitoring", "troubleshooting", "performance", "performance logging"]
---

## 1 Introduction

Studio-pro can log performance measurements (when this feature is enabled) to key functionalities (such as: opening/closing microflow editors & moving items around in the app explorer), that can help in identifying performance degradations.

This how-to explains how to enable, log, view and compare performance metrics to key functionalities in studio-pro. This feature can be reached from the 'Help' menu -> 'Support Tools' -> 'Performance logging':

{{< figure src="/attachments/howto/monitoring-troubleshooting/performance-logging/performance-logging-menu.png" class="no-border" >}}

This how-to teaches you how to do the following:

* Enable performance logging
* Start a new session of performance logging
* View performance measurements
* Compare performance measurements

## 2 Enable performance logging

The first menu item ('Enable performance logging') is a checkable one: It can be checked or unchecked.

If it is checked, it means that performance logging is enabled and measurements are being logged:

{{< figure src="/attachments/howto/monitoring-troubleshooting/performance-logging/logging-enabled.png" class="no-border" >}}

If it is unchecked, it means that performance logging is disabled:

{{< figure src="/attachments/howto/monitoring-troubleshooting/performance-logging/logging-disabled.png" class="no-border" >}}

## 3 Start a new session of performance logging

Upon clicking on the 'Start New Session' menu item, we would get the following dialog:

{{< figure src="/attachments/howto/monitoring-troubleshooting/performance-logging/naming-new-session.png" class="no-border" >}}

Within this dialog, we would get the chance to specify a name for a new performance logging session, that could be used later when comparing performance measurements in the 'Compare Performance Measurements' dialog (see more details in the 'Compare performance measurements' session below):

{{< figure src="/attachments/howto/monitoring-troubleshooting/performance-logging/compare-measurements.png" class="no-border" >}}

## 4 View performance measurements

Upon clicking on the 'Show measurements' menu item, we would get the following dialog:

{{< figure src="/attachments/howto/monitoring-troubleshooting/performance-logging/view-measurements.png" class="no-border" >}}

The top section of the dialog, named 'Measurement Source' allows us to choose the source for the performance measurements we would like to view: It can be either a logging session we've created earlier (see 'Start new session of performance logging' section above) or a log file where the measurements were logged.

The main section in this dialog displays the data grid with the measurements:

* The 'Category' column: The measurements are logically splitted to categories (i.e. measurements related to 'Documents', 'UI' & etc.). This column displays the category of the measurement.
* The 'ID' column displays a unique ID for the measurement that is being logged.
* The 'Description' column displays a meaningful description for the measurement that is being logged.
* The 'Duration' column displays the execution time (in milliseconds) of the currently logged operation (i.e. how long did it take to create a microflow editor).

Lastly, the 'Generate Report' at the bottom allows to view the results in text editor documents (i.e. Notepad).

## 5 Compare performance measurements

Upon clicking on the 'Compare measurements' menu item, we would get the following dialog:

{{< figure src="/attachments/howto/monitoring-troubleshooting/performance-logging/compare-measurements-dialog.png" class="no-border" >}}

This dialog allows us to compare between two different performance measurements sources (i.e. installed version, log file).

The rows in the grid are coloured according to the following indication:
* Gray -> no change in the execution time.
* Green -> there was an improvement in the execution time.
* Red -> there was a degradation in the execution time.

Similarly to the 'View performance measurements', the 'Generate Report' at the bottom allows to view the results in text editor documents 
