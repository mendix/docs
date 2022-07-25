---
title: "Migrate a Free App to Mendix Basic"
linktitle: "Free App to Basic Package"
url: /developerportal/deploy/migrate-free-app-to-basic/
weight: 40
description: "Moving an existing Mendix app deployed as a Free App to a Basic Package node"
tags: ["App", "Node", "Developer Portal", "Licensed", "Free App", "Upgrade", "Basic Package"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

This how-to will teach you how to migrate your app and its database from a Free App environment to a paid Mendix Basic node. For more information on the Mendix Basic Package, see [Mendix Basic Package](/developerportal/deploy/basic-package/).

You can also see these steps by watching this video:

{{< vidyard "UkYqZGMiP3k1AZGk7PPrjP" >}}

See [Environment Details](/developerportal/deploy/environments-details/) for more information on setting up any environment details as described in the video.

## 2 Prerequisites 

Before starting this how-to, make sure you have completed the following prerequisites:

* Make sure you have received confirmation that your Basic node is ready

* Make sure you are the [technical contact](/developerportal/collaborate/app-roles/#technical-contact) of the app

* Ensure that [two-factor authentication](/developerportal/deploy/two-factor-authentication/) is enabled on your account

## 3 Migrating to Mendix Basic

To migrate your Free App and its database to your Mendix Basic environment, follow the steps in the sections below.

### 3.1 Open your Free App

1. Go to the [Developer Portal](https://home.mendix.com) and sign in if necessary.

2. Click the app you want to migrate to a Basic Node.

3. Click **Backups** in the menu on the left.

### 3.2 Download a Backup

1. Select the backup that you want to download.

2. Click **Download Backup**.

3. Make sure **Full Snapshot** is selected and click **Start** to prepare the download.

4. Click **Download** when the snapshot is ready.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/download-backup.png" >}}

### 3.3 Unlink your app from its node

1. Close the **Download Backup** pop-up.

2. Click **Environments** in the menu on the left.

3. Click **unlink your app**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/unlink-free-app.png" >}}

    If you see the following message, then your app isn’t linked to a node and you can skip this step:

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/link-node.png" >}}

4. In the **Confirmation** pop-up, click **Yes, delete all data and unlink this app**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/confirm-unlink.png" >}}

    Before your environment is deleted, you may be asked to **authenticate** with two-factor authentication.

### 3.4 Link your app to the new node

1. In the message that now appears on-screen, click **select a node**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/link-node.png" >}}

2. Click **Use this node** for the node that you just licensed.

    You may have to **confirm** and **authenticate** this with **two-factor authentication** again.

### 3.5 Configure Your Environment

Before your app can be deployed live, You might need to configure your environment details. This is only required if you have some special configurations or you have to specify settings in order for your functionality to work. For example, if your app makes use of scheduled events or application constants, you can configure them here. See [Environment Details](/developerportal/deploy/environments-details/) for more information about configuring your environment.

### 3.6 Deploy your app

Now you need to deploy your app! In order to do so, you will need a deployment package.

1. Create a deployment package using Environments methods described on the [deployment package documentation page](/developerportal/deploy/mendix-cloud-deploy/#package-from-team-server).
2. Select the deployment package you just created and click **Deploy** to publish your app to production.

### 3.7 Upload and Restore the Backup

The final step is to restore your data. This must be done after you've deployed your app as this ensures that a database has been provisioned ready to accept your data.

1. Go back to the **Backups** page.

2. Click **Upload Backup**.

3. Select the backup file you downloaded earlier. The file will be uploaded.

    Once done, a backup file is uploaded to your app using the data from your old Free App environment.

4. Select the backup you just uploaded and click **Restore**.

5. Click **Restore Backup**.

Make sure your app is not running before you restore a backup. You can stop your running app on the Environments page.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/restore-backup.png" >}}

Now start your app and it is ready for use.

