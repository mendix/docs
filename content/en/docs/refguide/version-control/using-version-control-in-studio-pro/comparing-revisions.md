---
title: "Comparing Revisions"
url: /refguide/comparing-revisions/
weight: 65
description: "How to compare a historical revision to your current state or compare any two commits to understand what changed."
---

## Introduction

You can compare revisions in your version-controlled app using the [Comparison pane](/refguide/comparison-pane/). You can compare a historical revision to your current working state, or compare any two selected commits. This helps you understand what has changed since a specific commit, see the impact of your recent edits, or review differences between two commits.

The comparison shows differences between:

* **Older revision** – the historical revision you selected or the first selected commit when comparing commits
* **Newer revision** – your current working state (for **Compare to current state**) or the second selected commit (for **Compare revisions (2/2 selected)**)

When you compare to your current state, the comparison includes your uncommitted changes.

For more information on the **Comparison** pane and its detailed overview, refer to [Comparison Pane](/refguide/comparison-pane/).

## Common Scenarios

### What Changed Since a Specific Commit?

You can review all changes made since a specific commit. This helps you understand the scope of work done since the selected commit, made by you or other team members.

### What Would Reverting to This Revision Undo?

Before reverting to an older revision, you can compare your current changes to a revision you are considering reverting to and review what changes will be lost. This helps you make an informed decision about whether reverting is safe or if it would undo important work.

### Will My Recent Changes Affect a Specific Area?

To check if your recent uncommitted changes affected a specific area of your app, do the following:

1. Open the **History** pane and select your most recent commit (HEAD).
2. Right-click and select **Compare to current state**.
3. Look for the documents or elements you are concerned about.

Because the comparison includes uncommitted changes, you can see the full impact of your current working session.

## Tips and Tricks

* **Use Expand all and Collapse all** –  In Level 3, use these options to quickly show or hide all nested property paths. This is especially useful when comparing complex elements with many properties.
* **Right-click any cell** – In the grids, right-click any cell and select **Copy** to copy the cell value to your clipboard. This is useful for documenting changes or sharing information with your team.
* **Press <kbd>Enter</kbd> to drill down** and <kbd>Backspace</kbd> to go back – Use these shortcuts while when navigating the comparison. This is faster than using the mouse to click buttons.
* **Understand version conversions** – When comparing older revisions, remember that model conversions may introduce minor differences in how properties are displayed. These differences do not affect your stored revisions.

## Read More

* [Comparison Pane](/refguide/comparison-pane/)
* [History](/refguide/history-dialog/)
* [Changes Pane](/refguide/changes-pane/)
* [Version Control](/refguide/version-control/)
* [Using Version Control History](/refguide/version-control-using-history/)
