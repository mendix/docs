---
title: "Maintenance Windows"
url: /developerportal/deploy/maintenance-windows/
weight: 80
description: "How to configure the maintenance windows for your node environment."
aliases:
    - /mendixcloud/maintenance-windows.html
    - /mendixcloud/maintenance-windows
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

If you have a licensed app deployed to Mendix Cloud, you can set a preferred maintenance window for each of your app's environments. In other words, you can specify a weekly time range for system maintenance. Then, whenever Mendix has environment maintenance operations planned, they run within your preferred maintenance window.

### Preferred Maintenance Window

The preferred maintenance window is a three-hour time range that you can set to specify what time and day of the week you prefer for system maintenance. For example, you could set the following maintenance window: Friday 12:00-15:00 UTC.

{{% alert color="info" %}}The preferred maintenance window is always shown in Coordinated Universal Time (UTC); don't forget to convert it to your local time zone.{{% /alert %}}

The preferred maintenance window is used only when environment maintenance is scheduled. Mendix will always inform you about any upcoming maintenance operations in accordance with your SLA.

### Environment Maintenance

Environment maintenance is a maintenance operation that will be (or has been) carried out for an application environment running on Mendix Cloud. It is shown in local time, with the offset from Coordinated Universal Time noted. For example, if you are in a time zone two hours ahead of Coordinated Universal Time, you might see the following environment maintenance message: "Maintenance will be executed between Fri 09/08/2023, 14:00 +0200 and Fri 09/08/2023, 17:00 +0200."

Whenever possible, environment maintenance is carried out within your preferred maintenance window.

### Mendix Cloud Maintenance

Mendix Cloud must be updated regularly too. Platform infrastructure maintenance requires an update to an entire Mendix Cloud region at once, so it may occur outside of your preferred maintenance window.

This infrastructure maintenance uses rolling updates, so multi-instance applications continue to be available. However, applications with a single instance see brief downtime (~1-2 minutes) when their instance is restarted.

## Prerequisites

To view maintenance windows, you need to have access to monitor or back up your Mendix app. To configure maintenance windows, you need to have transport rights to your app. For details on how to configure access, see [Node Permissions](/developerportal/deploy/node-permissions/).

## Configuring Maintenance for Your Application {#configuring}

{{% alert color="warning" %}}
Maintenance windows and planned maintenance are defined in Coordinated Universal Time. When selecting a time period, remember to convert to Coordinated Universal Time from your local time.
{{% /alert %}}

Follow the instructions below to configure a maintenance window.

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.

1. Click **Details** ({{% icon name="notes-paper-edit" %}}) on the environment that you want to configure.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/maintenance-windows/environment-details.png" alt="" class="no-border" >}}

1. Go to the **Maintenance** tab.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/maintenance-windows/maintenance.png" alt="" class="no-border" >}}

1. Click **Change** to modify the preferred maintenance window of your environment. To modify the window, you must have [transport rights](/developerportal/deploy/node-permissions/#transport-rights) for the environment.

1. Choose one of the maintenance windows from the drop-down menu.

1. Click **Save** to confirm your new preferred maintenance window.

### Configuring Maintenance Window in a Week with Planned Maintenance

If environment maintenance is already scheduled for the current week, it will be completed within the current week. So, if you move your maintenance window to before the current time and day of the week, the current week's planned maintenance will not be rescheduled. If you move your maintenance window to after the current time and day of the week, the week's planned maintenance will be rescheduled to your maintenance window.

For example, consider this scenario: today is Tuesday, your maintenance window is currently Thursday, and there is planned maintenance for Thursday this week.

* If you change the maintenance window to Friday, the planned maintenance will move to Friday. This is because the maintenance can still be completed within the week.
* If you change the maintenance window to Monday, the planned maintenance remains on Thursday. This is because the maintenance needs to be done within the week, and your next maintenance window is next week.

## Read More

* [App Roles](/developerportal/general/app-roles/)
