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

## 2 Features

* Supports connecting your Mendix project to Jira
* Enables you to migrate open stories (namely, stories in any uncompleted Sprint or backlog, with the status "to-do" or "running") from the Developer Portal to Jira
* Allows you to associate your changes in Studio Pro (version 7.19 or above) to Jira stories
* Supports [Jira Cloud platform REST API version 3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#about)

## 3 Limitations

{{% alert color="info" %}}
As we further develop this feature, we may lift these limitations with future releases.
{{% /alert %}}

- Feedback issues are not migrated to Jira upon the activation of the connection.
- You cannot change the status of a story from the [Stories](/refguide/stories-pane/)  pane in Studio Pro
- The Stories pane only shows Jira issue types "Story" or "Bug".
- The Stories pane does not correctly show the status and story points of a story.

## 4 Prerequisites

- You need to have an active subscription to Jira.
- You need to have a project in Jira with a Scrum board or a Kanban board.
- You need to have a user account and API token with administration rights to the project in Jira. For more information, see [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).

## 5 Procedure

To connect your app to Jira, perform the following steps:

1. In the Developer Portal, open your app.

2. Go to the [General Settings](/developerportal/collborate/general-settings) of your app.

3. Go to the **Project Management** tab.

4. Click **Connect Jira**. The **Set Up Jira Configuration** dialog box opens.

    {{< figure src="/attachments/developerportal/collaborate/general-settings/connect-jira/set-up-jira-configuration.png"   >}}

    Fill in the information as follows:

    * **URL Jira Environment**: This is the URL of your company’s environment within the Jira platform as provided by Jira. This URL usually looks like this: `https://my-company.atlassian.net`.
    * **Project Key**: This is the unique key of your project within the Jira platform.
    * **Admin User**: This is the login name of a user on the Jira platform with project administration rights.
    * **API Token**: This is a valid API token issued by the Jira platform and assigned to the above-mentioned admin user. For more information on how to get this API token, see [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).

5. Click **Next**. 

6. If your Jira project has several boards configured, from the drop-down list, select one of the boards to connect. We support Scrum, simplified Scrum, and Kanban board types.

    {{< figure src="/attachments/developerportal/collaborate/general-settings/connect-jira/connect-jira-board.png"   >}}

7. If your app has any stories in any uncompleted Sprint or backlog, with the status "to-do" or "running", you can choose whether to migrate these stories to your Jira project. 

    If you choose to migrate these stories, they will be converted to Jira in the following way:

    -  The title, description, labels, story points (if you have the Estimation field visible in your Jira board), and tasks of these stories will be converted to Jira.

        {{% alert color="info" %}}If a label has a white space or comma in it, we replace these characters with a dash (-).{{% /alert %}}

    -  In Jira, the stories will be placed in the backlog, and receive the default status.

    - Feedback issues and stories from Epics are not migrated to Jira.

8. Click **Activate** to activate the connection. 

After your connection is activated, your app is connected to Jira. You can see the following:

* In Studio Pro, you can see your stories in the Stories pane:
  * If you connect your app to a Scrum board in Jira, the Stories pane shows all issues of the types "Story" and "Bug" from the active Sprint.
  * If you connect your app to a Kanban board, the Stories pane shows all issues that match the board’s filter query and sub-filter. 
    * You can find the query and sub-query in the board settings in Jira. Fore more information, see [Configure a company-managed board](https://support.atlassian.com/jira-software-cloud/docs/configure-a-company-managed-board/). 
    * If you want to exclude issues from the backlog in the Stories pane, consider removing the backlog statuses from the board’s column settings.

* After you commit your changes in Studio Pro, you can find a button next to the revision in the [revision details](/developerportal/collaborate/team-server/revision-details). Clicking this button brings you to the associated user story in your Jira environment.
