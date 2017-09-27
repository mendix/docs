---
title: "Migrate to Mendix Cloud v4"
category: "Mendix Cloud"
description: "This page describes how to migrate your App from a Mendix Cloud v3 node to a Mendix Cloud v4 node."
tags: ["App","Migrate","Developer Portal","v3","v4","Node"]
---

## 1 Introduction

This how-to describes everything about the migration from v3 to v4.

**This how-to will teach you how to do the following:**

*   Migrate your licensed App from Mendix Cloud v3 to v4

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

*   You have an available v4 [Mendix Cloud](/deployment/mendixcloud) node. To request a licensed v4 Cloud Node, contact your Customer Success Manager (CSM)
*   You are the [Technical Contact](/developerportal/general/technical-contact) of both v3 and v4 Cloud Nodes

## 3 Test your App on Mendix Cloud v4

Before you migrate your app from cloud v3 to cloud v4, it's recommended to first test the app's behavior on Mendix Cloud v4.

### 3.1 Create a new temporary app

First, create a new temporary Free App without a Sandbox. 
To create a new app, follow these steps:

1. Go to the [Developer Portal](http://home.mendix.com).
2. Click **Create App** in the right-top corner of the screen.

Learn how to [Create and Deploy Your First App](/howto/modeling-basics/create-and-deploy-your-first-app).

### 3.2 Link the new Free App to the v4 Node

After creating a Free App, it has to be linked to a node.

Learn how to [Link Your Free App to a Licensed Cloud Node](/developerportal/howto/how-to-link-app-to-node) how-to.

### 3.3 Download and Upload the Backup

The next step is to transfer the data of the app on Mendix Cloud v3 to the App on Mendix Cloud v4:

1. Download a backup from your App hosted in Mendix Cloud v3. 
Learn [How to Download a Backup](/developerportal/howto/how-to-download-a-backup).
2. Upload the downloaded backup to your App hosted in Mendix Cloud v4. 
Learn [How to Restore a Backup](/developerportal/howto/how-to-restore-a-backup).

### 3.4 Download and Upload the Deployment Package

Now, download the Deployment Package of your app hosted in cloud v3 and upload the Deployment Package to the app hosted in Cloud v4.

To download a Deployment Package, follow these steps:

1. Go to **Environments** of the v3 App.
2. Click **Details** of an **Deployment Package**.
3. Click **Download Package**.

To upload the Deployment Package, follow these steps:

1. Go to **Environments** of the v4 App.
2. Below the **Deployment Package Repository** click **Upload**.
3. Browse and select the downloaded Deployment Package from your device.

### 3.5 Deploy the Deployment Package to an Environment

Now that the app on Mendix Cloud v4 contains your data, you only have to deploy the deployment package to an evironment and start your app.

Learn how to [Deploy the App to an Environment](/developerportal/howto/deploying-to-the-cloud#4-deploy-the-app-to-an-environment).

## 4 Offboard the v3 Node

Your app is now running in Mendix Cloud v4. If everything works correctly, submit a request at [Mendix Support](https://support.mendix.com) to offboard the v3 node. This means that the app will be detached from the node. 
With the node removed, the app will still remain in the [Developer Portal](http://home.mendix.com) as a Free App.

{{% alert type="warning" %}}
Make sure you have downloaded the latest **backup** and **deployment package** before offboarding the node.
{{% /alert %}}

## 5 Link the App to the v4 Node

1.  In the [Developer Portal](http://home.mendix.com), go to **Apps** and select the app that has been detached from the v3 node.
2.  Once you are in the *app*, go to the **'Environments'** tab in the left navigation panel.
3.  Click **Select Node**.
4.  Select the v4 node by clicking **Use this Node** and link it to your *app*. The current linked (temporary) app will be *dislinked automatically*. The temporary app can be deleted.

Learn how to [Link a Different App to a Cloud Node](/developerportal/howto/how-to-link-a-different-app-to-a-node).

## 6 Related content

*   [Certificates](/deployment/mendixcloud/certificates)
*   [Create and Deploy Your First App](/howto/modeling-basics/create-and-deploy-your-first-app)
*   [How to Configure Custom Domains](/developerportal/howto/custom-domains)
*   [How to Deploy to the Mendix Cloud](/developerportal/howto/deploying-to-the-cloud)
*   [How to Download a Backup](/developerportal/howto/how-to-download-a-backup)
*   [How to Link a Different App to a Cloud Node](/developerportal/howto/how-to-link-a-different-app-to-a-node)
*   [How to Link Your Free App to a Licensed Cloud Node](/developerportal/howto/how-to-link-app-to-node)
*   [How to Restore a Backup](/developerportal/howto/how-to-restore-a-backup)
*   [How to Unlink Your Free App from a Sandbox Environment](/developerportal/howto/how-to-unlink-sandbox)
