---
title: "Constants"
url: /appstore/partner-solutions/apd/ig-one-constants/
---
This appendix describes the constants used in the APMAgent. You are advised to use the defaults with the exception of the CompanyName constant.

The following constants are used:

* `APMAgent.AppName` is used in the license. Needs to be set on installation.
* `APMAgent.BatchDeleteChunkSize` (default 10000) to determine the batch size when deleting data.
* `APMAgent.CompanyName` is used in the license. Needs to be set on installation.
* `APMAgent.ExcludedMicroflows` (default APMAgent.; ) contains a list of patterns in a semi-colon-separated list that filters out microflows. Excludes are used in the statistics tool and the performance tool.
* `APMAgent.InstanceIndex` (default 0) is used only for on premise load balanced situations to give each instance a unique number.
* `APMAgent.MaxRunningMicroflowsInDialog` (default 10) to determine how many microflows are loaded in the running microflows dialog of the performance tool.
* `APMAgent.MetricHistory` (default 5) to set the number of previous measurements kept in cache in the measurements tool for use in expressions.
* `APMAgent.NotifyMicroflowName` (default APMAgent.SampleNotifyMicroflow_LogMessage) to define a microflow that is run on the trigger notify action.
* `APMAgent.PerformanceToolWaitTimeForMicroflowToFinish` (default 10) seconds to wait for started microflows to finish on stop recording. Only used for GUI button to stop, no when a protection kicks in.
* `APMAgent.CompanyName` (default '<company name constant>') is used in the license.
* `APMAgent.PrintAllOnStartup` (default false) is used to choose if `AfterStartup` should write all JMX data to the Mendix log. This can be handy for debugging.
* `APMAgent.RunAfterStartup` (default True) to disable the after startup without re-deployment in the rare case of an error on startup of the runtime.

**Note:** the constant `APMAgent.RunAfterStartup` skips the after startup and before shutdown microflows (immediately exists, to be precise). This is a safety measure for a rare situation where the Mendix API changes.

Description of potential usage:

1. Mendix is upgraded and the test does not reveal the changed API error.
2. On startup, the APM Tool module with an old API call is not configured to start.
3. This APM tool module is configured to run after startup and started manually. Now an error should appear, but the error might be ignored.
4. At some point in time, a restart happens and the error causes the application not to start up.

As a design principle, the after startup code can be switched on/off so the production system can be started and no new deployment is needed to get up and running. Of course, a new deployment later is needed to fix the issue. The APM tools still can be used when started manually, with the exception of the APM tool part that uses the old API call.
