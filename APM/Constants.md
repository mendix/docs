---
title: "Constants"
space: "Application Performance Monitor"
parent: "Installation+steps"
---
This appendix describes the constants used in the APMAgent. You are advised to use the defaults with the exception of the CompanyName constant.
The following constants are used:

*   APMAgent.BatchDeleteChunkSize (default 10000) to determine the batch size when deleting data
*   APMAgent.UseAfterStartup (default True) to disable the after startup without re-deployment in the rare case of an error on startup of the runtime*.
*   APMAgent .MaxRunningMicroflowsInDialog (default 10) to determine how many microflows are loaded in the running microflows dialog of the performance tool.
*   APMAgent. ExcludedMicroflows (default APMAgent.; ) Contains a list of patterns in a semi colon separated list that filters out microflows. Excludes are used in the statistics tool and the performance tool.
*   APMAgent.PerformanceToolWaitTimeForMicroflowToFinish (default 10) seconds to wait for started microflows to finish on stop recording. Only used for GUI button to stop, no when a protection kicks in.
*   APMAgent.CompanyName (default '<company name constant>') is used in the license
*   APMAgent.InstanceIndex (default 0) is used only for on premise load balanced situations to give each instance a unique number
*   APMAgent.PrintAllOnStartup (default false) is used to choose if AfterStartup should write all JMX data to the Mendix log. This can be handy for debugging

*_**Note.** The constant APMAgent.UseAfterStartup_ _that skips the after startup and before shutdown microflows_ _(immediately exists to be precise). This is a safety measure for a rare situation where the Mendix API changes._
_Description of potential use:_

*   _First Mendix is upgraded and the test does not reveal the changed API error,_
*   _On startup the APM Tool module with an old API call is not configured to start_
*   _Then this APM tool module is configured to run after startup and started manually. Now an error should appear, but the error might be ignored._
*   _And finally at some point in time a restart happens and now the error causes the application not to startup._

_As a design principle the after startup code can be switched on/off so the production system can be started and no new deployment is needed to get up and running. Off course a new deployment later is needed to fix the issue. The APM Tools still can be used when started manually with the exception of the APM Tool part that uses the old API call._
