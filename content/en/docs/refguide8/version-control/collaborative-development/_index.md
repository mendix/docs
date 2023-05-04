---
title: "Collaborative Development"
url: /refguide8/collaborative-development/
category: "Version Control"
description: "Describes the process of collaborative development between the Mendix Studio Pro and the Mendix Studio"
tags: ["studio pro", "studio", "collaborative development", "sync"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

Collaborative development is the process of sharing app model changes when a team of more than one person is working on the app. Collaborative development allows the team members to work together on one project in Mendix Studio Pro and Mendix Studio, and easily synchronize changes using [version control](/refguide8/version-control/). Studio Pro can be used to work on different branches of an app, while Studio can be enabled for one of these branches. 

{{% alert color="info" %}}
If you get a **No Development Line Selected** message when opening your app in Studio, make sure you enable a development line for it. For more information, see [Enabling Studio for a Development Line](#active-branch).
{{% /alert %}}

{{% alert color="warning" %}}
Collaborative development is enabled by default for new apps created via the Developer Portal. If you are upgrading your project from Mendix 7 to 8, make sure you have followed the steps in [Moving from Desktop Modeler Version 7 to Studio Pro 8](/refguide8/moving-from-7-to-8/). 
{{% /alert %}}

## 2 Collaborative Development Overview

Studio Pro users can collaborate with each other through [version control](/refguide8/version-control/) via **Commit** and **Update** operations. 

The collaborative development process between Studio Pro and Studio consists of the following steps:

1. Every change made in Studio is automatically saved to the Studio working copy. Multiple users can view the project in Studio at the same time: one user can edit it and the others are in read-only mode. 
2. When Studio Pro users open a project, they are notified if Studio is enabled for this development line. 

    {{< figure src="/attachments/refguide8/version-control/collaborative-development/collaborative-development-enabled-notification.png" alt="Collaborative Development Enabled Notification" >}}

3. Studio Pro creates a local working copy that the Studio Pro user works on. 
4. To get changes from the Team Server the user needs to click **Update**. When the Studio Pro user clicks **Update**, the latest changes from *Studio* are committed automatically to the Team Server before Studio Pro receives the update from it. The latest revision from the Team Server containing the latest *Studio* changes is merged into Studio Pro's local working copy. 
5. The Studio Pro user works on the project and, once the user finishes some functionality (for example, fixes a bug or creates a new feature), they click **Commit**. The user enters a commit message and confirms it. This triggers the same process as during an update (described in step 4), and the Studio Pro working copy is updated with the latest revision from the Team Server.

    There are two possible outcomes of this merge:<br/>

    1. There are no conflicts, the Studio Pro user changes are committed to the Team  Server. Afterwards Studio gets the latest revision from the Team Server and is unlocked; the Studio Pro user changes are visible to Studio users. Other Studio Pro users will get the changes once they do an update. <br/>
    1. There are conflicts, the Studio Pro commit process is stopped. Studio is unlocked without getting changes from the Studio Pro user. The Studio Pro user needs to resolve the merge conflicts first to before being able to do a commit again.

{{% alert color="info" %}}
When the Studio Pro user wants to deploy the app to the cloud, they click the **Run** button. The commit is done automatically during this process and step five is executed. 
{{% /alert %}}

## 3 Studio Pro Perspective

When you connect to a project which has collaborative development turned on, you see which development line (the main line or a branch line) Studio is enabled for. 

Click the drop-down to select another line or click **OK** to open the currently selected line. 

{{< figure src="/attachments/refguide8/version-control/collaborative-development/open-app-dialog.png" alt="Open App Dialog Window" >}}

### 3.1 Merging Latest Changes

To merge the latest changes stored in the Team Server (from both Studio users and other Studio Pro users), open **Changes** and click **Update**.

{{< figure src="/attachments/refguide8/version-control/collaborative-development/update-button.png" alt="Update Option" >}}

### 3.2 Committing Latest Changes

To commit your latest project changes and make them available to other users, open **Changes** and click **Commit**. The process of deploying your app (when you click the **Run** button) will also trigger a commit. 

{{% alert color="info" %}}
We recommend you update your project and commit changes often to avoid multiple conflicts in your project.  
{{% /alert %}}

If your project has conflicts, Studio will be unlocked without receiving your changes. You need to resolve the conflicts in Studio Pro first to be able to complete the merge and commit again. 

Your changes will be sent to Studio automatically if there are no conflicts.

### 3.3 Viewing History of Commits

You can see all the changes committed to the current development line via **Version Control** > **History**:

{{< figure src="/attachments/refguide8/version-control/collaborative-development/history-dialog.png" alt="History Dialog Box" >}}

## 4 Managing Development Lines in Studio Pro {#managing-branches}

In Studio Pro, you can enable or disable Studio for a development line (the main line or a branch line). You can also create and delete branch lines. 

For collaborative development you need to enable Studio for one of development lines. 

### 4.1 Enabling Studio for a Development Line {#active-branch}

To share your model changes between Studio and Studio Pro, you need to enable Studio for one of development lines. 

Whether Studio is enabled for a development line by default, depends on your project:

* Studio is enabled for the main line by default in the following cases:
    * For a new project created via the Developer Portal
    * For an existing project that has Studio enabled
* Studio is not enabled for any development line in the following cases:
    * For a new project created via Studio Pro
    * For an existing project that does not have Studio enabled

To enable Studio for a development line or switch it to another development line, do the following: 

1. Click **Version Control** > **Manage Branch Lines**. In the **Branch Line Manager** dialog box, you can see that the development line that Studio is enabled for (if any) is marked with a globe icon in the first column.<br/> 

    {{< figure src="/attachments/refguide8/version-control/collaborative-development/globe-icon.png" alt="Globe Icon in the Branch Line Manager" >}}<br/>

2. Select the line you want to enable Studio for and click **Enable for Studio**. <br/>

    {{< figure src="/attachments/refguide8/version-control/collaborative-development/enable-another-branch.png" alt="Branch Line Manager - Enabling Another Branch" >}} 

The development line for Studio has been selected.   

When you switch Studio to another development line, Studio gets locked for a few moments during this process, a pop-up dialog is shown to its users that the Studio Pro user is changing the line for Studio. All changes from Studio are committed to the current development line, and only after that is the line changed. 

### 4.2 Disabling Studio for a Development Line

If Studio is enabled for a development line, you can disable it. 

{{% alert color="info" %}}
If you disable Studio for a development line it was enabled for and do not enable it for any other development line, you will not be able to use collaborative development.
{{% /alert %}}

To disable Studio, do the following:

1. Select the branch that is enabled for Studio.
2. Click the **Disable for Mendix Studio** button:

    {{< figure src="/attachments/refguide8/version-control/collaborative-development/disable-for-studio.png" alt="Disable for Mendix Studio" >}}

Studio is disabled for your project.

### 4.3 Creating a New Branch Line

To create a new branch line, do the following: 

1. Click **Version Control** > **Manage Branch Lines**. 
2. In the **Branch Line Manager** dialog box, you see the list of existing development lines. Click **New** to create a branch line. <br/>

    {{< figure src="/attachments/refguide8/version-control/collaborative-development/creating-new-branch.png" alt="Creating New Branch" >}}<br/>

3. In the **Create Branch Line** dialog box, set the following: <br/>

    1. What line you are creating a new line from: the main line, a branch line, or a tagged version. For more information on these concepts, see the [Concepts](/refguide8/version-control/#concepts) section in *Version Control*. <br/> b. Select the revision, if needed. <br/>
    1. Type the name of the new line. 

4. After you have configured all the settings, click **OK**.

    {{< figure src="/attachments/refguide8/version-control/collaborative-development/create-branch-dialog.png" alt="Create Branch Line Dialog" >}} 

You have created a new branch line.   

### 4.4 Deleting a Branch Line

To delete a branch line, do the following:

1. Click **Version Control** > **Manage Branch Lines**. 
2. In the **Branch Line Manager** dialog box, select the branch you would like to delete, click **Delete** and confirm deletion. 

    {{< figure src="/attachments/refguide8/version-control/collaborative-development/deleting-branch.png" alt="Deleting a Branch" >}}

You have deleted the branch.

{{% alert color="info" %}}
You cannot delete a Studio enabled branch. If you need to delete this branch, enable Studio for another line, and only then delete the branch. 
{{% /alert %}}

## 5 Read More

* [Version Control](/refguide8/version-control/)
* [Troubleshooting Collaborative Development](/refguide8/collaborative-development-troubleshooting/)
