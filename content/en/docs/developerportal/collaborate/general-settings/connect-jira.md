---
title: "Connect Your App to Jira"
url: /developerportal/collaborate/connect-jira/
weight: 1
description: "Describes how to connect your apps in the Developer Portal to Jira."
tags: ["app", "jira", "project management", "general settings", Developer Portal", "Scrum Master"]
---

{{% alert color="info" %}}
This feature is still in Public Beta.
{{% /alert %}}

## 1 Introduction

If you manage projects in Jira, you can link your app in the Developer Portal to Jira. Once your app is connected to Jira, you have the option to associate your commit in Studio Pro to one or more stories created in Jira. 

After you associate your comment with the stories in Jira, you can find these stories in the details of the revision in the [Team Server](/developerportal/collaborate/team-server/) overview of your app. A button next to the revision can direct you to the story in your Jira environment.

## 2 Features

* Enables you to connect your Mendix project to Jira
* Supports migrating open stories (namely, stories in any uncompleted Sprint or backlog, with the status "To-do" or "Running") from the Developer Portal to Jira
* Allows you to assign your changes in Studio Pro (version 7.19 or above) to Jira stories
* Supports the [Jira Cloud platform REST API version 3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#about)

## 3 Limitations

{{% alert color="info" %}}
These limitations may be lifted with the future releases.
{{% /alert %}}

- Feedback issues are not migrated to Jira upon the activation of the connection.
- The [Stories](/refguide/stories-pane/) pane in Studio Pro do not correctly show the status and story points of your stories.
- You cannot change the status of a story from the Stories pane in Studio Pro
- The Stories pane in Studio Pro only show Jira issue types "Story" or "Bug".

## 4 Prerequisites

- You need to have an active subscription to Jira.
- You need to have a project in Jira with a Scrum board.
- You need to have a user account and API token with administration rights to the project in Jira. For more information, see [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).

## 5 Setting up Jira Configuration in the Developer Portal

1. In the Developer Portal, open your app.

2. Go to the [General Settings](/developerportal/collborate/general-settings)of your app.

3. Go to the **Project Management** tab.

5.  Click **Connect Jira**. The **Set Up Jira Configuration** dialog box opens.

    {{< figure src="/attachments/developerportal/collaborate/general-settings/connect-jira/set-up-jira-configuration.png"   >}}
    
    Fill in the information as follows:
    
    * **URL Jira Environment**: This is the URL of your company’s environment within the Jira Platform as provided by Jira. This URL usually looks like this: `https://my-company.atlassian.net`.
    * **Project Key**: This is the unique key of your project within the Jira platform.
    * **Admin User**: This is the login name of a user on the Jira platform with project administration rights.
    * **API Token**: This is a valid API token issued by the Jira platform and assigned to the above-mentioned Admin user. For more information on how to get this API token, see [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).
    
5. Click **Next**.

6. Active the Jira connection.

    The Jira Connector of the Developer Portal allows you to connect your Mendix project with a single project board in Jira. If your Jira project has several boards configured, we ask you to choose one when you activate the connection. We support scrum, simplified scrum, and kanban board types:
    * If you connected your project to a Scrum board in Jira, the Stories pane in Studio Pro shows all issues of the types "Story" and "Bug" from the active sprint.

    * If you connected to a Kanban board, the Stories pane shows all issues that match the board’s filter query and sub-filter. You can find the query and sub-query in the Board Settings in Jira. Fore more information, see [Configure a company-managed board](https://support.atlassian.com/jira-software-cloud/docs/configure-a-company-managed-board/). If you want to exclude issues from the backlog in the Stories pane, consider removing the backlog statuses from the board’s column settings.

## 6  Migrating Your Open Stories from the Developer Portal to Jira

In the Developer Portal, if your app has any stories in any uncompleted Sprint or backlog, with the status "To-do" or "Running", you have the option to migrate these stories to your Jira project. These stories will be converted to Jira in the following way:

- The title, description, labels, story points, and tasks of these stories will be converted to Jira

  {{% alert color="info" %}}If a label has a white space or comma in it, we replace these characters with a dash (-).{{% /alert %}}

  {{% alert color="info" %}}We can only migrate the story points if you have the Estimation field visible in your Jira board.{{% /alert %}}

- In Jira, the stories will be placed in the backlog, and receive the default status

{{% alert color="warning" %}}
Feedback issues and stories from Epics are not migrated to Jira.
{% /alert %}}
