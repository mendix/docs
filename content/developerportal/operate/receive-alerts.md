---
title: "Receive Environment Status Alerts"
parent: "monitoring-application-health"
#menu_order: 180
description: "Describes how to receive environment status alerts."
tags: ["Technical Contact","Settings","Alerts","Developer Portal"]
---

## 1 Introduction

You can manage the email alerts for each environment without the Technical Contact having to switch on the **Receive alerts** node permission.

You can switch the alerts on and off for each environment to which you are entitled.

**This how-to will teach you how to do the following:**

* Switch alerts on and off for separate environments

## 2 Prerequisites

Before starting this how-to, make sure you have completed the prerequisites described below:

* You need an **Application Operator**, **Business Engineer**, or **Scrum Master** role
* In the case that a Company Admin has defined a new App Team role, that role must have the App Team **Edit** permission for **Monitor**    
    
## 3 Receive Alerts

There are two ways to start receiving alerts:

* The Technical Contact can grant you the **Receive Alerts** permission in **Node Permissions**
* You can click the check box of **Email Alerts** on the **Alerts** page

### 3.1 Node Permissions  

The Technical Contact can grant you the **Receive Alerts** permission by following these steps:

1. Go to the [Developer Portal](http://home.mendix.com).
2. Click **Apps** in the top navigation panel.
3.  Click **My Apps** and select **Nodes**.

    ![](attachments/receive-alerts/myapps.png)

4. Open the node by clicking **Details**.
5.  Click **Security** under the **Settings** category.

    ![](attachments/receive-alerts/settings.png)

6.  Select the check box below **Receive Alerts**. It is possible to set this permission separately for each environment. The changes will be automatically saved.

    ![](attachments/receive-alerts/receive-alerts.png)

### 3.2 Alerts Page

You can manage the alerts by yourself, follow these steps:

1. Go to the [Developer Portal](http://home.mendix.com).
2. Click **Apps** in the top navigation panel.
3. Click **My Apps** and select **Nodes**.
4. Open the node by clicking **Details**.
5.  Click **Alerts** under the **Operate** category. 

    ![](attachments/receive-alerts/operate.png)

6. Select the check box of **Email Alerts**.  It is possible to set this option separately for each environment. The changes will be automatically saved.

    ![](attachments/receive-alerts/email-alerts.png)

## 4 Read More

* [Alerts](monitoring-application-health)
* [Application Trends in Mendix Cloud v3](trends)
* [Application Trends in Mendix Cloud v4](trends-v4)
* [How to Manage Company & App Roles](/developerportal/company-app-roles/manage-roles)
* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy)
* [Mendix Cloud v4](/developerportal/deploy/mxcloudv4)
* [Company & App Roles](/developerportal/company-app-roles/index)
* [Node Permissions](/developerportal/deploy/node-permissions) 
* [Technical Contact](/developerportal/company-app-roles/technical-contact)
