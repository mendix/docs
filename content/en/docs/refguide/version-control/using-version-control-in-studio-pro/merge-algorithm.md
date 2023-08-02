---
title: "Merge Algorithm with Fine-Grained Conflict Resolution"
linktitle: "Merge Algorithm and Conflict Resolution"
url: /refguide/merge-algorithm/
category: "Version Control"
weight: 10
description: "Describes a merge algorithm and how it resolves conflicts."
tags: ["merge", "algorithm", "conflict", "resolution"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A merge algorithm with fine-grained conflict resolution is used when you update your app or merge changes in it. The merge algorithm has the following features:

* **Fine-grained conflict resolution** – When there are conflicting changes in a document, you do not have to choose between whole documents: resolving a conflict using your change or using their change. Instead, you can resolve conflicts at the level of individual elements, such as widgets, entities, attributes, or microflow actions. Also, all non-conflicting changes from both sides are accepted automatically.
* **No conflicts on parallel changes to lists of widgets** – When two developers make changes to widgets in the same document there is no conflict, the changes are combined. However, if the changes are made too close to the same place in the document, a **list order conflict** is reported that reminds the developer who is merging the changes to decide on the final order of the widgets in the list. 

## 2 Resolving Conflict Example

A page document in your app is designed as shown below:

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/merge-algorithm/merge-algorithm-base-page.png" alt="Original page" >}}

Your colleague makes the following changes in the main line:

* The text *Home* is changed to *Welcome!*
* The subtitle *Welcome to your new app* is deleted
* A text *Write some text here* is added to the bottom layout grid

Your colleague's new document layout is shown below:

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/merge-algorithm/merge-algorithm-main-page.png" alt="Main line page" >}}

You make the following changes on a branch line:

* You change the text *Home* to *My homepage*
* You add a data grid inside the bottom layout grid

Your page is now laid out as shown below:

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/merge-algorithm/merge-algorithm-branch-page.png" alt="Branch line page" >}}

## 3 Resolving Conflicts

When you merge changes, the new algorithm shows you the following conflicts:

1. The text that both sides changed. 

2. A **list order conflict**. Both of you added widgets to the bottom layout grid. The merge algorithm cannot guess the right order for the two new widgets and it reports the list order conflict. This is a reminder for you (the developer who is doing the merge) to look at the final layout and confirm the order. 

    {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/merge-algorithm/merge-algorithm-conflicts.png" alt="Merge algorithm conflicts" >}}

To start solving conflicts first choose an approach for all conflicts that merge algorithm will apply:

* **Interactive Merge** – combines both changes where possible
* **Resolve using my whole document** – uses only changes from your branch and applies them to all conflicted documents
* **Resolve using their whole document** – uses only changes from the other branch and applies them to all conflicted documents

In this example, **Interactive Merge** was selected to resolve conflicts.

### 3.1 Resolving the First Conflict

**Interactive Merge** described above was selected for conflict resolution. Changes were partially combined and you can revise each conflict individually. 

For the first conflict, you can inspect changes and decide which version to apply. Select one of the lines that represent the conflict and choose **Resolve using Mine** or **Resolve using Theirs**.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/merge-algorithm/merge-algorithm-resolve-mode.png" alt="Conflict resolution mode" >}}

You will see the document update immediately after you click the button. If you are not satisfied with your choice, you can use undo to go back and try another option. 

{{% alert color="info" %}}
To use keyboard shortcuts <kbd>Ctrl</kbd>+<kbd>Z</kbd> and <kbd>Ctrl</kbd>+<kbd>Y</kbd> to undo your choice, click the document to focus it first.
{{% /alert %}}

There is a third option to deal with a conflict: **Mark as Resolved**. This means that you do not choose any side to resolve the conflict and will keep things the way they were in the original. Neither of the new text changes will be applied.

Once you have chosen one of the three options to resolve the conflict, green checkmarks will appear to indicate that this conflict has been dealt with.

### 3.2 Resolving the Second Conflict

The second conflict is a list order conflict. It is a reminder to take a look at the order of the widgets in the layout grid. You can arrange the widgets in the desired order in the page editor and then choose **Mark as Resolved** for the list order conflict. 

You can also decide to delete one of the widgets or add a new one. The document is fully editable while resolving conflicts. 

After resolving the second conflict, the bar at the top will turn green to indicate that all conflicts have been resolved.

Some changes will make it impossible to resolve conflicts using **mine** or **theirs**. For example, if you have not resolved the first conflict yet and you delete the *Home* text widget, you cannot resolve the first conflict any more, because the widget is simply not there. At that point, you can only mark the conflict as resolved.

### 3.3 Finishing Conflict Resolution

Once all conflicts have been resolved, click the **Accept and Exit** button to finalize the results. The document will be saved in its merged form and the conflict for that document will be gone. The result is the document that contains changes from both sides and possibly some manual edits.

At any time, you can also choose to abort conflict resolution by clicking the **Cancel** button. The conflict will remain and you can resolve it later.
