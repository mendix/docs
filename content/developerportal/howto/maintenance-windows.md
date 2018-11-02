---
title: "Configure Maintenance Windows"
category: "How-To's"
menu_order: 100
description: "This page describes how to configure the maintenance windows for your node environment."
tags: ["Deploy","App","Developer Portal"]
---

In the Mendix Cloud you can define a Maintenance Window for all your applications in the Professional and Enterprise plans.

**After completing this how-to you will know:**

*   How to configure a maintenance window

## 1 Preparation

Before you can start with this how-to, please make sure you have completed the following prerequisites.

*   Have a Mendix Cloud application where you have transport, monitor, or backup access (for more information, see [Security - Node Permissions](/developerportal/settings/node-permissions))

## 2 Maintenance Operations

In the Mendix Cloud you can configure a weekly time range where system maintenance can occur. Whenever we have planned operations, these will be executed within the time window of your preference. Naturally we will always inform you upfront on any upcoming maintenance operations in accordance with your SLA.

### 2.1 Maintenance Window

Your "Preferred Maintenance Windows" is a weekly time range where system maintenance can occur.

### 2.2 Planned Maintenance

"Planned Maintenance" is a maintenance operation that will be executed within your configured maintenance window.

## 3 Configuring the Maintenance Window for your application

1. Go to the [Developer Portal](http://home.mendix.com) and click **Apps** in the top navigation panel.
2. Click **My Apps** and select **Nodes**.

    ![](attachments/general/myapps.png)

3. Select the node that you want to configure by clicking **Details**.
4. Click **Environments** under the **Deploy** category:

    ![](attachments/deploy/deploy-scale.png)    

3. Select the node of the environment that you want to configure:

    ![](attachments/deploy/maintenance1.png)

4. Click **Details** for the environment you want to configure:

    ![](attachments/deploy/maintenance2.png)

5. Go to the **Maintenance** tab:

    ![](attachments/deploy/maintenance.png)

{{% alert type="warning" %}}

Here you can configure your preferred maintenance window. Transport rights for this environment are required. 

{{% /alert %}}

6. Click **Change** to modify the preferred maintenance window of your environment. All windows are defined in UTC time format. Please see the table below for the time in other time zones.

{{% alert type="info" %}}

When a maintenance operation is planned, it will show up under **Planned Maintenance**. By default it will be planned in your preferred maintenance window. You can override the maintenance window of a specific maintenance operation by clicking **Reschedule**.

{{% /alert %}}

## 4 Maintenance Timetable

### 4.1 Daylight Savings Time

| UTC | LA (-07:00) | Boston (-04:00) | UK (+01:00) | NL (+02:00) |
| --- | --- | --- | --- | --- |
| 08:00 - 11:00 | 01:00 - 04:00 | 04:00 - 07:00 | 09:00 - 12:00 | 10:00 - 13:00 |
| 12:00 - 15:00 | 05:00 - 08:00 | 08:00 - 11:00 | 13:00 - 16:00 | 14:00 - 17:00 |
| 19:00 - 22:00 | 12:00 - 15:00 | 15:00 - 18:00 | 20:00 - 23:00 | 21:00 - 00:00 |

### 4.2 Standard Time

| UTC | LA (-08:00) | Boston (-05:00) | UK (+00:00) | NL (+01:00) |
| --- | --- | --- | --- | --- |
| 08:00 - 11:00 | 00:00 - 03:00 | 03:00 - 06:00 | 08:00 - 11:00 | 09:00 - 12:00 |
| 12:00 - 15:00 | 04:00 - 07:00 | 07:00 - 10:00 | 12:00 - 15:00 | 13:00 - 16:00 |
| 19:00 - 22:00 | 11:00 - 14:00 | 14:00 - 17:00 | 19:00 - 22:00 | 20:00 - 23:00 |

## 5 Related Content

* [Alerts](/developerportal/operate/monitoring-application-health)
* [Application Trends in Mendix Cloud v3](/developerportal/operate/trends)
* [Application Trends in Mendix Cloud v4](/developerportal/operate/trends-v4)
* [How to Manage Company & App Roles](/developerportal/general/change-roles)
* [How to Receive Environment Status Alerts](/developerportal/howto/receive-alerts)
* [Mendix Cloud](/deployment/mendixcloud)
* [Mendix Cloud v4 - FAQ](/deployment/mendixcloud/mxcloudv4)
* [Roles Within the Company and Apps](/developerportal/general/company-app-roles)
* [Security - Node Permissions](/developerportal/settings/node-permissions) 
* [Technical Contact](/developerportal/general/technical-contact)
