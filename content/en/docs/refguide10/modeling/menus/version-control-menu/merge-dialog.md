---
title: "Merge Dialog Box"
url: /refguide10/merge-dialog/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

With the **Merge** dialog you can [merge](/refguide10/version-control/#merge) changes from a branch line to the main line. For example, a fix that you applied in a maintenance branch line can be merged back to the main line so that you do not have to apply the fix by hand again. Also if you completed developing a large feature in a separate branch line you can use merge to incorporate that feature into the main line.

{{% alert color="warning" %}}
Before continuing with the merge action, make sure you are currently working in the development line to which you want to merge.
{{% /alert %}} 

To access the **Merge** dialog box, open [Version Control](/refguide10/version-control-menu/) > **Merge Changes Here**:

{{< figure src="/attachments/refguide10/modeling/menus/version-control-menu/merge-dialog/merge-dialog.png" alt="Merge Dialog" class="no-border" >}}

Available scenarios are described in sections below.

## Cherry Pick {#cherry-pick}

{{% alert color="info" %}}
This functionality was known as **Port fix** in previous versions of Studio Pro. It has been renamed to **Cherry pick** to keep it more consistent with the native Git name.
{{% /alert %}}

This scenario allows you to move a fix from a maintenance branch line to the main line. If you just want to redo a small fix, a single commit is often enough.

Cherry pick adds changes from the selected commit to your branch line. You will need to explicitly commit these changes after performing the cherry pick.

### Branch Line

Choose the branch line from which you want to merge the fix.

### Revision

Choose a revision that you would like to cherry pick.

## Merge Feature Branch

This merge scenario allows you to merge a complete feature branch line to the main line.

To merge the whole branch back to the main line to integrate a new feature there, do the following:

1. Open the main line.
2. Choose **Version Control > Merge Changes Here**.
3. Select **Merge feature branch** option.
4. Click **Merge**.
5. Resolve any conflicts and errors.
6. Commit the new feature to the main line.

### Branch Line

Choose the branch line that you want to merge. It is not necessary to select individual revisions in this case, because all revisions of the branch line are merged automatically.
