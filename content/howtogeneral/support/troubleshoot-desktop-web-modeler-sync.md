---
title: "Troubleshoot Synchronizaton between Desktop Modeler and Web Modeler"
category: "Mendix Support"
description: "This document presents a list of problems and fixes for issues around synchronization between Desktop Modeler and Web Modeler."
tags: ["synchronization", "web modeler", "troubleshoot", "modeler"]
---

# Troubleshoot Synchronizaton between Desktop Modeler and Web Modeler

The Mendix Desktop Modeler supports synchronizing changes with the Web Modeler. This document is here to troubleshoot issues that may occur during this process. 

## The Inner Workings of Desktop Modeler-Web Modeler Synchronization

Let us first discuss the inner workings of the synchronization so that you understand what is going on and so that you know where all the changes are stored. 

Synchronization with the Web Modeler from the Desktop Modeler is a multi-step process. Below we describe the steps that take place after clicking "Sync with Web Modeler".

### Desktop Modeler Commit Check

A check is performed whether all changes in the DM have been committed. This is to ensure that those changes are safe on the Team Server before the syncing process commences.

### Lock Web Modeler

The Web Modeler is locked so that no new changes can be made while synchronizing with the Desktop Modeler. The lock will be released after finishing or cancelling the synchronization process.

### Commit Web Modeler Changes

The changes for the Web Modeler cannot simply be committed to the main line, because the Web Modeler working copy might be based on an older revision of the main line. In order to commit, the Web Modeler would need to update first and this could result in conflicts that cannot be handled by the Web Modeler.

Therefore, the changes in the Web Modeler are committed to a special branch. The branch will be created from the revision that the Web Modeler working copy is based on. In this way, the Web Modeler can commit its changes without conflict.

The special branch is "hidden" by storing it in the `mergebranches` folder in the repository instead of the normal "branches" folder. You can find it through the repository browser of TortoiseSVN.

Note that at this point both the Desktop Modeler changes and the Web Modeler changes are safely on the Team Server. If all else fails, there is enough information to recover both sets of changes.

### Merge Changes

A merge is initiated to merge the changes from the special branch containing the Web Modeler changes to the main line. After the merge, you can review the changes that were merged in the Changes dock. Also, if there are conflicts you can choose which changes to keep.

### Finish Sync

Once you are happy with the changes and all conflicts are resolved, you can 'Finish' the synchronization. This will commit the merged Web Modeler changes to the main line. The end result is that both the Desktop Modeler changes and the Web Modeler changes are in the main line.

### Unlock Web Modeler

The Web Modeler is unlocked and it will be up to date with the latest changes from the Desktop Modeler as well.

## Troubleshooting

If the synchronization process is interrupted in some way, you can try and perform some manual steps to return to a consistent state.

* Close the project in the Modeler.
* Open the project folder in the Windows File Explorer
* Right-click the white background and choose TortoiseSVN > Revert.
* Select all changes and revert them.
* Right-click the background again and choose TortoiseSVN > Update.
* Right-click the background and choose TortoiseSVN > Merge.
* Choose 'Reintegrate branch' and 'Next'.
* Use the "..." button to select the special branch in the `mergebranches` folder. There should be only one. 
* Hit 'Next >'.
* Hit 'Merge'.
* Very likely, there will be a conflict on the `mpr` file. That is expected. Choose to 'Resolve later'.
* Open the project in the Modeler.
* The Modeler will recognize that there are model changes to merge. Choose 'Merge the changes'.
* Resolve model conflicts, if any.
* Hit 'Finish sync with Web Modeler'. If that button is not available in the Changes dock, you can choose 'Commit' instead.
* Finally, check whether the Web Modeler is unlocked. If not, you can initiate a new Sync with Web Modeler to achieve this.
