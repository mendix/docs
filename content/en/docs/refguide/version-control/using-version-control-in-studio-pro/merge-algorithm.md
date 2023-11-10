---
title: "Combining Changes and Conflict Resolution"
linktitle: "Combining Changes and Conflict Resolution"
url: /refguide/merge-algorithm/
category: "Version Control"
weight: 10
description: "Describes combining changes with conflict resolution flow."
tags: ["rebase", "mine", "theirs", "merge", "conflict"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
aliases:
    - /refguide/new-merge-algorithm
---

## 1 Introduction

While working on your changes it may happen that your current workspace won't have all the changes from the server that other members had done.
In git terminology this is called being behind.

When this happens you shall be introduced with two possibilities of combining your work with theirs.

You can select [Merge](#merge) or [Rebase](#rebase), while both are used to combine changes they work slighlty differently.

Both of those support the same features were it comes to [resolving the conflicts](#resolve) themself:

* **Fine-grained conflict resolution** – When there are conflicting changes in a document, you do not have to choose between whole documents: resolving a conflict using your change or using their change. Instead, you can resolve conflicts at the level of individual elements, such as widgets, entities, attributes, or microflow actions. Also, all non-conflicting changes from both sides are accepted automatically.
* **No conflicts on parallel changes to lists of widgets** – When two developers make changes to widgets in the same document there is no conflict, the changes are combined. However, if the changes are made too close to the same place in the document, a **list order conflict** is reported that reminds the developer who is merging the changes to decide on the final order of the widgets in the list. 

## 2 Work Example 

### 2.1 Starting point 

Let's work on below example. Where we have two entities 'User' and 'Game'. This will be a starting point for your work.   

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/DomainModel/Starting_State.png" alt="Domain Model Commit 1" >}} 

### 2.2 Your work 

During your work you make two changes, each one in separate commit. 

In first commit you decide that 'E-mail' should be renamed to 'Email' 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/DomainModel/First_Local_Commit.png" alt="Your Work Commit 4" >}} 

In the next commit you rename 'Second E-mail' to be consistent with previous change. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/DomainModel/Second_Local_Commit.png" alt="Your Work Commit 5" >}}   

### 2.3 Server Changes 

In the meantime, your colleague also decided to make some changes to both email fields. 

Renaming 'E-mail' to 'EmailAddress' and removing 'Second_E-mail' entirely and pushing those changes to the server.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/DomainModel/Remote_State.png" alt="Remote Work Commit 2" >}} 

### 2.4 Summary 

Current situation could be represent as shown below: 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/rebase-mine-theirs/Step1.png" alt="Step 1" >}} 

## 3 Combining Changes

### 3.1 Rebase {#rebase}

Rebasing is one way to integrate your work with the server changes by moving your changes to the tip of the server.

Due to git framework, during rebase, there is a slight terminology change in Studio Pro compared to merge.   

#### 3.1.1 Rebase started 

After starting to rebase your two commits shall be put aside, and Studio Pro will show changes from the tip of server. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_Step_1.png" alt="Rebase Step 1" >}} 

{{% alert color="info" %}}
Your work shall be now referenced as 'Theirs', while server changes shall be 'Mine' 
{{% /alert %}}

#### 3.1.2 Resolving the First Conflict  

Git will try to apply your first commit to the tip. During this process a conflict will be detected. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Conflicts/Rebase_First.png" alt="First conflict rebase" >}} 

In the above example you can see that your work is represented in the 'Theirs' column while your colleague's work is 'Mine'. 

After resolving conflicts, commit shall be applied. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_Step_2.png" alt="Rebase Step 2" >}} 

#### 3.1.3 Resolving the Second Conflict 

Rebasing the next commit also detects conflict. During resolving it you decide to add another attribute 'Login', to the 'User' entity.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Conflicts/Rebase_Mine_Change.png" alt="New change during conflict rebase" >}} 

Above you can see that your new change is represented as 'Mine', together with changes that were taken from the server. 

After resolving conflicts, commit shall be applied. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_Step_3.png" alt="Rebase Step 3" >}} 

#### 3.1.4 Test Changes 

After rebased process is finished your previous work that was put aside is now removed, and your rebased work is still local. 

Now you have time to re-test all those changes, and later push it to the server. 
 
{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_Step_4.png" alt="Rebase Step 4" >}}

#### 3.1.5 Push Changes 

After you pushed your work to the server state of it is represented below:

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_Step_5.png" alt="Rebase Step 5" >}}

### 3.2 Merge {#merge}

Merge is another way you could use to integrate you work with remote changes by combining them using special merge commit.

#### 3.2.1 Merge started 

After starting merge process your two commits Studio Pro will start merging one commit at the time. 

// NEED IMAGE MERGE_STEP_1 
{{% alert color="info" %}}
Your work shall be now referenced as 'Mine', while server changes shall be 'Theirs’. 
{{% /alert %}}

#### 3.2.2 Resolving the First Conflict

Git will try to apply your first commit to the tip. During this process a conflict will be detected. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Conflicts/Merge_First.png" alt="First conflict merge" >}} 

In the above example you can see that your work is represented in the 'Mine' column while your colleague's work is 'Theirs'. 

After resolving conflicts, commit shall be applied. 

// NEED IMAGE MERGE_STEP_2

#### 3.2.3 Resolving the Second Conflict

Merging the next commit also detects conflict. During resolving it you decide to add another attribute 'Login', to the 'User' entity.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Conflicts/Merge_Mine_Change.png" alt="New change during conflict merge" >}} 

Above you can see that your new change is represented as 'Mine'. 

After resolving conflicts, commit shall be applied. 

// NEED IMAGE MERGE_STEP_3

#### 3.2.4 Test Changes 

After merge is finished you will need to test and commit all merged changes, and later push it to the server. 

// NEED IMAGE MERGE_STEP_4

#### 3.2.5 Push Changes 

After you pushed your work to the server state of it is represented below:

// NEED IMAGE MERGE_STEP_5

## 4 Resolving conflicts {#resolve}

Conflicts may arise when both you and your colleague change the same things, sometimes git and/or Studio Pro is able to resolve them automatically without anyone losing work but, in some cases, those must be resolved manually.

Studio Pro enables you to resolve conflicts by choosing one of two ways: 
* Interactive merge
* Using whole documents

While explaining resolving of conflicts we will be using [Merge](#merge) flow, besides changes about 'Mine' and 'Theirs' both look the same.

#### 4.1 Using Interactive Merge

For the conflict, you can inspect changes and decide which version to apply. Select one of the lines that represent the conflict and choose **Resolve using Mine** or **Resolve using Theirs**.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Conflicts/Interactive_Merge.png" alt="Interactive Merge" >}}

You will see the document update immediately after you click the button. If you are not satisfied with your choice, you can use undo to go back and try another option. 

{{% alert color="info" %}}
To use keyboard shortcuts <kbd>Ctrl</kbd>+<kbd>Z</kbd> and <kbd>Ctrl</kbd>+<kbd>Y</kbd> to undo your choice, click the document to focus it first.
{{% /alert %}}

There is a third option to deal with a conflict: **Mark as Resolved**. This means that you do not choose any side to resolve the conflict and will keep things the way they were in the original. Neither of the new text changes will be applied.

Once you have chosen one of the three options to resolve the conflict, green check marks will appear to indicate that this conflict has been dealt with.

Once all conflicts have been resolved, click the **Accept and Exit** button to finalize the results. The document will be saved and the conflict for that document will be gone. The result is the document that contains changes from both sides and possibly some manual edits.

At any time, you can also choose to abort conflict resolution by clicking the **Cancel** button. The conflict will remain, and you can resolve it later.

#### 4.2 Using Whole Documents 

You can resolve conflicted documents also by using either:

* Resolve conflict using my whole document - while merging it will resolve all conflicts in this document using your work
* Resolve conflict using theirs whole document - while merging it will resolve all conflicts in this document using server changes

{{% alert color="warning" %}}
Remember that during rebase Mine and Theirs are switched.
{{% /alert %}}


{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Conflicts/Interactive_Merge.png" alt="Interactive Merge" >}}

