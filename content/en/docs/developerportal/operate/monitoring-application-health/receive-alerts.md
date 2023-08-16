---
title: "Receive Environment Status Alerts"
url: /developerportal/operate/receive-alerts/
description: "Describes how to receive environment status alerts."
tags: ["Technical Contact","Settings","Alerts","Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

You can manage the email alerts for each environment without the Technical Contact having to switch on the **Receive alerts** node permission.

You can switch the alerts on and off for each environment to which you are entitled.

This how-to will teach you how to do the following:

* Switch alerts on and off for separate environments

## 2 Prerequisites

Before starting this how-to, make sure you have completed the prerequisites described below:

* You need an **Application Operator**, **Business Engineer**, or **Scrum Master** role
* In the case that a [Mendix Admin](/developerportal/control-center/#members) has defined a new team role, that role must have the team **Edit** permission for **Monitor**    

## 3 Receive Alerts

There are two ways to start receiving alerts:

* The Technical Contact can grant you the **Receive Alerts** permission in **Node Permissions**
* You can click the checkbox of **Email Alerts** on the **Alerts** page

### 3.1 Node Permissions  

The Technical Contact can grant you the **Receive Alerts** permission by following these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com).
2. Open the [Switch to menu](/developerportal/#navigation) and select **Cloud**.
3. Open the node by clicking **Details**.
4. Click **Security** in the left-hand menu.
5. Switch to the **Node Permissions** tab.
6. Select the checkbox below **Receive Alerts**. It is possible to set this permission separately for each environment. The changes will be automatically saved.

    {{< figure src="/attachments/developerportal/operate/monitoring-application-health/receive-alerts/receive-alerts.png" >}}

### 3.2 Alerts Page

You can manage the alerts by yourself, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com).
2. Open the [Switch to menu](/developerportal/#navigation) and select **Cloud**.
3. Open the node by clicking **Details**.
4. Click **Alerts** in the left-hand menu. 
5. Select the checkbox of **Email Alerts**.  It is possible to set this option separately for each environment. The changes will be automatically saved.

    {{< figure src="/attachments/developerportal/operate/monitoring-application-health/receive-alerts/email-alerts.png" >}}

## 4 Issue: Receiving Too Many Alerts

Under some circumstances, a critical alert in one instance of a multi-instance app will cause emails to be sent out constantly. The other instances of your app will continue to run without reporting issues, so it will appear to be working.

If you cannot resolve the issue in the instance reporting the critical error, you will need to restart your app to ensure that all instances are healthy. Otherwise you will continue to receive regular email alerts.

## 5 Read More

* [Alerts](/developerportal/operate/monitoring-application-health/)
* [Trends in the Mendix Cloud](/developerportal/operate/trends-v4/)
* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [About the Mendix Cloud](/developerportal/deploy/mxcloudv4/)
* [App Roles](/developerportal/general/app-roles/)
* [Node Permissions](/developerportal/deploy/node-permissions/) 
* [Technical Contact](/developerportal/general/app-roles/#technical-contact)
