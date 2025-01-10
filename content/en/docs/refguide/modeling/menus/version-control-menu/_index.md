---
title: "Version Control Menu"
url: /refguide/version-control-menu/
description: "Describes the Version Control menu in Studio Pro."
weight: 40
---

## Introduction

In the **Version Control** menu, you can view and/or manipulate settings that are connected to version control. For example, you can view the history of the current development line.

{{< figure src="/attachments/refguide/modeling/menus/version-control-menu/version-control-menu.png" alt="Version Control Menu" class="no-border" >}}

## Pull

The **Pull** option updates the local app to the latest revision that was committed to the version control server.

## Commit

The **Commit** option commits all local changes made to the app since the previous commit to the version control server. For more information, see [Commit](/refguide/commit-dialog/).

## Push{#push}

The **Push** option sends your local changes to the version control server. For more information, see the [Commit/Push](/refguide/version-control/#commit) section in *Version Control*.

## Show Changes on Disk {#show-changes}

**Show Changes on Disk** opens a dialog that shows which files on disk have been changed since the last commit.  

## History

The **History** option shows the history of committed revisions of the app. For more information on what is displayed in **History**, see [History](/refguide/history-dialog/).

## Download from Version Control Server

The **Download from Version Control Server** option downloads an app from the Team Server or another private server. This creates a local working copy of the app for development. For more information on what settings are displayed in the **Download from Version Control Server** dialog box, see [Download from Version Control Server](/refguide/download-from-version-control-dialog/).

## Upload to Version Control Server

The **Upload to Version Control Server** option uploads a local app to a new or existing Team Server repository, or to another private server. This is only possible if the app is not yet version controlled. For more information on what settings are displayed in the **Upload to Version Control Server** dialog box, see [Upload to Version Control Server](/refguide/upload-to-version-control-dialog/).

## Manage Branch Lines

The **Manage Branch Lines** option allows you to manage branch lines on the version control server that can be used to develop functionality separately from the main line. For more information on the Branch Line Manager and creating a new branch line, see [Branch Line Manager](/refguide/branch-line-manager-dialog/) and [Create Branch Line](/refguide/create-branch-line-dialog/). 

## Merge Changes Here {#merge-changes-here}

The **Merge Changes Here** option allows you to merge changes that were committed in another development line to the development line that is currently opened in Studio Pro.

## Revert a Commit

The **Revert a Commit** option allows locally rolling back changes that were committed to the version control repository. These local changes can then be committed as a new revision.

## Revert All Changes {#revert-all-changes}

The **Revert All Changes** option allows rolling back all local changes, both in the app and in files on disk, that have been introduced since the last commit.

## Optimize Storage Repository {#optimize-storage}

{{% alert color="info" %}}

The **Optimize Repository Storage…** option is only available in Git. 

{{% /alert %}}

The **Optimize Repository Storage…** option allows you to perform a number of housekeeping tasks in the current Git repository. Git repositories can accumulate various types of garbage over the time, which may lead to possible performance bottlenecks when using version control features.
When you optimize the repository storage, the file revisions are compressed to reduce disk space and increase performance and unreachable Git storage objects are removed. For more information on storage optimization, see [Git Storage Optimization](/refguide/git-storage-optimization-dialog/).

{{% alert color="info" %}}

The operation might take some time. While optimization is in progress, most of version control commands, such as committing and updating, are disabled. 

{{% /alert %}}

## Add Snapshot of Data

The **Add Snapshot of Data** option creates a snapshot of the built-in database and adds that to the version control repository. This is especially useful for adding test data to your app or for demo purposes.

## Read More

* [Studio Pro Overview](/refguide/studio-pro-overview/)
* [Version Control](/refguide/version-control/)
