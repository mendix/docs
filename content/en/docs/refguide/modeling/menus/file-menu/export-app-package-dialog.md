---
title: "Export App Package"
url: /refguide/export-app-package-dialog/
weight: 30
aliases:
    - /refguide/export-project-package-dialog/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

You can export an app package (*.mpk*) from Studio Pro for backup purposes or to share it with other developers. This is useful when you want to give someone the entire app or when you need to provide a test app when submitting a ticket.

You can import app packages into a new app using the [Import App Package](/refguide/import-app-package-dialog/) feature.

To export the package, open the **File** menu > **Export App Package** and select the relevant options in the **Export App Package** dialog box:

{{< figure src="/attachments/refguide/modeling/menus/file-menu/export-app-package-dialog/export-app-package.png" alt="Export App Package Dialog Window" class="no-border"  >}}

The sections below describe the available options. 

## Package Type

You can also export your app as an [Adaptable Solution](/appstore/creating-content/sol-adapt/). To do this, open the **App settings** > **Solution** tab and set **Enable solution adaptation** to **Yes**. For more information on this setting, see the [Solution Tab](/refguide/solution-tab/) section in *App Settings*. 

You can then choose to export your app as **Solution** or **Source Package**. 

{{< figure src="/attachments/refguide/modeling/menus/file-menu/export-app-package-dialog/export-app-package-types.png" alt="Export App Package Dialog Window with Different Package Types" class="no-border"  >}}

### Solution Package

{{% alert color="info" %}}
You can only see the **Solution** and **Source Package** settings when you have access to publishing add-on modules and solutions. You can gain this access through the [Mendix Partner Program](/appstore/partner-program/).
{{% /alert %}}

Choose this package type if you develop your app as a solution and it has certain documents or elements hidden from consumers. Your app is exported as a *.mxsolution* file; add-on and solution modules are converted to the *.mxmodule* format during export. For more information on add-on and solution modules, see [Configuring Add-on and Solution Modules for Publishing](/refguide/configure-add-on-and-solution-modules/).

### Source Package

{{% alert color="info" %}}
You can only see the **Solution** and **Source Package** settings when you have access to publishing add-on modules and solutions. You can gain this access through the [Mendix Partner Program](/appstore/partner-program/).
{{% /alert %}}

A source package is used to distribute your app in the source format (that is, all content is distributed with source code, which allows documents and elements to be changed on the consumer side). Your app is exported in *.mpk* format. 

## Destination

You can specify the folder to export the package to. The default location is a folder named *packages* inside the app directory.

## Export Data

App packages can be exported to a package file (*.mpk*). You can choose to export the built-in deployment database and uploaded files or export with no data. Choose one of the following options:

* **No data** – the package is exported without data.
* **Existing snapshot** – this option includes the existing database snapshot in the exported app package.
{{% alert color="info" %}}This option is only available when a snapshot has already been created. If necessary, you can create a snapshot via **Version Control** > **Add Snapshot of Data**.{{% /alert %}}
* **New snapshot from current database** – creates a new snapshot from the database and includes it in the export.
{{% alert color="info" %}}This option is available after you run the app locally at least once, because a local database is created when running the app for the first time.{{% /alert %}}

## Read More

* [Import App Package](/refguide/import-app-package-dialog/)
* [Version Control Menu](/refguide/version-control-menu/)
