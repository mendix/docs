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

While working on your changes you may find that your local copy of the app model doesn't have all the changes that other team members have [committed](/refguide/commit-dialog/) to the server (the [Mendix Team Server](/developerportal/general/team-server/), or an [on-premises server](/refguide/on-premises-git/)).
In Git terminology this is called 'being behind'.

When this happens, Mendix Studio Pro offers two ways to combine your changes with changes from the server: [Rebase](#rebase) and [Merge commit](#merge). 

Both options support the following features when it comes to [resolving the conflicts](#resolve):

* **Fine-grained conflict resolution** – When there are conflicting changes in a document, you do not have to choose between whole documents, resolving a conflict using your change or using their change. Instead, you can resolve conflicts at the level of individual elements, such as widgets, entities, attributes, or microflow actions. All non-conflicting changes from both sides are accepted automatically.
* **No conflicts on changes to lists of widgets** – When two developers make changes to widgets in the same document there is no conflict, the changes are combined. However, if the changes are made too close to the same place in the document, a **list order conflict** is reported that reminds the developer who is merging the changes to decide on the final order of the widgets in the list.
* Can be aborted at any time. Studio Pro will continue from your latest local commit.

The differences between the two approaches are as follows:

* Rebase (*default*): 
    * Treats changes from the server as leading, by first retrieving the server state and then reapplying your work to it. 
    * Results in a simple commit history.
    * Resolves conflicts when reapplying your local commits. If you have 3 local commits, this could trigger conflict resolution 3 times.
* Merge commit: 
    * Treats local and remote changes equally, and combines them in a separate 'merge commit'.
    * Results in a more complicated commit history with extra merge commits.
    * Resolves conflicts once, regardless of the number of local and remote commits being merged.

{{% alert color="info" %}}
In general we recommend users to use the Rebase strategy when combining changes, especially when actively collaborating on the same branch.

In exceptional cases, for example when you have a lot of local commits where you expect conflicts, a merge commit might be the better choice. 
{{% /alert %}}

## 2 Work Example {#example}

To explain and illustrate the differences between Rebase and Merge commit when combining changes, we will work with this example. You can jump ahead to [Rebase](#rebase) or [Merge commit](#merge) for specifics of the two approaches.

### 2.1 Starting point 

We start with two entities 'User' and 'Game'. This will be the starting point of your project.   

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/DomainModel/Starting_State.png" alt="Domain Model Commit 1" >}} 

### 2.2 Local changes, your work 

During your work you make two changes, each one in separate commit. 

In the first commit you decide that 'E-mail' should be renamed to 'Email' 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/DomainModel/First_Local_Commit.png" alt="Your Work Commit 4" >}} 

In the next commit you rename 'Second E-mail' to be consistent with previous change. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/DomainModel/Second_Local_Commit.png" alt="Your Work Commit 5" >}}   

### 2.3 Server Changes

In the meantime, your colleague also decided to make some changes to both email fields. 

Renaming 'E-mail' to 'EmailAddress' and removing 'Second_E-mail' entirely and pushing those changes to the server.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/DomainModel/Remote_State.png" alt="Remote Work Commit 2" >}} 

### 2.4 Summary 

The current situation could be represent as shown below: 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_Starting_state.png" alt="Starting point" width="525" >}} 

## 3 Combining Changes

In this chapter we'll go through the [example](#example) with the different approaches. 

Every time changes can be combined, for example when Pulling changes from the server, you can choose the approach. The default can be changed by adjusting the [user preference](/refguide/preferences-dialog/#62-git).

### 3.1 Rebase {#rebase}

Rebasing is the default way to integrate your work with the server changes by moving your changes to the tip of the server.

We'll use this as the starting state, based on the [example](#example) above. 

{{% alert color="info" %}}
During the rebase process, there is a slight terminology change in Studio Pro compared to merge. The images below illustrate the process.  
{{% /alert %}}

#### 3.1.1 Rebase started 

After starting to rebase your two commits (#3 and #5) are temporarily put aside, and Studio Pro will show the latests changes from the tip of server (which includes #2 and #4).

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_Step_1.png" alt="Rebase Step 1" width="525" >}} 

{{% alert color="info" %}}
Your work shall be now referenced as 'Theirs', while server changes shall be 'Mine' 
{{% /alert %}}

#### 3.1.2 Resolving the First Conflict  

Git will try to apply your first commit (`#3`) to the tip (after `#4`). 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_Step_2.png" alt="Rebase Step 2" width="525" >}} 

If there are no conflicts when comparing your commit (`#3`) with the latest state from the server (`#4`), Studio Pro will automatically continue. A new commit will be created from your commit, which we'll call commit `#3'`.

In our example there is a conflict however, as the 'Email' attribute was renamed both on the server, as well as in your local work.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Conflicts/Rebase_First.png" alt="First conflict rebase" >}} 

In the above example you can see that your work is represented in the 'Theirs' column while your colleague's work is 'Mine'. 

You need to resolve the conflict to proceed with the rebasing process. After resolving conflicts you can amend the commit message which you previously defined, and commit `#3'` is created. 

Now Studio Pro will continue with rebasing the next local commit (`#5`).

#### 3.1.3 Resolving the Second Conflict 

While Rebasing the next commit (`#5`) another conflict is detected. In this example we resolve this by adding another attribute 'Login', to the 'User' entity.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Conflicts/Rebase_Mine_Change.png" alt="New change during conflict rebase" >}} 

Above you can see that your new change is represented as 'Mine', together with changes that were taken from the server. 

Once the conflict is resolved and you continue the rebase, a new commit (`#5'`) is created from your commit (`#5`), where you can optionally amend the commit message. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_Step_3.png" alt="Rebase Step 3" width="525" >}} 

As this was the last local commit to reapply, the rebasing can now be completed.

#### 3.1.4 Test Changes 

When the rebase process is completed, the work that was put aside is now removed. As you can see in the image below, your work (`#3'` and `#5'`) is put after the state that was on the server.
 
{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_Step_4.png" alt="Rebase Step 4" width="525" >}}

As you can see your work is still on your local machine. After testing whether the combined state works as expected, you can push the combined state to the server.

#### 3.1.5 Push Changes 

After you pushed your work to the server state of it is represented below:

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_Step_5.png" alt="Rebase Step 5" width="525" >}}

{{% alert color="info" %}}
While you were completing the rebase process on your machine, other changes may have been pushed to the server already. If that is the case, Studio Pro will again ask how to combine your work (until `#5'`) with the newest changes on the server.
{{% /alert %}}

### 3.2 Merge commit {#merge}

Making a merge commit is another way you could use to integrate you work with remote changes. The combined state is committed using a separate special merge commit.

We'll use the same starting state from the [example](#example) above. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Merge_Starting_state.png" alt="Starting point" width="525" >}} 

#### 3.2.1 Merge started 

After starting the merge process Studio Pro will combine your local work (`#5`) with the state of the server (`#4`). 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Merge_Step_1.png" alt="Merge Step 1" width="525" >}} 

{{% alert color="info" %}}
Your work shall be now referenced as 'Mine', while server changes shall be 'Theirs’. 
{{% /alert %}}

In the end you'll be creating a merge commit that merges commits `#4` and `#5`. The history before that (`#2` and `#3`) are also taken along.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Merge_Step_2.png" alt="Merge Step 2" width="525" >}} 

#### 3.2.1 Conflict resolution: resolving the two conflicts

If conflicts arise between any local and remote commits, you must resolve them before creating a new commit for the combined state. Unlike rebasing, which requires conflict resolution for each local commit with conflicts, here you have only one round of conflict resolution.

**Renaming of 'Email' attribute**

As the 'Email' attribute was renamed both on the server as well as in your local work, you need to decide which changes to retain, or make yet another version.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Conflicts/Merge_First.png" alt="First conflict merge" >}} 

In the above example you can see that your work is represented in the 'Mine' column while your colleague's work is 'Theirs'. 

**Removal of 'Second_Email' attribute on server**

Because the 'Second_Email' attribute was removed on the server, while renaming it in your local work, there is another conflict. In this example we resolve this by adding another attribute ‘Login’, to the ‘User’ entity.

After resolving all conflicts you can proceed with testing the app.

#### 3.2.2 Test Changes 

When the combined state is tested, a 'merge commit' can be created for the new version of the app. This is a new commit (`#6`) which will always show that it merged commits `#4` and `#5`.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Merge_Step_3.png" alt="Merge Step 3" width="525" >}} 

By default Studio Pro will also Push your work to the server when making a commit.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Merge_Step_4.png" alt="Merge Step 4" width="525" >}} 

{{% alert color="info" %}}
While you were completing the merge process on your machine, other changes may have been pushed to the server already. If that is the case, Studio Pro will again ask how to combine your work (until #6) with the newest changes on the server.
{{% /alert %}}

### 3.3 Summary

We have merged your local work with the latest state from the server and resolved all conflicts. 
For Rebasing this meant two small rounds of conflict resolution, where you had a single round with all of the conflicts being resolved at the same time for the merge commit.

In the end the history on the server will look like this:

* After a Rebase: {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Rebase_End_state.png" alt="Rebase end state" width="525" >}}
* After a Merge commit: {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/combining_changes/Steps/Merge_End_state.png" alt="Merge commit end state" width="525" >}}

This illustrates that Rebasing results in a simpler commit history, while a Merge commit results in an additional commit that will always show as a branched off set of commits.

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