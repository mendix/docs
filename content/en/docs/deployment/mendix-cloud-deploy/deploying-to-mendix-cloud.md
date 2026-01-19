---
title: "Deploying an App to Mendix Cloud"
linktitle: "Deploying an App"
url: /developerportal/deploy/mendix-cloud-deploy/deploying-an-app/
weight: 3
description: "Describes how to deploy to Mendix Cloud."
aliases:
    - /developerportal/howto/deploying-to-the-cloud.html
    - /mendixcloud/deploying-to-the-cloud.html
    - /developerportal/howto/deploying-to-the-cloud
    - /mendixcloud/deploying-to-the-cloud
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This page describes how to deploy an app to Mendix Cloud.

The method for deploying an app to Mendix Cloud differs depending on whether you have a licensed app or a Free App:

* For a licensed app, there are several deployment options:
    * Manual deployment – Create a deployment package via Studio Pro or the Mendix Portal, and then deploy the package to a node environment where you can run it. For details on how to do this, see [Deploying a Licensed App](#deploy-licensed-app), below. This is the simplest deployment method, especially if you are just getting started with Mendix.
    * Pipelines built with low code – If you want to automate your build and deployment process, you can use [Pipelines](/developerportal/deploy/mendix-pipelines/) in the Mendix Portal to design and activate a Mendix Pipeline with a set of configurable, low-code steps. The Mendix Pipeline feature makes it quick and easy for teams to automate their CI/CD process, without requiring any third-party tools or DevOps expertise.
    * Pipelines built with APIs – If you use Jenkins, GitLab, or another CI/CD tool, you can use Mendix APIs to automate your build and deployment process. For details, see [Implement a Simple CI/CD Pipeline with Mendix APIs](/howto/integration/implement-cicd-pipeline/). This method is highly customizable but does require CI/CD tooling and DevOps expertise to set up.
* For a Free App, you deploy the app directly from Studio Pro. For details on how to do this, see [Deploying a Free App](#deploy-free-app), below.

{{% alert color="info" %}}
For a hands-on introduction to the different deployment options for licensed apps, try the learning path [Choose the Right Software Delivery Approach](https://academy.mendix.com/link/paths/156/Choose-the-Right-Software-Delivery-Approach).
{{% /alert %}}

{{% alert color="info" %}}
If you are not currently a customer but would prefer to use a licensed cloud node instead of a Free App, you can find more information on the [Mendix Platform Pricing](https://www.mendix.com/pricing) page.

If you are an existing customer, you should deploy to your licensed cloud node.
{{% /alert %}}

## Deploying a Licensed App {#deploy-licensed-app}

 Deploying a licensed app is usually a two-step process:

* First, create a deployment package
* Second, deploy it to a node environment where you can run your app

The full process is described in detail below.

{{% alert color="info" %}}
It is also possible to deploy licensed apps directly from Studio Pro. For information on how to do this, see [Studio Pro Deployment Settings](/developerportal/deploy/studio-deployment-settings/).
{{% /alert %}}

### Prerequisites

Before starting the process of deploying a licensed app, make sure to complete these prerequisites:

* Your app is linked to a licensed cloud node
* You have [transport rights](/developerportal/deploy/node-permissions/#transport-rights)
* [Two-factor authentication](/developerportal/deploy/two-factor-authentication/) is set up
* The deployment package for your app is not bigger than 1 GB (uncompressed)
* Your app is using a [supported Mendix version](/releasenotes/studio-pro/lts-mts/#major-version)

{{% alert color="info" %}}You can verify that your app is under the 1 GB limit by creating a deployment package, as described below, and then viewing that package's size in the package details.{{% /alert %}}

### Creating a Deployment Package for a Licensed App

There are two methods for creating a deployment package on Mendix Cloud. You can create it directly via Studio Pro, or through the Mendix Portal, using a model committed to the Team Server.

#### Creating a Deployment Package via Studio Pro {#create-deployment-package}

To create a deployment package via Studio Pro, follow these steps:

1. Open the licensed app in [Studio Pro](https://marketplace.mendix.com/link/studiopro/).
2. In the top menu bar, click **App** > **Create Deployment Package**.

#### Creating a Deployment Package via the Mendix Portal {#package-from-team-server}

You can also create a deployment package through the Mendix Portal, using a model committed to the Team Server. To do this, follow these steps:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
2. On the [Deployment Packages](/developerportal/deploy/environments/#deployment-packages-tab) tab, click **Create a Package**. This launches the **Create Package** wizard.
3. On the **Select Branch** tab, select the branch on which to base the build.
4. On the **Select Revision** tab, select the branch revision on which to base the package.
5. On the **Choose a Tag** tab, specify the version tag. This includes the major, minor, and patch version numbers.
6. Click **Build this revision**.

### Deploying the App to an Environment {#deploy-the-app-to-an-environment}

The previous steps explained how to create a deployment package on Mendix Cloud, but the app based on the deployment package is not running yet. To deploy a deployment package to a node environment where you can run the app, follow these steps:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your app.
2. On the [Deployment Packages](/developerportal/deploy/environments/#deployment-packages-tab) tab, choose your preferred deployment package.
3. Click **Deploy** ({{% icon name="deploy" %}}) to launch the deploy wizard.
4. On the **Select Environment** tab of the wizard, choose the environment to which you want to deploy the package.
5. On the **Configure Environment** tab, review the [constants](/refguide/constants/) and adjust them as required.
6. On the **Other Options** tab, choose whether to stage the package without deploying, and when to create the backup: either before or after deploying the new package. The app is unavailable while the backup runs.
7. On the **Deploy** tab, review the deployment settings:
    1. To see an overview of the configuration for this deployment, click **View Summary**. This summary displays the selected package, selected backup option, and any changed constants or [scheduled events](/refguide/scheduled-events/).
    2. Review this summary, then click **Deploy Now**.

The app is now deployed. You can configure the administrative account.

## Deploying a Free App {#deploy-free-app}

Deploying a Free App is a single-stage process that is completed from Studio Pro. This process is described in detail below.

### Prerequisites

Before starting the process of deploying a Free App, make sure to complete these prerequisites:

* You have created an app
* As with licensed apps, the uncompressed size of the deployment package must not exceed 1 GB

### Deploying the App

With a Free App, you can deploy your app to Mendix Cloud from Studio Pro by using one of the following methods:

* In the top bar of Studio Pro, click **Run** > **Publish**. This automatically deploys your app to a Free App environment.

* Alternatively, in the top bar of Studio Pro, click **Publish**.

## Deployment Status

The [Mendix Platform Status page](https://status.mendix.com/) shows the current status of Mendix services. If you have issues with deployment, you can check the status page to see if deployment is operational (under **Mendix Services**) or if there are other Mendix issues that may be affecting your deployment. For more information, see [Mendix Cloud Status](/developerportal/deploy/mendix-cloud-status/).

## Troubleshooting

### Build Output Warning: "A Shortened Revision Hash Was Provided" During Deployment

When you deploy an application to Mendix Cloud from Studio Pro, you might encounter a warning in your build output stating: "`WARNING: A shortened revision hash was provided: [id] forcing the infrastructure to do a clone of the entire history`."

This warning indicates that a short commit hash was provided when building your deployment package, forcing the build infrastructure to perform a full clone of your repository's entire history. If your repository is large, this can significantly increase build times, potentially leading to a timeout and preventing successful deployment package creation.

To resolve this issue, try one of the following solutions:

* **For Studio Pro versions 9.12.0 – 9.16.1** – Create your deployment package directly from the Mendix Cloud Portal.
{{% alert color="info" %}}
This option is not available for Free or Sandbox apps.
{{% /alert %}}
* **Update your Mendix application** – Update your Mendix application to use Studio Pro version 9.17.x or higher.
* **When using the Build API** – If your application uses Git for version control, specify a full commit hash for the `Revision` value in the [Build API](/apidocs-mxsdk/apidocs/build-api/#payload).
