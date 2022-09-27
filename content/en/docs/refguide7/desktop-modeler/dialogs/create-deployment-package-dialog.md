---
title: "Create Deployment Package Dialog"
url: /refguide7/create-deployment-package-dialog/
---

## 1 Introduction

With this dialog box, you can create a deployment package. A deployment package can be deployed on the Developer Portal or on a server that is configured to run Mendix software. While developing you can deploy and run on your local machine, but once you are ready to deploy your project on a real server you will need to create a deployment package.

To open the **Create Deployment Package** dialog box, go to **Project > Create Deployment Package**.

{{< figure src="/attachments/refguide7/desktop-modeler/dialogs/create-deployment-package-dialog/create-deployment-package-dialog.png" >}}

## 2 Versioned

If you select **Yes** for **Versioned**, a versioned deployment package is built from a fresh download of a specific revision in the Team Server. This means that you can always trace its origin and recreate it.

If you select **No** for **Versioned**, an unversioned deployment package will be built based on your local project on disk. An unversioned deployment package cannot be traced back to a specific revision. Therefore, we recommend that you create versioned deployment packages unless you have very good reasons.

## 3 Development Line (for Versioned)

Choose the **Development line** for which you want to create a deployment package. This can be the main line or any branch line. For example, you create a package from a maintenance branch line if your want to put a fix you implemented there online. Or you create a deployment package from the main line because you are ready to deploy the next big version of your application.

## 4 Revision (for Versioned)

Choose the **Revision** of the selected development line for which you want to create a deployment package. This is not necessarily the latest revision because you might want to exclude some recently developed functionality.

## 5 New Version (for Versioned)

Choose a **New version** for the deployment package. The version consists of four numbers: **Major** version, **Minor** version, **Patch**, and **Revision**. The revision is fixed and determined by the revision you selected for **Revision**.

You are free to choose the other numbers, but it is wise to use a convention for the numbering. Major versions typically contain major new features or rewrites of existing features. A minor version contains small new features and fixes. A patch solves minor issues and should not change the data model of the application. A patch release should be interchangeable with another patch release with no changes to the data.

The Desktop Modeler will show you the latest version that you created a package for (if any). You can increase major, minor, or patch according to the convention you use.

## 6 Description (for Versioned)

You can enter a custom **Description** for this deployment package. It is purely for your own reference so that you can quickly recognize a package. The Developer Portal will show you this description along with the version number.

## 7 Disk Location

This shows the location where the deployment package will be placed. This is not editable. All packages are placed in a directory called **releases** inside your project directory. This directory is automatically ignored so that these packages will not be committed to the repository. You can always recreate a deployment package (assuming you have the Desktop Modeler version you used) so there is no need to put them on the Team Server.
