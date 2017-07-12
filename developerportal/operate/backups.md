---
title: "Backups"
space: "Developer Portal"
category: "Operate"
description: "This page describes the Backups page of the Developer Portal."
tags: ["Operate","App","Developer Portal","Backup"]
---

## 1 Nightly Backups 

The pruning schedule applies to nightly backups and backups initiated by users. If you want to keep a backup for longer than scheduled, you will have to download it.

The following backups are retained:

* Last two weeks: every day
* Last three months: every Sunday
* Last year: every first Sunday of the month

The start time of the backup creation depends on the region and the Mendix Cloud version:

| Europe |  UTC (UTC) | CET (CET) |
| --- | --- | --- |
| Cloud v3 | 22:00 | 00:00 |
| Cloud v4 | 19:00 | 21:00 |

| US East |  UTC (UTC) | EST (EST) |
| --- | --- | --- |
| Cloud v3 | 05:00 | 01:00 |
| Cloud v4 | 01:00 | 21:00 |

| Asia Pacific |  UTC (UTC) | JST (JST) |
| --- | --- | --- |
| Cloud v4 | 16:00 | 01:00 |

## 2 Backups

The **Backups** page under the **Operate** category presents options for managing your backups. These are described below.

### 2.1 Create a Backup

This will automatically generate a backup from your application data.

### 2.2 Upload Data

You must stop the application before executing this process. This functionality is used to transfer data from your local or on-premises application to the cloud environment. This will not add a backup to the backup list but directly update the application with the newly uploaded data. Your environment will be cleared completely. The deployment package, uploaded files, and database will be removed. If you are uploading data to the production environment, any published app services will be unpublished.

You can upload two types of data:

* **Database**
* **Uploaded files** (*zip* or *tar.gz*)

### 2.3 Restore a Backup

You can choose the environment to which you want to restore the backup.

If you restore a backup that was originally deployed on an older Modeler version, you will get a warning. You can still restore the backup, but you have to deploy the older model later on. 

### 2.4 Download a Backup

These are the options:

* **Full backup**
* **Uploaded files**
* **Database**

## 3 Backup Details

When you click **Details**, you can view the following details:

* **Status** – the status of the backup
  * Backups can have the status of **Queued**, **Running**, **Failed**, and **Completed**
* **Created by** – the name of the person who created the backup
  * Automated system backups are named **Nightly**
* **Date** – the creation date of the backup
* **Expires on** – the date on which the backup will be removed from the system
* **Model version** – the version of the deployment package used during backup creation
* **Comment** – a specific comment added to the backup

## 4 Related Content

* [Alerts](/developerportal/operate/monitoring-application-health)
* [Logs](/developerportal/operate/logs)
* [Metrics](/developerportal/operate/metrics)
* [Operate](/developerportal/operate)
