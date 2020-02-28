---
title: "2.0"
parent: "apm-2"
---

## 2.0.22

* Added check on start up to detect if the proper agent jar file has been loaded.
* Fix issue with Client API requests as 'retrieve_by_microflow' and 'retrieve_by_path' not specifying their target.

## 2.0.21

The Mendix 7 version of the agent in release 2.0.22, which contains the Mendix 8 version.

## 2.0.20

The Mendix 6 version of the agent in release 2.0.22, which contains the Mendix 8 version.

## 2.0.19

Changed behavior for advanced setting 'memoryagentstoplimit'; Instead of instantly stopping the agent upon reaching the set limit, the agent stops processing log messages/recording for a set timeframe.
If the memory usage did not decrease below the set limit when set timeframe expires, the agent shutdowns completely. Otherwise the agent will resume.

## 2.0.18

The Mendix 7 version of the agent in release 2.0.19, which contains the Mendix 8 version.

## 2.0.17

The Mendix 6 version of the agent in release 2.0.19, which contains the Mendix 8 version.

## 2.0.16

Removed CORS headers from "apm"-request handler.

## 2.0.15

The Mendix 7 version of the agent in release 2.0.16, which contains the Mendix 8 version.

## 2.0.14

The Mendix 6 version of the agent in release 2.0.16, which contains the Mendix 8 version.

## 2.0.13

Browser agent:
* Merged statistics and recording collecting, reducing the overhead and resource usage.
* Improved support for Mendix 7.6 and newer.

Runtime agent:
* JSON Logging set behind advanced setting

## 2.0.12

The Mendix 7 version of the agent in release 2.0.13, which contains the Mendix 8 version.

## 2.0.11

The Mendix 6 version of the agent in release 2.0.13, which contains the Mendix 8 version.

## 2.0.10

First Mendix 8 release.

Browser agent:
* Prevent Browser Agent from showing an error in the client in the in case the widget initialization failed;
* Fixed Browser Agent usage in combination with a username with Chinese characters;

## 2.0.9

The Mendix 7 version of the agent in release 2.0.10, which contains the Mendix 8 version.

## 2.0.8

The Mendix 6 version of the agent in release 2.0.10, which contains the Mendix 8 version.

## 2.0.7

* Memory improvement (Check default 80% heap memory clear buffers, 90% heap memory stops APM agent. Configurable via advanced settings)
* Code optimization (Cleanup code)
* Performance improvement (Max dept for microflows statistics with manual created loop will be reduced)

## 2.0.6

The Mendix 6 version of the agent in release 2.0.7, which contains the Mendix 7 version.

## 2.0.5

* If logs / performance run as threads, there is a limit on the buffer between the Mendix log thread and the APM threads. If the Mendix platform delivers too quickly, APM will drop the messages.
* Advanced settings have been added to allow certain functions:
* use profiler
* user recorder
* maxtrap collection
* maxstatistics collection
With this, the agent can be tuned. The settings cannot be overruled from the manager. For example, to protect a production environment or in the event of conflicts not to use the profiler
* There is now the NONE option for statistics and trap collection, with which you effectively turn off the tools.
* There is a hard-coded maximum of the messages that the APM Agent / manager accept from the Mendix log thread for both message and stack trace.
* Max message length in MendixMessage via advanced setting
* New APM API for ci/cd. This is still beta and not public available.
* excludenodes=<node:level,node:level,...> to not subscribe to certain nodes.above the specified level. This feature can be used exclude lognodes, for example as a workaround for the webservice in Mendix 6 and Mendix 7 < 7.11 platform bug.
* Load tool bug fix recording and processing queryIds
* Load tool XML page load on need, since button action ‘Create Object’ has no open_form in the client-API
* Fix for APM statistics counting some microflows multiple times depending on the amount of call sources
* Performance recording of SQL statements functioning again (failed in v62 after option to disable profiling)
* Hourly purge of performance tool memory structures (together with statistic snapshot upload) to prevent out of memory issues if for example many microflows end in error
* Some extra clearing of memory structures to faster release memory and give the java garbage collector an easier job

## 2.0.4

The Mendix 6 version of the agent in release 2.0.5, which contains the Mendix 7 version.

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

APM 2 is a multi-tenant cloud-based app that is integrated with the Mendix Developer Portal for your project and SSO. 

To use APM, you only need to install the **APMAgent2** module.

These are the main advantages of this architecture:

* The agent does not have a UI in your app and does not need permissions and navigation
* The agent does not use your database to store traces
* The agent has even less of an impact on your app than it already had
* New features in the cloud manager app become quickly available and do not need a deployment of your app

### Simplified UI and functionality

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

The browser agent statistics now even show click-paths. This is an inital version of a feature that shows huge potential in seeing how your app is really used!

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
