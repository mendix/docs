---
title: "History Dialog"
url: /refguide7/history-dialog/
---
## 1 Introduction

Use this dialog box to look at all the changes that have been committed to a development line of a project. The form is also used when selecting a revision: to merge from, to create a branch line of, or to create a deployment archive of.

## 2 Revisions

Each line in the grid represents a revision in the repository. For each revision the following information is shown:

*   **Revision** number – the number of the revision in the repository. Revision numbers do not have to be consecutive if there is also activity in other development lines. Revision numbers are unique for a whole repository.
*   **Changes** – a visual summary of the changes in the selected revision. It shows whether there are model changes, disk changes, and whether there was a change in the Desktop Modeler version that was used to commit the revision (green arrow up). Hover over this column to get a textual summary.
*   **Author** – the person who committed this revision.
*   **Date** – the date of the commit.
*   **Time** – the time of the commit.
*   **Message** – the user-entered message of the commit. If the message is long, you can more easily read it in the **Message** tab page below.

By selecting a revision in this grid, the tab pages below it will be filled with information about this revision.

## 2 Message

This tab page shows the message the Desktop Modeler user entered when they committed these changes.

## 3 Related Stories

This tab page shows a list of stories that are related to the changes.

## 4 Changes in Model

This tab page shows a list of documents that were changed in the selected revision. From here you can quickly jump to the changed documents, assuming they still exist in the current version. The Desktop Modeler version that was used to commit the revision is also shown.

## 5 Changes on Disk

This tab page shows a list of the files that were changed on disk. You see whether files were added, deleted, or modified.
