---
title: "Team Server Overview"
category: "Development"
menu_order: 20
description: "Describes the overview of Team Server revisions and commits."
tags: ["Desktop Modeler", "Studio Pro", "Team Server", "Developer Portal", "commit", "branch"]
---

## 1 Introduction

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
