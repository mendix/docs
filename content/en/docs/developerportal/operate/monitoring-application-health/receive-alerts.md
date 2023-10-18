---
title: "Receive Environment Status Alerts"
url: /developerportal/operate/receive-alerts/
description: "Describes how to receive environment status alerts."
tags: ["Technical Contact","Settings","Alerts","Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

You can receive alerts for Mendix application environments in two ways; via email or using webhooks. You can find detailed information for both of these options below.

## 2 Email Alerts

There are two ways to manage email alerts for an environment:

* The Technical Contact can grant you the **Receive Alerts** permission in **Node Permissions**
* You can click the checkbox of **Email Alerts** on the **Alerts** page

These options are described below.

### 2.1 Node Permissions  

If you are the Technical Contact for an app, you can grant team members the **Receive Alerts** permission by following these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com).
2. Open the [Switch to menu](/developerportal/#navigation) and select **Cloud**.
3. Open the app by clicking **Environments** under the app name.
4. Click **Details** for the environment for which you want to set up alerts. It is possible to set this permission separately for each environment.
5. Switch to the **Permissions** tab.
6. Select the checkbox below **Receive Alerts** for the user(s) who should receive alerts. 

    The changes will be automatically saved.

    {{< figure src="/attachments/developerportal/operate/monitoring-application-health/receive-alerts/receive-alerts.png" >}}

### 2.2 Alerts Page

You can manage the alerts by yourself. For this you need an **Application Operator**, **Business Engineer**, or **Scrum Master** role. If a [Mendix Admin](/developerportal/control-center/#members) has defined a new team role for you, that role must have **Cloud Access**.

To enable email alerts follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com).
2. Open the [Switch to menu](/developerportal/#navigation) and select **Cloud**.
3. Open the app by clicking **Environments** under the app name.
4. Click **Alerts** in the left-hand menu.
5. Select the environment for which you want to set the alerts from the dropdown at the top of the page. It is possible to set this option separately for each environment.
6. Select the checkbox of **Email Alerts**.  The changes will be automatically saved.

    {{< figure src="/attachments/developerportal/operate/monitoring-application-health/receive-alerts/email-alerts.png" >}}

## 3 Alerts Using Webhooks 

As an alternative to alert emails, you can set a webhook to receive alerts.

Webhooks are set on the application level.

See the [webhooks](/developerportal/deploy/webhooks/) page for more information on webhooks.

### 3.1 Setting Alerts Webhooks

To set a new webhook in the Developer Portal:

1. Go to the Developer Portal and open your app.
1. On the left panel, click **Webhooks**.
1. Click **New Webhook**.
1. Name your webhook and provide the webhook receiver URL and Validation Secret as described in the [Configuring a Webhook](/developerportal/deploy/webhooks/#setting-up) section of *Webhooks*.
1. Choose **Alerts** from **Available Events**.
1. Click **Save**.

After setting a new webhook, the receiver endpoint will start getting alerts when they triggered. 

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
