---
title: "Audit Logs"
url: /control-center/audit-logs/
description: "Describes the Audit Logs page in the Mendix Control Center."
weight: 30
beta: true
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

Audit logs provide a record of changes that users and admins make to the system. Audit logs are valuable for a variety of reasons:

* They enable security monitoring and forensic analysis.
* They support compliance with regulatory requirements.
* They help in troubleshooting and problem solving.
* They allow tracking of resource usage and user behavior.

## Audit Logs

The **Audit Logs** tab displays a list of all activities over the past 365 days. Each list entry includes the following details:

* **Date** – The date and time when the activity was logged.
* **Email** – The email of the user who performed the activity.
* **Action** – The activity that was performed.
* **Service** – The name of the service which produced the activity. These are the possible values:

    * Mendix Portal
    * Deployment
    * Control Center
    * Marketplace
    * Compass
    * Portfolio
    * Catalog

* **Description** – A short description of the activity.
* **Outcome** – The status of the activity, which can be one of the following:

    * **Success Action** – The activity was successfully completed as intended.
    * **Warning** – The activity succeeded with a warning. This also includes an explanation of the warning.
    * **Error** – The activity failed with an error, which is usually a data or functionality loss, or an unexpected error.
    * **Success Audit** – A security access attempt was audited and was successful. 
    * **Failure Audit** – A security access attempt was audited and was not successful.

* **Resource Name** – The object that underwent the change.
* **Resource ID** – The unique ID of the resource.
* **Resource Type** – The type of the object that underwent the change, which can be one of the following:

    * **Project**
    * **Environment**
    * **GenAIResource**
    * **User**
    * **ProjectRole**
    * **Portfolio**
    * **MarketplaceComponent**
    * **Story**
    * **Epic**
    * **FeedbackItem**
    * **Backup**
    * **Page**
    * **AppLog**
    * **AccessLog**
    * **Audit Log**
    * **Approval Request**

* **Resource Description** – A description of the resource.
* **Origin Type** – The origin of the log, which can be one of the following:

    * **User** – The logged-in user.
    * **API** – This is displayed if the system cannot determine the logged-in user.
    * **SystemScheduledTask** – This is displayed if the system cannot determine the logged-in user.
    * **MaskedAction** – This is displayed when logs were triggered by Mendix support.

* **Details** – The following information is displayed and can be downloaded for each audit log item:

    * **Log ID** – The unique identifier of the log.
    * **Date** – The date and time when the log was generated.
    * **Owner ID** – The unique identifier of the logged-in user.
    * **Owner ID Type** – The role of the logged-in user.
    * **User Email** – The email address of the user who performed the action that generated the log.
    * **User Name** – The name of the user who performed the action that generated the log.
    * **User ID** – The unique identifier of the user who performed the action that generated the log.
    * **IP Address** – The IP address corresponding to the user who performed the action that generated the log.
    * **Action** – The action that generated the log.
    * **Description** – A detailed description of the activity.
    * **Outcome** – The status of the activity. The possible values are the same as the ones in the main page.
    * **Error Message** – If the activity fails with an error or a warning, this field displays the error message.
    * **Old Value** – The state of the entity prior to the change that generated the log.
    * **New Value** – The state of the entity after the change that generated the log.
    * Resource Details – Mendix records up to four resources, and displays the following information for each:

        * **Name** – The name of the resource that was changed.
        * **ID** – The unique ID of the resource.
        * **Type** – The type of resource that was changed.   
        * **Description** – A description of the resource.

You can use the **Filter** option to only display the audit logs that meet the criteria you are interested in, or you can use the search field to search for a specific log.    
The filter fields only support full search text. As such, if you want to find a specific result, you need to enter its full text. For example, if you want to display all logs associated to the `email@example.com` email address, you need to enter the full `email@example.com` in the filter field.    
**Event Description** is the only field which supports partial text search.

You can search activity logs from the last 90 days. To search through all logs from the last 365 days, you can [download audit logs](#export-logs).    

Logs are stored for 365 days, per the Siemens privacy policy. If you want to store them for longer, [use the API](/apidocs-mxsdk/apidocs/apis-for-audit-logs/) to extract them to your own system.

{{% alert color="info" %}}
When you search audit logs, only the first 100 results are displayed. To retrieve the full results, use the **Export from Selected Date Range** option, and do a local search.
{{% /alert %}}

### Exporting Audit Logs {#export-logs}

You can export audit logs in a CSV format. This is available for all logs, including those that are older than 90 days. You can choose between these options:

* **Export from Selected Date Range** – Select the timeframe for which you want to export logs.
* **Export All** – Export all logs.

Once the logs are ready for export, you are notified via email, and a download link is displayed on the [Downloads](#downloads) tab.

## Downloads {#downloads}

When you export audit logs, a download link is displayed on this tab once the export CSV is ready for download. The download link is valid for seven days. These are the details available on this tab:

* **Submitted on** – The date and time when the export request was made.
* **Requester** – The user who requested the export.
* **Expires in** – The number of days that the exported CSV is available for download.
* **Status** – The status of the CSV generation. Once the CSV export is fully generated, the status becomes **Completed**.
* **Time Frame of Export** – The time range for which the export was requested.
* **Download** – This link is displayed if the export CSV is ready for download.

## Retrieving Audit Logs via API

You can use the [Audit Logging API](/apidocs-mxsdk/apidocs/apis-for-audit-logs/) to integrate with security information and event management tools. That way, you can manage all audit logs from all systems through one single central tool.
