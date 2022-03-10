---
title: "Collaborative Development"
url: /refguide7/collaborative-development/
category: "Version Control"
description: "Describes the process of collaborative development between the Mendix Desktop Modeler and the Mendix Web Modeler"
tags: ["desktop modeler", "collaborative development", "sync"]
aliases:
    - /howto/web-modeler/syncing-webmodeler-desktop.html
    - /refguide7/desktop-webmodeler.html
    - /refguide7/sync-webmodeler-desktopmodeler.html
    - /web-modeler/general-sync-webmodeler-desktopmodeler-wm.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction 

{{% alert color="warning" %}}

Collaborative development is only available if your project has Mendix version 7.23.3 or above. You cannot sync your changes with the Web Modeler if your project has Mendix version 7.23.2 or below. 

You will still be able to open your project in the Web Modeler (the Web Modeler will automatically upgrade it to the latest release version of 7.23).  However, to sync changes from the Web Modeler you have to use the Mendix Desktop Modeler version 7.23.3 or above.

{{% /alert %}}

Collaborative development is the process of sharing app model changes when a team of more than one person is working on the app. Collaborative development allows the team members to work together on one project in the Desktop Modeler and the Web Modeler and easily synchronize changes using [version control](/refguide7/version-control/). The Desktop Modeler can be used to work on different branches of an app, while the Web Modeler can be enabled for one of these branches. 

If you have never used the Mendix Web Modeler before, mind that you need to enable it for a development line first. For more information on managing development lines, see the [Managing Development Lines in the Desktop Modeler](#managing-branches) section.  

## 2 Collaborative Development Overview

Desktop Modeler users can collaborate with each other through [version control](/refguide7/version-control/) via **Commit** and **Update** operations. 

The collaborative development process between the Desktop Modeler and the Web Modeler consists of the following steps:

1. Every change made in the Web Modeler is automatically saved to the Web Modeler working copy. Multiple users can view the project in the Web Modeler at the same time: one user can edit it and others are in read-only mode. 

2.  When Desktop Modeler users open a project, they are notified if the Web Modeler is enabled for this development line. 

    {{< figure src="/attachments/refguide7/version-control/collaborative-development/collaborative-development-enabled-notification.png" alt="Collaborative Development Enabled Notification" >}}

3. The Desktop Modeler creates a local working copy that the Desktop Modeler user works on. To get changes from the Team Server the user needs to click **Update** (the latest revision is then retrieved from the Team Server, containing commits from other Desktop Modeler users and the latest changes from the Web Modeler).

4. After the Desktop Modeler user clicks **Update**, the latest changes from the Web Modeler are committed automatically to the Team Server before the Desktop Modeler receives the update from it. The latest revision from the Team Server is merged into the Desktop Modeler's local working copy. 

5.  The Desktop Modeler user works on the project and, once the user finishes some functionality (for example, fixes a bug or creates a new feature), they click **Commit**. The user enters a commit message and confirms it. This triggers the same process as during an update (described in step 4), and the Desktop Modeler working copy is updated with the latest revision from the Team Server.

    There are two possible outcomes of this merge:<br/>

    a.   There are no conflicts, the Desktop Modeler user changes are committed to the Team  Server. Afterwards the Web Modeler gets the latest revision from the Team Server and is unlocked; the Desktop Modeler user changes are visible to Web Modeler users. Other Desktop Modeler users will get the changes once they do an update. <br/>

    b. There are conflicts, the Desktop Modeler commit process is stopped. The Web Modeler is unlocked without getting changes from the Desktop Modeler user. The Desktop Modeler user needs to resolve the merge conflicts first to before being able to do a commit again.

{{% alert color="info" %}}

When the Desktop Modeler user wants to deploy the app to the cloud, they click the **Run** button. The commit is done automatically during this process and step five is executed. 

{{% /alert %}}

## 3 Web Modeler Perspective

For information on collaborative development from the Web Modeler perspective, see [Collaborative Development in the Web Modeler](/studio7/general-collaborative-development/) in the *Web Modeler Guide*. 

## 4 Desktop Modeler Perspective

When you connect to a project which has collaborative development turned on, you see which development line (the main line or a branch line) the Web Modeler is enabled for. 

Click the drop-down to select another line or click **OK** to open the currently selected line. 

{{< figure src="/attachments/refguide7/version-control/collaborative-development/open-app-dialog.png" alt="Open App Dialog Window" >}}

### 4.1 Merging Latest Changes

To merge the latest changes stored in the Team Server (from both Web Modeler users and other Desktop Modeler users), open **Changes** and click **Update**.

{{< figure src="/attachments/refguide7/version-control/collaborative-development/update-button.png" alt="Update Option" >}}

### 4.2 Merging Latest Changes

To commit your latest project changes and make them available to other users, open **Changes** and click **Commit**. The process of deploying your app (when you click the **Run** button) will also trigger a commit. 

{{% alert color="info" %}}

We recommend you update your project and commit changes often to avoid multiple conflicts in your project. 

{{% /alert %}}

If your project has conflicts, the Web Modeler will be unlocked without receiving your changes. You need to resolve the conflicts in the Desktop Modeler first to be able to complete the merge and commit again. 

Your changes will be sent to the Web Modeler automatically if there are no conflicts. For more information on the collaborative development process in the Web Modeler, see [Collaborative Development in the Web Modeler](/studio7/general-collaborative-development/) in the *Web Modeler Guide*.

### 4.3 Viewing History of Commits

You can see all the changes committed to the current development line via **Project** > **More Versioning** > **History**

{{< figure src="/attachments/refguide7/version-control/collaborative-development/history.png" alt="History Dialog Box" >}}

 

## 5 Managing Development Lines in the Desktop Modeler {#managing-branches}

In the Desktop Modeler, you can enable the Web Modeler for a development line (the main line or a branch line). You can also create and delete branch lines. 

For collaborative development you need to enable the Web Modeler for one of development lines. 

### 5.1 Enabling the Web Modeler for a Development Line {#active-branch-for-the-wm}

To share your model changes between the Web Modeler and the Desktop Modeler, you need to enable the Web Modeler for one of development lines. 

Whether the Web Modeler is enabled for a development line by default, depends on your project:

* The Web Modeler is enabled for the main line by default in the following cases:
  * For a new project created via the Developer Portal
  * For an existing project that has the Web Modeler enabled
* The Web Modeler is not enabled for any development line in the following cases:
  * For a new project created via the Desktop Modeler
  * For an existing project that does not have Web Modeler enabled

To enable the Web Modeler for a development line or switch it to another development line, do the following: 

1.  Click **Project** > **More Versioning** > **Manage Branch Lines**. In the **Branch Line Manager** dialog window, you can see the development line that the Web Modeler is enabled for (if any) is marked with a globe icon in the first column.<br/> 

	{{< figure src="/attachments/refguide7/version-control/collaborative-development/globe-icon.png" alt="Globe Icon in the Branch Line Manager" >}}<br/>

2.  Select the line you want to enable the Web Modeler for and click **Enable for the Web Modeler**. <br/>

	{{< figure src="/attachments/refguide7/version-control/collaborative-development/enable-another-branch.png" alt="Branch Line Manager - Enabling Another Branch" >}} 

The development line for the Web Modeler has been selected.   

When you switch the Web Modeler to another development line, the Web Modeler gets locked for a few moments during this process, a pop-up dialog is shown to its users that the Desktop Modeler user is changing the line for the Web Modeler. All changes from the Web Modeler are committed to the current development line, and only after that the line is changed. 

### 5.2 Creating a New Branch Line

To create a new branch line, do the following: 

1. Click **Project** > **More Versioning** > **Manage Branch Lines**. 

2.  In the **Branch Line Manager** dialog window, you see the list of existing development lines. Click **New** to create a branch line. <br/>

	{{< figure src="/attachments/refguide7/version-control/collaborative-development/creating-new-branch.png" alt="Creating New Branch" >}}<br/>

3.  In the **Create Branch Line** dialog window, set the following: <br/>

	a. What line you are creating a new line from: the main line, a branch line, or a tagged version. For more information on these concepts, see section [2 Concepts](/refguide7/version-control/#concepts) in *Version Control*. <br/> 
	
	b. Select revision if needed. <br/>

	c. Type the name of the new line. 

4.  After you have configured all the settings, click **OK.** 

	{{< figure src="/attachments/refguide7/version-control/collaborative-development/create-branch-dialog.png" alt="Create Branch Line Dialog" >}} 

You have created a new branch line.   

### 5.3 Deleting a Branch Line

To delete a branch line, do the following:

1. Click **Project** > **More Versioning** > **Manage Branch Lines**. 

2.  In the **Branch Line Manager** dialog window, select the branch you would like to delete, click **Delete** and confirm deletion. 

	{{< figure src="/attachments/refguide7/version-control/collaborative-development/deleting-branch.png" alt="Deleting a Branch" >}}

You have deleted the branch.

{{% alert color="info" %}}

You cannot delete the Web Modeler enabled branch. If you need to delete this branch, enable the Web Modeler for another line, and only then delete the branch. 

{{% /alert %}}

## 6 Read More

* [Version Control](/refguide7/version-control/)
* [Troubleshooting Collaborative Development](/refguide7/collaborative-development-troubleshooting/)
* [Collaborative Development in the Web Modeler](/studio7/general-collaborative-development/)
