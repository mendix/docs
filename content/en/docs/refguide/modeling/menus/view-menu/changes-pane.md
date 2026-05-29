---
title: "Changes Pane"
url: /refguide/changes-pane/
weight: 20
description: "Describes the Changes pane in Mendix Studio Pro."
---

## Introduction 

For version control-enabled apps (apps with Team Server or other Git servers), the **Changes** pane shows the local changes to the app since the last commit. You can commit changes, update to the latest revision, and view the history from the pane. 

{{% alert color="info" %}}
The **Changes** pane shows your local changes since the last commit. To compare any historical revision to your current state, use the [Comparison pane](/refguide/comparison-pane/) instead. For more information, see [Comparing Revisions](/refguide/comparing-revisions/).
{{% /alert %}}

This pane consists of the following:

* The [top bar](#top-bar) contains various buttons, such as **Back**, **Go to**, and **Tasks**
* The [top level](#top-level) shows a list of documents that were changed, for example, a page where a widget was deleted
* The [zoomed-in level](#zoomed-in-level) of the pane is split into two grids, with elements in the left grid and changed or conflicting properties of the selected element in the right grid

## Top Bar {#top-bar}

The top bar of the top level of the **Changes** pane consists of various buttons:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/changes-pane/changes-top-bar.png" alt="Top Bar of the Changes Pane" class="no-border" >}}

The buttons allow you to perform the following actions:

* **Back** – goes back up one level; at the top level, this button is disabled
* **Go to** – opens a zoomed-in level and opens up the selected document 
* **Tasks** – allows you to perform specific actions such as reverting the change to the latest commit, or solving conflicts
* **Pull** – retrieves latest changes from the repository (for more information on the pull concept, see the [Pull](/refguide/version-control/glossary/#pull) section in *Version Control*) 
* **Commit** – commits your changes to the repository and starts a new revision (for more information on the commit concept, see the [Commit](/refguide/version-control/glossary/#commit) section in *Version Control*)
* **History** – opens the **History** pane that shows the changes made on the current development line of the app (for more information on history, see [History](/refguide/history-dialog/))

The **Back** and **Go to** buttons are common throughout all the levels, while other buttons will only apply to a specific one.

## Top Level {#top-level}

The top level of the **Changes** pane is a grid listing changed documents, for example, a page or a nanoflow:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/changes-pane/changes-top-level.png" alt="Top Level of the Changes Pane" class="no-border" >}}

The grid contains information on the following items:

* **Status** – shows the type of changes applied to the document. The status can be one of the following:
    * **Added** – a new document was created; indicated with a green circle
    * **Modified** – changes to an existing document were made, such as adding or deleting elements or changing element properties; indicated with a yellow circle
    * **Deleted** – a document was deleted; indicated with a red circle with a minus
    * **Conflicted** – a document contains conflicting changes; indicated with a red circle with an exclamation mark
* **Item** – indicates the name of the changed document
* **Module** – the module where the changed document is located
* **Details** – can contain details on the status, for example, when you have conflicting changes 

## Zoomed-In Level {#zoomed-in-level}

You can zoom into a changed or conflicting document by doing one of the following:

* Double-click a line in the grid on the top level 
* Click the **Go to** button
* Press <kbd>Enter</kbd>

To exit the zoomed-in level, click the **Back** button or press <kbd>Backspace</kbd>.

There are three types of zoomed-in levels:

* [For modified documents](#modified)
* [For conflicting documents](#conflicts)
* [For merging documents](#merge-mode)

Each of them contains its own set of buttons.

### Zoomed-In Level for Modified Documents {#modified}

The zoomed-in level for modified documents is split into two grids, with elements on the left and changed properties on the right. If no properties were changed for an element (for example, when an element was added or deleted), the right grid is empty:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/changes-pane/element-added.png" alt="No Properties to Show" class="no-border" >}}

The toolbar at this level contains the following buttons:

* **Back** – takes you back to the top level
* **Go to** – takes you directly to the changed element 
* **Show purely visual changes** – shows visual changes, such as dragging an entity to a new location in the domain model

For text-based properties, you can double-click a property row to open the [File Differences Viewer](/refguide/file-diff-viewer/), which shows a detailed side-by-side comparison of the old and new values. To compare file-level changes at the top level, double-click a file row or right-click and select **Compare with original**.


The left side of the grid contains the following columns:

* **Element** – the name of the modified element
* **Mine** – indicates the status of the change on the current development line

### Zoomed-In Level for Conflicted Documents {#conflicts}

The zoomed-in level for conflicted documents is split into two grids, with conflicting elements on the left and conflicting properties on the right.

There are two types of conflict:

* For a standard conflict, a change has been made to the same element in each branch and Mendix cannot automatically choose which is the desired change after the merge
* For a *list order* conflict, denoted by the phrase *(list order)*, Mendix can accept both changes but cannot automatically decide the order they should appear in the document

The toolbar at this level contains the following buttons:

* **Back** – takes you back to the top level
* **Go to** – takes you directly to the selected element
* **Interactive Merge** – combines changes where possible for all conflicting documents that you can revise in the [Merge Mode](#merge-mode); for more information on how to solve conflicts, see [Merge Algorithm with Fine-Grained Conflict Resolution](/refguide/merge-algorithm/) 
* **Resolve conflict using my whole document** – your version is applied to all conflicted documents
* **Resolve conflict using their whole document** – other branch's version is applied to all conflicted documents
* **Show purely visual changes** – shows visual changes, such as dragging an entity to a new location in the domain model

The grid on the left contains the following columns:

* **Element** – the name of the modified element or a header identifying whether the subsequent elements conflict or have been accepted
* **Mine** – indicates the status of the change on the current development line
* **Theirs** – the status of the incoming change on another development line

The grid on the right contains the following columns:

* **Property** – the property that was modified
* **Original** – the original property value
* **Mine** – the change to the property that was made on the current development line
* **Theirs** – the change to the property that was made on the other development line

{{< figure src="/attachments/refguide/modeling/menus/view-menu/changes-pane/merge-algorithm-conflicts.png" alt="Example of conflicts format of Changes pane" class="no-border" >}}

### Merge Mode {#merge-mode}

If you have chosen **Interactive Merge** when resolving conflicts, you can revise the combined changes.  

The document you are working on can be edited while in merge mode to allow you to resolve the conflict successfully.

The toolbar will change to show the following buttons:

* **Back** – takes you back to the top level
* **Go to** – takes you directly to the selected element
* **Resolve using Mine** – resolves the conflict by choosing the changes shown in the **Mine** column and discarding the changes shown in the **Theirs** column
* **Resolve using Theirs** – resolves the conflict by choosing the changes shown in the **Theirs** column and discarding the changes shown in the **Mine** column
* **Mark as Resolved** – does one of the following:
    * Keeps things as they were before the **Mine** and the **Theirs** changes were applied
    * In the case of a *list order* conflict, takes the order of widgets as it is currently shown in the document (you can edit the document to ensure this is correct)
* **Accept and Exit** – finalizes the merge and saves the document in its merged form with no conflicts
* **Cancel** – ends merge mode and leaves the document with one or more unresolved conflicts
* **Show purely visual changes** – shows visual changes, such as dragging an entity to a new location in the domain model

The left and right panes will contain the same information as in [Zoomed-In Level for Conflicted Documents](#conflicts), above.

## Read More

* [Studio Pro Overview](/refguide/studio-pro-overview/)
* [Version Control](/refguide/version-control/)
* [File Differences Viewer](/refguide/file-diff-viewer/)
* [Comparison Pane](/refguide/comparison-pane/)
* [Comparing Revisions](/refguide/comparing-revisions/) 
