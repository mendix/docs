---
title: "Operations"
description: "The day-to-day operation of an app from the Operate category of the Developer Portal. This is mainly useful for apps running in the Mendix Cloud."
tags: ["Operate", "App", "Developer Portal", "Metrics", "Alerts", "Logs", "Backups", "Mendix Cloud", "v3", "v4"]
---

## 1 Introduction

When you have created your app, it is important to be able to manage it. The **Operate** section of the Developer Portal allows you to look at the app's performance and to ensure that data is backed up and can be restored under your control.

Access to operations information is divided into four pages:

![](attachments/operate.png)

{{% alert type="info" %}}
Metrics, alerts, and logs are not available for Free Apps running in the Mendix Cloud, and you cannot make manual backups of Free Apps.
{{% /alert %}}

## 2 Operations Pages

The four operations pages are described below.

### 2.1 Metrics

On this page you can monitor the performance and health of your app in all environments where it is deployed.

For details of the information available for licensed apps running in the Mendix cloud, see [Metrics](metrics).

If your app is deployed to SAP Cloud Platform or IBM Cloud, this page will give you the option to go to the platform where your app is deployed. Here you will be able to find similar information about the performance and health of your app.

You can also use a third-party service, such as Datadog, to assist you in monitoring your app. For more information, see [Datadog for v4 Mendix Cloud](datadog-metrics).

### 2.2 Alerts

On this page you can see the health of your app in all environments where it is deployed. You can also manage which environments will send you alerts.

For details of the information available for licensed apps running in the Mendix cloud, see [Alerts](monitoring-application-health).

If your app is deployed to SAP Cloud Platform or IBM Cloud, this page will give you the option to go to the platform where your app is deployed. Here you will be able to find similar information about the health of your app.

### 2.3 Logs

On this page you can see and manage your app logs in all environments where the app is deployed.

For details of the logs for licensed apps running in the Mendix Cloud, see [Logs](logs).

If your app is deployed to SAP Cloud Platform or IBM Cloud, this page will give you the option to go to the platform where your app is deployed. Here you will be able to find your app's logs.

### 2.4 Backups

On this page you can see and manage your backups in all environments where your app is deployed.

For details of managing your backups in the Mendix Cloud, see [Backups](backups).

If your app is deployed to SAP Cloud Platform or IBM Cloud, this page will give you the option to go to the platform where your app is deployed. Here you will be able to manage your app's backups.

## 3 Main Documents in This Category

* [Metrics](metrics)
* [Alerts](monitoring-application-health)
* [Logs](logs)
* [Backups](backups)
