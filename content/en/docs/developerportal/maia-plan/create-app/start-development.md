---
title: "Starting the Development"
url: /developerportal/maia-plan/start-development/
description: "Describes the development step of creating an app with Maia Plan."
weight: 40
---

## Introduction

After you click **Start Building**, the **Start Development** window is displayed, showing the following options:

* **Prioritize** – Click the **Connect Planning Tool** button in the **Prioritize** section to select the project management tool you want to use for organizing and planning your work. This opens the **Connect Planning Tool** window, where you can select one of these options:

    * **Mendix Planning Board (default)** – Use the Mendix planning board, where you can reorganize the sprints as needed.     
    * **Jira** – Use Jira to organize and prioritize your work. To do that, follow the steps in the [Connecting to Jira](#connect-jira) section.  
    
   {{% alert color="info" %}}
   If you start prioritizing your work before Maia is done [finding recommendations](/developerportal/maia-plan/generate-plan/#recommender), recommended components are not displayed in the **Planning** window.
   {{% /alert %}}

* **Build** – Click the **Open in Studio Pro** button in the **Build** section to open Studio Pro, where you can continue working on the new app. Studio Pro does not currently take into account [recommended components](/developerportal/maia-plan/generate-plan/#recommender).
    
    For details, refer to [Maia Make](/refguide/maia-make/) in the Studio Pro documentation.    

## Connecting Maia Plan to Jira {#connect-jira}

The following two sections describe the two main actions you need to take to use Jira as your project management tool in Maia Plan.

### Configuring Jira for Maia Plan

Follow these steps to configure Jira for use with Maia Plan.

New Jira projects/spaces:

1. Create a new Jira project/space.
2. Ensure that the default board has the correct project filter. To do that, follow these steps:

    1. Find your **Project key** or **Space key**. The project key is the short code that Jira assigns to your project. You can find it next to your project name, in the top left corner of your Jira project. It is also available in the **Project Settings** window, which you can access from the context menu of your project.
        {{< figure src="/attachments/developerportal/maia/space-key.png" alt="Board key field in Jira" max-width="30%" >}}
    2. Click **Board Settings** in the context menu of your board.
        {{< figure src="/attachments/developerportal/maia/board-settings-option.png" alt="Board Settings button in Jira" max-width="30%" >}}
    3. Set the filter to *project = "your project key"*. 

Existing Jira projects/spaces:

1. Open your existing Jira project/space.
2. Select the board you want to use with Maia Plan, or create a new one.
3. Ensure the board includes a filter for the project's Jira key:

    * For an existing board:

        1. Open **Board Settings**.
        2. Confirm that the filter is set to *project = "your project key"*.

    * For a new board, select **All work items from your space**.     
        {{% alert color="info" %}} When you select **All work items from your space**, a consolidated backlog view is created. This view includes work items from all boards in the project, not just those managed through Maia Plan. {{% /alert %}}

### Configuring Maia Plan for Jira

Before you begin, make sure that the [prerequisites for using Jira](/developerportal/project-management/jira-connector/#prerequisites) are met.

Follow these steps to connect Maia Plan to Jira:

1. In the **Connect Planning Tool** window, select **Jira**.
2. Fill in the information as follows:

    * **Base URL Jira Environment** – The URL of your company’s environment within the Jira platform, as provided by Jira. This URL usually looks like this: `https://my-company.atlassian.net`.
    * **Project Key** – The unique key of your project/space within the Jira platform.
    * **Board ID** – The unique number that identifies a specific board in your Jira project/space.
    * **Jira Account** – The login name of a user on the Jira platform with project administration rights.
    * **API Token** – A valid API token issued by the Jira platform and assigned to the admin user mentioned above. For more information on how to get this API token, refer to [Manage API tokens for your Atlassian account](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/).    

## Using Jira with Maia Plan

After you connect Maia Plan to Jira, you can use Jira as your project management tool:

1. In Maia Plan, in the **Start Development** window, set the planning tool to Jira, as previously indicated.
2. Click **Open Jira** to open the connected Jira board from Maia Plan. Your epics and stories are displayed in the Jira backlog.    
     {{% alert color="warning" %}} The redirection from Maia Plan to team-managed project boards is not currently working as expected. To see your team-managed project board, you need to have the correct URL yourself. This issue does not occur for company-managed project boards, which open correctly from Maia Plan. {{% /alert %}}
3. If an active sprint does not already exist, create one in Jira.
4. Move the stories you want to work on from the backlog into the active sprint. The stories in the active sprint are now also available in Studio Pro.
