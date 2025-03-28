---
title: "Stories Pane"
url: /refguide/stories-pane/
weight: 60
description: "Describes the Stories pane in Mendix Studio Pro."
---

## Introduction 

For version control-enabled apps (apps with Team Server or other Git servers), the **Stories** pane displays the stories and tasks of the active Sprint. Stories, tasks, and Sprints are created and managed via [Epics](/developerportal/project-management/epics/) in the Mendix Portal or connected to your [Jira board](/developerportal/project-management/jira-connector/).

In the **Stories** pane, you can view the stories and tasks of the active Sprint, update the status of the stories and tasks, and open their details.

{{% alert color="info" %}}Only the stories of the active Sprint are shown.{{% /alert %}}

The **Stories** pane consists of the top bar with various buttons and a table:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/stories-pane/stories-pane.png" alt="Stories Pane Example" class="no-border" >}}

The table contains following columns:

* **Story** – shows the story number and an icon indicating whether the story is a bug or a feature
    * *Tasks* are displayed as a sub-list of the corresponding story
* **Title** – shows the title of a story or a task
* **Status** – shows the status of a story or a task

## Interacting with the Stories Pane

You can perform the following actions in the **Stories** pane:

* [Refresh the Stories pane](#refresh)
* [View stories details](#view-details)
* [Change the status of a story or a task](#changing-status) 

### Refreshing the Stories Pane {#refresh}

The **Refresh** button allows you to get the latest changes on stories and tasks done by you and your team members in the Mendix Portal or Studio Pro. 

If two team members change the same story, the changes done last will take effect. For example, you set the story status to *Running*, but your colleague sets it to *Done* two minutes later. The story's status will be set to *Done* when you click **Refresh**, as your colleague was the last one to implement changes. 

### Viewing Details {#view-details}

To view details of a story, do one of the following: 

* Select the story in the table and click the **Details** button in the top bar 
* Double-click it in the table

An angled bracket next to a story means it has tasks assigned to it. Double-clicking a story that has tasks will show and hide the tasks instead of showing the details of the story.

When you view the details of a story, the **Story Details** pop-up window opens with the following information:

* The number of the story
* **Title** – the title of the story
* **Status** – the current status of the story
* **Points** – the story points assigned to the story
* **Description** – the description of the story

    {{< figure src="/attachments/refguide/modeling/menus/view-menu/stories-pane/story-details.png" alt="Story Details" class="no-border" >}}

### Changing the Status of a Story or a Task {#changing-status}

If you use Studio Pro version 10.10 or above, you can change the status of a story on the **Stories** pane. To do so, just select a new status in the **Status** column. The list of statuses to choose from can be managed via [Epics](/developerportal/project-management/epics/) in the Mendix Portal or the connected [Jira board](/developerportal/project-management/jira-connector/).

To change the status of a task, select or clear the checkbox in the **Status** column:

* Clear the checkbox to set the done task in **To do**
* Tick the checkbox to set the task to **Done**

## Read More

* [Epics](/developerportal/project-management/epics/)
* [Jira Connector](/developerportal/project-management/jira-connector/)
* [View Menu](/refguide/view-menu/)
