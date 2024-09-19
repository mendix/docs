---
title: "APD Release Notes"
url: /appstore/partner-solutions/apd/release-notes
description: "The release notes for Mendix Application Performance Diagnostics (APD) with details on new features, bug fixes, and known issues."
weight: 40
numberless_headings: true
---

{{% alert color="info" %}}
For newer release notes, see the **Releases** tab of [Mendix Application Performance Diagnostics](https://marketplace.mendix.com/link/component/6127) in the Mendix Marketplace.
{{% /alert %}}

## 3.0.0

**Release date: March 9, 2020**

### APM Renamed to Application Performance Diagnostics (APD)

APM has been renamed to [Application Performance Diagnostics (APD)](/appstore/partner-solutions/apd/rg-three-apd/), since that better covers the functionality and since APD can work side-by-side with other APM solutions.

### SMART Digital Factory APIs

* Because APD is a part of the CLEVR SMART Digital Factory, APD has an API so that the SMART Digital Factory can use APD functions like statistics snapshots and recording.
* For SMART Digital Factory users, APD can now run your unit tests from our CI/CD via the APD runtime agent.

### Scalability

With the growth of our customer base, we felt the need to work on the architecture and scalability of APD, so we made the following improvements:

* The APD browser agent has been redesigned to communicate through the runtime agent instead of directly to the APM manager. Even if customer apps have 10 users on average, this reduces the connections to the APM manager tenfold.
* The [APD Manager](https://apd.mendix.com/) has an improved queuing mechanism to handle higher loads.
* The APD data cleanup has improved performance.
* The APD runtime agent has several small improvements.

### Support

* We keep adding support for the latest Mendix releases.
* We improved the safeguards in the APD agent. These safeguards are there to make sure the APD agent does not use too many resources and does not affect the system too much.
* We improved the safeguard for memory usage used to clear the buffer and stop the agent. This was not wanted on occasional memory spikes, so we enhanced this feature to pause and not stop on a memory spike. APD then resumes collecting statistics after 10 minutes, thus giving the system a chance to recover from whatever was causing the memory use and to continue doing its invaluable work.

## 2.0.22 {#2022}

* We added a check on start-up to detect if the proper agent *.jar* file has been loaded.
* We fixed an issue with [Client API](/apidocs-mxsdk/apidocs/client-api/) requests, as `retrieve_by_microflow` and `retrieve_by_path` were not specifying their target.

## 2.0.21    

* We released the Mendix 7 version of the agent for release [2.0.22](#2022) (which contains the Mendix 8 version).

## 2.0.20

* We released the Mendix 6 version of the agent for release [2.0.22](#2022) (which contains the Mendix 8 version).

## 2.0.19 {#2019}

* We changed the behavior for the advanced setting `memoryagentstoplimit`. Instead of the agent instantly stopping upon reaching the set limit, the agent now stops processing log messages and recording for a set time frame. If the memory usage does not decrease below the set limit when the set time frame expires, the agent shuts down completely; otherwise; the agent will resume.

## 2.0.18

* We released the Mendix 7 version of the agent for release [2.0.19](#2019) (which contains the Mendix 8 version).

## 2.0.17

* We released the Mendix 6 version of the agent for release [2.0.19](#2019) (which contains the Mendix 8 version).

## 2.0.16 {#2016}

* We removed the CORS headers from the `apm` request handler.

## 2.0.15

* We released the Mendix 7 version of the agent for release [2.0.16](#2016) (which contains the Mendix 8 version).

## 2.0.14

* We released the Mendix 6 version of the agent for release [2.0.16](#2016) (which contains the Mendix 8 version).

## 2.0.13 {#2013}

We made the following improvements to the browser agent:

* We merged the statistics and recording collecting in order to reduce overhead and resource usage.
* We improved support for Mendix 7.6 and above.

We made the following improvements to the runtime agent:

* We improved the JSON logging set behind an advanced setting.

## 2.0.12

* We released the Mendix 7 version of the agent for release [2.0.13](#2013) (which contains the Mendix 8 version).

## 2.0.11

* We released the Mendix 6 version of the agent for release [2.0.13](#2013) (which contains the Mendix 8 version).

## 2.0.10 {#2010}

This is the first release for [Mendix 8](/releasenotes/studio-pro/8.0/).

We made the following improvements to the browser agent:

* We now prevent the browser agent from showing an error in the client in case a widget initialization fails.
* We fixed the browser agent usage in combination with a username with Chinese characters.

## 2.0.9

* We released the Mendix 7 version of the agent for release [2.0.10](#2010) (which contains the Mendix 8 version).

## 2.0.8

* We released the Mendix 6 version of the agent for release [2.0.10](#2010) (which contains the Mendix 8 version).

## 2.0.7 {#207}

* We improved the memory so that by default 80% heap memory clears buffers, and 90% heap memory stops the APM agent. This is configurable in the advanced settings.
* We optimized the code.
* We improved performance so that they maximum depth for microflow statistics with a manually created loop is reduced.

## 2.0.6

* We released the Mendix 6 version of the agent for release [2.0.7](#207) (which contains the Mendix 7 version).

## 2.0.5 {#205}

* If logs and performance run as threads, there is a limit on the buffer between the Mendix log thread and the APM threads. If the Mendix Platform delivers too quickly, APM will now drop the messages.
* Advanced settings have been added to allow for the following functions:
    * **Use profiler**
    * **User recorder**
    * **Max trap collection**
    * **Max statistics collection**

    With this, the agent can be tuned, and the settings cannot be overruled from the manager (for example, for protecting a production environment or in the event of conflicts for not using the profiler).
* There is now the **NONE** option for statistics and trap collection, with which you effectively turn off the tools.
* There is now a hard-coded maximum of messages that the APM agent and APM Manager can accept from a Mendix log thread for both the message and stack trace.
* There is now a maximum message length in `MendixMessage` via an advanced setting.
* `excludenodes=<node:level,node:level,...>` can now be used to not subscribe to certain nodes above the specified level. This feature can be used exclude log nodes (for example, as a workaround for a Mendix 6 web service and Mendix 7 bugs).
* There is now a load tool bug fix for recording and processing query IDs.
* The load tool loads XML pages on need, since the [create object](/refguide/create-object/) button action has no `open_form` in the Client API.
* We fixed APM statistics that were counting some microflows multiple times depending on the amount of call sources.
* The performance recording of SQL statements is now functioning again.
* There is now an hourly purge of performance tool memory structures (together with statistic snapshot uploads) to prevent out-of-memory issues if, for example, many microflows end in error.
* Some extra clearing of memory structures has been added for a faster release memory and to give the Java garbage collector an easier job.

## 2.0.4

* We released the Mendix 6 version of the agent for release [2.0.5](#205) (which contains the Mendix 7 version).

## 2.0.3

* We fixed an issue that caused the agent not to detect a microflow had finished. As a result the microflow was always shown as a long-running microflow. This is no longer the case.
* We fixed an issue in which the agent logged a settings change, even though no changes were made.
* Captured actions of the **Retrieve by XPath** type now include the entity name.
* When a timeout occurs between the agent and the manager, the agent now logs it as **INFO**.
* When a connection is lost with the APM Manager, the agent now delays each subsequent call to the manager until a connection has successfully been made. The maximum delay is 5 minutes per interval.
* We added the capturing of SQL statements to the performance recorder.
* We added functionality to put a pause on the agent when the manager is down for maintenance.
* We made various performance optimizations.

## 2.0.2

The Mendix 6 version of the agent in release 2.0.3, which contains the Mendix 7 version.

## 2.0.1

* Added support for file uploads for Load Testing
* Reduced logging from the Agent
* In case of an error while transmitting data to the APM Manager, logging the full JSON messages now default disabled.
* In case the Browser Agent is disabled per configuration on the APM Manager, the agent no longer log an error when a user opens the application.

## 2.0.0

This major release of APM deals with cloud, end-user measurements, and simplicity.

### Cloud Multi-Tenant

APM 2 is a multi-tenant cloud-based app that is integrated with the Mendix Portal for your project and SSO. 

To use APM, you only need to install the **APMAgent2** module.

These are the main advantages of this architecture:

* The agent does not have a UI in your app and does not need permissions and navigation
* The agent does not use your database to store traces
* The agent has even less of an impact on your app than it already had
* New features in the cloud manager app become quickly available and do not need a deployment of your app

### Simplified UI and Functionality

APM 2 has a new UI that is in line with Mendix. The whole APM Manager App has been revised to simplify and ease the use.

* A tour guide has been added to help you use APM to perform specific jobs.
* Many settings that were never changed have got a proper default. 
* Some technical settings have been combined into an end-user understandable setting like memory-usage high, medium or low.
* The former log tool and trap tool are combined into the logs.
* The recorder stores immediately, so recording is just a start/stop function and no longer needs processing.

The statistics can now store action statistics as well. This will give detailed insights in microflows and actions without recording at all. So, when this option is selected, you just have to look at the statistics and start fixing!

Because the agent no longer needs security and navigation, the installation has been simplified as well.

You now have one place—the **APM 2 Manager** app—for managing the performance of all your apps.

### End-User Measurements

We added a browser agent that measures performance from the browser side. This agent collects statistics and can record individual traces. 

Measuring real end-user experiences allows you to grasp the actual end-user experience and not miss out on performance issues caused by a network, a slow browser, or apps that send too much data or are too chatty.

The browser agent works in desktop browsers, mobile device browsers, and Mendix-native PhoneGap apps.

The browser agent statistics now even show click-paths. This is an initial version of a feature that shows huge potential in seeing how your app is really used!

### Upgrade Notes

APM 2 can run side-by-side with APM 1. You can uninstall APM 1 in a later release if you want.

There is no data migration from APM 1 to APM 2.

Compared to APM 1, the following APM 1 features have been removed:

* APM 2 has no measurements tool (but it does measure CPU and memory)
* APM 2 has no JVM browser and does not give you the option to measure all JMX-exposed data (this feature had the most value in on-premises situations and was not used by a lot at customers; in addition, this feature is handled by any generic APM solution)
* APM 2 has no query tool to execute manual queries
* APM 2 has no SQL statements in performance traces and thus no explain-plan function
* APM 2 does not re-route Java console and Java until logging to the Mendix log

Due to these simplifications, a lot of minor features may have been simplified, combined, or totally removed.

## 1.12.1

This release is identical to 1.11.1, but it is for Mendix 7.0.2 and above.

### Other Fixes

* When defining a **Create trap message** action in the trigger configuration, the trap was not created and linked to the triggered event. Both issues are fixed.
* If the log tool is used, there is now protection in place to configure the 1.11**Max messages to store**. By default, this is set to 100,000 records. This protection is in place to protect from overloading the database with records. **Fallback level** protection is now also in place. When the log tool notices issues like too much data is being processed, the **Fallback level** will set the logging to **INFO** for all log levels. In exceptional cases, the application generates too much INFO logging, which consumes heap memory and eventually causes the application to run out of memory. In this release, this behavior still consumes heap memory, but there is a fix in place to prevent the application from running out of heap memory. The following fix in Mendix 7.7.1 is also needed: We improved the memory management of persistable entities that have been committed to the persistent storage.

## 1.12.0

This release is identical to the 1.11.0 release, but it is for Mendix 7.0.2 and above.

### Other Fixes

* For version 7, Mendix changed the client API for `keepalive` not to include parameters. This has been handled now.
* Refreshing data in Mendix 7 where only calculated attributes were changed did not always refresh the screen. By committing the settings records as a workaround, the APM tools now function as expected.

## 1.11.1 {#1.11.1}

This is a release with bug fixes. It is for Mendix 6.2 and above.

### Other Fixes and Improvements

* When defining a **Create trap message** action in the trigger configuration, the trap was not created and linked to the triggered event. Both issues are fixed.
* Creating sample data failed, because the **Frequency** attribute was set to empty and, in Mendix 6.8.1, the validation rules behave differently. **Frequency** always gets a value now.

## 1.11.0

This is a release with customer-requested features and bug fixes. It is for Mendix 6.2 and above.

### Importing and Exporting Settings

There was a customer request to share the settings between apps and environments. This is now possible with the new import/export. From the global settings dialog box, you can export all the settings at once and import them on another environment. 

In addition, upon installation, a file can be imported if a customer wants their own settings on install.

### Recreating Sample Data

If no sample data was selected on install, you might want to do this afterwards. This function renames conflicting items, so if a customized version of sample data is in the system, you can safely add an extra copy.

### Setting Production/Non-Production Globally

Customers wanted one button to configure the entire system to production or non-production settings, so that was implemented.

### Other Fixes and Improvements

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
* The default settings for the trap tool buffer in production is now to stop the tool. So, if a customer has a high volume of errors and does not configure APM to exclude them, the APM tool will stop instead of causing a limited amount of load all the time.
* Statistics and message triggers now stop after firing when they are configured to do so.
* The delete function now starts logging progress when it takes more than 5 seconds.
* To prevent running out of memory, the performance tool now stops recording at 80% memory usage (which can still be saved). If memory usage goes over 95% due to a non-APM functionality, all memory claimed by APM is freed by canceling the recording and discarding the recorded data.
* The JDBC settings for MSSQL were by default not correct after installation. This has been fixed.
* Trap errors often occur together, so now there is a **Previous** and **Next** button inside a trap to save some clicks.
* Java action parameters have been renamed to prevent errors when Mendix generates different names in different versions of the platform or in different deployments. Mendix does so to avoid conflicts in Java due to generated proxies, but the consequence is an error in the model due to APM. We have now prevented this.

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

### Bug Fixes

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

### Trigger Action Notify

Many customers have asked to receive notifications, so a new notify action on triggers has been introduced. This action will call a microflow with three string parameters: **To**, **Subject**, and **Message**. Several replaces can be done to ease the configuration of the strings. A sample microflow has been added that logs on this action.

The idea is to call your own microflow that sends out an email. The APMAgent module will not include an email facility itself, in order to prevent conflicts with existing email, so this is the way to get notifications out.

### Trigger Log Action with Level

The trigger log action now has a level. You can use this for critical messages and thus receive an email when you run in Mendix Cloud.

You could also use debug level to output measurement data so that when a trap occurs, you have measurement info inside the trap.

### Enhanced Trap Tool Protections

The trap tool now has a separate buffer for storing traps in memory that are written to the database and a configuration of the maximum of records in the database. This helps you to store more records in the database and run the trap tool with less impact on your system.

At the same time, we fixed a bug in the trap tool that left empty trap records when deleting the oldest trap messages. Now the oldest trap gets completely deleted if the database limit is reached.

### Other Fixes/Improvements

* The licensing mechanism is improved, so we can issue a one time code immediately. When entering this code in the **License request code** field during the installation of APM, a license key will automatically be generated (24/7 within a minute as long as the
license server is up).
* The measurements tool **Search** tab shows the values in a decimal format with two decimals so that it is more readable.
* We renamed the Java parameter that led to issues in installation of APM in some Mendix releases.
* We fixed some mappings in OData.
* We improved the sample data for measurements, queries, exclusions, and a statistics trigger.
* We removed tester/developer features like APM tool runtime statistics on a developer page (as
developer) and a page with test features from the APM tool.
* A random offset is added in the measurements tool scheduled events to make sure they do not run at the same time if they have the same frequency. This should spread out CPU usage and lead to a better performance.
* The automatic data cleanup now runs at midnight.

## 1.9.0

The theme for this version is further enhancement of UX. 

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.9/Dashboard_1.9.0.png" class="no-border" >}}

The measurements tool has been enhanced to allow for calculated measurements. This allows for 
measuring memory as a percentage and triggering on 70% instead of some large number. The measurements tool
also caches the measurements for enhanced performance and you can use cached values if you want to measure 
differences. A small tester function has been added to test calculations.

The statistics tool now has a snapshots, bundling the statistics that belong together. 
This helps in opening them from a measurement and making the stored statistics more clear.
The statistics tool now also supports triggers on duration of microflows. This was a wish from several customers
to be notified or take action when a microflow takes to long.

The performance tool now bundles recorded sessions. This gives a better overview and allows you to see 
what has been recorded immediately.

The trap tool has a simplified way to show the microflow engine messages in the performance tool. 
Just click the button. You no longer have to select records and afterwards find the data in the 
performance tool. The processed data is opened in a recorded session.

Below are the details.

### Measurements Tool

The measurements tool has been redesigned to include some new features.

* An entity triggered events has been introduced to store a record whenever a trigger fires. This record is linked to the trigger, the measurement, and when appropriate the trap, the statistics snapshot or the heap dump.
* And entity for heapdumps has been added, so they are available from the client side and can be deleted.
* The trigger actions now include the basic log besides the already available trap, statistics snapshot, heap dump and run microflow.
* The GUI has been simplified to have no more dialog on dialog, on the charts view the list of measurements and items has been combined in 1 list. No need for a collapsible panel anymore
* Calculated measurements have been introduced so the memory can be measured as a percentage
* An expression has been introduced on the measurement to calculate the result
* Expressions can use another measurement as a parameter, so memory can be divided by total memory to get the percentage
* Measurements can be run once (after startup), so total memory is only determined once
* A cache with a history queue has been introduced for previous measured values, to prevent performance issues retrieving them from the database
* Trigger expressions can use the cached items. It can be configured with a constant how many previous values need to be stored.
* Also from the database the list of previous values can still be retrieved and used in an expression or trigger expression
* A tester has been introduced to test expressions
* Running counter cannot be edited, only viewed.
* The message in a trigger action to log or trap can now contain parameters with for example a measurement value 

### Statistics Tool

* Added microflow statistics snapshot entity. The stored microflow statistics are now linked to a snapshot. This allows measurements that create a snapshot to open this snapshot. Also manual snapshots can simply be deleted.
* Statistics triggers have been introduced, so a user can define a threshold for a microflow and perform the same actions as in the measurements tool when a microflow takes longer than the threshold value. Customers asked for this feature to monitor SLA’s.

### Performance Tool

* A new recorder tab to give more room to the recording function.
* The option to overrule the protection on processing the recorded session. You get a dialog where you can filter, overrule or cancel.
* Performance Tool got a new entity, called session where recording sessions are stored. The recorded microflows are linked to the session in which they are recorded. After process and when processing a trap in the performance tool the session opens, so you see the results of your action directly.
* The performance tool filtering now filters sub-microflows on the action threshold to prevent empty microflows and filter a low more in the case of loops with a lot of iterations.
* The processing of a trap in the performance tool has been simplified so you no longer have to select rows. The complete trap or in advanced search the complete result set in the grid is sent to the performance tool. This makes this function a two-click function (the second being ‘Are you sure?’).
* Fixed performance tool tree widget showing [+] and [-].
* Removed option to process recorded data before shutdown. Hardly used and could cause delay in shutdown.
* Simplified the explain plan dialog to execute immediately if there are no parameters. If there are parameters
functionality has been added to replace them with constants.

### Query Tool

* The query tool now protects against updates and deletes. Just queries can be fired from JDBC.
* Queries used in measurements are read-only, so the measurement cannot be broken.

### Log Tool

* Log levels dialog got inline more/less buttons and less grid buttons. This solves the issue of inline edits getting lost when closing the dialog without changing row. Also far more intuitive and less clicks to do what you want.

### Trap Tool

* Options dialog got exclusions on separate tab. Less dialogs on top of each other.
* Easier feature to process trap in performance tool. No more selecting rows and opening the processed data directly.

### JVM Browser

* The 'AllThreadInfo' item has been removed. It took Mendix 6.10 and Mendix 7 more than 5 minutes to 
load the JVM Browser.

### Layout

The layout has been improved further.

* Tabs have been introduced instead of buttons in a control bar.
* No more control section on top
* Performance tool got a recorder tab and a session tab
* In some cases a details view has become an in-content view with a back button (trap details, snapshot details, performance tool session details), 
* The left side menu bar now shows the item selected after the selection.
* The left side menu bar now shows if a tool is running
* The back button on left top has been removed
* New start/stop dialog eliminating the need for start/stop buttons everywhere except the performance tool
* Global settings got a tab for data cleanup, so delete all buttons are removed everywhere else
* Links to the documentation have been added as help buttons per tool. On the dashboard the 'i' buttons link
to the documentation.
* Green 'dots' in the menu now indicate if a tool is running. The old badges have been removed in most places.

### Other

* The load test recorder has been placed under a permission, so regular users don't see it. This should remove the
confusion that APM includes a load test tool. There is just the recorder for a session that can be processed and executed
in another solution.

## 1.8.0

The theme for this version is a tool summary on a dashboard and improved styling.

### GUI Makeover to Match Style With CLEVR Applications Test Suite

The new console is more about presenting information instead of more stop/start buttons and navigation.

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.8/Console.png" class="no-border" >}}

The new console has four parts:

* The statistics of the last 10 minutes are shown (this is configurable)
* You can pick your favorite measurements to show on the console
* The Trap tool shows the latest traps
* The Log tool shows the latest messages

### Trap Tool Separates Trap and Messages

The Trap tool separates the trap and the messages, so that it is clearer which messages belong to which trap, and in order to show a list of traps without messages in the GUI.

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.8/Trap_View.png" class="no-border" >}}

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.8/Statistics_Tool.png" class="no-border" >}}

### Gathering Statistics Over More Periods

The statistics tool now gathers statistics over different time periods:

* Since startup
* Periodically (daily by default)
* Snapshot for manual periods
* Last 10 minutes for the console (this is configurable)
* For measurement triggers (between once and twice according to the console frequency, in order to prevent the statistics from just being reset when a trigger fires)
* These statistics are saved in the stored statistics when a trigger fires and is configured to store statistics

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.8/Traps.png" class="no-border" >}}

### Bug Fixes and Minor Changes

* We replaced the CLEVR customized String Formatter widget with the Mendix Marketplace's FormatString widget, in order to reduce the number of custom widgets and to keep APM maintainable.
* We made custom APM versions of the standard Mendix Marketplace widgets in order to prevent conflicts with other versions of the widget for customers.
* We moved the JDBC settings from the query tool to the global settings in order to simplify and separate the configuration from usage.
* The ChartJS has been customized to show the horizontal scale of the type time and to auto-refresh so that it looks better and automatically updates the screen.
* The expiry date is now automatically populated so that the user can see the duration of the license and does not have to manually enter it.
* The trap tool exclusions are now also tested against log messages. This to verify existing exclusions. In addition, when configuring the trap tool, it can help to run the log tool for a day and exclude any know error before starting the trap tool.
* The measurement columns now have an alias that is editable. This is shown in the chart legend.
* You can double-click the measurements to quickly go to the options.
* We fixed the situation in which a new measurement being defined had no real measurements (you could not define triggers, because they depended on the column records that were automatically generated).
* The measurements tool has measurements in a collapsible container, so if you have a lot of measurements and some have multiple columns, you will now see a second grid appear.

### Known Issues

* The JDBC query and explain-plan functionality against MySQL has not been tested.
* The JDBC query and explain-plan functionality for the built-in database work only after starting the database viewer in the Mendix Modeler from the advanced menu of the console.
* The performance tool can run out of memory when recording. The protection options advised for the performance tool still expect 1 GB of available memory, so for small implementations, the protection options should be stricter.
* When the Before Shutdown microflow is not configured, and some tools are running, the shutdown of the Mendix application can hang for about a minute.
* For Mendix 5 and above, the microflow names are taken from the action caption. So if the action caption is changed in the Mendix Modeler, the Call Microflow action in the performance tool does not drill down. In addition, the caption only contains the microflow name, not the module name, so if multiple microflows exist with the same name but they are in different modules, the performance tool cannot pick the right one.
* On load-balanced environments without sticky sessions, the APM tool is randomly connected to instances, and this does not work! For 1.6.1, you need access to specific servers to use the APM tool.
* ChartJS sometimes is not responsive enough, and a refresh of the page might be needed.
* When the runtime stops and the APM console is open, errors appear due to the auto-refresh of grids and ChartJS.

## 1.7.0

The theme for this version is simplifying.

### Installation

The installation has been simplified by removing the layout linking step and by removing the dependency from the project style. Installation procedure:

* Import module
* Add to navigation
* Add to security
* Add to after startup/before shutdown
* Copy language if other than English US is used
* Start App
* Navigate to APM
* Use button to send mail with license request
* Upon receiving the license, copy-paste and save

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.7/Welcome.png" class="no-border" >}}

### Upgrades

Upgrades have been simplified to:

* Import module
* Remove old jar
* Start and all the needed data changes are automatically performed
* For 1.7.0 a new license needs to be requested, because the license is now per App

### GUI

The GUI is simplified by removing the configuration menu items and reducing this to 1 settings item. By removing the dependency of the enclosing App style, by removing counters, by adding tool info buttons.
{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.7/Console.png" class="no-border" >}}

The GUI now uses it's own style and is no longer dependent on the style of the App/Project where it is placed in.

All options dialogs are redesigned to show advised production/non-production settings besides the custom settings.

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.7/Settings.png" class="no-border" >}}

### Simplified Licensing

On Sandboxes and Cloud Foundry the licensing was invalid after a restart due to the fact that hostname/IP changed. Using a hostname no longer holds up in these days of cloud and virtualization, so the licensing is now per project.
A constant 'CompanyName' is introduced to link the license to the user.
On load balanced environment now 1 license will work. All settings are shared in the database.
When using database dumps the license works on other environments as well. No dependency on type Modeller/Runtime anymore.

### Simplified Explain Plan Settings

The JDBC settings have been removed. A JDBC URL and explain plan query are added to the global settings on creating sample data. The URL includes parameters, so hostname and port are not stored. This allows for production database dumps to be used without the risk of connection to the production database from a test environment after the load of a production dump.
When the query is executed the parameters are replaced, so also setting changes are automatically handled.

### Faster Startup

Due to the fact that the hostname is no longer needed the startup is faster.
Also no longer all JMX data is written to the log on startup. A constant is introduced if you want to turn this on again.

### Removed Import Functions

Removed functions to import of log files in log, statistics and performance tool, because this feature is not used.

### Compatibility

This version supports Mendix 6.2.0 and above only. Also only on Java 8.

### Bug fixes and Minor Changes

* Added a warning when you change a log level and the log tool is not running, so the user understands that their change has no immediate effect.
* Fixed catching an error when a trigger in the measurements tool has an error in the expression.
* In Mendix 6.6+ there was an issue with validations in the installation Wizard. This is fixed.
* An issue with a field length in the performance tool tree is fixed
* Updated CustomString widget so trap tool shows the number of exclusions again
* Modeler warnings and deprecations removed/fixed, so developers are not hindered by APM Tool warnings/deprecations when modeling.
* Removed or reduced usage of certain widgets when it was possible to replace the functionality with standard Mendix components.
* When creating a trap tool exclusion the message and stack trace strings are now escaped for special characters in the regular expression language, so you can immediately test and get at least 1 result
* Fixed a bug in the trap tool where an overload of errors could cause the trap tool and the entire application to become unresponsive.
* Added support for explain plan on built-in database
* Removed usage of retrieving data from persistable to non-persistable entities to be ready for Mendix 7
* Moved heapdump feature to separate security group, so on installation you can choose to use this feature or not
* Fixed a bug in the performance tool that sometime a (caught) null pointer would show up in the log

### Known Issues

The JDBC query and explain plan functionality against MySQL has not been tested.

The JDBC query and explain plan functionality for the built-in database work only after starting the database viewer in the modeler from the console advanced menu.

The performance tool can run out of memory when recording. The advised protection options for the performance tool still expect 1 GB of memory available, so for small implementations the protection options should be stricter.

When the before shutdown microflow is not configured and some tools are running the shutdown of the Mendix application can seem to hang for about a minute.

In Mendix 5 and above the microflow names are taken from the action caption. So if the action caption is changed in the modeler the call microflow action in the performance tool does not drill down. Also the caption only contains the microflow name, not the module name, so if multiple microflows exist with the same name, but in different modules the performance tool cannot pick the right one.

On load balanced environments without sticky sessions the APM tool is randomly connected to instances and this does not work! For 1.6.1 you need access to specific servers to use the APM Tool!

## 1.6.0

The theme for this version is Mendix 6 and a visual trend on microflow statistics to show at Mendix World.

### New Feature: Graph on Microflow Statistics to Show Trend

To better visualize and show trends in the history of microflow statistics a graph has been added to show the last 100 statistics. A button called [History] in the statistics tool and called [Show History Graph] on the microflow history (under search menu) shows the graph (to visualize a trend) on microflow statistics.

{{< figure src="/attachments/releasenotes/add-ons/apd/apm-1/apm-1.6/Microflow_Trend.png" class="no-border" >}}

With this feature during a performance analysis you can see if a microflow is taking more time to execute after a certain period of time. This can indicate a database table getting populated.

### New Beta Feature: Trigger on Microflow Statistics

Customers have asked to get a notification when a microflow runs longer than a certain amount of time. A quick (beta) implementation was to gather microflow statistics in the query tool and use those as measurements. Then you can build a trigger on a measurement of a microflow statistic to for example send an email.
This feature will change in the future.

### New feature: Reporting Support with OData

The APM Tool has now an OData source so users can use their own reporting against the data that is collected with the APM Tool. The OData source has separate rights, so it is configurable whether or not this is used.

### New Feature: Load Test Recorder

CLEVR has a load test tool that can be used in projects by our consultants. The tool is likely to be productized in the future and is NOT INCLUDED in the APM Tool. This tool needs a recorder to record sessions. These sessions can then be scripted/parametrized for usage in the load test.
The APM Tool now includes the load test recorder, so APM Tool users are immediately ready for a load test and need not again add a module to their App.
Load test customers will need the APM Tool for measurements and hence also benefit from the addition.
This feature is visible in the additional tools menu.

### New feature: Cleanup of Data After a Certain Period of Time

The measurements tool would cause the database to grow after time. This tool had no protection against running out of space. For this reason, an automated data removal after a specified amount of time is built.
Per module it can be configured to remove data after a certain amount of days. Defaults:

* Log/trap tool default 100 days
* Statistics tool history 365 days
* Performance tool data 30 days
* Measurement tool 7 days, configurable per metric.
    * Metrics that are no longer measured (and thus have no configuration) are deleted after 100 days from the database. This is not configurable.
* Manual query audit, 365 days. Not configurable, because the audit is there not to be tampered with

### Compatibility, Bug Fixes and Minor Changes

This version supports Mendix 6.2.0 and above only. Also only on Java 8.

* Statistics Tool gave a parse error on logout in the logging. Not really visible for users, but would create a trap if trapping on warnings. Now fixed, so logout is also in the statistics.
* During installation there were sometimes errors on startup, because Mendix generates different parameter names in Java in different Mendix versions. Sometimes 'FileName' was allowed, sometimes not and then it becomes 'FileNameParameter1' in java. The parameter names with 'FileName' have changed to 'FileNameParameter' in 3 import Java actions to prevent these installation errors. Also parameter 'MicroflowName' in Java action ExecuteMicroflowAsync is changed into 'MicroflowNameParameter'.
* A grid in the Mendix 6 version of the performance tool details was changed from to be able to sort on loop iterations.
* When choosing sample data during install the explain plan sample data for MySQL is now also added.

### Known Issues

The JDBC query and explain plan functionality against MySQL has not been tested.

The JDBC query and explain plan functionality for the built-in database does not work.

The performance tool can run out of memory when recording. The advised protection options for the performance tool still expect 1 GB of memory available, so for small implementations the protection options should be stricter.

When the before shutdown microflow is not configured and some tools are running the shutdown of the Mendix application can seem to hang for about a minute.

In Mendix 5 and above the microflow names are taken from the action caption. So if the action caption is changed in the modeler the call microflow action in the performance tool does not drill down. Also the caption only contains the microflow name, not the module name, so if multiple microflows exist with the same name, but in different modules the performance tool cannot pick the right one.

The CustomString widget on Mendix 6.2.0 does not render. A newer version from the Mendix Marketplace solves this.

In a sandbox or on Cloud Foundry the instances will have a separate hostname/ip every time. The license will not work after a restart. This is fixed in 1.7.0.
