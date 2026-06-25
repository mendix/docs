---
title: "Update Assistant (Beta)"
url: /refguide/update-assistant/
weight: 70
description: "Describes the Update Assistant (Beta) pane for scanning Java deprecations in Mendix Studio Pro."
---

## Introduction

The **Update Assistant (Beta)** pane scans the Java code in your app for deprecated APIs. You can use it to review detected deprecations, see where they occur, and inspect the affected code.

To open the **Update Assistant (Beta)** pane, select **View** > **Update Assistant (Beta)**.

The pane consists of a top bar and a results table.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/update-assistant/update-assistant-pane.png" alt="Update Assistant pane showing Java deprecations in a results table" >}}

## Top Bar {#top-bar}

The top bar contains the following buttons:

* **Check now** – scan your app for Java deprecations and refresh the results list
* **Marketplace Modules** – include Marketplace modules in the scan results
* **Export** – export the current scan results

## Results Table {#results-table}

The results table lists each detected deprecation and contains the following columns:

* **Type** – a Java icon for Java deprecations
* **Message** – the deprecation message
* **Module** – the module that contains the issue
* **Document** – the affected document, such as a Java action
* **File path** – the path to the affected Java file

Long messages and file paths can be truncated in the table. Double-click a row to open the full details for that result.

## Export {#export}

Click **Export** to export the detected deprecations to an `.xlsx` file.

The exported workbook contains one sheet named `Document deprecations` with the following columns:

* `Message` – the deprecation message
* `Module` – the module that contains the issue
* `Document` – the affected document
* `Path` – the path to the affected Java file
* `Line` – the line number of the deprecated code
* `Class` – the Java class that contains the deprecated member
* `Method` – the deprecated method
* `Marketplace module` – indicates with `true` or `false` whether the result belongs to a Marketplace module

## Deprecation Details {#deprecation-details}

Double-click a row to open a deprecation details dialog box for that file.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/update-assistant/deprecation-details-dialog.png" alt="Deprecation details dialog box showing the issue, file path, and highlighted deprecated code" class="no-border" >}}

This dialog box shows the following information:

* **Identified issue** – the deprecation message
* **File path** – the full path to the affected Java file; you can copy this path from the dialog box
* **Problem highlight** – a code snippet with the deprecated code highlighted

The highlighted code helps you locate the deprecated call in the file and update it.

## Read More

* [View Menu](/refguide/view-menu/)
* [Errors Pane](/refguide/errors-pane/)
* [Studio Pro Overview](/refguide/studio-pro-overview/)
