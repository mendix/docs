---
title: "Version Control"
url: /refguide/version-control/
description: "Gives definitions and explains the version control process."
weight: 30
no_list: false
description_list: true
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## Introduction

Version Control allows you to manage your app development in two ways:

* Firstly, it allows you to store ([commit](#commit)) the current revision of your model and all its resources. You give it an identifier so that you can get that revision again and share it with other team members.
* Secondly, it allows work to take place on multiple [development lines](#development-line) so that several different features can be worked on at once. These development lines can then be [merged](#merge) back together so that your [main line](#main-line) contains all the completed features that have been worked on separately.

Version control in Mendix is built on top [Git](https://git-scm.com). The concepts will be familiar to seasoned users of these version control systems (VCS). Mendix simplifies the VCS commands by building them into Studio Pro and the Mendix Portal.

## Concepts {#concepts}

### Team Server {#team-server}

[Team Server](/developerportal/general/team-server/) is where all the committed versions of Mendix apps are stored. If you commit a revision of an app, it is stored on the Team Server.

To commit to the Team Server you will need to have a role in the app which allows you to edit the app. For more information, see the [Team Roles](/developerportal/general/app-roles/#team-roles) section *App Roles*.

For more information on the Team Server and technologies involved, see [Version Control FAQ](/refguide/version-control-faq/).

### Repository {#repository}

Within the [Team Server](#team-server) each app is stored in a repository. This repository contains all the [committed revisions](#commit) for the [Branches](#branches) of the app.

### Revision {#revision}

A revision is the version of your app at a moment in time, stored on the [Team Server](#team-server).

Each revision of your app is given a unique alphanumeric identifier which enables you to find it in future. A new revision is created from Studio Pro when the app is committed to the repository.

### Working Copy {#working-copy}

A working copy is the version of your app which is currently being worked on in Studio Pro. There is one working copy for each development line of the app. This model is held locally, on each computer where development work is taking place.

### Merge {#merge}

Merging is the action of taking one [revision](#revision) of an app and applying the differences which have been made in a different revision. See the [Merging Branches](#merging-branches) section for more information.

If any of the differences cannot be applied, then there is a [conflict](#conflict).

### Conflict {#conflict}

A conflict occurs when two versions of the app cannot be combined automatically. This happens when the same document has been changed in a Studio Pro working copy and a committed [revision](#revision) and these changes cannot be reconciled. These are some examples:

* The properties of a widget are changed in the revision and the working copy but to different settings
* A document is moved or deleted in the revision but has been changed in a different way in the working copy

When a conflict occurs, a developer has to intervene to decide how it should be resolved before it can be committed to the Team Server as a new revision.

### Pull {#pull}

Pulling is the action, invoked in Studio Pro, which gets the latest revision of the current [development line](#development-line) from the repository and merges the differences into the current working copy.

### Commit/Push {#commit}

Committing is the action, invoked in Studio Pro, of creating a set of changes and pushing all your changes to the [repository](#repository) and making a new [revision](#revision). It is possible to store the committed data in a local repository, but not yet push it to the central [repository](#repository).

If there are no conflicts, the changes are then sent to the repository to make a new revision.

### Development Line {#development-line}

Development of an app is done in a development line where a set of related changes is made. There are two types of development lines: the [main line](#main-line) and [branch lines](#branch-line).

#### Main Line {#main-line}

The main line is the initial development line for the app and is usually kept as the version which will be deployed to the production environment. Simple apps, and apps which do not require a high degree of collaboration, may only have a main line.

#### Branch Line {#branch-line}

A branch line is a way of making an independent set of changes which can be tested away from the main line.

See the [Branches](#branches) section below for more information on how branch lines can be used.

### Tag {#tag}

A Tag is a way of identifying a commit in addition to the [revision](#revision) number. It is specified by the developer and has four parts:

* Major: used to identify significant new functionality, a new user interface, or other important change
* Minor: used to identify new functionality which augments the main function of the app
* Patch: used to identify a fix to an error in a previously-released app
* Revision: this is added automatically and is the revision number of the commit

### Repository Service

The Repository Service manages communication between Studio Pro and other supporting services (for example, Team Server). The developer will not generally be aware that they are communicating via the Repository Service.

## Branches {#branches}

With more complex apps, you may want to manage your code in a more sophisticated way. For example, you may want to develop new features separately from the currently deployed version of your app so that you can fix any bugs without having to release all the new features.

This is done using [Branch Lines](#branch-line).

### Main Line

All apps are developed along the main line. Here you have all development happening along a single line, with all changes built upon the previous revision:

{{< figure src="/attachments/refguide/version-control/image7.png" class="no-border" >}}

### Branch Line

When you add a branch line, you take a copy of an existing [revision](#revision) and work separately on that copy. Changes made to one branch do not impact any other branches.

In Mendix each commit within a [repository](#repository) is given a unique identifier. 

{{< figure src="/attachments/refguide/version-control/image8.png" class="no-border" >}}

### Merging Branches {#merging-branches}

You may have a branch line which will continue independently and never need to be combined with any other development lines. For example, you may create a branch for a particular release of your app and only ever use it to fix bugs in that release.

On the other hand, you may want to add the features from one branch line into another development line. These are two cases for doing this:

* You develop new features in a branch line and want to include them in your main development line
* You want to take advantage of a bug fix which was made on another branch line

You can merge a specific revision of a branch line into your current [working copy](#working-copy). If, for example, you were working on the main line updated to revision 6, you can [merge](#merge) revision 5 from another branch line into your working copy. Then you can commit the result to create revision 7. If you want to merge several different committed changes from a branch, you will need to select a range of revisions which includes all the changes.

{{< figure src="/attachments/refguide/version-control/image9.png" class="no-border" >}}

{{% alert color="info" %}}

You are expected to merge branch lines into the main line before upgrading to a version that is one or more **major** versions newer than the current one. 
It is also highly recommended to either commit or revert all changes before such an upgrade so there are no uncommitted changes during the upgrade.

{{% /alert %}}

There may be conflicts during the merge, and these will have to be resolved before you can commit the changes to your app.

Note that errors can be introduced by the [merge](#merge) process even if no conflicts are identified during the merge. Errors are inconsistencies which are flagged in Studio Pro and will prevent the app from being deployed. They could lead to a revision not being deployable, so it is important to check for errors after you have done a merge.

## Documents in This Category
