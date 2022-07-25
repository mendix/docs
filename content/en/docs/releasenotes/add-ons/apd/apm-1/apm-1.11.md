---
title: "1.11"
url: /releasenotes/add-ons/apm-1.11/
weight: 95
---

## <a name="1.11.1"></a>1.11.1

This is a release with bug fixes. It is for Mendix 6.2 and above.

### Other Fixes and Improvements

* When defining a **Create trap message** action in the trigger configuration, the trap was not created and linked to the triggered event. Both issues are fixed.
* Creating sample data failed, because the **Frequency** attribute was set to empty and, in Mendix 6.8.1, the validation rules behave differently. **Frequency** always gets a value now.

## 1.11.0

This is a release with customer-requested features and bug fixes. It is for Mendix 6.2 and above.

### Importing and exporting settings

There was a customer request to share the settings between apps and environments. This is now possible with the new import/export. From the global settings dialog box, you can export all the settings at once and import them on another environment. 

In addition, upon installation, a file can be imported if a customer wants their own settings on install.

### Recreating sample data

If no sample data was selected on install, you might want to do this afterwards. This function renames conflicting items, so if a customized version of sample data is in the system, you can safely add an extra copy.

### Setting production/non-production globally

Customers wanted one button to configure the entire system to production or non-production settings, so that was implemented.

### Other fixes and improvements

* On environments with a smaller amount of memory, the upgrade function that changes all statistics, measurements, and traps ran out of memory. This data is now committed in chunks so that those environments can upgrade.
* The upgrade function to place old statistics in a snapshot failed, and it now works correctly.
* In previous versions, you could start the performance tool again if it was stopped, but in the background the database profiler for the SQL statements was still running. This has been fixed.
* Duration column headers now mention **(ms)** as the unit.
* The license server now handles enterprise licenses without manual intervention.
* Extra help has been added to some trigger pattern fields with a description and a link to Java regular expression sites.
* The fixed duration function has been removed from the trap and the statistics tool. These options were never used and they do not fit into the modules.
* The **Running actions** tab on the statistics tool now has an auto-refresh option that can be turned on or off.
* Some JSON messages appeared in the log because other modules (REST mappings) used the same log node. These have been filtered out.
* The check that requires both `CompanyName` and `AppName` to be configured did not give an error if no `AppName` was given. This has been fixed.
* The sorting of the trap tool messages has been set to show the error on top.
* The default settings for the trap tool buffer in production is now to stop the tool. So, if a customer has a high volumne of errors and does not configure APM to exclude them, the APM tool will stop instead of causing a limited amount of load all the time.
* Statistics and message triggers now stop after firing when they are configured to do so.
* The delete function now starts logging progress when it takes more than 5 seconds.
* To prevent running out of memory, the performance tool now stops recording at 80% memory usage (which can still be saved). If memory usage goes over 95% due to a non-APM functionality, all memory claimed by APM is is freed by canceling the recording and discarding the recorded data.
* The JDBC settings for MSSQL were by default not correct after installation. This has been fixed.
* Trap errors often occur together, so now there is a **Previous** and **Next** button inside a trap to save some clicks.
* Java action parameters have been renamed to prevent errors when Mendix generates different names in different versions of the platform or in different deployments. Mendix does so to avoid conflicts in Java due to generated proxies, but the consequence is an error in the model due to APM. We have now prevented this.

