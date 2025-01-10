---
title: "Git Storage Optimization"
url: /refguide/git-storage-optimization-dialog/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Git can accumulate various types of garbage objects inside your repositories. This might include, for example, inaccessible (or detached) commits, unreferenced blob objects. Git does not delete such objects immediately, it tries to preserve the repository history avoiding data loss as much as possible. So, you can see your repository growing over the time. But there is a way to reduce and clean the repository using `git gc` (garbage collection) command, which is a part of the Git utilities toolbox. You do not have to use the command line, Studio Pro provides you with the **Git Repository Optimization** functionality that is built on top of Git garbage collection functionality.

The are two ways you can use this functionality:

* [Manual repository optimization](#manual-optimization) – Use this option when you need to perform garbage collection immediately. 

* [Automatic repository optimization](#automatic-optimization) – Use this option to have your repository cleaned regularly, when the optimization process is run in background repeatedly. 

{{% alert color="warning" %}}
Make sure that you are not performing any commands through Git command line on the repository while the storage optimization is in progress. In some (rare and limited) cases this might lead to a damage, a serious repository structure corruption.
{{% /alert %}}

## Manual Repository Optimization {#manual-optimization}

To optimize Git repository storage manually, do the following:

1. Open the **Version Control** menu > **Optimize Repository Storage...**. (For more information on the menu option, see the [Optimize Storage Repository](/refguide/version-control-menu/#optimize-storage) section in Version Control Menu).
2. In the **Optimize Repository Storage** pop-up window, press the **Optimize** button.

The optimization process starts. The status of the running process is displayed in the progress bar of the pop-up window and the at the bottom right of Studio Pro. The operation might take some time. You can close the pop-up window and continue working on the app as usual, however, while optimization is in progress, most of version control commands, such as committing and updating, are disabled. 

When the process is completed, you see the **Git storage optimization** notification message and the disabled commands become available again.  

{{% alert color="info" %}}
Finishing the optimization process does not close the **Optimize Repository Storage** pop-up window automatically. You have to do this manually. You can also close the pop-up window during the optimization process, this does not affect the process.
{{% /alert %}}

## Automatic Repository Optimization {#automatic-optimization}

To optimize Git repository storage automatically and regularly, do the following:

1. Open the **Edit** menu > **Preferences** > **Version Control** tab. 
2. In the **Git** section, toggle the **Enable automatic repository optimization** option.
3. In the **Number of commits**, specify the minimum number of commits that should be reached to start an optimization process in background (for more information, see [Preferences](/refguide/preferences-dialog/).)
4. Click **OK**.
5. Studio Pro keeps track of user's activities now, however, reaching or overcoming the limit does not mean the process starts immediately. To trigger the process, either push (**Version Control** > **Push**) or commit (**Version Control** > **Commit** with **Also push changes to the remote server** option on).

As soon as optimization is completed, Studio Pro resets the counter of commits to zero.

{{% alert color="info" %}}
Disabling the feature does not stop the repository commit counter (you can find it in the application folder: open `.git/config` file and find `commits-since-gc` parameter), it will continue counting the commits. Note this when you enable the automatic repository optimization back again.
{{% /alert %}}
