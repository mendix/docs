---
title: "Maintenance Windows: Configuration"
title: "Maintenance Windows"
url: /developerportal/deploy/maintenance-windows/
weight: 33
description: "How to configure the maintenance windows for your node environment."
tags: ["Deploy","App","Developer Portal", "maintenance"]
aliases:
    - /mendixcloud/maintenance-windows.html
    - /mendixcloud/maintenance-windows
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

In the Mendix Cloud Professional and Enterprise plans you can configure a weekly time range (*Maintenance Window*) when system maintenance can occur. Whenever Mendix has planned maintenance operations, these will be executed within your preferred time window. Naturally, we will always inform you upfront on any upcoming maintenance operations in accordance with your SLA.

### 1.1 Preferred Maintenance Window

The **Preferred Maintenance Window** is a standard time range in a week where you would prefer system maintenance to occur. This is always shown as **UTC** so don't forget to convert it to your local timezone.

This window will only be used when planned maintenance is being scheduled.

### 1.2 Planned Maintenance

**Planned Maintenance** is a maintenance operation that will be (or has been) carried out. This is shown in local time, together with an offset from UTC.

Where possible, planned maintenance will be carried out within your preferred maintenance window.

Where infrastructure maintenance is needed, it is not always possible to do this within your preferred maintenance window. Infrastructure maintenance uses rolling updates, so multi-instance apps will continue to be available. Only apps with a single instance will see any downtime (~1-2 minutes) during infrastructure maintenance, as the instance will be restarted.

## 2 Prerequisites

To view maintenance windows, you need to have monitor or backup access to your Mendix app. To configure them, you need to have transport rights to it. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).

## 3 Configuring Maintenance for Your Application

{{% alert color="warning" %}}
Maintenance windows and planned maintenance are defined in UTC time format. When selecting a time period, remember to convert to UTC from your local time.
{{% /alert %}}

Follow the instructions below to configure a maintenance window:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com).

2. Go to the **Environments** page for your app.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/maintenance-windows/maintenance1.png" >}}

3. Click **Details** for the environment you want to configure:

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/maintenance-windows/maintenance2.png" >}}

4. Go to the **Maintenance** tab:

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/maintenance-windows/maintenance.png" >}}
    
5. Click **Change** to modify the preferred maintenance window of your environment. Transport rights for this environment are required.

6. Choose one of the maintenance windows suggested.

7. Click **Save** to confirm your new maintenance window.

{{% alert color="info" %}}
If planned maintenance is already scheduled for the current week it will be moved to the new planned maintenance window if this is still in the same week. However, if you move your maintenance window to before the current day and time the planned maintenance window will not be moved.

For example: imagine today is Tuesday, your maintenance window is currently Thursday, and there is planned maintenance for Thursday this week.

* If you change the maintenance window to Friday, the planned maintenance will move to Friday as it can still be done this week.
* If you change the maintenance window to Monday, the planned maintenance remains on Thursday as it needs to be done this week and your next maintenance window is now next week.
{{% /alert %}}

## 4 Read More

* [App Roles](/developerportal/collaborate/app-roles/)
* [Node Permissions](/developerportal/deploy/node-permissions/) 
