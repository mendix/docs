---
title: "How to Migrate to Mendix Cloud v4"
space: "Developer Portal"
category: "How-To's"
description: "This page describes how to migrate your App from a Mendix Cloud v3 node to a Mendix Cloud v4 node."
tags: ["App","Migrate","Developer Portal","v3","v4","Node"]
---

## 1 Introduction

This how-to describes everything about the migration from v3 to v4.

**This how-to will teach you how to do the following:**

*   Migrate your licensed App from Mendix Cloud v3 to v4

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

*   You have an available v4 Cloud Node. To request a licensed v4 Cloud Node, contact your Customer Success Manager (CSM)
*   You are the Technical Contact of both v3 and v4 Cloud Nodes
*   Downloaded a Deployment Package and the data of your v3 Node. See, [How to Download a Backup](how-to-download-a-backup)

## 3 The migration

Follow the instructions below to migrate your App from Mendix Cloud v3 to v4.

### 3.1 Create a new Free App

First, you need to create a new Free App.

<div class="alert alert-info">{% markdown %}

Create a new app in [Developer Portal](https://home.mendix.com) to create a new app without a Sandbox.

{% endmarkdown %}</div>

Learn how to [Create and Deploy Your First App](/howto7/getting-started/create-and-deploy-your-first-app).

### 3.2 Link the new Free App to the v4 Node

After creating a Free App, it has to be linked to a node.

Learn how to [Link Your Free App to a Licensed Cloud Node](how-to-link-app-to-node) how-to.

### 3.3 Upload the Deployment Package to the v4 Node

The next step is to transfer the data of the app on Mendix Cloud v3 to the App on Mendix Cloud v4.

Learn [How to Download a Backup](how-to-download-a-backup) of your app on Mendix Cloud v3.
Learn [How to Restore a Backup](how-to-restore-a-backup).

### 3.4 Deploy the Deployment Package to an Environment

Now that the app on Mendix Cloud v4 contains your data, you only have to deploy the deployment package to an evironment and start your app.

<div class="alert alert-warning">{% markdown %}

Before starting your App in Mendix Cloud v4, make sure it has the same configurations as the v3 node. You can find the node settings on the **environment details** page under **Model Options**, **Network**, **Runtime**, and **Maintenance**.

{% endmarkdown %}</div>

Learn how to [Deploy to the Mendix Cloud](deploying-to-the-cloud).

### 3.5 Submit a Request to Support to Offboard the V3 Node

Your app is now running in Mendix Cloud v4. If you don't need the Mendix Cloud v3 node, submit a request with [Mendix Support](https://support.mendix.com) to offboard the v3 node.

# 4 Related content

*   [Certificates](/refguide/certificates)
*   [Create and Deploy Your First App](/howto/getting-started/create-and-deploy-your-first-app)
*   [How to Configure Custom Domains](custom-domains)
*   [How to Deploy to the Mendix Cloud](deploying-to-the-cloud)
*   [How to Download a Backup](how-to-download-a-backup)
*   [How to Link a Different App to a Cloud Node](how-to-link-a-different-app-to-a-node)
*   [How to Link Your Free App to a Licensed Cloud Node](how-to-link-app-to-node)
*   [How to Restore a Backup](how-to-restore-a-backup)
*   [How to Unlink Your Free App from a Sandbox Environment](how-to-unlink-sandbox)
