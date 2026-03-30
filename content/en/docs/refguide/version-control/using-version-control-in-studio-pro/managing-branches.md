---
title: "Managing Branches in Studio Pro"
url: /refguide/managing-branches/
linktitle: "Managing Branches"
weight: 20
description: "Describes how to work with branches."
---

## Introduction

A repository (remote or local) can contain a number of development lines. Each development line offers independent development from the other development lines. In the simple case there is just one development line called the main line. All development then happens inside that one line.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/main-branch-line.png" class="no-border" >}}

It is often convenient to have more than one development line. For example, one development line is for fixing bugs in the currently deployed version of your app and another line is where you develop new functionality. If you then find a bug in the deployed version, you can fix it in the corresponding development line irrespective of the state of the development line where new functionality is developed. For more information about branches, see [Version Control Glossary: Branches](/refguide/version-control/glossary/#branches). 

## Working with Branches in Studio Pro

This section outlines how to create branches in Studio Pro. It also recommends some [Branching Best-Practices](#branching-best-practices) when developing Mendix apps.

### Branching

Development lines other than the main line are called branch lines. You can consider developing new features in the main line and using branch lines for fixing bugs in versions that have been deployed. This is the scenario Studio Pro makes easy but other scenarios for more complex apps are supported as well.

You can create branch lines from the **Branch Line Manager** which you can find at **Version Control > Manage Branch Lines...**.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/create-branch-line.png" class="no-border" >}}

The most common examples on using branch lines are [patching a deployed application](#patch) and [developing a new feature](#new-feature).

### Patching a Deployed Application {#patch}

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

### Developing a New Feature Independently {#new-feature}

Another reason for creating a branch is to develop a big new feature without interfering with other development. This gives you the freedom to commit a half-implemented feature, possibly even with errors, while other people can still commit and update/pull on the main line. Without using a branch line, you would have to constantly make sure that your app is error free and does not break other parts of the system.

Firstly, select **Version Control > Manage Branch Lines...** and create a branch from a revision of the main line.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/create-branch-line-dialog.png" class="no-border" >}}

Now work on the branch until the feature is done, commit the completed work and merge your branch back to the main line (for more information on merging, see the [Merging](#merge) section below). 

You can delete the branch after merging it back, if you want.

### Merging {#merge}

If you have multiple development lines, you sometimes want to merge changes from one development line to another. For example, the fix that you made in a branch line for the production version should also be applied to the new 2.0 version you are developing in the main line. You can, of course, do this by hand but Studio Pro can also help you by merging changes from one development line to another.

Merging is always done while you have a working copy open. The merge will result in extra local changes in that working copy. It is advisable to commit local changes first before merging extra changes into a working copy. Otherwise, the uncommitted local changes and the changes caused by the merge will be combined and it is very hard to untangle them if you are unhappy with the merge. Studio Pro will warn you if you have uncommitted changes.

Select **Version Control** > **Merge Changes Here**, after that you can select **Cherry Pick** or **Merge feature branch** options. For more information on merge settings, see [Merge Dialog](/refguide/merge-dialog/).

### Replacing the Main Line with a Branch Line

There are two methods for fully replacing your main line with a branch line.

The first method is to merge the entire branch line into the main line, essentially replacing the main line contents with the branch line contents. This works as long as the branch line is up to date with the main line (to avoid conflicts). To do this, follow these steps:

1. Select **Version Control** > **Merge Changes Here** > **Merge feature branch**.
2. Select the branch to merge into the main line.

The second method should be used if the first method is not possible for some reason and you want to "overwrite" the main line with your branch line. To use the second method, follow these steps:

1. Check out both the main line and the branch line locally.
2. Overwrite all the files in the main line app directory with those of the branch line (except for the *.git* directory). 
3. Commit your changes using Studio Pro. 
4. Reopen the main line app in Studio Pro only after overwriting the files.

### Merging Using Git in the Command Line

Merging using Git in the command line or a third-party tool is not supported after the introduction of [MPRv2](/refguide/troubleshoot-repository-size/#mpr-format). External tools cannot correctly merge the *.mpr* and *.mxunit* files, which can lead to a corrupted branch.

In a future release, we are planning to introduce a separate command as part of the [mx Command-Line Tool](/refguide/mx-command-line-tool/) to allow merging on the command line.

## Branching Best-Practices {#branching-best-practices}

Depending on your team's size and preferences, you may find some branching strategies better suited than others. Mendix suggests using one of the following three strategies which have increasing complexity and control and different pros and cons.

* [Trunk-Based (Single Branch Line)](#branching-trunk): straightforward, easy to start with, well-suited for small teams
* [Trunk-Based with Feature Branches](#branching-trunk-and-feature): reduces risk of merge conflicts, well-suited for larger teams and a regular release cadence
* [Advanced Branching](#branching-advanced): guarding quality becomes easier, well-suited for large teams and structured processes

We recommend starting trunk-based and adopting trunk-based with feature branches next, if needed. Getting a lot of merge conflicts or releasing a first version to production are sensible triggers to move away from solely trunk-based development.

For experienced teams, or for organizations with stricter processes and/or auditability criteria, the advanced branching approach is recommended.

In the [tips and tricks](#branching-tricks) section you will find suggestions on how to work with, and manage, branches in an effective way.

### Trunk-Based (Single Branch Line) {#branching-trunk}

In trunk-based development, all developers work on a single branch, typically the "trunk" or "main" branch. Changes are frequently committed to this branch, and developers continuously push  their work to the remote repository. 

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/branching-trunk.png" >}}

Benefits are:

* Simplicity: Trunk-based development is straightforward and easy to understand, making it suitable for small teams or projects with less complex requirements.
* Fast feedback: Developers receive immediate feedback on the impact of their changes, helping to identify and resolve issues quickly.
* Reduced merge conflicts: Since developers frequently push their code, the chances of encountering significant merge conflicts are minimized.

Disadvantages are:

* Risk of instability: Constant changes to the main branch can introduce instability, especially if proper testing and quality assurance practices are not in place.
* Limited parallel development: The single branch model can limit parallel development efforts, making it challenging to work on multiple features concurrently.
* Difficulty to mitigate issues: When encountering issues on production, it is not possible to deploy a hotfix without also publishing other changes to your app, without creating a branch.

This approach is best-suited for small teams.

### Trunk-Based with Feature Branches {#branching-trunk-and-feature}

[Trunk-based](#branching-trunk) can also be combined with short-lived feature branches. Developers work on feature branches, which are created from the main branch. Once a feature is complete, it is merged back into the main branch.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/branching-trunk-and-feature.png" >}}

Benefits are:

* Limited complexity: This approach is still relatively straightforward and easy to understand for most developers.
* Isolation of changes: Working on feature branches allows developers to isolate their changes, reducing the risk of disrupting the mainline codebase.

Disadvantages are:

* Overhead: Separate feature branches can lead to overhead in terms of merging, code review, and testing.

This approach is the most-used among Mendix customers, and is best-suited for teams with some experience, or teams running into the limitations of trunk-based development.

### Advanced Branching {#branching-advanced}

In branch-based development, there are typically two types of branches:

* Long-lived branches: main branch, development branch, release branch
* Short-lived branches: feature branches

Developers work on feature branches, which are merged into the development branch for integration and testing. The release branch is used to prepare for a stable release, while the main branch represents the production-ready codebase.

{{< figure src="/attachments/refguide/version-control/using-version-control-in-studio-pro/branching-advanced.png" >}}

Benefits are:

* Isolation of changes: Working on feature branches allows developers to isolate their changes, reducing the risk of disrupting the mainline codebase.
* Parallel development: Multiple features can be developed simultaneously, enhancing productivity.
* Granular control: Different branches provide granular control over the development and release process.
* Stability and quality: The main and release branches are stable and thoroughly tested, ensuring high-quality releases.
* Scalability: This strategy scales well with larger teams and complex projects

Disadvantages are:

* Complexity: Managing multiple long-lived branches and their interactions requires careful planning and coordination.
* Overhead: Maintaining separate branches can lead to overhead in terms of merging, code review, and testing.

This approach is best-suited to large teams or teams preferring a more rigid process. Projects with strict release cycles can also benefit from this approach, as the release branch is always stable.

### Tips and Tricks for Working with Branches {#branching-tricks}

There are several recommendations that make it easier to work with and manage multiple branches.

* Periodically merge higher-level branches, such as 'development' or 'main', to lower-level branches, such as feature branches. This ensures you already take the most recent stable work into account when developing a feature, preventing larger merge conflicts down the road.
* Note which branch is being used for development in the stories that you are working on, to avoid confusion. You can also implement a naming convention for branch names, such as `feature_[issueNumber]`.
* Where possible, keep different branches on the same version of Studio Pro.
* Make sure that old branches are cleaned up, to prevent accumulating them over time. Ideally you should delete a branch as part of the process of completing a feature. In cases where branches aren't merged in the end, consider cleaning them up periodically.
