---
title: "Troubleshoot Syncing the Desktop Modeler with the Web Modeler"
parent: "syncing-webmodeler-desktop"
description: "This document presents a list of problems and fixes for issues around synchronization between the Desktop Modeler and Web Modeler."
tags: ["synchronization", "sync", "web modeler", "desktop modeler", "troubleshoot"]
---

## 1 Introduction

The Mendix Desktop Modeler supports synchronizing changes with the Web Modeler. This document is will help you to troubleshoot issues that may occur during this process. 

## 2 The Inner-Workings of the Desktop Modeler & Web Modeler Synchronization

Synchronization of the Web Modeler with the Desktop Modeler is a multi-step process. The steps described below take place after clicking **Sync with Web Modeler** in the Desktop Modeler:

![](attachments/troubleshoot-desktop-web-modeler-sync/sync-with-wm.png)

### 2.1 Desktop Modeler Commit Check

A check is performed on whether all changes in the Desktop Modeler have been committed. This is to ensure that those changes are safe on the Team Server before the syncing process begins.

### 2.2 Locking the Web Modeler

The Web Modeler is then locked so that no new changes can be made while synchronizing with the Desktop Modeler. The lock will be released after finishing or cancelling the synchronization process.

### 2.3 Committing the Web Modeler Changes

The changes for the Web Modeler cannot simply be committed to the main line, because the Web Modeler working copy might be based on an older revision of the main line. In order to commit, the Web Modeler would need to update first, which could result in conflicts that cannot be handled by the Web Modeler.

Therefore, the changes in the Web Modeler are committed to a special branch. This branch is created from the revision on which the Web Modeler working copy is based. In this way, the Web Modeler can commit its changes without conflict.

The special branch is "hidden" by storing it in the **mergebranches** folder in the repository instead of the normal **branches** folder. You can find the folder through the repository browser of TortoiseSVN.

{{% alert type="warning" %}}
At this point, both the Desktop Modeler changes and the Web Modeler changes are safely on the Team Server. If all else fails, there is enough information to recover both sets of changes.
{{% /alert %}}

### 2.4 Merging the Changes

A merge is initiated to merge the changes from the special branch containing the Web Modeler changes to the main line. After the merge, you can review the changes that were merged in the **Changes** pane of the Desktop Modeler. Also, if there are conflicts, you can select which changes to keep.

### 2.5 Finishing the Sync

Once you are happy with the changes and all conflicts are resolved, you can finish the synchronization. This will commit the merged Web Modeler changes to the main line. The end result is that both the Desktop Modeler changes and the Web Modeler changes are in the main line.

### 2.6 Unlocking the Web Modeler

The Web Modeler is then unlocked, and it will be up-to-date with the latest changes from the Desktop Modeler.

## 3 Troubleshooting

If the synchronization process is interrupted in some way, you can try the following manual steps to return to a consistent state:

1. Close the project in the Desktop Modeler.
2. Open the project folder in the Windows File Explorer.
3. Right-click the white background and select **TortoiseSVN** > **Revert**.
4. Select all the changes and revert them.
5. Right-click the background again and select **TortoiseSVN** > **Update**.
6. Right-click the background and choose **TortoiseSVN** > **Merge**.
7. Choose **Reintegrate branch** and click **Next**.
8. Use the **...** button to select the special branch in the **mergebranches** folder (there should be only one).
9. Click **Next >** and then **Merge**.
12. It is expeced that will be a conflict on the *mpr* file. Select **Resolve later**.
13. Open the project in the Modeler.
14. The Desktop Modeler will recognize that there are model changes to merge. Select **Merge the changes**.
15. Resolve the model conflicts, if any.
16. Click **Finish sync with Web Modeler**. If that button is not available in the **Changes** pane in the Desktop Modeler, select **Commit** instead.
17. Check whether the Web Modeler is unlocked. If not, you can initiate a new sync with Web Modeler to achieve this.
