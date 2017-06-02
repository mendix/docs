---
title: "How to Migrate to Mendix Cloud v4"
space: "General How-To's"
category: "Mendix Cloud"
---

## 1 Introduction

This how-to describes everything about the migration from v3 to v4.

**This how-to will teach you how to do the following:**

*   Migrate your licensed App from Mendix Cloud v3 to v4

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

*   You have an available v4 Cloud Node. To request a licensed v4 Cloud Node, contact your Customer Success Manager (CSM)
*   You are the Technical Contact of both v3 and v4 Cloud Nodes
*   Downloaded a Deployment Package and the data of your v3 Node. See, [How to Download a Backup](/howtogeneral/mendixcloud/how-to-download-a-backup)

## 3 The migration

Follow the instructions below to migrate your App from Mendix Cloud v3 to v4.

### 3.1 Create a new Free App

First, you need to create a new Free App.

<div class="alert alert-info">{% markdown %}

Create a new app in [Developer Portal](https://home.mendix.com) to create a new app without a Sandbox.

{% endmarkdown %}</div>

Learn how to [Create and Deploy Your First App](/howto/getting-started/create-and-deploy-your-first-app).

### 3.2 Link the new Free App to the v4 Node

After creating a Free App, it has to be linked to a node.

Learn how to [Link Your Free App to a Licensed Cloud Node](how-to-link-app-to-node) how-to.

### 3.3 Upload the Deployment Package to the v4 Node

The next step is to transfer the data of the app on Mendix Cloud v3 to the App on Mendix Cloud v4.

Learn [How to Download a Backup](/howtogeneral/mendixcloud/how-to-download-a-backup) of your app on Mendix Cloud v3.
Learn [How to Restore a Backup](/howtogeneral/mendixcloud/how-to-restore-a-backup).

### 3.4 Deploy the Deployment Package to an Environment

Now that the app on Mendix Cloud v4 contains your data, you only have to deploy the deployment package to an evironment and start your app.

<div class="alert alert-warning">{% markdown %}

Before starting your App in Mendix Cloud v4, make sure it has the same configurations as the v3 node. You can find the node settings on the **environment details** page under **Model Options**, **Network**, **Runtime**, and **Maintenance**.

{% endmarkdown %}</div>

Learn how to [Deploy to the Cloud](deploying-to-the-cloud).

### 3.5 Submit a Request to Support to Offboard the V3 Node

Your app is now running in Mendix Cloud v4. If you don't need the Mendix Cloud v3 node, submit a request with [Mendix Support](https://support.mendix.com) to offboard the v3 node.

## 4 FAQ

**What will change for me?**

Nothing right now. We are working with early customers to upgrade. New apps will be launched on Mendix Cloud v4 by default starting from Q1 2017. However, customers that need to stay on v3 because they use VPN can still get new apps on v3 for the foreseeable future.

**Can I upgrade all my apps?**

Your app needs to be on Mendix 6.0 or higher. We also recommend your apps to be built as [12-factor apps](https://12factor.net/). The main change will be for apps that use long-running scheduled events. Our recommendation is to split these up into smaller chunks and use the Amazon SQS connector to spread the work out over multiple instances. Initially, the new platform is only for new applications. We will be starting a migration program in 2017.

**Where will my data be hosted?**

The primary hosting locations will be as follows:

*   Mendix Cloud EU: AWS Frankfurt
*   Mendix Cloud US: AWS North Virginia

The data will always be stored in the same political region. Data in the EU, including backups, will stay within the EU. Data in the US, including backups, will stay within the US.

**What are the limitations?**

Initially, we won't have a mail server. You can use a third-party email provider instead. VPN, which is already deprecated in favor of client certificates, will not be possible in the Mendix Cloud v4. See the [Certificates](/refguide/certificates) documentation for more details.

**Is the Java Security Manager still in place?**

No. In the previous generation we used the Java Security Manager to enforce standardization and to act as an additional security layer. In Cloud Foundry, short lived containers already ensure standardization, and apps are completely isolated from the management network. Therefore, the Java Security Manager will not be enabled on the new environment.

# 5 Related content
*   [Certificates](/refguide/certificates)
*   [Create and Deploy Your First App](/howto/getting-started/create-and-deploy-your-first-app)
*   [How to Download a Backup](/howtogeneral/mendixcloud/how-to-download-a-backup)
*   [How to Link Your Free App to a Licensed Cloud Node](how-to-link-app-to-node)
*   [How to Restore a Backup](/howtogeneral/mendixcloud/how-to-restore-a-backup)
*   [How to Unlink Your Free App from a Sandbox Environment](how-to-link-app-to-node)
