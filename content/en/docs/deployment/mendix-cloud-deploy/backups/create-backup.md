---
title: "Creating a Backup"
url: /developerportal/operate/create-backup/
weight: 10
description: "This page describes how to create a backup."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

This how-to describes creating a backup of a licensed cloud node.

This how-to explains how to do the following:

* Create a backup of a licensed cloud node

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* You have a licensed cloud node. This option is not available for Free Apps.
* You have **Access to Backups** permissions for the node. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).

## Creating a Backup

To create a backup archive of a licensed app, follow these steps:

1. Go to [Apps](https://sprintr.home.mendix.com) and select the app.
1. Click **Backups** in the navigation pane.
1. Select the environment for which you want to create a backup snapshot.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/create-backup/environment.png" width=25% class="no-border" >}}

1. Click **Create Backup**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/backups/create-backup/backupoptions.png" class="no-border" >}}

Once you have created a backup archive, you can download it by clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) > **Download**. For more information, see [Downloading a Backup](/developerportal/operate/download-backup/).

{{% alert color="info" %}}
If you want to restart your environment after creating a backup archive, wait until the backup completes. Tables are locked while the database is in the process of creating a backup, so you may receive a timeout error if you try to start your environment while the backup is being created.
{{% /alert %}}

## Read More

* [How to Deploy to Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [How to Download a Backup](/developerportal/operate/download-backup/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [How to Restore a Backup](/developerportal/operate/restore-backup/)
