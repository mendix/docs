---
title: "Team Server Overview"
category: "Development"
menu_order: 20
description: "Describes the overview of Team Server revisions and commits."
tags: ["Studio Pro", "Team Server", "Developer Portal", "commit", "branch"]
---

## 1 Introduction

Written on top of Subversion and delivered as a plugin to the Developer Portal, Mendix Team Server is designed to make the life of a Mendix developer easier. Mendix Studio Pro and Studio are tightly integrated with Team Server, and actions like creating a new app project (including a versioned model repository), updating an app project, committing changes, and merging model versions are all available from within Mendix Studio Pro as single-click actions.

You can manage Team Server access from the Developer Portal, which allows you to combine requirements, implementation, and feedback. When you commit your app model changes to Team Server from within Studio Pro, you can select the user stories (reflecting the requirements) that you have been working on. Team Server automatically creates links between these user stories and the model changes you made, providing you with a way to navigate from commits to the associated requirements. Furthermore, the Mendix Platform creates links between feedback, forms, changesets, and user stories.

Team Server also connects the capture-and-develop phase of the Agile application lifecycle. When you start working on the next version of your application, you just open Studio Pro to see the user stories planned for the current Sprint and start working on them. If a user story is based on user feedback, you can directly jump to the form mentioned in the metadata of the feedback and start implementing the requested change. 

On the **Team Server** page of the Developer Portal, an overview is presented of the changes and revisions made to the app project in Mendix Studio Pro:

![](attachments/team-server.png)

## 2 Team Server URL

The **Team Server URL** has the following form: `https://teamserver.sprintr.com/<your AppID>/` and takes you to the team server for your app. Here you can see all the files and branches of your app.

{{% alert type="info" %}}

You may have to add the final slash manually to follow the link.

You may be asked to re-enter your Mendix credentials. Single Sign-On (SSO) is not yet implemented for the Team Server.

{{% /alert %}}

## 3 Revision Summary

For each revision, you can see the following information:

* The message in the revision commit
* The date of the revision commit
* The name of the App Team member who committed the revision
* The branch to which the revision was committed
* The Mendix Studio Pro version used
* The revision number

![](attachments/revision-example.png)

## 4 Revision Details

When you click **Details** for a revision, you can see the stories related to that revision:

![](attachments/revision-details.png)

Related stories will only appear if you select them in the **Commit** dialog box of Mendix Studio Pro when committing:

![](attachments/commit-story.png)

## 5 Read More

* [Stories](/developerportal/collaborate/stories)
* [Company & App Roles](/developerportal/company-app-roles/index)
