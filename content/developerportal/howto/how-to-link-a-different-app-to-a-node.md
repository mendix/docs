---
title: "Link a Different App to a Cloud Node"
category: "How-To's"
description: "This page describes how to link a cloud node to a different app."
tags: ["App","Node","Developer Portal","Deploy"]
---

## 1 Introduction

This how-to describes how to link a **different app** to your **licensed cloud node** so that you can deploy a different app.

**After completing this how-to you will know:**

*   How to link a different app to your node which already has a linked an app
*   How to exchange apps between two nodes

## 2 Prerequisites

Before you can start with this how-to, please make sure you have completed the following prerequisites.

*   The app has the **Team Server** enabled. Read [this](/howto/modeling-basics/create-and-deploy-your-first-app) to learn how to create a collaboration app.

In case you have created an app in the **Mendix Modeler**, you can upload it to the **Team Server** (see [Upload To Team Server Dialog](/refguide7/upload-to-team-server-dialog)) and a repository will be created automatically.

*   Make sure no **Sandbox** is linked to your app. (Every **Team Server** app is linked to a **Sandbox** automatically).
Read [this](how-to-unlink-sandbox) how-to to learn how to **unlink your Sandbox** from your app. 

## 3 Linking a App to a Licensed Cloud Node

*   Read [How to Deploy to the Mendix Cloud](deploying-to-the-cloud) to learn *how to link an app to a cloud node*.

## 4 Linking a Different App to the Node

1.  In the [Developer Portal](http://home.mendix.com), go to **Apps** and select the *app* you want to link to the *node*.
2.  Once you are in the *app*, go to the **'Environments'** tab in the left navigation panel.
3.  Click **Select Node**.
4.  Select the correct *node* by clicking **Use this Node** and link it to your *app*. The current linked app will be *dislinked automatically*.

## 5 Exchange Linked Apps Between Nodes
In case you want to exchange two apps with nodes who are already linked, you can *create a new app* and follow chapters 1 to 3 of this document.

App A → Node 1
App B → Node 2

1.  To be able to link **App A** to **Node 2**, you have to create a new empty **App C** (see [Chapter 1](how-to-link-app-to-node)).
2.  And to link this to **Node 1** (see [Chapter 2](how-to-link-app-to-node)). 
3.  **App A** will be released from **Node 1** and can be linked to **Node 2**.

## 6 Related Content

*   [How to Configure Custom Domains](custom-domains)
*   [How to Deploy to the Mendix Cloud](deploying-to-the-cloud)
*   [How To Link Your Free App to a Licensed Cloud Node](how-to-link-app-to-node)
*   [How to Unlink Your Free App from a Sandbox Environment](how-to-unlink-sandbox)
*   [Upload To Team Server Dialog](/refguide7/upload-to-team-server-dialog)
