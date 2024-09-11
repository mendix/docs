---
title: "Studio Pro Deployment Settings"
linktitle: "Studio Pro Deployment"
url: /developerportal/deploy/studio-deployment-settings/
weight: 80
description: "Describes how to set deployment targets for Mendix Studio Pro."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

If you have a licensed app in Mendix Cloud, you can deploy it directly to an environment from Studio Pro. To do this, designate a target environment in [Apps](https://sprintr.home.mendix.com/), then click **App** > **Deploy to Licensed Cloud Node** in Studio Pro. These steps are described in detail below.

## Selecting the Target Environment {#studio-pro-target}

{{% alert color="info" %}}
By default, the target environment is set to **Build Only**. If you have **Build Only** selected, clicking **App** > **Deploy to Licensed Cloud Node** places your MDA in the [Deployment Package Repository](/developerportal/deploy/environments/#package-repository) in the Mendix Portal rather than directly deploying it to an environment.

If an environment is designated as the deployment target, you can see this on its [Environment Details](/developerportal/deploy/environments-details/) page; the **Studio Pro Target** line will read **Yes**.
{{% /alert %}}

To select a target environment for Studio Pro deployment, do the following:

1. From [Apps](https://sprintr.home.mendix.com/), click **Environments** on your app.

2. <a id="target"></a>In the **Deploy** tab, click **Setup Studio Pro Deployment**.

    {{% alert color="info" %}} Only the [Technical Contact](/developerportal/general/app-roles/#technical-contact) can see the **Setup Studio Pro Deployment** button and click it.{{% /alert %}}

3. In the **Setup Studio Pro Deployment** dialog box, select your desired target environment from the **Select target environment** menu.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/studio-deployment-settings/setup-studio-pro-deployment.png" alt="Select Studio Pro Target Dialog" max-width=80%  >}}

4. Click **Save**.

You have selected the target environment and can now deploy your app to that environment from Studio Pro. 

## Deploying from Studio Pro {#deploy-to-cloud-node}

Once the app has a target deployment environment, you can directly deploy your app from Studio Pro. Follow these steps:

1. Open the licensed app in [Studio Pro](https://marketplace.mendix.com/link/studiopro/).
1. In the top menu bar, click **App** > **Deploy to Licensed Cloud Node**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/deploy-to-cloud-node.png" alt="The App menu with the Deploy to Licensed Cloud Node option selected" width=50% >}}

1. In the **Deploy to the cloud** dialog box, click **Deploy**.
1. You will see a dialog box with the following message: "Successfully started cloud deployment." It will automatically upload your MDA to the Mendix Portal, deploy it to the target environment, and restart the target environment. 

Alternatively, you can click **App** > **Create Deployment Package** if you want to upload your MDA to the **Deployment Package Repository** without directly deploying it to your target environment.

{{% alert color="info" %}}
To create a deployment package or deploy an app, you need [transport rights](/developerportal/deploy/node-permissions/#transport-rights) for the environment.
{{% /alert %}}

## Read More

* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [Environments](/developerportal/deploy/environments/)
* [Using Version Control in Studio Pro](/refguide/using-version-control-in-studio-pro/)
