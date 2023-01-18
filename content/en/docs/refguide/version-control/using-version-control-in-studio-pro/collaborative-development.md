---
title: "Collaborative Development"
url: /refguide/collaborative-development/
category: "Version Control"
weight: 20
description: "Describes the process of collaborative development between Mendix Studio Pro and Mendix Studio."
tags: ["studio pro", "studio", "collaborative development", "sync"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
From Mendix 9.21, we only support collaborative development between Studio Pro users. Mendix Studio is no longer supported for apps with Mendix version 9.21 or above. For more information, see the blog post [Coming in 2023: The Merging of Studio and Studio Pro](https://www.mendix.com/blog/coming-in-2023-the-merging-of-studio-and-studio-pro/).
{{% /alert %}}

## 1 Introduction 

Collaborative development is the process of sharing app model changes when a team of more than one person is working on the app. Collaborative development allows the team members to work together on one app in Mendix Studio Pro and Mendix Studio, and easily synchronize changes using [version control](/refguide/version-control/). Studio Pro can be used to work on different branches of an app, while Studio can be enabled for one of these branches. 

{{% alert color="info" %}}
If you get a **Mendix Studio is not enabled for this app yet** message when opening your app in Studio, make sure you enable a development line for it. For more information, see [Enabling Studio for a Development Line](#active-branch).
{{% /alert %}}

## 2 Collaborative Development Process Overview

Studio Pro users can collaborate with each other through [version control](/refguide/version-control/) via **Commit** and **Update** operations. 

The collaborative development process between Studio Pro and Studio consists of the following steps:

1. Every change made in Studio is automatically saved to the Studio working copy. Multiple users can view the app in Studio at the same time: one Studio user can edit it and the other Studio users are in read-only mode. 
2. When Studio Pro users open an app, they are notified if Studio is enabled for this development line. 

    {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/collaborative-development/collaborative-development-enabled-notification.png" alt="Collaborative Development Enabled Notification" >}}

3. Studio Pro creates a local working copy that the Studio Pro user works on. 
4. To get changes from the Team Server the user needs to click **Update**. When the Studio Pro user clicks **Update**, the latest changes from *Studio* are committed automatically to the Team Server before Studio Pro receives the update from it. The latest revision from the Team Server containing the latest *Studio* changes is merged into Studio Pro's local working copy. 
5. The Studio Pro user works on the app and, once the user finishes some functionality (for example, fixes a bug or creates a new feature), they click **Commit**. The user enters a commit message and confirms it. This triggers the same process as during an update (described in step 4), and the Studio Pro working copy is updated with the latest revision from the Team Server.<br/>

    There are two possible outcomes of this merge:<br/>

    1. There are no conflicts, the Studio Pro user changes are committed to the Team  Server. Afterwards Studio gets the latest revision from the Team Server and is unlocked; the Studio Pro user changes are visible to Studio users. Other Studio Pro users will get the changes once they do an update. <br/>
    1. There are conflicts, the Studio Pro commit process is stopped. Studio is unlocked without getting changes from the Studio Pro user. The Studio Pro user needs to resolve the merge conflicts first to before being able to do a commit again.<br/>

{{% alert color="info" %}}
When the Studio Pro user wants to deploy the app to the cloud, they click the **Publish** button. The commit is done automatically during this process and step five is executed. 
{{% /alert %}}

For information on collaborative development from the Studio perspective, see [Collaborative Development in Studio](/studio/collaborative-development/). 

## 3 Version Control Processes in Studio and Studio Pro for a Single Branch {#vc-single}

{{% alert color="info" %}}
From Mendix 9.21, we only support [collaborative development](/refguide/collaborative-development/) between Studio Pro users. Mendix Studio is no longer supported for apps with Mendix version 9.21 or above. For more information, see the blog post [Coming in 2023: The Merging of Studio and Studio Pro](https://www.mendix.com/blog/coming-in-2023-the-merging-of-studio-and-studio-pro/).
{{% /alert %}}

### 3.1 Work in Studio and Studio Pro

The figure below shows how two developers might collaborate on a [Studio-enabled](#studio-enabled) development line of an app. One developer is working in Studio, and one in Studio Pro. They both work on the same development line (for example, the main line). 

{{< figure src="/attachments/refguide/version-control/image1.png" >}}

Changes from Studio Pro and Studio are stored in the respective working copies: on the local machine for Studio Pro and in the cloud for Studio.

{{< figure src="/attachments/refguide/version-control/image4.png" >}}

### 3.2 Work in Studio Pro 

Another (or the same) developer opens the app for the first time in Studio Pro. A new revision (state 2) is created on the Team Server from the current state of the Studio working copy. It is downloaded to the local machine as the working copy for Studio Pro. Studio is locked temporarily so that the Studio working copy is stable while it is copied.

The developer works in Studio Pro on the local working copy of the app. There is no work done in Studio in this scenario.

The developer can commit this to the Team Server repository at any time to make a new revision (state 3). This revision is copied into the Studio working copy and the developer using Studio will get the changes automatically.

{{< figure src="/attachments/refguide/version-control/image3.png" >}}

### 3.3 Work in Studio 

The developer works on the app in Studio. They start with the app in state 1, this can be a new app or a revision of the app. Changes are made continuously to the working copy for Studio, stored in the cloud.

{{< figure src="/attachments/refguide/version-control/image2.png" >}}

### 3.4 Update/Pull Studio Pro Working Copy

The developer using Studio Pro wants to include the changes made by the developer using Studio. They choose to update (for SVN) or pull (for Git) their working copy.

All the changes from the Studio working copy are put into a new revision on the Team Server (state 4). This revision is merged into the Studio Pro working copy. While the Studio Pro working copy is being updated, Studio is locked temporarily so that the Studio working copy is stable while it is copied.

{{% alert color="info" %}} This will also pick up changes from other developers using Studio Pro, if they have committed changes to this branch. {{% /alert %}}

If there are conflicts, the developer using Studio Pro will have to resolve them before they can commit the changes to the Team Server repository.

{{< figure src="/attachments/refguide/version-control/image5.png" >}}

### 3.5 Commit Changes to Team Server Repository

The developer using Studio Pro wants to commit a new revision to the Team Server. This will enable the developer using Studio, or a different developer using Studio Pro, to see and work with the changes the developer has made. It also means that the revision can be deployed to the cloud.

The developer selects to commit, and the following things happen:

* Studio is locked temporarily
* The Studio working copy is committed as a revision (restore point – state 5)
* The revision just created (state 5) is merged with the Studio Pro working copy

If there are no merge [conflicts](#conflict), the updated Studio Pro working copy is committed as a new revision (state 6) and the Studio working copy is updated to the new revision and unlocked.

If there are conflicts, the developer using Studio Pro will need to resolve these. Studio will be unlocked, without receiving any of the changes from Studio Pro, while they do this. The developer using Studio Pro then needs to commit again, and the process starts from the beginning (Studio is locked ready for a new revision to be committed from the Studio Working Copy).

{{< figure src="/attachments/refguide/version-control/image6.png" >}}

## 4 Working Locally in Studio Pro

Another use case is when the developer is working locally in Studio Pro only. The image below illustrates how a single developer might work on changes and share them through the Team Server. The developer creates an app first. The initial local model is than sent to the Team Server. After creating an app the developer makes changes, where they either have an option to send the changes directly to the server as indicated with change 2. Or they can first do a local commit, and then push the changes to the Team Server in a later stage. For example, it can be the case if the developer is working without access to a network.

{{< figure src="/attachments/refguide/version-control/image10.png" >}}

## 5 Managing Studio on Development Lines {#managing-studio}

In Studio Pro, you can enable or disable Studio for a development line (the main line or a branch line). For collaborative development you need to enable Studio for one of development lines (available for Team Server apps only). 

### 5.1 Enabling Studio for a Development Line {#active-branch}

To share your model changes between Studio and Studio Pro, you need to enable Studio for one of development lines. 

Whether Studio is enabled for a development line by default, depends on your app:

* Studio is enabled for the main line by default in the following cases:
    * For a new app created via the Developer Portal
    * For an existing app that has Studio enabled
* Studio is not enabled for any development line in the following cases:
    * For a new app created via Studio Pro
    * For an existing app that does not have Studio enabled

To enable Studio for a development line or switch it to another development line, do the following: 

1. Click **Version Control** > **Manage Branch Lines**. In the **Branch Line Manager** dialog box, you can see that the development line that Studio is enabled for (if any) is marked with a globe icon in the first column.

    {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/collaborative-development/globe-icon.png" alt="Globe Icon in the Branch Line Manager" >}}

2. Select the line you want to enable Studio for and click **Enable for Studio**.

    {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/collaborative-development/enable-another-branch.png" alt="Branch Line Manager - Enabling Another Branch" >}} 

The development line for Studio has been selected.   

When you switch Studio to another development line, Studio gets locked for a few moments during this process, a pop-up dialog is shown to its users that the Studio Pro user is changing the line for Studio. All changes from Studio are committed to the current development line, and only after that is the line changed. 

### 5.2 Disabling Studio for a Development Line {#disable-studio}

If Studio is enabled for a development line, you can disable it. 

{{% alert color="info" %}}
If you disable Studio for a development line it was enabled for and do not enable it for any other development line, you will not be able to use collaborative development.
{{% /alert %}}

To disable Studio, do the following:

1. Select the branch that is enabled for Studio.
2. Click the **Disable for Mendix Studio** button.

Studio is disabled for your app.

## 6 Collaborative Development with Studio from Mendix 9.21 {#studio-9.21}

From Mendix 9.21, collaborative development with Mendix Studio is not available as Studio only supports apps with Mendix version 9.20 or below. If you have a branch line enabled for Studio in your app, you need to disable Studio for this branch line first to be able to upgrade your app. For more information on how to disable Studio for a branch line, see [Disabling Studio for a Development Line](#disable-studio) section above.

If you do not have any branch line enabled for Studio, collaborative development between Studio Pro users has no changes. 

## 7 Read More

* [Version Control](/refguide/version-control/)
* [Troubleshooting Collaborative Development](/refguide/collaborative-development-troubleshooting/)
* [Collaborative Development in Studio](/studio/collaborative-development/)
