---
title: "Epics"
url: /developerportal/collaborate/epics/
category: "Collaboration"
weight: 3
description: "Describes how to use Epics for your app development."
tags: ["Epics", "Sprint", "Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Epics enables your team members to collaborate efficiently during the app development process. It supports the Scrum workflow and Kanban workflow.

{{% alert color="info" %}}
You can currently use Epics as well as [Stories](/developerportal/collaborate/stories/). However, we recommend you not to use both of them at the same time for one app project, since that will make data migration difficult later.
{{% /alert %}}

### 1.1 Getting Your Team Access to an App Project in Epics

Only a Scrum Master can give the team access to an app project in Epics. To do so, the Scrum Master should open the app in the [Developer Portal](https://sprintr.home.mendix.com/link/myapps), then go to the [General Settings](/developerportal/collaborate/general-settings/) page, then go to the [Project Management](/developerportal/collaborate/general-settings/#project-management) tab, and click **Switch to Epics**, as shown in the screenshot below. This gives everyone in the team access to this app project in Epics.

{{< figure src="/attachments/developerportal/collaborate/epics/project-management.png" >}}

To give the team access to another app project in Epics, the Scrum Master needs to repeat this procedure.

### 1.2 Opening an App Project in Epics

Once you have access to an app project in Epics, you can open it there. To do so, open the app in the [Developer Portal](https://sprintr.home.mendix.com/link/myapps), and then go to the [Stories](/developerportal/collaborate/stories/) page. You will see a notification on the top of the page, as shown in the screenshot below. Click **Check it Out** to open the app project.

{{< figure src="/attachments/developerportal/collaborate/epics/epics-check-it-out.png" >}}

After you open an app project in Epics, you can easily switch to other app projects that you have access to. To do so, click the name of the current app project on the upper-left corner, and then select a different app project from the drop-down list.

{{< figure src="/attachments/developerportal/collaborate/epics/switch-app.png" >}}

## 2 Pages in Epics

Epics has the following pages: **Board**, **Planning**, **Epics**, and **Archive**. Some pages show look different based on whether you work in the Scrum workflow or the Kanban workflow.

### 2.1 The Board Page {#board}

If you work in the Scrum workflow, the **Board** page gives an overview of your current sprint. At the top of the page, it shows the name of the sprint, when it ends, how many stories and points it has. Below, it shows the goal of the current sprint.

{{< figure src="/attachments/developerportal/collaborate/epics/sprint-goal.png" >}}

If you work in the Kanban workflow, the **Board** page gives an overview of all the stories that your team is currently working on. At the top of the page, it shows the number of stories, and the total points.

{{< figure src="/attachments/developerportal/collaborate/epics/stories-story-points.png" >}}

You can create an epic or a story by clicking **Create Epic** or **Create Story** on the upper-right corner of the page. In the search box below, you can search stories based on story titles.

{{< figure src="/attachments/developerportal/collaborate/epics/create-epic-story-search.png" >}}

#### 2.1.1 Swimlanes

On the **Board** page, the stories are grouped into different swimlanes based on their status. The two default swimlanes are **To Do** and **Done**. 

You can add more custom swimlanes, such as **In Progress**, **In Review**, **Testing**, etc. To add a new swimlane, hover over the border of the swimlane where the new swimlane should be added, and click the vertical line when it appears. Enter the name of the swimlane and click **✓** to save the changes.

{{< figure src="/attachments/developerportal/collaborate/epics/add-swimlane.png" >}}

To rename, [archive](#archive), or delete a swimlane, click the *...* icon on the upper-right corner of the swimlane, and then select the corresponding option.

{{< figure src="/attachments/developerportal/collaborate/epics/rename-archive-delete-swimlane.png" >}}

{{% alert color="info" %}}You cannot delete a swimlane when it has stories in it, or archive a swimlane when it has no stories.<br/>You cannot delete the two default swimlanes: **To Do** and **Done**.{{% /alert %}}

To move a swimlane, drag it to the new location.

#### 2.1.2 Story Cards

On the **Board** page, each card represents a story.

{{< figure src="/attachments/developerportal/collaborate/epics/story-card.png" >}}

A story card shows the following information:

* Unique story ID, which consists of a prefix and a number (①)
* Story title (②)
* Epic related to the story (③)
* Tags (④)
*  Whether the story is about a feature or a bug – if it is about a feature, it shows a green star icon; and if it is about a bug, it shows a red bug icon (⑤)

    {{< figure src="/attachments/developerportal/collaborate/epics/feature-bug.png" >}}

* Number of comments (⑥)
* Number of tasks (⑦)
* Points of the story (⑧)
* To whom the story is assigned (⑨)

To [archive](#archive) or delete a story, click the **...** icon on the upper-right corner of the card, and then select the corresponding option.

{{< figure src="/attachments/developerportal/collaborate/epics/archive-delete-story.png" >}}

To move a card within a swimlane or across swimlanes, drag the card to the new location.

Clicking the story card opens the [story details page](#story-details).

#### 2.1.3 Story Details Page {#story-details}

When you click the card of a story, the story details page opens.

On the upper-right corner, there are three icons. You can click these icons to clone, [archive](#archive), and delete the story. You need to confirm your action after you click each icon.

{{< figure src="/attachments/developerportal/collaborate/epics/story-details-page-icons.png" >}}

{{% alert color="info" %}}The clone icon allows you to start creating a copy of the story – the title will be pre-filled as *Copy - [original story title]*, and all the other details will be pre-filled with the values from the original story.{{% /alert %}}

The story details page shows the following items:

*  **Description** – This is the description of the story.

    * You can edit the description of the story by clicking **Edit Description** and make changes in the WYSIWYG editor. The editor supports different text formats, including code blocks.
    * You can link a story in the editor. To do so, type #, then start typing the story title, and then select the right story from the list.
    * You can tag a person in the editor. To do so, type *@*, then start typing the person's name, and then select the right person from the list.
* **Assign to** – You can assign the story to anybody who can access the app project in the Developer Portal.
* **Status** – You can set the status to any of the category/swimlane names on the **Board** page and the **Planning** page.
* **Tasks** – You can add a task by clicking **+ Add Task**. You can move the tasks by dragging them around.
* **Story Type** – You can set the story type to **Bug** or **Feature**. 
* **Linked Epic** – You can link the story to an epic.
* **Tags** – You can add or remove tags. To create a new tag, type the new tag in the text box and then click **Create new "[tag name]"**.
* **Story Points** – You can set story points to an integer.
* **Attached Files** – You can add attached files by clicking **+** below **Attached Files**. 
* **Comment** – You can type your comment in the text box and then click **Post Your Comments** to save and post the comment.

{{% alert color="info" %}}To save any change on the story details page, click **Save Story** at the bottom of the page.{{% /alert %}}

### 2.2 The Planning Page

On the **Planning** page, you can switch between a Scrum workflow and a Kanban workflow by clicking the settings icon on the upper-right side of the screen. Which workflow you use also decides how the **Planning** page and the [Board](#board) page look.

{{< figure src="/attachments/developerportal/collaborate/epics/switch-scrum-kanban.png" >}}

If you use the Scrum workflow, the **Planning** page shows the following categories: **Active Sprint**, **Next Sprint**, **Refinement**, and **Backlog**. The goal for the current sprint is shown on the top of all categories. When there is no active sprint, you can start a new sprint by clicking **Start Sprint** on the upper-right corner. Once the sprint is created, all the items in the **Next Sprint** are moved to the **Active Sprint** automatically. You can end a sprint by clicking **End Sprint** on the upper-right corner. When you end a sprint, the system shows you how many stories are completed in this sprint, all the completed stories are [archived](#archive) automatically, and you will decide where the unfinished stories should go. 

If you use the Kanban workflow, the **Planning** page shows the following categories: **To Do**, **Refinement**, and **Backlog**. 

No matter which workflow you use, you can always create an epic or a story by clicking **Create Epic** or **Create Story** on the upper-right corner of the page. In the search box below, you can search stories based on the story title.

Each row in a category shows the following information about a story:

* Whether the story is a bug or a feature
* Unique story ID
* Story title
* Linked epic
* Tags
* Number of comments
* Number of the tasks
* Story points
* To whom the story is assigned

{{< figure src="/attachments/developerportal/collaborate/epics/story-kanban.png" >}}

To [archive](#archive) or delete a story, click the *...* icon at the end of the row, and then select the corresponding option.

{{< figure src="/attachments/developerportal/collaborate/epics/archive-delete-story-kanban.png" >}}

To move a story, drag the row to a different category.

Clicking a row opens the [story details](#story-details) page.

### 2.3 The Epics Page

The **Epics** page shows all the epics for your current app project. 

Each row shows the following information about an epic:

* Unique epic ID, which consists of a prefix and a number
* Epic title
* To whom the epic is assigned
* How many stories are completed for that epic

{{< figure src="/attachments/developerportal/collaborate/epics/epic.png" >}}

You can create an epic by clicking **Create Epic** on the upper-right corner of the page.

Clicking a row opens the [epic details](#epic-details) page.

#### 2.3.1 Epic Details Page {#epic-details}

If you click the row of an epic, the epic details page opens. 

On the upper-right corner, there is an ellipsis (**...**) icon. You can click this icon to delete the epic. You need to confirm your action after you click the icon.

{{< figure src="/attachments/developerportal/collaborate/epics/epic-details-page-ellipsis.png" >}}

The epic details page shows the following items:

*  **Objective** – This is the description of the epic.

    * You can edit the objective of the epic by clicking **Edit Objective** and make changes in the WYSIWYG editor. The editor supports different text formats, including code blocks.
    * You can link a story in the editor. To do so, type #, then start typing the story title, and then select the right story from the list.
    * You can tag a person in the editor. To do so, type *@*, then start typing the person's name, and then select the right person from the list.

* **Assign to** – You can assign the epic to anybody who can access the app project in the Developer Portal.
* **Tags** – You can add or remove tags. To create a new tag, type the new tag in the text box and then click **Create new "[tag name]"**.
* **Attachments** – You can add attachments by clicking **+** below **Attachments**. 
* **Archived Stories** – This lists all the archived stories that are linked to this epic.
* **Stories** – This lists all the open stories that are linked to this epic.
* **Comment** – You can type your comment in the text box and then click **Post Your Comments** to save and post the comment.

{{% alert color="info" %}}To save any change on the epic details page, click **Save Epic** at the bottom of the page.{{% /alert %}}

### 2.4 The Archive Page {#archive}

Every time you complete a sprint, all the stories that are **Done** are archived automatically. You can also archive a story and a swimlane manually by doing the following:

* Clicking the **...** icon on the upper-right corner of the story card or the swimlane on the **Board** page, and then selecting **Archive**
* Clicking the **...** icon at the end of a row on the **Planning** page, and then selecting **Archive**

All the archived stories are shown on the **Archive** page. You can see the following information of an archived story:

* Unique story ID – Clicking it shows the story details.
* Story title – Clicking it shows the story details.
* Which sprint the story belongs to – Clicking it shows the [archived sprint details](#archived-sprint-details).
* Linked epic – Clicking it shows the epic details.
* Archive date and time – Clicking it shows the story details.

{{< figure src="/attachments/developerportal/collaborate/epics/archive.png" >}}

You can search stories based on story titles in the search box.

#### 2.4.1 Archived Sprint Details Page {#archived-sprint-details}

When you click the sprint icon in a row of an archived story on the **Archived** page, you can see the following details of this sprint:

* Sprint name
* When this sprint was archived
* When this sprint started and ended
* Sprint goal
* Whether the sprint goal was reached
* Who archived the sprint, shown under **Archived by**
* Stories that were completed, shown under **Completed Stories**
* Stories that were not completed, shown under **Incomplete Stories**
