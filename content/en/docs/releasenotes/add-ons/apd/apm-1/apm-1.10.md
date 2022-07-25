---
title: "1.10"
url: /releasenotes/add-ons/apm-1.10/
weight: 96
---

## 1.10.1

[Download](https://marketplace.mendix.com/link/component/6127/Mendix/Mendix-Application-Performance-Monitor)

### Mendix 7 Compatibility

This is the first version that is also fully available for Mendix 7. Due to some incompatibilities between 6 and 7, there are now two packages available:

* Package 1
  * This is the standard package, which is fully compatible with Mendix 7
  * This is available in the [Mendix Marketplace](https://marketplace.mendix.com/link/component/6127/Mendix/Mendix-Application-Performance-Monitor)

* Package 2
  * This is the same version packaged for Mendix 6
  * This is available on the **All Versions** tab in the Marketplace via the Modeler

With the release of Mendix 7, the Mendix documentation changed and the help links in APM pointed to the wrong location. This has been fixed.

### Bug fixes

* In the creation of a trigger in a measurement with a query as the source, the created trigger was connected to the parameter (or so it seemed in the UI). This has been fixed to work as expected.

* A range validation in the BaseTrigger entity that was on the TriggerContinuationPaused Boolean and should have been on TriggerContinuationDelay has been fixed.

## 1.10.0

This is a release with customer-requested features.

### Viewing and Editing Details of Recorded Sessions and Snapshots

There was a customer request to rename recorded sessions. This is now possible, as is renaming statistics tool snapshots.

The performance and the statistics tools also show details of the recording or snapshot.

You can prevent a snapshot or recorded session from being deleted by the cleanup functionality. This last function is also applied to traps, logs, and triggered events.

### Message Trigger

A customer asked if it was possible to collect information when a certain message was logged, for example, a failed login. The trap tool works for errors (or optionally for warnings), but not for information messages. Now you can define a pattern for an info message that triggers an event with the same options as the triggers in the measurements tool or the statistics tool.

### Trigger action notify

Many customers have asked to receive notifications, so a new notify action on triggers has been introduced. This action will call a microflow with three string parameters: **To**, **Subject**, and **Message**. Several replaces can be done to ease the configuration of the strings. A sample microflow has been added that logs on this action.

The idea is to call your own microflow that sends out an e-mail. The APMAgent module will not include an email facility itself, in order to prevent conflicts with existing e-mail, so this is the way to get notifications out.

### Trigger Log Action with Level

The trigger log action now has a level. You can use this for critical messages and thus receive an email when you run in the Mendix cloud.

You could also use debug level to output measurement data so that when a trap occurs, you have measurement info inside the trap.

### Enhanced Trap Tool Protections

The trap tool now has a separate buffer for storing traps in memory that are written to the database and a configuration of the maximum of records in the database. This helps you to store more records in the database and run the trap tool with less impact on your system.

At the same time, we fixed a bug in the trap tool that left empty trap records when deleting the oldest trap messages. Now the oldest trap gets completely deleted if the database limit is reached.

### Other Fixes/Improvements

*   The licensing mechanism is improved, so we can issue a one time code immediatly. When entering this code in the **License request code** field during the installation of APM, a license key will automatically be generated (24/7 within a minute as long as the
license server is up).
*	The measurements tool **Search** tab shows the values in a decimal format with two decimals so that it is more readable.
*	We renamed the Java parameter that led to issues in installation of APM in some Mendix releases.
*	We fixed some mappings in OData.
*	We improved the sample data for measurements, queries, exclusions, and a statistics trigger.
*	We removed tester/developer features like APM tool runtime statistics on a developer page (as
developer) and a page with test features from the APM tool.
*	A random offset is added in the measurements tool scheduled events to make sure they do not run at the same time if they have the same frequency. This should spread out CPU usage and lead to a better performance.
*	The automatic data cleanup now runs at midnight.
