---
title: Pulling, Committing, and Pushing
url: /refguide/pushing-pulling/
weight: 30
description: "Describes how to push, pull, and commit your changes."
---

## Introduction

When you make and save changes to a working copy of app on your disk, the saved changes are not immediately visible to others. The documents, folders, and modules that have been changed can be identified by looking at the **status**.

When you are happy with a set of changes, you can commit and push them to the remote repository (Team Server). Others can then choose to update or pull and retrieve those changes.

You can **update/pull** your working copy with changes committed by others.

You can also see a **history** of all the changes that have been committed, no matter who committed them.

### Status {#status}

The status of your app is a summary of all the changes in your working copy when compared with the original. The original version is the version you pulled from the remote repository before making your changes, or the newly created app if you have not pulled anything yet. Studio Pro shows the status both in the **App Explorer** and in the **Changes** pane.

The **App Explorer** shows an icon in front of items (such as documents, folders, and modules) to present that are changed in some way. The different icons indicate the different kinds of changes which have been made.

| Icon | Meaning |
| --- | --- |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/no-changes.png" class="no-border" >}} | Nothing happened to this item. It is unchanged with the respect to the original. |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/item-modified.png" class="no-border" >}} | You modified this item. |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/item-added.png" class="no-border" >}} | You added this item. |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/item-moved.png" class="no-border" >}} | You moved this item to another position in the app tree. |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/item-deleted.png" class="no-border" >}} | You deleted this item. |
| {{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/item-conflicting.png" class="no-border" >}} | You and somebody else made conflicting changes to this item. For more information, see [Combining Changes and Resolving Conflicts](/refguide/resolving-conflicts/). |

{{% alert color="info" %}}
In the **App Explorer**, there is only room for one icon for each item. If an item is both modified and moved, it is shown as modified with a yellow icon.
{{% /alert %}}

For example, the microflow **ChangePassword** has been modified. Also a new folder called **Flows** was added and all microflows, including the modified microflow, were moved into this folder. The new folder gets a green icon, and the module containing those changes is depicted with a yellow icon. The microflows which were moved but had not been modified get a blue icon. The modified microflow **ChangePassword** gets a yellow icon. This helps you to quickly see where in the app the changes are.

In the **Changes** pane, you can find more detailed information. There is an entry for each change to an item. If a document is both modified and moved, there are two lines for that document. The pane also shows items that were deleted, something the app explorer cannot do. For more information, see [Changes Pane](/refguide/changes-pane/).

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/changes-pane.png" max-width=80% >}}

If you also changed Java source code, added widgets, or made other changes that affect files other than the app file, you will see entry for each changed file. You can right-click the entry and click **Open containing folder** to open the folder with the file on disk. For files with the **Modified** status, you can use **Compare with original** that opens an external tool to show the differences.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/changes-pane-file-changes.png" >}}

{{% alert color="info" %}}
An external file comparison tool can be set in **Preferences** > **Version control** > **General** > **File comparison** > **Executable**. 

A tool you can consider using is TortoiseGitMerge, shipped as part of [TortoiseGit](https://tortoisegit.org/download/). It is installed by default on this path: *C:\Program Files\TortoiseGit\bin\TortoiseGitMerge.exe*.
{{% /alert %}}

{{% alert color="info" %}}
Comparing files on disk with the original is currently not supported on macOS.
{{% /alert %}}

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

If you also changed Java source code, added widgets, or made other changes that affect files other than the app file, you will see a **Changes on disk** tab that shows you what disk changes you are about to commit. **Open containing folder** opens the folder with the file on disk. For files with the **Modified** status, you can use **Compare with original** that opens an external tool to show the differences.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/commit-git-changes-on-disk.png" >}}

{{% alert color="info" %}}
An external file comparison tool can be set in **Preferences** > **Version control** > **General** > **File comparison** > **Executable**. 

A tool you can consider using is TortoiseGitMerge, shipped as part of [TortoiseGit](https://tortoisegit.org/download/). It is installed by default on this path: *C:\Program Files\TortoiseGit\bin\TortoiseGitMerge.exe*.
{{% /alert %}}

{{% alert color="info" %}}
Comparing files on disk with the original is currently not supported on macOS.
{{% /alert %}}

Committing is only allowed if your working copy is up to date with the repository. If someone else committed a change since the last time you pulled, you will have to pull first (this process is called **Commit and Combine** in the [Commit](/refguide/commit-dialog/#combine) dialog box). This is because the revision you create with the commit should incorporate both your changes and the changes by the other person. Updating will combine the latest changes in the repository with your changes. After reviewing the result and fixing any conflicts, you can commit again. 

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

There are two ways for Studio Pro to combine the commits: **Rebase** (default) and **Merge**. For more information, see [Combining Changes and Conflict Resolution](/refguide/resolving-conflicts/#combine-changes).

### Pulling

Pulling retrieves the latest changes from the remote repository. You need to do this to incorporate any changes made by others that are not yet in your working copy before you can commit your changes to the repository. It is advisable to frequently update so that the number of changes you retrieve is small.

To update the working copy of your app, click **Pull** in the **Changes** pane, or choose the **Version Control** > **Pull** menu item.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/pull-button.png" max-width=60% alt="Pull Button" >}}

Changes you receive from the remote repository when pulling are combined with the changes you have made to your working copy (if any). Afterwards, your working copy will contain both your changes and the changes you received. As part of the pull, the original of your working copy is updated as well.

For example, if the last time you pulled you received all changes up to and including revision N, this means that the original for your working copy is revision N. Since you started making changes to your working copy, other people on your team have made another three commits (X, Y, and Z). If you now pull, you will receive those changes and Z will be the new *original* to which your changes are compared.

Usually, combining your changes with the latest revision from the repository is done automatically. For example, one person may add a page while you are changing a microflow. If the changes are too close, however, a conflict can arise. For example, if one of your team has changed the properties of the same data view that you have also changed, you will have to resolve such conflicts before you can commit. For information on how to do this, see [Combining Changes and Conflict Resolution](/refguide/merge-algorithm/).

If your team is committing often, you then should pull often. Frequent pulling has the benefit that you receive fewer changes with each pull so that integrating those changes with your work is easier.

## Read More

* [Mx Command-Line Tool: Merging and Diffing Commands](/refguide/mx-command-line-tool/#merging-and-diffing-commands)