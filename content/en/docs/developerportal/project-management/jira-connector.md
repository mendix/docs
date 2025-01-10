---
title: "Jira"
url: /developerportal/project-management/jira-connector/
weight: 5
description: "Describes how to connect Mendix apps in Apps to Jira."
aliases:
    -  /developerportal/general/jira-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

If you are a Scrum Master of a Mendix app, you can link your app to Jira if you manage your project there. Once your app is connected to Jira, you have the option to associate your commits in Studio Pro to one or more stories created in Jira. 

## Features

* Supports connecting your Mendix app to Jira
* Supports Scrum, Kanban, and team-managed boards (previously known as "next-gen boards")
* Allows you to associate your commits in Studio Pro (version 7.19 or above) to Jira stories:

    * For a Scrum board, the **Stories** pane shows all stories from all your active Sprints, ordered by story key
    * For a Kanban board, the **Stories** pane shows all stories from your board, taking the sub-query of the board settings into account, ordered by story key
    * For a team-managed board, the **Stories** pane shows all stories from your board, which may include your backlog; if you do not wish to see backlog stories in Studio Pro, consider setting up your board without a backlog and use a separate board to manage your backlog

* Converting your [feedback items](/developerportal/app-insights/feedback/) in App Insights will result in a story in Jira

## Limitations

{{% alert color="info" %}}
As we further develop this feature, we may lift these limitations with future releases.
{{% /alert %}}

* Feedback issues, and stories from Epics are not migrated to Jira.
* When a feedback item is being converted to an issue, the story type, title, and description of the issue will be set. If your Jira configuration requires additional mandatory fields, this process might not work.

## Prerequisites

* You need to have the [Scrum Master](/developerportal/general/app-roles/#team-roles) role for the app.
* You need to have an active subscription to Jira Software Cloud.
* You need to have a project in Jira with a Scrum board, a Kanban board, or a team-managed board.
* You need to have a user account and API token with administration rights to the project in Jira. For more information on how to get this API token, see [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).
* To convert feedback items to stories in Jira, your project in Jira must have the issue types "Story" and "Bug". For more information on how to set up issue types for your project, see [Associate issue types with projects](https://support.atlassian.com/jira-cloud-administration/docs/associate-issue-types-with-projects/).

## Procedure

To connect your app to Jira, perform the following steps:

1. In [Apps](https://sprintr.home.mendix.com/), open your app.

2. Go to the [Settings](/developerportal/collaborate/general-settings/) page.

3. Go to the **Project Management** tab.

4. Click **Connect Jira**. The **Set Up Jira Configuration** dialog box opens.

    {{< figure src="/attachments/developerportal/project-management/jira-connector/set-up-jira-configuration.png"   class="no-border" >}}

    Fill in the information as follows:

    * **URL Jira Environment**: This is the URL of your company’s environment within the Jira platform as provided by Jira. This URL usually looks like this: `https://my-company.atlassian.net`.
    * **Project Key**: This is the unique key of your project within the Jira platform.
    * **Admin User**: This is the login name of a user on the Jira platform with project administration rights.
    * **API Token**: This is a valid API token issued by the Jira platform and assigned to the above-mentioned admin user. For more information on how to get this API token, see [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).

5. Click **Next**. 

6. If your Jira project has several boards configured, from the drop-down list, select one of the Jira boards to connect. We support Scrum, simplified Scrum, and Kanban board types.

    {{< figure src="/attachments/developerportal/project-management/jira-connector/connect-jira-board.png" >}}

7. Click **Activate** to activate the connection. 

Once the activation is completed, your app is connected to Jira. You can see the following:

* In Studio Pro, you can see your Jira stories in the **Stories** pane:

    * If you connect your app to a Scrum board in Jira, the **Stories** pane shows all stories from all your active Sprints.
    * If you connect your app to a Kanban board, the **Stories** pane shows all stories from your board, taking the filter and sub-query of the board settings into account, ordered by story key.
        * You can find the filters and sub-query in the board settings in Jira (for more information, see [Configure a company-managed board](https://support.atlassian.com/jira-software-cloud/docs/configure-a-company-managed-board/)).
    * If you connect your app to a team-managed board, the **Stories** pane shows all stories from your board, which may include your backlog.
    * If you do not wish to see backlog stories in Studio Pro, consider setting up your board without a backlog and use a separate board to manage your backlog.
    * The list of stories is ordered by the Jira story key.

* After you commit your changes in Studio Pro, you can see the associated Jira stories in the details of the corresponding [revision](/developerportal/general/team-server/#revision-details) in the **Team Server** page after opening your app in **Apps**.
* You can see the link to your Jira board in the **Project Management** section in the **Apps** [navigation pane](/developerportal/#navigation-pane).

    {{< figure src="/attachments/developerportal/project-management/jira-connector/navigation-jira.png" >}}

## View Settings

After you activated the Jira connector, you can review the configuration details any time.

{{< figure src="/attachments/developerportal/project-management/jira-connector/jira-configuration-details.png" >}}

If you need to connect to a different Jira environment, or need to rotate the API key used by the Jira connector, click **Edit Connection Details**. If you want to switch to a different Jira board within the same environment, click **Change Board**.

In order for the Jira connector to work, Mendix caches some information from your Jira board in our system. This include the name of the esitimation field that you use to set story points, as well as the status schema that you use in your board. If this information changes in Jira, you may need to refresh the cache by clicking **Reconnect**.

If you no longer wish to use the Jira connector, simply click **Deactivate Connection**. This will revert your project management tool automatically to [Epics](/developerportal/project-management/epics/).
