---
title: "Connect Jira"
url: /developerportal/collaborate/connect-jira/
weight: 1
description: "Describes how to connect your apps in the Developer Portal to Jira."
tags: ["app", "jira", "project management", "general settings", Developer Portal", "Scrum Master"]
---

{{% alert color="info" %}}This feature is still in Public Beta.{{% /alert %}}

## 1 Introduction

If you manage projects in Jira, you can link your apps in the Developer Portal to Jira. 

## 2 Features

* Enables you to connect your Mendix project to Jira
* Supports migrating open user stories from the Developer Portal to Jira
* Enables you to assign your Studio Pro changes to Jira stories (Studio Pro version 7.19 and up)
* Currently supports version 3 of the Jira Cloud REST API

## 3 Limitations

When you connect your apps in the Developer Portal to Jira, the following limitations apply currently. These limitations may be lifted with the future releases.

- Feedback issues are not migrated to Jira upon the activation of the connection.
- The [Stories](/refguide/stories-pane/) pane in Studio Pro do not correctly show the status and story points of your stories.
- You cannot change the status of a story from the Stories pane in Studio Pro
- The Stories pane only show Jira issue types "Story" or "Bug".

## 4 Prerequisites

- You should have an active subscription to Jira
- You should have a project in Jira with a Scrum board
- You should have a user account and API token with administration rights to the project in Jira. For more information, see [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).

## 5 Procedure

1. In the Developer Portal, go to your app.

2. Go to the General Settings of your app.

3. Go to the Project management tab.

5.  Click **Connect Jira**. The **Set Up Jira Configuration** dialog box opens.

    {{< figure src="/attachments/developerportal/collaborate/general-settings/connect-jira/set-up-jira-configuration.png"   >}}
    
    Fill in the information as follows:
    
    * **URL Jira Environment**: This is the URL of your company’s environment within the Jira Platform as provided by Jira. This URL usually looks like this: `https://my-company.atlassian.net`.
    * **Project Key**: This is the unique key of your project within the Jira platform.
    * **Admin User**: This is the login name of a user on the Jira platform with project administration rights.
    * **API Token**: This is a valid API token issued by the Jira platform an assigned to the above-mentioned Admin user. For more information on how to get this API token, see [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).
    
5. Click **Next**.
