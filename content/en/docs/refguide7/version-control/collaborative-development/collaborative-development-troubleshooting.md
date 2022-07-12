---
title: "Troubleshooting Collaborative Development"
url: /refguide7/collaborative-development-troubleshooting/
description: "Describes troubleshooting for collaborative development between the Mendix Desktop Modeler and the Mendix Web Modeler"
tags: ["desktop modeler", "collaborative development", "troubleshooting", "troubleshoot"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

{{% alert color="warning" %}}

Collaborative development is only available if your project has Mendix version 7.23.3 or above. You cannot sync your changes with the Web Modeler if your project has Mendix version 7.23.2 or below. 

You will still be able to open your project in the Web Modeler (the Web Modeler will automatically upgrade it to the latest release version of 7.23).  However, to sync changes from the Web Modeler you have to use the Mendix Desktop Modeler version 7.23.3 or above.

{{% /alert %}}

Collaborative development allows users to share model changes with each other. This document is will help you to troubleshoot issues that may occur during the process of sharing changes with the Web Modeler.

## 2 Concepts

For concepts and definitions, see section [2 Concepts](/refguide7/version-control/#concepts) in *Version Control*. 

## 3 The Web Modeler Is Out of Sync {#out-of-sync}

Normally, the Web Modeler working copy is synchronized with the Desktop Modeler when the Desktop Modeler user updates or commits. However, if a commit or an update happened outside the Desktop Modeler (using Tortoise SVN or any other version control tool), the Web Modeler is temporary out of sync. In this case you will get a warning:

{{< figure src="/attachments/refguide7/version-control/collaborative-development/collaborative-development-troubleshooting/changes-are-out-of-sync.png" >}}

You can do one of the following:

1.  **Merge** (recommended)–  the Desktop Modeler will try to merge the unsynchronized changes from the Web Modeler automatically. Your local changes (if any) will be combined with the Web Modeler changes. The changes from the Web Modeler are stored in an automatically created branch to ensure that there no changes lost in the process. The branch is visible in the branch line manager. This process can result in one of the following: <br/>

	a.  If the merge process finishes successfully (without conflicts) the created branch is merged to your working copy and you get the Web Modeler changes. You need to review the merged changes and commit them to get the Web Modeler and the Desktop Modeler in sync again. And afterwards you can delete the automatically-created branch.<br/>

	b. If there are any merge conflicts found in the process, you need to resolve them and commit the changes afterwards. Once you resolve the conflicts and commit the changes, you can delete this automatically-created branch.<br/>

	{{< figure src="/attachments/refguide7/version-control/collaborative-development/collaborative-development-troubleshooting/automatically-created-branch.png" >}}

2. **Resolve Later** –  the changes can be merged later. In the meanwhile, changes from the Web Modeler and the Team Server development line will not be kept in sync. In this case, the dialog will appear again when committing/updating/merging changes. 

## 4 Failed Merging the Desktop Modeler and the Web Modeler Changes 

When the Web Modeler enabled branch with the commit outside the Desktop Modeler is being merged with a different line, you will see the following message:

{{< figure src="/attachments/refguide7/version-control/collaborative-development/collaborative-development-troubleshooting/cannot-merge-automatically.png" >}}

You can choose one of the following:

1.  **Cancel Merge** (recommended) – you can cancel the process and try to synchronize with the Web Modeler first. Do the following:<br/>
	a.  Open the Web Modeler enabled development line<br/>
	b.  The warning described in section [3 The Desktop Modeler & the Web Modeler Are Out of Sync](#out-of-sync) will be displayed.<br/>

	{{< figure src="/attachments/refguide7/version-control/collaborative-development/collaborative-development-troubleshooting/changes-are-out-of-sync.png" >}}<br/>

	c. Click **Merge** to synchronize the changes with the Web Modeler.<br/>

	d. Open the previous branch and do the merge again. 

2. **Merge Anyway** – the merge will continue without changes from the Web Modeler. In this case only the changes from the Desktop Modeler will be included. The Desktop Modeler and the Web Modeler will be out of sync, and you will need to resolve this issue later. See section [3 The Desktop Modeler & the Web Modeler Are Out of Sync](#out-of-sync)

## 5 The Repository Service Is Unavailable

During the **Update** operation, changes are requested from the Web Modeler and integrated into the current project.  There is an additional step **Retrieve branch status** in the update process. During this step, Web Modeler changes are retrieved. 

{{< figure src="/attachments/refguide7/version-control/collaborative-development/collaborative-development-troubleshooting/retrieving-branch-status.png" >}}

If there are network or service issues, the Desktop Modeler will not be able to contact the repository service and a warning message is displayed:

{{< figure src="/attachments/refguide7/version-control/collaborative-development/collaborative-development-troubleshooting/changes-are-not-retrieved.png" >}}

You can do one of the following:

1. **Cancel** (recommended) – the operation will be cancelled, you can try again later, when the network problems are solved 

2. **Proceed** – the update process will continue, but the changes from the Web Modeler will not be retrieved. The Desktop Modeler and the Web Modeler will be out of sync, and you will need to resolve this issue later. See section [3 The Desktop Modeler & the Web Modeler Are Out of Sync](#out-of-sync)

## 6 Another Operation Is in Progress

When your team members initiate a blocking operation (commit/update/merge Web Modeler enabled branch/switch Web Modeler enabled branch), and at the same you initiate a blocking operation as well, and you will see the dialog below:

{{< figure src="/attachments/refguide7/version-control/collaborative-development/collaborative-development-troubleshooting/another-operation-in-progress.png" >}}

You can do one of the following:

1. **Cancel** (recommended) – the operation will be cancelled. We recommend you to do an update in a few minutes so that you get the latest changes and your working copy and the Web Modeler will be in sync
2. **Proceed** – the update process will continue, but the changes from Web Modeler will not be retrieved. The Desktop Modeler and the Web Modeler will be out of sync, and you will need to resolve this issue later. See section [3 The Desktop Modeler & the Web Modeler Are Out of Sync](#out-of-sync)

## 7 Read More

* [Version Control](/refguide7/version-control/) 
* [Collaborative Development in the Web Modeler](/studio7/general-collaborative-development/)
