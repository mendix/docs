---
title: "History"
url: /refguide/history-dialog/
weight: 50
description: "Describes the History pane in Studio Pro, which shows committed changes to an app's development line."
---
## Introduction

Use the **History** pane to see the changes that have been committed to a development line of an app. You can open this pane by selecting **Version Control** > **History** from the menu. The **History** pane displays all revisions at once in a searchable grid, making it easy to view the detailed project history.

{{% alert color="info" %}}
Studio Pro 11.6 introduced a new default view for History. Partially cloned apps automatically use the older blocking dialog. You can also choose to keep using the blocking dialog for all apps through the [Version Control Preferences](/refguide/preferences-dialog/#history-pane).

The Revision Selector still uses the blocking dialog when you select a revision to revert, merge from, create a branch line from, or create a deployment archive from.

For more information on the blocking dialog, see the [Mendix 10 documentation](/refguide10/history-dialog/).
{{% /alert %}}

## Revisions

{{< figure src="/attachments/refguide/modeling/menus/version-control-menu/history-dialog/revisions.png" alt="History pane showing a grid of revisions" class="no-border" >}}

Each line in the grid represents a revision in the repository. 

### Search and Filters

There are different filter options available to help find specific revisions:

* The search bar looks in all fields of the revisions grid and in the details of the commit, such as the Model changes, Disk changes and Stories.
* The date filter allows specifying a date range for revisions. The available presets help to quickly select a range.
* The document filter allows selecting a document, such as a specific microflow, to filter all revisions on.

### Content

For each revision the following information is shown, more information about each of these values is available below:

* [Revision](#revision)
* [Status](#status)
* [Author](#author)
* [Date/Time](#datetime)
* [Message](#message)

By selecting a revision in this grid, the tabs below the grid will be filled with information about this revision.

### Comparing Revisions

To compare any revision to your current working state, right-click a revision and select **Compare to current state**. This opens the [Comparison pane](/refguide/comparison-pane/), which shows all differences between the selected revision and your current state, including uncommitted changes.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/comparison-pane/history-right-click-menu.png" alt="Right-click menu showing Compare to current state option" class="no-border" >}}

For more information, see [Comparing Revisions](/refguide/comparing-revisions/).

#### Revision{#revision}

A unique alphanumeric identifier of the revision in the repository. The revision identifier is the Git hash for the commit and is unique for a whole repository.

#### Status{#status}

Shows the state of the revision in relation to the server. It can have one of the following values:

* **Synced** – shown when revision exists locally as well as on the server
* **Local** – shown when the revision is only available locally, because a local commit was made
* **On server** – shown when the revision is only available on the server; this is an indicator there is incoming work that will have to be merged before being able to push new commits to the server

#### Author{#author}

The person who committed the change.

#### Date/Time{#datetime}

The date the revision was created.

#### Message{#message}

The message saved with the commit. If the message is long, you can read it more easily in the **Message** tab page by selecting the revision.

## Details of Revisions

On the right of the grid are a number of tabs which give further details about the currently-selected revision.

### Message

This tab shows the message saved when these changes were committed.

The **Mendix version** that was used to commit the revision to the model is also shown. 

### Model Changes

This tab shows a list of documents that were changed in the selected revision. From here you can jump to the currently selected changed document by clicking **Go to**, assuming the document still exists in the current version.

The search bar within the tab can be used to filter the list of documents.

### Disk Changes

This tab shows a list of the files that were changed on disk. You can see whether files were added, deleted or modified. To compare a modified file with its committed version, use **Compare with original** in the [Changes pane](/refguide/changes-pane/), which opens the [File Differences Viewer](/refguide/file-diff-viewer/).

The search bar within the tab can be used to filter the list of files.

### Stories

This tab shows a list of stories that are related to the changes.

## Read More

* [Version Control](/refguide/version-control/)
* [Stories Pane](/refguide/stories-pane/)
* [Using Version Control History](/refguide/version-control-using-history/)
* [Comparison Pane](/refguide/comparison-pane/)
* [Comparing Revisions](/refguide/comparing-revisions/)
