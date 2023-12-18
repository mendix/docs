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

This how-to explains how to migrate your app and its database from a Free App environment to a paid Mendix Basic node. For more information on the Mendix Basic Package, see [Mendix Basic Package](/developerportal/deploy/basic-package/).

You can also see these steps by watching this video:

{{< vidyard "UkYqZGMiP3k1AZGk7PPrjP" >}}

For more information on setting up any environment details as described in the video, see [Environment Details](/developerportal/deploy/environments-details/).

## 2 Prerequisites 

Before starting this how-to, make sure that the following prerequisites are met:

* You have received confirmation that your Basic node is ready
* You are the [Technical Contact](/developerportal/general/app-roles/#technical-contact) of the app
* [Two-factor authentication](/developerportal/deploy/two-factor-authentication/) is set up on your account

## 3 Migrating to Mendix Basic

To migrate your Free App and its database to your Mendix Basic environment, follow the steps in the sections below.

### 3.1 Open your Free App

1. Go to the [Developer Portal](https://sprintr.home.mendix.com). Sign in if necessary.
2. Click the app that you want to migrate to a Basic Node.

### 3.2 Download a Backup{#download-backup}

1. In the [navigation pane](/developerportal/#navigation-pane), click **Backups**.
1. On the backup that you want to download, click **More Options** > **Download**.
1. Make sure **Full Snapshot** is selected, then click **Start** to prepare the download.
1. Once the backup is ready, click **Download**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/download-backup.png" alt="" width=75% >}}

1. Close the **Download Backup** dialog box.

### 3.3 Unlink Your App From Its Node

1. In the navigation pane, click **Environments**.

1. Click **Unlink your app**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/unlink-free-app.png" >}}

    If you see the following message, your app has already been unlinked. In that case, you can skip ahead to [Link Your App to the New Node](#link-app-to-node).

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/link-node.png" >}}

1. In the **Confirmation** pop-up, click **Yes, delete all data and unlink this app**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/confirm-unlink.png" alt="" width=75% >}}

    {{% alert color="info" %}}Before your environment is deleted, you may be asked to authenticate with two-factor authentication.{{% /alert %}}

### 3.4 Link Your App to the New Node{#link-app-to-node}

1. In the banner at the top of the **Environments** page, click **Select a node**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/link-node.png" >}}

2. Click **Use this node** for the node you just licensed. You may have to confirm and authenticate this with two-factor authentication again.

### 3.5 Configure Your Environment

Before your app can be deployed live, you may need to configure your environment details. This is only required if you have some special configurations or you have to specify settings in order for your functionality to work. For example, if your app uses scheduled events or application constants, you can configure them at this stage. For more information about configuring your environment, see [Environment Details](/developerportal/deploy/environments-details/).

### 3.6 Deploy Your App

Now you need to deploy your app! To do so, you will need a deployment package.

1. Create a deployment package as described on the [Creating a Package from the Team Server](/developerportal/deploy/mendix-cloud-deploy/#package-from-team-server) page.
2. Select the deployment package you just created, then click **Deploy** to publish your app to production.

### 3.7 Upload and Restore the Backup

The final step is restoring your data. This must be done after you've deployed your app because this ensures that a database has been provisioned ready to accept your data.

1. Go back to the **Backups** page.

2. Click **Upload Backup**.

3. Select the backup file you downloaded earlier in [Download a Backup](#download-backup), then click **Upload Archive**. The file will be uploaded. Once the upload completes, a backup file is uploaded to your app using the data from your old Free App environment.

4. On the backup you just uploaded, click **More Options** > **Restore**.

5. Confirm the restore by clicking **Restore Backup**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/restore-backup.png" alt="" width=75% >}}

6. Go to the **Environments** page and start your app. Now it is ready for use.
