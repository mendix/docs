---
title: "Stories Pane"
url: /refguide/stories-pane/
weight: 60
description: "Describes the Stories pane in Mendix Studio Pro."
tags: ["Studio Pro", "stories", "stories pane"]
---

## 1 Introduction 

For version control enabled apps (apps with Team Server or other SVN servers), the **Stories** pane displays the stories and tasks of the current [Sprint](/developerportal/collaborate/stories/). Stories, tasks, and sprints are created and managed in the Developer Portal. For more information on stories, see [Stories](/developerportal/collaborate/stories/). For more information on tasks, see the [Adding a Task to a Story](/developerportal/collaborate/stories/#adding-task) section in *Stories*. 

In the **Stories** pane, you can view the stories and tasks of the current sprint, show or hide done stories, open their details, change the status of the stories and tasks, and open documents connected to stories. 

The **Stories** pane consists of the top bar with various buttons and a table:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/stories-pane/stories-pane.png" alt="Stories Pane Example" >}}

The table contains following columns:

* **Story** – shows a list of stories   
  * *Tasks* are displayed as a sub-list of the corresponding story
* **Status** – shows the status of a story or a task 

## 2 Interacting with the Stories Pane

You can perform the following actions in the **Stories** pane:

* [Refresh the Stories pane](#refresh)
* [View stories details](#view-details)
* [Show or hide completed stories](#show-completed-stories)
* [Open documents connected to stories](#opening-documents)
* [Change the status of a story or a task](#changing-status) 

### 2.1 Refreshing the Stories Pane {#refresh}

The **Refresh** button allows you to get the latest changes on stories and tasks done by you and your team members in the the Developer Portal or Studio Pro. 

If two team members change the same story, the changes done last will take effect. For example, you set the story status to *Running*, but your colleague sets it to *Done* two minutes later. The story's status will be set to *Done* when you click **Refresh**, as your colleague was the last one to implement changes. 

### 2.2 Viewing Details {#view-details}

To view details of a *story*, do one of the following: 

* Double-click it in the table
* Select the story in the table and click the **Details** button in the top bar 

A *plus icon* next to a story means it has tasks assigned to it. To view details of a *task*, click the plus icon and do one of the following:

* Double-click the task in the table
* Select the task in the table and click the **Details** button in the top bar

When you view the details of a story or task, the **Story Details** pop-up window is opened with the following information:

* **Title** – the title of the story/task

* **Status** – the current status of the story/task

* **Story points** – the story points assigned to the story/task 

* **Description** – the description of the story/task

    {{< figure src="/attachments/refguide/modeling/menus/view-menu/stories-pane/story-details.png" alt="Story Details" >}}

### 2.3 Showing Completed Stories {#show-completed-stories}

When enabled, the **Show complete stories** button allows you to show the stories that are set to *Done*. For more information on statuses of stories, see the [Changing the Status of a Story or a Task](#changing-status) section below.

### 2.4 Opening Documents Connected to Stories {#opening-documents}

If the story is created from a feedback item, you can open a document which the feedback item refers to. That means if a feedback was submitted for a widget on a page, the **Open document** button or icon will open this page. 

To open the document, either click the **Open document** button in the top bar or the corresponding icon in the table:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/stories-pane/open-document-icon.png" alt="Open document icon" >}}

For more information on how to create a story on the basis of a feedback item and add it to your backlog, see the [Adding a Feedback Item to Your Backlog](/developerportal/collaborate/feedback/#adding) section in *Feedback Management*.

### 2.5 Changing the Status of a Story or a Task {#changing-status}

You can change the status of a story or a task.

To change the status of a *story*, click its status in the **Status** column. The status will change in the following succession:  *To do* > *Running* > *Done* > *To do*. 

To change the status of a task, tick or clear the check box in the **Status** column:

* Clear the check box to set the done task in *To do*

* Tick the check box to set the task to *Done*

##  3 Read More

* [Stories](/developerportal/collaborate/stories/)
* [Feedback Management](/developerportal/collaborate/feedback/)
* [View Menu](/refguide/view-menu/)
