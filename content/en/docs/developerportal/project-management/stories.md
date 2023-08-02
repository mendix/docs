---
title: "Stories"
url: /developerportal/project-management/stories/
category: "Collaboration"
weight: 10
description: "Describes how to manage the Sprints and stories for your apps."
tags: ["Stories", "Sprint", "Project management", "Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="warning" %}}
We will delete all data from Mendix Stories starting October 1, 2024. We strongly urge you to [download your work](/developerportal/collaborate/general-settings/#story-archive) before that date or better yet, switch to Epics. Here's [how to migrate](/developerportal/project-management/epics/planning/#data-migration) your work to Epics.

As of the GA release on December 1, 2022, [Epics](/developerportal/project-management/epics/) is the default tool for you to manage the development process of new apps. Epics is a replacement of Stories.
{{% /alert %}}

## 1 Introduction

In **Stories**, you are able to manage Sprints, stories, and labels for your app. These components are often used in an Agile development environment, in which teams work in short development cycles (Sprints) of 2–4 weeks.

By adding your Sprints to Mendix, you will have a clear overview of your tasks and can easily view the status of the development of your app. You can create, refine, and prioritize user stories collaboratively using the stories' conversation threads. User stories can be estimated and organized into Sprints which can be monitored using Scrum boards.

{{% alert color="info" %}}
You can also manage the progress of tasks and Sprints from within Mendix Studio Pro via the [Stories pane](/refguide/stories-pane/).
{{% /alert %}}

{{< figure src="/attachments/developerportal/project-management/stories/stories.png" >}}

The tabs for this page are described below.

## 2 Overview {#overview}

The sections below describe the main actions to be performed on the **Overview** tab.

### 2.1 Creating a New Sprint {#new-sprint}

Click **New Sprint** to open the **Edit Sprint** dialog box and filll in the following details:

* **Name** – the name of the Sprint
* **Sprint comes after** –  where the Sprint should be located in the structure of your **Stories** page
* **Duration (weeks)** –  how many weeks the Sprint should last
* **Start date** – the start date of the Sprint; this will be set automatically for right after the previous Sprint ends, unless the **Custom start date** box is checked and a start date is entered manually.

For more information on Sprints, see the [Sprint Actions](#sprint-actions) section below.

### 2.2 Creating a New Story {#new-story}

Each Sprint contains a number of stories that describe the specific functionality to be implemented, built, or fixed. Click **New Story** to open the **Create Story** dialog box and fill in the following details:

* **Add a title** for the story
* **Add a label** to organize your work
* **Description** – a description of the story
* **Tasks** – break down your work into up to 20 tasks
* Story status – select **To-do** (default), **Running**, or **Done** from the drop-down menu
* Assignee – select a team member you wish to assign to this story from the drop-down menu
* Story points – clarify the size of the story in the drop-down menu
* Sprint – select the Sprint for the story from the drop-down menu (**Backlog** is the default; the Sprint you select will be identified under the title of the story as well)
* **Change to Bug** – by default, the story is created as a  **Feature**; click here to toggle the story type

You can also create a story via the [New Story](#new-story) button for a Sprint or from within a new Sprint by clicking **Add a new story**.

For more information on stories, see the [Story Actions](#story-actions) section below.

### 2.3 Creating a New Label {#new-label}

Click **New Label** to create a new label for your app and fill in the following details:

* **Label caption** – the caption of the label
* **Label color** – select a color from the drop-down list for easy visibility (the small square below the drop-down list shows how the color looks)

### 2.4 More Actions {#more}

Click **More** to access the following options:

* **Import / Export** – opens the **Import / Export** page; for details, see the [Importing and Exporting to Excel](#import-export) section below
* **Manage Labels** – opens a page where you can manage labels at the app level; for details, see the [Managing Labels](#managing-labels) section below

#### 2.4.1 Importing and Exporting to Excel {#import-export}

After you click **Import / Export**, you are presented with several options.

In Mendix, you can export stories from your app at any time. If you select **Export single Sprint to Excel**, you can select just the stories in one Sprint and export these to Excel to work on.

You can also **Export all stories to Excel** and even **Export all stories to Excel (including completed Sprints)**.

If you select **Updates stories from Excel**, you can use an an Excel sheet from a previous export as a template for the import. The Developer Portal recognizes existing items by using the **ID** column. The imported content will become stories for your app.

When editing stories in Excel, follow these guidelines:

* To add a new story or task,  add a new line on the correct position and enter the item's name
* To reorder an item, adjust the depth by adding or removing the plus signs (make sure they stay consistent with every item being the same or one level deeper than the item above it)
* To remove an item, replace its depth with a single minus sign (make sure that any tasks associated with it are either moved or are also removed)

#### 2.4.2 Managing Labels {#managing-labels}

The **Manage Labels** page is where you can edit labels via the following buttons:

* **Add New Label** – enables creating a new label and allows you to assign a color to it; you can also create a new label by typing a new label name when you are creating a story
* **Edit** – enables changing the name and/or color of an existing label
* **Merge** – enables merging the selected label into another label; all stories which have the selected label are labeled with the other label and the selected label is deleted
* **Remove** – enables removing the selected label from any stories to which it has been applied; the label is then deleted

### 2.5 Sprint Actions {#sprint-actions}

For each Sprint, the following options are provided via the menu button on the right:

* **Complete Sprint** (only available for the Sprint identified as an **Active Sprint**) – enables completing the Sprint
* **Add Story** – enables [creating a new story](#new-story) 
* **Edit** – opens the [Edit Sprint](#new-sprint) dialog box
* **Delete** – delete the Sprint

### 2.6  Story Actions {#story-actions}

When you select a story via the checkbox, you can perform the following actions:

{{< figure src="/attachments/developerportal/project-management/stories/story-context-menu.png" >}}

* **Clone** – enables duplicating a selected story and its tasks, story points, status, and labels into a new user story; this can enable utilizing a user story as a template
* **Move** –  enables moving a story to another Sprint
* **Assign Label** – enables assigning existing labels to a story
* **Delete** – enables deleting a story (note that if you delete a story, it is gone forever)

{{% alert color="info" %}}
These actions support multi-selection of stories, except for the **Clone** action.
{{% /alert %}}

#### 2.6.1 Accessing Story Details {#story-details}

When you click a story title, the story details page opens:

{{< figure src="/attachments/developerportal/project-management/stories/story-details.png"   width="500"  >}}

On this page, you can perform a number of actions:

* Change the title by clicking the pencil icon
* Add or remove **Labels**
* Update the **Description** via **Edit Description**
* View, add, and manage the **Tasks** of the story (you can mark them as **Done** by selecting the checkbox in front of the task)
* Leave **Comments** on the story to collaborate with your team
* VIew the **History** of changes to the story in the form of **Activities**
* See the story's status and update it via the drop-down menu (available statuses are **To-do**, **Running**, and **Done**)
* Update the assignee of the story via the drop-down menu
* Update the story points via the drop-down menu
* **Move Story** to a different app or Sprint (for details, see the [Moving Stories](#move-stories) section below)
* **Duplicate** the story and its tasks, story points, status, and labels into a new user story
* View the **Feedback** on which this story is based (if applicable; for details, see the [Adding a Feedback Item to Your Backlog](/developerportal/general/feedback/#adding) section of *Feedback Management*)
* View the committed **Revisions** linked to the story (which are configured in the [Related stories](/refguide/commit-dialog/#stories) tab of the **Commit** dialog box in Studio Pro)
* **Change to Bug** to toggle the story type between **Bug** and **Feature** (by default, a story is created as a **Feature**)
* **Delete** the story

#### 2.6.2 Moving a Story {#move-stories}

If you need to reorder stories or move a story to a different Sprint, there are three ways to do this:

* Select the story, click **Move**, and then select the new Sprint from the **Move Stories** dialog box
* Select the story and drag it to the desired Sprint location:
* Click the story title to open the story details page, then click **Move Story**:

{{% alert color="info" %}}
Moving a story will move the tasks as well.
{{% /alert %}}

#### 2.6.3 Adding a Task to a Story {#adding-task}

To add a task to a story, access the [story details](#story-details) page and under **Tasks**, start typing in the **Add a new task** box.

### 2.7 Managing Stories in Studio Pro {#managing-sp}

In addition to managing your Sprints in the Developer Portal, you can view them in Studio Pro.

To manage stories in Studio Pro, follow these steps:

1. Open your app in Studio Pro by clicking **Edit in Studio Pro** in the upper-right corner of the page.
2. Open **View** > **Stories**. You can see your active Sprints in the **Stories** pane.

    {{< figure src="/attachments/developerportal/project-management/stories/stories-pane.png" >}}

3. To change the status of a story in Studio Pro, click the current status. For example, click the **To-do** **Status** to change it to **Running**:

{{< figure src="/attachments/developerportal/project-management/stories/stories-to-do.jpg" >}}

{{% alert color="info" %}}
Changing the status of a story or updating story points automatically synchronizes the updates between the Developer Portal and Studio Pro. For more information on how to change the status of your story, see the [Changing the Status of a Story or a Task](/refguide/stories-pane/#changing-status) section in *Stories Pane*.
{{% /alert %}}

## 3 Board

On the **Board** tab, there is a Kanban overview of the [stories](/developerportal/project-management/stories/) in the current Sprint. The stories are categorized in the **To-Do**, **Running**, and **Done** sections according to their status.

You can click **Mark current sprint as completed** only when all stories have the **Done** status.

When you click **Details** for a story, you will be taken to the [story details](/developerportal/project-management/stories/#story-details) page.

{{% alert color="info" %}}
All the changes made on this page are directly passed on to the **Stories** page and vice versa.
{{% /alert %}}

## 4 Archive

On the **Archive** tab, you can see a list of all stories that belong in completed Sprints. 

You can search for a specific archived story through its **ID**, **Title**, **Description**, or the **Sprint's Name**. The search can be performed with both partial and exact matches.  

By clicking a story's ID, you can see the [story details](#story-details).

## 5 Read More

* [Buzz](/developerportal/general/buzz/)
* [Team](/developerportal/general/team/)
* [Team Server](/developerportal/general/team-server/)
* [Feedback](/developerportal/general/feedback/)
