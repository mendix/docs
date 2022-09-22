---
title: "Git Storage Optimization"
linktitle: "Git Storage Optimization"
url: /refguide/git-storage-optimization-dialog/
category: "Version Control"
weight: 30
tags: []
---

## 1 Introduction

Git can accumulate various types of garbage objects inside your repositories. This might include inaccessible (or detached) commits, unreferenced blob objects, to name a few. Git doesn't delete the orphan objects immediately. It tries to preserve the repository history intact, avoiding data loss as much as possible. Hence you can see your repository is growing in size over the time. But there's a way to shrink and clean the repository up using `git gc` (garbage collection) command, which is a part of Git utilities toolbox. And you don't have to do this via command line since Studio Pro provides you with the `Git Repository Optimization` feature that is built on top of Git garbage collection functionality.

The are two ways you can use the feture:

* **Manual repository optimization** - When you need to perform garbage collection immediately. 

* **Automatic repository optimization** - When you want to keep your repository in good shape over the time, running the optimization process in background repeatedly on regular basis. 

{{% alert color="warning" %}}
Make sure that you're not performing any commands through Git command line against the repository while the storage optimization is in progress. In some (very rare and limited) cases this might lead to a damage, a serious repository structure corruption, so please use this option with caution.
{{% /alert %}}

## 2 Manual repository optimization

1. In the Studio Pro top bar, go to **Version Control** > **Optimize Repository Storage...**.
2. In the Optimize Repository Storage dialog press **Optimize** button. The optimization process should start immediately. The status of the running process to be reflected in the dialog's progress bar and the main window status bar. You can close the form now and continue working on the app as usual, though most of the **Version Control** menu items and **Update**, **Commit** and **History** toolbar buttons in the **Changes** pane will remain disabled for the duration of the process.
3. When the process is finished you should be presented with the **Git storage optimization** notification message, telling that the storage optimization is completed. Since that disabled commands should be enabled back again.  

{{% alert color="info" %}}
Please be noticed that finishing the optimization process won't close the **Optimize Repository Storage** form automatically. You have to do this manually. You can also close the form during optimization process. That will not affect the process any way. Opening this form again will reflect the status of the process, whether it is still running or not.
{{% /alert %}}

## 3 Automatic repository optimization

1. In the Studio Pro top bar, go to **Edit** > **Preferences** > **Version Control**. 
2. In the **Git** section, enable the **automatic repository optimization** option.
3. Specify a number of commits (limit) to be reached in order to start a new optimization process in background (for more information, see [Preferences](/refguide/preferences-dialog/).)
4. Make commits as many times as specified in the previous step. Studio Pro will keep track on user's activities, increasing a counter for every commit made. Reaching or overcounting the limit doesn't mean the process to be started immediately. 
5. Perform either **Push** (Version Contol -> Push) or **Commit** (Version Control -> Commit with "Also push changes to the remote server" option allowed`) in order to trigger the optimization.
6. You have to be presented with a **Repository being optimized** notification message, meaning that the process is started in background. 
7. The user experience of the running automatic optimization process is the same as of the manual one. 
8. As soon as optimization is finished Studio Pro resets the counter to zero, so that you have to perform the same number of commits before triggering another automatic optimization process.


{{% alert color="info" %}}
Disabling the feture won't stop increasing the repository commit counter (you can find it in the application folder, open `.git/config` file and find `commits-since-gc` parameter beneath [mendix] section). Here you can see it increasing for every commit happening.
{{% /alert %}}
 

