---
title: "Using Workflows in Apps with Mendix Version 9.6-9.10"
category: "Workflows"
menu_order: 40
tags: ["workflow", "workflows", "9.6", "migration"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Workflows were introduced in Mendix version 9.0. for Mendix Studio and Mendix Studio Pro. 

Since then we have collected very valuable feedback and have incorporated some of the major changes into an improved version of workflows. Due to these changes, workflows are not available for apps with from Mendix version 9.6 to Mendix version 9.10. 

You can find some guidance below to help you pick the right Mendix version based on the purpose of the app. 

## 2 Exploring the Workflow Functionality 

You can try workflows out and explore their functionality in an app that is not meant to go in production.

If you want to just try workflows out and do not plan to publish the app to production, we recommend creating an app with *Mendix version 9.5.1*. In this version, workflows are available in [Beta](/releasenotes/beta-features/) and you can build processes and explore the feature. 

To create an app with Mendix version 9.5.1, do the following:

1. In the Developer Portal, click **Create App**.
2. Choose any app template. Some templates like **Approval App** and **Purchase Request** already have predefined workflows and pages.
3.  Click **Advanced settings** and select **Template version** Studio Pro 9.5.1. 
4. Click **Select This Template**.
5. Name your app, choose a background color and an icon, and click **Create App**.

## 3 Building an App with the Workflow Functionality in Mendix 9.6-9.10

You can start building an app with Mendix version 9.5  in Studio and manually migrate your app to Mendix version 9.6-9.10 via Mendix Studio Pro. Afterwards, you can continue working on workflows in Studio Pro and work in Studio on any other functionality. For more information on how to migrate the app, see [Migrate Workflow Apps](/refguide/workflow-beta-migration).

## 4 Building an App with the Workflow Functionality in Mendix 9.11

Workflows are available again in Studio from Mendix version 9.11 and are GA. This means you can build your app with the workflow functionality and publish it to production. 

If you do **not** have workflow functionality in your app, you can upgrade your app from Mendix version 9.7-9.10 to Mendix version 9.11 via Studio. 

If your app has workflow functionality, you can migrate it to Mendix version 9.11 via Studio Pro. For more information on how to migrate the app via Studio Pro, see [Migrate Workflow Apps](/refguide/workflow-beta-migration).

## 5 Read More

* [Migrate Workflow Apps](/refguide/workflow-beta-migration)

