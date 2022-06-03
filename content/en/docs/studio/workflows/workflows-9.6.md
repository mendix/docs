---
title: "Using Workflows in Apps with Mendix Version 9.6 and Above"
url: /studio/workflows-9.6/
category: "Workflows"
weight: 05
tags: ["workflow", "workflows", "9.6", "beta"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Workflows were introduced in Mendix version 9.0. for Mendix Studio and Mendix Studio Pro. 

During the last months we have collected very valuable feedback and are now incorporating some of the major changes into an improved version of workflows before we release it to production. To bring these changes to our community as quickly as possible, we have to temporarily disable the workflow editor for apps with Mendix version 9.6 and above in Studio. 

However, you can still use workflows in Studio and Studio Pro. Below we provide some guidance to help you pick the right Mendix version based on the purpose of the app. 

## 2 Exploring the Workflow Functionality 

You can try workflows out and explore their functionality in an app that is not meant to go in production.

If you want to just try workflows out and do not plan to publish the app to production, we recommend creating an app with *Mendix version 9.5*. In this version, workflows are available in Studio and you can build processes and explore the feature. 

To create an app with Mendix version 9.5, do the following:

1. In the Developer Portal, click **Create App**.
2. Choose any app template. Some templates like **Approval App** and **Purchase Request** already have predefined workflows and pages.
3.  Click **Advanced settings** and select **Template version** Studio Pro 9.5.1. 
4. Click **Select This Template**.
5. Name your app, choose a background color and an icon, and click **Create App**.

## 3 Building an App with the Workflow Functionality in Mendix 9.6 and Above

Next to just exploring the functionality, you can also build an app in Studio that will later be published to production. 

You can start building an app with Mendix version 9.5  in Studio and manually migrate your app to Mendix version 9.6 or above via Mendix Studio Pro. Afterwards, you can continue working on workflows in Studio Pro until workflows are available in Studio again. For more information on how to migrate the app, see [Migrate Workflow Apps](/refguide/workflow-beta-migration/).

## 4 Building an App Together with Studio Pro Developers in Mendix 9.6 and Above

If your team is building a workflow app with Mendix version 9.6 or above, you can work on workflows only in Studio Pro until workflows are available in Studio again. You can work in Studio on any other functionality in your app. 



