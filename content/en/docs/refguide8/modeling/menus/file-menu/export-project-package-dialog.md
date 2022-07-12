---
title: "Export Project Package"
url: /refguide8/export-project-package-dialog/
weight: 30
tags: ["studio pro", "export app", "export project package"]
aliases:
    - /developerportal/support/export-a-project-package.html
    - /developerportal/support/export-a-project-package
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/export-project-package-dialog.pdf).
{{% /alert %}}

## 1 Introduction
You can export a project package (*.mpk*) from Mendix Studio Pro for backup purposes or to share it with other Mendix developers. This is useful if you want to give someone the entire app, or if you need to provide a test app when submitting a ticket.

Project packages can be imported again into a new app using the [Import Project Package](/refguide8/import-project-package-dialog/).

To export the package, open the **File** menu > **Export Project Package** and select the relevant options in the **Export Project Package** dialog box:

{{< figure src="/attachments/refguide8/modeling/menus/file-menu/export-project-package-dialog/export-project-package.png" alt="Export Project Package Dialog Window" >}}

 For more information on what options you can select, see the sections below. 

## 2 Destination

You can specify the folder to export the package to. The default location is a folder named *packages* inside the project directory.

## 3 Export Data

Mendix project packages can be exported to a Mendix package file (*.mpk*).  You can choose to export the built-in deployment database and uploaded files as well, or export with no data. You can choose one of the following options:

* **No data** – the package will be exported without data.

* **Existing snapshot** – this option will include the existing database snapshot in the export project package
  
	{{% alert color="info" %}}This option is only available when a snapshot has already been created. If necessary, you can create a snapshot via **Version Control** > **Add Snapshot of Data**.
	{{% /alert %}}
  
* **New snapshot from current database** – will create a new snapshot from the database and include it in the export

	{{% alert color="info" %}}This option is available after you run the app locally at least once, because a local database will be created when running the app for the first time.
	{{% /alert %}}

## 4 Read More

* [Import Project Package](/refguide8/import-project-package-dialog/)
* [Version Control Menu](/refguide8/version-control-menu/)
