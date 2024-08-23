---
title: "Migrate a Free App to Mendix Basic"
linktitle: "Free App to Basic Package"
url: /developerportal/deploy/migrate-free-app-to-basic/
weight: 40
description: "Moving an existing Mendix app deployed as a Free App to a Basic Package node"
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

This how-to explains how to migrate your app and its database from a Free App environment to a paid Mendix Basic node. For more information on the Mendix Basic Package, see [Mendix Basic Package](/developerportal/deploy/basic-package/).

You can also see these steps by watching this video:

{{< vidyard "UkYqZGMiP3k1AZGk7PPrjP" >}}

For more information on setting up any environment details as described in the video, see [Environment Details](/developerportal/deploy/environments-details/).

## Prerequisites 

Before starting this how-to, make sure that the following prerequisites are met:

* You have received confirmation that your Basic node is ready
* You are the [Technical Contact](/developerportal/general/app-roles/#technical-contact) of the app

## Migrating to Mendix Basic

To migrate your Free App and its database to your Mendix Basic environment, follow the steps in the sections below.

### Open your Free App

1. Go to [Apps](https://sprintr.home.mendix.com). Sign in if prompted.
1. Click the app that you want to migrate to a Basic Node.

### Download a Backup{#download-backup}

1. In the [navigation pane](/developerportal/#navigation-pane), click **Backups**.
1. On the backup that you want to download, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) > **Download**.
1. Make sure **Full Snapshot** is selected, then click **Start** to prepare the download.
1. Once the backup is ready, click **Download**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/download-backup.png" alt="" width=75% class="no-border" >}}

1. Close the **Download Backup** dialog box.

### Unlink Your App From Its Node

1. In the navigation pane, click **Environments**.

1. Click **Unlink your app**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/unlink-free-app.png" class="no-border" >}}

    If you see the following message, your app has already been unlinked. In that case, you can skip ahead to [Link Your App to the New Node](#link-app-to-node).

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/link-node.png" class="no-border" >}}

1. In the **Confirmation** pop-up, click **Yes, delete all data and unlink this app**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/confirm-unlink.png" alt="" width=75% class="no-border" >}}

    {{% alert color="info" %}}Before your environment is deleted, you may be prompted to authenticate with [two-factor authentication](/developerportal/deploy/two-factor-authentication/).{{% /alert %}}

### Link Your App to the New Node{#link-app-to-node}

1. In the banner at the top of the **Environments** page, click **Select a node**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/link-node.png" class="no-border" >}}

2. Click **Use this node** for the node you just licensed. You may have to confirm and authenticate this with two-factor authentication again.

### Configure Your Environment

Before your app can be deployed, you may need to configure your environment details. This is only required if you have some special configurations or you have to specify settings in order for your functionality to work. For example, if your app uses scheduled events or application constants, you can configure them at this stage. For more information about configuring your environment, see [Environment Details](/developerportal/deploy/environments-details/).

### Deploy Your App

Now you need to deploy and start your app!

1. Create a deployment package as described in the [Creating a Deployment Package](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/#package-from-team-server).
1. On the deployment package you just created, click **Deploy** ({{% icon name="deploy" %}}) and follow the steps in the resulting wizard, as described in [Deploying the App to an Environment](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/#deploy-the-app-to-an-environment). This publishes your app to the production environment and then starts it.

### Upload and Restore the Backup

The final step is restoring your data. You must do this after you've deployed your app because this ensures that a database has been provisioned and is ready to accept your data.

1. Go to the **Backups** page.

1. Click **Upload Backup**.

1. Select the backup file you downloaded earlier in [Download a Backup](#download-backup), then click **Upload Archive**. The file will be uploaded. Once the upload completes, a backup file is uploaded to your app using the data from your old Free App environment.

1. On the backup you just uploaded, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) > **Restore**.

1. Confirm the restore by clicking **Restore Backup**.

    {{% alert color="info" %}}If your app is running, you will be prompted to stop the application before continuing the restoration process. If prompted, stop your application by clicking **Stop application**. Then click **Restore Backup** again.{{% /alert %}}

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/migrate-free-app-to-basic/restore-backup.png" alt="" width=75% class="no-border" >}}

1. You will see a dialog stating that your backup restore has been scheduled and will be completed shortly. Click **Okay**.

1. Go to the **Environments** page, click **Environment Details** ({{% icon name="notes-paper-edit" %}}) on the production environment, and start your application. Now it is ready for use.
