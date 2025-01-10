---
title: "Create Deployment Package"
url: /refguide/create-deployment-package-dialog/
---

## Introduction

A deployment package can be deployed to Mendix Cloud, another cloud provider (such as SAP BTP), or a server that is configured to run Mendix software. While developing, you can deploy and run on your local machine. But once you are ready to deploy your app elsewhere, you need to create a deployment package. For some platforms, this is done automatically as part of the deployment process—but for others, you need to explicitly create the deployment package.

{{< figure src="/attachments/refguide/modeling/menus/app-menu/create-deployment-package-dialog/create-deployment-package.png" alt="Create Deployment Package dialog" width="500" >}}

{{% alert color="warning" %}}
Most deployment targets have a limit on the uncompressed size of deployment package you can deploy. Here are some examples:

| Target | Maximum Deployment Package Size |
| --- | --- |
| Mendix Cloud | 1 GB |
| SAP BTP | 1.5 GB |
| Mendix for Private Cloud | 1024 MB |

This is the uncompressed size of the deployment package (*.mda* file). You can find the uncompressed size by opening your package file in a file archiving program such as [7-Zip](https://www.7-zip.org/) and looking at the file properties or **Info**.

Unfortunately, from the error shown on the log during deployment, it is not always clear if the package size is a problem. But if you have issues deploying your app, the package size is one possible cause.
{{% /alert %}}

## Versioned

Here, you can decide whether you will create a versioned deployment package.

A versioned deployment package is built from a fresh download of a specific revision held in the Team Server. This means that you can always trace its origin and recreate it. Mendix recommends creating versioned deployment packages unless you have very good reasons not to.

A non-versioned deployment package is based on your local app on disk and cannot be traced back to a specific revision.

## Options for Versioned Deployment Packages

If you are creating a versioned deployment package, enter the information outlined below. For more information on versioning, see [Version Control](/refguide/version-control/).

### Development Line

Choose the **Development line** for which you want to create a deployment package. This can be the main line or any branch line. For example, you might create a package from a maintenance branch line if you want to put a fix you implemented there online. Or you might create a deployment package from the main line because you are ready to deploy the next big version of your application.

### Revision

Choose the **Revision** of the selected development line for which you want to create a deployment package. It is common to choose the latest revision, but you can choose an older revision if needed. For example, you may want to use an older version if you want to exclude some recently developed functionality.

### New Version

Choose a **New version** for the deployment package. The version consists of four numbers: major version, minor version, patch, and revision. The revision is fixed and determined by the revision you selected for **Revision**.

You are free to choose the other numbers, but it is best practice to use a convention for the numbering. Major versions typically contain at least one major new feature or rewrites of existing features. A minor version contains small new features and fixes. A patch solves minor issues and does not change the data model of the application. A patch release is interchangeable with another patch release, with no changes to the data.

Studio Pro displays the latest version that you created a package for (if any). You can increase the major, minor, or patch number according to the convention you use.

### Description

You can enter a custom **Description** for this deployment package. It is purely for your own reference so that you can quickly recognize a package. The Mendix Portal displays this description along with the version number.

## File Name

For both versioned and non-versioned deployment packages, you need to know where the deployment package will be saved. This is shown in the **File name** field. This is not editable.

All packages are placed in a **releases** directory inside your app directory. This directory is automatically ignored so that these packages are not committed to the repository. You can always recreate a deployment package (using the Studio Pro version you originally used), so there is no need to put them on the Team Server.

## Troubleshooting

If you have difficulty creating a deployment package, it could be an issue with version control. For more information, see [Cannot Create Package from a Revision](/refguide/troubleshoot-version-control-issues/#cannot-create-package) in *Troubleshooting Version Control*.
