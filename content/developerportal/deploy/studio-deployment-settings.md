---
title: "Studio Deployment Settings"
parent: "mendix-cloud-deploy"
menu_order: 10
description: "Describes how to set deployment targets for Mendix Studio and Studio Pro."
tags: ["node","developer portal","deploy", "Studio", "settings", "target", "Mendix Studios Target"]
---

## 1 Introduction

If you have a licensed app in Mendix Cloud v4 which you want to deploy directly to an environment, you need to select a target environment where Mendix Studio and Mendix Studio Pro will deploy your app when you click **Publish** (for Studio) or **Run** (for Studio Pro). For more information on licensed apps and environments, see [Mendix Cloud](mendix-cloud-deploy) and [Environments](environments).

{{% alert type="info" %}}
By default the target environment is not selected. Thus, when you try to publish, you will get a warning message in Studio, or an error message in Studio Pro. For more information, see [Previewing & Publishing Your App](/studio/publishing-app) in the *Studio Guide* or [Run Menu](/refguide/run-menu) in the *Studio Pro Guide*.

When you deploy from Mendix Studio Pro, the deployment will also restart the target environment.
{{% /alert %}}

If you do not want to set a target environment, you can deploy from Studio Pro by first adding the MDA to the **Deployment Package Repository**. Either:

* [Create a Deployment Package](/refguide/create-deployment-package-dialog) from the **Project** menu in Studio Pro and then upload it using the [Environments](environments) page
* [Commit](/refguide/commit-dialog) the current version of your app and then choose **Create a Package from Team Server** on the Environments page

Once you have your MDA in the **Deployment Package Repository** you can deploy it from within the Developer Portal.

## 2 Selecting the Target Environment 

To select the target environment, do the following:

1.  Open **Deploy** > **Environments** in the left menu bar in the Developer Portal.

    ![Environments in the Developer Portal](attachments/studio-deployment-settings/developer-portal-deploy-environments.png)

2.  In the **Deploy** tab > **Environments** section, select the target environment that you want to select for Studio and Studio Pro deployment by clicking **Details**. 

    ![Details of an Environment in the Developer Portal](attachments/studio-deployment-settings/developer-portal-environments-details.png)

3.  <a name="target"></a>In the **General** tab, select **Mendix Studios Target** and click **Change**:

    ![](attachments/studio-deployment-settings/developer-portal-web-modeler-target.png) <br/>

    {{% alert type="info" %}} Only a [Technical Contact](/developerportal/company-app-roles/technical-contact) can see the **Change** button and click it. 
    {{% /alert %}}

4. In the **Select Studio Target** dialog box, click the drop-down menu and select the environment. 
5. Click **Save**.

You have selected the target environment and can now deploy your app to that environment from either Studio or Studio Pro. 

## 3 Read More

*   [Previewing & Publishing Your App](/studio/publishing-app)
*   [Mendix Cloud](mendix-cloud-deploy)
*   [Environments](environments)
