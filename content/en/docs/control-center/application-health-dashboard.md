---
title: "Application Health Dashboard"
url: /control-center/application-health-dashboard/
description: "Describes the Application Health Dashboard page in the Mendix Control Center."
weight: 10
no_list: true
---

{{% alert color="info" %}}
This feature is currently in beta. For more information, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

## Introduction

The **Application Health Dashboard** gives an overview of the alert status of the whole application landscape of your company. Here you can see all the alerts of the production environments of the apps deployed on your Mendix Cloud and Mendix Cloud Dedicated.

On the top of the page, you can see the following numbers:

* **Environment down** – This is the number of the environments for which a runtime heartbeat has not been received for over five minutes. 
* **Environments with critical alerts** – This is the number of the environment with critical alerts.
* **Environments with warning alerts** – This is the number of the environments with warning alerts. 

On the list below, apps are ordered in the following order: environments with the most critical alerts are placed at the top, followed by environments with the most warning alerts, and then environments with no alerts. 

You can use the search box to search for an app in the list using the app name or app ID. The list can also be filtered on **Alert Type** and **Alert Level**.

The list shows the following information:

* **App Name** – This is the name of the app. 

* **Environment** – This shows the name of the app's production environment.

* **Latest Alert Date** – This is the date and time the latest alert occurred.

* **Critical** – This shows the number of critical alerts of this production environment.

* **Warnings** – This shows the number of warning alerts of this production environment.

* **Alerts** – This shows the types of the alerts of this production environment.

## Refreshing the Dashboard

The information on the dashboard is retrieved when you open the page. If you leave the page open, the alert data will be automatically refreshed every ten minutes, and newly-deployed production environments will be automatically added to the dashboard every six hours.

You can also manually refresh your alerts using the **Refresh Alerts** button on the upper-right corner of the page. After clicking this button, the alerts of all the environments in your landscape are refreshed. After the refreshing is completed, you need to wait one minute before you can refresh it again.

You can also manually refresh the whole landscape using the **Refresh Environment List** button after you click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) on the upper-right corner of the page. After the refreshing is completed, you need to wait 15 minutes before you can refresh it again.

## Environment Details

If you click an environment from the list, you will see the **Environment details** of this specific production environment. This page shows all the alerts of this environment and the date and time the alerts have occurred. The **Environment details** and the Technical Contact of this environment are also displayed. With this information, you can directly get in contact with the responsible person.

If you click **Go to Cloud Portal** on the upper-right corner of the page, you are taken to the [Environments](/developerportal/deploy/environments/) page of the application in the Mendix Portal. If you have access, you can take action on the alerts here; otherwise you can look up the team members who manage this app and contact them.

The **Environment Details** page also lists the alert information of this specific production environment. In the list, you can see the following details:

* **Alert Type** – This shows the name of the alert type.
* **Status** – This shows the status of the specific alert, indicated by an icon:
    * A critical alert is indicated by a {{% icon name="remove-circle" %}} icon.
    * A warning alert is indicated by a {{% icon name="alert-triangle" %}} icon.
    * An OK alert is indicated by the word **OK**.
* **Timestamp** – This is the date and time this alert occurred.
