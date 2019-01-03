---
title: "Maintenance Windows: Configuration"
parent: "mendix-cloud-deploy"
menu_order: 33
description: "How to configure the maintenance windows for your node environment."
tags: ["Deploy","App","Developer Portal", "maintenance"]
---

## 1 Introduction

In the Mendix Cloud Professional and Enterprise plans you can configure a weekly time range (*Maintenance Window*) when system maintenance can occur. Whenever Mendix has planned operations, these will be executed within your preferred time window. Naturally, we will always inform you upfront on any upcoming maintenance operations in accordance with your SLA.

**After completing this how-to you will know:**

*   How to configure a maintenance window

## 2 Prerequisites

Before you can start with this how-to, please make sure you have completed the following:

*   Have a Mendix Cloud application where you have transport, monitor, or backup access (for more information, see [Node Permissions](/developerportal/deploy/node-permissions))

## 3 Configuring the Maintenance Window for your application

1. Go to the [Developer Portal](http://home.mendix.com).

2. Go to the **Environments** page for your app.

    ![](attachments/maintenance-windows/maintenance1.png)

3. Click **Details** for the environment you want to configure:

    ![](attachments/maintenance-windows/maintenance2.png)

4. Go to the **Maintenance** tab:

    ![](attachments/maintenance-windows/maintenance.png)
    
    The **Preferred Maintenance Window** is a weekly time range where system maintenance can occur.

    **Planned Maintenance** is a maintenance operation that will be executed within your configured maintenance window.

5. Click **Change** to modify the preferred maintenance window of your environment. Transport rights for this environment are required. 

    {{% alert type="warning" %}}All windows are defined in UTC time format. Remember to convert to UTC from your local time.{{% /alert %}}

{{% alert type="info" %}}

When a maintenance operation is planned, it will show up under **Planned Maintenance**. By default it will be planned in your preferred maintenance window. You can override the maintenance window of a specific maintenance operation by clicking **Reschedule**.

{{% /alert %}}

## 4 Related Content

* [Alerts](/developerportal/operate/monitoring-application-health)
* [Application Trends in Mendix Cloud v3](/developerportal/operate/trends)
* [Application Trends in Mendix Cloud v4](/developerportal/operate/trends-v4)
* [How to Manage Company & App Roles](/developerportal/company-app-roles/manage-roles)
* [How to Receive Environment Status Alerts](/developerportal/operate/receive-alerts)
* [Mendix Cloud](mendix-cloud-deploy)
* [Mendix Cloud V4](mxcloudv4)
* [Company & App Roles](/developerportal/company-app-roles/index)
* [Node Permissions](/developerportal/deploy/node-permissions) 
* [Technical Contact](/developerportal/company-app-roles/technical-contact)
