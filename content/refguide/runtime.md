---
title: "Mendix Runtime"
tags: ["studio pro", "runtime"]
---

## 1 Introduction

The Mendix Runtime executes the application model that is created in Studio Pro. It serves pages to the Mendix Client, executes microflows, calls web services, generates documents, communicates with the database, and much more.

## 2 Licensing

You need a license to run an application in production mode. Without a license, the Mendix Runtime stops operating after a couple of hours. A license can be obtained through your account manager at Mendix. Afterwards, you can activate your license by following the instructions in [How to Activate Your Mendix License on Microsoft Windows](/developerportal/deploy/activate-a-mendix-license-on-microsoft-windows).

## 3 APIs

You can extend the functionality of the Runtime by writing Java actions. For more information,  see the [Runtime API](/apidocs-mxsdk/apidocs/index#runtime) section of *API Documentation*.

{{% alert type="info" %}}
Links to available API documentation such as WSDLs for published web services are available on the URL path `/api-doc` (for example: `http://localhost:8080/api-doc/`).
{{% /alert %}}

## 4 Main Documents in This Category

* [Clustered Mendix Runtime](clustered-mendix-runtime) – describes the behavior and impact of running Mendix Runtime as a cluster
* [Runtime Customization](custom-settings) – presents advanced options for customizing Runtime server settings
* [Data Storage](data-storage) – presents information on data storage configuration options, such as the following:
	* [Uniqueness Constraint Migration](uniqueness-constraint-migration)
	* [MySQL/MariaDB](mysql)
	* [Oracle](oracle)
	* [SAP HANA](saphana)
* [Date & Time Handling](datetime-handling-faq) – presents details on how to configure Mendix Server operations for the user's date and time
* [Logging](logging) – discusses the various log levels for Runtime
* [Monitoring Mendix Runtime](monitoring-mendix-runtime) – describes the Mendix Runtime monitoring actions that are supported (such as [state statistics](monitoring-mendix-runtime#state) and [thread stack traces](monitoring-mendix-runtime#thread)).
* [Objects & Caching](objects-and-caching) – presents details on what happens when objects are loaded from the database, cached, retrieved, changed, and committed
* [Mendix Runtime & Java](runtime-java) – explains some of the basic concepts of Java in Mendix
