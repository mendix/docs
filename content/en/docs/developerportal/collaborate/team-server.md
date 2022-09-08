---
title: "Team Server"
url: /developerportal/collaborate/team-server/
category: "Collaboration"
weight: 7
description: "Describes the overview of Team Server revisions and commits."
tags: ["Studio Pro", "Team Server", "Developer Portal", "commit", "branch"]
aliases:
    - /refguide/team-server.html
    - /developerportal/develop/team-server.html
    - /refguide/team-server
    - /developerportal/develop/team-server
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Team Server is where all the committed versions of Mendix apps are stored. Mendix Studio Pro and Studio are integrated with the Team Server, and actions like creating a new app (including a versioned model repository), updating an app, committing changes, and merging model versions are all available from Mendix Studio Pro as single-click actions.

When you commit your app model changes to the Team Server in Studio Pro, you can select user stories that you have been working on. Team Server automatically creates links between user stories and the model changes, allowing you to navigate from commits to the associated requirements. 

On the **Team Server** screen of the Developer Portal, you can see a URL to access you app, revision history, and revision details.

## 2 Team Server URL

The **Team Server URL** can be used to directly access your app content. On SVN you can see all the files and branches of your app. The URL can have the following form:

* `https://teamserver.sprintr.com/<your AppID>/` if it is an SVN-enabled app
* `https://git.api.mendix.com/<your AppID>.git` if it is a Git-enabled app

{{% alert color="info" %}}
You may have to add the final slash (`/`) manually to follow the link. You may also be asked to re-enter your Mendix credentials. Single sign-on (SSO) is not yet implemented for the Team Server. 
Connecting to Git is done via a Personal Access Token (PAT). For more information on how to create a PAT, see [Create a Personal Access Token with Warden](/developerportal/community-tools/warden/). When connecting, your username is your Mendix account username, and your password is the Personal Access Token you created. Alternatively, you can use the word *pat* as your username.
{{% /alert %}}

## 3 Revision History {#revision-history}

For each revision, you can see the following information:

* The message in the revision commit
* The date of the revision commit
* The name of the team member who committed the revision
* The branch to which the revision was committed
* The Mendix Studio Pro version used
* The revision number

You can also access the revision history in Studio Pro. For more information, see the [History](/refguide/using-version-control-in-studio-pro/#history) section in *Using Version Control in Studio Pro*.

## 4 Revision Details

When you click **Details** for a revision, you can see the stories related to that revision:

{{< figure src="/attachments/developerportal/collaborate/team-server/revision-details.png" >}}

Related stories will only appear if you select them in the **Commit** dialog box of Mendix Studio Pro when committing:

{{< figure src="/attachments/developerportal/collaborate/team-server/commit-story.png" >}}

## 5 Read More

* [Version Control FAQ](/refguide/version-control-faq/)
* [App Roles](/developerportal/collaborate/app-roles/)
