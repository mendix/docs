---
title: "Update Assistant (Beta)"
url: /refguide/update-assistant/
weight: 70
description: "Describes the Update Assistant (Beta) pane for scanning Java and JavaScript code for deprecated Mendix APIs in Mendix Studio Pro."
---

## Introduction

The **Update Assistant (Beta)** pane scans the code in your app for deprecated Mendix APIs. You can use it to review the findings, see where they occur, and inspect the affected code.

The pane has two scanners:

* **Runtime API** – This compiles the Java code in your app, such as Java actions, and finds calls to deprecated Mendix Runtime APIs.
* **Client API** – This scans the JavaScript files in your app, such as JavaScript actions, and finds calls to deprecated Mendix Client APIs.

To open the **Update Assistant (Beta)** pane, select **View** > **Update Assistant (Beta)**.

The pane consists of a top bar, a results table, and a details panel next to the table. You can drag the divider between the results table and the details panel to change their sizes.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/update-assistant/update-assistant-pane.png" alt="Update Assistant pane showing findings in a results table and the details of the selected finding" >}}

## Top Bar {#top-bar}

The top bar contains the following buttons:

* **Runtime API** – This button shows or hides the findings of the Runtime API scanner.
* **Client API** – This button shows or hides the findings of the Client API scanner.
* **Check now** – This button scans your app with both scanners and refresh the results; while a scan runs, this button changes to **Cancel**, which stops the scan.
* **Marketplace Modules** – This button shows or hides the findings in Marketplace modules; these findings are hidden by default.

The **Runtime API**, **Client API**, and **Marketplace Modules** buttons only filter the results of the last scan. You do not have to scan again after you change them.

## Results Table {#results-table}

The results table lists each finding and contains the following columns:

* **Type** – A Java icon for Runtime API findings, or a JavaScript icon for Client API findings.
* **Message** – A description of the finding.
* **Module** – The module that contains the finding.
* **Document** – The affected document, such as a Java action or a JavaScript action.
* **File path** – The path to the affected file; click the copy button next to the path to copy it.

Long messages and file paths can be truncated in the table. Select a row to show the full details of that finding in the details panel.

Findings in add-on modules and solution modules are not shown.

When the table has no findings to show, the pane shows a message instead. For example, the message tells you that your app has no findings, that your current filters hide all findings, or that a scan failed.

## Finding Details {#finding-details}

The details panel shows the finding that you select in the results table. It contains the following information:

* **Identified issue** – The full message of the finding.
* **Code snippet** – The code around the finding, with the affected line highlighted.
* **Suggested** – The suggested change to the code, shown as a comparison of the current code and the new code.

The **Suggested** tab is only available for Client API findings that can be migrated. For a Client API finding that needs manual review, and for Runtime API findings, the details panel only shows the code snippet.

## Fixing Mendix Java API Deprecations and Removals {#fixing-deprecations}

You can use the [Java Migration Tool](/refguide/java-migration-tool/), a command-line utility to rewrite deprecated and removed Mendix Java API calls in your app's source files. Use the **Update Assistant** pane to identify what needs fixing, then run the tool to apply the changes.

## Read More

* [View Menu](/refguide/view-menu/)
* [Errors Pane](/refguide/errors-pane/)
* [Studio Pro Overview](/refguide/studio-pro-overview/)
