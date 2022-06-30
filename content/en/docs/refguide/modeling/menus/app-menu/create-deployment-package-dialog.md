---
title: "Create Deployment Package"
url: /refguide/create-deployment-package-dialog/
tags: ["studio pro", "project menu", "deployment package"]
---

## 1 Introduction

A deployment package can be deployed to the Mendix Cloud, another cloud provider (for example SAP BTP), or on a server that is configured to run Mendix software. While developing you can deploy and run on your local machine, but once you are ready to deploy your app elsewhere you will need to create a deployment package. For some platforms, this is done automatically as part of the deploy process but, for others, you will need to explicitly create the deployment package.

{{< figure src="/attachments/refguide/modeling/menus/app-menu/create-deployment-package-dialog/create-deployment-package.png" alt="Create Deployment Package dialog" >}}

{{% alert color="warning" %}}
Most deployment targets have a limit on the uncompressed size of deployment package you can deploy. For example:

| Target | Maximum Deployment Package Size |
| --- | --- |
| Mendix Cloud | 1GB |
| SAP BTP | 1.5GB |
| Mendix for Private Cloud | 200MB |

This is the uncompressed size of the deployment package (.mda file). You can find the uncompressed size by opening your package file in a file archiving program such as [7-Zip](https://www.7-zip.org/) and look at the file properties or **Info**.

Unfortunately, from the error shown on the log during deployment is not always clear that the package size is a problem. But if you have issues deploying your app you should check the package size as one possible cause.
{{% /alert %}}

## 2 Versioned

Here you can decide whether you will create a versioned deployment package or not.

A versioned deployment package is built from a fresh download of a specific revision held in the Team Server. This means that you can always trace its origin and recreate it. We recommend that you create versioned deployment packages unless you have very good reasons.

A non-versioned deployment package is based on your local app on disk and cannot be traced back to a specific revision.

## 3 Options for Versioned Deployment Packages

If you are creating a versioned deployment package, you will need to enter the information described below. For more information on versioning, see [Version Control](/refguide/version-control/).

### 3.1 Development Line

Choose the **Development line** for which you want to create a deployment package. This can be the main line or any branch line. For example, you create a package from a maintenance branch line if your want to put a fix you implemented there online. Or you create a deployment package from the main line because you are ready to deploy the next big version of your application.

### 3.2 Revision

Choose the **Revision** of the selected development line for which you want to create a deployment package. One reason you may not want the latest revision is if you want to exclude some recently developed functionality.

### 3.3 New Version

Choose a **New version** for the deployment package. The version consists of four numbers: major version, minor version, patch and revision. The revision is fixed and determined by the revision you selected for **Revision**.

You are free to choose the other numbers, but it is wise to use a convention for the numbering. Major versions typically contain major new feature or rewrites of existing features. A minor version contains small new features and fixes. A patch solves minor issues and should not change the data model of the application. A patch release should be interchangeable with another patch release with no changes to the data.

Studio Pro will show you the latest version that you created a package for (if any). You can increase major, minor or patch according to the convention you use.

### 3.4 Description

You can enter a custom **Description** for this deployment package. It is purely for your own reference so that you can quickly recognize a package. The Developer Portal will show you this description along with the version number.

## 4 File Name

For both versioned and non-versioned deployment packages, you will need to know where the deployment package will be saved. This is shown in the **File name** field. This not editable.

All packages are placed in a directory **releases** inside your app directory. This directory is automatically ignored so that these packages will not be committed to the repository. You can always recreate a deployment package (using the  the Studio Pro version you originally used) so there is no need to put them on the Team Server.
