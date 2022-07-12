---
title: "Licensing Mendix Cloud Apps"
url: /developerportal/deploy/licensing-apps/
#New document which replaces four others
weight: 15
description: "Licensing apps for production by linking them to a licensed cloud node."
tags: ["App", "Node", "Developer Portal", "Deploy", "Link", "Unlink", "Licensed", "Free App", "Upgrade", "Mendix Cloud", "v3", "v4"]
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

## 1 Introduction

To run Mendix apps in production on the Mendix Cloud, they must be linked to a licensed node. Without a licensed node you can still deploy your app and test it, however it will only run for a couple of hours before shutting down, cannot be scaled and has limited operational information available.

This page explains how you can link your app to a licensed node. It covers the following:

* [Linking Your App to a Licensed Node](#licensed-node)
* [Unlinking a Free App](#unlink-free) from its environment
* [Exchanging Linked Apps Between Nodes](#exchange-apps)

{{% alert color="warning" %}}
These instructions will not move databases, file storage, or any other environment configurations to another node. Only the deployment package of a Mendix model – the app as built in Mendix Studio Pro – is moved.
{{% /alert %}}

## 2 Basic Concepts and Overview

When you deploy an app to the cloud, whether it is a Free App or a licensed app, it will consist of a number of parts:

* Mendix Runtime – essentially one or more instances of your app running in a container
* Routing layer
* Network
* Database
* File storage service

This is the Mendix **environment**.

In a **node** in the Mendix Cloud, you may have one, or more, of these environments.

For a **Free App**, your app has a single environment which allows you to test your app. However, this comes with restrictions on how long it will run. In addition, you cannot scale the app, and the operational capabilities are limited. For more details on the restrictions of a Free App, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/#free-app).

In a **licensed node** you have everything you need to stage and deploy your app. You can have several different environments to support development: test, acceptance, and production, for example. With [Flexible Environments](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments) in Mendix Cloud v4, you can even specify the number and names of your environments. You can scale licensed environments by providing more memory or multiple instances, and you can configure and monitor them using the tools in the Developer Portal.

## 3 Prerequisites

### 3.1 Obtaining a Licensed Node

To license an app, you need to have a licensed cloud node available:

If you want to license a single app for between five and a hundred users, you can order the Mendix Basic package online. See [Mendix Basic Package](/developerportal/deploy/basic-package/) for more details.

If you have an existing contract which allows for more licensed nodes, use the [Request New App Node](https://newnode.mendix.com) app to request a new node from Mendix Support. For more information, see [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

{{% alert color="info" %}}
If your contract does not allow for more licensed nodes, please contact your Customer Success Manager (CSM).
{{% /alert %}}

If you do not fall into any of the categories above, please contact [Mendix Support](https://support.mendix.com).

### 3.2 Authorization

You need to be the [Technical Contact](/developerportal/collaborate/app-roles/#technical-contact) of the node, otherwise you will not have the rights to link an app to the node.

You need to have enabled two-factor authentication. See [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/).

## 4 Linking Your App to a Licensed Node {#licensed-node}

You have deployed an app: either as a Free App, or to a licensed node. You now want to link it to a licensed node, or to a different licensed node. There are several steps you need to carry out:

* [Back up your data](#backing-up)
* [Unlink from the current environment](#unlink)
* [Connect your app to a licensed node](#connect-app)
* [Restore the backup of your data](#restoring)

{{% alert color="info" %}}
For the specific case of swapping two apps between licensed nodes, see the guidance in the [Exchanging Linked Apps Between Nodes](#exchange-apps) section.
{{% /alert %}}

### 4.1 Backing Up{#backing-up}

When you remove an app from its environment you may want to take the data (database and file store) with it. It is a good idea, in any case, to take backups before performing major activities.

For more information on downloading a backup, see [Download a Backup](/developerportal/operate/download-backup/). 

{{% alert color="warning" %}}
When you unlink your Free App from its environment, the environment will be permanently deleted. This means that you will not be able to recover any data once the app is unlinked.

If you are unlinking from a licensed node, the node is NOT deleted and data is retained in the node.
{{% /alert %}}

### 4.2 Unlinking From Current Environment{#unlink}

Before you can link an app to a new environment, you need to unlink it from its current environment. All apps will be created as a Free App by default the first time they are deployed. In most cases, therefore, you will have to unlink them.

#### 4.2.1 Unlinking a Free App{#unlink-free}

To unlink a Free App, do the following:

1.  Go to the [Developer Portal](http://sprintr.home.mendix.com).

2.  Select the app which you want to unlink.

3.  Go to **Environments** in the left navigation panel.

    If the **Environments** tab shows the following message, then your app is not currently linked to a node and you can go straight to the [Connecting Your App to a Licensed Node](#connect-app) section.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/link-node.png" >}}
   
4.  Click **Unlink your app**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/unlink-free-app.png" >}}

5.  Click **Yes, delete all data and unlink this app** to confirm.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/confirm-unlink.png" >}}

    {{% alert color="warning" %}}Your Data will be deleted.{{% /alert %}}

6.  Validate with your [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/).

Your app has now been unlinked from the Free App environment.

#### 4.2.2 Unlinking a Licensed App{#unlink-licensed}

It is not possible to unlink an app from a licensed node. The only way to do this is to connect another app to the licensed node; this will unlink the existing app automatically.

An example of how this behavior can be used is given in the [Exchanging Linked Apps Between Nodes](#exchange-apps) section.

### 4.3 Connecting Your App to a Licensed Node{#connect-app}

{{% alert color="info" %}}
If there is already an app linked to the target node, it will be **unlinked automatically**.
{{% /alert %}}

{{% alert color="warning" %}}
Apart from the app, the rest of the environment(s) in the target node will remain the same. This includes:

* the container and its configuration (including memory, instances, and environment variables)
* Routing layer
* Network
* Database (both structure and content)
* File storage service (including all content)
{{% /alert %}}

To connect your app to a licensed node, do the following:

1.  Go to the [Developer Portal](http://sprintr.home.mendix.com).

2.  Select the app you want to link to the node.

3.  Go to **Environments** in the left navigation panel.

4.  Click **select a node**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/link-node.png" >}}

5.  Click **Use this Node**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/choose-node.png" >}}

6.  If there is already an app linked to this node, you will be asked to confirm that you want to replace it. Click **Continue** to confirm.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/confirm-replace.png" >}}

6.  Validate with your [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/).

Your app is now connected to this node.

### 4.4 Restoring Backup{#restoring}

After you have linked your app to a licensed node, it will be using the resources currently in that node. For example, the data in the existing database, if there was an app previously deployed to the node.

If you want to use the data which was originally in your app, you will need to restore the backup from your old node. For more information on restoring a backup, see [Restore a Backup](/developerportal/operate/restore-backup/).

{{% alert color="warning" %}}
You can only restore data to an existing database. This means that there must have been an app deployed to the licensed node before you attempt to restore data.
{{% /alert %}}

## 5 Exchanging Linked Apps Between Nodes {#exchange-apps}

If you want to swap the nodes of two apps which are already linked to nodes, you can do it by creating a new (third) app. By using the fact that linking an app to a node will remove an app which is already linked, you can use this app to unlink one app. You can then move this app to the other node, unlinking the app which is there. Finally, you can put this app into the first node.

For example, take the following case:

* **App A** is on **Node 1**

* **App B** is on **Node 2**

* You want to swap them so that **App A** is on **Node 2** and **App B** is on **Node 1** 

To link **App A** to **Node 2** and **App B** to **Node 1**, follow these steps:

1. Create a new blank app **App C** which is not connected to any environment.

2. Link **App C** to **Node 1** (see the [Connecting Your App to a Licensed Node](#connect-app) section, above). This will unlink **App A**.

3. Now that **App A** is unlinked from **Node 1**, it can be linked to **Node 2**.

4.  **App B** will now no longer have a node. You can now link **App B** to **Node 1**.

	{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/licensing-apps/exchange-apps.png" >}}

You have now swapped **App A** and **App B** between nodes.

## 6 Read More

*   [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
