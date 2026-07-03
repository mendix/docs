---
title: "Versioning an App Deployed to the Cloud"
url: /refguide/versioning-cloud-app/
weight: 70
description: "Describes how to work with version control in Mendix Cloud apps."
---

## Introduction

While developing, you can deploy and run your app on your local machine by clicking the menu item **Run** > **Run Locally**. This allows you to test the app as it currently is stored on your local machine.

### Deploying Your Working Copy

When you deploy to the cloud, you can choose to use the version of the app stored on your local machine, the working copy and deploy that to the default environment. If you are using the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), or other partner cloud (SAP BTP, for example), click **Publish** to commit and push the version of the app stored on your local machine and deploy that to the default environment.

### Choosing a Specific Development Line and Revision

It is also possible to choose a specific development line and revision to deploy to the default environment, or to create a package from.

In this case, Studio Pro will create a fresh checkout of the chosen revision. This means that any team member can always recreate this version of the deployment package. In other words, Studio Pro does not rely on your local files for creating a versioned deployment package.

{{% alert color="warning" %}}
You can only create a versioned deployment package of changes that have been committed. If you have local changes that you want to deploy in a versioned deployment package, commit them first.
{{% /alert %}}

When it creates the package, Studio Pro will also create a tag representing this version of your app. If you want to make modifications to this version later, independently of other development which has taken place, you can create a branch based on this tag. The name of the tag is a version number that you choose.

#### Deploying a Specific Version to a Mendix Licensed Cloud Node

If you are using Mendix Cloud, you can choose **App** > **Deploy to Licensed Cloud Node** to deploy a specific version.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/deploy-to-cloud.png" class="no-border" >}}

#### Creating a Deployment Package from a Specific Version

If you are using a different hosting environment, you create a deployment package using the menu item **App** > **Create Deployment Package**.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/create-deployment-package.png" class="no-border" >}}

## Read More

* [Advanced Branching and Merging Strategies](https://www.mendix.com/blog/advanced-branching-merging-strategies-part-1-2/)
