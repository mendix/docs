---
title: "Changes Pane"
url: /refguide/changes-pane/
weight: 10
description: "Describes the Changes pane in Mendix Studio Pro."
tags: ["Studio Pro", "changes", "changes pane"]
---

## 1 Introduction 

For version control enabled apps (apps with Team Server or other SVN servers), the **Changes** pane shows the local changes to the app since the last commit. You can commit changes, update to the latest revision, and view the history from it. 

This pane consists of the following:

* The [top bar](#top-bar) contains various buttons, such as **Back**, **Go to**, **Tasks**. 
* The [top level](#top-level) shows you a list of documents that were changed, for example, a page where a widget was deleted
* The [zoomed-in level](#zoomed-in-level) of the pane is split into two grids, with elements in the left grid and changed or conflicting properties of the selected element in the right grid

## 2 Top Bar {#top-bar}

The top bar of the top level of the **Changes** pane consists of various buttons:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/changes-pane/changes-top-bar.png" alt="Top Bar of the Changes Pane" >}}

Buttons allow you to perform the following actions:

* **Back** – goes back up one level; at the top level, this button is disabled
* **Go to** – opens a zoomed-in level and opens up the selected document 
* **Tasks** – allows you to perform specific actions such as reverting the change to the latest commit, or solving conflicts
* **Update** – retrieves latest changes from the repository (for more information on the update concept, see the [Update](/refguide/version-control/#update) section in *Version Control*) 
* **Commit** – commits your changes to the repository and starts a new revision (for more information on the commit concept, see the [Commit](/refguide/version-control/#commit) section in *Version Control*)
* **History** – opens the **History** dialog box that shows the changes made on the current development line of the app (for more information on history, see [History](/refguide/history-dialog/))

The **Back** and **Go to** buttons are common throughout all the levels, while other buttons will only apply to a specific one.

## 3 Top Level {#top-level}

The top level of the **Changes** pane is a grid listing changed documents, for example, a page or a nanoflow:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/changes-pane/changes-top-level.png" alt="Top Level of the Changes Pane" >}}

The grid contains information on the following items:

* **Status** – shows the type of changes applied to the document. The status can be one of the following:
  * **Added** – a new document was created; indicated with a green circle
  * **Modified** – changes to an existing document were made, such as adding or deleting elements or changing element properties; indicated with a yellow circle
  * **Deleted** – a document was deleted; indicated with a red circle with a minus
  * **Conflicted** – a document contains conflicting changes; indicated with a red circle with an exclamation mark
* **Item** – indicates a name of the changes document
* **Module** – a module where the changed document is
* **Details** – can contain details on the status, for example, when you have conflicting changes 

## 4 Zoomed-In Level {#zoomed-in-level}

You can zoom into a changed or conflicting document, by doing one of the following:

* Double-click a line in the grid on the top level 
* Click the **Go to** button
* Press <kbd>Enter</kbd>

To exit the zoomed-in level, click the **Back** button or press <kbd>Backspace</kbd>.

There are three types of zoomed-in levels:

* [For modified documents](#modified)
* [For conflicting documents](#conflicts)
* [For merging document](#merge-mode)

Each of them contains their own set of buttons.

### 4.1 Zoomed-In Level for Modified Documents {#modified}

The zoomed-in level for modified documents is split into two grids, with elements on the left and changed properties on the right. If no properties were changed for an element, for example, when an element was added or deleted, the right grid will be empty:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/changes-pane/element-added.png" alt="No Properties to Show" >}}

The toolbar at this level contains the following buttons:

* **Back** – takes you back to the top level
* **Go to** – takes you directly to the changed element 
* **Show purely visual changes** – shows visual changes, such as dragging an entity to a new location in the domain model

The left side of the grid contains the following columns:

* **Element** – the name of the modified element
* **Mine** – indicates the status of the change on the current development line

### 4.2 Zoomed-In Level for Conflicted Documents {#conflicts}

The zoomed-in level for conflicted documents is split into two grids, with conflicting elements on the left and conflicting properties on the right.

{{% alert color="info" %}}
Mendix 9 has an improved conflict resolution method compared to Mendix 8. You can turn this off in the **Edit > Preferences > New features** dialog. If this is turned off, you should refer to the Mendix 8 version of this documentation [Changes Pane - Mendix 8](/refguide8/changes-pane/#conflicts).
{{% /alert %}}

There are two sorts of conflict:

* For a standard conflict a change has been made to the same element in each branch and Mendix cannot automatically choose which is the desired change after the merge
* For a *list order* conflict, denoted by the phrase *(list order)*, Mendix can accept both changes but cannot automatically decide the order they should appear in the document

The toolbar at this level contains the following buttons:

* **Back** – takes you back to the top level
* **Go to** – takes you directly to the selected element
* **Merge** – start the merge process — instructions for resolving conflicts are in the document [New Merge Algorithm with Fine-Grained Conflict Resolution](/refguide/new-merge-algorithm/) 
* **Show purely visual changes** – shows visual changes, such as dragging an entity to a new location in the domain model

The grid on the left contains the following columns

* **Element** – the name of the modified element or a header identifying whether the subsequent elements conflict or have been accepted
* **Mine** – indicates the status of the change on the current development line
* **Theirs** – the status of the incoming change on another development line

The grid on the right contains the following columns:

* **Property** – the property that was modified
* **Original** – the original property value
* **Mine** – the change to the property that was made on the current development line
* **Theirs** – the change to the property that was made on the other development line

{{< figure src="/attachments/refguide/modeling/menus/view-menu/changes-pane/new-merge-algorithm-conflicts.png" alt="Example of conflicts format of changes pane" >}}

### 4.3 Merge Mode{#merge-mode}

When you click **Merge** to start the merge mode, you will see options to resolve the conflicts. For more information on resolving resolving conflicts see [New Merge Algorithm with Fine-Grained Conflict Resolution](/refguide/new-merge-algorithm/).

The document you are working on can be edited while in merge mode to allow you to resolve the conflict successfully.

The toolbar will change to show the following buttons:

* **Back** – takes you back to the top level
* **Go to** – takes you directly to the selected element
* **Resolve using Mine** – resolves the conflict by choosing the changes shown in the **Mine** column and discarding the changes shown in the **Theirs** column
* **Resolve using Theirs** – resolves the conflict by choosing the changes shown in the **Theirs** column and discarding the changes shown in the **Mine** column
* **Mark as Resolved** – either:
    * keeps things as they were before the **Mine** and the **Theirs** changes were applied
    * in the case of a *list order* conflict, takes the order of widgets as it is currently shown in the document (you can edit the document to ensure this is correct)
* **Accept and Exit** – the merge is finalized and the document is saved in its merged form with no conflicts
* **Cancel** – end merge mode and leave the document with one or more unresolved conflicts
* **Show purely visual changes** – shows visual changes, such as dragging an entity to a new location in the domain model

The left and right panes will contain the same information as in [Zoomed-In Level for Conflicted Documents](#conflicts), above.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/changes-pane/new-merge-algorithm-resolve-mode.png" alt="Example of conflicts resolution format of changes pane" >}}

##  5 Read More

* [Studio Pro Overview](/refguide/studio-pro-overview/)
* [Version Control](/refguide/version-control/) 
