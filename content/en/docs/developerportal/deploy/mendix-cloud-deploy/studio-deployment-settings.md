---
title: "Studio Deployment Settings"
url: /developerportal/deploy/studio-deployment-settings/
weight: 10
description: "Describes how to set deployment targets for Mendix Studio and Studio Pro."
tags: ["node","developer portal","deploy", "Studio", "settings", "target", "Mendix Studios Target"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

If you have a licensed app in Mendix Cloud v4 which you want to deploy directly to an environment, you need to select a target environment where Mendix Studio and Mendix Studio Pro will deploy your app when you click **Publish** (for Studio) or **Deploy to Licensed Cloud Node** (for Studio Pro). For more information on licensed apps and environments, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) and [Environments](/developerportal/deploy/environments/).

{{% alert color="info" %}}
By default the target environment is set to *Build Only*, which means that your app will not be deployed directly to an environment from Studio Pro, and you will receive an error **No target selected** if you publish from Studio.

When you deploy to a target environment from Mendix Studio Pro, the deployment will also restart the target environment.
{{% /alert %}}

## 2 Selecting the Target Environment 

To select the target environment, do the following:

1.  Open **Environments** in the left menu bar in the Developer Portal.

2.  <a name="target"></a>In the **Deploy** tab, click **Setup Studios Deployment**:

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/studio-deployment-settings/developer-portal-web-modeler-target.png" alt="Deploy Tab of Environments Page" >}}

    {{% alert color="info" %}} Only a [Technical Contact](/developerportal/collaborate/app-roles/#technical-contact) can see the **Setup Studios Deployment** button and click it. 
    {{% /alert %}}

3. In the **Select Studio Target** dialog box, click the drop-down menu and select the environment.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/studio-deployment-settings/setup-studios-deployment.png" alt="Select Studios Target Dialog"   width="400"  >}}

    {{% alert color="info" %}}If you do not want to deploy your app to an environment automatically from Studio Pro, choose the option **Build Only**. This will place your MDA in the **Deployment Package Repository** and you can deploy it from within the Developer Portal.<br /><br />If you choose **Build Only**, you will not be able to publish your app from Studio, but will get an error **No target selected**.{{% /alert %}}

4. Click **Save**.

You have selected the target environment and can now deploy your app to that environment from either Studio or Studio Pro.

You can see whether an environment is the target for Studio and Studio Pro from the **General** tab of the [Environment Details](/developerportal/deploy/environments-details/) page for the environment.

## 3 Read More

*   [Previewing & Publishing Your App](/studio/publishing-app/)
*   [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
*   [Environments](/developerportal/deploy/environments/)
