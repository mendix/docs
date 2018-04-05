---
title: "Link a Different App to a Cloud Node"
category: "How-To's"
description: "This page describes how to link a cloud node to a different app."
tags: ["App","Node","Developer Portal","Deploy"]
---

## 1 Introduction

This how-to describes linking a **different app** to your **licensed cloud node** so that you can deploy a different app.

**This how-to will teach you how to do the following:**

*  Link a different app to your node which already has a linked an app
*  Exchange apps between two nodes

## 2 Prerequisites

Before you can start with this how-to, please make sure you have completed the following prerequisites.

* Be the [Technical Contact](/developerportal/general/technical-contact) of the node

In case you have created an app in the **Mendix Modeler**, you can upload it to the **Team Server** (see [Upload To Version Control Dialog](/refguide/upload-to-version-control-dialog)) and a repository will be created automatically.

*   Make sure no **Sandbox** is linked to your app. (Every **Team Server** app is linked to a **Sandbox** automatically).
Read [this](how-to-unlink-sandbox) how-to to learn  **unlink your Sandbox** from your app. 

## 3 Linking a App to a Licensed Cloud Node

Read [How to Deploy to the Mendix Cloud](deploying-to-the-cloud) to learn how to link an app to a cloud node.

## 4 Linking a Different App to the Node

1.  In the [Developer Portal](http://home.mendix.com), go to **Apps** and select the *app* you want to link to the *node*.
2.  Once you are in the *app*, go to the **'Environments'** tab in the left navigation panel.
3.  Click **Select Node**.
4.  Select the correct *node* by clicking **Use this Node** and link it to your *app*. The current linked app will be *dislinked automatically*.

## 5 Exchange Linked Apps Between Nodes

In case you want to exchange two apps with nodes who are already linked, you can create a new (third) app.

App A → Node 1
App B → Node 2
App C (new app)

For example, to be able to link **App A** to **Node 2**, follow these steps:

1. Create a new empty app **App C**.
2. Link **App C** this **Node 1** (see [3.1 Method 1](how-to-link-app-to-node)). 
3. Now that **Node 1** is released from **App A**, it can be linked to **Node 2** (see [3.2 Method 2](how-to-link-app-to-node)).
4. **App B** will no longer have a node. You can link **App B** to **Node 1** by following [3.2 Method 2](how-to-link-app-to-node).

## 6 Related Content

*   [How to Configure Custom Domains](custom-domains)
*   [How to Deploy to the Mendix Cloud](deploying-to-the-cloud)
*   [How to Link Your Free App to a Licensed Cloud Node](how-to-link-app-to-node)
*   [How to Unlink Your Free App from a Sandbox Environment](how-to-unlink-sandbox)
*   [Upload To Version Control Dialog](/refguide/upload-to-version-control-dialog)
