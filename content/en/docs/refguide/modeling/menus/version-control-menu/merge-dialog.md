---
title: "Merge Dialog Box"
url: /refguide/merge-dialog/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

With the **Merge** dialog you can [merge](/refguide/version-control/#merge) changes from a branch line to the main line. For example, a fix that you applied in a maintenance branch line can be merged back to the main line so that you do not have to apply the fix by hand again. Also if you completed developing a large feature in a separate branch line you can use merge to incorporate that feature into the main line.

{{% alert color="warning" %}}
Before continuing with the merge action, make sure you are currently working in the development line to which you want to merge.
{{% /alert %}} 

To access the **Merge** dialog box, open [Version Control](/refguide/version-control-menu/) > **Merge Changes Here**:

{{< figure src="/attachments/refguide/modeling/menus/version-control-menu/merge-dialog/merge-dialog.png" alt="Merge Dialog" class="no-border" >}}

Available scenarios are described in sections below.

## Port Fix

This scenario allows you to move a fix from a maintenance branch line to the main line. If you just want to redo a small fix, a single commit is often enough.

Port fix transports the actual commit from one branch and directly applies it, including author and commit text to another branch. This means you do not need to explicitly commit your change.

### Branch Line

Choose the branch line from which you want to merge the fix.

### One Revision/Multiple Revisions

Choose whether you want to merge just a single commit or a whole range of commits from the maintenance branch line. In the latter case both the start and end revisions must be selected. The start revision is the revision with the lowest number and the end revision is the revision with the highest number. Note that all revisions that are contained within the specified range are merged.

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
