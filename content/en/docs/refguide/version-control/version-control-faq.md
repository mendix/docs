---
title: "Version Control FAQ"
url: /refguide/version-control-faq/
category: "Version Control"
weight: 20
tags: ["git", "svn", "subversion", "teamserver", "byo-git", "byo-svn" ]
---

## 1. Team Server
Mendix Team Server is the Mendix hosted environment that hosts all Mendix apps. It facilitates versioning your apps by integrating them into a version control system. Mendix Studio and Studio Pro tightly integrate into Team Server enabling you to create and update apps, commit changes, and merge model versions with single-click actions

### 1.1 What version control system is Team Server build on?

Mendix Team Server is based on proven technology. Initially it was only based top of Subversion (SVN), also called Team Server SVN. Since Mendix version 9.12.0, Team Server also supports storing apps using Git Technology, referred to as Team Server Git. 

Currently, SVN is the default version control system for Team Server, and customers can choose to use Git. In the future, Git will become the default. Mendix 7 and 8 will only have support for Team Server SVN. As long as these major versions are available, support for Team Server SVN will be maintained.


### 1.2 What are the differences between Team Server SVN and Team Server Git?

Team Server Git has full feature parity with the Team Server SVN, meaning both are integrated with Studio and Studio Pro, support cloud deployments, provide access to our various API’s, and support products like [AQM](/addons/aqm-addon/). 

As both technologies have fundamental differences, there are differences in the developer workflow. In SVN, it is possible to retrieve changes and apply them directly on uncommitted changes. In Git, conflict resolution can only be done on committed changes. This means you have to commit locally before being able to retrieve/pull changes from other developers. The advantage this gives is that you can always see what you changed, and you cannot accidentilly override your local changes when you are resolving conflicts.

### 1.3 What are the advantages of Team Server Git over Team Server SVN?
* Git is the de facto standard for software version control as offered by for example GitHub, Gitlab, Azure, AWS and Atlassian and Subversion (SVN) has become outdated. Hence this is a modernization of the Mendix platform to align with the broader market and developer ecosystems,
* Because Git stores a local version of the repository, developers are less dependent on an high speed internet connection and the need to synchronize their work with a central repository continuously. 
* Git has a technically more advanced and optimized communication protocol, which makes synchronizing changes to and from the central repository faster and more reliable.
* It is possible to commit your changes, essentially creating a save point, without pushing those changes to the central repository immediately. This allows to create a coherent set of changes that can be pushed at once, while also allowing to commit those changes intermittently.
* When retrieving changes from other developers, these changes might cause conflicts. Upon updating the developer will have to resolve these, and then commit the resolved changes. With Git, it is required to commit locally before retrieving these changes. Though this can seem cumbersome, this has the benefit that if a developer made a mistake while resolving differences, they can still view the changes they and their colleague made and resolve them properly.
* Developers can use modern 3rd party Git tooling for advanced version control cases like handling file changes.

### 1.4 Can I keep using the Subversion version of Team Server?
Yes, as we are introducing Team Server Git, we will maintain support for Team Server SVN. As we improve our offering for Team Server Git, we will introduce options to migrate your apps to Team Server Git from Team Server SVN.
The focus of Mendix is on improving Team Server Git support and migrating customers to Team Server Git.


### 1.5 Can I migrate from Teamserver SVN to Git?

Currently there is no out of the box service available to do a migration that keeps history data. This service is planned for 2022.
However, you can migrate manually by creating a new app based on Team Server git, exporting the Team Server SVN app, and copying that to the new app repository. This does not preserve your App history.


### 1.6 Can I use 3rd party tools to connect to Team Server?

Yes, as Team Server is based on a full implementation of Git or SVN. You can connect direct to using 3rd party tools like TurtoiseSVN, TurtoiseGit, or GitHub Desktop by using the following repository urls:

* Team Server SVN: `https://teamserver.sprintr.com/<your AppID>/` 
* Team Server Git: `https://git.api.mendix.com/<your AppID>.git`

In case of Git-based apps you can also connect to the local repository. 

{{% alert color="info" %}}
Studio Pro adds metadata about the Mendix version of your app to each revision when you commit or create a branch. Therefore, when committing or merging using 3rd party tools, it may no longer be possible to deploy to the Mendix cloud. This can be fixed by doing a commit using Studio Pro, so the correct metadata is present again.
{{% /alert %}}


### 1.7 Is it possible to connect to a 3rd party or on-premises version control server?

Yes, it is possible to to a 3rd party Subversion or Git version control repository. This is also often called, BYO-GIT or BYO-SVN (Bring your own Git/SVN).

However, in this case the following products and capabilities are not available.

* [Mendix Studio](/studio/general/) and the [Studio collaboration features](/studio/collaboration/)
* Deployment in the Developer Portal directly from Team Server
* Integrated platform APIs such as the [App repository API](/apidocs-mxsdk/apidocs/app-repository-api/), [Build API](apidocs-mxsdk/apidocs/build-api/), [Platform SDK](/apidocs-mxsdk/mxsdk/), [Permissions API](/apidocs-mxsdk/apidocs/permissions-api/), [Projects API](/apidocs-mxsdk/apidocs/projects-api/), [Stories API](/apidocs-mxsdk/apidocs/stories-api/), [User management API](/apidocs-mxsdk/apidocs/user-management-api/), and [Developer portal webhooks](/apidocs-mxsdk/apidocs/webhooks-sprints/)
* [AQM](/addons/aqm-addon/) 

{{% alert color="info" %}}
For Git this functionality is in Beta. For more information about this and the supported Git Repositories, see: [Work with Git On-Premises Version Control Server](/howto/collaboration-requirements-management/on-premises-git-howto/#preparing-your-repo)
{{% /alert %}}


### 1.8 Will Mendix 9 support pull requests and peer review? 

Studio Pro supports peer review & merging through the version control functionalities available in Studio Pro. Read our [best practices on version control](refguide/using-version-control-in-studio-pro/) for more information on how to set up this process.
Currently, Mendix does not support Pull or merge requests through Team Server for Mendix. When using 3rd party tools it is possible to review code extensions: all code for java & javascript actions, html/css for theming.


