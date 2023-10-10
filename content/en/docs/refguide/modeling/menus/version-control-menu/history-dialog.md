---
title: "History"
url: /refguide/history-dialog/
weight: 50
tags: ["studio pro"]
---
## 1 Introduction

Use the **History** dialog box to look at all the changes that have been committed to a development line of an app. This dialog box is also used when selecting a revision to merge from, create a branch line off of, or create a deployment archive of.

## 2 Revisions

{{< figure src="/attachments/refguide/modeling/menus/version-control-menu/history-dialog/revisions.png" alt="Revisions Image" >}}

Each line in the grid represents a revision in the repository. For each revision the following information is shown:

* [**Revision**](#revision)
* [**Changes**](#changes)
* [**Author**](#author)
* [**Date**](#date)
* [**Time**](#time)
* [**Message**](#message)

By selecting a revision in this grid, the tab pages below it will be filled with information about this revision.

### 2.1 Revision{#revision}

A unique alphanumeric identifier of the revision in the repository. Revision is unique for a whole repository.

### 2.2 Changes{#changes}

A visual summary of the changes in the selected revision, each icon represents different type of change:

| Icon | Change Type | Notes |
| --- | --- | --- |
| {{< figure src="/attachments/refguide/modeling/menus/version-control-menu/history-dialog/MergeRevision.png" width=32 alt="Merge commit icon" >}} | Merge commit | Indicates that commit is a merge of two different commits.<br/>Hover over will show both of parents [revisions](#revision). |
| {{< figure src="/attachments/refguide/modeling/menus/version-control-menu/history-dialog/RevChangesModel.png" width=32 alt="Model changes icon" >}} | Model changes | Indicates that there were some changes done to domain model.<br/>In example new entity was added, attribute renamed or connection changed. |
| {{< figure src="/attachments/refguide/modeling/menus/version-control-menu/history-dialog/RevChangesDisk.png" width=32 alt="Changes on disk icon" >}} | Changes on disk | Inidactes that there were changes on disk.<br/>In example a new file was added or removed. |
| {{< figure src="/attachments/refguide/modeling/menus/version-control-menu/history-dialog/RevChangesVersion.png" width=32 alt="Studio Pro changes icon" >}} | Studio Pro changes | Indicates that there was a change of Studio Pro version used for working with solution.<br/>In example when converting solution from previous version to the newest one. |
| {{< figure src="/attachments/refguide/modeling/menus/version-control-menu/history-dialog/Solution.png" width=32 alt="Solution version changes icon" >}} | Solution version changes| Indicates that there was an upgrade of based on solution. |

Hover over this column in Studio Pro to get a textual summary.

### 2.3 Author{#author}

The person who committed that change.

### 2.4 Date{#date}

The date of the revision creation, it can have of of below values:

* **Today** - shown when revision was created today.
* **Yesterday** - shown when revision was created yesterday.
* **date** - shown when above options do not apply.

### 2.5 Time{#time}

The time of the revision creation.

### 2.6 Message{#message}

The user entered message of the revision. If the message is long, you can more easily read it in the Message tab page below.

## 3 Message

This tab page shows the message a Studio Pro user entered when they committed these changes.

## 4 Related Stories

This tab page shows a list of stories that are related to the changes.

## 5 Changes in Model

This tab page shows a list of documents that were changed in the selected revision. From here you can quickly jump to the changed documents, assuming they still exist in the current version. The Mendix model version that was used to commit the revision is also shown. 

## 6 Changes on Disk

This tab page shows a list of the files that were changed on disk. You see whether files were added, deleted or modified.

## 7 Read More

* [Version Control](/refguide/version-control/)
* [Stories Pane](/refguide/stories-pane/)
