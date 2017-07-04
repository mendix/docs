---
title: "Backups"
space: "Developer Portal"
category: "Operate"
description: "This page describes the Backups page of the Developer Portal."
tags: ["Operate","App","Developer Portal","Backup"]
---

## 1 Automatic Backups 

This pruning schedule applies to nightly backups and backups initiated by users. If you want to keep a backup for longer than scheduled, you will have to download it.

The following backups are retained:

*   Nightly Backups: maximum 2 weeks history (counting from yesterday)
*   Sunday Backups: maximum 3 months history (counting from yesterday)
*   Monthly Backups (1st Sunday of each month): maximum 1 year history

The starttime of the backup creation depends on the region and the Mendix Cloud version:

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

On the **Backups** page under the **Operate** category, you have the following options to manage your backups:

*   Create a backup
*   Upload data
*   Restore a backup
*   Download a backup

## 3 Create a backup

This will automatically generate a backup from your application data.

## 4 Upload data

You must stop the application before executing this process. This functionality is used to transfer data from your local or on-premises application to the cloud environment. This will not add a backup to the backup list but directly update the application with the newly uploaded data. Your environment will be cleared completely. The Deployment Package, Uploaded Files and Database will be removed. If you are uploading data to the production environment, any published AppServices will be unpublished.

You can upload to types of data:

*   Database
*   Uploaded files - zip or tar.gz

## 5 Restore a backup

You can choose the environment you want to restore the backup to.
If you restore a backup that was originally deployed on an older model version, you will get a warning. You can still restore the backup but you have to deploy the older model later on. 

## 6 Download a backup

*   Full backup
*   Uploaded files
*   Database

## 7 Backup details

If you click on **Details** you can view the following information:

*   Status: The status of this backup. Backup have the status ‘Queued’ of ‘Running’. If not the backup has Failed or is Completed.
*   Created by: The name of the person who created the backup. Automated system backups are named ‘Nightly’.
*   Date: Creation date of the backup.
*   Expires on: The date on which the backup will be removed from the system.
*   Model version: used version of the Deployment Package during backup creation.
*   Comment: add a specific comment to this backup.

## 8 Related Content

*   [Alerts](/developerportal/operate/monitoring-application-health)
*   [Logs](/developerportal/operate/logs)
*   [Metrics](/developerportal/operate/metrics)
*   [Operate](/developerportal/operate)
