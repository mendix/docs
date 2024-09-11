---
title: "Version Control FAQ"
url: /refguide/version-control-faq/
weight: 30
description: "Presents and explains several frequently asked questions about version control."
---

## Introduction

[Mendix Team Server](/developerportal/general/team-server/) is the Mendix-hosted environment that stores all Mendix apps. It facilitates versioning your apps by integrating them into a version control system. Mendix Studio Pro integrates with the Team Server allowing you to create and update apps, commit changes, and merge model versions with one click.

## What Version Control System Is Team Server Built On? {#which-team-server}

Mendix Team Server is based on proven technology. Initially it was based only on top of Subversion (SVN), also called Team Server SVN. Starting from Mendix 10, the Team Server only supports storing apps using Git technology, referred to as Team Server Git. 

## How Much Storage Space Is Provided with Team Server?

Storage space is unlimited for apps connected to a commercial license. 1 GB of free storage is provided for your company account for apps not (yet) connected to a commercial license.

## What Happens with My Valuable and Confidential Data?

Mendix adheres to strict security standards and considers you the sole owner of your data. Only Mendix Cloud Infrastructure Engineers can access data and will only do so for troubleshooting. Your data is backed up for one year, and the backups are retained for one year after app deletion. You can get a backup of your data at any time by using default Git tools, or, if your app was deleted, by filing a [Mendix Support](https://support.mendix.com/) ticket.

## Retrieve and Commit + Push Actions Are Getting Slower

This may be caused by the way the storage format of Git interacts with the way the Mendix model stores changes, which can accumulate substantial disk space over time. Studio Pro periodically optimizes your repository if [automatic repository optimization](/refguide/preferences-dialog/#optimization) is enabled.

You can run `git gc` in the command line to manually optimize the repository. `git gc` runs a number of housekeeping tasks, but primarily pack files are created. Pack files store just the changes to the files, which reduces the amount of data which needs to be stored. 

## Cloning my Project Takes a Long Time

Cloning or downloading your app consists of several steps. First the required data is downloaded from the server and then a local unpacking process is executed. The duration of the clone process depends on your repository size, internet connection and computer performance. In case cloning is taking a very long time, consider changing the [Clone type](/refguide/clone-type/) or [troubleshoot repository size](/refguide/troubleshoot-repository-size/).

## Can I Use the Subversion Version of the Team Server?

No, in Mendix 10, we are supporting only Git-versioned apps. You need to migrate your SVN app to Git to use Mendix 10. For more information on how to migrate, see [Migrate to Git](/developerportal/general/migrate-to-git/) in *Apps*.

## Can I Use Third-Party Tools to Connect to the Team Server? {#third-party-tools}

Yes, as the Team Server is based on a full implementation of Git. You can directly use third-party tools like GitHub Desktop. For more information on how to set this up, see the [External Tools](/refguide/using-version-control-in-studio-pro/#external-tools) section in *Using Version Control in Studio Pro*. 

## Is It Possible to Connect to a Third-Party or On-Premises Version Control Server?

Yes, it is possible to connect to a third-party Git version control repository, which is often called BYO-GIT (Bring Your Own Git).

For more information about limitations and the supported Git repositories, see the [Introduction](/refguide/on-premises-git/#intro) and [Preparing Your Repository](/refguide/on-premises-git/#preparing-your-repo) sections in *Working with Git On-Premises Version Control Server*.

## Does Mendix 10 Support Pull Requests and Peer Reviews? 

Studio Pro supports peer review and merging through the version control functionalities available in Studio Pro. For more information on how to set this process up, see [Using Version Control in Studio Pro](/refguide/using-version-control-in-studio-pro/).
Currently, Mendix does not support pull or merge requests through the Team Server for Mendix. When using third-party tools it is possible to review the following code extensions:

* code for Java and JavaScript actions
* HTML/CSS for theming
