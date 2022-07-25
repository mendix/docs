---
title: "Version Control FAQ"
url: /refguide/version-control-faq/
category: "Version Control"
weight: 15
tags: ["git", "svn", "subversion", "teamserver", "byo-git", "byo-svn" ]
---

## 1 Introduction
[Mendix Team Server](/developerportal/collaborate/team-server/) is the Mendix-hosted environment that stores all Mendix apps. It facilitates versioning your apps by integrating them into a version control system. Mendix Studio and Mendix Studio Pro integrate into the Team Server allowing you to create and update apps, commit changes, and merge model versions in one click.

## 2 What Version Control System Is Team Server Built On?

Mendix Team Server is based on proven technology. Initially it was based only on top of Subversion (SVN), also called Team Server SVN. Starting from Mendix version 9.12.0, the Team Server also supports storing apps using Git technology, referred to as Team Server Git. 

Currently, SVN is the default version control system for the Team Server, but you can choose to use Git. In the future, Git will become the default system. 

Mendix 7 and 8 only have support for Team Server SVN, and as long as these major versions are available, support for Team Server SVN will be maintained.


## 3 What Are the Differences between Team Server SVN and Team Server Git?

Team Server Git has full feature parity with Team Server SVN, meaning both are integrated with Studio and Studio Pro, support cloud deployments, provide access to our various APIs, and support products like [AQM](/addons/aqm-addon/). 

As both technologies have fundamental differences, there are differences in the developer workflow. 

In SVN, it is possible to retrieve changes and apply them directly on uncommitted changes. 

In Git, conflict resolution can only be done on committed changes. This means you have to commit locally before being able to retrieve/pull changes from other developers. The advantage is that you can always see what you changed and you cannot accidentally override your local changes when you are resolving conflicts.

In SVN, commits are done to a central server which enforces the commit order. These commits are represented with a number that is generally sequentially increasing (e.g. 1, 2, 3, 4, 5). 

In Git, committing is first done locally. Commits are then sent to other repositories in such a way that they are uniquely identifiable. Therefore, commits in Git are represented with a SHA-1/SHA-256 hash (e.g. f0e165, bb2327, 76d34e, c31247), as these can be generated in a distributed setting and still be the same on different clients with identical changes. 

## 4 What Are the Advantages of Team Server Git over Team Server SVN?

Team Server Git has the following advantages over Team Server SVN:

* Git is the standard for software version control as offered by, for example, GitHub, Gitlab, Azure, AWS, and Atlassian; Subversion (SVN) has become outdated. So, this is modernization of the Mendix Platform to align with the broader market and developer ecosystems.
* As Git stores a local version of the repository, developers are less dependent on a high speed internet connection and the need to synchronize their work with a central repository continuously. 
* Git has a technically more advanced and optimized communication protocol, which makes synchronizing changes to and from the central repository faster and more reliable.
* It is possible to commit your changes, essentially creating a save point, without pushing those changes to the central repository immediately. This enables creating a coherent set of changes that can be pushed at once, while also allowing you to commit those changes intermittently.
* Your locally-committed changes may cause conflicts with changes retrieved from your colleagues. When doing an update, you have to resolve these, and then commit the resolved changes. With Git, you have to commit locally before retrieving these changes. Though this can seem cumbersome, it has the benefit that if you made a mistake when resolving conflicts, you can still view the changes you and your colleagues made and resolve them properly.
* You can use modern third-party Git tooling for advanced version control cases like handling file changes.

## 5 Retrieve and Commit + Push Actions Are Getting Slower

This may be caused by the way the storage format of Git interacts with the way the Mendix model stores changes, which can accumulate substantial disk space over time. 

You can run `git gc` in the command line to mitigate this. `git gc` runs a number of housekeeping tasks, but primarily pack files are created. Pack files store just the changes to the files, which reduces the amount of data which needs to be stored. 

We already do these housekeeping operations automatically on the Team Server, so you can also check out a fresh copy as an alternative . We are working to improve this in Studio Pro in an upcoming versions.


## 6 Can I Keep Using the Subversion Version of the Team Server?

Yes, as we are introducing Team Server Git, we will maintain support for Team Server SVN. As we improve our offering for Team Server Git, we will introduce options to migrate your apps to Team Server Git from Team Server SVN.
Mendix  is focusing on improving Team Server Git support and migrating customers to Team Server Git.


## 7 Can I Migrate from Team Server SVN to Git?

Currently, there is no out-of-the-box migration service available that keeps historical data. This service is planned later in 2022.
However, you can migrate manually by creating a new app based on Team Server Git, exporting the Team Server SVN app, and copying that to the new app repository. This does **not** preserve your app history.


## 8 Can I Use Third-Party Tools to Connect to the Team Server?

Yes, as the Team Server is based on a full implementation of Git or SVN. You can directly use third-party tools like TurtoiseSVN, TurtoiseGit, or GitHub Desktop by using the following repository URLs:

* Team Server SVN: `https://teamserver.sprintr.com/<your AppID>/` 
* Team Server Git: `https://git.api.mendix.com/<your AppID>.git`

If you have Git-based apps, you can also connect to a local repository. 

{{% alert color="info" %}}
Studio Pro adds metadata on the Mendix version of your app to each revision when you commit or create a branch. Therefore, when committing or merging using third-party tools, it may no longer be possible to deploy to the Mendix Cloud. This can be fixed by making a commit using Studio Pro, so the correct metadata is present again.
{{% /alert %}}


## 9 Is It Possible to Connect to a Third-Party or On-Premises Version Control Server?

Yes, it is possible to connect to a third-party Subversion or Git version control repository, which is often called BYO-GIT or BYO-SVN (Bring Your Own Git/SVN).

However, in this case the following products and capabilities are not available:

* [Mendix Studio](/studio/general/) and the [collaborative development in Studio](/studio/collaboration/)
* Deployment using the Developer Portal directly from the Team Server
* Integrated platform APIs such as the [App repository API](/apidocs-mxsdk/apidocs/app-repository-api/), [Build API](/apidocs-mxsdk/apidocs/build-api/), [Platform SDK](/apidocs-mxsdk/mxsdk/), [Permissions API](/apidocs-mxsdk/apidocs/permissions-api/), [Projects API](/apidocs-mxsdk/apidocs/projects-api/), [Stories API](/apidocs-mxsdk/apidocs/stories-api/), [User management API](/apidocs-mxsdk/apidocs/user-management-api/), and [Developer portal webhooks](/apidocs-mxsdk/apidocs/webhooks-sprints/)
* [AQM](/addons/aqm-addon/) 

{{% alert color="info" %}}
For Git, connecting to a third-party Git version control repository is in Beta. For more information about the supported Git repositories, see [How to Work with Git On-Premises Version Control Server](/howto/collaboration-requirements-management/on-premises-git-howto/#preparing-your-repo).
{{% /alert %}}


## 10 Will Mendix 9 Support Pull Requests and Peer Reviews? 

Studio Pro supports peer review and merging through the version control functionalities available in Studio Pro. For more information on how to set this process up, see [Using Version Control in Studio Pro](/refguide/using-version-control-in-studio-pro/).
Currently, Mendix does not support pull or merge requests through the Team Server for Mendix. When using third-party tools it is possible to review the following code extensions:
* code for Java & JavaScript actions
* HTML/CSS for theming

