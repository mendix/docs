---
title: "Reverting Changes"
url: /refguide/reverting-changes/
weight: 40
description: "Describes how to revert changes in Studio Pro Version Control."
# Renamed from version-control-scenarios
---

## Introduction

In case you want to undo changes that have been made, it is important to understand the difference between uncommitted changes, and committed changes that have been pushed to the server. Uncommitted work can simply be reverted, while committed work requires a new **Reverse commit** to undo.

### Reverting Uncommitted Changes

Changes that have not yet been committed can be reverted. For example, that you have made a lot of changes to a page and you are not happy with the result. You can revert the page to the original state, that is, the state of the page before you started making changes.

Deletes of documents, folders, and modules can also be reverted. This brings them back into the app. Note that you will get back the latest version you have committed. For example, if you commit, make some changes to a microflow, and then delete the microflow, reverting the delete restores the microflow without the changes that you made.

You can revert changes in the **Changes** pane, from **Version Control** > **Revert All Changes**, or from the right-click menu on the document you want to revert.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/revertx2.png" alt="Two ways of reverting" class="no-border" >}}

{{% alert color="info" %}}
You can also **Revert All Changes** while [merging](/refguide/resolving-conflicts/#merge). This will restore your app to the most recent commit, discarding changes creating by the merging process.
{{% /alert %}}

### Reverting a Previous Commit {#revert-previous-commit}

Changes that have been committed and pushed to the server can never be deleted from the history. However, you can make another commit to revert the changes. This is called **Reverse commit** in Studio Pro.

Select the **Version Control** menu > **Revert a Commit...** to revert a commit. This will create original changes "in reverse", which you can commit and push to the server.

{{% alert color="warning" %}}
Reverting a commit creates a new commit that undoes the changes introduced by the original commit. This may lead to unexpected results depending on the context of the original commit.

* **Cherry picking and reverting** – If you used [Cherry Pick](/refguide/merge-dialog/#cherry-pick) to apply a commit from another branch to the current branch, and then you revert that commit, the changes from the cherry-pick will not be reapplied when merging the full branch. This happens because the revert commit explicitly negates the cherry-picked changes, and Git recognizes them as already addressed.
* **Merging and reverting** – If you [merged another branch](/refguide/version-control/glossary/#merging-branches) into the current branch and then reverted the merge commit, merging the same branch again will not reapply its changes. Git identifies that the merge was undone and prevents those changes from being reapplied.
{{% /alert %}}

Reverting changes is done with one commit at a time. If you want to revert multiple commits, you can do that by reverting the latest commit, then the previous one, etc, one by one.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/revert-changes-git.png" class="no-border" >}}

#### Reverse Merging

You can also revert a commit where another branch was merged into the current branch. Reverting a merge removes the changes introduced by that merge, making it appear as if they never happened. For example, if the merge added a new page, reverting it will remove the page locally. 

Just like with a normal merge, conflicts can occur when reverting a merge. For example, if later commits change the new page, the reverse merge will result in a conflict. Once you resolved the conflict, you can commit the changes and push them to the remote repository.