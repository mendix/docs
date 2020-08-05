---
title: "Studio Deployment Settings"
parent: "mendix-cloud-deploy"
menu_order: 10
description: "Describes how to set deployment for Mendix Studio."
tags: ["node","developer portal","deploy", "Studio", "settings", "target", "Mendix Studio Target"]
---

## 1 Introduction

If you have a licensed app, you need to select an environment for Mendix Studio separately. For more information on licensed apps and environments, see [Mendix Cloud](mendix-cloud-deploy) and [Environments](environments). 

{{% alert type="info" %}}

By default the environment is not selected for Studio. Thus, when you try to publish, you will get a warning message. For more information, see [Previewing & Publishing Your App](/studio/publishing-app) in the *Studio Guide*.

{{% /alert %}}

## 2 Selecting the Studio Deployment Environment 

To select the environment for Studio, do the following:

1.  Open **Deploy** > **Environments** in the left menu bar in the Developer Portal.

    ![Environments in the Developer Portal](attachments/studio-deployment-settings/developer-portal-deploy-environments.png)

2.  In the **Deploy** tab > **Environments** section, select the environment that you want to select for Studio deployment by clicking **Details**. 

    ![Details of an Environment in the Developer Portal](attachments/studio-deployment-settings/developer-portal-environments-details.png)

3.  In the **General** tab, select **Mendix Studio Target** and click **Change**:

    ![](attachments/studio-deployment-settings/developer-portal-web-modeler-target.png) <br/>

    {{% alert type="info" %}} Only a [Technical Contact](/developerportal/company-app-roles/technical-contact) can see the **Change** button and click it. 

    {{% /alert %}}

4. In the **Select Studio Target** dialog box, click the drop-down menu and select the environment. 

5. Click **Save**.

You have selected the environment for Studio. 

## 3 Read More

*   [Previewing & Publishing Your App](/studio/publishing-app)
*   [Mendix Cloud](mendix-cloud-deploy)
*   [Environments](environments)
