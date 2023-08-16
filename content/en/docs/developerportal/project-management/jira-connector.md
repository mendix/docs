---
title: "Jira"
url: /developerportal/project-management/jira-connector/
weight: 5
description: "Describes how to connect Mendix apps in the Developer Portal to Jira."
tags: ["app", "jira", "project management", "scrum master", "general settings", Developer Portal", "Scrum Master"]
aliases:
    -  /developerportal/general/jira-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

{{% alert color="warning" %}}This feature is in Beta. For more information on Beta products, see [Beta Releases](/releasenotes/beta-features/). {{% /alert %}}

## 1 Introduction

If you are a Scrum Master of a Mendix app, you can link your app to Jira if you manage your project there. Once your app is connected to Jira, you have the option to associate your commits in Studio Pro to one or more stories created in Jira. 

## 2 Features

* Supports connecting your Mendix app to Jira
* Enables you to migrate open stories (stories in any uncompleted Sprint or backlog, with the status "to-do" or "running") from the Developer Portal to Jira
* Allows you to associate your commits in Studio Pro (version 7.19 or above) to Jira stories

## 3 Limitations

{{% alert color="info" %}}
As we further develop this feature, we may lift these limitations with future releases.
{{% /alert %}}

* Feedback issues and stories from Epics are not migrated to Jira.
* Feedback issues accepted in the Developer Portal will not result in a story in your Jira board.
* You cannot change the status of a story from the [Stories](/refguide/stories-pane/)  pane in Studio Pro.
* The Stories pane only shows Jira issue types "Story" or "Bug".
* The Stories pane does not show the status and story points of a story correctly.

## 4 Prerequisites

* You need to be a [Scrum Master](/developerportal/general/app-roles/#team-roles) of the app in the Developer Portal.
* You need to have an active subscription to Jira.
* You need to have a project in Jira with a Scrum board or a Kanban board.
* You need to have a user account and API token with administration rights to the project in Jira. For more information on how to get this API token, see [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).

## 5 Procedure

To connect your app to Jira, perform the following steps:

1. In the Developer Portal, open your app.

2. Go to the [General Settings](/developerportal/collaborate/general-settings/) of your app.

3. Go to the **Project Management** tab.

4. Click **Connect Jira**. The **Set Up Jira Configuration** dialog box opens.

    {{< figure src="/attachments/developerportal/project-management/jira-connector/set-up-jira-configuration.png"   >}}

    Fill in the information as follows:

    * **URL Jira Environment**: This is the URL of your company’s environment within the Jira platform as provided by Jira. This URL usually looks like this: `https://my-company.atlassian.net`.
    * **Project Key**: This is the unique key of your project within the Jira platform.
    * **Admin User**: This is the login name of a user on the Jira platform with project administration rights.
    * **API Token**: This is a valid API token issued by the Jira platform and assigned to the above-mentioned admin user. For more information on how to get this API token, see [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).

5. Click **Next**. 

6. If your Jira project has several boards configured, from the drop-down list, select one of the Jira boards to connect. We support Scrum, simplified Scrum, and Kanban board types.

    {{< figure src="/attachments/developerportal/project-management/jira-connector/connect-jira-board.png"   >}}

7. If your app has stories in any uncompleted Sprint or backlog, with the status "to-do" or "running", you can choose whether to migrate these stories to your Jira project. 

    If you choose to migrate these stories, they will be converted to Jira in the following way:

    * The title, description, labels, story points (if you have the Estimation field visible in your Jira board), and tasks of these stories will be converted to Jira.

        {{% alert color="info" %}}If a label has a white space or comma in it, we replace these characters with a dash (-).{{% /alert %}}

    * In Jira, the stories will be placed in the backlog, and receive the default status.

    * Feedback issues and stories from Epics are not migrated to Jira.

8. Click **Activate** to activate the connection. 

Once the activation is completed, your app is connected to Jira. You can see the following:

* In Studio Pro, you can see your Jira stories in the Stories pane:
    * If you connect your app to a Scrum board in Jira, the Stories pane shows all issues of the types "Story" and "Bug" from the active Sprint.
    * If you connect your app to a Kanban board, the Stories pane shows all issues that match the board’s filter and sub-filter. 
        * You can find the filters and sub-filters in the board settings in Jira. For more information, see [Configure a company-managed board](https://support.atlassian.com/jira-software-cloud/docs/configure-a-company-managed-board/). 
        * If you want to exclude issues from the backlog in the Stories pane, consider removing the backlog statuses from the board’s column settings.

* After you commit your changes in Studio Pro, you can see the associated Jira stories in the details of the corresponding [revision](/developerportal/general/team-server/#revision-details) in the **Team Server** page of the Developer Portal.

* You can see the link to your Jira board in the **Project Management** section of the Developer Portal.

    {{< figure src="/attachments/developerportal/project-management/jira-connector/navigation-jira.png"   >}}
