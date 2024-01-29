---
title: "Troubleshooting Repository Size"
url: /refguide/troubleshoot-repository-size/
linktitle: "Repository size"
weight: 31
description: "Explains consequences and root cause of large repository size and how to mitigate this."
tags: ["version control", "troubleshoot", "repository size", "mpr size", "performance", "git"]
---

## 1 Introduction

In case you are experiencing performance issues when cloning or pulling your app, this may be caused by a large repository size. This document explains why your repository may be large, how Git handles that, and what you can do about this.

## 2 Causes of large repository size

There are several reasons why your repository may be large. The most common reasons for a Mendix app to have a large repository are:
* Version control systems tend to store the differences between revisions instead of full copies of each revision. Mendix apps are stored in an .mpr binary file, and version control systems are traditionally not well-equiped to deal with large binary files. This means that Git stores a larger difference between revisions than it would for text files. This results in rapid repository growth.
* Large files committed to version control, such as .mp4, .pdf, or .zip files.
* Frequent re-importing of modules. Regular module updates don't cause issues, but a module-import heavy workflow can cause a large repository size.

## 3 Consequences of a large repository

Problems with a large repository are typically observed when cloning an app or a branch from the repository. You may experience a long download, or even a timeout. This problem is not new in Git, but surfaces as Git has different cloning/checkout behavior than SVN. In the centralized SVN system, a local checkout only contains a specific revision and the server needs to be contacted for each change. In the decentralized Git system, a local clone by default contains the full history of the repository.

Other places where you might encounter performance issues or timeouts:
* Retrieving list of branches
* Cloning on the command line or in a CI/CD pipeline
* Team Server page in the Developer Portal, if you are using Team Server as your Git server

## 4 Preventing and mitigating large repository size

### 4.1 Preventing large repository size

The .mpr storage format will be changed in H1 2024 to reduce rapid repository growth. This will reduce the repository size for new apps, but will not reduce the repository size for existing apps. Upgrading to the new storage format will happen automatically and will not be noticeable for users in terms of functionality.

### 4.2 Mitigating large repository size

In cases where a repository has already grown to a significant size over time, we recommend you to consider shrinking the repository by removing parts of the history. 

Mendix has developed 'git-fixer', a clean up tool to assist you in shrinking your repository. For more information, please read the next chapter.

## 5 Git-fixer: clean up tool

### 5.1 Introduction

Mendix has developed 'git-fixer', a Python-based command-line tool which copies a local Git repository to a new folder and removes a part of the history, resulting in a new repository that is smaller than the original one.

Through a wizard-like approach you can set various settings, such as the time period for which to retain history, and which branches to retain.

{{% alert color="info" %}}This tool is currently in private beta and general availability is expected in Q2 2024. Please reach out to your CSM to join the beta program to get access to the tool.{{% /alert %}}

### 5.2 Cleanup process

#### 5.2.1 Planning the Cleanup

The cleanup is executed on your local machine on a local version of the repository. A new cleaned repository is created locally and you will need to push it to the Git server after validating the results.

{{% alert color="info" %}}
When planning the cleanup, note the following:
* Changes made by other users after you made your local copy are lost after pushing the cleaned repository to the Git server.
* All users will need to get fresh clones from the server after the cleanup is completed. This means all changes that have not been committed and pushed to the server before you download the repository you will use for cleaning, will be lost.
* The process can take up several hours, so we recommend to align with your team before you start. First do a test run to get familiar with the tool before planning the actual cleanup.
{{% /alert %}}

#### 5.2.2 Backing Up the Full History

As you are overwriting the history on the Git server, the history currently stored there will be permanently lost. To preserve this history, for example to comply with auditability requirements, you can store a copy elsewhere.

To make a backup of your full repository, you can download a local clone, zip the entire folder, and store it in a safe location.

If you need easier access to the repository, for example from Studio Pro, you can choose to push the full history to another (read-only) repository outside Mendix Team Server that can be used as an archive.

#### 5.2.3 Choosing a Cleanup Strategy

The tool allows you to choose how to cleanup your repository. There are two modes: EXTREME and PRESERVE:

* EXTREME: retains the last commit of the main branch. There is maximum repository size reduction, but no history at all.
* PRESERVE: allows you to specify a date range for keeping all commits of selected branches, while throwing away unselected branches and archiving commits before the cut-off date. There is less repository size reduction, but you can retain history.

![Visualization of different cleanup strategies](/attachments/refguide/version-control/troubleshoot-version-control-issues/git_fixer_modes.png "Visualization of different cleanup strategies")

If you are not interested in easily accessing the history of your app in Studio Pro, we recommend you to use the EXTREME mode. 
If you would like to retain some history, we recommend you to use PRESERVE mode with a three-month cut-off for a single branch.

#### 5.2.4 Executing the Cleanup

The tool itself is a multi-step command line script. Before the cleanup actually starts, the script asks for a confirmation of the settings.

{{% alert color="info" %}}
The script only makes changes to a copy of the original repository. The original repository will not be modified so you can run the script multiple times until you are satisfied with the result. Pushing to the original repository is a separate step.
{{% /alert %}}

#### 5.2.5 Validating the Results

The cleanup tool automatically validates each retained branch. The contents of each branch is compared to the original repository to ensure the content is as expected.

We recommend you to check the result in Studio Pro as well. Open the .mpr file in Studio Pro to check whether the latest commit of the main branch is as expected.
To check other branches or commits, you will need to use an [external tool](https://docs.mendix.com/refguide/using-version-control-in-studio-pro/#external-tools) to switch branches. After switching branches, you can open the .mpr file in Studio Pro again.

#### 5.2.6 Pushing Your Results to the Server

To store the results of the cleanup in your Git server, you need to push the cleaned repository to the server. To overwrite an existing repository, you need **Force push permissions** to be able to execute the `git push --force` command.

{{% alert color="warning" %}}
Before executing a force push, always ensure you have a backup of your repository as this is a destructive operation.
{{% /alert %}}

Force pushing your results to the server is a separate step, in a separate script. Until this step is executed, the results of the cleanup are only stored locally.

##### 5.2.6.1 Mendix Team Server
If you are using Mendix Team Server as your Git version control server, you can follow these steps:

* Ensure you have configured a Personal Access Token to use it as described in the [Authenticating to Team Server](https://docs.mendix.com/refguide/using-version-control-in-studio-pro/#92-authenticating-to-team-server) section in *Using Version Control in Studio Pro*. 
* Run the second script.
    * When prompted, enable force pushing.
    * Conduct the force push.
    * Force push will automatically be disabled again after the first push operation.

##### 5.2.6.2 Other Git Platforms
When using another Git platform than Mendix Team Server, such as Github or Azure Devops, you can typically enable force pushing in a portal. 

{{% alert color="warning" %}}
Force pushing allows to make destructive changes to the repository, which can easily lead to unrecoverable errors. We recommend you to give these permissions to as few users as strictly necessary.
{{% /alert %}}

You can follow these steps:
* Enable force pushing for the user that will be pushing the results of the cleanup.
* Run the second script and conduct the force push.
* Disable force pushing again to prevent accidentally making destructive changes.

#### 5.2.7 Handling Local Copies

After the results of the cleanup are pushed to the server all local clones need to be reset. This means that each developer of your team who has the project on disk and CI pipelines that have cached data need to get a fresh clone. For developers on your team this means they have to delete their local folders. 

{{% alert color="warning" %}}
Deleting local folders means that any uncommitted work is lost. To retain uncommitted work, move the app folder to a location not known to Studio Pro and manually merge the changes after you downloaded a fresh clone.
{{% /alert %}}

When the local copies have been removed from a machine, Studio Pro can be used as usual to download a fresh clone of your app.

{{% alert color="info" %}}
Please note that downloading the first branch of an app takes slightly longer than consecutive downloads, as Studio Pro leverages *local cloning* to speed up consecutive downloads.
{{% /alert %}}

### Troubleshooting

We recommend doing the following:

* check the dependencies section of this README
* consider re-running with verbose output
* check the config
* check the input provided by you in the different steps
* check whether you have enough free disk space, at the temp location
* check the local repo location. It should be up to date and there should be no uncommitted changes.
* check your git config settings, especially any setting that involves encoding or text conversions: run `git config --list --show-origin`.
* consider moving your local repo, so that its folder has a shorter name
* when reaching out to Support, please include:
    * Log file. Location can be found in the command line output
    * Tool version, similar to `git-fixer v1.11.2`. Version can be found in the command line output
    * Project ID for your app