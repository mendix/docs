---
title: "Version Control FAQ"
url: /refguide9/version-control-faq/
weight: 30
description: "Presents and explains several frequently asked questions about version control."
---

## Introduction

[Mendix Team Server](/developerportal/general/team-server/) is the Mendix-hosted environment that stores all Mendix apps. It facilitates versioning your apps by integrating them into a version control system. Mendix Studio Pro integrates into the Team Server allowing you to create and update apps, commit changes, and merge model versions in one click.

## What Version Control System Is Team Server Built On? {#which-team-server}

Mendix Team Server is based on proven technology. Initially it was based only on top of Subversion (SVN), also called Team Server SVN. Starting from Mendix 9.12.0, the Team Server also supports storing apps using Git technology, referred to as Team Server Git. 

Currently, SVN is the default version control system for the Team Server, but you can choose to use Git. In the future, Git will become the default system. 

Mendix 8 only has support for Team Server SVN, and as long as this major version is available, support for Team Server SVN will be maintained.

## How Much Storage Space Is Provided with Team Server?

Storage space is unlimited for apps connected to a commercial license. 1 GB of free storage is provided for your company account for apps not (yet) connected to a commercial license.

## What Happens with My Valuable and Confidential Data?

Mendix adheres to strict security standards and considers you the sole owner of your data. Only Mendix Cloud Infrastructure Engineers can access data and will only do so for troubleshooting. Your data is backed up for one year, and the backups are retained for one year after app deletion. You can get a backup of your data at any time by using default Subversion tools, or, if your app was deleted, by filing a [Mendix Support](https://support.mendix.com/) ticket.

## What Are the Differences between Team Server SVN and Team Server Git?

For information on differences between SVN and Git, see [Migrating to Git: SVN and Git Process Differences](/refguide9/svn-git-differences/).

## What Are the Advantages of Team Server Git over Team Server SVN? {#git-advantages}

Team Server Git has the following advantages over Team Server SVN:

* Git is the standard for software version control as offered by, for example, GitHub, GitLab, Azure, AWS, and Atlassian; Subversion (SVN) has become outdated. So, this is modernization of the Mendix Platform to align with the broader market and developer ecosystems.
* As Git stores a local version of the repository, developers are less dependent on a high speed internet connection and the need to synchronize their work with a central repository continuously. 
* Git has a technically more advanced and optimized communication protocol, which makes synchronizing changes to and from the central repository faster and more reliable.
* It is possible to commit your changes, essentially creating a save point, without pushing those changes to the central repository immediately. This enables creating a coherent set of changes that can be pushed at once, while also allowing you to commit those changes intermittently.
* Your locally-committed changes may cause conflicts with changes retrieved from your colleagues. When doing an update, you have to resolve these, and then commit the resolved changes. With Git, you have to commit locally before retrieving these changes. Though this can seem cumbersome, it has the benefit that if you made a mistake when resolving conflicts, you can still view the changes you and your colleagues made and resolve them properly.
* You can use modern third-party Git tooling for advanced version control cases like handling file changes.

## Retrieve and Commit + Push Actions Are Getting Slower

This may be caused by the way the storage format of Git interacts with the way the Mendix model stores changes, which can accumulate substantial disk space over time. 

You can run `git gc` in the command line to mitigate this. `git gc` runs a number of housekeeping tasks, but primarily pack files are created. Pack files store just the changes to the files, which reduces the amount of data which needs to be stored. 

We already do these housekeeping operations automatically on the Team Server, so you can also check out a fresh copy as an alternative. We are working to improve this in Studio Pro in an upcoming versions.

## Can I Keep Using the Subversion Version of the Team Server?

Yes, as we are introducing Team Server Git, we will maintain support for Team Server SVN. As we improve our offering for Team Server Git, we will introduce options to migrate your apps to Team Server Git from Team Server SVN.
Mendix is focusing on improving Team Server Git support and migrating customers to Team Server Git.

## Can I Migrate from Team Server SVN to Git?

Scrum Masters can migrate an SVN app to Git in the Mendix Portal. For more information on how to migrate, see [Migrate to Git](/developerportal/general/migrate-to-git/). 

## Can I Use Third-Party Tools to Connect to the Team Server? {#third-party-tools}

Yes, as the Team Server is based on a full implementation of Git or SVN. You can directly use third-party tools like TortoiseSVN, TortoiseGit, or GitHub Desktop. For more information on how to set this up, see the [External Tools](/refguide9/using-version-control-in-studio-pro/#external-tools) section in *Using Version Control in Studio Pro*. 

## Is It Possible to Connect to a Third-Party or On-Premises Version Control Server?

Yes, it is possible to connect to a third-party Subversion or Git version control repository, which is often called BYO-GIT or BYO-SVN (Bring Your Own Git/SVN).

However, in this case the following products and capabilities are not available:

* Deployment using the Mendix Portal directly from the Team Server
* Integrated platform APIs such as the [App repository API](/apidocs-mxsdk/apidocs/app-repository-api/), [Build API](/apidocs-mxsdk/apidocs/build-api/), [Platform SDK](/apidocs-mxsdk/mxsdk/), Permissions API, [Projects API](/apidocs-mxsdk/apidocs/projects-api/), [Epics API](/apidocs-mxsdk/apidocs/epics-api/), and [User management API](/apidocs-mxsdk/apidocs/user-management-api/)
* [AQM](/addons/aqm-addon/) 

{{% alert color="info" %}}
For Git, connecting to a third-party Git version control repository is in beta. For more information about the supported Git repositories, see [Working with Git On-Premises Version Control Server](/refguide9/on-premises-git/#preparing-your-repo).
{{% /alert %}}

## Will Mendix 9 Support Pull Requests and Peer Reviews? 

Studio Pro supports peer review and merging through the version control functionalities available in Studio Pro. For more information on how to set this process up, see [Using Version Control in Studio Pro](/refguide9/using-version-control-in-studio-pro/).
Currently, Mendix does not support pull or merge requests through the Team Server for Mendix. When using third-party tools it is possible to review the following code extensions:

* code for Java and JavaScript actions
* HTML/CSS for theming
