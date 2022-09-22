---
title: "Git Storage Optimization"
url: /refguide/git-storage-optimization/
weight: 30
tags: ["git", "optimization", "git storage", "git optimization"]
aliases:
    - /refguide/git-storage-optimization-dialog
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Git can accumulate various types of garbage objects inside your repositories. This might include, for example, inaccessible (or detached) commits, unreferenced blob objects. Git does not delete orphan objects immediately. It tries to preserve the repository history avoiding data loss as much as possible. So, you can see your repository growing over the time. But there is a way to reduce and clean the repository using `git gc` (garbage collection) command, which is a part of Git utilities toolbox. You do not have to use the command line, Studio Pro provides you with the **Git Repository Optimization** option that is built on top of Git garbage collection functionality.

The are two ways you can use this option:

* [Manual repository optimization](#manual-optimization) – Use this option when you need to perform garbage collection immediately. 

* [Automatic repository optimization](#automatic-optimization) – Use this option to keep your repository to regularly clean your repository, running the optimization process in background repeatedly. 

{{% alert color="warning" %}}
Make sure that you are not performing any commands through Git command line on the repository while the storage optimization is in progress. In some (very rare and limited) cases this might lead to a damage, a serious repository structure corruption.
{{% /alert %}}

## 2 Manual Repository Optimization {#manual-optimization}

To optimize Git repository storage manually, do the following:

1. Open the **Version Control** menu > **Optimize Repository Storage...**.
2. In the **Optimize Repository Storage** pop-up window, press **Optimize** button. 

The optimization process should start immediately. The status of the running process is displayed in the progress bar of the pop-up window and the Studio Pro status bar. The operation might some time. You can close the pop-up window and continue working on the app as usual. However, while optimization is in progress, most of version control commands, such as committing and updating, are disabled. 

When the process is completed, you will see the **Git storage optimization** notification message and the disabled commands become available again.  

{{% alert color="info" %}}
Finishing the optimization process does not close the **Optimize Repository Storage** pop-up window automatically. You have to do this manually. You can also close the form during optimization process, that will not affect the process.
{{% /alert %}}

## 3 Automatic Repository Optimization {#automatic-optimization}

To optimize Git repository storage automatically, do the following:

1. Open the **Edit** menu > **Preferences** > **Version Control** tab. 
2. In the **Git** section, toggle the **Enable automatic repository optimization** option.
3. In the **Number of commits**, specify the maximum number of commits that should be reached to start an optimization process in background (for more information, see [Preferences](/refguide/preferences-dialog/).)
4. Click **OK**


Studio Pro keeps track of user's activities, however, reaching or overcounting the limit does not mean the process starts immediately. To trigger the process, either push (**Version Control** > **Push**) or commit (**Version Control** > **Commit** with **Also push changes to the remote server** option on).

As soon as optimization is completed, Studio Pro resets the counter of commit messages to zero.

{{% alert color="info" %}}
Disabling the feature does not stop the repository commit counter (you can find it in the application folder, open `.git/config` file and find `commits-since-gc` parameter section). Here you can see that it counts every commit.
{{% /alert %}}

