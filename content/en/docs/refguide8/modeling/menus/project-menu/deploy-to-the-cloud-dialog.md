---
title: "Deploy to the Cloud"
url: /refguide8/deploy-to-the-cloud-dialog/
tags: ["studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/deploy-to-the-cloud-dialog.pdf).
{{% /alert %}}

## 1 Introduction

This menu option dialog creates a versioned deployment package and deploys it to your environment in the Mendix Cloud.

{{< figure src="/attachments/refguide8/modeling/menus/project-menu/deploy-to-the-cloud-dialog/deploy-to-the-cloud.png" alt="Deploy to the Cloud dialog" >}}

## 2 Development Line

Choose the **Development line** for which you want to create a deployment package. This can be the main line or any branch line. For example, you create a package from a maintenance branch line if your want to put a fix you implemented there online. Or you create a deployment package from the main line because you are ready to deploy the next big version of your application.

## 3 Revision

Choose the **Revision** of the selected development line for which you want to create a deployment package. One reason you may not want the latest revision is if you want to exclude some recently developed functionality.

## 4 New Version

Choose a **New version** for the deployment package. The version consists of four numbers: major version, minor version, patch and revision. The revision is fixed and determined by the revision you selected for **Revision**.

You are free to choose the other numbers, but it is wise to use a convention for the numbering. Major versions typically contain major new feature or rewrites of existing features. A minor version contains small new features and fixes. A patch solves minor issues and should not change the data model of the application. A patch release should be interchangeable with another patch release with no changes to the data.

Studio Pro will show you the latest version that you created a package for (if any). You can increase major, minor or patch according to the convention you use.

## 5 Description

You can enter a custom **Description** for this deployment package. It is purely for your own reference so that you can quickly recognize a package. The Developer Portal will show you this description along with the version number.

## 6 App

This shows the **App** in the Mendix Cloud where the deployment package will be deployed. This is for information only, you cannot change the destination here.

## 7 Licensee

This shows the **Licensee** of this licensed node.
