---
title: "Team Server"
url: /developerportal/general/team-server/
weight: 12
description: "Describes the overview of Team Server revisions and commits."
aliases:
    - /refguide/team-server.html
    - /developerportal/develop/team-server.html
    - /refguide/team-server
    - /developerportal/develop/team-server
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

Team Server is where all the committed versions of Mendix apps are stored. Mendix Studio Pro is integrated with the Team Server, and actions like creating a new app (including a versioned model repository), updating an app, committing changes, and merging model versions are all available from Mendix Studio Pro as single-click actions.

When you commit your app model changes to the Team Server in Studio Pro, you can select user stories that you have been working on. Team Server automatically creates links between user stories and the model changes, allowing you to navigate from commits to the associated requirements. 

After opening your app in [Apps](https://sprintr.home.mendix.com/), on the **Team Server** page, you can see a URL to access you app, revision history, and revision details.

## Versioning with Git

In the **Versioning with Git** section, Scrum Masters can migrate apps from SVN version control system to Git. For more information, see [Migrate to Git](/developerportal/general/migrate-to-git/). 

## Team Server URL

The **Team Server URL** can be used to manually access the repo (using the Git/SVN command line). For SVN you can also browse URLs using the browser. 

The URL can have the following form:

* `https://git.api.mendix.com/<your AppID>.git` if it is a Git-enabled app
* `https://teamserver.sprintr.com/<your AppID>/` if it is an SVN-enabled app that you access using your Mendix credentials
* `https://svn.home.mendix.com/<your AppID>/` if it is an SVN-enabled app that you access using a personal access token (PAT) — this will be the case, for example, if your company has enabled [BYOIDP SSO](/control-center/security/set-up-sso-byoidp/)

{{% alert color="info" %}}
You may have to add the final slash (`/`) manually to follow the link. You may also be asked to re-enter your Mendix credentials. Single sign-on (SSO) is not yet implemented for the Team Server. 
{{% /alert %}}

If you are connecting to Git, or connecting to SVN using a PAT, you need to create a PAT as described in the [Personal Access Tokens](/community-tools/mendix-profile/user-settings/#pat) section of *Mendix Profile*. The PAT must include the following scopes:

* `mx:modelrepository:repo:write`, `mx:modelrepository:repo:read`, and/or `mx:modelrepository:write` under *Model Repository* – for accessing the Git Team Server
* `mx:modelrepository:write` under *Model Repository* – for accessing the SVN Team Server

When connecting, your username is your Mendix account username, and your password is the PAT you created. When connecting to Git, you can also use the word *pat* as your username.

To clone/checkout your repository using the command line, you must include your PAT as part of the command.

For Git, the command has the form `git clone https://pat:{USERPAT}@git.api.mendix.com/{APPID}.git`, where `{USERPAT}` is your PAT.

{{% alert color="warning" %}}
Studio Pro automatically performs the necessary post-processing steps when you download a Git clone through its user interface. Using the Git command line to create a Git clone or using a clone created by a third-party tool in Studio Pro is not supported.
{{% /alert %}}

For SVN, the command has the form `svn checkout --revision "{REVISION}" --username "{USERNAME}" --password "{USERPAT}" https://svn.home.mendix.com/{APPID}/branches/{BRANCH}`

## Revision History {#revision-history}

{{% alert color="info" %}}For Git-based applications, revisions are sorted according to the commit history, which sometimes does not reflect the chronological order due to Git's decentralized nature and local commits.{{% /alert %}}

For each revision, you can see the following information:

* The message in the revision commit
* The date of the revision commit
* The name of the team member who committed the revision
* The branch to which the revision was committed
* The Mendix Studio Pro version used
* The revision number

You can also access the revision history in Studio Pro. For more information, see the [History](/refguide/using-version-control-in-studio-pro/#history) section in *Using Version Control in Studio Pro*.

## Revision Details {#revision-details}

When you click **Details** for a revision, you can see the stories related to that revision.

Related stories will only appear if you select them in the **Commit** dialog box of Mendix Studio Pro when committing:

{{< figure src="/attachments/developerportal/general/team-server/commit-story.png" class="no-border" >}}

## Read More

* [Version Control FAQ](/refguide/version-control-faq/)
* [App Roles](/developerportal/general/app-roles/)
