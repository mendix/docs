---
title: "Studio Pro Deployment Settings"
url: /developerportal/deploy/studio-deployment-settings/
weight: 10
description: "Describes how to set deployment targets for Mendix Studio Pro."
tags: ["node","developer portal","deploy", "settings", "target", "Mendix Studio Pro Target"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

If you have a licensed app in Mendix Cloud, you can deploy it directly to an environment from Studio Pro. To do this, designate a target environment in the Developer Portal, then click **App** > **Deploy to Licensed Cloud Node** in Studio Pro.

## 2 Selecting the Target Environment {#studio-pro-target}

By default, the target environment is set to **Build Only**. If you have **Build Only** selected, clicking **App** > **Deploy to Licensed Cloud Node** places your MDA in the Developer Portal's [Deployment Package Repository](/developerportal/deploy/environments/#package-repository) rather than directly deploying it to an environment.

If an environment is designated as the deployment target, you can see this on its [Environment Details](/developerportal/deploy/environments-details/) page; the **Studio Pro Target** will read **Yes**.

To select a target environment for Studio Pro deployment, do the following:

1. From the [navigation pane](/developerportal/#navigation-pane) in the Developer Portal, click **Environments**.

2. <a id="target"></a>In the **Deploy** tab, click **Setup Studio Pro Deployment**.

    {{% alert color="info" %}} Only a [Technical Contact](/developerportal/general/app-roles/#technical-contact) can see the **Setup Studio Pro Deployment** button and click it.{{% /alert %}}

3. In the **Select target environment** dialog box, click the drop-down menu, and select your desired target environment.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/studio-deployment-settings/setup-studio-pro-deployment.png" alt="Select Studio Pro Target Dialog" class="image-border" max-width=80%  >}}

4. Click **Save**.

You have selected the target environment and can now deploy your app to that environment from Studio Pro. 

## 3 Deploying from Studio Pro {#deploy-to-cloud-node}

Once you have designated a target deployment environment, you can directly deploy your app from Studio Pro. To do so, click **App** > **Deploy to Licensed Cloud Node**. This uploads your MDA to the Developer Portal, deploys it to the target environment, and restarts the target environment.

Alternatively, you can click **App** > **Create Deployment Package** if you want to upload your MDA to the **Deployment Package Repository** without directly deploying it to your target environment.

## 4 Read More

* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [Environments](/developerportal/deploy/environments/)
* [Using Version Control in Studio Pro](/refguide/using-version-control-in-studio-pro/)
