---
title: "Version Control FAQ"
url: /refguide/version-control-faq/
category: "Version Control"
weight: 30
description: "Presents and explains several frequently asked questions about version control."
tags: ["git", "teamserver", "byo-git"]
---

## 1 Introduction

[Mendix Team Server](/developerportal/general/team-server/) is the Mendix-hosted environment that stores all Mendix apps. It facilitates versioning your apps by integrating them into a version control system. Mendix Studio Pro integrates with the Team Server allowing you to create and update apps, commit changes, and merge model versions with one click.

## 2 What Version Control System Is Team Server Built On? {#which-team-server}

Mendix Team Server is based on proven technology. Initially it was based only on top of Subversion (SVN), also called Team Server SVN. Starting from Mendix version 10, the Team Server only supports storing apps using Git technology, referred to as Team Server Git. 

## 3 How Much Storage Space Is Provided with Team Server?

Storage space is unlimited for apps connected to a commercial license. 1 GB of free storage is provided for your company account for apps not (yet) connected to a commercial license.

## 4 What Happens with My Valuable and Confidential Data?

Mendix adheres to strict security standards and considers you the sole owner of your data. Only Mendix Cloud Infrastructure Engineers can access data and will only do so for troubleshooting. Your data is backed up for one year, and the backups are retained for one year after app deletion. You can get a backup of your data at any time by using default Git tools, or, if your app was deleted, by filing a [Mendix Support](https://support.mendix.com/) ticket.

## 5 Retrieve and Commit + Push Actions Are Getting Slower

This may be caused by the way the storage format of Git interacts with the way the Mendix model stores changes, which can accumulate substantial disk space over time. 

You can run `git gc` in the command line to mitigate this. `git gc` runs a number of housekeeping tasks, but primarily pack files are created. Pack files store just the changes to the files, which reduces the amount of data which needs to be stored. 

We already do these housekeeping operations automatically on the Team Server, so you can also check out a fresh copy as an alternative . We are working to improve this in Studio Pro in an upcoming versions.

## 6 Can I Use the Subversion Version of the Team Server?

No, in Mendix 10, we are supporting only Git-versioned apps. You need to migrate your SVN app to Git to use Mendix 10. For more information on how to migrate, see [Migrate to Git](/developerportal/general/migrate-to-git/) in the *Developer Portal Guide*. 

## 7 Can I Use Third-Party Tools to Connect to the Team Server? {#third-party-tools}

Yes, as the Team Server is based on a full implementation of Git. You can directly use third-party tools like GitHub Desktop. For more information on how to set this up, see the [External Tools](/refguide/using-version-control-in-studio-pro/#external-tools) section in *Using Version Control in Studio Pro*. 

## 8 Is It Possible to Connect to a Third-Party or On-Premises Version Control Server?

Yes, it is possible to connect to a third-party Git version control repository, which is often called BYO-GIT (Bring Your Own Git).

However, in this case the following products and capabilities are not available:

* Deployment using the Developer Portal directly from the Team Server
* Integrated platform APIs such as the [App repository API](/apidocs-mxsdk/apidocs/app-repository-api/), [Build API](/apidocs-mxsdk/apidocs/build-api/), [Platform SDK](/apidocs-mxsdk/mxsdk/), [Permissions API](/apidocs-mxsdk/apidocs/permissions-api/), [Projects API](/apidocs-mxsdk/apidocs/projects-api/), [Stories API](/apidocs-mxsdk/apidocs/stories-api/), and [User management API](/apidocs-mxsdk/apidocs/user-management-api/)
* [AQM](/addons/aqm-addon/) 

For more information about the supported Git repositories, see the [Preparing Your Repository](/refguide/on-premises-git/#preparing-your-repo) section in *Working with Git On-Premises Version Control Server*.

## 9 Does Mendix 10 Support Pull Requests and Peer Reviews? 

Studio Pro supports peer review and merging through the version control functionalities available in Studio Pro. For more information on how to set this process up, see [Using Version Control in Studio Pro](/refguide/using-version-control-in-studio-pro/).
Currently, Mendix does not support pull or merge requests through the Team Server for Mendix. When using third-party tools it is possible to review the following code extensions:

* code for Java and JavaScript actions
* HTML/CSS for theming
