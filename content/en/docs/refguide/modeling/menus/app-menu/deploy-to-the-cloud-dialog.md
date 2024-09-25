---
title: "Deploy to the Cloud"
url: /refguide/deploy-to-the-cloud-dialog/
---

## Introduction

This menu option dialog creates a versioned deployment package and deploys it to your environment in Mendix Cloud.

{{< figure src="/attachments/refguide/modeling/menus/app-menu/deploy-to-the-cloud-dialog/deploy-to-the-cloud.png" alt="Deploy to the Cloud dialog" width="500" >}}

## Development Line

Choose the **Development line** for which you want to create a deployment package. This can be the main line or any branch line. For example, you might create a package from a maintenance branch line if you want to put a fix you implemented there online. Or you might create a deployment package from the main line because you are ready to deploy the next big version of your application.

## Revision

Choose the **Revision** of the selected development line for which you want to create a deployment package. It is common to choose the latest revision, but you can choose an older revision if needed. For example, you may want to use an older version if you want to exclude some recently developed functionality.

## New Version

Choose a **New version** for the deployment package. The version consists of four numbers: major version, minor version, patch, and revision. The revision is fixed and determined by the revision you selected for **Revision**.

You are free to choose the other numbers, but it is best practice to use a convention for the numbering. Major versions typically contain at least one major new feature or rewrites of existing features. A minor version contains small new features and fixes. A patch solves minor issues and does not change the data model of the application. A patch release is interchangeable with another patch release, with no changes to the data.

Studio Pro displays the latest version that you created a package for (if any). You can increase the major, minor, or patch number according to the convention you use.

## Description

You can enter a custom **Description** for this deployment package. It is purely for your own reference so that you can quickly recognize a package. The Mendix Portal displays this description along with the version number.

## App

This shows the **App** in Mendix Cloud where the deployment package will be deployed. This is for information only; you cannot change the destination here.

## Licensee

This shows the **Licensee** of this licensed node.
