---
title: "Mendix Cloud Release Notes"
linktitle: "Mendix Cloud"
url: /releasenotes/developer-portal/mendix-cloud/
weight: 10
description: "Release notes for deployment to Mendix Cloud"
---

These release notes cover changes to deployment to [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).

Mendix Cloud deployments are also dependent on the latest version of the [Mendix Cloud Foundry Buildpack](https://github.com/mendix/cf-mendix-buildpack). The [Mendix Cloud Foundry Buildpack release notes](https://github.com/mendix/cf-mendix-buildpack/releases) are published separately, as other deployment targets are also dependent on the buildpack.

There are separate release notes for other deployment targets; for more information, see the [Deployment](/releasenotes/developer-portal/deployment/) release notes.

For information on the current status of deployment to Mendix Cloud and any planned releases, see [Mendix Status](https://status.mendix.com/).

## 2024

### September 5, 2024

#### New Features

* Deep links have been added to the [Software Composition](/developerportal/deploy/software-composition/) page to enable unique identification and easy shareability.

### September 3, 2024

#### Improvements

* Recently, performance issues were identified in the Software Bill of Materials (SBOM) generation process, which occurs during deployment package creation. Mendix has resolved these issues, ensuring that SBOM generation and the associated Software Composition capabilities are now fully compatible with the following versions of Studio Pro: 9.24.26 and above, 10.6.12 and above, 10.12.3 and above, and 10.14.0 and above.
  
    Previously supported Studio Pro versions (9.24.22 to 9.24.25, 10.6.9 to 10.6.11, 10.10.0 to 10.12.2, and 10.13) will no longer result in SBOM generation and visibility in [Software Composition](/developerportal/deploy/software-composition/). To continue using Software Composition, upgrade to a compatible Studio Pro version. Any historical data within Software Composition remains accessible regardless of the upgrade.

* Deployment packages generated via Mendix Pipelines now generate a Software Bill of Material (SBOM) under the hood; this is visible in Software Composition for Studio Pro LTS and MTS versions 9.24.26 and above, 10.6.12 and above, and 10.12.3 and above.

### August 22, 2024

#### Fixes

* We fixed a bug that had been causing an incorrect pipeline run status to display for the first few seconds on manually triggered pipelines.

#### Improvements

* In the **Pipelines** page's **Runs** tab, we changed a column name from **Last Run** to **Run** because this more accurately reflects what the column shows: it indicates when a pipeline run occurred.

### August 15, 2024

#### Improvements

* We added a Pipeline ID column to the **Designs** tab of the **Pipelines** page.

### July 16, 2024

#### Improvements

* We changed the [Database Freeable Memory alert thresholds](/developerportal/operate/monitoring-application-health/#dbase-freeable-memory) for the following cloud resource packs:
    * XS21: The critical alert threshold changed from 10% to 5% freeable memory.
    * XS20 (Legacy): The critical alert threshold changed from 10% to 5% freeable memory.
    * S (Legacy): The critical alert threshold changed from 10% to 5% freeable memory.
    * Strato (Legacy): The critical alert threshold changed from 10% to 5% freeable memory.

### July 4, 2024

#### Pipelines New Features

* We added two new pipeline steps:
    * You can use the Start Environment step to start a selected environment.
    * You can use the Promote Package step to move a deployment package from a specified source environment to a specified target environment.
* It is now possible to trigger pipelines manually. To use this new trigger type in your pipeline, select **Manual** as the **Trigger** in the Start Pipeline step of your pipeline design.
* We will be launching a mini survey for Pipelines soon, asking you some questions about what you like and dislike.

#### Pipelines Improvements

* Pipeline names are no longer editable while a pipeline is active. If you want to edit a pipeline name, deactivate the pipeline first.
* We implemented deep links for all three tabs on the Pipelines page. This facilitates easy sharing of record-specific details on the **Runs**, **Designs**, and **Settings** tabs; you can simply copy and paste the URL.

### May 14, 2024

#### New Features

* We now use Arm-based AWS Graviton 2 processors for databases of new environments on all plans in Mendix Public Cloud for best performance. Graviton 2 processors can provide significant performance improvements over previous generation instances. For database operations, this means faster processing of queries and better handling of concurrent requests.

    Existing environments will not automatically use Graviton 2 processors for their databases. Graviton 2 processors will be used for new environments and those which are cleared, downsized, or resized.

### May 9, 2024

#### Pipelines Improvements

* We added a Feedback Widget to the Pipelines pages so that customers can directly provide feedback, enhancement requests, and other ideas.
* We improved the performance of the **Runs** page's search and filtering.
* We added a column selector to the table on the **Runs** page, so it is now possible to customize which columns appear in the table. We also added a new column: Pipeline ID.

### April 25, 2024

#### Metrics Improvements

* Previously, the **Metrics** page displayed the **Day** period and the **Application** group of metrics when first opened. Now, the page opens to the last metrics period (**Day**, **Week**, **Month**, or **Quarter**) and group (**Application**, **Database**, or **All**) that the user selected. Note that the display depends on the user history, not the environment or app history. As before, the user can switch between the metrics periods and groups via the **Period** and **Group** drop-down menus on the **Metrics** page.
* On the **Metrics** page, we now load each graph asynchronously instead of loading the entire page at once. This improves the user experience through faster page loading time.
* We added a way to quickly scroll to the top of the **Metrics** page. Each graph now has a **Scroll to top** button ({{% icon name="arrow-circle-up" %}}) next to it, which the user can click to directly reach the top of the page.

### Deprecations

* We stopped supporting the *Application Container CPU Percentage* alert, because it triggered too often to be useful. The CPU usage data can still be seen on the **Metrics** page.

### April 4, 2024

#### Pipelines Fixes

* We fixed an issue that was causing pipelines to fail at the Checkout step for selected pipeline runs. (Ticket 211117)
* We fixed an issue preventing user settings from saving for select users.
* We fixed an issue where the branches were not being fetched for the Checkout step when designing a pipeline. We also fixed an issue where the Checkout step was not dynamically changing upon the change of the trigger.

#### Pipelines Improvements

* We made a variety of user experience improvements, including improving the styling and implementing a pipeline name character limit of 40 characters.

### March 26, 2024

#### Improvements

* All databases of environments on eligible plans in Mendix Cloud (as specified in the table below) have been migrated to gp3 storage instances. Compared to gp2, gp3 provides higher baseline storage performance. For more information, see [Database IOPS Burst Balance](/developerportal/operate/metrics/#Trends-dbmxdatabaseburstbalance) in the *Metrics* documentation.

    | Storage Size           | Storage Instance Type | Baseline Storage Performance      | Provisioned IOPS Range | Provisioned Throughput Range |
    | ---------------------- | --------------------- | --------------------------------- | ---------------------- | ---------------------------- |
    | Less than 20 GiB       | gp2                   | 100 IOPS (3000 Burst) / 125 MiB/s | 100 - 1197 IOPS        | 128-250 MiB/s                |
    | Between 20 and 400 GiB | gp3                   | 3000 IOPS / 125 MiB/s             | N/A                    | N/A                          |
    | 400 GiB and higher     | gp3                   | 12000 IOPS / 500 MiB/s            | 12000 - 64000 IOPS     | 500 - 4000 MiB/s             |

### March 7, 2024

#### Bug Fixes

* We corrected some rendering issues in the **Metrics** graphs: 
    * When there were some missing data points, all the existing data points used to shift to the left of the graph. Now all the data points display where they are supposed to.
    * The scale of the graphs used to change when there were missing data points. The scale is fixed now.

#### Improvements

* To make it easier to reset the two-factor authentication settings when needed, we added a link to these settings on the **Logs** and **Metrics** pages. This link appears whenever you try to access a page that you need 2FA to view.

### February 29, 2024

#### New Features

* We launched a new feature: Pipelines. Pipelines lets you build and deploy software in an automated way. You can design pipelines with a set of configurable, low-code steps. Activated pipelines run automatically according to your design. This new Pipelines feature is intended to make it quick and easy for teams to automate their CI/CD process. For more information, see [Pipelines](/developerportal/deploy/pipelines/).
    * The Pipelines feature is in [public beta](/releasenotes/beta-features/). It is currently available for unlimited use with all licensed Mendix Cloud apps. Limitations may be put on its use in the future.

### February 19, 2024

#### Bug Fixes

* We corrected one of the labels on the [JVM object heap graph](/developerportal/operate/metrics/#Trends-appmxruntimejvmheap) on the **Metrics** page; it shows survivor space rather than native memory.

### February 8, 2024

#### Bug Fixes

* We removed a blank line on the **Logs** page. 
* On the **Metrics** page, when viewing both the application and the database metrics together, they are now separated instead of presented together. The **Logs** page now shows all the application metrics graphs first, followed by the database metrics graphs.
* The **Environments** drop-down list maintains the same sorting order as on the **Environments** page in the Developer Portal.

### January 31, 2024 

#### Improvements

* We added the AWS Osaka, Seoul, and Jakarta regions as new deployment targets in Mendix Cloud Asia Pacific.
* We added support for regional fallback in Japan (Tokyo and Osaka).

### January 18, 2024

#### Bug Fixes

* We have fixed an issue with two-factor authentication (2FA) on the **Metrics** and **Logs** pages. The 2FA is now session based and not at the account level.
* Memory-related metrics graphs now display in gibibytes (GiB) and not gigabytes (GB).

## 2023

### December 28, 2023

#### New Features

* We now support [regional fallback](/developerportal/deploy/mendix-cloud-deploy/#regional-fallback) in Mendix Cloud. With regional fallback, the database and file storage of your application are replicated to another Mendix Cloud region. If the primary region of your application goes down due to an outage, we will switch over to the fallback region. Your app will then be available to process requests from the fallback region. Without regional fallback, you will have to wait for the primary region to become available again. Regional fallback is part of our Premium Plus cloud resource packs.
    * Regional fallback is available in all Mendix Cloud regions except Tokyo. We will offer regional fallback in Tokyo in Q1 of 2024.

### December 21, 2023

#### Improvements

* If a user tries to upload or transport an MDA file that exceeds the maximum size of 1 GB, they will now see an error message warning them that their MDA file is too big.

### December 14, 2023

#### Improvements

* The application disk usage and CPU usage graphs on the Metrics page now have y-axes that scale dynamically, with the minimum set to 0 and the maximum set to the maximum data point included in the request.
* Under the Deploy API v4, we increased the maximum limit value for `/apps/{appId}/environments` from 20 to 100. 100 is also the new default limit value. For more information, see [Deploy API – Version 4](/apidocs-mxsdk/apidocs/deploy-api-4/).

### November 22, 2023

#### Improvements

* We improved the layout and display of the Metrics page. Metrics can now be filtered via drop-down menus that set the time period (day, week, month, or quarter) and the group (application, database, or all) for the graphs. We also updated the visual style of the graphs. For more information, see [Metrics](/developerportal/operate/metrics/).
* We improved the layout and functionality of the Logs page. The log archives now display file size for app and access logs, and they include an option to filter logs by date. For more information, see [Logs](/developerportal/operate/logs/).
* The Logs page now has an activity log, which reports data on who has viewed or downloaded the logs. The activity log records access by team members as well as members of Mendix Support, who may view or download your app's logs in connection with any support tickets you have open. 

### November 16, 2023

#### Improvements

* We added support for sending application runtime logs and metrics to [New Relic](/developerportal/operate/newrelic-metrics/).
* We deprecated the `SPLUNK_LOGS_REDACTION` and `DATADOG_LOGS_REDACTION` environment variables.
* We introduced the `LOGS_REDACTION` variable, which is compatible with [Splunk](/developerportal/operate/splunk-metrics/), [Datadog](/developerportal/operate/datadog-metrics/), and [New Relic](/developerportal/operate/newrelic-metrics/).

### October 26, 2023

#### Improvements

* We added support for an `Origin-Trials` HTTP header in the Developer Portal. To use this header, the customer must first deploy (or redeploy) their app sometime after 26 October, 12:00 PM. If the customer has deployed since this date, then they can simply set the header and restart their app to use the header. For more information, see [HTTP Headers](/developerportal/deploy/environments-details/#http-headers).

### October 25, 2023

#### Improvements

* We added support for gp3 storage instances for databases; this provides higher baseline storage performance compared to gp2. IOPS and throughput performance will be upgraded according to the table below.

    * From October 25 onwards, when a customer creates a new DB instance, it is provisioned with a gp3 storage instance if it has a storage size of at least 20 GiB (as specified in the table below). This also occurs when the customer's database is recreated.
    | Storage Size           | Storage Instance Type | Baseline Storage Performance      | Provisioned IOPS Range | Provisioned Throughput Range |
    | ---------------------- | --------------------- | --------------------------------- | ---------------------- | ---------------------------- |
    | Less than 20 GiB       | gp2                   | 100 IOPS (3000 Burst) / 125 MiB/s | 100 - 1197 IOPS        | 128-250 MiB/s                |
    | Between 20 and 400 GiB | gp3                   | 3000 IOPS / 125 MiB/s             | N/A                    | N/A                          |
    | 400 GiB and higher     | gp3                   | 12000 IOPS / 500 MiB/s            | 12000 - 64000 IOPS     | 500 - 4000 MiB/s             |

    * Existing databases eligible for this upgrade will be migrated later. More details will follow.

    * For more information, see [Database IOPS Burst Balance](/developerportal/operate/metrics/#Trends-dbmxdatabaseburstbalance) in the *Metrics* documentation.

### October 12, 2023

#### Portal Enhancements

* We moved the **Running Now** interface from the **Metrics** page to the [Environment Details](/developerportal/deploy/environments-details/) page. This interface now displays as a dialog box, accessed by clicking the **Show Running Now** action button when the environment is running.

#### Fixes

* We fixed some inconsistencies that appeared in the UI during MDA package uploads. 

### September 19, 2023

#### Improvements

* We introduced a timeout limit for Free Apps where idle connections are actively running a transaction. This change enhances system efficiency by automatically releasing resources from idle, ongoing, transactions to optimize overall performance.

### September 18, 2023

#### Improvements

* To improve the security of [Team Server](/developerportal/general/team-server/) for apps versioned with SVN, we have dropped support for TLS v1.0 and TLS v1.1 when connecting to the SVN Team Server.

### September 14, 2023 

#### Improvements

* We added the AWS Middle East (UAE) region as a new deployment target.

### September 8, 2023 

#### Improvements

* Mendix Cloud database backups are now created with pg_dump version 14.8.

### September 4, 2023 

#### Improvements

* We added webhooks for status [alerts](/developerportal/operate/monitoring-application-health/) generated for your environments.

### August 7, 2023

#### Improvements

* We added the AWS South America (São Paulo) region as a new deployment target.

### July 3, 2023

#### Improvements

* We have upgraded the Cloud Foundry stack on Mendix Cloud to `cflinuxfs4`. This stack will be used automatically when you redeploy your Mendix app on Mendix Cloud public or dedicated clusters.

### June 15, 2023

#### Portal Enhancements

* The webhooks feature is now released for GA. Webhooks can trigger endpoints when changes are committed to a Team Server Git repository, or when a new deployment package is available for deployment to the Mendix Cloud. For more information, see [Webhooks](/developerportal/deploy/webhooks/).

#### Improvements

* We have introduced a filtering capability for sending Mendix runtime metrics to APM vendors.

### May 4, 2023

#### Improvements

* In the Build and Deploy APIs, we have added a link to download packages from the Developer Portal. This is controlled by a parameter on the following API calls:
    * [Retrieve Package](/apidocs-mxsdk/apidocs/build-api/#retrieve-package) in the Build API
    * [Retrieve Environment Package](/apidocs-mxsdk/apidocs/deploy-api/#retrieve-environment-package) in the Deploy API
* We have deprecated the [Download Package](/apidocs-mxsdk/apidocs/build-api/#download-package) call in the Build API.

### April 20, 2023

#### Improvements

* We have updated the [Splunk](/developerportal/operate/splunk-metrics/) integration to send app metadata to the Splunk Cloud Platform, together with the ability to add custom tags.

### March 16, 2023

#### Improvements

* We have added webhooks which can trigger endpoints when changes are committed to a Team Server Git repository, or a new deployment package is available for deployment to the Mendix Cloud. See [Webhooks](/developerportal/deploy/webhooks/) for more information.

    {{% alert color="info" %}}This feature is currently in a [beta release](/releasenotes/beta-features/).{{% /alert %}}

### February 23, 2023

#### Improvements

* We have added OneAgent support for [Dynatrace](/developerportal/operate/dynatrace-metrics/) monitoring in the Mendix Cloud.
* The `DT_TENANT` environment variable is now required for the Dynatrace integration.

* We have enabled DNSSEC to authenticate DNS lookups for `cname.mendix.net`.
    * This means that custom domains for applications in the Mendix Cloud will validate using DNSSEC, provided it is also enabled for the custom domain.

### February 21, 2023

#### Improvements

* We now return HTTP headers for the SHA1 Fingerprint and Serial number of an authenticated Client Certificate. For more information, see [Mendix Cloud HTTP Request Headers](/developerportal/deploy/mendix-cloud-request-headers/).

### February 16, 2023

#### Improvements

* Customers can now download access logs for their applications. The Deploy API has also been updated with this functionality; for more information, see [Download Access Logs](/apidocs-mxsdk/apidocs/deploy-api/#download-logs) in *Deploy API*.

### January 26, 2023

#### Improvements

* We added a new version of the Deploy API; this version allows you to change the Technical Contact and team permissions of an app. For more information, see [Deploy API – Version 3](/apidocs-mxsdk/apidocs/deploy-api-3/).

### January 18, 2023

#### Fix

* For customers running Mendix apps with runtime version 9.7.0 and above, we have fixed some minor issues with the [Number of handled external requests](/developerportal/operate/metrics/#Trends-appmxruntimerequests) and [Number of database queries being run](/developerportal/operate/metrics/#Trends-dbmxruntimeconnectionbus) graphs. These changes are available after you redeploy your app.

### January 13, 2023

#### Improvements

* We added the AWS Middle East (Bahrain) and AWS Africa (Cape Town) regions as new deployment targets.

### January 5, 2023

#### Improvements

* We have introduced support for [Dynatrace](/developerportal/operate/dynatrace-metrics/) monitoring in Mendix Cloud v4.

## 2022

### November 14, 2022

#### Improvements

* We have configured reverse DNS for the outgoing IP addresses of Mendix Cloud v4. A reverse DNS lookup is commonly used by email services to filter out spam.

### November 10, 2022

#### Improvements

* We updated the **Virtual Machine Out of Memory** and **Virtual Machine Error** alerts to offer more clarity and visibility into the application behavior. These changes are available after you redeploy your app.
* We now warn you if you try to set unsupported custom runtime settings. These are settings, mainly related to storage options, which are controlled by the Mendix Cloud deployment and cannot be customized for apps which are deployed to Mendix Cloud.

### November 1, 2022

#### Improvements

* We have enabled DNSSEC for all `*.mendixcloud.com` domains.

### October 20, 2022

#### Fix

* We fixed an issue with validation of white spaces in intermediate certificate chains for custom domains. (Tickets 15376, 163961, 165121, 165756, 167669, and 168416)

### October 17, 2022

#### Improvements

* We updated our alert template to remove the **Application Server Memory** alert.
* We added the **Database Freeable Memory** alert with the critical threshold set to 10%.

### September 15, 2022

#### Improvements

* We have improved the maintenance banner message at the application and environment level to show more information about the maintenance.

#### Fix

* We improved the performance of the Developer Portal when selecting which revision to use to build a deployment package from an MDA. (Ticket 163959)

### September 13, 2022

#### Improvements

* We updated our alert template to make the alert names more descriptive and transparent. For more information, see [Alerts](/developerportal/operate/monitoring-application-health/).

### August 8, 2022

#### Improvements

* We added the AWS Mumbai region as a new deployment target in Mendix Cloud Asia Pacific.

### July 21, 2022

#### Improvements

* We have introduced support for runtime application logs to be sent from Mendix Cloud v4 to [Splunk Cloud Platform](/developerportal/operate/splunk-metrics/).

### July 8, 2022

#### Improvements

We added the ability to enable and disable additional services at an app and environment level.

### June 29, 2022

#### Improvements

**Update of `*.apps.ca-1a.mendixcloud.com` TLS certificate**

We replaced the TLS certificate for `*.apps.ca-1a.mendixcloud.com` on June 29, 2022. Browsers like Mozilla Firefox, Microsoft Edge, and Google Chrome automatically trust the new certificate. In those cases, there is nothing you have to do.

Current Certificate Details: [https://crt.sh/?id=4793020705](https://crt.sh/?id=4793020705)

New Certificate Details: [https://crt.sh/?id=6940447552](https://crt.sh/?id=6940447552)

**Update of `*.apps.au-1a.mendixcloud.com` TLS certificate**

We replaced the TLS certificate for `*.apps.au-1a.mendixcloud.com` on June 29, 2022. Browsers like Mozilla Firefox, Microsoft Edge, and Google Chrome automatically trust the new certificate. In those cases, there is nothing you have to do.

Current Certificate Details: [https://crt.sh/?id=4793020687](https://crt.sh/?id=4793020687)

New Certificate Details: [https://crt.sh/?id=6940402070](https://crt.sh/?id=6940402070)

### June 15, 2022

#### Improvements

* We have enabled a Web Application Firewall (WAF) service for the licensed regions of the Mendix Cloud. For more information about WAF, see the [release note for March 30](#waf).

    | Region | Date Enabled |
    | --- | --- |
    | Asia Pacific | June 13 |
    | US and Canada | June 14 |
    | EU and UK | June 15 |

### June 2, 2022

#### Fix

* We fixed an issue where some customers were seeing an error message when leaving the permissions tab of the environments page when there were no actual errors. (Ticket 146866)

#### Improvements

* We improved the UX for setting up two-factor authentication.

### May 31, 2022

#### Fix – AppDynamics

* We changed the naming format for nodes when using AppDynamics metrics. When the instance is added to the node name, we now use a hyphen instead of an underscore. So `node_1` becomes `node-1`. This is in line with AppDynamics naming conventions.

### May 6, 2022

#### Improvements

* We have updated AppDynamics monitoring to provide default values where possible.

### April 22, 2022

#### Improvements

* We have added two new graphs on the [Metrics page for Cloud v4](/developerportal/operate/metrics/):
    * Number of files in storage
    * Size of files in storage (in bytes)
* We have updated the alert order on the [Alerts page](/developerportal/operate/monitoring-application-health/) for better visibility
* We have made improvements to the email alert subscription service to make it more reliable

### April 21, 2022

* We have introduced support for [AppDynamics](/developerportal/operate/appdynamics-metrics/) monitoring in Mendix Cloud v4.

### March 31, 2022

#### Improvements

* We now show deactivated users on the [Node Permissions](/developerportal/deploy/node-permissions/) page for consistency with the [Team](/developerportal/general/team/) page.

### March 30, 2022{#waf}

#### Improvements

* We have implemented a Web Application Firewall (WAF) service for Free Apps deployed to the Mendix Cloud.

    The Web Application Firewall (WAF) is a security service that protects applications from malicious and unwanted internet traffic without modifying your application code. WAF for Free Apps addresses various attack categories including many high risk and commonly occurring vulnerabilities described in OWASP publications such as [OWASP Top 10](https://owasp.org/www-project-top-ten/). These include the following:

    * Cross-site scripting
    * HTTP protocol violations
    * Bots, crawlers, and scanners
    * HTTP Denial of Service
    * Server-side request forgery
    * Local File Inclusion
    * Log4j remote code execution

### March 3, 2022

#### Fixes

* We fixed an issue where the `start environment` Deploy API error response had an incorrect JSON format. (Ticket 135323)

### March 2, 2022

#### Improvements

* We have adjusted the thresholds for the Application Container Memory Percentage alert. It will now send a warning alert when the memory utilization is above 90% and a critical alert when it is above 95%.

### February 17, 2022

#### Fixes

* We removed a misleading message which was displayed when a Free App was unlinked from its environment. (Ticket 140897)

### January 13, 2022

#### Fixes

* We fixed an issue where the start environment call to the deploy API failed to start the environment. (Ticket 132011)

## 2021

### December 23, 2021

#### Improvements

* We added log entries to the activity log to record changes to members of the app team and any changes to the [permissions](/developerportal/deploy/node-permissions/) that team members have.
* We now display any documentation associated with [scheduled events](/refguide9/scheduled-events-legacy/#common-properties) in the [Model Options tab](/developerportal/deploy/environments-details/#model-options) of the environment details.

#### Fixes

* We fixed an issue where uploading a backup file got stuck and could not be completed. (Tickets 134454, 134887, 134898, 135007, 135325, 135359, 135692, 135894, and 137806)

### December 22, 2021

#### Improvements

**Update of `*.mendix.com` TLS certificate**

We will gradually replace the TLS certificate for `*.mendix.com` in January 2022. Browsers like Mozilla Firefox, Microsoft Edge, Google Chrome, and Internet Explorer automatically trust the new certificate. In those cases, there is nothing you have to do.

Current Certificate Details: [https://crt.sh/?id=2349479044](https://crt.sh/?id=2349479044)

New Certificate Details: [https://crt.sh/?id=5832398831](https://crt.sh/?id=5832398831)

### November 18, 2021

#### Fixes

* We fixed an issue with the custom HTTP header Content-Security-Policy to follow RFC and W3C specs during validation. (Tickets 133172)
* We fixed an issue where a request handler path with '.' would break transport. (Tickets 132865, 133292)

### October 26, 2021

#### Improvements

Mendix Cloud v4 now supports PostgreSQL 13. This adds significant performance improvements for some workloads.

All newly-created applications will have a database running PostgreSQL 13.

Existing applications will be updated in the next few weeks. Technical contacts of these applications will receive timely notifications and, additionally, maintenance information will be visible in the Developer Portal.

### October 7, 2021

#### Fixes

* We fixed an issue where users could not see all their backups, and some backups were shown more than once. (Tickets 127908, 128966, 130090, and 130313)

### September 10, 2021

#### Improvements

* We added a new [custom environment variable](/developerportal/deploy/environments-details/#custom-environment-variables) `USAGE_METRICS_EMAIL_FIELDS` which allows you to identify which entities are used to hold your end user details.

#### Fixes

* In **Mendix Cloud v3** we fixed a problem with viewing the current log in a pop-up. We now display the current log in a new browser tab. 

### August 26, 2021

#### Improvements

* We added the ability to restore only a database, without restoring the other files in a backup.
    You can do this in one of two ways:
    * Through the [Developer Portal](/developerportal/operate/restore-backup/#restore-cloud-backup)
    * Using the [Backups API v2](/apidocs-mxsdk/apidocs/backups-api/)

### August 6, 2021

#### Improvements

* We moved the [Node Permissions](/developerportal/deploy/node-permissions/) from the Security page to the [Environments](/developerportal/deploy/environments/) page.
* We added the ability to delegate node permission management to team members who are not the Technical Contact.

#### Fixes

* We now prevent you from allocating more memory than is available when [scaling your environment](/developerportal/deploy/scale-environment/) when you have multiple instances, ensuring that deployments do not fail because of a lack of memory. 

### July 23, 2021

#### Improvements

* We improved the environment details by making the PostgreSQL version dynamic using the information available from the service broker. The version will be updated after a restart of the environment.

#### Fixes

* We fixed an issue where custom JSON error descriptions were not returned for REST endpoints. If you have defined custom HTML error pages for your app, they will be disabled for request handlers that typically do not serve HTML content. These include SOAP, OData, and REST endpoints defined in your app.
* We fixed an issue where the free application environment page showed an app as deployed in Mendix Cloud when it was not.

### July 15, 2021

#### Improvements

* Mendix Cloud v4 now supports incoming connections over Internet Protocol version 6 (IPv6).

### July 5, 2021

#### Fixes

* We fixed an issue where long-running restore jobs appear to fail when using [Backups API v1](/apidocs-mxsdk/apidocs/backups-api-v1/).  (Tickets 122197 and 125707)

#### Announcement

* We are deprecating [Version 1 of the Backups API](/apidocs-mxsdk/apidocs/backups-api-v1/). Mendix recommends using the [Backups API v2](/apidocs-mxsdk/apidocs/backups-api/), which handles long-running backup and restore jobs more robustly.

### June 14, 2021

#### Improvements

* We have improved our logging to provide more stability and robustness. This addresses issues faced by customers, such as failing log downloads and incomplete log files.

### June 11, 2021

#### Mendix Cloud v3 Archived Logs

* We have deleted archived logs older than six months for all Mendix Cloud **v3** apps. This is in line with the warning given in the Developer Portal and the current commitment to keep logs for six months.

### June 8, 2021

#### Improvements

* The [Mendix buildpack](https://github.com/mendix/cf-mendix-buildpack) that is used to run your Mendix application will be automatically updated to the latest version every time your app resumes in Mendix Cloud v4 Free Tier EU.

### May 27, 2021

#### Improvements

* We now retain daily backups on Mendix Cloud v4 for 30 days. Previously, it was two weeks.

### May 18, 2021

#### Improvements

* Mendix Cloud domains `mendixcloud.com` and `mxapps.io` now use DNSSEC to authenticate DNS lookups. There is nothing that you need to do for this change to take effect. Going forward, all DNS requests to these domains will automatically use DNSSEC.

### May 12, 2021

#### Improvements

* Mendix Cloud database backups are now created with `pg_dump` version 1.14. This version is shipped with PostgreSQL since October 2019 (PostgreSQL 12, 13). The side-effect is that it is not possible to restore these PostgreSQL backups using a `pg_restore` version below 1.14 (PostgreSQL <= 11). The error that you will receive is `pg_restore: [archiver] unsupported version (1.14) in file header`. To resolve this issue, upgrade your software to a version that includes newer versions of `pg_dump` and `pg_restore`. Examples are PostgreSQL client version 12 or 13, or [PGAdmin version 4.12 or above](https://www.pgadmin.org/download/).

### April 29, 2021

#### Improvements

* We increased the maximum number of instances you can set when [scaling](/developerportal/deploy/environments-details/#scaling) your app to 32. If you need more than 32 instances, contact Mendix Support.

#### Announcement - Internet Protocol Version 6 (IPv6) will be supported for applications in Mendix Cloud v4 from **July 1, 2021**

To improve security and scalability of the connections made to applications in Mendix Cloud v4, **on July 1, 2021** we will enable support for **Internet Protocol Version 6 (IPv6)** in **Mendix Cloud v4**. This will happen automatically, there is no need to redeploy your app.

Enabling support for IPv6 means that clients who access your Mendix applications which have configured Access Restriction Profiles may not be able to connect to them when using IPv6.

**What does this mean for you?**

We are informing you about this date so that you can plan to update your Access Restriction Profiles and inform users about this change. Technical Contacts of affected apps will also be contacted directly.

You can configure IPv6 ranges before July 1, but the change will only come into effect on that date. Instructions for setting IP ranges can be found in the [Access Restriction Profiles](/developerportal/deploy/access-restrictions/#ip-ranges) documentation.

**Test your clients**

You can test whether your client (browser or integrating client) is using IPv6, by using [https://ipv6-test.com](https://ipv6-test.com/).

**Impact**

Any clients that use IPv6 to connect to applications which have configured Access Restriction Profiles may experience connectivity issues from **July 1, 2021** onwards.

### April 15, 2021

#### Fix/Improvement

* We implemented a new `upload` API which allows you to upload large (>300 MB) app packages (.mda files) and still retrieve the package ID. More information is in [Deploy API – Version 2](/apidocs-mxsdk/apidocs/deploy-api-2/). (Tickets 117609 and 117622)

### March 30, 2021

* We have implemented various visual changes to the user interface of the Developer Portal.

### March 18, 2021

#### Improvements

* We added the ability to completely clear all the data from your database running in a licensed environment.
* We removed the ability to publish **App Services**. These have been deprecated for some time. You should use a [Published Web Service](/refguide9/published-web-services/) or a [Published REST Service](/refguide9/published-rest-service/) instead.

#### Fix

* We fixed an issue where deployments failed if there were too many log nodes. (Ticket 115140)

    As a consequence of this, you will no longer be able to see the log levels of all your [log nodes](/developerportal/deploy/environments-details/#log-levels) if your app is not running. Only log nodes which are not set to `Info` will be visible until you restart your app.

### March 16, 2021

* We updated the Mendix runtime to send back usage information to Mendix for your apps deployed to the Mendix Cloud. See below for more information about this change.

    This will be enabled the next time you redeploy your app. 

**What happens to this information?**

The sole purpose of retrieving this information is to check compliance against your license subscription. The information sent to Mendix allows us to provide you with clear insights into the exact usage of your apps and the number of active users in a given time-period. This can also help you in determining an optimum user plan in the long run.

This information is eventually stored within Mendix and gives us an aggregated view of usage of your apps. 

**What is the information sent back?**

Usage information in this context is the username, project id, app environment name, and date and time of logon. 
Note that **the username is scrambled using a hashing algorithm**, ensuring that the actual username cannot be discovered. 

**Who is a user?**

Everyone who logs onto the app with a username and password is considered an app user. All anonymous users are treated as a single user for this purpose.

**When and how does this happen?**

In connected environments, this usage information will be sent back to Mendix automatically, at regular intervals — by default this is set to once every day. This transmission will take place at around(randomized) midnight. Data will also be sent when the app is restarted. 

### March 3, 2021

* We updated the [deploy API](/apidocs-mxsdk/apidocs/deploy-api/), [Build API](/apidocs-mxsdk/apidocs/build-api/), [Team Server API](/apidocs-mxsdk/apidocs/team-server-api/), [Backups API v2](/apidocs-mxsdk/apidocs/backups-api/), and [Backups API v1](/apidocs-mxsdk/apidocs/backups-api-v1/) to:
    * add json validation
    * add stricter API path validation (for example, a trailing `/` on the API path will result in `API not found`)
    * return differently formatted error messages for unhandled or unexpected errors
    * the package name in the [Upload Package](/apidocs-mxsdk/apidocs/deploy-api/#upload-package) call of the deploy API must be part of the query — it can no longer be passed in the body of the request

If you encounter errors using APIs, please ensure that the format matches the documentation exactly before contacting Mendix Support. Additional or amended headers or request bodies may cause the API to fail.

### February 22, 2021

* We have released a major improvement to the technology underpinning our integration with Datadog. This adds the following features:
    * tracing program flow (see https://docs.datadoghq.com/tracing/setup_overview/setup/java for information on how Datadog does this)
    * redacting email addresses in Datadog logs

    You need to redeploy of your app to implement these changes. All your existing metrics will continue to be sent to Datadog. There will be some minor changes around how database rate and counter metrics, but this does not affect gauges. See [Datadog for v4 Mendix Cloud](/developerportal/operate/datadog-metrics/) for more information.

## 2020

### December 17, 2020

* We added the ability to allow customers to test beta features by adding certain allowed Custom Environment Variables. These can be added like Custom Environment Variables in Mendix Cloud v4 environment, using a text field beside the current dropdown.

    For more information on custom environment variables, see [Runtime Tab](/developerportal/deploy/environments-details/#custom-environment-variables) in the *Environment Details* documentation.

* As part of a Developer Portal clean up, we removed the Model option from the DEVELOP section of the Developer Portal menu when you are looking at environments on Mendix Cloud. The functions of this page are still available via the **Edit in Studio Pro** button on the environments page.

### December 8, 2020

* We changed the way Log Levels can be set in Mendix Cloud v4.
    * For single-instance apps, the log level can be changed while the app is running.
    * For a multi-instance app, the new log level will only be applied after a restart.

    This is a requested improvement after the release of [December 3rd](#20201203). Note that changes to the log levels are still permanent as announced on that date.

### December 3, 2020 {#20201203}

* We added the ability to permanently change the Log Levels in Mendix Cloud v4 for an app so that they persist between restarts. This was in response to customer requests. (Ticket 101413)<br/>Log Levels will only become persistent after the next restart of your app, so you may have to set them one more time.<br/>For more information on log levels, see [Log Levels Tab](/developerportal/deploy/environments-details/#log-levels) in the *Environment Details* documentation.
* You can now retrieve the version of the buildpack used in deployment via the Deploy API [Retrieve Environment](/apidocs-mxsdk/apidocs/deploy-api/#retrieve-environment) call. The version is returned as `RuntimeLayer`. You will need to redeploy your app to ensure it returns this in the API response.

### November 26, 2020

#### Fixes

* We fixed an issue where you could not set the value for a constant which was defined as long to a value greater than the maximum value for an integer.
* We fixed an issue where the Company Admin could not search through licensed nodes. (Ticket 109742)

### November 5, 2020

#### Improvements

* We added support to generate 1024x1024 icons for iOS.

#### Fixes

* We resolved an issue where an incorrect debugger password was sometimes shown for Mendix Cloud v4 apps in the Developer Portal. This meant that customers were not able to connect to the debugger. (Ticket 105317)

### October 26, 2020

#### Fixes

* We resolved an issue where [HTTP headers](/developerportal/deploy/environments-details/#http-headers) were only returned for a successful request. You will have to redeploy your app to apply this fix. (Tickets 94915 and 107140)

    See [Mendix Buildpack Releases](https://github.com/mendix/cf-mendix-buildpack/releases) on *GitHub* for more information.

### October 22, 2020

#### Improvements

* We are in the process of migrating the alerting service to our internal infrastructure to improve maintainability. Your alerts will continue to operate in the same way after the migration.
* As part of the migration, the existing alert history will be deleted. The alerts history tab will only contain those alerts which have been triggered since the migration.
* We added the ability for the Technical Contact to download a list of [node permissions](/developerportal/deploy/node-permissions/) as a CSV to assist with audits
* We added information about the size of backup files.

### October 5, 2020

#### Improvements

* In response to user feedback, we changed the way that you can control the target environment when deploying apps from Studio Pro
    * You can now choose only to build the MDA without deploying to an environment
    * The setting of the target environment (for Technical Contacts only) has been moved from the individual Environment Details pages to the Environments page of the app

### September 22, 2020

#### Improvements

* We have added the ability for Technical Contacts to download the activity log from an environment.
* On some of the Developer Portal pages (*Environments*, *Mobile App*, *App Services*, *Metrics*, *Alerts*, *Logs*, *Backups*, and the *Node Permissions* tab of *Security*), we have split the **Edit App** button into two separate buttons: **Edit in Studio** and **Edit in Studio Pro**.
* We removed the ability to build PhoneGap hybrid applications through the Developer Portal. The PhoneGap Build service will be removed by Adobe on 1 October, so this action would have failed after this date. You can still build your hybrid app locally.

#### Fixes

* We resolved an issue where transports which failed were not reported correctly to the customer. (Ticket 106033)
* We resolved an issue where memory could not be scaled above 16GiB even though 32GiB was available. (Ticket 101035)
* We resolved an issue where the documentation field was empty when editing a constant in the Developer Portal, even though there was documentation in the model. To see the documentation, you will need to redeploy your app. (Tickets 78758, 78958, 79212, 79359, 92954, 93107, and 100756)

### September 17, 2020

#### Improvements

* We improved the way that the SSL/TLS connection is established to the database instance in Mendix Cloud **v4**. Now the application will verify that the Subject Alternative Name attribute (or attributes) or the Common Name attribute of the database server certificate is matched against the database host name.

{{% alert color="info" %}}This change will take effect the next time you deploy your application.{{% /alert %}}

### September 15, 2020

#### Fixes

* We fixed an issue where some customers were getting JVM heap size out of memory errors for applications with a Studio target set. (Tickets 106848, 106966)

    {{% alert color="info" %}}You must restart the affected environment to apply this fix.{{% /alert %}} 

### September 14, 2020

#### Announcement - Deprecation of HTTPS SSL/TLS weak ciphers from **December 1, 2020**

To improve the security of the HTTPS connections made to apps in Mendix Cloud v4, we [enabled TLSv1.3 in February this year](#tls-v1_3). Since then, more than 50% of the requests to Cloud v4 apps have been served over TLSv1.3.

To further improve the security of the HTTPS connections to apps in Mendix Cloud v4, we are deprecating and stopping support for block ciphers. Block ciphers are considered weak.

**On December 1, 2020**, we will stop technical support for **TLSv1.2 Block ciphers (CBC)** for HTTPS connections to apps in **Mendix Cloud v4**.

**What this means for your Mendix apps**

Stopping support for TLSv1.2 Block ciphers (CBC) means that old clients will not be able to connect to your Mendix app any more.

Some examples of clients which will no longer be supported are:

* Java 7 (Mendix 5)
* Internet Explorer version 11 on Windows 7
* Internet Explorer version 11 on Windows 8.1
* Safari before version 9 on OS X 10.11
* Safari before version 9 on iOS 9

**What we continue to support (expert details)**

SSL/TLS ciphers that are still supported for HTTPS connections after December 1, 2020:

**TLSv1.3**

* `TLS_AES_128_GCM_SHA256`
* `TLS_AES_256_GCM_SHA384`
* `TLS_CHACHA20_POLY1305_SHA256`

**TLSv1.2**

* `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384`
* `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256`
* `TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256`
* `TLS_DHE_RSA_WITH_AES_256_GCM_SHA384`
* `TLS_DHE_RSA_WITH_AES_128_GCM_SHA256`

### September 4, 2020

#### Improvements

* We have added *used storage space* to the Database Node Disk Usage graph in Mendix Cloud v4. See [Metrics](/developerportal/operate/metrics/#Trends-dbdfabs) for more information.

### August 28, 2020

#### Fixes

* We fixed issues related to the [Deploy to Licensed Cloud Node](/refguide9/app-menu/#deploy) flow in Mendix Studio Pro:
    * We rolled back the restriction for Mendix Cloud v3 apps in the [Deploy to Licensed Cloud Node](/refguide9/app-menu/#deploy) flow in Mendix Studio Pro.
    * We improved the error messages for Mendix Cloud v4 apps that appear when you deploy from Studio Pro with no [Mendix Studios Target](/developerportal/deploy/studio-deployment-settings/#target) set or you do not have sufficient privileges to deploy to the Studios target.
    * We fixed an issue where you were able to log in as a **Demo User** to the Studios target. Please note that in this scenario, you have to clear the Studios target and redeploy to the affected environment. The target can then be set after redeploying. (Ticket 106312)

### August 26, 2020

#### Improvements

* We improved the error handling and feedback of the scale app functionality for Mendix Cloud v4. (Ticket 103304) 
* We fixed an issue where some customers were not able to access the [Deploy APIs](/apidocs-mxsdk/apidocs/deploy-api/). (Ticket 103241)
* We have modified the [Deploy to Licensed Cloud Node](/refguide9/app-menu/#deploy) flow in Mendix Studio Pro. When **Deploy to Licensed Cloud Node** is selected in Mendix Studio Pro, your application will automatically be deployed to the *Mendix Studios Target* environment of your licensed node. This deployment will include a restart of that environment. It is now only possible to deploy Mendix Cloud v4 applications that have a [Mendix Studios Target](/developerportal/deploy/studio-deployment-settings/#target) set. You will get an error message if you deploy from Studio Pro when no **Mendix Studios Target** is set.

#### Fixes

* We fixed an issue where some customers were unable to manually add certificates to [access restriction profiles](/developerportal/deploy/environments/#asp). (Ticket 102615)

### August 7, 2020

#### Fixes

* We fixed an issue where some customers did not receive an SMS for two-factor authentication. (Ticket 104252) 

### July 30, 2020

#### Fixes

* We fixed an issue where users did not see changes they made to node permissions. (Tickets 104154 and 104642)

### July 22, 2020

#### Fixes

* We fixed an issue where trends graphs were not being updated with the latest data. (Ticket 102400)

### July 16, 2020

#### Improvements

* We added the ability to set the `SameSite` value on cookies to `None` for existing apps. This enables apps to run in iframes in browsers where the default SameSite setting for cookies is `Lax` or `Strict`. (Tickets 97187, 97190, 97699, 97701, 97900, and 98507)
    * This is implemented through the `SAMESITE_COOKIE_PRE_MX812` custom environment variable. For more information see [Running Your App in an Iframe](/developerportal/deploy/environments-details/#iframe) in the *Environment Details* documentation.

### July 8, 2020

#### Fixes

* We resolved an issue where deactivated users were still shown in the [Node Permissions](/developerportal/deploy/node-permissions/) tab of the Security page for an app. (Tickets 90744 95319, 97722, 98474, 99978, 100493, 101595, 103007, and 103549)
* We resolved an issue where you could not change the role of the built-in administrator account for apps deployed to the cloud. (Tickets 87013 and 87605)
    {{% alert color="info" %}}You will still need to change the password of the administrator account for the new role to be assigned to the administrator. See the [User Role](/refguide9/administrator/#user-role) section of *Administrator* for more information{{% /alert %}}
* We resolved an issue where an incorrect debugger password could be displayed for Mendix Cloud **v4** when the **Show Debugger Information** button was clicked on the Environment Details page. (Ticket 99469)

### July 2, 2020

#### Improvements and Fixes

* We have changed the way that the *unused java heap* metric is calculated to make the data more accurate.
    * This also fixes the issue where this metric could have a negative value (tickets: 92998, 93241, 93725, 94560, 99308, 99979, 100086, 101004, 101429, 102260, and 103225).

This value is displayed in the following graphs in Metrics for Mendix Cloud v4:

* as **unused** in [JVM Object Heap](/developerportal/operate/metrics/#Trends-appmxruntimejvmheap)
* as **unused java heap** in [JVM Process Memory Usage](/developerportal/operate/metrics/#Trends-appmxruntimejvmprocessmemory)

{{% alert color="info" %}}This change will take effect the next time you deploy your application.{{% /alert %}}

{{% alert color="warning" %}}You may see a large increase in the size of the unused Java heap metric when this change is applied. This is a consequence of the new calculation and not a change in the memory usage of your app.{{% /alert %}}

### June 17, 2020

#### Fixes

* We fixed an issue where manual backups on Mendix Cloud v3 did not correctly update the status in the Developer Portal when they completed. (Tickets 97485, 97573, 97577, 97748, 97819, and 98313)
* We fixed an issue where some valid certificate authorities could not be uploaded. (Tickets 98150 and 100271)
* We made some changes to the Mendix Cloud v3 Trends graphs.

### June 16, 2020

#### Improvements

* We introduced new alerts for Mendix Cloud v4.
    * Database IOPS Burst Balance, based on the graph [Database IOPS Burst Balance](/developerportal/operate/metrics/#Trends-dbmxdatabaseburstbalance)
    * Database Freeable Memory, based on the graph [Database Node Operating System Memory](/developerportal/operate/metrics/#Trends-dbmemory)

### June 4, 2020

#### Improvements

* We introduced a new graph in the **Trends** metrics for Mendix Cloud v4. This shows the **database burst balance**. See [Database Burst Balance](/developerportal/operate/metrics/#Trends-dbmxdatabaseburstbalance) in the *Trends in the Mendix Cloud v4* document for more information.
* In Mendix Cloud v4, we introduced changes to the Access Restriction Profile (ARP) Certificate Authorities (CAs). These changes allow you to:
    * Have stricter access restrictions by allowing the selection of intermediate certificates instead of the root
    * Use different root certificates for each path
        {{% alert color="info" %}}Existing configurations will not be changed and environments can be restarted safely.<br/><br/>To migrate to the new ARPs, you must remove **all** existing ARPs and replace them with *clones* that you have edited using the latest Developer Portal.<br/>In other words, **Clone** the existing ARPs, **Edit** the CAs, and **Apply** the new ARPs to all paths.{{% /alert %}}
        For more information, see [How To Restrict Access for Incoming Requests](/developerportal/deploy/access-restrictions/).

    You will need to redeploy your app in order to apply the new ARP (or ARPs).

### May 1, 2020

#### Improvements

* For [Mendix Cloud Dedicated](https://www.mendix.com/evaluation-guide/app-capabilities/mendix-cloud-overview#mendix-cloud-vpc), we have added the ability to safelist outgoing IP addresses.

### March 17, 2020

#### Improvements

* We have updated the environment details and backups screens for Mendix Clouds to show a more precise region, and the location of the secondary backup.

### March 2, 2020

#### Improvements

* Restoring data on the Mendix Cloud now takes place asynchronously. This means the following:
    * You can continue working in the Developer Portal while your backup is restored
    * You will be unable to stop or start your app while the backup is being restored
    * Your environment details page will display a message while the backup is being restored
    * The environment activity log will indicate when the restore has completed
* New Deploy API calls have been added. These will be added to the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/) documentation shortly.
* You will now be warned that you cannot restore a file-only backup to Mendix Cloud. You can only restore backups that include the database.

### February 27, 2020{#tls-v1_3}

#### TLSv1.3 Support for Mendix Cloud (All Regions)

* Mendix Cloud v4 and Mendix Cloud v3 now support TLSv1.3. TLSv1.3 improves the speed and security of HTTPS connections.

### February 17, 2020

#### TLSv1.3 Support for Mendix Cloud v4 Free Tier EU

* We enabled TLSv1.3 support in Mendix Cloud v4 Free Tier EU. TLSv1.3 improves the speed and security of HTTPS connections.

### January 21, 2020

#### Fixes

* We fixed an issue where, if the data type of a constant was changed in the app model, it was not changed in the Developer Portal. This meant that validation sometimes failed and the app could not be started. (Ticket 88425)
* We fixed an issue on the page where you select a node to deploy your app, where the app name and the link to the Environments page disappeared.
* We corrected the text of the welcome email for new cloud environments which gave incorrect instructions for deploying your app. (Ticket 93145)

### January 7, 2020

#### Improvements

**3DES Ciphers Disabled for Mendix Cloud v3**

* We have implemented a change to our Mendix Cloud v3 infrastructure so that incoming SSL connections no longer support 3DES ciphers. 3DES ciphers are considered insecure.

## 2019

### December 23, 2019

#### Improvements

* We improved the stability and performance of Mendix Cloud deployment. (Tickets 86800, 92241, 92426)

### November 21, 2019

#### Improvements

* We implemented a number of improvements to enable Mendix Support to provide better support if there are deployment issues

### November 7, 2019{#20201107}

#### Improvements and Fixes

* We have improved the stability and performance of Mendix Cloud Deployment and Operations.

    * This also resolved the [known issues noted on October 30](#ki20201030)

### October 30, 2019

#### Improvements

* We have upgraded Mendix Cloud Deployment and Operation. It is now a Mendix 7 app.
* You can now mask app constant values so that they cannot be seen in the **Model Options** tab of the **Environment Details**.
* We now warn you on all **OPERATE** and **DEPLOY** pages if a maintenance window has been created to allow updating of the Mendix Developer Portal.

<a id="ki20201030"></a>**Known Issue**

* In the **Environments** page, when you click the **Details** button for a **Production** environment and successfully complete two-factor authentication, you are redirected to the **first** environment listed for your app, *not the Production environment*. (Ticket 90999)

    * Workaround – Choose the **Details** for the **Production** environment again and you will be taken to the correct environment.
    * Resolved by release on [November 7](#20201107).

* When you attempt to open an **OPERATE** or **DEPLOY** page in the Developer Portal, you may see a login page. You will need to force a refresh of your page, or clear your browser cache, in order to access the page.

    * Resolved by release on [November 7](#20201107).

### October 1, 2019

#### Improvements

* The `X-Client-Certificate` request header has been removed. You can use the `SSL-Client-S-DN` header instead. See [Mendix Cloud HTTP Request Headers](/developerportal/deploy/mendix-cloud-request-headers/) for more information.

### September 27, 2019

#### Improvements

**Update of `*.mendixcloud.com` SSL/TLS certificate**

We have renewed the SSL/TLS certificate for `*.mendixcloud.com`. Browsers like Mozilla Firefox, Microsoft Edge, Google Chrome, and Internet Explorer automatically trust the new certificate. In those cases, there is nothing you have to do.

{{% alert color="warning" %}}
If you run services that connect to a `*.mendixcloud.com` endpoint AND use a static or outdated trust store, we advise you to update them. The new SSL/TLS certificate can be downloaded [here](/attachments/releasenotes/deployment/mendix-cloud/mendixcloud.com-2019-09-12.crt.txt).
{{% /alert %}}

**Current Certificate Details**

* Subject: `*.mendixcloud.com`
* Issuer: C = US, O = DigiCert Inc, OU = www.digicert.com, CN = RapidSSL RSA CA 2018
* Validity: Jan 3 00:00:00 2018 GMT - Oct 2 12:00:00 2019 GMT
* SHA-256 Fingerprint: F8:FD:79:7A:73:48:E5:B0:9E:70:42:2B:15:D0:8C:D4:5E:F3:66:74:F8:B7:CF:5A:36:16:07:0D:E8:73:BE:8A
* SHA-1 Fingerprint: 78:0D:25:B2:86:12:64:BA:A0:F0:0C:C3:DD:88:C8:32:55:BD:C0:F8

**New Certificate Details**

* Subject: `*.mendixcloud.com`
* Issuer: C = US, O = DigiCert Inc, OU = www.digicert.com, CN = RapidSSL TLS RSA CA G1
* Validity: Sep 12 00:00:00 2019 GMT - Nov 10 12:00:00 2021 GMT
* SHA-256 Fingerprint: AE:55:1D:88:32:E1:7E:BF:AB:0D:F3:2F:57:57:C8:98:8D:87:3F:E8:F6:5F:A6:09:82:EA:37:F7:12:25:A5:D3
* SHA-1 Fingerprint: 5E:4D:05:9B:FE:54:3F:B6:D8:A4:D7:86:7F:3B:50:9A:EE:09:35:8F

### September 5, 2019

#### Fixes

* We fixed an issue that caused the wrong Technical Contact information to be shown on the app's *General* page in the Developer Portal. (Ticket 84852)
* We added a feedback message when you try to restore a backup while the backup is still being created. (Ticket 85786)

### August 23, 2019

#### Improvements

* We improved the performance of the Environments page by reducing the number of remote requests needed.

### July 25, 2019

#### Improvements

* We reordered and improved the Trends pages of operating metrics to improve the user experience.
* We improved the performance of calculating the environment health status.
* We improved the ability to recover from a failed deployment in the Free App cluster.

### June 27, 2019

#### Improvements

* We added a confirmation dialog when you delete Custom Headers.
* We made general performance improvements.

#### Fixes

* We fixed an issue that prevented the adding of comments to a backup. (Ticket 81993)
* We updated the **Read documentation** link in the Mendix Cloud v4 metrics page to point to the right document. (Ticket 82130)
* We added appropriate feedback if you try to upload a client certificate which is unsupported because it is not encoded in PEM. (Ticket 82299)
* We fixed an issue which prevented the offboarding of a single environment if you wanted to retain other environments in the Mendix Cloud node. (Ticket 83189)

### June 15, 2019

#### Improvements

* All **HTTP Request Headers** set by Mendix Cloud that are available to app developers are documented in [Mendix Cloud HTTP Request Headers](/developerportal/deploy/mendix-cloud-request-headers/).
* The `X-Client-Certificate` request header that is currently present is deprecated and will be removed in a later stage. Any application relying on this header must switch to the new `SSL-Client-S-DN` header. See the previously mentioned documentation for more information.

### May 17, 2019

#### Fixes

* We made several changes to our maintenance window management to ensure that environments are completely locked during maintenance.

### May 16, 2019

#### Improvements

* We redesigned the App User management page of the Developer Portal for Mendix Cloud environments that are enabled for single sign-on (SSO).

### May 9, 2019

#### Fixes

* We fixed an issue where the Mendix feedback widget stopped working for apps deployed to Mendix Cloud because of a change to HTTP Headers. (Ticket 83001)

### May 7, 2019

#### Improvements

* For Mendix Cloud v4, we have extended the range of HTTP Headers that are supported in the Developer Portal. Previously, only *X-Frame-Options* was supported. For more information, see [Environment Details](/developerportal/deploy/environments-details/#http-headers).
    * If you add or change these settings, you will need to redeploy your app before the changes take effect.
* For Mendix Cloud v4 deployments of Mendix apps version 7.23.1 and above, we now support AdoptOpenJDK, and the relevant Java version is displayed on the Environment Details page.
* We clarified which logs can be downloaded from the Developer Portal by changing the button text from *Download Today's Log* to *Download Current Log*

#### Fixes

* We resolved an issue where some team members were not visible in Node Permissions after an app was relinked (Tickets 70285, 79708, 79824, 80557, 81713, 82591).

### May 3, 2019

#### Improvements

* We released **Free Edition** of Mendix. This removes the limit of 10 named users on Free Apps that are deployed to Mendix Cloud. To take advantage of the *Free Edition* for an existing app, you need to redeploy your app.

### April 4, 2019

#### Fixes

* We have fixed an issue with changing [Node Permissions](/developerportal/deploy/node-permissions/).

### March 29, 2019

#### Improvements

* We have introduced *Flexible Environments* for Mendix Cloud v4. This means that you can have more than three environments for your licensed node. More information is available [here](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments). If you need more than three environments, contact [Mendix Support](/support/). Features of Flexible Environments include the following:
    * You can search for the environment for which you want to see details
    * The Technical Contact can rename the environments
    * The Technical Contact can re-order the environments
* As part of support for Flexible Environments, we have made the following changes:
    * When deploying your application via the Developer Portal, you can choose the destination environment
    * When viewing metrics, logs, backups, etc. you will have to choose the environment using a drop-down rather than clicking directly on the environment you want

#### Other Improvements

* We have added the ability to manage tags through the Developer Portal, in addition to the current method, which involved using the API.

### March 7, 2019

#### Fixes

* We have fixed the issue where custom domains were not getting bound to environments if they were added before the environment was initialized. (Tickets 78324, 76159, 76439, 77366, 77504, 78324, 78484)
* We have fixed the issue which caused the "Running Since" value in the Environment Details to be updated after transporting an MDA to an environment but where the process was canceled without restarting the environment. (Ticket 76893)
* We have fixed the issue regarding unclear application version numbering when building an MDA package. The "App latest tag" and "Branch latest tag" have been replaced with "App highest tag" and "Branch highest tag", respectively, to represent the values more precisely. (Ticket 78699)
* We have fixed the issue causing license information to be displayed incorrectly in the Developer Portal for some Mendix Cloud v3 production environments. (Ticket 78229, 80336)

### February 6, 2019

#### Fixes

* We addressed and fixed an issue that caused some Mendix Cloud v4 backups to be duplicated.
* We fixed a problem on Mendix Cloud v3 that prevented Path-based Access Restrictions from working with multiple TLS certificate authorities. (Ticket 77282)
* We fixed the problem which prevented users in the Pacific Time Zone from being able to download the current day's logs. (Tickets 78325, 78586, 79119, 79162, 79427)
* We addressed and solved a problem that meant that some sandboxes could not be resumed after getting stopped.
* We have fixed the issue that prevented apps with ACS (AppCloudServices) from being deployed using the Web Modeler. (Ticket 76888)

### January 28, 2019

#### Improvements{#tls}

**TLS v1.0 and v1.1 Disabled for Mendix Cloud v4**

* We have implemented a change on our Mendix Cloud v4 infrastructure so that incoming connections that do not support TLS v1.2 or higher will stop working. This effectively means that TLS v1.0 and v1.1 are disabled, and Mendix Cloud v4 now has an [A+ rating at SSL Labs](https://www.ssllabs.com/ssltest/index.html) again.

### January 3, 2019

#### Fixes

* We fixed issues regarding incorrect values for some application constants for some Mendix Cloud v4 and v3 applications. (Tickets 77302, 77390, 77505, 77797)
* We addressed and fixed an issue that prevented some Mendix Cloud v3 users from being able to change the Java version of their applications. (Tickets 77251, 77652)

## 2018

### December 1, 2018

#### Fixes

* We fixed an issue that caused deployments for some users to hang. (Tickets, 76691,76700)
* We fixed a security issue that allowed app team members without deploy access to see the debugger password. (Ticket 76172)
* We fixed a security issue that allowed app team members without deploy access to see application constants. (Ticket 76171)
* We addressed and fixed an issue that prevented some users from being able to deploy to their environments. (Tickets 77060, 77122)

### November 14, 2018

#### Fixes

* We fixed an issue in which [custom error pages](/howto/front-end/custom-error-page/) did not work for online applications in Mendix Cloud v4.

### November 1, 2018

#### Fixes

* We fixed an issue that caused an error while creating a backup in Mendix Cloud v4. (Tickets 70086, 70090, 75936, 75996)

### October 30, 2018

#### Improvements

* Cloud v3 PostgreSQL backups are now created with `pg_dump` version 1.13. This version has been shipped with PostgreSQL since March 2018 (PostgreSQL 10.3, 9.6.8, 9.5.12, 9.4.17, and 9.3.22). The side-effect is that it is not possible to restore these PostgreSQL backups using a `pg_restore` version below 1.13. The error that you will receive is `pg_restore: [archiver] unsupported version (1.13) in file header`. To fix this issue, upgrade your PostgreSQL client software to one that includes newer versions of `pg_dump` and `pg_restore`.

### October 17, 2018

#### Improvements

* It is now possible to pause and resume downloading backups for Mendix Cloud v4 applications.
* We have overhauled the scaling user interface to make it more intuitive. (Ticket 67557)
* We addressed an issue that caused live logging to freeze from time to time. The fix has been confirmed on all mainstream browsers except for Internet Explorer, which we still are investigating. (Ticket 66418)

#### Fixes

* We fixed an issue which caused subdomain validation errors for sandbox environments. (Ticket 56574)

### August 21, 2018

#### Fixes

* We have fixed a bug that was causing some Mendix Cloud v4 users to unsubscribe from alerting lists after changing environment privilege settings.
* We have addressed an issue that caused some Mendix Cloud v4 users to not to be able to see their archived logs from previous day.

### August 13, 2018

#### Fixes

* We improved the feedback messages in the case of a startup failure.
* The status page link in alert emails now redirects you to the corresponding alerts page in the Developer Portal.
* We solved an issue that caused blank error messages during backup creation.

#### Improvements

* A new API call for accessing the logs of Mendix Cloud v4 applications is now available. Detailed information can be found in the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/).
* It is now possible to add custom environment variables via the Developer Portal to set up application metrics with Datadog and Telegraph.
* All the log levels in the Developer Portal (as in, INFO, ERROR, TRACE, DEBUG, WARNING, CRITICAL) are now also available in Datadog.
* The Postgres database size can also be observed in Datadog after enabling it in the Developer Portal.
* The **Environments** breadcrumb in **Deploy** > **Environments** > environment is now a link that redirects you back to the **Environments** page.

### August 9, 2018

#### Improvements

* Alerts are now sent when a Mendix Cloud v3 app or database runs out of system memory.

### August 8, 2018

#### Improvements

Over the last few months, we have made several improvements to our alerting stack of Mendix Cloud v4 applications to improve the timeliness of alerts. As a consequence, we are reducing the runtime heartbeat timeout from 15 minutes to 3 minutes. We are doing this to ensure that you do not accidentally miss any alerts. We will be monitoring your applications for false positives.

In some cases, you may still experience false positives for the runtime heartbeat alert. If that happens, you can resolve the problem by doing a transport and then a restart of the app.

### July 23, 2018

#### Improvements

* We added alerts on database connections and on internal alerting problems.
* We added Telegraf as a sidecar for monitoring.

#### Fixes

* We fixed problems with the uploading, downloading, and restoring of backups with very large databases in Cloud v4.
* We fixed the problem wherein 404, 403, and 503 responses to a REST call translated to an HTML error page.

### July 17, 2018

#### Improvements

* We improved the deployment speed for the Asia region. The feature is not enabled by default, so you need to request it if necessary.
* We implemented tags on environments for metrics in Datadog. It is now possible to add custom tags to metrics that will serve as selection criteria for grouping environments. Environment tags can be created, retrieved, and deleted using APIs. Detailed information can be found in the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/).
* We changed the yearly overview of trends to quarterly in the Developer Portal for v4 applications.
* It is now possible for an Operations Manager to reorder environments.
* Custom offline pages are now immediately active after the transport of a new deployment package.

#### Fixes

* You now get a warning if you try to restore a backup into a small environment. (Ticket 63367)
* Creating a backup via REST API no longer returns error message 500 when it succeeds. (Ticket 65762)

### July 2, 2018

#### Improvements

* We improved the stability of the alerting stack.

### June 26, 2018

#### Fixes

* We fixed the bug that allowed users to start an application during a restore.

### June 15, 2018

#### Improvements

* We added support for client certificate validation in the **Access Restriction Profile** for Mendix Cloud v4 deployments.

#### Fixes

* We fixed the incorrect message that was shown during the scaling of a non-deployed environment. (Ticket 64799)
* Retrieving an environment package via REST API is no longer broken. (Tickets 65348, 65370)
* We reintroduced copy privileges for operations.

### June 11, 2018

#### Improvements

* We added alerts for when an application runs out of memory or otherwise unexpectedly crashes. This is only applicable to Mendix Cloud v4 deployments.

### June 8, 2018

#### Improvements

* We have introduced scaling via API for Mendix Cloud v4. It is now possible to scale Mendix Cloud v4 applications via the Deploy API. For instructions, see the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/).
* We have aggregated the health icons for the acceptance and test environments in the **Nodes** dashboard and **Company Admin** screen.

    {{< figure src="/attachments/releasenotes/deployment/mendix-cloud/CPHealthIcon.png"   width="300"  class="no-border" >}}

* The health icon will display the health status of the environment that is in the worst condition. This is to prepare for an upcoming release that will support more than three environments per application.

#### Fixes

* We fixed an issue in our alerting infrastructure that prevented some Mendix Cloud v4 users from receiving alerts when their apps ran out of memory.
* We fixed the problem that caused the Mendix Cloud v4 **Metrics** legend to remain on the screen even if the user navigated to a different page.
* We fixed the health icon statuses of the environments so that they reflect the environment health with minimum delay.

### May 22, 2018

#### Fixes

* We fixed the bug in Mendix Cloud v4 that prevented users from using nested custom domains. Now you can have one domain (for example, `app.example.com`) and one on `microservice.app.example.com`.

### May 5, 2018

#### Improvements

* It is now possible to add a comment as an optional parameter to the backup while generating one via REST API.
* It is now possible to see the Mendix Runtime version in response to a "Retrieve Environment Package" API call.

#### Fixes

* We fixed an issue that prevented our Mendix Cloud v4 users from uploading and restoring big backups (larger than ~30 GB) to their environments. It has been tested with the archives (~90 GBs) on Mendix Cloud v4.
* We addressed and fixed an issue that caused Mendix Cloud v4 users in the Asia Pacific time zone to receive the wrong timestamps when they downloaded daily logs.

### April 9, 2018

#### Improvements

* As of today, Mendix Cloud v4 users will be able to create and restore backups of their environments via REST API. Detailed information can be found in the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/) documentation.
* The results of **Retrieve Environments** and **Retrieve Environment** REST API calls will now also include the model version and Mendix version information of the applications for which the call is being made.

### March 21, 2018

#### Improvements

* Applications in Mendix Cloud v3 that were running for more than 248 days started to use 100% CPU due to an unknown bug in either the Mendix Runtime, the JVM, or a combination thereof. A very small number of applications have been impacted by this, as most applications are updated much more often, and every deployment restarts an application. However, this problem has been causing performance issues for both the affected applications and our infrastructure. As a workaround, we will now automatically restart apps that have been running non-stop for 247 days between 01:00 and 07:00 local time of the cloud region. If this happens to an application, you will see a message in the application log.

### March 20, 2018

#### Improvements

* We enabled ICMP (ping) packets for our Mendix Cloud v4 load balancers. Now you can use tools like ping, traceroute, and mtr to debug connectivity issues from your location to Mendix Cloud v4 applications. Note that packets will not reach the actual application but only the load balancers. You can expect latency in the low single-digit milliseconds between the load balancers and applications.

### March 16, 2018

#### Fixes

* Users of Mendix Cloud v4 applications will now see a notification if their environment fails to clean properly.
* The health status of newly-created Mendix Cloud v4 applications used to be reflected with a red cross. This has been fixed.

#### Improvements

* We have improved database storage alerts for Mendix Cloud v4 applications. If you subscribed to your applications' alerts, you will receive a warning alert when you have less than 25% disk space on your applications' databases and a critical alert when disk space is below 10%. You need to re-deploy your application to activate this alert.
* Live logging for Mendix Cloud v4 applications is here! You can now view logs neatly and in real-time.

### March 13, 2018

#### Improvements

* In the Mendix Cloud, we have renewed the SSL/TLS certificates for *.mendixcloud.com*, *.mxapps.io*, and *.mendix.com*.

### March 1, 2018

#### Fixes

* Switching between environments in the **Metrics** menu of Mendix Cloud v3 apps is now fixed.
* We fixed the synchronization problem that prevented Mendix Cloud v3 users from seeing their latest nightly backups.

### February 27, 2018

#### Fixes

* When uploading a backup in Mendix Cloud v3, double-clicking the **Restore** button was causing the UI to break. This is now fixed.

### February 23, 2018

#### Improvements

* In Mendix Cloud v4, the native memory usage of applications was very high. This led to crashes and automatic restarts, especially on containers with 1 GB of memory. We activated an advanced memory limiting setting for glibc (`MALLOC_ARENA_MAX`), which will prevent this behavior. The fix will automatically be applied to all apps that are transported and restarted as of today.

### February 22, 2018

#### Improvements

* We implemented a popular feedback item – the platform will now remember your selected environment while switching between screens.
* It is now possible to see the database details such as **DB Plan Space**, **Plan Cores**, and **Plan Memory** of a Mendix Cloud v4 application.
* Scaling Mendix 7 apps is now simplified and faster.

#### Fixes

* Backup creation was reported as a backup restore action in the activity feed, which is now fixed.
* We addressed and fixed an issue where a backup activity item was added each time the backups page was viewed.
* The environment details list was loading slowly for some of our users, which is now fixed.

### February 19, 2018

#### Improvements

* In Mendix Cloud v4, we have enabled logging slow database queries. This is the custom runtime setting `LogMinDurationQuery`, and it is useful for finding performance bottlenecks in your application. The value is set to a default of 10,000 ms, which was also the value on Mendix Cloud v3. You can customize this setting by using the **Runtime** tab on your environment details screen under **Environments**. To start using this feature on a Mendix Cloud environment, transport your deployment package and restart your app.

### January 25, 2018

#### Fixes

* The target cloud of a Free App is now shown correctly in the **Environments** section.
* Happy new year! We addressed an issue where backup downloads were logged as restored backups in the activity log.
* If you had a **Backups** section of your apps open in multiple tabs, you saw multiple activity log entries for each action taken. That's fixed now.
* The restart and stop/start activities are now distinctly defined in the **Activity** section.
* Branches of an application are sorted alphabetically, but **Main Line** is now always on top.
* The broken styling of the **View Current Log** button for a Free App has been fixed.

#### Improvements

* The **Alerts** section in Mendix Cloud v4 apps will now include health check details, just like for Mendix Cloud v3 apps.

## 2017

### December 29, 2017

#### Fixes

* In Mendix Cloud v4, the **archived log** function returned logs from a broader time range than what the user had selected (for example, the logs for one day returned log data from two days). This was fixed.

### December 22, 2017

#### Improvements

* We are introducing a **Restart** button for Mendix Cloud environments. This is useful for preparing configuration changes and activating them with only one click.

#### Fixes

* It's now possible to scale Mendix 6 applications on Cloud v4. Previously, this was only possible with environments that run Mendix 7 apps. With Mendix 6 apps, you can only scale the allocated memory, but not the amount of instances.
* Big backups are now welcomed on v4 environments, as we fixed an issue that prevented users from uploading backup packages larger than 5 GBs.
* We fixed an issue where some Mendix Cloud v3 users were not able to set a specified Java version for environments.
* Hovering over a Mendix Cloud environment status icon will now give more information about the environment's health.

### December 13, 2017

#### Fixes

* The JVM Process Memory graph in Cloud v4 now also show the native memory of the application.
* The Application Node Operating System Memory graph for Cloud v4 now shows as two lines: total and used. The previous version displayed the total added to the used in a stacked area graph, which was very confusing.

### December 6, 2017

#### Fixes

* We addressed an issue that prevents Free Apps from being embedded in an iframe.

### November 27, 2017

#### Improvements

* Free App users now have the option to select between Web Modeler and Desktop Modeler for editing their application models.

### November 15, 2017

#### Improvements

* Mendix Cloud v4 backups can now be restored to other environments in the same Mendix Cloud node. This is useful when preparing production migrations or for reproducing errors.
* When creating a deployment package from Team Server, the dialog box now shows branches in case-insensitive order, which makes more sense for users.
* Mendix Cloud v4 alert status showed `UNKNOWN` sometimes due to an error. This was fixed and the correct status is now shown.
* In the **Deploy**, **Operate**, and **Backups** pages, you can *finally* use the <kbd>Enter</kbd> key to submit your two-factor authentication code. Happy typing!

### October 20, 2017

#### Improvements

* Deploying a different version without stopping a running application is also now available on Mendix Cloud v3. Once the deployment is done, you can restart the application with a single click.
* The user experience of backup uploads has been improved for Mendix Cloud v4. It is also possible to manually delete the old backups on Mendix Cloud v4.
* We made a series of minor user experience improvements for metrics on Mendix Cloud v4.

#### Fixes

* When creating a deployment package from Team Server, users will now be able to see the revisions that were committed without the Mendix Modeler.

### October 10, 2017

#### Improvements

* We removed the backup expiry entries from the activity logs for all applications in the Mendix Cloud, as we found they cluttered the overview and did not provide any useful information to users.

### September 28, 2017

#### Improvements

* Deployments with almost no downtime: It is now possible to deploy a different version without stopping a running application. Once the deployment is done, you can restart the application with a single click. This is now available for Mendix Cloud v4. For Mendix Cloud v3, this will be available soon.
* Improved the robustness of the Deploy API: Occasional failures that occurred while starting/stopping an environment via the Deploy API no longer occur.
* Improved the stability for transporting deployment packages for Asia-Pacific users for Mendix Cloud v4.
* Environment health indicators for your environments are now much more accurate.

### August 30, 2017

#### Improvements

* The user interface of the instance/memory slider for Cloud v4 has been improved considerably. Scaling will also appear in the activity log of the application.
* For Mendix Cloud v4, we do no longer show the size of the archived log. The size we displayed previously was wrong.
* The expiry date for Mendix Cloud backups is now visible in the backup list.

### August 22, 2017

#### Improvements

* Due to various optimizations, the deployment speed for apps in Mendix Cloud v4 EU is now about twice as fast. The latency for FileDocument read/write actions has also improved for all Mendix Cloud v4 regions.

### August 15, 2017

#### Improvements

* We enabled path-based access restrictions for all Mendix Cloud v3 apps. This allows users to more easily configure access restrictions on their environments. For more information, see [Access Restrictions](/developerportal/deploy/access-restrictions/). Mendix Cloud v4 already has this functionality enabled.

### August 1, 2017

#### Improvements

* For Mendix Cloud v3, Java will be upgraded, including the most recent security updates. The Java KeyStore has also been updated. It contains trusted root certificates for secure outgoing connections from your Mendix app. For example, with the updated Java KeyStore, you are now able to connect to endpoints that use a certificate signed by [Let's Encrypt](https://letsencrypt.org/). Root certificates that are considered unsecure by Oracle and Mozilla have been removed. Your app will automatically start using a newer Java version and KeyStore when you restart the app. For Mendix Cloud v4, we are still planning the rollout of this fix.

### July 31, 2017

#### Fixes

* The [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/) for apps in Mendix Cloud v4 contained multiple bugs in the start, stop and transport calls. These are now fixed.

### July 18, 2017

#### Improvements

* For all apps running on the Mendix Cloud, the following HTTP request headers are now available: `SSL-Protocol` (possible values: `TLSv1`, `TLSv1.1`, `TLSv1.2`) and `SSL-Cipher` (for example, `ECDHE-RSA-AES256-GCM-SHA384`). These can be used to block login attempts (for example, `TLSv1` connections). *(Please note that these release notes previously stated the header name was `SSL-Version`, but it should have been `SSL-Protocol`.)*
* Modern browsers are aggressively caching static HTML resources, which can lead to user problems after deploying new versions of applications. Clearing the cache can solve this, but that is a bad user experience. So, for all apps running on Mendix Cloud v3, we have added an explicit `no-cache` header to the resources `/` and `/index.html`, `/login.html`, and `/index[0-9].html`. For Mendix Cloud v4, an `expires` with a negative value was already used, so no changes are required there. We believe this change eliminates most of the browser caching issues we have seen so far.
* You can now restrict access to your Mendix Cloud v4 applications based on IP ranges. This is available for all Mendix Cloud v4 regions and can be configured from the **Network** tab of your cloud environment.

#### Fixes

* When updating the admin user password in the Mendix Cloud, the password policy description was wrong, which led to confusing situations. We updated the text.
* When navigating to **Node Security**, the **App Team** tab no longer disappears.
* Due to a ZIP file encoding change in Mendix 7.5.0, AppServices could not be parsed when deploying to the Mendix Cloud. We fixed this.
* The **View Current Log** button is no longer hidden for Free Apps.

### May 19, 2017

#### Fixes

* We corrected the backup retention scheme for paid applications on Mendix Cloud v4, and it is now the same as on Mendix Cloud v3.
* The "view current log" functionality for Mendix Cloud v4 applications was empty by default and the **Show all** button needed to be used. It now shows the content right away.

### May 17, 2017

#### Improvements

* We upgraded the SSL/TLS ciphers for connections to apps in Mendix Cloud v4. These included dropping block-based ciphers (3DES), moving to 2048 bit DH params. Mendix Cloud v4 now has an [A+ rating at SSL Labs](https://www.ssllabs.com/ssltest/index.html).
* We added HTTP/2 support for connections to all apps in Mendix Cloud v3 and Mendix Cloud v4. HTTP/2 is supported by all major browsers and results in more efficient network connections. [Read more about HTTP/2 here](https://http2.github.io/faq/).

### May 4, 2017

#### Improvements

* Transporting a new deployment package dead-ended in a "Deploy successful" screen. Users are redirected to the environment details screen, which is much more useful.

#### Fixes

* We fixed the failing of large backups in Mendix Cloud v4. Backups will now only fail when the disk of the database is filled up.
* Alert Details now highlights the right menu item.
* Fixed a race condition where two apps created at the same time could get the same domain name.
* Added a warning message before restore backup, to prevent users clearing their environment. Clearing the environment before restoring resulted in a much slower non-incremental restore operation.
* Disabled automatic copying of "Data Snapshots" to empty environments in Mendix Cloud v4 Pro/Enterprise environments. This features is only used in Free Apps. Weak admin passwords in the database snapshot would prevent the app from starting.

### April 1, 2017

#### Improvements

* We added list backups/download backup operations to the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/).
* We updated the **Security** link from the Deploy/Operate tabs. It now goes to the same page on all pages in the platform.

#### Fixes

* We fixed the status page link in alert emails.
* We fixed an issue where the Free Apps backups page was very slow or resulted in an error in some cases.
* We fixed an issue where the log viewer for Free Apps did not escape HTML, so if the application logged plain HTML, it was interpreted in the browser.
* We fixed an issue where simultaneous snapshot restore jobs from the same environment to two others could lock one of the environments.

### March 20, 2017

#### Fixes

* The Deploy / Operate sections in the Platform Portal were broken on Internet Explorer 11 due to widget incompatibility, introduced in the previous release. This was already hot-patched in production on March 16.

### March 13, 2017

#### Fixes

* Clicking **Operate -> Backups** resulted in errors for a Free App. This has been fixed.

### March 10, 2017

#### Improvements

* We introduced a new setting in **Node Security**, you can now configure **Monitoring Permissions** separately from **Transport Permissions**. Immediately after this change, we granted all users that had **Transport Permissions** on an environment the **Monitoring Permissions** there as well. From now on, a **Technical Contact** can configure these settings for everyone in the team separately. While we introduced this setting, we revisited the layout of the **Node Security** screen, you now have a simpler interface to change the permissions for each environment.

### February 20, 2017

#### Improvements

* We removed static information from the log lines in Mendix Cloud v3. Every line before contained `tr10000` and `127.0.0.1`. We removed these fields as they were useless.
