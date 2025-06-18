---
title: "Configuration"
url: /appstore/partner-solutions/apd/rg-one-configuration/
---

## Introduction

This chapter describes the global configuration and the **Start/Stop** dialog. Both can be selected from the header. The header also has a button that opens the documentation and a button that returns you to the home page of the app to which the APM tool has been added.

## After Startup Configuration

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/Configuration_After_Startup.png" class="no-border" >}}

This tab lets you determine which tools should run **After startup**. Please note that the Mendix Modeler contains a safety constant that overrules these after startup settings and enables the admin to take control of these settings.

As a protection, you can set a **Maximum log level** after startup if the log tool is run after startup. This can prevent the log tool from running on an unexpectedly high level after startup.

In some cases, tools are run for a fixed period of time. However, running after startup usually means you want to run a specific tool all the time. With the  **Clear fixed period of time** after startup option, you can make sure the tools will keep on running after startup.

## License {#license}

APM requires an application license that can be requested via email using the button in the configuration dialog. If the email client is not configured, you can use the **Manual license request** button and copy-paste the text in an email to [apmtool@clevr.com](mailto:apmtool@clevr.com).

A license is required per app. Every license has an end date.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/Configuration_License.png" class="no-border" >}}

The license code goes in the **License key** field. The **Expiry date** field is automatically filled. When a license request code is delivered in the APM order, this one-time **License request code** can be filled in to automatically obtain a license when mailing the license request.

## JDBC

The JDBC settings are for executing queries in the query tool and using the explain plan query in the performance tool. Usually these settings are correctly determined during installation and can stay unchanged.

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/Configuration_JDBC.png" class="no-border" >}}                       

A **JDBC URL** is automatically set during installation. For special cases, this URL can be changed. The URL can contain variables that are replaced on executing a JDBC statement. You can use `$HostName`, `$PortNumber`, `$DatabaseName`, `$UserName`, and `$Password`. They will be replaced with the current one on execution. This allows for production database dumps to be used without the risk of connection to the production database from a test environment after the load of a production dump.

The **Explain plan query** is also automatically set during installation. This query is used with the explain plan option in the performance tool.

The remaining four options are used in the query tool to determine the output and set a timeout.

## Clean Data

To quickly remove all the data that is collected by and stored in the APM tool, you can use the buttons on the **Clean data** tab:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/Configuration_CleanData.png" class="no-border" >}}                       

## More {#more}

Some other features and settings are collected on the **More** tab:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/Configuration_More.png" class="no-border" >}}                       

### Dashboard

A default measurement graph can be selected for the dashboard.

### Triggered Events

Automatic cleanup for the triggered event data in the measurements tool is configured here.

Also, the default **Triggers notify to** can be configured here.

### Settings

You can do the following:

* Import/export settings
* Globally set all settings to production, non-production, or custom
* Recreate sample data

## Start/Stop

A dialog has been added to manually start/stop the tools:

{{< figure src="/attachments/appstore/partner-solutions/apd/rg-apd/rg-one-apm/rg-one-configuration/StartStop.png" class="no-border" >}}                       

The reroute buttons add log messages from other sources to the Mendix logging so that all log information is combined and available in the log and trap tool. For example: `javax.mail` sends debug output to the `console(system.out)`. With the **Java console** option enabled, the debug output is caught and provided to the Mendix logging.
