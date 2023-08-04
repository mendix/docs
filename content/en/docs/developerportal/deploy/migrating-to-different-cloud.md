---
title: "Migrate to a Different Public Cloud Datacenter"
url: /developerportal/deploy/migrating-on-public-cloud/
weight: 10
description: "How to migrate your app from one Mendix Public Cloud datacenter to another."
tags: ["App","Migrate","Developer Portal","public cloud","Node"]
aliases:
    - /developerportal/howto/migrating-to-v4.html
    - /developerportal/howto/migrating-to-v4
    - /developerportal/deploy/migrating-to-v4
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

This document explains how to migrate your licensed app from one Mendix public cloud datacenter to another.

## 2 Migration considerations

{{% alert color="warning" %}}
Do not upgrade your runtime version at the same time as migrating your app. This is because potential errors from upgrading the runtime version can be incorrectly ascribed to a failed migration. If you do choose to upgrade your runtime version at the same time as migrating your app, Mendix Support will not be able to assist you.

If you need to upgrade your runtime version, ensure that it is fully tested and ready before attempting to migrate.
{{% /alert %}}

You will need to take the following into account when migrating your app:

* If you are using Mendix 7, you might want to split long-running scheduled events into smaller chunks, using a queueing system like the Amazon SQS connector to spread the work out over multiple instances
* If you use a mail server from your app, you will need to use a third-party email provider – for more information, see [Sending Email](/developerportal/deploy/sending-email/)
* If you use an FTP server in your app, you will need to use a third-party FTP provider
* If you are currently using a VPN to secure your app, you will have to use one of the recommended methods discussed in [Securing Outgoing Connections from Your Application](/developerportal/deploy/securing-outgoing-connections-from-your-application/) instead

## 3 Prerequisites

* Ensure that your app is on a supported version of Mendix, Mendix version 7.0 and above. For the best level of support, we recommend that you use version 7.23 which is the [long term support](/releasenotes/studio-pro/lts-mts/) version of Mendix version 7.
* Have a [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) node available (to request a licensed Cloud Node, request one through the [Request New App Node](https://newnode.mendix.com/) app)
* Have the [Technical Contact](/developerportal/general/app-roles/#technical-contact) role for both your cloud nodes
* Create two new temporary Free Apps without Free App environments – instructions for unlinking a Free App from its environment are here: [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/#unlink)

## 4 Migrating the App

To manually migrate your app to a different node in the Mendix Cloud, follow the steps in the sections below.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/mxcloudv4/migrating-to-v4/migratev4.png" >}}

### 4.1 Linking the New Free App to the Target Cloud Node

First, link one of the new temporary apps to the target node.

1. In the [Developer Portal](http://sprintr.home.mendix.com), click **Apps** and select one of your temporary apps.

2. Once you are in the app, go to the **Environments** tab in the left menu.

3. Click **select a node**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/mxcloudv4/migrating-to-v4/select-a-node.png" >}}

4. Select the target node by clicking **Use this Node** and link it to your app.

For more information on how to do this, see [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/#licensed-node).

### 4.2 Copying the Deployment Package and Data from the Source Node to the Target Node

Before migrating, you need to deploy a copy of your app to the target node. You can then copy the data from the source node to the target node. After copying the data, you should test the app, and correct errors if needed. Repeat this until all the errors are solved.

The following steps explain how to do this.

#### 4.2.1 Downloading and Uploading the Deployment Package

Download the deployment package of your app hosted in the source node and upload the deployment package to the app hosted in the target node.

To download a deployment package, follow these steps:

1. Go to **Environments** of the source app.

2. Click **Details** for a **Deployment Package**.

3. Click **Download Package**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/mxcloudv4/migrating-to-v4/download-package.png" >}}

To upload the deployment package, follow these steps:

1. Go to **Environments** of the target App.

2. Below the **Deployment Package Repository**, click **Upload**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/mxcloudv4/migrating-to-v4/upload-package.png" >}}

3. Browse and select the downloaded deployment package from your device.

4. Deploy the uploaded package and ensure that it starts.

5. Stop the app so that you can upload the backup data.

#### 4.2.2 Backing Up

{{% alert color="warning" %}}
Ensure you have performed the last two steps in the previous section to deploy your deployment package before continuing. Making a deployment prepares the environment and ensures your data is restored to the correct locations.
{{% /alert %}}

Transfer the backup data from the source app to the target app by following these steps:

1. Download a backup from your source app (for details, see [How to Download a Backup](/developerportal/operate/download-backup/)).

    {{% alert color="info" %}}It is recommended that you download copies of all backups that you want to keep. Once you have offboarded the old environment, they will no longer be available.{{% /alert %}}

2. Upload the downloaded backup to your app hosted in the target node (for details, see [How to Restore a Backup](/developerportal/operate/restore-backup/)).

#### 4.2.3 Configuring the New App

Before starting your app in the target node, make sure it has the same configuration as the source node. You can find the node settings on the [Environment Details](/developerportal/deploy/environments-details/) page under **Model Options**, **Network**, **Runtime**, and **Maintenance**.

#### 4.2.4 Testing and Repeating

Now that the target app contains your data and is configured, deploy the deployment package to an environment and start your app.

To learn how to do this, see [How to Deploy the App to an Environment](/developerportal/deploy/mendix-cloud-deploy/#deploy-the-app-to-an-environment).

### 4.3 Unlink the App from the Source Node

It is not possible to explicitly unlink an app from a licensed node. The only way to do this is to connect another app to the licensed node; this will unlink the existing app automatically. To do this, perform the following steps.

1. In the [Developer Portal](http://sprintr.home.mendix.com), go to **Apps** and select the second blank app you created (not the one you have linked to the target node).

2. Once you are in the app, go to the **Environments** tab in the left menu.

3. Click **select a node**.

4. Select the source node containing your app by clicking **Use this Node**, and link it to your app. Your app which is currently deployed to this node will be unlinked automatically and you can now link it to the target node.

A more detailed example of how this works given in the [Exchanging Linked Apps Between Nodes](/developerportal/deploy/licensing-apps/#exchange-apps) section of *Licensing Mendix Cloud Apps*.

### 4.4 Linking the App to the Target Node

Follow these steps to link the app you detached from the source node, above, to the target node:

{{% alert color="warning" %}}
Make sure you have downloaded the latest backup and deployment package before linking your app to the target node.
{{% /alert %}}

1. In the [Developer Portal](http://sprintr.home.mendix.com), go to **Apps** and select the app that has been detached from the source node.

2. Once you are in the app, go to the **Environments** tab in the left menu.

3. Click **select a node**.

4. Select the target node by clicking **Use this Node** and link it to your app. The currently linked (temporary) app will be unlinked automatically. The temporary app can be deleted.

For more information, see [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/).

### 4.5 Changing the App URL

To change the App URL (if you are not using a custom domain) you will need to contact [Mendix Support](https://support.mendix.com). You will need to provide the following information:

* **URL** for the new app, which is available from the *Environments* page for the new app
* **URL** for the old app, which is available from the *Environments* page for the old app
* **App ID** for the new app, which is available from the *General* page for the new app
* **App ID** for the old app, which is available from the *General* page for the old app

### 4.6 Changing a Custom Domain{#custom-domain}

If you have a custom domain which you want to transfer to your target deployment, you will need to bear the following information in mind.

* The CNAME configuration in the DNS provider needs to have the following format: `{customdomain}.cname.mendix.net`
* If you own the private key for your existing custom domain name, you can reuse it for your target deployment
    * For a TLS certificate you uploaded yourself, you will have the private key
    * If you made a certificate request to Mendix, the private key will be stored in the Mendix Secure Keystore and you will need to ask Mendix Support to arrange for the certificate to be migrated to the target node

        The two certificate request options are shown below:
        {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/mxcloudv4/migrating-to-v4/tls-certificates.png" >}}

* When you start the app on the target node, it can take some time for the DNS servers on the web to register the new target URL and redirect your custom domain name to it — therefore you must set the TTL value to 300 seconds to speed up this process, if your TTL setting has a longer duration. This should be done some days in advance to ensure the setting is propagated to all DNS servers.

    For example, if you have a TTL of 24 hours, it will take 24 hours before the new domain will be active in the DNS. Customers who visit the custom domain through the browser will not end up at the target Mendix Cloud environment until 24 hours have passed. You should therefore check the TTL value a week or so before migration and change it to around 300 seconds (this is the default value we recommend).

You can find further information about setting up custom domains in [Custom Domains](/developerportal/deploy/custom-domains/).

### 4.7 Offboarding the Source Node

If everything works correctly after the migration, submit a request to [Mendix Support](https://support.mendix.com) to offboard the old node. This means that your previous node will no longer be available.

{{% alert color="warning" %}}
After your node is offboarded, it will no longer be accessible. Ensure that you have downloaded any backups or other information that you need from the node before asking for it to be offboarded.
{{% /alert %}}

## 5 Read More

* [Certificates](/developerportal/deploy/certificates/)
* [Custom Domains](/developerportal/deploy/custom-domains/)
* [Mendix Cloud: Deploy](/developerportal/deploy/mendix-cloud-deploy/)
* [How to Download a Backup](/developerportal/operate/download-backup/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [How to Restore a Backup](/developerportal/operate/restore-backup/)
