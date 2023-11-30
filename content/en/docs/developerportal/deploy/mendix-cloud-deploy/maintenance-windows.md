---
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

In Mendix Cloud Professional and Enterprise plans, you can set a preferred maintenance window. In other words, you can specify a weekly time range for system maintenance. Then, whenever Mendix has planned maintenance operations, they are run within your preferred maintenance window.

### 1.1 Preferred Maintenance Window

The preferred maintenance window is a time range that you can set to specify what time and day of the week you prefer for system maintenance. For example, you could set the following maintenance window: Friday 12:00-15:00 UTC.

{{% alert color="info" %}}The preferred maintenance window is always shown in Coordinated Universal Time (UTC); don't forget to convert it to your local time zone.{{% /alert %}}

The preferred maintenance window is used only when planned maintenance is scheduled. Mendix will always inform you about any upcoming maintenance operations in accordance with your SLA.

### 1.2 Planned Maintenance

Planned maintenance is a maintenance operation that will be (or has been) carried out. It is shown in local time, with the offset from Coordinated Universal Time noted. For example, if you are in a time zone two hours ahead of Coordinated Universal Time, you might see the following planned maintenance message: "Maintenance will be executed between Fri 09/08/2023, 14:00 +0200 and Fri 09/08/2023, 17:00 +0200."

Whenever possible, planned maintenance is carried out within your preferred maintenance window.

{{% alert color="info" %}}Infrastructure maintenance uses rolling updates, so this type of maintenance may occur outside of your preferred maintenance window. During infrastructure maintenance, multi-instance apps continue to be available. However, apps with a single instance see brief downtime (~1-2 minutes) because the instance needs to be restarted.{{% /alert %}}

## 2 Prerequisites

To view maintenance windows, you need to have access to monitor or back up your Mendix app. To configure maintenance windows, you need to have transport rights to your app. For details on how to configure access, see [Node Permissions](/developerportal/deploy/node-permissions/).

## 3 Configuring Maintenance for Your Application {#configuring}

{{% alert color="warning" %}}
Maintenance windows and planned maintenance are defined in Coordinated Universal Time. When selecting a time period, remember to convert to Coordinated Universal Time from your local time.
{{% /alert %}}

Follow the instructions below to configure a maintenance window.

1. Go to the [Developer Portal](http://sprintr.home.mendix.com).

2. Go to the **Environments** page for your app.

3. Click the **Details** icon on the environment that you want to configure.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/maintenance-windows/environment-details.png" alt="" >}}

4. Go to the **Maintenance** tab.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/maintenance-windows/maintenance.png" alt="" >}}
    
5. Click **Change** to modify the preferred maintenance window of your environment. To modify the window, you must have [transport rights](/developerportal/deploy/node-permissions/#transport-rights) for the environment.

6. Choose one of the maintenance windows from the drop-down menu.

7. Click **Save** to confirm your new preferred maintenance window.

### 3.1 Configuring Maintenance Window in a Week with Planned Maintenance

If planned maintenance is already scheduled for the current week, it will be completed within the current week. So, if you move your maintenance window to before the current time and day of the week, the current week's planned maintenance will not be rescheduled. If you move your maintenance window to after the current time and day of the week, the week's planned maintenance will be rescheduled to your maintenance window.

For example, consider this scenario: today is Tuesday, your maintenance window is currently Thursday, and there is planned maintenance for Thursday this week.

* If you change the maintenance window to Friday, the planned maintenance will move to Friday. This is because the maintenance can still be completed within the week.
* If you change the maintenance window to Monday, the planned maintenance remains on Thursday. This is because the maintenance needs to be done within the week, and your next maintenance window is next week.

## 4 Read More

* [App Roles](/developerportal/general/app-roles/)
