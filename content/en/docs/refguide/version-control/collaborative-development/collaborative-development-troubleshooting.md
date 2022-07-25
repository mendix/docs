---
title: "Troubleshooting Collaborative Development"
url: /refguide/collaborative-development-troubleshooting/
description: "Describes troubleshooting for collaborative development between the Mendix Studio Pro and the Mendix Studio"
tags: ["studio pro", "studio", "collaborative development", "troubleshooting", "troubleshoot"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

Collaborative development allows users to share model changes with each other. This document will help you to troubleshoot issues that may occur during the process of sharing changes with Mendix Studio.

## 2 Concepts

For concepts and definitions, see the [Concepts](/refguide/version-control/#concepts) section in *Version Control*. 

## 3 Studio Is Out of Sync {#out-of-sync}

Normally, the Studio working copy is synchronized with Studio Pro when the Studio Pro user updates or commits. However, if a commit or an update happened outside Studio Pro (using Tortoise SVN or any other version control tool), Studio is temporarily out of sync. In this case you will get a warning:

{{< figure src="/attachments/refguide/version-control/collaborative-development/collaborative-development-troubleshooting/changes-are-out-of-sync.png" >}}

You can do one of the following:

1.  **Merge** (recommended)–  Studio Pro will try to merge the unsynchronized changes from Studio automatically. Your local changes (if any) will be combined with the Studio changes. The changes from Studio are stored in an automatically created branch to ensure that there no changes lost in the process. The branch is visible in the branch line manager. This process can result in one of the following: <br/>

	a.  If the merge process finishes successfully (without conflicts) the created branch is merged to your working copy and you get the Studio changes. You need to review the merged changes and commit them to get Studio and Studio Pro in sync again. And afterwards you can delete the automatically-created branch.<br/>

	b. If there are any merge conflicts found in the process, you need to resolve them and commit the changes afterwards. Once you resolve the conflicts and commit the changes, you can delete this automatically-created branch.<br/>

	{{< figure src="/attachments/refguide/version-control/collaborative-development/collaborative-development-troubleshooting/automatically-created-branch.png" >}}

2. **Resolve Later** –  the changes can be merged later. In the meantime, changes from Studio and the Team Server development line will not be kept in sync. In this case, the dialog will appear again when committing/updating/merging changes. 

## 4 Failed Merging Studio Pro and Studio Changes 

When a Studio enabled branch with a commit outside Studio Pro is being merged with a different line, you will see the following message:

{{< figure src="/attachments/refguide/version-control/collaborative-development/collaborative-development-troubleshooting/cannot-merge-automatically.png" >}}

You can choose one of the following:

1.  **Cancel Merge** (recommended) – you can cancel the process and try to synchronize with Studio first. Do the following:<br/>
	a.  Open the Studio enabled development line.<br/>
	b.  The warning described in the [Studio Pro & Studio Are Out of Sync](#out-of-sync) section will be displayed.<br/>

	{{< figure src="/attachments/refguide/version-control/collaborative-development/collaborative-development-troubleshooting/changes-are-out-of-sync.png" >}}<br/>

	c. Click **Merge** to synchronize the changes with Studio.<br/>

	d. Open the previous branch and do the merge again. 

2. **Merge Anyway** – the merge will continue without changes from Studio. In this case only the changes from Studio Pro will be included. Studio Pro and Studio will be out of sync, and you will need to resolve this issue later. See the [Studio Pro & Studio Are Out of Sync](#out-of-sync) section.

## 5 The Repository Service Is Unavailable

During the **Update** operation, changes are requested from Studio and integrated into the current app.  There is an additional step **Retrieve branch status** in the update process. During this step, Studio changes are retrieved. 

{{< figure src="/attachments/refguide/version-control/collaborative-development/collaborative-development-troubleshooting/retrieving-branch-status.png" >}}

If there are network or service issues, Studio Pro will not be able to contact the repository service and a warning message is displayed:

{{< figure src="/attachments/refguide/version-control/collaborative-development/collaborative-development-troubleshooting/changes-are-not-retrieved.png" >}}

You can do one of the following:

1. **Cancel** (recommended) – the operation will be cancelled, you can try again later, when the network problems are solved.

2. **Proceed** – the update process will continue, but the changes from Studio will not be retrieved. Studio Pro and Studio will be out of sync, and you will need to resolve this issue later. See the [Studio Pro & Studio Are Out of Sync](#out-of-sync) section.

## 6 Another Operation Is in Progress

When your team members initiate a blocking operation (commit/update/merge a Studio enabled branch or switch a Studio enabled branch), and at the same you initiate a blocking operation as well, and you will see the dialog below:

{{< figure src="/attachments/refguide/version-control/collaborative-development/collaborative-development-troubleshooting/another-operation-in-progress.png" >}}

You can do one of the following:

1. **Cancel** (recommended) – the operation will be cancelled. We recommend you to do an update in a few minutes so that you get the latest changes and your working copy and Studio will be in sync.
2. **Proceed** – the update process will continue, but the changes from Studio will not be retrieved. Studio Pro and Studio will be out of sync, and you will need to resolve this issue later. See the [Studio Pro & Studio Are Out of Sync](#out-of-sync) section.

## 7 Read More

* [Version Control](/refguide/version-control/) 
* [Collaborative Development in Studio](/studio/collaborative-development/)
