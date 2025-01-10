---
title: "History"
url: /refguide8/history-dialog/
weight: 50
---

## Introduction

Use the **History** dialog box to look at all the changes that have been committed to a development line of an app. This dialog box is also used when selecting a revision to merge from, create a branch line off of, or create a deployment archive of.

## Revisions

Each line in the grid represents a revision in the repository. For each revision the following information is shown:

* **Revision** number – the number of the revision in the repository. Revision numbers do not have to be consecutive if there is also activity in other development lines. Revision numbers are unique for a whole repository.
* **Changes** – a visual summary of the changes in the selected revision. It shows whether there are model changes, disk changes and whether there was a change in Studio Pro version that was used to commit the revision (green arrow up). Hover over this column to get a textual summary.
* **Author** – the person who committed this revision.
* **Date** – the date of the commit.
* **Time** – the time of the commit.
* **Message** – the user entered message of the commit. If the message is long, you can more easily read it in the Message tab page below.

By selecting a revision in this grid, the tab pages below it will be filled with information about this revision.

## Message

This tab page shows the message a Studio Pro user entered when they committed these changes.

## Related Stories

This tab page shows a list of stories that are related to the changes.

## Changes in Model

This tab page shows a list of documents that were changed in the selected revision. From here you can quickly jump to the changed documents, assuming they still exist in the current version. The Mendix model version that was used to commit the revision is also shown. 

## Changes on Disk

This tab page shows a list of the files that were changed on disk. You see whether files were added, deleted or modified.

## Read More

* [Version Control](/refguide8/version-control/)
* [Stories Pane](/refguide8/stories-pane/)
