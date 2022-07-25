---
title: "Export an App Package"
url: /refguide7/export-project-package-dialog/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction
With this dialog box, you can export a Mendix project package (*.mpk*) from the Mendix Modeler. You can export a project package for backup purposes or to share it with other Mendix developers. This is useful if you want to give someone the entire application, or if you need to provide a test app when submitting a ticket.

To open the **Export Project Package** dialog box, open your project in the Mendix Modeler and then go to **File > Export Project Package**.

{{< figure src="/attachments/refguide7/desktop-modeler/dialogs/export-project-package-dialog/export-project-package-dialog.png" >}}

## 2 Package Destination

In the **Package destination** field, enter the location of the package file. The default location is a folder named **packages** inside the project directory.

## 3 Export Data

You can export a Mendix project package without data or with a database snapshot included. If you include a database snapshot, you need to select whether you include an existing snapshot or you include a new snapshot.

### 3.1 No Data

If you select **No data**, the project package will be exported without data included. After you click **Export**, the package will be exported to the selected package destination.

### 3.2 Existing Snapshot

If you select **Existing snapshot**, the existing database snapshot will be included in the export. After you click **Export**, the package with the existing snapshot will be exported to the selected package destination.

{{% alert color="info" %}}

This option is only available when a snapshot is already present. Snapshots can be created via **Project** > **More Versioning** > **Add Snapshot of Data**.

{{% /alert %}}

### 3.3 New Snapshot from Current Database 

If you select **New snapshot from current database**, a new snapshot will be created from the database and included in the export. After you click **Export**, the package with the new snapshot database will be exported to the selected package destination.

{{% alert color="info" %}}

This option becomes available after you run the app locally at least once, because a local database will be created when running the app for the first time.

{{% /alert %}}

## 4 Read More

* [Import Project Package](/refguide7/import-project-package-dialog/)
