---
title: "File Differences Viewer"
url: /refguide/file-diff-viewer/
weight: 27
description: "Describes the File Differences Viewer, a built-in dialog box in Studio Pro for comparing text and file differences."
---

## Introduction

The **File Differences Viewer** is a dialog box in Studio Pro that displays text differences between two versions of a file or two text values. It opens as a modal dialog box and shows additions, deletions, and modifications with color-coded highlighting.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/file-diff-viewer/file-diff-viewer-split.png" alt="File Differences Viewer showing a side-by-side comparison with color-coded additions and deletions" class="no-border" >}}

## Accessing the File Differences Viewer

The File Differences Viewer opens automatically in the following scenarios:

* **Changes pane**: 
    * When you view changes at the object level and double-click a text property row, the File Differences Viewer opens to show the old and new values of that property.
    * When you review disk changes (such as Java source code or widget files), you can right-click a modified file and select **Compare with original**, or double-click it, to open the File Differences Viewer showing the differences between your working copy and the last committed version.
* **Comparison pane** – When you compare property values or files in the [Comparison pane](/refguide/comparison-pane/), clicking the **Compare** button opens the File Differences Viewer to show the differences.

## Toolbar

The File Differences Viewer toolbar contains the following buttons:

| Button | Action |
|--------|--------|
| **Refresh** | Reloads the file contents from disk. This is useful if you make changes to the file while the dialog box is open. This button is disabled when comparing text values. |
| **Split/Inline** toggle | Switches between split view (side-by-side) and inline view (unified). |

## Reading the Diff

The File Differences Viewer uses the following visual indicators to show differences:

* **Green background** – Lines or words that were added in the newer version.
* **Red background** – Lines or words that were removed from the older version.
* **Word-level highlighting** – Within changed lines, individual words that differ are highlighted with a darker shade to pinpoint exact changes.

In the split view, the older version is shown on the left and the newer version is shown on the right, with column headers **Older** and **Newer**. 

In the inline view, both versions are merged into a single column with the header **Differences**, where removed lines appear above added lines.

Line numbers are displayed for both sides to help you locate changes in the file.

## Read More

* [Changes Pane](/refguide/changes-pane/)
* [Comparison Pane](/refguide/comparison-pane/)
* [Comparing Revisions](/refguide/comparing-revisions/)
* [Using Version Control in Studio Pro](/refguide/using-version-control-in-studio-pro/)
