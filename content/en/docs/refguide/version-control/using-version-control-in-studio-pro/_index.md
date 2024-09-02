---
title: "Using Version Control in Studio Pro"
url: /refguide/using-version-control-in-studio-pro/
linktitle: "Using Version Control"
weight: 10
description: "Describes how to work with version control and how to resolve some issues which may arise."
# Renamed from version-control-scenarios
---

## Introduction

This document describes how to use version control in Mendix Studio Pro. 

For more information on related concepts and the theory behind how version control works in Mendix, see [Version Control](/refguide/version-control/).

## Starting an App with Version Control

To start a new app with version control, do the following:

1. Open Studio Pro.
2. In the **Select App** dialog box, click **Create New App**. 
3. Select the starting point – an app template.
4. In the **App Settings** dialog box, make sure that **Enable online services** is set to *Yes*. This option creates a remote (Team Server) repository and an app in [Apps](https://sprintr.home.mendix.com/) of the Mendix Portal.
5. Optionally, change the default **App directory** set by Studio Pro.
6. Click **Create app**.

The app is created on the Team Server, and a working copy is created in the **App directory**. This is opened in Studio Pro so that you can start working immediately.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/app-settings.png" class="no-border" >}}

## Joining an App

If there is already a Team Server-enabled app, you can be invited to join it (see [Team](/developerportal/general/team/)).

Once you are a team member, provided that you have been given a role with sufficient rights, you can work on the app by doing the following:

1. Choose **Open App** in Studio Pro.
2. Choose your app from the list of the **Open App** dialog box.
3. Click **Open in Studio Pro**.

The app will be downloaded from the Team Server and opened in Studio Pro.

## Day-to-Day Development

Let us say you have a working copy of an app on disk. You make changes to the app and save them. Saved changes are not immediately visible to others. The documents, folders, and modules that have been changed can be identified by looking at the **status**.

When you are happy with a set of changes, you commit and push them to the remote repository (Team Server). Others can then choose to update/pull and retrieve those changes.

You can **update/pull** your working copy with changes committed by others.

You can also see a **history** of all the changes that have been committed, no matter who committed them.

### Status {#status}

The status of your app is a summary of all the changes in your working copy when compared with the original (the original version is the version you pulled from the remote repository before making your changes (or the newly created app if you have not pulled anything yet). Studio Pro shows the status both in the **App Explorer** and in the **Changes** pane.

The **App Explorer** shows an icon in front of items (such as documents, folders, and modules) to present that are changed in some way. The different icons indicate the different kinds of changes which have been made.

| Icon | Meaning |
| --- | --- |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/no-changes.png" class="no-border" >}} | Nothing happened to this item. It is unchanged with the respect to the original. |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/item-modified.png" class="no-border" >}} | You modified this item. |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/item-added.png" class="no-border" >}} | You added this item. |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/item-moved.png" class="no-border" >}} | You moved this item to another position in the app tree. |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/item-deleted.png" class="no-border" >}} | You deleted this item. |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/item-conflicting.png" class="no-border" >}} | You and somebody else made conflicting changes to this item. For more information, see the [Dealing With Conflicts](#conflicts) section below. |

{{% alert color="info" %}}
In the **App Explorer**, there is only room for one icon for each item. If an item is both modified and moved, it is shown as modified with a yellow icon.
{{% /alert %}}

For example, say that the microflow **ChangePassword** has been modified. Also a new folder called **Flows** was added and all microflows, including the modified microflow, were moved into this folder. The new folder gets a green icon, and the module containing those changes is depicted with a yellow icon. The microflows which were moved but had not been modified get a blue icon. The modified microflow **ChangePassword** gets a yellow icon. This helps you to quickly see where in the app the changes are.

In the **Changes** pane, you can find more detailed information. There is an entry for each change to an item. If a document is both modified and moved, there are two lines for that document. The pane also shows items that were deleted, something the app explorer cannot do. For more information, see [Changes Pane](/refguide/changes-pane/).

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/changes-pane.png" max-width=80% >}}

{{% alert color="info" %}}
When you successfully commit your app, this becomes the new original and all the change information is removed from the **App Explorer** and the **Changes** pane.
{{% /alert %}}

### Committing

Sending changes to the local repository is called committing. The idea is that you commit small, consistent pieces of work to the repository. Mendix recommends committing your changes often. Preferably, the versions in the repository are always error-free. Studio Pro warns against committing while there are errors in your app.

To commit your changes, click the **Commit** button in the **Changes** pane, or choose the **Version Control** > **Commit** menu item.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/commit-button.png" max-width=60% alt="Commit Button" >}}

Git only creates a local commit. To submit your local commit (or commits) to the remote repository, you need to **push** your changes to the remote repository. You can choose between committing and pushing right away or committing locally. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/local-repo-and-team-server.png" alt="Local Repository and Team Server" class="no-border" >}}

For example, you are developing a feature together with another developer on the same branch. You both have the same starting point (3). When your colleague commits a change, you can choose to retrieve these changes and integrate them. To enable this, developers first need to commit existing changes locally (6), so that the changes can be automatically merged when they are retrieved by other developers. After this, you commit the merged result, and optionally push the merged result (7) to be used by your colleague. Because changes are already explicitly committed, you can always see what you changed and you cannot accidentally override your local changes when you are resolving conflicts.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/incoming-changes.png" alt="Incoming changes in Git" class="no-border" >}}

In general, it is a good idea to commit after implementing one feature or fixing one bug. By committing often, your work is integrated with the work of others regularly. The benefits of committing include the following:

* If any conflicts arise, the changes are still fresh in your mind
* Revisions are easier to understand
* If you ever need to revert something, you can revert a small chunk of work

Committing results in a new revision in the repository. You can add the following information in Studio Pro when you perform a commit, and this will be attached to the newly created revision:

* A textual message – this should be a summary of the changes you made.
* A list of stories that relate to the commit; for more information, see [Stories Pane](/refguide/stories-pane/).

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/commit-dialog.png" >}}

Studio Pro also attaches some information automatically:

* The person who committed (the **Author**)
* The date and time of the commit
* The list of changed documents, folders, and modules along with the type of the change (for example, **modify** or **add**)
* The version of Studio Pro that was used to commit

If you also changed Java source code, added widgets, or made other changes that affect files other than the app file, you will see a **Changes on disk** tab page that shows you what disk changes you are about to commit.

Committing is only allowed if your working copy is up to date with the repository. If someone else committed a change since the last time you pulled, you will have to pull first. This is because the revision you create with the commit should incorporate both your changes and the changes by the other person. Updating will combine the latest changes in the repository with your changes. After reviewing the result and fixing any conflicts, you can commit again.

### Pushing {#pushing}

Pushing is sending local commits from your local repository to the remote repository (Team Server). After committing, you need to push the committed changes if you want them to be accessible to others. By default, this is done when committing, but it is possible to wait for this step until later.

To push changes, select **Version Control** > **Push** or simply use the **Commit and Push** button in the **Commit** dialog box. In this case changes are pushed automatically when you commit them:

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/commit-git.png" >}}

#### Push Fast-Forward Only

While you were working on your branch, somebody may have pushed their changes to the same branch on the server already. In this case, pushing is not possible and you will need to take further action first.

In Studio Pro, [automatic fetching](/refguide/auto-fetch/) can be used to discover changes on the server. If at the moment when you click **Commit** Studio Pro knows that there are remote changes, the commit dialog will contain a note about this, and the **Commit and Push** button will be replaced by **Commit and combine**. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/commit-dialog-incoming.png" >}}

If the changes are discovered during the push, an information dialog with instructions is shown.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/commit-pull-first-dialog.png" class="no-border" >}}

Git prevents you from pushing your changes if it sees your changes and the remote changes as potentially conflicting. In this diagram, you see that Git does not know how to combine commits #3 and #4.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/server-your-work.png" alt="The local changes consist of commits 1, 3, while the remote server has commits 1, 2, and 4 on the same branch." class="no-border" >}} 

There are two ways for Studio Pro to combine the commits: **Rebase** (default) and **Merge**. For more information, see [Combining Changes and Conflict Resolution](/refguide/merge-algorithm/#combine-changes).

### Pulling

Pulling retrieves the latest changes from the remote repository. You need to do this to incorporate any changes made by others that are not yet in your working copy before you can commit your changes to the repository. It is advisable to frequently update so that the number of changes you retrieve is small.

To update the working copy of your app, click **Pull** in the **Changes** pane, or choose the **Version Control** > **Pull** menu item.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/pull-button.png" max-width=60% alt="Pull Button" >}}

Changes you receive from the remote repository when pulling are combined with the changes you have made to your working copy (if any). Afterwards, your working copy will contain both your changes and the changes you received. As part of the pull, the original of your working copy is updated as well.

For example, if the last time you pulled you received all changes up to and including revision N, this means that the original for your working copy is revision N. Since you started making changes to your working copy, other people on your team have made another three commits (X, Y, and Z). If you now pull, you will receive those changes and Z will be the new *original* to which your changes are compared.

Usually, combining your changes with the latest revision from the repository is done automatically. For example, one person may add a page while you are changing a microflow. If the changes are too close, however, a conflict can arise. For example, if one of your team has changed the properties of the same data view that you have also changed, you will have to resolve such conflicts before you can commit. For information on how to do this, see [Combining Changes and Conflict Resolution](/refguide/merge-algorithm/).

If your team is committing often, you then should pull often. Frequent pulling has the benefit that you receive fewer changes with each pull so that integrating those changes with your work is easier.

### History {#history}

The history of the app is a list of all revisions that have been committed. To view the history of the app, click the **History** button in the **Changes** pane, or choose the **Version Control** > **History** menu item.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/history-button.png" max-width=60% alt="History Button" >}}

For Git-based applications, revisions are sorted according to the commit history, which sometimes does not reflect the chronological order due to Git's decentralized nature and local commits. The history dialog shows you revision number, date, time, author, and message of each revision.

Select a revision to see additional details, such as related stories, changed documents, Studio Pro version, and changes on disk. Icons summarize the kinds of changes that happened in the app.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/history-of-dialog.png" class="no-border" >}}

## Reverting Changes {#revert-changes}

Changes that have not yet been committed can be reverted. Say, for example, that you have made a lot of changes to a page and you are not happy with the result. You can revert the page to the original state, that is, the state of the page before you started making changes.

Deletes of documents, folders, and modules can also be reverted. This brings them back into the app. Note that you will get back the latest version you have committed. For example, if you commit, make some changes to a microflow, and then delete the microflow, reverting the delete gives you the microflow without the changes that you made.

You can revert changes in the **Changes** pane, from **Version Control** > **Revert All Changes**, or from the right-click menu on the document you want to revert.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/revertx2.png" alt="Two ways of reverting" class="no-border" >}}

## Dealing With Conflicts {#conflicts}

If you update/pull your app and the changes cannot be merged automatically, you will receive a message telling you that there are conflicts. A conflict arises when two changes cannot be combined.

For more information, see [Combining Changes and Conflict Resolution](/refguide/merge-algorithm/).

## Using Branches

A repository (remote or local) can contain a number of development lines. Each development line offers independent development from the other development lines. In the simple case there is just one development line called the main line. All development then happens inside that one line.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/main-branch-line.png" class="no-border" >}}

It is often convenient to have more than one development line. For example, one development line is for fixing bugs in the currently deployed version of your app and another line is where you develop new functionality. If you then find a bug in the deployed version, you can fix it in the corresponding development line irrespective of the state of the development line where new functionality is developed. For more information about branches, see the [Branches](/refguide/version-control/#branches) section in *Version Control*. 

### Working with Branches in Studio Pro

#### Branching

Development lines other than the main line are called branch lines. You can consider developing new features in the main line and using branch lines for fixing bugs in versions that have been deployed. This is the scenario Studio Pro makes easy but other scenarios for more complex apps are supported as well.

You can create branch lines from the **Branch Line Manager** which you can find at **Version Control > Manage Branch Lines...**.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/create-branch-line.png" class="no-border" >}}

The most common examples on using branch lines are [patching a deployed application](#patch) and [developing a new feature](#new-feature).

##### Patching a Deployed Application {#patch}

If you want to add some functionality to a deployed application or you want to fix a bug in it, you can do so without interfering with other development.

1. Determine the version of the deployed application. This information is in the Mendix Portal. Alternatively, you can find the version in the *metadata.json* file in the **model** subfolder of your deployment package (mda) archive, for example, `"ModelVersion": "1.0.0.16"`.
2. Choose **Version Control > Manage Branch Lines...** and create a branch based on the tag with the version number as its name.

    {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/create-from-tag.png" class="no-border" >}}

3. Add the functionality or fix the bug in this newly created branch.
4. Testing that things work as intended.
5. Create a new deployment archive with a higher version number (increase patch or minor version).

{{% alert color="info" %}}
We advise you to merge the fixed maintenance branch into the main line quickly, if required. If the merge is too complicated to be made automatically, because the main line has changed too much, you will know how to apply the fix by hand to the main line as the changes will still be fresh in your mind.

Of course, not all maintenance fixes need to be merged to the main line. Sometimes, it is a fix of something that was completely redesigned or eliminated in the main line. In this case, merging is unnecessary.
{{% /alert %}}

##### Developing a New Feature Independently {#new-feature}

Another reason for creating a branch is to develop a big new feature without interfering with other development. This gives you the freedom to commit a half-implemented feature, possibly even with errors, while other people can still commit and update/pull on the main line. Without using a branch line, you would have to constantly make sure that your app is error free and does not break other parts of the system.

Firstly, select **Version Control > Manage Branch Lines...** and create a branch from a revision of the main line.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/create-branch-line-dialog.png" class="no-border" >}}

Now work on the branch until the feature is done, commit the completed work and merge your branch back to the main line (for more information on merging, see the [Merging](#merge) section below). 

You can delete the branch after merging it back, if you want.

#### Merging {#merge}

If you have multiple development lines, you sometimes want to merge changes from one development line to another. For example, the fix that you made in a branch line for the production version should also be applied to the new 2.0 version you are developing in the main line. You can, of course, do this by hand but Studio Pro can also help you by merging changes from one development line to another.

Merging is always done while you have a working copy open. The merge will result in extra local changes in that working copy. It is advisable to commit local changes first before merging extra changes into a working copy. Otherwise, the uncommitted local changes and the changes caused by the merge will be combined and it is very hard to untangle them if you are unhappy with the merge. Studio Pro will warn you if you have uncommitted changes.

Select **Version Control** > **Merge Changes Here**, after that you can select **Port fix** or **Merge feature branch** options. For more information on merge settings, see [Merge Dialog](/refguide/merge-dialog/).

#### Reverting a Commit

[Reverting changes](#revert-changes) works for changes that have not been committed yet. Changes that have been committed and pushed to the server can never be deleted from the history. However, you can make another commit to revert the changes. This feature is called **Reverse commit** in Studio Pro.

Choose the **Version Control** menu > **Revert a Commit...** to revert a commit.

Reverting changes is done with one commit at a time. If you want to revert multiple commits, you can do that by reverting the latest commit, then the previous one, only one by one.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/revert-changes-git.png" class="no-border" >}}

After a reverse merge the app will look like the changes never happened; if you reverse merge adding a new page, the page will be deleted locally. Just like when you are doing a normal merge, conflicts can arise. For example, if later commits change the new page, the reverse merge will result in a conflict. After resolving the conflict, you can commit and push the results to the remote repository.

#### Replacing the Main Line with a Branch Line

There are two methods for fully replacing your main line with a branch line.

The first method is to merge the entire branch line into the main line, essentially replacing the main line contents with the branch line contents. This works as long as the branch line is up to date with the main line (to avoid conflicts). To do this, follow these steps:

1. Select **Version Control** > **Merge Changes Here** > **Merge feature branch**.
2. Select the branch to merge into the main line.

The second method should be used if the first method is not possible for some reason and you want to "overwrite" the main line with your branch line. To use the second method, follow these steps:

1. Check out both the main line and the branch line locally.
2. Overwrite all the files in the main line app directory with those of the branch line (except for the *.git* directory). 
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

`[MX.EXE_PATH]` should be replaced by the *mx.exe* path with only forward slashes pointing to a drive using `/C/` instead of `C:/`.

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

While developing, you can deploy and run your app on your local machine by clicking the menu item **Run** > **Run Locally**. This allows you to test the app as it currently is stored on your local machine.

### Deploying Your Working Copy

When you deploy to the cloud, you can choose to use the version of the app stored on your local machine, the working copy and deploy that to the default environment. If you are using the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), or other partner cloud (SAP BTP, for example), click **Publish** to commit and push the version of the app stored on your local machine and deploy that to the default environment.

### Choosing a Specific Development Line and Revision

It is also possible to choose a specific development line and revision to deploy to the default environment, or to create a package from.

In this case, Studio Pro will create a fresh checkout of the chosen revision. This means that any team member can always recreate this version of the deployment package. In other words, Studio Pro does not rely on your local files for creating a versioned deployment package.

{{% alert color="warning" %}}
You can only create a versioned deployment package of changes that have been committed. If you have local changes that you want to deploy in a versioned deployment package, commit them first.
{{% /alert %}}

When it creates the package, Studio Pro will also create a tag representing this version of your app. If you want to make modifications to this version later, independently of other development which has taken place, you can create a branch based on this tag. The name of the tag is a version number that you choose.

#### Deploying a Specific Version to a Mendix Licensed Cloud Node

If you are using the Mendix Cloud, you can choose **App** > **Deploy to Licensed Cloud Node** to deploy a specific version.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/deploy-to-cloud.png" class="no-border" >}}

#### Creating a Deployment Package from a Specific Version

If you are using a different hosting environment, you create a deployment package using the menu item **App** > **Create Deployment Package**.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/create-deployment-package.png" class="no-border" >}}

## Working Outside Studio Pro {#working-outside-studio-pro}

Studio Pro takes care of some file management automatically. If you add or remove custom widgets, they are automatically added or removed from version control too. Some files and directories (for example, deployment and releases directories) are automatically ignored so that they are not committed to version control.

We advise you to always commit and update/pull inside Studio Pro, because, in this way, useful metadata is added to your revisions. Studio Pro has ways to recover from external updates or merges but it is best to not depend on that.

### External Tools {#external-tools}

If you are doing more advanced changes to files, like adding Java actions or resources to your app, you will have to install a separate tool on your computer and perform some operations yourself: you can use [TortoiseGit](https://tortoisegit.org/) (can be downloaded for free).

{{% alert color="info" %}}
Studio Pro adds metadata on the Mendix version of your app to each revision when you commit or create a branch. Therefore, when committing or merging using third-party tools, it may no longer be possible to deploy to the Mendix Cloud. This can be fixed by making a commit using Studio Pro so that the correct metadata is present again.
{{% /alert %}}

{{% alert color="warning" %}}
Studio Pro automatically performs the necessary post-processing steps when you download a Git clone through its user interface. Using the Git command line to create a Git clone or using a clone created by a third-party tool in Studio Pro is not supported.
{{% /alert %}}

### Authenticating to Team Server {#authenticating}

When using external tools, you might be asked to authenticate separately to Team Server.

Connecting to Git is done using a personal access token (PAT). For more information on how to create a PAT, see the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *Mendix Profile*.

To connect to Git, you need to use the following URL and credentials:

* URL: `https://git.api.mendix.com/<your AppID>.git`
* Username: your Mendix account username (alternatively, you can use the word *pat* as your username)
* Password: the PAT you created – the PAT must include the scopes `mx:modelrepository:repo:write`, `mx:modelrepository:repo:read`, and/or `mx:modelrepository:write` under *Model Repository*

### Adding and Deleting Files and Directories

If you add or delete files (or directories) using Windows Explorer, Studio Pro automatically adds or deletes these from version control too. A folder is no longer tracked if all the files in the folder are removed.

Make sure you use the **Export** feature of TortoiseGit if you are copying a directory that is already under version control in your app.

### Branching and Deploying

If you perform branching outside of Studio Pro, you will not be able to immediately deploy to Mendix Cloud. That is because Studio Pro adds metadata about the Mendix version of your app to each revision when you commit or create a branch, which is needed by the Mendix Cloud deployment. Branching outside of Studio Pro means that metadata is missing from your branch, thus your app cannot successfully be deployed.

To fix this, make a small commit on your branch in Studio Pro (for example, changing a documentation field). Studio Pro will then add the metadata that Mendix Cloud deployment requires, and you will be able to deploy your app.

### Reverting Accidental Studio Pro App Model Upgrade

When working in different apps with different Studio Pro versions, you may one day find yourself with an app model upgraded and committed to a newer Studio Pro version, while the rest of your team is not yet ready to upgrade. 

To revert this version upgrade of the app model, use the Git tool of your preference to revert the change.

### Integrating Git in a Build Pipeline

When building deployment packages in a pipeline outside the Mendix platform, you will need to retrieve a specific commit from the Git server. To avoid downloading the full repository every time you can use a clone with limited depth (*shallow clone*). With a minimal amount of data to retrieve, the operation is a lot faster and takes less toll on the version control server.

You can use the commands below to download a shallow clone. Note that they should only be used to download a single revision, as Studio Pro is not compatible with working on a shallow clone.

```text
# make a new blank repository in the current directory
git init

# add a remote
git remote add origin url://to/source/repository

# fetch a commit (or branch or tag) of interest with limited history
git fetch --depth 1 origin <sha1-of-commit-of-interest>

# reset this repository's master branch to the commit of interest
git reset --hard FETCH_HEAD
```

## Read More

* [Advanced Branching and Merging Strategies](https://www.mendix.com/blog/advanced-branching-merging-strategies-part-1-2/)
