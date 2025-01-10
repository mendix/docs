---
title: "Export App Package"
url: /refguide/export-app-package-dialog/
weight: 30
aliases:
    - /refguide/export-project-package-dialog/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

You can export an app package (*.mpk*) from Mendix Studio Pro for backup purposes or to share it with other Mendix developers. This is useful if you want to give someone the entire app, or if you need to provide a test app when submitting a ticket.

App packages can be imported again into a new app using the [Import App Package](/refguide/import-app-package-dialog/).

To export the package, open the **File** menu > **Export App Package** and select the relevant options in the **Export App Package** dialog box:

{{< figure src="/attachments/refguide/modeling/menus/file-menu/export-app-package-dialog/export-app-package.png" alt="Export App Package Dialog Window" class="no-border"  >}}

For more information on what options you can select, see the sections below. 

## Package Type

Alternatively, you can export your app as an [Adaptable Solution](/appstore/creating-content/sol-adapt/). To be able to do it when exporting, open the **App settings** > **Solution** tab and set **Enable solution adaptation** to **Yes**. For more information on this setting, see the [Solution Tab](/refguide/app-settings/#solution) section in *App Settings*. 

You can now choose to export your app as the **Solution** or **Source Package**. 

{{< figure src="/attachments/refguide/modeling/menus/file-menu/export-app-package-dialog/export-app-package-types.png" alt="Export App Package Dialog Window with Different Package Types" class="no-border"  >}}

### Solution Package

{{% alert color="info" %}}
You can only see the **Solution** and **Source Package** settings when you have access to publishing add-on modules and solutions. The access can be gained through the [Mendix Partner Program](/appstore/partner-program/).
{{% /alert %}}

Choose this type of package if you develop your app as a solution and it has certain documents/elements hidden from consumers. Your app will be exported as a *.mxsolution* file; add-on and solution modules will be converted to the *.mxmodule* format during export. For more information on add-on and solution modules, see [Configuring Add-on and Solution Modules for Publishing](/refguide/configure-add-on-and-solution-modules/).

### Source Package

{{% alert color="info" %}}
You can only see the **Solution** and **Source Package** settings when you have access to publishing add-on modules and solutions. The access can be gained through the [Mendix Partner Program](/appstore/partner-program/).
{{% /alert %}}

A source package is used to distribute your app in the source format (i.e. all content is distributed with source code, which allows documents/elements to be changed on the consumer side). Your app is exported in the *.mpk* format. 

## Destination

You can specify the folder to export the package to. The default location is a folder named *packages* inside the app directory.

## Export Data

Mendix app packages can be exported to a Mendix package file (*.mpk*).  You can choose to export the built-in deployment database and uploaded files as well, or export with no data. You can choose one of the following options:

* **No data** – the package will be exported without data.
* **Existing snapshot** – this option will include the existing database snapshot in the export app package

    {{% alert color="info" %}}This option is only available when a snapshot has already been created. If necessary, you can create a snapshot via **Version Control** > **Add Snapshot of Data**.{{% /alert %}}

* **New snapshot from current database** – will create a new snapshot from the database and include it in the export

    {{% alert color="info" %}}This option is available after you run the app locally at least once, because a local database will be created when running the app for the first time.{{% /alert %}}

## Read More

* [Import App Package](/refguide/import-app-package-dialog/)
* [Version Control Menu](/refguide/version-control-menu/)
