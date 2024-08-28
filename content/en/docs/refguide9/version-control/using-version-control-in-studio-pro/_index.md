---
title: "Using Version Control in Studio Pro"
url: /refguide9/using-version-control-in-studio-pro/
linktitle: "Using Version Control"
weight: 10
description: "Describes how to work with version control and how to resolve some issues which may arise."
# Renamed from version-control-scenarios
---

## Introduction

This reference guide describes how to use version control in Mendix Studio Pro. The theory behind how version control works in Mendix, and a definition of the concepts can be found in [Version Control](/refguide9/version-control/).

## Starting an App with Version Control

To start a new app with version control do the following:

1. In the **Open App** dialog box, click **Create New App**, or select **File** > **New App**. 
2. Select the starting point – an app template.
3. In the **App Settings** dialog box, set **Enable online services** to *Yes*. This option creates a Team Server repository and a Mendix Portal app.
4. Choose **Repository type** – SVN or Git. 
5. Change the **App directory**, or leave the default suggested by Studio Pro.
6. Click **Create app**.

The app is created on the Team Server, and a working copy is created in the **App directory**. This is opened in Studio Pro so that you can start working immediately.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/app-settings.png" class="no-border" >}}

## Joining an App

If there is already a Team Server-enabled app, you can be invited to join it (see [Team](/developerportal/general/team/)).

Once you are a team member, providing you have been given a role with sufficient rights, you can work on the app by doing the following:

1. Choose **Open App** in Studio Pro.
2. Choose your app from the list of the **Open App** dialog box.
3. Click **Open in Studio Pro**.

The app will be downloaded from the Team Server and opened in Studio Pro.

## Day-to-Day Development

Let us say you have a working copy of an app on disk. You make changes to the app and save them. Saved changes are not immediately visible to others. The documents, folders, and modules which have been changed can be identified by looking at the **status**.

When you are happy with a set of changes, you **commit** them to the repository. Others can then choose to update/pull and retrieve those changes.

You can **update/pull** your working copy with changes committed by others.

You can also see a **history** of all the changes which have been committed, no matter who committed them.

### Status

The status of your app is a summary of all the changes in your working copy when compared with the original. Studio Pro shows the status both in the **App Explorer** and in the **Changes** pane.

The **App Explorer** shows an icon in front of items (documents, folders, and modules) that are changed in some way. The different icons indicate the different kinds of changes which have been made.

| Icon | Meaning |
| --- | --- |
| {{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/no-changes.png" class="no-border" >}} | Nothing happened to this item. It is unchanged with the respect to the original. |
| {{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/item-modified.png" class="no-border" >}} | You modified this item (as in, document, folder or module). |
| {{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/item-added.png" class="no-border" >}} | You added this item. |
| {{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/item-moved.png" class="no-border" >}} | You moved this item to another position in the app tree. |
| {{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/item-deleted.png" class="no-border" >}} | You deleted this item. |
| {{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/item-conflicting.png" class="no-border" >}} | You and somebody else made conflicting changes to this item. For more information, see the [Dealing With Conflicts](#conflicts) section below. |

{{% alert color="info" %}}
There is only room for one icon and if a document is both modified and moved it is shown as modified.
{{% /alert %}}

For example, say that the microflow *ChangePassword* has been modified. Also a new folder called 'Flows' was added and all microflows were moved inside this folder. The folders and modules containing changes will be depicted with a yellow icon, and the microflows which have been moved have a blue icon. This helps you to quickly see where in the app the changes are.

You can see the same information in the **Changes** pane. In this case there is an entry for each *change* to an item. If a document is both modified and moved there are *two* lines for that document. The pane also shows items that were deleted, something the app explorer cannot do.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/changes-pane.png" class="no-border" >}}

{{% alert color="info" %}}
When you successfully commit your app, this becomes the new original and all the change information is removed from the App Explorer and the Changes pane.
{{% /alert %}}

### Committing

Sending changes to the repository is called *committing*. The idea is that you commit small, consistent pieces of work to the repository. Mendix recommends committing your changes often. Preferably, the versions in the repository are always error-free, Studio Pro will warn against committing while there are errors in your app.

To commit your changes, click the **Commit** button in the **Changes** pane, or choose the **Version Control** > **Commit...** menu item.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/commit-button.png" alt="Commit Button" class="no-border" >}}

In general, it is a good idea to commit after implementing one feature or fixing one bug. By committing often, your work is integrated with the work of others regularly. The benefits of committing include the following:

* If any conflicts arise, the changes are still fresh in your mind
* Revisions are easier to understand
* If you ever need to revert something, you can revert a small chunk of work

Committing results in a new revision in the repository. You can add the following information in Studio Pro when you perform a commit, and this will be attached to the newly created revision:

* A textual message. This should be a summary of the changes you made
* A list of Mendix Portal stories that relate to the commit. A small commit will probably relate to one story. Studio Pro shows stories that are in the current Sprint and do not have a status of *Done*. Adding the story to the commit will not change the state of the Mendix Portal story. Setting the status to 'Done' must be done manually and depends on your *definition of done*.

    {{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/commit-dialog.png" class="no-border" >}}

Studio Pro also attaches some information automatically:

* The person who committed (the *author*)
* The date and time of the commit
* The list of changed documents, folders, and modules along with the type of the change (for example *modify* or *add*)
* The version of Studio Pro that was used to commit

If you also changed Java source code, added widgets or made other changes that affect files other than the app file you will see a **Changes on disk** tab page that shows you what disk changes you are about to commit.

Committing is only allowed if your working copy is up to date with the repository. If someone else committed a change since the last time you updated/pulled, you will have to update/pull first. This is because the revision you create with the commit should incorporate both your changes and the changes by the other person. Updating will combine the latest changes in the repository with your changes. After reviewing the result, and fixing any conflicts, you can commit again.

### Pushing

{{% alert color="info" %}}
Push is only available in Git. In SVN, changes are automatically pushed together with the commit. 
{{% /alert %}}

Pushing is sending your local changes to the Team Server. After committing you need to push the committed changes if you want them to be accessible to others. By default, this is done when committing, but it is possible to wait for this step until later.

To push changes, select **Version Control** > **Push** or make sure that the **Also push changes to the remote server** setting is set to **Yes** in the **Commit** dialog box, this way changes are pushed automatically when you commit them:

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/commit-git.png" class="no-border" >}}

### Updating/Pulling

Updating (SVN terminology) or pulling (Git terminology) retrieves the latest changes from the repository. You need to do this to incorporate any changes made by others that are not yet in your working copy before you can commit your changes to the repository. It is advisable to frequently update so that the number of changes you retrieve is small.

To update the working copy of your app, click **Update** (for SVN) or **Pull** (for Git) in the **Changes** pane, or choose the **Version Control** > **Update/Pull** menu item.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/update-button.png" alt="Update Button" class="no-border" >}}

Changes you receive from the repository when updating/pulling are combined with the changes you have made to your working copy (if any). Afterwards, your working copy will contain both your changes and the changes you received. As part of the update/pull, the original of your working copy is updated as well.

For example, if the last time you updated/pulled you received all changes up to and including revision N, this means that the original for your working copy is revision 40. Since you started making changes to your working copy, other people on your team have made another four commits (X, Y, and Z). If you now update/pull, you will receive those changes and Z will be the new *original* to which your changes are compared.

Usually, combining your changes with the latest revision from the repository will be done automatically. For example, one person may add a page while you are changing a microflow. If the changes are too close, however, a conflict can arise. For example, if one of your team has changed the properties of the same data view which you have also changed. You will have to resolve such conflicts before you can commit. See the [Dealing With Conflicts](#conflicts) section, below, for information on how to do this.

If your team is committing often you will have to update/pull often. Frequent updating/pulling has the benefit that you receive fewer changes with each update/pull, so integrating those changes with your work is easier.

### History {#history}

The *history* of the app is a list of all revisions that have been committed. To view the history of the app, click the **History** button in the **Changes** pane, or choose the **Version Control** > **History** menu item.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/history-button.png" alt="History Button" class="no-border" >}}

The revisions are shown in reverse chronological order (newest is at top of list). The history dialog shows you revision number, date, time, author and message of each revision.

Select a revision to see additional details such as related stories, changed documents, Studio Pro version and changes on disk. Icons summarize the kinds of changes that happened in the app.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/history-of-dialog.png" class="no-border" >}}

## Reverting Changes {#reverting}

Changes that have not yet been committed can be reverted. Say, for example, that you have made a lot of changes to a page and you are not happy with the result. You can revert the page to the original: that is, the state of the page before you started making changes.

Deletes of documents, folders, and modules can also be reverted. This will bring them back into the app. Note that you will get back the latest version you have *committed*. For example, if you commit, make some changes to a microflow, and then delete the microflow, reverting the delete will give you the microflow without the changes that you made.

You can revert changes in the **Changes** pane, from **Version Control** > **Revert All Changes**, or from the right-click menu on the document you want to revert.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/revertx2.png" alt="Two ways of reverting" class="no-border" >}}

## Dealing With Conflicts {#conflicts}

If you update/pull your app and the changes cannot be merged automatically you will receive a message telling you there are conflicts. A conflict arises when two changes cannot be combined.

There are two different sorts of conflict:

* Document conflicts
* App conflicts

### Resolving a Document Conflict

Two changes in the same *document* that are really close to each other can cause a document conflict. For example, two people both change the properties of the same element on the page. The document will be marked as conflicted in the **Changes** pane. Conflicts have to be resolved before you can commit again.

For more information on resolving document conflicts see [New Merge Algorithm with Fine-Grained Conflict Resolution](/refguide9/new-merge-algorithm/) and [Changes Pane](/refguide9/changes-pane/).

### Resolving an App Conflict

App conflicts are conflicts are conflicts at the level of the app. There are two cause for app conflicts:

1. One person deletes a document and the other makes a change inside that document.
2. Both people move a document but to different places in the app tree.

The involved document is marked as conflicted and you can see the reason in the details column of the **Changes** pane.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/app-conflicts.png" alt="Example of app conflicts" class="no-border" >}}

{{% alert color="info" %}}
If a whole folder (or module) was *deleted* and another person changes a document inside that folder, the folder/module is restored and also marked as conflicted. This way you know that the intention was to delete that folder but it has been restored to show you the context of the changed document.
{{% /alert %}}

You can resolve an app conflict by choosing **Tasks** > **Use mine** or by deleting the involved documents or folders.

## Using Branches

A repository can contain a number of development lines. Each development line offers independent development from the other development lines. In the simple case there is just one development line called the main line (called 'trunk' in subversion). All development then happens inside that one line.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/main-branch-line.png" class="no-border" >}}

It is often convenient to have more than one development line. For example, one development line for fixing bugs in the currently deployed version of your app and another line where you develop new functionality. If you then find a bug in the deployed version you can fix it in the corresponding development line irrespective of the state of the development line where new functionality is developed. See [Version Control](/refguide9/version-control/) for more information about branches.

### When to Use a Branch

#### Patching a Deployed Application

If you want to add some functionality to a deployed application or you want to fix a bug in it, you can do so without interfering with other development.

1. Determine the version of the deployed application. This information is in the Mendix Portal. Alternatively, you can find the version in the *metadata.json* file in the **model** subfolder of your deployment package (mda) archive. For example, `"ModelVersion": "1.0.0.16"`
2. Choose **Version Control** > **Manage Branch Lines...** and create a branch based on the tag with the that version number as its name.

    {{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/create-from-tag.png" class="no-border" >}}

3. Add the functionality or fix the bug in this newly created branch.
4. Testing that things work as intended.
5. Create a new deployment archive with a higher version number (increase patch or minor version).

{{% alert color="info" %}}
We advise you to merge the fixed maintenance branch into the main line quickly, if required. If the merge is too complicated to be made automatically, because the main line has changed too much, you will know how to apply the fix by hand to the main line as the changes will still be fresh in your mind.

Of course, not all maintenance fixes need to be merged to the main line. Sometimes, it is a fix of something that was completely redesigned or eliminated in the main line. In this case, merging is unnecessary.
{{% /alert %}}

#### Developing a New Feature Independently

Another reason for creating a branch is to develop a big new feature without interfering with other development. This gives you the freedom to commit a half-implemented feature, possibly even with errors, while other people can still commit and update/pull on the main line. Without using a branch line, you would have to constantly make sure that your app is error free and does not break other parts of the system.

Firstly, select **Version Control** > **Manage Branch Lines...** and create a branch from a revision of the main line.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/create-branch-line-dialog.png" class="no-border" >}}

Now work on the branch until the feature is done and commit the completed work.

When you want to merge the whole branch back to the main line to integrate the feature there. Do the following:

1. Open the main line.
2. Choose **Version Control** > **Merge changes here**.
3. Select **Merge feature branch** option.
4. Click **Merge**.
5. Resolve any conflicts and errors.
6. Commit the new feature to the main line.

You can delete the branch after merging it back, if you want.

### Working with Branches in Studio Pro

#### Branching

Development lines other than the main line are called branch lines. Our advice would be to develop new features in the *main line* and to use *branch lines* for fixing bugs in versions that have been deployed. This is the scenario Studio Pro makes easy but other scenarios for more complex apps are supported as well.

You can create branch lines from the Branch Line Manager which you can find at **Version Control** > **Manage Branch Lines...**.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/create-branch-line.png" class="no-border" >}}

#### Merging

If you have multiple development lines, you sometimes want to port changes from one development line to another. For example, the fix that you made in a branch line for the production version should also be applied to the new 2.0 version you are developing in the main line. You can, of course, do this by hand but Studio Pro can also help you by merging changes from one development line to another.

Merging is always done while you have a working copy open. The merge will result in extra local changes in that working copy. It is advisable to commit local changes first before merging extra changes into a working copy. Otherwise, the uncommitted local changes and the changes caused by the merge will be combined and it is very hard to untangle them if you are unhappy with the merge. Studio Pro will warn you if you have uncommitted changes.

Select **Version Control** > **Merge Changes Here**, select the option available for the version control you are using:

* For SVN, **Port fix**, **Merge feature branch**, and **Advanced merge** options are available
* For Git, **Port fix** and **Merge feature branch** options are available

For more information on merge settings, see [Merge Dialog](/refguide9/merge-dialog/).

#### Reverse Merging

Reverting changes works for changes that have not been committed yet. Changes that have been committed can never be deleted. However, you can apply the changes 'in reverse' and commit that. This feature is called 'Reverse merging' in Studio Pro.

Choose **Version Control** > **Reverse Merge Changes...**

For SVN, you can choose a range (**Start revision** and **End revision**):

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/revert-committed-changes.png" class="no-border" >}}

For Git, reverting changes is done with one commit at a time. If you want to revert multiple commits, you can do that by reverting the latest commit, then the previous one, and so on.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/revert-changes-git.png" class="no-border" >}}

After a reverse merge the app will look like the changes never happened; if you 'reverse merge' the adding of a page, the page will be deleted locally. Just like when you are doing a normal merge, conflicts can arise. In the example, if later commits change the added page, the reverse merge will result in a conflict. After resolving any problems, you can commit the results to the repository.

#### Replacing the Main Line with a Branch Line

There are two methods for fully replacing your main line with a branch line.

The first method is to merge the entire branch line into the main line, essentially replacing the main line contents with the branch line contents). This works as long as the branch line is up to date with the main line (to avoid conflicts). To do this, follow these steps:

1. Select **Version Control** > **Merge Changes Here** > **Merge feature branch**.
2. Select the branch to merge into the main line.

The second method should be used if the first method is not possible for some reason and you want to "overwrite" the main line with your branch line. For this method, you must follow these steps:

1. Check out both the main line and the branch line locally.
2. Overwrite all the files in the main line app directory with those of the branch line (except for the *.svn* directory).
3. Commit your changes using Studio Pro. 
4. Reopen the main line app in Studio Pro only after overwriting the files.

#### Merging Using Git in the Command Line

For merging *.mpr* files using Git in the command line to work, it is necessary to attach *mx.exe* merge to Git as a driver.

When doing a **git merge** operation on two branches in the command line, Git attempts to merge the binaries of *.mpr* files, which does not work. You need to apply Studio Pro merge algorithm and that is where *mx.exe* as a driver is needed.

Navigate to the *.gitconfig* file in C:/Users/[USER_NAME] and add the following:

```text
[core]
  attributesfile = ~/.gitattributes
[merge "custom"]
  name = custom merge driver for specific files
  driver = [MX.EXE_PATH] merge %O %A %B
```

Where `[MX.EXE_PATH]` should be replaced by the *mx.exe* path with only forward slashes pointing to a drive using `/C/` instead of `C:/`.

You can also configure the Git driver locally per repository using the following commands:

```text
git config merge.custom.name "custom merge driver for specific files"
git config merge.custom.driver "[MX.EXE_PATH] merge %O %A %B"
```

After setting up the driver either locally or globally, create a *.gitattributes* file in the same folder with the following contents:

```text
*.mpr merge=custom
```

Save the files and now when **git merge** is run and it involves *.mpr* files, the *mx.exe* merge will run Studio Pro merge algorithm before Git finishes the merge.

## Versioning an App Deployed to the Cloud {#versioning-app}

### Deploying Locally

While developing you can deploy and run your app on your local machine by clicking the menu item **Run** > **Run Locally**. This allows you to test the app as it currently is stored on your local machine.

### Deploying Your Working Copy

When you deploy to the cloud, you can choose to use the version of the app stored on your local machine, the *working copy* and deploy that to the default environment. If you are using the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), or other partner cloud (SAP BTP, for example), click **Publish** to commit the version of the app stored on your local machine and deploy that to the default environment.

### Choosing a Specific Development Line and Revision

It is also possible to choose a specific development line and revision to deploy to the default environment, or to create a package from.

In this case, Studio Pro will create a fresh checkout of the chosen revision. This means that any team member can always recreate this version of the deployment package. In other words, Studio Pro does *not* rely on your local files for creating a versioned deployment package.

{{% alert color="warning" %}}
You can only create a versioned deployment package of changes that have been committed. If you have local changes that you want to deploy in a versioned deployment package, commit them first.
{{% /alert %}}

When it creates the package, Studio Pro will also create a tag representing this version of your app. If you want to make modifications to this version later, independently of other development which has taken place, you can create a branch based on this tag. The name of the tag is a version number that you choose.

#### Deploying a Specific Version to a Mendix Licensed Cloud Node

If you are using the Mendix Cloud you can choose **App** > **Deploy to Licensed Cloud Node** to deploy a specific version.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/deploy-to-cloud.png" class="no-border" >}}

#### Creating a Deployment Package from a Specific Version

If you are using a different hosting environment, you create a deployment package using the menu item **App** > **Create Deployment Package**.

{{< figure src="/attachments/refguide9/version-control/using-version-control-in-studio-pro/create-deployment-package.png" class="no-border" >}}

## Working Outside Studio Pro {#working-outside-studio-pro}

Studio Pro takes care of some file management automatically. If you add or remove custom widgets they are automatically added or removed from version control, too. Some files and directories (for example, deployment and releases directories) are automatically ignored so that they are not committed to version control.

We advise you to always commit and update/pull inside Studio Pro because in this way useful metadata is added to your revisions. Studio Pro has ways to recover from external updates or merges but it is best to not depend on that.

### External Tools {#external-tools}

If you are doing more advanced changes to files, like adding Java actions or resources to your app, you will have to install a separate tool on your computer and perform some operations yourself. When using SVN, use TortoiseSVN [https://tortoisesvn.net/](https://tortoisesvn.net/). When using Git, use TortoiseGit [https://tortoisegit.org/](https://tortoisegit.org/). Both can be downloaded for free.

{{% alert color="warning" %}}
Mendix Studio Pro uses the Subversion 1.9 working copy. Previous versions of the Mendix Desktop Modeler used a Subversion 1.7 working copy. These working copy versions **are not compatible**.

Always use the version of TortoiseSVN which matches your app model. If you open a local model from Mendix 7.x with the latest version of TortoiseSVN **you will no longer be able to open it in Mendix**.
{{% /alert %}}

{{% alert color="info" %}}
Studio Pro adds metadata on the Mendix version of your app to each revision when you commit or create a branch. Therefore, when committing or merging using third-party tools, it may no longer be possible to deploy to the Mendix Cloud. This can be fixed by making a commit using Studio Pro, so the correct metadata is present again.
{{% /alert %}}

{{% alert color="warning" %}}
Studio Pro automatically performs the necessary post-processing steps when you download a Git clone through its user interface. Using the Git command line to create a Git clone or using a clone created by a third-party tool in Studio Pro is not supported.
{{% /alert %}}

### Authenticating to Team Server

When using external tools, you might be asked to authenticate separately to Team Server.

Connecting to Git is done via a personal access token (PAT). For information on how to create a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *Mendix Profile*.

You need to use the following credentials:

* URL: `https://git.api.mendix.com/<your AppID>.git`
* Username: your Mendix account username (alternatively, you can use the word *pat* as your username)
* Password: the personal access token you created

Connecting to SVN is done with your Mendix credentials:

* URL: `https://teamserver.sprintr.com/<your AppID>/`
* Username: your Mendix account username
* Password: your Mendix account password

    {{% alert color="info" %}}If you are using BYOIDP, direct access to Team Server is no longer possible. For more information, see the in the [BYOIDP and Team Server](/control-center/security/set-up-sso-byoidp/#team-server) section *Set Up an SSO (BYOIDP)* .{{% /alert %}}

### Adding Files and Directories

If you add files or directories or delete files using Windows Explorer, Studio Pro automatically adds or deletes these from version control, too.

Make sure you use the **Export** feature of TortoiseSVN/TortoiseGit if you are copying a directory that is already under version control in your app.

### Deleting Files and Directories

If you delete a file from your app, Studio Pro will automatically also delete it from the Team Server.

If you are using SVN and want to delete a whole directory, you have to use the delete command of TortoiseSVN. You can execute this command by right-clicking the directory and choosing **TortoiseSVN** > **Delete**. 

When using Git, a folder is no longer be tracked if all the files in the folder are removed.

### Branching and Deploying

If you perform branching outside of Studio Pro, you will not be able to immediately deploy to Mendix Cloud. That is because Studio Pro adds metadata about the Mendix version of your app to each revision when you commit or create a branch, which is needed by the Mendix Cloud deployment. Branching outside of Studio Pro means that metadata is missing from your branch, thus your app cannot successfully be deployed.

To fix this, make a small commit on your branch in Studio Pro (for example, changing a documentation field). Studio Pro will then add the metadata that Mendix Cloud deployment requires, and you will be able to deploy your app.

### Reverting Accidental Studio Pro App Model Upgrade

When working in different apps with different Studio Pro versions, you may one day find yourself with an app model upgraded and committed to a newer Studio Pro version, while the rest of your team is not yet ready to upgrade. 

To revert this version upgrade of the app model, follow these steps, using either TortoiseGit or TortoiseSVN depending on your repository type:

1. Inform your team of the situation and prevent them from making further commits.
2. Close Studio Pro. 
3. In Windows Explorer, go to your main app directory.
4. Right-click the directory and select **Tortoise(Git/SVN)** > **Show log**. 
5. Find the latest revision that was in the desired Studio Pro version.
6. When using TortoiseGit, select all revisions up to but excluding the desired revision. Right-click and select **Revert changes by these commits**, then confirm and click **Yes**. 
7. When using TortoiseSVN, right-click that the desired revision, select **Revert to this version**, confirm, and click **OK**.
8. Back in Windows Explorer, right-click the folder again, select **TortoiseSVN** > **Commit**, enter your commit message, and click **OK**.
9. Start the desired Studio Pro version and download the app from Team Server.
10. Check that everything is okay in your app.
11. Inform your team that they need to do a fresh checkout of the app or run **TortoiseSVN** > **Update** on their app folder before opening the app in the desired Studio Pro version again.

## Read More

* [Advanced Branching and Merging Strategies](https://www.mendix.com/blog/advanced-branching-merging-strategies-part-1-2/)
