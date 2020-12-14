---
title: "New Merge Algorithm with Fine-Grained Conflict Resolution"
parent: "version-control"
tags: ["merge", "algorithm", "conflict", "resolution"]
---

## 1 Introduction
    
The new merge algorithm with fine-grained conflict resolution is used when you update your project or merge changes in it. The new algorithm has the following features: 
    
* **Fine-grained conflict resolution** – When there are conflicting changes in a document, you do not have to choose between whole documents: resolving a conflict using your change or using their change. Instead, you can resolve conflicts at the level of individual elements, such as widgets, entities, attributes, and microflow actions. Also, all non-conflicting changes from both sides are accepted automatically.
    
* **No conflicts on parallel changes to lists of widgets** – When two developers make changes to the same list of widgets, there is no conflict, the changes are combined. However, if the changes are too close, a **list order conflict** is reported that reminds the developer who is merging the changes to decide on the final order of the widgets in the list. 
    
* **Accepting one of the changes automatically in certain cases** – There are some cases where the new algorithm does not give a conflict. For example, one developer has moved an entity and the other has deleted it. The entity will be deleted in this case.

## 2 Enabling the New Algorithm with Fine-Grained Conflict Resolution

{{% alert type="info" %}}
Make sure that you repository is in a clean state: everything has been committed and there are no outstanding changes or conflicts. 
{{% /alert %}}

To enable the new algorithm, do the following:

1. In the Studio Pro top bar, go to **Edit** > **Preferences** > **New features**. 

2. In the **Version Control** section, enable the **New merge algorithm with fine-grained conflict resolution option**.

3. Restart Studio Pro.

For more information, see [Preferences](preferences-dialog).

## 3 Resolving Conflict Example

You have a page in your app project that looks the following way:

![Original page](attachments/new-merge-algorithm/new-merge-algorithm-base-page.png)

Your colleague makes the following changes in the main line:

* The text *Home* is changed to *Welcome!*
* A Mendix logo is added above the text *Welcome!*
* The subtitle *Welcome to your new app* is deleted
* A text *Write some text here* is added to the bottom layout grid

This results in the page looking the following way:

![Main line page](attachments/new-merge-algorithm/new-merge-algorithm-main-page.png)

You make the following changes on a branch line:

* The text *Home* is changed to *My homepage*
* A data grid is added to the bottom layout grid

The page looks the following way:

![Branch line page](attachments/new-merge-algorithm/new-merge-algorithm-branch-page.png)

### 3.1 Resolving Conflicts

When you merge changes, the new algorithm shows you the following conflicts:

1. The text that both sides changed. 

2. The so-called **list order conflict**. Both people added widgets to the bottom layout grid. The merge algorithm cannot guess the right order of two new widgets and it reports the list order conflict. This is a reminder for the developer who is doing the merge to look at the final list. 

    ![New algorithm conflicts](attachments/new-merge-algorithm/new-merge-algorithm-conflicts.png)

To start the resolution process, click the **Resolve...** button. The page is opened in a special mode with an orange tab:

![Document with orange tab](attachments/new-merge-algorithm/new-merge-algorithm-orange-tab.png)

The following non-conflicting changes have already been applied to the page:

* The Mendix logo is added above the text *Home* (main line)
* The subtitle is deleted (main line)
* The text widget is added to the bottom layout grid (main line)
* A data grid is added to the bottom layout grid (branch line)

#### 3.3.1 Resolving the First Conflict

For the first conflict, you can inspect changes and decide which version to apply. Select one of the three lines that represent the conflict and choose **Resolve using Mine** or **Resolve using Theirs**. 

![Conflict resolution mode](attachments/new-merge-algorithm/new-merge-algorithm-resolve-mode.png)

You will see the document update immediately after you click the button. If you are not satisfied with your choice, you can use undo to go back and try another option. 

{{% alert type="info" %}}
To use keyboard shortcuts <kbd>Ctrl</kbd>+<kbd>Z</kbd> and <kbd>Ctrl</kbd>+<kbd>Y</kbd> to undo your choice, click the document to focus it first.
{{% /alert %}}

There is a third option to deal with a conflict: **Mark as Resolved**. This means that you do not choose any side to resolve the conflict and will keep things the way they were in the original.

Once you have chosen one of the three options to resolve the conflict, green checkmarks will appear to indicate that this conflict has been dealt with.

#### 3.3.2 Resolving the Second Conflict

The second conflict is a list order conflict. It is a reminder to take a look at the order of the widgets in the 
layout grid. You can arrange the widgets in the desired order in the page editor and then choose **Mark as Resolved** for the list order conflict.

You can also decide to delete one of the widgets or add a new one. The page is fully editable while resolving conflicts. 

Some changes will make it impossible to resolve conflicts using **mine** or **theirs**. For example, if you had not resolved the first conflict yet and you delete the *Home* text widget, you cannot resolve the first conflict anymore, because the widget is simply not there. At that point, you can only mark the conflict as resolved:

![Conflict cannot be resolved](attachments/new-merge-algorithm/new-merge-algorithm-cannot-resolve.PNG)

#### 3.3.3 Finishing Conflict Resolution

Once all conflicts have been resolved, click the **Accept and Exit** button to finalize the results. The document will be saved in its merged form and the conflict for that document will be gone. The result is the document that contains changes from both sides and possibly some manual edits.

At any time, you can also choose to abort conflict resolution by clicking the **Cancel** button. The conflict will remain and you can resolve it later.

