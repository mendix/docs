---
title: "Licensing Mendix Cloud Apps"
url: /developerportal/deploy/licensing-apps/
weight: 20
description: "Licensing apps for production by linking them to a licensed cloud node."
aliases:
    - /developerportal/howto/how-to-link-a-different-app-to-a-node.html
    - /developerportal/howto/how-to-link-app-to-node.html
    - /mendixcloud/how-to-link-app-to-node.html
    - /developerportal/howto/how-to-link-a-different-app-to-a-node
    - /developerportal/howto/how-to-link-app-to-node
    - /mendixcloud/how-to-link-app-to-node
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

You can only run a Mendix app in production on Mendix Cloud if the app is linked to a licensed node.

Without a licensed node, you can still deploy your app and test it, but it will have several limitations:

* It runs for only a couple of hours before shutting down
* It cannot be scaled
* It has limited operational information available

This page explains how to link your app to a licensed node. It covers the following topics:

* [Linking Your App to a Licensed Node](#licensed-node)
* [Unlinking a Free App](#unlink-free) from its environment
* [Exchanging Linked Apps Between Nodes](#exchange-apps)

{{% alert color="warning" %}}
These instructions do not explain how to move databases, file storage, or any other environment configurations to another node. It describes how to move the deployment package of a Mendix model—the app as built in Mendix Studio Pro.
{{% /alert %}}

## Basic Concepts and Overview

When you deploy an app to the cloud, whether it is a Free App or a licensed app, it consists of several parts:

* Mendix Runtime – essentially, one or more instances of your app running in a container
* Routing layer
* Network
* Database
* File storage service

This is the Mendix environment.

In a node in Mendix Cloud, you may have one or more of these environments.

For a Free App, your app has a single environment where you can test your app. However, it comes with restrictions on how long it will run. In addition, you cannot scale the app, and the operational capabilities are limited. For details on the restrictions of a Free App, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/#free-app).

In a licensed node, you have everything you need to stage and deploy your app. You can have several different environments to support development; for example, you can have test, acceptance, and production environments. With [Flexible Environments](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments) in Mendix Cloud, you can even specify the number and names of your environments. You can scale licensed environments by providing more memory or multiple instances, and you can configure and monitor them using the tools in the Mendix Portal.

## Prerequisites

### Obtaining a Licensed Node {#obtaining-licensed-node}

To license an app, you must have a licensed cloud node available:

If you want to license a single app for between five and one hundred users, you can order the Mendix Basic package online. For more information, see [Mendix Basic Package](/developerportal/deploy/basic-package/).

If you have an existing contract that allows for more licensed nodes, use the [Request New App Node](https://newnode.mendix.com) app to request a new node from Mendix Support. For more information, see [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

{{% alert color="info" %}}
If your contract does not allow for more licensed nodes, contact your Customer Success Manager (CSM).
{{% /alert %}}

If none of the categories above apply to your case, contact [Mendix Support](https://support.mendix.com).

### Authorization

To link an app to a licensed node, you need to be the [Technical Contact](/developerportal/general/app-roles/#technical-contact) of the node.

You also need to have enabled two-factor authentication. For more information, see [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/).

## Linking Your App to a Licensed Node {#licensed-node}

Consider the following case: You have deployed an app, either as a Free App or to a licensed node. You now want to link it to a licensed node (or move it from one licensed node to another licensed node). To link the app to the node, carry out the following steps:

1. [Back up your data](#backing-up)
2. [Unlink from the current environment](#unlink)
3. [Connect your app to a licensed node](#connect-app)
4. [Restore the backup of your data](#restoring)

{{% alert color="info" %}}
For the specific case of swapping two apps between licensed nodes, see the guidance in the [Exchanging Linked Apps Between Nodes](#exchange-apps) section.
{{% /alert %}}

### Backing Up{#backing-up}

When you remove an app from its environment, you may want to take the data (database and file store) with it. It is a good idea, in any case, to create backups before performing major activities.

For more details on downloading a backup, see [Download a Backup](/developerportal/operate/download-backup/). 

{{% alert color="warning" %}}When you unlink your Free App from its environment, the environment is permanently deleted. You will not be able to recover any data once the Free App is unlinked.<br><br>If you unlink an app from a licensed node, that does not delete the node. Data is retained in the node.{{% /alert %}}

### Unlinking From Current Environment{#unlink}

Before you can link an app to a new environment, you need to unlink it from its current environment. By default, all apps are created as Free Apps the first time they are deployed. So, in most cases, you must unlink them.

#### Unlinking a Free App{#unlink-free}

To unlink a Free App, do the following:

1. From [Apps](https://sprintr.home.mendix.com), go to the [Environments](/developerportal/deploy/environments/) page of the app you want to unlink.

1. If the page shows the following message, then your app is not currently linked to a node. In that case, you can go straight to the [Connecting Your App to a Licensed Node](#connect-app) section.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/link-node.png" >}}
   
1. Click **Unlink your app**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/unlink-free-app.png" >}}

1. Click **Yes, delete all data and unlink this app** to confirm.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/confirm-unlink.png" max-width=70% class="no-border" >}}

1. If prompted, authenticate yourself with [two-factor authentication](/developerportal/deploy/two-factor-authentication/).

Your app has now been unlinked from the Free App environment.

#### Unlinking a Licensed App{#unlink-licensed}

It is not possible to unlink an app from a licensed node. The only way to do this is to connect another app to the licensed node; this automatically unlinks the existing app.

The [Exchanging Linked Apps Between Nodes](#exchange-apps) section provides an example of how you can use this behavior.

### Connecting Your App to a Licensed Node{#connect-app}

{{% alert color="info" %}}
If there is already an app linked to the target node, it will be unlinked automatically.
{{% /alert %}}

{{% alert color="warning" %}}
Apart from the app, the rest of the environment (or environments) in the target node will remain the same. This includes the following:

* The container and its configuration (including memory, instances, and environment variables)
* Routing layer
* Network
* Database (both structure and content)
* File storage service (including all content)
{{% /alert %}}

To connect your app to a licensed node, do the following:

1. From [Apps](https://sprintr.home.mendix.com), go to the [Environments](/developerportal/deploy/environments/) page of the app you want to unlink.

1. Click **Select a node**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/link-node.png" >}}

1. Click **Use this Node**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/choose-node.png" class="no-border" >}}

1. If there is already an app linked to the node, you will be prompted to confirm that you want to replace it. Click **Continue** to confirm.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/confirm-replace.png" max-width=70% class="no-border" >}}

1. If prompted, authenticate yourself with [two-factor authentication](/developerportal/deploy/two-factor-authentication/).

Your app is now connected to this node.

### Restoring Backup{#restoring}

After you link your app to a licensed node, it uses the resources in that node. For example, if there was an app previously deployed to the node, your newly linked app uses the data in the existing database.

If you want to use the data that was originally in your app, you need to restore the backup from your old node. For details on how to restore a backup, see [Restore a Backup](/developerportal/operate/restore-backup/).

{{% alert color="warning" %}}
You can only restore data to an existing database. This means that there must have been an app deployed to the licensed node before you attempt to restore data.
{{% /alert %}}

## Exchanging Linked Apps Between Nodes {#exchange-apps}

If you want to swap the nodes of two apps that are already linked to nodes, create a new (third) app. Linking an app to a node removes the app that is already linked, so you can use your third app to unlink one of the apps. You can then move your unlinked app to the other node, unlinking the app that is there. Finally, you can link that app to the first node.

For example, take the following case:

* **App A** is on **Node 1**

* **App B** is on **Node 2**

* You want to swap them so that **App A** is on **Node 2** and **App B** is on **Node 1** 

To link **App A** to **Node 2** and **App B** to **Node 1**, follow these steps:

1. Create a new, blank app **App C**. Do not connect it to any environment.

2. Link **App C** to **Node 1** (see the [Connecting Your App to a Licensed Node](#connect-app) section, above). This unlinks **App A**.

3. Now that **App A** is unlinked from **Node 1**, you can link it to **Node 2**.

4. **App B** no longer has a node. So, you can link **App B** to **Node 1**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/licensing-apps/exchange-apps.png" class="no-border" >}}

You have now swapped **App A** and **App B** between nodes.

## Read More

* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
