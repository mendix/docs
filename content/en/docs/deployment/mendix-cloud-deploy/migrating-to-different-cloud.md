---
title: "Migrate to a Different Cloud Node"
linktitle: "Migrate Between Nodes"
url: /developerportal/deploy/migrating-on-public-cloud/
weight: 80
description: "How to migrate your app from one cloud node to another."
aliases:
    - /developerportal/howto/migrating-to-v4.html
    - /developerportal/howto/migrating-to-v4
    - /developerportal/deploy/migrating-to-v4
# Original of diagram is in a powerpoint slide under /static/originals/…
---

## Introduction

This document explains how to migrate your licensed app from one cloud node to another. There are a couple of reasons you may wish to move your app to a different node:

* You want to change the region where your app is hosted. Mendix Cloud regularly opens [new regions](/developerportal/deploy/mxcloudv4/#cloud-data-regions), and you may find that another region is a better fit for your app. In this case, you can create a node in the region of your choosing and then migrate your app to this target node.
* You want to switch from the public Mendix Cloud to Mendix Cloud Dedicated (or vice versa). In this case, you can create a node in the cluster of your choosing, and then migrate your app to this target node.

## Migration Considerations

{{% alert color="warning" %}}
Do not upgrade your runtime version at the same time that you migrate your app. This is because potential errors from upgrading the runtime version can be incorrectly ascribed to a failed migration. If you choose to upgrade your runtime version at the same time as migrating your app, Mendix Support will not be able to assist you.<br><br>If you need to upgrade your runtime version, ensure that your upgraded version is fully tested and ready before you start the migration process.
{{% /alert %}}

When migrating your app, keep the following considerations in mind:

* If you use a mail server from your app, you need to use a third-party email provider. For more information, see [Sending Email](/developerportal/deploy/sending-email/).
* If you use an FTP server in your app, you need to use a third-party FTP provider.
* If you are currently using a VPN to secure your app, you must use one of the recommended methods discussed in [Securing Outgoing Connections from Your Application](/developerportal/deploy/securing-outgoing-connections-from-your-application/) instead.

## Prerequisites

Before following the steps described on this page, make sure that you have met the following prerequisites:

* Ensure that your app is on a [supported version](/releasenotes/studio-pro/lts-mts/) of Mendix. For the best level of support, use a long-term support version.
* Have a licensed cloud node available to use as your target node. For details on how to request a new node, see [Requesting a New Licensed App Node](/support/new-app-node-request-template/#new-node). You can specify the hosting type and region during this app request process.
* Have the [Technical Contact](/developerportal/general/app-roles/#technical-contact) role for both of your cloud nodes.
* Create two new temporary Free Apps without Free App environments. For instructions on unlinking a Free App from its environment, see [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/#unlink).

## Migrating the App

To manually migrate your app to a new node, follow the steps in the sections below. Those steps are summarized in this graphic:

{{< figure src="/attachments/deployment/mendix-cloud-deploy/migrating/migratev4.png" alt="" class="no-border" >}}

### Linking a Temporary Free App to the Target Cloud Node

First, link one of the new temporary apps to the target node.

1. In [Apps](https://sprintr.home.mendix.com), open one of your temporary apps.

2. From the navigation pane, go to the **Environments** page.

3. Click **Select a node**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/migrating/select-a-node.png" class="no-border" >}}

4. Select the target node by clicking **Use this Node**. Link it to your app.

For more information on how to do this, see [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/#licensed-node).

### Copying the Deployment Package and Data from the Source Node to the Target Node

Before migrating, you need to deploy a copy of your source app to the target node. You can then copy the data from the source node to the target node. After copying the data, test the app and correct errors if needed. Repeat this process until all the errors are resolved.

The following steps explain how to do this.

#### Downloading and Uploading the Deployment Package

Download the deployment package of your app hosted in the source node, and upload the deployment package to the app hosted in the target node.

To download a deployment package, follow these steps:

1. Go to the **Environments** page of the source app.

2. Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) > **Details** for a deployment package.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/migrating/deployment-details.png" alt="" class="no-border" >}}

3. In the resulting **MDA Details** dialog box, click **Download**.

To upload the deployment package, follow these steps:

1. Go to the **Environments** page of the app on your target node.

2. In the **Deployment Package Repository** section, click **Upload**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/migrating/upload-package.png" class="no-border" >}}

3. Browse and select the downloaded deployment package from your device.

4. Deploy the uploaded package and confirm that it starts successfully.

5. Stop the app so that you can upload the backup data.

#### Backing Up

{{% alert color="warning" %}}
Before backing up your data as described in this section, you must have already deployed, started, and stopped your app, as described in the steps above. This prepares the environment and ensures that your data is restored to the correct locations.
{{% /alert %}}

Transfer the backup data from the source app to the target app by following these steps:

1. Download a backup from your source app. (For details, see [How to Download a Backup](/developerportal/operate/download-backup/).)

    {{% alert color="info" %}}Mendix recommends downloading copies of all backups that you want to keep. Once you have offboarded the old environment, they will no longer be available.{{% /alert %}}

2. Upload the downloaded backup to your app hosted in the target node (for details, see [How to Restore a Backup](/developerportal/operate/restore-backup/)).

#### Configuring the New App

Before starting your app in the target node, make sure it has the same configuration as the source node. You can find the node settings on the [Environment Details](/developerportal/deploy/environments-details/) page under the **Model Options**, **Network**, **Runtime**, and **Maintenance** tabs.

#### Testing and Repeating

Now that the target node contains your data and is configured, deploy the deployment package to an environment and start your app.

To learn how to do this, see [How to Deploy the App to an Environment](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/).

### Unlinking the App from the Source Node

It is not possible to directly unlink an app from a licensed node. The only way to unlink the app is to connect another app to the licensed node; this unlinks the existing app automatically. To unlink your app, follow these steps:

1. In [Apps](https://sprintr.home.mendix.com), open the second blank app you created (not the one you have linked to the target node).

2. Go to the app's **Environments** page.

3. Click **Select a node**.

4. Select the source node containing your app by clicking **Use this Node**, and link it to your app. This unlinks the app that was deployed to the node, so you can link it to the target node as described in the next section.

For a detailed example of how this works, see the [Exchanging Linked Apps Between Nodes](/developerportal/deploy/licensing-apps/#exchange-apps) section of *Licensing Mendix Cloud Apps*.

### Linking the App to the Target Node

Follow these steps to link the app you detached from the source node, above, to the target node.

{{% alert color="warning" %}}
Make sure you have downloaded the latest backup and deployment package before linking your app to the target node.
{{% /alert %}}

1. In [Apps](https://sprintr.home.mendix.com), open the app that you detached from the source node.

2. Go to the app's **Environments** page.

3. Click **Select a node**.

4. Select the target node by clicking **Use this Node** and linking it to your app. The currently linked (temporary) app will unlink automatically and can be deleted.

For more information, see [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/).

### Changing the App URL

To change the app URL (if you are not using a custom domain), contact [Mendix Support](https://support.mendix.com). You will need to provide the following information:

* **URL** for the new app, which is available from the **Environments** page for the new app
* **URL** for the old app, which is available from the **Environments** page for the old app
* **App ID** for the new app, which is available from the **Settings** page for the new app
* **App ID** for the old app, which is available from the **Settings** page for the old app

### Changing a Custom Domain{#custom-domain}

If you have a custom domain that you want to transfer to your target deployment, keep the following information in mind.

The CNAME configuration in the DNS provider needs to have the following format: `{customdomain}.cname.mendix.net`.

When you start the app on the target node, it can take some time for the DNS servers on the web to register the new target URL and redirect your custom domain name to it. So, if your TTL setting has a duration longer than a few minutes, Mendix recommends speeding up this process. To do so, set the TTL value to 300 seconds. Change this value a few days in advance to ensure the setting is propagated to all DNS servers.

For example, if you have a TTL of 24 hours, it takes 24 hours before the new domain is active in the DNS. Customers who visit the custom domain through the browser will not end up at the target Mendix Cloud environment until 24 hours have passed. So, you should check the TTL value about a week before migration and change it to around 300 seconds (the recommended default value).

{{% alert color="info" %}}
For more information about setting up custom domains, see [Custom Domains](/developerportal/deploy/custom-domains/).
{{% /alert %}}

#### Custom Domain Certificates

If you own the private key for your existing custom domain name, you can reuse it for your target deployment. For a TLS certificate you uploaded yourself, you have the private key.

Or, if you made a certificate request to Mendix, the private key is stored in the Mendix Secure Keystore. In that case, ask Mendix Support to arrange for the certificate to be migrated to the target node.

The two custom domain certificate options are shown below:

{{< figure src="/attachments/deployment/mendix-cloud-deploy/migrating/tls-certificates.png" alt="" width=75% >}}

### Offboarding the Source Node

If everything works correctly after the migration, submit a request to [Mendix Support](https://support.mendix.com) to offboard the old node.

{{% alert color="warning" %}}
After your node is offboarded, it will no longer be available. Before asking for your node to be offboarded, ensure that you have downloaded any backups or other information that you need from the node.
{{% /alert %}}

## Read More

* [Certificates](/developerportal/deploy/certificates/)
* [Custom Domains](/developerportal/deploy/custom-domains/)
* [Mendix Cloud: Deploy](/developerportal/deploy/mendix-cloud-deploy/)
* [How to Download a Backup](/developerportal/operate/download-backup/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [How to Restore a Backup](/developerportal/operate/restore-backup/)
