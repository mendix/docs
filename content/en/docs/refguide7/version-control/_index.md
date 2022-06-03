---
title: "Version Control"
url: /refguide7/version-control/
#description: "Set a description with a maximum of 140 characters; this should describe what the goal of the document is, and it can be different from the document introduction; this is optional, and it can be removed"
weight: 30
tags: ["Version Control", "Application Lifecycle Management", "Commit", "Collaborate"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Version Control allows you to manage your app development in two ways:

* Firstly, it allows you to store ([*commit*](#commit)) the current revision of your model and all its resources. You give it an identifier so that you can get that revision again and share it with other team members.
* Secondly, it allows work to take place on multiple [*development lines*](#development-line) so that several different features can be worked on at once. These development lines can then be [*merged*](#merge) back together so that your *main line* contains all the completed features that have been worked on separately.

Version control in Mendix is built on top of [Apache Subversion](https://subversion.apache.org/) and the concepts will be familiar to Subversion users. Mendix simplifies Subversion commands by building them into the Modelers and Developer Portal.

{{% alert color="warning" %}}

The processes involving the Web Modeler described here apply to collaborative working in Mendix versions 7.23.3 and above. 

You cannot sync your changes with the Web Modeler if your project has Mendix version 7.23.2 or below. You will still be able to open your project in the Web Modeler, but the Web Modeler will automatically upgrade it to the latest patch version of 7.23. 
{{% /alert %}}

## 2 Concepts {#concepts}

### 2.1 Team Server

The Team Server is where all the committed versions of Mendix apps are stored. If you commit a revision of an app, it is stored on the Team Server.

To commit to the Team Server you will need to have a role in the project which allows you to edit the app.

### 2.2 Repository

Within the *Team Server* each app is stored in a repository. This repository contains all the *committed revisions* for the *branches* of the app.

### 2.3 Revision

A revision is the version of your app at a moment in time, stored on the *Team Server*.

Each revision of your app is given a unique number to identify it and enable you to find it in future. A new revision is created from the *Desktop Modeler* in two circumstances:

* The app is committed to the Repository
* A Desktop Modeler working copy is updated from the Web Modeler working copy

### 2.4 Working Copy

A working copy is the version of your app which is currently being worked on in the Modelers. For the Desktop Modeler, there is one working copy for each development line of the app. This model is held locally, on each computer where development work is taking place.

For the Web Modeler, there is one additional working copy, held in the *cloud.* Only one developer at a time can edit this.

### 2.5 Merge{#merge}

Merging is the action of taking one *revision* of an app and applying the differences which have been made in a different revision. See section 4.3, [Merging Branches](#merging-branches) for more information.

If any of the differences cannot be applied, then there is a *conflict*.

### 2.6 Conflict

A conflict occurs when two versions of the app cannot be combined automatically. This happens when the same document has been changed in the Desktop Modeler working copy and a committed *revision* and these changes cannot be reconciled. Examples are the following:

* the properties of a widget are changed in the revision and the working copy but to different settings
* a document is moved or deleted in the revision but has been changed in a different way in the working copy.

When a conflict occurs, a developer has to intervene to decide how it should be resolved before it can be committed to the Team Server as a new revision.

### 2.7 Update

Updating is the action, invoked in the Desktop Modeler, which gets the latest revision of the current *development line* from the Team Server repository and merges the differences into the current working copy.

If the Web Modeler is enabled for this development line, the process first ensures that the Web Modeler working copy is stored as a new revision.

### 2.8 Commit{#commit}

Committing is the action, invoked in the Desktop Modeler, of sending all your changes to the *repository* and making a new *revision*.

If the Web Modeler is enabled for this development line, the process first ensures that the Web Modeler working copy is stored as a new revision and merged into the working copy of the Desktop Modeler. If there are not conflicts, the changes are then sent to the repository to make a new revision.

### 2.9 Development Line{#development-line}

Development of an app is done in a development line where a set of related changes is made. There are two types of development lines: *main line* and *branch line.*

#### 2.9.1 Main Line

The main line is the initial development line for the app and is usually kept as the version which will be deployed to the production environment. Simple apps, and apps which do not require a high degree of collaboration, may only have a main line.

#### 2.9.2 Branch Line {#branch-line}

A Branch line is a way of making an independent set of changes which can be tested away from the main line.

See section 4, [Branches](#branches), for more information on how branch lines can be used.

### 2.10 Web Modeler Enabled

You may enable the Web Modeler for one of the development lines. This means that a developer can make changes to the app through the Web Modeler and share changes with the team. All changes will be linked to the selected branch and committed as revisions to that branch. Changes made to other development lines will not be available in the Web Modeler.

The Web Modeler cannot be used to develop the app if it is not enabled for any development lines.

For app templates created via the Developer Portal, the main line of a new app will be Web Modeler enabled.

### 2.11 Tag

A Tag is a way of identifying a commit in addition to the *revision* number. It is specified by the developer and has four parts:

* Major: used to identify significant new functionality, a new user interface, or other important change
* Minor: used to identify new functionality which augments the main function of the app
* Patch: used to identify a *fix* to an error in a previously-released app
* Revision: this is added automatically and is the revision number of the commit

## 3 Version Control Processes for a Single Branch

The figure below shows how two developers might work on a *Web Modeler enabled* development line of an app. One developer is working in the Web Modeler, and one in the Desktop Modeler. They both work on the same development line (for example, the main line).

{{< figure src="/attachments/refguide7/version-control/image1.png" >}}

### 3.1 Work in Web Modeler Only

The developer works on the app in the Web Modeler. They start with the app in state 1, this can be a new app or a revision of the app. Changes are made continuously to the working copy for the Web Modeler, stored in the cloud.

{{< figure src="/attachments/refguide7/version-control/image2.png" >}}

### 3.2 Work in Desktop Modeler Only

Another (or the same) developer opens the app for the first time in the Desktop Modeler. A new revision (state 2) is created on the Team Server from the current state of the Web Modeler working copy. It is downloaded to the local machine as the working copy for the Desktop Modeler. The Web Modeler is locked temporarily so that the Web Modeler working copy is stable while it is copied.

The developer works in the Desktop Modeler on the local working copy of the app. There is no work done in the Web Modeler in this scenario.

The developer can commit this to the Team Server repository at any time to make a new revision (state 3). This revision is copied into the Web Modeler working copy and the developer using the Web Modeler will get the changes automatically.

{{< figure src="/attachments/refguide7/version-control/image3.png" >}}

### 3.3 Work in Both Modelers

Two developers are working on the same *development line* of the same app at the same time. One is using the Desktop Modeler, the other is using the Web Modeler. Changes from both Modelers are stored in the respective working copies: on the local machine for the Desktop Modeler and in the cloud for the Web Modeler.

{{< figure src="/attachments/refguide7/version-control/image4.png" >}}

### 3.4 Update Desktop Modeler Working Copy

The developer using the Desktop Modeler wants to include the changes made by the developer using the Web Modeler. They choose to update their working copy.

All the changes from the Web Modeler working copy are put into a new revision on the Team Server (state 4). This revision is merged into the Desktop Modeler working copy. While the Desktop Modeler working copy is being updated, the Web Modeler is locked temporarily so that the Web Modeler working copy is stable while it is copied.

{{% alert color="info" %}}
This will also pick up changes from other developers using the Desktop Modeler, if they have committed changes to this branch.
{{% /alert %}}

If there are conflicts, the developer using the Desktop Modeler will have to resolve them before they can commit the changes to the Team Server repository.

{{< figure src="/attachments/refguide7/version-control/image5.png" >}}

### 3.5 Commit Changes to Team Server Repository

The developer using the Desktop Modeler wants to commit a new revision to the Team Server. This will enable the developer using the Web Modeler, or a different developer using the Desktop Modeler, to see and work with the changes the developer has made. It also means that the revision can be deployed to the cloud.

The developer selects to commit, and the following things happen:

* The Web Modeler is locked temporarily
* The Web Modeler working copy is committed as a revision (restore point – state 5)
* The revision just created (state 5) is merged with the Desktop Modeler working copy

If there are no merge *conflicts*, the updated Desktop Modeler working copy is committed as a new revision (state 6) and the Web Modeler is updated to the new revision and unlocked.

If there are conflicts, the developer using the Desktop Modeler will need to resolve these. The Web Modeler will be unlocked, without receiving any of the changes from the Desktop Modeler, while they do this. The developer using the Desktop Modeler then needs to commit again, and the process starts from the beginning (the Web Modeler is locked ready for a new revision to be committed from the Web Modeler Working Copy).

{{< figure src="/attachments/refguide7/version-control/image6.png" >}}

## 4 Branches{#branches}

With more complex apps, you may want to manage your code in a more sophisticated way. For example, you may want to develop new features separately from the currently deployed version of your app so that you can fix any bugs without having to release all the new features.

This is done using *branch lines*.

### 4.1 Main Line

All apps are developed along the main line (also referred to as *trunk*). Here you have all development happening along a single line, with all changes built upon the previous revision:

{{< figure src="/attachments/refguide7/version-control/image7.png" >}}

This is the case for the version control processes described in section 3, Version Control Processes for a Single Branch.

Initially, developers using the Web Modeler only have access to the development line for which the Web Modeler is enabled. They can be switched to another development line, however, by a developer using the Desktop Modeler.

### 4.2 Branch Line

When you add a branch line, you take a copy of an existing *revision* and work separately on that copy. Changes made to one branch do not impact any other branches.

In Mendix each revision within a *repository* is given a unique version number. This means that version numbers given to revisions along any chosen branch line may not be consecutive.

{{< figure src="/attachments/refguide7/version-control/image8.png" >}}

### 4.3 Merging Branches{#merging-branches}

You may have a branch line which will continue independently and never need to be combined with any other development lines. For example, you may create a branch for a particular release of your app and only ever use it to fix bugs in that release.

On the other hand, you may want to add the features from one branch line into another development line. Two cases for doing this are:

* you develop new features in a branch line and want to include them in your main development line
* you want to take advantage of a bug fix which was made on another branch line

You can merge a specific revision of a branch line into your current *working copy*. If, for example, you were working on the main line updated to revision 6, you can *merge* revision 5 from another branch line into your working copy. Then you can commit the result to create revision 7. If you want to merge several different committed changes from a branch, you will need to select a range of revisions which includes all the changes.

{{< figure src="/attachments/refguide7/version-control/image9.png" >}}

As with the examples in section 3, Version Control Processes for a Single Branch, there may be conflicts during the merge, and these will have to be resolved before you can commit the changes to your app.

Note that *errors* can be introduced by the *merge* process even if no conflicts are identified during the merge. Errors are inconsistencies which are flagged in the Modelers and will prevent the app from being deployed. They could lead to a revision not being deployable, so it is important to check for errors after you have done a merge.

## 5 Main Documents in This Category

* [Using Version Control in the Desktop Modeler](/refguide7/using-version-control-in-the-dm/)
* [Team Server](/refguide7/team-server/)
