---
title: "Comparison Pane"
url: /refguide/comparison-pane/
weight: 25
description: "Describes the Comparison Pane in Mendix Studio Pro for comparing a revision to the current state of a version-controlled app."
---

## Introduction

The **Comparison** pane shows the differences between a selected historical revision and your current working state in a version-controlled app. This pane displays three levels of detail: which documents have changed, which elements within those documents have been altered, and which property values now differ.

This feature requires a version-controlled app. For apps without version control, the **Comparison** pane is disabled.

{{% alert color="warning" %}}
You can only compare a selected historical revision to your current working state. It is not possible to compare two past revisions to each other.
{{% /alert %}}

This feature is similar to the [Changes pane](/refguide/changes-pane/), but while the **Changes** pane shows your local modifications since your last commit, the **Comparison** pane shows differences between any historical revision and your current state.

For more information on comparing scenarios, refer to [Comparing Revisions](/refguide/comparing-revisions/).

## Accessing the Comparison Pane and Version Compatibility

To compare a revision to your current state, do the following:

1. Open the **History** pane by clicking **View** > **History**.
2. Right-click a revision from the list. 
3. Select **Compare to current state**.

The **Comparison** pane opens and shows all differences between the selected revision and your current working state, including any uncommitted changes.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/comparison-pane/history-right-click-menu.png" alt="Compare to current state option in History pane right-click menu" class="no-border" >}}

{{% alert color="warning" %}}
When comparing revisions created in older versions of Studio Pro, the models are automatically converted to the current Studio Pro version format. Due to this automatic conversion, the displayed older revision may not be 100% identical to the original model. This is a normal part of the version upgrade process and does not affect your actual stored revisions.
{{% /alert %}}

## Comparison Pane Overview

The **Comparison** pane shows information at three levels:

* **Level 1** – a list of all documents that differ between the two revisions
* **Level 2** – all elements within a selected document that have changed
* **Level 3** – the specific property values that differ for a selected element

Navigate between levels by double-clicking a row or clicking **Go to**. Press <kbd>Backspace</kbd> or click **Back** to return to the previous level.

### Unversioned App State

If your app does not have version control enabled, all buttons in the **Comparison** pane are disabled and a message indicates that version control is required.

### Level 1: Document List

Level 1 displays all documents that differ between the selected revision and your current state.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/comparison-pane/comparison-pane-level1.png" alt="Comparison Pane Level 1 showing document list" class="no-border" >}}

#### Task Bar

The task bar contains the following buttons:

| Button | Action | When Enabled |
|--------|--------|--------------|
| **Back** | Returns to the previous level | Always disabled at Level 1 (to prevent layout shift) |
| **Go to** | Opens the selected document and navigates to Level 2 or 3 | Enabled when a document is selected |
| **Stop comparison** | Closes the comparison and returns to the blank state | Always enabled during an active comparison |

#### Context Menu

Right-click any cell in the grid to access the **Copy** option, which copies the cell value to your clipboard.

#### Grid Columns

The document list grid contains the following columns:

| Column | Description | Elements It Shows |
|--------|-------------|---------------|
| **Status** | The type of change | An icon and label indicating whether the document was **Added**, **Modified**, or **Deleted** |
| **Item** | The document name | The name of the changed document (for example, a page, a microflow, or a domain model) |
| **Module** | The module location | The module that contains the document |

#### Status Types

The **Status** column shows one of the following types:

| Status | Icon | Meaning | When It Appears |
|--------|------|---------|-----------------|
| **Added** | Green circle | A new document was created | The document exists in the current state but not in the selected revision |
| **Modified** | Yellow circle | Changes were made to an existing document | The document exists in both revisions but has differences |
| **Deleted** | Red circle with minus | A document was removed | The document existed in the selected revision but not in the current state |

## Level 2 and 3: Element and Property Differences

Double-click a document in Level 1 to navigate to Level 2 and Level 3, which appear side by side. Level 2 shows changed elements, and Level 3 shows the property differences for the selected element.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/comparison-pane/comparison-pane-level2-3.png" alt="Comparison Pane Level 2 and Level 3 showing element and property differences" class="no-border" >}}

### Task Bar

The task bar at Level 2 and 3 contains the following buttons:

| Button | Action | When Enabled |
|--------|--------|--------------|
| **Back** | Returns to Level 1 | Always enabled |
| **Go to** | Focuses on the selected element in the document | Enabled when an element is selected; remains active even for deleted elements to support cross-tab navigation |
| **Expand all** | Expands all collapsed property tree rows in Level 3 | Always enabled when viewing Level 3 |
| **Collapse all** | Collapses all expanded property tree rows in Level 3 | Always enabled when viewing Level 3 |
| **Stop comparison** | Closes the comparison and returns to the blank state | Always enabled during an active comparison |

### Context Menu

Right-click any cell in either the Level 2 or Level 3 grid to access the **Copy** option.

### Level 2 Grid

The Level 2 grid shows all changed elements within the selected document:

| Column | Description | What It Shows |
|--------|-------------|---------------|
| **Status** | The type of change | An icon and label indicating whether the element was added, modified, or deleted |
| **Item** | The element name | The name of the changed element (for example, a widget, entity, or activity) |

Hover over any cell to see the full value in a tooltip.

### Level 3 Grid

The Level 3 grid shows the property-level differences for the element selected in Level 2:

| Column | Description | What It Shows |
|--------|-------------|---------------|
| **Property** | The property name | The name of the property that changed, shown as a tree structure |
| **Older** | The value in the selected revision | The property value as it was in the historical revision |
| **Newer** | The value in the current state | The property value as it is in your current working state |

Property paths are consolidated into a tree view. Grey rows represent intermediate path levels that do not have a direct value. The row order reflects the top-to-bottom, left-to-right order that the corresponding components appear in their dialog boxes.

## Opening Documents

When you click **Go to** or double-click a document entry in Level 1, the document opens as it currently exists in your app. If the document no longer exists in your current state, Level 2 and 3 is shown but nothing opens in the editor.

For text-based properties, you can double-click a property row or use the context menu to open a detailed side-by-side comparison in the [File Differences Viewer](/refguide/file-diff-viewer/). For file-type documents in Level 1, double-click or click **Go to** to open the File Differences Viewer instead of a document editor.

## Refresh Behavior

When you are comparing a revision to your current state and save changes to your app, a **Refresh** button appears in the **Comparison** pane. Click **Refresh** to update the comparison with your latest saved changes.

## Stopping a Comparison

Click **Stop comparison** to close the comparison. This action closes the **Comparison** pane and returns it to a blank state. Any documents that were opened as part of the comparison remain open in the editor.

In the blank state, the **Comparison** pane displays a message with a link to start a new comparison. The **Go to** and **Stop comparison** buttons are disabled until a new comparison is started.

## Read More

* [File Differences Viewer](/refguide/file-diff-viewer/)
* [History](/refguide/history-dialog/)
* [Changes Pane](/refguide/changes-pane/)
* [Comparing Revisions](/refguide/comparing-revisions/)
* [Version Control](/refguide/version-control/)
