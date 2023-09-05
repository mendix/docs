---
title: "Studio Pro Deployment Settings"
url: /developerportal/deploy/studio-deployment-settings/
weight: 10
description: "Describes how to set deployment targets for Mendix Studio Pro."
tags: ["node","developer portal","deploy", "settings", "target", "Mendix Studio Pro Target"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

If you have a licensed app in the Mendix Cloud which you want to deploy directly to an environment, you need to select a target environment where Mendix Studio Pro will deploy your app when you **Deploy to Licensed Cloud Node**. For more information on licensed apps and environments, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) and [Environments](/developerportal/deploy/environments/).

{{% alert color="info" %}}
By default the target environment is set to *Build Only*, which means that your app will not be deployed directly to an environment from Studio Pro.

When you deploy to a target environment from Studio Pro, the deployment will also restart the target environment.
{{% /alert %}}

## 2 Selecting the Target Environment 

To select the target environment, do the following:

1. Open **Environments** in the left menu bar in the Developer Portal.

2. <a id="target"></a>In the **Deploy** tab, click **Setup Studio Pro Deployment**.

    {{% alert color="info" %}} Only a [Technical Contact](/developerportal/general/app-roles/#technical-contact) can see the **Setup Studio Pro Deployment** button and click it.{{% /alert %}}

3. In the **Select target environment** dialog box, click the drop-down menu and select the environment.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/studio-deployment-settings/setup-studio-pro-deployment.png" alt="Select Studio Pro Target Dialog"   width="400"  >}}

    {{% alert color="info" %}}If you do not want to deploy your app to an environment automatically from Studio Pro, choose the option **Build Only**. This will place your MDA in the **Deployment Package Repository** and you can deploy it from within the Developer Portal.<br /><br />If you choose **Build Only**, you will not be able to publish your app from Studio Pro, but will get an error **No target selected**.{{% /alert %}}

4. Click **Save**.

You have selected the target environment and can now deploy your app to that environment from Studio Pro.

## 3 Read More

* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [Environments](/developerportal/deploy/environments/)
