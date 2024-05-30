---
title: "Version Control"
url: /refguide7/version-control/
#description: "Set a description with a maximum of 140 characters; this should describe what the goal of the document is, and it can be different from the document introduction; this is optional, and it can be removed" 
weight: 30
no_list: false
description_list: true 
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Version Control allows you to manage your app development in two ways:

* Firstly, it allows you to ([commit](#commit)) the current revision of your model and all its resources. You give it an identifier so that you can get that revision again and share it with other team members.
* Secondly, it allows work to take place on multiple [development lines](#development-line) so that several different features can be worked on at once. These development lines can then be [merged](#merge) back together so that your *main line* contains all the completed features that have been worked on separately.

Version control in Mendix is built on top of [Apache Subversion](https://subversion.apache.org/) and the concepts will be familiar to Subversion users. Mendix simplifies Subversion commands by building them into the Modeler and Developer Portal.

## 2 Concepts {#concepts}

### 2.1 Team Server

The Team Server is where all the committed versions of Mendix apps are stored. If you commit a revision of an app, it is stored on the Team Server.

To commit to the Team Server you will need to have a role in the project which allows you to edit the app.

### 2.2 Repository

Within the *Team Server* each app is stored in a repository. This repository contains all the *committed revisions* for the *branches* of the app.

### 2.3 Revision

A revision is the version of your app at a moment in time, stored on the *Team Server*.

Each revision of your app is given a unique number to identify it and enable you to find it in future. A new revision is created from the *Desktop Modeler* when the app is committed to the repository

### 2.4 Working Copy

A working copy is the version of your app which is currently being worked on in the Modeler. For the Desktop Modeler, there is one working copy for each development line of the app. This model is held locally, on each computer where development work is taking place.

### 2.5 Merge {#merge}

Merging is the action of taking one *revision* of an app and applying the differences which have been made in a different revision. See section 4.3, [Merging Branches](#merging-branches) for more information.

If any of the differences cannot be applied, then there is a *conflict*.

### 2.6 Conflict

A conflict occurs when two versions of the app cannot be combined automatically. This happens when the same document has been changed in the Desktop Modeler working copy and a committed *revision* and these changes cannot be reconciled. Examples are the following:

* the properties of a widget are changed in the revision and the working copy but to different settings
* a document is moved or deleted in the revision but has been changed in a different way in the working copy.

When a conflict occurs, a developer has to intervene to decide how it should be resolved before it can be committed to the Team Server as a new revision.

### 2.7 Update

Updating is the action, invoked in the Desktop Modeler, which gets the latest revision of the current *development line* from the Team Server repository and merges the differences into the current working copy.

### 2.8 Commit{#commit}

Committing is the action, invoked in the Desktop Modeler, of sending all your changes to the *repository* and making a new *revision*.

### 2.9 Development Line{#development-line}

Development of an app is done in a development line where a set of related changes is made. There are two types of development lines: *main line* and *branch line.*

#### 2.9.1 Main Line

The main line is the initial development line for the app and is usually kept as the version which will be deployed to the production environment. Simple apps, and apps which do not require a high degree of collaboration, may only have a main line.

#### 2.9.2 Branch Line {#branch-line}

A Branch line is a way of making an independent set of changes which can be tested away from the main line.

See section 4, [Branches](#branches), for more information on how branch lines can be used.

### 2.10 Tag

A Tag is a way of identifying a commit in addition to the *revision* number. It is specified by the developer and has four parts:

* Major: used to identify significant new functionality, a new user interface, or other important change
* Minor: used to identify new functionality which augments the main function of the app
* Patch: used to identify a *fix* to an error in a previously-released app
* Revision: this is added automatically and is the revision number of the commit

## 3 Version Control Processes for a Single Branch

Another (or the same) developer opens the app for the first time in the Desktop Modeler. A new revision (state 2) is created on the Team Server from the current state of a working copy. It is downloaded to the local machine as the working copy for the Desktop Modeler. 

The developer works in the Desktop Modeler on the local working copy of the app. The developer can commit this to the Team Server repository at any time to make a new revision (state 3).

If two developers are working on the same *development line* of the same app at the same time, changes are stored in the respective working copies.

### 3.4 Update Main Working Copy

The developer wants to include changes made by another developer, so they choose to update their working copy.

All the changes from one working copy are put into a new revision on the Team Server. This revision is merged into the current working copy. 

{{% alert color="info" %}}
This will also pick up changes from other developers using the Desktop Modeler, if they have committed changes to this branch.
{{% /alert %}}

If there are conflicts, the developer using the Desktop Modeler will have to resolve them before they can commit the changes to the Team Server repository.

### 3.5 Commit Changes to Team Server Repository

The developer wants to commit a new revision to the Team Server. This will enable a different developer to see and work with the changes the developer has made. It also means that the revision can be deployed to the cloud.

The developer selects to commit, and the revision created is merged with the main working copy

If there are no merge *conflicts*, the updated main working copy is committed as a new revision.

If there are conflicts, the developer will need to resolve these. The developer needs to commit again, and the process starts from the beginning.

## 4 Branches{#branches}

With more complex apps, you may want to manage your code in a more sophisticated way. For example, you may want to develop new features separately from the currently deployed version of your app so that you can fix any bugs without having to release all the new features.

This is done using *branch lines*.

### 4.1 Main Line

All apps are developed along the main line (also referred to as *trunk*). Here you have all development happening along a single line, with all changes built upon the previous revision.

This is the case for the version control processes described in section 3, Version Control Processes for a Single Branch.

### 4.2 Branch Line

When you add a branch line, you take a copy of an existing *revision* and work separately on that copy. Changes made to one branch do not impact any other branches.

In Mendix each revision within a *repository* is given a unique version number. This means that version numbers given to revisions along any chosen branch line may not be consecutive.

### 4.3 Merging Branches{#merging-branches}

You may have a branch line which will continue independently and never need to be combined with any other development lines. For example, you may create a branch for a particular release of your app and only ever use it to fix bugs in that release.

On the other hand, you may want to add the features from one branch line into another development line. Two cases for doing this are:

* you develop new features in a branch line and want to include them in your main development line
* you want to take advantage of a bug fix which was made on another branch line

You can merge a specific revision of a branch line into your current *working copy*. If, for example, you were working on the main line updated to revision 6, you can *merge* revision 5 from another branch line into your working copy. Then you can commit the result to create revision 7. If you want to merge several different committed changes from a branch, you will need to select a range of revisions which includes all the changes.

As with the examples in section 3, Version Control Processes for a Single Branch, there may be conflicts during the merge, and these will have to be resolved before you can commit the changes to your app.

Note that *errors* can be introduced by the *merge* process even if no conflicts are identified during the merge. Errors are inconsistencies which are flagged in the Modeler and will prevent the app from being deployed. They could lead to a revision not being deployable, so it is important to check for errors after you have done a merge.

## 5 Documents in This Category
